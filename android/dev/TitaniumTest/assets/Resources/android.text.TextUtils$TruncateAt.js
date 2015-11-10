/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.text.TextUtils.TruncateAt
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.text = global.android.text || {};
global.android.text.TextUtils = global.android.text.TextUtils || {};

/**
 * @class android.text.TextUtils.TruncateAt
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/text/TextUtils.TruncateAt.html}
 **/
android.text.TextUtils.TruncateAt = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.text.TextUtils$TruncateAt') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.text.TextUtils$TruncateAt',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
android.text.TextUtils.TruncateAt.prototype = Object.create(SuperClass.prototype);
android.text.TextUtils.TruncateAt.prototype.constructor = android.text.TextUtils.TruncateAt;

android.text.TextUtils.TruncateAt.className = "android.text.TextUtils$TruncateAt";
android.text.TextUtils.TruncateAt.prototype.className = "android.text.TextUtils$TruncateAt";

// class property
Object.defineProperty(android.text.TextUtils.TruncateAt, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.text.TextUtils$TruncateAt',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields
// http://developer.android.com/reference/android/text/TextUtils.TruncateAt.html#MARQUEE
Object.defineProperty(android.text.TextUtils.TruncateAt, 'MARQUEE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'MARQUEE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextUtils$TruncateAt') {
				return new android.text.TextUtils.TruncateAt(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/text/TextUtils.TruncateAt.html#END
Object.defineProperty(android.text.TextUtils.TruncateAt, 'END', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'END'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextUtils$TruncateAt') {
				return new android.text.TextUtils.TruncateAt(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/text/TextUtils.TruncateAt.html#START
Object.defineProperty(android.text.TextUtils.TruncateAt, 'START', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'START'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextUtils$TruncateAt') {
				return new android.text.TextUtils.TruncateAt(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/text/TextUtils.TruncateAt.html#MIDDLE
Object.defineProperty(android.text.TextUtils.TruncateAt, 'MIDDLE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'MIDDLE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.text.TextUtils$TruncateAt') {
				return new android.text.TextUtils.TruncateAt(result);
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
 * @see {@link http://developer.android.com/reference/android/text/TextUtils.TruncateAt.html#valueOf(java.lang.String)}
 **/
android.text.TextUtils.TruncateAt.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.TextUtils$TruncateAt') {
			return new android.text.TextUtils.TruncateAt(result);
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
 * @see {@link http://developer.android.com/reference/android/text/TextUtils.TruncateAt.html#values()}
 **/
android.text.TextUtils.TruncateAt.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.TextUtils$TruncateAt') {
			return new android.text.TextUtils.TruncateAt(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = android.text.TextUtils.TruncateAt;
