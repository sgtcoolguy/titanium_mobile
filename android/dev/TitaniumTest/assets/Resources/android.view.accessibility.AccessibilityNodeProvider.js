/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeProvider
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.accessibility = global.android.view.accessibility || {};

/**
 * @class android.view.accessibility.AccessibilityNodeProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html}
 **/
android.view.accessibility.AccessibilityNodeProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityNodeProvider',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.accessibility.AccessibilityNodeProvider.prototype = Object.create(SuperClass.prototype);
android.view.accessibility.AccessibilityNodeProvider.prototype.constructor = android.view.accessibility.AccessibilityNodeProvider;

android.view.accessibility.AccessibilityNodeProvider.className = "android.view.accessibility.AccessibilityNodeProvider";
android.view.accessibility.AccessibilityNodeProvider.prototype.className = "android.view.accessibility.AccessibilityNodeProvider";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#HOST_VIEW_ID}
 */
android.view.accessibility.AccessibilityNodeProvider.HOST_VIEW_ID = -1;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function performAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#performAction(int, int, android.os.Bundle)}
 **/
android.view.accessibility.AccessibilityNodeProvider.prototype.performAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
			return new android.view.accessibility.AccessibilityNodeProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findAccessibilityNodeInfosByText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#findAccessibilityNodeInfosByText(java.lang.String, int)}
 **/
android.view.accessibility.AccessibilityNodeProvider.prototype.findAccessibilityNodeInfosByText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findAccessibilityNodeInfosByText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
			return new android.view.accessibility.AccessibilityNodeProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createAccessibilityNodeInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#createAccessibilityNodeInfo(int)}
 **/
android.view.accessibility.AccessibilityNodeProvider.prototype.createAccessibilityNodeInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createAccessibilityNodeInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
			return new android.view.accessibility.AccessibilityNodeProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#findFocus(int)}
 **/
android.view.accessibility.AccessibilityNodeProvider.prototype.findFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
			return new android.view.accessibility.AccessibilityNodeProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.accessibility.AccessibilityNodeProvider;
