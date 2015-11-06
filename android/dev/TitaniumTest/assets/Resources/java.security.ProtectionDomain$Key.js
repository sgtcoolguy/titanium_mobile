/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.ProtectionDomain.Key
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};
global.java.security.ProtectionDomain = global.java.security.ProtectionDomain || {};

/**
 * @class java.security.ProtectionDomain.Key
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.Key.html}
 **/
java.security.ProtectionDomain.Key = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.security.ProtectionDomain$Key') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.security.ProtectionDomain$Key',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.ProtectionDomain.Key.prototype = Object.create(SuperClass.prototype);
java.security.ProtectionDomain.Key.prototype.constructor = java.security.ProtectionDomain.Key;

java.security.ProtectionDomain.Key.className = "java.security.ProtectionDomain$Key";
java.security.ProtectionDomain.Key.prototype.className = "java.security.ProtectionDomain$Key";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/security/ProtectionDomain.Key.html#this$0
Object.defineProperty(java.security.ProtectionDomain.Key.prototype, 'this$0', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'this$0'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.security.ProtectionDomain$Key') {
				return new java.security.ProtectionDomain.Key(result);
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

// Instance methods

// export the class
module.exports = java.security.ProtectionDomain.Key;
