/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageInstaller.SessionInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};
global.android.content.pm.PackageInstaller = global.android.content.pm.PackageInstaller || {};

/**
 * @class android.content.pm.PackageInstaller.SessionInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html}
 **/
android.content.pm.PackageInstaller.SessionInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.PackageInstaller$SessionInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.pm.PackageInstaller.SessionInfo.prototype = Object.create(SuperClass.prototype);
android.content.pm.PackageInstaller.SessionInfo.prototype.constructor = android.content.pm.PackageInstaller.SessionInfo;

android.content.pm.PackageInstaller.SessionInfo.className = "android.content.pm.PackageInstaller$SessionInfo";
android.content.pm.PackageInstaller.SessionInfo.prototype.className = "android.content.pm.PackageInstaller$SessionInfo";

// Constants

// Static fields
// http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#CREATOR
Object.defineProperty(android.content.pm.PackageInstaller.SessionInfo, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
				return new android.content.pm.PackageInstaller.SessionInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getAppIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#getAppIcon()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.getAppIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAppIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstallerPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#getInstallerPackageName()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.getInstallerPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInstallerPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAppPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#getAppPackageName()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.getAppPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAppPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAppLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#getAppLabel()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.getAppLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAppLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSessionId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#getSessionId()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.getSessionId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSessionId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isActive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#isActive()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.isActive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isActive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProgress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#getProgress()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.getProgress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProgress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#describeContents()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createDetailsIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionInfo.html#createDetailsIntent()}
 **/
android.content.pm.PackageInstaller.SessionInfo.prototype.createDetailsIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createDetailsIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionInfo') {
			return new android.content.pm.PackageInstaller.SessionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.PackageInstaller.SessionInfo;
