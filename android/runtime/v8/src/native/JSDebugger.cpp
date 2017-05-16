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

#include "org_appcelerator_kroll_runtime_v8_JSDebugger.h"

#define TAG "JSDebugger"

namespace titanium {

JSDebugger::JSDebugger()
{
}

void JSDebugger::init(JNIEnv *env, v8::Isolate *isolate, jobject jsDebugger)
{
	// TODO Create a subclass of v8_inspector::V8Inspector::Channel
	// - override sendResponse and sendNotification to pass messages from inspector to debugger (outward bound messages)
	// - equivalent to MessageHandler below
	// TODO Create a subclass of v8_inspector::V8InspectorClient
	// - This is where we send the commands from debugger to inspector via code like:
	// int length = message->Length();
  // std::unique_ptr<uint16_t[]> buffer(new uint16_t[length]);
  // message->Write(buffer.get(), 0, length);
  // v8_inspector::StringView message_view(buffer.get(), length);
  // session->dispatchProtocolMessage(message_view);
  // - equivalent to sendCommand below
	//
	// References:
	// https://medium.com/@hyperandroid/v8-inspector-from-an-embedder-standpoint-7f9c0472e2b7
	// https://github.com/v8/v8/wiki/Debugging-over-the-V8-Inspector-API
	isolate__ = isolate;

	debugger__ = env->NewGlobalRef(jsDebugger);

	debuggerClass__ = env->FindClass("org/appcelerator/kroll/runtime/v8/JSDebugger");
	assert(debuggerClass__ != nullptr);

	handleMessage__ = env->GetMethodID(debuggerClass__, "handleMessage", "(Ljava/lang/String;)V");
	assert(handleMessage__ != nullptr);
}

void JSDebugger::enable()
{
	v8::Local<v8::Context> context = isolate__->GetCurrentContext();
	client__ = new InspectorClient(context);
	client__->connect();
	enabled__ = true;
}

void JSDebugger::disable()
{
	enabled__ = false;
	client__ = nullptr;
}

void JSDebugger::debugBreak()
{
	// v8::Debug::DebugBreak(isolate__);
	// TODO Send break command ourselves!
}

bool JSDebugger::isDebuggerActive()
{
	return isActive__;
}

void JSDebugger::processDebugMessages()
{
	// no-op
}

void JSDebugger::sendCommand(JNIEnv *env, jbyteArray command, jint length)
{
	auto buf = new jbyte[length];
	env->GetByteArrayRegion(command, 0, length, buf);

	int len = length / sizeof(uint16_t);
	v8_inspector::StringView message_view(reinterpret_cast<uint16_t*>(buf), len);
	client__->sendMessage(message_view);

	delete[] buf;

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

	jstring s = TypeConverter::jsStringToJavaString(env, message);
	env->CallVoidMethod(debugger__, handleMessage__, s);
	env->DeleteLocalRef(s);
}

bool JSDebugger::enabled__ = false;
v8::Isolate* JSDebugger::isolate__ = nullptr;
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
 * Signature: ([BI)V
 */
JNIEXPORT void JNICALL Java_org_appcelerator_kroll_runtime_v8_JSDebugger_nativeSendCommand(JNIEnv *env, jobject self, jbyteArray command, jint length)
{
	JSDebugger::sendCommand(env, command, length);
	// TODO Wrap in try/catch and throw up to Java?
}

#ifdef __cplusplus
}
#endif
