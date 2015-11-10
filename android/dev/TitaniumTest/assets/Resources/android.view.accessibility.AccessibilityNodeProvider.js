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
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.accessibility.AccessibilityNodeProvider. Create a subclass using android.view.accessibility.AccessibilityNodeProvider.extend();' );
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

// class property
Object.defineProperty(android.view.accessibility.AccessibilityNodeProvider, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityNodeProvider',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.accessibility.AccessibilityNodeProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.accessibility.AccessibilityNodeProvider',
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
	whatever.prototype = Object.create(android.view.accessibility.AccessibilityNodeProvider.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

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
