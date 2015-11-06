/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.View.DragShadowBuilder
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.View = global.android.view.View || {};

/**
 * @class android.view.View.DragShadowBuilder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/View.DragShadowBuilder.html}
 **/
android.view.View.DragShadowBuilder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.View$DragShadowBuilder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.View$DragShadowBuilder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.View.DragShadowBuilder.prototype = Object.create(SuperClass.prototype);
android.view.View.DragShadowBuilder.prototype.constructor = android.view.View.DragShadowBuilder;

android.view.View.DragShadowBuilder.className = "android.view.View$DragShadowBuilder";
android.view.View.DragShadowBuilder.prototype.className = "android.view.View$DragShadowBuilder";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onDrawShadow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.DragShadowBuilder.html#onDrawShadow(android.graphics.Canvas)}
 **/
android.view.View.DragShadowBuilder.prototype.onDrawShadow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDrawShadow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$DragShadowBuilder') {
			return new android.view.View.DragShadowBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProvideShadowMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.DragShadowBuilder.html#onProvideShadowMetrics(android.graphics.Point, android.graphics.Point)}
 **/
android.view.View.DragShadowBuilder.prototype.onProvideShadowMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideShadowMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$DragShadowBuilder') {
			return new android.view.View.DragShadowBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.DragShadowBuilder.html#getView()}
 **/
android.view.View.DragShadowBuilder.prototype.getView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$DragShadowBuilder') {
			return new android.view.View.DragShadowBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.View.DragShadowBuilder;
