/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.cert.Certificate
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};
global.java.security.cert = global.java.security.cert || {};

/**
 * @class java.security.cert.Certificate
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html}
 **/
java.security.cert.Certificate = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.cert.Certificate') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.security.cert.Certificate. Create a subclass using java.security.cert.Certificate.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.cert.Certificate.prototype = Object.create(SuperClass.prototype);
java.security.cert.Certificate.prototype.constructor = java.security.cert.Certificate;

java.security.cert.Certificate.className = "java.security.cert.Certificate";
java.security.cert.Certificate.prototype.className = "java.security.cert.Certificate";

// class property
Object.defineProperty(java.security.cert.Certificate, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.cert.Certificate',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.cert.Certificate.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.cert.Certificate',
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
	whatever.prototype = Object.create(java.security.cert.Certificate.prototype);
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
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#getType()}
 **/
java.security.cert.Certificate.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.cert.Certificate') {
			return new java.security.cert.Certificate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#hashCode()}
 **/
java.security.cert.Certificate.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.cert.Certificate') {
			return new java.security.cert.Certificate(result);
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
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#getEncoded()}
 **/
java.security.cert.Certificate.prototype.getEncoded = function() {
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
		if (result.apiName === 'java.security.cert.Certificate') {
			return new java.security.cert.Certificate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#equals(java.lang.Object)}
 **/
java.security.cert.Certificate.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.cert.Certificate') {
			return new java.security.cert.Certificate(result);
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
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#verify(java.security.PublicKey)}
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#verify(java.security.PublicKey, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#verify(java.security.PublicKey, java.security.Provider)}
 **/
java.security.cert.Certificate.prototype.verify = function() {
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
		if (result.apiName === 'java.security.cert.Certificate') {
			return new java.security.cert.Certificate(result);
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
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#toString()}
 **/
java.security.cert.Certificate.prototype.toString = function() {
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
		if (result.apiName === 'java.security.cert.Certificate') {
			return new java.security.cert.Certificate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPublicKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#getPublicKey()}
 **/
java.security.cert.Certificate.prototype.getPublicKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPublicKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.cert.Certificate') {
			return new java.security.cert.Certificate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeReplace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/cert/Certificate.html#writeReplace()}
 **/
java.security.cert.Certificate.prototype.writeReplace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeReplace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.cert.Certificate') {
			return new java.security.cert.Certificate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.cert.Certificate;
