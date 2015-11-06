/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.IntentFilter.AuthorityEntry
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.IntentFilter = global.android.content.IntentFilter || {};

/**
 * @class android.content.IntentFilter.AuthorityEntry
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.AuthorityEntry.html}
 **/
android.content.IntentFilter.AuthorityEntry = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.IntentFilter$AuthorityEntry') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.IntentFilter$AuthorityEntry',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.IntentFilter.AuthorityEntry.prototype = Object.create(SuperClass.prototype);
android.content.IntentFilter.AuthorityEntry.prototype.constructor = android.content.IntentFilter.AuthorityEntry;

android.content.IntentFilter.AuthorityEntry.className = "android.content.IntentFilter$AuthorityEntry";
android.content.IntentFilter.AuthorityEntry.prototype.className = "android.content.IntentFilter$AuthorityEntry";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.AuthorityEntry.html#getPort()}
 **/
android.content.IntentFilter.AuthorityEntry.prototype.getPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter$AuthorityEntry') {
			return new android.content.IntentFilter.AuthorityEntry(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.AuthorityEntry.html#match(android.net.Uri)}
 **/
android.content.IntentFilter.AuthorityEntry.prototype.match = function() {
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
		if (result.apiName === 'android.content.IntentFilter$AuthorityEntry') {
			return new android.content.IntentFilter.AuthorityEntry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHost
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.AuthorityEntry.html#getHost()}
 **/
android.content.IntentFilter.AuthorityEntry.prototype.getHost = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHost',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter$AuthorityEntry') {
			return new android.content.IntentFilter.AuthorityEntry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.IntentFilter.AuthorityEntry;
