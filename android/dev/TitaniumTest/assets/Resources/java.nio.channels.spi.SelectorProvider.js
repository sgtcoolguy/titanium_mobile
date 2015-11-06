/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.spi.SelectorProvider
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};
global.java.nio.channels.spi = global.java.nio.channels.spi || {};

/**
 * @class java.nio.channels.spi.SelectorProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html}
 **/
java.nio.channels.spi.SelectorProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.spi.SelectorProvider') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.spi.SelectorProvider',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.channels.spi.SelectorProvider.prototype = Object.create(SuperClass.prototype);
java.nio.channels.spi.SelectorProvider.prototype.constructor = java.nio.channels.spi.SelectorProvider;

java.nio.channels.spi.SelectorProvider.className = "java.nio.channels.spi.SelectorProvider";
java.nio.channels.spi.SelectorProvider.prototype.className = "java.nio.channels.spi.SelectorProvider";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$102
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#access$102(java.nio.channels.spi.SelectorProvider)}
 **/
java.nio.channels.spi.SelectorProvider.access$102 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$102',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$200
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#access$200()}
 **/
java.nio.channels.spi.SelectorProvider.access$200 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$200',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$100
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#access$100()}
 **/
java.nio.channels.spi.SelectorProvider.access$100 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$100',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$000
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#access$000()}
 **/
java.nio.channels.spi.SelectorProvider.access$000 = function() {
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
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function provider
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#provider()}
 **/
java.nio.channels.spi.SelectorProvider.provider = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'provider',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
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
 * @function openSocketChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openSocketChannel()}
 **/
java.nio.channels.spi.SelectorProvider.prototype.openSocketChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openSocketChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openDatagramChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openDatagramChannel()}
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openDatagramChannel(java.net.ProtocolFamily)}
 **/
java.nio.channels.spi.SelectorProvider.prototype.openDatagramChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openDatagramChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openPipe
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openPipe()}
 **/
java.nio.channels.spi.SelectorProvider.prototype.openPipe = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openPipe',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inheritedChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#inheritedChannel()}
 **/
java.nio.channels.spi.SelectorProvider.prototype.inheritedChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inheritedChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openServerSocketChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openServerSocketChannel()}
 **/
java.nio.channels.spi.SelectorProvider.prototype.openServerSocketChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openServerSocketChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openSelector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openSelector()}
 **/
java.nio.channels.spi.SelectorProvider.prototype.openSelector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openSelector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new java.nio.channels.spi.SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.spi.SelectorProvider;
