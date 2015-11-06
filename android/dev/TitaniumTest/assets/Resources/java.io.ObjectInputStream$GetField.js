/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectInputStream.GetField
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};
global.java.io.ObjectInputStream = global.java.io.ObjectInputStream || {};

/**
 * @class java.io.ObjectInputStream.GetField
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html}
 **/
java.io.ObjectInputStream.GetField = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectInputStream$GetField') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectInputStream$GetField',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.ObjectInputStream.GetField.prototype = Object.create(SuperClass.prototype);
java.io.ObjectInputStream.GetField.prototype.constructor = java.io.ObjectInputStream.GetField;

java.io.ObjectInputStream.GetField.className = "java.io.ObjectInputStream$GetField";
java.io.ObjectInputStream.GetField.prototype.className = "java.io.ObjectInputStream$GetField";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getObjectStreamClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#getObjectStreamClass()}
 **/
java.io.ObjectInputStream.GetField.prototype.getObjectStreamClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getObjectStreamClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$GetField') {
			return new java.io.ObjectInputStream.GetField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defaulted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#defaulted(java.lang.String)}
 **/
java.io.ObjectInputStream.GetField.prototype.defaulted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'defaulted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$GetField') {
			return new java.io.ObjectInputStream.GetField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function get
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, boolean)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, byte)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, char)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, short)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, long)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, float)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, double)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.GetField.html#get(java.lang.String, java.lang.Object)}
 **/
java.io.ObjectInputStream.GetField.prototype.get = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'get',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$GetField') {
			return new java.io.ObjectInputStream.GetField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectInputStream.GetField;
