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
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.channels.SelectionKey') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.SelectionKey. Create a subclass using java.nio.channels.SelectionKey.extend();' );
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

// class property
Object.defineProperty(java.nio.channels.SelectionKey, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.channels.SelectionKey',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.channels.SelectionKey.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.channels.SelectionKey',
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
	whatever.prototype = Object.create(java.nio.channels.SelectionKey.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

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
