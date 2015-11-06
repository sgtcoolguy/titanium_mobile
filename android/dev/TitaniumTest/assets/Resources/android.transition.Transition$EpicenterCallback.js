/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.Transition.EpicenterCallback
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};
global.android.transition.Transition = global.android.transition.Transition || {};

/**
 * @class android.transition.Transition.EpicenterCallback
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/Transition.EpicenterCallback.html}
 **/
android.transition.Transition.EpicenterCallback = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.transition.Transition$EpicenterCallback') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.transition.Transition$EpicenterCallback',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.Transition.EpicenterCallback.prototype = Object.create(SuperClass.prototype);
android.transition.Transition.EpicenterCallback.prototype.constructor = android.transition.Transition.EpicenterCallback;

android.transition.Transition.EpicenterCallback.className = "android.transition.Transition$EpicenterCallback";
android.transition.Transition.EpicenterCallback.prototype.className = "android.transition.Transition$EpicenterCallback";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onGetEpicenter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.EpicenterCallback.html#onGetEpicenter(android.transition.Transition)}
 **/
android.transition.Transition.EpicenterCallback.prototype.onGetEpicenter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onGetEpicenter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition$EpicenterCallback') {
			return new android.transition.Transition.EpicenterCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.Transition.EpicenterCallback;
