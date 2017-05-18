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

namespace titanium {
class InspectorClient : public v8_inspector::V8InspectorClient {
 public:
  InspectorClient(v8::Local<v8::Context> context);
  void connect();
  void sendMessage(const v8_inspector::StringView&);

 private:
  static const int kContextGroupId = 1;

  std::unique_ptr<v8_inspector::V8Inspector> inspector_;
  std::unique_ptr<v8_inspector::V8InspectorSession> session_;
  std::unique_ptr<v8_inspector::V8Inspector::Channel> channel_;
  v8::Global<v8::Context> context_;
  v8::Isolate* isolate_;
};
}
#endif /* INSPECTORCLIENT_H_ */
