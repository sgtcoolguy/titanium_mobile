/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.text.TextPaint
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.text = global.android.text || {};

/**
 * @class android.text.TextPaint
 * @extends android.graphics.Paint 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/text/TextPaint.html}
 **/
android.text.TextPaint = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.text.TextPaint') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.text.TextPaint',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.graphics.Paint');
android.text.TextPaint.prototype = Object.create(SuperClass.prototype);
android.text.TextPaint.prototype.constructor = android.text.TextPaint;

android.text.TextPaint.className = "android.text.TextPaint";
android.text.TextPaint.prototype.className = "android.text.TextPaint";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/text/TextPaint.html#bgColor
Object.defineProperty(android.text.TextPaint.prototype, 'bgColor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'bgColor'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextPaint') {
				return new android.text.TextPaint(result);
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
			field: 'bgColor',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/text/TextPaint.html#density
Object.defineProperty(android.text.TextPaint.prototype, 'density', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'density'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextPaint') {
				return new android.text.TextPaint(result);
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
			field: 'density',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/text/TextPaint.html#drawableState
Object.defineProperty(android.text.TextPaint.prototype, 'drawableState', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'drawableState'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextPaint') {
				return new android.text.TextPaint(result);
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
			field: 'drawableState',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/text/TextPaint.html#linkColor
Object.defineProperty(android.text.TextPaint.prototype, 'linkColor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'linkColor'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextPaint') {
				return new android.text.TextPaint(result);
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
			field: 'linkColor',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/text/TextPaint.html#baselineShift
Object.defineProperty(android.text.TextPaint.prototype, 'baselineShift', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'baselineShift'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextPaint') {
				return new android.text.TextPaint(result);
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
			field: 'baselineShift',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function set
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/TextPaint.html#set(android.text.TextPaint)}
 **/
android.text.TextPaint.prototype.set = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'set',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.TextPaint') {
			return new android.text.TextPaint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.text.TextPaint;
