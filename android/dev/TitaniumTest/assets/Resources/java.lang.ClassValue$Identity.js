/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ClassValue.Identity
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ClassValue = global.java.lang.ClassValue || {};

/**
 * @class java.lang.ClassValue.Identity
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Identity.html}
 **/
java.lang.ClassValue.Identity = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ClassValue$Identity') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ClassValue$Identity',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ClassValue.Identity.prototype = Object.create(SuperClass.prototype);
java.lang.ClassValue.Identity.prototype.constructor = java.lang.ClassValue.Identity;

java.lang.ClassValue.Identity.className = "java.lang.ClassValue$Identity";
java.lang.ClassValue.Identity.prototype.className = "java.lang.ClassValue$Identity";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.lang.ClassValue.Identity;
