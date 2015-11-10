/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.ObjectStreamField
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.ObjectStreamField
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html}
 **/
java.io.ObjectStreamField = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.ObjectStreamField') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.ObjectStreamField',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.ObjectStreamField.prototype = Object.create(SuperClass.prototype);
java.io.ObjectStreamField.prototype.constructor = java.io.ObjectStreamField;

java.io.ObjectStreamField.className = "java.io.ObjectStreamField";
java.io.ObjectStreamField.prototype.className = "java.io.ObjectStreamField";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#getName()}
 **/
java.io.ObjectStreamField.prototype.getName = function() {
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
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#getOffset()}
 **/
java.io.ObjectStreamField.prototype.getOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#getField()}
 **/
java.io.ObjectStreamField.prototype.getField = function() {
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
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSignature
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#getSignature()}
 **/
java.io.ObjectStreamField.prototype.getSignature = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getSignature',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#compareTo(java.lang.Object)}
 **/
java.io.ObjectStreamField.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTypeString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#getTypeString()}
 **/
java.io.ObjectStreamField.prototype.getTypeString = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getTypeString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#getType()}
 **/
java.io.ObjectStreamField.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#setOffset(int)}
 **/
java.io.ObjectStreamField.prototype.setOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'setOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#toString()}
 **/
java.io.ObjectStreamField.prototype.toString = function() {
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
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUnshared
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#isUnshared()}
 **/
java.io.ObjectStreamField.prototype.isUnshared = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isUnshared',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
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
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#isPrimitive()}
 **/
java.io.ObjectStreamField.prototype.isPrimitive = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'isPrimitive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTypeCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/ObjectStreamField.html#getTypeCode()}
 **/
java.io.ObjectStreamField.prototype.getTypeCode = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getTypeCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.ObjectStreamField') {
			return new java.io.ObjectStreamField(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.ObjectStreamField;
