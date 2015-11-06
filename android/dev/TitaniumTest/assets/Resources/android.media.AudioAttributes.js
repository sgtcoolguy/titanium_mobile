/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.AudioAttributes
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.media = global.android.media || {};

/**
 * @class android.media.AudioAttributes
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html}
 **/
android.media.AudioAttributes = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.media.AudioAttributes') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.media.AudioAttributes',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.media.AudioAttributes.prototype = Object.create(SuperClass.prototype);
android.media.AudioAttributes.prototype.constructor = android.media.AudioAttributes;

android.media.AudioAttributes.className = "android.media.AudioAttributes";
android.media.AudioAttributes.prototype.className = "android.media.AudioAttributes";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_COMMUNICATION_REQUEST}
 */
android.media.AudioAttributes.USAGE_NOTIFICATION_COMMUNICATION_REQUEST = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_GAME}
 */
android.media.AudioAttributes.USAGE_GAME = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_MOVIE}
 */
android.media.AudioAttributes.CONTENT_TYPE_MOVIE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_EVENT}
 */
android.media.AudioAttributes.USAGE_NOTIFICATION_EVENT = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#FLAG_HW_AV_SYNC}
 */
android.media.AudioAttributes.FLAG_HW_AV_SYNC = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_ALARM}
 */
android.media.AudioAttributes.USAGE_ALARM = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_UNKNOWN}
 */
android.media.AudioAttributes.CONTENT_TYPE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_COMMUNICATION_DELAYED}
 */
android.media.AudioAttributes.USAGE_NOTIFICATION_COMMUNICATION_DELAYED = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_COMMUNICATION_INSTANT}
 */
android.media.AudioAttributes.USAGE_NOTIFICATION_COMMUNICATION_INSTANT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION}
 */
android.media.AudioAttributes.USAGE_NOTIFICATION = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_RINGTONE}
 */
android.media.AudioAttributes.USAGE_NOTIFICATION_RINGTONE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_UNKNOWN}
 */
android.media.AudioAttributes.USAGE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_VOICE_COMMUNICATION}
 */
android.media.AudioAttributes.USAGE_VOICE_COMMUNICATION = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_MUSIC}
 */
android.media.AudioAttributes.CONTENT_TYPE_MUSIC = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#FLAG_AUDIBILITY_ENFORCED}
 */
android.media.AudioAttributes.FLAG_AUDIBILITY_ENFORCED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_ASSISTANCE_ACCESSIBILITY}
 */
android.media.AudioAttributes.USAGE_ASSISTANCE_ACCESSIBILITY = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_ASSISTANCE_NAVIGATION_GUIDANCE}
 */
android.media.AudioAttributes.USAGE_ASSISTANCE_NAVIGATION_GUIDANCE = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_ASSISTANCE_SONIFICATION}
 */
android.media.AudioAttributes.USAGE_ASSISTANCE_SONIFICATION = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_SPEECH}
 */
android.media.AudioAttributes.CONTENT_TYPE_SPEECH = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_MEDIA}
 */
android.media.AudioAttributes.USAGE_MEDIA = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_VOICE_COMMUNICATION_SIGNALLING}
 */
android.media.AudioAttributes.USAGE_VOICE_COMMUNICATION_SIGNALLING = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_SONIFICATION}
 */
android.media.AudioAttributes.CONTENT_TYPE_SONIFICATION = 4;

// Static fields
// http://developer.android.com/reference/android/media/AudioAttributes.html#CREATOR
Object.defineProperty(android.media.AudioAttributes, 'CREATOR', {
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
			if (result.apiName === 'android.media.AudioAttributes') {
				return new android.media.AudioAttributes(result);
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
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#hashCode()}
 **/
android.media.AudioAttributes.prototype.hashCode = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new android.media.AudioAttributes(result);
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
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#equals(java.lang.Object)}
 **/
android.media.AudioAttributes.prototype.equals = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new android.media.AudioAttributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#getContentType()}
 **/
android.media.AudioAttributes.prototype.getContentType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.AudioAttributes') {
			return new android.media.AudioAttributes(result);
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
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#toString()}
 **/
android.media.AudioAttributes.prototype.toString = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new android.media.AudioAttributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#getFlags()}
 **/
android.media.AudioAttributes.prototype.getFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.AudioAttributes') {
			return new android.media.AudioAttributes(result);
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
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#describeContents()}
 **/
android.media.AudioAttributes.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new android.media.AudioAttributes(result);
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
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#writeToParcel(android.os.Parcel, int)}
 **/
android.media.AudioAttributes.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new android.media.AudioAttributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUsage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#getUsage()}
 **/
android.media.AudioAttributes.prototype.getUsage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUsage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.AudioAttributes') {
			return new android.media.AudioAttributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.media.AudioAttributes;
