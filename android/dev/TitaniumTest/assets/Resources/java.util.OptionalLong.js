/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.OptionalLong
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.OptionalLong
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html}
 **/
java.util.OptionalLong = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.OptionalLong') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.OptionalLong',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.OptionalLong.prototype = Object.create(SuperClass.prototype);
java.util.OptionalLong.prototype.constructor = java.util.OptionalLong;

java.util.OptionalLong.className = "java.util.OptionalLong";
java.util.OptionalLong.prototype.className = "java.util.OptionalLong";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function of
 * @static
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#of(long)}
 **/
java.util.OptionalLong.of = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'of',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function empty
 * @static
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#empty()}
 **/
java.util.OptionalLong.empty = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'empty',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
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
 * @function getAsLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#getAsLong()}
 **/
java.util.OptionalLong.prototype.getAsLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function orElseGet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#orElseGet(java.util.function.LongSupplier)}
 **/
java.util.OptionalLong.prototype.orElseGet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'orElseGet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
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
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#hashCode()}
 **/
java.util.OptionalLong.prototype.hashCode = function() {
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
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ifPresent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#ifPresent(java.util.function.LongConsumer)}
 **/
java.util.OptionalLong.prototype.ifPresent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ifPresent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
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
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#equals(java.lang.Object)}
 **/
java.util.OptionalLong.prototype.equals = function() {
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
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPresent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#isPresent()}
 **/
java.util.OptionalLong.prototype.isPresent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPresent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
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
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#toString()}
 **/
java.util.OptionalLong.prototype.toString = function() {
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
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function orElse
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#orElse(long)}
 **/
java.util.OptionalLong.prototype.orElse = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'orElse',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function orElseThrow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalLong.html#orElseThrow(java.util.function.Supplier)}
 **/
java.util.OptionalLong.prototype.orElseThrow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'orElseThrow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalLong') {
			return new java.util.OptionalLong(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.OptionalLong;
