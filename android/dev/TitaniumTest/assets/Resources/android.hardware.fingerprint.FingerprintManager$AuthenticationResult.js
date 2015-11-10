/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.hardware.fingerprint.FingerprintManager.AuthenticationResult
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.hardware = global.android.hardware || {};
global.android.hardware.fingerprint = global.android.hardware.fingerprint || {};
global.android.hardware.fingerprint.FingerprintManager = global.android.hardware.fingerprint.FingerprintManager || {};

/**
 * @class android.hardware.fingerprint.FingerprintManager.AuthenticationResult
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.AuthenticationResult.html}
 **/
android.hardware.fingerprint.FingerprintManager.AuthenticationResult = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.hardware.fingerprint.FingerprintManager$AuthenticationResult') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.hardware.fingerprint.FingerprintManager$AuthenticationResult',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.hardware.fingerprint.FingerprintManager.AuthenticationResult.prototype = Object.create(SuperClass.prototype);
android.hardware.fingerprint.FingerprintManager.AuthenticationResult.prototype.constructor = android.hardware.fingerprint.FingerprintManager.AuthenticationResult;

android.hardware.fingerprint.FingerprintManager.AuthenticationResult.className = "android.hardware.fingerprint.FingerprintManager$AuthenticationResult";
android.hardware.fingerprint.FingerprintManager.AuthenticationResult.prototype.className = "android.hardware.fingerprint.FingerprintManager$AuthenticationResult";

// class property
Object.defineProperty(android.hardware.fingerprint.FingerprintManager.AuthenticationResult, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.hardware.fingerprint.FingerprintManager$AuthenticationResult',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.hardware.fingerprint.FingerprintManager.AuthenticationResult.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.hardware.fingerprint.FingerprintManager$AuthenticationResult',
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
	whatever.prototype = Object.create(android.hardware.fingerprint.FingerprintManager.AuthenticationResult.prototype);
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
 * @function getCryptoObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.AuthenticationResult.html#getCryptoObject()}
 **/
android.hardware.fingerprint.FingerprintManager.AuthenticationResult.prototype.getCryptoObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCryptoObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager$AuthenticationResult') {
			return new android.hardware.fingerprint.FingerprintManager.AuthenticationResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.hardware.fingerprint.FingerprintManager.AuthenticationResult;
