/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ClipDescription
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.ClipDescription
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html}
 **/
android.content.ClipDescription = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.ClipDescription') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.ClipDescription',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.ClipDescription.prototype = Object.create(SuperClass.prototype);
android.content.ClipDescription.prototype.constructor = android.content.ClipDescription;

android.content.ClipDescription.className = "android.content.ClipDescription";
android.content.ClipDescription.prototype.className = "android.content.ClipDescription";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#MIMETYPE_TEXT_HTML}
 */
android.content.ClipDescription.MIMETYPE_TEXT_HTML = "text/html";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#MIMETYPE_TEXT_URILIST}
 */
android.content.ClipDescription.MIMETYPE_TEXT_URILIST = "text/uri-list";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#MIMETYPE_TEXT_PLAIN}
 */
android.content.ClipDescription.MIMETYPE_TEXT_PLAIN = "text/plain";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#MIMETYPE_TEXT_INTENT}
 */
android.content.ClipDescription.MIMETYPE_TEXT_INTENT = "text/vnd.android.intent";

// Static fields
// http://developer.android.com/reference/android/content/ClipDescription.html#CREATOR
Object.defineProperty(android.content.ClipDescription, 'CREATOR', {
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
			if (result.apiName === 'android.content.ClipDescription') {
				return new android.content.ClipDescription(result);
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
/**
 * TODO Fill out docs more...
 * @function compareMimeTypes
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#compareMimeTypes(java.lang.String, java.lang.String)}
 **/
android.content.ClipDescription.compareMimeTypes = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'compareMimeTypes',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getMimeTypeCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#getMimeTypeCount()}
 **/
android.content.ClipDescription.prototype.getMimeTypeCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMimeTypeCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasMimeType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#hasMimeType(java.lang.String)}
 **/
android.content.ClipDescription.prototype.hasMimeType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasMimeType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#getLabel()}
 **/
android.content.ClipDescription.prototype.getLabel = function() {
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
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMimeType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#getMimeType(int)}
 **/
android.content.ClipDescription.prototype.getMimeType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMimeType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#toString()}
 **/
android.content.ClipDescription.prototype.toString = function() {
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
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#describeContents()}
 **/
android.content.ClipDescription.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.ClipDescription.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function filterMimeTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#filterMimeTypes(java.lang.String)}
 **/
android.content.ClipDescription.prototype.filterMimeTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'filterMimeTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new android.content.ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.ClipDescription;
