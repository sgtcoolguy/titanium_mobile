/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.Transition.EpicenterCallback
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};
global.android.transition.Transition = global.android.transition.Transition || {};

/**
 * @class android.transition.Transition.EpicenterCallback
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/Transition.EpicenterCallback.html}
 **/
android.transition.Transition.EpicenterCallback = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.transition.Transition$EpicenterCallback') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.transition.Transition$EpicenterCallback. Create a subclass using android.transition.Transition.EpicenterCallback.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.Transition.EpicenterCallback.prototype = Object.create(SuperClass.prototype);
android.transition.Transition.EpicenterCallback.prototype.constructor = android.transition.Transition.EpicenterCallback;

android.transition.Transition.EpicenterCallback.className = "android.transition.Transition$EpicenterCallback";
android.transition.Transition.EpicenterCallback.prototype.className = "android.transition.Transition$EpicenterCallback";

// class property
Object.defineProperty(android.transition.Transition.EpicenterCallback, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.transition.Transition$EpicenterCallback',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.transition.Transition.EpicenterCallback.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.transition.Transition$EpicenterCallback',
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
	whatever.prototype = Object.create(android.transition.Transition.EpicenterCallback.prototype);
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
 * @function onGetEpicenter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.EpicenterCallback.html#onGetEpicenter(android.transition.Transition)}
 **/
android.transition.Transition.EpicenterCallback.prototype.onGetEpicenter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onGetEpicenter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition$EpicenterCallback') {
			return new android.transition.Transition.EpicenterCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.Transition.EpicenterCallback;
