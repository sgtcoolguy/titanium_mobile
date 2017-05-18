/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
package org.appcelerator.kroll.runtime.v8;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.atomic.AtomicBoolean;

import org.appcelerator.kroll.KrollApplication;
import org.appcelerator.kroll.KrollExternalModule;
import org.appcelerator.kroll.KrollProxySupport;
import org.appcelerator.kroll.KrollRuntime;
import org.appcelerator.kroll.common.KrollSourceCodeProvider;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.kroll.common.TiDeployData;

import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.os.MessageQueue.IdleHandler;

public final class V8Runtime extends KrollRuntime implements Handler.Callback
{
	private static final String TAG = "KrollV8Runtime";
	private static final String NAME = "v8";
	private static final int MAX_V8_IDLE_INTERVAL = 30 * 1000; // ms

	private boolean libLoaded = false;

	private HashMap<String, Class<? extends KrollExternalModule>> externalModules = new HashMap<String, Class<? extends KrollExternalModule>>();
	private static HashMap<String, KrollSourceCodeProvider>
		externalCommonJsModules = new HashMap<String, KrollSourceCodeProvider>();

	private ArrayList<String> loadedLibs = new ArrayList<String>();
	private AtomicBoolean shouldGC = new AtomicBoolean(false);
	private long lastV8Idle;

	public static boolean isEmulator() {
		return "goldfish".equals(Build.HARDWARE)
			|| Build.FINGERPRINT.startsWith("generic")
			|| Build.FINGERPRINT.startsWith("unknown")
			|| Build.MODEL.contains("google_sdk")
			|| Build.MODEL.contains("Emulator")
			|| Build.MODEL.contains("Android SDK built for x86")
			|| Build.MANUFACTURER.contains("Genymotion")
			|| (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
			|| "google_sdk".equals(Build.PRODUCT);
	}

	@Override
	public void initRuntime()
	{
		boolean useGlobalRefs = true;
		KrollApplication application = getKrollApplication();
		TiDeployData deployData = application.getDeployData();

		if (isEmulator()) {
			Log.d(TAG, "Emulator detected, storing global references in a global Map", Log.DEBUG_MODE);
			useGlobalRefs = false;
		}

		if (!libLoaded) {
			System.loadLibrary("c++_shared");
			System.loadLibrary("kroll-v8");

			// TIMOB-16810 Add a delay to allow symbols to load before calling nativeInit (For HTC One Devices)
			List<String> devices = Arrays.asList(
					"htc one",
					"optimus l5"
					);
			for (String model : devices) {
				if (Build.MODEL.toLowerCase(Locale.ENGLISH).contains(model)) {
					try {
						Thread.sleep(50);
					} catch (InterruptedException e) {
					}
				}
			}

			libLoaded = true;
		}

		boolean DBG = true;
		String deployType = application.getDeployType();
		if (deployType.equals("production")) {
			DBG = false;
		}

		// Instantiate a debugger here and pass it along to C++ code
		JSDebugger jsDebugger = null;
		if (deployData.getDebuggerPort() >= 0) {
			Log.w(TAG, "Create Java side of JSDebugger");
			jsDebugger = new JSDebugger(deployData.getDebuggerPort(), application.getSDKVersion());
		}

		nativeInit(useGlobalRefs, jsDebugger, DBG, deployData.isProfilerEnabled());

		if (jsDebugger != null) {
			Log.w(TAG, "Starting Java side of JSDebugger");
			jsDebugger.start();
		} else if (deployData.isProfilerEnabled()) {
			try {
				Class<?> clazz = Class.forName("org.appcelerator.titanium.profiler.TiProfiler");
				Method method = clazz.getMethod("startProfiler", new Class[0]);
				method.invoke(clazz, new Object[0]);
			} catch (Exception e) {
				Log.e(TAG, "Unable to load profiler.", e);
			}
		}

		loadExternalModules();
		loadExternalCommonJsModules();

		Looper.myQueue().addIdleHandler(new IdleHandler() {
			@Override
			public boolean queueIdle()
			{
				boolean willGC = shouldGC.getAndSet(false);
				if (!willGC) {
					// This means we haven't specifically been told to do
					// a V8 GC (which is just a call to nativeIdle()), but nevertheless
					// if more than the recommended time has passed since the last
					// call to nativeIdle(), we'll want to do it anyways.
					willGC = ((System.currentTimeMillis() - lastV8Idle) > MAX_V8_IDLE_INTERVAL);
				}
				if (willGC) {
					boolean gcWantsMore = !nativeIdle();
					lastV8Idle = System.currentTimeMillis();
					if (gcWantsMore) {
						shouldGC.set(true);
					}
				}
				return true;
			}
		});
	}

	private void loadExternalModules()
	{
		for (String libName : externalModules.keySet()) {
			Log.d(TAG, "Bootstrapping module: " + libName, Log.DEBUG_MODE);

			if (!loadedLibs.contains(libName)) {
				System.loadLibrary(libName);
				loadedLibs.add(libName);
			}

			Class<? extends KrollExternalModule> moduleClass = externalModules.get(libName);

			try {
				KrollExternalModule module = moduleClass.newInstance();
				module.bootstrap();

			} catch (IllegalAccessException e) {
				Log.e(TAG, "Error bootstrapping external module: " + e.getMessage(), e);

			} catch (InstantiationException e) {
				Log.e(TAG, "Error bootstrapping external module: " + e.getMessage(), e);
			}
		}
	}

	private void loadExternalCommonJsModules()
	{
		for (String moduleName : externalCommonJsModules.keySet()) {
			nativeAddExternalCommonJsModule(moduleName,externalCommonJsModules.get(moduleName));
		}
	}

	@Override
	public void doDispose()
	{
		TiDeployData deployData = getKrollApplication().getDeployData();
		if (deployData.isProfilerEnabled()) {
			try {
				Class<?> clazz = Class.forName("org.appcelerator.titanium.profiler.TiProfiler");
				Method method = clazz.getMethod("stopProfiler", new Class[0]);
				method.invoke(clazz, new Object[0]);
			} catch (Exception e) {
				Log.e(TAG, "Unable to stop profiler.", e);
			}
		}
		nativeDispose();
	}

	@Override
	public void doRunModule(String source, String filename, KrollProxySupport activityProxy)
	{
		nativeRunModule(source, filename, activityProxy);
	}

	@Override
	public Object doEvalString(String source, String filename)
	{
		return nativeEvalString(source, filename);
	}

	@Override
	public void initObject(KrollProxySupport proxy)
	{
		V8Object.nativeInitObject(proxy.getClass(), proxy);
	}

	@Override
	public String getRuntimeName()
	{
		return NAME;
	}

	public void addExternalModule(String libName, Class<? extends KrollExternalModule> moduleClass)
	{
		externalModules.put(libName, moduleClass);
	}

	public static void addExternalCommonJsModule(String id, Class<? extends KrollSourceCodeProvider> jsSourceProvider)
	{
		KrollSourceCodeProvider providerInstance;
		try {
			providerInstance = jsSourceProvider.newInstance();
			externalCommonJsModules.put(id, providerInstance);
		} catch (Exception e) {
			Log.e(TAG, "Cannot load external CommonJS module " + id, e);
		}
	}

	@Override
	public void setGCFlag()
	{
		shouldGC.set(true);
	}

	// JNI method prototypes
	private native void nativeInit(boolean useGlobalRefs, JSDebugger jsDebugger, boolean DBG, boolean profilerEnabled);
	private native void nativeRunModule(String source, String filename, KrollProxySupport activityProxy);
	private native Object nativeEvalString(String source, String filename);
	private native boolean nativeIdle();
	private native void nativeDispose();
	private native void nativeAddExternalCommonJsModule(String moduleName, KrollSourceCodeProvider sourceProvider);
}
