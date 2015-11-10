/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod.ExtractedTextRequest
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.inputmethod = global.android.view.inputmethod || {};

/**
 * @class android.view.inputmethod.ExtractedTextRequest
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html}
 **/
android.view.inputmethod.ExtractedTextRequest = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.inputmethod.ExtractedTextRequest') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.inputmethod.ExtractedTextRequest',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.inputmethod.ExtractedTextRequest.prototype = Object.create(SuperClass.prototype);
android.view.inputmethod.ExtractedTextRequest.prototype.constructor = android.view.inputmethod.ExtractedTextRequest;

android.view.inputmethod.ExtractedTextRequest.className = "android.view.inputmethod.ExtractedTextRequest";
android.view.inputmethod.ExtractedTextRequest.prototype.className = "android.view.inputmethod.ExtractedTextRequest";

// class property
Object.defineProperty(android.view.inputmethod.ExtractedTextRequest, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.inputmethod.ExtractedTextRequest',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.inputmethod.ExtractedTextRequest.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.inputmethod.ExtractedTextRequest',
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
	whatever.prototype = Object.create(android.view.inputmethod.ExtractedTextRequest.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#CREATOR
Object.defineProperty(android.view.inputmethod.ExtractedTextRequest, 'CREATOR', {
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
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new android.view.inputmethod.ExtractedTextRequest(result);
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
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#hintMaxLines
Object.defineProperty(android.view.inputmethod.ExtractedTextRequest.prototype, 'hintMaxLines', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'hintMaxLines'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new android.view.inputmethod.ExtractedTextRequest(result);
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
			field: 'hintMaxLines',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#hintMaxChars
Object.defineProperty(android.view.inputmethod.ExtractedTextRequest.prototype, 'hintMaxChars', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'hintMaxChars'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new android.view.inputmethod.ExtractedTextRequest(result);
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
			field: 'hintMaxChars',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#flags
Object.defineProperty(android.view.inputmethod.ExtractedTextRequest.prototype, 'flags', {
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
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new android.view.inputmethod.ExtractedTextRequest(result);
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
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#token
Object.defineProperty(android.view.inputmethod.ExtractedTextRequest.prototype, 'token', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'token'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new android.view.inputmethod.ExtractedTextRequest(result);
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
			field: 'token',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.inputmethod.ExtractedTextRequest.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
			return new android.view.inputmethod.ExtractedTextRequest(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#describeContents()}
 **/
android.view.inputmethod.ExtractedTextRequest.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
			return new android.view.inputmethod.ExtractedTextRequest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.inputmethod.ExtractedTextRequest;
