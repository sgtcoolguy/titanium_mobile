/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.TransitionPropagation
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.transition = global.android.transition || {};

/**
 * @class android.transition.TransitionPropagation
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html}
 **/
android.transition.TransitionPropagation = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.transition.TransitionPropagation') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.transition.TransitionPropagation. Create a subclass using android.transition.TransitionPropagation.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.transition.TransitionPropagation.prototype = Object.create(SuperClass.prototype);
android.transition.TransitionPropagation.prototype.constructor = android.transition.TransitionPropagation;

android.transition.TransitionPropagation.className = "android.transition.TransitionPropagation";
android.transition.TransitionPropagation.prototype.className = "android.transition.TransitionPropagation";

// class property
Object.defineProperty(android.transition.TransitionPropagation, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.transition.TransitionPropagation',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.transition.TransitionPropagation.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.transition.TransitionPropagation',
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
	whatever.prototype = Object.create(android.transition.TransitionPropagation.prototype);
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
 * @function captureValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#captureValues(android.transition.TransitionValues)}
 **/
android.transition.TransitionPropagation.prototype.captureValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'captureValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new android.transition.TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPropagationProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#getPropagationProperties()}
 **/
android.transition.TransitionPropagation.prototype.getPropagationProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPropagationProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new android.transition.TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#getStartDelay(android.view.ViewGroup, android.transition.Transition, android.transition.TransitionValues, android.transition.TransitionValues)}
 **/
android.transition.TransitionPropagation.prototype.getStartDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new android.transition.TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.transition.TransitionPropagation;
