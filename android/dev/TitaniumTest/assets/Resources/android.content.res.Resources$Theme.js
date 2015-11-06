/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.Resources.Theme
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.res = global.android.content.res || {};
global.android.content.res.Resources = global.android.content.res.Resources || {};

/**
 * @class android.content.res.Resources.Theme
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html}
 **/
android.content.res.Resources.Theme = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.res.Resources$Theme') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.res.Resources$Theme',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.res.Resources.Theme.prototype = Object.create(SuperClass.prototype);
android.content.res.Resources.Theme.prototype.constructor = android.content.res.Resources.Theme;

android.content.res.Resources.Theme.className = "android.content.res.Resources$Theme";
android.content.res.Resources.Theme.prototype.className = "android.content.res.Resources$Theme";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/content/res/Resources.Theme.html#this$0
Object.defineProperty(android.content.res.Resources.Theme.prototype, 'this$0', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'this$0'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Resources$Theme') {
				return new android.content.res.Resources.Theme(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function obtainStyledAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#obtainStyledAttributes(int[])}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#obtainStyledAttributes(int, int[])}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#obtainStyledAttributes(android.util.AttributeSet, int[], int, int)}
 **/
android.content.res.Resources.Theme.prototype.obtainStyledAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'obtainStyledAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#getDrawable(int)}
 **/
android.content.res.Resources.Theme.prototype.getDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#getResources()}
 **/
android.content.res.Resources.Theme.prototype.getResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#resolveAttribute(int, android.util.TypedValue, boolean)}
 **/
android.content.res.Resources.Theme.prototype.resolveAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#getChangingConfigurations()}
 **/
android.content.res.Resources.Theme.prototype.getChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#applyStyle(int, boolean)}
 **/
android.content.res.Resources.Theme.prototype.applyStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#setTo(android.content.res.Resources$Theme)}
 **/
android.content.res.Resources.Theme.prototype.setTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#finalize()}
 **/
android.content.res.Resources.Theme.prototype.finalize = function() {
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
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#dump(int, java.lang.String, java.lang.String)}
 **/
android.content.res.Resources.Theme.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new android.content.res.Resources.Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.res.Resources.Theme;
