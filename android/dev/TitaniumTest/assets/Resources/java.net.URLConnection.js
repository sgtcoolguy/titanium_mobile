/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.URLConnection
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.net = global.java.net || {};

/**
 * @class java.net.URLConnection
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html}
 **/
java.net.URLConnection = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.net.URLConnection') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.net.URLConnection',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.net.URLConnection.prototype = Object.create(SuperClass.prototype);
java.net.URLConnection.prototype.constructor = java.net.URLConnection;

java.net.URLConnection.className = "java.net.URLConnection";
java.net.URLConnection.prototype.className = "java.net.URLConnection";

// Constants

// Static fields
// http://developer.android.com/reference/java/net/URLConnection.html#factory
Object.defineProperty(java.net.URLConnection, 'factory', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'factory'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new java.net.URLConnection(result);
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
			field: 'factory',
			value: newValue
		});
	},
	enumerable: true
});

// Instance Fields
// http://developer.android.com/reference/java/net/URLConnection.html#connected
Object.defineProperty(java.net.URLConnection.prototype, 'connected', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'connected'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new java.net.URLConnection(result);
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
			field: 'connected',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#doOutput
Object.defineProperty(java.net.URLConnection.prototype, 'doOutput', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'doOutput'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new java.net.URLConnection(result);
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
			field: 'doOutput',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#useCaches
Object.defineProperty(java.net.URLConnection.prototype, 'useCaches', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'useCaches'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new java.net.URLConnection(result);
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
			field: 'useCaches',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#ifModifiedSince
Object.defineProperty(java.net.URLConnection.prototype, 'ifModifiedSince', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'ifModifiedSince'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new java.net.URLConnection(result);
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
			field: 'ifModifiedSince',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#url
Object.defineProperty(java.net.URLConnection.prototype, 'url', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'url'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new java.net.URLConnection(result);
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
			field: 'url',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#doInput
Object.defineProperty(java.net.URLConnection.prototype, 'doInput', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'doInput'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new java.net.URLConnection(result);
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
			field: 'doInput',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#allowUserInteraction
Object.defineProperty(java.net.URLConnection.prototype, 'allowUserInteraction', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'allowUserInteraction'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new java.net.URLConnection(result);
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
			field: 'allowUserInteraction',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function getDefaultAllowUserInteraction
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDefaultAllowUserInteraction()}
 **/
java.net.URLConnection.getDefaultAllowUserInteraction = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getDefaultAllowUserInteraction',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function access$000
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#access$000()}
 **/
java.net.URLConnection.access$000 = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'access$000',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultAllowUserInteraction
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDefaultAllowUserInteraction(boolean)}
 **/
java.net.URLConnection.setDefaultAllowUserInteraction = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'setDefaultAllowUserInteraction',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function guessContentTypeFromName
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#guessContentTypeFromName(java.lang.String)}
 **/
java.net.URLConnection.guessContentTypeFromName = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'guessContentTypeFromName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function guessContentTypeFromStream
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#guessContentTypeFromStream(java.io.InputStream)}
 **/
java.net.URLConnection.guessContentTypeFromStream = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'guessContentTypeFromStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultRequestProperty
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDefaultRequestProperty(java.lang.String, java.lang.String)}
 **/
java.net.URLConnection.setDefaultRequestProperty = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'setDefaultRequestProperty',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileNameMap
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getFileNameMap()}
 **/
java.net.URLConnection.getFileNameMap = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getFileNameMap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentHandlerFactory
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setContentHandlerFactory(java.net.ContentHandlerFactory)}
 **/
java.net.URLConnection.setContentHandlerFactory = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'setContentHandlerFactory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultRequestProperty
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDefaultRequestProperty(java.lang.String)}
 **/
java.net.URLConnection.getDefaultRequestProperty = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getDefaultRequestProperty',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFileNameMap
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setFileNameMap(java.net.FileNameMap)}
 **/
java.net.URLConnection.setFileNameMap = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'setFileNameMap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
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
 * @function setConnectTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setConnectTimeout(int)}
 **/
java.net.URLConnection.prototype.setConnectTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setConnectTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFieldLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFieldLong(java.lang.String, long)}
 **/
java.net.URLConnection.prototype.getHeaderFieldLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFieldLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUseCaches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setUseCaches(boolean)}
 **/
java.net.URLConnection.prototype.setUseCaches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUseCaches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRequestProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setRequestProperty(java.lang.String, java.lang.String)}
 **/
java.net.URLConnection.prototype.setRequestProperty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRequestProperty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDoInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDoInput()}
 **/
java.net.URLConnection.prototype.getDoInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDoInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentHandler()}
 **/
java.net.URLConnection.prototype.getContentHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIfModifiedSince
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getIfModifiedSince()}
 **/
java.net.URLConnection.prototype.getIfModifiedSince = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIfModifiedSince',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getPermission()}
 **/
java.net.URLConnection.prototype.getPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultUseCaches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDefaultUseCaches()}
 **/
java.net.URLConnection.prototype.getDefaultUseCaches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDefaultUseCaches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllowUserInteraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getAllowUserInteraction()}
 **/
java.net.URLConnection.prototype.getAllowUserInteraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllowUserInteraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConnectTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getConnectTimeout()}
 **/
java.net.URLConnection.prototype.getConnectTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConnectTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentLength()}
 **/
java.net.URLConnection.prototype.getContentLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getInputStream()}
 **/
java.net.URLConnection.prototype.getInputStream = function() {
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
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAllowUserInteraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setAllowUserInteraction(boolean)}
 **/
java.net.URLConnection.prototype.setAllowUserInteraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAllowUserInteraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRequestProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getRequestProperties()}
 **/
java.net.URLConnection.prototype.getRequestProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRequestProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getURL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getURL()}
 **/
java.net.URLConnection.prototype.getURL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getURL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderField
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderField(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderField(int)}
 **/
java.net.URLConnection.prototype.getHeaderField = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderField',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFields
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFields()}
 **/
java.net.URLConnection.prototype.getHeaderFields = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentLengthLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentLengthLong()}
 **/
java.net.URLConnection.prototype.getContentLengthLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentLengthLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentType()}
 **/
java.net.URLConnection.prototype.getContentType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultUseCaches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDefaultUseCaches(boolean)}
 **/
java.net.URLConnection.prototype.setDefaultUseCaches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultUseCaches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDoOutput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDoOutput(boolean)}
 **/
java.net.URLConnection.prototype.setDoOutput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDoOutput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLastModified
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getLastModified()}
 **/
java.net.URLConnection.prototype.getLastModified = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastModified',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIfModifiedSince
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setIfModifiedSince(long)}
 **/
java.net.URLConnection.prototype.setIfModifiedSince = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIfModifiedSince',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReadTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getReadTimeout()}
 **/
java.net.URLConnection.prototype.getReadTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReadTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContent()}
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContent(java.lang.Class[])}
 **/
java.net.URLConnection.prototype.getContent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFieldInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFieldInt(java.lang.String, int)}
 **/
java.net.URLConnection.prototype.getHeaderFieldInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFieldInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRequestProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getRequestProperty(java.lang.String)}
 **/
java.net.URLConnection.prototype.getRequestProperty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRequestProperty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFieldDate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFieldDate(java.lang.String, long)}
 **/
java.net.URLConnection.prototype.getHeaderFieldDate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFieldDate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDate()}
 **/
java.net.URLConnection.prototype.getDate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#connect()}
 **/
java.net.URLConnection.prototype.connect = function() {
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
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFieldKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFieldKey(int)}
 **/
java.net.URLConnection.prototype.getHeaderFieldKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFieldKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentEncoding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentEncoding()}
 **/
java.net.URLConnection.prototype.getContentEncoding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentEncoding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUseCaches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getUseCaches()}
 **/
java.net.URLConnection.prototype.getUseCaches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUseCaches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDoInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDoInput(boolean)}
 **/
java.net.URLConnection.prototype.setDoInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDoInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addRequestProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#addRequestProperty(java.lang.String, java.lang.String)}
 **/
java.net.URLConnection.prototype.addRequestProperty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addRequestProperty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReadTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setReadTimeout(int)}
 **/
java.net.URLConnection.prototype.setReadTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReadTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExpiration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getExpiration()}
 **/
java.net.URLConnection.prototype.getExpiration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExpiration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getOutputStream()}
 **/
java.net.URLConnection.prototype.getOutputStream = function() {
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
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#toString()}
 **/
java.net.URLConnection.prototype.toString = function() {
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
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDoOutput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDoOutput()}
 **/
java.net.URLConnection.prototype.getDoOutput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDoOutput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new java.net.URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.net.URLConnection;
