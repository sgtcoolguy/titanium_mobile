/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.ActionBar.LayoutParams
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};
global.android.app.ActionBar = global.android.app.ActionBar || {};

/**
 * @class android.app.ActionBar.LayoutParams
 * @extends android.view.ViewGroup.MarginLayoutParams 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.LayoutParams.html}
 **/
android.app.ActionBar.LayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.ActionBar$LayoutParams') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.ActionBar$LayoutParams',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup$MarginLayoutParams');
android.app.ActionBar.LayoutParams.prototype = Object.create(SuperClass.prototype);
android.app.ActionBar.LayoutParams.prototype.constructor = android.app.ActionBar.LayoutParams;

android.app.ActionBar.LayoutParams.className = "android.app.ActionBar$LayoutParams";
android.app.ActionBar.LayoutParams.prototype.className = "android.app.ActionBar$LayoutParams";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/app/ActionBar.LayoutParams.html#gravity
Object.defineProperty(android.app.ActionBar.LayoutParams.prototype, 'gravity', {
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
			if (result.apiName === 'android.app.ActionBar$LayoutParams') {
				return new android.app.ActionBar.LayoutParams(result);
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
module.exports = android.app.ActionBar.LayoutParams;
