/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.Signature
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.Signature
 * @extends java.security.SignatureSpi 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/Signature.html}
 **/
java.security.Signature = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.Signature') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.security.Signature. Create a subclass using java.security.Signature.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.security.SignatureSpi');
java.security.Signature.prototype = Object.create(SuperClass.prototype);
java.security.Signature.prototype.constructor = java.security.Signature;

java.security.Signature.className = "java.security.Signature";
java.security.Signature.prototype.className = "java.security.Signature";

// class property
Object.defineProperty(java.security.Signature, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.Signature',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.Signature.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.Signature',
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
	whatever.prototype = Object.create(java.security.Signature.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#UNINITIALIZED}
 */
java.security.Signature.UNINITIALIZED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#VERIFY}
 */
java.security.Signature.VERIFY = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#SIGN}
 */
java.security.Signature.SIGN = 2;

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/security/Signature.html#state
Object.defineProperty(java.security.Signature.prototype, 'state', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'state'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.security.Signature') {
				return new java.security.Signature(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'state',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function getInstance
 * @static
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#getInstance(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#getInstance(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#getInstance(java.lang.String, java.security.Provider)}
 **/
java.security.Signature.getInstance = function() {
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
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
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
 * @function getAlgorithm
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#getAlgorithm()}
 **/
java.security.Signature.prototype.getAlgorithm = function() {
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
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#sign()}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#sign(byte[], int, int)}
 **/
java.security.Signature.prototype.sign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
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
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#update(byte)}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#update(byte[])}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#update(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#update(java.nio.ByteBuffer)}
 **/
java.security.Signature.prototype.update = function() {
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
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initSign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#initSign(java.security.PrivateKey)}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#initSign(java.security.PrivateKey, java.security.SecureRandom)}
 **/
java.security.Signature.prototype.initSign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initSign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initVerify
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#initVerify(java.security.PublicKey)}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#initVerify(java.security.cert.Certificate)}
 **/
java.security.Signature.prototype.initVerify = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initVerify',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#setParameter(java.lang.String, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#setParameter(java.security.spec.AlgorithmParameterSpec)}
 **/
java.security.Signature.prototype.setParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParameters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#getParameters()}
 **/
java.security.Signature.prototype.getParameters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParameters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
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
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#clone()}
 **/
java.security.Signature.prototype.clone = function() {
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
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
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
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#getProvider()}
 **/
java.security.Signature.prototype.getProvider = function() {
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
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function verify
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#verify(byte[])}
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#verify(byte[], int, int)}
 **/
java.security.Signature.prototype.verify = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'verify',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
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
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#toString()}
 **/
java.security.Signature.prototype.toString = function() {
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
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Signature.html#getParameter(java.lang.String)}
 **/
java.security.Signature.prototype.getParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Signature') {
			return new java.security.Signature(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.Signature;
