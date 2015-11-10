/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageInstaller
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};

/**
 * @class android.content.pm.PackageInstaller
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html}
 **/
android.content.pm.PackageInstaller = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.pm.PackageInstaller') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.PackageInstaller',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.pm.PackageInstaller.prototype = Object.create(SuperClass.prototype);
android.content.pm.PackageInstaller.prototype.constructor = android.content.pm.PackageInstaller;

android.content.pm.PackageInstaller.className = "android.content.pm.PackageInstaller";
android.content.pm.PackageInstaller.prototype.className = "android.content.pm.PackageInstaller";

// class property
Object.defineProperty(android.content.pm.PackageInstaller, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.pm.PackageInstaller',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.pm.PackageInstaller.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.pm.PackageInstaller',
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
	whatever.prototype = Object.create(android.content.pm.PackageInstaller.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_STATUS}
 */
android.content.pm.PackageInstaller.EXTRA_STATUS = "android.content.pm.extra.STATUS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_ABORTED}
 */
android.content.pm.PackageInstaller.STATUS_FAILURE_ABORTED = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE}
 */
android.content.pm.PackageInstaller.STATUS_FAILURE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_STORAGE_PATH}
 */
android.content.pm.PackageInstaller.EXTRA_STORAGE_PATH = "android.content.pm.extra.STORAGE_PATH";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#ACTION_SESSION_DETAILS}
 */
android.content.pm.PackageInstaller.ACTION_SESSION_DETAILS = "android.content.pm.action.SESSION_DETAILS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_PENDING_USER_ACTION}
 */
android.content.pm.PackageInstaller.STATUS_PENDING_USER_ACTION = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_STORAGE}
 */
android.content.pm.PackageInstaller.STATUS_FAILURE_STORAGE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_CONFLICT}
 */
android.content.pm.PackageInstaller.STATUS_FAILURE_CONFLICT = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_SUCCESS}
 */
android.content.pm.PackageInstaller.STATUS_SUCCESS = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_PACKAGE_NAME}
 */
android.content.pm.PackageInstaller.EXTRA_PACKAGE_NAME = "android.content.pm.extra.PACKAGE_NAME";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_STATUS_MESSAGE}
 */
android.content.pm.PackageInstaller.EXTRA_STATUS_MESSAGE = "android.content.pm.extra.STATUS_MESSAGE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_OTHER_PACKAGE_NAME}
 */
android.content.pm.PackageInstaller.EXTRA_OTHER_PACKAGE_NAME = "android.content.pm.extra.OTHER_PACKAGE_NAME";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_SESSION_ID}
 */
android.content.pm.PackageInstaller.EXTRA_SESSION_ID = "android.content.pm.extra.SESSION_ID";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_BLOCKED}
 */
android.content.pm.PackageInstaller.STATUS_FAILURE_BLOCKED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_INVALID}
 */
android.content.pm.PackageInstaller.STATUS_FAILURE_INVALID = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_INCOMPATIBLE}
 */
android.content.pm.PackageInstaller.STATUS_FAILURE_INCOMPATIBLE = 7;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getSessionInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#getSessionInfo(int)}
 **/
android.content.pm.PackageInstaller.prototype.getSessionInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSessionInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function uninstall
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#uninstall(java.lang.String, android.content.IntentSender)}
 **/
android.content.pm.PackageInstaller.prototype.uninstall = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'uninstall',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMySessions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#getMySessions()}
 **/
android.content.pm.PackageInstaller.prototype.getMySessions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMySessions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateSessionAppIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#updateSessionAppIcon(int, android.graphics.Bitmap)}
 **/
android.content.pm.PackageInstaller.prototype.updateSessionAppIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateSessionAppIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openSession
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#openSession(int)}
 **/
android.content.pm.PackageInstaller.prototype.openSession = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openSession',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllSessions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#getAllSessions()}
 **/
android.content.pm.PackageInstaller.prototype.getAllSessions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllSessions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateSessionAppLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#updateSessionAppLabel(int, java.lang.CharSequence)}
 **/
android.content.pm.PackageInstaller.prototype.updateSessionAppLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateSessionAppLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerSessionCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#registerSessionCallback(android.content.pm.PackageInstaller$SessionCallback)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#registerSessionCallback(android.content.pm.PackageInstaller$SessionCallback, android.os.Handler)}
 **/
android.content.pm.PackageInstaller.prototype.registerSessionCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerSessionCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function abandonSession
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#abandonSession(int)}
 **/
android.content.pm.PackageInstaller.prototype.abandonSession = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'abandonSession',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createSession
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#createSession(android.content.pm.PackageInstaller$SessionParams)}
 **/
android.content.pm.PackageInstaller.prototype.createSession = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createSession',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterSessionCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#unregisterSessionCallback(android.content.pm.PackageInstaller$SessionCallback)}
 **/
android.content.pm.PackageInstaller.prototype.unregisterSessionCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterSessionCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new android.content.pm.PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.PackageInstaller;
