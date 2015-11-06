/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.drawable.Drawable
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};
global.android.graphics.drawable = global.android.graphics.drawable || {};

/**
 * @class android.graphics.drawable.Drawable
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html}
 **/
android.graphics.drawable.Drawable = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.drawable.Drawable') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.drawable.Drawable',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.drawable.Drawable.prototype = Object.create(SuperClass.prototype);
android.graphics.drawable.Drawable.prototype.constructor = android.graphics.drawable.Drawable;

android.graphics.drawable.Drawable.className = "android.graphics.drawable.Drawable";
android.graphics.drawable.Drawable.prototype.className = "android.graphics.drawable.Drawable";

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function resolveOpacity
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#resolveOpacity(int, int)}
 **/
android.graphics.drawable.Drawable.resolveOpacity = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'resolveOpacity',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createFromStream
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#createFromStream(java.io.InputStream, java.lang.String)}
 **/
android.graphics.drawable.Drawable.createFromStream = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createFromStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#createFromXml(android.content.res.Resources, org.xmlpull.v1.XmlPullParser)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#createFromXml(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.content.res.Resources$Theme)}
 **/
android.graphics.drawable.Drawable.createFromXml = function() {
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
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createFromResourceStream
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#createFromResourceStream(android.content.res.Resources, android.util.TypedValue, java.io.InputStream, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#createFromResourceStream(android.content.res.Resources, android.util.TypedValue, java.io.InputStream, java.lang.String, android.graphics.BitmapFactory$Options)}
 **/
android.graphics.drawable.Drawable.createFromResourceStream = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createFromResourceStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createFromXmlInner
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#createFromXmlInner(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#createFromXmlInner(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.util.AttributeSet, android.content.res.Resources$Theme)}
 **/
android.graphics.drawable.Drawable.createFromXmlInner = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createFromXmlInner',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createFromPath
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#createFromPath(java.lang.String)}
 **/
android.graphics.drawable.Drawable.createFromPath = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'createFromPath',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
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
 * @function setFilterBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setFilterBitmap(boolean)}
 **/
android.graphics.drawable.Drawable.prototype.setFilterBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFilterBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setColorFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setColorFilter(android.graphics.ColorFilter)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setColorFilter(int, android.graphics.PorterDuff$Mode)}
 **/
android.graphics.drawable.Drawable.prototype.setColorFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setColorFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMinimumHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getMinimumHeight()}
 **/
android.graphics.drawable.Drawable.prototype.getMinimumHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMinimumHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTintMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setTintMode(android.graphics.PorterDuff$Mode)}
 **/
android.graphics.drawable.Drawable.prototype.setTintMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTintMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getChangingConfigurations()}
 **/
android.graphics.drawable.Drawable.prototype.getChangingConfigurations = function() {
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
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setCallback(android.graphics.drawable.Drawable$Callback)}
 **/
android.graphics.drawable.Drawable.prototype.setCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntrinsicWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getIntrinsicWidth()}
 **/
android.graphics.drawable.Drawable.prototype.getIntrinsicWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntrinsicWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getBounds()}
 **/
android.graphics.drawable.Drawable.prototype.getBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getAlpha()}
 **/
android.graphics.drawable.Drawable.prototype.getAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLevel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setLevel(int)}
 **/
android.graphics.drawable.Drawable.prototype.setLevel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLevel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOpacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getOpacity()}
 **/
android.graphics.drawable.Drawable.prototype.getOpacity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOpacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateSelf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#invalidateSelf()}
 **/
android.graphics.drawable.Drawable.prototype.invalidateSelf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateSelf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColorFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getColorFilter()}
 **/
android.graphics.drawable.Drawable.prototype.getColorFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColorFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setLayoutDirection(int)}
 **/
android.graphics.drawable.Drawable.prototype.setLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntrinsicHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getIntrinsicHeight()}
 **/
android.graphics.drawable.Drawable.prototype.getIntrinsicHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntrinsicHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setVisible(boolean, boolean)}
 **/
android.graphics.drawable.Drawable.prototype.setVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAutoMirrored
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#isAutoMirrored()}
 **/
android.graphics.drawable.Drawable.prototype.isAutoMirrored = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAutoMirrored',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setAlpha(int)}
 **/
android.graphics.drawable.Drawable.prototype.setAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#isVisible()}
 **/
android.graphics.drawable.Drawable.prototype.isVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getCallback()}
 **/
android.graphics.drawable.Drawable.prototype.getCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setTint(int)}
 **/
android.graphics.drawable.Drawable.prototype.setTint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canApplyTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#canApplyTheme()}
 **/
android.graphics.drawable.Drawable.prototype.canApplyTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canApplyTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHotspotBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getHotspotBounds(android.graphics.Rect)}
 **/
android.graphics.drawable.Drawable.prototype.getHotspotBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHotspotBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLevelChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#onLevelChange(int)}
 **/
android.graphics.drawable.Drawable.prototype.onLevelChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLevelChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getCurrent()}
 **/
android.graphics.drawable.Drawable.prototype.getCurrent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFilterBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#isFilterBitmap()}
 **/
android.graphics.drawable.Drawable.prototype.isFilterBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFilterBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLayoutDirectionChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#onLayoutDirectionChanged(int)}
 **/
android.graphics.drawable.Drawable.prototype.onLayoutDirectionChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLayoutDirectionChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHotspot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setHotspot(float, float)}
 **/
android.graphics.drawable.Drawable.prototype.setHotspot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHotspot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setChangingConfigurations(int)}
 **/
android.graphics.drawable.Drawable.prototype.setChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDither
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setDither(boolean)}
 **/
android.graphics.drawable.Drawable.prototype.setDither = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDither',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scheduleSelf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#scheduleSelf(java.lang.Runnable, long)}
 **/
android.graphics.drawable.Drawable.prototype.scheduleSelf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scheduleSelf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onBoundsChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#onBoundsChange(android.graphics.Rect)}
 **/
android.graphics.drawable.Drawable.prototype.onBoundsChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onBoundsChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConstantState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getConstantState()}
 **/
android.graphics.drawable.Drawable.prototype.getConstantState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConstantState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#applyTheme(android.content.res.Resources$Theme)}
 **/
android.graphics.drawable.Drawable.prototype.applyTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearColorFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#clearColorFilter()}
 **/
android.graphics.drawable.Drawable.prototype.clearColorFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearColorFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHotspotBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setHotspotBounds(int, int, int, int)}
 **/
android.graphics.drawable.Drawable.prototype.setHotspotBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHotspotBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copyBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#copyBounds(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#copyBounds()}
 **/
android.graphics.drawable.Drawable.prototype.copyBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copyBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOutline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getOutline(android.graphics.Outline)}
 **/
android.graphics.drawable.Drawable.prototype.getOutline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMinimumWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getMinimumWidth()}
 **/
android.graphics.drawable.Drawable.prototype.getMinimumWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMinimumWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStateChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#onStateChange(int[])}
 **/
android.graphics.drawable.Drawable.prototype.onStateChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStateChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#isStateful()}
 **/
android.graphics.drawable.Drawable.prototype.isStateful = function() {
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
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAutoMirrored
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setAutoMirrored(boolean)}
 **/
android.graphics.drawable.Drawable.prototype.setAutoMirrored = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAutoMirrored',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mutate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#mutate()}
 **/
android.graphics.drawable.Drawable.prototype.mutate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mutate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDirtyBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getDirtyBounds()}
 **/
android.graphics.drawable.Drawable.prototype.getDirtyBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDirtyBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getPadding(android.graphics.Rect)}
 **/
android.graphics.drawable.Drawable.prototype.getPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function jumpToCurrentState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#jumpToCurrentState()}
 **/
android.graphics.drawable.Drawable.prototype.jumpToCurrentState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'jumpToCurrentState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function draw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#draw(android.graphics.Canvas)}
 **/
android.graphics.drawable.Drawable.prototype.draw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'draw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setBounds(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setBounds(android.graphics.Rect)}
 **/
android.graphics.drawable.Drawable.prototype.setBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getLayoutDirection()}
 **/
android.graphics.drawable.Drawable.prototype.getLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLevel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getLevel()}
 **/
android.graphics.drawable.Drawable.prototype.getLevel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLevel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unscheduleSelf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#unscheduleSelf(java.lang.Runnable)}
 **/
android.graphics.drawable.Drawable.prototype.unscheduleSelf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unscheduleSelf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getState()}
 **/
android.graphics.drawable.Drawable.prototype.getState = function() {
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
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransparentRegion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#getTransparentRegion()}
 **/
android.graphics.drawable.Drawable.prototype.getTransparentRegion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransparentRegion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inflate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#inflate(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#inflate(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.util.AttributeSet, android.content.res.Resources$Theme)}
 **/
android.graphics.drawable.Drawable.prototype.inflate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inflate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setState(int[])}
 **/
android.graphics.drawable.Drawable.prototype.setState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTintList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setTintList(android.content.res.ColorStateList)}
 **/
android.graphics.drawable.Drawable.prototype.setTintList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTintList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable') {
			return new android.graphics.drawable.Drawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.drawable.Drawable;
