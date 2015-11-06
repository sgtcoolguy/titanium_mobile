/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.ServerSocket
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.ServerSocket
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html}
 **/
java.net.ServerSocket = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.net.ServerSocket') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.ServerSocket',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.ServerSocket.prototype = Object.create(SuperClass.prototype);
java.net.ServerSocket.prototype.constructor = java.net.ServerSocket;

java.net.ServerSocket.className = "java.net.ServerSocket";
java.net.ServerSocket.prototype.className = "java.net.ServerSocket";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$000
 * @static
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#access$000(java.net.ServerSocket)}
 **/
java.net.ServerSocket.access$000 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$000',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSocketFactory
 * @static
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#setSocketFactory(java.net.SocketImplFactory)}
 **/
java.net.ServerSocket.setSocketFactory = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'setSocketFactory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#getInetAddress()}
 **/
java.net.ServerSocket.prototype.getInetAddress = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#getLocalPort()}
 **/
java.net.ServerSocket.prototype.getLocalPort = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#setReceiveBufferSize(int)}
 **/
java.net.ServerSocket.prototype.setReceiveBufferSize = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#bind(java.net.SocketAddress)}
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#bind(java.net.SocketAddress, int)}
 **/
java.net.ServerSocket.prototype.bind = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#getChannel()}
 **/
java.net.ServerSocket.prototype.getChannel = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#getImpl()}
 **/
java.net.ServerSocket.prototype.getImpl = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#getSoTimeout()}
 **/
java.net.ServerSocket.prototype.getSoTimeout = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#close()}
 **/
java.net.ServerSocket.prototype.close = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#getLocalSocketAddress()}
 **/
java.net.ServerSocket.prototype.getLocalSocketAddress = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#setReuseAddress(boolean)}
 **/
java.net.ServerSocket.prototype.setReuseAddress = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#getReceiveBufferSize()}
 **/
java.net.ServerSocket.prototype.getReceiveBufferSize = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#getReuseAddress()}
 **/
java.net.ServerSocket.prototype.getReuseAddress = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#setSoTimeout(int)}
 **/
java.net.ServerSocket.prototype.setSoTimeout = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#createImpl()}
 **/
java.net.ServerSocket.prototype.createImpl = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#setCreated()}
 **/
java.net.ServerSocket.prototype.setCreated = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function accept
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#accept()}
 **/
java.net.ServerSocket.prototype.accept = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'accept',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#setPerformancePreferences(int, int, int)}
 **/
java.net.ServerSocket.prototype.setPerformancePreferences = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#isClosed()}
 **/
java.net.ServerSocket.prototype.isClosed = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#isBound()}
 **/
java.net.ServerSocket.prototype.isBound = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#setBound()}
 **/
java.net.ServerSocket.prototype.setBound = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#toString()}
 **/
java.net.ServerSocket.prototype.toString = function() {
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
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implAccept
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/ServerSocket.html#implAccept(java.net.Socket)}
 **/
java.net.ServerSocket.prototype.implAccept = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implAccept',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.ServerSocket') {
			return new java.net.ServerSocket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.ServerSocket;
