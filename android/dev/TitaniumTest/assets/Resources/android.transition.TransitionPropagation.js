/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.TransitionPropagation
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};

/**
 * @class android.transition.TransitionPropagation
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html}
 **/
android.transition.TransitionPropagation = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.transition.TransitionPropagation') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.transition.TransitionPropagation',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.TransitionPropagation.prototype = Object.create(SuperClass.prototype);
android.transition.TransitionPropagation.prototype.constructor = android.transition.TransitionPropagation;

android.transition.TransitionPropagation.className = "android.transition.TransitionPropagation";
android.transition.TransitionPropagation.prototype.className = "android.transition.TransitionPropagation";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function captureValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#captureValues(android.transition.TransitionValues)}
 **/
android.transition.TransitionPropagation.prototype.captureValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'captureValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new android.transition.TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPropagationProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#getPropagationProperties()}
 **/
android.transition.TransitionPropagation.prototype.getPropagationProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPropagationProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new android.transition.TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#getStartDelay(android.view.ViewGroup, android.transition.Transition, android.transition.TransitionValues, android.transition.TransitionValues)}
 **/
android.transition.TransitionPropagation.prototype.getStartDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new android.transition.TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.TransitionPropagation;
