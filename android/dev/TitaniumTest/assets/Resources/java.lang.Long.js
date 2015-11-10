/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Long
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.Long
 * @extends java.lang.Number 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Long.html}
 **/
java.lang.Long = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.lang.Long') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.Long',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Number');
java.lang.Long.prototype = Object.create(SuperClass.prototype);
java.lang.Long.prototype.constructor = java.lang.Long;

java.lang.Long.className = "java.lang.Long";
java.lang.Long.prototype.className = "java.lang.Long";

// class property
Object.defineProperty(java.lang.Long, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.lang.Long',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#BYTES}
 */
java.lang.Long.BYTES = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#SIZE}
 */
java.lang.Long.SIZE = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#MAX_VALUE}
 */
java.lang.Long.MAX_VALUE = 9223372036854775807;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#MIN_VALUE}
 */
java.lang.Long.MIN_VALUE = -9223372036854775808;

// Static fields
// http://developer.android.com/reference/java/lang/Long.html#TYPE
Object.defineProperty(java.lang.Long, 'TYPE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'TYPE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Long') {
				return new java.lang.Long(result);
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
/**
 * TODO Fill out docs more...
 * @function compare
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#compare(long, long)}
 **/
java.lang.Long.compare = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'compare',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotateLeft
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#rotateLeft(long, int)}
 **/
java.lang.Long.rotateLeft = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'rotateLeft',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sum
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#sum(long, long)}
 **/
java.lang.Long.sum = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'sum',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decode
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#decode(java.lang.String)}
 **/
java.lang.Long.decode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toOctalString
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#toOctalString(long)}
 **/
java.lang.Long.toOctalString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toOctalString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseUnsignedLong
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#parseUnsignedLong(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#parseUnsignedLong(java.lang.String)}
 **/
java.lang.Long.parseUnsignedLong = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseUnsignedLong',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remainderUnsigned
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#remainderUnsigned(long, long)}
 **/
java.lang.Long.remainderUnsigned = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'remainderUnsigned',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function min
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#min(long, long)}
 **/
java.lang.Long.min = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'min',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#hashCode(long)}
 **/
java.lang.Long.hashCode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'hashCode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lowestOneBit
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#lowestOneBit(long)}
 **/
java.lang.Long.lowestOneBit = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'lowestOneBit',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function signum
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#signum(long)}
 **/
java.lang.Long.signum = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'signum',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toHexString
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#toHexString(long)}
 **/
java.lang.Long.toHexString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toHexString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotateRight
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#rotateRight(long, int)}
 **/
java.lang.Long.rotateRight = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'rotateRight',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function max
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#max(long, long)}
 **/
java.lang.Long.max = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'max',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#valueOf(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#valueOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#valueOf(long)}
 **/
java.lang.Long.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function divideUnsigned
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#divideUnsigned(long, long)}
 **/
java.lang.Long.divideUnsigned = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'divideUnsigned',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reverse
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#reverse(long)}
 **/
java.lang.Long.reverse = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'reverse',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function numberOfLeadingZeros
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#numberOfLeadingZeros(long)}
 **/
java.lang.Long.numberOfLeadingZeros = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'numberOfLeadingZeros',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#getLong(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#getLong(java.lang.String, long)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#getLong(java.lang.String, java.lang.Long)}
 **/
java.lang.Long.getLong = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getLong',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareUnsigned
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#compareUnsigned(long, long)}
 **/
java.lang.Long.compareUnsigned = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'compareUnsigned',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toBinaryString
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#toBinaryString(long)}
 **/
java.lang.Long.toBinaryString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toBinaryString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseLong
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#parseLong(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#parseLong(java.lang.String)}
 **/
java.lang.Long.parseLong = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseLong',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#toString(long, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#toString(long)}
 **/
java.lang.Long.toString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toUnsignedString
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#toUnsignedString(long, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#toUnsignedString(long)}
 **/
java.lang.Long.toUnsignedString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toUnsignedString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bitCount
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#bitCount(long)}
 **/
java.lang.Long.bitCount = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'bitCount',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function highestOneBit
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#highestOneBit(long)}
 **/
java.lang.Long.highestOneBit = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'highestOneBit',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function numberOfTrailingZeros
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#numberOfTrailingZeros(long)}
 **/
java.lang.Long.numberOfTrailingZeros = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'numberOfTrailingZeros',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reverseBytes
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#reverseBytes(long)}
 **/
java.lang.Long.reverseBytes = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'reverseBytes',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
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
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#compareTo(java.lang.Long)}
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#compareTo(java.lang.Object)}
 **/
java.lang.Long.prototype.compareTo = function() {
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
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function longValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#longValue()}
 **/
java.lang.Long.prototype.longValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'longValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#hashCode()}
 **/
java.lang.Long.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shortValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#shortValue()}
 **/
java.lang.Long.prototype.shortValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shortValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function intValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#intValue()}
 **/
java.lang.Long.prototype.intValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'intValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function floatValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#floatValue()}
 **/
java.lang.Long.prototype.floatValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'floatValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function doubleValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#doubleValue()}
 **/
java.lang.Long.prototype.doubleValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'doubleValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#equals(java.lang.Object)}
 **/
java.lang.Long.prototype.equals = function() {
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
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#toString()}
 **/
java.lang.Long.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function byteValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Long.html#byteValue()}
 **/
java.lang.Long.prototype.byteValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'byteValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Long') {
			return new java.lang.Long(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.Long;
