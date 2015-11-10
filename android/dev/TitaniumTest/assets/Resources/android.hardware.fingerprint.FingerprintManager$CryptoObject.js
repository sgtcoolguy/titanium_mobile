/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.hardware.fingerprint.FingerprintManager.CryptoObject
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.hardware = global.android.hardware || {};
global.android.hardware.fingerprint = global.android.hardware.fingerprint || {};
global.android.hardware.fingerprint.FingerprintManager = global.android.hardware.fingerprint.FingerprintManager || {};

/**
 * @class android.hardware.fingerprint.FingerprintManager.CryptoObject
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.CryptoObject.html}
 **/
android.hardware.fingerprint.FingerprintManager.CryptoObject = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.hardware.fingerprint.FingerprintManager$CryptoObject') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.hardware.fingerprint.FingerprintManager$CryptoObject',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.hardware.fingerprint.FingerprintManager.CryptoObject.prototype = Object.create(SuperClass.prototype);
android.hardware.fingerprint.FingerprintManager.CryptoObject.prototype.constructor = android.hardware.fingerprint.FingerprintManager.CryptoObject;

android.hardware.fingerprint.FingerprintManager.CryptoObject.className = "android.hardware.fingerprint.FingerprintManager$CryptoObject";
android.hardware.fingerprint.FingerprintManager.CryptoObject.prototype.className = "android.hardware.fingerprint.FingerprintManager$CryptoObject";

// class property
Object.defineProperty(android.hardware.fingerprint.FingerprintManager.CryptoObject, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.hardware.fingerprint.FingerprintManager$CryptoObject',
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
 * @function getMac
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.CryptoObject.html#getMac()}
 **/
android.hardware.fingerprint.FingerprintManager.CryptoObject.prototype.getMac = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMac',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager$CryptoObject') {
			return new android.hardware.fingerprint.FingerprintManager.CryptoObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCipher
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.CryptoObject.html#getCipher()}
 **/
android.hardware.fingerprint.FingerprintManager.CryptoObject.prototype.getCipher = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCipher',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager$CryptoObject') {
			return new android.hardware.fingerprint.FingerprintManager.CryptoObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSignature
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.CryptoObject.html#getSignature()}
 **/
android.hardware.fingerprint.FingerprintManager.CryptoObject.prototype.getSignature = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSignature',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager$CryptoObject') {
			return new android.hardware.fingerprint.FingerprintManager.CryptoObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.hardware.fingerprint.FingerprintManager.CryptoObject;
