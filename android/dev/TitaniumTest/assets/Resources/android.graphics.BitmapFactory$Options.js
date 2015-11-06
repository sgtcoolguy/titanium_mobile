/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.BitmapFactory.Options
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};
global.android.graphics.BitmapFactory = global.android.graphics.BitmapFactory || {};

/**
 * @class android.graphics.BitmapFactory.Options
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html}
 **/
android.graphics.BitmapFactory.Options = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.BitmapFactory$Options') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.BitmapFactory$Options',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.BitmapFactory.Options.prototype = Object.create(SuperClass.prototype);
android.graphics.BitmapFactory.Options.prototype.constructor = android.graphics.BitmapFactory.Options;

android.graphics.BitmapFactory.Options.className = "android.graphics.BitmapFactory$Options";
android.graphics.BitmapFactory.Options.prototype.className = "android.graphics.BitmapFactory$Options";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#outMimeType
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'outMimeType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'outMimeType'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'outMimeType',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#mCancel
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'mCancel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mCancel'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'mCancel',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inPreferQualityOverSpeed
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inPreferQualityOverSpeed', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inPreferQualityOverSpeed'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inPreferQualityOverSpeed',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inPreferredConfig
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inPreferredConfig', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inPreferredConfig'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inPreferredConfig',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inTempStorage
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inTempStorage', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inTempStorage'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inTempStorage',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inScreenDensity
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inScreenDensity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inScreenDensity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inScreenDensity',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inMutable
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inMutable', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inMutable'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inMutable',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inPremultiplied
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inPremultiplied', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inPremultiplied'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inPremultiplied',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inSampleSize
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inSampleSize', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inSampleSize'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inSampleSize',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inInputShareable
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inInputShareable', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inInputShareable'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inInputShareable',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inPurgeable
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inPurgeable', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inPurgeable'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inPurgeable',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#outHeight
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'outHeight', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'outHeight'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'outHeight',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#outWidth
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'outWidth', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'outWidth'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'outWidth',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inBitmap
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inBitmap', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inBitmap'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inBitmap',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inDensity
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inDensity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inDensity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inDensity',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inJustDecodeBounds
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inJustDecodeBounds', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inJustDecodeBounds'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inJustDecodeBounds',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inScaled
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inScaled', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inScaled'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inScaled',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inTargetDensity
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inTargetDensity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inTargetDensity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inTargetDensity',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inDither
Object.defineProperty(android.graphics.BitmapFactory.Options.prototype, 'inDither', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inDither'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new android.graphics.BitmapFactory.Options(result);
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
			field: 'inDither',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function requestCancelDecode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#requestCancelDecode()}
 **/
android.graphics.BitmapFactory.Options.prototype.requestCancelDecode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestCancelDecode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.BitmapFactory$Options') {
			return new android.graphics.BitmapFactory.Options(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.BitmapFactory.Options;
