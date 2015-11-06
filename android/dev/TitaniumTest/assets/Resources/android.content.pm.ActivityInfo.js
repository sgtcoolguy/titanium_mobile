/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ActivityInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};

/**
 * @class android.content.pm.ActivityInfo
 * @extends android.content.pm.ComponentInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html}
 **/
android.content.pm.ActivityInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.ActivityInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.ActivityInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.ComponentInfo');
android.content.pm.ActivityInfo.prototype = Object.create(SuperClass.prototype);
android.content.pm.ActivityInfo.prototype.constructor = android.content.pm.ActivityInfo;

android.content.pm.ActivityInfo.className = "android.content.pm.ActivityInfo";
android.content.pm.ActivityInfo.prototype.className = "android.content.pm.ActivityInfo";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#DOCUMENT_LAUNCH_NEVER}
 */
android.content.pm.ActivityInfo.DOCUMENT_LAUNCH_NEVER = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_LOCALE}
 */
android.content.pm.ActivityInfo.CONFIG_LOCALE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#LAUNCH_MULTIPLE}
 */
android.content.pm.ActivityInfo.LAUNCH_MULTIPLE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#LAUNCH_SINGLE_INSTANCE}
 */
android.content.pm.ActivityInfo.LAUNCH_SINGLE_INSTANCE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_SENSOR_LANDSCAPE}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_PORTRAIT}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#PERSIST_ACROSS_REBOOTS}
 */
android.content.pm.ActivityInfo.PERSIST_ACROSS_REBOOTS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_SENSOR}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_BEHIND}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_BEHIND = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_STATE_NOT_NEEDED}
 */
android.content.pm.ActivityInfo.FLAG_STATE_NOT_NEEDED = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_NOSENSOR}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_NOSENSOR = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_FINISH_ON_CLOSE_SYSTEM_DIALOGS}
 */
android.content.pm.ActivityInfo.FLAG_FINISH_ON_CLOSE_SYSTEM_DIALOGS = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_USER}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_USER = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_ALWAYS_RETAIN_TASK_STATE}
 */
android.content.pm.ActivityInfo.FLAG_ALWAYS_RETAIN_TASK_STATE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#DOCUMENT_LAUNCH_INTO_EXISTING}
 */
android.content.pm.ActivityInfo.DOCUMENT_LAUNCH_INTO_EXISTING = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#UIOPTION_SPLIT_ACTION_BAR_WHEN_NARROW}
 */
android.content.pm.ActivityInfo.UIOPTION_SPLIT_ACTION_BAR_WHEN_NARROW = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#PERSIST_ROOT_ONLY}
 */
android.content.pm.ActivityInfo.PERSIST_ROOT_ONLY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_ORIENTATION}
 */
android.content.pm.ActivityInfo.CONFIG_ORIENTATION = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#DOCUMENT_LAUNCH_NONE}
 */
android.content.pm.ActivityInfo.DOCUMENT_LAUNCH_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_FULL_SENSOR}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_FULL_SENSOR = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_SCREEN_LAYOUT}
 */
android.content.pm.ActivityInfo.CONFIG_SCREEN_LAYOUT = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_SENSOR_PORTRAIT}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_IMMERSIVE}
 */
android.content.pm.ActivityInfo.FLAG_IMMERSIVE = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_RELINQUISH_TASK_IDENTITY}
 */
android.content.pm.ActivityInfo.FLAG_RELINQUISH_TASK_IDENTITY = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#DOCUMENT_LAUNCH_ALWAYS}
 */
android.content.pm.ActivityInfo.DOCUMENT_LAUNCH_ALWAYS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_DENSITY}
 */
android.content.pm.ActivityInfo.CONFIG_DENSITY = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_AUTO_REMOVE_FROM_RECENTS}
 */
android.content.pm.ActivityInfo.FLAG_AUTO_REMOVE_FROM_RECENTS = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#LAUNCH_SINGLE_TOP}
 */
android.content.pm.ActivityInfo.LAUNCH_SINGLE_TOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_CLEAR_TASK_ON_LAUNCH}
 */
android.content.pm.ActivityInfo.FLAG_CLEAR_TASK_ON_LAUNCH = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_KEYBOARD}
 */
android.content.pm.ActivityInfo.CONFIG_KEYBOARD = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_FULL_USER}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_FULL_USER = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_LOCKED}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_LOCKED = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_USER_PORTRAIT}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_KEYBOARD_HIDDEN}
 */
android.content.pm.ActivityInfo.CONFIG_KEYBOARD_HIDDEN = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_FONT_SCALE}
 */
android.content.pm.ActivityInfo.CONFIG_FONT_SCALE = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_MNC}
 */
android.content.pm.ActivityInfo.CONFIG_MNC = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_REVERSE_LANDSCAPE}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_UNSPECIFIED}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_MULTIPROCESS}
 */
android.content.pm.ActivityInfo.FLAG_MULTIPROCESS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_USER_LANDSCAPE}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_USER_LANDSCAPE = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_HARDWARE_ACCELERATED}
 */
android.content.pm.ActivityInfo.FLAG_HARDWARE_ACCELERATED = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_SMALLEST_SCREEN_SIZE}
 */
android.content.pm.ActivityInfo.CONFIG_SMALLEST_SCREEN_SIZE = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_REVERSE_PORTRAIT}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_NAVIGATION}
 */
android.content.pm.ActivityInfo.CONFIG_NAVIGATION = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_LAYOUT_DIRECTION}
 */
android.content.pm.ActivityInfo.CONFIG_LAYOUT_DIRECTION = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_RESUME_WHILE_PAUSING}
 */
android.content.pm.ActivityInfo.FLAG_RESUME_WHILE_PAUSING = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#PERSIST_NEVER}
 */
android.content.pm.ActivityInfo.PERSIST_NEVER = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_EXCLUDE_FROM_RECENTS}
 */
android.content.pm.ActivityInfo.FLAG_EXCLUDE_FROM_RECENTS = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_SCREEN_SIZE}
 */
android.content.pm.ActivityInfo.CONFIG_SCREEN_SIZE = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_ALLOW_TASK_REPARENTING}
 */
android.content.pm.ActivityInfo.FLAG_ALLOW_TASK_REPARENTING = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_FINISH_ON_TASK_LAUNCH}
 */
android.content.pm.ActivityInfo.FLAG_FINISH_ON_TASK_LAUNCH = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_TOUCHSCREEN}
 */
android.content.pm.ActivityInfo.CONFIG_TOUCHSCREEN = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_NO_HISTORY}
 */
android.content.pm.ActivityInfo.FLAG_NO_HISTORY = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_UI_MODE}
 */
android.content.pm.ActivityInfo.CONFIG_UI_MODE = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_LANDSCAPE}
 */
android.content.pm.ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_SINGLE_USER}
 */
android.content.pm.ActivityInfo.FLAG_SINGLE_USER = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#LAUNCH_SINGLE_TASK}
 */
android.content.pm.ActivityInfo.LAUNCH_SINGLE_TASK = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_MCC}
 */
android.content.pm.ActivityInfo.CONFIG_MCC = 1;

// Static fields
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CREATOR
Object.defineProperty(android.content.pm.ActivityInfo, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#configChanges
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'configChanges', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'configChanges'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'configChanges',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#uiOptions
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'uiOptions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'uiOptions'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'uiOptions',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#maxRecents
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'maxRecents', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'maxRecents'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'maxRecents',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#persistableMode
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'persistableMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'persistableMode'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'persistableMode',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#targetActivity
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'targetActivity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'targetActivity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'targetActivity',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#documentLaunchMode
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'documentLaunchMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'documentLaunchMode'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'documentLaunchMode',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#parentActivityName
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'parentActivityName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'parentActivityName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'parentActivityName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#flags
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'flags'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'flags',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#screenOrientation
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'screenOrientation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'screenOrientation'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'screenOrientation',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#theme
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'theme', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'theme'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'theme',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#permission
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'permission', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'permission'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'permission',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#softInputMode
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'softInputMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'softInputMode'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'softInputMode',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#launchMode
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'launchMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'launchMode'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'launchMode',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#taskAffinity
Object.defineProperty(android.content.pm.ActivityInfo.prototype, 'taskAffinity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'taskAffinity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new android.content.pm.ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'taskAffinity',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#toString()}
 **/
android.content.pm.ActivityInfo.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new android.content.pm.ActivityInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
android.content.pm.ActivityInfo.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new android.content.pm.ActivityInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#describeContents()}
 **/
android.content.pm.ActivityInfo.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new android.content.pm.ActivityInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.ActivityInfo.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new android.content.pm.ActivityInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getThemeResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#getThemeResource()}
 **/
android.content.pm.ActivityInfo.prototype.getThemeResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getThemeResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new android.content.pm.ActivityInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.ActivityInfo;
