/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.security.keystore.KeyGenParameterSpec
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.security = global.android.security || {};
global.android.security.keystore = global.android.security.keystore || {};

/**
 * @class android.security.keystore.KeyGenParameterSpec
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html}
 **/
android.security.keystore.KeyGenParameterSpec = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.security.keystore.KeyGenParameterSpec') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.security.keystore.KeyGenParameterSpec',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.security.keystore.KeyGenParameterSpec.prototype = Object.create(SuperClass.prototype);
android.security.keystore.KeyGenParameterSpec.prototype.constructor = android.security.keystore.KeyGenParameterSpec;

android.security.keystore.KeyGenParameterSpec.className = "android.security.keystore.KeyGenParameterSpec";
android.security.keystore.KeyGenParameterSpec.prototype.className = "android.security.keystore.KeyGenParameterSpec";

// class property
Object.defineProperty(android.security.keystore.KeyGenParameterSpec, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.security.keystore.KeyGenParameterSpec',
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
 * @function isRandomizedEncryptionRequired
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#isRandomizedEncryptionRequired()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.isRandomizedEncryptionRequired = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRandomizedEncryptionRequired',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUserAuthenticationValidityDurationSeconds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getUserAuthenticationValidityDurationSeconds()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getUserAuthenticationValidityDurationSeconds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUserAuthenticationValidityDurationSeconds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeystoreAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getKeystoreAlias()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getKeystoreAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeystoreAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAlgorithmParameterSpec
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getAlgorithmParameterSpec()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getAlgorithmParameterSpec = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAlgorithmParameterSpec',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCertificateSerialNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getCertificateSerialNumber()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getCertificateSerialNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCertificateSerialNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDigestsSpecified
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#isDigestsSpecified()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.isDigestsSpecified = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDigestsSpecified',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyValidityStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getKeyValidityStart()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getKeyValidityStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyValidityStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyValidityForConsumptionEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getKeyValidityForConsumptionEnd()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getKeyValidityForConsumptionEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyValidityForConsumptionEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCertificateNotAfter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getCertificateNotAfter()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getCertificateNotAfter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCertificateNotAfter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUserAuthenticationRequired
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#isUserAuthenticationRequired()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.isUserAuthenticationRequired = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isUserAuthenticationRequired',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncryptionPaddings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getEncryptionPaddings()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getEncryptionPaddings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncryptionPaddings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCertificateNotBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getCertificateNotBefore()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getCertificateNotBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCertificateNotBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPurposes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getPurposes()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getPurposes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPurposes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBlockModes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getBlockModes()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getBlockModes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBlockModes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeySize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getKeySize()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getKeySize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeySize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCertificateSubject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getCertificateSubject()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getCertificateSubject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCertificateSubject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyValidityForOriginationEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getKeyValidityForOriginationEnd()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getKeyValidityForOriginationEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyValidityForOriginationEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDigests
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getDigests()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getDigests = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDigests',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSignaturePaddings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.html#getSignaturePaddings()}
 **/
android.security.keystore.KeyGenParameterSpec.prototype.getSignaturePaddings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSignaturePaddings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec') {
			return new android.security.keystore.KeyGenParameterSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.security.keystore.KeyGenParameterSpec;
