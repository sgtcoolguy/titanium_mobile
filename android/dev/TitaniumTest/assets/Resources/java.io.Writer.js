/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.Writer
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.Writer
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/Writer.html}
 **/
java.io.Writer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.io.Writer') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.Writer',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.io.Writer.prototype = Object.create(SuperClass.prototype);
java.io.Writer.prototype.constructor = java.io.Writer;

java.io.Writer.className = "java.io.Writer";
java.io.Writer.prototype.className = "java.io.Writer";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/Writer.html#lock
Object.defineProperty(java.io.Writer.prototype, 'lock', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'lock'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.Writer') {
				return new java.io.Writer(result);
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
			field: 'lock',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function flush
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#flush()}
 **/
java.io.Writer.prototype.flush = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flush',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.Writer') {
			return new java.io.Writer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function write
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(char[])}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(java.lang.String, int, int)}
 **/
java.io.Writer.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.Writer') {
			return new java.io.Writer(result);
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
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#close()}
 **/
java.io.Writer.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.Writer') {
			return new java.io.Writer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function append
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(java.lang.CharSequence)}
 **/
java.io.Writer.prototype.append = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'append',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.Writer') {
			return new java.io.Writer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.Writer;
