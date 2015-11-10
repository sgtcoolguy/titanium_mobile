/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.Transition
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};

/**
 * @class android.transition.Transition
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html}
 **/
android.transition.Transition = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.transition.Transition') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.transition.Transition. Create a subclass using android.transition.Transition.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.Transition.prototype = Object.create(SuperClass.prototype);
android.transition.Transition.prototype.constructor = android.transition.Transition;

android.transition.Transition.className = "android.transition.Transition";
android.transition.Transition.prototype.className = "android.transition.Transition";

// class property
Object.defineProperty(android.transition.Transition, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.transition.Transition',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.transition.Transition.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.transition.Transition',
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
	whatever.prototype = Object.create(android.transition.Transition.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#MATCH_NAME}
 */
android.transition.Transition.MATCH_NAME = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#MATCH_INSTANCE}
 */
android.transition.Transition.MATCH_INSTANCE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#MATCH_ITEM_ID}
 */
android.transition.Transition.MATCH_ITEM_ID = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#MATCH_ID}
 */
android.transition.Transition.MATCH_ID = 3;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setDuration(long)}
 **/
android.transition.Transition.prototype.setDuration = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPathMotion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setPathMotion(android.transition.PathMotion)}
 **/
android.transition.Transition.prototype.setPathMotion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPathMotion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEpicenterCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setEpicenterCallback(android.transition.Transition$EpicenterCallback)}
 **/
android.transition.Transition.prototype.setEpicenterCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEpicenterCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPropagation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getPropagation()}
 **/
android.transition.Transition.prototype.getPropagation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPropagation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getName()}
 **/
android.transition.Transition.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTransitionValues(android.view.View, boolean)}
 **/
android.transition.Transition.prototype.getTransitionValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getStartDelay()}
 **/
android.transition.Transition.prototype.getStartDelay = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTargetTypes()}
 **/
android.transition.Transition.prototype.getTargetTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTransitionRequired
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#isTransitionRequired(android.transition.TransitionValues, android.transition.TransitionValues)}
 **/
android.transition.Transition.prototype.isTransitionRequired = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTransitionRequired',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTargets()}
 **/
android.transition.Transition.prototype.getTargets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function excludeTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeTarget(int, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeTarget(java.lang.String, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeTarget(android.view.View, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeTarget(java.lang.Class, boolean)}
 **/
android.transition.Transition.prototype.excludeTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'excludeTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getDuration()}
 **/
android.transition.Transition.prototype.getDuration = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#createAnimator(android.view.ViewGroup, android.transition.TransitionValues, android.transition.TransitionValues)}
 **/
android.transition.Transition.prototype.createAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function captureEndValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#captureEndValues(android.transition.TransitionValues)}
 **/
android.transition.Transition.prototype.captureEndValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'captureEndValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getInterpolator()}
 **/
android.transition.Transition.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEpicenterCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getEpicenterCallback()}
 **/
android.transition.Transition.prototype.getEpicenterCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEpicenterCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setStartDelay(long)}
 **/
android.transition.Transition.prototype.setStartDelay = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTargetNames()}
 **/
android.transition.Transition.prototype.getTargetNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addListener(android.transition.Transition$TransitionListener)}
 **/
android.transition.Transition.prototype.addListener = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetIds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTargetIds()}
 **/
android.transition.Transition.prototype.getTargetIds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetIds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setInterpolator(android.animation.TimeInterpolator)}
 **/
android.transition.Transition.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addTarget(int)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addTarget(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addTarget(java.lang.Class)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addTarget(android.view.View)}
 **/
android.transition.Transition.prototype.addTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function excludeChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeChildren(int, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeChildren(android.view.View, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeChildren(java.lang.Class, boolean)}
 **/
android.transition.Transition.prototype.excludeChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'excludeChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPathMotion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getPathMotion()}
 **/
android.transition.Transition.prototype.getPathMotion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPathMotion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeListener(android.transition.Transition$TransitionListener)}
 **/
android.transition.Transition.prototype.removeListener = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEpicenter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getEpicenter()}
 **/
android.transition.Transition.prototype.getEpicenter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEpicenter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTransitionProperties()}
 **/
android.transition.Transition.prototype.getTransitionProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPropagation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setPropagation(android.transition.TransitionPropagation)}
 **/
android.transition.Transition.prototype.setPropagation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPropagation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function captureStartValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#captureStartValues(android.transition.TransitionValues)}
 **/
android.transition.Transition.prototype.captureStartValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'captureStartValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#clone()}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#clone()}
 **/
android.transition.Transition.prototype.clone = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#toString()}
 **/
android.transition.Transition.prototype.toString = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMatchOrder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setMatchOrder(int[])}
 **/
android.transition.Transition.prototype.setMatchOrder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMatchOrder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canRemoveViews
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#canRemoveViews()}
 **/
android.transition.Transition.prototype.canRemoveViews = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canRemoveViews',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeTarget(int)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeTarget(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeTarget(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeTarget(java.lang.Class)}
 **/
android.transition.Transition.prototype.removeTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new android.transition.Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.Transition;
