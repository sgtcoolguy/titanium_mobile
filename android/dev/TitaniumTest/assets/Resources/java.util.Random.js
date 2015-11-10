/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Random
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.Random
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Random.html}
 **/
java.util.Random = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.util.Random') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.Random',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.Random.prototype = Object.create(SuperClass.prototype);
java.util.Random.prototype.constructor = java.util.Random;

java.util.Random.className = "java.util.Random";
java.util.Random.prototype.className = "java.util.Random";

// class property
Object.defineProperty(java.util.Random, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.util.Random',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.util.Random.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.util.Random',
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
	whatever.prototype = Object.create(java.util.Random.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function next
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#next(int)}
 **/
java.util.Random.prototype.next = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'next',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextFloat()}
 **/
java.util.Random.prototype.nextFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextInt()}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextInt(int)}
 **/
java.util.Random.prototype.nextInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextLong()}
 **/
java.util.Random.prototype.nextLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextDouble()}
 **/
java.util.Random.prototype.nextDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextGaussian
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextGaussian()}
 **/
java.util.Random.prototype.nextGaussian = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextGaussian',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextBytes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextBytes(byte[])}
 **/
java.util.Random.prototype.nextBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function longs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#longs(long)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#longs()}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#longs(long, long, long)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#longs(long, long)}
 **/
java.util.Random.prototype.longs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'longs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ints
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#ints(long)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#ints()}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#ints(long, int, int)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#ints(int, int)}
 **/
java.util.Random.prototype.ints = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ints',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function doubles
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#doubles(long)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#doubles()}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#doubles(long, double, double)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#doubles(double, double)}
 **/
java.util.Random.prototype.doubles = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'doubles',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextBoolean()}
 **/
java.util.Random.prototype.nextBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSeed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#setSeed(long)}
 **/
java.util.Random.prototype.setSeed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSeed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new java.util.Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.Random;
