/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint.FontMetrics
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};
global.android.graphics.Paint = global.android.graphics.Paint || {};

/**
 * @class android.graphics.Paint.FontMetrics
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html}
 **/
android.graphics.Paint.FontMetrics = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Paint$FontMetrics') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Paint$FontMetrics',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Paint.FontMetrics.prototype = Object.create(SuperClass.prototype);
android.graphics.Paint.FontMetrics.prototype.constructor = android.graphics.Paint.FontMetrics;

android.graphics.Paint.FontMetrics.className = "android.graphics.Paint$FontMetrics";
android.graphics.Paint.FontMetrics.prototype.className = "android.graphics.Paint$FontMetrics";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#descent
Object.defineProperty(android.graphics.Paint.FontMetrics.prototype, 'descent', {
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
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new android.graphics.Paint.FontMetrics(result);
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
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#ascent
Object.defineProperty(android.graphics.Paint.FontMetrics.prototype, 'ascent', {
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
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new android.graphics.Paint.FontMetrics(result);
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
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#top
Object.defineProperty(android.graphics.Paint.FontMetrics.prototype, 'top', {
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
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new android.graphics.Paint.FontMetrics(result);
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
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#bottom
Object.defineProperty(android.graphics.Paint.FontMetrics.prototype, 'bottom', {
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
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new android.graphics.Paint.FontMetrics(result);
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
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#leading
Object.defineProperty(android.graphics.Paint.FontMetrics.prototype, 'leading', {
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
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new android.graphics.Paint.FontMetrics(result);
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

// export the class
module.exports = android.graphics.Paint.FontMetrics;
