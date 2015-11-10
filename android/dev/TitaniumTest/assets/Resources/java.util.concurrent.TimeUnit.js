/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.concurrent.TimeUnit
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.concurrent = global.java.util.concurrent || {};

/**
 * @class java.util.concurrent.TimeUnit
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html}
 **/
java.util.concurrent.TimeUnit = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'java.util.concurrent.TimeUnit') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.util.concurrent.TimeUnit. Create a subclass using java.util.concurrent.TimeUnit.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
java.util.concurrent.TimeUnit.prototype = Object.create(SuperClass.prototype);
java.util.concurrent.TimeUnit.prototype.constructor = java.util.concurrent.TimeUnit;

java.util.concurrent.TimeUnit.className = "java.util.concurrent.TimeUnit";
java.util.concurrent.TimeUnit.prototype.className = "java.util.concurrent.TimeUnit";

// class property
Object.defineProperty(java.util.concurrent.TimeUnit, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.util.concurrent.TimeUnit',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
java.util.concurrent.TimeUnit.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'java.util.concurrent.TimeUnit',
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
	whatever.prototype = Object.create(java.util.concurrent.TimeUnit.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#MILLISECONDS
Object.defineProperty(java.util.concurrent.TimeUnit, 'MILLISECONDS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'MILLISECONDS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new java.util.concurrent.TimeUnit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#MICROSECONDS
Object.defineProperty(java.util.concurrent.TimeUnit, 'MICROSECONDS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'MICROSECONDS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new java.util.concurrent.TimeUnit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#HOURS
Object.defineProperty(java.util.concurrent.TimeUnit, 'HOURS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'HOURS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new java.util.concurrent.TimeUnit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#SECONDS
Object.defineProperty(java.util.concurrent.TimeUnit, 'SECONDS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'SECONDS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new java.util.concurrent.TimeUnit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#NANOSECONDS
Object.defineProperty(java.util.concurrent.TimeUnit, 'NANOSECONDS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'NANOSECONDS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new java.util.concurrent.TimeUnit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#DAYS
Object.defineProperty(java.util.concurrent.TimeUnit, 'DAYS', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'DAYS'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new java.util.concurrent.TimeUnit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#MINUTES
Object.defineProperty(java.util.concurrent.TimeUnit, 'MINUTES', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'MINUTES'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new java.util.concurrent.TimeUnit(result);
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
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#valueOf(java.lang.String)}
 **/
java.util.concurrent.TimeUnit.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#values()}
 **/
java.util.concurrent.TimeUnit.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
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
 * @function timedJoin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#timedJoin(java.lang.Thread, long)}
 **/
java.util.concurrent.TimeUnit.prototype.timedJoin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'timedJoin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function timedWait
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#timedWait(java.lang.Object, long)}
 **/
java.util.concurrent.TimeUnit.prototype.timedWait = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'timedWait',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function convert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#convert(long, java.util.concurrent.TimeUnit)}
 **/
java.util.concurrent.TimeUnit.prototype.convert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'convert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toSeconds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toSeconds(long)}
 **/
java.util.concurrent.TimeUnit.prototype.toSeconds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toSeconds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
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
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#sleep(long)}
 **/
java.util.concurrent.TimeUnit.prototype.sleep = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sleep',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toNanos
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toNanos(long)}
 **/
java.util.concurrent.TimeUnit.prototype.toNanos = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toNanos',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMinutes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toMinutes(long)}
 **/
java.util.concurrent.TimeUnit.prototype.toMinutes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMinutes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toHours
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toHours(long)}
 **/
java.util.concurrent.TimeUnit.prototype.toHours = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toHours',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMillis
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toMillis(long)}
 **/
java.util.concurrent.TimeUnit.prototype.toMillis = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMillis',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toDays
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toDays(long)}
 **/
java.util.concurrent.TimeUnit.prototype.toDays = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toDays',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMicros
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toMicros(long)}
 **/
java.util.concurrent.TimeUnit.prototype.toMicros = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMicros',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new java.util.concurrent.TimeUnit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.concurrent.TimeUnit;
