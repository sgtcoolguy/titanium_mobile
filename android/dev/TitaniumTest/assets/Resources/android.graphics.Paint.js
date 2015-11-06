/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Paint
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html}
 **/
android.graphics.Paint = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Paint') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Paint',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Paint.prototype = Object.create(SuperClass.prototype);
android.graphics.Paint.prototype.constructor = android.graphics.Paint;

android.graphics.Paint.className = "android.graphics.Paint";
android.graphics.Paint.prototype.className = "android.graphics.Paint";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#STRIKE_THRU_TEXT_FLAG}
 */
android.graphics.Paint.STRIKE_THRU_TEXT_FLAG = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#EMBEDDED_BITMAP_TEXT_FLAG}
 */
android.graphics.Paint.EMBEDDED_BITMAP_TEXT_FLAG = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#FILTER_BITMAP_FLAG}
 */
android.graphics.Paint.FILTER_BITMAP_FLAG = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#HINTING_ON}
 */
android.graphics.Paint.HINTING_ON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#ANTI_ALIAS_FLAG}
 */
android.graphics.Paint.ANTI_ALIAS_FLAG = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#DITHER_FLAG}
 */
android.graphics.Paint.DITHER_FLAG = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#FAKE_BOLD_TEXT_FLAG}
 */
android.graphics.Paint.FAKE_BOLD_TEXT_FLAG = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#LINEAR_TEXT_FLAG}
 */
android.graphics.Paint.LINEAR_TEXT_FLAG = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#SUBPIXEL_TEXT_FLAG}
 */
android.graphics.Paint.SUBPIXEL_TEXT_FLAG = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#DEV_KERN_TEXT_FLAG}
 */
android.graphics.Paint.DEV_KERN_TEXT_FLAG = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#HINTING_OFF}
 */
android.graphics.Paint.HINTING_OFF = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#UNDERLINE_TEXT_FLAG}
 */
android.graphics.Paint.UNDERLINE_TEXT_FLAG = 8;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setFilterBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setFilterBitmap(boolean)}
 **/
android.graphics.Paint.prototype.setFilterBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFilterBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHinting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getHinting()}
 **/
android.graphics.Paint.prototype.getHinting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHinting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setColorFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setColorFilter(android.graphics.ColorFilter)}
 **/
android.graphics.Paint.prototype.setColorFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setColorFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFakeBoldText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isFakeBoldText()}
 **/
android.graphics.Paint.prototype.isFakeBoldText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFakeBoldText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setElegantTextHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setElegantTextHeight(boolean)}
 **/
android.graphics.Paint.prototype.setElegantTextHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setElegantTextHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPathEffect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setPathEffect(android.graphics.PathEffect)}
 **/
android.graphics.Paint.prototype.setPathEffect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPathEffect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLinearText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setLinearText(boolean)}
 **/
android.graphics.Paint.prototype.setLinearText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLinearText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHinting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setHinting(int)}
 **/
android.graphics.Paint.prototype.setHinting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHinting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getAlpha()}
 **/
android.graphics.Paint.prototype.getAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStrokeMiter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStrokeMiter()}
 **/
android.graphics.Paint.prototype.getStrokeMiter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStrokeMiter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontFeatureSettings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontFeatureSettings()}
 **/
android.graphics.Paint.prototype.getFontFeatureSettings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontFeatureSettings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColorFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getColorFilter()}
 **/
android.graphics.Paint.prototype.getColorFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColorFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextScaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextScaleX(float)}
 **/
android.graphics.Paint.prototype.setTextScaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextScaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function breakText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#breakText(char[], int, int, float, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#breakText(java.lang.CharSequence, int, int, boolean, float, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#breakText(java.lang.String, boolean, float, float[])}
 **/
android.graphics.Paint.prototype.breakText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'breakText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUnderlineText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isUnderlineText()}
 **/
android.graphics.Paint.prototype.isUnderlineText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isUnderlineText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setShader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setShader(android.graphics.Shader)}
 **/
android.graphics.Paint.prototype.setShader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setShader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTypeface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTypeface()}
 **/
android.graphics.Paint.prototype.getTypeface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTypeface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOffsetForAdvance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getOffsetForAdvance(char[], int, int, int, int, boolean, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getOffsetForAdvance(java.lang.CharSequence, int, int, int, int, boolean, float)}
 **/
android.graphics.Paint.prototype.getOffsetForAdvance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOffsetForAdvance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextSkewX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextSkewX(float)}
 **/
android.graphics.Paint.prototype.setTextSkewX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextSkewX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextWidths
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextWidths(char[], int, int, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextWidths(java.lang.CharSequence, int, int, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextWidths(java.lang.String, int, int, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextWidths(java.lang.String, float[])}
 **/
android.graphics.Paint.prototype.getTextWidths = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextWidths',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextAlign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextAlign(android.graphics.Paint$Align)}
 **/
android.graphics.Paint.prototype.setTextAlign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextAlign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setAlpha(int)}
 **/
android.graphics.Paint.prototype.setAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRunAdvance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getRunAdvance(char[], int, int, int, int, boolean, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getRunAdvance(java.lang.CharSequence, int, int, int, int, boolean, int)}
 **/
android.graphics.Paint.prototype.getRunAdvance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRunAdvance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrokeCap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrokeCap(android.graphics.Paint$Cap)}
 **/
android.graphics.Paint.prototype.setStrokeCap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrokeCap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isElegantTextHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isElegantTextHeight()}
 **/
android.graphics.Paint.prototype.isElegantTextHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isElegantTextHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLetterSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getLetterSpacing()}
 **/
android.graphics.Paint.prototype.getLetterSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLetterSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAntiAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isAntiAlias()}
 **/
android.graphics.Paint.prototype.isAntiAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAntiAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrokeMiter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrokeMiter(float)}
 **/
android.graphics.Paint.prototype.setStrokeMiter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrokeMiter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#reset()}
 **/
android.graphics.Paint.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaskFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getMaskFilter()}
 **/
android.graphics.Paint.prototype.getMaskFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaskFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontSpacing()}
 **/
android.graphics.Paint.prototype.getFontSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFlags()}
 **/
android.graphics.Paint.prototype.getFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFilterBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isFilterBitmap()}
 **/
android.graphics.Paint.prototype.isFilterBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFilterBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStrokeWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStrokeWidth()}
 **/
android.graphics.Paint.prototype.getStrokeWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStrokeWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setShadowLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setShadowLayer(float, float, float, int)}
 **/
android.graphics.Paint.prototype.setShadowLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setShadowLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasGlyph
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#hasGlyph(java.lang.String)}
 **/
android.graphics.Paint.prototype.hasGlyph = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasGlyph',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setFlags(int)}
 **/
android.graphics.Paint.prototype.setFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDither
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isDither()}
 **/
android.graphics.Paint.prototype.isDither = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDither',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLinearText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isLinearText()}
 **/
android.graphics.Paint.prototype.isLinearText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLinearText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRasterizer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getRasterizer()}
 **/
android.graphics.Paint.prototype.getRasterizer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRasterizer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextLocale()}
 **/
android.graphics.Paint.prototype.getTextLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFontFeatureSettings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setFontFeatureSettings(java.lang.String)}
 **/
android.graphics.Paint.prototype.setFontFeatureSettings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFontFeatureSettings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getXfermode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getXfermode()}
 **/
android.graphics.Paint.prototype.getXfermode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getXfermode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubpixelText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setSubpixelText(boolean)}
 **/
android.graphics.Paint.prototype.setSubpixelText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubpixelText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrokeJoin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrokeJoin(android.graphics.Paint$Join)}
 **/
android.graphics.Paint.prototype.setStrokeJoin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrokeJoin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextSize()}
 **/
android.graphics.Paint.prototype.getTextSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextSkewX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextSkewX()}
 **/
android.graphics.Paint.prototype.getTextSkewX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextSkewX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDither
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setDither(boolean)}
 **/
android.graphics.Paint.prototype.setDither = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDither',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrokeWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrokeWidth(float)}
 **/
android.graphics.Paint.prototype.setStrokeWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrokeWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextAlign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextAlign()}
 **/
android.graphics.Paint.prototype.getTextAlign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextAlign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function measureText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#measureText(char[], int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#measureText(java.lang.String, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#measureText(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#measureText(java.lang.CharSequence, int, int)}
 **/
android.graphics.Paint.prototype.measureText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'measureText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRasterizer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setRasterizer(android.graphics.Rasterizer)}
 **/
android.graphics.Paint.prototype.setRasterizer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRasterizer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontMetrics(android.graphics.Paint$FontMetrics)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontMetrics()}
 **/
android.graphics.Paint.prototype.getFontMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStyle()}
 **/
android.graphics.Paint.prototype.getStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTypeface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTypeface(android.graphics.Typeface)}
 **/
android.graphics.Paint.prototype.setTypeface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTypeface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ascent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#ascent()}
 **/
android.graphics.Paint.prototype.ascent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ascent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUnderlineText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setUnderlineText(boolean)}
 **/
android.graphics.Paint.prototype.setUnderlineText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUnderlineText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearShadowLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#clearShadowLayer()}
 **/
android.graphics.Paint.prototype.clearShadowLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearShadowLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStyle(android.graphics.Paint$Style)}
 **/
android.graphics.Paint.prototype.setStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStrokeJoin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStrokeJoin()}
 **/
android.graphics.Paint.prototype.getStrokeJoin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStrokeJoin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFillPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFillPath(android.graphics.Path, android.graphics.Path)}
 **/
android.graphics.Paint.prototype.getFillPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFillPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getShader()}
 **/
android.graphics.Paint.prototype.getShader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPathEffect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getPathEffect()}
 **/
android.graphics.Paint.prototype.getPathEffect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPathEffect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaskFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setMaskFilter(android.graphics.MaskFilter)}
 **/
android.graphics.Paint.prototype.setMaskFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaskFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextBounds(java.lang.String, int, int, android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextBounds(char[], int, int, android.graphics.Rect)}
 **/
android.graphics.Paint.prototype.getTextBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function set
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#set(android.graphics.Paint)}
 **/
android.graphics.Paint.prototype.set = function() {
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
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSubpixelText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isSubpixelText()}
 **/
android.graphics.Paint.prototype.isSubpixelText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSubpixelText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontMetricsInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontMetricsInt(android.graphics.Paint$FontMetricsInt)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontMetricsInt()}
 **/
android.graphics.Paint.prototype.getFontMetricsInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontMetricsInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getColor()}
 **/
android.graphics.Paint.prototype.getColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setARGB
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setARGB(int, int, int, int)}
 **/
android.graphics.Paint.prototype.setARGB = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setARGB',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrikeThruText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrikeThruText(boolean)}
 **/
android.graphics.Paint.prototype.setStrikeThruText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrikeThruText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextPath(char[], int, int, float, float, android.graphics.Path)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextPath(java.lang.String, int, int, float, float, android.graphics.Path)}
 **/
android.graphics.Paint.prototype.getTextPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setXfermode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setXfermode(android.graphics.Xfermode)}
 **/
android.graphics.Paint.prototype.setXfermode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setXfermode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextLocale(java.util.Locale)}
 **/
android.graphics.Paint.prototype.setTextLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextSize(float)}
 **/
android.graphics.Paint.prototype.setTextSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLetterSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setLetterSpacing(float)}
 **/
android.graphics.Paint.prototype.setLetterSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLetterSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function descent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#descent()}
 **/
android.graphics.Paint.prototype.descent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'descent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isStrikeThruText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isStrikeThruText()}
 **/
android.graphics.Paint.prototype.isStrikeThruText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isStrikeThruText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStrokeCap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStrokeCap()}
 **/
android.graphics.Paint.prototype.getStrokeCap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStrokeCap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setColor(int)}
 **/
android.graphics.Paint.prototype.setColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAntiAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setAntiAlias(boolean)}
 **/
android.graphics.Paint.prototype.setAntiAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAntiAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#finalize()}
 **/
android.graphics.Paint.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFakeBoldText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setFakeBoldText(boolean)}
 **/
android.graphics.Paint.prototype.setFakeBoldText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFakeBoldText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextScaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextScaleX()}
 **/
android.graphics.Paint.prototype.getTextScaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextScaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new android.graphics.Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Paint;
