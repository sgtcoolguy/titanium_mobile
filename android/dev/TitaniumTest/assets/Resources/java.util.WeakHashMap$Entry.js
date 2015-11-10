/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.WeakHashMap.Entry
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.WeakHashMap = global.java.util.WeakHashMap || {};

/**
 * @class java.util.WeakHashMap.Entry
 * @extends java.lang.ref.WeakReference 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.Entry.html}
 **/
java.util.WeakHashMap.Entry = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.WeakHashMap$Entry') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.WeakHashMap$Entry',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.ref.WeakReference');
java.util.WeakHashMap.Entry.prototype = Object.create(SuperClass.prototype);
java.util.WeakHashMap.Entry.prototype.constructor = java.util.WeakHashMap.Entry;

java.util.WeakHashMap.Entry.className = "java.util.WeakHashMap$Entry";
java.util.WeakHashMap.Entry.prototype.className = "java.util.WeakHashMap$Entry";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#next
Object.defineProperty(java.util.WeakHashMap.Entry.prototype, 'next', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'next'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.WeakHashMap$Entry') {
				return new java.util.WeakHashMap.Entry(result);
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
			field: 'next',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#value
Object.defineProperty(java.util.WeakHashMap.Entry.prototype, 'value', {
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
			if (result.apiName === 'java.util.WeakHashMap$Entry') {
				return new java.util.WeakHashMap.Entry(result);
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
// http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#hash
Object.defineProperty(java.util.WeakHashMap.Entry.prototype, 'hash', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'hash'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.WeakHashMap$Entry') {
				return new java.util.WeakHashMap.Entry(result);
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
 * @function getKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#getKey()}
 **/
java.util.WeakHashMap.Entry.prototype.getKey = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap$Entry') {
			return new java.util.WeakHashMap.Entry(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#getValue()}
 **/
java.util.WeakHashMap.Entry.prototype.getValue = function() {
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
		if (result.apiName === 'java.util.WeakHashMap$Entry') {
			return new java.util.WeakHashMap.Entry(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#hashCode()}
 **/
java.util.WeakHashMap.Entry.prototype.hashCode = function() {
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
		if (result.apiName === 'java.util.WeakHashMap$Entry') {
			return new java.util.WeakHashMap.Entry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#setValue(java.lang.Object)}
 **/
java.util.WeakHashMap.Entry.prototype.setValue = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'setValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap$Entry') {
			return new java.util.WeakHashMap.Entry(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#equals(java.lang.Object)}
 **/
java.util.WeakHashMap.Entry.prototype.equals = function() {
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
		if (result.apiName === 'java.util.WeakHashMap$Entry') {
			return new java.util.WeakHashMap.Entry(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.Entry.html#toString()}
 **/
java.util.WeakHashMap.Entry.prototype.toString = function() {
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
		if (result.apiName === 'java.util.WeakHashMap$Entry') {
			return new java.util.WeakHashMap.Entry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.WeakHashMap.Entry;
