/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.AssetFileDescriptor
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.res = global.android.content.res || {};

/**
 * @class android.content.res.AssetFileDescriptor
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html}
 **/
android.content.res.AssetFileDescriptor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.res.AssetFileDescriptor') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.res.AssetFileDescriptor',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.res.AssetFileDescriptor.prototype = Object.create(SuperClass.prototype);
android.content.res.AssetFileDescriptor.prototype.constructor = android.content.res.AssetFileDescriptor;

android.content.res.AssetFileDescriptor.className = "android.content.res.AssetFileDescriptor";
android.content.res.AssetFileDescriptor.prototype.className = "android.content.res.AssetFileDescriptor";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#UNKNOWN_LENGTH}
 */
android.content.res.AssetFileDescriptor.UNKNOWN_LENGTH = -1;

// Static fields
// http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#CREATOR
Object.defineProperty(android.content.res.AssetFileDescriptor, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.AssetFileDescriptor') {
				return new android.content.res.AssetFileDescriptor(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getStartOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getStartOffset()}
 **/
android.content.res.AssetFileDescriptor.prototype.getStartOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#createOutputStream()}
 **/
android.content.res.AssetFileDescriptor.prototype.createOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#describeContents()}
 **/
android.content.res.AssetFileDescriptor.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#createInputStream()}
 **/
android.content.res.AssetFileDescriptor.prototype.createInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getDeclaredLength()}
 **/
android.content.res.AssetFileDescriptor.prototype.getDeclaredLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getFileDescriptor()}
 **/
android.content.res.AssetFileDescriptor.prototype.getFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getParcelFileDescriptor()}
 **/
android.content.res.AssetFileDescriptor.prototype.getParcelFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getLength()}
 **/
android.content.res.AssetFileDescriptor.prototype.getLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#toString()}
 **/
android.content.res.AssetFileDescriptor.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getExtras()}
 **/
android.content.res.AssetFileDescriptor.prototype.getExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#close()}
 **/
android.content.res.AssetFileDescriptor.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.res.AssetFileDescriptor.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new android.content.res.AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.res.AssetFileDescriptor;
