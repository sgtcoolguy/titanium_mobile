/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.WeakHashMap
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.WeakHashMap
 * @extends java.util.AbstractMap 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html}
 **/
java.util.WeakHashMap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.WeakHashMap') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.WeakHashMap',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.AbstractMap');
java.util.WeakHashMap.prototype = Object.create(SuperClass.prototype);
java.util.WeakHashMap.prototype.constructor = java.util.WeakHashMap;

java.util.WeakHashMap.className = "java.util.WeakHashMap";
java.util.WeakHashMap.prototype.className = "java.util.WeakHashMap";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/WeakHashMap.html#modCount
Object.defineProperty(java.util.WeakHashMap.prototype, 'modCount', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'modCount'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.WeakHashMap') {
				return new java.util.WeakHashMap(result);
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
			field: 'modCount',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/WeakHashMap.html#table
Object.defineProperty(java.util.WeakHashMap.prototype, 'table', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'table'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.WeakHashMap') {
				return new java.util.WeakHashMap(result);
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
			field: 'table',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function unmaskNull
 * @static
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#unmaskNull(java.lang.Object)}
 **/
java.util.WeakHashMap.unmaskNull = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'unmaskNull',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#entrySet()}
 **/
java.util.WeakHashMap.prototype.entrySet = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'entrySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#containsKey(java.lang.Object)}
 **/
java.util.WeakHashMap.prototype.containsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'containsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function forEach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#forEach(java.util.function.BiConsumer)}
 **/
java.util.WeakHashMap.prototype.forEach = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'forEach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeMapping
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#removeMapping(java.lang.Object)}
 **/
java.util.WeakHashMap.prototype.removeMapping = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'removeMapping',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#values()}
 **/
java.util.WeakHashMap.prototype.values = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'values',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#isEmpty()}
 **/
java.util.WeakHashMap.prototype.isEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#clear()}
 **/
java.util.WeakHashMap.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#replaceAll(java.util.function.BiFunction)}
 **/
java.util.WeakHashMap.prototype.replaceAll = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'replaceAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#put(java.lang.Object, java.lang.Object)}
 **/
java.util.WeakHashMap.prototype.put = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'put',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#remove(java.lang.Object)}
 **/
java.util.WeakHashMap.prototype.remove = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'remove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#containsValue(java.lang.Object)}
 **/
java.util.WeakHashMap.prototype.containsValue = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'containsValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#size()}
 **/
java.util.WeakHashMap.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#get(java.lang.Object)}
 **/
java.util.WeakHashMap.prototype.get = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'get',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#putAll(java.util.Map)}
 **/
java.util.WeakHashMap.prototype.putAll = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'putAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#resize(int)}
 **/
java.util.WeakHashMap.prototype.resize = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'resize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#getEntry(java.lang.Object)}
 **/
java.util.WeakHashMap.prototype.getEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#keySet()}
 **/
java.util.WeakHashMap.prototype.keySet = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'keySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hash
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/WeakHashMap.html#hash(java.lang.Object)}
 **/
java.util.WeakHashMap.prototype.hash = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hash',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.WeakHashMap') {
			return new java.util.WeakHashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.WeakHashMap;
