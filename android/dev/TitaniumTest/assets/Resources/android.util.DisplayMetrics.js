/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.util.DisplayMetrics
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.util = global.android.util || {};

/**
 * @class android.util.DisplayMetrics
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html}
 **/
android.util.DisplayMetrics = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.util.DisplayMetrics') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.util.DisplayMetrics',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.util.DisplayMetrics.prototype = Object.create(SuperClass.prototype);
android.util.DisplayMetrics.prototype.constructor = android.util.DisplayMetrics;

android.util.DisplayMetrics.className = "android.util.DisplayMetrics";
android.util.DisplayMetrics.prototype.className = "android.util.DisplayMetrics";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_360}
 */
android.util.DisplayMetrics.DENSITY_360 = 360;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_XXXHIGH}
 */
android.util.DisplayMetrics.DENSITY_XXXHIGH = 640;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_280}
 */
android.util.DisplayMetrics.DENSITY_280 = 280;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_TV}
 */
android.util.DisplayMetrics.DENSITY_TV = 213;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_400}
 */
android.util.DisplayMetrics.DENSITY_400 = 400;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_LOW}
 */
android.util.DisplayMetrics.DENSITY_LOW = 120;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_420}
 */
android.util.DisplayMetrics.DENSITY_420 = 420;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_560}
 */
android.util.DisplayMetrics.DENSITY_560 = 560;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_DEFAULT}
 */
android.util.DisplayMetrics.DENSITY_DEFAULT = 160;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_XHIGH}
 */
android.util.DisplayMetrics.DENSITY_XHIGH = 320;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_HIGH}
 */
android.util.DisplayMetrics.DENSITY_HIGH = 240;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_XXHIGH}
 */
android.util.DisplayMetrics.DENSITY_XXHIGH = 480;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_MEDIUM}
 */
android.util.DisplayMetrics.DENSITY_MEDIUM = 160;

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/util/DisplayMetrics.html#scaledDensity
Object.defineProperty(android.util.DisplayMetrics.prototype, 'scaledDensity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'scaledDensity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new android.util.DisplayMetrics(result);
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
			field: 'scaledDensity',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#density
Object.defineProperty(android.util.DisplayMetrics.prototype, 'density', {
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
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new android.util.DisplayMetrics(result);
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
// http://developer.android.com/reference/android/util/DisplayMetrics.html#heightPixels
Object.defineProperty(android.util.DisplayMetrics.prototype, 'heightPixels', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'heightPixels'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new android.util.DisplayMetrics(result);
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
			field: 'heightPixels',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#widthPixels
Object.defineProperty(android.util.DisplayMetrics.prototype, 'widthPixels', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'widthPixels'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new android.util.DisplayMetrics(result);
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
			field: 'widthPixels',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#densityDpi
Object.defineProperty(android.util.DisplayMetrics.prototype, 'densityDpi', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'densityDpi'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new android.util.DisplayMetrics(result);
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
			field: 'densityDpi',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#ydpi
Object.defineProperty(android.util.DisplayMetrics.prototype, 'ydpi', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'ydpi'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new android.util.DisplayMetrics(result);
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
			field: 'ydpi',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#xdpi
Object.defineProperty(android.util.DisplayMetrics.prototype, 'xdpi', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'xdpi'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new android.util.DisplayMetrics(result);
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
			field: 'xdpi',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setToDefaults
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#setToDefaults()}
 **/
android.util.DisplayMetrics.prototype.setToDefaults = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setToDefaults',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new android.util.DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#hashCode()}
 **/
android.util.DisplayMetrics.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new android.util.DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#equals(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#equals(android.util.DisplayMetrics)}
 **/
android.util.DisplayMetrics.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new android.util.DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#setTo(android.util.DisplayMetrics)}
 **/
android.util.DisplayMetrics.prototype.setTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new android.util.DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#toString()}
 **/
android.util.DisplayMetrics.prototype.toString = function() {
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
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new android.util.DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.util.DisplayMetrics;
