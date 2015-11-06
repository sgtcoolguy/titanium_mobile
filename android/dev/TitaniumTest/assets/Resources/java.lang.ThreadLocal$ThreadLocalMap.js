/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ThreadLocal.ThreadLocalMap
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ThreadLocal = global.java.lang.ThreadLocal || {};

/**
 * @class java.lang.ThreadLocal.ThreadLocalMap
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.ThreadLocalMap.html}
 **/
java.lang.ThreadLocal.ThreadLocalMap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ThreadLocal$ThreadLocalMap') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ThreadLocal$ThreadLocalMap',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ThreadLocal.ThreadLocalMap.prototype = Object.create(SuperClass.prototype);
java.lang.ThreadLocal.ThreadLocalMap.prototype.constructor = java.lang.ThreadLocal.ThreadLocalMap;

java.lang.ThreadLocal.ThreadLocalMap.className = "java.lang.ThreadLocal$ThreadLocalMap";
java.lang.ThreadLocal.ThreadLocalMap.prototype.className = "java.lang.ThreadLocal$ThreadLocalMap";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$200
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.ThreadLocalMap.html#access$200(java.lang.ThreadLocal$ThreadLocalMap, java.lang.ThreadLocal)}
 **/
java.lang.ThreadLocal.ThreadLocalMap.access$200 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$200',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal$ThreadLocalMap') {
			return new java.lang.ThreadLocal.ThreadLocalMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$100
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.ThreadLocalMap.html#access$100(java.lang.ThreadLocal$ThreadLocalMap, java.lang.ThreadLocal, java.lang.Object)}
 **/
java.lang.ThreadLocal.ThreadLocalMap.access$100 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$100',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal$ThreadLocalMap') {
			return new java.lang.ThreadLocal.ThreadLocalMap(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.ThreadLocalMap.html#access$000(java.lang.ThreadLocal$ThreadLocalMap, java.lang.ThreadLocal)}
 **/
java.lang.ThreadLocal.ThreadLocalMap.access$000 = function() {
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
		if (result.apiName === 'java.lang.ThreadLocal$ThreadLocalMap') {
			return new java.lang.ThreadLocal.ThreadLocalMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = java.lang.ThreadLocal.ThreadLocalMap;
