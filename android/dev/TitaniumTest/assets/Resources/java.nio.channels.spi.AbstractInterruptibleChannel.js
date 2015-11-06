/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.spi.AbstractInterruptibleChannel
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};
global.java.nio.channels.spi = global.java.nio.channels.spi || {};

/**
 * @class java.nio.channels.spi.AbstractInterruptibleChannel
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.spi.AbstractInterruptibleChannel',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.channels.spi.AbstractInterruptibleChannel.prototype = Object.create(SuperClass.prototype);
java.nio.channels.spi.AbstractInterruptibleChannel.prototype.constructor = java.nio.channels.spi.AbstractInterruptibleChannel;

java.nio.channels.spi.AbstractInterruptibleChannel.className = "java.nio.channels.spi.AbstractInterruptibleChannel";
java.nio.channels.spi.AbstractInterruptibleChannel.prototype.className = "java.nio.channels.spi.AbstractInterruptibleChannel";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function blockedOn
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#blockedOn(sun.nio.ch.Interruptible)}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.blockedOn = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'blockedOn',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$202
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#access$202(java.nio.channels.spi.AbstractInterruptibleChannel, java.lang.Thread)}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.access$202 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$202',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$102
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#access$102(java.nio.channels.spi.AbstractInterruptibleChannel, boolean)}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.access$102 = function() {
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
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#access$100(java.nio.channels.spi.AbstractInterruptibleChannel)}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.access$100 = function() {
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
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#access$000(java.nio.channels.spi.AbstractInterruptibleChannel)}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.access$000 = function() {
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
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
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
 * @function implCloseChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#implCloseChannel()}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.prototype.implCloseChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implCloseChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#isOpen()}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.prototype.isOpen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function end
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#end(boolean)}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.prototype.end = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'end',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#close()}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.prototype.close = function() {
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
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function begin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractInterruptibleChannel.html#begin()}
 **/
java.nio.channels.spi.AbstractInterruptibleChannel.prototype.begin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'begin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractInterruptibleChannel') {
			return new java.nio.channels.spi.AbstractInterruptibleChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.spi.AbstractInterruptibleChannel;
