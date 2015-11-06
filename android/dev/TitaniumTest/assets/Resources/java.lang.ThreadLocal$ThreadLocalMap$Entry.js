/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ThreadLocal.ThreadLocalMap$Entry
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ThreadLocal = global.java.lang.ThreadLocal || {};

/**
 * @class java.lang.ThreadLocal.ThreadLocalMap$Entry
 * @extends java.lang.ref.WeakReference 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.ThreadLocalMap$Entry.html}
 **/
java.lang.ThreadLocal.ThreadLocalMap$Entry = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ThreadLocal$ThreadLocalMap$Entry') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ThreadLocal$ThreadLocalMap$Entry',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.ref.WeakReference');
java.lang.ThreadLocal.ThreadLocalMap$Entry.prototype = Object.create(SuperClass.prototype);
java.lang.ThreadLocal.ThreadLocalMap$Entry.prototype.constructor = java.lang.ThreadLocal.ThreadLocalMap$Entry;

java.lang.ThreadLocal.ThreadLocalMap$Entry.className = "java.lang.ThreadLocal$ThreadLocalMap$Entry";
java.lang.ThreadLocal.ThreadLocalMap$Entry.prototype.className = "java.lang.ThreadLocal$ThreadLocalMap$Entry";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/lang/ThreadLocal.ThreadLocalMap$Entry.html#value
Object.defineProperty(java.lang.ThreadLocal.ThreadLocalMap$Entry.prototype, 'value', {
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
			if (result.apiName === 'java.lang.ThreadLocal$ThreadLocalMap$Entry') {
				return new java.lang.ThreadLocal.ThreadLocalMap$Entry(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'value',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = java.lang.ThreadLocal.ThreadLocalMap$Entry;
