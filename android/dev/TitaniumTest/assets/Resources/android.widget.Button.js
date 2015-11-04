/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.Button
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.Button
 * @extends android.widget.TextView  * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/Button.html}
 **/
android.widget.Button = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.Button') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.Button',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.widget.TextView');
android.widget.Button.prototype = Object.create(SuperClass.prototype);
android.widget.Button.prototype.constructor = android.widget.Button;

android.widget.Button.className = "android.widget.Button";
android.widget.Button.prototype.className = "android.widget.Button";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getAccessibilityClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Button.html#getAccessibilityClassName()}
 **/
android.widget.Button.prototype.getAccessibilityClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Button') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.Button;
