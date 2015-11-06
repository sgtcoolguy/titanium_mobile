/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.DatagramChannel
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};

/**
 * @class java.nio.channels.DatagramChannel
 * @extends java.nio.channels.spi.AbstractSelectableChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html}
 **/
java.nio.channels.DatagramChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.DatagramChannel') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.DatagramChannel',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractSelectableChannel');
java.nio.channels.DatagramChannel.prototype = Object.create(SuperClass.prototype);
java.nio.channels.DatagramChannel.prototype.constructor = java.nio.channels.DatagramChannel;

java.nio.channels.DatagramChannel.className = "java.nio.channels.DatagramChannel";
java.nio.channels.DatagramChannel.prototype.className = "java.nio.channels.DatagramChannel";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#open()}
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#open(java.net.ProtocolFamily)}
 **/
java.nio.channels.DatagramChannel.open = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'open',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setOption
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#setOption(java.net.SocketOption, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#setOption(java.net.SocketOption, java.lang.Object)}
 **/
java.nio.channels.DatagramChannel.prototype.setOption = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOption',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function disconnect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#disconnect()}
 **/
java.nio.channels.DatagramChannel.prototype.disconnect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disconnect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function receive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#receive(java.nio.ByteBuffer)}
 **/
java.nio.channels.DatagramChannel.prototype.receive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'receive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#read(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#read(java.nio.ByteBuffer[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#read(java.nio.ByteBuffer[])}
 **/
java.nio.channels.DatagramChannel.prototype.read = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'read',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isConnected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#isConnected()}
 **/
java.nio.channels.DatagramChannel.prototype.isConnected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isConnected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRemoteAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#getRemoteAddress()}
 **/
java.nio.channels.DatagramChannel.prototype.getRemoteAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRemoteAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#getLocalAddress()}
 **/
java.nio.channels.DatagramChannel.prototype.getLocalAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#bind(java.net.SocketAddress)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#bind(java.net.SocketAddress)}
 **/
java.nio.channels.DatagramChannel.prototype.bind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function socket
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#socket()}
 **/
java.nio.channels.DatagramChannel.prototype.socket = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'socket',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function send
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#send(java.nio.ByteBuffer, java.net.SocketAddress)}
 **/
java.nio.channels.DatagramChannel.prototype.send = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'send',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function write
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#write(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#write(java.nio.ByteBuffer[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#write(java.nio.ByteBuffer[])}
 **/
java.nio.channels.DatagramChannel.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function validOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#validOps()}
 **/
java.nio.channels.DatagramChannel.prototype.validOps = function() {
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
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function connect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/DatagramChannel.html#connect(java.net.SocketAddress)}
 **/
java.nio.channels.DatagramChannel.prototype.connect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'connect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.DatagramChannel') {
			return new java.nio.channels.DatagramChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.DatagramChannel;
