/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.hardware.fingerprint.FingerprintManager.AuthenticationCallback
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.hardware = global.android.hardware || {};
global.android.hardware.fingerprint = global.android.hardware.fingerprint || {};
global.android.hardware.fingerprint.FingerprintManager = global.android.hardware.fingerprint.FingerprintManager || {};

/**
 * @class android.hardware.fingerprint.FingerprintManager.AuthenticationCallback
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.AuthenticationCallback.html}
 **/
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.hardware.fingerprint.FingerprintManager$AuthenticationCallback') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.hardware.fingerprint.FingerprintManager$AuthenticationCallback. Create a subclass using android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.prototype = Object.create(SuperClass.prototype);
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.prototype.constructor = android.hardware.fingerprint.FingerprintManager.AuthenticationCallback;

android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.className = "android.hardware.fingerprint.FingerprintManager$AuthenticationCallback";
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.prototype.className = "android.hardware.fingerprint.FingerprintManager$AuthenticationCallback";

// class property
Object.defineProperty(android.hardware.fingerprint.FingerprintManager.AuthenticationCallback, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.hardware.fingerprint.FingerprintManager$AuthenticationCallback',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.hardware.fingerprint.FingerprintManager$AuthenticationCallback',
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
	whatever.prototype = Object.create(android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.prototype);
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
 * @function onAuthenticationHelp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.AuthenticationCallback.html#onAuthenticationHelp(int, java.lang.CharSequence)}
 **/
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.prototype.onAuthenticationHelp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAuthenticationHelp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager$AuthenticationCallback') {
			return new android.hardware.fingerprint.FingerprintManager.AuthenticationCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAuthenticationSucceeded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.AuthenticationCallback.html#onAuthenticationSucceeded(android.hardware.fingerprint.FingerprintManager$AuthenticationResult)}
 **/
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.prototype.onAuthenticationSucceeded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAuthenticationSucceeded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager$AuthenticationCallback') {
			return new android.hardware.fingerprint.FingerprintManager.AuthenticationCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAuthenticationError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.AuthenticationCallback.html#onAuthenticationError(int, java.lang.CharSequence)}
 **/
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.prototype.onAuthenticationError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAuthenticationError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager$AuthenticationCallback') {
			return new android.hardware.fingerprint.FingerprintManager.AuthenticationCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAuthenticationFailed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.AuthenticationCallback.html#onAuthenticationFailed()}
 **/
android.hardware.fingerprint.FingerprintManager.AuthenticationCallback.prototype.onAuthenticationFailed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAuthenticationFailed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager$AuthenticationCallback') {
			return new android.hardware.fingerprint.FingerprintManager.AuthenticationCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.hardware.fingerprint.FingerprintManager.AuthenticationCallback;
