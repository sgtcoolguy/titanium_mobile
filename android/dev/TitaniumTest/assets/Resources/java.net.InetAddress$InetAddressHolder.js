/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.InetAddress.InetAddressHolder
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};
global.java.net.InetAddress = global.java.net.InetAddress || {};

/**
 * @class java.net.InetAddress.InetAddressHolder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html}
 **/
java.net.InetAddress.InetAddressHolder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.net.InetAddress$InetAddressHolder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.InetAddress$InetAddressHolder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.InetAddress.InetAddressHolder.prototype = Object.create(SuperClass.prototype);
java.net.InetAddress.InetAddressHolder.prototype.constructor = java.net.InetAddress.InetAddressHolder;

java.net.InetAddress.InetAddressHolder.className = "java.net.InetAddress$InetAddressHolder";
java.net.InetAddress.InetAddressHolder.prototype.className = "java.net.InetAddress$InetAddressHolder";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html#hostName
Object.defineProperty(java.net.InetAddress.InetAddressHolder.prototype, 'hostName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'hostName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.InetAddress$InetAddressHolder') {
				return new java.net.InetAddress.InetAddressHolder(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.native.setNativeField({
			field: 'hostName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html#address
Object.defineProperty(java.net.InetAddress.InetAddressHolder.prototype, 'address', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'address'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.InetAddress$InetAddressHolder') {
				return new java.net.InetAddress.InetAddressHolder(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.native.setNativeField({
			field: 'address',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html#family
Object.defineProperty(java.net.InetAddress.InetAddressHolder.prototype, 'family', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.native.getNativeField({
			field: 'family'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.InetAddress$InetAddressHolder') {
				return new java.net.InetAddress.InetAddressHolder(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.native.setNativeField({
			field: 'family',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function init
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html#init(java.lang.String, int)}
 **/
java.net.InetAddress.InetAddressHolder.prototype.init = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'init',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress$InetAddressHolder') {
			return new java.net.InetAddress.InetAddressHolder(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html#getHostName()}
 **/
java.net.InetAddress.InetAddressHolder.prototype.getHostName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getHostName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress$InetAddressHolder') {
			return new java.net.InetAddress.InetAddressHolder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFamily
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html#getFamily()}
 **/
java.net.InetAddress.InetAddressHolder.prototype.getFamily = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getFamily',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress$InetAddressHolder') {
			return new java.net.InetAddress.InetAddressHolder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOriginalHostName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html#getOriginalHostName()}
 **/
java.net.InetAddress.InetAddressHolder.prototype.getOriginalHostName = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getOriginalHostName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress$InetAddressHolder') {
			return new java.net.InetAddress.InetAddressHolder(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.InetAddressHolder.html#getAddress()}
 **/
java.net.InetAddress.InetAddressHolder.prototype.getAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'getAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress$InetAddressHolder') {
			return new java.net.InetAddress.InetAddressHolder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.InetAddress.InetAddressHolder;
