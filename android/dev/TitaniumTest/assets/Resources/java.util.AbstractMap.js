/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.AbstractMap
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.AbstractMap
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html}
 **/
java.util.AbstractMap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.AbstractMap') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.AbstractMap',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.AbstractMap.prototype = Object.create(SuperClass.prototype);
java.util.AbstractMap.prototype.constructor = java.util.AbstractMap;

java.util.AbstractMap.className = "java.util.AbstractMap";
java.util.AbstractMap.prototype.className = "java.util.AbstractMap";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/AbstractMap.html#values
Object.defineProperty(java.util.AbstractMap.prototype, 'values', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'values'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.AbstractMap') {
				return new java.util.AbstractMap(result);
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
			field: 'values',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/AbstractMap.html#keySet
Object.defineProperty(java.util.AbstractMap.prototype, 'keySet', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'keySet'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.AbstractMap') {
				return new java.util.AbstractMap(result);
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
			field: 'keySet',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$000
 * @static
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#access$000(java.lang.Object, java.lang.Object)}
 **/
java.util.AbstractMap.access$000 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$000',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
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
 * @function entrySet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#entrySet()}
 **/
java.util.AbstractMap.prototype.entrySet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'entrySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function containsKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#containsKey(java.lang.Object)}
 **/
java.util.AbstractMap.prototype.containsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'containsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#values()}
 **/
java.util.AbstractMap.prototype.values = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'values',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#isEmpty()}
 **/
java.util.AbstractMap.prototype.isEmpty = function() {
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
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#clear()}
 **/
java.util.AbstractMap.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function containsValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#containsValue(java.lang.Object)}
 **/
java.util.AbstractMap.prototype.containsValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'containsValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function put
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#put(java.lang.Object, java.lang.Object)}
 **/
java.util.AbstractMap.prototype.put = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'put',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remove
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#remove(java.lang.Object)}
 **/
java.util.AbstractMap.prototype.remove = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'remove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#size()}
 **/
java.util.AbstractMap.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#hashCode()}
 **/
java.util.AbstractMap.prototype.hashCode = function() {
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
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function get
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#get(java.lang.Object)}
 **/
java.util.AbstractMap.prototype.get = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'get',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#putAll(java.util.Map)}
 **/
java.util.AbstractMap.prototype.putAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#equals(java.lang.Object)}
 **/
java.util.AbstractMap.prototype.equals = function() {
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
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#clone()}
 **/
java.util.AbstractMap.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#toString()}
 **/
java.util.AbstractMap.prototype.toString = function() {
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
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keySet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.html#keySet()}
 **/
java.util.AbstractMap.prototype.keySet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap') {
			return new java.util.AbstractMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.AbstractMap;
