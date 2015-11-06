/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.ColorFilter
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.ColorFilter
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/ColorFilter.html}
 **/
android.graphics.ColorFilter = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.ColorFilter') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.ColorFilter',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.ColorFilter.prototype = Object.create(SuperClass.prototype);
android.graphics.ColorFilter.prototype.constructor = android.graphics.ColorFilter;

android.graphics.ColorFilter.className = "android.graphics.ColorFilter";
android.graphics.ColorFilter.prototype.className = "android.graphics.ColorFilter";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/ColorFilter.html#finalize()}
 **/
android.graphics.ColorFilter.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.ColorFilter') {
			return new android.graphics.ColorFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.ColorFilter;
