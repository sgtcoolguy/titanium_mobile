/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ContentValues
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.ContentValues
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html}
 **/
android.content.ContentValues = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.ContentValues') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.ContentValues',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.ContentValues.prototype = Object.create(SuperClass.prototype);
android.content.ContentValues.prototype.constructor = android.content.ContentValues;

android.content.ContentValues.className = "android.content.ContentValues";
android.content.ContentValues.prototype.className = "android.content.ContentValues";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#TAG}
 */
android.content.ContentValues.TAG = "ContentValues";

// Static fields
// http://developer.android.com/reference/android/content/ContentValues.html#CREATOR
Object.defineProperty(android.content.ContentValues, 'CREATOR', {
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
			if (result.apiName === 'android.content.ContentValues') {
				return new android.content.ContentValues(result);
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
 * @function getAsFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsFloat(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsByte(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function valueSet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#valueSet()}
 **/
android.content.ContentValues.prototype.valueSet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'valueSet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsInteger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsInteger(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsInteger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsInteger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsString(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function put
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, java.lang.Byte)}
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, java.lang.Short)}
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, java.lang.Integer)}
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, java.lang.Long)}
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, java.lang.Float)}
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, java.lang.Double)}
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, java.lang.Boolean)}
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#put(java.lang.String, byte[])}
 **/
android.content.ContentValues.prototype.put = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'put',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#remove(java.lang.String)}
 **/
android.content.ContentValues.prototype.remove = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsLong(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#hashCode()}
 **/
android.content.ContentValues.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#putAll(android.content.ContentValues)}
 **/
android.content.ContentValues.prototype.putAll = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#get(java.lang.String)}
 **/
android.content.ContentValues.prototype.get = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#keySet()}
 **/
android.content.ContentValues.prototype.keySet = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putNull
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#putNull(java.lang.String)}
 **/
android.content.ContentValues.prototype.putNull = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putNull',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#containsKey(java.lang.String)}
 **/
android.content.ContentValues.prototype.containsKey = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#clear()}
 **/
android.content.ContentValues.prototype.clear = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsDouble(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsByteArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsByteArray(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsByteArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsByteArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#describeContents()}
 **/
android.content.ContentValues.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#size()}
 **/
android.content.ContentValues.prototype.size = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsBoolean(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#equals(java.lang.Object)}
 **/
android.content.ContentValues.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#toString()}
 **/
android.content.ContentValues.prototype.toString = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#getAsShort(java.lang.String)}
 **/
android.content.ContentValues.prototype.getAsShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContentValues.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.ContentValues.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.ContentValues') {
			return new android.content.ContentValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.ContentValues;
