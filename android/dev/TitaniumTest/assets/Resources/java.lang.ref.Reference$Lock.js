/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ref.Reference.Lock
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ref = global.java.lang.ref || {};
global.java.lang.ref.Reference = global.java.lang.ref.Reference || {};

/**
 * @class java.lang.ref.Reference.Lock
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.Lock.html}
 **/
java.lang.ref.Reference.Lock = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ref.Reference$Lock') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ref.Reference$Lock',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ref.Reference.Lock.prototype = Object.create(SuperClass.prototype);
java.lang.ref.Reference.Lock.prototype.constructor = java.lang.ref.Reference.Lock;

java.lang.ref.Reference.Lock.className = "java.lang.ref.Reference$Lock";
java.lang.ref.Reference.Lock.prototype.className = "java.lang.ref.Reference$Lock";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.lang.ref.Reference.Lock;
