/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.animation.Animator
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.animation = global.android.animation || {};

/**
 * @class android.animation.Animator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html}
 **/
android.animation.Animator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.animation.Animator') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.animation.Animator',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.animation.Animator.prototype = Object.create(SuperClass.prototype);
android.animation.Animator.prototype.constructor = android.animation.Animator;

android.animation.Animator.className = "android.animation.Animator";
android.animation.Animator.prototype.className = "android.animation.Animator";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#cancel()}
 **/
android.animation.Animator.prototype.cancel = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#setDuration(long)}
 **/
android.animation.Animator.prototype.setDuration = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getListeners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#getListeners()}
 **/
android.animation.Animator.prototype.getListeners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getListeners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeAllListeners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#removeAllListeners()}
 **/
android.animation.Animator.prototype.removeAllListeners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeAllListeners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setupEndValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#setupEndValues()}
 **/
android.animation.Animator.prototype.setupEndValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setupEndValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setupStartValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#setupStartValues()}
 **/
android.animation.Animator.prototype.setupStartValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setupStartValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#getStartDelay()}
 **/
android.animation.Animator.prototype.getStartDelay = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addPauseListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#addPauseListener(android.animation.Animator$AnimatorPauseListener)}
 **/
android.animation.Animator.prototype.addPauseListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addPauseListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#getDuration()}
 **/
android.animation.Animator.prototype.getDuration = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#isRunning()}
 **/
android.animation.Animator.prototype.isRunning = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#getInterpolator()}
 **/
android.animation.Animator.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#setTarget(java.lang.Object)}
 **/
android.animation.Animator.prototype.setTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function end
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#end()}
 **/
android.animation.Animator.prototype.end = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'end',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#setStartDelay(long)}
 **/
android.animation.Animator.prototype.setStartDelay = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#addListener(android.animation.Animator$AnimatorListener)}
 **/
android.animation.Animator.prototype.addListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#resume()}
 **/
android.animation.Animator.prototype.resume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPaused
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#isPaused()}
 **/
android.animation.Animator.prototype.isPaused = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPaused',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#setInterpolator(android.animation.TimeInterpolator)}
 **/
android.animation.Animator.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removePauseListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#removePauseListener(android.animation.Animator$AnimatorPauseListener)}
 **/
android.animation.Animator.prototype.removePauseListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removePauseListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#start()}
 **/
android.animation.Animator.prototype.start = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isStarted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#isStarted()}
 **/
android.animation.Animator.prototype.isStarted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isStarted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#removeListener(android.animation.Animator$AnimatorListener)}
 **/
android.animation.Animator.prototype.removeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#pause()}
 **/
android.animation.Animator.prototype.pause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#clone()}
 * @see {@link http://developer.android.com/reference/android/animation/Animator.html#clone()}
 **/
android.animation.Animator.prototype.clone = function() {
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
		if (result.apiName === 'android.animation.Animator') {
			return new android.animation.Animator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.animation.Animator;
