/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.FileChannel.MapMode
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};
global.java.nio.channels.FileChannel = global.java.nio.channels.FileChannel || {};

/**
 * @class java.nio.channels.FileChannel.MapMode
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html}
 **/
java.nio.channels.FileChannel.MapMode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.FileChannel$MapMode') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.FileChannel$MapMode',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.channels.FileChannel.MapMode.prototype = Object.create(SuperClass.prototype);
java.nio.channels.FileChannel.MapMode.prototype.constructor = java.nio.channels.FileChannel.MapMode;

java.nio.channels.FileChannel.MapMode.className = "java.nio.channels.FileChannel$MapMode";
java.nio.channels.FileChannel.MapMode.prototype.className = "java.nio.channels.FileChannel$MapMode";

// Constants

// Static fields
// http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html#READ_ONLY
Object.defineProperty(java.nio.channels.FileChannel.MapMode, 'READ_ONLY', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'READ_ONLY'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.channels.FileChannel$MapMode') {
				return new java.nio.channels.FileChannel.MapMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html#READ_WRITE
Object.defineProperty(java.nio.channels.FileChannel.MapMode, 'READ_WRITE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'READ_WRITE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.channels.FileChannel$MapMode') {
				return new java.nio.channels.FileChannel.MapMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html#PRIVATE
Object.defineProperty(java.nio.channels.FileChannel.MapMode, 'PRIVATE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PRIVATE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.channels.FileChannel$MapMode') {
				return new java.nio.channels.FileChannel.MapMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html#toString()}
 **/
java.nio.channels.FileChannel.MapMode.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel$MapMode') {
			return new java.nio.channels.FileChannel.MapMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.FileChannel.MapMode;
