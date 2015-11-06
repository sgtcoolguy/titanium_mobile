/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.text.Layout.Directions
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.text = global.android.text || {};
global.android.text.Layout = global.android.text.Layout || {};

/**
 * @class android.text.Layout.Directions
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/text/Layout.Directions.html}
 **/
android.text.Layout.Directions = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.text.Layout$Directions') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.text.Layout$Directions',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.text.Layout.Directions.prototype = Object.create(SuperClass.prototype);
android.text.Layout.Directions.prototype.constructor = android.text.Layout.Directions;

android.text.Layout.Directions.className = "android.text.Layout$Directions";
android.text.Layout.Directions.prototype.className = "android.text.Layout$Directions";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = android.text.Layout.Directions;
