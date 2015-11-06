/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.ListView
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.ListView
 * @extends android.widget.AbsListView 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html}
 **/
android.widget.ListView = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.widget.ListView') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.ListView',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.widget.AbsListView');
android.widget.ListView.prototype = Object.create(SuperClass.prototype);
android.widget.ListView.prototype.constructor = android.widget.ListView;

android.widget.ListView.className = "android.widget.ListView";
android.widget.ListView.prototype.className = "android.widget.ListView";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setFooterDividersEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setFooterDividersEnabled(boolean)}
 **/
android.widget.ListView.prototype.setFooterDividersEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFooterDividersEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOverscrollFooter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getOverscrollFooter()}
 **/
android.widget.ListView.prototype.getOverscrollFooter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOverscrollFooter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCheckItemIds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getCheckItemIds()}
 **/
android.widget.ListView.prototype.getCheckItemIds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCheckItemIds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#isOpaque()}
 **/
android.widget.ListView.prototype.isOpaque = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#onInitializeAccessibilityNodeInfoForItem(android.view.View, int, android.view.accessibility.AccessibilityNodeInfo)}
 **/
android.widget.ListView.prototype.onInitializeAccessibilityNodeInfoForItem = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#smoothScrollToPosition(int)}
 **/
android.widget.ListView.prototype.smoothScrollToPosition = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getAccessibilityClassName()}
 **/
android.widget.ListView.prototype.getAccessibilityClassName = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOverscrollFooter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setOverscrollFooter(android.graphics.drawable.Drawable)}
 **/
android.widget.ListView.prototype.setOverscrollFooter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOverscrollFooter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function smoothScrollByOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#smoothScrollByOffset(int)}
 **/
android.widget.ListView.prototype.smoothScrollByOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'smoothScrollByOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function drawChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#drawChild(android.graphics.Canvas, android.view.View, long)}
 **/
android.widget.ListView.prototype.drawChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'drawChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setItemsCanFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setItemsCanFocus(boolean)}
 **/
android.widget.ListView.prototype.setItemsCanFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setItemsCanFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findViewWithTagTraversal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#findViewWithTagTraversal(java.lang.Object)}
 **/
android.widget.ListView.prototype.findViewWithTagTraversal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findViewWithTagTraversal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getAdapter()}
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getAdapter()}
 **/
android.widget.ListView.prototype.getAdapter = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHeaderDividersEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setHeaderDividersEnabled(boolean)}
 **/
android.widget.ListView.prototype.setHeaderDividersEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHeaderDividersEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findViewTraversal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#findViewTraversal(int)}
 **/
android.widget.ListView.prototype.findViewTraversal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findViewTraversal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setAdapter(android.widget.ListAdapter)}
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setAdapter(android.widget.Adapter)}
 **/
android.widget.ListView.prototype.setAdapter = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setCacheColorHint(int)}
 **/
android.widget.ListView.prototype.setCacheColorHint = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderViewsCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getHeaderViewsCount()}
 **/
android.widget.ListView.prototype.getHeaderViewsCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderViewsCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function areHeaderDividersEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#areHeaderDividersEnabled()}
 **/
android.widget.ListView.prototype.areHeaderDividersEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'areHeaderDividersEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestChildRectangleOnScreen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#requestChildRectangleOnScreen(android.view.View, android.graphics.Rect, boolean)}
 **/
android.widget.ListView.prototype.requestChildRectangleOnScreen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestChildRectangleOnScreen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setSelection(int)}
 **/
android.widget.ListView.prototype.setSelection = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#onSizeChanged(int, int, int, int)}
 **/
android.widget.ListView.prototype.onSizeChanged = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxScrollAmount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getMaxScrollAmount()}
 **/
android.widget.ListView.prototype.getMaxScrollAmount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxScrollAmount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFinishInflate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#onFinishInflate()}
 **/
android.widget.ListView.prototype.onFinishInflate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFinishInflate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addFooterView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#addFooterView(android.view.View, java.lang.Object, boolean)}
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#addFooterView(android.view.View)}
 **/
android.widget.ListView.prototype.addFooterView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addFooterView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDividerHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getDividerHeight()}
 **/
android.widget.ListView.prototype.getDividerHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDividerHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#onKeyDown(int, android.view.KeyEvent)}
 **/
android.widget.ListView.prototype.onKeyDown = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addHeaderView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#addHeaderView(android.view.View, java.lang.Object, boolean)}
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#addHeaderView(android.view.View)}
 **/
android.widget.ListView.prototype.addHeaderView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addHeaderView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function areFooterDividersEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#areFooterDividersEnabled()}
 **/
android.widget.ListView.prototype.areFooterDividersEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'areFooterDividersEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchKeyEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#dispatchKeyEvent(android.view.KeyEvent)}
 **/
android.widget.ListView.prototype.dispatchKeyEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchKeyEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#canAnimate()}
 **/
android.widget.ListView.prototype.canAnimate = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelectionAfterHeaderView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setSelectionAfterHeaderView()}
 **/
android.widget.ListView.prototype.setSelectionAfterHeaderView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelectionAfterHeaderView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#dispatchDraw(android.graphics.Canvas)}
 **/
android.widget.ListView.prototype.dispatchDraw = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getItemsCanFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getItemsCanFocus()}
 **/
android.widget.ListView.prototype.getItemsCanFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getItemsCanFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDivider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setDivider(android.graphics.drawable.Drawable)}
 **/
android.widget.ListView.prototype.setDivider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDivider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDividerHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setDividerHeight(int)}
 **/
android.widget.ListView.prototype.setDividerHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDividerHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#onKeyUp(int, android.view.KeyEvent)}
 **/
android.widget.ListView.prototype.onKeyUp = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeHeaderView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#removeHeaderView(android.view.View)}
 **/
android.widget.ListView.prototype.removeHeaderView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeHeaderView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeFooterView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#removeFooterView(android.view.View)}
 **/
android.widget.ListView.prototype.removeFooterView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeFooterView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#layoutChildren()}
 **/
android.widget.ListView.prototype.layoutChildren = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOverscrollHeader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getOverscrollHeader()}
 **/
android.widget.ListView.prototype.getOverscrollHeader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOverscrollHeader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setRemoteViewsAdapter(android.content.Intent)}
 **/
android.widget.ListView.prototype.setRemoteViewsAdapter = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#onMeasure(int, int)}
 **/
android.widget.ListView.prototype.onMeasure = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#onFocusChanged(boolean, int, android.graphics.Rect)}
 **/
android.widget.ListView.prototype.onFocusChanged = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOverscrollHeader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#setOverscrollHeader(android.graphics.drawable.Drawable)}
 **/
android.widget.ListView.prototype.setOverscrollHeader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOverscrollHeader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#onKeyMultiple(int, int, android.view.KeyEvent)}
 **/
android.widget.ListView.prototype.onKeyMultiple = function() {
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
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDivider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getDivider()}
 **/
android.widget.ListView.prototype.getDivider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDivider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFooterViewsCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/ListView.html#getFooterViewsCount()}
 **/
android.widget.ListView.prototype.getFooterViewsCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFooterViewsCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.ListView') {
			return new android.widget.ListView(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.ListView;
