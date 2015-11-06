/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.IntBuffer
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};

/**
 * @class java.nio.IntBuffer
 * @extends java.nio.Buffer 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html}
 **/
java.nio.IntBuffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.IntBuffer') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.IntBuffer',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.Buffer');
java.nio.IntBuffer.prototype = Object.create(SuperClass.prototype);
java.nio.IntBuffer.prototype.constructor = java.nio.IntBuffer;

java.nio.IntBuffer.className = "java.nio.IntBuffer";
java.nio.IntBuffer.prototype.className = "java.nio.IntBuffer";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/nio/IntBuffer.html#isReadOnly
Object.defineProperty(java.nio.IntBuffer.prototype, 'isReadOnly', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'isReadOnly'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.IntBuffer') {
				return new java.nio.IntBuffer(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'isReadOnly',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/IntBuffer.html#offset
Object.defineProperty(java.nio.IntBuffer.prototype, 'offset', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'offset'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.IntBuffer') {
				return new java.nio.IntBuffer(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/IntBuffer.html#hb
Object.defineProperty(java.nio.IntBuffer.prototype, 'hb', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'hb'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.IntBuffer') {
				return new java.nio.IntBuffer(result);
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
/**
 * TODO Fill out docs more...
 * @function allocate
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#allocate(int)}
 **/
java.nio.IntBuffer.allocate = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'allocate',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#wrap(int[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#wrap(int[])}
 **/
java.nio.IntBuffer.wrap = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'wrap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @function hasArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#hasArray()}
 **/
java.nio.IntBuffer.prototype.hasArray = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#compact()}
 **/
java.nio.IntBuffer.prototype.compact = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#duplicate()}
 **/
java.nio.IntBuffer.prototype.duplicate = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#compareTo(java.nio.IntBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#compareTo(java.lang.Object)}
 **/
java.nio.IntBuffer.prototype.compareTo = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#asReadOnlyBuffer()}
 **/
java.nio.IntBuffer.prototype.asReadOnlyBuffer = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#put(int)}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#put(int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#put(java.nio.IntBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#put(int[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#put(int[])}
 **/
java.nio.IntBuffer.prototype.put = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#slice()}
 **/
java.nio.IntBuffer.prototype.slice = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#array()}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#array()}
 **/
java.nio.IntBuffer.prototype.array = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#hashCode()}
 **/
java.nio.IntBuffer.prototype.hashCode = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#get()}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#get(int)}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#get(int[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#get(int[])}
 **/
java.nio.IntBuffer.prototype.get = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#equals(java.lang.Object)}
 **/
java.nio.IntBuffer.prototype.equals = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#arrayOffset()}
 **/
java.nio.IntBuffer.prototype.arrayOffset = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#toString()}
 **/
java.nio.IntBuffer.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#isDirect()}
 **/
java.nio.IntBuffer.prototype.isDirect = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/IntBuffer.html#order()}
 **/
java.nio.IntBuffer.prototype.order = function() {
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
		if (result.apiName === 'java.nio.IntBuffer') {
			return new java.nio.IntBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.IntBuffer;
