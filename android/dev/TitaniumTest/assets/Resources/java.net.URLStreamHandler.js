/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.URLStreamHandler
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.URLStreamHandler
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html}
 **/
java.net.URLStreamHandler = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.net.URLStreamHandler') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.net.URLStreamHandler. Create a subclass using java.net.URLStreamHandler.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.URLStreamHandler.prototype = Object.create(SuperClass.prototype);
java.net.URLStreamHandler.prototype.constructor = java.net.URLStreamHandler;

java.net.URLStreamHandler.className = "java.net.URLStreamHandler";
java.net.URLStreamHandler.prototype.className = "java.net.URLStreamHandler";

// class property
Object.defineProperty(java.net.URLStreamHandler, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.net.URLStreamHandler',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.net.URLStreamHandler.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.net.URLStreamHandler',
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
	whatever.prototype = Object.create(java.net.URLStreamHandler.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function parseURL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#parseURL(java.net.URL, java.lang.String, int, int)}
 **/
java.net.URLStreamHandler.prototype.parseURL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseURL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toExternalForm
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#toExternalForm(java.net.URL)}
 **/
java.net.URLStreamHandler.prototype.toExternalForm = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toExternalForm',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hostsEqual
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#hostsEqual(java.net.URL, java.net.URL)}
 **/
java.net.URLStreamHandler.prototype.hostsEqual = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hostsEqual',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#getDefaultPort()}
 **/
java.net.URLStreamHandler.prototype.getDefaultPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDefaultPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openConnection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#openConnection(java.net.URL)}
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#openConnection(java.net.URL, java.net.Proxy)}
 **/
java.net.URLStreamHandler.prototype.openConnection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openConnection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#hashCode(java.net.URL)}
 **/
java.net.URLStreamHandler.prototype.hashCode = function() {
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
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sameFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#sameFile(java.net.URL, java.net.URL)}
 **/
java.net.URLStreamHandler.prototype.sameFile = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sameFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#equals(java.net.URL, java.net.URL)}
 **/
java.net.URLStreamHandler.prototype.equals = function() {
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
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHostAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#getHostAddress(java.net.URL)}
 **/
java.net.URLStreamHandler.prototype.getHostAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHostAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setURL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#setURL(java.net.URL, java.lang.String, java.lang.String, int, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#setURL(java.net.URL, java.lang.String, java.lang.String, int, java.lang.String, java.lang.String)}
 **/
java.net.URLStreamHandler.prototype.setURL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setURL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new java.net.URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.URLStreamHandler;
