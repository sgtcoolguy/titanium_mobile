/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ref.WeakReference
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ref = global.java.lang.ref || {};

/**
 * @class java.lang.ref.WeakReference
 * @extends java.lang.ref.Reference 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ref/WeakReference.html}
 **/
java.lang.ref.WeakReference = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ref.WeakReference') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ref.WeakReference',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.ref.Reference');
java.lang.ref.WeakReference.prototype = Object.create(SuperClass.prototype);
java.lang.ref.WeakReference.prototype.constructor = java.lang.ref.WeakReference;

java.lang.ref.WeakReference.className = "java.lang.ref.WeakReference";
java.lang.ref.WeakReference.prototype.className = "java.lang.ref.WeakReference";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.lang.ref.WeakReference;
