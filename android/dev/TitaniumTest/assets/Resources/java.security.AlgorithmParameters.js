/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.AlgorithmParameters
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.AlgorithmParameters
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html}
 **/
java.security.AlgorithmParameters = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.AlgorithmParameters') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.security.AlgorithmParameters',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.AlgorithmParameters.prototype = Object.create(SuperClass.prototype);
java.security.AlgorithmParameters.prototype.constructor = java.security.AlgorithmParameters;

java.security.AlgorithmParameters.className = "java.security.AlgorithmParameters";
java.security.AlgorithmParameters.prototype.className = "java.security.AlgorithmParameters";

// class property
Object.defineProperty(java.security.AlgorithmParameters, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.AlgorithmParameters',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.AlgorithmParameters.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.AlgorithmParameters',
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
	whatever.prototype = Object.create(java.security.AlgorithmParameters.prototype);
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
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#getInstance(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#getInstance(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#getInstance(java.lang.String, java.security.Provider)}
 **/
java.security.AlgorithmParameters.getInstance = function() {
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
		if (result.apiName === 'java.security.AlgorithmParameters') {
			return new java.security.AlgorithmParameters(result);
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
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#init(java.security.spec.AlgorithmParameterSpec)}
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#init(byte[])}
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#init(byte[], java.lang.String)}
 **/
java.security.AlgorithmParameters.prototype.init = function() {
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
		if (result.apiName === 'java.security.AlgorithmParameters') {
			return new java.security.AlgorithmParameters(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncoded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#getEncoded()}
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#getEncoded(java.lang.String)}
 **/
java.security.AlgorithmParameters.prototype.getEncoded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncoded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AlgorithmParameters') {
			return new java.security.AlgorithmParameters(result);
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
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#getAlgorithm()}
 **/
java.security.AlgorithmParameters.prototype.getAlgorithm = function() {
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
		if (result.apiName === 'java.security.AlgorithmParameters') {
			return new java.security.AlgorithmParameters(result);
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
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#getProvider()}
 **/
java.security.AlgorithmParameters.prototype.getProvider = function() {
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
		if (result.apiName === 'java.security.AlgorithmParameters') {
			return new java.security.AlgorithmParameters(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#toString()}
 **/
java.security.AlgorithmParameters.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AlgorithmParameters') {
			return new java.security.AlgorithmParameters(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParameterSpec
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AlgorithmParameters.html#getParameterSpec(java.lang.Class)}
 **/
java.security.AlgorithmParameters.prototype.getParameterSpec = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParameterSpec',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AlgorithmParameters') {
			return new java.security.AlgorithmParameters(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.AlgorithmParameters;
