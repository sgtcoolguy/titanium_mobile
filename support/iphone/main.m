//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <TitaniumKit/TiApp.h>
#import <TitaniumKit/TiLogServer.h>
#import <TitaniumKit/TiSharedConfig.h>
#import <UIKit/UIKit.h>

#ifndef TI_LOG_SERVER_PORT
#define TI_LOG_SERVER_PORT 10571
#endif

NSString *const TI_APPLICATION_DEPLOYTYPE = @"__DEPLOYTYPE__";
NSString *const TI_APPLICATION_ID = @"__APP_ID__";
NSString *const TI_APPLICATION_PUBLISHER = @"__APP_PUBLISHER__";
NSString *const TI_APPLICATION_URL = @"__APP_URL__";
NSString *const TI_APPLICATION_NAME = @"__APP_NAME__";
NSString *const TI_APPLICATION_VERSION = @"__APP_VERSION__";
NSString *const TI_APPLICATION_DESCRIPTION = @"__APP_DESCRIPTION__";
NSString *const TI_APPLICATION_COPYRIGHT = @"__APP_COPYRIGHT__";
NSString *const TI_APPLICATION_GUID = @"__APP_GUID__";
BOOL const TI_APPLICATION_ANALYTICS = __APP_ANALYTICS__;
BOOL const TI_APPLICATION_SHOW_ERROR_CONTROLLER = __SHOW_ERROR_CONTROLLER__;
NSString *const TI_APPLICATION_BUILD_TYPE = @"__APP_DEPLOY_TYPE__";

#ifdef TARGET_IPHONE_SIMULATOR
NSString *const TI_APPLICATION_RESOURCE_DIR = @"__APP_RESOURCE_DIR__";
#endif

int main(int argc, char *argv[])
{
  [[TiSharedConfig defaultConfig] setApplicationName:TI_APPLICATION_NAME];
  [[TiSharedConfig defaultConfig] setApplicationID:TI_APPLICATION_ID];
  [[TiSharedConfig defaultConfig] setApplicationVersion:TI_APPLICATION_VERSION];
  [[TiSharedConfig defaultConfig] setApplicationDeployType:TI_APPLICATION_DEPLOYTYPE];
  [[TiSharedConfig defaultConfig] setApplicationGUID:TI_APPLICATION_GUID];
  [[TiSharedConfig defaultConfig] setApplicationResourcesDirectory:TI_APPLICATION_RESOURCE_DIR];
  [[TiSharedConfig defaultConfig] setApplicationBuildType:TI_APPLICATION_BUILD_TYPE];
  [[TiSharedConfig defaultConfig] setAnalyticsEnabled:TI_APPLICATION_ANALYTICS];
  [[TiSharedConfig defaultConfig] setShowErrorController:TI_APPLICATION_SHOW_ERROR_CONTROLLER];

  [[TiLogServer defaultLogServer] setPort:TI_LOG_SERVER_PORT];

  @autoreleasepool {
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([TiApp class]));
  }
}
