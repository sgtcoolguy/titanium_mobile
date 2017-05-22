/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#include "InspectorClient.h"
#include "InspectorFrontend.h"
#include "AndroidUtil.h"
#include "V8Util.h"
#include "V8Runtime.h"
#include <cassert>

#define TAG "InspectorClient"

namespace titanium {
  InspectorClient::InspectorClient(v8::Local<v8::Context> context) :
    platform_(platform),
    terminated_(false),
    running_nested_loop_(false) {
    LOGE(TAG, "Creating inspector...");
    inspector_ = v8_inspector::V8Inspector::create(V8Runtime::v8_isolate, this);
    titanium::TwoByteValue contextName(STRING_NEW(V8Runtime::v8_isolate, "Titanium Main Context"));
    inspector_->contextCreated(v8_inspector::V8ContextInfo(
        context, kContextGroupId, v8_inspector::StringView(*contextName, contextName.length())));
  }

  void InspectorClient::connect() {
    LOGE(TAG, "Connecting to inspector...");
    v8::HandleScope scope(V8Runtime::v8_isolate);
    v8::Local<v8::Context> context = V8Runtime::GlobalContext();
    channel_.reset(new InspectorFrontend(context));
    session_ =
        inspector_->connect(1, channel_.get(), v8_inspector::StringView());
  }

  void InspectorClient::sendMessage(v8::Local<v8::String> message) {
    assert(session_ != nullptr);

    LOGE(TAG, "dispatching protocol message to inspector session");
    titanium::TwoByteValue buffer(message);
    v8_inspector::StringView message_view(*buffer, buffer.length());
    session_->dispatchProtocolMessage(message_view);
    LOGE(TAG, "dispatched");
  }

  // FIXME Do we need to implement these to avoid the app auto-resuming as soon as a breakpoint is hit?
  // void runMessageLoopOnPause(int context_group_id) override {
  //   CHECK_NE(channel_, nullptr);
  //   if (running_nested_loop_)
  //     return;
  //   terminated_ = false;
  //   running_nested_loop_ = true;
  //   while (!terminated_ && channel_->waitForFrontendMessage()) {
  //     while (v8::platform::PumpMessageLoop(platform_, V8Runtime::v8_isolate))
  //       {}
  //   }
  //   terminated_ = false;
  //   running_nested_loop_ = false;
  // }
  //
  // void quitMessageLoopOnPause() override {
  //   terminated_ = true;
  // }
}
