/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.DatagramSocketImpl
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.DatagramSocketImpl
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html}
 **/
java.net.DatagramSocketImpl = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.net.DatagramSocketImpl') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.net.DatagramSocketImpl. Create a subclass using java.net.DatagramSocketImpl.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.DatagramSocketImpl.prototype = Object.create(SuperClass.prototype);
java.net.DatagramSocketImpl.prototype.constructor = java.net.DatagramSocketImpl;

java.net.DatagramSocketImpl.className = "java.net.DatagramSocketImpl";
java.net.DatagramSocketImpl.prototype.className = "java.net.DatagramSocketImpl";

// class property
Object.defineProperty(java.net.DatagramSocketImpl, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.net.DatagramSocketImpl',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.net.DatagramSocketImpl.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.net.DatagramSocketImpl',
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
	whatever.prototype = Object.create(java.net.DatagramSocketImpl.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/net/DatagramSocketImpl.html#localPort
Object.defineProperty(java.net.DatagramSocketImpl.prototype, 'localPort', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'localPort'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.DatagramSocketImpl') {
				return new java.net.DatagramSocketImpl(result);
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
			field: 'localPort',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/DatagramSocketImpl.html#fd
Object.defineProperty(java.net.DatagramSocketImpl.prototype, 'fd', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'fd'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.DatagramSocketImpl') {
				return new java.net.DatagramSocketImpl(result);
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
			field: 'fd',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function disconnect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#disconnect()}
 **/
java.net.DatagramSocketImpl.prototype.disconnect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disconnect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function receive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#receive(java.net.DatagramPacket)}
 **/
java.net.DatagramSocketImpl.prototype.receive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'receive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#getLocalPort()}
 **/
java.net.DatagramSocketImpl.prototype.getLocalPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTTL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#setTTL(byte)}
 **/
java.net.DatagramSocketImpl.prototype.setTTL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTTL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTimeToLive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#getTimeToLive()}
 **/
java.net.DatagramSocketImpl.prototype.getTimeToLive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTimeToLive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function joinGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#joinGroup(java.net.SocketAddress, java.net.NetworkInterface)}
 **/
java.net.DatagramSocketImpl.prototype.joinGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'joinGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function leaveGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#leaveGroup(java.net.SocketAddress, java.net.NetworkInterface)}
 **/
java.net.DatagramSocketImpl.prototype.leaveGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'leaveGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peek
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#peek(java.net.InetAddress)}
 **/
java.net.DatagramSocketImpl.prototype.peek = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peek',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#bind(int, java.net.InetAddress)}
 **/
java.net.DatagramSocketImpl.prototype.bind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#peekData(java.net.DatagramPacket)}
 **/
java.net.DatagramSocketImpl.prototype.peekData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peekData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function leave
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#leave(java.net.InetAddress)}
 **/
java.net.DatagramSocketImpl.prototype.leave = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'leave',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#getFileDescriptor()}
 **/
java.net.DatagramSocketImpl.prototype.getFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function create
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#create()}
 **/
java.net.DatagramSocketImpl.prototype.create = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'create',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function join
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#join(java.net.InetAddress)}
 **/
java.net.DatagramSocketImpl.prototype.join = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'join',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTimeToLive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#setTimeToLive(int)}
 **/
java.net.DatagramSocketImpl.prototype.setTimeToLive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTimeToLive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function send
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#send(java.net.DatagramPacket)}
 **/
java.net.DatagramSocketImpl.prototype.send = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'send',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#close()}
 **/
java.net.DatagramSocketImpl.prototype.close = function() {
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
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function connect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#connect(java.net.InetAddress, int)}
 **/
java.net.DatagramSocketImpl.prototype.connect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'connect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTTL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#getTTL()}
 **/
java.net.DatagramSocketImpl.prototype.getTTL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTTL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new java.net.DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.DatagramSocketImpl;
