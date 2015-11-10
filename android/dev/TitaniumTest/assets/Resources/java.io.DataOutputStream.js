/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.DataOutputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.DataOutputStream
 * @extends java.io.FilterOutputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html}
 **/
java.io.DataOutputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.DataOutputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.DataOutputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.FilterOutputStream');
java.io.DataOutputStream.prototype = Object.create(SuperClass.prototype);
java.io.DataOutputStream.prototype.constructor = java.io.DataOutputStream;

java.io.DataOutputStream.className = "java.io.DataOutputStream";
java.io.DataOutputStream.prototype.className = "java.io.DataOutputStream";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/DataOutputStream.html#written
Object.defineProperty(java.io.DataOutputStream.prototype, 'written', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'written'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.DataOutputStream') {
				return new java.io.DataOutputStream(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.native.setNativeField({
			field: 'written',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function writeUTF
 * @static
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeUTF(java.lang.String, java.io.DataOutput)}
 **/
java.io.DataOutputStream.writeUTF = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'writeUTF',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @function writeInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeInt(int)}
 **/
java.io.DataOutputStream.prototype.writeInt = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeByte(int)}
 **/
java.io.DataOutputStream.prototype.writeByte = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeFloat(float)}
 **/
java.io.DataOutputStream.prototype.writeFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeChar(int)}
 **/
java.io.DataOutputStream.prototype.writeChar = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeLong(long)}
 **/
java.io.DataOutputStream.prototype.writeLong = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeBytes(java.lang.String)}
 **/
java.io.DataOutputStream.prototype.writeBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#flush()}
 **/
java.io.DataOutputStream.prototype.flush = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'flush',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#size()}
 **/
java.io.DataOutputStream.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeUTF(java.lang.String)}
 **/
java.io.DataOutputStream.prototype.writeUTF = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeUTF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeShort(int)}
 **/
java.io.DataOutputStream.prototype.writeShort = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeChars(java.lang.String)}
 **/
java.io.DataOutputStream.prototype.writeChars = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeChars',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#write(byte[], int, int)}
 **/
java.io.DataOutputStream.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeBoolean(boolean)}
 **/
java.io.DataOutputStream.prototype.writeBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/DataOutputStream.html#writeDouble(double)}
 **/
java.io.DataOutputStream.prototype.writeDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.DataOutputStream') {
			return new java.io.DataOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.DataOutputStream;
