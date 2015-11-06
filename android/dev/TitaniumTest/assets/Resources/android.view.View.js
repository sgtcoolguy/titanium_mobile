/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.View
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.View
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/View.html}
 **/
android.view.View = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.View') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.View',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.View.prototype = Object.create(SuperClass.prototype);
android.view.View.prototype.constructor = android.view.View;

android.view.View.className = "android.view.View";
android.view.View.prototype.className = "android.view.View";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_INDICATOR_RIGHT}
 */
android.view.View.SCROLL_INDICATOR_RIGHT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_AXIS_HORIZONTAL}
 */
android.view.View.SCROLL_AXIS_HORIZONTAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS}
 */
android.view.View.IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#OVER_SCROLL_NEVER}
 */
android.view.View.OVER_SCROLL_NEVER = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_DIRECTION_LTR}
 */
android.view.View.TEXT_DIRECTION_LTR = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FOCUS_FORWARD}
 */
android.view.View.FOCUS_FORWARD = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_IMMERSIVE_STICKY}
 */
android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#LAYOUT_DIRECTION_LOCALE}
 */
android.view.View.LAYOUT_DIRECTION_LOCALE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_LIGHT_STATUS_BAR}
 */
android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_ALIGNMENT_CENTER}
 */
android.view.View.TEXT_ALIGNMENT_CENTER = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_ALIGNMENT_GRAVITY}
 */
android.view.View.TEXT_ALIGNMENT_GRAVITY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN}
 */
android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_DIRECTION_FIRST_STRONG}
 */
android.view.View.TEXT_DIRECTION_FIRST_STRONG = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#ACCESSIBILITY_LIVE_REGION_ASSERTIVE}
 */
android.view.View.ACCESSIBILITY_LIVE_REGION_ASSERTIVE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FIND_VIEWS_WITH_TEXT}
 */
android.view.View.FIND_VIEWS_WITH_TEXT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLLBARS_OUTSIDE_OVERLAY}
 */
android.view.View.SCROLLBARS_OUTSIDE_OVERLAY = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_INDICATOR_LEFT}
 */
android.view.View.SCROLL_INDICATOR_LEFT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#LAYOUT_DIRECTION_INHERIT}
 */
android.view.View.LAYOUT_DIRECTION_INHERIT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#LAYER_TYPE_HARDWARE}
 */
android.view.View.LAYER_TYPE_HARDWARE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#MEASURED_STATE_TOO_SMALL}
 */
android.view.View.MEASURED_STATE_TOO_SMALL = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLLBAR_POSITION_RIGHT}
 */
android.view.View.SCROLLBAR_POSITION_RIGHT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#NO_ID}
 */
android.view.View.NO_ID = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#KEEP_SCREEN_ON}
 */
android.view.View.KEEP_SCREEN_ON = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#OVER_SCROLL_ALWAYS}
 */
android.view.View.OVER_SCROLL_ALWAYS = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_DIRECTION_INHERIT}
 */
android.view.View.TEXT_DIRECTION_INHERIT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#INVISIBLE}
 */
android.view.View.INVISIBLE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#DRAWING_CACHE_QUALITY_LOW}
 */
android.view.View.DRAWING_CACHE_QUALITY_LOW = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#LAYER_TYPE_SOFTWARE}
 */
android.view.View.LAYER_TYPE_SOFTWARE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_INDICATOR_END}
 */
android.view.View.SCROLL_INDICATOR_END = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_VISIBLE}
 */
android.view.View.SYSTEM_UI_FLAG_VISIBLE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#MEASURED_STATE_MASK}
 */
android.view.View.MEASURED_STATE_MASK = -16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FOCUS_UP}
 */
android.view.View.FOCUS_UP = 33;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_ALIGNMENT_INHERIT}
 */
android.view.View.TEXT_ALIGNMENT_INHERIT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCREEN_STATE_ON}
 */
android.view.View.SCREEN_STATE_ON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FIND_VIEWS_WITH_CONTENT_DESCRIPTION}
 */
android.view.View.FIND_VIEWS_WITH_CONTENT_DESCRIPTION = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#DRAWING_CACHE_QUALITY_AUTO}
 */
android.view.View.DRAWING_CACHE_QUALITY_AUTO = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FOCUSABLES_ALL}
 */
android.view.View.FOCUSABLES_ALL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_LAYOUT_STABLE}
 */
android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FOCUS_DOWN}
 */
android.view.View.FOCUS_DOWN = 130;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLLBARS_INSIDE_OVERLAY}
 */
android.view.View.SCROLLBARS_INSIDE_OVERLAY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FOCUS_BACKWARD}
 */
android.view.View.FOCUS_BACKWARD = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#DRAWING_CACHE_QUALITY_HIGH}
 */
android.view.View.DRAWING_CACHE_QUALITY_HIGH = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_ALIGNMENT_VIEW_END}
 */
android.view.View.TEXT_ALIGNMENT_VIEW_END = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_ALIGNMENT_VIEW_START}
 */
android.view.View.TEXT_ALIGNMENT_VIEW_START = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_IMMERSIVE}
 */
android.view.View.SYSTEM_UI_FLAG_IMMERSIVE = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#MEASURED_HEIGHT_STATE_SHIFT}
 */
android.view.View.MEASURED_HEIGHT_STATE_SHIFT = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_DIRECTION_FIRST_STRONG_RTL}
 */
android.view.View.TEXT_DIRECTION_FIRST_STRONG_RTL = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_AXIS_VERTICAL}
 */
android.view.View.SCROLL_AXIS_VERTICAL = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#LAYOUT_DIRECTION_RTL}
 */
android.view.View.LAYOUT_DIRECTION_RTL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#IMPORTANT_FOR_ACCESSIBILITY_NO}
 */
android.view.View.IMPORTANT_FOR_ACCESSIBILITY_NO = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#ACCESSIBILITY_LIVE_REGION_POLITE}
 */
android.view.View.ACCESSIBILITY_LIVE_REGION_POLITE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_ALIGNMENT_TEXT_START}
 */
android.view.View.TEXT_ALIGNMENT_TEXT_START = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_DIRECTION_RTL}
 */
android.view.View.TEXT_DIRECTION_RTL = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_INDICATOR_BOTTOM}
 */
android.view.View.SCROLL_INDICATOR_BOTTOM = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION}
 */
android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_AXIS_NONE}
 */
android.view.View.SCROLL_AXIS_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#ACCESSIBILITY_LIVE_REGION_NONE}
 */
android.view.View.ACCESSIBILITY_LIVE_REGION_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_HIDE_NAVIGATION}
 */
android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#STATUS_BAR_HIDDEN}
 */
android.view.View.STATUS_BAR_HIDDEN = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SOUND_EFFECTS_ENABLED}
 */
android.view.View.SOUND_EFFECTS_ENABLED = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_INDICATOR_TOP}
 */
android.view.View.SCROLL_INDICATOR_TOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLLBARS_INSIDE_INSET}
 */
android.view.View.SCROLLBARS_INSIDE_INSET = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLLBAR_POSITION_LEFT}
 */
android.view.View.SCROLLBAR_POSITION_LEFT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FOCUS_LEFT}
 */
android.view.View.FOCUS_LEFT = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#LAYER_TYPE_NONE}
 */
android.view.View.LAYER_TYPE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#GONE}
 */
android.view.View.GONE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_LAYOUT_FLAGS}
 */
android.view.View.SYSTEM_UI_LAYOUT_FLAGS = 1536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#HAPTIC_FEEDBACK_ENABLED}
 */
android.view.View.HAPTIC_FEEDBACK_ENABLED = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_LOW_PROFILE}
 */
android.view.View.SYSTEM_UI_FLAG_LOW_PROFILE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#OVER_SCROLL_IF_CONTENT_SCROLLS}
 */
android.view.View.OVER_SCROLL_IF_CONTENT_SCROLLS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLL_INDICATOR_START}
 */
android.view.View.SCROLL_INDICATOR_START = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_DIRECTION_LOCALE}
 */
android.view.View.TEXT_DIRECTION_LOCALE = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#VISIBLE}
 */
android.view.View.VISIBLE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FOCUSABLES_TOUCH_MODE}
 */
android.view.View.FOCUSABLES_TOUCH_MODE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCREEN_STATE_OFF}
 */
android.view.View.SCREEN_STATE_OFF = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SYSTEM_UI_FLAG_FULLSCREEN}
 */
android.view.View.SYSTEM_UI_FLAG_FULLSCREEN = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_ALIGNMENT_TEXT_END}
 */
android.view.View.TEXT_ALIGNMENT_TEXT_END = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#STATUS_BAR_VISIBLE}
 */
android.view.View.STATUS_BAR_VISIBLE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLLBARS_OUTSIDE_INSET}
 */
android.view.View.SCROLLBARS_OUTSIDE_INSET = 50331648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_DIRECTION_ANY_RTL}
 */
android.view.View.TEXT_DIRECTION_ANY_RTL = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#SCROLLBAR_POSITION_DEFAULT}
 */
android.view.View.SCROLLBAR_POSITION_DEFAULT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#FOCUS_RIGHT}
 */
android.view.View.FOCUS_RIGHT = 66;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#IMPORTANT_FOR_ACCESSIBILITY_AUTO}
 */
android.view.View.IMPORTANT_FOR_ACCESSIBILITY_AUTO = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#TEXT_DIRECTION_FIRST_STRONG_LTR}
 */
android.view.View.TEXT_DIRECTION_FIRST_STRONG_LTR = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#MEASURED_SIZE_MASK}
 */
android.view.View.MEASURED_SIZE_MASK = 16777215;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#IMPORTANT_FOR_ACCESSIBILITY_YES}
 */
android.view.View.IMPORTANT_FOR_ACCESSIBILITY_YES = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#VIEW_LOG_TAG}
 */
android.view.View.VIEW_LOG_TAG = "View";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.html#LAYOUT_DIRECTION_LTR}
 */
android.view.View.LAYOUT_DIRECTION_LTR = 0;

// Static fields
// http://developer.android.com/reference/android/view/View.html#PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#FOCUSED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'FOCUSED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'FOCUSED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#SCALE_X
Object.defineProperty(android.view.View, 'SCALE_X', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SCALE_X'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#SCALE_Y
Object.defineProperty(android.view.View, 'SCALE_Y', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SCALE_Y'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ROTATION
Object.defineProperty(android.view.View, 'ROTATION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ROTATION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ENABLED_SELECTED_STATE_SET
Object.defineProperty(android.view.View, 'ENABLED_SELECTED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENABLED_SELECTED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_ENABLED_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_ENABLED_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_ENABLED_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#EMPTY_STATE_SET
Object.defineProperty(android.view.View, 'EMPTY_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'EMPTY_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ENABLED_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'ENABLED_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENABLED_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#X
Object.defineProperty(android.view.View, 'X', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'X'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#Y
Object.defineProperty(android.view.View, 'Y', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'Y'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#Z
Object.defineProperty(android.view.View, 'Z', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'Z'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ENABLED_STATE_SET
Object.defineProperty(android.view.View, 'ENABLED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENABLED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_ENABLED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_ENABLED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_ENABLED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#SELECTED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'SELECTED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SELECTED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#TRANSLATION_Z
Object.defineProperty(android.view.View, 'TRANSLATION_Z', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'TRANSLATION_Z'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#TRANSLATION_X
Object.defineProperty(android.view.View, 'TRANSLATION_X', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'TRANSLATION_X'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#TRANSLATION_Y
Object.defineProperty(android.view.View, 'TRANSLATION_Y', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'TRANSLATION_Y'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_ENABLED_SELECTED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_ENABLED_SELECTED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_ENABLED_SELECTED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ALPHA
Object.defineProperty(android.view.View, 'ALPHA', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ALPHA'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#SELECTED_STATE_SET
Object.defineProperty(android.view.View, 'SELECTED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SELECTED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ROTATION_Y
Object.defineProperty(android.view.View, 'ROTATION_Y', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ROTATION_Y'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ROTATION_X
Object.defineProperty(android.view.View, 'ROTATION_X', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ROTATION_X'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_SELECTED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_SELECTED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_SELECTED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ENABLED_FOCUSED_SELECTED_STATE_SET
Object.defineProperty(android.view.View, 'ENABLED_FOCUSED_SELECTED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENABLED_FOCUSED_SELECTED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#ENABLED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'ENABLED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENABLED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#FOCUSED_SELECTED_STATE_SET
Object.defineProperty(android.view.View, 'FOCUSED_SELECTED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'FOCUSED_SELECTED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/View.html#PRESSED_FOCUSED_SELECTED_STATE_SET
Object.defineProperty(android.view.View, 'PRESSED_FOCUSED_SELECTED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRESSED_FOCUSED_SELECTED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View') {
				return new android.view.View(result);
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

// Static methods
/**
 * TODO Fill out docs more...
 * @function resolveSize
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.html#resolveSize(int, int)}
 **/
android.view.View.resolveSize = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'resolveSize',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveSizeAndState
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.html#resolveSizeAndState(int, int, int)}
 **/
android.view.View.resolveSizeAndState = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'resolveSizeAndState',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function combineMeasuredStates
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.html#combineMeasuredStates(int, int)}
 **/
android.view.View.combineMeasuredStates = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'combineMeasuredStates',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inflate
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.html#inflate(android.content.Context, int, android.view.ViewGroup)}
 **/
android.view.View.inflate = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'inflate',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateViewId
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.html#generateViewId()}
 **/
android.view.View.generateViewId = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'generateViewId',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultSize
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDefaultSize(int, int)}
 **/
android.view.View.getDefaultSize = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getDefaultSize',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mergeDrawableStates
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.html#mergeDrawableStates(int[], int[])}
 **/
android.view.View.mergeDrawableStates = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'mergeDrawableStates',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
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
 * @function getHorizontalFadingEdgeLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getHorizontalFadingEdgeLength()}
 **/
android.view.View.prototype.getHorizontalFadingEdgeLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHorizontalFadingEdgeLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchDisplayHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchDisplayHint(int)}
 **/
android.view.View.prototype.dispatchDisplayHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchDisplayHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setY(float)}
 **/
android.view.View.prototype.setY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setX(float)}
 **/
android.view.View.prototype.setX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scrollBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#scrollBy(int, int)}
 **/
android.view.View.prototype.scrollBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scrollBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawableState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDrawableState()}
 **/
android.view.View.prototype.getDrawableState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawableState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnFocusChangeListener(android.view.View$OnFocusChangeListener)}
 **/
android.view.View.prototype.setOnFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnLongClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnLongClickListener(android.view.View$OnLongClickListener)}
 **/
android.view.View.prototype.setOnLongClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnLongClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnDragListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnDragListener(android.view.View$OnDragListener)}
 **/
android.view.View.prototype.setOnDragListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnDragListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getHandler()}
 **/
android.view.View.prototype.getHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isNestedScrollingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isNestedScrollingEnabled()}
 **/
android.view.View.prototype.isNestedScrollingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isNestedScrollingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextAlignment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTextAlignment(int)}
 **/
android.view.View.prototype.setTextAlignment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextAlignment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setZ
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setZ(float)}
 **/
android.view.View.prototype.setZ = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setZ',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVerticalFadingEdgeEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isVerticalFadingEdgeEnabled()}
 **/
android.view.View.prototype.isVerticalFadingEdgeEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVerticalFadingEdgeEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postOnAnimationDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#postOnAnimationDelayed(java.lang.Runnable, long)}
 **/
android.view.View.prototype.postOnAnimationDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postOnAnimationDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postInvalidate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#postInvalidate()}
 * @see {@link http://developer.android.com/reference/android/view/View.html#postInvalidate(int, int, int, int)}
 **/
android.view.View.prototype.postInvalidate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postInvalidate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollIndicators
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScrollIndicators()}
 **/
android.view.View.prototype.getScrollIndicators = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollIndicators',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
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
 * @see {@link http://developer.android.com/reference/android/view/View.html#setLayoutDirection(int)}
 **/
android.view.View.prototype.setLayoutDirection = function() {
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
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFocusableInTouchMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isFocusableInTouchMode()}
 **/
android.view.View.prototype.isFocusableInTouchMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFocusableInTouchMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchApplyWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchApplyWindowInsets(android.view.WindowInsets)}
 **/
android.view.View.prototype.dispatchApplyWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchApplyWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stopNestedScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#stopNestedScroll()}
 **/
android.view.View.prototype.stopNestedScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stopNestedScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateDrawableState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onCreateDrawableState(int)}
 **/
android.view.View.prototype.onCreateDrawableState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateDrawableState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addChildrenForAccessibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#addChildrenForAccessibility(java.util.ArrayList)}
 **/
android.view.View.prototype.addChildrenForAccessibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addChildrenForAccessibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.prototype.dispatchPopulateAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchPopulateAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function refreshDrawableState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#refreshDrawableState()}
 **/
android.view.View.prototype.refreshDrawableState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'refreshDrawableState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLayoutRequested
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isLayoutRequested()}
 **/
android.view.View.prototype.isLayoutRequested = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLayoutRequested',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFilterTouchesWhenObscured
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setFilterTouchesWhenObscured(boolean)}
 **/
android.view.View.prototype.setFilterTouchesWhenObscured = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFilterTouchesWhenObscured',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDuplicateParentStateEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isDuplicateParentStateEnabled()}
 **/
android.view.View.prototype.isDuplicateParentStateEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDuplicateParentStateEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeepScreenOn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getKeepScreenOn()}
 **/
android.view.View.prototype.getKeepScreenOn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeepScreenOn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFilterTouchEventForSecurity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onFilterTouchEventForSecurity(android.view.MotionEvent)}
 **/
android.view.View.prototype.onFilterTouchEventForSecurity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFilterTouchEventForSecurity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getForegroundTintMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getForegroundTintMode()}
 **/
android.view.View.prototype.getForegroundTintMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getForegroundTintMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestLayout()}
 **/
android.view.View.prototype.requestLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onHoverEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onHoverEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.onHoverEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onHoverEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSaveEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setSaveEnabled(boolean)}
 **/
android.view.View.prototype.setSaveEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSaveEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isScrollbarFadingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isScrollbarFadingEnabled()}
 **/
android.view.View.prototype.isScrollbarFadingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isScrollbarFadingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLayoutDirectionResolved
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isLayoutDirectionResolved()}
 **/
android.view.View.prototype.isLayoutDirectionResolved = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLayoutDirectionResolved',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationWindowToken
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getApplicationWindowToken()}
 **/
android.view.View.prototype.getApplicationWindowToken = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplicationWindowToken',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInTouchMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isInTouchMode()}
 **/
android.view.View.prototype.isInTouchMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInTouchMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMeasuredHeightAndState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getMeasuredHeightAndState()}
 **/
android.view.View.prototype.getMeasuredHeightAndState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMeasuredHeightAndState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performContextClick
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#performContextClick()}
 **/
android.view.View.prototype.performContextClick = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performContextClick',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFocusables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getFocusables(int)}
 **/
android.view.View.prototype.getFocusables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFocusables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchKeyEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchKeyEvent(android.view.KeyEvent)}
 **/
android.view.View.prototype.dispatchKeyEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchKeyEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowVisibleDisplayFrame
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getWindowVisibleDisplayFrame(android.graphics.Rect)}
 **/
android.view.View.prototype.getWindowVisibleDisplayFrame = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowVisibleDisplayFrame',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSuggestedMinimumWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getSuggestedMinimumWidth()}
 **/
android.view.View.prototype.getSuggestedMinimumWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSuggestedMinimumWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollBarFadeDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollBarFadeDuration(int)}
 **/
android.view.View.prototype.setScrollBarFadeDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollBarFadeDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performClick
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#performClick()}
 **/
android.view.View.prototype.performClick = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performClick',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getHeight()}
 **/
android.view.View.prototype.getHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasNestedScrollingParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#hasNestedScrollingParent()}
 **/
android.view.View.prototype.hasNestedScrollingParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasNestedScrollingParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyPreIme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onKeyPreIme(int, android.view.KeyEvent)}
 **/
android.view.View.prototype.onKeyPreIme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyPreIme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fitSystemWindows
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#fitSystemWindows(android.graphics.Rect)}
 **/
android.view.View.prototype.fitSystemWindows = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fitSystemWindows',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findViewsWithText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#findViewsWithText(java.util.ArrayList, java.lang.CharSequence, int)}
 **/
android.view.View.prototype.findViewsWithText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findViewsWithText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundTintMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setBackgroundTintMode(android.graphics.PorterDuff$Mode)}
 **/
android.view.View.prototype.setBackgroundTintMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundTintMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onDraw(android.graphics.Canvas)}
 **/
android.view.View.prototype.onDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAttachedToWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onAttachedToWindow()}
 **/
android.view.View.prototype.onAttachedToWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAttachedToWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setActivated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setActivated(boolean)}
 **/
android.view.View.prototype.setActivated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setActivated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isImportantForAccessibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isImportantForAccessibility()}
 **/
android.view.View.prototype.isImportantForAccessibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isImportantForAccessibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setPadding(int, int, int, int)}
 **/
android.view.View.prototype.setPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSaveInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchSaveInstanceState(android.util.SparseArray)}
 **/
android.view.View.prototype.dispatchSaveInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSaveInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeHorizontalScrollRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#computeHorizontalScrollRange()}
 **/
android.view.View.prototype.computeHorizontalScrollRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeHorizontalScrollRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#clearFocus()}
 **/
android.view.View.prototype.clearFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnScrollChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnScrollChangeListener(android.view.View$OnScrollChangeListener)}
 **/
android.view.View.prototype.setOnScrollChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnScrollChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function callOnClick
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#callOnClick()}
 **/
android.view.View.prototype.callOnClick = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'callOnClick',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function willNotCacheDrawing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#willNotCacheDrawing()}
 **/
android.view.View.prototype.willNotCacheDrawing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'willNotCacheDrawing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onVisibilityChanged(android.view.View, int)}
 **/
android.view.View.prototype.onVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateOutline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#invalidateOutline()}
 **/
android.view.View.prototype.invalidateOutline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateOutline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAccessibilityLiveRegion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setAccessibilityLiveRegion(int)}
 **/
android.view.View.prototype.setAccessibilityLiveRegion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAccessibilityLiveRegion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDrawScrollBars
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onDrawScrollBars(android.graphics.Canvas)}
 **/
android.view.View.prototype.onDrawScrollBars = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDrawScrollBars',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSetActivated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchSetActivated(boolean)}
 **/
android.view.View.prototype.dispatchSetActivated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSetActivated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFocusChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onFocusChanged(boolean, int, android.graphics.Rect)}
 **/
android.view.View.prototype.onFocusChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFocusChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasTransientState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#hasTransientState()}
 **/
android.view.View.prototype.hasTransientState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasTransientState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
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
 * @see {@link http://developer.android.com/reference/android/view/View.html#toString()}
 **/
android.view.View.prototype.toString = function() {
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
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMeasuredDimension
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setMeasuredDimension(int, int)}
 **/
android.view.View.prototype.setMeasuredDimension = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMeasuredDimension',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollX(int)}
 **/
android.view.View.prototype.setScrollX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPaddingRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getPaddingRight()}
 **/
android.view.View.prototype.getPaddingRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPaddingRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSystemUiVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setSystemUiVisibility(int)}
 **/
android.view.View.prototype.setSystemUiVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSystemUiVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollY(int)}
 **/
android.view.View.prototype.setScrollY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchRestoreInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchRestoreInstanceState(android.util.SparseArray)}
 **/
android.view.View.prototype.dispatchRestoreInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchRestoreInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAccessibilityTraversalAfter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalAfter(int)}
 **/
android.view.View.prototype.setAccessibilityTraversalAfter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAccessibilityTraversalAfter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyShortcut
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onKeyShortcut(int, android.view.KeyEvent)}
 **/
android.view.View.prototype.onKeyShortcut = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyShortcut',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProvideStructure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onProvideStructure(android.view.ViewStructure)}
 **/
android.view.View.prototype.onProvideStructure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideStructure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setSelected(boolean)}
 **/
android.view.View.prototype.setSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onApplyWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onApplyWindowInsets(android.view.WindowInsets)}
 **/
android.view.View.prototype.onApplyWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onApplyWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPaddingBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getPaddingBottom()}
 **/
android.view.View.prototype.getPaddingBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPaddingBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDragEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onDragEvent(android.view.DragEvent)}
 **/
android.view.View.prototype.onDragEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDragEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityTraversalBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getAccessibilityTraversalBefore()}
 **/
android.view.View.prototype.getAccessibilityTraversalBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityTraversalBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function restoreHierarchyState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#restoreHierarchyState(android.util.SparseArray)}
 **/
android.view.View.prototype.restoreHierarchyState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restoreHierarchyState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchWindowFocusChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchWindowFocusChanged(boolean)}
 **/
android.view.View.prototype.dispatchWindowFocusChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchWindowFocusChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getElevation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getElevation()}
 **/
android.view.View.prototype.getElevation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getElevation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function announceForAccessibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#announceForAccessibility(java.lang.CharSequence)}
 **/
android.view.View.prototype.announceForAccessibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'announceForAccessibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityLiveRegion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getAccessibilityLiveRegion()}
 **/
android.view.View.prototype.getAccessibilityLiveRegion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityLiveRegion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#invalidateDrawable(android.graphics.drawable.Drawable)}
 **/
android.view.View.prototype.invalidateDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setBackgroundResource(int)}
 **/
android.view.View.prototype.setBackgroundResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFocusableInTouchMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setFocusableInTouchMode(boolean)}
 **/
android.view.View.prototype.setFocusableInTouchMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFocusableInTouchMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function post
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#post(java.lang.Runnable)}
 **/
android.view.View.prototype.post = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'post',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClipBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setClipBounds(android.graphics.Rect)}
 **/
android.view.View.prototype.setClipBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClipBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getClipBounds()}
 * @see {@link http://developer.android.com/reference/android/view/View.html#getClipBounds(android.graphics.Rect)}
 **/
android.view.View.prototype.getClipBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSaveFromParentEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isSaveFromParentEnabled()}
 **/
android.view.View.prototype.isSaveFromParentEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSaveFromParentEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchVisibilityChanged(android.view.View, int)}
 **/
android.view.View.prototype.dispatchVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function buildDrawingCache
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#buildDrawingCache()}
 * @see {@link http://developer.android.com/reference/android/view/View.html#buildDrawingCache(boolean)}
 **/
android.view.View.prototype.buildDrawingCache = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'buildDrawingCache',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onOverScrolled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onOverScrolled(int, int, boolean, boolean)}
 **/
android.view.View.prototype.onOverScrolled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onOverScrolled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBottomFadingEdgeStrength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getBottomFadingEdgeStrength()}
 **/
android.view.View.prototype.getBottomFadingEdgeStrength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBottomFadingEdgeStrength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPaddingEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getPaddingEnd()}
 **/
android.view.View.prototype.getPaddingEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPaddingEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextAlignment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTextAlignment()}
 **/
android.view.View.prototype.getTextAlignment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextAlignment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAccessibilityTraversalBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalBefore(int)}
 **/
android.view.View.prototype.setAccessibilityTraversalBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAccessibilityTraversalBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTextDirection(int)}
 **/
android.view.View.prototype.setTextDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setAlpha(float)}
 **/
android.view.View.prototype.setAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onKeyLongPress(int, android.view.KeyEvent)}
 **/
android.view.View.prototype.onKeyLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onGenericMotionEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.onGenericMotionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onGenericMotionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCameraDistance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setCameraDistance(float)}
 **/
android.view.View.prototype.setCameraDistance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCameraDistance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHorizontalFadingEdgeEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isHorizontalFadingEdgeEnabled()}
 **/
android.view.View.prototype.isHorizontalFadingEdgeEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHorizontalFadingEdgeEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDuplicateParentStateEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setDuplicateParentStateEnabled(boolean)}
 **/
android.view.View.prototype.setDuplicateParentStateEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDuplicateParentStateEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSetSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchSetSelected(boolean)}
 **/
android.view.View.prototype.dispatchSetSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSetSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCameraDistance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getCameraDistance()}
 **/
android.view.View.prototype.getCameraDistance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCameraDistance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRestoreInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onRestoreInstanceState(android.os.Parcelable)}
 **/
android.view.View.prototype.onRestoreInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRestoreInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBottomPaddingOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getBottomPaddingOffset()}
 **/
android.view.View.prototype.getBottomPaddingOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBottomPaddingOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getContentDescription()}
 **/
android.view.View.prototype.getContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOverScrollMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOverScrollMode(int)}
 **/
android.view.View.prototype.setOverScrollMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOverScrollMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#startAnimation(android.view.animation.Animation)}
 **/
android.view.View.prototype.startAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnTouchListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnTouchListener(android.view.View$OnTouchListener)}
 **/
android.view.View.prototype.setOnTouchListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnTouchListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function saveHierarchyState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#saveHierarchyState(android.util.SparseArray)}
 **/
android.view.View.prototype.saveHierarchyState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'saveHierarchyState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTextAlignmentResolved
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isTextAlignmentResolved()}
 **/
android.view.View.prototype.isTextAlignmentResolved = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTextAlignmentResolved',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackgroundTintList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getBackgroundTintList()}
 **/
android.view.View.prototype.getBackgroundTintList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackgroundTintList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNextFocusDownId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setNextFocusDownId(int)}
 **/
android.view.View.prototype.setNextFocusDownId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNextFocusDownId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMinimumWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getMinimumWidth()}
 **/
android.view.View.prototype.getMinimumWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMinimumWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollBarStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollBarStyle(int)}
 **/
android.view.View.prototype.setScrollBarStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollBarStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function willNotDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#willNotDraw()}
 **/
android.view.View.prototype.willNotDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'willNotDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOverlay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getOverlay()}
 **/
android.view.View.prototype.getOverlay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOverlay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollBarStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScrollBarStyle()}
 **/
android.view.View.prototype.getScrollBarStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollBarStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHorizontalScrollBarEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setHorizontalScrollBarEnabled(boolean)}
 **/
android.view.View.prototype.setHorizontalScrollBarEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHorizontalScrollBarEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHapticFeedbackEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setHapticFeedbackEnabled(boolean)}
 **/
android.view.View.prototype.setHapticFeedbackEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHapticFeedbackEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasFocusable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#hasFocusable()}
 **/
android.view.View.prototype.hasFocusable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasFocusable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDrawForeground
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onDrawForeground(android.graphics.Canvas)}
 **/
android.view.View.prototype.onDrawForeground = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDrawForeground',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPaddingTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getPaddingTop()}
 **/
android.view.View.prototype.getPaddingTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPaddingTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHorizontalScrollBarEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isHorizontalScrollBarEnabled()}
 **/
android.view.View.prototype.isHorizontalScrollBarEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHorizontalScrollBarEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#postDelayed(java.lang.Runnable, long)}
 **/
android.view.View.prototype.postDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAccessibilityDelegate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setAccessibilityDelegate(android.view.View$AccessibilityDelegate)}
 **/
android.view.View.prototype.setAccessibilityDelegate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAccessibilityDelegate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContextMenuInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getContextMenuInfo()}
 **/
android.view.View.prototype.getContextMenuInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContextMenuInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOutlineProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOutlineProvider(android.view.ViewOutlineProvider)}
 **/
android.view.View.prototype.setOutlineProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOutlineProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setBottom(int)}
 **/
android.view.View.prototype.setBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProvideVirtualStructure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onProvideVirtualStructure(android.view.ViewStructure)}
 **/
android.view.View.prototype.onProvideVirtualStructure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideVirtualStructure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function destroyDrawingCache
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#destroyDrawingCache()}
 **/
android.view.View.prototype.destroyDrawingCache = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'destroyDrawingCache',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLayoutParams()}
 **/
android.view.View.prototype.getLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollIndicators
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollIndicators(int)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollIndicators(int, int)}
 **/
android.view.View.prototype.setScrollIndicators = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollIndicators',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasOverlappingRendering
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#hasOverlappingRendering()}
 **/
android.view.View.prototype.hasOverlappingRendering = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasOverlappingRendering',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAnimationEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onAnimationEnd()}
 **/
android.view.View.prototype.onAnimationEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAnimationEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMeasuredWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getMeasuredWidth()}
 **/
android.view.View.prototype.getMeasuredWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMeasuredWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setVisibility(int)}
 **/
android.view.View.prototype.setVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRotationX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getRotationX()}
 **/
android.view.View.prototype.getRotationX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRotationX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRootWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getRootWindowInsets()}
 **/
android.view.View.prototype.getRootWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRootWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRotationY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getRotationY()}
 **/
android.view.View.prototype.getRotationY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRotationY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSoundEffectsEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setSoundEffectsEnabled(boolean)}
 **/
android.view.View.prototype.setSoundEffectsEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSoundEffectsEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStartTemporaryDetach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onStartTemporaryDetach()}
 **/
android.view.View.prototype.onStartTemporaryDetach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStartTemporaryDetach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchNestedPreFling
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchNestedPreFling(float, float)}
 **/
android.view.View.prototype.dispatchNestedPreFling = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchNestedPreFling',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAnimationStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onAnimationStart()}
 **/
android.view.View.prototype.onAnimationStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAnimationStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityTraversalAfter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getAccessibilityTraversalAfter()}
 **/
android.view.View.prototype.getAccessibilityTraversalAfter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityTraversalAfter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onLayout(boolean, int, int, int, int)}
 **/
android.view.View.prototype.onLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLongClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setLongClickable(boolean)}
 **/
android.view.View.prototype.setLongClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLongClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postInvalidateDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#postInvalidateDelayed(long)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#postInvalidateDelayed(long, int, int, int, int)}
 **/
android.view.View.prototype.postInvalidateDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postInvalidateDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#clearAnimation()}
 **/
android.view.View.prototype.clearAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOverScrollMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getOverScrollMode()}
 **/
android.view.View.prototype.getOverScrollMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOverScrollMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParentForAccessibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getParentForAccessibility()}
 **/
android.view.View.prototype.getParentForAccessibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParentForAccessibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function verifyDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#verifyDrawable(android.graphics.drawable.Drawable)}
 **/
android.view.View.prototype.verifyDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'verifyDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setBackgroundDrawable(android.graphics.drawable.Drawable)}
 **/
android.view.View.prototype.setBackgroundDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnClickListener(android.view.View$OnClickListener)}
 **/
android.view.View.prototype.setOnClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setEnabled(boolean)}
 **/
android.view.View.prototype.setEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchGenericPointerEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchGenericPointerEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.dispatchGenericPointerEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchGenericPointerEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestFocusFromTouch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestFocusFromTouch()}
 **/
android.view.View.prototype.requestFocusFromTouch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestFocusFromTouch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getForegroundTintList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getForegroundTintList()}
 **/
android.view.View.prototype.getForegroundTintList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getForegroundTintList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSizeChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onSizeChanged(int, int, int, int)}
 **/
android.view.View.prototype.onSizeChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSizeChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawingCacheQuality
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDrawingCacheQuality()}
 **/
android.view.View.prototype.getDrawingCacheQuality = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawingCacheQuality',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchGenericFocusedEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchGenericFocusedEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.dispatchGenericFocusedEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchGenericFocusedEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchNestedFling
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchNestedFling(float, float, boolean)}
 **/
android.view.View.prototype.dispatchNestedFling = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchNestedFling',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHovered
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isHovered()}
 **/
android.view.View.prototype.isHovered = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHovered',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestRectangleOnScreen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestRectangleOnScreen(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestRectangleOnScreen(android.graphics.Rect, boolean)}
 **/
android.view.View.prototype.requestRectangleOnScreen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestRectangleOnScreen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocationOnScreen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLocationOnScreen(int[])}
 **/
android.view.View.prototype.getLocationOnScreen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocationOnScreen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getWidth()}
 **/
android.view.View.prototype.getWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayerType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLayerType()}
 **/
android.view.View.prototype.getLayerType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayerType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchDraw(android.graphics.Canvas)}
 **/
android.view.View.prototype.dispatchDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTransitionName()}
 **/
android.view.View.prototype.getTransitionName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTouchables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTouchables()}
 **/
android.view.View.prototype.getTouchables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTouchables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollbarFadingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollbarFadingEnabled(boolean)}
 **/
android.view.View.prototype.setScrollbarFadingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollbarFadingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActionMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#startActionMode(android.view.ActionMode$Callback)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#startActionMode(android.view.ActionMode$Callback, int)}
 **/
android.view.View.prototype.startActionMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActionMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLaidOut
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isLaidOut()}
 **/
android.view.View.prototype.isLaidOut = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLaidOut',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#hasFocus()}
 **/
android.view.View.prototype.hasFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDrawingCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isDrawingCacheEnabled()}
 **/
android.view.View.prototype.isDrawingCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDrawingCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeepScreenOn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setKeepScreenOn(boolean)}
 **/
android.view.View.prototype.setKeepScreenOn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeepScreenOn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onKeyUp(int, android.view.KeyEvent)}
 **/
android.view.View.prototype.onKeyUp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyUp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayerType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setLayerType(int, android.graphics.Paint)}
 **/
android.view.View.prototype.setLayerType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayerType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function buildLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#buildLayer()}
 **/
android.view.View.prototype.buildLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'buildLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isShown
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isShown()}
 **/
android.view.View.prototype.isShown = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isShown',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchHoverEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchHoverEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.dispatchHoverEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchHoverEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawingCacheBackgroundColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDrawingCacheBackgroundColor()}
 **/
android.view.View.prototype.getDrawingCacheBackgroundColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawingCacheBackgroundColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipToOutline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getClipToOutline()}
 **/
android.view.View.prototype.getClipToOutline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipToOutline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function draw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#draw(android.graphics.Canvas)}
 **/
android.view.View.prototype.draw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'draw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAttachedToWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isAttachedToWindow()}
 **/
android.view.View.prototype.isAttachedToWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAttachedToWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onScreenStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onScreenStateChanged(int)}
 **/
android.view.View.prototype.onScreenStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onScreenStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getRight()}
 **/
android.view.View.prototype.getRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPivotX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getPivotX()}
 **/
android.view.View.prototype.getPivotX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPivotX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPivotY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getPivotY()}
 **/
android.view.View.prototype.getPivotY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPivotY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setRight(int)}
 **/
android.view.View.prototype.setRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasWindowFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#hasWindowFocus()}
 **/
android.view.View.prototype.hasWindowFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasWindowFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScaleX(float)}
 **/
android.view.View.prototype.setScaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSaveInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onSaveInstanceState()}
 **/
android.view.View.prototype.onSaveInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSaveInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScaleY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScaleY(float)}
 **/
android.view.View.prototype.setScaleY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScaleY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDrawingCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setDrawingCacheEnabled(boolean)}
 **/
android.view.View.prototype.setDrawingCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDrawingCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTextDirection()}
 **/
android.view.View.prototype.getTextDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNextFocusUpId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setNextFocusUpId(int)}
 **/
android.view.View.prototype.setNextFocusUpId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNextFocusUpId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setForegroundGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setForegroundGravity(int)}
 **/
android.view.View.prototype.setForegroundGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setForegroundGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bringToFront
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#bringToFront()}
 **/
android.view.View.prototype.bringToFront = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bringToFront',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getRotation()}
 **/
android.view.View.prototype.getRotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchProvideStructure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchProvideStructure(android.view.ViewStructure)}
 **/
android.view.View.prototype.dispatchProvideStructure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchProvideStructure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchDrawableHotspotChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchDrawableHotspotChanged(float, float)}
 **/
android.view.View.prototype.dispatchDrawableHotspotChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchDrawableHotspotChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNestedScrollingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setNestedScrollingEnabled(boolean)}
 **/
android.view.View.prototype.setNestedScrollingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNestedScrollingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransitionName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTransitionName(java.lang.String)}
 **/
android.view.View.prototype.setTransitionName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransitionName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchKeyEventPreIme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchKeyEventPreIme(android.view.KeyEvent)}
 **/
android.view.View.prototype.dispatchKeyEventPreIme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchKeyEventPreIme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTrackballEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onTrackballEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.onTrackballEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTrackballEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateInputConnection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onCreateInputConnection(android.view.inputmethod.EditorInfo)}
 **/
android.view.View.prototype.onCreateInputConnection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateInputConnection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawingTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDrawingTime()}
 **/
android.view.View.prototype.getDrawingTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawingTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findViewWithTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#findViewWithTag(java.lang.Object)}
 **/
android.view.View.prototype.findViewWithTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findViewWithTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawableStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#drawableStateChanged()}
 **/
android.view.View.prototype.drawableStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawableStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFadingEdgeLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setFadingEdgeLength(int)}
 **/
android.view.View.prototype.setFadingEdgeLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFadingEdgeLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendAccessibilityEventUnchecked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#sendAccessibilityEventUnchecked(android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.prototype.sendAccessibilityEventUnchecked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendAccessibilityEventUnchecked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isActivated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isActivated()}
 **/
android.view.View.prototype.isActivated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isActivated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHorizontalFadingEdgeEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setHorizontalFadingEdgeEnabled(boolean)}
 **/
android.view.View.prototype.setHorizontalFadingEdgeEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHorizontalFadingEdgeEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScaleY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScaleY()}
 **/
android.view.View.prototype.getScaleY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScaleY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getForeground
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getForeground()}
 **/
android.view.View.prototype.getForeground = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getForeground',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScaleX()}
 **/
android.view.View.prototype.getScaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAccessibilityFocused
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isAccessibilityFocused()}
 **/
android.view.View.prototype.isAccessibilityFocused = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAccessibilityFocused',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startDrag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#startDrag(android.content.ClipData, android.view.View$DragShadowBuilder, java.lang.Object, int)}
 **/
android.view.View.prototype.startDrag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startDrag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isInLayout()}
 **/
android.view.View.prototype.isInLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLabelFor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLabelFor()}
 **/
android.view.View.prototype.getLabelFor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLabelFor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMinimumWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setMinimumWidth(int)}
 **/
android.view.View.prototype.setMinimumWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMinimumWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
android.view.View.prototype.onConfigurationChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onConfigurationChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performAccessibilityAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#performAccessibilityAction(int, android.os.Bundle)}
 **/
android.view.View.prototype.performAccessibilityAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performAccessibilityAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDisplayHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onDisplayHint(int)}
 **/
android.view.View.prototype.onDisplayHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDisplayHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPaddingRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setPaddingRelative(int, int, int, int)}
 **/
android.view.View.prototype.setPaddingRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPaddingRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onCreateContextMenu(android.view.ContextMenu)}
 **/
android.view.View.prototype.onCreateContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeHorizontalScrollExtent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#computeHorizontalScrollExtent()}
 **/
android.view.View.prototype.computeHorizontalScrollExtent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeHorizontalScrollExtent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setLeft(int)}
 **/
android.view.View.prototype.setLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDrawingCacheBackgroundColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setDrawingCacheBackgroundColor(int)}
 **/
android.view.View.prototype.setDrawingCacheBackgroundColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDrawingCacheBackgroundColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchDragEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchDragEvent(android.view.DragEvent)}
 **/
android.view.View.prototype.dispatchDragEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchDragEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVerticalFadingEdgeEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setVerticalFadingEdgeEnabled(boolean)}
 **/
android.view.View.prototype.setVerticalFadingEdgeEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVerticalFadingEdgeEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawingCache
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDrawingCache()}
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDrawingCache(boolean)}
 **/
android.view.View.prototype.getDrawingCache = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawingCache',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeVerticalScrollExtent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#computeVerticalScrollExtent()}
 **/
android.view.View.prototype.computeVerticalScrollExtent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeVerticalScrollExtent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performHapticFeedback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#performHapticFeedback(int)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#performHapticFeedback(int, int)}
 **/
android.view.View.prototype.performHapticFeedback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performHapticFeedback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTranslationY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTranslationY()}
 **/
android.view.View.prototype.getTranslationY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTranslationY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTranslationZ
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTranslationZ()}
 **/
android.view.View.prototype.getTranslationZ = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTranslationZ',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTag(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTag(int, java.lang.Object)}
 **/
android.view.View.prototype.setTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTranslationX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTranslationX()}
 **/
android.view.View.prototype.getTranslationX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTranslationX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnContextClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnContextClickListener(android.view.View$OnContextClickListener)}
 **/
android.view.View.prototype.setOnContextClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnContextClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#sendAccessibilityEvent(int)}
 **/
android.view.View.prototype.sendAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isPressed()}
 **/
android.view.View.prototype.isPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setBackgroundColor(int)}
 **/
android.view.View.prototype.setBackgroundColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getForegroundGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getForegroundGravity()}
 **/
android.view.View.prototype.getForegroundGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getForegroundGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyDispatcherState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getKeyDispatcherState()}
 **/
android.view.View.prototype.getKeyDispatcherState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyDispatcherState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onScrollChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onScrollChanged(int, int, int, int)}
 **/
android.view.View.prototype.onScrollChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onScrollChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchWindowVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchWindowVisibilityChanged(int)}
 **/
android.view.View.prototype.dispatchWindowVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchWindowVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setForeground
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setForeground(android.graphics.drawable.Drawable)}
 **/
android.view.View.prototype.setForeground = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setForeground',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollBarFadeDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScrollBarFadeDuration()}
 **/
android.view.View.prototype.getScrollBarFadeDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollBarFadeDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowToken
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getWindowToken()}
 **/
android.view.View.prototype.getWindowToken = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowToken',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTag()}
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTag(int)}
 **/
android.view.View.prototype.getTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMeasure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onMeasure(int, int)}
 **/
android.view.View.prototype.onMeasure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMeasure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRightFadingEdgeStrength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getRightFadingEdgeStrength()}
 **/
android.view.View.prototype.getRightFadingEdgeStrength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRightFadingEdgeStrength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnApplyWindowInsetsListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnApplyWindowInsetsListener(android.view.View$OnApplyWindowInsetsListener)}
 **/
android.view.View.prototype.setOnApplyWindowInsetsListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnApplyWindowInsetsListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offsetLeftAndRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#offsetLeftAndRight(int)}
 **/
android.view.View.prototype.offsetLeftAndRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offsetLeftAndRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRootView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getRootView()}
 **/
android.view.View.prototype.getRootView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRootView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isClickable()}
 **/
android.view.View.prototype.isClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDetachedFromWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onDetachedFromWindow()}
 **/
android.view.View.prototype.onDetachedFromWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDetachedFromWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDisplay()}
 **/
android.view.View.prototype.getDisplay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPaddingOffsetRequired
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isPaddingOffsetRequired()}
 **/
android.view.View.prototype.isPaddingOffsetRequired = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPaddingOffsetRequired',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function playSoundEffect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#playSoundEffect(int)}
 **/
android.view.View.prototype.playSoundEffect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'playSoundEffect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTouchDelegate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTouchDelegate()}
 **/
android.view.View.prototype.getTouchDelegate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTouchDelegate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMinimumHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getMinimumHeight()}
 **/
android.view.View.prototype.getMinimumHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMinimumHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnAttachStateChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#removeOnAttachStateChangeListener(android.view.View$OnAttachStateChangeListener)}
 **/
android.view.View.prototype.removeOnAttachStateChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnAttachStateChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpaque
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isOpaque()}
 **/
android.view.View.prototype.isOpaque = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpaque',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setClickable(boolean)}
 **/
android.view.View.prototype.setClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMeasuredState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getMeasuredState()}
 **/
android.view.View.prototype.getMeasuredState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMeasuredState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLongClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isLongClickable()}
 **/
android.view.View.prototype.isLongClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLongClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function animate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#animate()}
 **/
android.view.View.prototype.animate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'animate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStateListAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setStateListAnimator(android.animation.StateListAnimator)}
 **/
android.view.View.prototype.setStateListAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStateListAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getMatrix()}
 **/
android.view.View.prototype.getMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHapticFeedbackEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isHapticFeedbackEnabled()}
 **/
android.view.View.prototype.isHapticFeedbackEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHapticFeedbackEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function jumpDrawablesToCurrentState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#jumpDrawablesToCurrentState()}
 **/
android.view.View.prototype.jumpDrawablesToCurrentState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'jumpDrawablesToCurrentState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchGenericMotionEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.dispatchGenericMotionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchGenericMotionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTopFadingEdgeStrength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTopFadingEdgeStrength()}
 **/
android.view.View.prototype.getTopFadingEdgeStrength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTopFadingEdgeStrength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLeftPaddingOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLeftPaddingOffset()}
 **/
android.view.View.prototype.getLeftPaddingOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLeftPaddingOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setRotation(float)}
 **/
android.view.View.prototype.setRotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scrollTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#scrollTo(int, int)}
 **/
android.view.View.prototype.scrollTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scrollTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPivotX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setPivotX(float)}
 **/
android.view.View.prototype.setPivotX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPivotX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSetPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchSetPressed(boolean)}
 **/
android.view.View.prototype.dispatchSetPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSetPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPivotY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setPivotY(float)}
 **/
android.view.View.prototype.setPivotY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPivotY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function overScrollBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#overScrollBy(int, int, int, int, int, int, int, int, boolean)}
 **/
android.view.View.prototype.overScrollBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'overScrollBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startNestedScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#startNestedScroll(int)}
 **/
android.view.View.prototype.startNestedScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startNestedScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWillNotCacheDrawing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setWillNotCacheDrawing(boolean)}
 **/
android.view.View.prototype.setWillNotCacheDrawing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWillNotCacheDrawing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollBarSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollBarSize(int)}
 **/
android.view.View.prototype.setScrollBarSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollBarSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInitializeAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onInitializeAccessibilityEvent(android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.prototype.onInitializeAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInitializeAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#computeScroll()}
 **/
android.view.View.prototype.computeScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isScrollContainer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isScrollContainer()}
 **/
android.view.View.prototype.isScrollContainer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isScrollContainer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScrollX()}
 **/
android.view.View.prototype.getScrollX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTopPaddingOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTopPaddingOffset()}
 **/
android.view.View.prototype.getTopPaddingOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTopPaddingOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScrollY()}
 **/
android.view.View.prototype.getScrollY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDirty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isDirty()}
 **/
android.view.View.prototype.isDirty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDirty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setForegroundTintList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setForegroundTintList(android.content.res.ColorStateList)}
 **/
android.view.View.prototype.setForegroundTintList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setForegroundTintList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSaveEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isSaveEnabled()}
 **/
android.view.View.prototype.isSaveEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSaveEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
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
 * @see {@link http://developer.android.com/reference/android/view/View.html#getResources()}
 **/
android.view.View.prototype.getResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnKeyListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnKeyListener(android.view.View$OnKeyListener)}
 **/
android.view.View.prototype.setOnKeyListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnKeyListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offsetTopAndBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#offsetTopAndBottom(int)}
 **/
android.view.View.prototype.offsetTopAndBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offsetTopAndBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWillNotDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setWillNotDraw(boolean)}
 **/
android.view.View.prototype.setWillNotDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWillNotDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isSelected()}
 **/
android.view.View.prototype.isSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFocusedRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getFocusedRect(android.graphics.Rect)}
 **/
android.view.View.prototype.getFocusedRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFocusedRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchWindowSystemUiVisiblityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchWindowSystemUiVisiblityChanged(int)}
 **/
android.view.View.prototype.dispatchWindowSystemUiVisiblityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchWindowSystemUiVisiblityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowAttachCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getWindowAttachCount()}
 **/
android.view.View.prototype.getWindowAttachCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowAttachCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancelPendingInputEvents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#cancelPendingInputEvents()}
 **/
android.view.View.prototype.cancelPendingInputEvents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancelPendingInputEvents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMinimumHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setMinimumHeight(int)}
 **/
android.view.View.prototype.setMinimumHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMinimumHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getParent()}
 **/
android.view.View.prototype.getParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getWindowVisibility()}
 **/
android.view.View.prototype.getWindowVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function forceLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#forceLayout()}
 **/
android.view.View.prototype.forceLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'forceLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSystemUiVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchSystemUiVisibilityChanged(int)}
 **/
android.view.View.prototype.dispatchSystemUiVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSystemUiVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyMultiple
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onKeyMultiple(int, int, android.view.KeyEvent)}
 **/
android.view.View.prototype.onKeyMultiple = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyMultiple',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowSystemUiVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onWindowSystemUiVisibilityChanged(int)}
 **/
android.view.View.prototype.onWindowSystemUiVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowSystemUiVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInitializeAccessibilityNodeInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onInitializeAccessibilityNodeInfo(android.view.accessibility.AccessibilityNodeInfo)}
 **/
android.view.View.prototype.onInitializeAccessibilityNodeInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInitializeAccessibilityNodeInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLabelFor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setLabelFor(int)}
 **/
android.view.View.prototype.setLabelFor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLabelFor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVerticalScrollbarPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setVerticalScrollbarPosition(int)}
 **/
android.view.View.prototype.setVerticalScrollbarPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVerticalScrollbarPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function focusSearch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#focusSearch(int)}
 **/
android.view.View.prototype.focusSearch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'focusSearch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchTrackballEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchTrackballEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.dispatchTrackballEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchTrackballEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOutlineProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getOutlineProvider()}
 **/
android.view.View.prototype.getOutlineProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutlineProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNextFocusForwardId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getNextFocusForwardId()}
 **/
android.view.View.prototype.getNextFocusForwardId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNextFocusForwardId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalVisibleRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLocalVisibleRect(android.graphics.Rect)}
 **/
android.view.View.prototype.getLocalVisibleRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalVisibleRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canResolveTextDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#canResolveTextDirection()}
 **/
android.view.View.prototype.canResolveTextDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canResolveTextDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImportantForAccessibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getImportantForAccessibility()}
 **/
android.view.View.prototype.getImportantForAccessibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImportantForAccessibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawingRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getDrawingRect(android.graphics.Rect)}
 **/
android.view.View.prototype.getDrawingRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawingRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchKeyShortcutEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchKeyShortcutEvent(android.view.KeyEvent)}
 **/
android.view.View.prototype.dispatchKeyShortcutEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchKeyShortcutEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVerticalFadingEdgeLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getVerticalFadingEdgeLength()}
 **/
android.view.View.prototype.getVerticalFadingEdgeLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVerticalFadingEdgeLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOnFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getOnFocusChangeListener()}
 **/
android.view.View.prototype.getOnFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOnFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFocused
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isFocused()}
 **/
android.view.View.prototype.isFocused = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFocused',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTextDirectionResolved
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isTextDirectionResolved()}
 **/
android.view.View.prototype.isTextDirectionResolved = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTextDirectionResolved',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNextFocusDownId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getNextFocusDownId()}
 **/
android.view.View.prototype.getNextFocusDownId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNextFocusDownId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function measure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#measure(int, int)}
 **/
android.view.View.prototype.measure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'measure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClipToOutline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setClipToOutline(boolean)}
 **/
android.view.View.prototype.setClipToOutline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClipToOutline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVerticalScrollBarEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isVerticalScrollBarEnabled()}
 **/
android.view.View.prototype.isVerticalScrollBarEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVerticalScrollBarEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNextFocusRightId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setNextFocusRightId(int)}
 **/
android.view.View.prototype.setNextFocusRightId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNextFocusRightId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLeftFadingEdgeStrength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLeftFadingEdgeStrength()}
 **/
android.view.View.prototype.getLeftFadingEdgeStrength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLeftFadingEdgeStrength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unscheduleDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#unscheduleDrawable(android.graphics.drawable.Drawable, java.lang.Runnable)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#unscheduleDrawable(android.graphics.drawable.Drawable)}
 **/
android.view.View.prototype.unscheduleDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unscheduleDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFinishInflate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onFinishInflate()}
 **/
android.view.View.prototype.onFinishInflate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFinishInflate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestApplyInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestApplyInsets()}
 **/
android.view.View.prototype.requestApplyInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestApplyInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function awakenScrollBars
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#awakenScrollBars()}
 * @see {@link http://developer.android.com/reference/android/view/View.html#awakenScrollBars(int)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#awakenScrollBars(int, boolean)}
 **/
android.view.View.prototype.awakenScrollBars = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'awakenScrollBars',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHovered
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setHovered(boolean)}
 **/
android.view.View.prototype.setHovered = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHovered',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getId()}
 **/
android.view.View.prototype.getId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSaveFromParentEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setSaveFromParentEnabled(boolean)}
 **/
android.view.View.prototype.setSaveFromParentEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSaveFromParentEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStateListAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getStateListAnimator()}
 **/
android.view.View.prototype.getStateListAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStateListAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollBarDefaultDelayBeforeFade
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScrollBarDefaultDelayBeforeFade()}
 **/
android.view.View.prototype.getScrollBarDefaultDelayBeforeFade = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollBarDefaultDelayBeforeFade',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchTouchEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.dispatchTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSetAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onSetAlpha(int)}
 **/
android.view.View.prototype.onSetAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSetAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPaddingStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getPaddingStart()}
 **/
android.view.View.prototype.getPaddingStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPaddingStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getAnimation()}
 **/
android.view.View.prototype.getAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMeasuredWidthAndState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getMeasuredWidthAndState()}
 **/
android.view.View.prototype.getMeasuredWidthAndState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMeasuredWidthAndState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setImportantForAccessibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setImportantForAccessibility(int)}
 **/
android.view.View.prototype.setImportantForAccessibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setImportantForAccessibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPaddingLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getPaddingLeft()}
 **/
android.view.View.prototype.getPaddingLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPaddingLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnLayoutChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#addOnLayoutChangeListener(android.view.View$OnLayoutChangeListener)}
 **/
android.view.View.prototype.addOnLayoutChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnLayoutChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#findFocus()}
 **/
android.view.View.prototype.findFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canScrollHorizontally
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#canScrollHorizontally(int)}
 **/
android.view.View.prototype.canScrollHorizontally = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canScrollHorizontally',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onWindowVisibilityChanged(int)}
 **/
android.view.View.prototype.onWindowVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.prototype.onPopulateAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPopulateAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHitRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getHitRect(android.graphics.Rect)}
 **/
android.view.View.prototype.getHitRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHitRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnLayoutChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#removeOnLayoutChangeListener(android.view.View$OnLayoutChangeListener)}
 **/
android.view.View.prototype.removeOnLayoutChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnLayoutChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFinishTemporaryDetach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onFinishTemporaryDetach()}
 **/
android.view.View.prototype.onFinishTemporaryDetach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFinishTemporaryDetach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawableHotspotChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#drawableHotspotChanged(float, float)}
 **/
android.view.View.prototype.drawableHotspotChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawableHotspotChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
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
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLayoutDirection()}
 **/
android.view.View.prototype.getLayoutDirection = function() {
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
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function layout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#layout(int, int, int, int)}
 **/
android.view.View.prototype.layout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'layout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBaseline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getBaseline()}
 **/
android.view.View.prototype.getBaseline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBaseline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGlobalVisibleRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getGlobalVisibleRect(android.graphics.Rect, android.graphics.Point)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#getGlobalVisibleRect(android.graphics.Rect)}
 **/
android.view.View.prototype.getGlobalVisibleRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGlobalVisibleRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDrawingCacheQuality
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setDrawingCacheQuality(int)}
 **/
android.view.View.prototype.setDrawingCacheQuality = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDrawingCacheQuality',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHardwareAccelerated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isHardwareAccelerated()}
 **/
android.view.View.prototype.isHardwareAccelerated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHardwareAccelerated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestUnbufferedDispatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestUnbufferedDispatch(android.view.MotionEvent)}
 **/
android.view.View.prototype.requestUnbufferedDispatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestUnbufferedDispatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHasTransientState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setHasTransientState(boolean)}
 **/
android.view.View.prototype.setHasTransientState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHasTransientState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postInvalidateOnAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#postInvalidateOnAnimation()}
 * @see {@link http://developer.android.com/reference/android/view/View.html#postInvalidateOnAnimation(int, int, int, int)}
 **/
android.view.View.prototype.postInvalidateOnAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postInvalidateOnAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scheduleDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#scheduleDrawable(android.graphics.drawable.Drawable, java.lang.Runnable, long)}
 **/
android.view.View.prototype.scheduleDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scheduleDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnAttachStateChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#addOnAttachStateChangeListener(android.view.View$OnAttachStateChangeListener)}
 **/
android.view.View.prototype.addOnAttachStateChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnAttachStateChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getVisibility()}
 **/
android.view.View.prototype.getVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHorizontalScrollbarHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getHorizontalScrollbarHeight()}
 **/
android.view.View.prototype.getHorizontalScrollbarHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHorizontalScrollbarHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeHorizontalScrollOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#computeHorizontalScrollOffset()}
 **/
android.view.View.prototype.computeHorizontalScrollOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeHorizontalScrollOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findViewById
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#findViewById(int)}
 **/
android.view.View.prototype.findViewById = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findViewById',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getAccessibilityClassName()}
 **/
android.view.View.prototype.getAccessibilityClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnSystemUiVisibilityChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnSystemUiVisibilityChangeListener(android.view.View$OnSystemUiVisibilityChangeListener)}
 **/
android.view.View.prototype.setOnSystemUiVisibilityChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnSystemUiVisibilityChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#removeCallbacks(java.lang.Runnable)}
 **/
android.view.View.prototype.removeCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performLongClick
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#performLongClick()}
 **/
android.view.View.prototype.performLongClick = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performLongClick',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRotationX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setRotationX(float)}
 **/
android.view.View.prototype.setRotationX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRotationX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRotationY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setRotationY(float)}
 **/
android.view.View.prototype.setRotationY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRotationY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestFitSystemWindows
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestFitSystemWindows()}
 **/
android.view.View.prototype.requestFitSystemWindows = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestFitSystemWindows',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayerPaint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setLayerPaint(android.graphics.Paint)}
 **/
android.view.View.prototype.setLayerPaint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayerPaint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#showContextMenu()}
 **/
android.view.View.prototype.showContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setPressed(boolean)}
 **/
android.view.View.prototype.setPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCancelPendingInputEvents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onCancelPendingInputEvents()}
 **/
android.view.View.prototype.onCancelPendingInputEvents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCancelPendingInputEvents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasOnClickListeners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#hasOnClickListeners()}
 **/
android.view.View.prototype.hasOnClickListeners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasOnClickListeners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFocusable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setFocusable(boolean)}
 **/
android.view.View.prototype.setFocusable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFocusable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeVerticalScrollRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#computeVerticalScrollRange()}
 **/
android.view.View.prototype.computeVerticalScrollRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeVerticalScrollRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollContainer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollContainer(boolean)}
 **/
android.view.View.prototype.setScrollContainer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollContainer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackgroundTintMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getBackgroundTintMode()}
 **/
android.view.View.prototype.getBackgroundTintMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackgroundTintMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setAnimation(android.view.animation.Animation)}
 **/
android.view.View.prototype.setAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchNestedScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchNestedScroll(int, int, int, int, int[])}
 **/
android.view.View.prototype.dispatchNestedScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchNestedScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addFocusables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#addFocusables(java.util.ArrayList, int)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#addFocusables(java.util.ArrayList, int, int)}
 **/
android.view.View.prototype.addFocusables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addFocusables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isContextClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isContextClickable()}
 **/
android.view.View.prototype.isContextClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isContextClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemUiVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getSystemUiVisibility()}
 **/
android.view.View.prototype.getSystemUiVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemUiVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isEnabled()}
 **/
android.view.View.prototype.isEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeVerticalScrollOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#computeVerticalScrollOffset()}
 **/
android.view.View.prototype.computeVerticalScrollOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeVerticalScrollOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnGenericMotionListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnGenericMotionListener(android.view.View$OnGenericMotionListener)}
 **/
android.view.View.prototype.setOnGenericMotionListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnGenericMotionListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNextFocusLeftId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setNextFocusLeftId(int)}
 **/
android.view.View.prototype.setNextFocusLeftId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNextFocusLeftId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRtlPropertiesChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onRtlPropertiesChanged(int)}
 **/
android.view.View.prototype.onRtlPropertiesChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRtlPropertiesChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setLayoutParams(android.view.ViewGroup$LayoutParams)}
 **/
android.view.View.prototype.setLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeSystemWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#computeSystemWindowInsets(android.view.WindowInsets, android.graphics.Rect)}
 **/
android.view.View.prototype.computeSystemWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeSystemWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVerticalScrollbarWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getVerticalScrollbarWidth()}
 **/
android.view.View.prototype.getVerticalScrollbarWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVerticalScrollbarWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setContentDescription(java.lang.CharSequence)}
 **/
android.view.View.prototype.setContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnCreateContextMenuListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnCreateContextMenuListener(android.view.View$OnCreateContextMenuListener)}
 **/
android.view.View.prototype.setOnCreateContextMenuListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnCreateContextMenuListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundTintList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setBackgroundTintList(android.content.res.ColorStateList)}
 **/
android.view.View.prototype.setBackgroundTintList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundTintList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPaddingRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isPaddingRelative()}
 **/
android.view.View.prototype.isPaddingRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPaddingRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTranslationZ
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTranslationZ(float)}
 **/
android.view.View.prototype.setTranslationZ = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTranslationZ',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setElevation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setElevation(float)}
 **/
android.view.View.prototype.setElevation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setElevation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTranslationY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTranslationY(float)}
 **/
android.view.View.prototype.setTranslationY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTranslationY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canResolveLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#canResolveLayoutDirection()}
 **/
android.view.View.prototype.canResolveLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canResolveLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNextFocusUpId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getNextFocusUpId()}
 **/
android.view.View.prototype.getNextFocusUpId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNextFocusUpId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTranslationX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTranslationX(float)}
 **/
android.view.View.prototype.setTranslationX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTranslationX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postOnAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#postOnAnimation(java.lang.Runnable)}
 **/
android.view.View.prototype.postOnAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postOnAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchUnhandledMove
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchUnhandledMove(android.view.View, int)}
 **/
android.view.View.prototype.dispatchUnhandledMove = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchUnhandledMove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setForegroundTintMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setForegroundTintMode(android.graphics.PorterDuff$Mode)}
 **/
android.view.View.prototype.setForegroundTintMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setForegroundTintMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getViewTreeObserver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getViewTreeObserver()}
 **/
android.view.View.prototype.getViewTreeObserver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getViewTreeObserver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFocusable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isFocusable()}
 **/
android.view.View.prototype.isFocusable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFocusable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canScrollVertically
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#canScrollVertically(int)}
 **/
android.view.View.prototype.canScrollVertically = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canScrollVertically',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContextClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setContextClickable(boolean)}
 **/
android.view.View.prototype.setContextClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContextClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFilterTouchesWhenObscured
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getFilterTouchesWhenObscured()}
 **/
android.view.View.prototype.getFilterTouchesWhenObscured = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFilterTouchesWhenObscured',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getBottom()}
 **/
android.view.View.prototype.getBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSoundEffectsEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isSoundEffectsEnabled()}
 **/
android.view.View.prototype.isSoundEffectsEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSoundEffectsEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSolidColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getSolidColor()}
 **/
android.view.View.prototype.getSolidColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSolidColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getAlpha()}
 **/
android.view.View.prototype.getAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSuggestedMinimumHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getSuggestedMinimumHeight()}
 **/
android.view.View.prototype.getSuggestedMinimumHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSuggestedMinimumHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTop(int)}
 **/
android.view.View.prototype.setTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRightPaddingOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getRightPaddingOffset()}
 **/
android.view.View.prototype.getRightPaddingOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRightPaddingOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancelLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#cancelLongPress()}
 **/
android.view.View.prototype.cancelLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancelLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getTop()}
 **/
android.view.View.prototype.getTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setId(int)}
 **/
android.view.View.prototype.setId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInEditMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#isInEditMode()}
 **/
android.view.View.prototype.isInEditMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInEditMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onTouchEvent(android.view.MotionEvent)}
 **/
android.view.View.prototype.onTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTouchDelegate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setTouchDelegate(android.view.TouchDelegate)}
 **/
android.view.View.prototype.setTouchDelegate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTouchDelegate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onHoverChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onHoverChanged(boolean)}
 **/
android.view.View.prototype.onHoverChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onHoverChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNextFocusRightId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getNextFocusRightId()}
 **/
android.view.View.prototype.getNextFocusRightId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNextFocusRightId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNextFocusForwardId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setNextFocusForwardId(int)}
 **/
android.view.View.prototype.setNextFocusForwardId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNextFocusForwardId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMeasuredHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getMeasuredHeight()}
 **/
android.view.View.prototype.getMeasuredHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMeasuredHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchNestedPrePerformAccessibilityAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchNestedPrePerformAccessibilityAction(int, android.os.Bundle)}
 **/
android.view.View.prototype.dispatchNestedPrePerformAccessibilityAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchNestedPrePerformAccessibilityAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVerticalScrollBarEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setVerticalScrollBarEnabled(boolean)}
 **/
android.view.View.prototype.setVerticalScrollBarEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVerticalScrollBarEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchConfigurationChanged(android.content.res.Configuration)}
 **/
android.view.View.prototype.dispatchConfigurationChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchConfigurationChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollBarSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getScrollBarSize()}
 **/
android.view.View.prototype.getScrollBarSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollBarSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVerticalScrollbarPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getVerticalScrollbarPosition()}
 **/
android.view.View.prototype.getVerticalScrollbarPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVerticalScrollbarPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyDown
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onKeyDown(int, android.view.KeyEvent)}
 **/
android.view.View.prototype.onKeyDown = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyDown',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestFocus()}
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestFocus(int)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#requestFocus(int, android.graphics.Rect)}
 **/
android.view.View.prototype.requestFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowSystemUiVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getWindowSystemUiVisibility()}
 **/
android.view.View.prototype.getWindowSystemUiVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowSystemUiVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackground
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setBackground(android.graphics.drawable.Drawable)}
 **/
android.view.View.prototype.setBackground = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackground',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocationInWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLocationInWindow(int[])}
 **/
android.view.View.prototype.getLocationInWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocationInWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnHoverListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setOnHoverListener(android.view.View$OnHoverListener)}
 **/
android.view.View.prototype.setOnHoverListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnHoverListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityNodeProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getAccessibilityNodeProvider()}
 **/
android.view.View.prototype.getAccessibilityNodeProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityNodeProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollBarDefaultDelayBeforeFade
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setScrollBarDefaultDelayBeforeFade(int)}
 **/
android.view.View.prototype.setScrollBarDefaultDelayBeforeFade = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollBarDefaultDelayBeforeFade',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createAccessibilityNodeInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#createAccessibilityNodeInfo()}
 **/
android.view.View.prototype.createAccessibilityNodeInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createAccessibilityNodeInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNextFocusLeftId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getNextFocusLeftId()}
 **/
android.view.View.prototype.getNextFocusLeftId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNextFocusLeftId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkInputConnectionProxy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#checkInputConnectionProxy(android.view.View)}
 **/
android.view.View.prototype.checkInputConnectionProxy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkInputConnectionProxy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCheckIsTextEditor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onCheckIsTextEditor()}
 **/
android.view.View.prototype.onCheckIsTextEditor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCheckIsTextEditor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowFocusChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#onWindowFocusChanged(boolean)}
 **/
android.view.View.prototype.onWindowFocusChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowFocusChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFitsSystemWindows
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#setFitsSystemWindows(boolean)}
 **/
android.view.View.prototype.setFitsSystemWindows = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFitsSystemWindows',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#createContextMenu(android.view.ContextMenu)}
 **/
android.view.View.prototype.createContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#invalidate(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#invalidate(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/View.html#invalidate()}
 **/
android.view.View.prototype.invalidate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addTouchables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#addTouchables(java.util.ArrayList)}
 **/
android.view.View.prototype.addTouchables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTouchables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getX()}
 **/
android.view.View.prototype.getX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getY()}
 **/
android.view.View.prototype.getY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getZ
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getZ()}
 **/
android.view.View.prototype.getZ = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getZ',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canResolveTextAlignment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#canResolveTextAlignment()}
 **/
android.view.View.prototype.canResolveTextAlignment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canResolveTextAlignment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchNestedPreScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#dispatchNestedPreScroll(int, int, int[], int[])}
 **/
android.view.View.prototype.dispatchNestedPreScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchNestedPreScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getContext()}
 **/
android.view.View.prototype.getContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackground
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getBackground()}
 **/
android.view.View.prototype.getBackground = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackground',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFitsSystemWindows
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getFitsSystemWindows()}
 **/
android.view.View.prototype.getFitsSystemWindows = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFitsSystemWindows',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getLeft()}
 **/
android.view.View.prototype.getLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.html#getWindowId()}
 **/
android.view.View.prototype.getWindowId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View') {
			return new android.view.View(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.View;
