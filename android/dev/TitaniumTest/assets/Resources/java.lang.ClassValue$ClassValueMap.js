/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ClassValue.ClassValueMap
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};
global.java.lang.ClassValue = global.java.lang.ClassValue || {};

/**
 * @class java.lang.ClassValue.ClassValueMap
 * @extends java.util.WeakHashMap 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html}
 **/
java.lang.ClassValue.ClassValueMap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ClassValue$ClassValueMap') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ClassValue$ClassValueMap',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.WeakHashMap');
java.lang.ClassValue.ClassValueMap.prototype = Object.create(SuperClass.prototype);
java.lang.ClassValue.ClassValueMap.prototype.constructor = java.lang.ClassValue.ClassValueMap;

java.lang.ClassValue.ClassValueMap.className = "java.lang.ClassValue$ClassValueMap";
java.lang.ClassValue.ClassValueMap.prototype.className = "java.lang.ClassValue$ClassValueMap";

// Constants

// Static fields
// http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#$assertionsDisabled
Object.defineProperty(java.lang.ClassValue.ClassValueMap, '$assertionsDisabled', {
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
			if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
				return new java.lang.ClassValue.ClassValueMap(result);
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
 * @function loadFromCache
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#loadFromCache(java.lang.ClassValue$Entry[], int)}
 **/
java.lang.ClassValue.ClassValueMap.loadFromCache = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'loadFromCache',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
			return new java.lang.ClassValue.ClassValueMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function probeHomeLocation
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#probeHomeLocation(java.lang.ClassValue$Entry[], java.lang.ClassValue)}
 **/
java.lang.ClassValue.ClassValueMap.probeHomeLocation = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'probeHomeLocation',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
			return new java.lang.ClassValue.ClassValueMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function probeBackupLocations
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#probeBackupLocations(java.lang.ClassValue$Entry[], java.lang.ClassValue)}
 **/
java.lang.ClassValue.ClassValueMap.probeBackupLocations = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'probeBackupLocations',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
			return new java.lang.ClassValue.ClassValueMap(result);
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
 * @function removeEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#removeEntry(java.lang.ClassValue)}
 **/
java.lang.ClassValue.ClassValueMap.prototype.removeEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
			return new java.lang.ClassValue.ClassValueMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCache
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#getCache()}
 **/
java.lang.ClassValue.ClassValueMap.prototype.getCache = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCache',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
			return new java.lang.ClassValue.ClassValueMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function changeEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#changeEntry(java.lang.ClassValue, java.lang.Object)}
 **/
java.lang.ClassValue.ClassValueMap.prototype.changeEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'changeEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
			return new java.lang.ClassValue.ClassValueMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#finishEntry(java.lang.ClassValue, java.lang.ClassValue$Entry)}
 **/
java.lang.ClassValue.ClassValueMap.prototype.finishEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
			return new java.lang.ClassValue.ClassValueMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassValue.ClassValueMap.html#startEntry(java.lang.ClassValue)}
 **/
java.lang.ClassValue.ClassValueMap.prototype.startEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassValue$ClassValueMap') {
			return new java.lang.ClassValue.ClassValueMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ClassValue.ClassValueMap;
