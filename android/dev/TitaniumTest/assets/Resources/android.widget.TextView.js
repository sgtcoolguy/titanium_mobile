/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.TextView
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.TextView
 * @extends android.view.View 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html}
 **/
android.widget.TextView = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.TextView') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.TextView',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.View');
android.widget.TextView.prototype = Object.create(SuperClass.prototype);
android.widget.TextView.prototype.constructor = android.widget.TextView;

android.widget.TextView.className = "android.widget.TextView";
android.widget.TextView.prototype.className = "android.widget.TextView";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getSelectionStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getSelectionStart()}
 **/
android.widget.TextView.prototype.getSelectionStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectionStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEditableFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setEditableFactory(android.text.Editable$Factory)}
 **/
android.widget.TextView.prototype.setEditableFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEditableFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCommitCorrection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onCommitCorrection(android.view.inputmethod.CorrectionInfo)}
 **/
android.widget.TextView.prototype.onCommitCorrection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCommitCorrection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIncludeFontPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setIncludeFontPadding(boolean)}
 **/
android.widget.TextView.prototype.setIncludeFontPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIncludeFontPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRawInputType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setRawInputType(int)}
 **/
android.widget.TextView.prototype.setRawInputType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRawInputType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnEditorActionListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setOnEditorActionListener(android.widget.TextView$OnEditorActionListener)}
 **/
android.widget.TextView.prototype.setOnEditorActionListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnEditorActionListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMarqueeRepeatLimit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMarqueeRepeatLimit()}
 **/
android.widget.TextView.prototype.getMarqueeRepeatLimit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMarqueeRepeatLimit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCompoundDrawablePadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawablePadding(int)}
 **/
android.widget.TextView.prototype.setCompoundDrawablePadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCompoundDrawablePadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMovementMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMovementMethod()}
 **/
android.widget.TextView.prototype.getMovementMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMovementMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextScaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextScaleX(float)}
 **/
android.widget.TextView.prototype.setTextScaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextScaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaxEms
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMaxEms(int)}
 **/
android.widget.TextView.prototype.setMaxEms = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxEms',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCompoundDrawablesRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawablesRelative(android.graphics.drawable.Drawable, android.graphics.drawable.Drawable, android.graphics.drawable.Drawable, android.graphics.drawable.Drawable)}
 **/
android.widget.TextView.prototype.setCompoundDrawablesRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCompoundDrawablesRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMinHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMinHeight()}
 **/
android.widget.TextView.prototype.getMinHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMinHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLineCount()}
 **/
android.widget.TextView.prototype.getLineCount = function() {
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
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShadowRadius
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getShadowRadius()}
 **/
android.widget.TextView.prototype.getShadowRadius = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShadowRadius',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function jumpDrawablesToCurrentState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#jumpDrawablesToCurrentState()}
 **/
android.widget.TextView.prototype.jumpDrawablesToCurrentState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'jumpDrawablesToCurrentState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMinHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMinHeight(int)}
 **/
android.widget.TextView.prototype.setMinHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMinHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCursorVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCursorVisible(boolean)}
 **/
android.widget.TextView.prototype.setCursorVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCursorVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMovementMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMovementMethod(android.text.method.MovementMethod)}
 **/
android.widget.TextView.prototype.setMovementMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMovementMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelectAllOnFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setSelectAllOnFocus(boolean)}
 **/
android.widget.TextView.prototype.setSelectAllOnFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelectAllOnFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateDrawableState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onCreateDrawableState(int)}
 **/
android.widget.TextView.prototype.onCreateDrawableState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateDrawableState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getText()}
 **/
android.widget.TextView.prototype.getText = function() {
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
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEllipsize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setEllipsize(android.text.TextUtils$TruncateAt)}
 **/
android.widget.TextView.prototype.setEllipsize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEllipsize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScroller
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setScroller(android.widget.Scroller)}
 **/
android.widget.TextView.prototype.setScroller = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScroller',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPaintFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getPaintFlags()}
 **/
android.widget.TextView.prototype.getPaintFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPaintFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLeftPaddingOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLeftPaddingOffset()}
 **/
android.widget.TextView.prototype.getLeftPaddingOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLeftPaddingOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getKeyListener()}
 **/
android.widget.TextView.prototype.getKeyListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCompoundDrawablesRelativeWithIntrinsicBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawablesRelativeWithIntrinsicBounds(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawablesRelativeWithIntrinsicBounds(android.graphics.drawable.Drawable, android.graphics.drawable.Drawable, android.graphics.drawable.Drawable, android.graphics.drawable.Drawable)}
 **/
android.widget.TextView.prototype.setCompoundDrawablesRelativeWithIntrinsicBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCompoundDrawablesRelativeWithIntrinsicBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getError()}
 **/
android.widget.TextView.prototype.getError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextIsSelectable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextIsSelectable(boolean)}
 **/
android.widget.TextView.prototype.setTextIsSelectable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextIsSelectable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setError(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setError(java.lang.CharSequence, android.graphics.drawable.Drawable)}
 **/
android.widget.TextView.prototype.setError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTotalPaddingBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTotalPaddingBottom()}
 **/
android.widget.TextView.prototype.getTotalPaddingBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTotalPaddingBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginBatchEdit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#beginBatchEdit()}
 **/
android.widget.TextView.prototype.beginBatchEdit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginBatchEdit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setHint(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setHint(int)}
 **/
android.widget.TextView.prototype.setHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCustomSelectionActionModeCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCustomSelectionActionModeCallback()}
 **/
android.widget.TextView.prototype.getCustomSelectionActionModeCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCustomSelectionActionModeCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTextSize()}
 **/
android.widget.TextView.prototype.getTextSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLinkTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setLinkTextColor(int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setLinkTextColor(android.content.res.ColorStateList)}
 **/
android.widget.TextView.prototype.setLinkTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLinkTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInputType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getInputType()}
 **/
android.widget.TextView.prototype.getInputType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInputType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPrivateIMECommand
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onPrivateIMECommand(java.lang.String, android.os.Bundle)}
 **/
android.widget.TextView.prototype.onPrivateIMECommand = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrivateIMECommand',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#computeScroll()}
 **/
android.widget.TextView.prototype.computeScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHyphenationFrequency
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setHyphenationFrequency(int)}
 **/
android.widget.TextView.prototype.setHyphenationFrequency = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHyphenationFrequency',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSpannableFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setSpannableFactory(android.text.Spannable$Factory)}
 **/
android.widget.TextView.prototype.setSpannableFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSpannableFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTotalPaddingLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTotalPaddingLeft()}
 **/
android.widget.TextView.prototype.getTotalPaddingLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTotalPaddingLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function didTouchFocusSelect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#didTouchFocusSelect()}
 **/
android.widget.TextView.prototype.didTouchFocusSelect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'didTouchFocusSelect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTopPaddingOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTopPaddingOffset()}
 **/
android.widget.TextView.prototype.getTopPaddingOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTopPaddingOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyPreIme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onKeyPreIme(int, android.view.KeyEvent)}
 **/
android.widget.TextView.prototype.onKeyPreIme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyPreIme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFocusedRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getFocusedRect(android.graphics.Rect)}
 **/
android.widget.TextView.prototype.getFocusedRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFocusedRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findViewsWithText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#findViewsWithText(java.util.ArrayList, java.lang.CharSequence, int)}
 **/
android.widget.TextView.prototype.findViewsWithText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findViewsWithText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onDraw(android.graphics.Canvas)}
 **/
android.widget.TextView.prototype.onDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMinEms
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMinEms(int)}
 **/
android.widget.TextView.prototype.setMinEms = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMinEms',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getPaint()}
 **/
android.widget.TextView.prototype.getPaint = function() {
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
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAutoLinkMask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setAutoLinkMask(int)}
 **/
android.widget.TextView.prototype.setAutoLinkMask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAutoLinkMask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAttachedToWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onAttachedToWindow()}
 **/
android.widget.TextView.prototype.onAttachedToWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAttachedToWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setPadding(int, int, int, int)}
 **/
android.widget.TextView.prototype.setPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeHorizontalScrollRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#computeHorizontalScrollRange()}
 **/
android.widget.TextView.prototype.computeHorizontalScrollRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeHorizontalScrollRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTextContextMenuItem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onTextContextMenuItem(int)}
 **/
android.widget.TextView.prototype.onTextContextMenuItem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTextContextMenuItem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCurrentTextColor()}
 **/
android.widget.TextView.prototype.getCurrentTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLineBounds(int, android.graphics.Rect)}
 **/
android.widget.TextView.prototype.getLineBounds = function() {
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
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBreakStrategy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getBreakStrategy()}
 **/
android.widget.TextView.prototype.getBreakStrategy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBreakStrategy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTotalPaddingEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTotalPaddingEnd()}
 **/
android.widget.TextView.prototype.getTotalPaddingEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTotalPaddingEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxLines
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMaxLines()}
 **/
android.widget.TextView.prototype.getMaxLines = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxLines',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onVisibilityChanged(android.view.View, int)}
 **/
android.widget.TextView.prototype.onVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultMovementMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getDefaultMovementMethod()}
 **/
android.widget.TextView.prototype.getDefaultMovementMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDefaultMovementMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPaintFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setPaintFlags(int)}
 **/
android.widget.TextView.prototype.setPaintFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPaintFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrivateImeOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getPrivateImeOptions()}
 **/
android.widget.TextView.prototype.getPrivateImeOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPrivateImeOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFocusChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onFocusChanged(boolean, int, android.graphics.Rect)}
 **/
android.widget.TextView.prototype.onFocusChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFocusChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInputExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getInputExtras(boolean)}
 **/
android.widget.TextView.prototype.getInputExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInputExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setGravity(int)}
 **/
android.widget.TextView.prototype.setGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyMultiple
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onKeyMultiple(int, int, android.view.KeyEvent)}
 **/
android.widget.TextView.prototype.onKeyMultiple = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyMultiple',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundPaddingEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundPaddingEnd()}
 **/
android.widget.TextView.prototype.getCompoundPaddingEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundPaddingEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextScaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTextScaleX()}
 **/
android.widget.TextView.prototype.getTextScaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextScaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMinLines
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMinLines()}
 **/
android.widget.TextView.prototype.getMinLines = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMinLines',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyShortcut
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onKeyShortcut(int, android.view.KeyEvent)}
 **/
android.widget.TextView.prototype.onKeyShortcut = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyShortcut',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setSelected(boolean)}
 **/
android.widget.TextView.prototype.setSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProvideStructure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onProvideStructure(android.view.ViewStructure)}
 **/
android.widget.TextView.prototype.onProvideStructure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideStructure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setElegantTextHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setElegantTextHeight(boolean)}
 **/
android.widget.TextView.prototype.setElegantTextHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setElegantTextHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSingleLine
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setSingleLine()}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setSingleLine(boolean)}
 **/
android.widget.TextView.prototype.setSingleLine = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSingleLine',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDragEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onDragEvent(android.view.DragEvent)}
 **/
android.widget.TextView.prototype.onDragEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDragEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAutoLinkMask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getAutoLinkMask()}
 **/
android.widget.TextView.prototype.getAutoLinkMask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAutoLinkMask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#invalidateDrawable(android.graphics.drawable.Drawable)}
 **/
android.widget.TextView.prototype.invalidateDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCustomInsertionActionModeCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCustomInsertionActionModeCallback()}
 **/
android.widget.TextView.prototype.getCustomInsertionActionModeCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCustomInsertionActionModeCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundDrawablesRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundDrawablesRelative()}
 **/
android.widget.TextView.prototype.getCompoundDrawablesRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundDrawablesRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentHintTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCurrentHintTextColor()}
 **/
android.widget.TextView.prototype.getCurrentHintTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentHintTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImeActionId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getImeActionId()}
 **/
android.widget.TextView.prototype.getImeActionId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImeActionId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getGravity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getGravity()}
 **/
android.widget.TextView.prototype.getGravity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getGravity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInputType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setInputType(int)}
 **/
android.widget.TextView.prototype.setInputType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInputType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransformationMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTransformationMethod(android.text.method.TransformationMethod)}
 **/
android.widget.TextView.prototype.setTransformationMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransformationMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCommitCompletion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onCommitCompletion(android.view.inputmethod.CompletionInfo)}
 **/
android.widget.TextView.prototype.onCommitCompletion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCommitCompletion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShowSoftInputOnFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getShowSoftInputOnFocus()}
 **/
android.widget.TextView.prototype.getShowSoftInputOnFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShowSoftInputOnFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundPaddingBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundPaddingBottom()}
 **/
android.widget.TextView.prototype.getCompoundPaddingBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundPaddingBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLetterSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLetterSpacing()}
 **/
android.widget.TextView.prototype.getLetterSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLetterSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLineSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setLineSpacing(float, float)}
 **/
android.widget.TextView.prototype.setLineSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLineSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onGenericMotionEvent(android.view.MotionEvent)}
 **/
android.widget.TextView.prototype.onGenericMotionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onGenericMotionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLeftFadingEdgeStrength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLeftFadingEdgeStrength()}
 **/
android.widget.TextView.prototype.getLeftFadingEdgeStrength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLeftFadingEdgeStrength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRestoreInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onRestoreInstanceState(android.os.Parcelable)}
 **/
android.widget.TextView.prototype.onRestoreInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRestoreInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBottomPaddingOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getBottomPaddingOffset()}
 **/
android.widget.TextView.prototype.getBottomPaddingOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBottomPaddingOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInputMethodTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#isInputMethodTarget()}
 **/
android.widget.TextView.prototype.isInputMethodTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInputMethodTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHintTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setHintTextColor(int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setHintTextColor(android.content.res.ColorStateList)}
 **/
android.widget.TextView.prototype.setHintTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHintTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTextSelectable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#isTextSelectable()}
 **/
android.widget.TextView.prototype.isTextSelectable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTextSelectable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEditableText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getEditableText()}
 **/
android.widget.TextView.prototype.getEditableText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEditableText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLayout()}
 **/
android.widget.TextView.prototype.getLayout = function() {
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
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFrame
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setFrame(int, int, int, int)}
 **/
android.widget.TextView.prototype.setFrame = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFrame',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaxHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMaxHeight(int)}
 **/
android.widget.TextView.prototype.setMaxHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function endBatchEdit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#endBatchEdit()}
 **/
android.widget.TextView.prototype.endBatchEdit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'endBatchEdit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUrls
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getUrls()}
 **/
android.widget.TextView.prototype.getUrls = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUrls',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBreakStrategy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setBreakStrategy(int)}
 **/
android.widget.TextView.prototype.setBreakStrategy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBreakStrategy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundDrawableTintMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundDrawableTintMode()}
 **/
android.widget.TextView.prototype.getCompoundDrawableTintMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundDrawableTintMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtendedPaddingTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getExtendedPaddingTop()}
 **/
android.widget.TextView.prototype.getExtendedPaddingTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtendedPaddingTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCursorVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#isCursorVisible()}
 **/
android.widget.TextView.prototype.isCursorVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCursorVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTotalPaddingTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTotalPaddingTop()}
 **/
android.widget.TextView.prototype.getTotalPaddingTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTotalPaddingTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLinkTextColors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLinkTextColors()}
 **/
android.widget.TextView.prototype.getLinkTextColors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLinkTextColors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bringPointIntoView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#bringPointIntoView(int)}
 **/
android.widget.TextView.prototype.bringPointIntoView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bringPointIntoView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function length
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#length()}
 **/
android.widget.TextView.prototype.length = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'length',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasSelection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#hasSelection()}
 **/
android.widget.TextView.prototype.hasSelection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasSelection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCompoundDrawableTintList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawableTintList(android.content.res.ColorStateList)}
 **/
android.widget.TextView.prototype.setCompoundDrawableTintList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCompoundDrawableTintList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawableHotspotChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#drawableHotspotChanged(float, float)}
 **/
android.widget.TextView.prototype.drawableHotspotChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawableHotspotChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFinishTemporaryDetach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onFinishTemporaryDetach()}
 **/
android.widget.TextView.prototype.onFinishTemporaryDetach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFinishTemporaryDetach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHyphenationFrequency
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getHyphenationFrequency()}
 **/
android.widget.TextView.prototype.getHyphenationFrequency = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHyphenationFrequency',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLines
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setLines(int)}
 **/
android.widget.TextView.prototype.setLines = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLines',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBaseline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getBaseline()}
 **/
android.widget.TextView.prototype.getBaseline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBaseline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundPaddingTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundPaddingTop()}
 **/
android.widget.TextView.prototype.getCompoundPaddingTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundPaddingTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImeActionLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getImeActionLabel()}
 **/
android.widget.TextView.prototype.getImeActionLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImeActionLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function append
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#append(java.lang.CharSequence, int, int)}
 **/
android.widget.TextView.prototype.append = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'append',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setImeActionLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setImeActionLabel(java.lang.CharSequence, int)}
 **/
android.widget.TextView.prototype.setImeActionLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setImeActionLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setText(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setText(java.lang.CharSequence, android.widget.TextView$BufferType)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setText(char[], int, int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setText(int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setText(int, android.widget.TextView$BufferType)}
 **/
android.widget.TextView.prototype.setText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSelectionChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onSelectionChanged(int, int)}
 **/
android.widget.TextView.prototype.onSelectionChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSelectionChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasOverlappingRendering
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#hasOverlappingRendering()}
 **/
android.widget.TextView.prototype.hasOverlappingRendering = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasOverlappingRendering',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function moveCursorToVisibleOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#moveCursorToVisibleOffset()}
 **/
android.widget.TextView.prototype.moveCursorToVisibleOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'moveCursorToVisibleOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEms
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setEms(int)}
 **/
android.widget.TextView.prototype.setEms = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEms',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getAccessibilityClassName()}
 **/
android.widget.TextView.prototype.getAccessibilityClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onEditorAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onEditorAction(int)}
 **/
android.widget.TextView.prototype.onEditorAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onEditorAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performLongClick
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#performLongClick()}
 **/
android.widget.TextView.prototype.performLongClick = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performLongClick',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontFeatureSettings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getFontFeatureSettings()}
 **/
android.widget.TextView.prototype.getFontFeatureSettings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontFeatureSettings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxEms
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMaxEms()}
 **/
android.widget.TextView.prototype.getMaxEms = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxEms',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFilters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getFilters()}
 **/
android.widget.TextView.prototype.getFilters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFilters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addTextChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#addTextChangedListener(android.text.TextWatcher)}
 **/
android.widget.TextView.prototype.addTextChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTextChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStartTemporaryDetach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onStartTemporaryDetach()}
 **/
android.widget.TextView.prototype.onStartTemporaryDetach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStartTemporaryDetach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCompoundDrawablesWithIntrinsicBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawablesWithIntrinsicBounds(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawablesWithIntrinsicBounds(android.graphics.drawable.Drawable, android.graphics.drawable.Drawable, android.graphics.drawable.Drawable, android.graphics.drawable.Drawable)}
 **/
android.widget.TextView.prototype.setCompoundDrawablesWithIntrinsicBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCompoundDrawablesWithIntrinsicBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMinEms
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMinEms()}
 **/
android.widget.TextView.prototype.getMinEms = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMinEms',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onLayout(boolean, int, int, int, int)}
 **/
android.widget.TextView.prototype.onLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onEndBatchEdit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onEndBatchEdit()}
 **/
android.widget.TextView.prototype.onEndBatchEdit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onEndBatchEdit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeVerticalScrollRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#computeVerticalScrollRange()}
 **/
android.widget.TextView.prototype.computeVerticalScrollRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeVerticalScrollRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaxWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMaxWidth(int)}
 **/
android.widget.TextView.prototype.setMaxWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPreDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onPreDraw()}
 **/
android.widget.TextView.prototype.onPreDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPreDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function verifyDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#verifyDrawable(android.graphics.drawable.Drawable)}
 **/
android.widget.TextView.prototype.verifyDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'verifyDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setEnabled(boolean)}
 **/
android.widget.TextView.prototype.setEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExtractedText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setExtractedText(android.view.inputmethod.ExtractedText)}
 **/
android.widget.TextView.prototype.setExtractedText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExtractedText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFreezesText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setFreezesText(boolean)}
 **/
android.widget.TextView.prototype.setFreezesText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFreezesText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIncludeFontPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getIncludeFontPadding()}
 **/
android.widget.TextView.prototype.getIncludeFontPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIncludeFontPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onBeginBatchEdit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onBeginBatchEdit()}
 **/
android.widget.TextView.prototype.onBeginBatchEdit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onBeginBatchEdit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSuggestionsEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#isSuggestionsEnabled()}
 **/
android.widget.TextView.prototype.isSuggestionsEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSuggestionsEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLinksClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setLinksClickable(boolean)}
 **/
android.widget.TextView.prototype.setLinksClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLinksClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLinksClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLinksClickable()}
 **/
android.widget.TextView.prototype.getLinksClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLinksClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundPaddingRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundPaddingRight()}
 **/
android.widget.TextView.prototype.getCompoundPaddingRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundPaddingRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setKeyListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setKeyListener(android.text.method.KeyListener)}
 **/
android.widget.TextView.prototype.setKeyListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setKeyListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundPaddingLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundPaddingLeft()}
 **/
android.widget.TextView.prototype.getCompoundPaddingLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundPaddingLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRtlPropertiesChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onRtlPropertiesChanged(int)}
 **/
android.widget.TextView.prototype.onRtlPropertiesChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRtlPropertiesChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTypeface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTypeface(android.graphics.Typeface, int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTypeface(android.graphics.Typeface)}
 **/
android.widget.TextView.prototype.setTypeface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTypeface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtendedPaddingBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getExtendedPaddingBottom()}
 **/
android.widget.TextView.prototype.getExtendedPaddingBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtendedPaddingBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInputExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setInputExtras(int)}
 **/
android.widget.TextView.prototype.setInputExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInputExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setShowSoftInputOnFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setShowSoftInputOnFocus(boolean)}
 **/
android.widget.TextView.prototype.setShowSoftInputOnFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setShowSoftInputOnFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onKeyUp(int, android.view.KeyEvent)}
 **/
android.widget.TextView.prototype.onKeyUp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyUp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTextChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#removeTextChangedListener(android.text.TextWatcher)}
 **/
android.widget.TextView.prototype.removeTextChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTextChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearComposingText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#clearComposingText()}
 **/
android.widget.TextView.prototype.clearComposingText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearComposingText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setWidth(int)}
 **/
android.widget.TextView.prototype.setWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPrivateImeOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setPrivateImeOptions(java.lang.String)}
 **/
android.widget.TextView.prototype.setPrivateImeOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPrivateImeOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineSpacingMultiplier
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLineSpacingMultiplier()}
 **/
android.widget.TextView.prototype.getLineSpacingMultiplier = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineSpacingMultiplier',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextLocale(java.util.Locale)}
 **/
android.widget.TextView.prototype.setTextLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultEditable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getDefaultEditable()}
 **/
android.widget.TextView.prototype.getDefaultEditable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDefaultEditable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onScreenStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onScreenStateChanged(int)}
 **/
android.widget.TextView.prototype.onScreenStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onScreenStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineSpacingExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLineSpacingExtra()}
 **/
android.widget.TextView.prototype.getLineSpacingExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineSpacingExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFilters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setFilters(android.text.InputFilter[])}
 **/
android.widget.TextView.prototype.setFilters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFilters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSaveInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onSaveInstanceState()}
 **/
android.widget.TextView.prototype.onSaveInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSaveInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getHint()}
 **/
android.widget.TextView.prototype.getHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCompoundDrawables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawables(android.graphics.drawable.Drawable, android.graphics.drawable.Drawable, android.graphics.drawable.Drawable, android.graphics.drawable.Drawable)}
 **/
android.widget.TextView.prototype.setCompoundDrawables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCompoundDrawables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMinWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMinWidth(int)}
 **/
android.widget.TextView.prototype.setMinWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMinWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImeOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getImeOptions()}
 **/
android.widget.TextView.prototype.getImeOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImeOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShadowDx
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getShadowDx()}
 **/
android.widget.TextView.prototype.getShadowDx = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShadowDx',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundPaddingStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundPaddingStart()}
 **/
android.widget.TextView.prototype.getCompoundPaddingStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundPaddingStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShadowDy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getShadowDy()}
 **/
android.widget.TextView.prototype.getShadowDy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShadowDy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMaxWidth()}
 **/
android.widget.TextView.prototype.getMaxWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRightPaddingOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getRightPaddingOffset()}
 **/
android.widget.TextView.prototype.getRightPaddingOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRightPaddingOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancelLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#cancelLongPress()}
 **/
android.widget.TextView.prototype.cancelLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancelLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMaxHeight()}
 **/
android.widget.TextView.prototype.getMaxHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTypeface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTypeface()}
 **/
android.widget.TextView.prototype.getTypeface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTypeface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundDrawables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundDrawables()}
 **/
android.widget.TextView.prototype.getCompoundDrawables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundDrawables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setImeOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setImeOptions(int)}
 **/
android.widget.TextView.prototype.setImeOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setImeOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTrackballEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onTrackballEvent(android.view.MotionEvent)}
 **/
android.widget.TextView.prototype.onTrackballEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTrackballEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateInputConnection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onCreateInputConnection(android.view.inputmethod.EditorInfo)}
 **/
android.widget.TextView.prototype.onCreateInputConnection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateInputConnection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onTouchEvent(android.view.MotionEvent)}
 **/
android.widget.TextView.prototype.onTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawableStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#drawableStateChanged()}
 **/
android.widget.TextView.prototype.drawableStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawableStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextColor(int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextColor(android.content.res.ColorStateList)}
 **/
android.widget.TextView.prototype.setTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaxLines
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMaxLines(int)}
 **/
android.widget.TextView.prototype.setMaxLines = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxLines',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setHeight(int)}
 **/
android.widget.TextView.prototype.setHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLineHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getLineHeight()}
 **/
android.widget.TextView.prototype.getLineHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLineHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundDrawablePadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundDrawablePadding()}
 **/
android.widget.TextView.prototype.getCompoundDrawablePadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundDrawablePadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOffsetForPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getOffsetForPosition(float, float)}
 **/
android.widget.TextView.prototype.getOffsetForPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOffsetForPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAllCaps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setAllCaps(boolean)}
 **/
android.widget.TextView.prototype.setAllCaps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAllCaps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTotalPaddingRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTotalPaddingRight()}
 **/
android.widget.TextView.prototype.getTotalPaddingRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTotalPaddingRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMinLines
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMinLines(int)}
 **/
android.widget.TextView.prototype.setMinLines = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMinLines',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
android.widget.TextView.prototype.onConfigurationChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onConfigurationChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPaddingRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setPaddingRelative(int, int, int, int)}
 **/
android.widget.TextView.prototype.setPaddingRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPaddingRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setShadowLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setShadowLayer(float, float, float, int)}
 **/
android.widget.TextView.prototype.setShadowLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setShadowLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTextLocale()}
 **/
android.widget.TextView.prototype.getTextLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFontFeatureSettings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setFontFeatureSettings(java.lang.String)}
 **/
android.widget.TextView.prototype.setFontFeatureSettings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFontFeatureSettings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyDown
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onKeyDown(int, android.view.KeyEvent)}
 **/
android.widget.TextView.prototype.onKeyDown = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyDown',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeVerticalScrollExtent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#computeVerticalScrollExtent()}
 **/
android.widget.TextView.prototype.computeVerticalScrollExtent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeVerticalScrollExtent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEllipsize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getEllipsize()}
 **/
android.widget.TextView.prototype.getEllipsize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEllipsize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomSelectionActionModeCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCustomSelectionActionModeCallback(android.view.ActionMode$Callback)}
 **/
android.widget.TextView.prototype.setCustomSelectionActionModeCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomSelectionActionModeCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMinWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getMinWidth()}
 **/
android.widget.TextView.prototype.getMinWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMinWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHighlightColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getHighlightColor()}
 **/
android.widget.TextView.prototype.getHighlightColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHighlightColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextKeepState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextKeepState(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextKeepState(java.lang.CharSequence, android.widget.TextView$BufferType)}
 **/
android.widget.TextView.prototype.setTextKeepState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextKeepState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransformationMethod
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTransformationMethod()}
 **/
android.widget.TextView.prototype.getTransformationMethod = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformationMethod',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCompoundDrawableTintList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getCompoundDrawableTintList()}
 **/
android.widget.TextView.prototype.getCompoundDrawableTintList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCompoundDrawableTintList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHintTextColors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getHintTextColors()}
 **/
android.widget.TextView.prototype.getHintTextColors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHintTextColors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHighlightColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setHighlightColor(int)}
 **/
android.widget.TextView.prototype.setHighlightColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHighlightColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHorizontallyScrolling
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setHorizontallyScrolling(boolean)}
 **/
android.widget.TextView.prototype.setHorizontallyScrolling = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHorizontallyScrolling',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFreezesText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getFreezesText()}
 **/
android.widget.TextView.prototype.getFreezesText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFreezesText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTextChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onTextChanged(java.lang.CharSequence, int, int, int)}
 **/
android.widget.TextView.prototype.onTextChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTextChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCheckIsTextEditor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onCheckIsTextEditor()}
 **/
android.widget.TextView.prototype.onCheckIsTextEditor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCheckIsTextEditor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function debug
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#debug(int)}
 **/
android.widget.TextView.prototype.debug = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'debug',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMarqueeRepeatLimit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setMarqueeRepeatLimit(int)}
 **/
android.widget.TextView.prototype.setMarqueeRepeatLimit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMarqueeRepeatLimit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowFocusChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onWindowFocusChanged(boolean)}
 **/
android.widget.TextView.prototype.onWindowFocusChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowFocusChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onScrollChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onScrollChanged(int, int, int, int)}
 **/
android.widget.TextView.prototype.onScrollChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onScrollChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function extractText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#extractText(android.view.inputmethod.ExtractedTextRequest, android.view.inputmethod.ExtractedText)}
 **/
android.widget.TextView.prototype.extractText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'extractText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTotalPaddingStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTotalPaddingStart()}
 **/
android.widget.TextView.prototype.getTotalPaddingStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTotalPaddingStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMeasure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#onMeasure(int, int)}
 **/
android.widget.TextView.prototype.onMeasure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMeasure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRightFadingEdgeStrength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getRightFadingEdgeStrength()}
 **/
android.widget.TextView.prototype.getRightFadingEdgeStrength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRightFadingEdgeStrength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextSize(float)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextSize(int, float)}
 **/
android.widget.TextView.prototype.setTextSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLetterSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setLetterSpacing(float)}
 **/
android.widget.TextView.prototype.setLetterSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLetterSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomInsertionActionModeCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCustomInsertionActionModeCallback(android.view.ActionMode$Callback)}
 **/
android.widget.TextView.prototype.setCustomInsertionActionModeCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomInsertionActionModeCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextColors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getTextColors()}
 **/
android.widget.TextView.prototype.getTextColors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextColors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCompoundDrawableTintMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setCompoundDrawableTintMode(android.graphics.PorterDuff$Mode)}
 **/
android.widget.TextView.prototype.setCompoundDrawableTintMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCompoundDrawableTintMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShadowColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getShadowColor()}
 **/
android.widget.TextView.prototype.getShadowColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShadowColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextAppearance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextAppearance(int)}
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#setTextAppearance(android.content.Context, int)}
 **/
android.widget.TextView.prototype.setTextAppearance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextAppearance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectionEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#getSelectionEnd()}
 **/
android.widget.TextView.prototype.getSelectionEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectionEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPaddingOffsetRequired
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/TextView.html#isPaddingOffsetRequired()}
 **/
android.widget.TextView.prototype.isPaddingOffsetRequired = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPaddingOffsetRequired',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.TextView') {
			return new android.widget.TextView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.TextView;
