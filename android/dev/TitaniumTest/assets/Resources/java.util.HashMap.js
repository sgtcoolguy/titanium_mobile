/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.HashMap
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.HashMap
 * @extends java.util.AbstractMap 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html}
 **/
java.util.HashMap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.HashMap') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.HashMap',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.AbstractMap');
java.util.HashMap.prototype = Object.create(SuperClass.prototype);
java.util.HashMap.prototype.constructor = java.util.HashMap;

java.util.HashMap.className = "java.util.HashMap";
java.util.HashMap.prototype.className = "java.util.HashMap";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#UNTREEIFY_THRESHOLD}
 */
java.util.HashMap.UNTREEIFY_THRESHOLD = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#TREEIFY_THRESHOLD}
 */
java.util.HashMap.TREEIFY_THRESHOLD = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#DEFAULT_LOAD_FACTOR}
 */
java.util.HashMap.DEFAULT_LOAD_FACTOR = 0.75;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#DEFAULT_INITIAL_CAPACITY}
 */
java.util.HashMap.DEFAULT_INITIAL_CAPACITY = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#MAXIMUM_CAPACITY}
 */
java.util.HashMap.MAXIMUM_CAPACITY = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#MIN_TREEIFY_CAPACITY}
 */
java.util.HashMap.MIN_TREEIFY_CAPACITY = 64;

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/HashMap.html#modCount
Object.defineProperty(java.util.HashMap.prototype, 'modCount', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'modCount'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap') {
				return new java.util.HashMap(result);
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
			field: 'modCount',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.html#size
Object.defineProperty(java.util.HashMap.prototype, 'size', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'size'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap') {
				return new java.util.HashMap(result);
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
			field: 'size',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.html#loadFactor
Object.defineProperty(java.util.HashMap.prototype, 'loadFactor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'loadFactor'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap') {
				return new java.util.HashMap(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.html#entrySet
Object.defineProperty(java.util.HashMap.prototype, 'entrySet', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'entrySet'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap') {
				return new java.util.HashMap(result);
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
			field: 'entrySet',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.html#threshold
Object.defineProperty(java.util.HashMap.prototype, 'threshold', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'threshold'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap') {
				return new java.util.HashMap(result);
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
			field: 'threshold',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.html#table
Object.defineProperty(java.util.HashMap.prototype, 'table', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'table'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap') {
				return new java.util.HashMap(result);
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
			field: 'table',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function tableSizeFor
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#tableSizeFor(int)}
 **/
java.util.HashMap.tableSizeFor = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'tableSizeFor',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function comparableClassFor
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#comparableClassFor(java.lang.Object)}
 **/
java.util.HashMap.comparableClassFor = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'comparableClassFor',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareComparables
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#compareComparables(java.lang.Class, java.lang.Object, java.lang.Object)}
 **/
java.util.HashMap.compareComparables = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'compareComparables',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#hash(java.lang.Object)}
 **/
java.util.HashMap.hash = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'hash',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @function reinitialize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#reinitialize()}
 **/
java.util.HashMap.prototype.reinitialize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reinitialize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function internalWriteEntries
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#internalWriteEntries(java.io.ObjectOutputStream)}
 **/
java.util.HashMap.prototype.internalWriteEntries = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'internalWriteEntries',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOrDefault
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#getOrDefault(java.lang.Object, java.lang.Object)}
 **/
java.util.HashMap.prototype.getOrDefault = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOrDefault',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newTreeNode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#newTreeNode(int, java.lang.Object, java.lang.Object, java.util.HashMap$Node)}
 **/
java.util.HashMap.prototype.newTreeNode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newTreeNode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#values()}
 **/
java.util.HashMap.prototype.values = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeIfAbsent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#computeIfAbsent(java.lang.Object, java.util.function.Function)}
 **/
java.util.HashMap.prototype.computeIfAbsent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeIfAbsent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#replace(java.lang.Object, java.lang.Object, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#replace(java.lang.Object, java.lang.Object)}
 **/
java.util.HashMap.prototype.replace = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putMapEntries
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#putMapEntries(java.util.Map, boolean)}
 **/
java.util.HashMap.prototype.putMapEntries = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putMapEntries',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#replaceAll(java.util.function.BiFunction)}
 **/
java.util.HashMap.prototype.replaceAll = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#put(java.lang.Object, java.lang.Object)}
 **/
java.util.HashMap.prototype.put = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#remove(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#remove(java.lang.Object, java.lang.Object)}
 **/
java.util.HashMap.prototype.remove = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#containsValue(java.lang.Object)}
 **/
java.util.HashMap.prototype.containsValue = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function capacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#capacity()}
 **/
java.util.HashMap.prototype.capacity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'capacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replacementNode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#replacementNode(java.util.HashMap$Node, java.util.HashMap$Node)}
 **/
java.util.HashMap.prototype.replacementNode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replacementNode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#compute(java.lang.Object, java.util.function.BiFunction)}
 **/
java.util.HashMap.prototype.compute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#get(java.lang.Object)}
 **/
java.util.HashMap.prototype.get = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putVal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#putVal(int, java.lang.Object, java.lang.Object, boolean, boolean)}
 **/
java.util.HashMap.prototype.putVal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putVal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#putAll(java.util.Map)}
 **/
java.util.HashMap.prototype.putAll = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function merge
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#merge(java.lang.Object, java.lang.Object, java.util.function.BiFunction)}
 **/
java.util.HashMap.prototype.merge = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'merge',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#keySet()}
 **/
java.util.HashMap.prototype.keySet = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeNode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#removeNode(int, java.lang.Object, java.lang.Object, boolean, boolean)}
 **/
java.util.HashMap.prototype.removeNode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeNode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function entrySet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#entrySet()}
 **/
java.util.HashMap.prototype.entrySet = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#containsKey(java.lang.Object)}
 **/
java.util.HashMap.prototype.containsKey = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function treeifyBin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#treeifyBin(java.util.HashMap$Node[], int)}
 **/
java.util.HashMap.prototype.treeifyBin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'treeifyBin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#forEach(java.util.function.BiConsumer)}
 **/
java.util.HashMap.prototype.forEach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'forEach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#isEmpty()}
 **/
java.util.HashMap.prototype.isEmpty = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#clear()}
 **/
java.util.HashMap.prototype.clear = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function afterNodeRemoval
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#afterNodeRemoval(java.util.HashMap$Node)}
 **/
java.util.HashMap.prototype.afterNodeRemoval = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'afterNodeRemoval',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function afterNodeAccess
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#afterNodeAccess(java.util.HashMap$Node)}
 **/
java.util.HashMap.prototype.afterNodeAccess = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'afterNodeAccess',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeIfPresent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#computeIfPresent(java.lang.Object, java.util.function.BiFunction)}
 **/
java.util.HashMap.prototype.computeIfPresent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeIfPresent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#size()}
 **/
java.util.HashMap.prototype.size = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadFactor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#loadFactor()}
 **/
java.util.HashMap.prototype.loadFactor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadFactor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#clone()}
 **/
java.util.HashMap.prototype.clone = function() {
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
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
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
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#resize()}
 **/
java.util.HashMap.prototype.resize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newNode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#newNode(int, java.lang.Object, java.lang.Object, java.util.HashMap$Node)}
 **/
java.util.HashMap.prototype.newNode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newNode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replacementTreeNode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#replacementTreeNode(java.util.HashMap$Node, java.util.HashMap$Node)}
 **/
java.util.HashMap.prototype.replacementTreeNode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replacementTreeNode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#getNode(int, java.lang.Object)}
 **/
java.util.HashMap.prototype.getNode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putIfAbsent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#putIfAbsent(java.lang.Object, java.lang.Object)}
 **/
java.util.HashMap.prototype.putIfAbsent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putIfAbsent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function afterNodeInsertion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.html#afterNodeInsertion(boolean)}
 **/
java.util.HashMap.prototype.afterNodeInsertion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'afterNodeInsertion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap') {
			return new java.util.HashMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.HashMap;
