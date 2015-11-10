/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.ByteBuffer
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};

/**
 * @class java.nio.ByteBuffer
 * @extends java.nio.Buffer 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html}
 **/
java.nio.ByteBuffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.ByteBuffer') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.ByteBuffer. Create a subclass using java.nio.ByteBuffer.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.Buffer');
java.nio.ByteBuffer.prototype = Object.create(SuperClass.prototype);
java.nio.ByteBuffer.prototype.constructor = java.nio.ByteBuffer;

java.nio.ByteBuffer.className = "java.nio.ByteBuffer";
java.nio.ByteBuffer.prototype.className = "java.nio.ByteBuffer";

// class property
Object.defineProperty(java.nio.ByteBuffer, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.ByteBuffer',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.ByteBuffer.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.ByteBuffer',
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
	whatever.prototype = Object.create(java.nio.ByteBuffer.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function allocateDirect
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#allocateDirect(int)}
 **/
java.nio.ByteBuffer.allocateDirect = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'allocateDirect',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function allocate
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#allocate(int)}
 **/
java.nio.ByteBuffer.allocate = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'allocate',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function wrap
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#wrap(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#wrap(byte[])}
 **/
java.nio.ByteBuffer.wrap = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'wrap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @function asIntBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#asIntBuffer()}
 **/
java.nio.ByteBuffer.prototype.asIntBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asIntBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compact
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#compact()}
 **/
java.nio.ByteBuffer.prototype.compact = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compact',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asLongBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#asLongBuffer()}
 **/
java.nio.ByteBuffer.prototype.asLongBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asLongBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getDouble()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getDouble(int)}
 **/
java.nio.ByteBuffer.prototype.getDouble = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putDouble(double)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putDouble(int, double)}
 **/
java.nio.ByteBuffer.prototype.putDouble = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#compareTo(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#compareTo(java.lang.Object)}
 **/
java.nio.ByteBuffer.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getFloat()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getFloat(int)}
 **/
java.nio.ByteBuffer.prototype.getFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putLong(long)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putLong(int, long)}
 **/
java.nio.ByteBuffer.prototype.putLong = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asReadOnlyBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#asReadOnlyBuffer()}
 **/
java.nio.ByteBuffer.prototype.asReadOnlyBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asReadOnlyBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#put(byte)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#put(int, byte)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#put(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#put(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#put(byte[])}
 **/
java.nio.ByteBuffer.prototype.put = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function slice
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#slice()}
 **/
java.nio.ByteBuffer.prototype.slice = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'slice',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function array
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#array()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#array()}
 **/
java.nio.ByteBuffer.prototype.array = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'array',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asDoubleBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#asDoubleBuffer()}
 **/
java.nio.ByteBuffer.prototype.asDoubleBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asDoubleBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#hashCode()}
 **/
java.nio.ByteBuffer.prototype.hashCode = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#get()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#get(int)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#get(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#get(byte[])}
 **/
java.nio.ByteBuffer.prototype.get = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function arrayOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#arrayOffset()}
 **/
java.nio.ByteBuffer.prototype.arrayOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'arrayOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putShort(short)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putShort(int, short)}
 **/
java.nio.ByteBuffer.prototype.putShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function order
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#order()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#order(java.nio.ByteOrder)}
 **/
java.nio.ByteBuffer.prototype.order = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'order',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#hasArray()}
 **/
java.nio.ByteBuffer.prototype.hasArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asCharBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#asCharBuffer()}
 **/
java.nio.ByteBuffer.prototype.asCharBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asCharBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asFloatBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#asFloatBuffer()}
 **/
java.nio.ByteBuffer.prototype.asFloatBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asFloatBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getShort()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getShort(int)}
 **/
java.nio.ByteBuffer.prototype.getShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putInt(int)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putInt(int, int)}
 **/
java.nio.ByteBuffer.prototype.putInt = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putChar(char)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putChar(int, char)}
 **/
java.nio.ByteBuffer.prototype.putChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function duplicate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#duplicate()}
 **/
java.nio.ByteBuffer.prototype.duplicate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'duplicate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getLong()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getLong(int)}
 **/
java.nio.ByteBuffer.prototype.getLong = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getChar()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getChar(int)}
 **/
java.nio.ByteBuffer.prototype.getChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getInt()}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#getInt(int)}
 **/
java.nio.ByteBuffer.prototype.getInt = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putFloat(float)}
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#putFloat(int, float)}
 **/
java.nio.ByteBuffer.prototype.putFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#equals(java.lang.Object)}
 **/
java.nio.ByteBuffer.prototype.equals = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#toString()}
 **/
java.nio.ByteBuffer.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDirect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#isDirect()}
 **/
java.nio.ByteBuffer.prototype.isDirect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDirect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asShortBuffer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteBuffer.html#asShortBuffer()}
 **/
java.nio.ByteBuffer.prototype.asShortBuffer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asShortBuffer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteBuffer') {
			return new java.nio.ByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.ByteBuffer;
