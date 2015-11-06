/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.WindowInsets
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.WindowInsets
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html}
 **/
android.view.WindowInsets = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.WindowInsets') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.WindowInsets',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.WindowInsets.prototype = Object.create(SuperClass.prototype);
android.view.WindowInsets.prototype.constructor = android.view.WindowInsets;

android.view.WindowInsets.className = "android.view.WindowInsets";
android.view.WindowInsets.prototype.className = "android.view.WindowInsets";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getSystemWindowInsetRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getSystemWindowInsetRight()}
 **/
android.view.WindowInsets.prototype.getSystemWindowInsetRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemWindowInsetRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceSystemWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#replaceSystemWindowInsets(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#replaceSystemWindowInsets(android.graphics.Rect)}
 **/
android.view.WindowInsets.prototype.replaceSystemWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceSystemWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRound
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#isRound()}
 **/
android.view.WindowInsets.prototype.isRound = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRound',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasSystemWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#hasSystemWindowInsets()}
 **/
android.view.WindowInsets.prototype.hasSystemWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasSystemWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemWindowInsetBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getSystemWindowInsetBottom()}
 **/
android.view.WindowInsets.prototype.getSystemWindowInsetBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemWindowInsetBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStableInsetLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getStableInsetLeft()}
 **/
android.view.WindowInsets.prototype.getStableInsetLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStableInsetLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#hasInsets()}
 **/
android.view.WindowInsets.prototype.hasInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemWindowInsetLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getSystemWindowInsetLeft()}
 **/
android.view.WindowInsets.prototype.getSystemWindowInsetLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemWindowInsetLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isConsumed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#isConsumed()}
 **/
android.view.WindowInsets.prototype.isConsumed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isConsumed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStableInsetRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getStableInsetRight()}
 **/
android.view.WindowInsets.prototype.getStableInsetRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStableInsetRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStableInsetBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getStableInsetBottom()}
 **/
android.view.WindowInsets.prototype.getStableInsetBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStableInsetBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function consumeStableInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#consumeStableInsets()}
 **/
android.view.WindowInsets.prototype.consumeStableInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'consumeStableInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasStableInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#hasStableInsets()}
 **/
android.view.WindowInsets.prototype.hasStableInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasStableInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#toString()}
 **/
android.view.WindowInsets.prototype.toString = function() {
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
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemWindowInsetTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getSystemWindowInsetTop()}
 **/
android.view.WindowInsets.prototype.getSystemWindowInsetTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemWindowInsetTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function consumeSystemWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#consumeSystemWindowInsets()}
 **/
android.view.WindowInsets.prototype.consumeSystemWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'consumeSystemWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStableInsetTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getStableInsetTop()}
 **/
android.view.WindowInsets.prototype.getStableInsetTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStableInsetTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new android.view.WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.WindowInsets;
