/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.Provider
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.security = global.java.security || {};

/**
 * @class java.security.Provider
 * @extends java.util.Properties 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/Provider.html}
 **/
java.security.Provider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.security.Provider') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.security.Provider. Create a subclass using java.security.Provider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.Properties');
java.security.Provider.prototype = Object.create(SuperClass.prototype);
java.security.Provider.prototype.constructor = java.security.Provider;

java.security.Provider.className = "java.security.Provider";
java.security.Provider.prototype.className = "java.security.Provider";

// class property
Object.defineProperty(java.security.Provider, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.security.Provider',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.security.Provider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.security.Provider',
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
	whatever.prototype = Object.create(java.security.Provider.prototype);
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
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#getName()}
 **/
java.security.Provider.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOrDefault
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#getOrDefault(java.lang.Object, java.lang.Object)}
 **/
java.security.Provider.prototype.getOrDefault = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOrDefault',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keys
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#keys()}
 **/
java.security.Provider.prototype.keys = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keys',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#values()}
 **/
java.security.Provider.prototype.values = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'values',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeIfAbsent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#computeIfAbsent(java.lang.Object, java.util.function.Function)}
 **/
java.security.Provider.prototype.computeIfAbsent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeIfAbsent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#replace(java.lang.Object, java.lang.Object, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#replace(java.lang.Object, java.lang.Object)}
 **/
java.security.Provider.prototype.replace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#putService(java.security.Provider$Service)}
 **/
java.security.Provider.prototype.putService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#replaceAll(java.util.function.BiFunction)}
 **/
java.security.Provider.prototype.replaceAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function put
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#put(java.lang.Object, java.lang.Object)}
 **/
java.security.Provider.prototype.put = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'put',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remove
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#remove(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#remove(java.lang.Object, java.lang.Object)}
 **/
java.security.Provider.prototype.remove = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'remove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#compute(java.lang.Object, java.util.function.BiFunction)}
 **/
java.security.Provider.prototype.compute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
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
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#load(java.io.InputStream)}
 **/
java.security.Provider.prototype.load = function() {
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
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#removeService(java.security.Provider$Service)}
 **/
java.security.Provider.prototype.removeService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#putAll(java.util.Map)}
 **/
java.security.Provider.prototype.putAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function merge
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#merge(java.lang.Object, java.lang.Object, java.util.function.BiFunction)}
 **/
java.security.Provider.prototype.merge = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'merge',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function get
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#get(java.lang.Object)}
 **/
java.security.Provider.prototype.get = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'get',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getServices
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#getServices()}
 **/
java.security.Provider.prototype.getServices = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getServices',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keySet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#keySet()}
 **/
java.security.Provider.prototype.keySet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#getVersion()}
 **/
java.security.Provider.prototype.getVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#getProperty(java.lang.String)}
 **/
java.security.Provider.prototype.getProperty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProperty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#getInfo()}
 **/
java.security.Provider.prototype.getInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function entrySet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#entrySet()}
 **/
java.security.Provider.prototype.entrySet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'entrySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function forEach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#forEach(java.util.function.BiConsumer)}
 **/
java.security.Provider.prototype.forEach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'forEach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#clear()}
 **/
java.security.Provider.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#getService(java.lang.String, java.lang.String)}
 **/
java.security.Provider.prototype.getService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeIfPresent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#computeIfPresent(java.lang.Object, java.util.function.BiFunction)}
 **/
java.security.Provider.prototype.computeIfPresent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeIfPresent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function elements
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#elements()}
 **/
java.security.Provider.prototype.elements = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'elements',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
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
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#toString()}
 **/
java.security.Provider.prototype.toString = function() {
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
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putIfAbsent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/Provider.html#putIfAbsent(java.lang.Object, java.lang.Object)}
 **/
java.security.Provider.prototype.putIfAbsent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putIfAbsent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.Provider') {
			return new java.security.Provider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.security.Provider;
