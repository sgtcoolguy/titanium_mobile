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
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.MappedByteBuffer') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.MappedByteBuffer. Create a subclass using java.nio.MappedByteBuffer.extend();' );
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

// class property
Object.defineProperty(java.nio.MappedByteBuffer, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.MappedByteBuffer',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.MappedByteBuffer.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.MappedByteBuffer',
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
	whatever.prototype = Object.create(java.nio.MappedByteBuffer.prototype);
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
