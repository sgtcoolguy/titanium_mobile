/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.FileLock
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};

/**
 * @class java.nio.channels.FileLock
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html}
 **/
java.nio.channels.FileLock = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.channels.FileLock') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.channels.FileLock',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.channels.FileLock.prototype = Object.create(SuperClass.prototype);
java.nio.channels.FileLock.prototype.constructor = java.nio.channels.FileLock;

java.nio.channels.FileLock.className = "java.nio.channels.FileLock";
java.nio.channels.FileLock.prototype.className = "java.nio.channels.FileLock";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#size()}
 **/
java.nio.channels.FileLock.prototype.size = function() {
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
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function release
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#release()}
 **/
java.nio.channels.FileLock.prototype.release = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'release',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#isValid()}
 **/
java.nio.channels.FileLock.prototype.isValid = function() {
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
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#channel()}
 **/
java.nio.channels.FileLock.prototype.channel = function() {
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
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function overlaps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#overlaps(long, long)}
 **/
java.nio.channels.FileLock.prototype.overlaps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'overlaps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#toString()}
 **/
java.nio.channels.FileLock.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#position()}
 **/
java.nio.channels.FileLock.prototype.position = function() {
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
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#close()}
 **/
java.nio.channels.FileLock.prototype.close = function() {
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
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function acquiredBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#acquiredBy()}
 **/
java.nio.channels.FileLock.prototype.acquiredBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'acquiredBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isShared
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileLock.html#isShared()}
 **/
java.nio.channels.FileLock.prototype.isShared = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isShared',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileLock') {
			return new java.nio.channels.FileLock(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.FileLock;
