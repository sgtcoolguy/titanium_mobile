/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.FileChannel
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};

/**
 * @class java.nio.channels.FileChannel
 * @extends java.nio.channels.spi.AbstractInterruptibleChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html}
 **/
java.nio.channels.FileChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.channels.FileChannel') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.FileChannel. Create a subclass using java.nio.channels.FileChannel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractInterruptibleChannel');
java.nio.channels.FileChannel.prototype = Object.create(SuperClass.prototype);
java.nio.channels.FileChannel.prototype.constructor = java.nio.channels.FileChannel;

java.nio.channels.FileChannel.className = "java.nio.channels.FileChannel";
java.nio.channels.FileChannel.prototype.className = "java.nio.channels.FileChannel";

// class property
Object.defineProperty(java.nio.channels.FileChannel, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.channels.FileChannel',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.channels.FileChannel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.channels.FileChannel',
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
	whatever.prototype = Object.create(java.nio.channels.FileChannel.prototype);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#open(java.nio.file.Path, java.util.Set, java.nio.file.attribute.FileAttribute[])}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#open(java.nio.file.Path, java.nio.file.OpenOption[])}
 **/
java.nio.channels.FileChannel.open = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#read(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#read(java.nio.ByteBuffer[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#read(java.nio.ByteBuffer[])}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#read(java.nio.ByteBuffer, long)}
 **/
java.nio.channels.FileChannel.prototype.read = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function transferFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#transferFrom(java.nio.channels.ReadableByteChannel, long, long)}
 **/
java.nio.channels.FileChannel.prototype.transferFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transferFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function transferTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#transferTo(long, long, java.nio.channels.WritableByteChannel)}
 **/
java.nio.channels.FileChannel.prototype.transferTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transferTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#tryLock(long, long, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#tryLock()}
 **/
java.nio.channels.FileChannel.prototype.tryLock = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#size()}
 **/
java.nio.channels.FileChannel.prototype.size = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#truncate(long)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#truncate(long)}
 **/
java.nio.channels.FileChannel.prototype.truncate = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#lock(long, long, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#lock()}
 **/
java.nio.channels.FileChannel.prototype.lock = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#force(boolean)}
 **/
java.nio.channels.FileChannel.prototype.force = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function position
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#position()}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#position(long)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#position(long)}
 **/
java.nio.channels.FileChannel.prototype.position = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'position',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#write(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#write(java.nio.ByteBuffer[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#write(java.nio.ByteBuffer[])}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#write(java.nio.ByteBuffer, long)}
 **/
java.nio.channels.FileChannel.prototype.write = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function map
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#map(java.nio.channels.FileChannel$MapMode, long, long)}
 **/
java.nio.channels.FileChannel.prototype.map = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'map',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new java.nio.channels.FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.FileChannel;
