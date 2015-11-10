/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.DataSetObserver
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};

/**
 * @class android.database.DataSetObserver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/DataSetObserver.html}
 **/
android.database.DataSetObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.database.DataSetObserver') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.database.DataSetObserver. Create a subclass using android.database.DataSetObserver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.database.DataSetObserver.prototype = Object.create(SuperClass.prototype);
android.database.DataSetObserver.prototype.constructor = android.database.DataSetObserver;

android.database.DataSetObserver.className = "android.database.DataSetObserver";
android.database.DataSetObserver.prototype.className = "android.database.DataSetObserver";

// class property
Object.defineProperty(android.database.DataSetObserver, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.database.DataSetObserver',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.database.DataSetObserver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.database.DataSetObserver',
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
	whatever.prototype = Object.create(android.database.DataSetObserver.prototype);
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
 * @function onChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/DataSetObserver.html#onChanged()}
 **/
android.database.DataSetObserver.prototype.onChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.DataSetObserver') {
			return new android.database.DataSetObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInvalidated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/DataSetObserver.html#onInvalidated()}
 **/
android.database.DataSetObserver.prototype.onInvalidated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInvalidated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.DataSetObserver') {
			return new android.database.DataSetObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.database.DataSetObserver;
