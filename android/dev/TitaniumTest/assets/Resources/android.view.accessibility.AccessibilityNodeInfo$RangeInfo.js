/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeInfo.RangeInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.accessibility = global.android.view.accessibility || {};
global.android.view.accessibility.AccessibilityNodeInfo = global.android.view.accessibility.AccessibilityNodeInfo || {};

/**
 * @class android.view.accessibility.AccessibilityNodeInfo.RangeInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html}
 **/
android.view.accessibility.AccessibilityNodeInfo.RangeInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.accessibility.AccessibilityNodeInfo$RangeInfo') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityNodeInfo$RangeInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.prototype = Object.create(SuperClass.prototype);
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.prototype.constructor = android.view.accessibility.AccessibilityNodeInfo.RangeInfo;

android.view.accessibility.AccessibilityNodeInfo.RangeInfo.className = "android.view.accessibility.AccessibilityNodeInfo$RangeInfo";
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.prototype.className = "android.view.accessibility.AccessibilityNodeInfo$RangeInfo";

// class property
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.RangeInfo, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityNodeInfo$RangeInfo',
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html#RANGE_TYPE_PERCENT}
 */
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.RANGE_TYPE_PERCENT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html#RANGE_TYPE_FLOAT}
 */
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.RANGE_TYPE_FLOAT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html#RANGE_TYPE_INT}
 */
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.RANGE_TYPE_INT = 0;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html#obtain(int, float, float, float)}
 **/
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.obtain = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'obtain',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$RangeInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.RangeInfo(result);
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
 * @function getMin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html#getMin()}
 **/
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.prototype.getMin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$RangeInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.RangeInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html#getType()}
 **/
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$RangeInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.RangeInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMax
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html#getMax()}
 **/
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.prototype.getMax = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMax',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$RangeInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.RangeInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.RangeInfo.html#getCurrent()}
 **/
android.view.accessibility.AccessibilityNodeInfo.RangeInfo.prototype.getCurrent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$RangeInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.RangeInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.accessibility.AccessibilityNodeInfo.RangeInfo;
