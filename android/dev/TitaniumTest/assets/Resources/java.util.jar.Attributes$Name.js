/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.jar.Attributes.Name
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.jar = global.java.util.jar || {};
global.java.util.jar.Attributes = global.java.util.jar.Attributes || {};

/**
 * @class java.util.jar.Attributes.Name
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.Name.html}
 **/
java.util.jar.Attributes.Name = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.jar.Attributes$Name') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.jar.Attributes$Name',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.jar.Attributes.Name.prototype = Object.create(SuperClass.prototype);
java.util.jar.Attributes.Name.prototype.constructor = java.util.jar.Attributes.Name;

java.util.jar.Attributes.Name.className = "java.util.jar.Attributes$Name";
java.util.jar.Attributes.Name.prototype.className = "java.util.jar.Attributes$Name";

// Constants

// Static fields
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#EXTENSION_NAME
Object.defineProperty(java.util.jar.Attributes.Name, 'EXTENSION_NAME', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'EXTENSION_NAME'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#EXTENSION_INSTALLATION
Object.defineProperty(java.util.jar.Attributes.Name, 'EXTENSION_INSTALLATION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'EXTENSION_INSTALLATION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#IMPLEMENTATION_VERSION
Object.defineProperty(java.util.jar.Attributes.Name, 'IMPLEMENTATION_VERSION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'IMPLEMENTATION_VERSION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#IMPLEMENTATION_TITLE
Object.defineProperty(java.util.jar.Attributes.Name, 'IMPLEMENTATION_TITLE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'IMPLEMENTATION_TITLE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#SIGNATURE_VERSION
Object.defineProperty(java.util.jar.Attributes.Name, 'SIGNATURE_VERSION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SIGNATURE_VERSION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#CLASS_PATH
Object.defineProperty(java.util.jar.Attributes.Name, 'CLASS_PATH', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CLASS_PATH'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#MAIN_CLASS
Object.defineProperty(java.util.jar.Attributes.Name, 'MAIN_CLASS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'MAIN_CLASS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#SEALED
Object.defineProperty(java.util.jar.Attributes.Name, 'SEALED', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SEALED'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#IMPLEMENTATION_URL
Object.defineProperty(java.util.jar.Attributes.Name, 'IMPLEMENTATION_URL', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'IMPLEMENTATION_URL'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#IMPLEMENTATION_VENDOR_ID
Object.defineProperty(java.util.jar.Attributes.Name, 'IMPLEMENTATION_VENDOR_ID', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'IMPLEMENTATION_VENDOR_ID'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#SPECIFICATION_VERSION
Object.defineProperty(java.util.jar.Attributes.Name, 'SPECIFICATION_VERSION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SPECIFICATION_VERSION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#EXTENSION_LIST
Object.defineProperty(java.util.jar.Attributes.Name, 'EXTENSION_LIST', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'EXTENSION_LIST'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#SPECIFICATION_VENDOR
Object.defineProperty(java.util.jar.Attributes.Name, 'SPECIFICATION_VENDOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SPECIFICATION_VENDOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#CONTENT_TYPE
Object.defineProperty(java.util.jar.Attributes.Name, 'CONTENT_TYPE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CONTENT_TYPE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#SPECIFICATION_TITLE
Object.defineProperty(java.util.jar.Attributes.Name, 'SPECIFICATION_TITLE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SPECIFICATION_TITLE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#MANIFEST_VERSION
Object.defineProperty(java.util.jar.Attributes.Name, 'MANIFEST_VERSION', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'MANIFEST_VERSION'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/jar/Attributes.Name.html#IMPLEMENTATION_VENDOR
Object.defineProperty(java.util.jar.Attributes.Name, 'IMPLEMENTATION_VENDOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'IMPLEMENTATION_VENDOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.jar.Attributes$Name') {
				return new java.util.jar.Attributes.Name(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.Name.html#hashCode()}
 **/
java.util.jar.Attributes.Name.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Attributes$Name') {
			return new java.util.jar.Attributes.Name(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.Name.html#equals(java.lang.Object)}
 **/
java.util.jar.Attributes.Name.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Attributes$Name') {
			return new java.util.jar.Attributes.Name(result);
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
 * @see {@link http://developer.android.com/reference/java/util/jar/Attributes.Name.html#toString()}
 **/
java.util.jar.Attributes.Name.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.jar.Attributes$Name') {
			return new java.util.jar.Attributes.Name(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.jar.Attributes.Name;
