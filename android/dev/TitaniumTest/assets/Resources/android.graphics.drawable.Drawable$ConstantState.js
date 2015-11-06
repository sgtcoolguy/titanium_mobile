/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.drawable.Drawable.ConstantState
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};
global.android.graphics.drawable = global.android.graphics.drawable || {};
global.android.graphics.drawable.Drawable = global.android.graphics.drawable.Drawable || {};

/**
 * @class android.graphics.drawable.Drawable.ConstantState
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html}
 **/
android.graphics.drawable.Drawable.ConstantState = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.drawable.Drawable$ConstantState') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.drawable.Drawable$ConstantState',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.drawable.Drawable.ConstantState.prototype = Object.create(SuperClass.prototype);
android.graphics.drawable.Drawable.ConstantState.prototype.constructor = android.graphics.drawable.Drawable.ConstantState;

android.graphics.drawable.Drawable.ConstantState.className = "android.graphics.drawable.Drawable$ConstantState";
android.graphics.drawable.Drawable.ConstantState.prototype.className = "android.graphics.drawable.Drawable$ConstantState";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#getChangingConfigurations()}
 **/
android.graphics.drawable.Drawable.ConstantState.prototype.getChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable$ConstantState') {
			return new android.graphics.drawable.Drawable.ConstantState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#newDrawable()}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#newDrawable(android.content.res.Resources)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#newDrawable(android.content.res.Resources, android.content.res.Resources$Theme)}
 **/
android.graphics.drawable.Drawable.ConstantState.prototype.newDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable$ConstantState') {
			return new android.graphics.drawable.Drawable.ConstantState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canApplyTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#canApplyTheme()}
 **/
android.graphics.drawable.Drawable.ConstantState.prototype.canApplyTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canApplyTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable$ConstantState') {
			return new android.graphics.drawable.Drawable.ConstantState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.drawable.Drawable.ConstantState;
