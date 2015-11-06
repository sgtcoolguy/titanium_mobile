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
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.net.InetAddress') {
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

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#IPv6}
 */
java.net.InetAddress.IPv6 = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#IPv4}
 */
java.net.InetAddress.IPv4 = 1;

// Static fields
// http://developer.android.com/reference/java/net/InetAddress.html#impl
Object.defineProperty(java.net.InetAddress, 'impl', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'impl'
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
	},
	set: function(newValue) {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return;

		classProxy.setNativeField({
			field: 'impl',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/InetAddress.html#$assertionsDisabled
Object.defineProperty(java.net.InetAddress, '$assertionsDisabled', {
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
			if (result.apiName === 'java.net.InetAddress') {
				return new java.net.InetAddress(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/InetAddress.html#preferIPv6Address
Object.defineProperty(java.net.InetAddress, 'preferIPv6Address', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'preferIPv6Address'
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
	},
	set: function(newValue) {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return;

		classProxy.setNativeField({
			field: 'preferIPv6Address',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/InetAddress.html#unknown_array
Object.defineProperty(java.net.InetAddress, 'unknown_array', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'unknown_array'
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
	},
	set: function(newValue) {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return;

		classProxy.setNativeField({
			field: 'unknown_array',
			value: newValue
		});
	},
	enumerable: true
});

// Instance Fields
// http://developer.android.com/reference/java/net/InetAddress.html#holder
Object.defineProperty(java.net.InetAddress.prototype, 'holder', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'holder'
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
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function getAllByName0
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getAllByName0(java.lang.String, boolean)}
 **/
java.net.InetAddress.getAllByName0 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getAllByName0',
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
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
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
 * @function getLoopbackAddress
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getLoopbackAddress()}
 **/
java.net.InetAddress.getLoopbackAddress = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
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
/**
 * TODO Fill out docs more...
 * @function loadImpl
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#loadImpl(java.lang.String)}
 **/
java.net.InetAddress.loadImpl = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'loadImpl',
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
 * @function getAllByName
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getAllByName(java.lang.String)}
 **/
java.net.InetAddress.getAllByName = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
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
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
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
 * @function getByAddress
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getByAddress(java.lang.String, byte[])}
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getByAddress(byte[])}
 **/
java.net.InetAddress.getByAddress = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
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
 * @function anyLocalAddress
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#anyLocalAddress()}
 **/
java.net.InetAddress.anyLocalAddress = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'anyLocalAddress',
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getHostName(boolean)}
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
 * @function holder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#holder()}
 **/
java.net.InetAddress.prototype.holder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'holder',
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

// export the class
module.exports = java.net.InetAddress;
