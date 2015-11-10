/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeInfo.CollectionInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.accessibility = global.android.view.accessibility || {};
global.android.view.accessibility.AccessibilityNodeInfo = global.android.view.accessibility.AccessibilityNodeInfo || {};

/**
 * @class android.view.accessibility.AccessibilityNodeInfo.CollectionInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.prototype = Object.create(SuperClass.prototype);
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.prototype.constructor = android.view.accessibility.AccessibilityNodeInfo.CollectionInfo;

android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.className = "android.view.accessibility.AccessibilityNodeInfo$CollectionInfo";
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.prototype.className = "android.view.accessibility.AccessibilityNodeInfo$CollectionInfo";

// class property
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.CollectionInfo, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo',
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#SELECTION_MODE_NONE}
 */
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.SELECTION_MODE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#SELECTION_MODE_SINGLE}
 */
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.SELECTION_MODE_SINGLE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#SELECTION_MODE_MULTIPLE}
 */
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.SELECTION_MODE_MULTIPLE = 2;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#obtain(int, int, boolean)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#obtain(int, int, boolean, int)}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.obtain = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionInfo(result);
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
 * @function getRowCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#getRowCount()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.prototype.getRowCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRowCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectionMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#getSelectionMode()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.prototype.getSelectionMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectionMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColumnCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#getColumnCount()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.prototype.getColumnCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColumnCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHierarchical
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#isHierarchical()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionInfo.prototype.isHierarchical = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHierarchical',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.accessibility.AccessibilityNodeInfo.CollectionInfo;
