/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.View.AccessibilityDelegate
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.View = global.android.view.View || {};

/**
 * @class android.view.View.AccessibilityDelegate
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html}
 **/
android.view.View.AccessibilityDelegate = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.View$AccessibilityDelegate') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.View$AccessibilityDelegate',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.View.AccessibilityDelegate.prototype = Object.create(SuperClass.prototype);
android.view.View.AccessibilityDelegate.prototype.constructor = android.view.View.AccessibilityDelegate;

android.view.View.AccessibilityDelegate.className = "android.view.View$AccessibilityDelegate";
android.view.View.AccessibilityDelegate.prototype.className = "android.view.View$AccessibilityDelegate";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function dispatchPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#dispatchPopulateAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.AccessibilityDelegate.prototype.dispatchPopulateAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchPopulateAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInitializeAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#onInitializeAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.AccessibilityDelegate.prototype.onInitializeAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInitializeAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityNodeProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#getAccessibilityNodeProvider(android.view.View)}
 **/
android.view.View.AccessibilityDelegate.prototype.getAccessibilityNodeProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityNodeProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendAccessibilityEventUnchecked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#sendAccessibilityEventUnchecked(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.AccessibilityDelegate.prototype.sendAccessibilityEventUnchecked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendAccessibilityEventUnchecked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#onPopulateAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.AccessibilityDelegate.prototype.onPopulateAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPopulateAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRequestSendAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#onRequestSendAccessibilityEvent(android.view.ViewGroup, android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
android.view.View.AccessibilityDelegate.prototype.onRequestSendAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRequestSendAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performAccessibilityAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#performAccessibilityAction(android.view.View, int, android.os.Bundle)}
 **/
android.view.View.AccessibilityDelegate.prototype.performAccessibilityAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performAccessibilityAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInitializeAccessibilityNodeInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#onInitializeAccessibilityNodeInfo(android.view.View, android.view.accessibility.AccessibilityNodeInfo)}
 **/
android.view.View.AccessibilityDelegate.prototype.onInitializeAccessibilityNodeInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInitializeAccessibilityNodeInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#sendAccessibilityEvent(android.view.View, int)}
 **/
android.view.View.AccessibilityDelegate.prototype.sendAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new android.view.View.AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.View.AccessibilityDelegate;
