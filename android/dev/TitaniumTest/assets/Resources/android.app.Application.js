/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.Application
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.Application
 * @extends android.content.ContextWrapper 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/Application.html}
 **/
android.app.Application = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.Application') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.Application',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.ContextWrapper');
android.app.Application.prototype = Object.create(SuperClass.prototype);
android.app.Application.prototype.constructor = android.app.Application;

android.app.Application.className = "android.app.Application";
android.app.Application.prototype.className = "android.app.Application";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onCreate()}
 **/
android.app.Application.prototype.onCreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterComponentCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#unregisterComponentCallbacks(android.content.ComponentCallbacks)}
 **/
android.app.Application.prototype.unregisterComponentCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterComponentCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerActivityLifecycleCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#registerActivityLifecycleCallbacks(android.app.Application$ActivityLifecycleCallbacks)}
 **/
android.app.Application.prototype.registerActivityLifecycleCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerActivityLifecycleCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerOnProvideAssistDataListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#registerOnProvideAssistDataListener(android.app.Application$OnProvideAssistDataListener)}
 **/
android.app.Application.prototype.registerOnProvideAssistDataListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerOnProvideAssistDataListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTerminate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onTerminate()}
 **/
android.app.Application.prototype.onTerminate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTerminate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterActivityLifecycleCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#unregisterActivityLifecycleCallbacks(android.app.Application$ActivityLifecycleCallbacks)}
 **/
android.app.Application.prototype.unregisterActivityLifecycleCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterActivityLifecycleCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTrimMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onTrimMemory(int)}
 **/
android.app.Application.prototype.onTrimMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTrimMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
android.app.Application.prototype.onConfigurationChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onConfigurationChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterOnProvideAssistDataListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#unregisterOnProvideAssistDataListener(android.app.Application$OnProvideAssistDataListener)}
 **/
android.app.Application.prototype.unregisterOnProvideAssistDataListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterOnProvideAssistDataListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLowMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onLowMemory()}
 **/
android.app.Application.prototype.onLowMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLowMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerComponentCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#registerComponentCallbacks(android.content.ComponentCallbacks)}
 **/
android.app.Application.prototype.registerComponentCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerComponentCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new android.app.Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.Application;
