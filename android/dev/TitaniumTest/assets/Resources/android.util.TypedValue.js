/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.util.TypedValue
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.util = global.android.util || {};

/**
 * @class android.util.TypedValue
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html}
 **/
android.util.TypedValue = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.util.TypedValue') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.util.TypedValue',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.util.TypedValue.prototype = Object.create(SuperClass.prototype);
android.util.TypedValue.prototype.constructor = android.util.TypedValue;

android.util.TypedValue.className = "android.util.TypedValue";
android.util.TypedValue.prototype.className = "android.util.TypedValue";

// class property
Object.defineProperty(android.util.TypedValue, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.util.TypedValue',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.util.TypedValue.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.util.TypedValue',
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
	whatever.prototype = Object.create(android.util.TypedValue.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_SP}
 */
android.util.TypedValue.COMPLEX_UNIT_SP = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_MANTISSA_MASK}
 */
android.util.TypedValue.COMPLEX_MANTISSA_MASK = 16777215;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#DATA_NULL_EMPTY}
 */
android.util.TypedValue.DATA_NULL_EMPTY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#DATA_NULL_UNDEFINED}
 */
android.util.TypedValue.DATA_NULL_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_MASK}
 */
android.util.TypedValue.COMPLEX_UNIT_MASK = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_MM}
 */
android.util.TypedValue.COMPLEX_UNIT_MM = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_HEX}
 */
android.util.TypedValue.TYPE_INT_HEX = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_REFERENCE}
 */
android.util.TypedValue.TYPE_REFERENCE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_STRING}
 */
android.util.TypedValue.TYPE_STRING = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_16p7}
 */
android.util.TypedValue.COMPLEX_RADIX_16p7 = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_DIMENSION}
 */
android.util.TypedValue.TYPE_DIMENSION = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_FIRST_INT}
 */
android.util.TypedValue.TYPE_FIRST_INT = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_MANTISSA_SHIFT}
 */
android.util.TypedValue.COMPLEX_MANTISSA_SHIFT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_FRACTION_PARENT}
 */
android.util.TypedValue.COMPLEX_UNIT_FRACTION_PARENT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_IN}
 */
android.util.TypedValue.COMPLEX_UNIT_IN = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_8p15}
 */
android.util.TypedValue.COMPLEX_RADIX_8p15 = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_SHIFT}
 */
android.util.TypedValue.COMPLEX_UNIT_SHIFT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_FRACTION}
 */
android.util.TypedValue.TYPE_FRACTION = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_FRACTION}
 */
android.util.TypedValue.COMPLEX_UNIT_FRACTION = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_FLOAT}
 */
android.util.TypedValue.TYPE_FLOAT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_BOOLEAN}
 */
android.util.TypedValue.TYPE_INT_BOOLEAN = 18;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_NULL}
 */
android.util.TypedValue.TYPE_NULL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_DEC}
 */
android.util.TypedValue.TYPE_INT_DEC = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_DIP}
 */
android.util.TypedValue.COMPLEX_UNIT_DIP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_COLOR_RGB4}
 */
android.util.TypedValue.TYPE_INT_COLOR_RGB4 = 31;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#DENSITY_NONE}
 */
android.util.TypedValue.DENSITY_NONE = 65535;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_ATTRIBUTE}
 */
android.util.TypedValue.TYPE_ATTRIBUTE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_COLOR_RGB8}
 */
android.util.TypedValue.TYPE_INT_COLOR_RGB8 = 29;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_LAST_INT}
 */
android.util.TypedValue.TYPE_LAST_INT = 31;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_FIRST_COLOR_INT}
 */
android.util.TypedValue.TYPE_FIRST_COLOR_INT = 28;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_SHIFT}
 */
android.util.TypedValue.COMPLEX_RADIX_SHIFT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_COLOR_ARGB8}
 */
android.util.TypedValue.TYPE_INT_COLOR_ARGB8 = 28;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_0p23}
 */
android.util.TypedValue.COMPLEX_RADIX_0p23 = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_23p0}
 */
android.util.TypedValue.COMPLEX_RADIX_23p0 = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#DENSITY_DEFAULT}
 */
android.util.TypedValue.DENSITY_DEFAULT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_PT}
 */
android.util.TypedValue.COMPLEX_UNIT_PT = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_COLOR_ARGB4}
 */
android.util.TypedValue.TYPE_INT_COLOR_ARGB4 = 30;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_PX}
 */
android.util.TypedValue.COMPLEX_UNIT_PX = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_MASK}
 */
android.util.TypedValue.COMPLEX_RADIX_MASK = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_LAST_COLOR_INT}
 */
android.util.TypedValue.TYPE_LAST_COLOR_INT = 31;

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/util/TypedValue.html#resourceId
Object.defineProperty(android.util.TypedValue.prototype, 'resourceId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'resourceId'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new android.util.TypedValue(result);
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
			field: 'resourceId',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#data
Object.defineProperty(android.util.TypedValue.prototype, 'data', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'data'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new android.util.TypedValue(result);
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
			field: 'data',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#string
Object.defineProperty(android.util.TypedValue.prototype, 'string', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'string'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new android.util.TypedValue(result);
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
			field: 'string',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#assetCookie
Object.defineProperty(android.util.TypedValue.prototype, 'assetCookie', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'assetCookie'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new android.util.TypedValue(result);
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
			field: 'assetCookie',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#type
Object.defineProperty(android.util.TypedValue.prototype, 'type', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'type'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new android.util.TypedValue(result);
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
			field: 'type',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#density
Object.defineProperty(android.util.TypedValue.prototype, 'density', {
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
			if (result.apiName === 'android.util.TypedValue') {
				return new android.util.TypedValue(result);
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
// http://developer.android.com/reference/android/util/TypedValue.html#changingConfigurations
Object.defineProperty(android.util.TypedValue.prototype, 'changingConfigurations', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'changingConfigurations'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new android.util.TypedValue(result);
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
			field: 'changingConfigurations',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function complexToFloat
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToFloat(int)}
 **/
android.util.TypedValue.complexToFloat = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToFloat',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyDimension
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#applyDimension(int, float, android.util.DisplayMetrics)}
 **/
android.util.TypedValue.applyDimension = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'applyDimension',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function complexToDimensionPixelSize
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToDimensionPixelSize(int, android.util.DisplayMetrics)}
 **/
android.util.TypedValue.complexToDimensionPixelSize = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToDimensionPixelSize',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function complexToFraction
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToFraction(int, float, float)}
 **/
android.util.TypedValue.complexToFraction = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToFraction',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function complexToDimensionPixelOffset
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToDimensionPixelOffset(int, android.util.DisplayMetrics)}
 **/
android.util.TypedValue.complexToDimensionPixelOffset = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToDimensionPixelOffset',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function coerceToString
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#coerceToString(int, int)}
 **/
android.util.TypedValue.coerceToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'coerceToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function complexToDimension
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToDimension(int, android.util.DisplayMetrics)}
 **/
android.util.TypedValue.complexToDimension = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToDimension',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#getFloat()}
 **/
android.util.TypedValue.prototype.getFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDimension
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#getDimension(android.util.DisplayMetrics)}
 **/
android.util.TypedValue.prototype.getDimension = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDimension',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
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
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#setTo(android.util.TypedValue)}
 **/
android.util.TypedValue.prototype.setTo = function() {
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
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getComplexUnit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#getComplexUnit()}
 **/
android.util.TypedValue.prototype.getComplexUnit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getComplexUnit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
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
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#toString()}
 **/
android.util.TypedValue.prototype.toString = function() {
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
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function coerceToString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#coerceToString()}
 **/
android.util.TypedValue.prototype.coerceToString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'coerceToString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#getFraction(float, float)}
 **/
android.util.TypedValue.prototype.getFraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new android.util.TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.util.TypedValue;
