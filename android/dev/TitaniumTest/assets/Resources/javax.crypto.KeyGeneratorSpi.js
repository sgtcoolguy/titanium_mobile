/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.crypto.KeyGeneratorSpi
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.crypto = global.javax.crypto || {};

/**
 * @class javax.crypto.KeyGeneratorSpi
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGeneratorSpi.html}
 **/
javax.crypto.KeyGeneratorSpi = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.crypto.KeyGeneratorSpi') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: javax.crypto.KeyGeneratorSpi. Create a subclass using javax.crypto.KeyGeneratorSpi.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.crypto.KeyGeneratorSpi.prototype = Object.create(SuperClass.prototype);
javax.crypto.KeyGeneratorSpi.prototype.constructor = javax.crypto.KeyGeneratorSpi;

javax.crypto.KeyGeneratorSpi.className = "javax.crypto.KeyGeneratorSpi";
javax.crypto.KeyGeneratorSpi.prototype.className = "javax.crypto.KeyGeneratorSpi";

// class property
Object.defineProperty(javax.crypto.KeyGeneratorSpi, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.crypto.KeyGeneratorSpi',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
javax.crypto.KeyGeneratorSpi.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'javax.crypto.KeyGeneratorSpi',
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
	whatever.prototype = Object.create(javax.crypto.KeyGeneratorSpi.prototype);
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
 * @function engineGenerateKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGeneratorSpi.html#engineGenerateKey()}
 **/
javax.crypto.KeyGeneratorSpi.prototype.engineGenerateKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGenerateKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.KeyGeneratorSpi') {
			return new javax.crypto.KeyGeneratorSpi(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGeneratorSpi.html#engineInit(java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGeneratorSpi.html#engineInit(java.security.spec.AlgorithmParameterSpec, java.security.SecureRandom)}
 * @see {@link http://developer.android.com/reference/javax/crypto/KeyGeneratorSpi.html#engineInit(int, java.security.SecureRandom)}
 **/
javax.crypto.KeyGeneratorSpi.prototype.engineInit = function() {
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
		if (result.apiName === 'javax.crypto.KeyGeneratorSpi') {
			return new javax.crypto.KeyGeneratorSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.crypto.KeyGeneratorSpi;
