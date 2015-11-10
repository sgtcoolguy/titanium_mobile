/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module javax.security.auth.x500.X500Principal
 */
var Hyperloop = Ti.Hyperloop;

global.javax = global.javax || {};
global.javax.security = global.javax.security || {};
global.javax.security.auth = global.javax.security.auth || {};
global.javax.security.auth.x500 = global.javax.security.auth.x500 || {};

/**
 * @class javax.security.auth.x500.X500Principal
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html}
 **/
javax.security.auth.x500.X500Principal = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'javax.security.auth.x500.X500Principal') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'javax.security.auth.x500.X500Principal',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
javax.security.auth.x500.X500Principal.prototype = Object.create(SuperClass.prototype);
javax.security.auth.x500.X500Principal.prototype.constructor = javax.security.auth.x500.X500Principal;

javax.security.auth.x500.X500Principal.className = "javax.security.auth.x500.X500Principal";
javax.security.auth.x500.X500Principal.prototype.className = "javax.security.auth.x500.X500Principal";

// class property
Object.defineProperty(javax.security.auth.x500.X500Principal, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'javax.security.auth.x500.X500Principal',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#CANONICAL}
 */
javax.security.auth.x500.X500Principal.CANONICAL = "CANONICAL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#RFC2253}
 */
javax.security.auth.x500.X500Principal.RFC2253 = "RFC2253";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#RFC1779}
 */
javax.security.auth.x500.X500Principal.RFC1779 = "RFC1779";

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#getName()}
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#getName(java.lang.String)}
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#getName(java.lang.String, java.util.Map)}
 **/
javax.security.auth.x500.X500Principal.prototype.getName = function() {
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
		if (result.apiName === 'javax.security.auth.x500.X500Principal') {
			return new javax.security.auth.x500.X500Principal(result);
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
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#getEncoded()}
 **/
javax.security.auth.x500.X500Principal.prototype.getEncoded = function() {
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
		if (result.apiName === 'javax.security.auth.x500.X500Principal') {
			return new javax.security.auth.x500.X500Principal(result);
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
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#hashCode()}
 **/
javax.security.auth.x500.X500Principal.prototype.hashCode = function() {
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
		if (result.apiName === 'javax.security.auth.x500.X500Principal') {
			return new javax.security.auth.x500.X500Principal(result);
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
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#equals(java.lang.Object)}
 **/
javax.security.auth.x500.X500Principal.prototype.equals = function() {
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
		if (result.apiName === 'javax.security.auth.x500.X500Principal') {
			return new javax.security.auth.x500.X500Principal(result);
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
 * @see {@link http://developer.android.com/reference/javax/security/auth/x500/X500Principal.html#toString()}
 **/
javax.security.auth.x500.X500Principal.prototype.toString = function() {
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
		if (result.apiName === 'javax.security.auth.x500.X500Principal') {
			return new javax.security.auth.x500.X500Principal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = javax.security.auth.x500.X500Principal;
