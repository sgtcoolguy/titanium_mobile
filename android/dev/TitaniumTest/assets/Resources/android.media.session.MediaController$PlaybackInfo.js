/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaController.PlaybackInfo
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.media = global.android.media || {};
global.android.media.session = global.android.media.session || {};
global.android.media.session.MediaController = global.android.media.session.MediaController || {};

/**
 * @class android.media.session.MediaController.PlaybackInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html}
 **/
android.media.session.MediaController.PlaybackInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.media.session.MediaController$PlaybackInfo') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.media.session.MediaController$PlaybackInfo',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.media.session.MediaController.PlaybackInfo.prototype = Object.create(SuperClass.prototype);
android.media.session.MediaController.PlaybackInfo.prototype.constructor = android.media.session.MediaController.PlaybackInfo;

android.media.session.MediaController.PlaybackInfo.className = "android.media.session.MediaController$PlaybackInfo";
android.media.session.MediaController.PlaybackInfo.prototype.className = "android.media.session.MediaController$PlaybackInfo";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#PLAYBACK_TYPE_LOCAL}
 */
android.media.session.MediaController.PlaybackInfo.PLAYBACK_TYPE_LOCAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#PLAYBACK_TYPE_REMOTE}
 */
android.media.session.MediaController.PlaybackInfo.PLAYBACK_TYPE_REMOTE = 2;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getAudioAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getAudioAttributes()}
 **/
android.media.session.MediaController.PlaybackInfo.prototype.getAudioAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAudioAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new android.media.session.MediaController.PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPlaybackType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getPlaybackType()}
 **/
android.media.session.MediaController.PlaybackInfo.prototype.getPlaybackType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPlaybackType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new android.media.session.MediaController.PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxVolume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getMaxVolume()}
 **/
android.media.session.MediaController.PlaybackInfo.prototype.getMaxVolume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxVolume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new android.media.session.MediaController.PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentVolume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getCurrentVolume()}
 **/
android.media.session.MediaController.PlaybackInfo.prototype.getCurrentVolume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentVolume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new android.media.session.MediaController.PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVolumeControl
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getVolumeControl()}
 **/
android.media.session.MediaController.PlaybackInfo.prototype.getVolumeControl = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVolumeControl',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new android.media.session.MediaController.PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.media.session.MediaController.PlaybackInfo;
