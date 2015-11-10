/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.Charset
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.charset = global.java.nio.charset || {};

/**
 * @class java.nio.charset.Charset
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html}
 **/
java.nio.charset.Charset = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.charset.Charset') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.charset.Charset. Create a subclass using java.nio.charset.Charset.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.charset.Charset.prototype = Object.create(SuperClass.prototype);
java.nio.charset.Charset.prototype.constructor = java.nio.charset.Charset;

java.nio.charset.Charset.className = "java.nio.charset.Charset";
java.nio.charset.Charset.prototype.className = "java.nio.charset.Charset";

// class property
Object.defineProperty(java.nio.charset.Charset, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.charset.Charset',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.charset.Charset.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.charset.Charset',
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
	whatever.prototype = Object.create(java.nio.charset.Charset.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function forName
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#forName(java.lang.String)}
 **/
java.nio.charset.Charset.forName = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'forName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defaultCharset
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#defaultCharset()}
 **/
java.nio.charset.Charset.defaultCharset = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'defaultCharset',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSupported
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#isSupported(java.lang.String)}
 **/
java.nio.charset.Charset.isSupported = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isSupported',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function availableCharsets
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#availableCharsets()}
 **/
java.nio.charset.Charset.availableCharsets = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'availableCharsets',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
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
 * @function encode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#encode(java.nio.CharBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#encode(java.lang.String)}
 **/
java.nio.charset.Charset.prototype.encode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function aliases
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#aliases()}
 **/
java.nio.charset.Charset.prototype.aliases = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'aliases',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function displayName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#displayName()}
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#displayName(java.util.Locale)}
 **/
java.nio.charset.Charset.prototype.displayName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'displayName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newDecoder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#newDecoder()}
 **/
java.nio.charset.Charset.prototype.newDecoder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newDecoder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#compareTo(java.nio.charset.Charset)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#compareTo(java.lang.Object)}
 **/
java.nio.charset.Charset.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#decode(java.nio.ByteBuffer)}
 **/
java.nio.charset.Charset.prototype.decode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'decode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function contains
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#contains(java.nio.charset.Charset)}
 **/
java.nio.charset.Charset.prototype.contains = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'contains',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#hashCode()}
 **/
java.nio.charset.Charset.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canEncode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#canEncode()}
 **/
java.nio.charset.Charset.prototype.canEncode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canEncode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#equals(java.lang.Object)}
 **/
java.nio.charset.Charset.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function name
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#name()}
 **/
java.nio.charset.Charset.prototype.name = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'name',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newEncoder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#newEncoder()}
 **/
java.nio.charset.Charset.prototype.newEncoder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newEncoder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRegistered
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#isRegistered()}
 **/
java.nio.charset.Charset.prototype.isRegistered = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRegistered',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#toString()}
 **/
java.nio.charset.Charset.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new java.nio.charset.Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.charset.Charset;
