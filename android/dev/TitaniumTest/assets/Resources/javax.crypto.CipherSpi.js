/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.crypto.CipherSpi
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.crypto = global.javax.crypto || {};

/**
 * @class javax.crypto.CipherSpi
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html}
 **/
javax.crypto.CipherSpi = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.crypto.CipherSpi') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: javax.crypto.CipherSpi. Create a subclass using javax.crypto.CipherSpi.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.crypto.CipherSpi.prototype = Object.create(SuperClass.prototype);
javax.crypto.CipherSpi.prototype.constructor = javax.crypto.CipherSpi;

javax.crypto.CipherSpi.className = "javax.crypto.CipherSpi";
javax.crypto.CipherSpi.prototype.className = "javax.crypto.CipherSpi";

// class property
Object.defineProperty(javax.crypto.CipherSpi, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.crypto.CipherSpi',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
javax.crypto.CipherSpi.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'javax.crypto.CipherSpi',
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
	whatever.prototype = Object.create(javax.crypto.CipherSpi.prototype);
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
 * @function engineUnwrap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineUnwrap(byte[], java.lang.String, int)}
 **/
javax.crypto.CipherSpi.prototype.engineUnwrap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineUnwrap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineUpdateAAD
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineUpdateAAD(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineUpdateAAD(java.nio.ByteBuffer)}
 **/
javax.crypto.CipherSpi.prototype.engineUpdateAAD = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineUpdateAAD',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetBlockSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineGetBlockSize()}
 **/
javax.crypto.CipherSpi.prototype.engineGetBlockSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetBlockSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineDoFinal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineDoFinal(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineDoFinal(byte[], int, int, byte[], int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineDoFinal(java.nio.ByteBuffer, java.nio.ByteBuffer)}
 **/
javax.crypto.CipherSpi.prototype.engineDoFinal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineDoFinal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineSetMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineSetMode(java.lang.String)}
 **/
javax.crypto.CipherSpi.prototype.engineSetMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSetMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetIV
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineGetIV()}
 **/
javax.crypto.CipherSpi.prototype.engineGetIV = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetIV',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineGetParameters()}
 **/
javax.crypto.CipherSpi.prototype.engineGetParameters = function() {
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
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetKeySize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineGetKeySize(java.security.Key)}
 **/
javax.crypto.CipherSpi.prototype.engineGetKeySize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetKeySize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineSetPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineSetPadding(java.lang.String)}
 **/
javax.crypto.CipherSpi.prototype.engineSetPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSetPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetOutputSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineGetOutputSize(int)}
 **/
javax.crypto.CipherSpi.prototype.engineGetOutputSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetOutputSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineWrap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineWrap(java.security.Key)}
 **/
javax.crypto.CipherSpi.prototype.engineWrap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineWrap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineInit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineInit(int, java.security.Key, java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineInit(int, java.security.Key, java.security.spec.AlgorithmParameterSpec, java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineInit(int, java.security.Key, java.security.AlgorithmParameters, java.security.SecureRandom)}
 **/
javax.crypto.CipherSpi.prototype.engineInit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineInit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineUpdate(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineUpdate(byte[], int, int, byte[], int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/CipherSpi.html#engineUpdate(java.nio.ByteBuffer, java.nio.ByteBuffer)}
 **/
javax.crypto.CipherSpi.prototype.engineUpdate = function() {
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
		if (result.apiName === 'javax.crypto.CipherSpi') {
			return new javax.crypto.CipherSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.crypto.CipherSpi;
