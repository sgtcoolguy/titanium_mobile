/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod.EditorInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.inputmethod = global.android.view.inputmethod || {};

/**
 * @class android.view.inputmethod.EditorInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html}
 **/
android.view.inputmethod.EditorInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.inputmethod.EditorInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.inputmethod.EditorInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.inputmethod.EditorInfo.prototype = Object.create(SuperClass.prototype);
android.view.inputmethod.EditorInfo.prototype.constructor = android.view.inputmethod.EditorInfo;

android.view.inputmethod.EditorInfo.className = "android.view.inputmethod.EditorInfo";
android.view.inputmethod.EditorInfo.prototype.className = "android.view.inputmethod.EditorInfo";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NO_ACCESSORY_ACTION}
 */
android.view.inputmethod.EditorInfo.IME_FLAG_NO_ACCESSORY_ACTION = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NEXT}
 */
android.view.inputmethod.EditorInfo.IME_ACTION_NEXT = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEARCH}
 */
android.view.inputmethod.EditorInfo.IME_ACTION_SEARCH = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_FORCE_ASCII}
 */
android.view.inputmethod.EditorInfo.IME_FLAG_FORCE_ASCII = -2147483648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NO_ENTER_ACTION}
 */
android.view.inputmethod.EditorInfo.IME_FLAG_NO_ENTER_ACTION = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_MASK_ACTION}
 */
android.view.inputmethod.EditorInfo.IME_MASK_ACTION = 255;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NAVIGATE_NEXT}
 */
android.view.inputmethod.EditorInfo.IME_FLAG_NAVIGATE_NEXT = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NO_FULLSCREEN}
 */
android.view.inputmethod.EditorInfo.IME_FLAG_NO_FULLSCREEN = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEND}
 */
android.view.inputmethod.EditorInfo.IME_ACTION_SEND = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_PREVIOUS}
 */
android.view.inputmethod.EditorInfo.IME_ACTION_PREVIOUS = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_GO}
 */
android.view.inputmethod.EditorInfo.IME_ACTION_GO = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NO_EXTRACT_UI}
 */
android.view.inputmethod.EditorInfo.IME_FLAG_NO_EXTRACT_UI = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_DONE}
 */
android.view.inputmethod.EditorInfo.IME_ACTION_DONE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_UNSPECIFIED}
 */
android.view.inputmethod.EditorInfo.IME_ACTION_UNSPECIFIED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_NULL}
 */
android.view.inputmethod.EditorInfo.IME_NULL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NONE}
 */
android.view.inputmethod.EditorInfo.IME_ACTION_NONE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NAVIGATE_PREVIOUS}
 */
android.view.inputmethod.EditorInfo.IME_FLAG_NAVIGATE_PREVIOUS = 67108864;

// Static fields
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#CREATOR
Object.defineProperty(android.view.inputmethod.EditorInfo, 'CREATOR', {
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
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
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
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#fieldName
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'fieldName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'fieldName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'fieldName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#initialCapsMode
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'initialCapsMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'initialCapsMode'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'initialCapsMode',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#imeOptions
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'imeOptions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'imeOptions'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'imeOptions',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#privateImeOptions
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'privateImeOptions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'privateImeOptions'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'privateImeOptions',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#extras
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'extras', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'extras'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'extras',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#initialSelEnd
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'initialSelEnd', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'initialSelEnd'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'initialSelEnd',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#actionLabel
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'actionLabel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'actionLabel'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'actionLabel',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#inputType
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'inputType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'inputType'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'inputType',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#packageName
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'packageName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'packageName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'packageName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#fieldId
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'fieldId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'fieldId'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'fieldId',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#label
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'label', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'label'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'label',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#hintText
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'hintText', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'hintText'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'hintText',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#actionId
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'actionId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'actionId'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'actionId',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#initialSelStart
Object.defineProperty(android.view.inputmethod.EditorInfo.prototype, 'initialSelStart', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'initialSelStart'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new android.view.inputmethod.EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'initialSelStart',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function makeCompatible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#makeCompatible(int)}
 **/
android.view.inputmethod.EditorInfo.prototype.makeCompatible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'makeCompatible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.EditorInfo') {
			return new android.view.inputmethod.EditorInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
android.view.inputmethod.EditorInfo.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.EditorInfo') {
			return new android.view.inputmethod.EditorInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.inputmethod.EditorInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.inputmethod.EditorInfo') {
			return new android.view.inputmethod.EditorInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#describeContents()}
 **/
android.view.inputmethod.EditorInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.inputmethod.EditorInfo') {
			return new android.view.inputmethod.EditorInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.inputmethod.EditorInfo;
