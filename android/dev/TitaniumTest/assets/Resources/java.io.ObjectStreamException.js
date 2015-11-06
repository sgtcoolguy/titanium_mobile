/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectStreamException
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.ObjectStreamException
 * @extends java.io.IOException 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamException.html}
 **/
java.io.ObjectStreamException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectStreamException') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectStreamException',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.IOException');
java.io.ObjectStreamException.prototype = Object.create(SuperClass.prototype);
java.io.ObjectStreamException.prototype.constructor = java.io.ObjectStreamException;

java.io.ObjectStreamException.className = "java.io.ObjectStreamException";
java.io.ObjectStreamException.prototype.className = "java.io.ObjectStreamException";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.io.ObjectStreamException;
