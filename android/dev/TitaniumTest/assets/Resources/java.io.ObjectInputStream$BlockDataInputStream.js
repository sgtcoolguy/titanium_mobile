/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectInputStream.BlockDataInputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};
global.java.io.ObjectInputStream = global.java.io.ObjectInputStream || {};

/**
 * @class java.io.ObjectInputStream.BlockDataInputStream
 * @extends java.io.InputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html}
 **/
java.io.ObjectInputStream.BlockDataInputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectInputStream$BlockDataInputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.InputStream');
java.io.ObjectInputStream.BlockDataInputStream.prototype = Object.create(SuperClass.prototype);
java.io.ObjectInputStream.BlockDataInputStream.prototype.constructor = java.io.ObjectInputStream.BlockDataInputStream;

java.io.ObjectInputStream.BlockDataInputStream.className = "java.io.ObjectInputStream$BlockDataInputStream";
java.io.ObjectInputStream.BlockDataInputStream.prototype.className = "java.io.ObjectInputStream$BlockDataInputStream";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#this$0
Object.defineProperty(java.io.ObjectInputStream.BlockDataInputStream.prototype, 'this$0', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'this$0'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
				return new java.io.ObjectInputStream.BlockDataInputStream(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function readFloats
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readFloats(float[], int, int)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readFloats = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFloats',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function available
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#available()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.available = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'available',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skip
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#skip(long)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.skip = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skip',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readChar()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readBooleans
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readBooleans(boolean[], int, int)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readBooleans = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readBooleans',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readUTF
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readUTF()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readUTF = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readUTF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readLongs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readLongs(long[], int, int)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readLongs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readLongs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFully
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readFully(byte[])}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readFully(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readFully(byte[], int, int, boolean)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readFully = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFully',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readDouble()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readDouble = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readFloat()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readFloat = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readInt()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readInt = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#close()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.close = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readUnsignedByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readUnsignedByte()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readUnsignedByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readUnsignedByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readInts
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readInts(int[], int, int)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readInts = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readInts',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#read()}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#read(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#read(byte[], int, int, boolean)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.read = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'read',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readLongUTF
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readLongUTF()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readLongUTF = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readLongUTF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readShorts
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readShorts(short[], int, int)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readShorts = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readShorts',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readDoubles
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readDoubles(double[], int, int)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readDoubles = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readDoubles',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readLine
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readLine()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readLine = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readLine',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBlockDataMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#setBlockDataMode(boolean)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.setBlockDataMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBlockDataMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skipBlockData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#skipBlockData()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.skipBlockData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skipBlockData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peek
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#peek()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.peek = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peek',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skipBytes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#skipBytes(int)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.skipBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skipBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readLong()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readLong = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#peekByte()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.peekByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peekByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readShort()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readChars
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readChars(char[], int, int)}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readChars = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readChars',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function currentBlockRemaining
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#currentBlockRemaining()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.currentBlockRemaining = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'currentBlockRemaining',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBlockDataMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#getBlockDataMode()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.getBlockDataMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBlockDataMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readBoolean()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readByte()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readByte = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readUnsignedShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.BlockDataInputStream.html#readUnsignedShort()}
 **/
java.io.ObjectInputStream.BlockDataInputStream.prototype.readUnsignedShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readUnsignedShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$BlockDataInputStream') {
			return new java.io.ObjectInputStream.BlockDataInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectInputStream.BlockDataInputStream;
