/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Picture
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Picture
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html}
 **/
android.graphics.Picture = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Picture') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Picture',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Picture.prototype = Object.create(SuperClass.prototype);
android.graphics.Picture.prototype.constructor = android.graphics.Picture;

android.graphics.Picture.className = "android.graphics.Picture";
android.graphics.Picture.prototype.className = "android.graphics.Picture";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function createFromStream
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html#createFromStream(java.io.InputStream)}
 **/
android.graphics.Picture.createFromStream = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createFromStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Picture') {
			return new android.graphics.Picture(result);
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
 * @function beginRecording
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html#beginRecording(int, int)}
 **/
android.graphics.Picture.prototype.beginRecording = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginRecording',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Picture') {
			return new android.graphics.Picture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html#getHeight()}
 **/
android.graphics.Picture.prototype.getHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Picture') {
			return new android.graphics.Picture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html#writeToStream(java.io.OutputStream)}
 **/
android.graphics.Picture.prototype.writeToStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Picture') {
			return new android.graphics.Picture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function endRecording
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html#endRecording()}
 **/
android.graphics.Picture.prototype.endRecording = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'endRecording',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Picture') {
			return new android.graphics.Picture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html#finalize()}
 **/
android.graphics.Picture.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Picture') {
			return new android.graphics.Picture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html#getWidth()}
 **/
android.graphics.Picture.prototype.getWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Picture') {
			return new android.graphics.Picture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function draw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Picture.html#draw(android.graphics.Canvas)}
 **/
android.graphics.Picture.prototype.draw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'draw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Picture') {
			return new android.graphics.Picture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Picture;
