/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyCharacterMap
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.KeyCharacterMap
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html}
 **/
android.view.KeyCharacterMap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.KeyCharacterMap') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.KeyCharacterMap',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.KeyCharacterMap.prototype = Object.create(SuperClass.prototype);
android.view.KeyCharacterMap.prototype.constructor = android.view.KeyCharacterMap;

android.view.KeyCharacterMap.className = "android.view.KeyCharacterMap";
android.view.KeyCharacterMap.prototype.className = "android.view.KeyCharacterMap";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#COMBINING_ACCENT_MASK}
 */
android.view.KeyCharacterMap.COMBINING_ACCENT_MASK = 2147483647;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#NUMERIC}
 */
android.view.KeyCharacterMap.NUMERIC = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#MODIFIER_BEHAVIOR_CHORDED_OR_TOGGLED}
 */
android.view.KeyCharacterMap.MODIFIER_BEHAVIOR_CHORDED_OR_TOGGLED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#ALPHA}
 */
android.view.KeyCharacterMap.ALPHA = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#FULL}
 */
android.view.KeyCharacterMap.FULL = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#MODIFIER_BEHAVIOR_CHORDED}
 */
android.view.KeyCharacterMap.MODIFIER_BEHAVIOR_CHORDED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#SPECIAL_FUNCTION}
 */
android.view.KeyCharacterMap.SPECIAL_FUNCTION = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#COMBINING_ACCENT}
 */
android.view.KeyCharacterMap.COMBINING_ACCENT = -2147483648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#PICKER_DIALOG_INPUT}
 */
android.view.KeyCharacterMap.PICKER_DIALOG_INPUT = 61185;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#BUILT_IN_KEYBOARD}
 */
android.view.KeyCharacterMap.BUILT_IN_KEYBOARD = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#HEX_INPUT}
 */
android.view.KeyCharacterMap.HEX_INPUT = 61184;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#VIRTUAL_KEYBOARD}
 */
android.view.KeyCharacterMap.VIRTUAL_KEYBOARD = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#PREDICTIVE}
 */
android.view.KeyCharacterMap.PREDICTIVE = 2;

// Static fields
// http://developer.android.com/reference/android/view/KeyCharacterMap.html#CREATOR
Object.defineProperty(android.view.KeyCharacterMap, 'CREATOR', {
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
			if (result.apiName === 'android.view.KeyCharacterMap') {
				return new android.view.KeyCharacterMap(result);
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
 * @function deviceHasKeys
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#deviceHasKeys(int[])}
 **/
android.view.KeyCharacterMap.deviceHasKeys = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'deviceHasKeys',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deviceHasKey
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#deviceHasKey(int)}
 **/
android.view.KeyCharacterMap.deviceHasKey = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'deviceHasKey',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function load
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#load(int)}
 **/
android.view.KeyCharacterMap.load = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'load',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeadChar
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getDeadChar(int, int)}
 **/
android.view.KeyCharacterMap.getDeadChar = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getDeadChar',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
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
 * @function getMatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getMatch(int, char[])}
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getMatch(int, char[], int)}
 **/
android.view.KeyCharacterMap.prototype.getMatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPrintingKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#isPrintingKey(int)}
 **/
android.view.KeyCharacterMap.prototype.isPrintingKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPrintingKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getDisplayLabel(int)}
 **/
android.view.KeyCharacterMap.prototype.getDisplayLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#describeContents()}
 **/
android.view.KeyCharacterMap.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getNumber(int)}
 **/
android.view.KeyCharacterMap.prototype.getNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEvents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getEvents(char[])}
 **/
android.view.KeyCharacterMap.prototype.getEvents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEvents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getKeyboardType()}
 **/
android.view.KeyCharacterMap.prototype.getKeyboardType = function() {
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
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function get
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#get(int, int)}
 **/
android.view.KeyCharacterMap.prototype.get = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'get',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getModifierBehavior
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getModifierBehavior()}
 **/
android.view.KeyCharacterMap.prototype.getModifierBehavior = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getModifierBehavior',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getKeyData(int, android.view.KeyCharacterMap$KeyData)}
 **/
android.view.KeyCharacterMap.prototype.getKeyData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#finalize()}
 **/
android.view.KeyCharacterMap.prototype.finalize = function() {
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
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.KeyCharacterMap.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new android.view.KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.KeyCharacterMap;
