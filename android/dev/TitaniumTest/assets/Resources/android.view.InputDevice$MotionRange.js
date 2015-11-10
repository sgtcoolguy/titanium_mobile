/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.InputDevice.MotionRange
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.InputDevice = global.android.view.InputDevice || {};

/**
 * @class android.view.InputDevice.MotionRange
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html}
 **/
android.view.InputDevice.MotionRange = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.InputDevice$MotionRange') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.InputDevice$MotionRange',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.InputDevice.MotionRange.prototype = Object.create(SuperClass.prototype);
android.view.InputDevice.MotionRange.prototype.constructor = android.view.InputDevice.MotionRange;

android.view.InputDevice.MotionRange.className = "android.view.InputDevice$MotionRange";
android.view.InputDevice.MotionRange.prototype.className = "android.view.InputDevice$MotionRange";

// class property
Object.defineProperty(android.view.InputDevice.MotionRange, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.InputDevice$MotionRange',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getFlat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getFlat()}
 **/
android.view.InputDevice.MotionRange.prototype.getFlat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResolution
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getResolution()}
 **/
android.view.InputDevice.MotionRange.prototype.getResolution = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResolution',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getMin()}
 **/
android.view.InputDevice.MotionRange.prototype.getMin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getSource()}
 **/
android.view.InputDevice.MotionRange.prototype.getSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMax
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getMax()}
 **/
android.view.InputDevice.MotionRange.prototype.getMax = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMax',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getRange()}
 **/
android.view.InputDevice.MotionRange.prototype.getRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFromSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#isFromSource(int)}
 **/
android.view.InputDevice.MotionRange.prototype.isFromSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFromSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAxis
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getAxis()}
 **/
android.view.InputDevice.MotionRange.prototype.getAxis = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAxis',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFuzz
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getFuzz()}
 **/
android.view.InputDevice.MotionRange.prototype.getFuzz = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFuzz',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new android.view.InputDevice.MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.InputDevice.MotionRange;
