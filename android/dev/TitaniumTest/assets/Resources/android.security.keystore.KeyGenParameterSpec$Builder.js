/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.security.keystore.KeyGenParameterSpec.Builder
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.security = global.android.security || {};
global.android.security.keystore = global.android.security.keystore || {};
global.android.security.keystore.KeyGenParameterSpec = global.android.security.keystore.KeyGenParameterSpec || {};

/**
 * @class android.security.keystore.KeyGenParameterSpec.Builder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html}
 **/
android.security.keystore.KeyGenParameterSpec.Builder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.security.keystore.KeyGenParameterSpec$Builder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.security.keystore.KeyGenParameterSpec.Builder.prototype = Object.create(SuperClass.prototype);
android.security.keystore.KeyGenParameterSpec.Builder.prototype.constructor = android.security.keystore.KeyGenParameterSpec.Builder;

android.security.keystore.KeyGenParameterSpec.Builder.className = "android.security.keystore.KeyGenParameterSpec$Builder";
android.security.keystore.KeyGenParameterSpec.Builder.prototype.className = "android.security.keystore.KeyGenParameterSpec$Builder";

// class property
Object.defineProperty(android.security.keystore.KeyGenParameterSpec.Builder, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.security.keystore.KeyGenParameterSpec$Builder',
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
 * @function setUserAuthenticationValidityDurationSeconds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setUserAuthenticationValidityDurationSeconds(int)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setUserAuthenticationValidityDurationSeconds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUserAuthenticationValidityDurationSeconds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCertificateNotBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setCertificateNotBefore(java.util.Date)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setCertificateNotBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCertificateNotBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAlgorithmParameterSpec
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setAlgorithmParameterSpec(java.security.spec.AlgorithmParameterSpec)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setAlgorithmParameterSpec = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAlgorithmParameterSpec',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSignaturePaddings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setSignaturePaddings(java.lang.String[])}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setSignaturePaddings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSignaturePaddings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeyValidityForConsumptionEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setKeyValidityForConsumptionEnd(java.util.Date)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setKeyValidityForConsumptionEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeyValidityForConsumptionEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeyValidityEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setKeyValidityEnd(java.util.Date)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setKeyValidityEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeyValidityEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUserAuthenticationRequired
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setUserAuthenticationRequired(boolean)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setUserAuthenticationRequired = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUserAuthenticationRequired',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEncryptionPaddings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setEncryptionPaddings(java.lang.String[])}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setEncryptionPaddings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEncryptionPaddings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBlockModes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setBlockModes(java.lang.String[])}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setBlockModes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBlockModes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function build
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#build()}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.build = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'build',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCertificateSubject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setCertificateSubject(javax.security.auth.x500.X500Principal)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setCertificateSubject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCertificateSubject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeyValidityForOriginationEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setKeyValidityForOriginationEnd(java.util.Date)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setKeyValidityForOriginationEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeyValidityForOriginationEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDigests
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setDigests(java.lang.String[])}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setDigests = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDigests',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRandomizedEncryptionRequired
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setRandomizedEncryptionRequired(boolean)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setRandomizedEncryptionRequired = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRandomizedEncryptionRequired',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCertificateSerialNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setCertificateSerialNumber(java.math.BigInteger)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setCertificateSerialNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCertificateSerialNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCertificateNotAfter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setCertificateNotAfter(java.util.Date)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setCertificateNotAfter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCertificateNotAfter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeySize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setKeySize(int)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setKeySize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeySize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeyValidityStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setKeyValidityStart(java.util.Date)}
 **/
android.security.keystore.KeyGenParameterSpec.Builder.prototype.setKeyValidityStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeyValidityStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.security.keystore.KeyGenParameterSpec$Builder') {
			return new android.security.keystore.KeyGenParameterSpec.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.security.keystore.KeyGenParameterSpec.Builder;
