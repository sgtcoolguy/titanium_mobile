/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite.SQLiteProgram
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};
global.android.database.sqlite = global.android.database.sqlite || {};

/**
 * @class android.database.sqlite.SQLiteProgram
 * @extends android.database.sqlite.SQLiteClosable 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html}
 **/
android.database.sqlite.SQLiteProgram = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.database.sqlite.SQLiteProgram') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.database.sqlite.SQLiteProgram',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.database.sqlite.SQLiteClosable');
android.database.sqlite.SQLiteProgram.prototype = Object.create(SuperClass.prototype);
android.database.sqlite.SQLiteProgram.prototype.constructor = android.database.sqlite.SQLiteProgram;

android.database.sqlite.SQLiteProgram.className = "android.database.sqlite.SQLiteProgram";
android.database.sqlite.SQLiteProgram.prototype.className = "android.database.sqlite.SQLiteProgram";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function bindLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#bindLong(int, long)}
 **/
android.database.sqlite.SQLiteProgram.prototype.bindLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bindLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAllReferencesReleased
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#onAllReferencesReleased()}
 **/
android.database.sqlite.SQLiteProgram.prototype.onAllReferencesReleased = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearBindings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#clearBindings()}
 **/
android.database.sqlite.SQLiteProgram.prototype.clearBindings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearBindings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bindDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#bindDouble(int, double)}
 **/
android.database.sqlite.SQLiteProgram.prototype.bindDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bindDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bindString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#bindString(int, java.lang.String)}
 **/
android.database.sqlite.SQLiteProgram.prototype.bindString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bindString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bindNull
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#bindNull(int)}
 **/
android.database.sqlite.SQLiteProgram.prototype.bindNull = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bindNull',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bindAllArgsAsStrings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#bindAllArgsAsStrings(java.lang.String[])}
 **/
android.database.sqlite.SQLiteProgram.prototype.bindAllArgsAsStrings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bindAllArgsAsStrings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bindBlob
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#bindBlob(int, byte[])}
 **/
android.database.sqlite.SQLiteProgram.prototype.bindBlob = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bindBlob',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUniqueId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteProgram.html#getUniqueId()}
 **/
android.database.sqlite.SQLiteProgram.prototype.getUniqueId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUniqueId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteProgram') {
			return new android.database.sqlite.SQLiteProgram(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.database.sqlite.SQLiteProgram;
