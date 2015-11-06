/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.MappedByteBuffer
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};

/**
 * @class java.nio.MappedByteBuffer
 * @extends java.nio.ByteBuffer 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/MappedByteBuffer.html}
 **/
java.nio.MappedByteBuffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.MappedByteBuffer') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.MappedByteBuffer',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.ByteBuffer');
java.nio.MappedByteBuffer.prototype = Object.create(SuperClass.prototype);
java.nio.MappedByteBuffer.prototype.constructor = java.nio.MappedByteBuffer;

java.nio.MappedByteBuffer.className = "java.nio.MappedByteBuffer";
java.nio.MappedByteBuffer.prototype.className = "java.nio.MappedByteBuffer";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function load
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/MappedByteBuffer.html#load()}
 **/
java.nio.MappedByteBuffer.prototype.load = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'load',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.MappedByteBuffer') {
			return new java.nio.MappedByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function force
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/MappedByteBuffer.html#force()}
 **/
java.nio.MappedByteBuffer.prototype.force = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'force',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.MappedByteBuffer') {
			return new java.nio.MappedByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLoaded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/MappedByteBuffer.html#isLoaded()}
 **/
java.nio.MappedByteBuffer.prototype.isLoaded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLoaded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.MappedByteBuffer') {
			return new java.nio.MappedByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.MappedByteBuffer;
