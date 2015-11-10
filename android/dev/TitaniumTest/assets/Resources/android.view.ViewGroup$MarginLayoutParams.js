/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewGroup.MarginLayoutParams
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.ViewGroup = global.android.view.ViewGroup || {};

/**
 * @class android.view.ViewGroup.MarginLayoutParams
 * @extends android.view.ViewGroup.LayoutParams 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html}
 **/
android.view.ViewGroup.MarginLayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.ViewGroup$MarginLayoutParams') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.ViewGroup$MarginLayoutParams',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup$LayoutParams');
android.view.ViewGroup.MarginLayoutParams.prototype = Object.create(SuperClass.prototype);
android.view.ViewGroup.MarginLayoutParams.prototype.constructor = android.view.ViewGroup.MarginLayoutParams;

android.view.ViewGroup.MarginLayoutParams.className = "android.view.ViewGroup$MarginLayoutParams";
android.view.ViewGroup.MarginLayoutParams.prototype.className = "android.view.ViewGroup$MarginLayoutParams";

// class property
Object.defineProperty(android.view.ViewGroup.MarginLayoutParams, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.ViewGroup$MarginLayoutParams',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.ViewGroup.MarginLayoutParams.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.ViewGroup$MarginLayoutParams',
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
	whatever.prototype = Object.create(android.view.ViewGroup.MarginLayoutParams.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#leftMargin
Object.defineProperty(android.view.ViewGroup.MarginLayoutParams.prototype, 'leftMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'leftMargin'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
				return new android.view.ViewGroup.MarginLayoutParams(result);
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
			field: 'leftMargin',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#topMargin
Object.defineProperty(android.view.ViewGroup.MarginLayoutParams.prototype, 'topMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'topMargin'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
				return new android.view.ViewGroup.MarginLayoutParams(result);
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
			field: 'topMargin',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#rightMargin
Object.defineProperty(android.view.ViewGroup.MarginLayoutParams.prototype, 'rightMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'rightMargin'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
				return new android.view.ViewGroup.MarginLayoutParams(result);
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
			field: 'rightMargin',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#bottomMargin
Object.defineProperty(android.view.ViewGroup.MarginLayoutParams.prototype, 'bottomMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'bottomMargin'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
				return new android.view.ViewGroup.MarginLayoutParams(result);
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
			field: 'bottomMargin',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isMarginRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#isMarginRelative()}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.isMarginRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMarginRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#getLayoutDirection()}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.getLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMargins
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#setMargins(int, int, int, int)}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.setMargins = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMargins',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMarginEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#setMarginEnd(int)}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.setMarginEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMarginEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMarginEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#getMarginEnd()}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.getMarginEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMarginEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#setLayoutDirection(int)}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.setLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#resolveLayoutDirection(int)}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.resolveLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMarginStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#getMarginStart()}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.getMarginStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMarginStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMarginStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#setMarginStart(int)}
 **/
android.view.ViewGroup.MarginLayoutParams.prototype.setMarginStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMarginStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new android.view.ViewGroup.MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ViewGroup.MarginLayoutParams;
