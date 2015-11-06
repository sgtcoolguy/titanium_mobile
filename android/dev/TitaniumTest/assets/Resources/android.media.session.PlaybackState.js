/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.PlaybackState
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.media = global.android.media || {};
global.android.media.session = global.android.media.session || {};

/**
 * @class android.media.session.PlaybackState
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html}
 **/
android.media.session.PlaybackState = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.media.session.PlaybackState') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.media.session.PlaybackState',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.media.session.PlaybackState.prototype = Object.create(SuperClass.prototype);
android.media.session.PlaybackState.prototype.constructor = android.media.session.PlaybackState;

android.media.session.PlaybackState.className = "android.media.session.PlaybackState";
android.media.session.PlaybackState.prototype.className = "android.media.session.PlaybackState";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_CONNECTING}
 */
android.media.session.PlaybackState.STATE_CONNECTING = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SKIP_TO_NEXT}
 */
android.media.session.PlaybackState.ACTION_SKIP_TO_NEXT = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_ERROR}
 */
android.media.session.PlaybackState.STATE_ERROR = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#PLAYBACK_POSITION_UNKNOWN}
 */
android.media.session.PlaybackState.PLAYBACK_POSITION_UNKNOWN = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_SKIPPING_TO_PREVIOUS}
 */
android.media.session.PlaybackState.STATE_SKIPPING_TO_PREVIOUS = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_PLAYING}
 */
android.media.session.PlaybackState.STATE_PLAYING = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_BUFFERING}
 */
android.media.session.PlaybackState.STATE_BUFFERING = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PAUSE}
 */
android.media.session.PlaybackState.ACTION_PAUSE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SET_RATING}
 */
android.media.session.PlaybackState.ACTION_SET_RATING = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_STOP}
 */
android.media.session.PlaybackState.ACTION_STOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SEEK_TO}
 */
android.media.session.PlaybackState.ACTION_SEEK_TO = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY_FROM_SEARCH}
 */
android.media.session.PlaybackState.ACTION_PLAY_FROM_SEARCH = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_NONE}
 */
android.media.session.PlaybackState.STATE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_FAST_FORWARDING}
 */
android.media.session.PlaybackState.STATE_FAST_FORWARDING = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_PAUSED}
 */
android.media.session.PlaybackState.STATE_PAUSED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY_PAUSE}
 */
android.media.session.PlaybackState.ACTION_PLAY_PAUSE = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SKIP_TO_PREVIOUS}
 */
android.media.session.PlaybackState.ACTION_SKIP_TO_PREVIOUS = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY}
 */
android.media.session.PlaybackState.ACTION_PLAY = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_SKIPPING_TO_QUEUE_ITEM}
 */
android.media.session.PlaybackState.STATE_SKIPPING_TO_QUEUE_ITEM = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_REWINDING}
 */
android.media.session.PlaybackState.STATE_REWINDING = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_REWIND}
 */
android.media.session.PlaybackState.ACTION_REWIND = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_STOPPED}
 */
android.media.session.PlaybackState.STATE_STOPPED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SKIP_TO_QUEUE_ITEM}
 */
android.media.session.PlaybackState.ACTION_SKIP_TO_QUEUE_ITEM = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY_FROM_URI}
 */
android.media.session.PlaybackState.ACTION_PLAY_FROM_URI = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY_FROM_MEDIA_ID}
 */
android.media.session.PlaybackState.ACTION_PLAY_FROM_MEDIA_ID = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_FAST_FORWARD}
 */
android.media.session.PlaybackState.ACTION_FAST_FORWARD = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_SKIPPING_TO_NEXT}
 */
android.media.session.PlaybackState.STATE_SKIPPING_TO_NEXT = 10;

// Static fields
// http://developer.android.com/reference/android/media/session/PlaybackState.html#CREATOR
Object.defineProperty(android.media.session.PlaybackState, 'CREATOR', {
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
			if (result.apiName === 'android.media.session.PlaybackState') {
				return new android.media.session.PlaybackState(result);
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
 * @function getLastPositionUpdateTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getLastPositionUpdateTime()}
 **/
android.media.session.PlaybackState.prototype.getLastPositionUpdateTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastPositionUpdateTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBufferedPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getBufferedPosition()}
 **/
android.media.session.PlaybackState.prototype.getBufferedPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBufferedPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getActions()}
 **/
android.media.session.PlaybackState.prototype.getActions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActiveQueueItemId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getActiveQueueItemId()}
 **/
android.media.session.PlaybackState.prototype.getActiveQueueItemId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActiveQueueItemId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#describeContents()}
 **/
android.media.session.PlaybackState.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCustomActions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getCustomActions()}
 **/
android.media.session.PlaybackState.prototype.getCustomActions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCustomActions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getState()}
 **/
android.media.session.PlaybackState.prototype.getState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getPosition()}
 **/
android.media.session.PlaybackState.prototype.getPosition = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#toString()}
 **/
android.media.session.PlaybackState.prototype.toString = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPlaybackSpeed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getPlaybackSpeed()}
 **/
android.media.session.PlaybackState.prototype.getPlaybackSpeed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPlaybackSpeed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getExtras()}
 **/
android.media.session.PlaybackState.prototype.getExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#writeToParcel(android.os.Parcel, int)}
 **/
android.media.session.PlaybackState.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getErrorMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getErrorMessage()}
 **/
android.media.session.PlaybackState.prototype.getErrorMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getErrorMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new android.media.session.PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.media.session.PlaybackState;
