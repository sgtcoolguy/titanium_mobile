/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ContentProviderClient
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.ContentProviderClient
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html}
 **/
android.content.ContentProviderClient = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.ContentProviderClient') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.ContentProviderClient',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.ContentProviderClient.prototype = Object.create(SuperClass.prototype);
android.content.ContentProviderClient.prototype.constructor = android.content.ContentProviderClient;

android.content.ContentProviderClient.className = "android.content.ContentProviderClient";
android.content.ContentProviderClient.prototype.className = "android.content.ContentProviderClient";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function openAssetFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#openAssetFile(android.net.Uri, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#openAssetFile(android.net.Uri, java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentProviderClient.prototype.openAssetFile = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openAssetFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#openFile(android.net.Uri, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#openFile(android.net.Uri, java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentProviderClient.prototype.openFile = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalContentProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#getLocalContentProvider()}
 **/
android.content.ContentProviderClient.prototype.getLocalContentProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalContentProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#release()}
 **/
android.content.ContentProviderClient.prototype.release = function() {
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
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function query
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#query(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#query(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentProviderClient.prototype.query = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'query',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#insert(android.net.Uri, android.content.ContentValues)}
 **/
android.content.ContentProviderClient.prototype.insert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function update
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#update(android.net.Uri, android.content.ContentValues, java.lang.String, java.lang.String[])}
 **/
android.content.ContentProviderClient.prototype.update = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'update',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openTypedAssetFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#openTypedAssetFileDescriptor(android.net.Uri, java.lang.String, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#openTypedAssetFileDescriptor(android.net.Uri, java.lang.String, android.os.Bundle, android.os.CancellationSignal)}
 **/
android.content.ContentProviderClient.prototype.openTypedAssetFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openTypedAssetFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#delete(android.net.Uri, java.lang.String, java.lang.String[])}
 **/
android.content.ContentProviderClient.prototype.delete = function() {
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
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function call
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#call(java.lang.String, java.lang.String, android.os.Bundle)}
 **/
android.content.ContentProviderClient.prototype.call = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'call',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function uncanonicalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#uncanonicalize(android.net.Uri)}
 **/
android.content.ContentProviderClient.prototype.uncanonicalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'uncanonicalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#getType(android.net.Uri)}
 **/
android.content.ContentProviderClient.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bulkInsert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#bulkInsert(android.net.Uri, android.content.ContentValues[])}
 **/
android.content.ContentProviderClient.prototype.bulkInsert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bulkInsert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#finalize()}
 **/
android.content.ContentProviderClient.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStreamTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#getStreamTypes(android.net.Uri, java.lang.String)}
 **/
android.content.ContentProviderClient.prototype.getStreamTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStreamTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canonicalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#canonicalize(android.net.Uri)}
 **/
android.content.ContentProviderClient.prototype.canonicalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canonicalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyBatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProviderClient.html#applyBatch(java.util.ArrayList)}
 **/
android.content.ContentProviderClient.prototype.applyBatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyBatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProviderClient') {
			return new android.content.ContentProviderClient(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.ContentProviderClient;
