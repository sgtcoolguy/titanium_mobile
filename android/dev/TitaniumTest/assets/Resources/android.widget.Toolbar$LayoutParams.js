/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.Toolbar.LayoutParams
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};
global.android.widget.Toolbar = global.android.widget.Toolbar || {};

/**
 * @class android.widget.Toolbar.LayoutParams
 * @extends android.app.ActionBar.LayoutParams 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.LayoutParams.html}
 **/
android.widget.Toolbar.LayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.Toolbar$LayoutParams') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.Toolbar$LayoutParams',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.app.ActionBar$LayoutParams');
android.widget.Toolbar.LayoutParams.prototype = Object.create(SuperClass.prototype);
android.widget.Toolbar.LayoutParams.prototype.constructor = android.widget.Toolbar.LayoutParams;

android.widget.Toolbar.LayoutParams.className = "android.widget.Toolbar$LayoutParams";
android.widget.Toolbar.LayoutParams.prototype.className = "android.widget.Toolbar$LayoutParams";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = android.widget.Toolbar.LayoutParams;
