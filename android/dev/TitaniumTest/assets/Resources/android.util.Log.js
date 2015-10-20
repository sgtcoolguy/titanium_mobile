/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.util.Log
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.util = global.android.util || {};

/**
 * @class android.util.Log
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/util/Log.html}
 **/
android.util.Log = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.util.Log') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.util.Log',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.util.Log.prototype = Object.create(SuperClass.prototype);
android.util.Log.prototype.constructor = android.util.Log;

android.util.Log.className = "android.util.Log";
android.util.Log.prototype.className = "android.util.Log";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/Log.html#ASSERT}
 */
android.util.Log.ASSERT = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/Log.html#ERROR}
 */
android.util.Log.ERROR = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/Log.html#VERBOSE}
 */
android.util.Log.VERBOSE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/Log.html#INFO}
 */
android.util.Log.INFO = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/Log.html#DEBUG}
 */
android.util.Log.DEBUG = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/Log.html#WARN}
 */
android.util.Log.WARN = 5;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function isLoggable
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#isLoggable(java.lang.String, int)}
 **/
android.util.Log.isLoggable = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'isLoggable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function println
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#println(int, java.lang.String, java.lang.String)}
 **/
android.util.Log.println = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'println',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function d
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#d(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/util/Log.html#d(java.lang.String, java.lang.String, java.lang.Throwable)}
 **/
android.util.Log.d = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'd',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function e
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#e(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/util/Log.html#e(java.lang.String, java.lang.String, java.lang.Throwable)}
 **/
android.util.Log.e = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'e',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStackTraceString
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#getStackTraceString(java.lang.Throwable)}
 **/
android.util.Log.getStackTraceString = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getStackTraceString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function v
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#v(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/util/Log.html#v(java.lang.String, java.lang.String, java.lang.Throwable)}
 **/
android.util.Log.v = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'v',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function w
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#w(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/util/Log.html#w(java.lang.String, java.lang.String, java.lang.Throwable)}
 * @see {@link http://developer.android.com/reference/android/util/Log.html#w(java.lang.String, java.lang.Throwable)}
 **/
android.util.Log.w = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'w',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function wtf
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#wtf(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/util/Log.html#wtf(java.lang.String, java.lang.Throwable)}
 * @see {@link http://developer.android.com/reference/android/util/Log.html#wtf(java.lang.String, java.lang.String, java.lang.Throwable)}
 **/
android.util.Log.wtf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'wtf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function i
 * @static
 * @see {@link http://developer.android.com/reference/android/util/Log.html#i(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/util/Log.html#i(java.lang.String, java.lang.String, java.lang.Throwable)}
 **/
android.util.Log.i = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'i',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.Log') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = android.util.Log;
