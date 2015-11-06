/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ClassLoader
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.ClassLoader
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html}
 **/
java.lang.ClassLoader = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ClassLoader') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ClassLoader',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ClassLoader.prototype = Object.create(SuperClass.prototype);
java.lang.ClassLoader.prototype.constructor = java.lang.ClassLoader;

java.lang.ClassLoader.className = "java.lang.ClassLoader";
java.lang.ClassLoader.prototype.className = "java.lang.ClassLoader";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/lang/ClassLoader.html#classAssertionStatus
Object.defineProperty(java.lang.ClassLoader.prototype, 'classAssertionStatus', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'classAssertionStatus'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ClassLoader') {
				return new java.lang.ClassLoader(result);
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
			field: 'classAssertionStatus',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ClassLoader.html#assertionLock
Object.defineProperty(java.lang.ClassLoader.prototype, 'assertionLock', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'assertionLock'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ClassLoader') {
				return new java.lang.ClassLoader(result);
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
 * @function getClassLoader
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getClassLoader(java.lang.Class)}
 **/
java.lang.ClassLoader.getClassLoader = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getClassLoader',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerAsParallelCapable
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#registerAsParallelCapable()}
 **/
java.lang.ClassLoader.registerAsParallelCapable = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'registerAsParallelCapable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findNative
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findNative(java.lang.ClassLoader, java.lang.String)}
 **/
java.lang.ClassLoader.findNative = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'findNative',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemResources
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getSystemResources(java.lang.String)}
 **/
java.lang.ClassLoader.getSystemResources = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getSystemResources',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadLibrary
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#loadLibrary(java.lang.Class, java.lang.String, boolean)}
 **/
java.lang.ClassLoader.loadLibrary = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'loadLibrary',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#access$100()}
 **/
java.lang.ClassLoader.access$100 = function() {
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
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$000
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#access$000()}
 **/
java.lang.ClassLoader.access$000 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$000',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemClassLoader
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getSystemClassLoader()}
 **/
java.lang.ClassLoader.getSystemClassLoader = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getSystemClassLoader',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemResource
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getSystemResource(java.lang.String)}
 **/
java.lang.ClassLoader.getSystemResource = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getSystemResource',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBootstrapClassPath
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getBootstrapClassPath()}
 **/
java.lang.ClassLoader.getBootstrapClassPath = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getBootstrapClassPath',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkClassLoaderPermission
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#checkClassLoaderPermission(java.lang.ClassLoader, java.lang.Class)}
 **/
java.lang.ClassLoader.checkClassLoaderPermission = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'checkClassLoaderPermission',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemResourceAsStream
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getSystemResourceAsStream(java.lang.String)}
 **/
java.lang.ClassLoader.getSystemResourceAsStream = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getSystemResourceAsStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getResource(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.getResource = function() {
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
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findResource(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.findResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#desiredAssertionStatus(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.desiredAssertionStatus = function() {
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
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#setDefaultAssertionStatus(boolean)}
 **/
java.lang.ClassLoader.prototype.setDefaultAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPackageAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#setPackageAssertionStatus(java.lang.String, boolean)}
 **/
java.lang.ClassLoader.prototype.setPackageAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPackageAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClassAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#setClassAssertionStatus(java.lang.String, boolean)}
 **/
java.lang.ClassLoader.prototype.setClassAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClassAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#clearAssertionStatus()}
 **/
java.lang.ClassLoader.prototype.clearAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function definePackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#definePackage(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.net.URL)}
 **/
java.lang.ClassLoader.prototype.definePackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'definePackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getResources(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.getResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#addClass(java.lang.Class)}
 **/
java.lang.ClassLoader.prototype.addClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findSystemClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findSystemClass(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.findSystemClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findSystemClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getParent()}
 **/
java.lang.ClassLoader.prototype.getParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getPackage(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.getPackage = function() {
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
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defineClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#defineClass(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#defineClass(java.lang.String, byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#defineClass(java.lang.String, byte[], int, int, java.security.ProtectionDomain)}
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#defineClass(java.lang.String, java.nio.ByteBuffer, java.security.ProtectionDomain)}
 **/
java.lang.ClassLoader.prototype.defineClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'defineClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getResourceAsStream(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.getResourceAsStream = function() {
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
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findLoadedClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findLoadedClass(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.findLoadedClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findLoadedClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findResources(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.findResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findClass(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.findClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#setSigners(java.lang.Class, java.lang.Object[])}
 **/
java.lang.ClassLoader.prototype.setSigners = function() {
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
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAncestor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#isAncestor(java.lang.ClassLoader)}
 **/
java.lang.ClassLoader.prototype.isAncestor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAncestor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#resolveClass(java.lang.Class)}
 **/
java.lang.ClassLoader.prototype.resolveClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#loadClass(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#loadClass(java.lang.String, boolean)}
 **/
java.lang.ClassLoader.prototype.loadClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getPackages()}
 **/
java.lang.ClassLoader.prototype.getPackages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoadingLock
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getClassLoadingLock(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.getClassLoadingLock = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassLoadingLock',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findLibrary
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findLibrary(java.lang.String)}
 **/
java.lang.ClassLoader.prototype.findLibrary = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findLibrary',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new java.lang.ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ClassLoader;
