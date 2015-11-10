/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.KeyStore
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.KeyStore
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html}
 **/
java.security.KeyStore = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.KeyStore') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.security.KeyStore',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.security.KeyStore.prototype = Object.create(SuperClass.prototype);
java.security.KeyStore.prototype.constructor = java.security.KeyStore;

java.security.KeyStore.className = "java.security.KeyStore";
java.security.KeyStore.prototype.className = "java.security.KeyStore";

// class property
Object.defineProperty(java.security.KeyStore, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.KeyStore',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.KeyStore.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.KeyStore',
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
	whatever.prototype = Object.create(java.security.KeyStore.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getDefaultType
 * @static
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getDefaultType()}
 **/
java.security.KeyStore.getDefaultType = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDefaultType',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstance
 * @static
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getInstance(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getInstance(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getInstance(java.lang.String, java.security.Provider)}
 **/
java.security.KeyStore.getInstance = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getInstance',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
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
 * @function getKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getKey(java.lang.String, char[])}
 **/
java.security.KeyStore.prototype.getKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function aliases
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#aliases()}
 **/
java.security.KeyStore.prototype.aliases = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'aliases',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCertificateAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getCertificateAlias(java.security.cert.Certificate)}
 **/
java.security.KeyStore.prototype.getCertificateAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCertificateAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCertificateChain
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getCertificateChain(java.lang.String)}
 **/
java.security.KeyStore.prototype.getCertificateChain = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCertificateChain',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function containsAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#containsAlias(java.lang.String)}
 **/
java.security.KeyStore.prototype.containsAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'containsAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function store
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#store(java.io.OutputStream, char[])}
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#store(java.security.KeyStore$LoadStoreParameter)}
 **/
java.security.KeyStore.prototype.store = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'store',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCreationDate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getCreationDate(java.lang.String)}
 **/
java.security.KeyStore.prototype.getCreationDate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCreationDate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCertificateEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#isCertificateEntry(java.lang.String)}
 **/
java.security.KeyStore.prototype.isCertificateEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCertificateEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCertificate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getCertificate(java.lang.String)}
 **/
java.security.KeyStore.prototype.getCertificate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCertificate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#size()}
 **/
java.security.KeyStore.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function load
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#load(java.io.InputStream, char[])}
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#load(java.security.KeyStore$LoadStoreParameter)}
 **/
java.security.KeyStore.prototype.load = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'load',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getType()}
 **/
java.security.KeyStore.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeyEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#setKeyEntry(java.lang.String, java.security.Key, char[], java.security.cert.Certificate[])}
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#setKeyEntry(java.lang.String, byte[], java.security.cert.Certificate[])}
 **/
java.security.KeyStore.prototype.setKeyEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeyEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deleteEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#deleteEntry(java.lang.String)}
 **/
java.security.KeyStore.prototype.deleteEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deleteEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isKeyEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#isKeyEntry(java.lang.String)}
 **/
java.security.KeyStore.prototype.isKeyEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isKeyEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function entryInstanceOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#entryInstanceOf(java.lang.String, java.lang.Class)}
 **/
java.security.KeyStore.prototype.entryInstanceOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'entryInstanceOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getProvider()}
 **/
java.security.KeyStore.prototype.getProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#getEntry(java.lang.String, java.security.KeyStore$ProtectionParameter)}
 **/
java.security.KeyStore.prototype.getEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#setEntry(java.lang.String, java.security.KeyStore$Entry, java.security.KeyStore$ProtectionParameter)}
 **/
java.security.KeyStore.prototype.setEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCertificateEntry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/KeyStore.html#setCertificateEntry(java.lang.String, java.security.cert.Certificate)}
 **/
java.security.KeyStore.prototype.setCertificateEntry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCertificateEntry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.KeyStore') {
			return new java.security.KeyStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.KeyStore;
