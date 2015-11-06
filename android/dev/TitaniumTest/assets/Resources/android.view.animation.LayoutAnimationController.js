/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.LayoutAnimationController
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.animation = global.android.view.animation || {};

/**
 * @class android.view.animation.LayoutAnimationController
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html}
 **/
android.view.animation.LayoutAnimationController = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.animation.LayoutAnimationController') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.animation.LayoutAnimationController',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.animation.LayoutAnimationController.prototype = Object.create(SuperClass.prototype);
android.view.animation.LayoutAnimationController.prototype.constructor = android.view.animation.LayoutAnimationController;

android.view.animation.LayoutAnimationController.className = "android.view.animation.LayoutAnimationController";
android.view.animation.LayoutAnimationController.prototype.className = "android.view.animation.LayoutAnimationController";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#ORDER_REVERSE}
 */
android.view.animation.LayoutAnimationController.ORDER_REVERSE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#ORDER_NORMAL}
 */
android.view.animation.LayoutAnimationController.ORDER_NORMAL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#ORDER_RANDOM}
 */
android.view.animation.LayoutAnimationController.ORDER_RANDOM = 2;

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#mInterpolator
Object.defineProperty(android.view.animation.LayoutAnimationController.prototype, 'mInterpolator', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mInterpolator'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.LayoutAnimationController') {
				return new android.view.animation.LayoutAnimationController(result);
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
			field: 'mInterpolator',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#mAnimation
Object.defineProperty(android.view.animation.LayoutAnimationController.prototype, 'mAnimation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mAnimation'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.LayoutAnimationController') {
				return new android.view.animation.LayoutAnimationController(result);
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
			field: 'mAnimation',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#mRandomizer
Object.defineProperty(android.view.animation.LayoutAnimationController.prototype, 'mRandomizer', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mRandomizer'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.LayoutAnimationController') {
				return new android.view.animation.LayoutAnimationController(result);
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
			field: 'mRandomizer',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getDelay()}
 **/
android.view.animation.LayoutAnimationController.prototype.getDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setInterpolator(android.content.Context, int)}
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setInterpolator(android.view.animation.Interpolator)}
 **/
android.view.animation.LayoutAnimationController.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#start()}
 **/
android.view.animation.LayoutAnimationController.prototype.start = function() {
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
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function willOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#willOverlap()}
 **/
android.view.animation.LayoutAnimationController.prototype.willOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'willOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#isDone()}
 **/
android.view.animation.LayoutAnimationController.prototype.isDone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setAnimation(android.content.Context, int)}
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setAnimation(android.view.animation.Animation)}
 **/
android.view.animation.LayoutAnimationController.prototype.setAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOrder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setOrder(int)}
 **/
android.view.animation.LayoutAnimationController.prototype.setOrder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOrder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimationForView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getAnimationForView(android.view.View)}
 **/
android.view.animation.LayoutAnimationController.prototype.getAnimationForView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimationForView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransformedIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getTransformedIndex(android.view.animation.LayoutAnimationController$AnimationParameters)}
 **/
android.view.animation.LayoutAnimationController.prototype.getTransformedIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformedIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getAnimation()}
 **/
android.view.animation.LayoutAnimationController.prototype.getAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOrder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getOrder()}
 **/
android.view.animation.LayoutAnimationController.prototype.getOrder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOrder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDelayForView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getDelayForView(android.view.View)}
 **/
android.view.animation.LayoutAnimationController.prototype.getDelayForView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDelayForView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getInterpolator()}
 **/
android.view.animation.LayoutAnimationController.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setDelay(float)}
 **/
android.view.animation.LayoutAnimationController.prototype.setDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new android.view.animation.LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.animation.LayoutAnimationController;
