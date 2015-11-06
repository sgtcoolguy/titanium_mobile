/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ThreadLocal
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.ThreadLocal
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html}
 **/
java.lang.ThreadLocal = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ThreadLocal') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ThreadLocal',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ThreadLocal.prototype = Object.create(SuperClass.prototype);
java.lang.ThreadLocal.prototype.constructor = java.lang.ThreadLocal;

java.lang.ThreadLocal.className = "java.lang.ThreadLocal";
java.lang.ThreadLocal.prototype.className = "java.lang.ThreadLocal";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function access$400
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#access$400(java.lang.ThreadLocal)}
 **/
java.lang.ThreadLocal.access$400 = function() {
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
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createInheritedMap
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#createInheritedMap(java.lang.ThreadLocal$ThreadLocalMap)}
 **/
java.lang.ThreadLocal.createInheritedMap = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createInheritedMap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withInitial
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#withInitial(java.util.function.Supplier)}
 **/
java.lang.ThreadLocal.withInitial = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'withInitial',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
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
 * @function set
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#set(java.lang.Object)}
 **/
java.lang.ThreadLocal.prototype.set = function() {
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
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#get()}
 **/
java.lang.ThreadLocal.prototype.get = function() {
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
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#createMap(java.lang.Thread, java.lang.Object)}
 **/
java.lang.ThreadLocal.prototype.createMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function childValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#childValue(java.lang.Object)}
 **/
java.lang.ThreadLocal.prototype.childValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'childValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initialValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#initialValue()}
 **/
java.lang.ThreadLocal.prototype.initialValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initialValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#remove()}
 **/
java.lang.ThreadLocal.prototype.remove = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'remove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadLocal.html#getMap(java.lang.Thread)}
 **/
java.lang.ThreadLocal.prototype.getMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadLocal') {
			return new java.lang.ThreadLocal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ThreadLocal;
