/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.SelectableChannel
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.channels = global.java.nio.channels || {};

/**
 * @class java.nio.channels.SelectableChannel
 * @extends java.nio.channels.spi.AbstractInterruptibleChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html}
 **/
java.nio.channels.SelectableChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.nio.channels.SelectableChannel') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.SelectableChannel. Create a subclass using java.nio.channels.SelectableChannel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractInterruptibleChannel');
java.nio.channels.SelectableChannel.prototype = Object.create(SuperClass.prototype);
java.nio.channels.SelectableChannel.prototype.constructor = java.nio.channels.SelectableChannel;

java.nio.channels.SelectableChannel.className = "java.nio.channels.SelectableChannel";
java.nio.channels.SelectableChannel.prototype.className = "java.nio.channels.SelectableChannel";

// class property
Object.defineProperty(java.nio.channels.SelectableChannel, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.nio.channels.SelectableChannel',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.nio.channels.SelectableChannel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.nio.channels.SelectableChannel',
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
	whatever.prototype = Object.create(java.nio.channels.SelectableChannel.prototype);
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
 * @function isBlocking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#isBlocking()}
 **/
java.nio.channels.SelectableChannel.prototype.isBlocking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isBlocking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new java.nio.channels.SelectableChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#provider()}
 **/
java.nio.channels.SelectableChannel.prototype.provider = function() {
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
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new java.nio.channels.SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keyFor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#keyFor(java.nio.channels.Selector)}
 **/
java.nio.channels.SelectableChannel.prototype.keyFor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keyFor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new java.nio.channels.SelectableChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#isRegistered()}
 **/
java.nio.channels.SelectableChannel.prototype.isRegistered = function() {
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
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new java.nio.channels.SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function blockingLock
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#blockingLock()}
 **/
java.nio.channels.SelectableChannel.prototype.blockingLock = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'blockingLock',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new java.nio.channels.SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function validOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#validOps()}
 **/
java.nio.channels.SelectableChannel.prototype.validOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'validOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new java.nio.channels.SelectableChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#register(java.nio.channels.Selector, int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#register(java.nio.channels.Selector, int)}
 **/
java.nio.channels.SelectableChannel.prototype.register = function() {
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
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new java.nio.channels.SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function configureBlocking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#configureBlocking(boolean)}
 **/
java.nio.channels.SelectableChannel.prototype.configureBlocking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'configureBlocking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new java.nio.channels.SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.channels.SelectableChannel;
