/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ref.ReferenceQueue
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ref = global.java.lang.ref || {};

/**
 * @class java.lang.ref.ReferenceQueue
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ref/ReferenceQueue.html}
 **/
java.lang.ref.ReferenceQueue = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ref.ReferenceQueue') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ref.ReferenceQueue',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ref.ReferenceQueue.prototype = Object.create(SuperClass.prototype);
java.lang.ref.ReferenceQueue.prototype.constructor = java.lang.ref.ReferenceQueue;

java.lang.ref.ReferenceQueue.className = "java.lang.ref.ReferenceQueue";
java.lang.ref.ReferenceQueue.prototype.className = "java.lang.ref.ReferenceQueue";

// Constants

// Static fields
// http://developer.android.com/reference/java/lang/ref/ReferenceQueue.html#ENQUEUED
Object.defineProperty(java.lang.ref.ReferenceQueue, 'ENQUEUED', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'ENQUEUED'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ref.ReferenceQueue') {
				return new java.lang.ref.ReferenceQueue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return;

		classProxy.setNativeField({
			field: 'ENQUEUED',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ref/ReferenceQueue.html#NULL
Object.defineProperty(java.lang.ref.ReferenceQueue, 'NULL', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'NULL'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ref.ReferenceQueue') {
				return new java.lang.ref.ReferenceQueue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return;

		classProxy.setNativeField({
			field: 'NULL',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ref/ReferenceQueue.html#$assertionsDisabled
Object.defineProperty(java.lang.ref.ReferenceQueue, '$assertionsDisabled', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: '$assertionsDisabled'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ref.ReferenceQueue') {
				return new java.lang.ref.ReferenceQueue(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function enqueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ref/ReferenceQueue.html#enqueue(java.lang.ref.Reference)}
 **/
java.lang.ref.ReferenceQueue.prototype.enqueue = function() {
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
		if (result.apiName === 'java.lang.ref.ReferenceQueue') {
			return new java.lang.ref.ReferenceQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function poll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ref/ReferenceQueue.html#poll()}
 **/
java.lang.ref.ReferenceQueue.prototype.poll = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'poll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ref.ReferenceQueue') {
			return new java.lang.ref.ReferenceQueue(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ref/ReferenceQueue.html#remove(long)}
 * @see {@link http://developer.android.com/reference/java/lang/ref/ReferenceQueue.html#remove()}
 **/
java.lang.ref.ReferenceQueue.prototype.remove = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'remove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ref.ReferenceQueue') {
			return new java.lang.ref.ReferenceQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ref.ReferenceQueue;
