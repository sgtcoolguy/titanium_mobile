/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.ColorStateList
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.res = global.android.content.res || {};

/**
 * @class android.content.res.ColorStateList
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html}
 **/
android.content.res.ColorStateList = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.content.res.ColorStateList') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.res.ColorStateList',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.res.ColorStateList.prototype = Object.create(SuperClass.prototype);
android.content.res.ColorStateList.prototype.constructor = android.content.res.ColorStateList;

android.content.res.ColorStateList.className = "android.content.res.ColorStateList";
android.content.res.ColorStateList.prototype.className = "android.content.res.ColorStateList";

// Constants

// Static fields
// http://developer.android.com/reference/android/content/res/ColorStateList.html#CREATOR
Object.defineProperty(android.content.res.ColorStateList, 'CREATOR', {
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
			if (result.apiName === 'android.content.res.ColorStateList') {
				return new android.content.res.ColorStateList(result);
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
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#valueOf(int)}
 **/
android.content.res.ColorStateList.valueOf = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createFromXml
 * @static
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#createFromXml(android.content.res.Resources, org.xmlpull.v1.XmlPullParser)}
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#createFromXml(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.content.res.Resources$Theme)}
 **/
android.content.res.ColorStateList.createFromXml = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createFromXml',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
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
 * @function getColorForState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#getColorForState(int[], int)}
 **/
android.content.res.ColorStateList.prototype.getColorForState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColorForState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#withAlpha(int)}
 **/
android.content.res.ColorStateList.prototype.withAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'withAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpaque
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#isOpaque()}
 **/
android.content.res.ColorStateList.prototype.isOpaque = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpaque',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#getChangingConfigurations()}
 **/
android.content.res.ColorStateList.prototype.getChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#describeContents()}
 **/
android.content.res.ColorStateList.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#toString()}
 **/
android.content.res.ColorStateList.prototype.toString = function() {
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
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#getDefaultColor()}
 **/
android.content.res.ColorStateList.prototype.getDefaultColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDefaultColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.res.ColorStateList.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isStateful
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/ColorStateList.html#isStateful()}
 **/
android.content.res.ColorStateList.prototype.isStateful = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isStateful',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.ColorStateList') {
			return new android.content.res.ColorStateList(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.res.ColorStateList;
