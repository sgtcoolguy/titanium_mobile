/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.spi.CharsetProvider
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.charset = global.java.nio.charset || {};
global.java.nio.charset.spi = global.java.nio.charset.spi || {};

/**
 * @class java.nio.charset.spi.CharsetProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/spi/CharsetProvider.html}
 **/
java.nio.charset.spi.CharsetProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.charset.spi.CharsetProvider') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.charset.spi.CharsetProvider',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.charset.spi.CharsetProvider.prototype = Object.create(SuperClass.prototype);
java.nio.charset.spi.CharsetProvider.prototype.constructor = java.nio.charset.spi.CharsetProvider;

java.nio.charset.spi.CharsetProvider.className = "java.nio.charset.spi.CharsetProvider";
java.nio.charset.spi.CharsetProvider.prototype.className = "java.nio.charset.spi.CharsetProvider";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function charsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/spi/CharsetProvider.html#charsets()}
 **/
java.nio.charset.spi.CharsetProvider.prototype.charsets = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'charsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.spi.CharsetProvider') {
			return new java.nio.charset.spi.CharsetProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function charsetForName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/spi/CharsetProvider.html#charsetForName(java.lang.String)}
 **/
java.nio.charset.spi.CharsetProvider.prototype.charsetForName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'charsetForName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.spi.CharsetProvider') {
			return new java.nio.charset.spi.CharsetProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.charset.spi.CharsetProvider;
