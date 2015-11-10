/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.VoiceInteractor
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.VoiceInteractor
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html}
 **/
android.app.VoiceInteractor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.VoiceInteractor') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.VoiceInteractor',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.VoiceInteractor.prototype = Object.create(SuperClass.prototype);
android.app.VoiceInteractor.prototype.constructor = android.app.VoiceInteractor;

android.app.VoiceInteractor.className = "android.app.VoiceInteractor";
android.app.VoiceInteractor.prototype.className = "android.app.VoiceInteractor";

// class property
Object.defineProperty(android.app.VoiceInteractor, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.VoiceInteractor',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function supportsCommands
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#supportsCommands(java.lang.String[])}
 **/
android.app.VoiceInteractor.prototype.supportsCommands = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportsCommands',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor') {
			return new android.app.VoiceInteractor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActiveRequest
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#getActiveRequest(java.lang.String)}
 **/
android.app.VoiceInteractor.prototype.getActiveRequest = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActiveRequest',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor') {
			return new android.app.VoiceInteractor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function submitRequest
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#submitRequest(android.app.VoiceInteractor$Request)}
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#submitRequest(android.app.VoiceInteractor$Request, java.lang.String)}
 **/
android.app.VoiceInteractor.prototype.submitRequest = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'submitRequest',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor') {
			return new android.app.VoiceInteractor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActiveRequests
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#getActiveRequests()}
 **/
android.app.VoiceInteractor.prototype.getActiveRequests = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActiveRequests',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor') {
			return new android.app.VoiceInteractor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.VoiceInteractor;
