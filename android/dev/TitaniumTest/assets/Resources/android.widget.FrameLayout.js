/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.FrameLayout
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.FrameLayout
 * @extends android.view.ViewGroup 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html}
 **/
android.widget.FrameLayout = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.widget.FrameLayout') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.FrameLayout',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup');
android.widget.FrameLayout.prototype = Object.create(SuperClass.prototype);
android.widget.FrameLayout.prototype.constructor = android.widget.FrameLayout;

android.widget.FrameLayout.className = "android.widget.FrameLayout";
android.widget.FrameLayout.prototype.className = "android.widget.FrameLayout";

// class property
Object.defineProperty(android.widget.FrameLayout, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.widget.FrameLayout',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.widget.FrameLayout.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.widget.FrameLayout',
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
	whatever.prototype = Object.create(android.widget.FrameLayout.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setForegroundGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#setForegroundGravity(int)}
 **/
android.widget.FrameLayout.prototype.setForegroundGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setForegroundGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#generateLayoutParams(android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#generateLayoutParams(android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#generateLayoutParams(android.util.AttributeSet)}
 **/
android.widget.FrameLayout.prototype.generateLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#onLayout(boolean, int, int, int, int)}
 **/
android.widget.FrameLayout.prototype.onLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMeasureAllChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#setMeasureAllChildren(boolean)}
 **/
android.widget.FrameLayout.prototype.setMeasureAllChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMeasureAllChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#checkLayoutParams(android.view.ViewGroup$LayoutParams)}
 **/
android.widget.FrameLayout.prototype.checkLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConsiderGoneChildrenWhenMeasuring
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#getConsiderGoneChildrenWhenMeasuring()}
 **/
android.widget.FrameLayout.prototype.getConsiderGoneChildrenWhenMeasuring = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConsiderGoneChildrenWhenMeasuring',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMeasureAllChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#getMeasureAllChildren()}
 **/
android.widget.FrameLayout.prototype.getMeasureAllChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMeasureAllChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMeasure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#onMeasure(int, int)}
 **/
android.widget.FrameLayout.prototype.onMeasure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMeasure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#getAccessibilityClassName()}
 **/
android.widget.FrameLayout.prototype.getAccessibilityClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateDefaultLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#generateDefaultLayoutParams()}
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#generateDefaultLayoutParams()}
 **/
android.widget.FrameLayout.prototype.generateDefaultLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateDefaultLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shouldDelayChildPressedState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.html#shouldDelayChildPressedState()}
 **/
android.widget.FrameLayout.prototype.shouldDelayChildPressedState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shouldDelayChildPressedState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.FrameLayout') {
			return new android.widget.FrameLayout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.FrameLayout;
