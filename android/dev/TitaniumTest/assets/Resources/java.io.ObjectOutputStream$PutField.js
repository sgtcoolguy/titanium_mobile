/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectOutputStream.PutField
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};
global.java.io.ObjectOutputStream = global.java.io.ObjectOutputStream || {};

/**
 * @class java.io.ObjectOutputStream.PutField
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html}
 **/
java.io.ObjectOutputStream.PutField = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectOutputStream$PutField') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectOutputStream$PutField',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.ObjectOutputStream.PutField.prototype = Object.create(SuperClass.prototype);
java.io.ObjectOutputStream.PutField.prototype.constructor = java.io.ObjectOutputStream.PutField;

java.io.ObjectOutputStream.PutField.className = "java.io.ObjectOutputStream$PutField";
java.io.ObjectOutputStream.PutField.prototype.className = "java.io.ObjectOutputStream$PutField";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function write
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#write(java.io.ObjectOutput)}
 **/
java.io.ObjectOutputStream.PutField.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$PutField') {
			return new java.io.ObjectOutputStream.PutField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function put
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, boolean)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, byte)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, char)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, short)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, long)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, float)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, double)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.PutField.html#put(java.lang.String, java.lang.Object)}
 **/
java.io.ObjectOutputStream.PutField.prototype.put = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'put',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$PutField') {
			return new java.io.ObjectOutputStream.PutField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectOutputStream.PutField;
