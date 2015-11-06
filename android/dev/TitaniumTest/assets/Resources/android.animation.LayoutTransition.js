/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.animation.LayoutTransition
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.animation = global.android.animation || {};

/**
 * @class android.animation.LayoutTransition
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html}
 **/
android.animation.LayoutTransition = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.animation.LayoutTransition') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.animation.LayoutTransition',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.animation.LayoutTransition.prototype = Object.create(SuperClass.prototype);
android.animation.LayoutTransition.prototype.constructor = android.animation.LayoutTransition;

android.animation.LayoutTransition.className = "android.animation.LayoutTransition";
android.animation.LayoutTransition.prototype.className = "android.animation.LayoutTransition";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#APPEARING}
 */
android.animation.LayoutTransition.APPEARING = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#CHANGING}
 */
android.animation.LayoutTransition.CHANGING = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#CHANGE_APPEARING}
 */
android.animation.LayoutTransition.CHANGE_APPEARING = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#CHANGE_DISAPPEARING}
 */
android.animation.LayoutTransition.CHANGE_DISAPPEARING = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#DISAPPEARING}
 */
android.animation.LayoutTransition.DISAPPEARING = 3;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setDuration(long)}
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setDuration(int, long)}
 **/
android.animation.LayoutTransition.prototype.setDuration = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isChangingLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#isChangingLayout()}
 **/
android.animation.LayoutTransition.prototype.isChangingLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChangingLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#showChild(android.view.ViewGroup, android.view.View)}
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#showChild(android.view.ViewGroup, android.view.View, int)}
 **/
android.animation.LayoutTransition.prototype.showChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enableTransitionType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#enableTransitionType(int)}
 **/
android.animation.LayoutTransition.prototype.enableTransitionType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enableTransitionType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStagger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getStagger(int)}
 **/
android.animation.LayoutTransition.prototype.getStagger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStagger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setInterpolator(int, android.animation.TimeInterpolator)}
 **/
android.animation.LayoutTransition.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTransitionListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#removeTransitionListener(android.animation.LayoutTransition$TransitionListener)}
 **/
android.animation.LayoutTransition.prototype.removeTransitionListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTransitionListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setAnimator(int, android.animation.Animator)}
 **/
android.animation.LayoutTransition.prototype.setAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimateParentHierarchy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setAnimateParentHierarchy(boolean)}
 **/
android.animation.LayoutTransition.prototype.setAnimateParentHierarchy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimateParentHierarchy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addTransitionListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#addTransitionListener(android.animation.LayoutTransition$TransitionListener)}
 **/
android.animation.LayoutTransition.prototype.addTransitionListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTransitionListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#removeChild(android.view.ViewGroup, android.view.View)}
 **/
android.animation.LayoutTransition.prototype.removeChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hideChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#hideChild(android.view.ViewGroup, android.view.View)}
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#hideChild(android.view.ViewGroup, android.view.View, int)}
 **/
android.animation.LayoutTransition.prototype.hideChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hideChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getAnimator(int)}
 **/
android.animation.LayoutTransition.prototype.getAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTransitionTypeEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#isTransitionTypeEnabled(int)}
 **/
android.animation.LayoutTransition.prototype.isTransitionTypeEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTransitionTypeEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getStartDelay(int)}
 **/
android.animation.LayoutTransition.prototype.getStartDelay = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStagger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setStagger(int, long)}
 **/
android.animation.LayoutTransition.prototype.setStagger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStagger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getDuration(int)}
 **/
android.animation.LayoutTransition.prototype.getDuration = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRunning
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#isRunning()}
 **/
android.animation.LayoutTransition.prototype.isRunning = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRunning',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getInterpolator(int)}
 **/
android.animation.LayoutTransition.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function disableTransitionType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#disableTransitionType(int)}
 **/
android.animation.LayoutTransition.prototype.disableTransitionType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disableTransitionType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionListeners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getTransitionListeners()}
 **/
android.animation.LayoutTransition.prototype.getTransitionListeners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionListeners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#addChild(android.view.ViewGroup, android.view.View)}
 **/
android.animation.LayoutTransition.prototype.addChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setStartDelay(int, long)}
 **/
android.animation.LayoutTransition.prototype.setStartDelay = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new android.animation.LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.animation.LayoutTransition;
