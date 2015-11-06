/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.CharsetEncoder
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.charset = global.java.nio.charset || {};

/**
 * @class java.nio.charset.CharsetEncoder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html}
 **/
java.nio.charset.CharsetEncoder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.charset.CharsetEncoder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.charset.CharsetEncoder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.charset.CharsetEncoder.prototype = Object.create(SuperClass.prototype);
java.nio.charset.CharsetEncoder.prototype.constructor = java.nio.charset.CharsetEncoder;

java.nio.charset.CharsetEncoder.className = "java.nio.charset.CharsetEncoder";
java.nio.charset.CharsetEncoder.prototype.className = "java.nio.charset.CharsetEncoder";

// Constants

// Static fields
// http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#$assertionsDisabled
Object.defineProperty(java.nio.charset.CharsetEncoder, '$assertionsDisabled', {
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
			if (result.apiName === 'java.nio.charset.CharsetEncoder') {
				return new java.nio.charset.CharsetEncoder(result);
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
 * @function encode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#encode(java.nio.CharBuffer, java.nio.ByteBuffer, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#encode(java.nio.CharBuffer)}
 **/
java.nio.charset.CharsetEncoder.prototype.encode = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implFlush(java.nio.ByteBuffer)}
 **/
java.nio.charset.CharsetEncoder.prototype.implFlush = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#charset()}
 **/
java.nio.charset.CharsetEncoder.prototype.charset = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#onUnmappableCharacter(java.nio.charset.CodingErrorAction)}
 **/
java.nio.charset.CharsetEncoder.prototype.onUnmappableCharacter = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implReset()}
 **/
java.nio.charset.CharsetEncoder.prototype.implReset = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implOnMalformedInput(java.nio.charset.CodingErrorAction)}
 **/
java.nio.charset.CharsetEncoder.prototype.implOnMalformedInput = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function maxBytesPerChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#maxBytesPerChar()}
 **/
java.nio.charset.CharsetEncoder.prototype.maxBytesPerChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'maxBytesPerChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLegalReplacement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#isLegalReplacement(byte[])}
 **/
java.nio.charset.CharsetEncoder.prototype.isLegalReplacement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLegalReplacement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#unmappableCharacterAction()}
 **/
java.nio.charset.CharsetEncoder.prototype.unmappableCharacterAction = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#malformedInputAction()}
 **/
java.nio.charset.CharsetEncoder.prototype.malformedInputAction = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#flush(java.nio.ByteBuffer)}
 **/
java.nio.charset.CharsetEncoder.prototype.flush = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#canEncode(char)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#canEncode(java.lang.CharSequence)}
 **/
java.nio.charset.CharsetEncoder.prototype.canEncode = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#onMalformedInput(java.nio.charset.CodingErrorAction)}
 **/
java.nio.charset.CharsetEncoder.prototype.onMalformedInput = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function averageBytesPerChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#averageBytesPerChar()}
 **/
java.nio.charset.CharsetEncoder.prototype.averageBytesPerChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'averageBytesPerChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#reset()}
 **/
java.nio.charset.CharsetEncoder.prototype.reset = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implReplaceWith(byte[])}
 **/
java.nio.charset.CharsetEncoder.prototype.implReplaceWith = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function encodeLoop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#encodeLoop(java.nio.CharBuffer, java.nio.ByteBuffer)}
 **/
java.nio.charset.CharsetEncoder.prototype.encodeLoop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encodeLoop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implOnUnmappableCharacter(java.nio.charset.CodingErrorAction)}
 **/
java.nio.charset.CharsetEncoder.prototype.implOnUnmappableCharacter = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#replacement()}
 **/
java.nio.charset.CharsetEncoder.prototype.replacement = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#replaceWith(byte[])}
 **/
java.nio.charset.CharsetEncoder.prototype.replaceWith = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new java.nio.charset.CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.charset.CharsetEncoder;
