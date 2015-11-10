/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite.SQLiteQuery
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};
global.android.database.sqlite = global.android.database.sqlite || {};

/**
 * @class android.database.sqlite.SQLiteQuery
 * @extends android.database.sqlite.SQLiteProgram 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteQuery.html}
 **/
android.database.sqlite.SQLiteQuery = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.database.sqlite.SQLiteQuery') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.database.sqlite.SQLiteQuery',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.database.sqlite.SQLiteProgram');
android.database.sqlite.SQLiteQuery.prototype = Object.create(SuperClass.prototype);
android.database.sqlite.SQLiteQuery.prototype.constructor = android.database.sqlite.SQLiteQuery;

android.database.sqlite.SQLiteQuery.className = "android.database.sqlite.SQLiteQuery";
android.database.sqlite.SQLiteQuery.prototype.className = "android.database.sqlite.SQLiteQuery";

// class property
Object.defineProperty(android.database.sqlite.SQLiteQuery, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.database.sqlite.SQLiteQuery',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteQuery.html#toString()}
 **/
android.database.sqlite.SQLiteQuery.prototype.toString = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteQuery') {
			return new android.database.sqlite.SQLiteQuery(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.database.sqlite.SQLiteQuery;
