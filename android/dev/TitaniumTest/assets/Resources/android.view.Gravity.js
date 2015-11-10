/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.Gravity
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.Gravity
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html}
 **/
android.view.Gravity = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.Gravity') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.Gravity',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.Gravity.prototype = Object.create(SuperClass.prototype);
android.view.Gravity.prototype.constructor = android.view.Gravity;

android.view.Gravity.className = "android.view.Gravity";
android.view.Gravity.prototype.className = "android.view.Gravity";

// class property
Object.defineProperty(android.view.Gravity, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.Gravity',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.Gravity.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.Gravity',
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
	whatever.prototype = Object.create(android.view.Gravity.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#AXIS_X_SHIFT}
 */
android.view.Gravity.AXIS_X_SHIFT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#FILL_VERTICAL}
 */
android.view.Gravity.FILL_VERTICAL = 112;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#AXIS_CLIP}
 */
android.view.Gravity.AXIS_CLIP = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#AXIS_PULL_BEFORE}
 */
android.view.Gravity.AXIS_PULL_BEFORE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#DISPLAY_CLIP_VERTICAL}
 */
android.view.Gravity.DISPLAY_CLIP_VERTICAL = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#BOTTOM}
 */
android.view.Gravity.BOTTOM = 80;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#AXIS_SPECIFIED}
 */
android.view.Gravity.AXIS_SPECIFIED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#CENTER}
 */
android.view.Gravity.CENTER = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#CLIP_HORIZONTAL}
 */
android.view.Gravity.CLIP_HORIZONTAL = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#RELATIVE_LAYOUT_DIRECTION}
 */
android.view.Gravity.RELATIVE_LAYOUT_DIRECTION = 8388608;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#CENTER_HORIZONTAL}
 */
android.view.Gravity.CENTER_HORIZONTAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#AXIS_PULL_AFTER}
 */
android.view.Gravity.AXIS_PULL_AFTER = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#RIGHT}
 */
android.view.Gravity.RIGHT = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#AXIS_Y_SHIFT}
 */
android.view.Gravity.AXIS_Y_SHIFT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#NO_GRAVITY}
 */
android.view.Gravity.NO_GRAVITY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#FILL}
 */
android.view.Gravity.FILL = 119;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#HORIZONTAL_GRAVITY_MASK}
 */
android.view.Gravity.HORIZONTAL_GRAVITY_MASK = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#VERTICAL_GRAVITY_MASK}
 */
android.view.Gravity.VERTICAL_GRAVITY_MASK = 112;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#LEFT}
 */
android.view.Gravity.LEFT = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#RELATIVE_HORIZONTAL_GRAVITY_MASK}
 */
android.view.Gravity.RELATIVE_HORIZONTAL_GRAVITY_MASK = 8388615;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#TOP}
 */
android.view.Gravity.TOP = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#END}
 */
android.view.Gravity.END = 8388613;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#START}
 */
android.view.Gravity.START = 8388611;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#CENTER_VERTICAL}
 */
android.view.Gravity.CENTER_VERTICAL = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#CLIP_VERTICAL}
 */
android.view.Gravity.CLIP_VERTICAL = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#DISPLAY_CLIP_HORIZONTAL}
 */
android.view.Gravity.DISPLAY_CLIP_HORIZONTAL = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#FILL_HORIZONTAL}
 */
android.view.Gravity.FILL_HORIZONTAL = 7;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function isVertical
 * @static
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#isVertical(int)}
 **/
android.view.Gravity.isVertical = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isVertical',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Gravity') {
			return new android.view.Gravity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAbsoluteGravity
 * @static
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#getAbsoluteGravity(int, int)}
 **/
android.view.Gravity.getAbsoluteGravity = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getAbsoluteGravity',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Gravity') {
			return new android.view.Gravity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function apply
 * @static
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#apply(int, int, int, android.graphics.Rect, android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#apply(int, int, int, android.graphics.Rect, android.graphics.Rect, int)}
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#apply(int, int, int, android.graphics.Rect, int, int, android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#apply(int, int, int, android.graphics.Rect, int, int, android.graphics.Rect, int)}
 **/
android.view.Gravity.apply = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'apply',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Gravity') {
			return new android.view.Gravity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyDisplay
 * @static
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#applyDisplay(int, android.graphics.Rect, android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#applyDisplay(int, android.graphics.Rect, android.graphics.Rect, int)}
 **/
android.view.Gravity.applyDisplay = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'applyDisplay',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Gravity') {
			return new android.view.Gravity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHorizontal
 * @static
 * @see {@link http://developer.android.com/reference/android/view/Gravity.html#isHorizontal(int)}
 **/
android.view.Gravity.isHorizontal = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isHorizontal',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Gravity') {
			return new android.view.Gravity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = android.view.Gravity;
