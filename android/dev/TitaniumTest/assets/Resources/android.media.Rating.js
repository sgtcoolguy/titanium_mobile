/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.Rating
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.media = global.android.media || {};

/**
 * @class android.media.Rating
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/Rating.html}
 **/
android.media.Rating = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.media.Rating') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.media.Rating',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.media.Rating.prototype = Object.create(SuperClass.prototype);
android.media.Rating.prototype.constructor = android.media.Rating;

android.media.Rating.className = "android.media.Rating";
android.media.Rating.prototype.className = "android.media.Rating";

// class property
Object.defineProperty(android.media.Rating, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.media.Rating',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_4_STARS}
 */
android.media.Rating.RATING_4_STARS = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_NONE}
 */
android.media.Rating.RATING_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_HEART}
 */
android.media.Rating.RATING_HEART = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_PERCENTAGE}
 */
android.media.Rating.RATING_PERCENTAGE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_THUMB_UP_DOWN}
 */
android.media.Rating.RATING_THUMB_UP_DOWN = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_3_STARS}
 */
android.media.Rating.RATING_3_STARS = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_5_STARS}
 */
android.media.Rating.RATING_5_STARS = 5;

// Static fields
// http://developer.android.com/reference/android/media/Rating.html#CREATOR
Object.defineProperty(android.media.Rating, 'CREATOR', {
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
			if (result.apiName === 'android.media.Rating') {
				return new android.media.Rating(result);
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
 * @function newThumbRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newThumbRating(boolean)}
 **/
android.media.Rating.newThumbRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newThumbRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newUnratedRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newUnratedRating(int)}
 **/
android.media.Rating.newUnratedRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newUnratedRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newStarRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newStarRating(int, float)}
 **/
android.media.Rating.newStarRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newStarRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newHeartRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newHeartRating(boolean)}
 **/
android.media.Rating.newHeartRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newHeartRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newPercentageRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newPercentageRating(float)}
 **/
android.media.Rating.newPercentageRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newPercentageRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
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
 * @function isRated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#isRated()}
 **/
android.media.Rating.prototype.isRated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRatingStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#getRatingStyle()}
 **/
android.media.Rating.prototype.getRatingStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRatingStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
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
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#describeContents()}
 **/
android.media.Rating.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasHeart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#hasHeart()}
 **/
android.media.Rating.prototype.hasHeart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasHeart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStarRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#getStarRating()}
 **/
android.media.Rating.prototype.getStarRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStarRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isThumbUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#isThumbUp()}
 **/
android.media.Rating.prototype.isThumbUp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isThumbUp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPercentRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#getPercentRating()}
 **/
android.media.Rating.prototype.getPercentRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPercentRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
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
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#toString()}
 **/
android.media.Rating.prototype.toString = function() {
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
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
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
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#writeToParcel(android.os.Parcel, int)}
 **/
android.media.Rating.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.Rating') {
			return new android.media.Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.media.Rating;
