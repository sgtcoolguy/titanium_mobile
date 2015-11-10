/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.text.Layout
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.text = global.android.text || {};

/**
 * @class android.text.Layout
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/text/Layout.html}
 **/
android.text.Layout = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.text.Layout') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.text.Layout. Create a subclass using android.text.Layout.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.text.Layout.prototype = Object.create(SuperClass.prototype);
android.text.Layout.prototype.constructor = android.text.Layout;

android.text.Layout.className = "android.text.Layout";
android.text.Layout.prototype.className = "android.text.Layout";

// class property
Object.defineProperty(android.text.Layout, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.text.Layout',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.text.Layout.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.text.Layout',
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
	whatever.prototype = Object.create(android.text.Layout.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#BREAK_STRATEGY_HIGH_QUALITY}
 */
android.text.Layout.BREAK_STRATEGY_HIGH_QUALITY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#DIR_LEFT_TO_RIGHT}
 */
android.text.Layout.DIR_LEFT_TO_RIGHT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#HYPHENATION_FREQUENCY_FULL}
 */
android.text.Layout.HYPHENATION_FREQUENCY_FULL = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#BREAK_STRATEGY_BALANCED}
 */
android.text.Layout.BREAK_STRATEGY_BALANCED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#DIR_RIGHT_TO_LEFT}
 */
android.text.Layout.DIR_RIGHT_TO_LEFT = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#HYPHENATION_FREQUENCY_NONE}
 */
android.text.Layout.HYPHENATION_FREQUENCY_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#HYPHENATION_FREQUENCY_NORMAL}
 */
android.text.Layout.HYPHENATION_FREQUENCY_NORMAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#BREAK_STRATEGY_SIMPLE}
 */
android.text.Layout.BREAK_STRATEGY_SIMPLE = 0;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getDesiredWidth
 * @static
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getDesiredWidth(java.lang.CharSequence, android.text.TextPaint)}
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getDesiredWidth(java.lang.CharSequence, int, int, android.text.TextPaint)}
 **/
android.text.Layout.getDesiredWidth = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDesiredWidth',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
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
 * @function getSecondaryHorizontal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getSecondaryHorizontal(int)}
 **/
android.text.Layout.prototype.getSecondaryHorizontal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSecondaryHorizontal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineMax
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineMax(int)}
 **/
android.text.Layout.prototype.getLineMax = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineMax',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineDescent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineDescent(int)}
 **/
android.text.Layout.prototype.getLineDescent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineDescent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParagraphRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getParagraphRight(int)}
 **/
android.text.Layout.prototype.getParagraphRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParagraphRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineBaseline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineBaseline(int)}
 **/
android.text.Layout.prototype.getLineBaseline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineBaseline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineEnd(int)}
 **/
android.text.Layout.prototype.getLineEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOffsetToRightOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getOffsetToRightOf(int)}
 **/
android.text.Layout.prototype.getOffsetToRightOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOffsetToRightOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectionPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getSelectionPath(int, int, android.graphics.Path)}
 **/
android.text.Layout.prototype.getSelectionPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectionPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getWidth()}
 **/
android.text.Layout.prototype.getWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEllipsisCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getEllipsisCount(int)}
 **/
android.text.Layout.prototype.getEllipsisCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEllipsisCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineForOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineForOffset(int)}
 **/
android.text.Layout.prototype.getLineForOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineForOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEllipsizedWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getEllipsizedWidth()}
 **/
android.text.Layout.prototype.getEllipsizedWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEllipsizedWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getHeight()}
 **/
android.text.Layout.prototype.getHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTopPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getTopPadding()}
 **/
android.text.Layout.prototype.getTopPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTopPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineTop(int)}
 **/
android.text.Layout.prototype.getLineTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineWidth(int)}
 **/
android.text.Layout.prototype.getLineWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineCount()}
 **/
android.text.Layout.prototype.getLineCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParagraphDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getParagraphDirection(int)}
 **/
android.text.Layout.prototype.getParagraphDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParagraphDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrimaryHorizontal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getPrimaryHorizontal(int)}
 **/
android.text.Layout.prototype.getPrimaryHorizontal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPrimaryHorizontal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBottomPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getBottomPadding()}
 **/
android.text.Layout.prototype.getBottomPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBottomPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPaint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getPaint()}
 **/
android.text.Layout.prototype.getPaint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPaint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOffsetToLeftOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getOffsetToLeftOf(int)}
 **/
android.text.Layout.prototype.getOffsetToLeftOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOffsetToLeftOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAlignment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getAlignment()}
 **/
android.text.Layout.prototype.getAlignment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAlignment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSpacingAdd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getSpacingAdd()}
 **/
android.text.Layout.prototype.getSpacingAdd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSpacingAdd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSpacingMultiplier
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getSpacingMultiplier()}
 **/
android.text.Layout.prototype.getSpacingMultiplier = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSpacingMultiplier',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineBottom(int)}
 **/
android.text.Layout.prototype.getLineBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
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
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getText()}
 **/
android.text.Layout.prototype.getText = function() {
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
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCursorPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getCursorPath(int, android.graphics.Path, java.lang.CharSequence)}
 **/
android.text.Layout.prototype.getCursorPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCursorPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function increaseWidthTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#increaseWidthTo(int)}
 **/
android.text.Layout.prototype.increaseWidthTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'increaseWidthTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineBounds(int, android.graphics.Rect)}
 **/
android.text.Layout.prototype.getLineBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParagraphLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getParagraphLeft(int)}
 **/
android.text.Layout.prototype.getParagraphLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParagraphLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
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
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#draw(android.graphics.Canvas)}
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#draw(android.graphics.Canvas, android.graphics.Path, android.graphics.Paint, int)}
 **/
android.text.Layout.prototype.draw = function() {
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
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineForVertical
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineForVertical(int)}
 **/
android.text.Layout.prototype.getLineForVertical = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineForVertical',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOffsetForHorizontal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getOffsetForHorizontal(int, float)}
 **/
android.text.Layout.prototype.getOffsetForHorizontal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOffsetForHorizontal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineStart(int)}
 **/
android.text.Layout.prototype.getLineStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineContainsTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineContainsTab(int)}
 **/
android.text.Layout.prototype.getLineContainsTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineContainsTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineRight(int)}
 **/
android.text.Layout.prototype.getLineRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEllipsisStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getEllipsisStart(int)}
 **/
android.text.Layout.prototype.getEllipsisStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEllipsisStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParagraphAlignment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getParagraphAlignment(int)}
 **/
android.text.Layout.prototype.getParagraphAlignment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParagraphAlignment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRtlCharAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#isRtlCharAt(int)}
 **/
android.text.Layout.prototype.isRtlCharAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRtlCharAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineDirections
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineDirections(int)}
 **/
android.text.Layout.prototype.getLineDirections = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineDirections',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineAscent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineAscent(int)}
 **/
android.text.Layout.prototype.getLineAscent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineAscent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineVisibleEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineVisibleEnd(int)}
 **/
android.text.Layout.prototype.getLineVisibleEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineVisibleEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#getLineLeft(int)}
 **/
android.text.Layout.prototype.getLineLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSpanned
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/text/Layout.html#isSpanned()}
 **/
android.text.Layout.prototype.isSpanned = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSpanned',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.text.Layout') {
			return new android.text.Layout(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.text.Layout;
