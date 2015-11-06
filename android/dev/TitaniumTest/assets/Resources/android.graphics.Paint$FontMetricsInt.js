/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint.FontMetricsInt
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};
global.android.graphics.Paint = global.android.graphics.Paint || {};

/**
 * @class android.graphics.Paint.FontMetricsInt
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html}
 **/
android.graphics.Paint.FontMetricsInt = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Paint$FontMetricsInt') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Paint$FontMetricsInt',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Paint.FontMetricsInt.prototype = Object.create(SuperClass.prototype);
android.graphics.Paint.FontMetricsInt.prototype.constructor = android.graphics.Paint.FontMetricsInt;

android.graphics.Paint.FontMetricsInt.className = "android.graphics.Paint$FontMetricsInt";
android.graphics.Paint.FontMetricsInt.prototype.className = "android.graphics.Paint$FontMetricsInt";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#descent
Object.defineProperty(android.graphics.Paint.FontMetricsInt.prototype, 'descent', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'descent'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new android.graphics.Paint.FontMetricsInt(result);
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
			field: 'descent',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#ascent
Object.defineProperty(android.graphics.Paint.FontMetricsInt.prototype, 'ascent', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'ascent'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new android.graphics.Paint.FontMetricsInt(result);
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
			field: 'ascent',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#top
Object.defineProperty(android.graphics.Paint.FontMetricsInt.prototype, 'top', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'top'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new android.graphics.Paint.FontMetricsInt(result);
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
			field: 'top',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#bottom
Object.defineProperty(android.graphics.Paint.FontMetricsInt.prototype, 'bottom', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'bottom'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new android.graphics.Paint.FontMetricsInt(result);
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
			field: 'bottom',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#leading
Object.defineProperty(android.graphics.Paint.FontMetricsInt.prototype, 'leading', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'leading'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new android.graphics.Paint.FontMetricsInt(result);
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
			field: 'leading',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#toString()}
 **/
android.graphics.Paint.FontMetricsInt.prototype.toString = function() {
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
		if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
			return new android.graphics.Paint.FontMetricsInt(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Paint.FontMetricsInt;
