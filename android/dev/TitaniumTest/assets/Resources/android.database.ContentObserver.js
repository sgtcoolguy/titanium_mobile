/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.ContentObserver
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};

/**
 * @class android.database.ContentObserver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html}
 **/
android.database.ContentObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.database.ContentObserver') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.database.ContentObserver. Create a subclass using android.database.ContentObserver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.database.ContentObserver.prototype = Object.create(SuperClass.prototype);
android.database.ContentObserver.prototype.constructor = android.database.ContentObserver;

android.database.ContentObserver.className = "android.database.ContentObserver";
android.database.ContentObserver.prototype.className = "android.database.ContentObserver";

// class property
Object.defineProperty(android.database.ContentObserver, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.database.ContentObserver',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.database.ContentObserver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.database.ContentObserver',
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
	whatever.prototype = Object.create(android.database.ContentObserver.prototype);
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
 * @function dispatchChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#dispatchChange(boolean)}
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#dispatchChange(boolean, android.net.Uri)}
 **/
android.database.ContentObserver.prototype.dispatchChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.ContentObserver') {
			return new android.database.ContentObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#onChange(boolean)}
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#onChange(boolean, android.net.Uri)}
 **/
android.database.ContentObserver.prototype.onChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.ContentObserver') {
			return new android.database.ContentObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deliverSelfNotifications
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#deliverSelfNotifications()}
 **/
android.database.ContentObserver.prototype.deliverSelfNotifications = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deliverSelfNotifications',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.ContentObserver') {
			return new android.database.ContentObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.database.ContentObserver;
