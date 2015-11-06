/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite.SQLiteStatement
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};
global.android.database.sqlite = global.android.database.sqlite || {};

/**
 * @class android.database.sqlite.SQLiteStatement
 * @extends android.database.sqlite.SQLiteProgram 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html}
 **/
android.database.sqlite.SQLiteStatement = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.database.sqlite.SQLiteStatement') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.database.sqlite.SQLiteStatement',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.database.sqlite.SQLiteProgram');
android.database.sqlite.SQLiteStatement.prototype = Object.create(SuperClass.prototype);
android.database.sqlite.SQLiteStatement.prototype.constructor = android.database.sqlite.SQLiteStatement;

android.database.sqlite.SQLiteStatement.className = "android.database.sqlite.SQLiteStatement";
android.database.sqlite.SQLiteStatement.prototype.className = "android.database.sqlite.SQLiteStatement";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function executeUpdateDelete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#executeUpdateDelete()}
 **/
android.database.sqlite.SQLiteStatement.prototype.executeUpdateDelete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'executeUpdateDelete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new android.database.sqlite.SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function simpleQueryForLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#simpleQueryForLong()}
 **/
android.database.sqlite.SQLiteStatement.prototype.simpleQueryForLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'simpleQueryForLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new android.database.sqlite.SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function simpleQueryForBlobFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#simpleQueryForBlobFileDescriptor()}
 **/
android.database.sqlite.SQLiteStatement.prototype.simpleQueryForBlobFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'simpleQueryForBlobFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new android.database.sqlite.SQLiteStatement(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#toString()}
 **/
android.database.sqlite.SQLiteStatement.prototype.toString = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new android.database.sqlite.SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function executeInsert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#executeInsert()}
 **/
android.database.sqlite.SQLiteStatement.prototype.executeInsert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'executeInsert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new android.database.sqlite.SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function execute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#execute()}
 **/
android.database.sqlite.SQLiteStatement.prototype.execute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'execute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new android.database.sqlite.SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function simpleQueryForString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#simpleQueryForString()}
 **/
android.database.sqlite.SQLiteStatement.prototype.simpleQueryForString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'simpleQueryForString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new android.database.sqlite.SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.database.sqlite.SQLiteStatement;
