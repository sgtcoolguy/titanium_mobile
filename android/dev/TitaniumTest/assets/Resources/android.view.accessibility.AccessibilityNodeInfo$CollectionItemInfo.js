/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.accessibility = global.android.view.accessibility || {};
global.android.view.accessibility.AccessibilityNodeInfo = global.android.view.accessibility.AccessibilityNodeInfo || {};

/**
 * @class android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype = Object.create(SuperClass.prototype);
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype.constructor = android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo;

android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.className = "android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo";
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype.className = "android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#obtain(int, int, int, int, boolean)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#obtain(int, int, int, int, boolean, boolean)}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.obtain = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'obtain',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo(result);
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
 * @function isHeading
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#isHeading()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype.isHeading = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHeading',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRowIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#getRowIndex()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype.getRowIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRowIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColumnSpan
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#getColumnSpan()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype.getColumnSpan = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColumnSpan',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#isSelected()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype.isSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColumnIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#getColumnIndex()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype.getColumnIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColumnIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRowSpan
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#getRowSpan()}
 **/
android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo.prototype.getRowSpan = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRowSpan',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo;
