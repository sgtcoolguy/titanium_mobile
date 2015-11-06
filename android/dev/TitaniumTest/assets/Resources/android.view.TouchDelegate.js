/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.TouchDelegate
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.TouchDelegate
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html}
 **/
android.view.TouchDelegate = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.TouchDelegate') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.TouchDelegate',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.TouchDelegate.prototype = Object.create(SuperClass.prototype);
android.view.TouchDelegate.prototype.constructor = android.view.TouchDelegate;

android.view.TouchDelegate.className = "android.view.TouchDelegate";
android.view.TouchDelegate.prototype.className = "android.view.TouchDelegate";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#BELOW}
 */
android.view.TouchDelegate.BELOW = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#TO_LEFT}
 */
android.view.TouchDelegate.TO_LEFT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#TO_RIGHT}
 */
android.view.TouchDelegate.TO_RIGHT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#ABOVE}
 */
android.view.TouchDelegate.ABOVE = 1;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#onTouchEvent(android.view.MotionEvent)}
 **/
android.view.TouchDelegate.prototype.onTouchEvent = function() {
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
		if (result.apiName === 'android.view.TouchDelegate') {
			return new android.view.TouchDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.TouchDelegate;
