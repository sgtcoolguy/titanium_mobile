/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.reflect.Executable
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.reflect = global.java.lang.reflect || {};

/**
 * @class java.lang.reflect.Executable
 * @extends java.lang.reflect.AccessibleObject 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html}
 **/
java.lang.reflect.Executable = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.lang.reflect.Executable') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.lang.reflect.Executable. Create a subclass using java.lang.reflect.Executable.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.reflect.AccessibleObject');
java.lang.reflect.Executable.prototype = Object.create(SuperClass.prototype);
java.lang.reflect.Executable.prototype.constructor = java.lang.reflect.Executable;

java.lang.reflect.Executable.className = "java.lang.reflect.Executable";
java.lang.reflect.Executable.prototype.className = "java.lang.reflect.Executable";

// class property
Object.defineProperty(java.lang.reflect.Executable, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.lang.reflect.Executable',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.lang.reflect.Executable.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.lang.reflect.Executable',
		overrides: overrides
	});

	// Generate a JS wrapper for our dynamic subclass
	var whatever = function() {
		var result = subclassProxy.newInstance(arguments);
		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};

		// TODO Set up super?!
	};
	// it extends the JS wrapper for the parent type
	whatever.prototype = Object.create(java.lang.reflect.Executable.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getName()}
 **/
java.lang.reflect.Executable.prototype.getName = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getParameterCount()}
 **/
java.lang.reflect.Executable.prototype.getParameterCount = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#isVarArgs()}
 **/
java.lang.reflect.Executable.prototype.isVarArgs = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#isSynthetic()}
 **/
java.lang.reflect.Executable.prototype.isSynthetic = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getParameterTypes()}
 **/
java.lang.reflect.Executable.prototype.getParameterTypes = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotatedParameterTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getAnnotatedParameterTypes()}
 **/
java.lang.reflect.Executable.prototype.getAnnotatedParameterTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotatedParameterTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getGenericExceptionTypes()}
 **/
java.lang.reflect.Executable.prototype.getGenericExceptionTypes = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getAnnotatedReceiverType()}
 **/
java.lang.reflect.Executable.prototype.getAnnotatedReceiverType = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getDeclaredAnnotations()}
 **/
java.lang.reflect.Executable.prototype.getDeclaredAnnotations = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotatedExceptionTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getAnnotatedExceptionTypes()}
 **/
java.lang.reflect.Executable.prototype.getAnnotatedExceptionTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotatedExceptionTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getDeclaringClass()}
 **/
java.lang.reflect.Executable.prototype.getDeclaringClass = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getExceptionTypes()}
 **/
java.lang.reflect.Executable.prototype.getExceptionTypes = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getGenericParameterTypes()}
 **/
java.lang.reflect.Executable.prototype.getGenericParameterTypes = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotationsByType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getAnnotationsByType(java.lang.Class)}
 **/
java.lang.reflect.Executable.prototype.getAnnotationsByType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotationsByType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getAnnotation(java.lang.Class)}
 **/
java.lang.reflect.Executable.prototype.getAnnotation = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#toGenericString()}
 **/
java.lang.reflect.Executable.prototype.toGenericString = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParameters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getParameters()}
 **/
java.lang.reflect.Executable.prototype.getParameters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParameters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getModifiers()}
 **/
java.lang.reflect.Executable.prototype.getModifiers = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getTypeParameters()}
 **/
java.lang.reflect.Executable.prototype.getTypeParameters = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getParameterAnnotations()}
 **/
java.lang.reflect.Executable.prototype.getParameterAnnotations = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Executable.html#getAnnotatedReturnType()}
 **/
java.lang.reflect.Executable.prototype.getAnnotatedReturnType = function() {
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
		if (result.apiName === 'java.lang.reflect.Executable') {
			return new java.lang.reflect.Executable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.reflect.Executable;
