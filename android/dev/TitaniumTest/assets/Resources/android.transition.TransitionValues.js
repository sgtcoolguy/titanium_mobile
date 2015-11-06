/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.TransitionValues
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};

/**
 * @class android.transition.TransitionValues
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/TransitionValues.html}
 **/
android.transition.TransitionValues = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.transition.TransitionValues') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.transition.TransitionValues',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.TransitionValues.prototype = Object.create(SuperClass.prototype);
android.transition.TransitionValues.prototype.constructor = android.transition.TransitionValues;

android.transition.TransitionValues.className = "android.transition.TransitionValues";
android.transition.TransitionValues.prototype.className = "android.transition.TransitionValues";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/transition/TransitionValues.html#view
Object.defineProperty(android.transition.TransitionValues.prototype, 'view', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'view'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.transition.TransitionValues') {
				return new android.transition.TransitionValues(result);
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
			field: 'view',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/transition/TransitionValues.html#values
Object.defineProperty(android.transition.TransitionValues.prototype, 'values', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'values'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.transition.TransitionValues') {
				return new android.transition.TransitionValues(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionValues.html#hashCode()}
 **/
android.transition.TransitionValues.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionValues') {
			return new android.transition.TransitionValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionValues.html#equals(java.lang.Object)}
 **/
android.transition.TransitionValues.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionValues') {
			return new android.transition.TransitionValues(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/TransitionValues.html#toString()}
 **/
android.transition.TransitionValues.prototype.toString = function() {
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
		if (result.apiName === 'android.transition.TransitionValues') {
			return new android.transition.TransitionValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.TransitionValues;
