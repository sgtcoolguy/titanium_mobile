/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.AccessControlContext
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.AccessControlContext
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html}
 **/
java.security.AccessControlContext = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.security.AccessControlContext') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.security.AccessControlContext',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.AccessControlContext.prototype = Object.create(SuperClass.prototype);
java.security.AccessControlContext.prototype.constructor = java.security.AccessControlContext;

java.security.AccessControlContext.className = "java.security.AccessControlContext";
java.security.AccessControlContext.prototype.className = "java.security.AccessControlContext";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getDebug
 * @static
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#getDebug()}
 **/
java.security.AccessControlContext.getDebug = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getDebug',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
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
 * @function getAssignedCombiner
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#getAssignedCombiner()}
 **/
java.security.AccessControlContext.prototype.getAssignedCombiner = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getAssignedCombiner',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCombiner
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#getCombiner()}
 **/
java.security.AccessControlContext.prototype.getCombiner = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getCombiner',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#checkPermission(java.security.Permission)}
 **/
java.security.AccessControlContext.prototype.checkPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAuthorized
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#isAuthorized()}
 **/
java.security.AccessControlContext.prototype.isAuthorized = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isAuthorized',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPrivileged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#isPrivileged()}
 **/
java.security.AccessControlContext.prototype.isPrivileged = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isPrivileged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function optimize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#optimize()}
 **/
java.security.AccessControlContext.prototype.optimize = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'optimize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
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
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#hashCode()}
 **/
java.security.AccessControlContext.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
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
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#equals(java.lang.Object)}
 **/
java.security.AccessControlContext.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDomainCombiner
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#getDomainCombiner()}
 **/
java.security.AccessControlContext.prototype.getDomainCombiner = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getDomainCombiner',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/AccessControlContext.html#getContext()}
 **/
java.security.AccessControlContext.prototype.getContext = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.AccessControlContext') {
			return new java.security.AccessControlContext(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.AccessControlContext;
