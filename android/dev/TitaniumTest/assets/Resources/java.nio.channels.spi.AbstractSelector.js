/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.spi.AbstractSelector
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};
global.java.nio.channels.spi = global.java.nio.channels.spi || {};

/**
 * @class java.nio.channels.spi.AbstractSelector
 * @extends java.nio.channels.Selector 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html}
 **/
java.nio.channels.spi.AbstractSelector = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.channels.spi.AbstractSelector') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.spi.AbstractSelector. Create a subclass using java.nio.channels.spi.AbstractSelector.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.Selector');
java.nio.channels.spi.AbstractSelector.prototype = Object.create(SuperClass.prototype);
java.nio.channels.spi.AbstractSelector.prototype.constructor = java.nio.channels.spi.AbstractSelector;

java.nio.channels.spi.AbstractSelector.className = "java.nio.channels.spi.AbstractSelector";
java.nio.channels.spi.AbstractSelector.prototype.className = "java.nio.channels.spi.AbstractSelector";

// class property
Object.defineProperty(java.nio.channels.spi.AbstractSelector, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.channels.spi.AbstractSelector',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.channels.spi.AbstractSelector.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.channels.spi.AbstractSelector',
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
	whatever.prototype = Object.create(java.nio.channels.spi.AbstractSelector.prototype);
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
 * @function cancelledKeys
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#cancelledKeys()}
 **/
java.nio.channels.spi.AbstractSelector.prototype.cancelledKeys = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancelledKeys',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#isOpen()}
 **/
java.nio.channels.spi.AbstractSelector.prototype.isOpen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function provider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#provider()}
 **/
java.nio.channels.spi.AbstractSelector.prototype.provider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'provider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deregister
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#deregister(java.nio.channels.spi.AbstractSelectionKey)}
 **/
java.nio.channels.spi.AbstractSelector.prototype.deregister = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deregister',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function end
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#end()}
 **/
java.nio.channels.spi.AbstractSelector.prototype.end = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'end',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#close()}
 **/
java.nio.channels.spi.AbstractSelector.prototype.close = function() {
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
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implCloseSelector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#implCloseSelector()}
 **/
java.nio.channels.spi.AbstractSelector.prototype.implCloseSelector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implCloseSelector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function begin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#begin()}
 **/
java.nio.channels.spi.AbstractSelector.prototype.begin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'begin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function register
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/AbstractSelector.html#register(java.nio.channels.spi.AbstractSelectableChannel, int, java.lang.Object)}
 **/
java.nio.channels.spi.AbstractSelector.prototype.register = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'register',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.AbstractSelector') {
			return new java.nio.channels.spi.AbstractSelector(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.spi.AbstractSelector;
