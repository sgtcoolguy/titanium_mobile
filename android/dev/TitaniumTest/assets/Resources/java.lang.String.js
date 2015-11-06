/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.String
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.String
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/String.html}
 **/
java.lang.String = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.String') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.String',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.String.prototype = Object.create(SuperClass.prototype);
java.lang.String.prototype.constructor = java.lang.String;

java.lang.String.className = "java.lang.String";
java.lang.String.prototype.className = "java.lang.String";

// Constants

// Static fields
// http://developer.android.com/reference/java/lang/String.html#CASE_INSENSITIVE_ORDER
Object.defineProperty(java.lang.String, 'CASE_INSENSITIVE_ORDER', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CASE_INSENSITIVE_ORDER'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.String') {
				return new java.lang.String(result);
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
 * @function join
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/String.html#join(java.lang.CharSequence, java.lang.CharSequence[])}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#join(java.lang.CharSequence, java.lang.Iterable)}
 **/
java.lang.String.join = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'join',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/String.html#indexOf(char[], int, int, java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#indexOf(char[], int, int, char[], int, int, int)}
 **/
java.lang.String.indexOf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'indexOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copyValueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/String.html#copyValueOf(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#copyValueOf(char[])}
 **/
java.lang.String.copyValueOf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'copyValueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(char[])}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(char)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(long)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(float)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#valueOf(double)}
 **/
java.lang.String.valueOf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function format
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/String.html#format(java.lang.String, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#format(java.util.Locale, java.lang.String, java.lang.Object[])}
 **/
java.lang.String.format = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'format',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/String.html#lastIndexOf(char[], int, int, java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#lastIndexOf(char[], int, int, char[], int, int, int)}
 **/
java.lang.String.lastIndexOf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'lastIndexOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @function toCharArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#toCharArray()}
 **/
java.lang.String.prototype.toCharArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toCharArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#codePointAt(int)}
 **/
java.lang.String.prototype.codePointAt = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#replace(char, char)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#replace(java.lang.CharSequence, java.lang.CharSequence)}
 **/
java.lang.String.prototype.replace = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function regionMatches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#regionMatches(int, java.lang.String, int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#regionMatches(boolean, int, java.lang.String, int, int)}
 **/
java.lang.String.prototype.regionMatches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'regionMatches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceFirst
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#replaceFirst(java.lang.String, java.lang.String)}
 **/
java.lang.String.prototype.replaceFirst = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceFirst',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#compareTo(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#compareTo(java.lang.Object)}
 **/
java.lang.String.prototype.compareTo = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#replaceAll(java.lang.String, java.lang.String)}
 **/
java.lang.String.prototype.replaceAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBytes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#getBytes(int, int, byte[], int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#getBytes(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#getBytes(java.nio.charset.Charset)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#getBytes()}
 **/
java.lang.String.prototype.getBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#substring(int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#substring(int, int)}
 **/
java.lang.String.prototype.substring = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function split
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#split(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#split(java.lang.String)}
 **/
java.lang.String.prototype.split = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'split',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function trim
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#trim()}
 **/
java.lang.String.prototype.trim = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'trim',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#hashCode()}
 **/
java.lang.String.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toUpperCase
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#toUpperCase(java.util.Locale)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#toUpperCase()}
 **/
java.lang.String.prototype.toUpperCase = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toUpperCase',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#codePointBefore(int)}
 **/
java.lang.String.prototype.codePointBefore = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equalsIgnoreCase
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#equalsIgnoreCase(java.lang.String)}
 **/
java.lang.String.prototype.equalsIgnoreCase = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equalsIgnoreCase',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#indexOf(int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#indexOf(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#indexOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#indexOf(java.lang.String, int)}
 **/
java.lang.String.prototype.indexOf = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#codePointCount(int, int)}
 **/
java.lang.String.prototype.codePointCount = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareToIgnoreCase
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#compareToIgnoreCase(java.lang.String)}
 **/
java.lang.String.prototype.compareToIgnoreCase = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareToIgnoreCase',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function intern
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#intern()}
 **/
java.lang.String.prototype.intern = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'intern',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#getChars(char[], int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#getChars(int, int, char[], int)}
 **/
java.lang.String.prototype.getChars = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function contentEquals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#contentEquals(java.lang.StringBuffer)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#contentEquals(java.lang.CharSequence)}
 **/
java.lang.String.prototype.contentEquals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'contentEquals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toLowerCase
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#toLowerCase(java.util.Locale)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#toLowerCase()}
 **/
java.lang.String.prototype.toLowerCase = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toLowerCase',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#length()}
 **/
java.lang.String.prototype.length = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#isEmpty()}
 **/
java.lang.String.prototype.isEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#subSequence(int, int)}
 **/
java.lang.String.prototype.subSequence = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function concat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#concat(java.lang.String)}
 **/
java.lang.String.prototype.concat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'concat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#matches(java.lang.String)}
 **/
java.lang.String.prototype.matches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#lastIndexOf(int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#lastIndexOf(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#lastIndexOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#lastIndexOf(java.lang.String, int)}
 **/
java.lang.String.prototype.lastIndexOf = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function contains
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#contains(java.lang.CharSequence)}
 **/
java.lang.String.prototype.contains = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'contains',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#equals(java.lang.Object)}
 **/
java.lang.String.prototype.equals = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function endsWith
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#endsWith(java.lang.String)}
 **/
java.lang.String.prototype.endsWith = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'endsWith',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#toString()}
 **/
java.lang.String.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#charAt(int)}
 **/
java.lang.String.prototype.charAt = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/String.html#offsetByCodePoints(int, int)}
 **/
java.lang.String.prototype.offsetByCodePoints = function() {
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
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startsWith
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/String.html#startsWith(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/String.html#startsWith(java.lang.String)}
 **/
java.lang.String.prototype.startsWith = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startsWith',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.String') {
			return new java.lang.String(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.String;
