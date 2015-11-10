/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.Animation
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.animation = global.android.view.animation || {};

/**
 * @class android.view.animation.Animation
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html}
 **/
android.view.animation.Animation = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.animation.Animation') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.animation.Animation. Create a subclass using android.view.animation.Animation.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.animation.Animation.prototype = Object.create(SuperClass.prototype);
android.view.animation.Animation.prototype.constructor = android.view.animation.Animation;

android.view.animation.Animation.className = "android.view.animation.Animation";
android.view.animation.Animation.prototype.className = "android.view.animation.Animation";

// class property
Object.defineProperty(android.view.animation.Animation, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.animation.Animation',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.animation.Animation.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.animation.Animation',
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
	whatever.prototype = Object.create(android.view.animation.Animation.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ABSOLUTE}
 */
android.view.animation.Animation.ABSOLUTE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ZORDER_NORMAL}
 */
android.view.animation.Animation.ZORDER_NORMAL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#RELATIVE_TO_PARENT}
 */
android.view.animation.Animation.RELATIVE_TO_PARENT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#RESTART}
 */
android.view.animation.Animation.RESTART = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#REVERSE}
 */
android.view.animation.Animation.REVERSE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#INFINITE}
 */
android.view.animation.Animation.INFINITE = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ZORDER_TOP}
 */
android.view.animation.Animation.ZORDER_TOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#START_ON_FIRST_FRAME}
 */
android.view.animation.Animation.START_ON_FIRST_FRAME = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#RELATIVE_TO_SELF}
 */
android.view.animation.Animation.RELATIVE_TO_SELF = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ZORDER_BOTTOM}
 */
android.view.animation.Animation.ZORDER_BOTTOM = -1;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#cancel()}
 **/
android.view.animation.Animation.prototype.cancel = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setDuration(long)}
 **/
android.view.animation.Animation.prototype.setDuration = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getTransformation(long, android.view.animation.Transformation)}
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getTransformation(long, android.view.animation.Transformation, float)}
 **/
android.view.animation.Animation.prototype.getTransformation = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#restrictDuration(long)}
 **/
android.view.animation.Animation.prototype.restrictDuration = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setFillAfter(boolean)}
 **/
android.view.animation.Animation.prototype.setFillAfter = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackgroundColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getBackgroundColor()}
 **/
android.view.animation.Animation.prototype.getBackgroundColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackgroundColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInitialized
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#isInitialized()}
 **/
android.view.animation.Animation.prototype.isInitialized = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInitialized',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasStarted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#hasStarted()}
 **/
android.view.animation.Animation.prototype.hasStarted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasStarted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyTransformation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#applyTransformation(float, android.view.animation.Transformation)}
 **/
android.view.animation.Animation.prototype.applyTransformation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyTransformation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFillBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getFillBefore()}
 **/
android.view.animation.Animation.prototype.getFillBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFillBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getRepeatMode()}
 **/
android.view.animation.Animation.prototype.getRepeatMode = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDetachWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setDetachWallpaper(boolean)}
 **/
android.view.animation.Animation.prototype.setDetachWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDetachWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getDuration()}
 **/
android.view.animation.Animation.prototype.getDuration = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setRepeatCount(int)}
 **/
android.view.animation.Animation.prototype.setRepeatCount = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getInterpolator()}
 **/
android.view.animation.Animation.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setStartTime(long)}
 **/
android.view.animation.Animation.prototype.setStartTime = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getStartTime()}
 **/
android.view.animation.Animation.prototype.getStartTime = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFillEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setFillEnabled(boolean)}
 **/
android.view.animation.Animation.prototype.setFillEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFillEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setFillBefore(boolean)}
 **/
android.view.animation.Animation.prototype.setFillBefore = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDetachWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getDetachWallpaper()}
 **/
android.view.animation.Animation.prototype.getDetachWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDetachWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimationListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setAnimationListener(android.view.animation.Animation$AnimationListener)}
 **/
android.view.animation.Animation.prototype.setAnimationListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimationListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFillAfter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getFillAfter()}
 **/
android.view.animation.Animation.prototype.getFillAfter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFillAfter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setRepeatMode(int)}
 **/
android.view.animation.Animation.prototype.setRepeatMode = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#willChangeBounds()}
 **/
android.view.animation.Animation.prototype.willChangeBounds = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getStartOffset()}
 **/
android.view.animation.Animation.prototype.getStartOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setBackgroundColor(int)}
 **/
android.view.animation.Animation.prototype.setBackgroundColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setInterpolator(android.content.Context, int)}
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setInterpolator(android.view.animation.Interpolator)}
 **/
android.view.animation.Animation.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setZAdjustment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setZAdjustment(int)}
 **/
android.view.animation.Animation.prototype.setZAdjustment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setZAdjustment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#start()}
 **/
android.view.animation.Animation.prototype.start = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startNow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#startNow()}
 **/
android.view.animation.Animation.prototype.startNow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startNow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#resolveSize(int, float, int, int)}
 **/
android.view.animation.Animation.prototype.resolveSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ensureInterpolator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ensureInterpolator()}
 **/
android.view.animation.Animation.prototype.ensureInterpolator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ensureInterpolator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getZAdjustment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getZAdjustment()}
 **/
android.view.animation.Animation.prototype.getZAdjustment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getZAdjustment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFillEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#isFillEnabled()}
 **/
android.view.animation.Animation.prototype.isFillEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFillEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setStartOffset(long)}
 **/
android.view.animation.Animation.prototype.setStartOffset = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasEnded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#hasEnded()}
 **/
android.view.animation.Animation.prototype.hasEnded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasEnded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScaleFactor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getScaleFactor()}
 **/
android.view.animation.Animation.prototype.getScaleFactor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScaleFactor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#clone()}
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#clone()}
 **/
android.view.animation.Animation.prototype.clone = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#computeDurationHint()}
 **/
android.view.animation.Animation.prototype.computeDurationHint = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#reset()}
 **/
android.view.animation.Animation.prototype.reset = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#finalize()}
 **/
android.view.animation.Animation.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#initialize(int, int, int, int)}
 **/
android.view.animation.Animation.prototype.initialize = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#scaleCurrentDuration(float)}
 **/
android.view.animation.Animation.prototype.scaleCurrentDuration = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getRepeatCount()}
 **/
android.view.animation.Animation.prototype.getRepeatCount = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#willChangeTransformationMatrix()}
 **/
android.view.animation.Animation.prototype.willChangeTransformationMatrix = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new android.view.animation.Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.animation.Animation;
