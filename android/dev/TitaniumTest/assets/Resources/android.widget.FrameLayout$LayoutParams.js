/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.FrameLayout.LayoutParams
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};
global.android.widget.FrameLayout = global.android.widget.FrameLayout || {};

/**
 * @class android.widget.FrameLayout.LayoutParams
 * @extends android.view.ViewGroup.MarginLayoutParams 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/FrameLayout.LayoutParams.html}
 **/
android.widget.FrameLayout.LayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.widget.FrameLayout$LayoutParams') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.FrameLayout$LayoutParams',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup$MarginLayoutParams');
android.widget.FrameLayout.LayoutParams.prototype = Object.create(SuperClass.prototype);
android.widget.FrameLayout.LayoutParams.prototype.constructor = android.widget.FrameLayout.LayoutParams;

android.widget.FrameLayout.LayoutParams.className = "android.widget.FrameLayout$LayoutParams";
android.widget.FrameLayout.LayoutParams.prototype.className = "android.widget.FrameLayout$LayoutParams";

// class property
Object.defineProperty(android.widget.FrameLayout.LayoutParams, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.widget.FrameLayout$LayoutParams',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.widget.FrameLayout.LayoutParams.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.widget.FrameLayout$LayoutParams',
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
	whatever.prototype = Object.create(android.widget.FrameLayout.LayoutParams.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/widget/FrameLayout.LayoutParams.html#gravity
Object.defineProperty(android.widget.FrameLayout.LayoutParams.prototype, 'gravity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'gravity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.widget.FrameLayout$LayoutParams') {
				return new android.widget.FrameLayout.LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'gravity',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = android.widget.FrameLayout.LayoutParams;
