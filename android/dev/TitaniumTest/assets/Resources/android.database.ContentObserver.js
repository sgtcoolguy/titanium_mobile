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
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.database.ContentObserver') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.database.ContentObserver',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
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
