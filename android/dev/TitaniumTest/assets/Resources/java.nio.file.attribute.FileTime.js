/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.attribute.FileTime
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.file = global.java.nio.file || {};
global.java.nio.file.attribute = global.java.nio.file.attribute || {};

/**
 * @class java.nio.file.attribute.FileTime
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html}
 **/
java.nio.file.attribute.FileTime = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.file.attribute.FileTime') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.file.attribute.FileTime',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.file.attribute.FileTime.prototype = Object.create(SuperClass.prototype);
java.nio.file.attribute.FileTime.prototype.constructor = java.nio.file.attribute.FileTime;

java.nio.file.attribute.FileTime.className = "java.nio.file.attribute.FileTime";
java.nio.file.attribute.FileTime.prototype.className = "java.nio.file.attribute.FileTime";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function fromMillis
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#fromMillis(long)}
 **/
java.nio.file.attribute.FileTime.fromMillis = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'fromMillis',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function from
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#from(long, java.util.concurrent.TimeUnit)}
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#from(java.time.Instant)}
 **/
java.nio.file.attribute.FileTime.from = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'from',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
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
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#hashCode()}
 **/
java.nio.file.attribute.FileTime.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#equals(java.lang.Object)}
 **/
java.nio.file.attribute.FileTime.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMillis
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#toMillis()}
 **/
java.nio.file.attribute.FileTime.prototype.toMillis = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMillis',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#toString()}
 **/
java.nio.file.attribute.FileTime.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function to
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#to(java.util.concurrent.TimeUnit)}
 **/
java.nio.file.attribute.FileTime.prototype.to = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'to',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#compareTo(java.nio.file.attribute.FileTime)}
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#compareTo(java.lang.Object)}
 **/
java.nio.file.attribute.FileTime.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toInstant
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#toInstant()}
 **/
java.nio.file.attribute.FileTime.prototype.toInstant = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toInstant',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new java.nio.file.attribute.FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.file.attribute.FileTime;
