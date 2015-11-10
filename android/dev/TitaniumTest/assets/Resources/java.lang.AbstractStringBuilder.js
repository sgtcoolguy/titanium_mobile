/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.AbstractStringBuilder
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.AbstractStringBuilder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html}
 **/
java.lang.AbstractStringBuilder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.AbstractStringBuilder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.AbstractStringBuilder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.AbstractStringBuilder.prototype = Object.create(SuperClass.prototype);
java.lang.AbstractStringBuilder.prototype.constructor = java.lang.AbstractStringBuilder;

java.lang.AbstractStringBuilder.className = "java.lang.AbstractStringBuilder";
java.lang.AbstractStringBuilder.prototype.className = "java.lang.AbstractStringBuilder";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#count
Object.defineProperty(java.lang.AbstractStringBuilder.prototype, 'count', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'count'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.AbstractStringBuilder') {
				return new java.lang.AbstractStringBuilder(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.native.setNativeField({
			field: 'count',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#value
Object.defineProperty(java.lang.AbstractStringBuilder.prototype, 'value', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'value'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.AbstractStringBuilder') {
				return new java.lang.AbstractStringBuilder(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.native.setNativeField({
			field: 'value',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function deleteCharAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#deleteCharAt(int)}
 **/
java.lang.AbstractStringBuilder.prototype.deleteCharAt = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'deleteCharAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#codePointAt(int)}
 **/
java.lang.AbstractStringBuilder.prototype.codePointAt = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'codePointAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#setCharAt(int, char)}
 **/
java.lang.AbstractStringBuilder.prototype.setCharAt = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'setCharAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#replace(int, int, java.lang.String)}
 **/
java.lang.AbstractStringBuilder.prototype.replace = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'replace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, char[])}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, char)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, long)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, float)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#insert(int, double)}
 **/
java.lang.AbstractStringBuilder.prototype.insert = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'insert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#delete(int, int)}
 **/
java.lang.AbstractStringBuilder.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#substring(int)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#substring(int, int)}
 **/
java.lang.AbstractStringBuilder.prototype.substring = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'substring',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#capacity()}
 **/
java.lang.AbstractStringBuilder.prototype.capacity = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'capacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#appendCodePoint(int)}
 **/
java.lang.AbstractStringBuilder.prototype.appendCodePoint = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'appendCodePoint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function expandCapacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#expandCapacity(int)}
 **/
java.lang.AbstractStringBuilder.prototype.expandCapacity = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'expandCapacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#codePointBefore(int)}
 **/
java.lang.AbstractStringBuilder.prototype.codePointBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'codePointBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#indexOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#indexOf(java.lang.String, int)}
 **/
java.lang.AbstractStringBuilder.prototype.indexOf = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'indexOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#codePointCount(int, int)}
 **/
java.lang.AbstractStringBuilder.prototype.codePointCount = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'codePointCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#trimToSize()}
 **/
java.lang.AbstractStringBuilder.prototype.trimToSize = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'trimToSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#getChars(int, int, char[], int)}
 **/
java.lang.AbstractStringBuilder.prototype.getChars = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getChars',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#length()}
 **/
java.lang.AbstractStringBuilder.prototype.length = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'length',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#subSequence(int, int)}
 **/
java.lang.AbstractStringBuilder.prototype.subSequence = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'subSequence',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#reverse()}
 **/
java.lang.AbstractStringBuilder.prototype.reverse = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'reverse',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#lastIndexOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#lastIndexOf(java.lang.String, int)}
 **/
java.lang.AbstractStringBuilder.prototype.lastIndexOf = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'lastIndexOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#getValue()}
 **/
java.lang.AbstractStringBuilder.prototype.getValue = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#setLength(int)}
 **/
java.lang.AbstractStringBuilder.prototype.setLength = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'setLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#toString()}
 **/
java.lang.AbstractStringBuilder.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#ensureCapacity(int)}
 **/
java.lang.AbstractStringBuilder.prototype.ensureCapacity = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'ensureCapacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#charAt(int)}
 **/
java.lang.AbstractStringBuilder.prototype.charAt = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'charAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#offsetByCodePoints(int, int)}
 **/
java.lang.AbstractStringBuilder.prototype.offsetByCodePoints = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'offsetByCodePoints',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(java.lang.StringBuffer)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(java.lang.AbstractStringBuilder)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(char[])}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(int)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(long)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(float)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(double)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/AbstractStringBuilder.html#append(java.lang.CharSequence)}
 **/
java.lang.AbstractStringBuilder.prototype.append = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'append',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.AbstractStringBuilder') {
			return new java.lang.AbstractStringBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.AbstractStringBuilder;
