/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * constructor
 * http://developer.android.com/reference/java/util/Spliterator.html
 **/
java.util.Spliterator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName && arguments[0].apiName === 'java.util.Spliterator') {
		result = arguments[0];
	}
	else {
		var instance = this,
			copy = Array.prototype.slice.call(arguments)[0],
			modified = {};

		function _wrapArg(arg) {
			if (arg.apiName && arg.callNativeFunction) { // Assume hyperloop proxy, wrap in JS wrapper
				var other = require(arg.apiName);
				return new other(arg);
			}
			return arg;
		}

		function _wrapArgs() {
			var newArgs = [];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i] = _wrapArg(arguments[i]);
			}
			return newArgs;
		};
		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(this, arguments);
			};

			// Hang a delegate on the "overrides" object we pass into Java.
			// This one wraps hyperloop proxies from Java in their JS wrapper before forwarding on
			modified[each] = function() {
				return instance[each].apply(this, _wrapArgs.apply(this, arguments));
			}
		});
		// Create interface proxy and pass along the modified overrides that auto wrap native objects in JS wrappers
		// and delegate to the original impls.
		result = Hyperloop.createProxy({
			class: 'java.util.Spliterator',
			alloc: true,
			args: [modified]
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

java.util.Spliterator.toString = function() {
	return "[object " + this.className + "]";
};

java.util.Spliterator.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

java.util.Spliterator.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

java.util.Spliterator.className = "java.util.Spliterator";
java.util.Spliterator.prototype.className = "java.util.Spliterator";

// class property
Object.defineProperty(java.util.Spliterator, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'java.util.Spliterator',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Constants
// http://developer.android.com/reference/java/util/Spliterator.html#NONNULL
java.util.Spliterator.NONNULL = 256;
// http://developer.android.com/reference/java/util/Spliterator.html#SUBSIZED
java.util.Spliterator.SUBSIZED = 16384;
// http://developer.android.com/reference/java/util/Spliterator.html#ORDERED
java.util.Spliterator.ORDERED = 16;
// http://developer.android.com/reference/java/util/Spliterator.html#DISTINCT
java.util.Spliterator.DISTINCT = 1;
// http://developer.android.com/reference/java/util/Spliterator.html#SIZED
java.util.Spliterator.SIZED = 64;
// http://developer.android.com/reference/java/util/Spliterator.html#IMMUTABLE
java.util.Spliterator.IMMUTABLE = 1024;
// http://developer.android.com/reference/java/util/Spliterator.html#CONCURRENT
java.util.Spliterator.CONCURRENT = 4096;
// http://developer.android.com/reference/java/util/Spliterator.html#SORTED
java.util.Spliterator.SORTED = 4;

// export the interface
module.exports = java.util.Spliterator;
