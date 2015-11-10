/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod.ExtractedText
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.inputmethod = global.android.view.inputmethod || {};

/**
 * @class android.view.inputmethod.ExtractedText
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html}
 **/
android.view.inputmethod.ExtractedText = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.inputmethod.ExtractedText') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.inputmethod.ExtractedText',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.inputmethod.ExtractedText.prototype = Object.create(SuperClass.prototype);
android.view.inputmethod.ExtractedText.prototype.constructor = android.view.inputmethod.ExtractedText;

android.view.inputmethod.ExtractedText.className = "android.view.inputmethod.ExtractedText";
android.view.inputmethod.ExtractedText.prototype.className = "android.view.inputmethod.ExtractedText";

// class property
Object.defineProperty(android.view.inputmethod.ExtractedText, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.inputmethod.ExtractedText',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.inputmethod.ExtractedText.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.inputmethod.ExtractedText',
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
	whatever.prototype = Object.create(android.view.inputmethod.ExtractedText.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#FLAG_SELECTING}
 */
android.view.inputmethod.ExtractedText.FLAG_SELECTING = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#FLAG_SINGLE_LINE}
 */
android.view.inputmethod.ExtractedText.FLAG_SINGLE_LINE = 1;

// Static fields
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#CREATOR
Object.defineProperty(android.view.inputmethod.ExtractedText, 'CREATOR', {
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
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new android.view.inputmethod.ExtractedText(result);
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
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#selectionStart
Object.defineProperty(android.view.inputmethod.ExtractedText.prototype, 'selectionStart', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'selectionStart'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new android.view.inputmethod.ExtractedText(result);
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
			field: 'selectionStart',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#startOffset
Object.defineProperty(android.view.inputmethod.ExtractedText.prototype, 'startOffset', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'startOffset'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new android.view.inputmethod.ExtractedText(result);
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
			field: 'startOffset',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#partialStartOffset
Object.defineProperty(android.view.inputmethod.ExtractedText.prototype, 'partialStartOffset', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'partialStartOffset'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new android.view.inputmethod.ExtractedText(result);
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
			field: 'partialStartOffset',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#flags
Object.defineProperty(android.view.inputmethod.ExtractedText.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'flags'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new android.view.inputmethod.ExtractedText(result);
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
			field: 'flags',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#selectionEnd
Object.defineProperty(android.view.inputmethod.ExtractedText.prototype, 'selectionEnd', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'selectionEnd'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new android.view.inputmethod.ExtractedText(result);
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
			field: 'selectionEnd',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#partialEndOffset
Object.defineProperty(android.view.inputmethod.ExtractedText.prototype, 'partialEndOffset', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'partialEndOffset'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new android.view.inputmethod.ExtractedText(result);
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
			field: 'partialEndOffset',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#text
Object.defineProperty(android.view.inputmethod.ExtractedText.prototype, 'text', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'text'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new android.view.inputmethod.ExtractedText(result);
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
			field: 'text',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.inputmethod.ExtractedText.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.inputmethod.ExtractedText') {
			return new android.view.inputmethod.ExtractedText(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#describeContents()}
 **/
android.view.inputmethod.ExtractedText.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.inputmethod.ExtractedText') {
			return new android.view.inputmethod.ExtractedText(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.inputmethod.ExtractedText;
