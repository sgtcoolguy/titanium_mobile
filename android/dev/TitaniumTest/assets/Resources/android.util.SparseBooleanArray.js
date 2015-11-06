/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.util.SparseBooleanArray
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.util = global.android.util || {};

/**
 * @class android.util.SparseBooleanArray
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html}
 **/
android.util.SparseBooleanArray = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.util.SparseBooleanArray') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.util.SparseBooleanArray',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.util.SparseBooleanArray.prototype = Object.create(SuperClass.prototype);
android.util.SparseBooleanArray.prototype.constructor = android.util.SparseBooleanArray;

android.util.SparseBooleanArray.className = "android.util.SparseBooleanArray";
android.util.SparseBooleanArray.prototype.className = "android.util.SparseBooleanArray";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function keyAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#keyAt(int)}
 **/
android.util.SparseBooleanArray.prototype.keyAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keyAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#clear()}
 **/
android.util.SparseBooleanArray.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function valueAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#valueAt(int)}
 **/
android.util.SparseBooleanArray.prototype.valueAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'valueAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function indexOfValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#indexOfValue(boolean)}
 **/
android.util.SparseBooleanArray.prototype.indexOfValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'indexOfValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function delete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#delete(int)}
 **/
android.util.SparseBooleanArray.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function put
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#put(int, boolean)}
 **/
android.util.SparseBooleanArray.prototype.put = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'put',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#size()}
 **/
android.util.SparseBooleanArray.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function indexOfKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#indexOfKey(int)}
 **/
android.util.SparseBooleanArray.prototype.indexOfKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'indexOfKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
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
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#get(int)}
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#get(int, boolean)}
 **/
android.util.SparseBooleanArray.prototype.get = function() {
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
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#clone()}
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#clone()}
 **/
android.util.SparseBooleanArray.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
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
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#toString()}
 **/
android.util.SparseBooleanArray.prototype.toString = function() {
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
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function append
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/SparseBooleanArray.html#append(int, boolean)}
 **/
android.util.SparseBooleanArray.prototype.append = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'append',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.SparseBooleanArray') {
			return new android.util.SparseBooleanArray(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.util.SparseBooleanArray;
