/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ResolveInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.pm = global.android.content.pm || {};

/**
 * @class android.content.pm.ResolveInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html}
 **/
android.content.pm.ResolveInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.pm.ResolveInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.pm.ResolveInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.pm.ResolveInfo.prototype = Object.create(SuperClass.prototype);
android.content.pm.ResolveInfo.prototype.constructor = android.content.pm.ResolveInfo;

android.content.pm.ResolveInfo.className = "android.content.pm.ResolveInfo";
android.content.pm.ResolveInfo.prototype.className = "android.content.pm.ResolveInfo";

// Constants

// Static fields
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#CREATOR
Object.defineProperty(android.content.pm.ResolveInfo, 'CREATOR', {
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
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#resolvePackageName
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'resolvePackageName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'resolvePackageName'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'resolvePackageName',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#icon
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'icon', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'icon'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'icon',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#match
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'match', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'match'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'match',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#serviceInfo
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'serviceInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'serviceInfo'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'serviceInfo',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#priority
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'priority', {
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
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#activityInfo
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'activityInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'activityInfo'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'activityInfo',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#filter
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'filter', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'filter'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'filter',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#isDefault
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'isDefault', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'isDefault'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'isDefault',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#preferredOrder
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'preferredOrder', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'preferredOrder'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'preferredOrder',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#specificIndex
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'specificIndex', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'specificIndex'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'specificIndex',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#labelRes
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'labelRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'labelRes'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'labelRes',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#nonLocalizedLabel
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'nonLocalizedLabel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'nonLocalizedLabel'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'nonLocalizedLabel',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#providerInfo
Object.defineProperty(android.content.pm.ResolveInfo.prototype, 'providerInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'providerInfo'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new android.content.pm.ResolveInfo(result);
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
			field: 'providerInfo',
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#loadLabel(android.content.pm.PackageManager)}
 **/
android.content.pm.ResolveInfo.prototype.loadLabel = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new android.content.pm.ResolveInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#loadIcon(android.content.pm.PackageManager)}
 **/
android.content.pm.ResolveInfo.prototype.loadIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new android.content.pm.ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#toString()}
 **/
android.content.pm.ResolveInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new android.content.pm.ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#getIconResource()}
 **/
android.content.pm.ResolveInfo.prototype.getIconResource = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new android.content.pm.ResolveInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
android.content.pm.ResolveInfo.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new android.content.pm.ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#describeContents()}
 **/
android.content.pm.ResolveInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new android.content.pm.ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.pm.ResolveInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new android.content.pm.ResolveInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.pm.ResolveInfo;
