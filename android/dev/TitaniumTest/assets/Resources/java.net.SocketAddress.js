/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.SocketAddress
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.SocketAddress
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/SocketAddress.html}
 **/
java.net.SocketAddress = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.net.SocketAddress') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.SocketAddress',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.SocketAddress.prototype = Object.create(SuperClass.prototype);
java.net.SocketAddress.prototype.constructor = java.net.SocketAddress;

java.net.SocketAddress.className = "java.net.SocketAddress";
java.net.SocketAddress.prototype.className = "java.net.SocketAddress";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/net/SocketAddress.html#serialVersionUID}
 */
java.net.SocketAddress.serialVersionUID = 5215720748342549866;

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.net.SocketAddress;
