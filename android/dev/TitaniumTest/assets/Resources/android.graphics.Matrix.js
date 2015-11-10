/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Matrix
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Matrix
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html}
 **/
android.graphics.Matrix = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.graphics.Matrix') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Matrix',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Matrix.prototype = Object.create(SuperClass.prototype);
android.graphics.Matrix.prototype.constructor = android.graphics.Matrix;

android.graphics.Matrix.className = "android.graphics.Matrix";
android.graphics.Matrix.prototype.className = "android.graphics.Matrix";

// class property
Object.defineProperty(android.graphics.Matrix, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.graphics.Matrix',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.graphics.Matrix.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.graphics.Matrix',
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
	whatever.prototype = Object.create(android.graphics.Matrix.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MSKEW_Y}
 */
android.graphics.Matrix.MSKEW_Y = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MSKEW_X}
 */
android.graphics.Matrix.MSKEW_X = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MPERSP_2}
 */
android.graphics.Matrix.MPERSP_2 = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MTRANS_X}
 */
android.graphics.Matrix.MTRANS_X = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MTRANS_Y}
 */
android.graphics.Matrix.MTRANS_Y = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MPERSP_1}
 */
android.graphics.Matrix.MPERSP_1 = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MPERSP_0}
 */
android.graphics.Matrix.MPERSP_0 = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MSCALE_Y}
 */
android.graphics.Matrix.MSCALE_Y = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MSCALE_X}
 */
android.graphics.Matrix.MSCALE_X = 0;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function preScale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preScale(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preScale(float, float)}
 **/
android.graphics.Matrix.prototype.preScale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preScale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mapVectors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapVectors(float[], int, float[], int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapVectors(float[], float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapVectors(float[])}
 **/
android.graphics.Matrix.prototype.mapVectors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mapVectors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPolyToPoly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setPolyToPoly(float[], int, float[], int, int)}
 **/
android.graphics.Matrix.prototype.setPolyToPoly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPolyToPoly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTranslate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setTranslate(float, float)}
 **/
android.graphics.Matrix.prototype.setTranslate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTranslate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toShortString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#toShortString()}
 **/
android.graphics.Matrix.prototype.toShortString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toShortString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postSkew
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postSkew(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postSkew(float, float)}
 **/
android.graphics.Matrix.prototype.postSkew = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postSkew',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSinCos
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setSinCos(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setSinCos(float, float)}
 **/
android.graphics.Matrix.prototype.setSinCos = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSinCos',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function preRotate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preRotate(float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preRotate(float)}
 **/
android.graphics.Matrix.prototype.preRotate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preRotate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setValues(float[])}
 **/
android.graphics.Matrix.prototype.setValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#hashCode()}
 **/
android.graphics.Matrix.prototype.hashCode = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function preTranslate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preTranslate(float, float)}
 **/
android.graphics.Matrix.prototype.preTranslate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preTranslate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSkew
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setSkew(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setSkew(float, float)}
 **/
android.graphics.Matrix.prototype.setSkew = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSkew',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postRotate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postRotate(float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postRotate(float)}
 **/
android.graphics.Matrix.prototype.postRotate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postRotate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setConcat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setConcat(android.graphics.Matrix, android.graphics.Matrix)}
 **/
android.graphics.Matrix.prototype.setConcat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setConcat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postTranslate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postTranslate(float, float)}
 **/
android.graphics.Matrix.prototype.postTranslate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postTranslate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRectToRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setRectToRect(android.graphics.RectF, android.graphics.RectF, android.graphics.Matrix$ScaleToFit)}
 **/
android.graphics.Matrix.prototype.setRectToRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRectToRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mapPoints
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapPoints(float[], int, float[], int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapPoints(float[], float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapPoints(float[])}
 **/
android.graphics.Matrix.prototype.mapPoints = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mapPoints',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#set(android.graphics.Matrix)}
 **/
android.graphics.Matrix.prototype.set = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#invert(android.graphics.Matrix)}
 **/
android.graphics.Matrix.prototype.invert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#getValues(float[])}
 **/
android.graphics.Matrix.prototype.getValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setScale(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setScale(float, float)}
 **/
android.graphics.Matrix.prototype.setScale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function preConcat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preConcat(android.graphics.Matrix)}
 **/
android.graphics.Matrix.prototype.preConcat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preConcat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isIdentity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#isIdentity()}
 **/
android.graphics.Matrix.prototype.isIdentity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isIdentity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rectStaysRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#rectStaysRect()}
 **/
android.graphics.Matrix.prototype.rectStaysRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rectStaysRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAffine
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#isAffine()}
 **/
android.graphics.Matrix.prototype.isAffine = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAffine',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mapRadius
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapRadius(float)}
 **/
android.graphics.Matrix.prototype.mapRadius = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mapRadius',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function preSkew
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preSkew(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preSkew(float, float)}
 **/
android.graphics.Matrix.prototype.preSkew = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preSkew',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#equals(java.lang.Object)}
 **/
android.graphics.Matrix.prototype.equals = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postConcat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postConcat(android.graphics.Matrix)}
 **/
android.graphics.Matrix.prototype.postConcat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postConcat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#reset()}
 **/
android.graphics.Matrix.prototype.reset = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRotate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setRotate(float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setRotate(float)}
 **/
android.graphics.Matrix.prototype.setRotate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRotate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#toString()}
 **/
android.graphics.Matrix.prototype.toString = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#finalize()}
 **/
android.graphics.Matrix.prototype.finalize = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postScale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postScale(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postScale(float, float)}
 **/
android.graphics.Matrix.prototype.postScale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postScale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mapRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapRect(android.graphics.RectF, android.graphics.RectF)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapRect(android.graphics.RectF)}
 **/
android.graphics.Matrix.prototype.mapRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mapRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new android.graphics.Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Matrix;
