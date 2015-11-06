/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.WindowManager.LayoutParams
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.WindowManager = global.android.view.WindowManager || {};

/**
 * @class android.view.WindowManager.LayoutParams
 * @extends android.view.ViewGroup.LayoutParams 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html}
 **/
android.view.WindowManager.LayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.WindowManager$LayoutParams') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.WindowManager$LayoutParams',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup$LayoutParams');
android.view.WindowManager.LayoutParams.prototype = Object.create(SuperClass.prototype);
android.view.WindowManager.LayoutParams.prototype.constructor = android.view.WindowManager.LayoutParams;

android.view.WindowManager.LayoutParams.className = "android.view.WindowManager$LayoutParams";
android.view.WindowManager.LayoutParams.prototype.className = "android.view.WindowManager$LayoutParams";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_INSET_DECOR}
 */
android.view.WindowManager.LayoutParams.FLAG_LAYOUT_INSET_DECOR = 65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION}
 */
android.view.WindowManager.LayoutParams.TYPE_APPLICATION = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TRANSLUCENT_NAVIGATION}
 */
android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FORMAT_CHANGED}
 */
android.view.WindowManager.LayoutParams.FORMAT_CHANGED = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_PRIORITY_PHONE}
 */
android.view.WindowManager.LayoutParams.TYPE_PRIORITY_PHONE = 2007;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TURN_SCREEN_ON}
 */
android.view.WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ROTATION_ANIMATION_JUMPCUT}
 */
android.view.WindowManager.LayoutParams.ROTATION_ANIMATION_JUMPCUT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_VISIBLE}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_VISIBLE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_UNCHANGED}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_UNCHANGED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_CHANGED}
 */
android.view.WindowManager.LayoutParams.TYPE_CHANGED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_IN_SCREEN}
 */
android.view.WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_GPU}
 */
android.view.WindowManager.LayoutParams.MEMORY_TYPE_GPU = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_ATTACHED_IN_DECOR}
 */
android.view.WindowManager.LayoutParams.FLAG_LAYOUT_ATTACHED_IN_DECOR = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SHOW_WALLPAPER}
 */
android.view.WindowManager.LayoutParams.FLAG_SHOW_WALLPAPER = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_ALLOW_LOCK_WHILE_SCREEN_ON}
 */
android.view.WindowManager.LayoutParams.FLAG_ALLOW_LOCK_WHILE_SCREEN_ON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SYSTEM_DIALOG}
 */
android.view.WindowManager.LayoutParams.TYPE_SYSTEM_DIALOG = 2008;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAGS_CHANGED}
 */
android.view.WindowManager.LayoutParams.FLAGS_CHANGED = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_FORCE_NOT_FULLSCREEN}
 */
android.view.WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ANIMATION_CHANGED}
 */
android.view.WindowManager.LayoutParams.ANIMATION_CHANGED = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TRANSLUCENT_STATUS}
 */
android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_ADJUST_RESIZE}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FIRST_SUB_WINDOW}
 */
android.view.WindowManager.LayoutParams.FIRST_SUB_WINDOW = 1000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_INPUT_METHOD_DIALOG}
 */
android.view.WindowManager.LayoutParams.TYPE_INPUT_METHOD_DIALOG = 2012;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_NORMAL}
 */
android.view.WindowManager.LayoutParams.MEMORY_TYPE_NORMAL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_IS_FORWARD_NAVIGATION}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_IS_FORWARD_NAVIGATION = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_ALWAYS_HIDDEN}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_ADJUST_UNSPECIFIED}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_UNSPECIFIED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_PUSH_BUFFERS}
 */
android.view.WindowManager.LayoutParams.MEMORY_TYPE_PUSH_BUFFERS = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_MEDIA}
 */
android.view.WindowManager.LayoutParams.TYPE_APPLICATION_MEDIA = 1001;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#BRIGHTNESS_OVERRIDE_OFF}
 */
android.view.WindowManager.LayoutParams.BRIGHTNESS_OVERRIDE_OFF = 0.0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_CHANGED}
 */
android.view.WindowManager.LayoutParams.MEMORY_TYPE_CHANGED = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_NOT_FOCUSABLE}
 */
android.view.WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#BRIGHTNESS_OVERRIDE_FULL}
 */
android.view.WindowManager.LayoutParams.BRIGHTNESS_OVERRIDE_FULL = 1.0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#DIM_AMOUNT_CHANGED}
 */
android.view.WindowManager.LayoutParams.DIM_AMOUNT_CHANGED = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_DIM_BEHIND}
 */
android.view.WindowManager.LayoutParams.FLAG_DIM_BEHIND = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_ALWAYS_VISIBLE}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_VISIBLE = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_KEYGUARD_DIALOG}
 */
android.view.WindowManager.LayoutParams.TYPE_KEYGUARD_DIALOG = 2009;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_BASE_APPLICATION}
 */
android.view.WindowManager.LayoutParams.TYPE_BASE_APPLICATION = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_ALT_FOCUSABLE_IM}
 */
android.view.WindowManager.LayoutParams.FLAG_ALT_FOCUSABLE_IM = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ROTATION_ANIMATION_CROSSFADE}
 */
android.view.WindowManager.LayoutParams.ROTATION_ANIMATION_CROSSFADE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SHOW_WHEN_LOCKED}
 */
android.view.WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SEARCH_BAR}
 */
android.view.WindowManager.LayoutParams.TYPE_SEARCH_BAR = 2001;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_HIDDEN}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_DISMISS_KEYGUARD}
 */
android.view.WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SYSTEM_ERROR}
 */
android.view.WindowManager.LayoutParams.TYPE_SYSTEM_ERROR = 2010;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FIRST_SYSTEM_WINDOW}
 */
android.view.WindowManager.LayoutParams.FIRST_SYSTEM_WINDOW = 2000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ALPHA_CHANGED}
 */
android.view.WindowManager.LayoutParams.ALPHA_CHANGED = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FIRST_APPLICATION_WINDOW}
 */
android.view.WindowManager.LayoutParams.FIRST_APPLICATION_WINDOW = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SECURE}
 */
android.view.WindowManager.LayoutParams.FLAG_SECURE = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_NOT_TOUCHABLE}
 */
android.view.WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#LAST_SUB_WINDOW}
 */
android.view.WindowManager.LayoutParams.LAST_SUB_WINDOW = 1999;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SCALED}
 */
android.view.WindowManager.LayoutParams.FLAG_SCALED = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_ADJUST_NOTHING}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_NOTHING = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_BLUR_BEHIND}
 */
android.view.WindowManager.LayoutParams.FLAG_BLUR_BEHIND = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_ACCESSIBILITY_OVERLAY}
 */
android.view.WindowManager.LayoutParams.TYPE_ACCESSIBILITY_OVERLAY = 2032;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_IN_OVERSCAN}
 */
android.view.WindowManager.LayoutParams.FLAG_LAYOUT_IN_OVERSCAN = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_IGNORE_CHEEK_PRESSES}
 */
android.view.WindowManager.LayoutParams.FLAG_IGNORE_CHEEK_PRESSES = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LOCAL_FOCUS_MODE}
 */
android.view.WindowManager.LayoutParams.FLAG_LOCAL_FOCUS_MODE = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_DITHER}
 */
android.view.WindowManager.LayoutParams.FLAG_DITHER = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SCREEN_BRIGHTNESS_CHANGED}
 */
android.view.WindowManager.LayoutParams.SCREEN_BRIGHTNESS_CHANGED = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ROTATION_ANIMATION_CHANGED}
 */
android.view.WindowManager.LayoutParams.ROTATION_ANIMATION_CHANGED = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SYSTEM_ALERT}
 */
android.view.WindowManager.LayoutParams.TYPE_SYSTEM_ALERT = 2003;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_WALLPAPER}
 */
android.view.WindowManager.LayoutParams.TYPE_WALLPAPER = 2013;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_MODE_CHANGED}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_MODE_CHANGED = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_HARDWARE}
 */
android.view.WindowManager.LayoutParams.MEMORY_TYPE_HARDWARE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#BRIGHTNESS_OVERRIDE_NONE}
 */
android.view.WindowManager.LayoutParams.BRIGHTNESS_OVERRIDE_NONE = -1.0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_MASK_STATE}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_MASK_STATE = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SCREEN_ORIENTATION_CHANGED}
 */
android.view.WindowManager.LayoutParams.SCREEN_ORIENTATION_CHANGED = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_PRIVATE_PRESENTATION}
 */
android.view.WindowManager.LayoutParams.TYPE_PRIVATE_PRESENTATION = 2030;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TOUCHABLE_WHEN_WAKING}
 */
android.view.WindowManager.LayoutParams.FLAG_TOUCHABLE_WHEN_WAKING = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_SUB_PANEL}
 */
android.view.WindowManager.LayoutParams.TYPE_APPLICATION_SUB_PANEL = 1002;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_ATTACHED_DIALOG}
 */
android.view.WindowManager.LayoutParams.TYPE_APPLICATION_ATTACHED_DIALOG = 1003;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_ADJUST_PAN}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_STATUS_BAR_PANEL}
 */
android.view.WindowManager.LayoutParams.TYPE_STATUS_BAR_PANEL = 2014;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_HARDWARE_ACCELERATED}
 */
android.view.WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_PANEL}
 */
android.view.WindowManager.LayoutParams.TYPE_APPLICATION_PANEL = 1000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#LAYOUT_CHANGED}
 */
android.view.WindowManager.LayoutParams.LAYOUT_CHANGED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_KEEP_SCREEN_ON}
 */
android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_FULLSCREEN}
 */
android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#LAST_SYSTEM_WINDOW}
 */
android.view.WindowManager.LayoutParams.LAST_SYSTEM_WINDOW = 2999;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_STARTING}
 */
android.view.WindowManager.LayoutParams.TYPE_APPLICATION_STARTING = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TITLE_CHANGED}
 */
android.view.WindowManager.LayoutParams.TITLE_CHANGED = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_STATUS_BAR}
 */
android.view.WindowManager.LayoutParams.TYPE_STATUS_BAR = 2000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS}
 */
android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS = -2147483648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_NO_LIMITS}
 */
android.view.WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_NOT_TOUCH_MODAL}
 */
android.view.WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SPLIT_TOUCH}
 */
android.view.WindowManager.LayoutParams.FLAG_SPLIT_TOUCH = 8388608;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_INPUT_METHOD}
 */
android.view.WindowManager.LayoutParams.TYPE_INPUT_METHOD = 2011;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_MASK_ADJUST}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_MASK_ADJUST = 240;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_TOAST}
 */
android.view.WindowManager.LayoutParams.TYPE_TOAST = 2005;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#LAST_APPLICATION_WINDOW}
 */
android.view.WindowManager.LayoutParams.LAST_APPLICATION_WINDOW = 99;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_UNSPECIFIED}
 */
android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_UNSPECIFIED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ROTATION_ANIMATION_ROTATE}
 */
android.view.WindowManager.LayoutParams.ROTATION_ANIMATION_ROTATE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_PHONE}
 */
android.view.WindowManager.LayoutParams.TYPE_PHONE = 2002;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_WATCH_OUTSIDE_TOUCH}
 */
android.view.WindowManager.LayoutParams.FLAG_WATCH_OUTSIDE_TOUCH = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SYSTEM_OVERLAY}
 */
android.view.WindowManager.LayoutParams.TYPE_SYSTEM_OVERLAY = 2006;

// Static fields
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#CREATOR
Object.defineProperty(android.view.WindowManager.LayoutParams, 'CREATOR', {
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
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#type
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'type', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'type'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'type',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#dimAmount
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'dimAmount', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'dimAmount'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'dimAmount',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#flags
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'flags', {
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
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#horizontalWeight
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'horizontalWeight', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'horizontalWeight'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'horizontalWeight',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#screenOrientation
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'screenOrientation', {
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
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#windowAnimations
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'windowAnimations', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'windowAnimations'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'windowAnimations',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#horizontalMargin
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'horizontalMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'horizontalMargin'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'horizontalMargin',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#verticalWeight
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'verticalWeight', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'verticalWeight'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'verticalWeight',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#verticalMargin
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'verticalMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'verticalMargin'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'verticalMargin',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#token
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'token', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'token'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'token',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#screenBrightness
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'screenBrightness', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'screenBrightness'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'screenBrightness',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#x
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'x', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'x'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'x',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#y
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'y', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'y'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'y',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#memoryType
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'memoryType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'memoryType'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'memoryType',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#preferredDisplayModeId
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'preferredDisplayModeId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'preferredDisplayModeId'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'preferredDisplayModeId',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#buttonBrightness
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'buttonBrightness', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'buttonBrightness'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'buttonBrightness',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#preferredRefreshRate
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'preferredRefreshRate', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'preferredRefreshRate'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'preferredRefreshRate',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#format
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'format', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'format'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'format',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#rotationAnimation
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'rotationAnimation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'rotationAnimation'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'rotationAnimation',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#alpha
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'alpha', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'alpha'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'alpha',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#packageName
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'packageName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'packageName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'packageName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#systemUiVisibility
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'systemUiVisibility', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'systemUiVisibility'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'systemUiVisibility',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#softInputMode
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'softInputMode', {
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
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#gravity
Object.defineProperty(android.view.WindowManager.LayoutParams.prototype, 'gravity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'gravity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new android.view.WindowManager.LayoutParams(result);
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
			field: 'gravity',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function mayUseInputMethod
 * @static
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#mayUseInputMethod(int)}
 **/
android.view.WindowManager.LayoutParams.mayUseInputMethod = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'mayUseInputMethod',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new android.view.WindowManager.LayoutParams(result);
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
 * @function getTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#getTitle()}
 **/
android.view.WindowManager.LayoutParams.prototype.getTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new android.view.WindowManager.LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function debug
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#debug(java.lang.String)}
 **/
android.view.WindowManager.LayoutParams.prototype.debug = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'debug',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new android.view.WindowManager.LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#setTitle(java.lang.CharSequence)}
 **/
android.view.WindowManager.LayoutParams.prototype.setTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new android.view.WindowManager.LayoutParams(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#toString()}
 **/
android.view.WindowManager.LayoutParams.prototype.toString = function() {
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
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new android.view.WindowManager.LayoutParams(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#describeContents()}
 **/
android.view.WindowManager.LayoutParams.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new android.view.WindowManager.LayoutParams(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.WindowManager.LayoutParams.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new android.view.WindowManager.LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copyFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#copyFrom(android.view.WindowManager$LayoutParams)}
 **/
android.view.WindowManager.LayoutParams.prototype.copyFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copyFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new android.view.WindowManager.LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.WindowManager.LayoutParams;
