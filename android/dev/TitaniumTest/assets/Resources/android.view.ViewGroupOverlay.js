/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewGroupOverlay
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ViewGroupOverlay
 * @extends android.view.ViewOverlay 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewGroupOverlay.html}
 **/
android.view.ViewGroupOverlay = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.ViewGroupOverlay') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.ViewGroupOverlay',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewOverlay');
android.view.ViewGroupOverlay.prototype = Object.create(SuperClass.prototype);
android.view.ViewGroupOverlay.prototype.constructor = android.view.ViewGroupOverlay;

android.view.ViewGroupOverlay.className = "android.view.ViewGroupOverlay";
android.view.ViewGroupOverlay.prototype.className = "android.view.ViewGroupOverlay";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function add
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroupOverlay.html#add(android.view.View)}
 **/
android.view.ViewGroupOverlay.prototype.add = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'add',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroupOverlay') {
			return new android.view.ViewGroupOverlay(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remove
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroupOverlay.html#remove(android.view.View)}
 **/
android.view.ViewGroupOverlay.prototype.remove = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'remove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroupOverlay') {
			return new android.view.ViewGroupOverlay(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ViewGroupOverlay;
