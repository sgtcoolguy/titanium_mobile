/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.WindowId.FocusObserver
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.WindowId = global.android.view.WindowId || {};

/**
 * @class android.view.WindowId.FocusObserver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/WindowId.FocusObserver.html}
 **/
android.view.WindowId.FocusObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.WindowId$FocusObserver') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.WindowId$FocusObserver. Create a subclass using android.view.WindowId.FocusObserver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.WindowId.FocusObserver.prototype = Object.create(SuperClass.prototype);
android.view.WindowId.FocusObserver.prototype.constructor = android.view.WindowId.FocusObserver;

android.view.WindowId.FocusObserver.className = "android.view.WindowId$FocusObserver";
android.view.WindowId.FocusObserver.prototype.className = "android.view.WindowId$FocusObserver";

// class property
Object.defineProperty(android.view.WindowId.FocusObserver, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.WindowId$FocusObserver',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.WindowId.FocusObserver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.WindowId$FocusObserver',
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
	whatever.prototype = Object.create(android.view.WindowId.FocusObserver.prototype);
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
 * @function onFocusGained
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowId.FocusObserver.html#onFocusGained(android.view.WindowId)}
 **/
android.view.WindowId.FocusObserver.prototype.onFocusGained = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFocusGained',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowId$FocusObserver') {
			return new android.view.WindowId.FocusObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFocusLost
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowId.FocusObserver.html#onFocusLost(android.view.WindowId)}
 **/
android.view.WindowId.FocusObserver.prototype.onFocusLost = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFocusLost',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowId$FocusObserver') {
			return new android.view.WindowId.FocusObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.WindowId.FocusObserver;
