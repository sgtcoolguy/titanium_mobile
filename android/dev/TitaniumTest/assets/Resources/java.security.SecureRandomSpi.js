/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.SecureRandomSpi
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.SecureRandomSpi
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/SecureRandomSpi.html}
 **/
java.security.SecureRandomSpi = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.SecureRandomSpi') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.security.SecureRandomSpi. Create a subclass using java.security.SecureRandomSpi.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.SecureRandomSpi.prototype = Object.create(SuperClass.prototype);
java.security.SecureRandomSpi.prototype.constructor = java.security.SecureRandomSpi;

java.security.SecureRandomSpi.className = "java.security.SecureRandomSpi";
java.security.SecureRandomSpi.prototype.className = "java.security.SecureRandomSpi";

// class property
Object.defineProperty(java.security.SecureRandomSpi, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.SecureRandomSpi',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.SecureRandomSpi.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.SecureRandomSpi',
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
	whatever.prototype = Object.create(java.security.SecureRandomSpi.prototype);
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
 * @function engineSetSeed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SecureRandomSpi.html#engineSetSeed(byte[])}
 **/
java.security.SecureRandomSpi.prototype.engineSetSeed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSetSeed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandomSpi') {
			return new java.security.SecureRandomSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGenerateSeed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SecureRandomSpi.html#engineGenerateSeed(int)}
 **/
java.security.SecureRandomSpi.prototype.engineGenerateSeed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGenerateSeed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandomSpi') {
			return new java.security.SecureRandomSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineNextBytes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SecureRandomSpi.html#engineNextBytes(byte[])}
 **/
java.security.SecureRandomSpi.prototype.engineNextBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineNextBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandomSpi') {
			return new java.security.SecureRandomSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.SecureRandomSpi;
