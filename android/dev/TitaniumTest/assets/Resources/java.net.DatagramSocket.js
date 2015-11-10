/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.DatagramSocket
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.DatagramSocket
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html}
 **/
java.net.DatagramSocket = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.net.DatagramSocket') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.DatagramSocket',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.DatagramSocket.prototype = Object.create(SuperClass.prototype);
java.net.DatagramSocket.prototype.constructor = java.net.DatagramSocket;

java.net.DatagramSocket.className = "java.net.DatagramSocket";
java.net.DatagramSocket.prototype.className = "java.net.DatagramSocket";

// class property
Object.defineProperty(java.net.DatagramSocket, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.net.DatagramSocket',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.net.DatagramSocket.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.net.DatagramSocket',
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
	whatever.prototype = Object.create(java.net.DatagramSocket.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function setDatagramSocketImplFactory
 * @static
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#setDatagramSocketImplFactory(java.net.DatagramSocketImplFactory)}
 **/
java.net.DatagramSocket.setDatagramSocketImplFactory = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setDatagramSocketImplFactory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
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
 * @function getInetAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getInetAddress()}
 **/
java.net.DatagramSocket.prototype.getInetAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInetAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#disconnect()}
 **/
java.net.DatagramSocket.prototype.disconnect = function() {
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
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getLocalPort()}
 **/
java.net.DatagramSocket.prototype.getLocalPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReceiveBufferSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#setReceiveBufferSize(int)}
 **/
java.net.DatagramSocket.prototype.setReceiveBufferSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReceiveBufferSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#isConnected()}
 **/
java.net.DatagramSocket.prototype.isConnected = function() {
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
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getLocalAddress()}
 **/
java.net.DatagramSocket.prototype.getLocalAddress = function() {
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
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#bind(java.net.SocketAddress)}
 **/
java.net.DatagramSocket.prototype.bind = function() {
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
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getChannel()}
 **/
java.net.DatagramSocket.prototype.getChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSoTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getSoTimeout()}
 **/
java.net.DatagramSocket.prototype.getSoTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSoTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#close()}
 **/
java.net.DatagramSocket.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#connect(java.net.InetAddress, int)}
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#connect(java.net.SocketAddress)}
 **/
java.net.DatagramSocket.prototype.connect = function() {
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
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTrafficClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#setTrafficClass(int)}
 **/
java.net.DatagramSocket.prototype.setTrafficClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTrafficClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#receive(java.net.DatagramPacket)}
 **/
java.net.DatagramSocket.prototype.receive = function() {
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
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getBroadcast()}
 **/
java.net.DatagramSocket.prototype.getBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalSocketAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getLocalSocketAddress()}
 **/
java.net.DatagramSocket.prototype.getLocalSocketAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalSocketAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReceiveBufferSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getReceiveBufferSize()}
 **/
java.net.DatagramSocket.prototype.getReceiveBufferSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReceiveBufferSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReuseAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#setReuseAddress(boolean)}
 **/
java.net.DatagramSocket.prototype.setReuseAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReuseAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReuseAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getReuseAddress()}
 **/
java.net.DatagramSocket.prototype.getReuseAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReuseAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTrafficClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getTrafficClass()}
 **/
java.net.DatagramSocket.prototype.getTrafficClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTrafficClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSoTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#setSoTimeout(int)}
 **/
java.net.DatagramSocket.prototype.setSoTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSoTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getPort()}
 **/
java.net.DatagramSocket.prototype.getPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#isClosed()}
 **/
java.net.DatagramSocket.prototype.isClosed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isClosed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isBound
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#isBound()}
 **/
java.net.DatagramSocket.prototype.isBound = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isBound',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSendBufferSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#setSendBufferSize(int)}
 **/
java.net.DatagramSocket.prototype.setSendBufferSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSendBufferSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSendBufferSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getSendBufferSize()}
 **/
java.net.DatagramSocket.prototype.getSendBufferSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSendBufferSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#setBroadcast(boolean)}
 **/
java.net.DatagramSocket.prototype.setBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#send(java.net.DatagramPacket)}
 **/
java.net.DatagramSocket.prototype.send = function() {
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
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRemoteSocketAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocket.html#getRemoteSocketAddress()}
 **/
java.net.DatagramSocket.prototype.getRemoteSocketAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRemoteSocketAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocket') {
			return new java.net.DatagramSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.DatagramSocket;
