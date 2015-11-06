/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaSession.Token
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.media = global.android.media || {};
global.android.media.session = global.android.media.session || {};
global.android.media.session.MediaSession = global.android.media.session.MediaSession || {};

/**
 * @class android.media.session.MediaSession.Token
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html}
 **/
android.media.session.MediaSession.Token = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.media.session.MediaSession$Token') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.media.session.MediaSession$Token',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.media.session.MediaSession.Token.prototype = Object.create(SuperClass.prototype);
android.media.session.MediaSession.Token.prototype.constructor = android.media.session.MediaSession.Token;

android.media.session.MediaSession.Token.className = "android.media.session.MediaSession$Token";
android.media.session.MediaSession.Token.prototype.className = "android.media.session.MediaSession$Token";

// Constants

// Static fields
// http://developer.android.com/reference/android/media/session/MediaSession.Token.html#CREATOR
Object.defineProperty(android.media.session.MediaSession.Token, 'CREATOR', {
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
			if (result.apiName === 'android.media.session.MediaSession$Token') {
				return new android.media.session.MediaSession.Token(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html#hashCode()}
 **/
android.media.session.MediaSession.Token.prototype.hashCode = function() {
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
		if (result.apiName === 'android.media.session.MediaSession$Token') {
			return new android.media.session.MediaSession.Token(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html#equals(java.lang.Object)}
 **/
android.media.session.MediaSession.Token.prototype.equals = function() {
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
		if (result.apiName === 'android.media.session.MediaSession$Token') {
			return new android.media.session.MediaSession.Token(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html#describeContents()}
 **/
android.media.session.MediaSession.Token.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.session.MediaSession$Token') {
			return new android.media.session.MediaSession.Token(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html#writeToParcel(android.os.Parcel, int)}
 **/
android.media.session.MediaSession.Token.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.session.MediaSession$Token') {
			return new android.media.session.MediaSession.Token(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.media.session.MediaSession.Token;
