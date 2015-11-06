/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyEvent.DispatcherState
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.KeyEvent = global.android.view.KeyEvent || {};

/**
 * @class android.view.KeyEvent.DispatcherState
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html}
 **/
android.view.KeyEvent.DispatcherState = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.KeyEvent$DispatcherState') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.KeyEvent$DispatcherState',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.KeyEvent.DispatcherState.prototype = Object.create(SuperClass.prototype);
android.view.KeyEvent.DispatcherState.prototype.constructor = android.view.KeyEvent.DispatcherState;

android.view.KeyEvent.DispatcherState.className = "android.view.KeyEvent$DispatcherState";
android.view.KeyEvent.DispatcherState.prototype.className = "android.view.KeyEvent$DispatcherState";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isTracking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#isTracking(android.view.KeyEvent)}
 **/
android.view.KeyEvent.DispatcherState.prototype.isTracking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTracking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new android.view.KeyEvent.DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startTracking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#startTracking(android.view.KeyEvent, java.lang.Object)}
 **/
android.view.KeyEvent.DispatcherState.prototype.startTracking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startTracking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new android.view.KeyEvent.DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#reset()}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#reset(java.lang.Object)}
 **/
android.view.KeyEvent.DispatcherState.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new android.view.KeyEvent.DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performedLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#performedLongPress(android.view.KeyEvent)}
 **/
android.view.KeyEvent.DispatcherState.prototype.performedLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performedLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new android.view.KeyEvent.DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function handleUpEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#handleUpEvent(android.view.KeyEvent)}
 **/
android.view.KeyEvent.DispatcherState.prototype.handleUpEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'handleUpEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new android.view.KeyEvent.DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.KeyEvent.DispatcherState;
