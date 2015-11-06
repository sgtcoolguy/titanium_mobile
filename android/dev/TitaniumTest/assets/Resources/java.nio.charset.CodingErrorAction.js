/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.CodingErrorAction
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.charset = global.java.nio.charset || {};

/**
 * @class java.nio.charset.CodingErrorAction
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html}
 **/
java.nio.charset.CodingErrorAction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.charset.CodingErrorAction') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.charset.CodingErrorAction',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.charset.CodingErrorAction.prototype = Object.create(SuperClass.prototype);
java.nio.charset.CodingErrorAction.prototype.constructor = java.nio.charset.CodingErrorAction;

java.nio.charset.CodingErrorAction.className = "java.nio.charset.CodingErrorAction";
java.nio.charset.CodingErrorAction.prototype.className = "java.nio.charset.CodingErrorAction";

// Constants

// Static fields
// http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html#REPORT
Object.defineProperty(java.nio.charset.CodingErrorAction, 'REPORT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'REPORT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CodingErrorAction') {
				return new java.nio.charset.CodingErrorAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html#IGNORE
Object.defineProperty(java.nio.charset.CodingErrorAction, 'IGNORE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'IGNORE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CodingErrorAction') {
				return new java.nio.charset.CodingErrorAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html#REPLACE
Object.defineProperty(java.nio.charset.CodingErrorAction, 'REPLACE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'REPLACE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CodingErrorAction') {
				return new java.nio.charset.CodingErrorAction(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html#toString()}
 **/
java.nio.charset.CodingErrorAction.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.charset.CodingErrorAction') {
			return new java.nio.charset.CodingErrorAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.charset.CodingErrorAction;
