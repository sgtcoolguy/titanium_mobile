/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Canvas
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Canvas
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html}
 **/
android.graphics.Canvas = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.graphics.Canvas') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Canvas',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Canvas.prototype = Object.create(SuperClass.prototype);
android.graphics.Canvas.prototype.constructor = android.graphics.Canvas;

android.graphics.Canvas.className = "android.graphics.Canvas";
android.graphics.Canvas.prototype.className = "android.graphics.Canvas";

// class property
Object.defineProperty(android.graphics.Canvas, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.graphics.Canvas',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.graphics.Canvas.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.graphics.Canvas',
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
	whatever.prototype = Object.create(android.graphics.Canvas.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#FULL_COLOR_LAYER_SAVE_FLAG}
 */
android.graphics.Canvas.FULL_COLOR_LAYER_SAVE_FLAG = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#ALL_SAVE_FLAG}
 */
android.graphics.Canvas.ALL_SAVE_FLAG = 31;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#HAS_ALPHA_LAYER_SAVE_FLAG}
 */
android.graphics.Canvas.HAS_ALPHA_LAYER_SAVE_FLAG = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#MATRIX_SAVE_FLAG}
 */
android.graphics.Canvas.MATRIX_SAVE_FLAG = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#CLIP_TO_LAYER_SAVE_FLAG}
 */
android.graphics.Canvas.CLIP_TO_LAYER_SAVE_FLAG = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#CLIP_SAVE_FLAG}
 */
android.graphics.Canvas.CLIP_SAVE_FLAG = 2;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function drawTextOnPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawTextOnPath(char[], int, int, android.graphics.Path, float, float, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawTextOnPath(java.lang.String, android.graphics.Path, float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawTextOnPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawTextOnPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#rotate(float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#rotate(float, float, float)}
 **/
android.graphics.Canvas.prototype.rotate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawOval
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawOval(android.graphics.RectF, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawOval(float, float, float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawOval = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawOval',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function restoreToCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#restoreToCount(int)}
 **/
android.graphics.Canvas.prototype.restoreToCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restoreToCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpaque
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#isOpaque()}
 **/
android.graphics.Canvas.prototype.isOpaque = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpaque',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSaveCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getSaveCount()}
 **/
android.graphics.Canvas.prototype.getSaveCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSaveCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawBitmap(android.graphics.Bitmap, float, float, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawBitmap(android.graphics.Bitmap, android.graphics.Rect, android.graphics.RectF, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawBitmap(android.graphics.Bitmap, android.graphics.Rect, android.graphics.Rect, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawBitmap(int[], int, int, float, float, int, int, boolean, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawBitmap(int[], int, int, int, int, int, int, boolean, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawBitmap(android.graphics.Bitmap, android.graphics.Matrix, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDrawFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#setDrawFilter(android.graphics.DrawFilter)}
 **/
android.graphics.Canvas.prototype.setDrawFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDrawFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#translate(float, float)}
 **/
android.graphics.Canvas.prototype.translate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getMatrix(android.graphics.Matrix)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getMatrix()}
 **/
android.graphics.Canvas.prototype.getMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getClipBounds(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getClipBounds()}
 **/
android.graphics.Canvas.prototype.getClipBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawPoints
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPoints(float[], int, int, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPoints(float[], android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawPoints = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawPoints',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawRoundRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawRoundRect(android.graphics.RectF, float, float, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawRoundRect(float, float, float, float, float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawRoundRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawRoundRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawPaint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPaint(android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawPaint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawPaint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#setMatrix(android.graphics.Matrix)}
 **/
android.graphics.Canvas.prototype.setMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clipPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipPath(android.graphics.Path, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipPath(android.graphics.Path)}
 **/
android.graphics.Canvas.prototype.clipPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clipPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawText(char[], int, int, float, float, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawText(java.lang.String, float, float, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawText(java.lang.String, int, int, float, float, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawText(java.lang.CharSequence, int, int, float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function concat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#concat(android.graphics.Matrix)}
 **/
android.graphics.Canvas.prototype.concat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'concat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawVertices
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawVertices(android.graphics.Canvas$VertexMode, int, float[], int, float[], int, int[], int, short[], int, int, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawVertices = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawVertices',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function saveLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#saveLayer(android.graphics.RectF, android.graphics.Paint, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#saveLayer(android.graphics.RectF, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#saveLayer(float, float, float, float, android.graphics.Paint, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#saveLayer(float, float, float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.saveLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'saveLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#setBitmap(android.graphics.Bitmap)}
 **/
android.graphics.Canvas.prototype.setBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawLines
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawLines(float[], int, int, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawLines(float[], android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawLines = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawLines',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawARGB
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawARGB(int, int, int, int)}
 **/
android.graphics.Canvas.prototype.drawARGB = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawARGB',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPath(android.graphics.Path, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skew
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#skew(float, float)}
 **/
android.graphics.Canvas.prototype.skew = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skew',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawPosText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPosText(char[], int, int, float[], android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPosText(java.lang.String, float[], android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawPosText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawPosText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawPoint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPoint(float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawPoint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawPoint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function save
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#save()}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#save(int)}
 **/
android.graphics.Canvas.prototype.save = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'save',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#scale(float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#scale(float, float, float, float)}
 **/
android.graphics.Canvas.prototype.scale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getWidth()}
 **/
android.graphics.Canvas.prototype.getWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawColor(int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawColor(int, android.graphics.PorterDuff$Mode)}
 **/
android.graphics.Canvas.prototype.drawColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getHeight()}
 **/
android.graphics.Canvas.prototype.getHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function saveLayerAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#saveLayerAlpha(android.graphics.RectF, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#saveLayerAlpha(android.graphics.RectF, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#saveLayerAlpha(float, float, float, float, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#saveLayerAlpha(float, float, float, float, int)}
 **/
android.graphics.Canvas.prototype.saveLayerAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'saveLayerAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawBitmapMesh
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawBitmapMesh(android.graphics.Bitmap, int, int, float[], int, int[], int, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawBitmapMesh = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawBitmapMesh',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawTextRun
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawTextRun(char[], int, int, int, int, float, float, boolean, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawTextRun(java.lang.CharSequence, int, int, int, int, float, float, boolean, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawTextRun = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawTextRun',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clipRegion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRegion(android.graphics.Region, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRegion(android.graphics.Region)}
 **/
android.graphics.Canvas.prototype.clipRegion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clipRegion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function restore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#restore()}
 **/
android.graphics.Canvas.prototype.restore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawCircle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawCircle(float, float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawCircle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawCircle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clipRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRect(android.graphics.RectF, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRect(android.graphics.Rect, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRect(android.graphics.RectF)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRect(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRect(float, float, float, float, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRect(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#clipRect(int, int, int, int)}
 **/
android.graphics.Canvas.prototype.clipRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clipRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDensity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getDensity()}
 **/
android.graphics.Canvas.prototype.getDensity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDensity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawLine
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawLine(float, float, float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawLine = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawLine',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawArc
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawArc(android.graphics.RectF, float, float, boolean, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawArc(float, float, float, float, float, float, boolean, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawArc = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawArc',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawRGB
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawRGB(int, int, int)}
 **/
android.graphics.Canvas.prototype.drawRGB = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawRGB',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDensity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#setDensity(int)}
 **/
android.graphics.Canvas.prototype.setDensity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDensity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaximumBitmapHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getMaximumBitmapHeight()}
 **/
android.graphics.Canvas.prototype.getMaximumBitmapHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaximumBitmapHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawPicture
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPicture(android.graphics.Picture)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPicture(android.graphics.Picture, android.graphics.RectF)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawPicture(android.graphics.Picture, android.graphics.Rect)}
 **/
android.graphics.Canvas.prototype.drawPicture = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawPicture',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHardwareAccelerated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#isHardwareAccelerated()}
 **/
android.graphics.Canvas.prototype.isHardwareAccelerated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHardwareAccelerated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaximumBitmapWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getMaximumBitmapWidth()}
 **/
android.graphics.Canvas.prototype.getMaximumBitmapWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaximumBitmapWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#getDrawFilter()}
 **/
android.graphics.Canvas.prototype.getDrawFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawRect(android.graphics.RectF, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawRect(android.graphics.Rect, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#drawRect(float, float, float, float, android.graphics.Paint)}
 **/
android.graphics.Canvas.prototype.drawRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function quickReject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#quickReject(android.graphics.RectF, android.graphics.Canvas$EdgeType)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#quickReject(android.graphics.Path, android.graphics.Canvas$EdgeType)}
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.html#quickReject(float, float, float, float, android.graphics.Canvas$EdgeType)}
 **/
android.graphics.Canvas.prototype.quickReject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'quickReject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas') {
			return new android.graphics.Canvas(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Canvas;
