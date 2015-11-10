/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Properties
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.Properties
 * @extends java.util.Hashtable 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Properties.html}
 **/
java.util.Properties = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.util.Properties') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.Properties',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.Hashtable');
java.util.Properties.prototype = Object.create(SuperClass.prototype);
java.util.Properties.prototype.constructor = java.util.Properties;

java.util.Properties.className = "java.util.Properties";
java.util.Properties.prototype.className = "java.util.Properties";

// class property
Object.defineProperty(java.util.Properties, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.util.Properties',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.util.Properties.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.util.Properties',
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
	whatever.prototype = Object.create(java.util.Properties.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/util/Properties.html#defaults
Object.defineProperty(java.util.Properties.prototype, 'defaults', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'defaults'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Properties') {
				return new java.util.Properties(result);
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
			field: 'defaults',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#getProperty(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#getProperty(java.lang.String, java.lang.String)}
 **/
java.util.Properties.prototype.getProperty = function() {
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
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
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
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#load(java.io.Reader)}
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#load(java.io.InputStream)}
 **/
java.util.Properties.prototype.load = function() {
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
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadFromXML
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#loadFromXML(java.io.InputStream)}
 **/
java.util.Properties.prototype.loadFromXML = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadFromXML',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function propertyNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#propertyNames()}
 **/
java.util.Properties.prototype.propertyNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'propertyNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#setProperty(java.lang.String, java.lang.String)}
 **/
java.util.Properties.prototype.setProperty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProperty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stringPropertyNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#stringPropertyNames()}
 **/
java.util.Properties.prototype.stringPropertyNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stringPropertyNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function save
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#save(java.io.OutputStream, java.lang.String)}
 **/
java.util.Properties.prototype.save = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'save',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
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
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#store(java.io.Writer, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#store(java.io.OutputStream, java.lang.String)}
 **/
java.util.Properties.prototype.store = function() {
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
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function list
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#list(java.io.PrintStream)}
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#list(java.io.PrintWriter)}
 **/
java.util.Properties.prototype.list = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'list',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function storeToXML
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#storeToXML(java.io.OutputStream, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/util/Properties.html#storeToXML(java.io.OutputStream, java.lang.String, java.lang.String)}
 **/
java.util.Properties.prototype.storeToXML = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'storeToXML',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Properties') {
			return new java.util.Properties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.Properties;
