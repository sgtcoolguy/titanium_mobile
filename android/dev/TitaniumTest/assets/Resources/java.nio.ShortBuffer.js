/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.ShortBuffer
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};

/**
 * @class java.nio.ShortBuffer
 * @extends java.nio.Buffer 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html}
 **/
java.nio.ShortBuffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.ShortBuffer') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.ShortBuffer',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.Buffer');
java.nio.ShortBuffer.prototype = Object.create(SuperClass.prototype);
java.nio.ShortBuffer.prototype.constructor = java.nio.ShortBuffer;

java.nio.ShortBuffer.className = "java.nio.ShortBuffer";
java.nio.ShortBuffer.prototype.className = "java.nio.ShortBuffer";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/nio/ShortBuffer.html#isReadOnly
Object.defineProperty(java.nio.ShortBuffer.prototype, 'isReadOnly', {
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
			if (result.apiName === 'java.nio.ShortBuffer') {
				return new java.nio.ShortBuffer(result);
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
// http://developer.android.com/reference/java/nio/ShortBuffer.html#offset
Object.defineProperty(java.nio.ShortBuffer.prototype, 'offset', {
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
			if (result.apiName === 'java.nio.ShortBuffer') {
				return new java.nio.ShortBuffer(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/ShortBuffer.html#hb
Object.defineProperty(java.nio.ShortBuffer.prototype, 'hb', {
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
			if (result.apiName === 'java.nio.ShortBuffer') {
				return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#allocate(int)}
 **/
java.nio.ShortBuffer.allocate = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#wrap(short[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#wrap(short[])}
 **/
java.nio.ShortBuffer.wrap = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#hasArray()}
 **/
java.nio.ShortBuffer.prototype.hasArray = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#compact()}
 **/
java.nio.ShortBuffer.prototype.compact = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#duplicate()}
 **/
java.nio.ShortBuffer.prototype.duplicate = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#compareTo(java.nio.ShortBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#compareTo(java.lang.Object)}
 **/
java.nio.ShortBuffer.prototype.compareTo = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#asReadOnlyBuffer()}
 **/
java.nio.ShortBuffer.prototype.asReadOnlyBuffer = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#put(short)}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#put(int, short)}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#put(java.nio.ShortBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#put(short[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#put(short[])}
 **/
java.nio.ShortBuffer.prototype.put = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#slice()}
 **/
java.nio.ShortBuffer.prototype.slice = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#array()}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#array()}
 **/
java.nio.ShortBuffer.prototype.array = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#hashCode()}
 **/
java.nio.ShortBuffer.prototype.hashCode = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#get()}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#get(int)}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#get(short[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#get(short[])}
 **/
java.nio.ShortBuffer.prototype.get = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#equals(java.lang.Object)}
 **/
java.nio.ShortBuffer.prototype.equals = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#arrayOffset()}
 **/
java.nio.ShortBuffer.prototype.arrayOffset = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#toString()}
 **/
java.nio.ShortBuffer.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#isDirect()}
 **/
java.nio.ShortBuffer.prototype.isDirect = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/ShortBuffer.html#order()}
 **/
java.nio.ShortBuffer.prototype.order = function() {
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
		if (result.apiName === 'java.nio.ShortBuffer') {
			return new java.nio.ShortBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.ShortBuffer;
