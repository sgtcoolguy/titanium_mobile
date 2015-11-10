/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyCharacterMap.KeyData
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.KeyCharacterMap = global.android.view.KeyCharacterMap || {};

/**
 * @class android.view.KeyCharacterMap.KeyData
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html}
 **/
android.view.KeyCharacterMap.KeyData = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.KeyCharacterMap$KeyData') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.KeyCharacterMap$KeyData',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.KeyCharacterMap.KeyData.prototype = Object.create(SuperClass.prototype);
android.view.KeyCharacterMap.KeyData.prototype.constructor = android.view.KeyCharacterMap.KeyData;

android.view.KeyCharacterMap.KeyData.className = "android.view.KeyCharacterMap$KeyData";
android.view.KeyCharacterMap.KeyData.prototype.className = "android.view.KeyCharacterMap$KeyData";

// class property
Object.defineProperty(android.view.KeyCharacterMap.KeyData, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.KeyCharacterMap$KeyData',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.KeyCharacterMap.KeyData.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.KeyCharacterMap$KeyData',
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
	whatever.prototype = Object.create(android.view.KeyCharacterMap.KeyData.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html#META_LENGTH}
 */
android.view.KeyCharacterMap.KeyData.META_LENGTH = 4;

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html#displayLabel
Object.defineProperty(android.view.KeyCharacterMap.KeyData.prototype, 'displayLabel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'displayLabel'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyCharacterMap$KeyData') {
				return new android.view.KeyCharacterMap.KeyData(result);
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
			field: 'displayLabel',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html#number
Object.defineProperty(android.view.KeyCharacterMap.KeyData.prototype, 'number', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'number'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyCharacterMap$KeyData') {
				return new android.view.KeyCharacterMap.KeyData(result);
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
			field: 'number',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html#meta
Object.defineProperty(android.view.KeyCharacterMap.KeyData.prototype, 'meta', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'meta'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyCharacterMap$KeyData') {
				return new android.view.KeyCharacterMap.KeyData(result);
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
			field: 'meta',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = android.view.KeyCharacterMap.KeyData;
