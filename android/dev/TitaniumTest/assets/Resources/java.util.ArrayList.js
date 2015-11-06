/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.ArrayList
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.ArrayList
 * @extends java.util.AbstractList 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html}
 **/
java.util.ArrayList = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.ArrayList') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.ArrayList',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.AbstractList');
java.util.ArrayList.prototype = Object.create(SuperClass.prototype);
java.util.ArrayList.prototype.constructor = java.util.ArrayList;

java.util.ArrayList.className = "java.util.ArrayList";
java.util.ArrayList.prototype.className = "java.util.ArrayList";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/ArrayList.html#elementData
Object.defineProperty(java.util.ArrayList.prototype, 'elementData', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'elementData'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.ArrayList') {
				return new java.util.ArrayList(result);
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
			field: 'elementData',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function subListRangeCheck
 * @static
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#subListRangeCheck(int, int, int)}
 **/
java.util.ArrayList.subListRangeCheck = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'subListRangeCheck',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$100
 * @static
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#access$100(java.util.ArrayList)}
 **/
java.util.ArrayList.access$100 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$100',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
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
 * @function replaceAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#replaceAll(java.util.function.UnaryOperator)}
 **/
java.util.ArrayList.prototype.replaceAll = function() {
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
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
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
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#remove(int)}
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#remove(java.lang.Object)}
 **/
java.util.ArrayList.prototype.remove = function() {
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
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#removeAll(java.util.Collection)}
 **/
java.util.ArrayList.prototype.removeAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function iterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#iterator()}
 **/
java.util.ArrayList.prototype.iterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'iterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
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
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#get(int)}
 **/
java.util.ArrayList.prototype.get = function() {
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
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#toArray()}
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#toArray(java.lang.Object[])}
 **/
java.util.ArrayList.prototype.toArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#removeRange(int, int)}
 **/
java.util.ArrayList.prototype.removeRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function indexOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#indexOf(java.lang.Object)}
 **/
java.util.ArrayList.prototype.indexOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'indexOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function add
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#add(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#add(int, java.lang.Object)}
 **/
java.util.ArrayList.prototype.add = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'add',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function subList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#subList(int, int)}
 **/
java.util.ArrayList.prototype.subList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'subList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function trimToSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#trimToSize()}
 **/
java.util.ArrayList.prototype.trimToSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'trimToSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function set
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#set(int, java.lang.Object)}
 **/
java.util.ArrayList.prototype.set = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'set',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function elementData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#elementData(int)}
 **/
java.util.ArrayList.prototype.elementData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'elementData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function spliterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#spliterator()}
 **/
java.util.ArrayList.prototype.spliterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'spliterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
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
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#forEach(java.util.function.Consumer)}
 **/
java.util.ArrayList.prototype.forEach = function() {
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
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
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
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#isEmpty()}
 **/
java.util.ArrayList.prototype.isEmpty = function() {
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
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
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
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#clear()}
 **/
java.util.ArrayList.prototype.clear = function() {
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
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#sort(java.util.Comparator)}
 **/
java.util.ArrayList.prototype.sort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeIf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#removeIf(java.util.function.Predicate)}
 **/
java.util.ArrayList.prototype.removeIf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeIf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lastIndexOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#lastIndexOf(java.lang.Object)}
 **/
java.util.ArrayList.prototype.lastIndexOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lastIndexOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function contains
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#contains(java.lang.Object)}
 **/
java.util.ArrayList.prototype.contains = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'contains',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
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
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#size()}
 **/
java.util.ArrayList.prototype.size = function() {
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
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#addAll(java.util.Collection)}
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#addAll(int, java.util.Collection)}
 **/
java.util.ArrayList.prototype.addAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
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
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#clone()}
 **/
java.util.ArrayList.prototype.clone = function() {
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
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function listIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#listIterator(int)}
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#listIterator()}
 **/
java.util.ArrayList.prototype.listIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'listIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ensureCapacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#ensureCapacity(int)}
 **/
java.util.ArrayList.prototype.ensureCapacity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ensureCapacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function retainAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/ArrayList.html#retainAll(java.util.Collection)}
 **/
java.util.ArrayList.prototype.retainAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'retainAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.ArrayList') {
			return new java.util.ArrayList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.ArrayList;
