/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.DatagramPacket
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.DatagramPacket
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html}
 **/
java.net.DatagramPacket = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.net.DatagramPacket') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.DatagramPacket',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.DatagramPacket.prototype = Object.create(SuperClass.prototype);
java.net.DatagramPacket.prototype.constructor = java.net.DatagramPacket;

java.net.DatagramPacket.className = "java.net.DatagramPacket";
java.net.DatagramPacket.prototype.className = "java.net.DatagramPacket";

// class property
Object.defineProperty(java.net.DatagramPacket, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.net.DatagramPacket',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#setLength(int)}
 **/
java.net.DatagramPacket.prototype.setLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#getPort()}
 **/
java.net.DatagramPacket.prototype.getPort = function() {
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
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#setAddress(java.net.InetAddress)}
 **/
java.net.DatagramPacket.prototype.setAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#setData(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#setData(byte[])}
 **/
java.net.DatagramPacket.prototype.setData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSocketAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#getSocketAddress()}
 **/
java.net.DatagramPacket.prototype.getSocketAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSocketAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#getOffset()}
 **/
java.net.DatagramPacket.prototype.getOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#getLength()}
 **/
java.net.DatagramPacket.prototype.getLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#getAddress()}
 **/
java.net.DatagramPacket.prototype.getAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSocketAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#setSocketAddress(java.net.SocketAddress)}
 **/
java.net.DatagramPacket.prototype.setSocketAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSocketAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#setPort(int)}
 **/
java.net.DatagramPacket.prototype.setPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramPacket.html#getData()}
 **/
java.net.DatagramPacket.prototype.getData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramPacket') {
			return new java.net.DatagramPacket(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.DatagramPacket;
