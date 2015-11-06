/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.CharArrayBuffer
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};

/**
 * @class android.database.CharArrayBuffer
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/CharArrayBuffer.html}
 **/
android.database.CharArrayBuffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.database.CharArrayBuffer') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.database.CharArrayBuffer',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.database.CharArrayBuffer.prototype = Object.create(SuperClass.prototype);
android.database.CharArrayBuffer.prototype.constructor = android.database.CharArrayBuffer;

android.database.CharArrayBuffer.className = "android.database.CharArrayBuffer";
android.database.CharArrayBuffer.prototype.className = "android.database.CharArrayBuffer";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/database/CharArrayBuffer.html#data
Object.defineProperty(android.database.CharArrayBuffer.prototype, 'data', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'data'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.database.CharArrayBuffer') {
				return new android.database.CharArrayBuffer(result);
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
			field: 'data',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/database/CharArrayBuffer.html#sizeCopied
Object.defineProperty(android.database.CharArrayBuffer.prototype, 'sizeCopied', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'sizeCopied'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.database.CharArrayBuffer') {
				return new android.database.CharArrayBuffer(result);
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
			field: 'sizeCopied',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = android.database.CharArrayBuffer;
