/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Locale.Category
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.Locale = global.java.util.Locale || {};

/**
 * @class java.util.Locale.Category
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Locale.Category.html}
 **/
java.util.Locale.Category = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.Locale$Category') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.Locale$Category',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
java.util.Locale.Category.prototype = Object.create(SuperClass.prototype);
java.util.Locale.Category.prototype.constructor = java.util.Locale.Category;

java.util.Locale.Category.className = "java.util.Locale$Category";
java.util.Locale.Category.prototype.className = "java.util.Locale$Category";

// Constants

// Static fields
// http://developer.android.com/reference/java/util/Locale.Category.html#DISPLAY
Object.defineProperty(java.util.Locale.Category, 'DISPLAY', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'DISPLAY'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$Category') {
				return new java.util.Locale.Category(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.Category.html#FORMAT
Object.defineProperty(java.util.Locale.Category, 'FORMAT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'FORMAT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$Category') {
				return new java.util.Locale.Category(result);
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
// http://developer.android.com/reference/java/util/Locale.Category.html#scriptKey
Object.defineProperty(java.util.Locale.Category.prototype, 'scriptKey', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'scriptKey'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$Category') {
				return new java.util.Locale.Category(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.Category.html#countryKey
Object.defineProperty(java.util.Locale.Category.prototype, 'countryKey', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'countryKey'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$Category') {
				return new java.util.Locale.Category(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.Category.html#variantKey
Object.defineProperty(java.util.Locale.Category.prototype, 'variantKey', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'variantKey'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$Category') {
				return new java.util.Locale.Category(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.Category.html#languageKey
Object.defineProperty(java.util.Locale.Category.prototype, 'languageKey', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'languageKey'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$Category') {
				return new java.util.Locale.Category(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.Category.html#valueOf(java.lang.String)}
 **/
java.util.Locale.Category.valueOf = function() {
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
		if (result.apiName === 'java.util.Locale$Category') {
			return new java.util.Locale.Category(result);
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
 * @see {@link http://developer.android.com/reference/java/util/Locale.Category.html#values()}
 **/
java.util.Locale.Category.values = function() {
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
		if (result.apiName === 'java.util.Locale$Category') {
			return new java.util.Locale.Category(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = java.util.Locale.Category;
