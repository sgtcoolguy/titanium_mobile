/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

package ti.modules.hyperloop;

import java.io.IOException;
import java.lang.reflect.Modifier;
import java.util.HashMap;
import java.util.Map;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.titanium.TiContext;

import com.android.dx.stock.ProxyBuilder;

import android.content.Context;

@Kroll.module
public class HyperloopModule extends KrollModule {

    private static final String TAG = "Ti.Hyperloop";

    public HyperloopModule() {
        super();
    }

    public HyperloopModule(TiContext tiContext) {
        this();
    }

    @SuppressWarnings("unchecked")
    @Kroll.method
    public BaseProxy createProxy(Object[] args) {
        KrollDict options = argsToDict(args);

        // Verify the class arg
        String className = options.getString("class");
        if (className == null) {
            Log.e(TAG, "Missing 'class' value");
            return null;
        }

        // TODO Maintain a Class Proxy cache!
        try {
            Class<?> c = Class.forName(className);
            if (c == null) {
                Log.e(TAG, "Class '" + className + "' not found");
                return null;
            }

            Object[] arguments = (Object[]) options.get("args");

            // Are we trying to create an anonymous instance of an interface?
            if (c.isInterface()) {
                // TODO Treat interface as class proxy too?
                HashMap<String, Object> overrides = (HashMap<String, Object>) arguments[0];
                return new InterfaceProxy(c, overrides);
            }

            // Always create the proxy around the class, then we can cache
            // these, and avoid duplicating logic for generating instances
            ClassProxy cp = new ClassProxy(c); // FIXME Cache the class proxies!
            boolean alloc = options.optBoolean("alloc", true);
            if (!alloc) {
                return cp;
            }

            // Then defer to generate an instance
            return cp.newInstance(arguments);
        } catch (ClassNotFoundException e) {
            Log.e(TAG, "Class '" + className + "' not found", e);
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    @Kroll.method
    public BaseProxy extend(Object[] args) {
        KrollDict dict = argsToDict(args);

        // This is the fully qualified name of the class we're extending
        String className = dict.getString("class");
        if (className == null) {
            Log.e(TAG, "'class' value cannot be null.");
            return null;
        }

        // This is a JS object containing method names as keys, functions as
        // values
        // the functions are the implementation of overrides of the method.
        final HashMap<String, Object> overrides = (HashMap<String, Object>) dict.get("overrides");
        if (overrides == null) {
            Log.e(TAG, "'overrides' value cannot be null");
            return null;
        }

        // Load the class
        Class<?> c;
        try {
            c = Class.forName(className);
            if (c == null) {
                Log.e(TAG, "Class '" + className + "' not found.");
                return null;
            }
        } catch (ClassNotFoundException e1) {
            Log.e(TAG, "Class '" + className + "' not found.");
            return null;
        }
        int modifiers = c.getModifiers();

        // We can't extend final classes
        if (Modifier.isFinal(modifiers)) {
            Log.e(TAG, "Cannot extend class '" + className + "' with final modifier.");
            return null;
        }

        // We can't extend private/package protected classes
        if (!Modifier.isPublic(modifiers) && !Modifier.isProtected(modifiers)) {
            Log.e(TAG, "Cannot extend class '" + className
                    + "' with private or package-level visibility.");
            return null;
        }
        // TODO Allow extending an interface like this, even though we have
        // another entry point?

        // TODO Verify that overrides values are all KrollFunctions?
        // TODO Validate that we're not trying to override final methods?
        // TODO Validate we're not trying to override static methods?

        try {
            // Ok, now we generate a dynamic class that extends the class passed
            // in. We then wrap the class with a proxy.
            Class<?> generated = ProxyBuilder.forClass(c)
                    .dexCache(getActivity().getApplicationContext().getDir("dx",
                            Context.MODE_PRIVATE))
                    .buildProxyClass();

            return new DynamicSubclassProxy(generated, className, overrides);
        } catch (IOException e) {
            Log.e(TAG, "Failed to generate dynamic subclass of '" + className + "': "
                    + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public String getApiName() {
        return "Hyperloop";
    }

    @SuppressWarnings("unchecked")
    static KrollDict argsToDict(Object[] args) {
        KrollDict dict;
        if (args[0] instanceof KrollDict) {
            dict = (KrollDict) args[0];
        } else {
            dict = new KrollDict((Map<? extends String, ? extends Object>) args[0]);
        }
        return dict;
    }
}
