/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.KeyStoreSpi
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.KeyStoreSpi
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html}
 **/
java.security.KeyStoreSpi = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.KeyStoreSpi') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.security.KeyStoreSpi. Create a subclass using java.security.KeyStoreSpi.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.KeyStoreSpi.prototype = Object.create(SuperClass.prototype);
java.security.KeyStoreSpi.prototype.constructor = java.security.KeyStoreSpi;

java.security.KeyStoreSpi.className = "java.security.KeyStoreSpi";
java.security.KeyStoreSpi.prototype.className = "java.security.KeyStoreSpi";

// class property
Object.defineProperty(java.security.KeyStoreSpi, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.KeyStoreSpi',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.KeyStoreSpi.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.KeyStoreSpi',
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
	whatever.prototype = Object.create(java.security.KeyStoreSpi.prototype);
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
 * @function engineAliases
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineAliases()}
 **/
java.security.KeyStoreSpi.prototype.engineAliases = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineAliases',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineStore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineStore(java.io.OutputStream, char[])}
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineStore(java.security.KeyStore$LoadStoreParameter)}
 **/
java.security.KeyStoreSpi.prototype.engineStore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineStore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineGetEntry(java.lang.String, java.security.KeyStore$ProtectionParameter)}
 **/
java.security.KeyStoreSpi.prototype.engineGetEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineSetCertificateEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineSetCertificateEntry(java.lang.String, java.security.cert.Certificate)}
 **/
java.security.KeyStoreSpi.prototype.engineSetCertificateEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSetCertificateEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineDeleteEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineDeleteEntry(java.lang.String)}
 **/
java.security.KeyStoreSpi.prototype.engineDeleteEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineDeleteEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetCertificateChain
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineGetCertificateChain(java.lang.String)}
 **/
java.security.KeyStoreSpi.prototype.engineGetCertificateChain = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetCertificateChain',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetCertificate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineGetCertificate(java.lang.String)}
 **/
java.security.KeyStoreSpi.prototype.engineGetCertificate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetCertificate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineIsKeyEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineIsKeyEntry(java.lang.String)}
 **/
java.security.KeyStoreSpi.prototype.engineIsKeyEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineIsKeyEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineSetKeyEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineSetKeyEntry(java.lang.String, java.security.Key, char[], java.security.cert.Certificate[])}
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineSetKeyEntry(java.lang.String, byte[], java.security.cert.Certificate[])}
 **/
java.security.KeyStoreSpi.prototype.engineSetKeyEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSetKeyEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineIsCertificateEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineIsCertificateEntry(java.lang.String)}
 **/
java.security.KeyStoreSpi.prototype.engineIsCertificateEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineIsCertificateEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineEntryInstanceOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineEntryInstanceOf(java.lang.String, java.lang.Class)}
 **/
java.security.KeyStoreSpi.prototype.engineEntryInstanceOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineEntryInstanceOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetCertificateAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineGetCertificateAlias(java.security.cert.Certificate)}
 **/
java.security.KeyStoreSpi.prototype.engineGetCertificateAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetCertificateAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineGetKey(java.lang.String, char[])}
 **/
java.security.KeyStoreSpi.prototype.engineGetKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineGetCreationDate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineGetCreationDate(java.lang.String)}
 **/
java.security.KeyStoreSpi.prototype.engineGetCreationDate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineGetCreationDate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineSize()}
 **/
java.security.KeyStoreSpi.prototype.engineSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineLoad
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineLoad(java.io.InputStream, char[])}
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineLoad(java.security.KeyStore$LoadStoreParameter)}
 **/
java.security.KeyStoreSpi.prototype.engineLoad = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineLoad',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineSetEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineSetEntry(java.lang.String, java.security.KeyStore$Entry, java.security.KeyStore$ProtectionParameter)}
 **/
java.security.KeyStoreSpi.prototype.engineSetEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineSetEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function engineContainsAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStoreSpi.html#engineContainsAlias(java.lang.String)}
 **/
java.security.KeyStoreSpi.prototype.engineContainsAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'engineContainsAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStoreSpi') {
			return new java.security.KeyStoreSpi(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.KeyStoreSpi;
