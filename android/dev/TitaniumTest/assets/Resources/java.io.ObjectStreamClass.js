/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectStreamClass
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.ObjectStreamClass
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html}
 **/
java.io.ObjectStreamClass = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectStreamClass') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectStreamClass',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.ObjectStreamClass.prototype = Object.create(SuperClass.prototype);
java.io.ObjectStreamClass.prototype.constructor = java.io.ObjectStreamClass;

java.io.ObjectStreamClass.className = "java.io.ObjectStreamClass";
java.io.ObjectStreamClass.prototype.className = "java.io.ObjectStreamClass";

// Constants

// Static fields
// http://developer.android.com/reference/java/io/ObjectStreamClass.html#NO_FIELDS
Object.defineProperty(java.io.ObjectStreamClass, 'NO_FIELDS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'NO_FIELDS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.ObjectStreamClass') {
				return new java.io.ObjectStreamClass(result);
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

// Static methods
/**
 * TODO Fill out docs more...
 * @function lookupAny
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#lookupAny(java.lang.Class)}
 **/
java.io.ObjectStreamClass.lookupAny = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'lookupAny',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$2002
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$2002(java.io.ObjectStreamClass, boolean)}
 **/
java.io.ObjectStreamClass.access$2002 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$2002',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$2200
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$2200(java.lang.Class, java.lang.String, java.lang.Class[], java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$2200 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$2200',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$2400
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$2400(java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$2400 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$2400',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$400
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$400(java.io.ObjectStreamClass)}
 **/
java.io.ObjectStreamClass.access$400 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$400',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$000(java.io.ObjectStreamClass)}
 **/
java.io.ObjectStreamClass.access$000 = function() {
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
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$602
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$602(java.io.ObjectStreamClass, java.io.ObjectStreamField[])}
 **/
java.io.ObjectStreamClass.access$602 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$602',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$800
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$800(java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$800 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$800',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1802
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1802(java.io.ObjectStreamClass, java.lang.reflect.Method)}
 **/
java.io.ObjectStreamClass.access$1802 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1802',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1002
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1002(java.io.ObjectStreamClass, java.io.ObjectStreamClass$ExceptionInfo)}
 **/
java.io.ObjectStreamClass.access$1002 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1002',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1200
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1200(java.io.ObjectStreamClass)}
 **/
java.io.ObjectStreamClass.access$1200 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1200',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1400
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1400(java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$1400 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1400',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1600
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1600(java.io.ObjectStreamClass)}
 **/
java.io.ObjectStreamClass.access$1600 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1600',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1602
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1602(java.io.ObjectStreamClass, java.lang.reflect.Method)}
 **/
java.io.ObjectStreamClass.access$1602 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1602',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$2102
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$2102(java.io.ObjectStreamClass, java.lang.reflect.Method)}
 **/
java.io.ObjectStreamClass.access$2102 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$2102',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$2302
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$2302(java.io.ObjectStreamClass, java.lang.reflect.Method)}
 **/
java.io.ObjectStreamClass.access$2302 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$2302',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$2500
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$2500(java.lang.Class[], java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$2500 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$2500',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$502(java.io.ObjectStreamClass, java.lang.Long)}
 **/
java.io.ObjectStreamClass.access$502 = function() {
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
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$700
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$700(java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$700 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$700',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lookup
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#lookup(java.lang.Class)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#lookup(java.lang.Class, boolean)}
 **/
java.io.ObjectStreamClass.lookup = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'lookup',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$100(java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$100 = function() {
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
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function processQueue
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#processQueue(java.lang.ref.ReferenceQueue, java.util.concurrent.ConcurrentMap)}
 **/
java.io.ObjectStreamClass.processQueue = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'processQueue',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$900
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$900(java.io.ObjectStreamClass)}
 **/
java.io.ObjectStreamClass.access$900 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$900',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1902
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1902(java.io.ObjectStreamClass, java.lang.reflect.Method)}
 **/
java.io.ObjectStreamClass.access$1902 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1902',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1102
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1102(java.io.ObjectStreamClass, java.io.ObjectStreamClass$ExceptionInfo)}
 **/
java.io.ObjectStreamClass.access$1102 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1102',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1302
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1302(java.io.ObjectStreamClass, java.lang.reflect.Constructor)}
 **/
java.io.ObjectStreamClass.access$1302 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1302',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1500
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1500(java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$1500 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1500',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$1700
 * @static
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#access$1700(java.lang.Class, java.lang.String, java.lang.Class[], java.lang.Class)}
 **/
java.io.ObjectStreamClass.access$1700 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$1700',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @function getNumObjFields
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getNumObjFields()}
 **/
java.io.ObjectStreamClass.prototype.getNumObjFields = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getNumObjFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getName()}
 **/
java.io.ObjectStreamClass.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasWriteObjectMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#hasWriteObjectMethod()}
 **/
java.io.ObjectStreamClass.prototype.hasWriteObjectMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hasWriteObjectMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isExternalizable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#isExternalizable()}
 **/
java.io.ObjectStreamClass.prototype.isExternalizable = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isExternalizable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setObjFieldValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#setObjFieldValues(java.lang.Object, java.lang.Object[])}
 **/
java.io.ObjectStreamClass.prototype.setObjFieldValues = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'setObjFieldValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasWriteObjectData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#hasWriteObjectData()}
 **/
java.io.ObjectStreamClass.prototype.hasWriteObjectData = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hasWriteObjectData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invokeReadResolve
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#invokeReadResolve(java.lang.Object)}
 **/
java.io.ObjectStreamClass.prototype.invokeReadResolve = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'invokeReadResolve',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasReadResolveMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#hasReadResolveMethod()}
 **/
java.io.ObjectStreamClass.prototype.hasReadResolveMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hasReadResolveMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invokeWriteObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#invokeWriteObject(java.lang.Object, java.io.ObjectOutputStream)}
 **/
java.io.ObjectStreamClass.prototype.invokeWriteObject = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'invokeWriteObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassDataLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getClassDataLayout()}
 **/
java.io.ObjectStreamClass.prototype.getClassDataLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getClassDataLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getField(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getField(java.lang.String, java.lang.Class)}
 **/
java.io.ObjectStreamClass.prototype.getField = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getField',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#newInstance()}
 **/
java.io.ObjectStreamClass.prototype.newInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'newInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInstantiable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#isInstantiable()}
 **/
java.io.ObjectStreamClass.prototype.isInstantiable = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isInstantiable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isProxy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#isProxy()}
 **/
java.io.ObjectStreamClass.prototype.isProxy = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isProxy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getFields()}
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getFields(boolean)}
 **/
java.io.ObjectStreamClass.prototype.getFields = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasBlockExternalData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#hasBlockExternalData()}
 **/
java.io.ObjectStreamClass.prototype.hasBlockExternalData = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hasBlockExternalData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSerializable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#isSerializable()}
 **/
java.io.ObjectStreamClass.prototype.isSerializable = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isSerializable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invokeReadObject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#invokeReadObject(java.lang.Object, java.io.ObjectInputStream)}
 **/
java.io.ObjectStreamClass.prototype.invokeReadObject = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'invokeReadObject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkSerialize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#checkSerialize()}
 **/
java.io.ObjectStreamClass.prototype.checkSerialize = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkSerialize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasWriteReplaceMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#hasWriteReplaceMethod()}
 **/
java.io.ObjectStreamClass.prototype.hasWriteReplaceMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hasWriteReplaceMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasReadObjectNoDataMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#hasReadObjectNoDataMethod()}
 **/
java.io.ObjectStreamClass.prototype.hasReadObjectNoDataMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hasReadObjectNoDataMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrimDataSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getPrimDataSize()}
 **/
java.io.ObjectStreamClass.prototype.getPrimDataSize = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getPrimDataSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPrimFieldValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#setPrimFieldValues(java.lang.Object, byte[])}
 **/
java.io.ObjectStreamClass.prototype.setPrimFieldValues = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'setPrimFieldValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkDefaultSerialize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#checkDefaultSerialize()}
 **/
java.io.ObjectStreamClass.prototype.checkDefaultSerialize = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkDefaultSerialize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initNonProxy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#initNonProxy(java.io.ObjectStreamClass, java.lang.Class, java.lang.ClassNotFoundException, java.io.ObjectStreamClass)}
 **/
java.io.ObjectStreamClass.prototype.initNonProxy = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'initNonProxy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkDeserialize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#checkDeserialize()}
 **/
java.io.ObjectStreamClass.prototype.checkDeserialize = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'checkDeserialize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invokeWriteReplace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#invokeWriteReplace(java.lang.Object)}
 **/
java.io.ObjectStreamClass.prototype.invokeWriteReplace = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'invokeWriteReplace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasReadObjectMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#hasReadObjectMethod()}
 **/
java.io.ObjectStreamClass.prototype.hasReadObjectMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hasReadObjectMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function forClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#forClass()}
 **/
java.io.ObjectStreamClass.prototype.forClass = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'forClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResolveException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getResolveException()}
 **/
java.io.ObjectStreamClass.prototype.getResolveException = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getResolveException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getObjFieldValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getObjFieldValues(java.lang.Object, java.lang.Object[])}
 **/
java.io.ObjectStreamClass.prototype.getObjFieldValues = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getObjFieldValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrimFieldValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getPrimFieldValues(java.lang.Object, byte[])}
 **/
java.io.ObjectStreamClass.prototype.getPrimFieldValues = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getPrimFieldValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#isEnum()}
 **/
java.io.ObjectStreamClass.prototype.isEnum = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isEnum',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invokeReadObjectNoData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#invokeReadObjectNoData(java.lang.Object)}
 **/
java.io.ObjectStreamClass.prototype.invokeReadObjectNoData = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'invokeReadObjectNoData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initProxy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#initProxy(java.lang.Class, java.lang.ClassNotFoundException, java.io.ObjectStreamClass)}
 **/
java.io.ObjectStreamClass.prototype.initProxy = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'initProxy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readNonProxy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#readNonProxy(java.io.ObjectInputStream)}
 **/
java.io.ObjectStreamClass.prototype.readNonProxy = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'readNonProxy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSerialVersionUID
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getSerialVersionUID()}
 **/
java.io.ObjectStreamClass.prototype.getSerialVersionUID = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getSerialVersionUID',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalDesc
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getLocalDesc()}
 **/
java.io.ObjectStreamClass.prototype.getLocalDesc = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getLocalDesc',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeNonProxy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#writeNonProxy(java.io.ObjectOutputStream)}
 **/
java.io.ObjectStreamClass.prototype.writeNonProxy = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'writeNonProxy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSuperDesc
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#getSuperDesc()}
 **/
java.io.ObjectStreamClass.prototype.getSuperDesc = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getSuperDesc',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamClass.html#toString()}
 **/
java.io.ObjectStreamClass.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamClass') {
			return new java.io.ObjectStreamClass(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectStreamClass;
