/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.Scroller
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.Scroller
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html}
 **/
android.widget.Scroller = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.Scroller') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.Scroller',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.widget.Scroller.prototype = Object.create(SuperClass.prototype);
android.widget.Scroller.prototype.constructor = android.widget.Scroller;

android.widget.Scroller.className = "android.widget.Scroller";
android.widget.Scroller.prototype.className = "android.widget.Scroller";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function abortAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#abortAnimation()}
 **/
android.widget.Scroller.prototype.abortAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'abortAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function extendDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#extendDuration(int)}
 **/
android.widget.Scroller.prototype.extendDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'extendDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function timePassed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#timePassed()}
 **/
android.widget.Scroller.prototype.timePassed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'timePassed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#getStartX()}
 **/
android.widget.Scroller.prototype.getStartX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#getStartY()}
 **/
android.widget.Scroller.prototype.getStartY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFinished
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#isFinished()}
 **/
android.widget.Scroller.prototype.isFinished = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFinished',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrVelocity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#getCurrVelocity()}
 **/
android.widget.Scroller.prototype.getCurrVelocity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrVelocity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fling
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#fling(int, int, int, int, int, int, int, int)}
 **/
android.widget.Scroller.prototype.fling = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fling',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFinalY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#setFinalY(int)}
 **/
android.widget.Scroller.prototype.setFinalY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFinalY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function forceFinished
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#forceFinished(boolean)}
 **/
android.widget.Scroller.prototype.forceFinished = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'forceFinished',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFinalX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#setFinalX(int)}
 **/
android.widget.Scroller.prototype.setFinalX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFinalX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#getDuration()}
 **/
android.widget.Scroller.prototype.getDuration = function() {
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
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#getCurrY()}
 **/
android.widget.Scroller.prototype.getCurrY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#getCurrX()}
 **/
android.widget.Scroller.prototype.getCurrX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFinalX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#getFinalX()}
 **/
android.widget.Scroller.prototype.getFinalX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFinalX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFinalY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#getFinalY()}
 **/
android.widget.Scroller.prototype.getFinalY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFinalY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#startScroll(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#startScroll(int, int, int, int, int)}
 **/
android.widget.Scroller.prototype.startScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFriction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#setFriction(float)}
 **/
android.widget.Scroller.prototype.setFriction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFriction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeScrollOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Scroller.html#computeScrollOffset()}
 **/
android.widget.Scroller.prototype.computeScrollOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeScrollOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Scroller') {
			return new android.widget.Scroller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.Scroller;
