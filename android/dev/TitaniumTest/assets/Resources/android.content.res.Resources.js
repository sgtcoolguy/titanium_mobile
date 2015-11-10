/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.Resources
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};
global.android.content.res = global.android.content.res || {};

/**
 * @class android.content.res.Resources
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html}
 **/
android.content.res.Resources = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.res.Resources') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.res.Resources',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.res.Resources.prototype = Object.create(SuperClass.prototype);
android.content.res.Resources.prototype.constructor = android.content.res.Resources;

android.content.res.Resources.className = "android.content.res.Resources";
android.content.res.Resources.prototype.className = "android.content.res.Resources";

// class property
Object.defineProperty(android.content.res.Resources, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.res.Resources',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.res.Resources.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.res.Resources',
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
	whatever.prototype = Object.create(android.content.res.Resources.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getSystem
 * @static
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getSystem()}
 **/
android.content.res.Resources.getSystem = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSystem',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
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
 * @function getResourcePackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getResourcePackageName(int)}
 **/
android.content.res.Resources.prototype.getResourcePackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourcePackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDrawable(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDrawable(int, android.content.res.Resources$Theme)}
 **/
android.content.res.Resources.prototype.getDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openRawResourceFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#openRawResourceFd(int)}
 **/
android.content.res.Resources.prototype.openRawResourceFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openRawResourceFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flushLayoutCache
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#flushLayoutCache()}
 **/
android.content.res.Resources.prototype.flushLayoutCache = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flushLayoutCache',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseBundleExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#parseBundleExtras(android.content.res.XmlResourceParser, android.os.Bundle)}
 **/
android.content.res.Resources.prototype.parseBundleExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseBundleExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDimensionPixelOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDimensionPixelOffset(int)}
 **/
android.content.res.Resources.prototype.getDimensionPixelOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDimensionPixelOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInteger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getInteger(int)}
 **/
android.content.res.Resources.prototype.getInteger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInteger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDisplayMetrics()}
 **/
android.content.res.Resources.prototype.getDisplayMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourceTypeName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getResourceTypeName(int)}
 **/
android.content.res.Resources.prototype.getResourceTypeName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourceTypeName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getLayout(int)}
 **/
android.content.res.Resources.prototype.getLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQuantityString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getQuantityString(int, int, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getQuantityString(int, int)}
 **/
android.content.res.Resources.prototype.getQuantityString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQuantityString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConfiguration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getConfiguration()}
 **/
android.content.res.Resources.prototype.getConfiguration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConfiguration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getAnimation(int)}
 **/
android.content.res.Resources.prototype.getAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIdentifier
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getIdentifier(java.lang.String, java.lang.String, java.lang.String)}
 **/
android.content.res.Resources.prototype.getIdentifier = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIdentifier',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDimension
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDimension(int)}
 **/
android.content.res.Resources.prototype.getDimension = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDimension',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQuantityText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getQuantityText(int, int)}
 **/
android.content.res.Resources.prototype.getQuantityText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQuantityText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getBoolean(int)}
 **/
android.content.res.Resources.prototype.getBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getTextArray(int)}
 **/
android.content.res.Resources.prototype.getTextArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDimensionPixelSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDimensionPixelSize(int)}
 **/
android.content.res.Resources.prototype.getDimensionPixelSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDimensionPixelSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishPreloading
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#finishPreloading()}
 **/
android.content.res.Resources.prototype.finishPreloading = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishPreloading',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAssets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getAssets()}
 **/
android.content.res.Resources.prototype.getAssets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAssets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#obtainAttributes(android.util.AttributeSet, int[])}
 **/
android.content.res.Resources.prototype.obtainAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'obtainAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourceEntryName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getResourceEntryName(int)}
 **/
android.content.res.Resources.prototype.getResourceEntryName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourceEntryName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getText(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getText(int, java.lang.CharSequence)}
 **/
android.content.res.Resources.prototype.getText = function() {
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
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainTypedArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#obtainTypedArray(int)}
 **/
android.content.res.Resources.prototype.obtainTypedArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'obtainTypedArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getColor(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getColor(int, android.content.res.Resources$Theme)}
 **/
android.content.res.Resources.prototype.getColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getXml
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getXml(int)}
 **/
android.content.res.Resources.prototype.getXml = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getXml',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourceName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getResourceName(int)}
 **/
android.content.res.Resources.prototype.getResourceName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourceName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getString(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getString(int, java.lang.Object[])}
 **/
android.content.res.Resources.prototype.getString = function() {
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
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMovie
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getMovie(int)}
 **/
android.content.res.Resources.prototype.getMovie = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMovie',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openRawResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#openRawResource(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#openRawResource(int, android.util.TypedValue)}
 **/
android.content.res.Resources.prototype.openRawResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openRawResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getValue(int, android.util.TypedValue, boolean)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getValue(java.lang.String, android.util.TypedValue, boolean)}
 **/
android.content.res.Resources.prototype.getValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColorStateList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getColorStateList(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getColorStateList(int, android.content.res.Resources$Theme)}
 **/
android.content.res.Resources.prototype.getColorStateList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColorStateList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValueForDensity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getValueForDensity(int, int, android.util.TypedValue, boolean)}
 **/
android.content.res.Resources.prototype.getValueForDensity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValueForDensity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseBundleExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#parseBundleExtra(java.lang.String, android.util.AttributeSet, android.os.Bundle)}
 **/
android.content.res.Resources.prototype.parseBundleExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseBundleExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawableForDensity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDrawableForDensity(int, int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDrawableForDensity(int, int, android.content.res.Resources$Theme)}
 **/
android.content.res.Resources.prototype.getDrawableForDensity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawableForDensity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStringArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getStringArray(int)}
 **/
android.content.res.Resources.prototype.getStringArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStringArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateConfiguration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#updateConfiguration(android.content.res.Configuration, android.util.DisplayMetrics)}
 **/
android.content.res.Resources.prototype.updateConfiguration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateConfiguration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getIntArray(int)}
 **/
android.content.res.Resources.prototype.getIntArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#newTheme()}
 **/
android.content.res.Resources.prototype.newTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getFraction(int, int, int)}
 **/
android.content.res.Resources.prototype.getFraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new android.content.res.Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.res.Resources;
