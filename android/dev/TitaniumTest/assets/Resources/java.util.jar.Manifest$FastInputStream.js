/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.jar.Manifest.FastInputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.jar = global.java.util.jar || {};
global.java.util.jar.Manifest = global.java.util.jar.Manifest || {};

/**
 * @class java.util.jar.Manifest.FastInputStream
 * @extends java.io.FilterInputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html}
 **/
java.util.jar.Manifest.FastInputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.jar.Manifest$FastInputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.jar.Manifest$FastInputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.FilterInputStream');
java.util.jar.Manifest.FastInputStream.prototype = Object.create(SuperClass.prototype);
java.util.jar.Manifest.FastInputStream.prototype.constructor = java.util.jar.Manifest.FastInputStream;

java.util.jar.Manifest.FastInputStream.className = "java.util.jar.Manifest$FastInputStream";
java.util.jar.Manifest.FastInputStream.prototype.className = "java.util.jar.Manifest$FastInputStream";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html#read()}
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html#read(byte[], int, int)}
 **/
java.util.jar.Manifest.FastInputStream.prototype.read = function() {
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
		if (result.apiName === 'java.util.jar.Manifest$FastInputStream') {
			return new java.util.jar.Manifest.FastInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html#available()}
 **/
java.util.jar.Manifest.FastInputStream.prototype.available = function() {
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
		if (result.apiName === 'java.util.jar.Manifest$FastInputStream') {
			return new java.util.jar.Manifest.FastInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html#skip(long)}
 **/
java.util.jar.Manifest.FastInputStream.prototype.skip = function() {
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
		if (result.apiName === 'java.util.jar.Manifest$FastInputStream') {
			return new java.util.jar.Manifest.FastInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readLine
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html#readLine(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html#readLine(byte[])}
 **/
java.util.jar.Manifest.FastInputStream.prototype.readLine = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readLine',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest$FastInputStream') {
			return new java.util.jar.Manifest.FastInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html#close()}
 **/
java.util.jar.Manifest.FastInputStream.prototype.close = function() {
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
		if (result.apiName === 'java.util.jar.Manifest$FastInputStream') {
			return new java.util.jar.Manifest.FastInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peek
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Manifest.FastInputStream.html#peek()}
 **/
java.util.jar.Manifest.FastInputStream.prototype.peek = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peek',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Manifest$FastInputStream') {
			return new java.util.jar.Manifest.FastInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.jar.Manifest.FastInputStream;
