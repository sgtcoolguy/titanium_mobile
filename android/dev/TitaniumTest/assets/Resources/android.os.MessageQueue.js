/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.MessageQueue
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.MessageQueue
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html}
 **/
android.os.MessageQueue = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.os.MessageQueue') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.os.MessageQueue',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.MessageQueue.prototype = Object.create(SuperClass.prototype);
android.os.MessageQueue.prototype.constructor = android.os.MessageQueue;

android.os.MessageQueue.className = "android.os.MessageQueue";
android.os.MessageQueue.prototype.className = "android.os.MessageQueue";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function removeIdleHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#removeIdleHandler(android.os.MessageQueue$IdleHandler)}
 **/
android.os.MessageQueue.prototype.removeIdleHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeIdleHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new android.os.MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnFileDescriptorEventListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#addOnFileDescriptorEventListener(java.io.FileDescriptor, int, android.os.MessageQueue$OnFileDescriptorEventListener)}
 **/
android.os.MessageQueue.prototype.addOnFileDescriptorEventListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnFileDescriptorEventListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new android.os.MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addIdleHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#addIdleHandler(android.os.MessageQueue$IdleHandler)}
 **/
android.os.MessageQueue.prototype.addIdleHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addIdleHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new android.os.MessageQueue(result);
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
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#finalize()}
 **/
android.os.MessageQueue.prototype.finalize = function() {
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
		if (result.apiName === 'android.os.MessageQueue') {
			return new android.os.MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isIdle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#isIdle()}
 **/
android.os.MessageQueue.prototype.isIdle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isIdle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new android.os.MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnFileDescriptorEventListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#removeOnFileDescriptorEventListener(java.io.FileDescriptor)}
 **/
android.os.MessageQueue.prototype.removeOnFileDescriptorEventListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnFileDescriptorEventListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new android.os.MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.MessageQueue;
