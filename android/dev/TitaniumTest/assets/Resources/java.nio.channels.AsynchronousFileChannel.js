/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.AsynchronousFileChannel
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};

/**
 * @class java.nio.channels.AsynchronousFileChannel
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html}
 **/
java.nio.channels.AsynchronousFileChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.channels.AsynchronousFileChannel') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.AsynchronousFileChannel. Create a subclass using java.nio.channels.AsynchronousFileChannel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.channels.AsynchronousFileChannel.prototype = Object.create(SuperClass.prototype);
java.nio.channels.AsynchronousFileChannel.prototype.constructor = java.nio.channels.AsynchronousFileChannel;

java.nio.channels.AsynchronousFileChannel.className = "java.nio.channels.AsynchronousFileChannel";
java.nio.channels.AsynchronousFileChannel.prototype.className = "java.nio.channels.AsynchronousFileChannel";

// class property
Object.defineProperty(java.nio.channels.AsynchronousFileChannel, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.channels.AsynchronousFileChannel',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.channels.AsynchronousFileChannel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.channels.AsynchronousFileChannel',
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
	whatever.prototype = Object.create(java.nio.channels.AsynchronousFileChannel.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#open(java.nio.file.Path, java.util.Set, java.util.concurrent.ExecutorService, java.nio.file.attribute.FileAttribute[])}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#open(java.nio.file.Path, java.nio.file.OpenOption[])}
 **/
java.nio.channels.AsynchronousFileChannel.open = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'open',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new java.nio.channels.AsynchronousFileChannel(result);
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
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#read(java.nio.ByteBuffer, long, java.lang.Object, java.nio.channels.CompletionHandler)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#read(java.nio.ByteBuffer, long)}
 **/
java.nio.channels.AsynchronousFileChannel.prototype.read = function() {
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
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new java.nio.channels.AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#size()}
 **/
java.nio.channels.AsynchronousFileChannel.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new java.nio.channels.AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function truncate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#truncate(long)}
 **/
java.nio.channels.AsynchronousFileChannel.prototype.truncate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'truncate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new java.nio.channels.AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lock
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#lock(long, long, boolean, java.lang.Object, java.nio.channels.CompletionHandler)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#lock(java.lang.Object, java.nio.channels.CompletionHandler)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#lock(long, long, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#lock()}
 **/
java.nio.channels.AsynchronousFileChannel.prototype.lock = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lock',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new java.nio.channels.AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function force
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#force(boolean)}
 **/
java.nio.channels.AsynchronousFileChannel.prototype.force = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'force',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new java.nio.channels.AsynchronousFileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#write(java.nio.ByteBuffer, long, java.lang.Object, java.nio.channels.CompletionHandler)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#write(java.nio.ByteBuffer, long)}
 **/
java.nio.channels.AsynchronousFileChannel.prototype.write = function() {
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
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new java.nio.channels.AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function tryLock
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#tryLock(long, long, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#tryLock()}
 **/
java.nio.channels.AsynchronousFileChannel.prototype.tryLock = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'tryLock',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new java.nio.channels.AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.AsynchronousFileChannel;
