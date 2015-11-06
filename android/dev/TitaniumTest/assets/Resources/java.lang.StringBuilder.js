/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.StringBuilder
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.StringBuilder
 * @extends java.lang.AbstractStringBuilder 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html}
 **/
java.lang.StringBuilder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.StringBuilder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.StringBuilder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.AbstractStringBuilder');
java.lang.StringBuilder.prototype = Object.create(SuperClass.prototype);
java.lang.StringBuilder.prototype.constructor = java.lang.StringBuilder;

java.lang.StringBuilder.className = "java.lang.StringBuilder";
java.lang.StringBuilder.prototype.className = "java.lang.StringBuilder";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#serialVersionUID}
 */
java.lang.StringBuilder.serialVersionUID = 4383685877147921099;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function deleteCharAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#deleteCharAt(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#deleteCharAt(int)}
 **/
java.lang.StringBuilder.prototype.deleteCharAt = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#codePointAt(int)}
 **/
java.lang.StringBuilder.prototype.codePointAt = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#replace(int, int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#replace(int, int, java.lang.String)}
 **/
java.lang.StringBuilder.prototype.replace = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#setCharAt(int, char)}
 **/
java.lang.StringBuilder.prototype.setCharAt = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, char[])}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, long)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, float)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, double)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, double)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, float)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, long)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, char[])}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#insert(int, char[], int, int)}
 **/
java.lang.StringBuilder.prototype.insert = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#delete(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#delete(int, int)}
 **/
java.lang.StringBuilder.prototype.delete = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#substring(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#substring(int)}
 **/
java.lang.StringBuilder.prototype.substring = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#capacity()}
 **/
java.lang.StringBuilder.prototype.capacity = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#appendCodePoint(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#appendCodePoint(int)}
 **/
java.lang.StringBuilder.prototype.appendCodePoint = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#codePointBefore(int)}
 **/
java.lang.StringBuilder.prototype.codePointBefore = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#indexOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#indexOf(java.lang.String, int)}
 **/
java.lang.StringBuilder.prototype.indexOf = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#codePointCount(int, int)}
 **/
java.lang.StringBuilder.prototype.codePointCount = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#trimToSize()}
 **/
java.lang.StringBuilder.prototype.trimToSize = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#getChars(int, int, char[], int)}
 **/
java.lang.StringBuilder.prototype.getChars = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#length()}
 **/
java.lang.StringBuilder.prototype.length = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#subSequence(int, int)}
 **/
java.lang.StringBuilder.prototype.subSequence = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#reverse()}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#reverse()}
 **/
java.lang.StringBuilder.prototype.reverse = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#lastIndexOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#lastIndexOf(java.lang.String, int)}
 **/
java.lang.StringBuilder.prototype.lastIndexOf = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#setLength(int)}
 **/
java.lang.StringBuilder.prototype.setLength = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#toString()}
 **/
java.lang.StringBuilder.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#ensureCapacity(int)}
 **/
java.lang.StringBuilder.prototype.ensureCapacity = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.StringBuffer)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(char[])}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(long)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(float)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(double)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(double)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(float)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(long)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(char[])}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.StringBuffer)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#append(java.lang.CharSequence)}
 **/
java.lang.StringBuilder.prototype.append = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#offsetByCodePoints(int, int)}
 **/
java.lang.StringBuilder.prototype.offsetByCodePoints = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StringBuilder.html#charAt(int)}
 **/
java.lang.StringBuilder.prototype.charAt = function() {
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
		if (result.apiName === 'java.lang.StringBuilder') {
			return new java.lang.StringBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.StringBuilder;
