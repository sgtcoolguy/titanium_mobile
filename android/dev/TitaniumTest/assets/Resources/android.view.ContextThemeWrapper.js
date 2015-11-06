/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ContextThemeWrapper
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ContextThemeWrapper
 * @extends android.content.ContextWrapper 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html}
 **/
android.view.ContextThemeWrapper = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.ContextThemeWrapper') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.ContextThemeWrapper',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.ContextWrapper');
android.view.ContextThemeWrapper.prototype = Object.create(SuperClass.prototype);
android.view.ContextThemeWrapper.prototype.constructor = android.view.ContextThemeWrapper;

android.view.ContextThemeWrapper.className = "android.view.ContextThemeWrapper";
android.view.ContextThemeWrapper.prototype.className = "android.view.ContextThemeWrapper";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#getTheme()}
 **/
android.view.ContextThemeWrapper.prototype.getTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new android.view.ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#getSystemService(java.lang.String)}
 **/
android.view.ContextThemeWrapper.prototype.getSystemService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new android.view.ContextThemeWrapper(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#getResources()}
 **/
android.view.ContextThemeWrapper.prototype.getResources = function() {
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
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new android.view.ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#setTheme(int)}
 **/
android.view.ContextThemeWrapper.prototype.setTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new android.view.ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachBaseContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#attachBaseContext(android.content.Context)}
 **/
android.view.ContextThemeWrapper.prototype.attachBaseContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachBaseContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new android.view.ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onApplyThemeResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#onApplyThemeResource(android.content.res.Resources$Theme, int, boolean)}
 **/
android.view.ContextThemeWrapper.prototype.onApplyThemeResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onApplyThemeResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new android.view.ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyOverrideConfiguration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#applyOverrideConfiguration(android.content.res.Configuration)}
 **/
android.view.ContextThemeWrapper.prototype.applyOverrideConfiguration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyOverrideConfiguration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new android.view.ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ContextThemeWrapper;
