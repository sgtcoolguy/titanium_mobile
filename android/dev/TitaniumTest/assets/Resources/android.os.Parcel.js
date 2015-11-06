/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.Parcel
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.Parcel
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html}
 **/
android.os.Parcel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.os.Parcel') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.os.Parcel',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.Parcel.prototype = Object.create(SuperClass.prototype);
android.os.Parcel.prototype.constructor = android.os.Parcel;

android.os.Parcel.className = "android.os.Parcel";
android.os.Parcel.prototype.className = "android.os.Parcel";

// Constants

// Static fields
// http://developer.android.com/reference/android/os/Parcel.html#STRING_CREATOR
Object.defineProperty(android.os.Parcel, 'STRING_CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'STRING_CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Parcel') {
				return new android.os.Parcel(result);
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
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#obtain()}
 **/
android.os.Parcel.obtain = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'obtain',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
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
 * @function createBooleanArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createBooleanArray()}
 **/
android.os.Parcel.prototype.createBooleanArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createBooleanArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unmarshall
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#unmarshall(byte[], int, int)}
 **/
android.os.Parcel.prototype.unmarshall = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unmarshall',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createLongArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createLongArray()}
 **/
android.os.Parcel.prototype.createLongArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createLongArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readDoubleArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readDoubleArray(double[])}
 **/
android.os.Parcel.prototype.readDoubleArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readDoubleArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeBinderList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeBinderList(java.util.List)}
 **/
android.os.Parcel.prototype.writeBinderList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeBinderList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeFloat(float)}
 **/
android.os.Parcel.prototype.writeFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeMap(java.util.Map)}
 **/
android.os.Parcel.prototype.writeMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readBinderList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readBinderList(java.util.List)}
 **/
android.os.Parcel.prototype.readBinderList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readBinderList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeStrongBinder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeStrongBinder(android.os.IBinder)}
 **/
android.os.Parcel.prototype.writeStrongBinder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeStrongBinder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readList(java.util.List, java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readCharArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readCharArray(char[])}
 **/
android.os.Parcel.prototype.readCharArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readCharArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readTypedArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readTypedArray(java.lang.Object[], android.os.Parcelable$Creator)}
 **/
android.os.Parcel.prototype.readTypedArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readTypedArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeNoException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeNoException()}
 **/
android.os.Parcel.prototype.writeNoException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeNoException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function recycle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#recycle()}
 **/
android.os.Parcel.prototype.recycle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recycle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readInt()}
 **/
android.os.Parcel.prototype.readInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createTypedArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createTypedArray(android.os.Parcelable$Creator)}
 **/
android.os.Parcel.prototype.createTypedArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createTypedArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeTypedObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeTypedObject(android.os.Parcelable, int)}
 **/
android.os.Parcel.prototype.writeTypedObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeTypedObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createCharArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createCharArray()}
 **/
android.os.Parcel.prototype.createCharArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createCharArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeStrongInterface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeStrongInterface(android.os.IInterface)}
 **/
android.os.Parcel.prototype.writeStrongInterface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeStrongInterface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeList(java.util.List)}
 **/
android.os.Parcel.prototype.writeList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFloatArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readFloatArray(float[])}
 **/
android.os.Parcel.prototype.readFloatArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFloatArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readBooleanArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readBooleanArray(boolean[])}
 **/
android.os.Parcel.prototype.readBooleanArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readBooleanArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeTypedArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeTypedArray(android.os.Parcelable[], int)}
 **/
android.os.Parcel.prototype.writeTypedArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeTypedArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeSparseArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeSparseArray(android.util.SparseArray)}
 **/
android.os.Parcel.prototype.writeSparseArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeSparseArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeSerializable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeSerializable(java.io.Serializable)}
 **/
android.os.Parcel.prototype.writeSerializable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeSerializable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeLongArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeLongArray(long[])}
 **/
android.os.Parcel.prototype.writeLongArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeLongArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDataCapacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#setDataCapacity(int)}
 **/
android.os.Parcel.prototype.setDataCapacity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDataCapacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readTypedList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readTypedList(java.util.List, android.os.Parcelable$Creator)}
 **/
android.os.Parcel.prototype.readTypedList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readTypedList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readDouble()}
 **/
android.os.Parcel.prototype.readDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createByteArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createByteArray()}
 **/
android.os.Parcel.prototype.createByteArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createByteArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readFloat()}
 **/
android.os.Parcel.prototype.readFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeFloatArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeFloatArray(float[])}
 **/
android.os.Parcel.prototype.writeFloatArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeFloatArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeValue(java.lang.Object)}
 **/
android.os.Parcel.prototype.writeValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dataPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#dataPosition()}
 **/
android.os.Parcel.prototype.dataPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dataPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createStringArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createStringArray()}
 **/
android.os.Parcel.prototype.createStringArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createStringArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeCharArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeCharArray(char[])}
 **/
android.os.Parcel.prototype.writeCharArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeCharArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeIntArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeIntArray(int[])}
 **/
android.os.Parcel.prototype.writeIntArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeIntArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeInt(int)}
 **/
android.os.Parcel.prototype.writeInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readValue(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeByteArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeByteArray(byte[])}
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeByteArray(byte[], int, int)}
 **/
android.os.Parcel.prototype.writeByteArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeByteArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createDoubleArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createDoubleArray()}
 **/
android.os.Parcel.prototype.createDoubleArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createDoubleArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readString()}
 **/
android.os.Parcel.prototype.readString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dataSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#dataSize()}
 **/
android.os.Parcel.prototype.dataSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dataSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readSerializable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readSerializable()}
 **/
android.os.Parcel.prototype.readSerializable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readSerializable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readLongArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readLongArray(long[])}
 **/
android.os.Parcel.prototype.readLongArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readLongArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readLong()}
 **/
android.os.Parcel.prototype.readLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readByteArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readByteArray(byte[])}
 **/
android.os.Parcel.prototype.readByteArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readByteArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeBundle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeBundle(android.os.Bundle)}
 **/
android.os.Parcel.prototype.writeBundle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeBundle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readSparseBooleanArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readSparseBooleanArray()}
 **/
android.os.Parcel.prototype.readSparseBooleanArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readSparseBooleanArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readHashMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readHashMap(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readHashMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readHashMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDataSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#setDataSize(int)}
 **/
android.os.Parcel.prototype.setDataSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDataSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#finalize()}
 **/
android.os.Parcel.prototype.finalize = function() {
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
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createBinderArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createBinderArray()}
 **/
android.os.Parcel.prototype.createBinderArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createBinderArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readBinderArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readBinderArray(android.os.IBinder[])}
 **/
android.os.Parcel.prototype.readBinderArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readBinderArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readBundle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readBundle()}
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readBundle(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readBundle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readBundle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readStrongBinder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readStrongBinder()}
 **/
android.os.Parcel.prototype.readStrongBinder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readStrongBinder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readMap(java.util.Map, java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceInterface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#enforceInterface(java.lang.String)}
 **/
android.os.Parcel.prototype.enforceInterface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enforceInterface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createTypedArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createTypedArrayList(android.os.Parcelable$Creator)}
 **/
android.os.Parcel.prototype.createTypedArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createTypedArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createStringArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createStringArrayList()}
 **/
android.os.Parcel.prototype.createStringArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createStringArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeTypedList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeTypedList(java.util.List)}
 **/
android.os.Parcel.prototype.writeTypedList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeTypedList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeFileDescriptor(java.io.FileDescriptor)}
 **/
android.os.Parcel.prototype.writeFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function appendFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#appendFrom(android.os.Parcel, int, int)}
 **/
android.os.Parcel.prototype.appendFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'appendFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dataCapacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#dataCapacity()}
 **/
android.os.Parcel.prototype.dataCapacity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dataCapacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createBinderArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createBinderArrayList()}
 **/
android.os.Parcel.prototype.createBinderArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createBinderArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readArray(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeException(java.lang.Exception)}
 **/
android.os.Parcel.prototype.writeException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readSizeF
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readSizeF()}
 **/
android.os.Parcel.prototype.readSizeF = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readSizeF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDataPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#setDataPosition(int)}
 **/
android.os.Parcel.prototype.setDataPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDataPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writePersistableBundle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writePersistableBundle(android.os.PersistableBundle)}
 **/
android.os.Parcel.prototype.writePersistableBundle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writePersistableBundle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeSparseBooleanArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeSparseBooleanArray(android.util.SparseBooleanArray)}
 **/
android.os.Parcel.prototype.writeSparseBooleanArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeSparseBooleanArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readPersistableBundle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readPersistableBundle()}
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readPersistableBundle(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readPersistableBundle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readPersistableBundle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readStringList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readStringList(java.util.List)}
 **/
android.os.Parcel.prototype.readStringList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readStringList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeSizeF
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeSizeF(android.util.SizeF)}
 **/
android.os.Parcel.prototype.writeSizeF = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeSizeF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeByte(byte)}
 **/
android.os.Parcel.prototype.writeByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function marshall
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#marshall()}
 **/
android.os.Parcel.prototype.marshall = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'marshall',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readIntArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readIntArray(int[])}
 **/
android.os.Parcel.prototype.readIntArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readIntArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeSize(android.util.Size)}
 **/
android.os.Parcel.prototype.writeSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readStringArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readStringArray(java.lang.String[])}
 **/
android.os.Parcel.prototype.readStringArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readStringArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeInterfaceToken
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeInterfaceToken(java.lang.String)}
 **/
android.os.Parcel.prototype.writeInterfaceToken = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeInterfaceToken',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeParcelable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeParcelable(android.os.Parcelable, int)}
 **/
android.os.Parcel.prototype.writeParcelable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeParcelable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeStringArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeStringArray(java.lang.String[])}
 **/
android.os.Parcel.prototype.writeStringArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeStringArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createIntArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createIntArray()}
 **/
android.os.Parcel.prototype.createIntArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createIntArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readParcelableArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readParcelableArray(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readParcelableArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readParcelableArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeBooleanArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeBooleanArray(boolean[])}
 **/
android.os.Parcel.prototype.writeBooleanArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeBooleanArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeStringList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeStringList(java.util.List)}
 **/
android.os.Parcel.prototype.writeStringList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeStringList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readTypedObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readTypedObject(android.os.Parcelable$Creator)}
 **/
android.os.Parcel.prototype.readTypedObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readTypedObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readException()}
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readException(int, java.lang.String)}
 **/
android.os.Parcel.prototype.readException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeLong(long)}
 **/
android.os.Parcel.prototype.writeLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dataAvail
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#dataAvail()}
 **/
android.os.Parcel.prototype.dataAvail = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dataAvail',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasFileDescriptors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#hasFileDescriptors()}
 **/
android.os.Parcel.prototype.hasFileDescriptors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasFileDescriptors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeArray(java.lang.Object[])}
 **/
android.os.Parcel.prototype.writeArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readParcelable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readParcelable(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readParcelable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readParcelable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeDouble(double)}
 **/
android.os.Parcel.prototype.writeDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeParcelableArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeParcelableArray(android.os.Parcelable[], int)}
 **/
android.os.Parcel.prototype.writeParcelableArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeParcelableArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readArrayList(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readSparseArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readSparseArray(java.lang.ClassLoader)}
 **/
android.os.Parcel.prototype.readSparseArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readSparseArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeDoubleArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeDoubleArray(double[])}
 **/
android.os.Parcel.prototype.writeDoubleArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeDoubleArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createFloatArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#createFloatArray()}
 **/
android.os.Parcel.prototype.createFloatArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createFloatArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeBinderArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeBinderArray(android.os.IBinder[])}
 **/
android.os.Parcel.prototype.writeBinderArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeBinderArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readFileDescriptor()}
 **/
android.os.Parcel.prototype.readFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readByte()}
 **/
android.os.Parcel.prototype.readByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#writeString(java.lang.String)}
 **/
android.os.Parcel.prototype.writeString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Parcel.html#readSize()}
 **/
android.os.Parcel.prototype.readSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Parcel') {
			return new android.os.Parcel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.Parcel;
