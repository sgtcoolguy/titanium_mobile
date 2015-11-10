/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.animation.ValueAnimator
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.animation = global.android.animation || {};

/**
 * @class android.animation.ValueAnimator
 * @extends android.animation.Animator 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html}
 **/
android.animation.ValueAnimator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.animation.ValueAnimator') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.animation.ValueAnimator',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.animation.Animator');
android.animation.ValueAnimator.prototype = Object.create(SuperClass.prototype);
android.animation.ValueAnimator.prototype.constructor = android.animation.ValueAnimator;

android.animation.ValueAnimator.className = "android.animation.ValueAnimator";
android.animation.ValueAnimator.prototype.className = "android.animation.ValueAnimator";

// class property
Object.defineProperty(android.animation.ValueAnimator, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.animation.ValueAnimator',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.animation.ValueAnimator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.animation.ValueAnimator',
		overrides: overrides
	});

	// Generate a JS wrapper for our dynamic subclass
	var whatever = function() {
		var result = subclassProxy.newInstance(arguments);
		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};

		// TODO Set up super?!
	};
	// it extends the JS wrapper for the parent type
	whatever.prototype = Object.create(android.animation.ValueAnimator.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#RESTART}
 */
android.animation.ValueAnimator.RESTART = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#REVERSE}
 */
android.animation.ValueAnimator.REVERSE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#INFINITE}
 */
android.animation.ValueAnimator.INFINITE = -1;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getFrameDelay
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getFrameDelay()}
 **/
android.animation.ValueAnimator.getFrameDelay = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getFrameDelay',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofInt
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofInt(int[])}
 **/
android.animation.ValueAnimator.ofInt = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofInt',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFrameDelay
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setFrameDelay(long)}
 **/
android.animation.ValueAnimator.setFrameDelay = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setFrameDelay',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofArgb
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofArgb(int[])}
 **/
android.animation.ValueAnimator.ofArgb = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofArgb',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofFloat
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofFloat(float[])}
 **/
android.animation.ValueAnimator.ofFloat = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofFloat',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofPropertyValuesHolder
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofPropertyValuesHolder(android.animation.PropertyValuesHolder[])}
 **/
android.animation.ValueAnimator.ofPropertyValuesHolder = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofPropertyValuesHolder',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofObject
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofObject(android.animation.TypeEvaluator, java.lang.Object[])}
 **/
android.animation.ValueAnimator.ofObject = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofObject',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setDuration(long)}
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setDuration(long)}
 **/
android.animation.ValueAnimator.prototype.setDuration = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#cancel()}
 **/
android.animation.ValueAnimator.prototype.cancel = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getStartDelay()}
 **/
android.animation.ValueAnimator.prototype.getStartDelay = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRepeatMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getRepeatMode()}
 **/
android.animation.ValueAnimator.prototype.getRepeatMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRepeatMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getDuration()}
 **/
android.animation.ValueAnimator.prototype.getDuration = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setValues(android.animation.PropertyValuesHolder[])}
 **/
android.animation.ValueAnimator.prototype.setValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRepeatCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setRepeatCount(int)}
 **/
android.animation.ValueAnimator.prototype.setRepeatCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRepeatCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#isRunning()}
 **/
android.animation.ValueAnimator.prototype.isRunning = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getInterpolator()}
 **/
android.animation.ValueAnimator.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#end()}
 **/
android.animation.ValueAnimator.prototype.end = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIntValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setIntValues(int[])}
 **/
android.animation.ValueAnimator.prototype.setIntValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIntValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setStartDelay(long)}
 **/
android.animation.ValueAnimator.prototype.setStartDelay = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimatedValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getAnimatedValue()}
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getAnimatedValue(java.lang.String)}
 **/
android.animation.ValueAnimator.prototype.getAnimatedValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimatedValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setRepeatMode(int)}
 **/
android.animation.ValueAnimator.prototype.setRepeatMode = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEvaluator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setEvaluator(android.animation.TypeEvaluator)}
 **/
android.animation.ValueAnimator.prototype.setEvaluator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEvaluator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#resume()}
 **/
android.animation.ValueAnimator.prototype.resume = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getValues()}
 **/
android.animation.ValueAnimator.prototype.getValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setInterpolator(android.animation.TimeInterpolator)}
 **/
android.animation.ValueAnimator.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeAllUpdateListeners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#removeAllUpdateListeners()}
 **/
android.animation.ValueAnimator.prototype.removeAllUpdateListeners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeAllUpdateListeners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#start()}
 **/
android.animation.ValueAnimator.prototype.start = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setObjectValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setObjectValues(java.lang.Object[])}
 **/
android.animation.ValueAnimator.prototype.setObjectValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setObjectValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentPlayTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getCurrentPlayTime()}
 **/
android.animation.ValueAnimator.prototype.getCurrentPlayTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentPlayTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#isStarted()}
 **/
android.animation.ValueAnimator.prototype.isStarted = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reverse
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#reverse()}
 **/
android.animation.ValueAnimator.prototype.reverse = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reverse',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFloatValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setFloatValues(float[])}
 **/
android.animation.ValueAnimator.prototype.setFloatValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFloatValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCurrentFraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setCurrentFraction(float)}
 **/
android.animation.ValueAnimator.prototype.setCurrentFraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCurrentFraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#pause()}
 **/
android.animation.ValueAnimator.prototype.pause = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimatedFraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getAnimatedFraction()}
 **/
android.animation.ValueAnimator.prototype.getAnimatedFraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimatedFraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addUpdateListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#addUpdateListener(android.animation.ValueAnimator$AnimatorUpdateListener)}
 **/
android.animation.ValueAnimator.prototype.addUpdateListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addUpdateListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#clone()}
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#clone()}
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#clone()}
 **/
android.animation.ValueAnimator.prototype.clone = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#toString()}
 **/
android.animation.ValueAnimator.prototype.toString = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeUpdateListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#removeUpdateListener(android.animation.ValueAnimator$AnimatorUpdateListener)}
 **/
android.animation.ValueAnimator.prototype.removeUpdateListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeUpdateListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCurrentPlayTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setCurrentPlayTime(long)}
 **/
android.animation.ValueAnimator.prototype.setCurrentPlayTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCurrentPlayTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRepeatCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getRepeatCount()}
 **/
android.animation.ValueAnimator.prototype.getRepeatCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRepeatCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new android.animation.ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.animation.ValueAnimator;
