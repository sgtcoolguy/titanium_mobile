/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.crypto.Mac
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.crypto = global.javax.crypto || {};

/**
 * @class javax.crypto.Mac
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html}
 **/
javax.crypto.Mac = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.crypto.Mac') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'javax.crypto.Mac',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.crypto.Mac.prototype = Object.create(SuperClass.prototype);
javax.crypto.Mac.prototype.constructor = javax.crypto.Mac;

javax.crypto.Mac.className = "javax.crypto.Mac";
javax.crypto.Mac.prototype.className = "javax.crypto.Mac";

// class property
Object.defineProperty(javax.crypto.Mac, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.crypto.Mac',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
javax.crypto.Mac.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'javax.crypto.Mac',
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
	whatever.prototype = Object.create(javax.crypto.Mac.prototype);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#getInstance(java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#getInstance(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#getInstance(java.lang.String, java.security.Provider)}
 **/
javax.crypto.Mac.getInstance = function() {
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
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
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
 * @function getMacLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#getMacLength()}
 **/
javax.crypto.Mac.prototype.getMacLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMacLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#init(java.security.Key)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#init(java.security.Key, java.security.spec.AlgorithmParameterSpec)}
 **/
javax.crypto.Mac.prototype.init = function() {
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
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#getAlgorithm()}
 **/
javax.crypto.Mac.prototype.getAlgorithm = function() {
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
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#clone()}
 **/
javax.crypto.Mac.prototype.clone = function() {
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
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#getProvider()}
 **/
javax.crypto.Mac.prototype.getProvider = function() {
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
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#update(byte)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#update(byte[])}
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#update(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#update(java.nio.ByteBuffer)}
 **/
javax.crypto.Mac.prototype.update = function() {
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
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#reset()}
 **/
javax.crypto.Mac.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#doFinal()}
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#doFinal(byte[], int)}
 * @see {@link http://developer.android.com/reference/javax/crypto/Mac.html#doFinal(byte[])}
 **/
javax.crypto.Mac.prototype.doFinal = function() {
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
		if (result.apiName === 'javax.crypto.Mac') {
			return new javax.crypto.Mac(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.crypto.Mac;
