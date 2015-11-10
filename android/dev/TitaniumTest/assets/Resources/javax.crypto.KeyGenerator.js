/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.crypto.KeyGenerator
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.crypto = global.javax.crypto || {};

/**
 * @class javax.crypto.KeyGenerator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html}
 **/
javax.crypto.KeyGenerator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.crypto.KeyGenerator') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'javax.crypto.KeyGenerator',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.crypto.KeyGenerator.prototype = Object.create(SuperClass.prototype);
javax.crypto.KeyGenerator.prototype.constructor = javax.crypto.KeyGenerator;

javax.crypto.KeyGenerator.className = "javax.crypto.KeyGenerator";
javax.crypto.KeyGenerator.prototype.className = "javax.crypto.KeyGenerator";

// class property
Object.defineProperty(javax.crypto.KeyGenerator, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.crypto.KeyGenerator',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
javax.crypto.KeyGenerator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'javax.crypto.KeyGenerator',
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
	whatever.prototype = Object.create(javax.crypto.KeyGenerator.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getInstance
 * @static
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#getInstance(java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#getInstance(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#getInstance(java.lang.String, java.security.Provider)}
 **/
javax.crypto.KeyGenerator.getInstance = function() {
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
		if (result.apiName === 'javax.crypto.KeyGenerator') {
			return new javax.crypto.KeyGenerator(result);
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
 * @function generateKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#generateKey()}
 **/
javax.crypto.KeyGenerator.prototype.generateKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.KeyGenerator') {
			return new javax.crypto.KeyGenerator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function init
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#init(java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#init(java.security.spec.AlgorithmParameterSpec)}
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#init(java.security.spec.AlgorithmParameterSpec, java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#init(int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#init(int, java.security.SecureRandom)}
 **/
javax.crypto.KeyGenerator.prototype.init = function() {
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
		if (result.apiName === 'javax.crypto.KeyGenerator') {
			return new javax.crypto.KeyGenerator(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#getAlgorithm()}
 **/
javax.crypto.KeyGenerator.prototype.getAlgorithm = function() {
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
		if (result.apiName === 'javax.crypto.KeyGenerator') {
			return new javax.crypto.KeyGenerator(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGenerator.html#getProvider()}
 **/
javax.crypto.KeyGenerator.prototype.getProvider = function() {
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
		if (result.apiName === 'javax.crypto.KeyGenerator') {
			return new javax.crypto.KeyGenerator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.crypto.KeyGenerator;
