/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#ifndef INSPECTORCLIENT_H_
#define INSPECTORCLIENT_H_

#include <v8.h>
#include <v8-inspector.h>
#include <v8-platform.h>

namespace titanium {
class InspectorClient : public v8_inspector::V8InspectorClient {
 public:
  InspectorClient(v8::Local<v8::Context>, v8::Platform*);
  void connect();
  void PostIncomingMessage(const v8_inspector::StringView&);
  void DispatchMessages();

 private:
  static const int kContextGroupId = 1;
  const int kInspectorClientIndex = v8::Context::kDebugIdIndex + 1;

  void runMessageLoopOnPause(int context_group_id) override;
  void quitMessageLoopOnPause() override;
  void sendMessage(const v8_inspector::StringView&);

  std::unique_ptr<v8_inspector::V8Inspector> inspector_;
  std::unique_ptr<v8_inspector::V8InspectorSession> session_;
  std::unique_ptr<v8_inspector::V8Inspector::Channel> channel_;
  v8::Isolate* isolate_;
  v8::Platform* platform_;
  bool terminated_;
  bool running_nested_loop_;
  bool dispatching_messages_;
  std::vector<std::unique_ptr<v8_inspector::StringBuffer>> incoming_message_queue_;
};
}
#endif /* INSPECTORCLIENT_H_ */
