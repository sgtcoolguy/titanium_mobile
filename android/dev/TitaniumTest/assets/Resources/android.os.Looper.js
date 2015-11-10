/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.Looper
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.Looper
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/Looper.html}
 **/
android.os.Looper = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.os.Looper') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.os.Looper',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.Looper.prototype = Object.create(SuperClass.prototype);
android.os.Looper.prototype.constructor = android.os.Looper;

android.os.Looper.className = "android.os.Looper";
android.os.Looper.prototype.className = "android.os.Looper";

// class property
Object.defineProperty(android.os.Looper, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.os.Looper',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function prepare
 * @static
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#prepare()}
 **/
android.os.Looper.prepare = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'prepare',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function myQueue
 * @static
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#myQueue()}
 **/
android.os.Looper.myQueue = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'myQueue',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function myLooper
 * @static
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#myLooper()}
 **/
android.os.Looper.myLooper = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'myLooper',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loop
 * @static
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#loop()}
 **/
android.os.Looper.loop = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'loop',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function prepareMainLooper
 * @static
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#prepareMainLooper()}
 **/
android.os.Looper.prepareMainLooper = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'prepareMainLooper',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMainLooper
 * @static
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#getMainLooper()}
 **/
android.os.Looper.getMainLooper = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getMainLooper',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
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
 * @function quitSafely
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#quitSafely()}
 **/
android.os.Looper.prototype.quitSafely = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'quitSafely',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMessageLogging
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#setMessageLogging(android.util.Printer)}
 **/
android.os.Looper.prototype.setMessageLogging = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMessageLogging',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#getQueue()}
 **/
android.os.Looper.prototype.getQueue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCurrentThread
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#isCurrentThread()}
 **/
android.os.Looper.prototype.isCurrentThread = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCurrentThread',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getThread
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#getThread()}
 **/
android.os.Looper.prototype.getThread = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getThread',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function quit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#quit()}
 **/
android.os.Looper.prototype.quit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'quit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#toString()}
 **/
android.os.Looper.prototype.toString = function() {
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
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Looper.html#dump(android.util.Printer, java.lang.String)}
 **/
android.os.Looper.prototype.dump = function() {
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
		if (result.apiName === 'android.os.Looper') {
			return new android.os.Looper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.Looper;
