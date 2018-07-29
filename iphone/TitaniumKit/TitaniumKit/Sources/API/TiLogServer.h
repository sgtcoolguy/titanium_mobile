/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-present by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#ifndef DISABLE_TI_LOG_SERVER

@import Foundation;

@interface TiLogServer : NSObject {
}
+ (void)log:(NSString *)message;
+ (void)startServer;
+ (void)stopServer;
@end

#endif
