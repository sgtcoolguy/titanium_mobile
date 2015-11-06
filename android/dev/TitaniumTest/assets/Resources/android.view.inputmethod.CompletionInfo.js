/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod.CompletionInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.inputmethod = global.android.view.inputmethod || {};

/**
 * @class android.view.inputmethod.CompletionInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html}
 **/
android.view.inputmethod.CompletionInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.inputmethod.CompletionInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.inputmethod.CompletionInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.inputmethod.CompletionInfo.prototype = Object.create(SuperClass.prototype);
android.view.inputmethod.CompletionInfo.prototype.constructor = android.view.inputmethod.CompletionInfo;

android.view.inputmethod.CompletionInfo.className = "android.view.inputmethod.CompletionInfo";
android.view.inputmethod.CompletionInfo.prototype.className = "android.view.inputmethod.CompletionInfo";

// Constants

// Static fields
// http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html#CREATOR
Object.defineProperty(android.view.inputmethod.CompletionInfo, 'CREATOR', {
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
			if (result.apiName === 'android.view.inputmethod.CompletionInfo') {
				return new android.view.inputmethod.CompletionInfo(result);
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
 * @function getPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html#getPosition()}
 **/
android.view.inputmethod.CompletionInfo.prototype.getPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CompletionInfo') {
			return new android.view.inputmethod.CompletionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html#getLabel()}
 **/
android.view.inputmethod.CompletionInfo.prototype.getLabel = function() {
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
		if (result.apiName === 'android.view.inputmethod.CompletionInfo') {
			return new android.view.inputmethod.CompletionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html#getText()}
 **/
android.view.inputmethod.CompletionInfo.prototype.getText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CompletionInfo') {
			return new android.view.inputmethod.CompletionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html#getId()}
 **/
android.view.inputmethod.CompletionInfo.prototype.getId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CompletionInfo') {
			return new android.view.inputmethod.CompletionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html#toString()}
 **/
android.view.inputmethod.CompletionInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.view.inputmethod.CompletionInfo') {
			return new android.view.inputmethod.CompletionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.inputmethod.CompletionInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.inputmethod.CompletionInfo') {
			return new android.view.inputmethod.CompletionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CompletionInfo.html#describeContents()}
 **/
android.view.inputmethod.CompletionInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.inputmethod.CompletionInfo') {
			return new android.view.inputmethod.CompletionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.inputmethod.CompletionInfo;
