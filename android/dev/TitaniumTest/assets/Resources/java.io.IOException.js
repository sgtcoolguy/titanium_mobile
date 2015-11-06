/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.IOException
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.IOException
 * @extends java.lang.Exception 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/IOException.html}
 **/
java.io.IOException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.IOException') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.IOException',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Exception');
java.io.IOException.prototype = Object.create(SuperClass.prototype);
java.io.IOException.prototype.constructor = java.io.IOException;

java.io.IOException.className = "java.io.IOException";
java.io.IOException.prototype.className = "java.io.IOException";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/io/IOException.html#serialVersionUID}
 */
java.io.IOException.serialVersionUID = 7818375828146090155;

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.io.IOException;
