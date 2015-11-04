/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.RelativeLayout
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.RelativeLayout
 * @extends android.view.ViewGroup  * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html}
 **/
android.widget.RelativeLayout = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.RelativeLayout') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.RelativeLayout',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup');
android.widget.RelativeLayout.prototype = Object.create(SuperClass.prototype);
android.widget.RelativeLayout.prototype.constructor = android.widget.RelativeLayout;

android.widget.RelativeLayout.className = "android.widget.RelativeLayout";
android.widget.RelativeLayout.prototype.className = "android.widget.RelativeLayout";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_PARENT_START}
 */
android.widget.RelativeLayout.ALIGN_PARENT_START = 20;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_PARENT_BOTTOM}
 */
android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_PARENT_END}
 */
android.widget.RelativeLayout.ALIGN_PARENT_END = 21;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#CENTER_IN_PARENT}
 */
android.widget.RelativeLayout.CENTER_IN_PARENT = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#TRUE}
 */
android.widget.RelativeLayout.TRUE = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ABOVE}
 */
android.widget.RelativeLayout.ABOVE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_PARENT_TOP}
 */
android.widget.RelativeLayout.ALIGN_PARENT_TOP = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#END_OF}
 */
android.widget.RelativeLayout.END_OF = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_PARENT_LEFT}
 */
android.widget.RelativeLayout.ALIGN_PARENT_LEFT = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#BELOW}
 */
android.widget.RelativeLayout.BELOW = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_PARENT_RIGHT}
 */
android.widget.RelativeLayout.ALIGN_PARENT_RIGHT = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#CENTER_HORIZONTAL}
 */
android.widget.RelativeLayout.CENTER_HORIZONTAL = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#LEFT_OF}
 */
android.widget.RelativeLayout.LEFT_OF = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#RIGHT_OF}
 */
android.widget.RelativeLayout.RIGHT_OF = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#START_OF}
 */
android.widget.RelativeLayout.START_OF = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_BASELINE}
 */
android.widget.RelativeLayout.ALIGN_BASELINE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_START}
 */
android.widget.RelativeLayout.ALIGN_START = 18;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_TOP}
 */
android.widget.RelativeLayout.ALIGN_TOP = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_RIGHT}
 */
android.widget.RelativeLayout.ALIGN_RIGHT = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#CENTER_VERTICAL}
 */
android.widget.RelativeLayout.CENTER_VERTICAL = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_BOTTOM}
 */
android.widget.RelativeLayout.ALIGN_BOTTOM = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_END}
 */
android.widget.RelativeLayout.ALIGN_END = 19;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#ALIGN_LEFT}
 */
android.widget.RelativeLayout.ALIGN_LEFT = 5;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function generateLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#generateLayoutParams(android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#generateLayoutParams(android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#generateLayoutParams(android.util.AttributeSet)}
 **/
android.widget.RelativeLayout.prototype.generateLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#onLayout(boolean, int, int, int, int)}
 **/
android.widget.RelativeLayout.prototype.onLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMeasure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#onMeasure(int, int)}
 **/
android.widget.RelativeLayout.prototype.onMeasure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMeasure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#getAccessibilityClassName()}
 **/
android.widget.RelativeLayout.prototype.getAccessibilityClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateDefaultLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#generateDefaultLayoutParams()}
 **/
android.widget.RelativeLayout.prototype.generateDefaultLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateDefaultLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIgnoreGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#setIgnoreGravity(int)}
 **/
android.widget.RelativeLayout.prototype.setIgnoreGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIgnoreGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHorizontalGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#setHorizontalGravity(int)}
 **/
android.widget.RelativeLayout.prototype.setHorizontalGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHorizontalGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBaseline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#getBaseline()}
 **/
android.widget.RelativeLayout.prototype.getBaseline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBaseline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVerticalGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#setVerticalGravity(int)}
 **/
android.widget.RelativeLayout.prototype.setVerticalGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVerticalGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#requestLayout()}
 **/
android.widget.RelativeLayout.prototype.requestLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#checkLayoutParams(android.view.ViewGroup$LayoutParams)}
 **/
android.widget.RelativeLayout.prototype.checkLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#setGravity(int)}
 **/
android.widget.RelativeLayout.prototype.setGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#getGravity()}
 **/
android.widget.RelativeLayout.prototype.getGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shouldDelayChildPressedState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/RelativeLayout.html#shouldDelayChildPressedState()}
 **/
android.widget.RelativeLayout.prototype.shouldDelayChildPressedState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shouldDelayChildPressedState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.RelativeLayout') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.RelativeLayout;
