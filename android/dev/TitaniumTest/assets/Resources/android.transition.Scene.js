/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.Scene
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};

/**
 * @class android.transition.Scene
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html}
 **/
android.transition.Scene = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.transition.Scene') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.transition.Scene',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.Scene.prototype = Object.create(SuperClass.prototype);
android.transition.Scene.prototype.constructor = android.transition.Scene;

android.transition.Scene.className = "android.transition.Scene";
android.transition.Scene.prototype.className = "android.transition.Scene";

// class property
Object.defineProperty(android.transition.Scene, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.transition.Scene',
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
 * @function getSceneForLayout
 * @static
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#getSceneForLayout(android.view.ViewGroup, int, android.content.Context)}
 **/
android.transition.Scene.getSceneForLayout = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSceneForLayout',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new android.transition.Scene(result);
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
 * @function exit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#exit()}
 **/
android.transition.Scene.prototype.exit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'exit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new android.transition.Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExitAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#setExitAction(java.lang.Runnable)}
 **/
android.transition.Scene.prototype.setExitAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExitAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new android.transition.Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnterAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#setEnterAction(java.lang.Runnable)}
 **/
android.transition.Scene.prototype.setEnterAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnterAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new android.transition.Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSceneRoot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#getSceneRoot()}
 **/
android.transition.Scene.prototype.getSceneRoot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSceneRoot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new android.transition.Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#enter()}
 **/
android.transition.Scene.prototype.enter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new android.transition.Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.Scene;
