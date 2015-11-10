/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Stack
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.Stack
 * @extends java.util.Vector 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Stack.html}
 **/
java.util.Stack = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.Stack') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.Stack',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.Vector');
java.util.Stack.prototype = Object.create(SuperClass.prototype);
java.util.Stack.prototype.constructor = java.util.Stack;

java.util.Stack.className = "java.util.Stack";
java.util.Stack.prototype.className = "java.util.Stack";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function pop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Stack.html#pop()}
 **/
java.util.Stack.prototype.pop = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'pop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Stack') {
			return new java.util.Stack(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function search
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Stack.html#search(java.lang.Object)}
 **/
java.util.Stack.prototype.search = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'search',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Stack') {
			return new java.util.Stack(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function push
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Stack.html#push(java.lang.Object)}
 **/
java.util.Stack.prototype.push = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'push',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Stack') {
			return new java.util.Stack(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peek
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Stack.html#peek()}
 **/
java.util.Stack.prototype.peek = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'peek',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Stack') {
			return new java.util.Stack(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function empty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Stack.html#empty()}
 **/
java.util.Stack.prototype.empty = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'empty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Stack') {
			return new java.util.Stack(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.Stack;
