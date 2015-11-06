/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.FileInputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.FileInputStream
 * @extends java.io.InputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html}
 **/
java.io.FileInputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.FileInputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.FileInputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.InputStream');
java.io.FileInputStream.prototype = Object.create(SuperClass.prototype);
java.io.FileInputStream.prototype.constructor = java.io.FileInputStream;

java.io.FileInputStream.className = "java.io.FileInputStream";
java.io.FileInputStream.prototype.className = "java.io.FileInputStream";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$000
 * @static
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#access$000(java.io.FileInputStream)}
 **/
java.io.FileInputStream.access$000 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$000',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileInputStream') {
			return new java.io.FileInputStream(result);
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
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#read()}
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#read(byte[])}
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#read(byte[], int, int)}
 **/
java.io.FileInputStream.prototype.read = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'read',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileInputStream') {
			return new java.io.FileInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#getChannel()}
 **/
java.io.FileInputStream.prototype.getChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileInputStream') {
			return new java.io.FileInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function available
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#available()}
 **/
java.io.FileInputStream.prototype.available = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'available',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileInputStream') {
			return new java.io.FileInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skip
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#skip(long)}
 **/
java.io.FileInputStream.prototype.skip = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skip',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileInputStream') {
			return new java.io.FileInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#finalize()}
 **/
java.io.FileInputStream.prototype.finalize = function() {
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
		if (result.apiName === 'java.io.FileInputStream') {
			return new java.io.FileInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#close()}
 **/
java.io.FileInputStream.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileInputStream') {
			return new java.io.FileInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFD
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileInputStream.html#getFD()}
 **/
java.io.FileInputStream.prototype.getFD = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFD',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileInputStream') {
			return new java.io.FileInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.FileInputStream;
