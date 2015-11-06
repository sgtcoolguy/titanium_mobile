/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectOutputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.ObjectOutputStream
 * @extends java.io.OutputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html}
 **/
java.io.ObjectOutputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectOutputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectOutputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.OutputStream');
java.io.ObjectOutputStream.prototype = Object.create(SuperClass.prototype);
java.io.ObjectOutputStream.prototype.constructor = java.io.ObjectOutputStream;

java.io.ObjectOutputStream.className = "java.io.ObjectOutputStream";
java.io.ObjectOutputStream.prototype.className = "java.io.ObjectOutputStream";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$500
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#access$500(double[], int, byte[], int, int)}
 **/
java.io.ObjectOutputStream.access$500 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$500',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$400
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#access$400(float[], int, byte[], int, int)}
 **/
java.io.ObjectOutputStream.access$400 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$400',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$300
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#access$300(java.io.ObjectOutputStream, java.lang.Object, boolean)}
 **/
java.io.ObjectOutputStream.access$300 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$300',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$200
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#access$200(java.io.ObjectOutputStream)}
 **/
java.io.ObjectOutputStream.access$200 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$200',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$100
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#access$100()}
 **/
java.io.ObjectOutputStream.access$100 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$100',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$000
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#access$000(java.io.ObjectOutputStream)}
 **/
java.io.ObjectOutputStream.access$000 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$000',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @function writeFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeFloat(float)}
 **/
java.io.ObjectOutputStream.prototype.writeFloat = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function useProtocolVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#useProtocolVersion(int)}
 **/
java.io.ObjectOutputStream.prototype.useProtocolVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'useProtocolVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#drain()}
 **/
java.io.ObjectOutputStream.prototype.drain = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enableReplaceObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#enableReplaceObject(boolean)}
 **/
java.io.ObjectOutputStream.prototype.enableReplaceObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enableReplaceObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeLong(long)}
 **/
java.io.ObjectOutputStream.prototype.writeLong = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeUnshared
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeUnshared(java.lang.Object)}
 **/
java.io.ObjectOutputStream.prototype.writeUnshared = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeUnshared',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#flush()}
 **/
java.io.ObjectOutputStream.prototype.flush = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeTypeString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeTypeString(java.lang.String)}
 **/
java.io.ObjectOutputStream.prototype.writeTypeString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeTypeString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeObjectOverride
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeObjectOverride(java.lang.Object)}
 **/
java.io.ObjectOutputStream.prototype.writeObjectOverride = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeObjectOverride',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeStreamHeader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeStreamHeader()}
 **/
java.io.ObjectOutputStream.prototype.writeStreamHeader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeStreamHeader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defaultWriteObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#defaultWriteObject()}
 **/
java.io.ObjectOutputStream.prototype.defaultWriteObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'defaultWriteObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function annotateProxyClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#annotateProxyClass(java.lang.Class)}
 **/
java.io.ObjectOutputStream.prototype.annotateProxyClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'annotateProxyClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#write(byte[])}
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#write(byte[], int, int)}
 **/
java.io.ObjectOutputStream.prototype.write = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#close()}
 **/
java.io.ObjectOutputStream.prototype.close = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeDouble(double)}
 **/
java.io.ObjectOutputStream.prototype.writeDouble = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeInt(int)}
 **/
java.io.ObjectOutputStream.prototype.writeInt = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeByte(int)}
 **/
java.io.ObjectOutputStream.prototype.writeByte = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeFields
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeFields()}
 **/
java.io.ObjectOutputStream.prototype.writeFields = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#replaceObject(java.lang.Object)}
 **/
java.io.ObjectOutputStream.prototype.replaceObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeObject(java.lang.Object)}
 **/
java.io.ObjectOutputStream.prototype.writeObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeClassDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeClassDescriptor(java.io.ObjectStreamClass)}
 **/
java.io.ObjectOutputStream.prototype.writeClassDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeClassDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeChar(int)}
 **/
java.io.ObjectOutputStream.prototype.writeChar = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProtocolVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#getProtocolVersion()}
 **/
java.io.ObjectOutputStream.prototype.getProtocolVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProtocolVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeBytes(java.lang.String)}
 **/
java.io.ObjectOutputStream.prototype.writeBytes = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function annotateClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#annotateClass(java.lang.Class)}
 **/
java.io.ObjectOutputStream.prototype.annotateClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'annotateClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeUTF(java.lang.String)}
 **/
java.io.ObjectOutputStream.prototype.writeUTF = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#reset()}
 **/
java.io.ObjectOutputStream.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeShort(int)}
 **/
java.io.ObjectOutputStream.prototype.writeShort = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeChars(java.lang.String)}
 **/
java.io.ObjectOutputStream.prototype.writeChars = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#writeBoolean(boolean)}
 **/
java.io.ObjectOutputStream.prototype.writeBoolean = function() {
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
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putFields
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectOutputStream.html#putFields()}
 **/
java.io.ObjectOutputStream.prototype.putFields = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectOutputStream') {
			return new java.io.ObjectOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectOutputStream;
