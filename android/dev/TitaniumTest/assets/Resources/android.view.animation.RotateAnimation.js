/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.RotateAnimation
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.animation = global.android.view.animation || {};

/**
 * @class android.view.animation.RotateAnimation
 * @extends android.view.animation.Animation 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/RotateAnimation.html}
 **/
android.view.animation.RotateAnimation = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.animation.RotateAnimation') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.animation.RotateAnimation',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.animation.Animation');
android.view.animation.RotateAnimation.prototype = Object.create(SuperClass.prototype);
android.view.animation.RotateAnimation.prototype.constructor = android.view.animation.RotateAnimation;

android.view.animation.RotateAnimation.className = "android.view.animation.RotateAnimation";
android.view.animation.RotateAnimation.prototype.className = "android.view.animation.RotateAnimation";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function applyTransformation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/RotateAnimation.html#applyTransformation(float, android.view.animation.Transformation)}
 **/
android.view.animation.RotateAnimation.prototype.applyTransformation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyTransformation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.RotateAnimation') {
			return new android.view.animation.RotateAnimation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initialize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/RotateAnimation.html#initialize(int, int, int, int)}
 **/
android.view.animation.RotateAnimation.prototype.initialize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initialize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.RotateAnimation') {
			return new android.view.animation.RotateAnimation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.animation.RotateAnimation;
