/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
// #include <assert.h>
#include "InspectorFrontend.h"
#include "JSDebugger.h"

#define TAG "InspectorClient"

namespace titanium {
  InspectorFrontend::InspectorFrontend(v8::Local<v8::Context> context) {
    isolate_ = context->GetIsolate();
    context_.Reset(isolate_, context);
  }

  void InspectorFrontend::Send(const v8_inspector::StringView& string) {
    int length = static_cast<int>(string.length());
    // DCHECK(length < v8::String::kMaxLength);
    v8::Local<v8::String> message =
        (string.is8Bit()
             ? v8::String::NewFromOneByte(
                   isolate_,
                   reinterpret_cast<const uint8_t*>(string.characters8()),
                   v8::NewStringType::kNormal, length)
             : v8::String::NewFromTwoByte(
                   isolate_,
                   reinterpret_cast<const uint16_t*>(string.characters16()),
                   v8::NewStringType::kNormal, length))
            .ToLocalChecked();

  	JSDebugger::receive(message);
  }
}
