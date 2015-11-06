/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.MotionEvent.PointerCoords
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.MotionEvent = global.android.view.MotionEvent || {};

/**
 * @class android.view.MotionEvent.PointerCoords
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html}
 **/
android.view.MotionEvent.PointerCoords = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.MotionEvent$PointerCoords') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.MotionEvent$PointerCoords',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.MotionEvent.PointerCoords.prototype = Object.create(SuperClass.prototype);
android.view.MotionEvent.PointerCoords.prototype.constructor = android.view.MotionEvent.PointerCoords;

android.view.MotionEvent.PointerCoords.className = "android.view.MotionEvent$PointerCoords";
android.view.MotionEvent.PointerCoords.prototype.className = "android.view.MotionEvent$PointerCoords";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#orientation
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'orientation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'orientation'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'orientation',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#touchMajor
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'touchMajor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'touchMajor'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'touchMajor',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#size
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'size', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'size'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'size',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#x
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'x', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'x'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'x',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#y
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'y', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'y'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'y',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#touchMinor
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'touchMinor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'touchMinor'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'touchMinor',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#pressure
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'pressure', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'pressure'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'pressure',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#toolMajor
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'toolMajor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'toolMajor'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'toolMajor',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#toolMinor
Object.defineProperty(android.view.MotionEvent.PointerCoords.prototype, 'toolMinor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'toolMinor'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new android.view.MotionEvent.PointerCoords(result);
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
			field: 'toolMinor',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getAxisValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#getAxisValue(int)}
 **/
android.view.MotionEvent.PointerCoords.prototype.getAxisValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAxisValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
			return new android.view.MotionEvent.PointerCoords(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#clear()}
 **/
android.view.MotionEvent.PointerCoords.prototype.clear = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
			return new android.view.MotionEvent.PointerCoords(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#copyFrom(android.view.MotionEvent$PointerCoords)}
 **/
android.view.MotionEvent.PointerCoords.prototype.copyFrom = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
			return new android.view.MotionEvent.PointerCoords(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAxisValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#setAxisValue(int, float)}
 **/
android.view.MotionEvent.PointerCoords.prototype.setAxisValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAxisValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
			return new android.view.MotionEvent.PointerCoords(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.MotionEvent.PointerCoords;
