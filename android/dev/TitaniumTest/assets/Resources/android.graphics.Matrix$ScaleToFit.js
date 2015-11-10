/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Matrix.ScaleToFit
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};
global.android.graphics.Matrix = global.android.graphics.Matrix || {};

/**
 * @class android.graphics.Matrix.ScaleToFit
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html}
 **/
android.graphics.Matrix.ScaleToFit = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.graphics.Matrix$ScaleToFit') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Matrix$ScaleToFit',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
android.graphics.Matrix.ScaleToFit.prototype = Object.create(SuperClass.prototype);
android.graphics.Matrix.ScaleToFit.prototype.constructor = android.graphics.Matrix.ScaleToFit;

android.graphics.Matrix.ScaleToFit.className = "android.graphics.Matrix$ScaleToFit";
android.graphics.Matrix.ScaleToFit.prototype.className = "android.graphics.Matrix$ScaleToFit";

// class property
Object.defineProperty(android.graphics.Matrix.ScaleToFit, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.graphics.Matrix$ScaleToFit',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});


// Constants

// Static fields
// http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#CENTER
Object.defineProperty(android.graphics.Matrix.ScaleToFit, 'CENTER', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CENTER'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
				return new android.graphics.Matrix.ScaleToFit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#FILL
Object.defineProperty(android.graphics.Matrix.ScaleToFit, 'FILL', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'FILL'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
				return new android.graphics.Matrix.ScaleToFit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#END
Object.defineProperty(android.graphics.Matrix.ScaleToFit, 'END', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'END'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
				return new android.graphics.Matrix.ScaleToFit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#START
Object.defineProperty(android.graphics.Matrix.ScaleToFit, 'START', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'START'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
				return new android.graphics.Matrix.ScaleToFit(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#valueOf(java.lang.String)}
 **/
android.graphics.Matrix.ScaleToFit.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
			return new android.graphics.Matrix.ScaleToFit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#values()}
 **/
android.graphics.Matrix.ScaleToFit.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
			return new android.graphics.Matrix.ScaleToFit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = android.graphics.Matrix.ScaleToFit;
