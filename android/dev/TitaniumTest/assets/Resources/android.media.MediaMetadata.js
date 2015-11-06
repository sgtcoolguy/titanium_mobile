/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.MediaMetadata
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.media = global.android.media || {};

/**
 * @class android.media.MediaMetadata
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html}
 **/
android.media.MediaMetadata = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.media.MediaMetadata') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.media.MediaMetadata',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.media.MediaMetadata.prototype = Object.create(SuperClass.prototype);
android.media.MediaMetadata.prototype.constructor = android.media.MediaMetadata;

android.media.MediaMetadata.className = "android.media.MediaMetadata";
android.media.MediaMetadata.prototype.className = "android.media.MediaMetadata";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISC_NUMBER}
 */
android.media.MediaMetadata.METADATA_KEY_DISC_NUMBER = "android.media.metadata.DISC_NUMBER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_COMPOSER}
 */
android.media.MediaMetadata.METADATA_KEY_COMPOSER = "android.media.metadata.COMPOSER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_TITLE}
 */
android.media.MediaMetadata.METADATA_KEY_TITLE = "android.media.metadata.TITLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_TRACK_NUMBER}
 */
android.media.MediaMetadata.METADATA_KEY_TRACK_NUMBER = "android.media.metadata.TRACK_NUMBER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_ICON_URI}
 */
android.media.MediaMetadata.METADATA_KEY_DISPLAY_ICON_URI = "android.media.metadata.DISPLAY_ICON_URI";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DATE}
 */
android.media.MediaMetadata.METADATA_KEY_DATE = "android.media.metadata.DATE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_AUTHOR}
 */
android.media.MediaMetadata.METADATA_KEY_AUTHOR = "android.media.metadata.AUTHOR";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_COMPILATION}
 */
android.media.MediaMetadata.METADATA_KEY_COMPILATION = "android.media.metadata.COMPILATION";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_DESCRIPTION}
 */
android.media.MediaMetadata.METADATA_KEY_DISPLAY_DESCRIPTION = "android.media.metadata.DISPLAY_DESCRIPTION";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_RATING}
 */
android.media.MediaMetadata.METADATA_KEY_RATING = "android.media.metadata.RATING";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_SUBTITLE}
 */
android.media.MediaMetadata.METADATA_KEY_DISPLAY_SUBTITLE = "android.media.metadata.DISPLAY_SUBTITLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DURATION}
 */
android.media.MediaMetadata.METADATA_KEY_DURATION = "android.media.metadata.DURATION";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_ICON}
 */
android.media.MediaMetadata.METADATA_KEY_DISPLAY_ICON = "android.media.metadata.DISPLAY_ICON";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ART_URI}
 */
android.media.MediaMetadata.METADATA_KEY_ART_URI = "android.media.metadata.ART_URI";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ALBUM}
 */
android.media.MediaMetadata.METADATA_KEY_ALBUM = "android.media.metadata.ALBUM";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_USER_RATING}
 */
android.media.MediaMetadata.METADATA_KEY_USER_RATING = "android.media.metadata.USER_RATING";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ALBUM_ART_URI}
 */
android.media.MediaMetadata.METADATA_KEY_ALBUM_ART_URI = "android.media.metadata.ALBUM_ART_URI";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ALBUM_ARTIST}
 */
android.media.MediaMetadata.METADATA_KEY_ALBUM_ARTIST = "android.media.metadata.ALBUM_ARTIST";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_GENRE}
 */
android.media.MediaMetadata.METADATA_KEY_GENRE = "android.media.metadata.GENRE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ALBUM_ART}
 */
android.media.MediaMetadata.METADATA_KEY_ALBUM_ART = "android.media.metadata.ALBUM_ART";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ART}
 */
android.media.MediaMetadata.METADATA_KEY_ART = "android.media.metadata.ART";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_TITLE}
 */
android.media.MediaMetadata.METADATA_KEY_DISPLAY_TITLE = "android.media.metadata.DISPLAY_TITLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_WRITER}
 */
android.media.MediaMetadata.METADATA_KEY_WRITER = "android.media.metadata.WRITER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_YEAR}
 */
android.media.MediaMetadata.METADATA_KEY_YEAR = "android.media.metadata.YEAR";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_NUM_TRACKS}
 */
android.media.MediaMetadata.METADATA_KEY_NUM_TRACKS = "android.media.metadata.NUM_TRACKS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_MEDIA_ID}
 */
android.media.MediaMetadata.METADATA_KEY_MEDIA_ID = "android.media.metadata.MEDIA_ID";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ARTIST}
 */
android.media.MediaMetadata.METADATA_KEY_ARTIST = "android.media.metadata.ARTIST";

// Static fields
// http://developer.android.com/reference/android/media/MediaMetadata.html#CREATOR
Object.defineProperty(android.media.MediaMetadata, 'CREATOR', {
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
			if (result.apiName === 'android.media.MediaMetadata') {
				return new android.media.MediaMetadata(result);
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
 * @function containsKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#containsKey(java.lang.String)}
 **/
android.media.MediaMetadata.prototype.containsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'containsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
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
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getText(java.lang.String)}
 **/
android.media.MediaMetadata.prototype.getText = function() {
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
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getString(java.lang.String)}
 **/
android.media.MediaMetadata.prototype.getString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
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
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#describeContents()}
 **/
android.media.MediaMetadata.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getDescription()}
 **/
android.media.MediaMetadata.prototype.getDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getLong(java.lang.String)}
 **/
android.media.MediaMetadata.prototype.getLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#size()}
 **/
android.media.MediaMetadata.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getBitmap(java.lang.String)}
 **/
android.media.MediaMetadata.prototype.getBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
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
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#writeToParcel(android.os.Parcel, int)}
 **/
android.media.MediaMetadata.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keySet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#keySet()}
 **/
android.media.MediaMetadata.prototype.keySet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getRating(java.lang.String)}
 **/
android.media.MediaMetadata.prototype.getRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new android.media.MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.media.MediaMetadata;
