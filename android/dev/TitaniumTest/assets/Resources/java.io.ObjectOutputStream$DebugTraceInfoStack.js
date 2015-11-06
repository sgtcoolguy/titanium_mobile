/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectOutputStream.DebugTraceInfoStack
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};
global.java.io.ObjectOutputStream = global.java.io.ObjectOutputStream || {};

/**
 * @class java.io.ObjectOutputStream.DebugTraceInfoStack
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.DebugTraceInfoStack.html}
 **/
java.io.ObjectOutputStream.DebugTraceInfoStack = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectOutputStream$DebugTraceInfoStack') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectOutputStream$DebugTraceInfoStack',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.ObjectOutputStream.DebugTraceInfoStack.prototype = Object.create(SuperClass.prototype);
java.io.ObjectOutputStream.DebugTraceInfoStack.prototype.constructor = java.io.ObjectOutputStream.DebugTraceInfoStack;

java.io.ObjectOutputStream.DebugTraceInfoStack.className = "java.io.ObjectOutputStream$DebugTraceInfoStack";
java.io.ObjectOutputStream.DebugTraceInfoStack.prototype.className = "java.io.ObjectOutputStream$DebugTraceInfoStack";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function pop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.DebugTraceInfoStack.html#pop()}
 **/
java.io.ObjectOutputStream.DebugTraceInfoStack.prototype.pop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$DebugTraceInfoStack') {
			return new java.io.ObjectOutputStream.DebugTraceInfoStack(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.DebugTraceInfoStack.html#clear()}
 **/
java.io.ObjectOutputStream.DebugTraceInfoStack.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$DebugTraceInfoStack') {
			return new java.io.ObjectOutputStream.DebugTraceInfoStack(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.DebugTraceInfoStack.html#toString()}
 **/
java.io.ObjectOutputStream.DebugTraceInfoStack.prototype.toString = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$DebugTraceInfoStack') {
			return new java.io.ObjectOutputStream.DebugTraceInfoStack(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function push
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.DebugTraceInfoStack.html#push(java.lang.String)}
 **/
java.io.ObjectOutputStream.DebugTraceInfoStack.prototype.push = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'push',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$DebugTraceInfoStack') {
			return new java.io.ObjectOutputStream.DebugTraceInfoStack(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectOutputStream.DebugTraceInfoStack;
