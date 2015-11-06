/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaController.TransportControls
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.media = global.android.media || {};
global.android.media.session = global.android.media.session || {};
global.android.media.session.MediaController = global.android.media.session.MediaController || {};

/**
 * @class android.media.session.MediaController.TransportControls
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html}
 **/
android.media.session.MediaController.TransportControls = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.media.session.MediaController$TransportControls') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.media.session.MediaController$TransportControls',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.media.session.MediaController.TransportControls.prototype = Object.create(SuperClass.prototype);
android.media.session.MediaController.TransportControls.prototype.constructor = android.media.session.MediaController.TransportControls;

android.media.session.MediaController.TransportControls.className = "android.media.session.MediaController$TransportControls";
android.media.session.MediaController.TransportControls.prototype.className = "android.media.session.MediaController$TransportControls";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#this$0
Object.defineProperty(android.media.session.MediaController.TransportControls.prototype, 'this$0', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'this$0'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.media.session.MediaController$TransportControls') {
				return new android.media.session.MediaController.TransportControls(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function play
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#play()}
 **/
android.media.session.MediaController.TransportControls.prototype.play = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'play',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function playFromMediaId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#playFromMediaId(java.lang.String, android.os.Bundle)}
 **/
android.media.session.MediaController.TransportControls.prototype.playFromMediaId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'playFromMediaId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function playFromSearch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#playFromSearch(java.lang.String, android.os.Bundle)}
 **/
android.media.session.MediaController.TransportControls.prototype.playFromSearch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'playFromSearch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skipToNext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#skipToNext()}
 **/
android.media.session.MediaController.TransportControls.prototype.skipToNext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skipToNext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#pause()}
 **/
android.media.session.MediaController.TransportControls.prototype.pause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function seekTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#seekTo(long)}
 **/
android.media.session.MediaController.TransportControls.prototype.seekTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'seekTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skipToQueueItem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#skipToQueueItem(long)}
 **/
android.media.session.MediaController.TransportControls.prototype.skipToQueueItem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skipToQueueItem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skipToPrevious
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#skipToPrevious()}
 **/
android.media.session.MediaController.TransportControls.prototype.skipToPrevious = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skipToPrevious',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#stop()}
 **/
android.media.session.MediaController.TransportControls.prototype.stop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rewind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#rewind()}
 **/
android.media.session.MediaController.TransportControls.prototype.rewind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rewind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendCustomAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#sendCustomAction(android.media.session.PlaybackState$CustomAction, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#sendCustomAction(java.lang.String, android.os.Bundle)}
 **/
android.media.session.MediaController.TransportControls.prototype.sendCustomAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendCustomAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fastForward
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#fastForward()}
 **/
android.media.session.MediaController.TransportControls.prototype.fastForward = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fastForward',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#setRating(android.media.Rating)}
 **/
android.media.session.MediaController.TransportControls.prototype.setRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function playFromUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#playFromUri(android.net.Uri, android.os.Bundle)}
 **/
android.media.session.MediaController.TransportControls.prototype.playFromUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'playFromUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new android.media.session.MediaController.TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.media.session.MediaController.TransportControls;
