/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.MotionEvent
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.MotionEvent
 * @extends android.view.InputEvent 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html}
 **/
android.view.MotionEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.MotionEvent') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.MotionEvent',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.InputEvent');
android.view.MotionEvent.prototype = Object.create(SuperClass.prototype);
android.view.MotionEvent.prototype.constructor = android.view.MotionEvent;

android.view.MotionEvent.className = "android.view.MotionEvent";
android.view.MotionEvent.prototype.className = "android.view.MotionEvent";

// class property
Object.defineProperty(android.view.MotionEvent, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.MotionEvent',
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_STYLUS_SECONDARY}
 */
android.view.MotionEvent.BUTTON_STYLUS_SECONDARY = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_HOVER_MOVE}
 */
android.view.MotionEvent.ACTION_HOVER_MOVE = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_BRAKE}
 */
android.view.MotionEvent.AXIS_BRAKE = 23;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_STYLUS}
 */
android.view.MotionEvent.TOOL_TYPE_STYLUS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_9}
 */
android.view.MotionEvent.AXIS_GENERIC_9 = 40;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_8}
 */
android.view.MotionEvent.AXIS_GENERIC_8 = 39;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_7}
 */
android.view.MotionEvent.AXIS_GENERIC_7 = 38;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_6}
 */
android.view.MotionEvent.AXIS_GENERIC_6 = 37;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#EDGE_BOTTOM}
 */
android.view.MotionEvent.EDGE_BOTTOM = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_MOUSE}
 */
android.view.MotionEvent.TOOL_TYPE_MOUSE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_5}
 */
android.view.MotionEvent.AXIS_GENERIC_5 = 36;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_ID_MASK}
 */
android.view.MotionEvent.ACTION_POINTER_ID_MASK = 65280;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_4}
 */
android.view.MotionEvent.AXIS_GENERIC_4 = 35;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_3}
 */
android.view.MotionEvent.AXIS_GENERIC_3 = 34;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_WHEEL}
 */
android.view.MotionEvent.AXIS_WHEEL = 21;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_2}
 */
android.view.MotionEvent.AXIS_GENERIC_2 = 33;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_LTRIGGER}
 */
android.view.MotionEvent.AXIS_LTRIGGER = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_UNKNOWN}
 */
android.view.MotionEvent.TOOL_TYPE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_1}
 */
android.view.MotionEvent.AXIS_GENERIC_1 = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_UP}
 */
android.view.MotionEvent.ACTION_POINTER_UP = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_SCROLL}
 */
android.view.MotionEvent.ACTION_SCROLL = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_FORWARD}
 */
android.view.MotionEvent.BUTTON_FORWARD = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_DOWN}
 */
android.view.MotionEvent.ACTION_POINTER_DOWN = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_MASK}
 */
android.view.MotionEvent.ACTION_MASK = 255;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_SIZE}
 */
android.view.MotionEvent.AXIS_SIZE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_UP}
 */
android.view.MotionEvent.ACTION_UP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#FLAG_WINDOW_IS_OBSCURED}
 */
android.view.MotionEvent.FLAG_WINDOW_IS_OBSCURED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_3_UP}
 */
android.view.MotionEvent.ACTION_POINTER_3_UP = 518;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_INDEX_MASK}
 */
android.view.MotionEvent.ACTION_POINTER_INDEX_MASK = 65280;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_ORIENTATION}
 */
android.view.MotionEvent.AXIS_ORIENTATION = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_HOVER_EXIT}
 */
android.view.MotionEvent.ACTION_HOVER_EXIT = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_3_DOWN}
 */
android.view.MotionEvent.ACTION_POINTER_3_DOWN = 517;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GAS}
 */
android.view.MotionEvent.AXIS_GAS = 22;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_VSCROLL}
 */
android.view.MotionEvent.AXIS_VSCROLL = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_MOVE}
 */
android.view.MotionEvent.ACTION_MOVE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_2_DOWN}
 */
android.view.MotionEvent.ACTION_POINTER_2_DOWN = 261;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#EDGE_RIGHT}
 */
android.view.MotionEvent.EDGE_RIGHT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_ERASER}
 */
android.view.MotionEvent.TOOL_TYPE_ERASER = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_TERTIARY}
 */
android.view.MotionEvent.BUTTON_TERTIARY = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#EDGE_TOP}
 */
android.view.MotionEvent.EDGE_TOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_INDEX_SHIFT}
 */
android.view.MotionEvent.ACTION_POINTER_INDEX_SHIFT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_DISTANCE}
 */
android.view.MotionEvent.AXIS_DISTANCE = 24;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_HAT_X}
 */
android.view.MotionEvent.AXIS_HAT_X = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RUDDER}
 */
android.view.MotionEvent.AXIS_RUDDER = 20;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_HAT_Y}
 */
android.view.MotionEvent.AXIS_HAT_Y = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_SECONDARY}
 */
android.view.MotionEvent.BUTTON_SECONDARY = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_2_UP}
 */
android.view.MotionEvent.ACTION_POINTER_2_UP = 262;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_11}
 */
android.view.MotionEvent.AXIS_GENERIC_11 = 42;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_12}
 */
android.view.MotionEvent.AXIS_GENERIC_12 = 43;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_HSCROLL}
 */
android.view.MotionEvent.AXIS_HSCROLL = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_CANCEL}
 */
android.view.MotionEvent.ACTION_CANCEL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_STYLUS_PRIMARY}
 */
android.view.MotionEvent.BUTTON_STYLUS_PRIMARY = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_10}
 */
android.view.MotionEvent.AXIS_GENERIC_10 = 41;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_15}
 */
android.view.MotionEvent.AXIS_GENERIC_15 = 46;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_16}
 */
android.view.MotionEvent.AXIS_GENERIC_16 = 47;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_Z}
 */
android.view.MotionEvent.AXIS_Z = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_13}
 */
android.view.MotionEvent.AXIS_GENERIC_13 = 44;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_THROTTLE}
 */
android.view.MotionEvent.AXIS_THROTTLE = 19;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_14}
 */
android.view.MotionEvent.AXIS_GENERIC_14 = 45;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TOOL_MINOR}
 */
android.view.MotionEvent.AXIS_TOOL_MINOR = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TOOL_MAJOR}
 */
android.view.MotionEvent.AXIS_TOOL_MAJOR = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_Y}
 */
android.view.MotionEvent.AXIS_Y = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_1_DOWN}
 */
android.view.MotionEvent.ACTION_POINTER_1_DOWN = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_X}
 */
android.view.MotionEvent.AXIS_X = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_HOVER_ENTER}
 */
android.view.MotionEvent.ACTION_HOVER_ENTER = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_BUTTON_RELEASE}
 */
android.view.MotionEvent.ACTION_BUTTON_RELEASE = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TOUCH_MINOR}
 */
android.view.MotionEvent.AXIS_TOUCH_MINOR = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RTRIGGER}
 */
android.view.MotionEvent.AXIS_RTRIGGER = 18;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TILT}
 */
android.view.MotionEvent.AXIS_TILT = 25;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#INVALID_POINTER_ID}
 */
android.view.MotionEvent.INVALID_POINTER_ID = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TOUCH_MAJOR}
 */
android.view.MotionEvent.AXIS_TOUCH_MAJOR = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RZ}
 */
android.view.MotionEvent.AXIS_RZ = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RY}
 */
android.view.MotionEvent.AXIS_RY = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_FINGER}
 */
android.view.MotionEvent.TOOL_TYPE_FINGER = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RX}
 */
android.view.MotionEvent.AXIS_RX = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#EDGE_LEFT}
 */
android.view.MotionEvent.EDGE_LEFT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_OUTSIDE}
 */
android.view.MotionEvent.ACTION_OUTSIDE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_ID_SHIFT}
 */
android.view.MotionEvent.ACTION_POINTER_ID_SHIFT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_1_UP}
 */
android.view.MotionEvent.ACTION_POINTER_1_UP = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_PRIMARY}
 */
android.view.MotionEvent.BUTTON_PRIMARY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_PRESSURE}
 */
android.view.MotionEvent.AXIS_PRESSURE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_BUTTON_PRESS}
 */
android.view.MotionEvent.ACTION_BUTTON_PRESS = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_BACK}
 */
android.view.MotionEvent.BUTTON_BACK = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_DOWN}
 */
android.view.MotionEvent.ACTION_DOWN = 0;

// Static fields
// http://developer.android.com/reference/android/view/MotionEvent.html#CREATOR
Object.defineProperty(android.view.MotionEvent, 'CREATOR', {
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
			if (result.apiName === 'android.view.MotionEvent') {
				return new android.view.MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, int, android.view.MotionEvent$PointerProperties[], android.view.MotionEvent$PointerCoords[], int, int, float, float, int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, int, int[], android.view.MotionEvent$PointerCoords[], int, float, float, int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, float, float, float, float, int, float, float, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, int, float, float, float, float, int, float, float, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, float, float, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(android.view.MotionEvent)}
 **/
android.view.MotionEvent.obtain = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function axisFromString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#axisFromString(java.lang.String)}
 **/
android.view.MotionEvent.axisFromString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'axisFromString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainNoHistory
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtainNoHistory(android.view.MotionEvent)}
 **/
android.view.MotionEvent.obtainNoHistory = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'obtainNoHistory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function actionToString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#actionToString(int)}
 **/
android.view.MotionEvent.actionToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'actionToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function axisToString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#axisToString(int)}
 **/
android.view.MotionEvent.axisToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'axisToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
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
 * @function findPointerIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#findPointerIndex(int)}
 **/
android.view.MotionEvent.prototype.findPointerIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findPointerIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActionIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getActionIndex()}
 **/
android.view.MotionEvent.prototype.getActionIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActionIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getButtonState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getButtonState()}
 **/
android.view.MotionEvent.prototype.getButtonState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getButtonState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getOrientation()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getOrientation(int)}
 **/
android.view.MotionEvent.prototype.getOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#recycle()}
 **/
android.view.MotionEvent.prototype.recycle = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalOrientation(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalOrientation(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getYPrecision
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getYPrecision()}
 **/
android.view.MotionEvent.prototype.getYPrecision = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getYPrecision',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPointerCoords
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPointerCoords(int, android.view.MotionEvent$PointerCoords)}
 **/
android.view.MotionEvent.prototype.getPointerCoords = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPointerCoords',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getEventTime()}
 **/
android.view.MotionEvent.prototype.getEventTime = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActionButton
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getActionButton()}
 **/
android.view.MotionEvent.prototype.getActionButton = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActionButton',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTouchMinor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getTouchMinor()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getTouchMinor(int)}
 **/
android.view.MotionEvent.prototype.getTouchMinor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTouchMinor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRawX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getRawX()}
 **/
android.view.MotionEvent.prototype.getRawX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRawX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRawY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getRawY()}
 **/
android.view.MotionEvent.prototype.getRawY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRawY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isButtonPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#isButtonPressed(int)}
 **/
android.view.MotionEvent.prototype.isButtonPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isButtonPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addBatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#addBatch(long, float, float, float, float, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#addBatch(long, android.view.MotionEvent$PointerCoords[], int)}
 **/
android.view.MotionEvent.prototype.addBatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addBatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistorySize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistorySize()}
 **/
android.view.MotionEvent.prototype.getHistorySize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistorySize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalPressure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalPressure(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalPressure(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalPressure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalPressure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPointerId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPointerId(int)}
 **/
android.view.MotionEvent.prototype.getPointerId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPointerId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getSource()}
 **/
android.view.MotionEvent.prototype.getSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEdgeFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#setEdgeFlags(int)}
 **/
android.view.MotionEvent.prototype.setEdgeFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEdgeFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTouchMajor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getTouchMajor()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getTouchMajor(int)}
 **/
android.view.MotionEvent.prototype.getTouchMajor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTouchMajor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getFlags()}
 **/
android.view.MotionEvent.prototype.getFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.MotionEvent.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#setSource(int)}
 **/
android.view.MotionEvent.prototype.setSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#setAction(int)}
 **/
android.view.MotionEvent.prototype.setAction = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getXPrecision
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getXPrecision()}
 **/
android.view.MotionEvent.prototype.getXPrecision = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getXPrecision',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalAxisValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalAxisValue(int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalAxisValue(int, int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalAxisValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalAxisValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getToolType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolType(int)}
 **/
android.view.MotionEvent.prototype.getToolType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getToolType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function transform
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#transform(android.graphics.Matrix)}
 **/
android.view.MotionEvent.prototype.transform = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transform',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalSize(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalSize(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#setLocation(float, float)}
 **/
android.view.MotionEvent.prototype.setLocation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getToolMajor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolMajor()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolMajor(int)}
 **/
android.view.MotionEvent.prototype.getToolMajor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getToolMajor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalEventTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalEventTime(int)}
 **/
android.view.MotionEvent.prototype.getHistoricalEventTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalEventTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getToolMinor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolMinor()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolMinor(int)}
 **/
android.view.MotionEvent.prototype.getToolMinor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getToolMinor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActionMasked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getActionMasked()}
 **/
android.view.MotionEvent.prototype.getActionMasked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActionMasked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMetaState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getMetaState()}
 **/
android.view.MotionEvent.prototype.getMetaState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMetaState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalToolMinor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalToolMinor(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalToolMinor(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalToolMinor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalToolMinor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalPointerCoords
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalPointerCoords(int, int, android.view.MotionEvent$PointerCoords)}
 **/
android.view.MotionEvent.prototype.getHistoricalPointerCoords = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalPointerCoords',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalToolMajor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalToolMajor(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalToolMajor(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalToolMajor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalToolMajor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offsetLocation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#offsetLocation(float, float)}
 **/
android.view.MotionEvent.prototype.offsetLocation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offsetLocation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPointerProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPointerProperties(int, android.view.MotionEvent$PointerProperties)}
 **/
android.view.MotionEvent.prototype.getPointerProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPointerProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAxisValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getAxisValue(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getAxisValue(int, int)}
 **/
android.view.MotionEvent.prototype.getAxisValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAxisValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getAction()}
 **/
android.view.MotionEvent.prototype.getAction = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPointerCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPointerCount()}
 **/
android.view.MotionEvent.prototype.getPointerCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPointerCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalX(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalX(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDownTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getDownTime()}
 **/
android.view.MotionEvent.prototype.getDownTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDownTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalY(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalY(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeviceId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getDeviceId()}
 **/
android.view.MotionEvent.prototype.getDeviceId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeviceId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalTouchMajor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalTouchMajor(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalTouchMajor(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalTouchMajor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalTouchMajor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getX()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getX(int)}
 **/
android.view.MotionEvent.prototype.getX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getSize()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getSize(int)}
 **/
android.view.MotionEvent.prototype.getSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getY()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getY(int)}
 **/
android.view.MotionEvent.prototype.getY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPressure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPressure()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPressure(int)}
 **/
android.view.MotionEvent.prototype.getPressure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPressure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalTouchMinor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalTouchMinor(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalTouchMinor(int, int)}
 **/
android.view.MotionEvent.prototype.getHistoricalTouchMinor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalTouchMinor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#finalize()}
 **/
android.view.MotionEvent.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#toString()}
 **/
android.view.MotionEvent.prototype.toString = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEdgeFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getEdgeFlags()}
 **/
android.view.MotionEvent.prototype.getEdgeFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEdgeFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new android.view.MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.MotionEvent;
