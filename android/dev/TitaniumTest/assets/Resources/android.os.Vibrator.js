/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.Vibrator
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.Vibrator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html}
 **/
android.os.Vibrator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.os.Vibrator') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.os.Vibrator. Create a subclass using android.os.Vibrator.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.Vibrator.prototype = Object.create(SuperClass.prototype);
android.os.Vibrator.prototype.constructor = android.os.Vibrator;

android.os.Vibrator.className = "android.os.Vibrator";
android.os.Vibrator.prototype.className = "android.os.Vibrator";

// class property
Object.defineProperty(android.os.Vibrator, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.os.Vibrator',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.os.Vibrator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.os.Vibrator',
		overrides: overrides
	});

	// Generate a JS wrapper for our dynamic subclass
	var whatever = function() {
		var result = subclassProxy.newInstance(arguments);
		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};

		// TODO Set up super?!
	};
	// it extends the JS wrapper for the parent type
	whatever.prototype = Object.create(android.os.Vibrator.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

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
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#cancel()}
 **/
android.os.Vibrator.prototype.cancel = function() {
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
		if (result.apiName === 'android.os.Vibrator') {
			return new android.os.Vibrator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function vibrate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#vibrate(long)}
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#vibrate(long, android.media.AudioAttributes)}
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#vibrate(long[], int)}
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#vibrate(long[], int, android.media.AudioAttributes)}
 **/
android.os.Vibrator.prototype.vibrate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'vibrate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Vibrator') {
			return new android.os.Vibrator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasVibrator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#hasVibrator()}
 **/
android.os.Vibrator.prototype.hasVibrator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasVibrator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Vibrator') {
			return new android.os.Vibrator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.Vibrator;
