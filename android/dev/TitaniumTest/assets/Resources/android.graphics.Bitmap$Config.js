/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Bitmap.Config
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};
global.android.graphics.Bitmap = global.android.graphics.Bitmap || {};

/**
 * @class android.graphics.Bitmap.Config
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.Config.html}
 **/
android.graphics.Bitmap.Config = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Bitmap$Config') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Bitmap$Config',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
android.graphics.Bitmap.Config.prototype = Object.create(SuperClass.prototype);
android.graphics.Bitmap.Config.prototype.constructor = android.graphics.Bitmap.Config;

android.graphics.Bitmap.Config.className = "android.graphics.Bitmap$Config";
android.graphics.Bitmap.Config.prototype.className = "android.graphics.Bitmap$Config";

// Constants

// Static fields
// http://developer.android.com/reference/android/graphics/Bitmap.Config.html#RGB_565
Object.defineProperty(android.graphics.Bitmap.Config, 'RGB_565', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'RGB_565'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$Config') {
				return new android.graphics.Bitmap.Config(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Bitmap.Config.html#ALPHA_8
Object.defineProperty(android.graphics.Bitmap.Config, 'ALPHA_8', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ALPHA_8'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$Config') {
				return new android.graphics.Bitmap.Config(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Bitmap.Config.html#ARGB_8888
Object.defineProperty(android.graphics.Bitmap.Config, 'ARGB_8888', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ARGB_8888'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$Config') {
				return new android.graphics.Bitmap.Config(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Bitmap.Config.html#ARGB_4444
Object.defineProperty(android.graphics.Bitmap.Config, 'ARGB_4444', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ARGB_4444'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$Config') {
				return new android.graphics.Bitmap.Config(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.Config.html#valueOf(java.lang.String)}
 **/
android.graphics.Bitmap.Config.valueOf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap$Config') {
			return new android.graphics.Bitmap.Config(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.Config.html#values()}
 **/
android.graphics.Bitmap.Config.values = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap$Config') {
			return new android.graphics.Bitmap.Config(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = android.graphics.Bitmap.Config;
