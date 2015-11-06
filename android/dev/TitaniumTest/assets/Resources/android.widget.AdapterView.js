/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.AdapterView
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.AdapterView
 * @extends android.view.ViewGroup 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html}
 **/
android.widget.AdapterView = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.AdapterView') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.AdapterView',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup');
android.widget.AdapterView.prototype = Object.create(SuperClass.prototype);
android.widget.AdapterView.prototype.constructor = android.widget.AdapterView;

android.widget.AdapterView.className = "android.widget.AdapterView";
android.widget.AdapterView.prototype.className = "android.widget.AdapterView";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#INVALID_ROW_ID}
 */
android.widget.AdapterView.INVALID_ROW_ID = -9223372036854775808;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#ITEM_VIEW_TYPE_HEADER_OR_FOOTER}
 */
android.widget.AdapterView.ITEM_VIEW_TYPE_HEADER_OR_FOOTER = -2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#ITEM_VIEW_TYPE_IGNORE}
 */
android.widget.AdapterView.ITEM_VIEW_TYPE_IGNORE = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#INVALID_POSITION}
 */
android.widget.AdapterView.INVALID_POSITION = -1;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function dispatchRestoreInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#dispatchRestoreInstanceState(android.util.SparseArray)}
 **/
android.widget.AdapterView.prototype.dispatchRestoreInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchRestoreInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeViewAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#removeViewAt(int)}
 **/
android.widget.AdapterView.prototype.removeViewAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeViewAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFirstVisiblePosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getFirstVisiblePosition()}
 **/
android.widget.AdapterView.prototype.getFirstVisiblePosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFirstVisiblePosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnItemClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setOnItemClickListener(android.widget.AdapterView$OnItemClickListener)}
 **/
android.widget.AdapterView.prototype.setOnItemClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnItemClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canAnimate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#canAnimate()}
 **/
android.widget.AdapterView.prototype.canAnimate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canAnimate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOnItemLongClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getOnItemLongClickListener()}
 **/
android.widget.AdapterView.prototype.getOnItemLongClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOnItemLongClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getAccessibilityClassName()}
 **/
android.widget.AdapterView.prototype.getAccessibilityClassName = function() {
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
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEmptyView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setEmptyView(android.view.View)}
 **/
android.widget.AdapterView.prototype.setEmptyView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEmptyView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnItemLongClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setOnItemLongClickListener(android.widget.AdapterView$OnItemLongClickListener)}
 **/
android.widget.AdapterView.prototype.setOnItemLongClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnItemLongClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPositionForView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getPositionForView(android.view.View)}
 **/
android.widget.AdapterView.prototype.getPositionForView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPositionForView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeAllViews
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#removeAllViews()}
 **/
android.widget.AdapterView.prototype.removeAllViews = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeAllViews',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectedItemPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getSelectedItemPosition()}
 **/
android.widget.AdapterView.prototype.getSelectedItemPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectedItemPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFocusableInTouchMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setFocusableInTouchMode(boolean)}
 **/
android.widget.AdapterView.prototype.setFocusableInTouchMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFocusableInTouchMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectedItemId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getSelectedItemId()}
 **/
android.widget.AdapterView.prototype.getSelectedItemId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectedItemId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLastVisiblePosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getLastVisiblePosition()}
 **/
android.widget.AdapterView.prototype.getLastVisiblePosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastVisiblePosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getItemIdAtPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getItemIdAtPosition(int)}
 **/
android.widget.AdapterView.prototype.getItemIdAtPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getItemIdAtPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#performItemClick(android.view.View, int, long)}
 **/
android.widget.AdapterView.prototype.performItemClick = function() {
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
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEmptyView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getEmptyView()}
 **/
android.widget.AdapterView.prototype.getEmptyView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEmptyView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getItemAtPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getItemAtPosition(int)}
 **/
android.widget.AdapterView.prototype.getItemAtPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getItemAtPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getCount()}
 **/
android.widget.AdapterView.prototype.getCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOnItemClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getOnItemClickListener()}
 **/
android.widget.AdapterView.prototype.getOnItemClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOnItemClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectedItem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getSelectedItem()}
 **/
android.widget.AdapterView.prototype.getSelectedItem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectedItem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAdapter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getAdapter()}
 **/
android.widget.AdapterView.prototype.getAdapter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAdapter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnItemSelectedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setOnItemSelectedListener(android.widget.AdapterView$OnItemSelectedListener)}
 **/
android.widget.AdapterView.prototype.setOnItemSelectedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnItemSelectedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSaveInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#dispatchSaveInstanceState(android.util.SparseArray)}
 **/
android.widget.AdapterView.prototype.dispatchSaveInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSaveInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setAdapter(android.widget.Adapter)}
 **/
android.widget.AdapterView.prototype.setAdapter = function() {
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
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#onLayout(boolean, int, int, int, int)}
 **/
android.widget.AdapterView.prototype.onLayout = function() {
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
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOnItemSelectedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getOnItemSelectedListener()}
 **/
android.widget.AdapterView.prototype.getOnItemSelectedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOnItemSelectedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFocusable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setFocusable(boolean)}
 **/
android.widget.AdapterView.prototype.setFocusable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFocusable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#addView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#addView(android.view.View, int)}
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#addView(android.view.View, android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#addView(android.view.View, int, android.view.ViewGroup$LayoutParams)}
 **/
android.widget.AdapterView.prototype.addView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setOnClickListener(android.view.View$OnClickListener)}
 **/
android.widget.AdapterView.prototype.setOnClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#removeView(android.view.View)}
 **/
android.widget.AdapterView.prototype.removeView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#setSelection(int)}
 **/
android.widget.AdapterView.prototype.setSelection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#getSelectedView()}
 **/
android.widget.AdapterView.prototype.getSelectedView = function() {
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
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/AdapterView.html#onDetachedFromWindow()}
 **/
android.widget.AdapterView.prototype.onDetachedFromWindow = function() {
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
		if (result.apiName === 'android.widget.AdapterView') {
			return new android.widget.AdapterView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.AdapterView;
