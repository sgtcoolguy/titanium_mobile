/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.Display
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.Display
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/Display.html}
 **/
android.view.Display = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.Display') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.Display',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.Display.prototype = Object.create(SuperClass.prototype);
android.view.Display.prototype.constructor = android.view.Display;

android.view.Display.className = "android.view.Display";
android.view.Display.prototype.className = "android.view.Display";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_SUPPORTS_PROTECTED_BUFFERS}
 */
android.view.Display.FLAG_SUPPORTS_PROTECTED_BUFFERS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_DOZE}
 */
android.view.Display.STATE_DOZE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_SECURE}
 */
android.view.Display.FLAG_SECURE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#INVALID_DISPLAY}
 */
android.view.Display.INVALID_DISPLAY = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_PRIVATE}
 */
android.view.Display.FLAG_PRIVATE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_ON}
 */
android.view.Display.STATE_ON = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_OFF}
 */
android.view.Display.STATE_OFF = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_DOZE_SUSPEND}
 */
android.view.Display.STATE_DOZE_SUSPEND = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_ROUND}
 */
android.view.Display.FLAG_ROUND = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#DEFAULT_DISPLAY}
 */
android.view.Display.DEFAULT_DISPLAY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_UNKNOWN}
 */
android.view.Display.STATE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_PRESENTATION}
 */
android.view.Display.FLAG_PRESENTATION = 8;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getRefreshRate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRefreshRate()}
 **/
android.view.Display.prototype.getRefreshRate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRefreshRate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRealSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRealSize(android.graphics.Point)}
 **/
android.view.Display.prototype.getRealSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRealSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getName()}
 **/
android.view.Display.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isValid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#isValid()}
 **/
android.view.Display.prototype.isValid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isValid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRotation()}
 **/
android.view.Display.prototype.getRotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getDisplayId()}
 **/
android.view.Display.prototype.getDisplayId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSupportedRefreshRates
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getSupportedRefreshRates()}
 **/
android.view.Display.prototype.getSupportedRefreshRates = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSupportedRefreshRates',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getMetrics(android.util.DisplayMetrics)}
 **/
android.view.Display.prototype.getMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRealMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRealMetrics(android.util.DisplayMetrics)}
 **/
android.view.Display.prototype.getRealMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRealMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getWidth()}
 **/
android.view.Display.prototype.getWidth = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAppVsyncOffsetNanos
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getAppVsyncOffsetNanos()}
 **/
android.view.Display.prototype.getAppVsyncOffsetNanos = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAppVsyncOffsetNanos',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentSizeRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getCurrentSizeRange(android.graphics.Point, android.graphics.Point)}
 **/
android.view.Display.prototype.getCurrentSizeRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentSizeRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getSize(android.graphics.Point)}
 **/
android.view.Display.prototype.getSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getHeight()}
 **/
android.view.Display.prototype.getHeight = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getOrientation()}
 **/
android.view.Display.prototype.getOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPixelFormat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getPixelFormat()}
 **/
android.view.Display.prototype.getPixelFormat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPixelFormat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getState()}
 **/
android.view.Display.prototype.getState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRectSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRectSize(android.graphics.Rect)}
 **/
android.view.Display.prototype.getRectSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRectSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPresentationDeadlineNanos
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getPresentationDeadlineNanos()}
 **/
android.view.Display.prototype.getPresentationDeadlineNanos = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPresentationDeadlineNanos',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#toString()}
 **/
android.view.Display.prototype.toString = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getMode()}
 **/
android.view.Display.prototype.getMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getFlags()}
 **/
android.view.Display.prototype.getFlags = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSupportedModes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getSupportedModes()}
 **/
android.view.Display.prototype.getSupportedModes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSupportedModes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new android.view.Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.Display;
