/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.PrintWriter
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.io = global.java.io || {};

/**
 * @class java.io.PrintWriter
 * @extends java.io.Writer 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html}
 **/
java.io.PrintWriter = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.io.PrintWriter') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.io.PrintWriter',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.Writer');
java.io.PrintWriter.prototype = Object.create(SuperClass.prototype);
java.io.PrintWriter.prototype.constructor = java.io.PrintWriter;

java.io.PrintWriter.className = "java.io.PrintWriter";
java.io.PrintWriter.prototype.className = "java.io.PrintWriter";

// class property
Object.defineProperty(java.io.PrintWriter, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.io.PrintWriter',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.io.PrintWriter.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.io.PrintWriter',
		overrides: overrides
	});

	// Generate a JS wrapper for our dynamic subclass
	var whatever = function() {
		var result = subclassProxy.newInstance(arguments);
		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};

		// TODO Set up super?!
	};
	// it extends the JS wrapper for the parent type
	whatever.prototype = Object.create(java.io.PrintWriter.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/PrintWriter.html#out
Object.defineProperty(java.io.PrintWriter.prototype, 'out', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'out'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.PrintWriter') {
				return new java.io.PrintWriter(result);
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
			field: 'out',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function print
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(boolean)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(long)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(float)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(double)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(char[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(java.lang.Object)}
 **/
java.io.PrintWriter.prototype.print = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'print',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function println
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println()}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(boolean)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(long)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(float)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(double)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(char[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(java.lang.Object)}
 **/
java.io.PrintWriter.prototype.println = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'println',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flush
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#flush()}
 **/
java.io.PrintWriter.prototype.flush = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#setError()}
 **/
java.io.PrintWriter.prototype.setError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#clearError()}
 **/
java.io.PrintWriter.prototype.clearError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function format
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#format(java.lang.String, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#format(java.util.Locale, java.lang.String, java.lang.Object[])}
 **/
java.io.PrintWriter.prototype.format = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'format',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#checkError()}
 **/
java.io.PrintWriter.prototype.checkError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#close()}
 **/
java.io.PrintWriter.prototype.close = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(char[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(java.lang.String, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(java.lang.String)}
 **/
java.io.PrintWriter.prototype.write = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence)}
 **/
java.io.PrintWriter.prototype.append = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function printf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#printf(java.lang.String, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#printf(java.util.Locale, java.lang.String, java.lang.Object[])}
 **/
java.io.PrintWriter.prototype.printf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'printf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintWriter') {
			return new java.io.PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.io.PrintWriter;
