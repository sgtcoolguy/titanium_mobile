/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.jar.Manifest
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.jar = global.java.util.jar || {};

/**
 * @class java.util.jar.Manifest
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html}
 **/
java.util.jar.Manifest = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.jar.Manifest') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.jar.Manifest',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.jar.Manifest.prototype = Object.create(SuperClass.prototype);
java.util.jar.Manifest.prototype.constructor = java.util.jar.Manifest;

java.util.jar.Manifest.className = "java.util.jar.Manifest";
java.util.jar.Manifest.prototype.className = "java.util.jar.Manifest";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function make72Safe
 * @static
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#make72Safe(java.lang.StringBuffer)}
 **/
java.util.jar.Manifest.make72Safe = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'make72Safe',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
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
 * @function getAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#getAttributes(java.lang.String)}
 **/
java.util.jar.Manifest.prototype.getAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#read(java.io.InputStream)}
 **/
java.util.jar.Manifest.prototype.read = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'read',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEntries
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#getEntries()}
 **/
java.util.jar.Manifest.prototype.getEntries = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getEntries',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#hashCode()}
 **/
java.util.jar.Manifest.prototype.hashCode = function() {
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
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#equals(java.lang.Object)}
 **/
java.util.jar.Manifest.prototype.equals = function() {
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
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#clear()}
 **/
java.util.jar.Manifest.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#clone()}
 **/
java.util.jar.Manifest.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMainAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#getMainAttributes()}
 **/
java.util.jar.Manifest.prototype.getMainAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getMainAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function write
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.html#write(java.io.OutputStream)}
 **/
java.util.jar.Manifest.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest') {
			return new java.util.jar.Manifest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.jar.Manifest;
