/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ref.Reference
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ref = global.java.lang.ref || {};

/**
 * @class java.lang.ref.Reference
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html}
 **/
java.lang.ref.Reference = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ref.Reference') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ref.Reference',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ref.Reference.prototype = Object.create(SuperClass.prototype);
java.lang.ref.Reference.prototype.constructor = java.lang.ref.Reference;

java.lang.ref.Reference.className = "java.lang.ref.Reference";
java.lang.ref.Reference.prototype.className = "java.lang.ref.Reference";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/lang/ref/Reference.html#next
Object.defineProperty(java.lang.ref.Reference.prototype, 'next', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'next'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ref.Reference') {
				return new java.lang.ref.Reference(result);
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
			field: 'next',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ref/Reference.html#queue
Object.defineProperty(java.lang.ref.Reference.prototype, 'queue', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'queue'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ref.Reference') {
				return new java.lang.ref.Reference(result);
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
			field: 'queue',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$302
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#access$302(java.lang.ref.Reference, java.lang.ref.Reference)}
 **/
java.lang.ref.Reference.access$302 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$302',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$202
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#access$202(java.lang.ref.Reference)}
 **/
java.lang.ref.Reference.access$202 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$202',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#access$300(java.lang.ref.Reference)}
 **/
java.lang.ref.Reference.access$300 = function() {
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
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#access$200()}
 **/
java.lang.ref.Reference.access$200 = function() {
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
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#access$100()}
 **/
java.lang.ref.Reference.access$100 = function() {
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
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
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
 * @function enqueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#enqueue()}
 **/
java.lang.ref.Reference.prototype.enqueue = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'enqueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#get()}
 **/
java.lang.ref.Reference.prototype.get = function() {
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
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#clear()}
 **/
java.lang.ref.Reference.prototype.clear = function() {
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
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEnqueued
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ref/Reference.html#isEnqueued()}
 **/
java.lang.ref.Reference.prototype.isEnqueued = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isEnqueued',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ref.Reference') {
			return new java.lang.ref.Reference(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ref.Reference;
