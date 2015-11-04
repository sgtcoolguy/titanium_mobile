/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewGroup.LayoutParams
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.ViewGroup = global.android.view.ViewGroup || {};

/**
 * @class android.view.ViewGroup.LayoutParams
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html}
 **/
android.view.ViewGroup.LayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.ViewGroup$LayoutParams') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.ViewGroup$LayoutParams',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.ViewGroup.LayoutParams.prototype = Object.create(SuperClass.prototype);
android.view.ViewGroup.LayoutParams.prototype.constructor = android.view.ViewGroup.LayoutParams;

android.view.ViewGroup.LayoutParams.className = "android.view.ViewGroup$LayoutParams";
android.view.ViewGroup.LayoutParams.prototype.className = "android.view.ViewGroup$LayoutParams";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#MATCH_PARENT}
 */
android.view.ViewGroup.LayoutParams.MATCH_PARENT = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#FILL_PARENT}
 */
android.view.ViewGroup.LayoutParams.FILL_PARENT = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#WRAP_CONTENT}
 */
android.view.ViewGroup.LayoutParams.WRAP_CONTENT = -2;

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#layoutAnimationParameters
Object.defineProperty(android.view.ViewGroup.LayoutParams.prototype, 'layoutAnimationParameters', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'layoutAnimationParameters'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
				return new this(result);
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
			field: 'layoutAnimationParameters',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#width
Object.defineProperty(android.view.ViewGroup.LayoutParams.prototype, 'width', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'width'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
				return new this(result);
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
			field: 'width',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#height
Object.defineProperty(android.view.ViewGroup.LayoutParams.prototype, 'height', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'height'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
				return new this(result);
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
			field: 'height',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function resolveLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#resolveLayoutDirection(int)}
 **/
android.view.ViewGroup.LayoutParams.prototype.resolveLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBaseAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#setBaseAttributes(android.content.res.TypedArray, int, int)}
 **/
android.view.ViewGroup.LayoutParams.prototype.setBaseAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBaseAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ViewGroup.LayoutParams;
