/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.FileStore
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.file = global.java.nio.file || {};

/**
 * @class java.nio.file.FileStore
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html}
 **/
java.nio.file.FileStore = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.file.FileStore') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.file.FileStore',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.file.FileStore.prototype = Object.create(SuperClass.prototype);
java.nio.file.FileStore.prototype.constructor = java.nio.file.FileStore;

java.nio.file.FileStore.className = "java.nio.file.FileStore";
java.nio.file.FileStore.prototype.className = "java.nio.file.FileStore";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getTotalSpace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getTotalSpace()}
 **/
java.nio.file.FileStore.prototype.getTotalSpace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTotalSpace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReadOnly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#isReadOnly()}
 **/
java.nio.file.FileStore.prototype.isReadOnly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReadOnly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUsableSpace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getUsableSpace()}
 **/
java.nio.file.FileStore.prototype.getUsableSpace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUsableSpace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getAttribute(java.lang.String)}
 **/
java.nio.file.FileStore.prototype.getAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function supportsFileAttributeView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#supportsFileAttributeView(java.lang.Class)}
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#supportsFileAttributeView(java.lang.String)}
 **/
java.nio.file.FileStore.prototype.supportsFileAttributeView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportsFileAttributeView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function name
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#name()}
 **/
java.nio.file.FileStore.prototype.name = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'name',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function type
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#type()}
 **/
java.nio.file.FileStore.prototype.type = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'type',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUnallocatedSpace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getUnallocatedSpace()}
 **/
java.nio.file.FileStore.prototype.getUnallocatedSpace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUnallocatedSpace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileStoreAttributeView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getFileStoreAttributeView(java.lang.Class)}
 **/
java.nio.file.FileStore.prototype.getFileStoreAttributeView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileStoreAttributeView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new java.nio.file.FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.file.FileStore;
