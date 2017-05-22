/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2016-2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#include <assert.h>
#include <sstream>
#include "JSDebugger.h"
#include "JNIUtil.h"
#include "TypeConverter.h"
#include "InspectorClient.h"
#include "V8Runtime.h"
#include "V8Util.h"

#include "org_appcelerator_kroll_runtime_v8_JSDebugger.h"

#define TAG "JSDebugger"

namespace titanium {

JSDebugger::JSDebugger()
{
}

void JSDebugger::init(JNIEnv *env, jobject jsDebugger, v8::Local<v8::Context> context)
{
	debugger__ = env->NewGlobalRef(jsDebugger);

	debuggerClass__ = env->FindClass("org/appcelerator/kroll/runtime/v8/JSDebugger");
	assert(debuggerClass__ != nullptr);

	handleMessage__ = env->GetMethodID(debuggerClass__, "handleMessage", "(Ljava/lang/String;)V");
	assert(handleMessage__ != nullptr);

	client__ = new InspectorClient(context);
}

void JSDebugger::enable()
{
	if (enabled__) return;
	LOGE(TAG, "Enabling debugger");
	client__->connect();
	enabled__ = true;
	LOGE(TAG, "Debugger enabled");
}

void JSDebugger::disable()
{
	enabled__ = false;
	client__ = nullptr; // TODO disconnect?
}

void JSDebugger::debugBreak()
{
	v8::Debug::DebugBreak(V8Runtime::v8_isolate);
	// TODO Send break command ourselves?
}

bool JSDebugger::isDebuggerActive()
{
	return isActive__;
}

void JSDebugger::processDebugMessages()
{
	// no-op
}

void JSDebugger::sendCommand(JNIEnv *env, jstring command)
{
	LOGE(TAG, "Sending command to v8 inspector");
	v8::HandleScope scope(V8Runtime::v8_isolate);
	v8::Local<v8::Context> context = V8Runtime::GlobalContext();

	v8::Local<v8::Value> stringValue = TypeConverter::javaStringToJsString(V8Runtime::v8_isolate, env, command);
	v8::Local<v8::String> message = stringValue->ToString(context).ToLocalChecked();
	LOGE(TAG, *titanium::Utf8Value(message));
	client__->sendMessage(message);

	// const jsize length = env->GetStringLength(command);
	// const jchar* chars = env->GetStringChars(command, NULL);
	//
	// v8_inspector::StringView message_view(chars, length);
	// client__->sendMessage(message_view);
	//
	// env->ReleaseStringChars(command, chars);

	isActive__ = true;
}

void JSDebugger::receive(v8::Local<v8::String> message)
{
	if (debugger__ == nullptr)
	{
		return;
	}

	JNIEnv *env = JNIUtil::getJNIEnv();
	ASSERT(env != NULL);

	LOGE(TAG, *titanium::Utf8Value(message));
	jstring s = TypeConverter::jsStringToJavaString(env, message);
	env->CallVoidMethod(debugger__, handleMessage__, s);
	env->DeleteLocalRef(s);
}

bool JSDebugger::enabled__ = false;
jobject JSDebugger::debugger__ = nullptr;
jclass JSDebugger::debuggerClass__ = nullptr;
jmethodID JSDebugger::handleMessage__ = nullptr;
InspectorClient* JSDebugger::client__ = nullptr;
bool JSDebugger::isActive__ = false;

} // namespace titanium

#ifdef __cplusplus
extern "C" {
#endif

using namespace titanium;

/*
 * Class:     org_appcelerator_kroll_runtime_v8_JSDebugger
 * Method:    nativeProcessDebugMessages
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_appcelerator_kroll_runtime_v8_JSDebugger_nativeProcessDebugMessages(JNIEnv *env, jobject self)
{
	JSDebugger::processDebugMessages();
	// TODO Wrap in try/catch and throw up to Java?
}

/*
 * Class:     org_appcelerator_kroll_runtime_v8_JSDebugger
 * Method:    nativeEnable
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_appcelerator_kroll_runtime_v8_JSDebugger_nativeEnable(JNIEnv *env, jobject self)
{
	JSDebugger::enable();
	// TODO Wrap in try/catch and throw up to Java?
}

/*
 * Class:     org_appcelerator_kroll_runtime_v8_JSDebugger
 * Method:    nativeDisable
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_appcelerator_kroll_runtime_v8_JSDebugger_nativeDisable(JNIEnv *env, jobject self)
{
	JSDebugger::disable();
	// TODO Wrap in try/catch and throw up to Java?
}

/*
 * Class:     org_appcelerator_kroll_runtime_v8_JSDebugger
 * Method:    nativeDebugBreak
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_appcelerator_kroll_runtime_v8_JSDebugger_nativeDebugBreak(JNIEnv *env, jobject self)
{
	JSDebugger::debugBreak();
	// TODO Wrap in try/catch and throw up to Java?
}

/*
 * Class:     org_appcelerator_kroll_runtime_v8_JSDebugger
 * Method:    nativeIsDebuggerActive
 * Signature: ()Z
 */
JNIEXPORT jboolean JNICALL Java_org_appcelerator_kroll_runtime_v8_JSDebugger_nativeIsDebuggerActive(JNIEnv *env, jobject self)
{
	return (jboolean) JSDebugger::isDebuggerActive();
	// TODO Wrap in try/catch and throw up to Java?
}

/*
 * Class:     org_appcelerator_kroll_runtime_v8_JSDebugger
 * Method:    nativeSendCommand
 * Signature: (Ljava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_org_appcelerator_kroll_runtime_v8_JSDebugger_nativeSendCommand(JNIEnv *env, jobject self, jstring command)
{
	JSDebugger::sendCommand(env, command);
	// TODO Wrap in try/catch and throw up to Java?
}

#ifdef __cplusplus
}
#endif
