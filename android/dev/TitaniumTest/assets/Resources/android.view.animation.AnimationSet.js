/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.AnimationSet
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.animation = global.android.view.animation || {};

/**
 * @class android.view.animation.AnimationSet
 * @extends android.view.animation.Animation 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html}
 **/
android.view.animation.AnimationSet = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.animation.AnimationSet') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.animation.AnimationSet',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.animation.Animation');
android.view.animation.AnimationSet.prototype = Object.create(SuperClass.prototype);
android.view.animation.AnimationSet.prototype.constructor = android.view.animation.AnimationSet;

android.view.animation.AnimationSet.className = "android.view.animation.AnimationSet";
android.view.animation.AnimationSet.prototype.className = "android.view.animation.AnimationSet";

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
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#setDuration(long)}
 **/
android.view.animation.AnimationSet.prototype.setDuration = function() {
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
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransformation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#getTransformation(long, android.view.animation.Transformation)}
 **/
android.view.animation.AnimationSet.prototype.getTransformation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFillAfter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#setFillAfter(boolean)}
 **/
android.view.animation.AnimationSet.prototype.setFillAfter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFillAfter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function restrictDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#restrictDuration(long)}
 **/
android.view.animation.AnimationSet.prototype.restrictDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restrictDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStartOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#setStartOffset(long)}
 **/
android.view.animation.AnimationSet.prototype.setStartOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStartOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#addAnimation(android.view.animation.Animation)}
 **/
android.view.animation.AnimationSet.prototype.addAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#getDuration()}
 **/
android.view.animation.AnimationSet.prototype.getDuration = function() {
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
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#clone()}
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#clone()}
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#clone()}
 **/
android.view.animation.AnimationSet.prototype.clone = function() {
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
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeDurationHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#computeDurationHint()}
 **/
android.view.animation.AnimationSet.prototype.computeDurationHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeDurationHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#reset()}
 **/
android.view.animation.AnimationSet.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStartTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#setStartTime(long)}
 **/
android.view.animation.AnimationSet.prototype.setStartTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStartTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#getStartTime()}
 **/
android.view.animation.AnimationSet.prototype.getStartTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initialize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#initialize(int, int, int, int)}
 **/
android.view.animation.AnimationSet.prototype.initialize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initialize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFillBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#setFillBefore(boolean)}
 **/
android.view.animation.AnimationSet.prototype.setFillBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFillBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#getAnimations()}
 **/
android.view.animation.AnimationSet.prototype.getAnimations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRepeatMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#setRepeatMode(int)}
 **/
android.view.animation.AnimationSet.prototype.setRepeatMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRepeatMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleCurrentDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#scaleCurrentDuration(float)}
 **/
android.view.animation.AnimationSet.prototype.scaleCurrentDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleCurrentDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function willChangeTransformationMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#willChangeTransformationMatrix()}
 **/
android.view.animation.AnimationSet.prototype.willChangeTransformationMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'willChangeTransformationMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function willChangeBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/AnimationSet.html#willChangeBounds()}
 **/
android.view.animation.AnimationSet.prototype.willChangeBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'willChangeBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.AnimationSet') {
			return new android.view.animation.AnimationSet(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.animation.AnimationSet;
