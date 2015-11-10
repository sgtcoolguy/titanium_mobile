/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityEvent
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.accessibility = global.android.view.accessibility || {};

/**
 * @class android.view.accessibility.AccessibilityEvent
 * @extends android.view.accessibility.AccessibilityRecord 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html}
 **/
android.view.accessibility.AccessibilityEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.accessibility.AccessibilityEvent') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityEvent',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.accessibility.AccessibilityRecord');
android.view.accessibility.AccessibilityEvent.prototype = Object.create(SuperClass.prototype);
android.view.accessibility.AccessibilityEvent.prototype.constructor = android.view.accessibility.AccessibilityEvent;

android.view.accessibility.AccessibilityEvent.className = "android.view.accessibility.AccessibilityEvent";
android.view.accessibility.AccessibilityEvent.prototype.className = "android.view.accessibility.AccessibilityEvent";

// class property
Object.defineProperty(android.view.accessibility.AccessibilityEvent, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityEvent',
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_ACCESSIBILITY_FOCUSED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CONTENT_CHANGE_TYPE_TEXT}
 */
android.view.accessibility.AccessibilityEvent.CONTENT_CHANGE_TYPE_TEXT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_CONTEXT_CLICKED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_CONTEXT_CLICKED = 8388608;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_TOUCH_INTERACTION_END}
 */
android.view.accessibility.AccessibilityEvent.TYPE_TOUCH_INTERACTION_END = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_SCROLLED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_SCROLLED = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_ASSIST_READING_CONTEXT}
 */
android.view.accessibility.AccessibilityEvent.TYPE_ASSIST_READING_CONTEXT = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_TEXT_SELECTION_CHANGED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_TEXT_SELECTION_CHANGED = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_GESTURE_DETECTION_END}
 */
android.view.accessibility.AccessibilityEvent.TYPE_GESTURE_DETECTION_END = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_WINDOW_CONTENT_CHANGED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_ANNOUNCEMENT}
 */
android.view.accessibility.AccessibilityEvent.TYPE_ANNOUNCEMENT = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CONTENT_CHANGE_TYPE_SUBTREE}
 */
android.view.accessibility.AccessibilityEvent.CONTENT_CHANGE_TYPE_SUBTREE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_CLICKED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_CLICKED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_GESTURE_DETECTION_START}
 */
android.view.accessibility.AccessibilityEvent.TYPE_GESTURE_DETECTION_START = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_WINDOWS_CHANGED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_WINDOWS_CHANGED = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_TEXT_CHANGED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_LONG_CLICKED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_LONG_CLICKED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CONTENT_CHANGE_TYPE_UNDEFINED}
 */
android.view.accessibility.AccessibilityEvent.CONTENT_CHANGE_TYPE_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPES_ALL_MASK}
 */
android.view.accessibility.AccessibilityEvent.TYPES_ALL_MASK = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_WINDOW_STATE_CHANGED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#INVALID_POSITION}
 */
android.view.accessibility.AccessibilityEvent.INVALID_POSITION = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_TOUCH_INTERACTION_START}
 */
android.view.accessibility.AccessibilityEvent.TYPE_TOUCH_INTERACTION_START = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_TOUCH_EXPLORATION_GESTURE_START}
 */
android.view.accessibility.AccessibilityEvent.TYPE_TOUCH_EXPLORATION_GESTURE_START = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_FOCUSED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_FOCUSED = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#MAX_TEXT_LENGTH}
 */
android.view.accessibility.AccessibilityEvent.MAX_TEXT_LENGTH = 500;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED = 65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION}
 */
android.view.accessibility.AccessibilityEvent.CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_HOVER_EXIT}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_HOVER_EXIT = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_HOVER_ENTER}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_HOVER_ENTER = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_NOTIFICATION_STATE_CHANGED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_NOTIFICATION_STATE_CHANGED = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_SELECTED}
 */
android.view.accessibility.AccessibilityEvent.TYPE_VIEW_SELECTED = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_TOUCH_EXPLORATION_GESTURE_END}
 */
android.view.accessibility.AccessibilityEvent.TYPE_TOUCH_EXPLORATION_GESTURE_END = 1024;

// Static fields
// http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CREATOR
Object.defineProperty(android.view.accessibility.AccessibilityEvent, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
				return new android.view.accessibility.AccessibilityEvent(result);
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
/**
 * TODO Fill out docs more...
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#obtain(int)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#obtain(android.view.accessibility.AccessibilityEvent)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#obtain()}
 **/
android.view.accessibility.AccessibilityEvent.obtain = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function eventTypeToString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#eventTypeToString(int)}
 **/
android.view.accessibility.AccessibilityEvent.eventTypeToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'eventTypeToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
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
 * @function getContentChangeTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getContentChangeTypes()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.getContentChangeTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentChangeTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentChangeTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setContentChangeTypes(int)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.setContentChangeTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentChangeTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setAction(int)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.setAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEventTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setEventTime(long)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.setEventTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEventTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMovementGranularity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getMovementGranularity()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.getMovementGranularity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMovementGranularity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setPackageName(java.lang.CharSequence)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.setPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMovementGranularity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setMovementGranularity(int)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.setMovementGranularity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMovementGranularity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initFromParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#initFromParcel(android.os.Parcel)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.initFromParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initFromParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getAction()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.getAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#describeContents()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function appendRecord
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#appendRecord(android.view.accessibility.AccessibilityRecord)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.appendRecord = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'appendRecord',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEventType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setEventType(int)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.setEventType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEventType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEventType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getEventType()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.getEventType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEventType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRecordCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getRecordCount()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.getRecordCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRecordCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function recycle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#recycle()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.recycle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recycle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRecord
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getRecord(int)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.getRecord = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRecord',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#toString()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.toString = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getPackageName()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.getPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEventTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getEventTime()}
 **/
android.view.accessibility.AccessibilityEvent.prototype.getEventTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEventTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.accessibility.AccessibilityEvent.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new android.view.accessibility.AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.accessibility.AccessibilityEvent;
