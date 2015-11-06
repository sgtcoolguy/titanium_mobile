/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.AbsListView
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.AbsListView
 * @extends android.widget.AdapterView 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html}
 **/
android.widget.AbsListView = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.AbsListView') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.AbsListView',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.widget.AdapterView');
android.widget.AbsListView.prototype = Object.create(SuperClass.prototype);
android.widget.AbsListView.prototype.constructor = android.widget.AbsListView;

android.widget.AbsListView.className = "android.widget.AbsListView";
android.widget.AbsListView.prototype.className = "android.widget.AbsListView";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#TRANSCRIPT_MODE_DISABLED}
 */
android.widget.AbsListView.TRANSCRIPT_MODE_DISABLED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#TRANSCRIPT_MODE_ALWAYS_SCROLL}
 */
android.widget.AbsListView.TRANSCRIPT_MODE_ALWAYS_SCROLL = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#TRANSCRIPT_MODE_NORMAL}
 */
android.widget.AbsListView.TRANSCRIPT_MODE_NORMAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#CHOICE_MODE_SINGLE}
 */
android.widget.AbsListView.CHOICE_MODE_SINGLE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#CHOICE_MODE_NONE}
 */
android.widget.AbsListView.CHOICE_MODE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#CHOICE_MODE_MULTIPLE_MODAL}
 */
android.widget.AbsListView.CHOICE_MODE_MULTIPLE_MODAL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#CHOICE_MODE_MULTIPLE}
 */
android.widget.AbsListView.CHOICE_MODE_MULTIPLE = 2;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setScrollIndicators
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setScrollIndicators(android.view.View, android.view.View)}
 **/
android.widget.AbsListView.prototype.setScrollIndicators = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollIndicators',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#generateLayoutParams(android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#generateLayoutParams(android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#generateLayoutParams(android.util.AttributeSet)}
 **/
android.widget.AbsListView.prototype.generateLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getListPaddingRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getListPaddingRight()}
 **/
android.widget.AbsListView.prototype.getListPaddingRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getListPaddingRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCacheColorHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getCacheColorHint()}
 **/
android.widget.AbsListView.prototype.getCacheColorHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCacheColorHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getAccessibilityClassName()}
 **/
android.widget.AbsListView.prototype.getAccessibilityClassName = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFilterText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setFilterText(java.lang.String)}
 **/
android.widget.AbsListView.prototype.setFilterText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFilterText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performItemClick
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#performItemClick(android.view.View, int, long)}
 **/
android.widget.AbsListView.prototype.performItemClick = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performItemClick',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRemoteAdapterConnected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onRemoteAdapterConnected()}
 **/
android.widget.AbsListView.prototype.onRemoteAdapterConnected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRemoteAdapterConnected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#jumpDrawablesToCurrentState()}
 **/
android.widget.AbsListView.prototype.jumpDrawablesToCurrentState = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTopFadingEdgeStrength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getTopFadingEdgeStrength()}
 **/
android.widget.AbsListView.prototype.getTopFadingEdgeStrength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTopFadingEdgeStrength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAdapter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setAdapter(android.widget.ListAdapter)}
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setAdapter(android.widget.Adapter)}
 **/
android.widget.AbsListView.prototype.setAdapter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAdapter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSmoothScrollbarEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setSmoothScrollbarEnabled(boolean)}
 **/
android.widget.AbsListView.prototype.setSmoothScrollbarEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSmoothScrollbarEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onLayout(boolean, int, int, int, int)}
 **/
android.widget.AbsListView.prototype.onLayout = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCancelPendingInputEvents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onCancelPendingInputEvents()}
 **/
android.widget.AbsListView.prototype.onCancelPendingInputEvents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCancelPendingInputEvents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCacheColorHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setCacheColorHint(int)}
 **/
android.widget.AbsListView.prototype.setCacheColorHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCacheColorHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getLeftPaddingOffset()}
 **/
android.widget.AbsListView.prototype.getLeftPaddingOffset = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#computeVerticalScrollRange()}
 **/
android.widget.AbsListView.prototype.computeVerticalScrollRange = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function afterTextChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#afterTextChanged(android.text.Editable)}
 **/
android.widget.AbsListView.prototype.afterTextChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'afterTextChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getTextFilter()}
 **/
android.widget.AbsListView.prototype.getTextFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showContextMenuForChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#showContextMenuForChild(android.view.View)}
 **/
android.widget.AbsListView.prototype.showContextMenuForChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showContextMenuForChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getListPaddingLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getListPaddingLeft()}
 **/
android.widget.AbsListView.prototype.getListPaddingLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getListPaddingLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#verifyDrawable(android.graphics.drawable.Drawable)}
 **/
android.widget.AbsListView.prototype.verifyDrawable = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSetPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#dispatchSetPressed(boolean)}
 **/
android.widget.AbsListView.prototype.dispatchSetPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSetPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pointToRowId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#pointToRowId(int, int)}
 **/
android.widget.AbsListView.prototype.pointToRowId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pointToRowId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#requestLayout()}
 **/
android.widget.AbsListView.prototype.requestLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSizeChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onSizeChanged(int, int, int, int)}
 **/
android.widget.AbsListView.prototype.onSizeChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSizeChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectedView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getSelectedView()}
 **/
android.widget.AbsListView.prototype.getSelectedView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectedView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beforeTextChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#beforeTextChanged(java.lang.CharSequence, int, int, int)}
 **/
android.widget.AbsListView.prototype.beforeTextChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beforeTextChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCheckedItemPositions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getCheckedItemPositions()}
 **/
android.widget.AbsListView.prototype.getCheckedItemPositions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCheckedItemPositions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeVerticalScrollOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#computeVerticalScrollOffset()}
 **/
android.widget.AbsListView.prototype.computeVerticalScrollOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeVerticalScrollOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStackFromBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setStackFromBottom(boolean)}
 **/
android.widget.AbsListView.prototype.setStackFromBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStackFromBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTouchModeChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onTouchModeChanged(boolean)}
 **/
android.widget.AbsListView.prototype.onTouchModeChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTouchModeChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getListPaddingTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getListPaddingTop()}
 **/
android.widget.AbsListView.prototype.getListPaddingTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getListPaddingTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function smoothScrollBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#smoothScrollBy(int, int)}
 **/
android.widget.AbsListView.prototype.smoothScrollBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'smoothScrollBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCheckedItemCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getCheckedItemCount()}
 **/
android.widget.AbsListView.prototype.getCheckedItemCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCheckedItemCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFastScrollAlwaysVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isFastScrollAlwaysVisible()}
 **/
android.widget.AbsListView.prototype.isFastScrollAlwaysVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFastScrollAlwaysVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reclaimViews
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#reclaimViews(java.util.List)}
 **/
android.widget.AbsListView.prototype.reclaimViews = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reclaimViews',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onRtlPropertiesChanged(int)}
 **/
android.widget.AbsListView.prototype.onRtlPropertiesChanged = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVelocityScale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setVelocityScale(float)}
 **/
android.widget.AbsListView.prototype.setVelocityScale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVelocityScale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#dispatchDraw(android.graphics.Canvas)}
 **/
android.widget.AbsListView.prototype.dispatchDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getTopPaddingOffset()}
 **/
android.widget.AbsListView.prototype.getTopPaddingOffset = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRecyclerListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setRecyclerListener(android.widget.AbsListView$RecyclerListener)}
 **/
android.widget.AbsListView.prototype.setRecyclerListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRecyclerListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVerticalScrollbarWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getVerticalScrollbarWidth()}
 **/
android.widget.AbsListView.prototype.getVerticalScrollbarWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVerticalScrollbarWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#checkLayoutParams(android.view.ViewGroup$LayoutParams)}
 **/
android.widget.AbsListView.prototype.checkLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getFocusedRect(android.graphics.Rect)}
 **/
android.widget.AbsListView.prototype.getFocusedRect = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNestedFling
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onNestedFling(android.view.View, float, float, boolean)}
 **/
android.widget.AbsListView.prototype.onNestedFling = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNestedFling',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onAttachedToWindow()}
 **/
android.widget.AbsListView.prototype.onAttachedToWindow = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMultiChoiceModeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setMultiChoiceModeListener(android.widget.AbsListView$MultiChoiceModeListener)}
 **/
android.widget.AbsListView.prototype.setMultiChoiceModeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMultiChoiceModeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onKeyUp(int, android.view.KeyEvent)}
 **/
android.widget.AbsListView.prototype.onKeyUp = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollingCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setScrollingCacheEnabled(boolean)}
 **/
android.widget.AbsListView.prototype.setScrollingCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollingCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInterceptHoverEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onInterceptHoverEvent(android.view.MotionEvent)}
 **/
android.widget.AbsListView.prototype.onInterceptHoverEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInterceptHoverEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRemoteViewsAdapter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setRemoteViewsAdapter(android.content.Intent)}
 **/
android.widget.AbsListView.prototype.setRemoteViewsAdapter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRemoteViewsAdapter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStartNestedScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onStartNestedScroll(android.view.View, android.view.View, int)}
 **/
android.widget.AbsListView.prototype.onStartNestedScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStartNestedScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#draw(android.graphics.Canvas)}
 **/
android.widget.AbsListView.prototype.draw = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onFocusChanged(boolean, int, android.graphics.Rect)}
 **/
android.widget.AbsListView.prototype.onFocusChanged = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNestedScrollAccepted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onNestedScrollAccepted(android.view.View, android.view.View, int)}
 **/
android.widget.AbsListView.prototype.onNestedScrollAccepted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNestedScrollAccepted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInFilterMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isInFilterMode()}
 **/
android.widget.AbsListView.prototype.isInFilterMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInFilterMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onSaveInstanceState()}
 **/
android.widget.AbsListView.prototype.onSaveInstanceState = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pointToPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#pointToPosition(int, int)}
 **/
android.widget.AbsListView.prototype.pointToPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pointToPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestDisallowInterceptTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#requestDisallowInterceptTouchEvent(boolean)}
 **/
android.widget.AbsListView.prototype.requestDisallowInterceptTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestDisallowInterceptTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelectionFromTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setSelectionFromTop(int, int)}
 **/
android.widget.AbsListView.prototype.setSelectionFromTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelectionFromTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTextFilterEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isTextFilterEnabled()}
 **/
android.widget.AbsListView.prototype.isTextFilterEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTextFilterEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isStackFromBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isStackFromBottom()}
 **/
android.widget.AbsListView.prototype.isStackFromBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isStackFromBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVerticalScrollbarPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setVerticalScrollbarPosition(int)}
 **/
android.widget.AbsListView.prototype.setVerticalScrollbarPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVerticalScrollbarPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInitializeAccessibilityNodeInfoForItem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onInitializeAccessibilityNodeInfoForItem(android.view.View, int, android.view.accessibility.AccessibilityNodeInfo)}
 **/
android.widget.AbsListView.prototype.onInitializeAccessibilityNodeInfoForItem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInitializeAccessibilityNodeInfoForItem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearChoices
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#clearChoices()}
 **/
android.widget.AbsListView.prototype.clearChoices = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearChoices',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function smoothScrollToPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#smoothScrollToPosition(int)}
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#smoothScrollToPosition(int, int)}
 **/
android.widget.AbsListView.prototype.smoothScrollToPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'smoothScrollToPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fling
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#fling(int)}
 **/
android.widget.AbsListView.prototype.fling = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fling',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isScrollingCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isScrollingCacheEnabled()}
 **/
android.widget.AbsListView.prototype.isScrollingCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isScrollingCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSolidColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getSolidColor()}
 **/
android.widget.AbsListView.prototype.getSolidColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSolidColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextFilterEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setTextFilterEnabled(boolean)}
 **/
android.widget.AbsListView.prototype.setTextFilterEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextFilterEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCheckedItemPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getCheckedItemPosition()}
 **/
android.widget.AbsListView.prototype.getCheckedItemPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCheckedItemPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasTextFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#hasTextFilter()}
 **/
android.widget.AbsListView.prototype.hasTextFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasTextFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getRightPaddingOffset()}
 **/
android.widget.AbsListView.prototype.getRightPaddingOffset = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onOverScrolled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onOverScrolled(int, int, boolean, boolean)}
 **/
android.widget.AbsListView.prototype.onOverScrolled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onOverScrolled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFastScrollEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isFastScrollEnabled()}
 **/
android.widget.AbsListView.prototype.isFastScrollEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFastScrollEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearTextFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#clearTextFilter()}
 **/
android.widget.AbsListView.prototype.clearTextFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearTextFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getListPaddingBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getListPaddingBottom()}
 **/
android.widget.AbsListView.prototype.getListPaddingBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getListPaddingBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchDrawableHotspotChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#dispatchDrawableHotspotChanged(float, float)}
 **/
android.widget.AbsListView.prototype.dispatchDrawableHotspotChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchDrawableHotspotChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSmoothScrollbarEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isSmoothScrollbarEnabled()}
 **/
android.widget.AbsListView.prototype.isSmoothScrollbarEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSmoothScrollbarEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBottomFadingEdgeStrength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getBottomFadingEdgeStrength()}
 **/
android.widget.AbsListView.prototype.getBottomFadingEdgeStrength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBottomFadingEdgeStrength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFilterComplete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onFilterComplete(int)}
 **/
android.widget.AbsListView.prototype.onFilterComplete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFilterComplete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onCreateInputConnection(android.view.inputmethod.EditorInfo)}
 **/
android.widget.AbsListView.prototype.onCreateInputConnection = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onTouchEvent(android.view.MotionEvent)}
 **/
android.widget.AbsListView.prototype.onTouchEvent = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#drawableStateChanged()}
 **/
android.widget.AbsListView.prototype.drawableStateChanged = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFastScrollEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setFastScrollEnabled(boolean)}
 **/
android.widget.AbsListView.prototype.setFastScrollEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFastScrollEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChoiceMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setChoiceMode(int)}
 **/
android.widget.AbsListView.prototype.setChoiceMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChoiceMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scrollListBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#scrollListBy(int)}
 **/
android.widget.AbsListView.prototype.scrollListBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scrollListBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTranscriptMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setTranscriptMode(int)}
 **/
android.widget.AbsListView.prototype.setTranscriptMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTranscriptMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateViews
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#invalidateViews()}
 **/
android.widget.AbsListView.prototype.invalidateViews = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateViews',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getSelector()}
 **/
android.widget.AbsListView.prototype.getSelector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onGenericMotionEvent(android.view.MotionEvent)}
 **/
android.widget.AbsListView.prototype.onGenericMotionEvent = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function smoothScrollToPositionFromTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#smoothScrollToPositionFromTop(int, int, int)}
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#smoothScrollToPositionFromTop(int, int)}
 **/
android.widget.AbsListView.prototype.smoothScrollToPositionFromTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'smoothScrollToPositionFromTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTranscriptMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getTranscriptMode()}
 **/
android.widget.AbsListView.prototype.getTranscriptMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTranscriptMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDisplayHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onDisplayHint(int)}
 **/
android.widget.AbsListView.prototype.onDisplayHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDisplayHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFastScrollStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setFastScrollStyle(int)}
 **/
android.widget.AbsListView.prototype.setFastScrollStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFastScrollStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onKeyDown(int, android.view.KeyEvent)}
 **/
android.widget.AbsListView.prototype.onKeyDown = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNestedScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onNestedScroll(android.view.View, int, int, int, int)}
 **/
android.widget.AbsListView.prototype.onNestedScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNestedScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInterceptTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onInterceptTouchEvent(android.view.MotionEvent)}
 **/
android.widget.AbsListView.prototype.onInterceptTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInterceptTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnScrollListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setOnScrollListener(android.widget.AbsListView$OnScrollListener)}
 **/
android.widget.AbsListView.prototype.setOnScrollListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnScrollListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onRestoreInstanceState(android.os.Parcelable)}
 **/
android.widget.AbsListView.prototype.onRestoreInstanceState = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getBottomPaddingOffset()}
 **/
android.widget.AbsListView.prototype.getBottomPaddingOffset = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#computeVerticalScrollExtent()}
 **/
android.widget.AbsListView.prototype.computeVerticalScrollExtent = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOverScrollMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setOverScrollMode(int)}
 **/
android.widget.AbsListView.prototype.setOverScrollMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOverScrollMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deferNotifyDataSetChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#deferNotifyDataSetChanged()}
 **/
android.widget.AbsListView.prototype.deferNotifyDataSetChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deferNotifyDataSetChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateDefaultLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#generateDefaultLayoutParams()}
 **/
android.widget.AbsListView.prototype.generateDefaultLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateDefaultLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCheckedItemIds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getCheckedItemIds()}
 **/
android.widget.AbsListView.prototype.getCheckedItemIds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCheckedItemIds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollBarStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setScrollBarStyle(int)}
 **/
android.widget.AbsListView.prototype.setScrollBarStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollBarStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function handleDataChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#handleDataChanged()}
 **/
android.widget.AbsListView.prototype.handleDataChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'handleDataChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onGlobalLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onGlobalLayout()}
 **/
android.widget.AbsListView.prototype.onGlobalLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onGlobalLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFriction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setFriction(float)}
 **/
android.widget.AbsListView.prototype.setFriction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFriction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkInputConnectionProxy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#checkInputConnectionProxy(android.view.View)}
 **/
android.widget.AbsListView.prototype.checkInputConnectionProxy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkInputConnectionProxy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onTextChanged(java.lang.CharSequence, int, int, int)}
 **/
android.widget.AbsListView.prototype.onTextChanged = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFastScrollAlwaysVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setFastScrollAlwaysVisible(boolean)}
 **/
android.widget.AbsListView.prototype.setFastScrollAlwaysVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFastScrollAlwaysVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function layoutChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#layoutChildren()}
 **/
android.widget.AbsListView.prototype.layoutChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'layoutChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onWindowFocusChanged(boolean)}
 **/
android.widget.AbsListView.prototype.onWindowFocusChanged = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isItemChecked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isItemChecked(int)}
 **/
android.widget.AbsListView.prototype.isItemChecked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isItemChecked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onMeasure(int, int)}
 **/
android.widget.AbsListView.prototype.onMeasure = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRemoteAdapterDisconnected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onRemoteAdapterDisconnected()}
 **/
android.widget.AbsListView.prototype.onRemoteAdapterDisconnected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRemoteAdapterDisconnected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addTouchables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#addTouchables(java.util.ArrayList)}
 **/
android.widget.AbsListView.prototype.addTouchables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTouchables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContextMenuInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getContextMenuInfo()}
 **/
android.widget.AbsListView.prototype.getContextMenuInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContextMenuInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChoiceMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#getChoiceMode()}
 **/
android.widget.AbsListView.prototype.getChoiceMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChoiceMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setItemChecked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setItemChecked(int, boolean)}
 **/
android.widget.AbsListView.prototype.setItemChecked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setItemChecked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDrawSelectorOnTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setDrawSelectorOnTop(boolean)}
 **/
android.widget.AbsListView.prototype.setDrawSelectorOnTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDrawSelectorOnTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setSelector(int)}
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#setSelector(android.graphics.drawable.Drawable)}
 **/
android.widget.AbsListView.prototype.setSelector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canScrollList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#canScrollList(int)}
 **/
android.widget.AbsListView.prototype.canScrollList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canScrollList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDetachedFromWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#onDetachedFromWindow()}
 **/
android.widget.AbsListView.prototype.onDetachedFromWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDetachedFromWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AbsListView.html#isPaddingOffsetRequired()}
 **/
android.widget.AbsListView.prototype.isPaddingOffsetRequired = function() {
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
		if (result.apiName === 'android.widget.AbsListView') {
			return new android.widget.AbsListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.AbsListView;
