/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Throwable
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.Throwable
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html}
 **/
java.lang.Throwable = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.Throwable') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.Throwable',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.Throwable.prototype = Object.create(SuperClass.prototype);
java.lang.Throwable.prototype.constructor = java.lang.Throwable;

java.lang.Throwable.className = "java.lang.Throwable";
java.lang.Throwable.prototype.className = "java.lang.Throwable";

// Constants

// Static fields
// http://developer.android.com/reference/java/lang/Throwable.html#$assertionsDisabled
Object.defineProperty(java.lang.Throwable, '$assertionsDisabled', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: '$assertionsDisabled'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Throwable') {
				return new java.lang.Throwable(result);
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
 * @function printStackTrace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#printStackTrace()}
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#printStackTrace(java.io.PrintStream)}
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#printStackTrace(java.io.PrintWriter)}
 **/
java.lang.Throwable.prototype.printStackTrace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'printStackTrace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalizedMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#getLocalizedMessage()}
 **/
java.lang.Throwable.prototype.getLocalizedMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalizedMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStackTraceDepth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#getStackTraceDepth()}
 **/
java.lang.Throwable.prototype.getStackTraceDepth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStackTraceDepth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initCause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#initCause(java.lang.Throwable)}
 **/
java.lang.Throwable.prototype.initCause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initCause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#getMessage()}
 **/
java.lang.Throwable.prototype.getMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#getCause()}
 **/
java.lang.Throwable.prototype.getCause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStackTraceElement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#getStackTraceElement(int)}
 **/
java.lang.Throwable.prototype.getStackTraceElement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStackTraceElement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStackTrace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#getStackTrace()}
 **/
java.lang.Throwable.prototype.getStackTrace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStackTrace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStackTrace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#setStackTrace(java.lang.StackTraceElement[])}
 **/
java.lang.Throwable.prototype.setStackTrace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStackTrace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addSuppressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#addSuppressed(java.lang.Throwable)}
 **/
java.lang.Throwable.prototype.addSuppressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addSuppressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#toString()}
 **/
java.lang.Throwable.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSuppressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#getSuppressed()}
 **/
java.lang.Throwable.prototype.getSuppressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSuppressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fillInStackTrace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Throwable.html#fillInStackTrace()}
 **/
java.lang.Throwable.prototype.fillInStackTrace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fillInStackTrace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Throwable') {
			return new java.lang.Throwable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.Throwable;
