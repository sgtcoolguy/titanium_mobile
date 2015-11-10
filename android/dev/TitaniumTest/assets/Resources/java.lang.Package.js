/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Package
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.Package
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Package.html}
 **/
java.lang.Package = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.lang.Package') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.Package',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.Package.prototype = Object.create(SuperClass.prototype);
java.lang.Package.prototype.constructor = java.lang.Package;

java.lang.Package.className = "java.lang.Package";
java.lang.Package.prototype.className = "java.lang.Package";

// class property
Object.defineProperty(java.lang.Package, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.lang.Package',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.lang.Package.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.lang.Package',
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
	whatever.prototype = Object.create(java.lang.Package.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getPackage
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getPackage(java.lang.String)}
 **/
java.lang.Package.getPackage = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getPackage',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackages
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getPackages()}
 **/
java.lang.Package.getPackages = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getPackages',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
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
 * @function isSealed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#isSealed()}
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#isSealed(java.net.URL)}
 **/
java.lang.Package.prototype.isSealed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSealed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getName()}
 **/
java.lang.Package.prototype.getName = function() {
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
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAnnotationPresent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#isAnnotationPresent(java.lang.Class)}
 **/
java.lang.Package.prototype.isAnnotationPresent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAnnotationPresent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSpecificationTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getSpecificationTitle()}
 **/
java.lang.Package.prototype.getSpecificationTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSpecificationTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImplementationTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getImplementationTitle()}
 **/
java.lang.Package.prototype.getImplementationTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImplementationTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCompatibleWith
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#isCompatibleWith(java.lang.String)}
 **/
java.lang.Package.prototype.isCompatibleWith = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCompatibleWith',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getAnnotations()}
 **/
java.lang.Package.prototype.getAnnotations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSpecificationVendor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getSpecificationVendor()}
 **/
java.lang.Package.prototype.getSpecificationVendor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSpecificationVendor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredAnnotations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getDeclaredAnnotations()}
 **/
java.lang.Package.prototype.getDeclaredAnnotations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredAnnotations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotationsByType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getAnnotationsByType(java.lang.Class)}
 **/
java.lang.Package.prototype.getAnnotationsByType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotationsByType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnnotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getAnnotation(java.lang.Class)}
 **/
java.lang.Package.prototype.getAnnotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnnotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredAnnotationsByType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getDeclaredAnnotationsByType(java.lang.Class)}
 **/
java.lang.Package.prototype.getDeclaredAnnotationsByType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredAnnotationsByType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#hashCode()}
 **/
java.lang.Package.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredAnnotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getDeclaredAnnotation(java.lang.Class)}
 **/
java.lang.Package.prototype.getDeclaredAnnotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredAnnotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#toString()}
 **/
java.lang.Package.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSpecificationVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getSpecificationVersion()}
 **/
java.lang.Package.prototype.getSpecificationVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSpecificationVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImplementationVendor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getImplementationVendor()}
 **/
java.lang.Package.prototype.getImplementationVendor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImplementationVendor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImplementationVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Package.html#getImplementationVersion()}
 **/
java.lang.Package.prototype.getImplementationVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImplementationVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Package') {
			return new java.lang.Package(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.Package;
