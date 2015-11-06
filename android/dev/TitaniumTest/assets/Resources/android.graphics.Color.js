/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Color
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Color
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html}
 **/
android.graphics.Color = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Color') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Color',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Color.prototype = Object.create(SuperClass.prototype);
android.graphics.Color.prototype.constructor = android.graphics.Color;

android.graphics.Color.className = "android.graphics.Color";
android.graphics.Color.prototype.className = "android.graphics.Color";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#RED}
 */
android.graphics.Color.RED = -65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#DKGRAY}
 */
android.graphics.Color.DKGRAY = -12303292;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#GRAY}
 */
android.graphics.Color.GRAY = -7829368;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#WHITE}
 */
android.graphics.Color.WHITE = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#BLUE}
 */
android.graphics.Color.BLUE = -16776961;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#BLACK}
 */
android.graphics.Color.BLACK = -16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#LTGRAY}
 */
android.graphics.Color.LTGRAY = -3355444;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#MAGENTA}
 */
android.graphics.Color.MAGENTA = -65281;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#YELLOW}
 */
android.graphics.Color.YELLOW = -256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#CYAN}
 */
android.graphics.Color.CYAN = -16711681;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#GREEN}
 */
android.graphics.Color.GREEN = -16711936;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#TRANSPARENT}
 */
android.graphics.Color.TRANSPARENT = 0;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function red
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#red(int)}
 **/
android.graphics.Color.red = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'red',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function argb
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#argb(int, int, int, int)}
 **/
android.graphics.Color.argb = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'argb',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function green
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#green(int)}
 **/
android.graphics.Color.green = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'green',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function blue
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#blue(int)}
 **/
android.graphics.Color.blue = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'blue',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function alpha
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#alpha(int)}
 **/
android.graphics.Color.alpha = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'alpha',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function HSVToColor
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#HSVToColor(float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#HSVToColor(int, float[])}
 **/
android.graphics.Color.HSVToColor = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'HSVToColor',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rgb
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#rgb(int, int, int)}
 **/
android.graphics.Color.rgb = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'rgb',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function colorToHSV
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#colorToHSV(int, float[])}
 **/
android.graphics.Color.colorToHSV = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'colorToHSV',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function RGBToHSV
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#RGBToHSV(int, int, int, float[])}
 **/
android.graphics.Color.RGBToHSV = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'RGBToHSV',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseColor
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Color.html#parseColor(java.lang.String)}
 **/
android.graphics.Color.parseColor = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'parseColor',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Color') {
			return new android.graphics.Color(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = android.graphics.Color;
