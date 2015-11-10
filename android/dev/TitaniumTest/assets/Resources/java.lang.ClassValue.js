/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ClassValue
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.ClassValue
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html}
 **/
java.lang.ClassValue = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ClassValue') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ClassValue',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ClassValue.prototype = Object.create(SuperClass.prototype);
java.lang.ClassValue.prototype.constructor = java.lang.ClassValue;

java.lang.ClassValue.className = "java.lang.ClassValue";
java.lang.ClassValue.prototype.className = "java.lang.ClassValue";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#HASH_MASK}
 */
java.lang.ClassValue.HASH_MASK = 1073741823;

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/lang/ClassValue.html#hashCodeForCache
Object.defineProperty(java.lang.ClassValue.prototype, 'hashCodeForCache', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'hashCodeForCache'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ClassValue') {
				return new java.lang.ClassValue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ClassValue.html#identity
Object.defineProperty(java.lang.ClassValue.prototype, 'identity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'identity'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ClassValue') {
				return new java.lang.ClassValue(result);
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
/**
 * TODO Fill out docs more...
 * @function makeEntry
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#makeEntry(java.lang.ClassValue$Version, java.lang.Object)}
 **/
java.lang.ClassValue.makeEntry = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'makeEntry',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
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
 * @function bumpVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#bumpVersion()}
 **/
java.lang.ClassValue.prototype.bumpVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'bumpVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function castEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#castEntry(java.lang.ClassValue$Entry)}
 **/
java.lang.ClassValue.prototype.castEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'castEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#get(java.lang.Class)}
 **/
java.lang.ClassValue.prototype.get = function() {
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
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function match
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#match(java.lang.ClassValue$Entry)}
 **/
java.lang.ClassValue.prototype.match = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'match',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#computeValue(java.lang.Class)}
 **/
java.lang.ClassValue.prototype.computeValue = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'computeValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function version
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#version()}
 **/
java.lang.ClassValue.prototype.version = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'version',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#remove(java.lang.Class)}
 **/
java.lang.ClassValue.prototype.remove = function() {
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
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.html#put(java.lang.Class, java.lang.Object)}
 **/
java.lang.ClassValue.prototype.put = function() {
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
		if (result.apiName === 'java.lang.ClassValue') {
			return new java.lang.ClassValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ClassValue;
