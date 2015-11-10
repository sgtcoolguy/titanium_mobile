/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.LoaderManager
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.LoaderManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html}
 **/
android.app.LoaderManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.LoaderManager') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.LoaderManager. Create a subclass using android.app.LoaderManager.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.LoaderManager.prototype = Object.create(SuperClass.prototype);
android.app.LoaderManager.prototype.constructor = android.app.LoaderManager;

android.app.LoaderManager.className = "android.app.LoaderManager";
android.app.LoaderManager.prototype.className = "android.app.LoaderManager";

// class property
Object.defineProperty(android.app.LoaderManager, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.LoaderManager',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.LoaderManager.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.LoaderManager',
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
	whatever.prototype = Object.create(android.app.LoaderManager.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function enableDebugLogging
 * @static
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#enableDebugLogging(boolean)}
 **/
android.app.LoaderManager.enableDebugLogging = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'enableDebugLogging',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function restartLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#restartLoader(int, android.os.Bundle, android.app.LoaderManager$LoaderCallbacks)}
 **/
android.app.LoaderManager.prototype.restartLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restartLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#getLoader(int)}
 **/
android.app.LoaderManager.prototype.getLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
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
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#dump(java.lang.String, java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
android.app.LoaderManager.prototype.dump = function() {
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
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#initLoader(int, android.os.Bundle, android.app.LoaderManager$LoaderCallbacks)}
 **/
android.app.LoaderManager.prototype.initLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function destroyLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#destroyLoader(int)}
 **/
android.app.LoaderManager.prototype.destroyLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'destroyLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new android.app.LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.LoaderManager;
