/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ClassValue.Version
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ClassValue = global.java.lang.ClassValue || {};

/**
 * @class java.lang.ClassValue.Version
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Version.html}
 **/
java.lang.ClassValue.Version = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ClassValue$Version') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ClassValue$Version',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ClassValue.Version.prototype = Object.create(SuperClass.prototype);
java.lang.ClassValue.Version.prototype.constructor = java.lang.ClassValue.Version;

java.lang.ClassValue.Version.className = "java.lang.ClassValue$Version";
java.lang.ClassValue.Version.prototype.className = "java.lang.ClassValue$Version";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function classValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Version.html#classValue()}
 **/
java.lang.ClassValue.Version.prototype.classValue = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'classValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Version') {
			return new java.lang.ClassValue.Version(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Version.html#isLive()}
 **/
java.lang.ClassValue.Version.prototype.isLive = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isLive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Version') {
			return new java.lang.ClassValue.Version(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function promise
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Version.html#promise()}
 **/
java.lang.ClassValue.Version.prototype.promise = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'promise',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Version') {
			return new java.lang.ClassValue.Version(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ClassValue.Version;
