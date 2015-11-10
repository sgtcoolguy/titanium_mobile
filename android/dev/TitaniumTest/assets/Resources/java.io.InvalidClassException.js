/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.InvalidClassException
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.InvalidClassException
 * @extends java.io.ObjectStreamException 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/InvalidClassException.html}
 **/
java.io.InvalidClassException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.InvalidClassException') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.InvalidClassException',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.ObjectStreamException');
java.io.InvalidClassException.prototype = Object.create(SuperClass.prototype);
java.io.InvalidClassException.prototype.constructor = java.io.InvalidClassException;

java.io.InvalidClassException.className = "java.io.InvalidClassException";
java.io.InvalidClassException.prototype.className = "java.io.InvalidClassException";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/InvalidClassException.html#classname
Object.defineProperty(java.io.InvalidClassException.prototype, 'classname', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'classname'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.InvalidClassException') {
				return new java.io.InvalidClassException(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.native.setNativeField({
			field: 'classname',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/InvalidClassException.html#getMessage()}
 **/
java.io.InvalidClassException.prototype.getMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.InvalidClassException') {
			return new java.io.InvalidClassException(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.InvalidClassException;
