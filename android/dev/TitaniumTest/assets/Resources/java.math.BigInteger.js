/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.math.BigInteger
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.math = global.java.math || {};

/**
 * @class java.math.BigInteger
 * @extends java.lang.Number 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html}
 **/
java.math.BigInteger = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.math.BigInteger') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.math.BigInteger',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Number');
java.math.BigInteger.prototype = Object.create(SuperClass.prototype);
java.math.BigInteger.prototype.constructor = java.math.BigInteger;

java.math.BigInteger.className = "java.math.BigInteger";
java.math.BigInteger.prototype.className = "java.math.BigInteger";

// class property
Object.defineProperty(java.math.BigInteger, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.math.BigInteger',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.math.BigInteger.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.math.BigInteger',
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
	whatever.prototype = Object.create(java.math.BigInteger.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/java/math/BigInteger.html#ZERO
Object.defineProperty(java.math.BigInteger, 'ZERO', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ZERO'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.math.BigInteger') {
				return new java.math.BigInteger(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/math/BigInteger.html#ONE
Object.defineProperty(java.math.BigInteger, 'ONE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ONE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.math.BigInteger') {
				return new java.math.BigInteger(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/math/BigInteger.html#TEN
Object.defineProperty(java.math.BigInteger, 'TEN', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'TEN'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.math.BigInteger') {
				return new java.math.BigInteger(result);
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
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#valueOf(long)}
 **/
java.math.BigInteger.valueOf = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function probablePrime
 * @static
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#probablePrime(int, java.util.Random)}
 **/
java.math.BigInteger.probablePrime = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'probablePrime',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @function bitLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#bitLength()}
 **/
java.math.BigInteger.prototype.bitLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bitLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLowestSetBit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#getLowestSetBit()}
 **/
java.math.BigInteger.prototype.getLowestSetBit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLowestSetBit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#mod(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.mod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function longValueExact
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#longValueExact()}
 **/
java.math.BigInteger.prototype.longValueExact = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'longValueExact',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function byteValueExact
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#byteValueExact()}
 **/
java.math.BigInteger.prototype.byteValueExact = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'byteValueExact',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function gcd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#gcd(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.gcd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'gcd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#setBit(int)}
 **/
java.math.BigInteger.prototype.setBit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#compareTo(java.math.BigInteger)}
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#compareTo(java.lang.Object)}
 **/
java.math.BigInteger.prototype.compareTo = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shortValueExact
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#shortValueExact()}
 **/
java.math.BigInteger.prototype.shortValueExact = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shortValueExact',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#longValue()}
 **/
java.math.BigInteger.prototype.longValue = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shiftLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#shiftLeft(int)}
 **/
java.math.BigInteger.prototype.shiftLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shiftLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function not
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#not()}
 **/
java.math.BigInteger.prototype.not = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'not',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#min(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.min = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'min',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function and
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#and(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.and = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'and',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#hashCode()}
 **/
java.math.BigInteger.prototype.hashCode = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#pow(int)}
 **/
java.math.BigInteger.prototype.pow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function divide
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#divide(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.divide = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'divide',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function xor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#xor(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.xor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'xor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearBit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#clearBit(int)}
 **/
java.math.BigInteger.prototype.clearBit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearBit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function multiply
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#multiply(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.multiply = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'multiply',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function add
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#add(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.add = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'add',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#signum()}
 **/
java.math.BigInteger.prototype.signum = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'signum',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flipBit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#flipBit(int)}
 **/
java.math.BigInteger.prototype.flipBit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flipBit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function or
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#or(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.or = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'or',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#max(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.max = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'max',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#intValue()}
 **/
java.math.BigInteger.prototype.intValue = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function subtract
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#subtract(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.subtract = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'subtract',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#floatValue()}
 **/
java.math.BigInteger.prototype.floatValue = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isProbablePrime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#isProbablePrime(int)}
 **/
java.math.BigInteger.prototype.isProbablePrime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isProbablePrime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#doubleValue()}
 **/
java.math.BigInteger.prototype.doubleValue = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextProbablePrime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#nextProbablePrime()}
 **/
java.math.BigInteger.prototype.nextProbablePrime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextProbablePrime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function testBit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#testBit(int)}
 **/
java.math.BigInteger.prototype.testBit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'testBit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shiftRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#shiftRight(int)}
 **/
java.math.BigInteger.prototype.shiftRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shiftRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function abs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#abs()}
 **/
java.math.BigInteger.prototype.abs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'abs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function divideAndRemainder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#divideAndRemainder(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.divideAndRemainder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'divideAndRemainder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function negate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#negate()}
 **/
java.math.BigInteger.prototype.negate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'negate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#equals(java.lang.Object)}
 **/
java.math.BigInteger.prototype.equals = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toByteArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#toByteArray()}
 **/
java.math.BigInteger.prototype.toByteArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toByteArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#bitCount()}
 **/
java.math.BigInteger.prototype.bitCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bitCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
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
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#toString(int)}
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#toString()}
 **/
java.math.BigInteger.prototype.toString = function() {
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
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remainder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#remainder(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.remainder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'remainder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function modPow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#modPow(java.math.BigInteger, java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.modPow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'modPow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function andNot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#andNot(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.andNot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'andNot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function intValueExact
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#intValueExact()}
 **/
java.math.BigInteger.prototype.intValueExact = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'intValueExact',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function modInverse
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/math/BigInteger.html#modInverse(java.math.BigInteger)}
 **/
java.math.BigInteger.prototype.modInverse = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'modInverse',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.math.BigInteger') {
			return new java.math.BigInteger(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.math.BigInteger;
