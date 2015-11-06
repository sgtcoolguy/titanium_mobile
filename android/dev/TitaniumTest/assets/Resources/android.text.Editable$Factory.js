/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.text.Editable.Factory
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.text = global.android.text || {};
global.android.text.Editable = global.android.text.Editable || {};

/**
 * @class android.text.Editable.Factory
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/text/Editable.Factory.html}
 **/
android.text.Editable.Factory = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.text.Editable$Factory') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.text.Editable$Factory',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.text.Editable.Factory.prototype = Object.create(SuperClass.prototype);
android.text.Editable.Factory.prototype.constructor = android.text.Editable.Factory;

android.text.Editable.Factory.className = "android.text.Editable$Factory";
android.text.Editable.Factory.prototype.className = "android.text.Editable$Factory";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getInstance
 * @static
 * @see {@link http://developer.android.com/reference/android/text/Editable.Factory.html#getInstance()}
 **/
android.text.Editable.Factory.getInstance = function() {
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
		if (result.apiName === 'android.text.Editable$Factory') {
			return new android.text.Editable.Factory(result);
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
 * @function newEditable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Editable.Factory.html#newEditable(java.lang.CharSequence)}
 **/
android.text.Editable.Factory.prototype.newEditable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newEditable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Editable$Factory') {
			return new android.text.Editable.Factory(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.text.Editable.Factory;
