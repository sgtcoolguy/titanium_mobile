/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.SelectionKey
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};

/**
 * @class java.nio.channels.SelectionKey
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html}
 **/
java.nio.channels.SelectionKey = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.SelectionKey') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.SelectionKey',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.channels.SelectionKey.prototype = Object.create(SuperClass.prototype);
java.nio.channels.SelectionKey.prototype.constructor = java.nio.channels.SelectionKey;

java.nio.channels.SelectionKey.className = "java.nio.channels.SelectionKey";
java.nio.channels.SelectionKey.prototype.className = "java.nio.channels.SelectionKey";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#OP_CONNECT}
 */
java.nio.channels.SelectionKey.OP_CONNECT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#OP_ACCEPT}
 */
java.nio.channels.SelectionKey.OP_ACCEPT = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#OP_READ}
 */
java.nio.channels.SelectionKey.OP_READ = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#OP_WRITE}
 */
java.nio.channels.SelectionKey.OP_WRITE = 4;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#cancel()}
 **/
java.nio.channels.SelectionKey.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAcceptable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isAcceptable()}
 **/
java.nio.channels.SelectionKey.prototype.isAcceptable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAcceptable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isConnectable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isConnectable()}
 **/
java.nio.channels.SelectionKey.prototype.isConnectable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isConnectable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isValid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isValid()}
 **/
java.nio.channels.SelectionKey.prototype.isValid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isValid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function channel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#channel()}
 **/
java.nio.channels.SelectionKey.prototype.channel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'channel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isWritable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isWritable()}
 **/
java.nio.channels.SelectionKey.prototype.isWritable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isWritable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#attachment()}
 **/
java.nio.channels.SelectionKey.prototype.attachment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readyOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#readyOps()}
 **/
java.nio.channels.SelectionKey.prototype.readyOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readyOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function interestOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#interestOps()}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#interestOps(int)}
 **/
java.nio.channels.SelectionKey.prototype.interestOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'interestOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function selector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#selector()}
 **/
java.nio.channels.SelectionKey.prototype.selector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'selector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#attach(java.lang.Object)}
 **/
java.nio.channels.SelectionKey.prototype.attach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReadable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isReadable()}
 **/
java.nio.channels.SelectionKey.prototype.isReadable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReadable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new java.nio.channels.SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.SelectionKey;
