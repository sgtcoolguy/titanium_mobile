/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.BroadcastReceiver.PendingResult
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.BroadcastReceiver = global.android.content.BroadcastReceiver || {};

/**
 * @class android.content.BroadcastReceiver.PendingResult
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html}
 **/
android.content.BroadcastReceiver.PendingResult = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.BroadcastReceiver$PendingResult') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.BroadcastReceiver$PendingResult',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.BroadcastReceiver.PendingResult.prototype = Object.create(SuperClass.prototype);
android.content.BroadcastReceiver.PendingResult.prototype.constructor = android.content.BroadcastReceiver.PendingResult;

android.content.BroadcastReceiver.PendingResult.className = "android.content.BroadcastReceiver$PendingResult";
android.content.BroadcastReceiver.PendingResult.prototype.className = "android.content.BroadcastReceiver$PendingResult";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getResultCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#getResultCode()}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.getResultCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResultCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAbortBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#getAbortBroadcast()}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.getAbortBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAbortBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setResultExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#setResultExtras(android.os.Bundle)}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.setResultExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResultExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#setResult(int, java.lang.String, android.os.Bundle)}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.setResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResultExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#getResultExtras(boolean)}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.getResultExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResultExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function abortBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#abortBroadcast()}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.abortBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'abortBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finish
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#finish()}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.finish = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finish',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setResultCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#setResultCode(int)}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.setResultCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResultCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setResultData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#setResultData(java.lang.String)}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.setResultData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResultData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResultData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#getResultData()}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.getResultData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResultData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearAbortBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#clearAbortBroadcast()}
 **/
android.content.BroadcastReceiver.PendingResult.prototype.clearAbortBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearAbortBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new android.content.BroadcastReceiver.PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.BroadcastReceiver.PendingResult;
