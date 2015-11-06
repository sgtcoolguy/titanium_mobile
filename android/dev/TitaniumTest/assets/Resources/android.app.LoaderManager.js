/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.LoaderManager
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.LoaderManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html}
 **/
android.app.LoaderManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.LoaderManager') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.LoaderManager',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.LoaderManager.prototype = Object.create(SuperClass.prototype);
android.app.LoaderManager.prototype.constructor = android.app.LoaderManager;

android.app.LoaderManager.className = "android.app.LoaderManager";
android.app.LoaderManager.prototype.className = "android.app.LoaderManager";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function enableDebugLogging
 * @static
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#enableDebugLogging(boolean)}
 **/
android.app.LoaderManager.enableDebugLogging = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'enableDebugLogging',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
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
 * @function restartLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#restartLoader(int, android.os.Bundle, android.app.LoaderManager$LoaderCallbacks)}
 **/
android.app.LoaderManager.prototype.restartLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restartLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#getLoader(int)}
 **/
android.app.LoaderManager.prototype.getLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
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
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#dump(java.lang.String, java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
android.app.LoaderManager.prototype.dump = function() {
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
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#initLoader(int, android.os.Bundle, android.app.LoaderManager$LoaderCallbacks)}
 **/
android.app.LoaderManager.prototype.initLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function destroyLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#destroyLoader(int)}
 **/
android.app.LoaderManager.prototype.destroyLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'destroyLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.LoaderManager;
