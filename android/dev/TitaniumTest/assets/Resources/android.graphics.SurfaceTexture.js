/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.SurfaceTexture
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.SurfaceTexture
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html}
 **/
android.graphics.SurfaceTexture = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.graphics.SurfaceTexture') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.SurfaceTexture',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.SurfaceTexture.prototype = Object.create(SuperClass.prototype);
android.graphics.SurfaceTexture.prototype.constructor = android.graphics.SurfaceTexture;

android.graphics.SurfaceTexture.className = "android.graphics.SurfaceTexture";
android.graphics.SurfaceTexture.prototype.className = "android.graphics.SurfaceTexture";

// class property
Object.defineProperty(android.graphics.SurfaceTexture, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.graphics.SurfaceTexture',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.graphics.SurfaceTexture.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.graphics.SurfaceTexture',
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
	whatever.prototype = Object.create(android.graphics.SurfaceTexture.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getTransformMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#getTransformMatrix(float[])}
 **/
android.graphics.SurfaceTexture.prototype.getTransformMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachToGLContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#attachToGLContext(int)}
 **/
android.graphics.SurfaceTexture.prototype.attachToGLContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachToGLContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateTexImage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#updateTexImage()}
 **/
android.graphics.SurfaceTexture.prototype.updateTexImage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateTexImage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releaseTexImage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#releaseTexImage()}
 **/
android.graphics.SurfaceTexture.prototype.releaseTexImage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'releaseTexImage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTimestamp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#getTimestamp()}
 **/
android.graphics.SurfaceTexture.prototype.getTimestamp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTimestamp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function release
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#release()}
 **/
android.graphics.SurfaceTexture.prototype.release = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'release',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#finalize()}
 **/
android.graphics.SurfaceTexture.prototype.finalize = function() {
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
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultBufferSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#setDefaultBufferSize(int, int)}
 **/
android.graphics.SurfaceTexture.prototype.setDefaultBufferSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultBufferSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detachFromGLContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#detachFromGLContext()}
 **/
android.graphics.SurfaceTexture.prototype.detachFromGLContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detachFromGLContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnFrameAvailableListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#setOnFrameAvailableListener(android.graphics.SurfaceTexture$OnFrameAvailableListener)}
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#setOnFrameAvailableListener(android.graphics.SurfaceTexture$OnFrameAvailableListener, android.os.Handler)}
 **/
android.graphics.SurfaceTexture.prototype.setOnFrameAvailableListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnFrameAvailableListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new android.graphics.SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.SurfaceTexture;
