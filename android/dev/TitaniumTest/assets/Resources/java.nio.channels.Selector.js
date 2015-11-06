/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.Selector
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};

/**
 * @class java.nio.channels.Selector
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html}
 **/
java.nio.channels.Selector = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.Selector') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.Selector',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.channels.Selector.prototype = Object.create(SuperClass.prototype);
java.nio.channels.Selector.prototype.constructor = java.nio.channels.Selector;

java.nio.channels.Selector.className = "java.nio.channels.Selector";
java.nio.channels.Selector.prototype.className = "java.nio.channels.Selector";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#open()}
 **/
java.nio.channels.Selector.open = function() {
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
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
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
 * @function selectNow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#selectNow()}
 **/
java.nio.channels.Selector.prototype.selectNow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'selectNow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#isOpen()}
 **/
java.nio.channels.Selector.prototype.isOpen = function() {
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
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function select
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#select(long)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#select()}
 **/
java.nio.channels.Selector.prototype.select = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'select',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
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
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#provider()}
 **/
java.nio.channels.Selector.prototype.provider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'provider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keys
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#keys()}
 **/
java.nio.channels.Selector.prototype.keys = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keys',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function wakeup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#wakeup()}
 **/
java.nio.channels.Selector.prototype.wakeup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'wakeup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function selectedKeys
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#selectedKeys()}
 **/
java.nio.channels.Selector.prototype.selectedKeys = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'selectedKeys',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/Selector.html#close()}
 **/
java.nio.channels.Selector.prototype.close = function() {
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
		if (result.apiName === 'java.nio.channels.Selector') {
			return new java.nio.channels.Selector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.Selector;
