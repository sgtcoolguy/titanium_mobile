/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.FileSystem
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.file = global.java.nio.file || {};

/**
 * @class java.nio.file.FileSystem
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html}
 **/
java.nio.file.FileSystem = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.file.FileSystem') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.file.FileSystem. Create a subclass using java.nio.file.FileSystem.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.file.FileSystem.prototype = Object.create(SuperClass.prototype);
java.nio.file.FileSystem.prototype.constructor = java.nio.file.FileSystem;

java.nio.file.FileSystem.className = "java.nio.file.FileSystem";
java.nio.file.FileSystem.prototype.className = "java.nio.file.FileSystem";

// class property
Object.defineProperty(java.nio.file.FileSystem, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.file.FileSystem',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.file.FileSystem.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.file.FileSystem',
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
	whatever.prototype = Object.create(java.nio.file.FileSystem.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function supportedFileAttributeViews
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#supportedFileAttributeViews()}
 **/
java.nio.file.FileSystem.prototype.supportedFileAttributeViews = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportedFileAttributeViews',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileStores
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#getFileStores()}
 **/
java.nio.file.FileSystem.prototype.getFileStores = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileStores',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newWatchService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#newWatchService()}
 **/
java.nio.file.FileSystem.prototype.newWatchService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newWatchService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#isOpen()}
 **/
java.nio.file.FileSystem.prototype.isOpen = function() {
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
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#isReadOnly()}
 **/
java.nio.file.FileSystem.prototype.isReadOnly = function() {
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
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#provider()}
 **/
java.nio.file.FileSystem.prototype.provider = function() {
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
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRootDirectories
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#getRootDirectories()}
 **/
java.nio.file.FileSystem.prototype.getRootDirectories = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRootDirectories',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#getPath(java.lang.String, java.lang.String[])}
 **/
java.nio.file.FileSystem.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSeparator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#getSeparator()}
 **/
java.nio.file.FileSystem.prototype.getSeparator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSeparator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPathMatcher
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#getPathMatcher(java.lang.String)}
 **/
java.nio.file.FileSystem.prototype.getPathMatcher = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPathMatcher',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#close()}
 **/
java.nio.file.FileSystem.prototype.close = function() {
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
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUserPrincipalLookupService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileSystem.html#getUserPrincipalLookupService()}
 **/
java.nio.file.FileSystem.prototype.getUserPrincipalLookupService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUserPrincipalLookupService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileSystem') {
			return new java.nio.file.FileSystem(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.file.FileSystem;
