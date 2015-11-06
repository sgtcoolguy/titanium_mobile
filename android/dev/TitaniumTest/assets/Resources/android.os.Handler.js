/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.Handler
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.Handler
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/Handler.html}
 **/
android.os.Handler = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.os.Handler') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.os.Handler',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.Handler.prototype = Object.create(SuperClass.prototype);
android.os.Handler.prototype.constructor = android.os.Handler;

android.os.Handler.className = "android.os.Handler";
android.os.Handler.prototype.className = "android.os.Handler";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function sendEmptyMessageAtTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendEmptyMessageAtTime(int, long)}
 **/
android.os.Handler.prototype.sendEmptyMessageAtTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendEmptyMessageAtTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function handleMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#handleMessage(android.os.Message)}
 **/
android.os.Handler.prototype.handleMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'handleMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#dispatchMessage(android.os.Message)}
 **/
android.os.Handler.prototype.dispatchMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendEmptyMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendEmptyMessage(int)}
 **/
android.os.Handler.prototype.sendEmptyMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendEmptyMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendMessage(android.os.Message)}
 **/
android.os.Handler.prototype.sendMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendEmptyMessageDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendEmptyMessageDelayed(int, long)}
 **/
android.os.Handler.prototype.sendEmptyMessageDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendEmptyMessageDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeCallbacks(java.lang.Runnable)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeCallbacks(java.lang.Runnable, java.lang.Object)}
 **/
android.os.Handler.prototype.removeCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeCallbacksAndMessages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeCallbacksAndMessages(java.lang.Object)}
 **/
android.os.Handler.prototype.removeCallbacksAndMessages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeCallbacksAndMessages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#postDelayed(java.lang.Runnable, long)}
 **/
android.os.Handler.prototype.postDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendMessageAtTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendMessageAtTime(android.os.Message, long)}
 **/
android.os.Handler.prototype.sendMessageAtTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendMessageAtTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasMessages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#hasMessages(int)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#hasMessages(int, java.lang.Object)}
 **/
android.os.Handler.prototype.hasMessages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasMessages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postAtFrontOfQueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#postAtFrontOfQueue(java.lang.Runnable)}
 **/
android.os.Handler.prototype.postAtFrontOfQueue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postAtFrontOfQueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendMessageAtFrontOfQueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendMessageAtFrontOfQueue(android.os.Message)}
 **/
android.os.Handler.prototype.sendMessageAtFrontOfQueue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendMessageAtFrontOfQueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMessageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#getMessageName(android.os.Message)}
 **/
android.os.Handler.prototype.getMessageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMessageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function post
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#post(java.lang.Runnable)}
 **/
android.os.Handler.prototype.post = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'post',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLooper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#getLooper()}
 **/
android.os.Handler.prototype.getLooper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLooper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendMessageDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendMessageDelayed(android.os.Message, long)}
 **/
android.os.Handler.prototype.sendMessageDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendMessageDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#toString()}
 **/
android.os.Handler.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeMessages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeMessages(int)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeMessages(int, java.lang.Object)}
 **/
android.os.Handler.prototype.removeMessages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeMessages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#dump(android.util.Printer, java.lang.String)}
 **/
android.os.Handler.prototype.dump = function() {
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
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postAtTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#postAtTime(java.lang.Runnable, long)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#postAtTime(java.lang.Runnable, java.lang.Object, long)}
 **/
android.os.Handler.prototype.postAtTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postAtTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage()}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage(int)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage(int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage(int, int, int)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage(int, int, int, java.lang.Object)}
 **/
android.os.Handler.prototype.obtainMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'obtainMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new android.os.Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.Handler;
