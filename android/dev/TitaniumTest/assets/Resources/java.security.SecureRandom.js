/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.SecureRandom
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.SecureRandom
 * @extends java.util.Random 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html}
 **/
java.security.SecureRandom = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.SecureRandom') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.security.SecureRandom',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.Random');
java.security.SecureRandom.prototype = Object.create(SuperClass.prototype);
java.security.SecureRandom.prototype.constructor = java.security.SecureRandom;

java.security.SecureRandom.className = "java.security.SecureRandom";
java.security.SecureRandom.prototype.className = "java.security.SecureRandom";

// class property
Object.defineProperty(java.security.SecureRandom, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.SecureRandom',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.SecureRandom.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.SecureRandom',
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
	whatever.prototype = Object.create(java.security.SecureRandom.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getSeed
 * @static
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#getSeed(int)}
 **/
java.security.SecureRandom.getSeed = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSeed',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstanceStrong
 * @static
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#getInstanceStrong()}
 **/
java.security.SecureRandom.getInstanceStrong = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getInstanceStrong',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
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
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#getInstance(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#getInstance(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#getInstance(java.lang.String, java.security.Provider)}
 **/
java.security.SecureRandom.getInstance = function() {
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
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
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
 * @function next
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#next(int)}
 **/
java.security.SecureRandom.prototype.next = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'next',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
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
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#getAlgorithm()}
 **/
java.security.SecureRandom.prototype.getAlgorithm = function() {
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
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
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
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#getProvider()}
 **/
java.security.SecureRandom.prototype.getProvider = function() {
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
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateSeed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#generateSeed(int)}
 **/
java.security.SecureRandom.prototype.generateSeed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateSeed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSeed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#setSeed(byte[])}
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#setSeed(long)}
 **/
java.security.SecureRandom.prototype.setSeed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSeed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextBytes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/SecureRandom.html#nextBytes(byte[])}
 **/
java.security.SecureRandom.prototype.nextBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.SecureRandom') {
			return new java.security.SecureRandom(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.SecureRandom;
