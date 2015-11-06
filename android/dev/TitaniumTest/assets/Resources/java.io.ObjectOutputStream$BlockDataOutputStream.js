/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectOutputStream.BlockDataOutputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};
global.java.io.ObjectOutputStream = global.java.io.ObjectOutputStream || {};

/**
 * @class java.io.ObjectOutputStream.BlockDataOutputStream
 * @extends java.io.OutputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectOutputStream$BlockDataOutputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.OutputStream');
java.io.ObjectOutputStream.BlockDataOutputStream.prototype = Object.create(SuperClass.prototype);
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.constructor = java.io.ObjectOutputStream.BlockDataOutputStream;

java.io.ObjectOutputStream.BlockDataOutputStream.className = "java.io.ObjectOutputStream$BlockDataOutputStream";
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.className = "java.io.ObjectOutputStream$BlockDataOutputStream";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getUTFLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#getUTFLength(java.lang.String)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.getUTFLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUTFLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeLongUTF
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeLongUTF(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeLongUTF(java.lang.String, long)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeLongUTF = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeLongUTF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeInts
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeInts(int[], int, int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeInts = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeInts',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeFloat(float)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeFloat = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drain
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#drain()}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.drain = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drain',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeBooleans
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeBooleans(boolean[], int, int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeBooleans = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeBooleans',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeLong(long)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeLong = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flush
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#flush()}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.flush = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flush',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function write
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#write(byte[])}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#write(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#write(byte[], int, int, boolean)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#close()}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.close = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeFloats
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeFloats(float[], int, int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeFloats = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeFloats',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeDouble(double)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeDouble = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeLongs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeLongs(long[], int, int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeLongs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeLongs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeInt(int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeInt = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeByte(int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeByte = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#setBlockDataMode(boolean)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.setBlockDataMode = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeChar(int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeBytes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeBytes(java.lang.String)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeShorts
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeShorts(short[], int, int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeShorts = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeShorts',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeDoubles
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeDoubles(double[], int, int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeDoubles = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeDoubles',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeUTF
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeUTF(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeUTF(java.lang.String, long)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeUTF = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeUTF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#getBlockDataMode()}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.getBlockDataMode = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeShort(int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeChars
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeChars(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeChars(char[], int, int)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeChars = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeChars',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.BlockDataOutputStream.html#writeBoolean(boolean)}
 **/
java.io.ObjectOutputStream.BlockDataOutputStream.prototype.writeBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream$BlockDataOutputStream') {
			return new java.io.ObjectOutputStream.BlockDataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectOutputStream.BlockDataOutputStream;
