/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.PendingIntent
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.PendingIntent
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html}
 **/
android.app.PendingIntent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.PendingIntent') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.PendingIntent',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.PendingIntent.prototype = Object.create(SuperClass.prototype);
android.app.PendingIntent.prototype.constructor = android.app.PendingIntent;

android.app.PendingIntent.className = "android.app.PendingIntent";
android.app.PendingIntent.prototype.className = "android.app.PendingIntent";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_CANCEL_CURRENT}
 */
android.app.PendingIntent.FLAG_CANCEL_CURRENT = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_IMMUTABLE}
 */
android.app.PendingIntent.FLAG_IMMUTABLE = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_NO_CREATE}
 */
android.app.PendingIntent.FLAG_NO_CREATE = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_UPDATE_CURRENT}
 */
android.app.PendingIntent.FLAG_UPDATE_CURRENT = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_ONE_SHOT}
 */
android.app.PendingIntent.FLAG_ONE_SHOT = 1073741824;

// Static fields
// http://developer.android.com/reference/android/app/PendingIntent.html#CREATOR
Object.defineProperty(android.app.PendingIntent, 'CREATOR', {
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
			if (result.apiName === 'android.app.PendingIntent') {
				return new android.app.PendingIntent(result);
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
 * @function writePendingIntentOrNullToParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#writePendingIntentOrNullToParcel(android.app.PendingIntent, android.os.Parcel)}
 **/
android.app.PendingIntent.writePendingIntentOrNullToParcel = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'writePendingIntentOrNullToParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivity
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivity(android.content.Context, int, android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivity(android.content.Context, int, android.content.Intent, int, android.os.Bundle)}
 **/
android.app.PendingIntent.getActivity = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getActivity',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBroadcast
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getBroadcast(android.content.Context, int, android.content.Intent, int)}
 **/
android.app.PendingIntent.getBroadcast = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getBroadcast',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getService
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getService(android.content.Context, int, android.content.Intent, int)}
 **/
android.app.PendingIntent.getService = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getService',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readPendingIntentOrNullFromParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#readPendingIntentOrNullFromParcel(android.os.Parcel)}
 **/
android.app.PendingIntent.readPendingIntentOrNullFromParcel = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'readPendingIntentOrNullFromParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivities
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivities(android.content.Context, int, android.content.Intent[], int)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivities(android.content.Context, int, android.content.Intent[], int, android.os.Bundle)}
 **/
android.app.PendingIntent.getActivities = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getActivities',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
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
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#cancel()}
 **/
android.app.PendingIntent.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getTargetPackage()}
 **/
android.app.PendingIntent.prototype.getTargetPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCreatorUid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getCreatorUid()}
 **/
android.app.PendingIntent.prototype.getCreatorUid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCreatorUid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#describeContents()}
 **/
android.app.PendingIntent.prototype.describeContents = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntentSender
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getIntentSender()}
 **/
android.app.PendingIntent.prototype.getIntentSender = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntentSender',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#hashCode()}
 **/
android.app.PendingIntent.prototype.hashCode = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#equals(java.lang.Object)}
 **/
android.app.PendingIntent.prototype.equals = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCreatorPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getCreatorPackage()}
 **/
android.app.PendingIntent.prototype.getCreatorPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCreatorPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#toString()}
 **/
android.app.PendingIntent.prototype.toString = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function send
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send()}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(int)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(android.content.Context, int, android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(int, android.app.PendingIntent$OnFinished, android.os.Handler)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(android.content.Context, int, android.content.Intent, android.app.PendingIntent$OnFinished, android.os.Handler)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(android.content.Context, int, android.content.Intent, android.app.PendingIntent$OnFinished, android.os.Handler, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(android.content.Context, int, android.content.Intent, android.app.PendingIntent$OnFinished, android.os.Handler, java.lang.String, android.os.Bundle)}
 **/
android.app.PendingIntent.prototype.send = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'send',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#writeToParcel(android.os.Parcel, int)}
 **/
android.app.PendingIntent.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCreatorUserHandle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getCreatorUserHandle()}
 **/
android.app.PendingIntent.prototype.getCreatorUserHandle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCreatorUserHandle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new android.app.PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.PendingIntent;
