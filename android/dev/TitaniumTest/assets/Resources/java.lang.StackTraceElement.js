/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.StackTraceElement
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.StackTraceElement
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html}
 **/
java.lang.StackTraceElement = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.StackTraceElement') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.StackTraceElement',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.StackTraceElement.prototype = Object.create(SuperClass.prototype);
java.lang.StackTraceElement.prototype.constructor = java.lang.StackTraceElement;

java.lang.StackTraceElement.className = "java.lang.StackTraceElement";
java.lang.StackTraceElement.prototype.className = "java.lang.StackTraceElement";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getLineNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html#getLineNumber()}
 **/
java.lang.StackTraceElement.prototype.getLineNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getLineNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StackTraceElement') {
			return new java.lang.StackTraceElement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMethodName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html#getMethodName()}
 **/
java.lang.StackTraceElement.prototype.getMethodName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getMethodName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StackTraceElement') {
			return new java.lang.StackTraceElement(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html#hashCode()}
 **/
java.lang.StackTraceElement.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StackTraceElement') {
			return new java.lang.StackTraceElement(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html#equals(java.lang.Object)}
 **/
java.lang.StackTraceElement.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StackTraceElement') {
			return new java.lang.StackTraceElement(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html#toString()}
 **/
java.lang.StackTraceElement.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.StackTraceElement') {
			return new java.lang.StackTraceElement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html#getClassName()}
 **/
java.lang.StackTraceElement.prototype.getClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StackTraceElement') {
			return new java.lang.StackTraceElement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html#getFileName()}
 **/
java.lang.StackTraceElement.prototype.getFileName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getFileName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StackTraceElement') {
			return new java.lang.StackTraceElement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isNativeMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/StackTraceElement.html#isNativeMethod()}
 **/
java.lang.StackTraceElement.prototype.isNativeMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isNativeMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.StackTraceElement') {
			return new java.lang.StackTraceElement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.StackTraceElement;
