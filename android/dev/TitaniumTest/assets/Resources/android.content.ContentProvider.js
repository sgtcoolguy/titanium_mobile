/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ContentProvider
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.ContentProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html}
 **/
android.content.ContentProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.ContentProvider') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.content.ContentProvider. Create a subclass using android.content.ContentProvider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.ContentProvider.prototype = Object.create(SuperClass.prototype);
android.content.ContentProvider.prototype.constructor = android.content.ContentProvider;

android.content.ContentProvider.className = "android.content.ContentProvider";
android.content.ContentProvider.prototype.className = "android.content.ContentProvider";

// class property
Object.defineProperty(android.content.ContentProvider, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.ContentProvider',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.ContentProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.ContentProvider',
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
	whatever.prototype = Object.create(android.content.ContentProvider.prototype);
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
 * @function openAssetFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#openAssetFile(android.net.Uri, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#openAssetFile(android.net.Uri, java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentProvider.prototype.openAssetFile = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#openFile(android.net.Uri, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#openFile(android.net.Uri, java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentProvider.prototype.openFile = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFileHelper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#openFileHelper(android.net.Uri, java.lang.String)}
 **/
android.content.ContentProvider.prototype.openFileHelper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openFileHelper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#insert(android.net.Uri, android.content.ContentValues)}
 **/
android.content.ContentProvider.prototype.insert = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#update(android.net.Uri, android.content.ContentValues, java.lang.String, java.lang.String[])}
 **/
android.content.ContentProvider.prototype.update = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWritePermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#getWritePermission()}
 **/
android.content.ContentProvider.prototype.getWritePermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWritePermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTemporary
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#isTemporary()}
 **/
android.content.ContentProvider.prototype.isTemporary = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTemporary',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#delete(android.net.Uri, java.lang.String, java.lang.String[])}
 **/
android.content.ContentProvider.prototype.delete = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLowMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#onLowMemory()}
 **/
android.content.ContentProvider.prototype.onLowMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLowMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReadPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#getReadPermission()}
 **/
android.content.ContentProvider.prototype.getReadPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReadPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#uncanonicalize(android.net.Uri)}
 **/
android.content.ContentProvider.prototype.uncanonicalize = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#bulkInsert(android.net.Uri, android.content.ContentValues[])}
 **/
android.content.ContentProvider.prototype.bulkInsert = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPathPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#getPathPermissions()}
 **/
android.content.ContentProvider.prototype.getPathPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPathPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPathPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#setPathPermissions(android.content.pm.PathPermission[])}
 **/
android.content.ContentProvider.prototype.setPathPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPathPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#dump(java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
android.content.ContentProvider.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#getStreamTypes(android.net.Uri, java.lang.String)}
 **/
android.content.ContentProvider.prototype.getStreamTypes = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#canonicalize(android.net.Uri)}
 **/
android.content.ContentProvider.prototype.canonicalize = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#applyBatch(java.util.ArrayList)}
 **/
android.content.ContentProvider.prototype.applyBatch = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#onCreate()}
 **/
android.content.ContentProvider.prototype.onCreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openTypedAssetFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#openTypedAssetFile(android.net.Uri, java.lang.String, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#openTypedAssetFile(android.net.Uri, java.lang.String, android.os.Bundle, android.os.CancellationSignal)}
 **/
android.content.ContentProvider.prototype.openTypedAssetFile = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openTypedAssetFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWritePermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#setWritePermission(java.lang.String)}
 **/
android.content.ContentProvider.prototype.setWritePermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWritePermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReadPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#setReadPermission(java.lang.String)}
 **/
android.content.ContentProvider.prototype.setReadPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReadPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#query(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#query(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentProvider.prototype.query = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTrimMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#onTrimMemory(int)}
 **/
android.content.ContentProvider.prototype.onTrimMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTrimMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#call(java.lang.String, java.lang.String, android.os.Bundle)}
 **/
android.content.ContentProvider.prototype.call = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openPipeHelper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#openPipeHelper(android.net.Uri, java.lang.String, android.os.Bundle, java.lang.Object, android.content.ContentProvider$PipeDataWriter)}
 **/
android.content.ContentProvider.prototype.openPipeHelper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openPipeHelper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#attachInfo(android.content.Context, android.content.pm.ProviderInfo)}
 **/
android.content.ContentProvider.prototype.attachInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCallingPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#getCallingPackage()}
 **/
android.content.ContentProvider.prototype.getCallingPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCallingPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#getType(android.net.Uri)}
 **/
android.content.ContentProvider.prototype.getType = function() {
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
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
android.content.ContentProvider.prototype.onConfigurationChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onConfigurationChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#getContext()}
 **/
android.content.ContentProvider.prototype.getContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shutdown
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentProvider.html#shutdown()}
 **/
android.content.ContentProvider.prototype.shutdown = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shutdown',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentProvider') {
			return new android.content.ContentProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.ContentProvider;
