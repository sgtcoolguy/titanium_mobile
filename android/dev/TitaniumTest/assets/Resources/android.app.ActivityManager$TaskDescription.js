/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.ActivityManager.TaskDescription
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};
global.android.app.ActivityManager = global.android.app.ActivityManager || {};

/**
 * @class android.app.ActivityManager.TaskDescription
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html}
 **/
android.app.ActivityManager.TaskDescription = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.ActivityManager$TaskDescription') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.ActivityManager$TaskDescription',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.ActivityManager.TaskDescription.prototype = Object.create(SuperClass.prototype);
android.app.ActivityManager.TaskDescription.prototype.constructor = android.app.ActivityManager.TaskDescription;

android.app.ActivityManager.TaskDescription.className = "android.app.ActivityManager$TaskDescription";
android.app.ActivityManager.TaskDescription.prototype.className = "android.app.ActivityManager$TaskDescription";

// class property
Object.defineProperty(android.app.ActivityManager.TaskDescription, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.ActivityManager$TaskDescription',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.ActivityManager.TaskDescription.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.ActivityManager$TaskDescription',
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
	whatever.prototype = Object.create(android.app.ActivityManager.TaskDescription.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html#CREATOR
Object.defineProperty(android.app.ActivityManager.TaskDescription, 'CREATOR', {
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
			if (result.apiName === 'android.app.ActivityManager$TaskDescription') {
				return new android.app.ActivityManager.TaskDescription(result);
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
 * @function getLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html#getLabel()}
 **/
android.app.ActivityManager.TaskDescription.prototype.getLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager$TaskDescription') {
			return new android.app.ActivityManager.TaskDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html#toString()}
 **/
android.app.ActivityManager.TaskDescription.prototype.toString = function() {
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
		if (result.apiName === 'android.app.ActivityManager$TaskDescription') {
			return new android.app.ActivityManager.TaskDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrimaryColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html#getPrimaryColor()}
 **/
android.app.ActivityManager.TaskDescription.prototype.getPrimaryColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPrimaryColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager$TaskDescription') {
			return new android.app.ActivityManager.TaskDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFromParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html#readFromParcel(android.os.Parcel)}
 **/
android.app.ActivityManager.TaskDescription.prototype.readFromParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFromParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager$TaskDescription') {
			return new android.app.ActivityManager.TaskDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html#describeContents()}
 **/
android.app.ActivityManager.TaskDescription.prototype.describeContents = function() {
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
		if (result.apiName === 'android.app.ActivityManager$TaskDescription') {
			return new android.app.ActivityManager.TaskDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html#writeToParcel(android.os.Parcel, int)}
 **/
android.app.ActivityManager.TaskDescription.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.app.ActivityManager$TaskDescription') {
			return new android.app.ActivityManager.TaskDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.TaskDescription.html#getIcon()}
 **/
android.app.ActivityManager.TaskDescription.prototype.getIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager$TaskDescription') {
			return new android.app.ActivityManager.TaskDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.ActivityManager.TaskDescription;
