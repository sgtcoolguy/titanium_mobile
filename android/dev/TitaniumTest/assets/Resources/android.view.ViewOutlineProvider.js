/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewOutlineProvider
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ViewOutlineProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewOutlineProvider.html}
 **/
android.view.ViewOutlineProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.ViewOutlineProvider') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.ViewOutlineProvider. Create a subclass using android.view.ViewOutlineProvider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.ViewOutlineProvider.prototype = Object.create(SuperClass.prototype);
android.view.ViewOutlineProvider.prototype.constructor = android.view.ViewOutlineProvider;

android.view.ViewOutlineProvider.className = "android.view.ViewOutlineProvider";
android.view.ViewOutlineProvider.prototype.className = "android.view.ViewOutlineProvider";

// class property
Object.defineProperty(android.view.ViewOutlineProvider, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.ViewOutlineProvider',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.ViewOutlineProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.ViewOutlineProvider',
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
	whatever.prototype = Object.create(android.view.ViewOutlineProvider.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/android/view/ViewOutlineProvider.html#BOUNDS
Object.defineProperty(android.view.ViewOutlineProvider, 'BOUNDS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'BOUNDS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewOutlineProvider') {
				return new android.view.ViewOutlineProvider(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewOutlineProvider.html#PADDED_BOUNDS
Object.defineProperty(android.view.ViewOutlineProvider, 'PADDED_BOUNDS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'PADDED_BOUNDS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewOutlineProvider') {
				return new android.view.ViewOutlineProvider(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewOutlineProvider.html#BACKGROUND
Object.defineProperty(android.view.ViewOutlineProvider, 'BACKGROUND', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'BACKGROUND'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewOutlineProvider') {
				return new android.view.ViewOutlineProvider(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getOutline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewOutlineProvider.html#getOutline(android.view.View, android.graphics.Outline)}
 **/
android.view.ViewOutlineProvider.prototype.getOutline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewOutlineProvider') {
			return new android.view.ViewOutlineProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ViewOutlineProvider;
