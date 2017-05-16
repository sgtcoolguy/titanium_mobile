/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#include "InspectorClient.h"
#include "InspectorFrontend.h"

#define TAG "InspectorClient"

namespace titanium {
  InspectorClient::InspectorClient(v8::Local<v8::Context> context) {
    isolate_ = context->GetIsolate();
    channel_.reset(new InspectorFrontend(context));
    context_.Reset(isolate_, context);
  }

  void InspectorClient::connect() {
    inspector_ = v8_inspector::V8Inspector::create(isolate_, this);
    session_ =
        inspector_->connect(1, channel_.get(), v8_inspector::StringView());
    // context->SetAlignedPointerInEmbedderData(kInspectorClientIndex, this);
    inspector_->contextCreated(v8_inspector::V8ContextInfo(
        context_.Get(isolate_), kContextGroupId, v8_inspector::StringView()));
  }

  void InspectorClient::sendMessage(v8_inspector::StringView message_view) {
    session_->dispatchProtocolMessage(message_view);
  }
}
