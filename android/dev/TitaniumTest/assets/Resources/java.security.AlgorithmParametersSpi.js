/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.AlgorithmParametersSpi
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.AlgorithmParametersSpi
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParametersSpi.html}
 **/
java.security.AlgorithmParametersSpi = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.AlgorithmParametersSpi') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.security.AlgorithmParametersSpi. Create a subclass using java.security.AlgorithmParametersSpi.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.AlgorithmParametersSpi.prototype = Object.create(SuperClass.prototype);
java.security.AlgorithmParametersSpi.prototype.constructor = java.security.AlgorithmParametersSpi;

java.security.AlgorithmParametersSpi.className = "java.security.AlgorithmParametersSpi";
java.security.AlgorithmParametersSpi.prototype.className = "java.security.AlgorithmParametersSpi";

// class property
Object.defineProperty(java.security.AlgorithmParametersSpi, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.AlgorithmParametersSpi',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.AlgorithmParametersSpi.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.AlgorithmParametersSpi',
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
	whatever.prototype = Object.create(java.security.AlgorithmParametersSpi.prototype);
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
 * @function engineGetEncoded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParametersSpi.html#engineGetEncoded()}
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParametersSpi.html#engineGetEncoded(java.lang.String)}
 **/
java.security.AlgorithmParametersSpi.prototype.engineGetEncoded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetEncoded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AlgorithmParametersSpi') {
			return new java.security.AlgorithmParametersSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetParameterSpec
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParametersSpi.html#engineGetParameterSpec(java.lang.Class)}
 **/
java.security.AlgorithmParametersSpi.prototype.engineGetParameterSpec = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetParameterSpec',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AlgorithmParametersSpi') {
			return new java.security.AlgorithmParametersSpi(result);
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
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParametersSpi.html#engineInit(java.security.spec.AlgorithmParameterSpec)}
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParametersSpi.html#engineInit(byte[])}
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParametersSpi.html#engineInit(byte[], java.lang.String)}
 **/
java.security.AlgorithmParametersSpi.prototype.engineInit = function() {
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
		if (result.apiName === 'java.security.AlgorithmParametersSpi') {
			return new java.security.AlgorithmParametersSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineToString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParametersSpi.html#engineToString()}
 **/
java.security.AlgorithmParametersSpi.prototype.engineToString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineToString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AlgorithmParametersSpi') {
			return new java.security.AlgorithmParametersSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.AlgorithmParametersSpi;
