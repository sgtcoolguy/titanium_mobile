/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.Pipe.SourceChannel
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};
global.java.nio.channels.Pipe = global.java.nio.channels.Pipe || {};

/**
 * @class java.nio.channels.Pipe.SourceChannel
 * @extends java.nio.channels.spi.AbstractSelectableChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.SourceChannel.html}
 **/
java.nio.channels.Pipe.SourceChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.Pipe$SourceChannel') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.Pipe$SourceChannel',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractSelectableChannel');
java.nio.channels.Pipe.SourceChannel.prototype = Object.create(SuperClass.prototype);
java.nio.channels.Pipe.SourceChannel.prototype.constructor = java.nio.channels.Pipe.SourceChannel;

java.nio.channels.Pipe.SourceChannel.className = "java.nio.channels.Pipe$SourceChannel";
java.nio.channels.Pipe.SourceChannel.prototype.className = "java.nio.channels.Pipe$SourceChannel";

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
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.SourceChannel.html#validOps()}
 **/
java.nio.channels.Pipe.SourceChannel.prototype.validOps = function() {
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
		if (result.apiName === 'java.nio.channels.Pipe$SourceChannel') {
			return new java.nio.channels.Pipe.SourceChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.Pipe.SourceChannel;
