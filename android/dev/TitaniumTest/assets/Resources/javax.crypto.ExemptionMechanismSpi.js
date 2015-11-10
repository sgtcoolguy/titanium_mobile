/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.crypto.ExemptionMechanismSpi
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.crypto = global.javax.crypto || {};

/**
 * @class javax.crypto.ExemptionMechanismSpi
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanismSpi.html}
 **/
javax.crypto.ExemptionMechanismSpi = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.crypto.ExemptionMechanismSpi') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: javax.crypto.ExemptionMechanismSpi. Create a subclass using javax.crypto.ExemptionMechanismSpi.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.crypto.ExemptionMechanismSpi.prototype = Object.create(SuperClass.prototype);
javax.crypto.ExemptionMechanismSpi.prototype.constructor = javax.crypto.ExemptionMechanismSpi;

javax.crypto.ExemptionMechanismSpi.className = "javax.crypto.ExemptionMechanismSpi";
javax.crypto.ExemptionMechanismSpi.prototype.className = "javax.crypto.ExemptionMechanismSpi";

// class property
Object.defineProperty(javax.crypto.ExemptionMechanismSpi, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.crypto.ExemptionMechanismSpi',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
javax.crypto.ExemptionMechanismSpi.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'javax.crypto.ExemptionMechanismSpi',
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
	whatever.prototype = Object.create(javax.crypto.ExemptionMechanismSpi.prototype);
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
 * @function engineGetOutputSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanismSpi.html#engineGetOutputSize(int)}
 **/
javax.crypto.ExemptionMechanismSpi.prototype.engineGetOutputSize = function() {
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
		if (result.apiName === 'javax.crypto.ExemptionMechanismSpi') {
			return new javax.crypto.ExemptionMechanismSpi(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanismSpi.html#engineInit(java.security.Key)}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanismSpi.html#engineInit(java.security.Key, java.security.spec.AlgorithmParameterSpec)}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanismSpi.html#engineInit(java.security.Key, java.security.AlgorithmParameters)}
 **/
javax.crypto.ExemptionMechanismSpi.prototype.engineInit = function() {
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
		if (result.apiName === 'javax.crypto.ExemptionMechanismSpi') {
			return new javax.crypto.ExemptionMechanismSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGenExemptionBlob
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanismSpi.html#engineGenExemptionBlob()}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanismSpi.html#engineGenExemptionBlob(byte[], int)}
 **/
javax.crypto.ExemptionMechanismSpi.prototype.engineGenExemptionBlob = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGenExemptionBlob',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.ExemptionMechanismSpi') {
			return new javax.crypto.ExemptionMechanismSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.crypto.ExemptionMechanismSpi;
