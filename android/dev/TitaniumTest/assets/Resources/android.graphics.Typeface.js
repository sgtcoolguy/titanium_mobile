/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Typeface
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Typeface
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html}
 **/
android.graphics.Typeface = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Typeface') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Typeface',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Typeface.prototype = Object.create(SuperClass.prototype);
android.graphics.Typeface.prototype.constructor = android.graphics.Typeface;

android.graphics.Typeface.className = "android.graphics.Typeface";
android.graphics.Typeface.prototype.className = "android.graphics.Typeface";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#ITALIC}
 */
android.graphics.Typeface.ITALIC = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#BOLD}
 */
android.graphics.Typeface.BOLD = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#BOLD_ITALIC}
 */
android.graphics.Typeface.BOLD_ITALIC = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#NORMAL}
 */
android.graphics.Typeface.NORMAL = 0;

// Static fields
// http://developer.android.com/reference/android/graphics/Typeface.html#DEFAULT_BOLD
Object.defineProperty(android.graphics.Typeface, 'DEFAULT_BOLD', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'DEFAULT_BOLD'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new android.graphics.Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Typeface.html#MONOSPACE
Object.defineProperty(android.graphics.Typeface, 'MONOSPACE', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'MONOSPACE'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new android.graphics.Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Typeface.html#DEFAULT
Object.defineProperty(android.graphics.Typeface, 'DEFAULT', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'DEFAULT'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new android.graphics.Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Typeface.html#SANS_SERIF
Object.defineProperty(android.graphics.Typeface, 'SANS_SERIF', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SANS_SERIF'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new android.graphics.Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Typeface.html#SERIF
Object.defineProperty(android.graphics.Typeface, 'SERIF', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SERIF'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new android.graphics.Typeface(result);
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
/**
 * TODO Fill out docs more...
 * @function createFromFile
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#createFromFile(java.io.File)}
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#createFromFile(java.lang.String)}
 **/
android.graphics.Typeface.createFromFile = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createFromFile',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function create
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#create(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#create(android.graphics.Typeface, int)}
 **/
android.graphics.Typeface.create = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'create',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createFromAsset
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#createFromAsset(android.content.res.AssetManager, java.lang.String)}
 **/
android.graphics.Typeface.createFromAsset = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createFromAsset',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defaultFromStyle
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#defaultFromStyle(int)}
 **/
android.graphics.Typeface.defaultFromStyle = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'defaultFromStyle',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
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
 * @function isItalic
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#isItalic()}
 **/
android.graphics.Typeface.prototype.isItalic = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isItalic',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#getStyle()}
 **/
android.graphics.Typeface.prototype.getStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#hashCode()}
 **/
android.graphics.Typeface.prototype.hashCode = function() {
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
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#equals(java.lang.Object)}
 **/
android.graphics.Typeface.prototype.equals = function() {
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
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#finalize()}
 **/
android.graphics.Typeface.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isBold
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#isBold()}
 **/
android.graphics.Typeface.prototype.isBold = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isBold',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new android.graphics.Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Typeface;
