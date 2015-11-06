/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.ProtectionDomain
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.ProtectionDomain
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html}
 **/
java.security.ProtectionDomain = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.security.ProtectionDomain') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.security.ProtectionDomain',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.ProtectionDomain.prototype = Object.create(SuperClass.prototype);
java.security.ProtectionDomain.prototype.constructor = java.security.ProtectionDomain;

java.security.ProtectionDomain.className = "java.security.ProtectionDomain";
java.security.ProtectionDomain.prototype.className = "java.security.ProtectionDomain";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/security/ProtectionDomain.html#key
Object.defineProperty(java.security.ProtectionDomain.prototype, 'key', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'key'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.security.ProtectionDomain') {
				return new java.security.ProtectionDomain(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function impliesCreateAccessControlContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#impliesCreateAccessControlContext()}
 **/
java.security.ProtectionDomain.prototype.impliesCreateAccessControlContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'impliesCreateAccessControlContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new java.security.ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#getPermissions()}
 **/
java.security.ProtectionDomain.prototype.getPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new java.security.ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#getClassLoader()}
 **/
java.security.ProtectionDomain.prototype.getClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new java.security.ProtectionDomain(result);
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
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#toString()}
 **/
java.security.ProtectionDomain.prototype.toString = function() {
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
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new java.security.ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrincipals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#getPrincipals()}
 **/
java.security.ProtectionDomain.prototype.getPrincipals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPrincipals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new java.security.ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implies
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#implies(java.security.Permission)}
 **/
java.security.ProtectionDomain.prototype.implies = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implies',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new java.security.ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCodeSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#getCodeSource()}
 **/
java.security.ProtectionDomain.prototype.getCodeSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCodeSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new java.security.ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.ProtectionDomain;
