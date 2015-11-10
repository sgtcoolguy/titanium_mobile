/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.CancellationSignal
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.CancellationSignal
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html}
 **/
android.os.CancellationSignal = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.os.CancellationSignal') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.os.CancellationSignal',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.CancellationSignal.prototype = Object.create(SuperClass.prototype);
android.os.CancellationSignal.prototype.constructor = android.os.CancellationSignal;

android.os.CancellationSignal.className = "android.os.CancellationSignal";
android.os.CancellationSignal.prototype.className = "android.os.CancellationSignal";

// class property
Object.defineProperty(android.os.CancellationSignal, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.os.CancellationSignal',
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
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html#cancel()}
 **/
android.os.CancellationSignal.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.CancellationSignal') {
			return new android.os.CancellationSignal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function throwIfCanceled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html#throwIfCanceled()}
 **/
android.os.CancellationSignal.prototype.throwIfCanceled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'throwIfCanceled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.CancellationSignal') {
			return new android.os.CancellationSignal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCanceled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html#isCanceled()}
 **/
android.os.CancellationSignal.prototype.isCanceled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCanceled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.CancellationSignal') {
			return new android.os.CancellationSignal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnCancelListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html#setOnCancelListener(android.os.CancellationSignal$OnCancelListener)}
 **/
android.os.CancellationSignal.prototype.setOnCancelListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnCancelListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.CancellationSignal') {
			return new android.os.CancellationSignal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.CancellationSignal;
