/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#ifndef INSPECTORFRONTEND_H_
#define INSPECTORFRONTEND_H_

#include <v8.h>
#include <v8-inspector.h>
#include "AndroidUtil.h"

namespace titanium {
class InspectorFrontend : public v8_inspector::V8Inspector::Channel {
public:
  InspectorFrontend(v8::Local<v8::Context> context);
  virtual ~InspectorFrontend() = default;

 private:
  void sendResponse(
      int callId,
      std::unique_ptr<v8_inspector::StringBuffer> message) override {
    LOGE("InspectorFrontend", "sendResponse");
    Send(message->string());
  }
  void sendNotification(
      std::unique_ptr<v8_inspector::StringBuffer> message) override {
    LOGE("InspectorFrontend", "sendNotification");
    Send(message->string());
  }
  void flushProtocolNotifications() override {}

  void Send(const v8_inspector::StringView& string);

  v8::Isolate* isolate_;
};
}

#endif /* INSPECTORFRONTEND_H_ */
