/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.ParcelFileDescriptor
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.ParcelFileDescriptor
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html}
 **/
android.os.ParcelFileDescriptor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.os.ParcelFileDescriptor') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.os.ParcelFileDescriptor',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.ParcelFileDescriptor.prototype = Object.create(SuperClass.prototype);
android.os.ParcelFileDescriptor.prototype.constructor = android.os.ParcelFileDescriptor;

android.os.ParcelFileDescriptor.className = "android.os.ParcelFileDescriptor";
android.os.ParcelFileDescriptor.prototype.className = "android.os.ParcelFileDescriptor";

// class property
Object.defineProperty(android.os.ParcelFileDescriptor, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.os.ParcelFileDescriptor',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.os.ParcelFileDescriptor.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.os.ParcelFileDescriptor',
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
	whatever.prototype = Object.create(android.os.ParcelFileDescriptor.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_TRUNCATE}
 */
android.os.ParcelFileDescriptor.MODE_TRUNCATE = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_WORLD_READABLE}
 */
android.os.ParcelFileDescriptor.MODE_WORLD_READABLE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_CREATE}
 */
android.os.ParcelFileDescriptor.MODE_CREATE = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_READ_WRITE}
 */
android.os.ParcelFileDescriptor.MODE_READ_WRITE = 805306368;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_WRITE_ONLY}
 */
android.os.ParcelFileDescriptor.MODE_WRITE_ONLY = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_APPEND}
 */
android.os.ParcelFileDescriptor.MODE_APPEND = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_READ_ONLY}
 */
android.os.ParcelFileDescriptor.MODE_READ_ONLY = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_WORLD_WRITEABLE}
 */
android.os.ParcelFileDescriptor.MODE_WORLD_WRITEABLE = 2;

// Static fields
// http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#CREATOR
Object.defineProperty(android.os.ParcelFileDescriptor, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.ParcelFileDescriptor') {
				return new android.os.ParcelFileDescriptor(result);
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
 * @function fromFd
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#fromFd(int)}
 **/
android.os.ParcelFileDescriptor.fromFd = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromFd',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createReliablePipe
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#createReliablePipe()}
 **/
android.os.ParcelFileDescriptor.createReliablePipe = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createReliablePipe',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createSocketPair
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#createSocketPair()}
 **/
android.os.ParcelFileDescriptor.createSocketPair = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createSocketPair',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fromDatagramSocket
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#fromDatagramSocket(java.net.DatagramSocket)}
 **/
android.os.ParcelFileDescriptor.fromDatagramSocket = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromDatagramSocket',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseMode
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#parseMode(java.lang.String)}
 **/
android.os.ParcelFileDescriptor.parseMode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseMode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fromSocket
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#fromSocket(java.net.Socket)}
 **/
android.os.ParcelFileDescriptor.fromSocket = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromSocket',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createPipe
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#createPipe()}
 **/
android.os.ParcelFileDescriptor.createPipe = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createPipe',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createReliableSocketPair
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#createReliableSocketPair()}
 **/
android.os.ParcelFileDescriptor.createReliableSocketPair = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createReliableSocketPair',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#open(java.io.File, int)}
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#open(java.io.File, int, android.os.Handler, android.os.ParcelFileDescriptor$OnCloseListener)}
 **/
android.os.ParcelFileDescriptor.open = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'open',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dup
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#dup(java.io.FileDescriptor)}
 **/
android.os.ParcelFileDescriptor.dup = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'dup',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function adoptFd
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#adoptFd(int)}
 **/
android.os.ParcelFileDescriptor.adoptFd = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'adoptFd',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
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
 * @function checkError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#checkError()}
 **/
android.os.ParcelFileDescriptor.prototype.checkError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#describeContents()}
 **/
android.os.ParcelFileDescriptor.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStatSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#getStatSize()}
 **/
android.os.ParcelFileDescriptor.prototype.getStatSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStatSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#getFd()}
 **/
android.os.ParcelFileDescriptor.prototype.getFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detachFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#detachFd()}
 **/
android.os.ParcelFileDescriptor.prototype.detachFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detachFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#getFileDescriptor()}
 **/
android.os.ParcelFileDescriptor.prototype.getFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function closeWithError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#closeWithError(java.lang.String)}
 **/
android.os.ParcelFileDescriptor.prototype.closeWithError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'closeWithError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
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
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#toString()}
 **/
android.os.ParcelFileDescriptor.prototype.toString = function() {
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
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
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
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#finalize()}
 **/
android.os.ParcelFileDescriptor.prototype.finalize = function() {
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
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#close()}
 **/
android.os.ParcelFileDescriptor.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canDetectErrors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#canDetectErrors()}
 **/
android.os.ParcelFileDescriptor.prototype.canDetectErrors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canDetectErrors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#writeToParcel(android.os.Parcel, int)}
 **/
android.os.ParcelFileDescriptor.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#dup()}
 **/
android.os.ParcelFileDescriptor.prototype.dup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new android.os.ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.ParcelFileDescriptor;
