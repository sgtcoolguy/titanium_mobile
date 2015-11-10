/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.animation.StateListAnimator
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.animation = global.android.animation || {};

/**
 * @class android.animation.StateListAnimator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html}
 **/
android.animation.StateListAnimator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.animation.StateListAnimator') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.animation.StateListAnimator',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.animation.StateListAnimator.prototype = Object.create(SuperClass.prototype);
android.animation.StateListAnimator.prototype.constructor = android.animation.StateListAnimator;

android.animation.StateListAnimator.className = "android.animation.StateListAnimator";
android.animation.StateListAnimator.prototype.className = "android.animation.StateListAnimator";

// class property
Object.defineProperty(android.animation.StateListAnimator, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.animation.StateListAnimator',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.animation.StateListAnimator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.animation.StateListAnimator',
		overrides: overrides
	});

	// Generate a JS wrapper for our dynamic subclass
	var whatever = function() {
		var result = subclassProxy.newInstance(arguments);
		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};

		// TODO Set up super?!
	};
	// it extends the JS wrapper for the parent type
	whatever.prototype = Object.create(android.animation.StateListAnimator.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html#clone()}
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html#clone()}
 **/
android.animation.StateListAnimator.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.StateListAnimator') {
			return new android.animation.StateListAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function jumpToCurrentState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html#jumpToCurrentState()}
 **/
android.animation.StateListAnimator.prototype.jumpToCurrentState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'jumpToCurrentState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.StateListAnimator') {
			return new android.animation.StateListAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html#addState(int[], android.animation.Animator)}
 **/
android.animation.StateListAnimator.prototype.addState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.StateListAnimator') {
			return new android.animation.StateListAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.animation.StateListAnimator;
