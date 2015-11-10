/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite.SQLiteDatabase
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};
global.android.database.sqlite = global.android.database.sqlite || {};

/**
 * @class android.database.sqlite.SQLiteDatabase
 * @extends android.database.sqlite.SQLiteClosable 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html}
 **/
android.database.sqlite.SQLiteDatabase = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.database.sqlite.SQLiteDatabase') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.database.sqlite.SQLiteDatabase',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.database.sqlite.SQLiteClosable');
android.database.sqlite.SQLiteDatabase.prototype = Object.create(SuperClass.prototype);
android.database.sqlite.SQLiteDatabase.prototype.constructor = android.database.sqlite.SQLiteDatabase;

android.database.sqlite.SQLiteDatabase.className = "android.database.sqlite.SQLiteDatabase";
android.database.sqlite.SQLiteDatabase.prototype.className = "android.database.sqlite.SQLiteDatabase";

// class property
Object.defineProperty(android.database.sqlite.SQLiteDatabase, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.database.sqlite.SQLiteDatabase',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_REPLACE}
 */
android.database.sqlite.SQLiteDatabase.CONFLICT_REPLACE = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#OPEN_READWRITE}
 */
android.database.sqlite.SQLiteDatabase.OPEN_READWRITE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CREATE_IF_NECESSARY}
 */
android.database.sqlite.SQLiteDatabase.CREATE_IF_NECESSARY = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#OPEN_READONLY}
 */
android.database.sqlite.SQLiteDatabase.OPEN_READONLY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#ENABLE_WRITE_AHEAD_LOGGING}
 */
android.database.sqlite.SQLiteDatabase.ENABLE_WRITE_AHEAD_LOGGING = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_FAIL}
 */
android.database.sqlite.SQLiteDatabase.CONFLICT_FAIL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_IGNORE}
 */
android.database.sqlite.SQLiteDatabase.CONFLICT_IGNORE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#NO_LOCALIZED_COLLATORS}
 */
android.database.sqlite.SQLiteDatabase.NO_LOCALIZED_COLLATORS = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#SQLITE_MAX_LIKE_PATTERN_LENGTH}
 */
android.database.sqlite.SQLiteDatabase.SQLITE_MAX_LIKE_PATTERN_LENGTH = 50000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_NONE}
 */
android.database.sqlite.SQLiteDatabase.CONFLICT_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_ROLLBACK}
 */
android.database.sqlite.SQLiteDatabase.CONFLICT_ROLLBACK = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_ABORT}
 */
android.database.sqlite.SQLiteDatabase.CONFLICT_ABORT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#MAX_SQL_CACHE_SIZE}
 */
android.database.sqlite.SQLiteDatabase.MAX_SQL_CACHE_SIZE = 100;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function deleteDatabase
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#deleteDatabase(java.io.File)}
 **/
android.database.sqlite.SQLiteDatabase.deleteDatabase = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'deleteDatabase',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function create
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#create(android.database.sqlite.SQLiteDatabase$CursorFactory)}
 **/
android.database.sqlite.SQLiteDatabase.create = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'create',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openDatabase
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase$CursorFactory, int)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase$CursorFactory, int, android.database.DatabaseErrorHandler)}
 **/
android.database.sqlite.SQLiteDatabase.openDatabase = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'openDatabase',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releaseMemory
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#releaseMemory()}
 **/
android.database.sqlite.SQLiteDatabase.releaseMemory = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'releaseMemory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openOrCreateDatabase
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.io.File, android.database.sqlite.SQLiteDatabase$CursorFactory)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase$CursorFactory)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase$CursorFactory, android.database.DatabaseErrorHandler)}
 **/
android.database.sqlite.SQLiteDatabase.openOrCreateDatabase = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'openOrCreateDatabase',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findEditTable
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#findEditTable(java.lang.String)}
 **/
android.database.sqlite.SQLiteDatabase.findEditTable = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'findEditTable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
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
 * @function updateWithOnConflict
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#updateWithOnConflict(java.lang.String, android.content.ContentValues, java.lang.String, java.lang.String[], int)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.updateWithOnConflict = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateWithOnConflict',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function needUpgrade
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#needUpgrade(int)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.needUpgrade = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'needUpgrade',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#replace(java.lang.String, java.lang.String, android.content.ContentValues)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.replace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransactionWithListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#beginTransactionWithListener(android.database.sqlite.SQLiteTransactionListener)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.beginTransactionWithListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransactionWithListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSyncedTables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getSyncedTables()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.getSyncedTables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSyncedTables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryWithFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#queryWithFactory(android.database.sqlite.SQLiteDatabase$CursorFactory, boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#queryWithFactory(android.database.sqlite.SQLiteDatabase$CursorFactory, boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.os.CancellationSignal)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.queryWithFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryWithFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rawQueryWithFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQueryWithFactory(android.database.sqlite.SQLiteDatabase$CursorFactory, java.lang.String, java.lang.String[], java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQueryWithFactory(android.database.sqlite.SQLiteDatabase$CursorFactory, java.lang.String, java.lang.String[], java.lang.String, android.os.CancellationSignal)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.rawQueryWithFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rawQueryWithFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#onAllReferencesReleased()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.onAllReferencesReleased = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransactionWithListenerNonExclusive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#beginTransactionWithListenerNonExclusive(android.database.sqlite.SQLiteTransactionListener)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.beginTransactionWithListenerNonExclusive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransactionWithListenerNonExclusive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function markTableSyncable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#markTableSyncable(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#markTableSyncable(java.lang.String, java.lang.String, java.lang.String)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.markTableSyncable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'markTableSyncable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getPath()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.getPath = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function yieldIfContended
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#yieldIfContended()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.yieldIfContended = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'yieldIfContended',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setVersion(int)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.setVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function execSQL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#execSQL(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#execSQL(java.lang.String, java.lang.Object[])}
 **/
android.database.sqlite.SQLiteDatabase.prototype.execSQL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'execSQL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaxSqlCacheSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setMaxSqlCacheSize(int)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.setMaxSqlCacheSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxSqlCacheSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enableWriteAheadLogging
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#enableWriteAheadLogging()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.enableWriteAheadLogging = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enableWriteAheadLogging',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function query
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.os.CancellationSignal)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.query = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'query',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setForeignKeyConstraintsEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setForeignKeyConstraintsEnabled(boolean)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.setForeignKeyConstraintsEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setForeignKeyConstraintsEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPageSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getPageSize()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.getPageSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPageSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insertWithOnConflict
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insertWithOnConflict(java.lang.String, java.lang.String, android.content.ContentValues, int)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.insertWithOnConflict = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insertWithOnConflict',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isOpen()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.isOpen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransaction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#beginTransaction()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.beginTransaction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransaction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compileStatement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#compileStatement(java.lang.String)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.compileStatement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compileStatement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDbLockedByOtherThreads
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isDbLockedByOtherThreads()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.isDbLockedByOtherThreads = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDbLockedByOtherThreads',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransactionSuccessful
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setTransactionSuccessful()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.setTransactionSuccessful = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransactionSuccessful',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setLocale(java.util.Locale)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.setLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function endTransaction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#endTransaction()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.endTransaction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'endTransaction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rawQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQuery(java.lang.String, java.lang.String[])}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQuery(java.lang.String, java.lang.String[], android.os.CancellationSignal)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.rawQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rawQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaximumSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getMaximumSize()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.getMaximumSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaximumSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransactionNonExclusive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#beginTransactionNonExclusive()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.beginTransactionNonExclusive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransactionNonExclusive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insert(java.lang.String, java.lang.String, android.content.ContentValues)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.insert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function update
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#update(java.lang.String, android.content.ContentValues, java.lang.String, java.lang.String[])}
 **/
android.database.sqlite.SQLiteDatabase.prototype.update = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'update',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaximumSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setMaximumSize(long)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.setMaximumSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaximumSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLockingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setLockingEnabled(boolean)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.setLockingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLockingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function delete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#delete(java.lang.String, java.lang.String, java.lang.String[])}
 **/
android.database.sqlite.SQLiteDatabase.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReadOnly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isReadOnly()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.isReadOnly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReadOnly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function yieldIfContendedSafely
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#yieldIfContendedSafely()}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#yieldIfContendedSafely(long)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.yieldIfContendedSafely = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'yieldIfContendedSafely',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceOrThrow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#replaceOrThrow(java.lang.String, java.lang.String, android.content.ContentValues)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.replaceOrThrow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceOrThrow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getVersion()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.getVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDbLockedByCurrentThread
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isDbLockedByCurrentThread()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.isDbLockedByCurrentThread = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDbLockedByCurrentThread',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAttachedDbs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getAttachedDbs()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.getAttachedDbs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAttachedDbs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inTransaction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#inTransaction()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.inTransaction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inTransaction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insertOrThrow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insertOrThrow(java.lang.String, java.lang.String, android.content.ContentValues)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.insertOrThrow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insertOrThrow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isWriteAheadLoggingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isWriteAheadLoggingEnabled()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.isWriteAheadLoggingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isWriteAheadLoggingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function disableWriteAheadLogging
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#disableWriteAheadLogging()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.disableWriteAheadLogging = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disableWriteAheadLogging',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDatabaseIntegrityOk
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isDatabaseIntegrityOk()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.isDatabaseIntegrityOk = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDatabaseIntegrityOk',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#finalize()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.finalize = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#toString()}
 **/
android.database.sqlite.SQLiteDatabase.prototype.toString = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPageSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setPageSize(long)}
 **/
android.database.sqlite.SQLiteDatabase.prototype.setPageSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPageSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new android.database.sqlite.SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.database.sqlite.SQLiteDatabase;
