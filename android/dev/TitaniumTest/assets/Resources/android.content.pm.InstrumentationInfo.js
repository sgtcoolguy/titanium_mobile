/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.InstrumentationInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};

/**
 * @class android.content.pm.InstrumentationInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html}
 **/
android.content.pm.InstrumentationInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.InstrumentationInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.InstrumentationInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
android.content.pm.InstrumentationInfo.prototype = Object.create(SuperClass.prototype);
android.content.pm.InstrumentationInfo.prototype.constructor = android.content.pm.InstrumentationInfo;

android.content.pm.InstrumentationInfo.className = "android.content.pm.InstrumentationInfo";
android.content.pm.InstrumentationInfo.prototype.className = "android.content.pm.InstrumentationInfo";

// Constants

// Static fields
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#CREATOR
Object.defineProperty(android.content.pm.InstrumentationInfo, 'CREATOR', {
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
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#sourceDir
Object.defineProperty(android.content.pm.InstrumentationInfo.prototype, 'sourceDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'sourceDir'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
			field: 'sourceDir',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#splitPublicSourceDirs
Object.defineProperty(android.content.pm.InstrumentationInfo.prototype, 'splitPublicSourceDirs', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'splitPublicSourceDirs'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
			field: 'splitPublicSourceDirs',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#splitSourceDirs
Object.defineProperty(android.content.pm.InstrumentationInfo.prototype, 'splitSourceDirs', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'splitSourceDirs'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
			field: 'splitSourceDirs',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#dataDir
Object.defineProperty(android.content.pm.InstrumentationInfo.prototype, 'dataDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'dataDir'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
			field: 'dataDir',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#publicSourceDir
Object.defineProperty(android.content.pm.InstrumentationInfo.prototype, 'publicSourceDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'publicSourceDir'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
			field: 'publicSourceDir',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#handleProfiling
Object.defineProperty(android.content.pm.InstrumentationInfo.prototype, 'handleProfiling', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'handleProfiling'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
			field: 'handleProfiling',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#functionalTest
Object.defineProperty(android.content.pm.InstrumentationInfo.prototype, 'functionalTest', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'functionalTest'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
			field: 'functionalTest',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#targetPackage
Object.defineProperty(android.content.pm.InstrumentationInfo.prototype, 'targetPackage', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'targetPackage'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new android.content.pm.InstrumentationInfo(result);
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
			field: 'targetPackage',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#toString()}
 **/
android.content.pm.InstrumentationInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.InstrumentationInfo') {
			return new android.content.pm.InstrumentationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#describeContents()}
 **/
android.content.pm.InstrumentationInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.InstrumentationInfo') {
			return new android.content.pm.InstrumentationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.InstrumentationInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.InstrumentationInfo') {
			return new android.content.pm.InstrumentationInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.InstrumentationInfo;
