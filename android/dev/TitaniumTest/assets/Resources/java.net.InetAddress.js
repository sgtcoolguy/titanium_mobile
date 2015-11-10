/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.InetAddress
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.InetAddress
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html}
 **/
java.net.InetAddress = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.net.InetAddress') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.InetAddress',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.InetAddress.prototype = Object.create(SuperClass.prototype);
java.net.InetAddress.prototype.constructor = java.net.InetAddress;

java.net.InetAddress.className = "java.net.InetAddress";
java.net.InetAddress.prototype.className = "java.net.InetAddress";

// class property
Object.defineProperty(java.net.InetAddress, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.net.InetAddress',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.net.InetAddress.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.net.InetAddress',
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
	whatever.prototype = Object.create(java.net.InetAddress.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getAllByName
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getAllByName(java.lang.String)}
 **/
java.net.InetAddress.getAllByName = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getAllByName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalHost
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getLocalHost()}
 **/
java.net.InetAddress.getLocalHost = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getLocalHost',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByName
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getByName(java.lang.String)}
 **/
java.net.InetAddress.getByName = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getByName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByAddress
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getByAddress(java.lang.String, byte[])}
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getByAddress(byte[])}
 **/
java.net.InetAddress.getByAddress = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getByAddress',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLoopbackAddress
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getLoopbackAddress()}
 **/
java.net.InetAddress.getLoopbackAddress = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getLoopbackAddress',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
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
 * @function isMCSiteLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCSiteLocal()}
 **/
java.net.InetAddress.prototype.isMCSiteLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCSiteLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReachable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isReachable(int)}
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isReachable(java.net.NetworkInterface, int, int)}
 **/
java.net.InetAddress.prototype.isReachable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReachable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMCGlobal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCGlobal()}
 **/
java.net.InetAddress.prototype.isMCGlobal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCGlobal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHostName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getHostName()}
 **/
java.net.InetAddress.prototype.getHostName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHostName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMCOrgLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCOrgLocal()}
 **/
java.net.InetAddress.prototype.isMCOrgLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCOrgLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAnyLocalAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isAnyLocalAddress()}
 **/
java.net.InetAddress.prototype.isAnyLocalAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAnyLocalAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLinkLocalAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isLinkLocalAddress()}
 **/
java.net.InetAddress.prototype.isLinkLocalAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLinkLocalAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCanonicalHostName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getCanonicalHostName()}
 **/
java.net.InetAddress.prototype.getCanonicalHostName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCanonicalHostName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLoopbackAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isLoopbackAddress()}
 **/
java.net.InetAddress.prototype.isLoopbackAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLoopbackAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMCLinkLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCLinkLocal()}
 **/
java.net.InetAddress.prototype.isMCLinkLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCLinkLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSiteLocalAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isSiteLocalAddress()}
 **/
java.net.InetAddress.prototype.isSiteLocalAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSiteLocalAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMulticastAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMulticastAddress()}
 **/
java.net.InetAddress.prototype.isMulticastAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMulticastAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#hashCode()}
 **/
java.net.InetAddress.prototype.hashCode = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#equals(java.lang.Object)}
 **/
java.net.InetAddress.prototype.equals = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getAddress()}
 **/
java.net.InetAddress.prototype.getAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#toString()}
 **/
java.net.InetAddress.prototype.toString = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getHostAddress()}
 **/
java.net.InetAddress.prototype.getHostAddress = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMCNodeLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCNodeLocal()}
 **/
java.net.InetAddress.prototype.isMCNodeLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCNodeLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new java.net.InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.InetAddress;
