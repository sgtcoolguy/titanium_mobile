/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.PatternMatcher
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.os = global.android.os || {};

/**
 * @class android.os.PatternMatcher
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html}
 **/
android.os.PatternMatcher = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.os.PatternMatcher') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.os.PatternMatcher',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.os.PatternMatcher.prototype = Object.create(SuperClass.prototype);
android.os.PatternMatcher.prototype.constructor = android.os.PatternMatcher;

android.os.PatternMatcher.className = "android.os.PatternMatcher";
android.os.PatternMatcher.prototype.className = "android.os.PatternMatcher";

// class property
Object.defineProperty(android.os.PatternMatcher, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.os.PatternMatcher',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.os.PatternMatcher.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.os.PatternMatcher',
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
	whatever.prototype = Object.create(android.os.PatternMatcher.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#PATTERN_SIMPLE_GLOB}
 */
android.os.PatternMatcher.PATTERN_SIMPLE_GLOB = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#PATTERN_PREFIX}
 */
android.os.PatternMatcher.PATTERN_PREFIX = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#PATTERN_LITERAL}
 */
android.os.PatternMatcher.PATTERN_LITERAL = 0;

// Static fields
// http://developer.android.com/reference/android/os/PatternMatcher.html#CREATOR
Object.defineProperty(android.os.PatternMatcher, 'CREATOR', {
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
			if (result.apiName === 'android.os.PatternMatcher') {
				return new android.os.PatternMatcher(result);
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
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#getType()}
 **/
android.os.PatternMatcher.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PatternMatcher') {
			return new android.os.PatternMatcher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#getPath()}
 **/
android.os.PatternMatcher.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PatternMatcher') {
			return new android.os.PatternMatcher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function match
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#match(java.lang.String)}
 **/
android.os.PatternMatcher.prototype.match = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'match',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PatternMatcher') {
			return new android.os.PatternMatcher(result);
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
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#toString()}
 **/
android.os.PatternMatcher.prototype.toString = function() {
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
		if (result.apiName === 'android.os.PatternMatcher') {
			return new android.os.PatternMatcher(result);
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
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#describeContents()}
 **/
android.os.PatternMatcher.prototype.describeContents = function() {
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
		if (result.apiName === 'android.os.PatternMatcher') {
			return new android.os.PatternMatcher(result);
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
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#writeToParcel(android.os.Parcel, int)}
 **/
android.os.PatternMatcher.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.os.PatternMatcher') {
			return new android.os.PatternMatcher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.os.PatternMatcher;
