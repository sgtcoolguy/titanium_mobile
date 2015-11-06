/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.LayoutAnimationController.AnimationParameters
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.animation = global.android.view.animation || {};
global.android.view.animation.LayoutAnimationController = global.android.view.animation.LayoutAnimationController || {};

/**
 * @class android.view.animation.LayoutAnimationController.AnimationParameters
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.AnimationParameters.html}
 **/
android.view.animation.LayoutAnimationController.AnimationParameters = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.animation.LayoutAnimationController$AnimationParameters') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.animation.LayoutAnimationController$AnimationParameters',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.animation.LayoutAnimationController.AnimationParameters.prototype = Object.create(SuperClass.prototype);
android.view.animation.LayoutAnimationController.AnimationParameters.prototype.constructor = android.view.animation.LayoutAnimationController.AnimationParameters;

android.view.animation.LayoutAnimationController.AnimationParameters.className = "android.view.animation.LayoutAnimationController$AnimationParameters";
android.view.animation.LayoutAnimationController.AnimationParameters.prototype.className = "android.view.animation.LayoutAnimationController$AnimationParameters";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/animation/LayoutAnimationController.AnimationParameters.html#count
Object.defineProperty(android.view.animation.LayoutAnimationController.AnimationParameters.prototype, 'count', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'count'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.LayoutAnimationController$AnimationParameters') {
				return new android.view.animation.LayoutAnimationController.AnimationParameters(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'count',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/LayoutAnimationController.AnimationParameters.html#index
Object.defineProperty(android.view.animation.LayoutAnimationController.AnimationParameters.prototype, 'index', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'index'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.LayoutAnimationController$AnimationParameters') {
				return new android.view.animation.LayoutAnimationController.AnimationParameters(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'index',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = android.view.animation.LayoutAnimationController.AnimationParameters;
