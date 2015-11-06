/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.reflect.AccessibleObject
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.reflect = global.java.lang.reflect || {};

/**
 * @class java.lang.reflect.AccessibleObject
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html}
 **/
java.lang.reflect.AccessibleObject = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.reflect.AccessibleObject') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.reflect.AccessibleObject',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.reflect.AccessibleObject.prototype = Object.create(SuperClass.prototype);
java.lang.reflect.AccessibleObject.prototype.constructor = java.lang.reflect.AccessibleObject;

java.lang.reflect.AccessibleObject.className = "java.lang.reflect.AccessibleObject";
java.lang.reflect.AccessibleObject.prototype.className = "java.lang.reflect.AccessibleObject";

// Constants

// Static fields
// http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#reflectionFactory
Object.defineProperty(java.lang.reflect.AccessibleObject, 'reflectionFactory', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'reflectionFactory'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.reflect.AccessibleObject') {
				return new java.lang.reflect.AccessibleObject(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields
// http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#securityCheckCache
Object.defineProperty(java.lang.reflect.AccessibleObject.prototype, 'securityCheckCache', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'securityCheckCache'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.reflect.AccessibleObject') {
				return new java.lang.reflect.AccessibleObject(result);
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
			field: 'securityCheckCache',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#override
Object.defineProperty(java.lang.reflect.AccessibleObject.prototype, 'override', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'override'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.reflect.AccessibleObject') {
				return new java.lang.reflect.AccessibleObject(result);
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
			field: 'override',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function setAccessible
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#setAccessible(java.lang.reflect.AccessibleObject[], boolean)}
 **/
java.lang.reflect.AccessibleObject.setAccessible = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'setAccessible',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
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
 * @function isAccessible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#isAccessible()}
 **/
java.lang.reflect.AccessibleObject.prototype.isAccessible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAccessible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAccessible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#setAccessible(boolean)}
 **/
java.lang.reflect.AccessibleObject.prototype.setAccessible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAccessible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAnnotationPresent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#isAnnotationPresent(java.lang.Class)}
 **/
java.lang.reflect.AccessibleObject.prototype.isAnnotationPresent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAnnotationPresent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#getAnnotations()}
 **/
java.lang.reflect.AccessibleObject.prototype.getAnnotations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function slowCheckMemberAccess
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#slowCheckMemberAccess(java.lang.Class, java.lang.Class, java.lang.Object, int, java.lang.Class)}
 **/
java.lang.reflect.AccessibleObject.prototype.slowCheckMemberAccess = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'slowCheckMemberAccess',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkAccess
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#checkAccess(java.lang.Class, java.lang.Class, java.lang.Object, int)}
 **/
java.lang.reflect.AccessibleObject.prototype.checkAccess = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkAccess',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#getDeclaredAnnotations()}
 **/
java.lang.reflect.AccessibleObject.prototype.getDeclaredAnnotations = function() {
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
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#getAnnotationsByType(java.lang.Class)}
 **/
java.lang.reflect.AccessibleObject.prototype.getAnnotationsByType = function() {
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
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#getAnnotation(java.lang.Class)}
 **/
java.lang.reflect.AccessibleObject.prototype.getAnnotation = function() {
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
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredAnnotationsByType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#getDeclaredAnnotationsByType(java.lang.Class)}
 **/
java.lang.reflect.AccessibleObject.prototype.getDeclaredAnnotationsByType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredAnnotationsByType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredAnnotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/reflect/AccessibleObject.html#getDeclaredAnnotation(java.lang.Class)}
 **/
java.lang.reflect.AccessibleObject.prototype.getDeclaredAnnotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredAnnotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.reflect.AccessibleObject') {
			return new java.lang.reflect.AccessibleObject(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.reflect.AccessibleObject;
