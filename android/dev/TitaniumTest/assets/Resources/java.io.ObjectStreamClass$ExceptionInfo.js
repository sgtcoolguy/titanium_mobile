/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectStreamClass.ExceptionInfo
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};
global.java.io.ObjectStreamClass = global.java.io.ObjectStreamClass || {};

/**
 * @class java.io.ObjectStreamClass.ExceptionInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.ExceptionInfo.html}
 **/
java.io.ObjectStreamClass.ExceptionInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectStreamClass$ExceptionInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectStreamClass$ExceptionInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.ObjectStreamClass.ExceptionInfo.prototype = Object.create(SuperClass.prototype);
java.io.ObjectStreamClass.ExceptionInfo.prototype.constructor = java.io.ObjectStreamClass.ExceptionInfo;

java.io.ObjectStreamClass.ExceptionInfo.className = "java.io.ObjectStreamClass$ExceptionInfo";
java.io.ObjectStreamClass.ExceptionInfo.prototype.className = "java.io.ObjectStreamClass$ExceptionInfo";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function newInvalidClassException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.ExceptionInfo.html#newInvalidClassException()}
 **/
java.io.ObjectStreamClass.ExceptionInfo.prototype.newInvalidClassException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newInvalidClassException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass$ExceptionInfo') {
			return new java.io.ObjectStreamClass.ExceptionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectStreamClass.ExceptionInfo;
