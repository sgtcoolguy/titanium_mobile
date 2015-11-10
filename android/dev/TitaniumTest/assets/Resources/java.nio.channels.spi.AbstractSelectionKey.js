/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.spi.AbstractSelectionKey
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};
global.java.nio.channels.spi = global.java.nio.channels.spi || {};

/**
 * @class java.nio.channels.spi.AbstractSelectionKey
 * @extends java.nio.channels.SelectionKey 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelectionKey.html}
 **/
java.nio.channels.spi.AbstractSelectionKey = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.channels.spi.AbstractSelectionKey') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.spi.AbstractSelectionKey. Create a subclass using java.nio.channels.spi.AbstractSelectionKey.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.SelectionKey');
java.nio.channels.spi.AbstractSelectionKey.prototype = Object.create(SuperClass.prototype);
java.nio.channels.spi.AbstractSelectionKey.prototype.constructor = java.nio.channels.spi.AbstractSelectionKey;

java.nio.channels.spi.AbstractSelectionKey.className = "java.nio.channels.spi.AbstractSelectionKey";
java.nio.channels.spi.AbstractSelectionKey.prototype.className = "java.nio.channels.spi.AbstractSelectionKey";

// class property
Object.defineProperty(java.nio.channels.spi.AbstractSelectionKey, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.channels.spi.AbstractSelectionKey',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.channels.spi.AbstractSelectionKey.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.channels.spi.AbstractSelectionKey',
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
	whatever.prototype = Object.create(java.nio.channels.spi.AbstractSelectionKey.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelectionKey.html#cancel()}
 **/
java.nio.channels.spi.AbstractSelectionKey.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelectionKey') {
			return new java.nio.channels.spi.AbstractSelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isValid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelectionKey.html#isValid()}
 **/
java.nio.channels.spi.AbstractSelectionKey.prototype.isValid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isValid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelectionKey') {
			return new java.nio.channels.spi.AbstractSelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.spi.AbstractSelectionKey;
