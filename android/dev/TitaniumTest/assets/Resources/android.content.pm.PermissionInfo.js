/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PermissionInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};

/**
 * @class android.content.pm.PermissionInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html}
 **/
android.content.pm.PermissionInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.pm.PermissionInfo') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.PermissionInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
android.content.pm.PermissionInfo.prototype = Object.create(SuperClass.prototype);
android.content.pm.PermissionInfo.prototype.constructor = android.content.pm.PermissionInfo;

android.content.pm.PermissionInfo.className = "android.content.pm.PermissionInfo";
android.content.pm.PermissionInfo.prototype.className = "android.content.pm.PermissionInfo";

// class property
Object.defineProperty(android.content.pm.PermissionInfo, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.pm.PermissionInfo',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.pm.PermissionInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.pm.PermissionInfo',
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
	whatever.prototype = Object.create(android.content.pm.PermissionInfo.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#FLAG_COSTS_MONEY}
 */
android.content.pm.PermissionInfo.FLAG_COSTS_MONEY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#FLAG_INSTALLED}
 */
android.content.pm.PermissionInfo.FLAG_INSTALLED = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_DANGEROUS}
 */
android.content.pm.PermissionInfo.PROTECTION_DANGEROUS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_DEVELOPMENT}
 */
android.content.pm.PermissionInfo.PROTECTION_FLAG_DEVELOPMENT = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_MASK_FLAGS}
 */
android.content.pm.PermissionInfo.PROTECTION_MASK_FLAGS = 4080;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_APPOP}
 */
android.content.pm.PermissionInfo.PROTECTION_FLAG_APPOP = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_SIGNATURE}
 */
android.content.pm.PermissionInfo.PROTECTION_SIGNATURE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_VERIFIER}
 */
android.content.pm.PermissionInfo.PROTECTION_FLAG_VERIFIER = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_INSTALLER}
 */
android.content.pm.PermissionInfo.PROTECTION_FLAG_INSTALLER = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_NORMAL}
 */
android.content.pm.PermissionInfo.PROTECTION_NORMAL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_SYSTEM}
 */
android.content.pm.PermissionInfo.PROTECTION_FLAG_SYSTEM = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_PREINSTALLED}
 */
android.content.pm.PermissionInfo.PROTECTION_FLAG_PREINSTALLED = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_MASK_BASE}
 */
android.content.pm.PermissionInfo.PROTECTION_MASK_BASE = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_PRE23}
 */
android.content.pm.PermissionInfo.PROTECTION_FLAG_PRE23 = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_PRIVILEGED}
 */
android.content.pm.PermissionInfo.PROTECTION_FLAG_PRIVILEGED = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_SIGNATURE_OR_SYSTEM}
 */
android.content.pm.PermissionInfo.PROTECTION_SIGNATURE_OR_SYSTEM = 3;

// Static fields
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#CREATOR
Object.defineProperty(android.content.pm.PermissionInfo, 'CREATOR', {
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
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new android.content.pm.PermissionInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#nonLocalizedDescription
Object.defineProperty(android.content.pm.PermissionInfo.prototype, 'nonLocalizedDescription', {
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
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new android.content.pm.PermissionInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#flags
Object.defineProperty(android.content.pm.PermissionInfo.prototype, 'flags', {
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
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new android.content.pm.PermissionInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#descriptionRes
Object.defineProperty(android.content.pm.PermissionInfo.prototype, 'descriptionRes', {
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
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new android.content.pm.PermissionInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#protectionLevel
Object.defineProperty(android.content.pm.PermissionInfo.prototype, 'protectionLevel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'protectionLevel'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new android.content.pm.PermissionInfo(result);
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
			field: 'protectionLevel',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#group
Object.defineProperty(android.content.pm.PermissionInfo.prototype, 'group', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'group'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new android.content.pm.PermissionInfo(result);
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
			field: 'group',
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#loadDescription(android.content.pm.PackageManager)}
 **/
android.content.pm.PermissionInfo.prototype.loadDescription = function() {
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
		if (result.apiName === 'android.content.pm.PermissionInfo') {
			return new android.content.pm.PermissionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#toString()}
 **/
android.content.pm.PermissionInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.PermissionInfo') {
			return new android.content.pm.PermissionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#describeContents()}
 **/
android.content.pm.PermissionInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.PermissionInfo') {
			return new android.content.pm.PermissionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.PermissionInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.PermissionInfo') {
			return new android.content.pm.PermissionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.PermissionInfo;
