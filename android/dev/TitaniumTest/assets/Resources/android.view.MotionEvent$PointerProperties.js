/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.MotionEvent.PointerProperties
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.MotionEvent = global.android.view.MotionEvent || {};

/**
 * @class android.view.MotionEvent.PointerProperties
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html}
 **/
android.view.MotionEvent.PointerProperties = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.MotionEvent$PointerProperties') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.MotionEvent$PointerProperties',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.MotionEvent.PointerProperties.prototype = Object.create(SuperClass.prototype);
android.view.MotionEvent.PointerProperties.prototype.constructor = android.view.MotionEvent.PointerProperties;

android.view.MotionEvent.PointerProperties.className = "android.view.MotionEvent$PointerProperties";
android.view.MotionEvent.PointerProperties.prototype.className = "android.view.MotionEvent$PointerProperties";

// class property
Object.defineProperty(android.view.MotionEvent.PointerProperties, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.MotionEvent$PointerProperties',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#id
Object.defineProperty(android.view.MotionEvent.PointerProperties.prototype, 'id', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'id'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
				return new android.view.MotionEvent.PointerProperties(result);
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
			field: 'id',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#toolType
Object.defineProperty(android.view.MotionEvent.PointerProperties.prototype, 'toolType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'toolType'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
				return new android.view.MotionEvent.PointerProperties(result);
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
			field: 'toolType',
			value: newValue
		});
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#hashCode()}
 **/
android.view.MotionEvent.PointerProperties.prototype.hashCode = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
			return new android.view.MotionEvent.PointerProperties(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#equals(java.lang.Object)}
 **/
android.view.MotionEvent.PointerProperties.prototype.equals = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
			return new android.view.MotionEvent.PointerProperties(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#clear()}
 **/
android.view.MotionEvent.PointerProperties.prototype.clear = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
			return new android.view.MotionEvent.PointerProperties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copyFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#copyFrom(android.view.MotionEvent$PointerProperties)}
 **/
android.view.MotionEvent.PointerProperties.prototype.copyFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copyFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
			return new android.view.MotionEvent.PointerProperties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.MotionEvent.PointerProperties;
