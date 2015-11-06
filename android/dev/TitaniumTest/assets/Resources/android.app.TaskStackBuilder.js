/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.TaskStackBuilder
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.TaskStackBuilder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html}
 **/
android.app.TaskStackBuilder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.TaskStackBuilder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.TaskStackBuilder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.TaskStackBuilder.prototype = Object.create(SuperClass.prototype);
android.app.TaskStackBuilder.prototype.constructor = android.app.TaskStackBuilder;

android.app.TaskStackBuilder.className = "android.app.TaskStackBuilder";
android.app.TaskStackBuilder.prototype.className = "android.app.TaskStackBuilder";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function create
 * @static
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#create(android.content.Context)}
 **/
android.app.TaskStackBuilder.create = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'create',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
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
 * @function startActivities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#startActivities()}
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#startActivities(android.os.Bundle)}
 **/
android.app.TaskStackBuilder.prototype.startActivities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addParentStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addParentStack(android.app.Activity)}
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addParentStack(java.lang.Class)}
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addParentStack(android.content.ComponentName)}
 **/
android.app.TaskStackBuilder.prototype.addParentStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addParentStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntentCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#getIntentCount()}
 **/
android.app.TaskStackBuilder.prototype.getIntentCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntentCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#getIntents()}
 **/
android.app.TaskStackBuilder.prototype.getIntents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPendingIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#getPendingIntent(int, int)}
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#getPendingIntent(int, int, android.os.Bundle)}
 **/
android.app.TaskStackBuilder.prototype.getPendingIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPendingIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addNextIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addNextIntent(android.content.Intent)}
 **/
android.app.TaskStackBuilder.prototype.addNextIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addNextIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addNextIntentWithParentStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addNextIntentWithParentStack(android.content.Intent)}
 **/
android.app.TaskStackBuilder.prototype.addNextIntentWithParentStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addNextIntentWithParentStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function editIntentAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#editIntentAt(int)}
 **/
android.app.TaskStackBuilder.prototype.editIntentAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'editIntentAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new android.app.TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.TaskStackBuilder;
