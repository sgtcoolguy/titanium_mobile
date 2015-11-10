/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ClipData.Item
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.ClipData = global.android.content.ClipData || {};

/**
 * @class android.content.ClipData.Item
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html}
 **/
android.content.ClipData.Item = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.ClipData$Item') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.ClipData$Item',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.ClipData.Item.prototype = Object.create(SuperClass.prototype);
android.content.ClipData.Item.prototype.constructor = android.content.ClipData.Item;

android.content.ClipData.Item.className = "android.content.ClipData$Item";
android.content.ClipData.Item.prototype.className = "android.content.ClipData$Item";

// class property
Object.defineProperty(android.content.ClipData.Item, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.ClipData$Item',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.ClipData.Item.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.ClipData$Item',
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
	whatever.prototype = Object.create(android.content.ClipData.Item.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html#getText()}
 **/
android.content.ClipData.Item.prototype.getText = function() {
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
		if (result.apiName === 'android.content.ClipData$Item') {
			return new android.content.ClipData.Item(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function coerceToText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html#coerceToText(android.content.Context)}
 **/
android.content.ClipData.Item.prototype.coerceToText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'coerceToText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData$Item') {
			return new android.content.ClipData.Item(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function coerceToStyledText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html#coerceToStyledText(android.content.Context)}
 **/
android.content.ClipData.Item.prototype.coerceToStyledText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'coerceToStyledText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData$Item') {
			return new android.content.ClipData.Item(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function coerceToHtmlText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html#coerceToHtmlText(android.content.Context)}
 **/
android.content.ClipData.Item.prototype.coerceToHtmlText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'coerceToHtmlText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData$Item') {
			return new android.content.ClipData.Item(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html#getIntent()}
 **/
android.content.ClipData.Item.prototype.getIntent = function() {
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
		if (result.apiName === 'android.content.ClipData$Item') {
			return new android.content.ClipData.Item(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html#toString()}
 **/
android.content.ClipData.Item.prototype.toString = function() {
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
		if (result.apiName === 'android.content.ClipData$Item') {
			return new android.content.ClipData.Item(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html#getUri()}
 **/
android.content.ClipData.Item.prototype.getUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData$Item') {
			return new android.content.ClipData.Item(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHtmlText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.Item.html#getHtmlText()}
 **/
android.content.ClipData.Item.prototype.getHtmlText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHtmlText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData$Item') {
			return new android.content.ClipData.Item(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.ClipData.Item;
