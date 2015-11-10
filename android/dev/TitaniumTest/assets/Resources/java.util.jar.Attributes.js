/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.jar.Attributes
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.jar = global.java.util.jar || {};

/**
 * @class java.util.jar.Attributes
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html}
 **/
java.util.jar.Attributes = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.jar.Attributes') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.jar.Attributes',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.jar.Attributes.prototype = Object.create(SuperClass.prototype);
java.util.jar.Attributes.prototype.constructor = java.util.jar.Attributes;

java.util.jar.Attributes.className = "java.util.jar.Attributes";
java.util.jar.Attributes.prototype.className = "java.util.jar.Attributes";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/jar/Attributes.html#map
Object.defineProperty(java.util.jar.Attributes.prototype, 'map', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'map'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes') {
				return new java.util.jar.Attributes(result);
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
			field: 'map',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#read(java.util.jar.Manifest$FastInputStream, byte[])}
 **/
java.util.jar.Attributes.prototype.read = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'read',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#entrySet()}
 **/
java.util.jar.Attributes.prototype.entrySet = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#containsKey(java.lang.Object)}
 **/
java.util.jar.Attributes.prototype.containsKey = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#values()}
 **/
java.util.jar.Attributes.prototype.values = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#clear()}
 **/
java.util.jar.Attributes.prototype.clear = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#isEmpty()}
 **/
java.util.jar.Attributes.prototype.isEmpty = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#put(java.lang.Object, java.lang.Object)}
 **/
java.util.jar.Attributes.prototype.put = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#remove(java.lang.Object)}
 **/
java.util.jar.Attributes.prototype.remove = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#containsValue(java.lang.Object)}
 **/
java.util.jar.Attributes.prototype.containsValue = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#getValue(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#getValue(java.util.jar.Attributes$Name)}
 **/
java.util.jar.Attributes.prototype.getValue = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeMain
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#writeMain(java.io.DataOutputStream)}
 **/
java.util.jar.Attributes.prototype.writeMain = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeMain',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#size()}
 **/
java.util.jar.Attributes.prototype.size = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#hashCode()}
 **/
java.util.jar.Attributes.prototype.hashCode = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#get(java.lang.Object)}
 **/
java.util.jar.Attributes.prototype.get = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#putAll(java.util.Map)}
 **/
java.util.jar.Attributes.prototype.putAll = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#equals(java.lang.Object)}
 **/
java.util.jar.Attributes.prototype.equals = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#clone()}
 **/
java.util.jar.Attributes.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#putValue(java.lang.String, java.lang.String)}
 **/
java.util.jar.Attributes.prototype.putValue = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'putValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#keySet()}
 **/
java.util.jar.Attributes.prototype.keySet = function() {
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
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function write
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.html#write(java.io.DataOutputStream)}
 **/
java.util.jar.Attributes.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Attributes') {
			return new java.util.jar.Attributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.jar.Attributes;
