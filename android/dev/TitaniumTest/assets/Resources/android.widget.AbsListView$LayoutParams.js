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
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.widget.AbsListView$LayoutParams') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
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

// class property
Object.defineProperty(android.widget.AbsListView.LayoutParams, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.widget.AbsListView$LayoutParams',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.widget.AbsListView.LayoutParams.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.widget.AbsListView$LayoutParams',
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
	whatever.prototype = Object.create(android.widget.AbsListView.LayoutParams.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = android.widget.AbsListView.LayoutParams;
