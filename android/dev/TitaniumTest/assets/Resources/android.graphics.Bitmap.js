/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Bitmap
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Bitmap
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html}
 **/
android.graphics.Bitmap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.graphics.Bitmap') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Bitmap',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Bitmap.prototype = Object.create(SuperClass.prototype);
android.graphics.Bitmap.prototype.constructor = android.graphics.Bitmap;

android.graphics.Bitmap.className = "android.graphics.Bitmap";
android.graphics.Bitmap.prototype.className = "android.graphics.Bitmap";

// class property
Object.defineProperty(android.graphics.Bitmap, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.graphics.Bitmap',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#DENSITY_NONE}
 */
android.graphics.Bitmap.DENSITY_NONE = 0;

// Static fields
// http://developer.android.com/reference/android/graphics/Bitmap.html#CREATOR
Object.defineProperty(android.graphics.Bitmap, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap') {
				return new android.graphics.Bitmap(result);
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
 * @function createScaledBitmap
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createScaledBitmap(android.graphics.Bitmap, int, int, boolean)}
 **/
android.graphics.Bitmap.createScaledBitmap = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createScaledBitmap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createBitmap
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(android.graphics.Bitmap)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(android.graphics.Bitmap, int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(android.graphics.Bitmap, int, int, int, int, android.graphics.Matrix, boolean)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(int, int, android.graphics.Bitmap$Config)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(android.util.DisplayMetrics, int, int, android.graphics.Bitmap$Config)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(int[], int, int, int, int, android.graphics.Bitmap$Config)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(android.util.DisplayMetrics, int[], int, int, int, int, android.graphics.Bitmap$Config)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(int[], int, int, android.graphics.Bitmap$Config)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#createBitmap(android.util.DisplayMetrics, int[], int, int, android.graphics.Bitmap$Config)}
 **/
android.graphics.Bitmap.createBitmap = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createBitmap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
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
 * @function isPremultiplied
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#isPremultiplied()}
 **/
android.graphics.Bitmap.prototype.isPremultiplied = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPremultiplied',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPixel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setPixel(int, int, int)}
 **/
android.graphics.Bitmap.prototype.setPixel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPixel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function extractAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#extractAlpha()}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#extractAlpha(android.graphics.Paint, int[])}
 **/
android.graphics.Bitmap.prototype.extractAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'extractAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPixels
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setPixels(int[], int, int, int, int, int, int)}
 **/
android.graphics.Bitmap.prototype.setPixels = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPixels',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getWidth()}
 **/
android.graphics.Bitmap.prototype.getWidth = function() {
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
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reconfigure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#reconfigure(int, int, android.graphics.Bitmap$Config)}
 **/
android.graphics.Bitmap.prototype.reconfigure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reconfigure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScaledWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getScaledWidth(android.graphics.Canvas)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getScaledWidth(android.util.DisplayMetrics)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getScaledWidth(int)}
 **/
android.graphics.Bitmap.prototype.getScaledWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScaledWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHasMipMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setHasMipMap(boolean)}
 **/
android.graphics.Bitmap.prototype.setHasMipMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHasMipMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasMipMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#hasMipMap()}
 **/
android.graphics.Bitmap.prototype.hasMipMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasMipMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setConfig
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setConfig(android.graphics.Bitmap$Config)}
 **/
android.graphics.Bitmap.prototype.setConfig = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setConfig',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScaledHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getScaledHeight(android.graphics.Canvas)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getScaledHeight(android.util.DisplayMetrics)}
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getScaledHeight(int)}
 **/
android.graphics.Bitmap.prototype.getScaledHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScaledHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPremultiplied
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setPremultiplied(boolean)}
 **/
android.graphics.Bitmap.prototype.setPremultiplied = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPremultiplied',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getHeight()}
 **/
android.graphics.Bitmap.prototype.getHeight = function() {
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
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPixels
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getPixels(int[], int, int, int, int, int, int)}
 **/
android.graphics.Bitmap.prototype.getPixels = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPixels',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function recycle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#recycle()}
 **/
android.graphics.Bitmap.prototype.recycle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recycle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copyPixelsFromBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#copyPixelsFromBuffer(java.nio.Buffer)}
 **/
android.graphics.Bitmap.prototype.copyPixelsFromBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copyPixelsFromBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#copy(android.graphics.Bitmap$Config, boolean)}
 **/
android.graphics.Bitmap.prototype.copy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#hasAlpha()}
 **/
android.graphics.Bitmap.prototype.hasAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllocationByteCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getAllocationByteCount()}
 **/
android.graphics.Bitmap.prototype.getAllocationByteCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllocationByteCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRecycled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#isRecycled()}
 **/
android.graphics.Bitmap.prototype.isRecycled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRecycled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function prepareToDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#prepareToDraw()}
 **/
android.graphics.Bitmap.prototype.prepareToDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'prepareToDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#compress(android.graphics.Bitmap$CompressFormat, int, java.io.OutputStream)}
 **/
android.graphics.Bitmap.prototype.compress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copyPixelsToBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#copyPixelsToBuffer(java.nio.Buffer)}
 **/
android.graphics.Bitmap.prototype.copyPixelsToBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copyPixelsToBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPixel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getPixel(int, int)}
 **/
android.graphics.Bitmap.prototype.getPixel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPixel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getDensity()}
 **/
android.graphics.Bitmap.prototype.getDensity = function() {
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
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHasAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setHasAlpha(boolean)}
 **/
android.graphics.Bitmap.prototype.setHasAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHasAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGenerationId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getGenerationId()}
 **/
android.graphics.Bitmap.prototype.getGenerationId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGenerationId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setDensity(int)}
 **/
android.graphics.Bitmap.prototype.setDensity = function() {
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
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setWidth(int)}
 **/
android.graphics.Bitmap.prototype.setWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#setHeight(int)}
 **/
android.graphics.Bitmap.prototype.setHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#describeContents()}
 **/
android.graphics.Bitmap.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConfig
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getConfig()}
 **/
android.graphics.Bitmap.prototype.getConfig = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConfig',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByteCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getByteCount()}
 **/
android.graphics.Bitmap.prototype.getByteCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getByteCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNinePatchChunk
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getNinePatchChunk()}
 **/
android.graphics.Bitmap.prototype.getNinePatchChunk = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNinePatchChunk',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function eraseColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#eraseColor(int)}
 **/
android.graphics.Bitmap.prototype.eraseColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'eraseColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMutable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#isMutable()}
 **/
android.graphics.Bitmap.prototype.isMutable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMutable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRowBytes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#getRowBytes()}
 **/
android.graphics.Bitmap.prototype.getRowBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRowBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#writeToParcel(android.os.Parcel, int)}
 **/
android.graphics.Bitmap.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sameAs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.html#sameAs(android.graphics.Bitmap)}
 **/
android.graphics.Bitmap.prototype.sameAs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sameAs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap') {
			return new android.graphics.Bitmap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Bitmap;
