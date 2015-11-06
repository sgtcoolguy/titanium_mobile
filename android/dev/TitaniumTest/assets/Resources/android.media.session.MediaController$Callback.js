/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaController.Callback
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.media = global.android.media || {};
global.android.media.session = global.android.media.session || {};
global.android.media.session.MediaController = global.android.media.session.MediaController || {};

/**
 * @class android.media.session.MediaController.Callback
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html}
 **/
android.media.session.MediaController.Callback = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.media.session.MediaController$Callback') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.media.session.MediaController$Callback',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.media.session.MediaController.Callback.prototype = Object.create(SuperClass.prototype);
android.media.session.MediaController.Callback.prototype.constructor = android.media.session.MediaController.Callback;

android.media.session.MediaController.Callback.className = "android.media.session.MediaController$Callback";
android.media.session.MediaController.Callback.prototype.className = "android.media.session.MediaController$Callback";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onMetadataChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onMetadataChanged(android.media.MediaMetadata)}
 **/
android.media.session.MediaController.Callback.prototype.onMetadataChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMetadataChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new android.media.session.MediaController.Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onExtrasChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onExtrasChanged(android.os.Bundle)}
 **/
android.media.session.MediaController.Callback.prototype.onExtrasChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onExtrasChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new android.media.session.MediaController.Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSessionDestroyed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onSessionDestroyed()}
 **/
android.media.session.MediaController.Callback.prototype.onSessionDestroyed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSessionDestroyed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new android.media.session.MediaController.Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAudioInfoChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onAudioInfoChanged(android.media.session.MediaController$PlaybackInfo)}
 **/
android.media.session.MediaController.Callback.prototype.onAudioInfoChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAudioInfoChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new android.media.session.MediaController.Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPlaybackStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onPlaybackStateChanged(android.media.session.PlaybackState)}
 **/
android.media.session.MediaController.Callback.prototype.onPlaybackStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPlaybackStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new android.media.session.MediaController.Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSessionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onSessionEvent(java.lang.String, android.os.Bundle)}
 **/
android.media.session.MediaController.Callback.prototype.onSessionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSessionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new android.media.session.MediaController.Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onQueueChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onQueueChanged(java.util.List)}
 **/
android.media.session.MediaController.Callback.prototype.onQueueChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onQueueChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new android.media.session.MediaController.Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onQueueTitleChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onQueueTitleChanged(java.lang.CharSequence)}
 **/
android.media.session.MediaController.Callback.prototype.onQueueTitleChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onQueueTitleChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new android.media.session.MediaController.Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.media.session.MediaController.Callback;
