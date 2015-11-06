/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.PathMotion
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};

/**
 * @class android.transition.PathMotion
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/PathMotion.html}
 **/
android.transition.PathMotion = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.transition.PathMotion') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.transition.PathMotion',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.PathMotion.prototype = Object.create(SuperClass.prototype);
android.transition.PathMotion.prototype.constructor = android.transition.PathMotion;

android.transition.PathMotion.className = "android.transition.PathMotion";
android.transition.PathMotion.prototype.className = "android.transition.PathMotion";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/PathMotion.html#getPath(float, float, float, float)}
 **/
android.transition.PathMotion.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.PathMotion') {
			return new android.transition.PathMotion(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.PathMotion;
