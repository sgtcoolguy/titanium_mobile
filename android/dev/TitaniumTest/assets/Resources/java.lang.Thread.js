/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Thread
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.Thread
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html}
 **/
java.lang.Thread = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.lang.Thread') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.Thread',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.Thread.prototype = Object.create(SuperClass.prototype);
java.lang.Thread.prototype.constructor = java.lang.Thread;

java.lang.Thread.className = "java.lang.Thread";
java.lang.Thread.prototype.className = "java.lang.Thread";

// class property
Object.defineProperty(java.lang.Thread, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.lang.Thread',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.lang.Thread.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.lang.Thread',
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
	whatever.prototype = Object.create(java.lang.Thread.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#MIN_PRIORITY}
 */
java.lang.Thread.MIN_PRIORITY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#MAX_PRIORITY}
 */
java.lang.Thread.MAX_PRIORITY = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#NORM_PRIORITY}
 */
java.lang.Thread.NORM_PRIORITY = 5;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getAllStackTraces
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getAllStackTraces()}
 **/
java.lang.Thread.getAllStackTraces = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getAllStackTraces',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sleep
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#sleep(long)}
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#sleep(long, int)}
 **/
java.lang.Thread.sleep = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'sleep',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function yield
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#yield()}
 **/
java.lang.Thread.yield = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'yield',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enumerate
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#enumerate(java.lang.Thread[])}
 **/
java.lang.Thread.enumerate = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'enumerate',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function activeCount
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#activeCount()}
 **/
java.lang.Thread.activeCount = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'activeCount',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function currentThread
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#currentThread()}
 **/
java.lang.Thread.currentThread = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'currentThread',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dumpStack
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#dumpStack()}
 **/
java.lang.Thread.dumpStack = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'dumpStack',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultUncaughtExceptionHandler
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setDefaultUncaughtExceptionHandler(java.lang.Thread$UncaughtExceptionHandler)}
 **/
java.lang.Thread.setDefaultUncaughtExceptionHandler = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setDefaultUncaughtExceptionHandler',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function interrupted
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#interrupted()}
 **/
java.lang.Thread.interrupted = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'interrupted',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultUncaughtExceptionHandler
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getDefaultUncaughtExceptionHandler()}
 **/
java.lang.Thread.getDefaultUncaughtExceptionHandler = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDefaultUncaughtExceptionHandler',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function holdsLock
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#holdsLock(java.lang.Object)}
 **/
java.lang.Thread.holdsLock = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'holdsLock',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
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
 * @function setName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setName(java.lang.String)}
 **/
java.lang.Thread.prototype.setName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getName()}
 **/
java.lang.Thread.prototype.getName = function() {
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
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getThreadGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getThreadGroup()}
 **/
java.lang.Thread.prototype.getThreadGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getThreadGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function run
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#run()}
 **/
java.lang.Thread.prototype.run = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'run',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getId()}
 **/
java.lang.Thread.prototype.getId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContextClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setContextClassLoader(java.lang.ClassLoader)}
 **/
java.lang.Thread.prototype.setContextClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContextClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getStackTrace()}
 **/
java.lang.Thread.prototype.getStackTrace = function() {
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
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDaemon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#isDaemon()}
 **/
java.lang.Thread.prototype.isDaemon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDaemon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function interrupt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#interrupt()}
 **/
java.lang.Thread.prototype.interrupt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'interrupt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function join
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#join(long)}
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#join(long, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#join()}
 **/
java.lang.Thread.prototype.join = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'join',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function suspend
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#suspend()}
 **/
java.lang.Thread.prototype.suspend = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'suspend',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#resume()}
 **/
java.lang.Thread.prototype.resume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInterrupted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#isInterrupted()}
 **/
java.lang.Thread.prototype.isInterrupted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInterrupted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUncaughtExceptionHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setUncaughtExceptionHandler(java.lang.Thread$UncaughtExceptionHandler)}
 **/
java.lang.Thread.prototype.setUncaughtExceptionHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUncaughtExceptionHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function start
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#start()}
 **/
java.lang.Thread.prototype.start = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'start',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function destroy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#destroy()}
 **/
java.lang.Thread.prototype.destroy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'destroy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUncaughtExceptionHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getUncaughtExceptionHandler()}
 **/
java.lang.Thread.prototype.getUncaughtExceptionHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUncaughtExceptionHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkAccess
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#checkAccess()}
 **/
java.lang.Thread.prototype.checkAccess = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkAccess',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAlive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#isAlive()}
 **/
java.lang.Thread.prototype.isAlive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAlive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDaemon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setDaemon(boolean)}
 **/
java.lang.Thread.prototype.setDaemon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDaemon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getState()}
 **/
java.lang.Thread.prototype.getState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#stop()}
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#stop(java.lang.Throwable)}
 **/
java.lang.Thread.prototype.stop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContextClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getContextClassLoader()}
 **/
java.lang.Thread.prototype.getContextClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContextClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#clone()}
 **/
java.lang.Thread.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getPriority()}
 **/
java.lang.Thread.prototype.getPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countStackFrames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#countStackFrames()}
 **/
java.lang.Thread.prototype.countStackFrames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countStackFrames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#toString()}
 **/
java.lang.Thread.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setPriority(int)}
 **/
java.lang.Thread.prototype.setPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new java.lang.Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.Thread;
