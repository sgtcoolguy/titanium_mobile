/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.accessibility = global.android.view.accessibility || {};
global.android.view.accessibility.AccessibilityNodeInfo = global.android.view.accessibility.AccessibilityNodeInfo || {};

/**
 * @class android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html}
 **/
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.prototype = Object.create(SuperClass.prototype);
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.prototype.constructor = android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;

android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.className = "android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction";
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.prototype.className = "android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction";

// Constants

// Static fields
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CLEAR_FOCUS
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_CLEAR_FOCUS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_CLEAR_FOCUS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_LONG_CLICK
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_LONG_CLICK', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_LONG_CLICK'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CLEAR_SELECTION
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_CLEAR_SELECTION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_CLEAR_SELECTION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CUT
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_CUT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_CUT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SET_SELECTION
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SET_SELECTION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SET_SELECTION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_RIGHT
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SCROLL_RIGHT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SCROLL_RIGHT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_BACKWARD
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SCROLL_BACKWARD', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SCROLL_BACKWARD'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CONTEXT_CLICK
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_CONTEXT_CLICK', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_CONTEXT_CLICK'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_LEFT
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SCROLL_LEFT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SCROLL_LEFT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_TO_POSITION
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SCROLL_TO_POSITION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SCROLL_TO_POSITION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_FORWARD
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SCROLL_FORWARD', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SCROLL_FORWARD'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_UP
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SCROLL_UP', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SCROLL_UP'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SHOW_ON_SCREEN
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SHOW_ON_SCREEN', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SHOW_ON_SCREEN'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SELECT
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SELECT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SELECT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_PREVIOUS_HTML_ELEMENT
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_PREVIOUS_HTML_ELEMENT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_PREVIOUS_HTML_ELEMENT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_NEXT_HTML_ELEMENT
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_NEXT_HTML_ELEMENT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_NEXT_HTML_ELEMENT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CLEAR_ACCESSIBILITY_FOCUS
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_CLEAR_ACCESSIBILITY_FOCUS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_CLEAR_ACCESSIBILITY_FOCUS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_EXPAND
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_EXPAND', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_EXPAND'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SCROLL_DOWN
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SCROLL_DOWN', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SCROLL_DOWN'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_COPY
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_COPY', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_COPY'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_COLLAPSE
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_COLLAPSE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_COLLAPSE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_NEXT_AT_MOVEMENT_GRANULARITY
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_NEXT_AT_MOVEMENT_GRANULARITY', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_NEXT_AT_MOVEMENT_GRANULARITY'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_CLICK
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_CLICK', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_CLICK'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_SET_TEXT
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_SET_TEXT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_SET_TEXT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_ACCESSIBILITY_FOCUS
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_ACCESSIBILITY_FOCUS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_ACCESSIBILITY_FOCUS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_PASTE
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_PASTE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_PASTE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_FOCUS
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_FOCUS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_FOCUS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#ACTION_DISMISS
Object.defineProperty(android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction, 'ACTION_DISMISS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ACTION_DISMISS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
				return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#getLabel()}
 **/
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.prototype.getLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#hashCode()}
 **/
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#equals(java.lang.Object)}
 **/
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#getId()}
 **/
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.prototype.getId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.AccessibilityAction.html#toString()}
 **/
android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction.prototype.toString = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction') {
			return new android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
