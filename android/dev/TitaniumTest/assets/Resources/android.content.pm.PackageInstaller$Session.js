/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageInstaller.Session
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};
global.android.content.pm.PackageInstaller = global.android.content.pm.PackageInstaller || {};

/**
 * @class android.content.pm.PackageInstaller.Session
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html}
 **/
android.content.pm.PackageInstaller.Session = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.PackageInstaller$Session') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.PackageInstaller$Session',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.pm.PackageInstaller.Session.prototype = Object.create(SuperClass.prototype);
android.content.pm.PackageInstaller.Session.prototype.constructor = android.content.pm.PackageInstaller.Session;

android.content.pm.PackageInstaller.Session.className = "android.content.pm.PackageInstaller$Session";
android.content.pm.PackageInstaller.Session.prototype.className = "android.content.pm.PackageInstaller$Session";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function fsync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html#fsync(java.io.OutputStream)}
 **/
android.content.pm.PackageInstaller.Session.prototype.fsync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fsync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$Session') {
			return new android.content.pm.PackageInstaller.Session(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function abandon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html#abandon()}
 **/
android.content.pm.PackageInstaller.Session.prototype.abandon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'abandon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$Session') {
			return new android.content.pm.PackageInstaller.Session(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function commit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html#commit(android.content.IntentSender)}
 **/
android.content.pm.PackageInstaller.Session.prototype.commit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'commit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$Session') {
			return new android.content.pm.PackageInstaller.Session(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openRead
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html#openRead(java.lang.String)}
 **/
android.content.pm.PackageInstaller.Session.prototype.openRead = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openRead',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$Session') {
			return new android.content.pm.PackageInstaller.Session(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html#getNames()}
 **/
android.content.pm.PackageInstaller.Session.prototype.getNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$Session') {
			return new android.content.pm.PackageInstaller.Session(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openWrite
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html#openWrite(java.lang.String, long, long)}
 **/
android.content.pm.PackageInstaller.Session.prototype.openWrite = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openWrite',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$Session') {
			return new android.content.pm.PackageInstaller.Session(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStagingProgress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html#setStagingProgress(float)}
 **/
android.content.pm.PackageInstaller.Session.prototype.setStagingProgress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStagingProgress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$Session') {
			return new android.content.pm.PackageInstaller.Session(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.Session.html#close()}
 **/
android.content.pm.PackageInstaller.Session.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$Session') {
			return new android.content.pm.PackageInstaller.Session(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.PackageInstaller.Session;
