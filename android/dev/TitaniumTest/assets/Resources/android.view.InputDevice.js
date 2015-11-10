/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.InputDevice
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.InputDevice
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html}
 **/
android.view.InputDevice = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.InputDevice') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.InputDevice',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.InputDevice.prototype = Object.create(SuperClass.prototype);
android.view.InputDevice.prototype.constructor = android.view.InputDevice;

android.view.InputDevice.className = "android.view.InputDevice";
android.view.InputDevice.prototype.className = "android.view.InputDevice";

// class property
Object.defineProperty(android.view.InputDevice, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.InputDevice',
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_TOOL_MINOR}
 */
android.view.InputDevice.MOTION_RANGE_TOOL_MINOR = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_NONE}
 */
android.view.InputDevice.SOURCE_CLASS_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_TRACKBALL}
 */
android.view.InputDevice.SOURCE_CLASS_TRACKBALL = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_POINTER}
 */
android.view.InputDevice.SOURCE_CLASS_POINTER = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_TOOL_MAJOR}
 */
android.view.InputDevice.MOTION_RANGE_TOOL_MAJOR = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_BUTTON}
 */
android.view.InputDevice.SOURCE_CLASS_BUTTON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#KEYBOARD_TYPE_NON_ALPHABETIC}
 */
android.view.InputDevice.KEYBOARD_TYPE_NON_ALPHABETIC = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_BLUETOOTH_STYLUS}
 */
android.view.InputDevice.SOURCE_BLUETOOTH_STYLUS = 49154;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_JOYSTICK}
 */
android.view.InputDevice.SOURCE_CLASS_JOYSTICK = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_TOUCHPAD}
 */
android.view.InputDevice.SOURCE_TOUCHPAD = 1048584;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_SIZE}
 */
android.view.InputDevice.MOTION_RANGE_SIZE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_STYLUS}
 */
android.view.InputDevice.SOURCE_STYLUS = 16386;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_PRESSURE}
 */
android.view.InputDevice.MOTION_RANGE_PRESSURE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_DPAD}
 */
android.view.InputDevice.SOURCE_DPAD = 513;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_ORIENTATION}
 */
android.view.InputDevice.MOTION_RANGE_ORIENTATION = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_MOUSE}
 */
android.view.InputDevice.SOURCE_MOUSE = 8194;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_ANY}
 */
android.view.InputDevice.SOURCE_ANY = -256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_TRACKBALL}
 */
android.view.InputDevice.SOURCE_TRACKBALL = 65540;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_UNKNOWN}
 */
android.view.InputDevice.SOURCE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_Y}
 */
android.view.InputDevice.MOTION_RANGE_Y = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_TOUCH_MINOR}
 */
android.view.InputDevice.MOTION_RANGE_TOUCH_MINOR = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_X}
 */
android.view.InputDevice.MOTION_RANGE_X = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_JOYSTICK}
 */
android.view.InputDevice.SOURCE_JOYSTICK = 16777232;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#KEYBOARD_TYPE_ALPHABETIC}
 */
android.view.InputDevice.KEYBOARD_TYPE_ALPHABETIC = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_TOUCH_NAVIGATION}
 */
android.view.InputDevice.SOURCE_TOUCH_NAVIGATION = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_TOUCH_MAJOR}
 */
android.view.InputDevice.MOTION_RANGE_TOUCH_MAJOR = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_TOUCHSCREEN}
 */
android.view.InputDevice.SOURCE_TOUCHSCREEN = 4098;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_GAMEPAD}
 */
android.view.InputDevice.SOURCE_GAMEPAD = 1025;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_MASK}
 */
android.view.InputDevice.SOURCE_CLASS_MASK = 255;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_HDMI}
 */
android.view.InputDevice.SOURCE_HDMI = 33554433;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_POSITION}
 */
android.view.InputDevice.SOURCE_CLASS_POSITION = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#KEYBOARD_TYPE_NONE}
 */
android.view.InputDevice.KEYBOARD_TYPE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_KEYBOARD}
 */
android.view.InputDevice.SOURCE_KEYBOARD = 257;

// Static fields
// http://developer.android.com/reference/android/view/InputDevice.html#CREATOR
Object.defineProperty(android.view.InputDevice, 'CREATOR', {
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
			if (result.apiName === 'android.view.InputDevice') {
				return new android.view.InputDevice(result);
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
 * @function getDeviceIds
 * @static
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getDeviceIds()}
 **/
android.view.InputDevice.getDeviceIds = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDeviceIds',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDevice
 * @static
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getDevice(int)}
 **/
android.view.InputDevice.getDevice = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDevice',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
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
 * @function getDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getDescriptor()}
 **/
android.view.InputDevice.prototype.getDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMotionRanges
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getMotionRanges()}
 **/
android.view.InputDevice.prototype.getMotionRanges = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMotionRanges',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getName()}
 **/
android.view.InputDevice.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasKeys
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#hasKeys(int[])}
 **/
android.view.InputDevice.prototype.hasKeys = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasKeys',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getId()}
 **/
android.view.InputDevice.prototype.getId = function() {
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
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getSources()}
 **/
android.view.InputDevice.prototype.getSources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasMicrophone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#hasMicrophone()}
 **/
android.view.InputDevice.prototype.hasMicrophone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasMicrophone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVibrator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getVibrator()}
 **/
android.view.InputDevice.prototype.getVibrator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVibrator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#describeContents()}
 **/
android.view.InputDevice.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProductId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getProductId()}
 **/
android.view.InputDevice.prototype.getProductId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProductId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getControllerNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getControllerNumber()}
 **/
android.view.InputDevice.prototype.getControllerNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getControllerNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyboardType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getKeyboardType()}
 **/
android.view.InputDevice.prototype.getKeyboardType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyboardType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyCharacterMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getKeyCharacterMap()}
 **/
android.view.InputDevice.prototype.getKeyCharacterMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyCharacterMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMotionRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getMotionRange(int)}
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getMotionRange(int, int)}
 **/
android.view.InputDevice.prototype.getMotionRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMotionRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function supportsSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#supportsSource(int)}
 **/
android.view.InputDevice.prototype.supportsSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportsSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#toString()}
 **/
android.view.InputDevice.prototype.toString = function() {
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
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVirtual
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#isVirtual()}
 **/
android.view.InputDevice.prototype.isVirtual = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVirtual',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVendorId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getVendorId()}
 **/
android.view.InputDevice.prototype.getVendorId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVendorId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.InputDevice.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.InputDevice') {
			return new android.view.InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.InputDevice;
