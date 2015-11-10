/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.Configuration
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.res = global.android.content.res || {};

/**
 * @class android.content.res.Configuration
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html}
 **/
android.content.res.Configuration = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.res.Configuration') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.res.Configuration',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.res.Configuration.prototype = Object.create(SuperClass.prototype);
android.content.res.Configuration.prototype.constructor = android.content.res.Configuration;

android.content.res.Configuration.className = "android.content.res.Configuration";
android.content.res.Configuration.prototype.className = "android.content.res.Configuration";

// class property
Object.defineProperty(android.content.res.Configuration, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.res.Configuration',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARDHIDDEN_NO}
 */
android.content.res.Configuration.KEYBOARDHIDDEN_NO = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARD_QWERTY}
 */
android.content.res.Configuration.KEYBOARD_QWERTY = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_UNDEFINED}
 */
android.content.res.Configuration.SCREENLAYOUT_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_DESK}
 */
android.content.res.Configuration.UI_MODE_TYPE_DESK = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_MASK}
 */
android.content.res.Configuration.SCREENLAYOUT_SIZE_MASK = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_CAR}
 */
android.content.res.Configuration.UI_MODE_TYPE_CAR = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_UNDEFINED}
 */
android.content.res.Configuration.ORIENTATION_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_ROUND_MASK}
 */
android.content.res.Configuration.SCREENLAYOUT_ROUND_MASK = 768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREEN_HEIGHT_DP_UNDEFINED}
 */
android.content.res.Configuration.SCREEN_HEIGHT_DP_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_NIGHT_MASK}
 */
android.content.res.Configuration.UI_MODE_NIGHT_MASK = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#HARDKEYBOARDHIDDEN_YES}
 */
android.content.res.Configuration.HARDKEYBOARDHIDDEN_YES = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_TRACKBALL}
 */
android.content.res.Configuration.NAVIGATION_TRACKBALL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_PORTRAIT}
 */
android.content.res.Configuration.ORIENTATION_PORTRAIT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATIONHIDDEN_UNDEFINED}
 */
android.content.res.Configuration.NAVIGATIONHIDDEN_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_UNDEFINED}
 */
android.content.res.Configuration.NAVIGATION_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_WATCH}
 */
android.content.res.Configuration.UI_MODE_TYPE_WATCH = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_TELEVISION}
 */
android.content.res.Configuration.UI_MODE_TYPE_TELEVISION = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LONG_NO}
 */
android.content.res.Configuration.SCREENLAYOUT_LONG_NO = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_NIGHT_NO}
 */
android.content.res.Configuration.UI_MODE_NIGHT_NO = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARD_12KEY}
 */
android.content.res.Configuration.KEYBOARD_12KEY = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_NORMAL}
 */
android.content.res.Configuration.UI_MODE_TYPE_NORMAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATIONHIDDEN_NO}
 */
android.content.res.Configuration.NAVIGATIONHIDDEN_NO = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#MNC_ZERO}
 */
android.content.res.Configuration.MNC_ZERO = 65535;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LONG_UNDEFINED}
 */
android.content.res.Configuration.SCREENLAYOUT_LONG_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_ROUND_UNDEFINED}
 */
android.content.res.Configuration.SCREENLAYOUT_ROUND_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_NONAV}
 */
android.content.res.Configuration.NAVIGATION_NONAV = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_XLARGE}
 */
android.content.res.Configuration.SCREENLAYOUT_SIZE_XLARGE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#DENSITY_DPI_UNDEFINED}
 */
android.content.res.Configuration.DENSITY_DPI_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_MASK}
 */
android.content.res.Configuration.UI_MODE_TYPE_MASK = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#TOUCHSCREEN_STYLUS}
 */
android.content.res.Configuration.TOUCHSCREEN_STYLUS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_SQUARE}
 */
android.content.res.Configuration.ORIENTATION_SQUARE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_SMALL}
 */
android.content.res.Configuration.SCREENLAYOUT_SIZE_SMALL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#HARDKEYBOARDHIDDEN_NO}
 */
android.content.res.Configuration.HARDKEYBOARDHIDDEN_NO = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_LANDSCAPE}
 */
android.content.res.Configuration.ORIENTATION_LANDSCAPE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_LARGE}
 */
android.content.res.Configuration.SCREENLAYOUT_SIZE_LARGE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SMALLEST_SCREEN_WIDTH_DP_UNDEFINED}
 */
android.content.res.Configuration.SMALLEST_SCREEN_WIDTH_DP_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_UNDEFINED}
 */
android.content.res.Configuration.SCREENLAYOUT_SIZE_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_ROUND_NO}
 */
android.content.res.Configuration.SCREENLAYOUT_ROUND_NO = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREEN_WIDTH_DP_UNDEFINED}
 */
android.content.res.Configuration.SCREEN_WIDTH_DP_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_APPLIANCE}
 */
android.content.res.Configuration.UI_MODE_TYPE_APPLIANCE = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_MASK}
 */
android.content.res.Configuration.SCREENLAYOUT_LAYOUTDIR_MASK = 192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_NIGHT_YES}
 */
android.content.res.Configuration.UI_MODE_NIGHT_YES = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#HARDKEYBOARDHIDDEN_UNDEFINED}
 */
android.content.res.Configuration.HARDKEYBOARDHIDDEN_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_LTR}
 */
android.content.res.Configuration.SCREENLAYOUT_LAYOUTDIR_LTR = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_RTL}
 */
android.content.res.Configuration.SCREENLAYOUT_LAYOUTDIR_RTL = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARDHIDDEN_YES}
 */
android.content.res.Configuration.KEYBOARDHIDDEN_YES = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_NORMAL}
 */
android.content.res.Configuration.SCREENLAYOUT_SIZE_NORMAL = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_SHIFT}
 */
android.content.res.Configuration.SCREENLAYOUT_LAYOUTDIR_SHIFT = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_ROUND_YES}
 */
android.content.res.Configuration.SCREENLAYOUT_ROUND_YES = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARDHIDDEN_UNDEFINED}
 */
android.content.res.Configuration.KEYBOARDHIDDEN_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARD_NOKEYS}
 */
android.content.res.Configuration.KEYBOARD_NOKEYS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#TOUCHSCREEN_NOTOUCH}
 */
android.content.res.Configuration.TOUCHSCREEN_NOTOUCH = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LONG_YES}
 */
android.content.res.Configuration.SCREENLAYOUT_LONG_YES = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_NIGHT_UNDEFINED}
 */
android.content.res.Configuration.UI_MODE_NIGHT_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LONG_MASK}
 */
android.content.res.Configuration.SCREENLAYOUT_LONG_MASK = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATIONHIDDEN_YES}
 */
android.content.res.Configuration.NAVIGATIONHIDDEN_YES = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_DPAD}
 */
android.content.res.Configuration.NAVIGATION_DPAD = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_UNDEFINED}
 */
android.content.res.Configuration.SCREENLAYOUT_LAYOUTDIR_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_WHEEL}
 */
android.content.res.Configuration.NAVIGATION_WHEEL = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#TOUCHSCREEN_UNDEFINED}
 */
android.content.res.Configuration.TOUCHSCREEN_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARD_UNDEFINED}
 */
android.content.res.Configuration.KEYBOARD_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#TOUCHSCREEN_FINGER}
 */
android.content.res.Configuration.TOUCHSCREEN_FINGER = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_UNDEFINED}
 */
android.content.res.Configuration.UI_MODE_TYPE_UNDEFINED = 0;

// Static fields
// http://developer.android.com/reference/android/content/res/Configuration.html#CREATOR
Object.defineProperty(android.content.res.Configuration, 'CREATOR', {
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
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
// http://developer.android.com/reference/android/content/res/Configuration.html#mcc
Object.defineProperty(android.content.res.Configuration.prototype, 'mcc', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mcc'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'mcc',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#navigation
Object.defineProperty(android.content.res.Configuration.prototype, 'navigation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'navigation'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'navigation',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#screenWidthDp
Object.defineProperty(android.content.res.Configuration.prototype, 'screenWidthDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'screenWidthDp'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'screenWidthDp',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#screenHeightDp
Object.defineProperty(android.content.res.Configuration.prototype, 'screenHeightDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'screenHeightDp'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'screenHeightDp',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#touchscreen
Object.defineProperty(android.content.res.Configuration.prototype, 'touchscreen', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'touchscreen'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'touchscreen',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#fontScale
Object.defineProperty(android.content.res.Configuration.prototype, 'fontScale', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'fontScale'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'fontScale',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#screenLayout
Object.defineProperty(android.content.res.Configuration.prototype, 'screenLayout', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'screenLayout'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'screenLayout',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#uiMode
Object.defineProperty(android.content.res.Configuration.prototype, 'uiMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'uiMode'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'uiMode',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#keyboardHidden
Object.defineProperty(android.content.res.Configuration.prototype, 'keyboardHidden', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'keyboardHidden'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'keyboardHidden',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#locale
Object.defineProperty(android.content.res.Configuration.prototype, 'locale', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'locale'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'locale',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#keyboard
Object.defineProperty(android.content.res.Configuration.prototype, 'keyboard', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'keyboard'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'keyboard',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#orientation
Object.defineProperty(android.content.res.Configuration.prototype, 'orientation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'orientation'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'orientation',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#mnc
Object.defineProperty(android.content.res.Configuration.prototype, 'mnc', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mnc'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'mnc',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#smallestScreenWidthDp
Object.defineProperty(android.content.res.Configuration.prototype, 'smallestScreenWidthDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'smallestScreenWidthDp'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'smallestScreenWidthDp',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#densityDpi
Object.defineProperty(android.content.res.Configuration.prototype, 'densityDpi', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'densityDpi'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'densityDpi',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#hardKeyboardHidden
Object.defineProperty(android.content.res.Configuration.prototype, 'hardKeyboardHidden', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'hardKeyboardHidden'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'hardKeyboardHidden',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#navigationHidden
Object.defineProperty(android.content.res.Configuration.prototype, 'navigationHidden', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'navigationHidden'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new android.content.res.Configuration(result);
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
			field: 'navigationHidden',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function needNewResources
 * @static
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#needNewResources(int, int)}
 **/
android.content.res.Configuration.needNewResources = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'needNewResources',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function updateFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#updateFrom(android.content.res.Configuration)}
 **/
android.content.res.Configuration.prototype.updateFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function diff
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#diff(android.content.res.Configuration)}
 **/
android.content.res.Configuration.prototype.diff = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'diff',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFromParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#readFromParcel(android.os.Parcel)}
 **/
android.content.res.Configuration.prototype.readFromParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFromParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#compareTo(android.content.res.Configuration)}
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#compareTo(java.lang.Object)}
 **/
android.content.res.Configuration.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#describeContents()}
 **/
android.content.res.Configuration.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#getLayoutDirection()}
 **/
android.content.res.Configuration.prototype.getLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isScreenRound
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#isScreenRound()}
 **/
android.content.res.Configuration.prototype.isScreenRound = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isScreenRound',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#setLayoutDirection(java.util.Locale)}
 **/
android.content.res.Configuration.prototype.setLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setToDefaults
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#setToDefaults()}
 **/
android.content.res.Configuration.prototype.setToDefaults = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setToDefaults',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#hashCode()}
 **/
android.content.res.Configuration.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#equals(android.content.res.Configuration)}
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#equals(java.lang.Object)}
 **/
android.content.res.Configuration.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#setTo(android.content.res.Configuration)}
 **/
android.content.res.Configuration.prototype.setTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#toString()}
 **/
android.content.res.Configuration.prototype.toString = function() {
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
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLayoutSizeAtLeast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#isLayoutSizeAtLeast(int)}
 **/
android.content.res.Configuration.prototype.isLayoutSizeAtLeast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLayoutSizeAtLeast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.res.Configuration.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#setLocale(java.util.Locale)}
 **/
android.content.res.Configuration.prototype.setLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new android.content.res.Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.res.Configuration;
