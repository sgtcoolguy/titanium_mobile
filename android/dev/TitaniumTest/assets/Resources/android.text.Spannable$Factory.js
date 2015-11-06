/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.text.Spannable.Factory
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.text = global.android.text || {};
global.android.text.Spannable = global.android.text.Spannable || {};

/**
 * @class android.text.Spannable.Factory
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/text/Spannable.Factory.html}
 **/
android.text.Spannable.Factory = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.text.Spannable$Factory') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.text.Spannable$Factory',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.text.Spannable.Factory.prototype = Object.create(SuperClass.prototype);
android.text.Spannable.Factory.prototype.constructor = android.text.Spannable.Factory;

android.text.Spannable.Factory.className = "android.text.Spannable$Factory";
android.text.Spannable.Factory.prototype.className = "android.text.Spannable$Factory";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getInstance
 * @static
 * @see {@link http://developer.android.com/reference/android/text/Spannable.Factory.html#getInstance()}
 **/
android.text.Spannable.Factory.getInstance = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getInstance',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Spannable$Factory') {
			return new android.text.Spannable.Factory(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function newSpannable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Spannable.Factory.html#newSpannable(java.lang.CharSequence)}
 **/
android.text.Spannable.Factory.prototype.newSpannable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newSpannable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Spannable$Factory') {
			return new android.text.Spannable.Factory(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.text.Spannable.Factory;
