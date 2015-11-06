/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.AssetManager
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.res = global.android.content.res || {};

/**
 * @class android.content.res.AssetManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html}
 **/
android.content.res.AssetManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.res.AssetManager') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.res.AssetManager',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.res.AssetManager.prototype = Object.create(SuperClass.prototype);
android.content.res.AssetManager.prototype.constructor = android.content.res.AssetManager;

android.content.res.AssetManager.className = "android.content.res.AssetManager";
android.content.res.AssetManager.prototype.className = "android.content.res.AssetManager";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#ACCESS_BUFFER}
 */
android.content.res.AssetManager.ACCESS_BUFFER = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#ACCESS_UNKNOWN}
 */
android.content.res.AssetManager.ACCESS_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#ACCESS_STREAMING}
 */
android.content.res.AssetManager.ACCESS_STREAMING = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#ACCESS_RANDOM}
 */
android.content.res.AssetManager.ACCESS_RANDOM = 1;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function openXmlResourceParser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openXmlResourceParser(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openXmlResourceParser(int, java.lang.String)}
 **/
android.content.res.AssetManager.prototype.openXmlResourceParser = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openXmlResourceParser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new android.content.res.AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openNonAssetFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openNonAssetFd(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openNonAssetFd(int, java.lang.String)}
 **/
android.content.res.AssetManager.prototype.openNonAssetFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openNonAssetFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new android.content.res.AssetManager(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#finalize()}
 **/
android.content.res.AssetManager.prototype.finalize = function() {
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
		if (result.apiName === 'android.content.res.AssetManager') {
			return new android.content.res.AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openFd(java.lang.String)}
 **/
android.content.res.AssetManager.prototype.openFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new android.content.res.AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocales
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#getLocales()}
 **/
android.content.res.AssetManager.prototype.getLocales = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocales',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new android.content.res.AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function list
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#list(java.lang.String)}
 **/
android.content.res.AssetManager.prototype.list = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'list',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new android.content.res.AssetManager(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#close()}
 **/
android.content.res.AssetManager.prototype.close = function() {
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
		if (result.apiName === 'android.content.res.AssetManager') {
			return new android.content.res.AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function open
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#open(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#open(java.lang.String, int)}
 **/
android.content.res.AssetManager.prototype.open = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'open',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new android.content.res.AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.res.AssetManager;
