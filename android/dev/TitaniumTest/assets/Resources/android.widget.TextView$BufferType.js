/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.TextView.BufferType
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};
global.android.widget.TextView = global.android.widget.TextView || {};

/**
 * @class android.widget.TextView.BufferType
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/TextView.BufferType.html}
 **/
android.widget.TextView.BufferType = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.TextView$BufferType') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.TextView$BufferType',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
android.widget.TextView.BufferType.prototype = Object.create(SuperClass.prototype);
android.widget.TextView.BufferType.prototype.constructor = android.widget.TextView.BufferType;

android.widget.TextView.BufferType.className = "android.widget.TextView$BufferType";
android.widget.TextView.BufferType.prototype.className = "android.widget.TextView$BufferType";

// Constants

// Static fields
// http://developer.android.com/reference/android/widget/TextView.BufferType.html#SPANNABLE
Object.defineProperty(android.widget.TextView.BufferType, 'SPANNABLE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SPANNABLE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.widget.TextView$BufferType') {
				return new android.widget.TextView.BufferType(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/widget/TextView.BufferType.html#EDITABLE
Object.defineProperty(android.widget.TextView.BufferType, 'EDITABLE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'EDITABLE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.widget.TextView$BufferType') {
				return new android.widget.TextView.BufferType(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/widget/TextView.BufferType.html#NORMAL
Object.defineProperty(android.widget.TextView.BufferType, 'NORMAL', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'NORMAL'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.widget.TextView$BufferType') {
				return new android.widget.TextView.BufferType(result);
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
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/android/widget/TextView.BufferType.html#valueOf(java.lang.String)}
 **/
android.widget.TextView.BufferType.valueOf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView$BufferType') {
			return new android.widget.TextView.BufferType(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/android/widget/TextView.BufferType.html#values()}
 **/
android.widget.TextView.BufferType.values = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView$BufferType') {
			return new android.widget.TextView.BufferType(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = android.widget.TextView.BufferType;
