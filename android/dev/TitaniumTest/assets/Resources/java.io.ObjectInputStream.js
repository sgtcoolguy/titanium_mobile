/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectInputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.ObjectInputStream
 * @extends java.io.InputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html}
 **/
java.io.ObjectInputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectInputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectInputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.InputStream');
java.io.ObjectInputStream.prototype = Object.create(SuperClass.prototype);
java.io.ObjectInputStream.prototype.constructor = java.io.ObjectInputStream;

java.io.ObjectInputStream.className = "java.io.ObjectInputStream";
java.io.ObjectInputStream.prototype.className = "java.io.ObjectInputStream";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$700
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$700(byte[], int, float[], int, int)}
 **/
java.io.ObjectInputStream.access$700 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$700',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$600
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$600(java.io.ObjectInputStream)}
 **/
java.io.ObjectInputStream.access$600 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$600',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$500
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$500(java.io.ObjectInputStream)}
 **/
java.io.ObjectInputStream.access$500 = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$300(java.io.ObjectInputStream, boolean)}
 **/
java.io.ObjectInputStream.access$300 = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$200(java.io.ObjectInputStream)}
 **/
java.io.ObjectInputStream.access$200 = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$002
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$002(java.io.ObjectInputStream, int)}
 **/
java.io.ObjectInputStream.access$002 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$002',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$100(java.io.ObjectInputStream)}
 **/
java.io.ObjectInputStream.access$100 = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$000(java.io.ObjectInputStream)}
 **/
java.io.ObjectInputStream.access$000 = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$800
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#access$800(byte[], int, double[], int, int)}
 **/
java.io.ObjectInputStream.access$800 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$800',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @function available
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#available()}
 **/
java.io.ObjectInputStream.prototype.available = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readChar()}
 **/
java.io.ObjectInputStream.prototype.readChar = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readUnshared
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readUnshared()}
 **/
java.io.ObjectInputStream.prototype.readUnshared = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readUnshared',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readObjectOverride
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readObjectOverride()}
 **/
java.io.ObjectInputStream.prototype.readObjectOverride = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readObjectOverride',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readUTF()}
 **/
java.io.ObjectInputStream.prototype.readUTF = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readDouble()}
 **/
java.io.ObjectInputStream.prototype.readDouble = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readFully(byte[])}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readFully(byte[], int, int)}
 **/
java.io.ObjectInputStream.prototype.readFully = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readFloat()}
 **/
java.io.ObjectInputStream.prototype.readFloat = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readInt()}
 **/
java.io.ObjectInputStream.prototype.readInt = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#close()}
 **/
java.io.ObjectInputStream.prototype.close = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readUnsignedByte()}
 **/
java.io.ObjectInputStream.prototype.readUnsignedByte = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveProxyClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#resolveProxyClass(java.lang.String[])}
 **/
java.io.ObjectInputStream.prototype.resolveProxyClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveProxyClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#read()}
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#read(byte[], int, int)}
 **/
java.io.ObjectInputStream.prototype.read = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defaultReadObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#defaultReadObject()}
 **/
java.io.ObjectInputStream.prototype.defaultReadObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'defaultReadObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#resolveObject(java.lang.Object)}
 **/
java.io.ObjectInputStream.prototype.resolveObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readLine()}
 **/
java.io.ObjectInputStream.prototype.readLine = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerValidation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#registerValidation(java.io.ObjectInputValidation, int)}
 **/
java.io.ObjectInputStream.prototype.registerValidation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerValidation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readObject()}
 **/
java.io.ObjectInputStream.prototype.readObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#skipBytes(int)}
 **/
java.io.ObjectInputStream.prototype.skipBytes = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFields
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readFields()}
 **/
java.io.ObjectInputStream.prototype.readFields = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readLong()}
 **/
java.io.ObjectInputStream.prototype.readLong = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readShort()}
 **/
java.io.ObjectInputStream.prototype.readShort = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#resolveClass(java.io.ObjectStreamClass)}
 **/
java.io.ObjectInputStream.prototype.resolveClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readClassDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readClassDescriptor()}
 **/
java.io.ObjectInputStream.prototype.readClassDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readClassDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readBoolean()}
 **/
java.io.ObjectInputStream.prototype.readBoolean = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enableResolveObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#enableResolveObject(boolean)}
 **/
java.io.ObjectInputStream.prototype.enableResolveObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enableResolveObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readByte()}
 **/
java.io.ObjectInputStream.prototype.readByte = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readStreamHeader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readStreamHeader()}
 **/
java.io.ObjectInputStream.prototype.readStreamHeader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readStreamHeader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readUnsignedShort()}
 **/
java.io.ObjectInputStream.prototype.readUnsignedShort = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readTypeString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.html#readTypeString()}
 **/
java.io.ObjectInputStream.prototype.readTypeString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readTypeString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream') {
			return new java.io.ObjectInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectInputStream;
