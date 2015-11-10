/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.BaseBundle
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.BaseBundle
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html}
 **/
android.os.BaseBundle = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.os.BaseBundle') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.os.BaseBundle',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.BaseBundle.prototype = Object.create(SuperClass.prototype);
android.os.BaseBundle.prototype.constructor = android.os.BaseBundle;

android.os.BaseBundle.className = "android.os.BaseBundle";
android.os.BaseBundle.prototype.className = "android.os.BaseBundle";

// class property
Object.defineProperty(android.os.BaseBundle, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.os.BaseBundle',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.os.BaseBundle.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.os.BaseBundle',
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
	whatever.prototype = Object.create(android.os.BaseBundle.prototype);
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
 * @function putDoubleArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putDoubleArray(java.lang.String, double[])}
 **/
android.os.BaseBundle.prototype.putDoubleArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putDoubleArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putDouble(java.lang.String, double)}
 **/
android.os.BaseBundle.prototype.putDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getDouble(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getDouble(java.lang.String, double)}
 **/
android.os.BaseBundle.prototype.getDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putLong(java.lang.String, long)}
 **/
android.os.BaseBundle.prototype.putLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
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
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#remove(java.lang.String)}
 **/
android.os.BaseBundle.prototype.remove = function() {
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
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDoubleArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getDoubleArray(java.lang.String)}
 **/
android.os.BaseBundle.prototype.getDoubleArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDoubleArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function get
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#get(java.lang.String)}
 **/
android.os.BaseBundle.prototype.get = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'get',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putAll(android.os.PersistableBundle)}
 **/
android.os.BaseBundle.prototype.putAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putIntArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putIntArray(java.lang.String, int[])}
 **/
android.os.BaseBundle.prototype.putIntArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putIntArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getBoolean(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getBoolean(java.lang.String, boolean)}
 **/
android.os.BaseBundle.prototype.getBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putLongArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putLongArray(java.lang.String, long[])}
 **/
android.os.BaseBundle.prototype.putLongArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putLongArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putStringArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putStringArray(java.lang.String, java.lang.String[])}
 **/
android.os.BaseBundle.prototype.putStringArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putStringArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keySet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#keySet()}
 **/
android.os.BaseBundle.prototype.keySet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putBoolean(java.lang.String, boolean)}
 **/
android.os.BaseBundle.prototype.putBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBooleanArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getBooleanArray(java.lang.String)}
 **/
android.os.BaseBundle.prototype.getBooleanArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBooleanArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putInt(java.lang.String, int)}
 **/
android.os.BaseBundle.prototype.putInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function containsKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#containsKey(java.lang.String)}
 **/
android.os.BaseBundle.prototype.containsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'containsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putString(java.lang.String, java.lang.String)}
 **/
android.os.BaseBundle.prototype.putString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#isEmpty()}
 **/
android.os.BaseBundle.prototype.isEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#clear()}
 **/
android.os.BaseBundle.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getString(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getString(java.lang.String, java.lang.String)}
 **/
android.os.BaseBundle.prototype.getString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLongArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getLongArray(java.lang.String)}
 **/
android.os.BaseBundle.prototype.getLongArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLongArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getLong(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getLong(java.lang.String, long)}
 **/
android.os.BaseBundle.prototype.getLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getInt(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getInt(java.lang.String, int)}
 **/
android.os.BaseBundle.prototype.getInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#size()}
 **/
android.os.BaseBundle.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putBooleanArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#putBooleanArray(java.lang.String, boolean[])}
 **/
android.os.BaseBundle.prototype.putBooleanArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putBooleanArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStringArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getStringArray(java.lang.String)}
 **/
android.os.BaseBundle.prototype.getStringArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStringArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/BaseBundle.html#getIntArray(java.lang.String)}
 **/
android.os.BaseBundle.prototype.getIntArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.BaseBundle') {
			return new android.os.BaseBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.BaseBundle;
