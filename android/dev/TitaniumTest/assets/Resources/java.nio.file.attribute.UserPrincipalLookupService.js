/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.attribute.UserPrincipalLookupService
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.nio = global.java.nio || {};
global.java.nio.file = global.java.nio.file || {};
global.java.nio.file.attribute = global.java.nio.file.attribute || {};

/**
 * @class java.nio.file.attribute.UserPrincipalLookupService
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/UserPrincipalLookupService.html}
 **/
java.nio.file.attribute.UserPrincipalLookupService = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.nio.file.attribute.UserPrincipalLookupService') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.nio.file.attribute.UserPrincipalLookupService',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.nio.file.attribute.UserPrincipalLookupService.prototype = Object.create(SuperClass.prototype);
java.nio.file.attribute.UserPrincipalLookupService.prototype.constructor = java.nio.file.attribute.UserPrincipalLookupService;

java.nio.file.attribute.UserPrincipalLookupService.className = "java.nio.file.attribute.UserPrincipalLookupService";
java.nio.file.attribute.UserPrincipalLookupService.prototype.className = "java.nio.file.attribute.UserPrincipalLookupService";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function lookupPrincipalByGroupName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/UserPrincipalLookupService.html#lookupPrincipalByGroupName(java.lang.String)}
 **/
java.nio.file.attribute.UserPrincipalLookupService.prototype.lookupPrincipalByGroupName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lookupPrincipalByGroupName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.UserPrincipalLookupService') {
			return new java.nio.file.attribute.UserPrincipalLookupService(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lookupPrincipalByName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/UserPrincipalLookupService.html#lookupPrincipalByName(java.lang.String)}
 **/
java.nio.file.attribute.UserPrincipalLookupService.prototype.lookupPrincipalByName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lookupPrincipalByName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.UserPrincipalLookupService') {
			return new java.nio.file.attribute.UserPrincipalLookupService(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.nio.file.attribute.UserPrincipalLookupService;
