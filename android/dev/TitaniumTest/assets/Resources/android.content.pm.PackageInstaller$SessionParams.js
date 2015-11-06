/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageInstaller.SessionParams
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};
global.android.content.pm.PackageInstaller = global.android.content.pm.PackageInstaller || {};

/**
 * @class android.content.pm.PackageInstaller.SessionParams
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html}
 **/
android.content.pm.PackageInstaller.SessionParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.PackageInstaller$SessionParams') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.PackageInstaller$SessionParams',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.pm.PackageInstaller.SessionParams.prototype = Object.create(SuperClass.prototype);
android.content.pm.PackageInstaller.SessionParams.prototype.constructor = android.content.pm.PackageInstaller.SessionParams;

android.content.pm.PackageInstaller.SessionParams.className = "android.content.pm.PackageInstaller$SessionParams";
android.content.pm.PackageInstaller.SessionParams.prototype.className = "android.content.pm.PackageInstaller$SessionParams";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#MODE_FULL_INSTALL}
 */
android.content.pm.PackageInstaller.SessionParams.MODE_FULL_INSTALL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#MODE_INHERIT_EXISTING}
 */
android.content.pm.PackageInstaller.SessionParams.MODE_INHERIT_EXISTING = 2;

// Static fields
// http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#CREATOR
Object.defineProperty(android.content.pm.PackageInstaller.SessionParams, 'CREATOR', {
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
			if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
				return new android.content.pm.PackageInstaller.SessionParams(result);
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
 * @function setReferrerUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#setReferrerUri(android.net.Uri)}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.setReferrerUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReferrerUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#setSize(long)}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.setSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInstallLocation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#setInstallLocation(int)}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.setInstallLocation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInstallLocation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAppPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#setAppPackageName(java.lang.String)}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.setAppPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAppPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAppLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#setAppLabel(java.lang.CharSequence)}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.setAppLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAppLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOriginatingUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#setOriginatingUri(android.net.Uri)}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.setOriginatingUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOriginatingUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#describeContents()}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAppIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.SessionParams.html#setAppIcon(android.graphics.Bitmap)}
 **/
android.content.pm.PackageInstaller.SessionParams.prototype.setAppIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAppIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller$SessionParams') {
			return new android.content.pm.PackageInstaller.SessionParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.PackageInstaller.SessionParams;
