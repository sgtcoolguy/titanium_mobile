/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.IntentSender
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.IntentSender
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html}
 **/
android.content.IntentSender = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.IntentSender') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.IntentSender',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.IntentSender.prototype = Object.create(SuperClass.prototype);
android.content.IntentSender.prototype.constructor = android.content.IntentSender;

android.content.IntentSender.className = "android.content.IntentSender";
android.content.IntentSender.prototype.className = "android.content.IntentSender";

// class property
Object.defineProperty(android.content.IntentSender, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.IntentSender',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.IntentSender.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.IntentSender',
		overrides: overrides
	});

	// Generate a JS wrapper for our dynamic subclass
	var whatever = function() {
		var result = subclassProxy.newInstance(arguments);
		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};

		// TODO Set up super?!
	};
	// it extends the JS wrapper for the parent type
	whatever.prototype = Object.create(android.content.IntentSender.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/android/content/IntentSender.html#CREATOR
Object.defineProperty(android.content.IntentSender, 'CREATOR', {
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
			if (result.apiName === 'android.content.IntentSender') {
				return new android.content.IntentSender(result);
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
 * @function readIntentSenderOrNullFromParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#readIntentSenderOrNullFromParcel(android.os.Parcel)}
 **/
android.content.IntentSender.readIntentSenderOrNullFromParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'readIntentSenderOrNullFromParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeIntentSenderOrNullToParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#writeIntentSenderOrNullToParcel(android.content.IntentSender, android.os.Parcel)}
 **/
android.content.IntentSender.writeIntentSenderOrNullToParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'writeIntentSenderOrNullToParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @function sendIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#sendIntent(android.content.Context, int, android.content.Intent, android.content.IntentSender$OnFinished, android.os.Handler)}
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#sendIntent(android.content.Context, int, android.content.Intent, android.content.IntentSender$OnFinished, android.os.Handler, java.lang.String)}
 **/
android.content.IntentSender.prototype.sendIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#hashCode()}
 **/
android.content.IntentSender.prototype.hashCode = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#getTargetPackage()}
 **/
android.content.IntentSender.prototype.getTargetPackage = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#equals(java.lang.Object)}
 **/
android.content.IntentSender.prototype.equals = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#getCreatorPackage()}
 **/
android.content.IntentSender.prototype.getCreatorPackage = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#toString()}
 **/
android.content.IntentSender.prototype.toString = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#getCreatorUid()}
 **/
android.content.IntentSender.prototype.getCreatorUid = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#describeContents()}
 **/
android.content.IntentSender.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.IntentSender.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#getCreatorUserHandle()}
 **/
android.content.IntentSender.prototype.getCreatorUserHandle = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new android.content.IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.IntentSender;
