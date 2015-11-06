/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.StringBuffer
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.StringBuffer
 * @extends java.lang.AbstractStringBuilder 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html}
 **/
java.lang.StringBuffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.StringBuffer') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.StringBuffer',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.AbstractStringBuilder');
java.lang.StringBuffer.prototype = Object.create(SuperClass.prototype);
java.lang.StringBuffer.prototype.constructor = java.lang.StringBuffer;

java.lang.StringBuffer.className = "java.lang.StringBuffer";
java.lang.StringBuffer.prototype.className = "java.lang.StringBuffer";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#serialVersionUID}
 */
java.lang.StringBuffer.serialVersionUID = 3388685877147921107;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function deleteCharAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#deleteCharAt(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#deleteCharAt(int)}
 **/
java.lang.StringBuffer.prototype.deleteCharAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deleteCharAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function codePointAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#codePointAt(int)}
 **/
java.lang.StringBuffer.prototype.codePointAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'codePointAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCharAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#setCharAt(int, char)}
 **/
java.lang.StringBuffer.prototype.setCharAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCharAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#replace(int, int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#replace(int, int, java.lang.String)}
 **/
java.lang.StringBuffer.prototype.replace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, char[])}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, long)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, float)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, double)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, double)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, float)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, long)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, char[])}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#insert(int, char[], int, int)}
 **/
java.lang.StringBuffer.prototype.insert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function delete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#delete(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#delete(int, int)}
 **/
java.lang.StringBuffer.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function substring
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#substring(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#substring(int, int)}
 **/
java.lang.StringBuffer.prototype.substring = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'substring',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#capacity()}
 **/
java.lang.StringBuffer.prototype.capacity = function() {
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
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function appendCodePoint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#appendCodePoint(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#appendCodePoint(int)}
 **/
java.lang.StringBuffer.prototype.appendCodePoint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'appendCodePoint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function codePointBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#codePointBefore(int)}
 **/
java.lang.StringBuffer.prototype.codePointBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'codePointBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function indexOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#indexOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#indexOf(java.lang.String, int)}
 **/
java.lang.StringBuffer.prototype.indexOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'indexOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function codePointCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#codePointCount(int, int)}
 **/
java.lang.StringBuffer.prototype.codePointCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'codePointCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function trimToSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#trimToSize()}
 **/
java.lang.StringBuffer.prototype.trimToSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'trimToSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChars
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#getChars(int, int, char[], int)}
 **/
java.lang.StringBuffer.prototype.getChars = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChars',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#length()}
 **/
java.lang.StringBuffer.prototype.length = function() {
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
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function subSequence
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#subSequence(int, int)}
 **/
java.lang.StringBuffer.prototype.subSequence = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'subSequence',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
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
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#reverse()}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#reverse()}
 **/
java.lang.StringBuffer.prototype.reverse = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reverse',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lastIndexOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#lastIndexOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#lastIndexOf(java.lang.String, int)}
 **/
java.lang.StringBuffer.prototype.lastIndexOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lastIndexOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#setLength(int)}
 **/
java.lang.StringBuffer.prototype.setLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#toString()}
 **/
java.lang.StringBuffer.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ensureCapacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#ensureCapacity(int)}
 **/
java.lang.StringBuffer.prototype.ensureCapacity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ensureCapacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function charAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#charAt(int)}
 **/
java.lang.StringBuffer.prototype.charAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'charAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offsetByCodePoints
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#offsetByCodePoints(int, int)}
 **/
java.lang.StringBuffer.prototype.offsetByCodePoints = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offsetByCodePoints',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function append
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.StringBuffer)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.AbstractStringBuilder)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(char[])}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(long)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(float)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(double)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(double)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(float)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(long)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(char[])}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.AbstractStringBuilder)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.StringBuffer)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuffer.html#append(java.lang.CharSequence)}
 **/
java.lang.StringBuffer.prototype.append = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'append',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StringBuffer') {
			return new java.lang.StringBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.StringBuffer;
