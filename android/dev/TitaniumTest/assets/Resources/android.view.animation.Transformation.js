/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.Transformation
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.animation = global.android.view.animation || {};

/**
 * @class android.view.animation.Transformation
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html}
 **/
android.view.animation.Transformation = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.animation.Transformation') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.animation.Transformation',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.animation.Transformation.prototype = Object.create(SuperClass.prototype);
android.view.animation.Transformation.prototype.constructor = android.view.animation.Transformation;

android.view.animation.Transformation.className = "android.view.animation.Transformation";
android.view.animation.Transformation.prototype.className = "android.view.animation.Transformation";

// class property
Object.defineProperty(android.view.animation.Transformation, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.animation.Transformation',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.animation.Transformation.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.animation.Transformation',
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
	whatever.prototype = Object.create(android.view.animation.Transformation.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#TYPE_BOTH}
 */
android.view.animation.Transformation.TYPE_BOTH = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#TYPE_MATRIX}
 */
android.view.animation.Transformation.TYPE_MATRIX = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#TYPE_IDENTITY}
 */
android.view.animation.Transformation.TYPE_IDENTITY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#TYPE_ALPHA}
 */
android.view.animation.Transformation.TYPE_ALPHA = 1;

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/animation/Transformation.html#mAlpha
Object.defineProperty(android.view.animation.Transformation.prototype, 'mAlpha', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mAlpha'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.Transformation') {
				return new android.view.animation.Transformation(result);
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
			field: 'mAlpha',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/Transformation.html#mMatrix
Object.defineProperty(android.view.animation.Transformation.prototype, 'mMatrix', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mMatrix'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.Transformation') {
				return new android.view.animation.Transformation(result);
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
			field: 'mMatrix',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/Transformation.html#mTransformationType
Object.defineProperty(android.view.animation.Transformation.prototype, 'mTransformationType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'mTransformationType'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.Transformation') {
				return new android.view.animation.Transformation(result);
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
			field: 'mTransformationType',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toShortString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#toShortString()}
 **/
android.view.animation.Transformation.prototype.toShortString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toShortString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function set
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#set(android.view.animation.Transformation)}
 **/
android.view.animation.Transformation.prototype.set = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'set',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#getMatrix()}
 **/
android.view.animation.Transformation.prototype.getMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compose
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#compose(android.view.animation.Transformation)}
 **/
android.view.animation.Transformation.prototype.compose = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compose',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransformationType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#setTransformationType(int)}
 **/
android.view.animation.Transformation.prototype.setTransformationType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransformationType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#clear()}
 **/
android.view.animation.Transformation.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#setAlpha(float)}
 **/
android.view.animation.Transformation.prototype.setAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#toString()}
 **/
android.view.animation.Transformation.prototype.toString = function() {
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
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransformationType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#getTransformationType()}
 **/
android.view.animation.Transformation.prototype.getTransformationType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformationType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#getAlpha()}
 **/
android.view.animation.Transformation.prototype.getAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new android.view.animation.Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.animation.Transformation;
