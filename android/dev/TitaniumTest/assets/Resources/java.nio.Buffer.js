/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.Buffer
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};

/**
 * @class java.nio.Buffer
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html}
 **/
java.nio.Buffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.Buffer') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.Buffer',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.Buffer.prototype = Object.create(SuperClass.prototype);
java.nio.Buffer.prototype.constructor = java.nio.Buffer;

java.nio.Buffer.className = "java.nio.Buffer";
java.nio.Buffer.prototype.className = "java.nio.Buffer";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#SPLITERATOR_CHARACTERISTICS}
 */
java.nio.Buffer.SPLITERATOR_CHARACTERISTICS = 16464;

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/nio/Buffer.html#address
Object.defineProperty(java.nio.Buffer.prototype, 'address', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'address'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.Buffer') {
				return new java.nio.Buffer(result);
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
			field: 'address',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function checkBounds
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#checkBounds(int, int, int)}
 **/
java.nio.Buffer.checkBounds = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'checkBounds',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#hasArray()}
 **/
java.nio.Buffer.prototype.hasArray = function() {
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
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasRemaining
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#hasRemaining()}
 **/
java.nio.Buffer.prototype.hasRemaining = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasRemaining',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#clear()}
 **/
java.nio.Buffer.prototype.clear = function() {
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
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#checkIndex(int)}
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#checkIndex(int, int)}
 **/
java.nio.Buffer.prototype.checkIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remaining
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#remaining()}
 **/
java.nio.Buffer.prototype.remaining = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'remaining',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function capacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#capacity()}
 **/
java.nio.Buffer.prototype.capacity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'capacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReadOnly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#isReadOnly()}
 **/
java.nio.Buffer.prototype.isReadOnly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReadOnly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rewind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#rewind()}
 **/
java.nio.Buffer.prototype.rewind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rewind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function truncate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#truncate()}
 **/
java.nio.Buffer.prototype.truncate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'truncate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#array()}
 **/
java.nio.Buffer.prototype.array = function() {
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
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextPutIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#nextPutIndex()}
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#nextPutIndex(int)}
 **/
java.nio.Buffer.prototype.nextPutIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextPutIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function limit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#limit()}
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#limit(int)}
 **/
java.nio.Buffer.prototype.limit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'limit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#reset()}
 **/
java.nio.Buffer.prototype.reset = function() {
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
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#arrayOffset()}
 **/
java.nio.Buffer.prototype.arrayOffset = function() {
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
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function discardMark
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#discardMark()}
 **/
java.nio.Buffer.prototype.discardMark = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'discardMark',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function position
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#position()}
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#position(int)}
 **/
java.nio.Buffer.prototype.position = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'position',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flip
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#flip()}
 **/
java.nio.Buffer.prototype.flip = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flip',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#isDirect()}
 **/
java.nio.Buffer.prototype.isDirect = function() {
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
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextGetIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#nextGetIndex()}
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#nextGetIndex(int)}
 **/
java.nio.Buffer.prototype.nextGetIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextGetIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mark
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#mark()}
 **/
java.nio.Buffer.prototype.mark = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mark',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function markValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/Buffer.html#markValue()}
 **/
java.nio.Buffer.prototype.markValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'markValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.Buffer') {
			return new java.nio.Buffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.Buffer;
