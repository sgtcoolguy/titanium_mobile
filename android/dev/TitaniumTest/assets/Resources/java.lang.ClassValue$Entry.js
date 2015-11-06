/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ClassValue.Entry
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ClassValue = global.java.lang.ClassValue || {};

/**
 * @class java.lang.ClassValue.Entry
 * @extends java.lang.ref.WeakReference 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Entry.html}
 **/
java.lang.ClassValue.Entry = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ClassValue$Entry') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ClassValue$Entry',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.ref.WeakReference');
java.lang.ClassValue.Entry.prototype = Object.create(SuperClass.prototype);
java.lang.ClassValue.Entry.prototype.constructor = java.lang.ClassValue.Entry;

java.lang.ClassValue.Entry.className = "java.lang.ClassValue$Entry";
java.lang.ClassValue.Entry.prototype.className = "java.lang.ClassValue$Entry";

// Constants

// Static fields
// http://developer.android.com/reference/java/lang/ClassValue.Entry.html#DEAD_ENTRY
Object.defineProperty(java.lang.ClassValue.Entry, 'DEAD_ENTRY', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'DEAD_ENTRY'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ClassValue$Entry') {
				return new java.lang.ClassValue.Entry(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ClassValue.Entry.html#$assertionsDisabled
Object.defineProperty(java.lang.ClassValue.Entry, '$assertionsDisabled', {
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
			if (result.apiName === 'java.lang.ClassValue$Entry') {
				return new java.lang.ClassValue.Entry(result);
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
// http://developer.android.com/reference/java/lang/ClassValue.Entry.html#value
Object.defineProperty(java.lang.ClassValue.Entry.prototype, 'value', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'value'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ClassValue$Entry') {
				return new java.lang.ClassValue.Entry(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isPromise
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Entry.html#isPromise()}
 **/
java.lang.ClassValue.Entry.prototype.isPromise = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPromise',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Entry') {
			return new java.lang.ClassValue.Entry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Entry.html#isLive()}
 **/
java.lang.ClassValue.Entry.prototype.isLive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Entry') {
			return new java.lang.ClassValue.Entry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function refreshVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Entry.html#refreshVersion(java.lang.ClassValue$Version)}
 **/
java.lang.ClassValue.Entry.prototype.refreshVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'refreshVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Entry') {
			return new java.lang.ClassValue.Entry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function value
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Entry.html#value()}
 **/
java.lang.ClassValue.Entry.prototype.value = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'value',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Entry') {
			return new java.lang.ClassValue.Entry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function version
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Entry.html#version()}
 **/
java.lang.ClassValue.Entry.prototype.version = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'version',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Entry') {
			return new java.lang.ClassValue.Entry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function classValueOrNull
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.Entry.html#classValueOrNull()}
 **/
java.lang.ClassValue.Entry.prototype.classValueOrNull = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'classValueOrNull',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$Entry') {
			return new java.lang.ClassValue.Entry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ClassValue.Entry;
