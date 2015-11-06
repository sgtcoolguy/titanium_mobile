/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PermissionGroupInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};

/**
 * @class android.content.pm.PermissionGroupInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html}
 **/
android.content.pm.PermissionGroupInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.PermissionGroupInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.PermissionGroupInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
android.content.pm.PermissionGroupInfo.prototype = Object.create(SuperClass.prototype);
android.content.pm.PermissionGroupInfo.prototype.constructor = android.content.pm.PermissionGroupInfo;

android.content.pm.PermissionGroupInfo.className = "android.content.pm.PermissionGroupInfo";
android.content.pm.PermissionGroupInfo.prototype.className = "android.content.pm.PermissionGroupInfo";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#FLAG_PERSONAL_INFO}
 */
android.content.pm.PermissionGroupInfo.FLAG_PERSONAL_INFO = 1;

// Static fields
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#CREATOR
Object.defineProperty(android.content.pm.PermissionGroupInfo, 'CREATOR', {
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
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new android.content.pm.PermissionGroupInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#nonLocalizedDescription
Object.defineProperty(android.content.pm.PermissionGroupInfo.prototype, 'nonLocalizedDescription', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'nonLocalizedDescription'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new android.content.pm.PermissionGroupInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'nonLocalizedDescription',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#flags
Object.defineProperty(android.content.pm.PermissionGroupInfo.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'flags'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new android.content.pm.PermissionGroupInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'flags',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#priority
Object.defineProperty(android.content.pm.PermissionGroupInfo.prototype, 'priority', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'priority'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new android.content.pm.PermissionGroupInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'priority',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#descriptionRes
Object.defineProperty(android.content.pm.PermissionGroupInfo.prototype, 'descriptionRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'descriptionRes'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new android.content.pm.PermissionGroupInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'descriptionRes',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function loadDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#loadDescription(android.content.pm.PackageManager)}
 **/
android.content.pm.PermissionGroupInfo.prototype.loadDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
			return new android.content.pm.PermissionGroupInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#toString()}
 **/
android.content.pm.PermissionGroupInfo.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
			return new android.content.pm.PermissionGroupInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#describeContents()}
 **/
android.content.pm.PermissionGroupInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
			return new android.content.pm.PermissionGroupInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.PermissionGroupInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
			return new android.content.pm.PermissionGroupInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.PermissionGroupInfo;
