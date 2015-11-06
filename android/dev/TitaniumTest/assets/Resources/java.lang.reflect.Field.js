/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.reflect.Field
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.reflect = global.java.lang.reflect || {};

/**
 * @class java.lang.reflect.Field
 * @extends java.lang.reflect.AccessibleObject 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html}
 **/
java.lang.reflect.Field = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.reflect.Field') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.reflect.Field',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.reflect.AccessibleObject');
java.lang.reflect.Field.prototype = Object.create(SuperClass.prototype);
java.lang.reflect.Field.prototype.constructor = java.lang.reflect.Field;

java.lang.reflect.Field.className = "java.lang.reflect.Field";
java.lang.reflect.Field.prototype.className = "java.lang.reflect.Field";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#setByte(java.lang.Object, byte)}
 **/
java.lang.reflect.Field.prototype.setByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getName()}
 **/
java.lang.reflect.Field.prototype.getName = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getByte(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.getByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#isSynthetic()}
 **/
java.lang.reflect.Field.prototype.isSynthetic = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getDouble(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.getDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getFloat(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.getFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#setShort(java.lang.Object, short)}
 **/
java.lang.reflect.Field.prototype.setShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getDeclaredAnnotations()}
 **/
java.lang.reflect.Field.prototype.getDeclaredAnnotations = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#setChar(java.lang.Object, char)}
 **/
java.lang.reflect.Field.prototype.setChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#setDouble(java.lang.Object, double)}
 **/
java.lang.reflect.Field.prototype.setDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getDeclaringClass()}
 **/
java.lang.reflect.Field.prototype.getDeclaringClass = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getAnnotationsByType(java.lang.Class)}
 **/
java.lang.reflect.Field.prototype.getAnnotationsByType = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#hashCode()}
 **/
java.lang.reflect.Field.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#toGenericString()}
 **/
java.lang.reflect.Field.prototype.toGenericString = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#get(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.get = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getBoolean(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.getBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#copy()}
 **/
java.lang.reflect.Field.prototype.copy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getModifiers()}
 **/
java.lang.reflect.Field.prototype.getModifiers = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGenericType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getGenericType()}
 **/
java.lang.reflect.Field.prototype.getGenericType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGenericType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotatedType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getAnnotatedType()}
 **/
java.lang.reflect.Field.prototype.getAnnotatedType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotatedType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#setFloat(java.lang.Object, float)}
 **/
java.lang.reflect.Field.prototype.setFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#set(java.lang.Object, java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.set = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getShort(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.getShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#setInt(java.lang.Object, int)}
 **/
java.lang.reflect.Field.prototype.setInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getLong(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.getLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getChar(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.getChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getInt(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.getInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#setLong(java.lang.Object, long)}
 **/
java.lang.reflect.Field.prototype.setLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getType()}
 **/
java.lang.reflect.Field.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#getAnnotation(java.lang.Class)}
 **/
java.lang.reflect.Field.prototype.getAnnotation = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#equals(java.lang.Object)}
 **/
java.lang.reflect.Field.prototype.equals = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#toString()}
 **/
java.lang.reflect.Field.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEnumConstant
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#isEnumConstant()}
 **/
java.lang.reflect.Field.prototype.isEnumConstant = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEnumConstant',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/Field.html#setBoolean(java.lang.Object, boolean)}
 **/
java.lang.reflect.Field.prototype.setBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.Field') {
			return new java.lang.reflect.Field(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.reflect.Field;
