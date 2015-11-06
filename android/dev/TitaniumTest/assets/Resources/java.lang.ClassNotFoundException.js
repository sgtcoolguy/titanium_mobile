/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ClassNotFoundException
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.ClassNotFoundException
 * @extends java.lang.ReflectiveOperationException 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ClassNotFoundException.html}
 **/
java.lang.ClassNotFoundException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ClassNotFoundException') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ClassNotFoundException',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.ReflectiveOperationException');
java.lang.ClassNotFoundException.prototype = Object.create(SuperClass.prototype);
java.lang.ClassNotFoundException.prototype.constructor = java.lang.ClassNotFoundException;

java.lang.ClassNotFoundException.className = "java.lang.ClassNotFoundException";
java.lang.ClassNotFoundException.prototype.className = "java.lang.ClassNotFoundException";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassNotFoundException.html#getException()}
 **/
java.lang.ClassNotFoundException.prototype.getException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassNotFoundException') {
			return new java.lang.ClassNotFoundException(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassNotFoundException.html#getCause()}
 **/
java.lang.ClassNotFoundException.prototype.getCause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassNotFoundException') {
			return new java.lang.ClassNotFoundException(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ClassNotFoundException;
