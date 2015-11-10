/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.LinkedHashMap.Entry
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.LinkedHashMap = global.java.util.LinkedHashMap || {};

/**
 * @class java.util.LinkedHashMap.Entry
 * @extends java.util.HashMap.Node 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/LinkedHashMap.Entry.html}
 **/
java.util.LinkedHashMap.Entry = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.LinkedHashMap$Entry') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.LinkedHashMap$Entry',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.HashMap$Node');
java.util.LinkedHashMap.Entry.prototype = Object.create(SuperClass.prototype);
java.util.LinkedHashMap.Entry.prototype.constructor = java.util.LinkedHashMap.Entry;

java.util.LinkedHashMap.Entry.className = "java.util.LinkedHashMap$Entry";
java.util.LinkedHashMap.Entry.prototype.className = "java.util.LinkedHashMap$Entry";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/LinkedHashMap.Entry.html#before
Object.defineProperty(java.util.LinkedHashMap.Entry.prototype, 'before', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'before'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.LinkedHashMap$Entry') {
				return new java.util.LinkedHashMap.Entry(result);
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
			field: 'before',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/LinkedHashMap.Entry.html#after
Object.defineProperty(java.util.LinkedHashMap.Entry.prototype, 'after', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'after'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.LinkedHashMap$Entry') {
				return new java.util.LinkedHashMap.Entry(result);
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
			field: 'after',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = java.util.LinkedHashMap.Entry;
