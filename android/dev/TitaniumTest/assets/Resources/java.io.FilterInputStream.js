/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.FilterInputStream
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.FilterInputStream
 * @extends java.io.InputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html}
 **/
java.io.FilterInputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.FilterInputStream') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.FilterInputStream',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.InputStream');
java.io.FilterInputStream.prototype = Object.create(SuperClass.prototype);
java.io.FilterInputStream.prototype.constructor = java.io.FilterInputStream;

java.io.FilterInputStream.className = "java.io.FilterInputStream";
java.io.FilterInputStream.prototype.className = "java.io.FilterInputStream";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/FilterInputStream.html#in
Object.defineProperty(java.io.FilterInputStream.prototype, 'in', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'in'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.FilterInputStream') {
				return new java.io.FilterInputStream(result);
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
			field: 'in',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#read()}
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#read(byte[])}
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#read(byte[], int, int)}
 **/
java.io.FilterInputStream.prototype.read = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'read',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FilterInputStream') {
			return new java.io.FilterInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function markSupported
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#markSupported()}
 **/
java.io.FilterInputStream.prototype.markSupported = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'markSupported',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FilterInputStream') {
			return new java.io.FilterInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function available
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#available()}
 **/
java.io.FilterInputStream.prototype.available = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'available',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FilterInputStream') {
			return new java.io.FilterInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#reset()}
 **/
java.io.FilterInputStream.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FilterInputStream') {
			return new java.io.FilterInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skip
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#skip(long)}
 **/
java.io.FilterInputStream.prototype.skip = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'skip',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FilterInputStream') {
			return new java.io.FilterInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#close()}
 **/
java.io.FilterInputStream.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FilterInputStream') {
			return new java.io.FilterInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mark
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FilterInputStream.html#mark(int)}
 **/
java.io.FilterInputStream.prototype.mark = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'mark',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FilterInputStream') {
			return new java.io.FilterInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.FilterInputStream;
