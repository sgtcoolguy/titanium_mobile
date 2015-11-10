/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.hardware.fingerprint.FingerprintManager
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.hardware = global.android.hardware || {};
global.android.hardware.fingerprint = global.android.hardware.fingerprint || {};

/**
 * @class android.hardware.fingerprint.FingerprintManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html}
 **/
android.hardware.fingerprint.FingerprintManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.hardware.fingerprint.FingerprintManager') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.hardware.fingerprint.FingerprintManager',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.hardware.fingerprint.FingerprintManager.prototype = Object.create(SuperClass.prototype);
android.hardware.fingerprint.FingerprintManager.prototype.constructor = android.hardware.fingerprint.FingerprintManager;

android.hardware.fingerprint.FingerprintManager.className = "android.hardware.fingerprint.FingerprintManager";
android.hardware.fingerprint.FingerprintManager.prototype.className = "android.hardware.fingerprint.FingerprintManager";

// class property
Object.defineProperty(android.hardware.fingerprint.FingerprintManager, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.hardware.fingerprint.FingerprintManager',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.hardware.fingerprint.FingerprintManager.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.hardware.fingerprint.FingerprintManager',
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
	whatever.prototype = Object.create(android.hardware.fingerprint.FingerprintManager.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ERROR_UNABLE_TO_PROCESS}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ERROR_UNABLE_TO_PROCESS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ACQUIRED_PARTIAL}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ACQUIRED_PARTIAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ERROR_HW_UNAVAILABLE}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ERROR_HW_UNAVAILABLE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ERROR_TIMEOUT}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ERROR_TIMEOUT = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ACQUIRED_IMAGER_DIRTY}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ACQUIRED_IMAGER_DIRTY = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ACQUIRED_INSUFFICIENT}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ACQUIRED_INSUFFICIENT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ERROR_NO_SPACE}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ERROR_NO_SPACE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ACQUIRED_TOO_FAST}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ACQUIRED_TOO_FAST = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ERROR_LOCKOUT}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ERROR_LOCKOUT = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ACQUIRED_TOO_SLOW}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ACQUIRED_TOO_SLOW = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ERROR_CANCELED}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ERROR_CANCELED = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#FINGERPRINT_ACQUIRED_GOOD}
 */
android.hardware.fingerprint.FingerprintManager.FINGERPRINT_ACQUIRED_GOOD = 0;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isHardwareDetected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#isHardwareDetected()}
 **/
android.hardware.fingerprint.FingerprintManager.prototype.isHardwareDetected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHardwareDetected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager') {
			return new android.hardware.fingerprint.FingerprintManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function authenticate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#authenticate(android.hardware.fingerprint.FingerprintManager$CryptoObject, android.os.CancellationSignal, int, android.hardware.fingerprint.FingerprintManager$AuthenticationCallback, android.os.Handler)}
 **/
android.hardware.fingerprint.FingerprintManager.prototype.authenticate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'authenticate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager') {
			return new android.hardware.fingerprint.FingerprintManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasEnrolledFingerprints
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html#hasEnrolledFingerprints()}
 **/
android.hardware.fingerprint.FingerprintManager.prototype.hasEnrolledFingerprints = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasEnrolledFingerprints',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.hardware.fingerprint.FingerprintManager') {
			return new android.hardware.fingerprint.FingerprintManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.hardware.fingerprint.FingerprintManager;
