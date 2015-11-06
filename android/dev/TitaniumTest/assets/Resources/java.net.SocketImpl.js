/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.SocketImpl
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.SocketImpl
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html}
 **/
java.net.SocketImpl = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.net.SocketImpl') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.SocketImpl',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.SocketImpl.prototype = Object.create(SuperClass.prototype);
java.net.SocketImpl.prototype.constructor = java.net.SocketImpl;

java.net.SocketImpl.className = "java.net.SocketImpl";
java.net.SocketImpl.prototype.className = "java.net.SocketImpl";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/net/SocketImpl.html#address
Object.defineProperty(java.net.SocketImpl.prototype, 'address', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'address'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.SocketImpl') {
				return new java.net.SocketImpl(result);
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
			field: 'address',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/SocketImpl.html#port
Object.defineProperty(java.net.SocketImpl.prototype, 'port', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'port'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.SocketImpl') {
				return new java.net.SocketImpl(result);
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
			field: 'port',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/SocketImpl.html#serverSocket
Object.defineProperty(java.net.SocketImpl.prototype, 'serverSocket', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'serverSocket'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.SocketImpl') {
				return new java.net.SocketImpl(result);
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
			field: 'serverSocket',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/SocketImpl.html#localport
Object.defineProperty(java.net.SocketImpl.prototype, 'localport', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'localport'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.SocketImpl') {
				return new java.net.SocketImpl(result);
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
			field: 'localport',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/SocketImpl.html#socket
Object.defineProperty(java.net.SocketImpl.prototype, 'socket', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'socket'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.SocketImpl') {
				return new java.net.SocketImpl(result);
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
			field: 'socket',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/SocketImpl.html#fd
Object.defineProperty(java.net.SocketImpl.prototype, 'fd', {
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
			if (result.apiName === 'java.net.SocketImpl') {
				return new java.net.SocketImpl(result);
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
 * @function getInetAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getInetAddress()}
 **/
java.net.SocketImpl.prototype.getInetAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInetAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getLocalPort()}
 **/
java.net.SocketImpl.prototype.getLocalPort = function() {
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
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function available
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#available()}
 **/
java.net.SocketImpl.prototype.available = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'available',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getServerSocket
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getServerSocket()}
 **/
java.net.SocketImpl.prototype.getServerSocket = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getServerSocket',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOption
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getOption(java.net.SocketOption)}
 **/
java.net.SocketImpl.prototype.getOption = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOption',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function listen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#listen(int)}
 **/
java.net.SocketImpl.prototype.listen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'listen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#bind(java.net.InetAddress, int)}
 **/
java.net.SocketImpl.prototype.bind = function() {
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
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function supportsUrgentData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#supportsUrgentData()}
 **/
java.net.SocketImpl.prototype.supportsUrgentData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportsUrgentData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setServerSocket
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#setServerSocket(java.net.ServerSocket)}
 **/
java.net.SocketImpl.prototype.setServerSocket = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setServerSocket',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getFileDescriptor()}
 **/
java.net.SocketImpl.prototype.getFileDescriptor = function() {
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
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#create(boolean)}
 **/
java.net.SocketImpl.prototype.create = function() {
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
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#close()}
 **/
java.net.SocketImpl.prototype.close = function() {
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
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#connect(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#connect(java.net.InetAddress, int)}
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#connect(java.net.SocketAddress, int)}
 **/
java.net.SocketImpl.prototype.connect = function() {
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
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSocket
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#setSocket(java.net.Socket)}
 **/
java.net.SocketImpl.prototype.setSocket = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSocket',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOption
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#setOption(java.net.SocketOption, java.lang.Object)}
 **/
java.net.SocketImpl.prototype.setOption = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOption',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getInputStream()}
 **/
java.net.SocketImpl.prototype.getInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shutdownOutput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#shutdownOutput()}
 **/
java.net.SocketImpl.prototype.shutdownOutput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shutdownOutput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function accept
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#accept(java.net.SocketImpl)}
 **/
java.net.SocketImpl.prototype.accept = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'accept',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shutdownInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#shutdownInput()}
 **/
java.net.SocketImpl.prototype.shutdownInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shutdownInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPerformancePreferences
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#setPerformancePreferences(int, int, int)}
 **/
java.net.SocketImpl.prototype.setPerformancePreferences = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPerformancePreferences',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getPort()}
 **/
java.net.SocketImpl.prototype.getPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendUrgentData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#sendUrgentData(int)}
 **/
java.net.SocketImpl.prototype.sendUrgentData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendUrgentData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSocket
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getSocket()}
 **/
java.net.SocketImpl.prototype.getSocket = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSocket',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#reset()}
 **/
java.net.SocketImpl.prototype.reset = function() {
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
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#getOutputStream()}
 **/
java.net.SocketImpl.prototype.getOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
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
 * @see {@link http://developer.android.com/reference/java/net/SocketImpl.html#toString()}
 **/
java.net.SocketImpl.prototype.toString = function() {
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
		if (result.apiName === 'java.net.SocketImpl') {
			return new java.net.SocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.SocketImpl;
