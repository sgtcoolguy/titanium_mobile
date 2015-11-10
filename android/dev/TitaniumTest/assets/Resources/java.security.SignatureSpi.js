/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.SignatureSpi
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.SignatureSpi
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html}
 **/
java.security.SignatureSpi = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.SignatureSpi') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.security.SignatureSpi. Create a subclass using java.security.SignatureSpi.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.SignatureSpi.prototype = Object.create(SuperClass.prototype);
java.security.SignatureSpi.prototype.constructor = java.security.SignatureSpi;

java.security.SignatureSpi.className = "java.security.SignatureSpi";
java.security.SignatureSpi.prototype.className = "java.security.SignatureSpi";

// class property
Object.defineProperty(java.security.SignatureSpi, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.SignatureSpi',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.SignatureSpi.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.SignatureSpi',
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
	whatever.prototype = Object.create(java.security.SignatureSpi.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/security/SignatureSpi.html#appRandom
Object.defineProperty(java.security.SignatureSpi.prototype, 'appRandom', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'appRandom'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.security.SignatureSpi') {
				return new java.security.SignatureSpi(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'appRandom',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function engineInitVerify
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineInitVerify(java.security.PublicKey)}
 **/
java.security.SignatureSpi.prototype.engineInitVerify = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineInitVerify',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineInitSign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineInitSign(java.security.PrivateKey)}
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineInitSign(java.security.PrivateKey, java.security.SecureRandom)}
 **/
java.security.SignatureSpi.prototype.engineInitSign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineInitSign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineGetParameter(java.lang.String)}
 **/
java.security.SignatureSpi.prototype.engineGetParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#clone()}
 **/
java.security.SignatureSpi.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineSetParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineSetParameter(java.lang.String, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineSetParameter(java.security.spec.AlgorithmParameterSpec)}
 **/
java.security.SignatureSpi.prototype.engineSetParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSetParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineSign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineSign()}
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineSign(byte[], int, int)}
 **/
java.security.SignatureSpi.prototype.engineSign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetParameters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineGetParameters()}
 **/
java.security.SignatureSpi.prototype.engineGetParameters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetParameters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineVerify
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineVerify(byte[])}
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineVerify(byte[], int, int)}
 **/
java.security.SignatureSpi.prototype.engineVerify = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineVerify',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineUpdate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineUpdate(byte)}
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineUpdate(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/security/SignatureSpi.html#engineUpdate(java.nio.ByteBuffer)}
 **/
java.security.SignatureSpi.prototype.engineUpdate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineUpdate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SignatureSpi') {
			return new java.security.SignatureSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.SignatureSpi;
