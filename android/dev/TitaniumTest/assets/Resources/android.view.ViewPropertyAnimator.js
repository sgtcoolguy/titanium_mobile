/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewPropertyAnimator
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ViewPropertyAnimator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html}
 **/
android.view.ViewPropertyAnimator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.ViewPropertyAnimator') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.ViewPropertyAnimator',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.ViewPropertyAnimator.prototype = Object.create(SuperClass.prototype);
android.view.ViewPropertyAnimator.prototype.constructor = android.view.ViewPropertyAnimator;

android.view.ViewPropertyAnimator.className = "android.view.ViewPropertyAnimator";
android.view.ViewPropertyAnimator.prototype.className = "android.view.ViewPropertyAnimator";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setDuration(long)}
 **/
android.view.ViewPropertyAnimator.prototype.setDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#cancel()}
 **/
android.view.ViewPropertyAnimator.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationYBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationYBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.rotationYBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationYBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationXBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationXBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.rotationXBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationXBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#getStartDelay()}
 **/
android.view.ViewPropertyAnimator.prototype.getStartDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#scaleX(float)}
 **/
android.view.ViewPropertyAnimator.prototype.scaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#scaleY(float)}
 **/
android.view.ViewPropertyAnimator.prototype.scaleY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleYBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#scaleYBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.scaleYBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleYBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationX(float)}
 **/
android.view.ViewPropertyAnimator.prototype.rotationX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleXBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#scaleXBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.scaleXBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleXBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationY(float)}
 **/
android.view.ViewPropertyAnimator.prototype.rotationY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#getDuration()}
 **/
android.view.ViewPropertyAnimator.prototype.getDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationXBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationXBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.translationXBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationXBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationYBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationYBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.translationYBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationYBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function alpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#alpha(float)}
 **/
android.view.ViewPropertyAnimator.prototype.alpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'alpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInterpolator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#getInterpolator()}
 **/
android.view.ViewPropertyAnimator.prototype.getInterpolator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInterpolator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withStartAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#withStartAction(java.lang.Runnable)}
 **/
android.view.ViewPropertyAnimator.prototype.withStartAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'withStartAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStartDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setStartDelay(long)}
 **/
android.view.ViewPropertyAnimator.prototype.setStartDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStartDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInterpolator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setInterpolator(android.animation.TimeInterpolator)}
 **/
android.view.ViewPropertyAnimator.prototype.setInterpolator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInterpolator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.rotationBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotation(float)}
 **/
android.view.ViewPropertyAnimator.prototype.rotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function start
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#start()}
 **/
android.view.ViewPropertyAnimator.prototype.start = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'start',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationZBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationZBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.translationZBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationZBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function xBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#xBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.xBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'xBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function zBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#zBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.zBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'zBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function yBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#yBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.yBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'yBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationX(float)}
 **/
android.view.ViewPropertyAnimator.prototype.translationX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUpdateListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setUpdateListener(android.animation.ValueAnimator$AnimatorUpdateListener)}
 **/
android.view.ViewPropertyAnimator.prototype.setUpdateListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUpdateListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function alphaBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#alphaBy(float)}
 **/
android.view.ViewPropertyAnimator.prototype.alphaBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'alphaBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function x
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#x(float)}
 **/
android.view.ViewPropertyAnimator.prototype.x = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'x',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setListener(android.animation.Animator$AnimatorListener)}
 **/
android.view.ViewPropertyAnimator.prototype.setListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function y
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#y(float)}
 **/
android.view.ViewPropertyAnimator.prototype.y = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'y',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#withLayer()}
 **/
android.view.ViewPropertyAnimator.prototype.withLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'withLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withEndAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#withEndAction(java.lang.Runnable)}
 **/
android.view.ViewPropertyAnimator.prototype.withEndAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'withEndAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function z
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#z(float)}
 **/
android.view.ViewPropertyAnimator.prototype.z = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'z',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationY(float)}
 **/
android.view.ViewPropertyAnimator.prototype.translationY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationZ
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationZ(float)}
 **/
android.view.ViewPropertyAnimator.prototype.translationZ = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationZ',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new android.view.ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ViewPropertyAnimator;
