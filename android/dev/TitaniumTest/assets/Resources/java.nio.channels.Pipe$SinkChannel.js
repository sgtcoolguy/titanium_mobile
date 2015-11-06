/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.Pipe.SinkChannel
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};
global.java.nio.channels.Pipe = global.java.nio.channels.Pipe || {};

/**
 * @class java.nio.channels.Pipe.SinkChannel
 * @extends java.nio.channels.spi.AbstractSelectableChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.SinkChannel.html}
 **/
java.nio.channels.Pipe.SinkChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.Pipe$SinkChannel') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.Pipe$SinkChannel',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractSelectableChannel');
java.nio.channels.Pipe.SinkChannel.prototype = Object.create(SuperClass.prototype);
java.nio.channels.Pipe.SinkChannel.prototype.constructor = java.nio.channels.Pipe.SinkChannel;

java.nio.channels.Pipe.SinkChannel.className = "java.nio.channels.Pipe$SinkChannel";
java.nio.channels.Pipe.SinkChannel.prototype.className = "java.nio.channels.Pipe$SinkChannel";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function validOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.SinkChannel.html#validOps()}
 **/
java.nio.channels.Pipe.SinkChannel.prototype.validOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'validOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Pipe$SinkChannel') {
			return new java.nio.channels.Pipe.SinkChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.Pipe.SinkChannel;
