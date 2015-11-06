/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.CharsetDecoder
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.charset = global.java.nio.charset || {};

/**
 * @class java.nio.charset.CharsetDecoder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html}
 **/
java.nio.charset.CharsetDecoder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.charset.CharsetDecoder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.charset.CharsetDecoder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.charset.CharsetDecoder.prototype = Object.create(SuperClass.prototype);
java.nio.charset.CharsetDecoder.prototype.constructor = java.nio.charset.CharsetDecoder;

java.nio.charset.CharsetDecoder.className = "java.nio.charset.CharsetDecoder";
java.nio.charset.CharsetDecoder.prototype.className = "java.nio.charset.CharsetDecoder";

// Constants

// Static fields
// http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#$assertionsDisabled
Object.defineProperty(java.nio.charset.CharsetDecoder, '$assertionsDisabled', {
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
			if (result.apiName === 'java.nio.charset.CharsetDecoder') {
				return new java.nio.charset.CharsetDecoder(result);
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
 * @function averageCharsPerByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#averageCharsPerByte()}
 **/
java.nio.charset.CharsetDecoder.prototype.averageCharsPerByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'averageCharsPerByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implFlush
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implFlush(java.nio.CharBuffer)}
 **/
java.nio.charset.CharsetDecoder.prototype.implFlush = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implFlush',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function charset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#charset()}
 **/
java.nio.charset.CharsetDecoder.prototype.charset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'charset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function maxCharsPerByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#maxCharsPerByte()}
 **/
java.nio.charset.CharsetDecoder.prototype.maxCharsPerByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'maxCharsPerByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decodeLoop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#decodeLoop(java.nio.ByteBuffer, java.nio.CharBuffer)}
 **/
java.nio.charset.CharsetDecoder.prototype.decodeLoop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'decodeLoop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onUnmappableCharacter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#onUnmappableCharacter(java.nio.charset.CodingErrorAction)}
 **/
java.nio.charset.CharsetDecoder.prototype.onUnmappableCharacter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onUnmappableCharacter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implReset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implReset()}
 **/
java.nio.charset.CharsetDecoder.prototype.implReset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implReset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implOnMalformedInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implOnMalformedInput(java.nio.charset.CodingErrorAction)}
 **/
java.nio.charset.CharsetDecoder.prototype.implOnMalformedInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implOnMalformedInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#decode(java.nio.ByteBuffer, java.nio.CharBuffer, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#decode(java.nio.ByteBuffer)}
 **/
java.nio.charset.CharsetDecoder.prototype.decode = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCharsetDetected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#isCharsetDetected()}
 **/
java.nio.charset.CharsetDecoder.prototype.isCharsetDetected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCharsetDetected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAutoDetecting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#isAutoDetecting()}
 **/
java.nio.charset.CharsetDecoder.prototype.isAutoDetecting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAutoDetecting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unmappableCharacterAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#unmappableCharacterAction()}
 **/
java.nio.charset.CharsetDecoder.prototype.unmappableCharacterAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unmappableCharacterAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function malformedInputAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#malformedInputAction()}
 **/
java.nio.charset.CharsetDecoder.prototype.malformedInputAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'malformedInputAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#flush(java.nio.CharBuffer)}
 **/
java.nio.charset.CharsetDecoder.prototype.flush = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detectedCharset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#detectedCharset()}
 **/
java.nio.charset.CharsetDecoder.prototype.detectedCharset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detectedCharset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMalformedInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#onMalformedInput(java.nio.charset.CodingErrorAction)}
 **/
java.nio.charset.CharsetDecoder.prototype.onMalformedInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMalformedInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#reset()}
 **/
java.nio.charset.CharsetDecoder.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implReplaceWith
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implReplaceWith(java.lang.String)}
 **/
java.nio.charset.CharsetDecoder.prototype.implReplaceWith = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implReplaceWith',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implOnUnmappableCharacter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implOnUnmappableCharacter(java.nio.charset.CodingErrorAction)}
 **/
java.nio.charset.CharsetDecoder.prototype.implOnUnmappableCharacter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implOnUnmappableCharacter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replacement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#replacement()}
 **/
java.nio.charset.CharsetDecoder.prototype.replacement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replacement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceWith
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#replaceWith(java.lang.String)}
 **/
java.nio.charset.CharsetDecoder.prototype.replaceWith = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceWith',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new java.nio.charset.CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.charset.CharsetDecoder;
