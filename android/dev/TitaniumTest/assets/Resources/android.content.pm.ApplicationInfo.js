/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ApplicationInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};

/**
 * @class android.content.pm.ApplicationInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html}
 **/
android.content.pm.ApplicationInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.pm.ApplicationInfo') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.ApplicationInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
android.content.pm.ApplicationInfo.prototype = Object.create(SuperClass.prototype);
android.content.pm.ApplicationInfo.prototype.constructor = android.content.pm.ApplicationInfo;

android.content.pm.ApplicationInfo.className = "android.content.pm.ApplicationInfo";
android.content.pm.ApplicationInfo.prototype.className = "android.content.pm.ApplicationInfo";

// class property
Object.defineProperty(android.content.pm.ApplicationInfo, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.pm.ApplicationInfo',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.pm.ApplicationInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.pm.ApplicationInfo',
		overrides: overrides
	});

	// Generate a JS wrapper for our dynamic subclass
	var whatever = function() {
		var result = subclassProxy.newInstance(arguments);
		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};

		// TODO Set up super?!
	};
	// it extends the JS wrapper for the parent type
	whatever.prototype = Object.create(android.content.pm.ApplicationInfo.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_NORMAL_SCREENS}
 */
android.content.pm.ApplicationInfo.FLAG_SUPPORTS_NORMAL_SCREENS = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_SCREEN_DENSITIES}
 */
android.content.pm.ApplicationInfo.FLAG_SUPPORTS_SCREEN_DENSITIES = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_SMALL_SCREENS}
 */
android.content.pm.ApplicationInfo.FLAG_SUPPORTS_SMALL_SCREENS = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_FULL_BACKUP_ONLY}
 */
android.content.pm.ApplicationInfo.FLAG_FULL_BACKUP_ONLY = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_RESIZEABLE_FOR_SCREENS}
 */
android.content.pm.ApplicationInfo.FLAG_RESIZEABLE_FOR_SCREENS = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_HAS_CODE}
 */
android.content.pm.ApplicationInfo.FLAG_HAS_CODE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SYSTEM}
 */
android.content.pm.ApplicationInfo.FLAG_SYSTEM = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_USES_CLEARTEXT_TRAFFIC}
 */
android.content.pm.ApplicationInfo.FLAG_USES_CLEARTEXT_TRAFFIC = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_EXTRACT_NATIVE_LIBS}
 */
android.content.pm.ApplicationInfo.FLAG_EXTRACT_NATIVE_LIBS = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_VM_SAFE_MODE}
 */
android.content.pm.ApplicationInfo.FLAG_VM_SAFE_MODE = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_LARGE_SCREENS}
 */
android.content.pm.ApplicationInfo.FLAG_SUPPORTS_LARGE_SCREENS = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_LARGE_HEAP}
 */
android.content.pm.ApplicationInfo.FLAG_LARGE_HEAP = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_ALLOW_BACKUP}
 */
android.content.pm.ApplicationInfo.FLAG_ALLOW_BACKUP = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_RTL}
 */
android.content.pm.ApplicationInfo.FLAG_SUPPORTS_RTL = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_ALLOW_CLEAR_USER_DATA}
 */
android.content.pm.ApplicationInfo.FLAG_ALLOW_CLEAR_USER_DATA = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_XLARGE_SCREENS}
 */
android.content.pm.ApplicationInfo.FLAG_SUPPORTS_XLARGE_SCREENS = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_HARDWARE_ACCELERATED}
 */
android.content.pm.ApplicationInfo.FLAG_HARDWARE_ACCELERATED = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_RESTORE_ANY_VERSION}
 */
android.content.pm.ApplicationInfo.FLAG_RESTORE_ANY_VERSION = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_EXTERNAL_STORAGE}
 */
android.content.pm.ApplicationInfo.FLAG_EXTERNAL_STORAGE = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_IS_GAME}
 */
android.content.pm.ApplicationInfo.FLAG_IS_GAME = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_FACTORY_TEST}
 */
android.content.pm.ApplicationInfo.FLAG_FACTORY_TEST = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_MULTIARCH}
 */
android.content.pm.ApplicationInfo.FLAG_MULTIARCH = -2147483648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_DEBUGGABLE}
 */
android.content.pm.ApplicationInfo.FLAG_DEBUGGABLE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_INSTALLED}
 */
android.content.pm.ApplicationInfo.FLAG_INSTALLED = 8388608;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_IS_DATA_ONLY}
 */
android.content.pm.ApplicationInfo.FLAG_IS_DATA_ONLY = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_UPDATED_SYSTEM_APP}
 */
android.content.pm.ApplicationInfo.FLAG_UPDATED_SYSTEM_APP = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_ALLOW_TASK_REPARENTING}
 */
android.content.pm.ApplicationInfo.FLAG_ALLOW_TASK_REPARENTING = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_TEST_ONLY}
 */
android.content.pm.ApplicationInfo.FLAG_TEST_ONLY = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_STOPPED}
 */
android.content.pm.ApplicationInfo.FLAG_STOPPED = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_PERSISTENT}
 */
android.content.pm.ApplicationInfo.FLAG_PERSISTENT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_KILL_AFTER_RESTORE}
 */
android.content.pm.ApplicationInfo.FLAG_KILL_AFTER_RESTORE = 65536;

// Static fields
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#CREATOR
Object.defineProperty(android.content.pm.ApplicationInfo, 'CREATOR', {
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
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#dataDir
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'dataDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'dataDir'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'dataDir',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#uiOptions
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'uiOptions', {
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
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#nativeLibraryDir
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'nativeLibraryDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'nativeLibraryDir'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'nativeLibraryDir',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#splitSourceDirs
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'splitSourceDirs', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'splitSourceDirs'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'splitSourceDirs',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#processName
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'processName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'processName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'processName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#compatibleWidthLimitDp
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'compatibleWidthLimitDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'compatibleWidthLimitDp'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'compatibleWidthLimitDp',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#backupAgentName
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'backupAgentName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'backupAgentName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'backupAgentName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#descriptionRes
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'descriptionRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'descriptionRes'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'descriptionRes',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#sourceDir
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'sourceDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'sourceDir'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'sourceDir',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#sharedLibraryFiles
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'sharedLibraryFiles', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'sharedLibraryFiles'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'sharedLibraryFiles',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#manageSpaceActivityName
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'manageSpaceActivityName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'manageSpaceActivityName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'manageSpaceActivityName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#flags
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'flags', {
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
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#className
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'className', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'className'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'className',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#enabled
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'enabled', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'enabled'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'enabled',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#uid
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'uid', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'uid'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'uid',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#splitPublicSourceDirs
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'splitPublicSourceDirs', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'splitPublicSourceDirs'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'splitPublicSourceDirs',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#publicSourceDir
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'publicSourceDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'publicSourceDir'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'publicSourceDir',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#theme
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'theme', {
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
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#largestWidthLimitDp
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'largestWidthLimitDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'largestWidthLimitDp'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'largestWidthLimitDp',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#permission
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'permission', {
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
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#targetSdkVersion
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'targetSdkVersion', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'targetSdkVersion'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'targetSdkVersion',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#requiresSmallestWidthDp
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'requiresSmallestWidthDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'requiresSmallestWidthDp'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
			field: 'requiresSmallestWidthDp',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#taskAffinity
Object.defineProperty(android.content.pm.ApplicationInfo.prototype, 'taskAffinity', {
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
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new android.content.pm.ApplicationInfo(result);
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
 * @function loadDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#loadDescription(android.content.pm.PackageManager)}
 **/
android.content.pm.ApplicationInfo.prototype.loadDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new android.content.pm.ApplicationInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#toString()}
 **/
android.content.pm.ApplicationInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new android.content.pm.ApplicationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
android.content.pm.ApplicationInfo.prototype.dump = function() {
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
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new android.content.pm.ApplicationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#describeContents()}
 **/
android.content.pm.ApplicationInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new android.content.pm.ApplicationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.ApplicationInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new android.content.pm.ApplicationInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.ApplicationInfo;
