/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageInstaller.SessionCallback
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};
global.android.content.pm.PackageInstaller = global.android.content.pm.PackageInstaller || {};

/**
 * @class android.content.pm.PackageInstaller.SessionCallback
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionCallback.html}
 **/
android.content.pm.PackageInstaller.SessionCallback = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.PackageInstaller$SessionCallback') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.PackageInstaller$SessionCallback',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.pm.PackageInstaller.SessionCallback.prototype = Object.create(SuperClass.prototype);
android.content.pm.PackageInstaller.SessionCallback.prototype.constructor = android.content.pm.PackageInstaller.SessionCallback;

android.content.pm.PackageInstaller.SessionCallback.className = "android.content.pm.PackageInstaller$SessionCallback";
android.content.pm.PackageInstaller.SessionCallback.prototype.className = "android.content.pm.PackageInstaller$SessionCallback";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onActiveChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionCallback.html#onActiveChanged(int, boolean)}
 **/
android.content.pm.PackageInstaller.SessionCallback.prototype.onActiveChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActiveChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionCallback') {
			return new android.content.pm.PackageInstaller.SessionCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFinished
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionCallback.html#onFinished(int, boolean)}
 **/
android.content.pm.PackageInstaller.SessionCallback.prototype.onFinished = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFinished',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionCallback') {
			return new android.content.pm.PackageInstaller.SessionCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onBadgingChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionCallback.html#onBadgingChanged(int)}
 **/
android.content.pm.PackageInstaller.SessionCallback.prototype.onBadgingChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onBadgingChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionCallback') {
			return new android.content.pm.PackageInstaller.SessionCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProgressChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionCallback.html#onProgressChanged(int, float)}
 **/
android.content.pm.PackageInstaller.SessionCallback.prototype.onProgressChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProgressChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionCallback') {
			return new android.content.pm.PackageInstaller.SessionCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionCallback.html#onCreated(int)}
 **/
android.content.pm.PackageInstaller.SessionCallback.prototype.onCreated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionCallback') {
			return new android.content.pm.PackageInstaller.SessionCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.PackageInstaller.SessionCallback;
