/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.OutputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.OutputStream
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/OutputStream.html}
 **/
java.io.OutputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.OutputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.OutputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.OutputStream.prototype = Object.create(SuperClass.prototype);
java.io.OutputStream.prototype.constructor = java.io.OutputStream;

java.io.OutputStream.className = "java.io.OutputStream";
java.io.OutputStream.prototype.className = "java.io.OutputStream";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function flush
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/OutputStream.html#flush()}
 **/
java.io.OutputStream.prototype.flush = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flush',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.OutputStream') {
			return new java.io.OutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/OutputStream.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/OutputStream.html#write(byte[])}
 * @see {@link http://developer.android.com/reference/java/io/OutputStream.html#write(byte[], int, int)}
 **/
java.io.OutputStream.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.OutputStream') {
			return new java.io.OutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/OutputStream.html#close()}
 **/
java.io.OutputStream.prototype.close = function() {
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
		if (result.apiName === 'java.io.OutputStream') {
			return new java.io.OutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.OutputStream;
