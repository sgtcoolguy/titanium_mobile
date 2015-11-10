/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Exception
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.Exception
 * @extends java.lang.Throwable 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Exception.html}
 **/
java.lang.Exception = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.lang.Exception') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.Exception',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Throwable');
java.lang.Exception.prototype = Object.create(SuperClass.prototype);
java.lang.Exception.prototype.constructor = java.lang.Exception;

java.lang.Exception.className = "java.lang.Exception";
java.lang.Exception.prototype.className = "java.lang.Exception";

// class property
Object.defineProperty(java.lang.Exception, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.lang.Exception',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.lang.Exception.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.lang.Exception',
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
	whatever.prototype = Object.create(java.lang.Exception.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = java.lang.Exception;
