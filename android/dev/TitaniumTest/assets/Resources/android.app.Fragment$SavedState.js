/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.Fragment.SavedState
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};
global.android.app.Fragment = global.android.app.Fragment || {};

/**
 * @class android.app.Fragment.SavedState
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/Fragment.SavedState.html}
 **/
android.app.Fragment.SavedState = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.Fragment$SavedState') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.Fragment$SavedState',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.Fragment.SavedState.prototype = Object.create(SuperClass.prototype);
android.app.Fragment.SavedState.prototype.constructor = android.app.Fragment.SavedState;

android.app.Fragment.SavedState.className = "android.app.Fragment$SavedState";
android.app.Fragment.SavedState.prototype.className = "android.app.Fragment$SavedState";

// class property
Object.defineProperty(android.app.Fragment.SavedState, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.Fragment$SavedState',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.Fragment.SavedState.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.Fragment$SavedState',
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
	whatever.prototype = Object.create(android.app.Fragment.SavedState.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/android/app/Fragment.SavedState.html#CREATOR
Object.defineProperty(android.app.Fragment.SavedState, 'CREATOR', {
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
			if (result.apiName === 'android.app.Fragment$SavedState') {
				return new android.app.Fragment.SavedState(result);
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
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.SavedState.html#describeContents()}
 **/
android.app.Fragment.SavedState.prototype.describeContents = function() {
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
		if (result.apiName === 'android.app.Fragment$SavedState') {
			return new android.app.Fragment.SavedState(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Fragment.SavedState.html#writeToParcel(android.os.Parcel, int)}
 **/
android.app.Fragment.SavedState.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.app.Fragment$SavedState') {
			return new android.app.Fragment.SavedState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.Fragment.SavedState;
