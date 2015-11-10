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
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.net.SocketAddress') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.net.SocketAddress. Create a subclass using java.net.SocketAddress.extend();' );
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

// class property
Object.defineProperty(java.net.SocketAddress, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.net.SocketAddress',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.net.SocketAddress.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.net.SocketAddress',
		overrides: overrides
	});

	// Generate a JS wrapper for our dynamic subclass
	var whatever = function() {
		var result = subclassProxy.newInstance(arguments);
		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};

		// TODO Set up super?!
	};
	// it extends the JS wrapper for the parent type
	whatever.prototype = Object.create(java.net.SocketAddress.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.net.SocketAddress;
