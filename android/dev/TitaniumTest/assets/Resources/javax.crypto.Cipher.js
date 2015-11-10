/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.crypto.Cipher
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.crypto = global.javax.crypto || {};

/**
 * @class javax.crypto.Cipher
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html}
 **/
javax.crypto.Cipher = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.crypto.Cipher') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'javax.crypto.Cipher',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.crypto.Cipher.prototype = Object.create(SuperClass.prototype);
javax.crypto.Cipher.prototype.constructor = javax.crypto.Cipher;

javax.crypto.Cipher.className = "javax.crypto.Cipher";
javax.crypto.Cipher.prototype.className = "javax.crypto.Cipher";

// class property
Object.defineProperty(javax.crypto.Cipher, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.crypto.Cipher',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
javax.crypto.Cipher.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'javax.crypto.Cipher',
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
	whatever.prototype = Object.create(javax.crypto.Cipher.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#WRAP_MODE}
 */
javax.crypto.Cipher.WRAP_MODE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#UNWRAP_MODE}
 */
javax.crypto.Cipher.UNWRAP_MODE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#ENCRYPT_MODE}
 */
javax.crypto.Cipher.ENCRYPT_MODE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#PUBLIC_KEY}
 */
javax.crypto.Cipher.PUBLIC_KEY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#PRIVATE_KEY}
 */
javax.crypto.Cipher.PRIVATE_KEY = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#SECRET_KEY}
 */
javax.crypto.Cipher.SECRET_KEY = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#DECRYPT_MODE}
 */
javax.crypto.Cipher.DECRYPT_MODE = 2;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getMaxAllowedParameterSpec
 * @static
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getMaxAllowedParameterSpec(java.lang.String)}
 **/
javax.crypto.Cipher.getMaxAllowedParameterSpec = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getMaxAllowedParameterSpec',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxAllowedKeyLength
 * @static
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getMaxAllowedKeyLength(java.lang.String)}
 **/
javax.crypto.Cipher.getMaxAllowedKeyLength = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getMaxAllowedKeyLength',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstance
 * @static
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getInstance(java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getInstance(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getInstance(java.lang.String, java.security.Provider)}
 **/
javax.crypto.Cipher.getInstance = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getInstance',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function init
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#init(int, java.security.Key)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#init(int, java.security.Key, java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#init(int, java.security.Key, java.security.spec.AlgorithmParameterSpec)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#init(int, java.security.Key, java.security.spec.AlgorithmParameterSpec, java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#init(int, java.security.Key, java.security.AlgorithmParameters)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#init(int, java.security.Key, java.security.AlgorithmParameters, java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#init(int, java.security.cert.Certificate)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#init(int, java.security.cert.Certificate, java.security.SecureRandom)}
 **/
javax.crypto.Cipher.prototype.init = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'init',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAlgorithm
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getAlgorithm()}
 **/
javax.crypto.Cipher.prototype.getAlgorithm = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAlgorithm',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function update
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#update(byte[])}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#update(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#update(byte[], int, int, byte[])}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#update(byte[], int, int, byte[], int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#update(java.nio.ByteBuffer, java.nio.ByteBuffer)}
 **/
javax.crypto.Cipher.prototype.update = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'update',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOutputSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getOutputSize(int)}
 **/
javax.crypto.Cipher.prototype.getOutputSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutputSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateAAD
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#updateAAD(byte[])}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#updateAAD(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#updateAAD(java.nio.ByteBuffer)}
 **/
javax.crypto.Cipher.prototype.updateAAD = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateAAD',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function doFinal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#doFinal()}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#doFinal(byte[], int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#doFinal(byte[])}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#doFinal(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#doFinal(byte[], int, int, byte[])}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#doFinal(byte[], int, int, byte[], int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#doFinal(java.nio.ByteBuffer, java.nio.ByteBuffer)}
 **/
javax.crypto.Cipher.prototype.doFinal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'doFinal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unwrap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#unwrap(byte[], java.lang.String, int)}
 **/
javax.crypto.Cipher.prototype.unwrap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unwrap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExemptionMechanism
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getExemptionMechanism()}
 **/
javax.crypto.Cipher.prototype.getExemptionMechanism = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExemptionMechanism',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBlockSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getBlockSize()}
 **/
javax.crypto.Cipher.prototype.getBlockSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBlockSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIV
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getIV()}
 **/
javax.crypto.Cipher.prototype.getIV = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIV',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParameters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getParameters()}
 **/
javax.crypto.Cipher.prototype.getParameters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParameters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#getProvider()}
 **/
javax.crypto.Cipher.prototype.getProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function wrap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Cipher.html#wrap(java.security.Key)}
 **/
javax.crypto.Cipher.prototype.wrap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'wrap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Cipher') {
			return new javax.crypto.Cipher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.crypto.Cipher;
