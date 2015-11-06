/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewTreeObserver
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ViewTreeObserver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html}
 **/
android.view.ViewTreeObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.ViewTreeObserver') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.ViewTreeObserver',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.ViewTreeObserver.prototype = Object.create(SuperClass.prototype);
android.view.ViewTreeObserver.prototype.constructor = android.view.ViewTreeObserver;

android.view.ViewTreeObserver.className = "android.view.ViewTreeObserver";
android.view.ViewTreeObserver.prototype.className = "android.view.ViewTreeObserver";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function removeOnDrawListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnDrawListener(android.view.ViewTreeObserver$OnDrawListener)}
 **/
android.view.ViewTreeObserver.prototype.removeOnDrawListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnDrawListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnPreDrawListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnPreDrawListener(android.view.ViewTreeObserver$OnPreDrawListener)}
 **/
android.view.ViewTreeObserver.prototype.addOnPreDrawListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnPreDrawListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnPreDrawListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnPreDrawListener(android.view.ViewTreeObserver$OnPreDrawListener)}
 **/
android.view.ViewTreeObserver.prototype.removeOnPreDrawListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnPreDrawListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnTouchModeChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnTouchModeChangeListener(android.view.ViewTreeObserver$OnTouchModeChangeListener)}
 **/
android.view.ViewTreeObserver.prototype.addOnTouchModeChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnTouchModeChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnTouchModeChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnTouchModeChangeListener(android.view.ViewTreeObserver$OnTouchModeChangeListener)}
 **/
android.view.ViewTreeObserver.prototype.removeOnTouchModeChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnTouchModeChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnWindowAttachListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnWindowAttachListener(android.view.ViewTreeObserver$OnWindowAttachListener)}
 **/
android.view.ViewTreeObserver.prototype.removeOnWindowAttachListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnWindowAttachListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnGlobalLayoutListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnGlobalLayoutListener(android.view.ViewTreeObserver$OnGlobalLayoutListener)}
 **/
android.view.ViewTreeObserver.prototype.addOnGlobalLayoutListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnGlobalLayoutListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAlive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#isAlive()}
 **/
android.view.ViewTreeObserver.prototype.isAlive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAlive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchOnDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#dispatchOnDraw()}
 **/
android.view.ViewTreeObserver.prototype.dispatchOnDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchOnDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnScrollChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnScrollChangedListener(android.view.ViewTreeObserver$OnScrollChangedListener)}
 **/
android.view.ViewTreeObserver.prototype.addOnScrollChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnScrollChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnGlobalFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnGlobalFocusChangeListener(android.view.ViewTreeObserver$OnGlobalFocusChangeListener)}
 **/
android.view.ViewTreeObserver.prototype.removeOnGlobalFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnGlobalFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchOnPreDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#dispatchOnPreDraw()}
 **/
android.view.ViewTreeObserver.prototype.dispatchOnPreDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchOnPreDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnWindowFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnWindowFocusChangeListener(android.view.ViewTreeObserver$OnWindowFocusChangeListener)}
 **/
android.view.ViewTreeObserver.prototype.addOnWindowFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnWindowFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnGlobalFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnGlobalFocusChangeListener(android.view.ViewTreeObserver$OnGlobalFocusChangeListener)}
 **/
android.view.ViewTreeObserver.prototype.addOnGlobalFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnGlobalFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnDrawListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnDrawListener(android.view.ViewTreeObserver$OnDrawListener)}
 **/
android.view.ViewTreeObserver.prototype.addOnDrawListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnDrawListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnWindowAttachListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnWindowAttachListener(android.view.ViewTreeObserver$OnWindowAttachListener)}
 **/
android.view.ViewTreeObserver.prototype.addOnWindowAttachListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnWindowAttachListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnWindowFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnWindowFocusChangeListener(android.view.ViewTreeObserver$OnWindowFocusChangeListener)}
 **/
android.view.ViewTreeObserver.prototype.removeOnWindowFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnWindowFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchOnGlobalLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#dispatchOnGlobalLayout()}
 **/
android.view.ViewTreeObserver.prototype.dispatchOnGlobalLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchOnGlobalLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnScrollChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnScrollChangedListener(android.view.ViewTreeObserver$OnScrollChangedListener)}
 **/
android.view.ViewTreeObserver.prototype.removeOnScrollChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnScrollChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeGlobalOnLayoutListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeGlobalOnLayoutListener(android.view.ViewTreeObserver$OnGlobalLayoutListener)}
 **/
android.view.ViewTreeObserver.prototype.removeGlobalOnLayoutListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeGlobalOnLayoutListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnGlobalLayoutListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnGlobalLayoutListener(android.view.ViewTreeObserver$OnGlobalLayoutListener)}
 **/
android.view.ViewTreeObserver.prototype.removeOnGlobalLayoutListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnGlobalLayoutListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new android.view.ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ViewTreeObserver;
