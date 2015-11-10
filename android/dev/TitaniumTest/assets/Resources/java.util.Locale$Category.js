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
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.util.Locale$Category') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
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

// class property
Object.defineProperty(java.util.Locale.Category, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.util.Locale$Category',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


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

// Static methods
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.Category.html#valueOf(java.lang.String)}
 **/
java.util.Locale.Category.valueOf = function() {
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
