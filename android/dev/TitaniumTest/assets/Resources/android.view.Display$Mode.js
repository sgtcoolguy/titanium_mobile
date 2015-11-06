/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.Display.Mode
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.Display = global.android.view.Display || {};

/**
 * @class android.view.Display.Mode
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html}
 **/
android.view.Display.Mode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.Display$Mode') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.Display$Mode',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.Display.Mode.prototype = Object.create(SuperClass.prototype);
android.view.Display.Mode.prototype.constructor = android.view.Display.Mode;

android.view.Display.Mode.className = "android.view.Display$Mode";
android.view.Display.Mode.prototype.className = "android.view.Display$Mode";

// Constants

// Static fields
// http://developer.android.com/reference/android/view/Display.Mode.html#CREATOR
Object.defineProperty(android.view.Display.Mode, 'CREATOR', {
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
			if (result.apiName === 'android.view.Display$Mode') {
				return new android.view.Display.Mode(result);
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
 * @function getPhysicalHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#getPhysicalHeight()}
 **/
android.view.Display.Mode.prototype.getPhysicalHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPhysicalHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRefreshRate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#getRefreshRate()}
 **/
android.view.Display.Mode.prototype.getRefreshRate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRefreshRate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPhysicalWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#getPhysicalWidth()}
 **/
android.view.Display.Mode.prototype.getPhysicalWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPhysicalWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getModeId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#getModeId()}
 **/
android.view.Display.Mode.prototype.getModeId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getModeId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#hashCode()}
 **/
android.view.Display.Mode.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#equals(java.lang.Object)}
 **/
android.view.Display.Mode.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#toString()}
 **/
android.view.Display.Mode.prototype.toString = function() {
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
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#describeContents()}
 **/
android.view.Display.Mode.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.Mode.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.Display.Mode.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.Display$Mode') {
			return new android.view.Display.Mode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.Display.Mode;
