/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.crypto.MacSpi
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.crypto = global.javax.crypto || {};

/**
 * @class javax.crypto.MacSpi
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html}
 **/
javax.crypto.MacSpi = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.crypto.MacSpi') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: javax.crypto.MacSpi. Create a subclass using javax.crypto.MacSpi.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.crypto.MacSpi.prototype = Object.create(SuperClass.prototype);
javax.crypto.MacSpi.prototype.constructor = javax.crypto.MacSpi;

javax.crypto.MacSpi.className = "javax.crypto.MacSpi";
javax.crypto.MacSpi.prototype.className = "javax.crypto.MacSpi";

// class property
Object.defineProperty(javax.crypto.MacSpi, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.crypto.MacSpi',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
javax.crypto.MacSpi.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'javax.crypto.MacSpi',
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
	whatever.prototype = Object.create(javax.crypto.MacSpi.prototype);
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
 * @function engineGetMacLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html#engineGetMacLength()}
 **/
javax.crypto.MacSpi.prototype.engineGetMacLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetMacLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.MacSpi') {
			return new javax.crypto.MacSpi(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html#clone()}
 **/
javax.crypto.MacSpi.prototype.clone = function() {
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
		if (result.apiName === 'javax.crypto.MacSpi') {
			return new javax.crypto.MacSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineReset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html#engineReset()}
 **/
javax.crypto.MacSpi.prototype.engineReset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineReset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.MacSpi') {
			return new javax.crypto.MacSpi(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html#engineDoFinal()}
 **/
javax.crypto.MacSpi.prototype.engineDoFinal = function() {
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
		if (result.apiName === 'javax.crypto.MacSpi') {
			return new javax.crypto.MacSpi(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html#engineInit(java.security.Key, java.security.spec.AlgorithmParameterSpec)}
 **/
javax.crypto.MacSpi.prototype.engineInit = function() {
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
		if (result.apiName === 'javax.crypto.MacSpi') {
			return new javax.crypto.MacSpi(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html#engineUpdate(byte)}
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html#engineUpdate(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/MacSpi.html#engineUpdate(java.nio.ByteBuffer)}
 **/
javax.crypto.MacSpi.prototype.engineUpdate = function() {
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
		if (result.apiName === 'javax.crypto.MacSpi') {
			return new javax.crypto.MacSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.crypto.MacSpi;
