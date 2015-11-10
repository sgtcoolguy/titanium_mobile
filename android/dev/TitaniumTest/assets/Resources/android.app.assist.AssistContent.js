/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.assist.AssistContent
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};
global.android.app.assist = global.android.app.assist || {};

/**
 * @class android.app.assist.AssistContent
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html}
 **/
android.app.assist.AssistContent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.assist.AssistContent') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.assist.AssistContent',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.assist.AssistContent.prototype = Object.create(SuperClass.prototype);
android.app.assist.AssistContent.prototype.constructor = android.app.assist.AssistContent;

android.app.assist.AssistContent.className = "android.app.assist.AssistContent";
android.app.assist.AssistContent.prototype.className = "android.app.assist.AssistContent";

// class property
Object.defineProperty(android.app.assist.AssistContent, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.assist.AssistContent',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.assist.AssistContent.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.assist.AssistContent',
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
	whatever.prototype = Object.create(android.app.assist.AssistContent.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/android/app/assist/AssistContent.html#CREATOR
Object.defineProperty(android.app.assist.AssistContent, 'CREATOR', {
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
			if (result.apiName === 'android.app.assist.AssistContent') {
				return new android.app.assist.AssistContent(result);
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
 * @function setWebUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#setWebUri(android.net.Uri)}
 **/
android.app.assist.AssistContent.prototype.setWebUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWebUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#setIntent(android.content.Intent)}
 **/
android.app.assist.AssistContent.prototype.setIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClipData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#setClipData(android.content.ClipData)}
 **/
android.app.assist.AssistContent.prototype.setClipData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClipData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWebUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#getWebUri()}
 **/
android.app.assist.AssistContent.prototype.getWebUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWebUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#describeContents()}
 **/
android.app.assist.AssistContent.prototype.describeContents = function() {
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
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#getClipData()}
 **/
android.app.assist.AssistContent.prototype.getClipData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStructuredData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#setStructuredData(java.lang.String)}
 **/
android.app.assist.AssistContent.prototype.setStructuredData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStructuredData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#getIntent()}
 **/
android.app.assist.AssistContent.prototype.getIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#getExtras()}
 **/
android.app.assist.AssistContent.prototype.getExtras = function() {
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
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStructuredData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#getStructuredData()}
 **/
android.app.assist.AssistContent.prototype.getStructuredData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStructuredData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAppProvidedIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#isAppProvidedIntent()}
 **/
android.app.assist.AssistContent.prototype.isAppProvidedIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAppProvidedIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/assist/AssistContent.html#writeToParcel(android.os.Parcel, int)}
 **/
android.app.assist.AssistContent.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.app.assist.AssistContent') {
			return new android.app.assist.AssistContent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.assist.AssistContent;
