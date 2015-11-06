/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Canvas.VertexMode
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};
global.android.graphics.Canvas = global.android.graphics.Canvas || {};

/**
 * @class android.graphics.Canvas.VertexMode
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html}
 **/
android.graphics.Canvas.VertexMode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Canvas$VertexMode') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Canvas$VertexMode',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
android.graphics.Canvas.VertexMode.prototype = Object.create(SuperClass.prototype);
android.graphics.Canvas.VertexMode.prototype.constructor = android.graphics.Canvas.VertexMode;

android.graphics.Canvas.VertexMode.className = "android.graphics.Canvas$VertexMode";
android.graphics.Canvas.VertexMode.prototype.className = "android.graphics.Canvas$VertexMode";

// Constants

// Static fields
// http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#TRIANGLE_FAN
Object.defineProperty(android.graphics.Canvas.VertexMode, 'TRIANGLE_FAN', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'TRIANGLE_FAN'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Canvas$VertexMode') {
				return new android.graphics.Canvas.VertexMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#TRIANGLES
Object.defineProperty(android.graphics.Canvas.VertexMode, 'TRIANGLES', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'TRIANGLES'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Canvas$VertexMode') {
				return new android.graphics.Canvas.VertexMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#TRIANGLE_STRIP
Object.defineProperty(android.graphics.Canvas.VertexMode, 'TRIANGLE_STRIP', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'TRIANGLE_STRIP'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Canvas$VertexMode') {
				return new android.graphics.Canvas.VertexMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#valueOf(java.lang.String)}
 **/
android.graphics.Canvas.VertexMode.valueOf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas$VertexMode') {
			return new android.graphics.Canvas.VertexMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#values()}
 **/
android.graphics.Canvas.VertexMode.values = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Canvas$VertexMode') {
			return new android.graphics.Canvas.VertexMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = android.graphics.Canvas.VertexMode;
