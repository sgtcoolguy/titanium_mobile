/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ReflectiveOperationException
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.ReflectiveOperationException
 * @extends java.lang.Exception 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ReflectiveOperationException.html}
 **/
java.lang.ReflectiveOperationException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ReflectiveOperationException') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ReflectiveOperationException',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Exception');
java.lang.ReflectiveOperationException.prototype = Object.create(SuperClass.prototype);
java.lang.ReflectiveOperationException.prototype.constructor = java.lang.ReflectiveOperationException;

java.lang.ReflectiveOperationException.className = "java.lang.ReflectiveOperationException";
java.lang.ReflectiveOperationException.prototype.className = "java.lang.ReflectiveOperationException";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/ReflectiveOperationException.html#serialVersionUID}
 */
java.lang.ReflectiveOperationException.serialVersionUID = 123456789;

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.lang.ReflectiveOperationException;
