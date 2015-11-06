/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.Socket
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.Socket
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/Socket.html}
 **/
java.net.Socket = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.net.Socket') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.Socket',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.Socket.prototype = Object.create(SuperClass.prototype);
java.net.Socket.prototype.constructor = java.net.Socket;

java.net.Socket.className = "java.net.Socket";
java.net.Socket.prototype.className = "java.net.Socket";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/net/Socket.html#impl
Object.defineProperty(java.net.Socket.prototype, 'impl', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'impl'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.Socket') {
				return new java.net.Socket(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'impl',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function setSocketImplFactory
 * @static
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setSocketImplFactory(java.net.SocketImplFactory)}
 **/
java.net.Socket.setSocketImplFactory = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'setSocketImplFactory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getInetAddress()}
 **/
java.net.Socket.prototype.getInetAddress = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInputShutdown
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#isInputShutdown()}
 **/
java.net.Socket.prototype.isInputShutdown = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInputShutdown',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTcpNoDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setTcpNoDelay(boolean)}
 **/
java.net.Socket.prototype.setTcpNoDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTcpNoDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeepAlive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getKeepAlive()}
 **/
java.net.Socket.prototype.getKeepAlive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeepAlive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#bind(java.net.SocketAddress)}
 **/
java.net.Socket.prototype.bind = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getChannel()}
 **/
java.net.Socket.prototype.getChannel = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSoLinger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getSoLinger()}
 **/
java.net.Socket.prototype.getSoLinger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSoLinger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImpl
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getImpl()}
 **/
java.net.Socket.prototype.getImpl = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImpl',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTcpNoDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getTcpNoDelay()}
 **/
java.net.Socket.prototype.getTcpNoDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTcpNoDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSoLinger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setSoLinger(boolean, int)}
 **/
java.net.Socket.prototype.setSoLinger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSoLinger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getSoTimeout()}
 **/
java.net.Socket.prototype.getSoTimeout = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postAccept
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#postAccept()}
 **/
java.net.Socket.prototype.postAccept = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postAccept',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getTrafficClass()}
 **/
java.net.Socket.prototype.getTrafficClass = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setSoTimeout(int)}
 **/
java.net.Socket.prototype.setSoTimeout = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createImpl
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#createImpl(boolean)}
 **/
java.net.Socket.prototype.createImpl = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createImpl',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCreated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setCreated()}
 **/
java.net.Socket.prototype.setCreated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCreated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getInputStream()}
 **/
java.net.Socket.prototype.getInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#shutdownInput()}
 **/
java.net.Socket.prototype.shutdownInput = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPerformancePreferences
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setPerformancePreferences(int, int, int)}
 **/
java.net.Socket.prototype.setPerformancePreferences = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPerformancePreferences',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendUrgentData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#sendUrgentData(int)}
 **/
java.net.Socket.prototype.sendUrgentData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendUrgentData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getRemoteSocketAddress()}
 **/
java.net.Socket.prototype.getRemoteSocketAddress = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOOBInline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getOOBInline()}
 **/
java.net.Socket.prototype.getOOBInline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOOBInline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getLocalPort()}
 **/
java.net.Socket.prototype.getLocalPort = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setReceiveBufferSize(int)}
 **/
java.net.Socket.prototype.setReceiveBufferSize = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#isConnected()}
 **/
java.net.Socket.prototype.isConnected = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getLocalAddress()}
 **/
java.net.Socket.prototype.getLocalAddress = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOutputShutdown
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#isOutputShutdown()}
 **/
java.net.Socket.prototype.isOutputShutdown = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOutputShutdown',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#close()}
 **/
java.net.Socket.prototype.close = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#connect(java.net.SocketAddress)}
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#connect(java.net.SocketAddress, int)}
 **/
java.net.Socket.prototype.connect = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setTrafficClass(int)}
 **/
java.net.Socket.prototype.setTrafficClass = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOOBInline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setOOBInline(boolean)}
 **/
java.net.Socket.prototype.setOOBInline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOOBInline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getLocalSocketAddress()}
 **/
java.net.Socket.prototype.getLocalSocketAddress = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getReceiveBufferSize()}
 **/
java.net.Socket.prototype.getReceiveBufferSize = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setReuseAddress(boolean)}
 **/
java.net.Socket.prototype.setReuseAddress = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getReuseAddress()}
 **/
java.net.Socket.prototype.getReuseAddress = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setImpl
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setImpl()}
 **/
java.net.Socket.prototype.setImpl = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setImpl',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeepAlive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setKeepAlive(boolean)}
 **/
java.net.Socket.prototype.setKeepAlive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeepAlive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#shutdownOutput()}
 **/
java.net.Socket.prototype.shutdownOutput = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getPort()}
 **/
java.net.Socket.prototype.getPort = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#isClosed()}
 **/
java.net.Socket.prototype.isClosed = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#isBound()}
 **/
java.net.Socket.prototype.isBound = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setSendBufferSize(int)}
 **/
java.net.Socket.prototype.setSendBufferSize = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBound
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setBound()}
 **/
java.net.Socket.prototype.setBound = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBound',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getSendBufferSize()}
 **/
java.net.Socket.prototype.getSendBufferSize = function() {
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
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#getOutputStream()}
 **/
java.net.Socket.prototype.getOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#toString()}
 **/
java.net.Socket.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setConnected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Socket.html#setConnected()}
 **/
java.net.Socket.prototype.setConnected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setConnected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Socket') {
			return new java.net.Socket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.Socket;
