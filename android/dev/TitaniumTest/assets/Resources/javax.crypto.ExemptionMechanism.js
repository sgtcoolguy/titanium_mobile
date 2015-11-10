/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.crypto.ExemptionMechanism
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.crypto = global.javax.crypto || {};

/**
 * @class javax.crypto.ExemptionMechanism
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html}
 **/
javax.crypto.ExemptionMechanism = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.crypto.ExemptionMechanism') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'javax.crypto.ExemptionMechanism',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.crypto.ExemptionMechanism.prototype = Object.create(SuperClass.prototype);
javax.crypto.ExemptionMechanism.prototype.constructor = javax.crypto.ExemptionMechanism;

javax.crypto.ExemptionMechanism.className = "javax.crypto.ExemptionMechanism";
javax.crypto.ExemptionMechanism.prototype.className = "javax.crypto.ExemptionMechanism";

// class property
Object.defineProperty(javax.crypto.ExemptionMechanism, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.crypto.ExemptionMechanism',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
javax.crypto.ExemptionMechanism.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'javax.crypto.ExemptionMechanism',
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
	whatever.prototype = Object.create(javax.crypto.ExemptionMechanism.prototype);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#getInstance(java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#getInstance(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#getInstance(java.lang.String, java.security.Provider)}
 **/
javax.crypto.ExemptionMechanism.getInstance = function() {
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
		if (result.apiName === 'javax.crypto.ExemptionMechanism') {
			return new javax.crypto.ExemptionMechanism(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#init(java.security.Key)}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#init(java.security.Key, java.security.spec.AlgorithmParameterSpec)}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#init(java.security.Key, java.security.AlgorithmParameters)}
 **/
javax.crypto.ExemptionMechanism.prototype.init = function() {
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
		if (result.apiName === 'javax.crypto.ExemptionMechanism') {
			return new javax.crypto.ExemptionMechanism(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#getName()}
 **/
javax.crypto.ExemptionMechanism.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.ExemptionMechanism') {
			return new javax.crypto.ExemptionMechanism(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function genExemptionBlob
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#genExemptionBlob()}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#genExemptionBlob(byte[])}
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#genExemptionBlob(byte[], int)}
 **/
javax.crypto.ExemptionMechanism.prototype.genExemptionBlob = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'genExemptionBlob',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.ExemptionMechanism') {
			return new javax.crypto.ExemptionMechanism(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCryptoAllowed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#isCryptoAllowed(java.security.Key)}
 **/
javax.crypto.ExemptionMechanism.prototype.isCryptoAllowed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCryptoAllowed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.ExemptionMechanism') {
			return new javax.crypto.ExemptionMechanism(result);
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
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#getProvider()}
 **/
javax.crypto.ExemptionMechanism.prototype.getProvider = function() {
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
		if (result.apiName === 'javax.crypto.ExemptionMechanism') {
			return new javax.crypto.ExemptionMechanism(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOutputSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#getOutputSize(int)}
 **/
javax.crypto.ExemptionMechanism.prototype.getOutputSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutputSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.ExemptionMechanism') {
			return new javax.crypto.ExemptionMechanism(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/crypto/ExemptionMechanism.html#finalize()}
 **/
javax.crypto.ExemptionMechanism.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'javax.crypto.ExemptionMechanism') {
			return new javax.crypto.ExemptionMechanism(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.crypto.ExemptionMechanism;
