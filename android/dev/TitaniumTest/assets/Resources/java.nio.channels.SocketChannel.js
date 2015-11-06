/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.SocketChannel
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};

/**
 * @class java.nio.channels.SocketChannel
 * @extends java.nio.channels.spi.AbstractSelectableChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html}
 **/
java.nio.channels.SocketChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.SocketChannel') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.SocketChannel',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractSelectableChannel');
java.nio.channels.SocketChannel.prototype = Object.create(SuperClass.prototype);
java.nio.channels.SocketChannel.prototype.constructor = java.nio.channels.SocketChannel;

java.nio.channels.SocketChannel.className = "java.nio.channels.SocketChannel";
java.nio.channels.SocketChannel.prototype.className = "java.nio.channels.SocketChannel";

// Constants

// Static fields
// http://developer.android.com/reference/java/nio/channels/SocketChannel.html#$assertionsDisabled
Object.defineProperty(java.nio.channels.SocketChannel, '$assertionsDisabled', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: '$assertionsDisabled'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.channels.SocketChannel') {
				return new java.nio.channels.SocketChannel(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#open()}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#open(java.net.SocketAddress)}
 **/
java.nio.channels.SocketChannel.open = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#setOption(java.net.SocketOption, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#setOption(java.net.SocketOption, java.lang.Object)}
 **/
java.nio.channels.SocketChannel.prototype.setOption = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isConnectionPending
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#isConnectionPending()}
 **/
java.nio.channels.SocketChannel.prototype.isConnectionPending = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isConnectionPending',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#read(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#read(java.nio.ByteBuffer[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#read(java.nio.ByteBuffer[])}
 **/
java.nio.channels.SocketChannel.prototype.read = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#isConnected()}
 **/
java.nio.channels.SocketChannel.prototype.isConnected = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#getRemoteAddress()}
 **/
java.nio.channels.SocketChannel.prototype.getRemoteAddress = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishConnect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#finishConnect()}
 **/
java.nio.channels.SocketChannel.prototype.finishConnect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishConnect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shutdownOutput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#shutdownOutput()}
 **/
java.nio.channels.SocketChannel.prototype.shutdownOutput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shutdownOutput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#getLocalAddress()}
 **/
java.nio.channels.SocketChannel.prototype.getLocalAddress = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shutdownInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#shutdownInput()}
 **/
java.nio.channels.SocketChannel.prototype.shutdownInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shutdownInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#bind(java.net.SocketAddress)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#bind(java.net.SocketAddress)}
 **/
java.nio.channels.SocketChannel.prototype.bind = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#socket()}
 **/
java.nio.channels.SocketChannel.prototype.socket = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#write(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#write(java.nio.ByteBuffer[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#write(java.nio.ByteBuffer[])}
 **/
java.nio.channels.SocketChannel.prototype.write = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#validOps()}
 **/
java.nio.channels.SocketChannel.prototype.validOps = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SocketChannel.html#connect(java.net.SocketAddress)}
 **/
java.nio.channels.SocketChannel.prototype.connect = function() {
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
		if (result.apiName === 'java.nio.channels.SocketChannel') {
			return new java.nio.channels.SocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.SocketChannel;
