/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.ContentHandler
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.ContentHandler
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/ContentHandler.html}
 **/
java.net.ContentHandler = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.net.ContentHandler') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.ContentHandler',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.ContentHandler.prototype = Object.create(SuperClass.prototype);
java.net.ContentHandler.prototype.constructor = java.net.ContentHandler;

java.net.ContentHandler.className = "java.net.ContentHandler";
java.net.ContentHandler.prototype.className = "java.net.ContentHandler";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getContent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/ContentHandler.html#getContent(java.net.URLConnection)}
 * @see {@link http://developer.android.com/reference/java/net/ContentHandler.html#getContent(java.net.URLConnection, java.lang.Class[])}
 **/
java.net.ContentHandler.prototype.getContent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.ContentHandler') {
			return new java.net.ContentHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.ContentHandler;
