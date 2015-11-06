/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.AbsListView.LayoutParams
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};
global.android.widget.AbsListView = global.android.widget.AbsListView || {};

/**
 * @class android.widget.AbsListView.LayoutParams
 * @extends android.view.ViewGroup.LayoutParams 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.LayoutParams.html}
 **/
android.widget.AbsListView.LayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.AbsListView$LayoutParams') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.AbsListView$LayoutParams',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup$LayoutParams');
android.widget.AbsListView.LayoutParams.prototype = Object.create(SuperClass.prototype);
android.widget.AbsListView.LayoutParams.prototype.constructor = android.widget.AbsListView.LayoutParams;

android.widget.AbsListView.LayoutParams.className = "android.widget.AbsListView$LayoutParams";
android.widget.AbsListView.LayoutParams.prototype.className = "android.widget.AbsListView$LayoutParams";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = android.widget.AbsListView.LayoutParams;
