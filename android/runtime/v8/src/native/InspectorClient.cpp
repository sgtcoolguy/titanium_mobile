/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#include <libplatform/libplatform.h>
#include "InspectorClient.h"
#include "InspectorFrontend.h"
#include "AndroidUtil.h"
#include "V8Util.h"
#include "V8Runtime.h"
#include <cassert>

#define TAG "InspectorClient"

namespace titanium {
  void InterruptCallback(v8::Isolate*, void* client) {
    LOGE(TAG, "Received Interrupt Callback, asking to dispatch queued messages");
    static_cast<InspectorClient*>(client)->DispatchMessages();
  }

  class DispatchOnInspectorBackendTask : public v8::Task {
   public:
    explicit DispatchOnInspectorBackendTask(InspectorClient* client) : client_(client) {}

    void Run() override {
      LOGE(TAG, "<-- DispatchOnInspectorBackendTask#Run()");
      client_->DispatchMessages();
    }

   private:
    InspectorClient* client_;
  };

  InspectorClient::InspectorClient(v8::Local<v8::Context> context, v8::Platform* platform) :
      platform_(platform),
      terminated_(false),
      running_nested_loop_(false),
      dispatching_messages_(false) {
    LOGE(TAG, "Creating inspector...");
    // FIXME Replace reference to V8Runtime::v8_isolate with isolate_
    isolate_ = V8Runtime::v8_isolate;
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

  void InspectorClient::DispatchMessages() {
    // This function can be reentered if there was an incoming message while
    // V8 was processing another inspector request (e.g. if the user is
    // evaluating a long-running JS code snippet). This can happen only at
    // specific points (e.g. the lines that call inspector_ methods)
    if (dispatching_messages_)
      return;
    dispatching_messages_ = true;
    std::vector<std::unique_ptr<v8_inspector::StringBuffer>> messages;
    do {
      LOGE(TAG, "<-- Looping through message queue to send...");
      messages.clear();
      incoming_message_queue_.swap(messages);
      for (const auto& buffer : messages) {
        v8_inspector::StringView message = buffer->string();
        sendMessage(message);
      }
    } while (!messages.empty());
    LOGE(TAG, "<-- Done with incoming command/message queue.");
    dispatching_messages_ = false;
  }

  // FIXME Add incoming and outgoing message queues that we process in separate threads?
  // Have JSDebugger.java send messages down off main thread, then fire off a Task to actually send it via #dispatchProtocolMessage on foreground task

  void InspectorClient::PostIncomingMessage(const v8_inspector::StringView& message) {
    // Add to incoming queue
    // Schedule a task to call #sendMessage on foreground thread
    // TODO Request an interrupt on the isolate
    // TODO notify the condition/mutex that we received a message
    LOGE(TAG, "<-- incoming queue");
    bool wasEmpty = incoming_message_queue_.empty();
    incoming_message_queue_.push_back(v8_inspector::StringBuffer::create(message));
    if (wasEmpty) {
      LOGE(TAG, "<-- Scheduling task to dispatch to v8-inspector");
      v8::Isolate* isolate = V8Runtime::v8_isolate;
      platform_->CallOnForegroundThread(isolate,
                                        new DispatchOnInspectorBackendTask(this));
      isolate->RequestInterrupt(InterruptCallback, this);
    //   CHECK_EQ(0, uv_async_send(&main_thread_req_));
    }
    // NotifyMessageReceived();
  }

  // Here's where we block until we receive a message from debugger -> V8 inspector
  // void InspectorClient::WaitForFrontendMessage() {
  //   Mutex::ScopedLock scoped_lock(state_lock_);
  //   if (incoming_message_queue_.empty())
  //     incoming_message_cond_.Wait(scoped_lock);
  // }

  // Here's where we unblock the wait above when we've received a message from debugger
  // void InspectorClient::NotifyMessageReceived() {
  //   Mutex::ScopedLock scoped_lock(state_lock_);
  //   incoming_message_cond_.Broadcast(scoped_lock);
  // }

  void InspectorClient::sendMessage(const v8_inspector::StringView& message_view) {
    assert(session_ != nullptr);

    LOGE(TAG, "<-- sending command to v8-inspector session");
    {
      v8::TryCatch tryCatch(V8Runtime::v8_isolate);
      session_->dispatchProtocolMessage(message_view);
      if (tryCatch.HasCaught()) {
        V8Util::fatalException(V8Runtime::v8_isolate, tryCatch, true);
      }
    }

    LOGE(TAG, "<-- sent!");
  }

  void InspectorClient::runMessageLoopOnPause(int context_group_id) {
    assert(channel_ != nullptr);
    if (running_nested_loop_)
      return;
    LOGE(TAG, "== Running message loop on pause");
    terminated_ = false;
    running_nested_loop_ = true;
    while (!terminated_ /*&& channel_->waitForFrontendMessage()*/) {
      while (v8::platform::PumpMessageLoop(platform_, V8Runtime::v8_isolate)) {
        LOGE(TAG, "== Pumped MessageLoop");
      }
    }
    LOGE(TAG, "== Exited message loop on pause");
    terminated_ = false;
    running_nested_loop_ = false;
  }

  void InspectorClient::quitMessageLoopOnPause() {
    LOGE(TAG, "== quitMessageLoopOnPause");
    terminated_ = true;
  }
}
