/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Class
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.Class
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Class.html}
 **/
java.lang.Class = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.Class') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.Class',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.Class.prototype = Object.create(SuperClass.prototype);
java.lang.Class.prototype.constructor = java.lang.Class;

java.lang.Class.className = "java.lang.Class";
java.lang.Class.prototype.className = "java.lang.Class";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/lang/Class.html#classValueMap
Object.defineProperty(java.lang.Class.prototype, 'classValueMap', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'classValueMap'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Class') {
				return new java.lang.Class(result);
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
			field: 'classValueMap',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$402
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#access$402(boolean)}
 **/
java.lang.Class.access$402 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$402',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$200
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#access$200(java.lang.reflect.Field[], java.lang.String)}
 **/
java.lang.Class.access$200 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$200',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrimitiveClass
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getPrimitiveClass(java.lang.String)}
 **/
java.lang.Class.getPrimitiveClass = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getPrimitiveClass',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$502
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#access$502(boolean)}
 **/
java.lang.Class.access$502 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$502',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function forName
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#forName(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#forName(java.lang.String, boolean, java.lang.ClassLoader)}
 **/
java.lang.Class.forName = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'forName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$300
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#access$300(java.lang.Object[], java.lang.Object[])}
 **/
java.lang.Class.access$300 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$300',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#access$100(java.lang.Class, boolean)}
 **/
java.lang.Class.access$100 = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExecutableTypeAnnotationBytes
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getExecutableTypeAnnotationBytes(java.lang.reflect.Executable)}
 **/
java.lang.Class.getExecutableTypeAnnotationBytes = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getExecutableTypeAnnotationBytes',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @function getResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getResource(java.lang.String)}
 **/
java.lang.Class.prototype.getResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getName()}
 **/
java.lang.Class.prototype.getName = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLocalClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isLocalClass()}
 **/
java.lang.Class.prototype.isLocalClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLocalClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isSynthetic()}
 **/
java.lang.Class.prototype.isSynthetic = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCanonicalName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getCanonicalName()}
 **/
java.lang.Class.prototype.getCanonicalName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCanonicalName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getMethod(java.lang.String, java.lang.Class[])}
 **/
java.lang.Class.prototype.getMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isInstance(java.lang.Object)}
 **/
java.lang.Class.prototype.isInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMemberClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isMemberClass()}
 **/
java.lang.Class.prototype.isMemberClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMemberClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredFields
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredFields()}
 **/
java.lang.Class.prototype.getDeclaredFields = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#cast(java.lang.Object)}
 **/
java.lang.Class.prototype.cast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEnclosingMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getEnclosingMethod()}
 **/
java.lang.Class.prototype.getEnclosingMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEnclosingMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSigners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getSigners()}
 **/
java.lang.Class.prototype.getSigners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSigners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getTypeParameters()}
 **/
java.lang.Class.prototype.getTypeParameters = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInterface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isInterface()}
 **/
java.lang.Class.prototype.isInterface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInterface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getPackage()}
 **/
java.lang.Class.prototype.getPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asSubclass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#asSubclass(java.lang.Class)}
 **/
java.lang.Class.prototype.asSubclass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asSubclass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInterfaces
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getInterfaces()}
 **/
java.lang.Class.prototype.getInterfaces = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInterfaces',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getField
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getField(java.lang.String)}
 **/
java.lang.Class.prototype.getField = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getField',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotatedInterfaces
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getAnnotatedInterfaces()}
 **/
java.lang.Class.prototype.getAnnotatedInterfaces = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotatedInterfaces',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#newInstance()}
 **/
java.lang.Class.prototype.newInstance = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFields
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getFields()}
 **/
java.lang.Class.prototype.getFields = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getAnnotation(java.lang.Class)}
 **/
java.lang.Class.prototype.getAnnotation = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getComponentType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getComponentType()}
 **/
java.lang.Class.prototype.getComponentType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getComponentType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredAnnotation(java.lang.Class)}
 **/
java.lang.Class.prototype.getDeclaredAnnotation = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isArray()}
 **/
java.lang.Class.prototype.isArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSimpleName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getSimpleName()}
 **/
java.lang.Class.prototype.getSimpleName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSimpleName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPrimitive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isPrimitive()}
 **/
java.lang.Class.prototype.isPrimitive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPrimitive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMethods
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getMethods()}
 **/
java.lang.Class.prototype.getMethods = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMethods',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAnnotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isAnnotation()}
 **/
java.lang.Class.prototype.isAnnotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAnnotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProtectionDomain
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getProtectionDomain()}
 **/
java.lang.Class.prototype.getProtectionDomain = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProtectionDomain',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredConstructors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredConstructors()}
 **/
java.lang.Class.prototype.getDeclaredConstructors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredConstructors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isAnnotationPresent(java.lang.Class)}
 **/
java.lang.Class.prototype.isAnnotationPresent = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function desiredAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#desiredAssertionStatus()}
 **/
java.lang.Class.prototype.desiredAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'desiredAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotationType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getAnnotationType()}
 **/
java.lang.Class.prototype.getAnnotationType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotationType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConstantPool
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getConstantPool()}
 **/
java.lang.Class.prototype.getConstantPool = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConstantPool',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGenericInterfaces
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getGenericInterfaces()}
 **/
java.lang.Class.prototype.getGenericInterfaces = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGenericInterfaces',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredAnnotationMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredAnnotationMap()}
 **/
java.lang.Class.prototype.getDeclaredAnnotationMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredAnnotationMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getClassLoader()}
 **/
java.lang.Class.prototype.getClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAssignableFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isAssignableFrom(java.lang.Class)}
 **/
java.lang.Class.prototype.isAssignableFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAssignableFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredAnnotations()}
 **/
java.lang.Class.prototype.getDeclaredAnnotations = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function casAnnotationType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#casAnnotationType(sun.reflect.annotation.AnnotationType, sun.reflect.annotation.AnnotationType)}
 **/
java.lang.Class.prototype.casAnnotationType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'casAnnotationType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaringClass()}
 **/
java.lang.Class.prototype.getDeclaringClass = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredMethods
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredMethods()}
 **/
java.lang.Class.prototype.getDeclaredMethods = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredMethods',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getAnnotationsByType(java.lang.Class)}
 **/
java.lang.Class.prototype.getAnnotationsByType = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConstructors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getConstructors()}
 **/
java.lang.Class.prototype.getConstructors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConstructors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#toGenericString()}
 **/
java.lang.Class.prototype.toGenericString = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotatedSuperclass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getAnnotatedSuperclass()}
 **/
java.lang.Class.prototype.getAnnotatedSuperclass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotatedSuperclass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getModifiers()}
 **/
java.lang.Class.prototype.getModifiers = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTypeName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getTypeName()}
 **/
java.lang.Class.prototype.getTypeName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTypeName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEnclosingConstructor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getEnclosingConstructor()}
 **/
java.lang.Class.prototype.getEnclosingConstructor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEnclosingConstructor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClasses
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getClasses()}
 **/
java.lang.Class.prototype.getClasses = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClasses',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSuperclass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getSuperclass()}
 **/
java.lang.Class.prototype.getSuperclass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSuperclass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredField
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredField(java.lang.String)}
 **/
java.lang.Class.prototype.getDeclaredField = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredField',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enumConstantDirectory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#enumConstantDirectory()}
 **/
java.lang.Class.prototype.enumConstantDirectory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enumConstantDirectory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourceAsStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getResourceAsStream(java.lang.String)}
 **/
java.lang.Class.prototype.getResourceAsStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourceAsStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredMethod(java.lang.String, java.lang.Class[])}
 **/
java.lang.Class.prototype.getDeclaredMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRawTypeAnnotations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getRawTypeAnnotations()}
 **/
java.lang.Class.prototype.getRawTypeAnnotations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRawTypeAnnotations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEnum
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isEnum()}
 **/
java.lang.Class.prototype.isEnum = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEnum',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredConstructor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredConstructor(java.lang.Class[])}
 **/
java.lang.Class.prototype.getDeclaredConstructor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredConstructor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConstructor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getConstructor(java.lang.Class[])}
 **/
java.lang.Class.prototype.getConstructor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConstructor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getAnnotations()}
 **/
java.lang.Class.prototype.getAnnotations = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEnumConstants
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getEnumConstants()}
 **/
java.lang.Class.prototype.getEnumConstants = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEnumConstants',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSigners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#setSigners(java.lang.Object[])}
 **/
java.lang.Class.prototype.setSigners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSigners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredAnnotationsByType(java.lang.Class)}
 **/
java.lang.Class.prototype.getDeclaredAnnotationsByType = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredClasses
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getDeclaredClasses()}
 **/
java.lang.Class.prototype.getDeclaredClasses = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredClasses',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAnonymousClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#isAnonymousClass()}
 **/
java.lang.Class.prototype.isAnonymousClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAnonymousClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoader0
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getClassLoader0()}
 **/
java.lang.Class.prototype.getClassLoader0 = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassLoader0',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#toString()}
 **/
java.lang.Class.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEnclosingClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getEnclosingClass()}
 **/
java.lang.Class.prototype.getEnclosingClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEnclosingClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGenericSuperclass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getGenericSuperclass()}
 **/
java.lang.Class.prototype.getGenericSuperclass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGenericSuperclass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEnumConstantsShared
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getEnumConstantsShared()}
 **/
java.lang.Class.prototype.getEnumConstantsShared = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEnumConstantsShared',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRawAnnotations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Class.html#getRawAnnotations()}
 **/
java.lang.Class.prototype.getRawAnnotations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRawAnnotations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Class') {
			return new java.lang.Class(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.Class;
