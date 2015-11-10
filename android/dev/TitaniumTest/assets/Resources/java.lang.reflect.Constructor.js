/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.reflect.Constructor
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.reflect = global.java.lang.reflect || {};

/**
 * @class java.lang.reflect.Constructor
 * @extends java.lang.reflect.Executable 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html}
 **/
java.lang.reflect.Constructor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.lang.reflect.Constructor') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.reflect.Constructor',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.reflect.Executable');
java.lang.reflect.Constructor.prototype = Object.create(SuperClass.prototype);
java.lang.reflect.Constructor.prototype.constructor = java.lang.reflect.Constructor;

java.lang.reflect.Constructor.className = "java.lang.reflect.Constructor";
java.lang.reflect.Constructor.prototype.className = "java.lang.reflect.Constructor";

// class property
Object.defineProperty(java.lang.reflect.Constructor, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.lang.reflect.Constructor',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getName()}
 **/
java.lang.reflect.Constructor.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParameterCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getParameterCount()}
 **/
java.lang.reflect.Constructor.prototype.getParameterCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParameterCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVarArgs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#isVarArgs()}
 **/
java.lang.reflect.Constructor.prototype.isVarArgs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVarArgs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSynthetic
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#isSynthetic()}
 **/
java.lang.reflect.Constructor.prototype.isSynthetic = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSynthetic',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParameterTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getParameterTypes()}
 **/
java.lang.reflect.Constructor.prototype.getParameterTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParameterTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#newInstance(java.lang.Object[])}
 **/
java.lang.reflect.Constructor.prototype.newInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGenericExceptionTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getGenericExceptionTypes()}
 **/
java.lang.reflect.Constructor.prototype.getGenericExceptionTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGenericExceptionTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotatedReceiverType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getAnnotatedReceiverType()}
 **/
java.lang.reflect.Constructor.prototype.getAnnotatedReceiverType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotatedReceiverType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredAnnotations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getDeclaredAnnotations()}
 **/
java.lang.reflect.Constructor.prototype.getDeclaredAnnotations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredAnnotations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaringClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getDeclaringClass()}
 **/
java.lang.reflect.Constructor.prototype.getDeclaringClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaringClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExceptionTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getExceptionTypes()}
 **/
java.lang.reflect.Constructor.prototype.getExceptionTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExceptionTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGenericParameterTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getGenericParameterTypes()}
 **/
java.lang.reflect.Constructor.prototype.getGenericParameterTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGenericParameterTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getAnnotation(java.lang.Class)}
 **/
java.lang.reflect.Constructor.prototype.getAnnotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#hashCode()}
 **/
java.lang.reflect.Constructor.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#equals(java.lang.Object)}
 **/
java.lang.reflect.Constructor.prototype.equals = function() {
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
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toGenericString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#toGenericString()}
 **/
java.lang.reflect.Constructor.prototype.toGenericString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toGenericString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#toString()}
 **/
java.lang.reflect.Constructor.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getModifiers
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getModifiers()}
 **/
java.lang.reflect.Constructor.prototype.getModifiers = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getModifiers',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTypeParameters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getTypeParameters()}
 **/
java.lang.reflect.Constructor.prototype.getTypeParameters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTypeParameters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParameterAnnotations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getParameterAnnotations()}
 **/
java.lang.reflect.Constructor.prototype.getParameterAnnotations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParameterAnnotations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotatedReturnType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Constructor.html#getAnnotatedReturnType()}
 **/
java.lang.reflect.Constructor.prototype.getAnnotatedReturnType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotatedReturnType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Constructor') {
			return new java.lang.reflect.Constructor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.reflect.Constructor;
