/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ComponentInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};

/**
 * @class android.content.pm.ComponentInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html}
 **/
android.content.pm.ComponentInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.ComponentInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.ComponentInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
android.content.pm.ComponentInfo.prototype = Object.create(SuperClass.prototype);
android.content.pm.ComponentInfo.prototype.constructor = android.content.pm.ComponentInfo;

android.content.pm.ComponentInfo.className = "android.content.pm.ComponentInfo";
android.content.pm.ComponentInfo.prototype.className = "android.content.pm.ComponentInfo";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#exported
Object.defineProperty(android.content.pm.ComponentInfo.prototype, 'exported', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'exported'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new android.content.pm.ComponentInfo(result);
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
			field: 'exported',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#processName
Object.defineProperty(android.content.pm.ComponentInfo.prototype, 'processName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'processName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new android.content.pm.ComponentInfo(result);
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
			field: 'processName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#applicationInfo
Object.defineProperty(android.content.pm.ComponentInfo.prototype, 'applicationInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'applicationInfo'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new android.content.pm.ComponentInfo(result);
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
			field: 'applicationInfo',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#enabled
Object.defineProperty(android.content.pm.ComponentInfo.prototype, 'enabled', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'enabled'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new android.content.pm.ComponentInfo(result);
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
			field: 'enabled',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#descriptionRes
Object.defineProperty(android.content.pm.ComponentInfo.prototype, 'descriptionRes', {
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
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new android.content.pm.ComponentInfo(result);
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
 * @function loadLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#loadLabel(android.content.pm.PackageManager)}
 **/
android.content.pm.ComponentInfo.prototype.loadLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new android.content.pm.ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLogoResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#getLogoResource()}
 **/
android.content.pm.ComponentInfo.prototype.getLogoResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLogoResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new android.content.pm.ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dumpBack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#dumpBack(android.util.Printer, java.lang.String)}
 **/
android.content.pm.ComponentInfo.prototype.dumpBack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dumpBack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new android.content.pm.ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#isEnabled()}
 **/
android.content.pm.ComponentInfo.prototype.isEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new android.content.pm.ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBannerResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#getBannerResource()}
 **/
android.content.pm.ComponentInfo.prototype.getBannerResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBannerResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new android.content.pm.ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIconResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#getIconResource()}
 **/
android.content.pm.ComponentInfo.prototype.getIconResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIconResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new android.content.pm.ComponentInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.ComponentInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new android.content.pm.ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dumpFront
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#dumpFront(android.util.Printer, java.lang.String)}
 **/
android.content.pm.ComponentInfo.prototype.dumpFront = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dumpFront',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new android.content.pm.ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.ComponentInfo;
