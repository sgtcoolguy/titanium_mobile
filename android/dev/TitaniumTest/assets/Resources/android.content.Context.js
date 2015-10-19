/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.Context
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.Context
 * @extends java.lang.Object  * @constructor
 * @see {@link http://developer.android.com/reference/android/content/Context.html}
 **/
android.content.Context = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.Context') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.Context',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.Context.prototype = Object.create(SuperClass.prototype);
android.content.Context.prototype.constructor = android.content.Context;

android.content.Context.className = "android.content.Context";
android.content.Context.prototype.className = "android.content.Context";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#DISPLAY_SERVICE}
 */
android.content.Context.DISPLAY_SERVICE = "display";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#FINGERPRINT_SERVICE}
 */
android.content.Context.FINGERPRINT_SERVICE = "fingerprint";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#INPUT_METHOD_SERVICE}
 */
android.content.Context.INPUT_METHOD_SERVICE = "input_method";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#UI_MODE_SERVICE}
 */
android.content.Context.UI_MODE_SERVICE = "uimode";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#TELECOM_SERVICE}
 */
android.content.Context.TELECOM_SERVICE = "telecom";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MODE_APPEND}
 */
android.content.Context.MODE_APPEND = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#DEVICE_POLICY_SERVICE}
 */
android.content.Context.DEVICE_POLICY_SERVICE = "device_policy";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#ACCESSIBILITY_SERVICE}
 */
android.content.Context.ACCESSIBILITY_SERVICE = "accessibility";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CONTEXT_RESTRICTED}
 */
android.content.Context.CONTEXT_RESTRICTED = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#APP_OPS_SERVICE}
 */
android.content.Context.APP_OPS_SERVICE = "appops";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BIND_ALLOW_OOM_MANAGEMENT}
 */
android.content.Context.BIND_ALLOW_OOM_MANAGEMENT = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CAMERA_SERVICE}
 */
android.content.Context.CAMERA_SERVICE = "camera";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MODE_WORLD_WRITEABLE}
 */
android.content.Context.MODE_WORLD_WRITEABLE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MODE_WORLD_READABLE}
 */
android.content.Context.MODE_WORLD_READABLE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#ACCOUNT_SERVICE}
 */
android.content.Context.ACCOUNT_SERVICE = "account";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#AUDIO_SERVICE}
 */
android.content.Context.AUDIO_SERVICE = "audio";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CONSUMER_IR_SERVICE}
 */
android.content.Context.CONSUMER_IR_SERVICE = "consumer_ir";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#WALLPAPER_SERVICE}
 */
android.content.Context.WALLPAPER_SERVICE = "wallpaper";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#SENSOR_SERVICE}
 */
android.content.Context.SENSOR_SERVICE = "sensor";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BIND_WAIVE_PRIORITY}
 */
android.content.Context.BIND_WAIVE_PRIORITY = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#LAUNCHER_APPS_SERVICE}
 */
android.content.Context.LAUNCHER_APPS_SERVICE = "launcherapps";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#WIFI_SERVICE}
 */
android.content.Context.WIFI_SERVICE = "wifi";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CARRIER_CONFIG_SERVICE}
 */
android.content.Context.CARRIER_CONFIG_SERVICE = "carrier_config";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#LAYOUT_INFLATER_SERVICE}
 */
android.content.Context.LAYOUT_INFLATER_SERVICE = "layout_inflater";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#NFC_SERVICE}
 */
android.content.Context.NFC_SERVICE = "nfc";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#TELEPHONY_SUBSCRIPTION_SERVICE}
 */
android.content.Context.TELEPHONY_SUBSCRIPTION_SERVICE = "telephony_subscription_service";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#USAGE_STATS_SERVICE}
 */
android.content.Context.USAGE_STATS_SERVICE = "usagestats";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#JOB_SCHEDULER_SERVICE}
 */
android.content.Context.JOB_SCHEDULER_SERVICE = "jobscheduler";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BIND_DEBUG_UNBIND}
 */
android.content.Context.BIND_DEBUG_UNBIND = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#DROPBOX_SERVICE}
 */
android.content.Context.DROPBOX_SERVICE = "dropbox";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#USB_SERVICE}
 */
android.content.Context.USB_SERVICE = "usb";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#WIFI_P2P_SERVICE}
 */
android.content.Context.WIFI_P2P_SERVICE = "wifip2p";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CONTEXT_IGNORE_SECURITY}
 */
android.content.Context.CONTEXT_IGNORE_SECURITY = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MIDI_SERVICE}
 */
android.content.Context.MIDI_SERVICE = "midi";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MODE_ENABLE_WRITE_AHEAD_LOGGING}
 */
android.content.Context.MODE_ENABLE_WRITE_AHEAD_LOGGING = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#NSD_SERVICE}
 */
android.content.Context.NSD_SERVICE = "servicediscovery";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BIND_NOT_FOREGROUND}
 */
android.content.Context.BIND_NOT_FOREGROUND = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MODE_MULTI_PROCESS}
 */
android.content.Context.MODE_MULTI_PROCESS = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MEDIA_SESSION_SERVICE}
 */
android.content.Context.MEDIA_SESSION_SERVICE = "media_session";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#TV_INPUT_SERVICE}
 */
android.content.Context.TV_INPUT_SERVICE = "tv_input";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BIND_ABOVE_CLIENT}
 */
android.content.Context.BIND_ABOVE_CLIENT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#TEXT_SERVICES_MANAGER_SERVICE}
 */
android.content.Context.TEXT_SERVICES_MANAGER_SERVICE = "textservices";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#ALARM_SERVICE}
 */
android.content.Context.ALARM_SERVICE = "alarm";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#NETWORK_STATS_SERVICE}
 */
android.content.Context.NETWORK_STATS_SERVICE = "netstats";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BIND_AUTO_CREATE}
 */
android.content.Context.BIND_AUTO_CREATE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#KEYGUARD_SERVICE}
 */
android.content.Context.KEYGUARD_SERVICE = "keyguard";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CONTEXT_INCLUDE_CODE}
 */
android.content.Context.CONTEXT_INCLUDE_CODE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#SEARCH_SERVICE}
 */
android.content.Context.SEARCH_SERVICE = "search";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BIND_IMPORTANT}
 */
android.content.Context.BIND_IMPORTANT = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MODE_PRIVATE}
 */
android.content.Context.MODE_PRIVATE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#USER_SERVICE}
 */
android.content.Context.USER_SERVICE = "user";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#APPWIDGET_SERVICE}
 */
android.content.Context.APPWIDGET_SERVICE = "appwidget";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#NOTIFICATION_SERVICE}
 */
android.content.Context.NOTIFICATION_SERVICE = "notification";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#DOWNLOAD_SERVICE}
 */
android.content.Context.DOWNLOAD_SERVICE = "download";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#PRINT_SERVICE}
 */
android.content.Context.PRINT_SERVICE = "print";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#WINDOW_SERVICE}
 */
android.content.Context.WINDOW_SERVICE = "window";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#ACTIVITY_SERVICE}
 */
android.content.Context.ACTIVITY_SERVICE = "activity";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CONNECTIVITY_SERVICE}
 */
android.content.Context.CONNECTIVITY_SERVICE = "connectivity";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#POWER_SERVICE}
 */
android.content.Context.POWER_SERVICE = "power";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#INPUT_SERVICE}
 */
android.content.Context.INPUT_SERVICE = "input";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MEDIA_ROUTER_SERVICE}
 */
android.content.Context.MEDIA_ROUTER_SERVICE = "media_router";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CLIPBOARD_SERVICE}
 */
android.content.Context.CLIPBOARD_SERVICE = "clipboard";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#CAPTIONING_SERVICE}
 */
android.content.Context.CAPTIONING_SERVICE = "captioning";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#TELEPHONY_SERVICE}
 */
android.content.Context.TELEPHONY_SERVICE = "phone";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BLUETOOTH_SERVICE}
 */
android.content.Context.BLUETOOTH_SERVICE = "bluetooth";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#MEDIA_PROJECTION_SERVICE}
 */
android.content.Context.MEDIA_PROJECTION_SERVICE = "media_projection";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#STORAGE_SERVICE}
 */
android.content.Context.STORAGE_SERVICE = "storage";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#LOCATION_SERVICE}
 */
android.content.Context.LOCATION_SERVICE = "location";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#RESTRICTIONS_SERVICE}
 */
android.content.Context.RESTRICTIONS_SERVICE = "restrictions";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BIND_ADJUST_WITH_ACTIVITY}
 */
android.content.Context.BIND_ADJUST_WITH_ACTIVITY = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#BATTERY_SERVICE}
 */
android.content.Context.BATTERY_SERVICE = "batterymanager";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Context.html#VIBRATOR_SERVICE}
 */
android.content.Context.VIBRATOR_SERVICE = "vibrator";

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function sendOrderedBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendOrderedBroadcast(android.content.Intent, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendOrderedBroadcast(android.content.Intent, java.lang.String, android.content.BroadcastReceiver, android.os.Handler, int, java.lang.String, android.os.Bundle)}
 **/
android.content.Context.prototype.sendOrderedBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'sendOrderedBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getDrawable(int)}
 **/
android.content.Context.prototype.getDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalFilesDirs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getExternalFilesDirs(java.lang.String)}
 **/
android.content.Context.prototype.getExternalFilesDirs = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getExternalFilesDirs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceCallingPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#enforceCallingPermission(java.lang.String, java.lang.String)}
 **/
android.content.Context.prototype.enforceCallingPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'enforceCallingPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getObbDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getObbDir()}
 **/
android.content.Context.prototype.getObbDir = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getObbDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendBroadcastAsUser(android.content.Intent, android.os.UserHandle)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendBroadcastAsUser(android.content.Intent, android.os.UserHandle, java.lang.String)}
 **/
android.content.Context.prototype.sendBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'sendBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalCacheDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getExternalCacheDir()}
 **/
android.content.Context.prototype.getExternalCacheDir = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getExternalCacheDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deleteDatabase
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#deleteDatabase(java.lang.String)}
 **/
android.content.Context.prototype.deleteDatabase = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'deleteDatabase',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkSelfPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#checkSelfPermission(java.lang.String)}
 **/
android.content.Context.prototype.checkSelfPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkSelfPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceCallingOrSelfPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#enforceCallingOrSelfPermission(java.lang.String, java.lang.String)}
 **/
android.content.Context.prototype.enforceCallingOrSelfPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'enforceCallingOrSelfPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFileInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#openFileInput(java.lang.String)}
 **/
android.content.Context.prototype.openFileInput = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'openFileInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeStickyBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#removeStickyBroadcastAsUser(android.content.Intent, android.os.UserHandle)}
 **/
android.content.Context.prototype.removeStickyBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'removeStickyBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#checkPermission(java.lang.String, int, int)}
 **/
android.content.Context.prototype.checkPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#enforceUriPermission(android.net.Uri, int, int, int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#enforceUriPermission(android.net.Uri, java.lang.String, java.lang.String, int, int, int, java.lang.String)}
 **/
android.content.Context.prototype.enforceUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'enforceUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentResolver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getContentResolver()}
 **/
android.content.Context.prototype.getContentResolver = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getContentResolver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageResourcePath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getPackageResourcePath()}
 **/
android.content.Context.prototype.getPackageResourcePath = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getPackageResourcePath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function databaseList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#databaseList()}
 **/
android.content.Context.prototype.databaseList = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'databaseList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFilesDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getFilesDir()}
 **/
android.content.Context.prototype.getFilesDir = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getFilesDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendStickyOrderedBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendStickyOrderedBroadcastAsUser(android.content.Intent, android.os.UserHandle, android.content.BroadcastReceiver, android.os.Handler, int, java.lang.String, android.os.Bundle)}
 **/
android.content.Context.prototype.sendStickyOrderedBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'sendStickyOrderedBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fileList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#fileList()}
 **/
android.content.Context.prototype.fileList = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'fileList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalMediaDirs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getExternalMediaDirs()}
 **/
android.content.Context.prototype.getExternalMediaDirs = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getExternalMediaDirs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getWallpaper()}
 **/
android.content.Context.prototype.getWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDatabasePath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getDatabasePath(java.lang.String)}
 **/
android.content.Context.prototype.getDatabasePath = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getDatabasePath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceCallingOrSelfUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#enforceCallingOrSelfUriPermission(android.net.Uri, int, java.lang.String)}
 **/
android.content.Context.prototype.enforceCallingOrSelfUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'enforceCallingOrSelfUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getTheme()}
 **/
android.content.Context.prototype.getTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCacheDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getCacheDir()}
 **/
android.content.Context.prototype.getCacheDir = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getCacheDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterComponentCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#unregisterComponentCallbacks(android.content.ComponentCallbacks)}
 **/
android.content.Context.prototype.unregisterComponentCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'unregisterComponentCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalCacheDirs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getExternalCacheDirs()}
 **/
android.content.Context.prototype.getExternalCacheDirs = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getExternalCacheDirs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getText(int)}
 **/
android.content.Context.prototype.getText = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startIntentSender
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#startIntentSender(android.content.IntentSender, android.content.Intent, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#startIntentSender(android.content.IntentSender, android.content.Intent, int, int, int, android.os.Bundle)}
 **/
android.content.Context.prototype.startIntentSender = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'startIntentSender',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkCallingOrSelfPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#checkCallingOrSelfPermission(java.lang.String)}
 **/
android.content.Context.prototype.checkCallingOrSelfPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkCallingOrSelfPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemServiceName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getSystemServiceName(java.lang.Class)}
 **/
android.content.Context.prototype.getSystemServiceName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getSystemServiceName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCodeCacheDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getCodeCacheDir()}
 **/
android.content.Context.prototype.getCodeCacheDir = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getCodeCacheDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openOrCreateDatabase
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#openOrCreateDatabase(java.lang.String, int, android.database.sqlite.SQLiteDatabase$CursorFactory)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#openOrCreateDatabase(java.lang.String, int, android.database.sqlite.SQLiteDatabase$CursorFactory, android.database.DatabaseErrorHandler)}
 **/
android.content.Context.prototype.openOrCreateDatabase = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'openOrCreateDatabase',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileStreamPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getFileStreamPath(java.lang.String)}
 **/
android.content.Context.prototype.getFileStreamPath = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getFileStreamPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#startActivities(android.content.Intent[])}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#startActivities(android.content.Intent[], android.os.Bundle)}
 **/
android.content.Context.prototype.startActivities = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'startActivities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainStyledAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#obtainStyledAttributes(int[])}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#obtainStyledAttributes(int, int[])}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#obtainStyledAttributes(android.util.AttributeSet, int[])}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#obtainStyledAttributes(android.util.AttributeSet, int[], int, int)}
 **/
android.content.Context.prototype.obtainStyledAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'obtainStyledAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWallpaperDesiredMinimumHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getWallpaperDesiredMinimumHeight()}
 **/
android.content.Context.prototype.getWallpaperDesiredMinimumHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getWallpaperDesiredMinimumHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#startService(android.content.Intent)}
 **/
android.content.Context.prototype.startService = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'startService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColorStateList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getColorStateList(int)}
 **/
android.content.Context.prototype.getColorStateList = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getColorStateList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerReceiver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter, java.lang.String, android.os.Handler)}
 **/
android.content.Context.prototype.registerReceiver = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'registerReceiver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#setTheme(int)}
 **/
android.content.Context.prototype.setTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'setTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getPackageManager()}
 **/
android.content.Context.prototype.getPackageManager = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getPackageManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendOrderedBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendOrderedBroadcastAsUser(android.content.Intent, android.os.UserHandle, java.lang.String, android.content.BroadcastReceiver, android.os.Handler, int, java.lang.String, android.os.Bundle)}
 **/
android.content.Context.prototype.sendOrderedBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'sendOrderedBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getPackageName()}
 **/
android.content.Context.prototype.getPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bindService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#bindService(android.content.Intent, android.content.ServiceConnection, int)}
 **/
android.content.Context.prototype.bindService = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'bindService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRestricted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#isRestricted()}
 **/
android.content.Context.prototype.isRestricted = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isRestricted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getObbDirs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getObbDirs()}
 **/
android.content.Context.prototype.getObbDirs = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getObbDirs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceCallingUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#enforceCallingUriPermission(android.net.Uri, int, java.lang.String)}
 **/
android.content.Context.prototype.enforceCallingUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'enforceCallingUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkCallingUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#checkCallingUriPermission(android.net.Uri, int)}
 **/
android.content.Context.prototype.checkCallingUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkCallingUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendBroadcast(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendBroadcast(android.content.Intent, java.lang.String)}
 **/
android.content.Context.prototype.sendBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'sendBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getSystemService(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getSystemService(java.lang.Class)}
 **/
android.content.Context.prototype.getSystemService = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getSystemService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unbindService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#unbindService(android.content.ServiceConnection)}
 **/
android.content.Context.prototype.unbindService = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'unbindService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeStickyBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#removeStickyBroadcast(android.content.Intent)}
 **/
android.content.Context.prototype.removeStickyBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'removeStickyBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkCallingOrSelfUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#checkCallingOrSelfUriPermission(android.net.Uri, int)}
 **/
android.content.Context.prototype.checkCallingOrSelfUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkCallingOrSelfUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageCodePath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getPackageCodePath()}
 **/
android.content.Context.prototype.getPackageCodePath = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getPackageCodePath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#peekWallpaper()}
 **/
android.content.Context.prototype.peekWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'peekWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getClassLoader()}
 **/
android.content.Context.prototype.getClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createConfigurationContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#createConfigurationContext(android.content.res.Configuration)}
 **/
android.content.Context.prototype.createConfigurationContext = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'createConfigurationContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFileOutput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#openFileOutput(java.lang.String, int)}
 **/
android.content.Context.prototype.openFileOutput = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'openFileOutput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#startActivity(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#startActivity(android.content.Intent, android.os.Bundle)}
 **/
android.content.Context.prototype.startActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'startActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createPackageContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#createPackageContext(java.lang.String, int)}
 **/
android.content.Context.prototype.createPackageContext = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'createPackageContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getApplicationContext()}
 **/
android.content.Context.prototype.getApplicationContext = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getApplicationContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendStickyBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendStickyBroadcast(android.content.Intent)}
 **/
android.content.Context.prototype.sendStickyBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'sendStickyBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getResources()}
 **/
android.content.Context.prototype.getResources = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforcePermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#enforcePermission(java.lang.String, int, int, java.lang.String)}
 **/
android.content.Context.prototype.enforcePermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'enforcePermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNoBackupFilesDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getNoBackupFilesDir()}
 **/
android.content.Context.prototype.getNoBackupFilesDir = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getNoBackupFilesDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSharedPreferences
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getSharedPreferences(java.lang.String, int)}
 **/
android.content.Context.prototype.getSharedPreferences = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getSharedPreferences',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function grantUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#grantUriPermission(java.lang.String, android.net.Uri, int)}
 **/
android.content.Context.prototype.grantUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'grantUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#checkUriPermission(android.net.Uri, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#checkUriPermission(android.net.Uri, java.lang.String, java.lang.String, int, int, int)}
 **/
android.content.Context.prototype.checkUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMainLooper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getMainLooper()}
 **/
android.content.Context.prototype.getMainLooper = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getMainLooper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAssets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getAssets()}
 **/
android.content.Context.prototype.getAssets = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getAssets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getDir(java.lang.String, int)}
 **/
android.content.Context.prototype.getDir = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWallpaperDesiredMinimumWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getWallpaperDesiredMinimumWidth()}
 **/
android.content.Context.prototype.getWallpaperDesiredMinimumWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getWallpaperDesiredMinimumWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startInstrumentation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#startInstrumentation(android.content.ComponentName, java.lang.String, android.os.Bundle)}
 **/
android.content.Context.prototype.startInstrumentation = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'startInstrumentation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deleteFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#deleteFile(java.lang.String)}
 **/
android.content.Context.prototype.deleteFile = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'deleteFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#clearWallpaper()}
 **/
android.content.Context.prototype.clearWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'clearWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalFilesDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getExternalFilesDir(java.lang.String)}
 **/
android.content.Context.prototype.getExternalFilesDir = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getExternalFilesDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendStickyBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendStickyBroadcastAsUser(android.content.Intent, android.os.UserHandle)}
 **/
android.content.Context.prototype.sendStickyBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'sendStickyBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function revokeUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#revokeUriPermission(android.net.Uri, int)}
 **/
android.content.Context.prototype.revokeUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'revokeUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#setWallpaper(android.graphics.Bitmap)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#setWallpaper(java.io.InputStream)}
 **/
android.content.Context.prototype.setWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'setWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getColor(int)}
 **/
android.content.Context.prototype.getColor = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getString(int)}
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getString(int, java.lang.Object[])}
 **/
android.content.Context.prototype.getString = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#getApplicationInfo()}
 **/
android.content.Context.prototype.getApplicationInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getApplicationInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendStickyOrderedBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#sendStickyOrderedBroadcast(android.content.Intent, android.content.BroadcastReceiver, android.os.Handler, int, java.lang.String, android.os.Bundle)}
 **/
android.content.Context.prototype.sendStickyOrderedBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'sendStickyOrderedBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkCallingPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#checkCallingPermission(java.lang.String)}
 **/
android.content.Context.prototype.checkCallingPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkCallingPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterReceiver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#unregisterReceiver(android.content.BroadcastReceiver)}
 **/
android.content.Context.prototype.unregisterReceiver = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'unregisterReceiver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stopService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#stopService(android.content.Intent)}
 **/
android.content.Context.prototype.stopService = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'stopService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createDisplayContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#createDisplayContext(android.view.Display)}
 **/
android.content.Context.prototype.createDisplayContext = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'createDisplayContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerComponentCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Context.html#registerComponentCallbacks(android.content.ComponentCallbacks)}
 **/
android.content.Context.prototype.registerComponentCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'registerComponentCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Context') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.Context;
