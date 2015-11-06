/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.BroadcastReceiver
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.BroadcastReceiver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html}
 **/
android.content.BroadcastReceiver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.BroadcastReceiver') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.BroadcastReceiver',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.BroadcastReceiver.prototype = Object.create(SuperClass.prototype);
android.content.BroadcastReceiver.prototype.constructor = android.content.BroadcastReceiver;

android.content.BroadcastReceiver.className = "android.content.BroadcastReceiver";
android.content.BroadcastReceiver.prototype.className = "android.content.BroadcastReceiver";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function goAsync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#goAsync()}
 **/
android.content.BroadcastReceiver.prototype.goAsync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'goAsync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDebugUnregister
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getDebugUnregister()}
 **/
android.content.BroadcastReceiver.prototype.getDebugUnregister = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDebugUnregister',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResultCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getResultCode()}
 **/
android.content.BroadcastReceiver.prototype.getResultCode = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getAbortBroadcast()}
 **/
android.content.BroadcastReceiver.prototype.getAbortBroadcast = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setResult(int, java.lang.String, android.os.Bundle)}
 **/
android.content.BroadcastReceiver.prototype.setResult = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setResultCode(int)}
 **/
android.content.BroadcastReceiver.prototype.setResultCode = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onReceive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#onReceive(android.content.Context, android.content.Intent)}
 **/
android.content.BroadcastReceiver.prototype.onReceive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onReceive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setResultData(java.lang.String)}
 **/
android.content.BroadcastReceiver.prototype.setResultData = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInitialStickyBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#isInitialStickyBroadcast()}
 **/
android.content.BroadcastReceiver.prototype.isInitialStickyBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInitialStickyBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setResultExtras(android.os.Bundle)}
 **/
android.content.BroadcastReceiver.prototype.setResultExtras = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOrderedBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#isOrderedBroadcast()}
 **/
android.content.BroadcastReceiver.prototype.isOrderedBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOrderedBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getResultExtras(boolean)}
 **/
android.content.BroadcastReceiver.prototype.getResultExtras = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#abortBroadcast()}
 **/
android.content.BroadcastReceiver.prototype.abortBroadcast = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#peekService(android.content.Context, android.content.Intent)}
 **/
android.content.BroadcastReceiver.prototype.peekService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peekService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDebugUnregister
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setDebugUnregister(boolean)}
 **/
android.content.BroadcastReceiver.prototype.setDebugUnregister = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDebugUnregister',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOrderedHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setOrderedHint(boolean)}
 **/
android.content.BroadcastReceiver.prototype.setOrderedHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOrderedHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getResultData()}
 **/
android.content.BroadcastReceiver.prototype.getResultData = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#clearAbortBroadcast()}
 **/
android.content.BroadcastReceiver.prototype.clearAbortBroadcast = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new android.content.BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.BroadcastReceiver;
