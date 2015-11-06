/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.TransitionManager
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};

/**
 * @class android.transition.TransitionManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html}
 **/
android.transition.TransitionManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.transition.TransitionManager') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.transition.TransitionManager',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.TransitionManager.prototype = Object.create(SuperClass.prototype);
android.transition.TransitionManager.prototype.constructor = android.transition.TransitionManager;

android.transition.TransitionManager.className = "android.transition.TransitionManager";
android.transition.TransitionManager.prototype.className = "android.transition.TransitionManager";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function go
 * @static
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#go(android.transition.Scene)}
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#go(android.transition.Scene, android.transition.Transition)}
 **/
android.transition.TransitionManager.go = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'go',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new android.transition.TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginDelayedTransition
 * @static
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#beginDelayedTransition(android.view.ViewGroup)}
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#beginDelayedTransition(android.view.ViewGroup, android.transition.Transition)}
 **/
android.transition.TransitionManager.beginDelayedTransition = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'beginDelayedTransition',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new android.transition.TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function endTransitions
 * @static
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#endTransitions(android.view.ViewGroup)}
 **/
android.transition.TransitionManager.endTransitions = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'endTransitions',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new android.transition.TransitionManager(result);
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
 * @function transitionTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#transitionTo(android.transition.Scene)}
 **/
android.transition.TransitionManager.prototype.transitionTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transitionTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new android.transition.TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#setTransition(android.transition.Scene, android.transition.Transition)}
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#setTransition(android.transition.Scene, android.transition.Scene, android.transition.Transition)}
 **/
android.transition.TransitionManager.prototype.setTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new android.transition.TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.TransitionManager;
