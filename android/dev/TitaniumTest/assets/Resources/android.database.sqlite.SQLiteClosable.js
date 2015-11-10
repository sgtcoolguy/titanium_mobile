/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite.SQLiteClosable
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};
global.android.database.sqlite = global.android.database.sqlite || {};

/**
 * @class android.database.sqlite.SQLiteClosable
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteClosable.html}
 **/
android.database.sqlite.SQLiteClosable = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.database.sqlite.SQLiteClosable') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.database.sqlite.SQLiteClosable. Create a subclass using android.database.sqlite.SQLiteClosable.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.database.sqlite.SQLiteClosable.prototype = Object.create(SuperClass.prototype);
android.database.sqlite.SQLiteClosable.prototype.constructor = android.database.sqlite.SQLiteClosable;

android.database.sqlite.SQLiteClosable.className = "android.database.sqlite.SQLiteClosable";
android.database.sqlite.SQLiteClosable.prototype.className = "android.database.sqlite.SQLiteClosable";

// class property
Object.defineProperty(android.database.sqlite.SQLiteClosable, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.database.sqlite.SQLiteClosable',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.database.sqlite.SQLiteClosable.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.database.sqlite.SQLiteClosable',
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
	whatever.prototype = Object.create(android.database.sqlite.SQLiteClosable.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onAllReferencesReleased
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteClosable.html#onAllReferencesReleased()}
 **/
android.database.sqlite.SQLiteClosable.prototype.onAllReferencesReleased = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAllReferencesReleased',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteClosable') {
			return new android.database.sqlite.SQLiteClosable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releaseReferenceFromContainer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteClosable.html#releaseReferenceFromContainer()}
 **/
android.database.sqlite.SQLiteClosable.prototype.releaseReferenceFromContainer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'releaseReferenceFromContainer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteClosable') {
			return new android.database.sqlite.SQLiteClosable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function acquireReference
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteClosable.html#acquireReference()}
 **/
android.database.sqlite.SQLiteClosable.prototype.acquireReference = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'acquireReference',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteClosable') {
			return new android.database.sqlite.SQLiteClosable(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteClosable.html#close()}
 **/
android.database.sqlite.SQLiteClosable.prototype.close = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteClosable') {
			return new android.database.sqlite.SQLiteClosable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAllReferencesReleasedFromContainer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteClosable.html#onAllReferencesReleasedFromContainer()}
 **/
android.database.sqlite.SQLiteClosable.prototype.onAllReferencesReleasedFromContainer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAllReferencesReleasedFromContainer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteClosable') {
			return new android.database.sqlite.SQLiteClosable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releaseReference
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteClosable.html#releaseReference()}
 **/
android.database.sqlite.SQLiteClosable.prototype.releaseReference = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'releaseReference',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteClosable') {
			return new android.database.sqlite.SQLiteClosable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.database.sqlite.SQLiteClosable;
