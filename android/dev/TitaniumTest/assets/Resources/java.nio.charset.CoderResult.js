/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.CoderResult
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.charset = global.java.nio.charset || {};

/**
 * @class java.nio.charset.CoderResult
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html}
 **/
java.nio.charset.CoderResult = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.charset.CoderResult') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.charset.CoderResult',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.charset.CoderResult.prototype = Object.create(SuperClass.prototype);
java.nio.charset.CoderResult.prototype.constructor = java.nio.charset.CoderResult;

java.nio.charset.CoderResult.className = "java.nio.charset.CoderResult";
java.nio.charset.CoderResult.prototype.className = "java.nio.charset.CoderResult";

// Constants

// Static fields
// http://developer.android.com/reference/java/nio/charset/CoderResult.html#OVERFLOW
Object.defineProperty(java.nio.charset.CoderResult, 'OVERFLOW', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'OVERFLOW'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CoderResult') {
				return new java.nio.charset.CoderResult(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/charset/CoderResult.html#UNDERFLOW
Object.defineProperty(java.nio.charset.CoderResult, 'UNDERFLOW', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'UNDERFLOW'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CoderResult') {
				return new java.nio.charset.CoderResult(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/charset/CoderResult.html#$assertionsDisabled
Object.defineProperty(java.nio.charset.CoderResult, '$assertionsDisabled', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: '$assertionsDisabled'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CoderResult') {
				return new java.nio.charset.CoderResult(result);
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
 * @function malformedForLength
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#malformedForLength(int)}
 **/
java.nio.charset.CoderResult.malformedForLength = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'malformedForLength',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unmappableForLength
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#unmappableForLength(int)}
 **/
java.nio.charset.CoderResult.unmappableForLength = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'unmappableForLength',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
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
 * @function isMalformed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isMalformed()}
 **/
java.nio.charset.CoderResult.prototype.isMalformed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMalformed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isError()}
 **/
java.nio.charset.CoderResult.prototype.isError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOverflow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isOverflow()}
 **/
java.nio.charset.CoderResult.prototype.isOverflow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOverflow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUnmappable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isUnmappable()}
 **/
java.nio.charset.CoderResult.prototype.isUnmappable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isUnmappable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUnderflow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isUnderflow()}
 **/
java.nio.charset.CoderResult.prototype.isUnderflow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isUnderflow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function length
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#length()}
 **/
java.nio.charset.CoderResult.prototype.length = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'length',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#toString()}
 **/
java.nio.charset.CoderResult.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function throwException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#throwException()}
 **/
java.nio.charset.CoderResult.prototype.throwException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'throwException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new java.nio.charset.CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.charset.CoderResult;
