/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectInputStream.HandleTable
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};
global.java.io.ObjectInputStream = global.java.io.ObjectInputStream || {};

/**
 * @class java.io.ObjectInputStream.HandleTable
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html}
 **/
java.io.ObjectInputStream.HandleTable = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectInputStream$HandleTable') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectInputStream$HandleTable',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.ObjectInputStream.HandleTable.prototype = Object.create(SuperClass.prototype);
java.io.ObjectInputStream.HandleTable.prototype.constructor = java.io.ObjectInputStream.HandleTable;

java.io.ObjectInputStream.HandleTable.className = "java.io.ObjectInputStream$HandleTable";
java.io.ObjectInputStream.HandleTable.prototype.className = "java.io.ObjectInputStream$HandleTable";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#entries
Object.defineProperty(java.io.ObjectInputStream.HandleTable.prototype, 'entries', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'entries'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
				return new java.io.ObjectInputStream.HandleTable(result);
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
			field: 'entries',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#size
Object.defineProperty(java.io.ObjectInputStream.HandleTable.prototype, 'size', {
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
			if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
				return new java.io.ObjectInputStream.HandleTable(result);
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
// http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#lowDep
Object.defineProperty(java.io.ObjectInputStream.HandleTable.prototype, 'lowDep', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'lowDep'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
				return new java.io.ObjectInputStream.HandleTable(result);
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
			field: 'lowDep',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#deps
Object.defineProperty(java.io.ObjectInputStream.HandleTable.prototype, 'deps', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'deps'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
				return new java.io.ObjectInputStream.HandleTable(result);
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
			field: 'deps',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#status
Object.defineProperty(java.io.ObjectInputStream.HandleTable.prototype, 'status', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'status'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
				return new java.io.ObjectInputStream.HandleTable(result);
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
			field: 'status',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function lookupException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#lookupException(int)}
 **/
java.io.ObjectInputStream.HandleTable.prototype.lookupException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lookupException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#size()}
 **/
java.io.ObjectInputStream.HandleTable.prototype.size = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function markException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#markException(int, java.lang.ClassNotFoundException)}
 **/
java.io.ObjectInputStream.HandleTable.prototype.markException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'markException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#clear()}
 **/
java.io.ObjectInputStream.HandleTable.prototype.clear = function() {
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
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finish
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#finish(int)}
 **/
java.io.ObjectInputStream.HandleTable.prototype.finish = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finish',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#setObject(int, java.lang.Object)}
 **/
java.io.ObjectInputStream.HandleTable.prototype.setObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function assign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#assign(java.lang.Object)}
 **/
java.io.ObjectInputStream.HandleTable.prototype.assign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'assign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function markDependency
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#markDependency(int, int)}
 **/
java.io.ObjectInputStream.HandleTable.prototype.markDependency = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'markDependency',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lookupObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectInputStream.HandleTable.html#lookupObject(int)}
 **/
java.io.ObjectInputStream.HandleTable.prototype.lookupObject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lookupObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectInputStream$HandleTable') {
			return new java.io.ObjectInputStream.HandleTable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectInputStream.HandleTable;
