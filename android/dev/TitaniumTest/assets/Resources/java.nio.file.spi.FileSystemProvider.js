/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.spi.FileSystemProvider
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.file = global.java.nio.file || {};
global.java.nio.file.spi = global.java.nio.file.spi || {};

/**
 * @class java.nio.file.spi.FileSystemProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html}
 **/
java.nio.file.spi.FileSystemProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.file.spi.FileSystemProvider') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.file.spi.FileSystemProvider',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.file.spi.FileSystemProvider.prototype = Object.create(SuperClass.prototype);
java.nio.file.spi.FileSystemProvider.prototype.constructor = java.nio.file.spi.FileSystemProvider;

java.nio.file.spi.FileSystemProvider.className = "java.nio.file.spi.FileSystemProvider";
java.nio.file.spi.FileSystemProvider.prototype.className = "java.nio.file.spi.FileSystemProvider";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function installedProviders
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#installedProviders()}
 **/
java.nio.file.spi.FileSystemProvider.installedProviders = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'installedProviders',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#access$000()}
 **/
java.nio.file.spi.FileSystemProvider.access$000 = function() {
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
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
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
 * @function newByteChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newByteChannel(java.nio.file.Path, java.util.Set, java.nio.file.attribute.FileAttribute[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.newByteChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newByteChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSameFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#isSameFile(java.nio.file.Path, java.nio.file.Path)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.isSameFile = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSameFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileStore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getFileStore(java.nio.file.Path)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.getFileStore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileStore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newAsynchronousFileChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newAsynchronousFileChannel(java.nio.file.Path, java.util.Set, java.util.concurrent.ExecutorService, java.nio.file.attribute.FileAttribute[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.newAsynchronousFileChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newAsynchronousFileChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileAttributeView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getFileAttributeView(java.nio.file.Path, java.lang.Class, java.nio.file.LinkOption[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.getFileAttributeView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileAttributeView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createSymbolicLink
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#createSymbolicLink(java.nio.file.Path, java.nio.file.Path, java.nio.file.attribute.FileAttribute[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.createSymbolicLink = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createSymbolicLink',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function delete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#delete(java.nio.file.Path)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createLink
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#createLink(java.nio.file.Path, java.nio.file.Path)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.createLink = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createLink',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#setAttribute(java.nio.file.Path, java.lang.String, java.lang.Object, java.nio.file.LinkOption[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.setAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newInputStream(java.nio.file.Path, java.nio.file.OpenOption[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.newInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newFileChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newFileChannel(java.nio.file.Path, java.util.Set, java.nio.file.attribute.FileAttribute[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.newFileChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newFileChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newOutputStream(java.nio.file.Path, java.nio.file.OpenOption[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.newOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#readAttributes(java.nio.file.Path, java.lang.Class, java.nio.file.LinkOption[])}
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#readAttributes(java.nio.file.Path, java.lang.String, java.nio.file.LinkOption[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.readAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getPath(java.net.URI)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.getPath = function() {
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
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createDirectory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#createDirectory(java.nio.file.Path, java.nio.file.attribute.FileAttribute[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.createDirectory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createDirectory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#copy(java.nio.file.Path, java.nio.file.Path, java.nio.file.CopyOption[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.copy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function move
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#move(java.nio.file.Path, java.nio.file.Path, java.nio.file.CopyOption[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.move = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'move',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getScheme()}
 **/
java.nio.file.spi.FileSystemProvider.prototype.getScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newFileSystem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newFileSystem(java.net.URI, java.util.Map)}
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newFileSystem(java.nio.file.Path, java.util.Map)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.newFileSystem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newFileSystem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deleteIfExists
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#deleteIfExists(java.nio.file.Path)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.deleteIfExists = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deleteIfExists',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newDirectoryStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newDirectoryStream(java.nio.file.Path, java.nio.file.DirectoryStream$Filter)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.newDirectoryStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newDirectoryStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileSystem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getFileSystem(java.net.URI)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.getFileSystem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileSystem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkAccess
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#checkAccess(java.nio.file.Path, java.nio.file.AccessMode[])}
 **/
java.nio.file.spi.FileSystemProvider.prototype.checkAccess = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkAccess',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readSymbolicLink
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#readSymbolicLink(java.nio.file.Path)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.readSymbolicLink = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readSymbolicLink',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHidden
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#isHidden(java.nio.file.Path)}
 **/
java.nio.file.spi.FileSystemProvider.prototype.isHidden = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHidden',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new java.nio.file.spi.FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.file.spi.FileSystemProvider;
