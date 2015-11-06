/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.HashMap.Node
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.HashMap = global.java.util.HashMap || {};

/**
 * @class java.util.HashMap.Node
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/HashMap.Node.html}
 **/
java.util.HashMap.Node = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.HashMap$Node') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.HashMap$Node',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.HashMap.Node.prototype = Object.create(SuperClass.prototype);
java.util.HashMap.Node.prototype.constructor = java.util.HashMap.Node;

java.util.HashMap.Node.className = "java.util.HashMap$Node";
java.util.HashMap.Node.prototype.className = "java.util.HashMap$Node";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/HashMap.Node.html#next
Object.defineProperty(java.util.HashMap.Node.prototype, 'next', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'next'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap$Node') {
				return new java.util.HashMap.Node(result);
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
			field: 'next',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.Node.html#value
Object.defineProperty(java.util.HashMap.Node.prototype, 'value', {
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
			if (result.apiName === 'java.util.HashMap$Node') {
				return new java.util.HashMap.Node(result);
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
// http://developer.android.com/reference/java/util/HashMap.Node.html#hash
Object.defineProperty(java.util.HashMap.Node.prototype, 'hash', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'hash'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap$Node') {
				return new java.util.HashMap.Node(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.Node.html#key
Object.defineProperty(java.util.HashMap.Node.prototype, 'key', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'key'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap$Node') {
				return new java.util.HashMap.Node(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.Node.html#getKey()}
 **/
java.util.HashMap.Node.prototype.getKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$Node') {
			return new java.util.HashMap.Node(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.Node.html#getValue()}
 **/
java.util.HashMap.Node.prototype.getValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$Node') {
			return new java.util.HashMap.Node(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.Node.html#hashCode()}
 **/
java.util.HashMap.Node.prototype.hashCode = function() {
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
		if (result.apiName === 'java.util.HashMap$Node') {
			return new java.util.HashMap.Node(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.Node.html#setValue(java.lang.Object)}
 **/
java.util.HashMap.Node.prototype.setValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$Node') {
			return new java.util.HashMap.Node(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.Node.html#equals(java.lang.Object)}
 **/
java.util.HashMap.Node.prototype.equals = function() {
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
		if (result.apiName === 'java.util.HashMap$Node') {
			return new java.util.HashMap.Node(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.Node.html#toString()}
 **/
java.util.HashMap.Node.prototype.toString = function() {
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
		if (result.apiName === 'java.util.HashMap$Node') {
			return new java.util.HashMap.Node(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.HashMap.Node;
