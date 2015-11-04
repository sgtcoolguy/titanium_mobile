/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewGroup
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ViewGroup
 * @extends android.view.View  * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html}
 **/
android.view.ViewGroup = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.ViewGroup') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.ViewGroup',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.View');
android.view.ViewGroup.prototype = Object.create(SuperClass.prototype);
android.view.ViewGroup.prototype.constructor = android.view.ViewGroup;

android.view.ViewGroup.className = "android.view.ViewGroup";
android.view.ViewGroup.prototype.className = "android.view.ViewGroup";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#LAYOUT_MODE_CLIP_BOUNDS}
 */
android.view.ViewGroup.LAYOUT_MODE_CLIP_BOUNDS = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#PERSISTENT_NO_CACHE}
 */
android.view.ViewGroup.PERSISTENT_NO_CACHE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#PERSISTENT_SCROLLING_CACHE}
 */
android.view.ViewGroup.PERSISTENT_SCROLLING_CACHE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#FOCUS_BEFORE_DESCENDANTS}
 */
android.view.ViewGroup.FOCUS_BEFORE_DESCENDANTS = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#CLIP_TO_PADDING_MASK}
 */
android.view.ViewGroup.CLIP_TO_PADDING_MASK = 34;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#FOCUS_AFTER_DESCENDANTS}
 */
android.view.ViewGroup.FOCUS_AFTER_DESCENDANTS = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#PERSISTENT_ANIMATION_CACHE}
 */
android.view.ViewGroup.PERSISTENT_ANIMATION_CACHE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#LAYOUT_MODE_OPTICAL_BOUNDS}
 */
android.view.ViewGroup.LAYOUT_MODE_OPTICAL_BOUNDS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#PERSISTENT_ALL_CACHES}
 */
android.view.ViewGroup.PERSISTENT_ALL_CACHES = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#FOCUS_BLOCK_DESCENDANTS}
 */
android.view.ViewGroup.FOCUS_BLOCK_DESCENDANTS = 393216;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getChildMeasureSpec
 * @static
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getChildMeasureSpec(int, int, int)}
 **/
android.view.ViewGroup.getChildMeasureSpec = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getChildMeasureSpec',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @function dispatchDisplayHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchDisplayHint(int)}
 **/
android.view.ViewGroup.prototype.dispatchDisplayHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchDisplayHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChildStaticTransformation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getChildStaticTransformation(android.view.View, android.view.animation.Transformation)}
 **/
android.view.ViewGroup.prototype.getChildStaticTransformation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChildStaticTransformation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#generateLayoutParams(android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#generateLayoutParams(android.view.ViewGroup$LayoutParams)}
 **/
android.view.ViewGroup.prototype.generateLayoutParams = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChildVisibleRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getChildVisibleRect(android.view.View, android.graphics.Rect, android.graphics.Point)}
 **/
android.view.ViewGroup.prototype.getChildVisibleRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChildVisibleRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setLayoutAnimation(android.view.animation.LayoutAnimationController)}
 **/
android.view.ViewGroup.prototype.setLayoutAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function indexOfChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#indexOfChild(android.view.View)}
 **/
android.view.ViewGroup.prototype.indexOfChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'indexOfChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAlwaysDrawnWithCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setAlwaysDrawnWithCacheEnabled(boolean)}
 **/
android.view.ViewGroup.prototype.setAlwaysDrawnWithCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAlwaysDrawnWithCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getAccessibilityClassName()}
 **/
android.view.ViewGroup.prototype.getAccessibilityClassName = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getClipChildren()}
 **/
android.view.ViewGroup.prototype.getClipChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detachViewsFromParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#detachViewsFromParent(int, int)}
 **/
android.view.ViewGroup.prototype.detachViewsFromParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detachViewsFromParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cleanupLayoutState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#cleanupLayoutState(android.view.View)}
 **/
android.view.ViewGroup.prototype.cleanupLayoutState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cleanupLayoutState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#drawChild(android.graphics.Canvas, android.view.View, long)}
 **/
android.view.ViewGroup.prototype.drawChild = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchApplyWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchApplyWindowInsets(android.view.WindowInsets)}
 **/
android.view.ViewGroup.prototype.dispatchApplyWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchApplyWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#jumpDrawablesToCurrentState()}
 **/
android.view.ViewGroup.prototype.jumpDrawablesToCurrentState = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStopNestedScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onStopNestedScroll(android.view.View)}
 **/
android.view.ViewGroup.prototype.onStopNestedScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStopNestedScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeViewsInLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#removeViewsInLayout(int, int)}
 **/
android.view.ViewGroup.prototype.removeViewsInLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeViewsInLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNestedScrollAxes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getNestedScrollAxes()}
 **/
android.view.ViewGroup.prototype.getNestedScrollAxes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNestedScrollAxes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onCreateDrawableState(int)}
 **/
android.view.ViewGroup.prototype.onCreateDrawableState = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchThawSelfOnly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchThawSelfOnly(android.util.SparseArray)}
 **/
android.view.ViewGroup.prototype.dispatchThawSelfOnly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchThawSelfOnly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function measureChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#measureChildren(int, int)}
 **/
android.view.ViewGroup.prototype.measureChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'measureChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addChildrenForAccessibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addChildrenForAccessibility(java.util.ArrayList)}
 **/
android.view.ViewGroup.prototype.addChildrenForAccessibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addChildrenForAccessibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onLayout(boolean, int, int, int, int)}
 **/
android.view.ViewGroup.prototype.onLayout = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChildrenDrawingCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setChildrenDrawingCacheEnabled(boolean)}
 **/
android.view.ViewGroup.prototype.setChildrenDrawingCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChildrenDrawingCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnHierarchyChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setOnHierarchyChangeListener(android.view.ViewGroup$OnHierarchyChangeListener)}
 **/
android.view.ViewGroup.prototype.setOnHierarchyChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnHierarchyChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachViewToParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#attachViewToParent(android.view.View, int, android.view.ViewGroup$LayoutParams)}
 **/
android.view.ViewGroup.prototype.attachViewToParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachViewToParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransitionGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setTransitionGroup(boolean)}
 **/
android.view.ViewGroup.prototype.setTransitionGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransitionGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addViewInLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addViewInLayout(android.view.View, int, android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addViewInLayout(android.view.View, int, android.view.ViewGroup$LayoutParams, boolean)}
 **/
android.view.ViewGroup.prototype.addViewInLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addViewInLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#showContextMenuForChild(android.view.View)}
 **/
android.view.ViewGroup.prototype.showContextMenuForChild = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function notifySubtreeAccessibilityStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#notifySubtreeAccessibilityStateChanged(android.view.View, android.view.View, int)}
 **/
android.view.ViewGroup.prototype.notifySubtreeAccessibilityStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'notifySubtreeAccessibilityStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearChildFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#clearChildFocus(android.view.View)}
 **/
android.view.ViewGroup.prototype.clearChildFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearChildFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChildCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getChildCount()}
 **/
android.view.ViewGroup.prototype.getChildCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChildCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addFocusables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addFocusables(java.util.ArrayList, int, int)}
 **/
android.view.ViewGroup.prototype.addFocusables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addFocusables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchGenericPointerEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchGenericPointerEvent(android.view.MotionEvent)}
 **/
android.view.ViewGroup.prototype.dispatchGenericPointerEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchGenericPointerEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#removeView(android.view.View)}
 **/
android.view.ViewGroup.prototype.removeView = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutAnimationListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setLayoutAnimationListener(android.view.animation.Animation$AnimationListener)}
 **/
android.view.ViewGroup.prototype.setLayoutAnimationListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutAnimationListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchSetPressed(boolean)}
 **/
android.view.ViewGroup.prototype.dispatchSetPressed = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchGenericFocusedEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchGenericFocusedEvent(android.view.MotionEvent)}
 **/
android.view.ViewGroup.prototype.dispatchGenericFocusedEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchGenericFocusedEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bringChildToFront
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#bringChildToFront(android.view.View)}
 **/
android.view.ViewGroup.prototype.bringChildToFront = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bringChildToFront',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offsetRectIntoDescendantCoords
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#offsetRectIntoDescendantCoords(android.view.View, android.graphics.Rect)}
 **/
android.view.ViewGroup.prototype.offsetRectIntoDescendantCoords = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offsetRectIntoDescendantCoords',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function childDrawableStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#childDrawableStateChanged(android.view.View)}
 **/
android.view.ViewGroup.prototype.childDrawableStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'childDrawableStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function focusableViewAvailable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#focusableViewAvailable(android.view.View)}
 **/
android.view.ViewGroup.prototype.focusableViewAvailable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'focusableViewAvailable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function measureChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#measureChild(android.view.View, int, int)}
 **/
android.view.ViewGroup.prototype.measureChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'measureChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearDisappearingChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#clearDisappearingChildren()}
 **/
android.view.ViewGroup.prototype.clearDisappearingChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearDisappearingChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function measureChildWithMargins
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#measureChildWithMargins(android.view.View, int, int, int, int)}
 **/
android.view.ViewGroup.prototype.measureChildWithMargins = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'measureChildWithMargins',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMotionEventSplittingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setMotionEventSplittingEnabled(boolean)}
 **/
android.view.ViewGroup.prototype.setMotionEventSplittingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMotionEventSplittingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFocusedChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getFocusedChild()}
 **/
android.view.ViewGroup.prototype.getFocusedChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFocusedChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchKeyEvent(android.view.KeyEvent)}
 **/
android.view.ViewGroup.prototype.dispatchKeyEvent = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startLayoutAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#startLayoutAnimation()}
 **/
android.view.ViewGroup.prototype.startLayoutAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startLayoutAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setLayoutMode(int)}
 **/
android.view.ViewGroup.prototype.setLayoutMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchDraw(android.graphics.Canvas)}
 **/
android.view.ViewGroup.prototype.dispatchDraw = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#removeAllViews()}
 **/
android.view.ViewGroup.prototype.removeAllViews = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addStatesFromChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addStatesFromChildren()}
 **/
android.view.ViewGroup.prototype.addStatesFromChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addStatesFromChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#checkLayoutParams(android.view.ViewGroup$LayoutParams)}
 **/
android.view.ViewGroup.prototype.checkLayoutParams = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#findViewsWithText(java.util.ArrayList, java.lang.CharSequence, int)}
 **/
android.view.ViewGroup.prototype.findViewsWithText = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchWindowSystemUiVisiblityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchWindowSystemUiVisiblityChanged(int)}
 **/
android.view.ViewGroup.prototype.dispatchWindowSystemUiVisiblityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchWindowSystemUiVisiblityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#hasFocus()}
 **/
android.view.ViewGroup.prototype.hasFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateViewLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#updateViewLayout(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
android.view.ViewGroup.prototype.updateViewLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateViewLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onNestedFling(android.view.View, float, float, boolean)}
 **/
android.view.ViewGroup.prototype.onNestedFling = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onAttachedToWindow()}
 **/
android.view.ViewGroup.prototype.onAttachedToWindow = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offsetDescendantRectToMyCoords
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#offsetDescendantRectToMyCoords(android.view.View, android.graphics.Rect)}
 **/
android.view.ViewGroup.prototype.offsetDescendantRectToMyCoords = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offsetDescendantRectToMyCoords',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimationCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setAnimationCacheEnabled(boolean)}
 **/
android.view.ViewGroup.prototype.setAnimationCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimationCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchSaveInstanceState(android.util.SparseArray)}
 **/
android.view.ViewGroup.prototype.dispatchSaveInstanceState = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPersistentDrawingCache
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getPersistentDrawingCache()}
 **/
android.view.ViewGroup.prototype.getPersistentDrawingCache = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPersistentDrawingCache',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#clearFocus()}
 **/
android.view.ViewGroup.prototype.clearFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClipToPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setClipToPadding(boolean)}
 **/
android.view.ViewGroup.prototype.setClipToPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClipToPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDescendantFocusability
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setDescendantFocusability(int)}
 **/
android.view.ViewGroup.prototype.setDescendantFocusability = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDescendantFocusability',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchHoverEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchHoverEvent(android.view.MotionEvent)}
 **/
android.view.ViewGroup.prototype.dispatchHoverEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchHoverEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onInterceptHoverEvent(android.view.MotionEvent)}
 **/
android.view.ViewGroup.prototype.onInterceptHoverEvent = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onStartNestedScroll(android.view.View, android.view.View, int)}
 **/
android.view.ViewGroup.prototype.onStartNestedScroll = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addView(android.view.View, int)}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addView(android.view.View, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addView(android.view.View, android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addView(android.view.View, int, android.view.ViewGroup$LayoutParams)}
 **/
android.view.ViewGroup.prototype.addView = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchUnhandledMove
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchUnhandledMove(android.view.View, int)}
 **/
android.view.ViewGroup.prototype.dispatchUnhandledMove = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchUnhandledMove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTransitionGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#isTransitionGroup()}
 **/
android.view.ViewGroup.prototype.isTransitionGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTransitionGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChildAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getChildAt(int)}
 **/
android.view.ViewGroup.prototype.getChildAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChildAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNestedPreFling
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onNestedPreFling(android.view.View, float, float)}
 **/
android.view.ViewGroup.prototype.onNestedPreFling = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNestedPreFling',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSetActivated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchSetActivated(boolean)}
 **/
android.view.ViewGroup.prototype.dispatchSetActivated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSetActivated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onNestedScrollAccepted(android.view.View, android.view.View, int)}
 **/
android.view.ViewGroup.prototype.onNestedScrollAccepted = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasTransientState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#hasTransientState()}
 **/
android.view.ViewGroup.prototype.hasTransientState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasTransientState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSystemUiVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchSystemUiVisibilityChanged(int)}
 **/
android.view.ViewGroup.prototype.dispatchSystemUiVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSystemUiVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTouchscreenBlocksFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getTouchscreenBlocksFocus()}
 **/
android.view.ViewGroup.prototype.getTouchscreenBlocksFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTouchscreenBlocksFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getLayoutMode()}
 **/
android.view.ViewGroup.prototype.getLayoutMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#requestDisallowInterceptTouchEvent(boolean)}
 **/
android.view.ViewGroup.prototype.requestDisallowInterceptTouchEvent = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRequestSendAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onRequestSendAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
android.view.ViewGroup.prototype.onRequestSendAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRequestSendAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChildDrawingOrder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getChildDrawingOrder(int, int)}
 **/
android.view.ViewGroup.prototype.getChildDrawingOrder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChildDrawingOrder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isChildrenDrawnWithCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#isChildrenDrawnWithCacheEnabled()}
 **/
android.view.ViewGroup.prototype.isChildrenDrawnWithCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChildrenDrawnWithCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchRestoreInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchRestoreInstanceState(android.util.SparseArray)}
 **/
android.view.ViewGroup.prototype.dispatchRestoreInstanceState = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function focusSearch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#focusSearch(android.view.View, int)}
 **/
android.view.ViewGroup.prototype.focusSearch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'focusSearch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchTrackballEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchTrackballEvent(android.view.MotionEvent)}
 **/
android.view.ViewGroup.prototype.dispatchTrackballEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchTrackballEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onViewAdded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onViewAdded(android.view.View)}
 **/
android.view.ViewGroup.prototype.onViewAdded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onViewAdded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNestedPreScroll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onNestedPreScroll(android.view.View, int, int, int[])}
 **/
android.view.ViewGroup.prototype.onNestedPreScroll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNestedPreScroll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isChildrenDrawingOrderEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#isChildrenDrawingOrderEnabled()}
 **/
android.view.ViewGroup.prototype.isChildrenDrawingOrderEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChildrenDrawingOrderEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchWindowFocusChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchWindowFocusChanged(boolean)}
 **/
android.view.ViewGroup.prototype.dispatchWindowFocusChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchWindowFocusChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onViewRemoved
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onViewRemoved(android.view.View)}
 **/
android.view.ViewGroup.prototype.onViewRemoved = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onViewRemoved',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detachViewFromParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#detachViewFromParent(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#detachViewFromParent(int)}
 **/
android.view.ViewGroup.prototype.detachViewFromParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detachViewFromParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function endViewTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#endViewTransition(android.view.View)}
 **/
android.view.ViewGroup.prototype.endViewTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'endViewTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActionModeForChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#startActionModeForChild(android.view.View, android.view.ActionMode$Callback)}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#startActionModeForChild(android.view.View, android.view.ActionMode$Callback, int)}
 **/
android.view.ViewGroup.prototype.startActionModeForChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActionModeForChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#invalidateChild(android.view.View, android.graphics.Rect)}
 **/
android.view.ViewGroup.prototype.invalidateChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestTransparentRegion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#requestTransparentRegion(android.view.View)}
 **/
android.view.ViewGroup.prototype.requestTransparentRegion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestTransparentRegion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchVisibilityChanged(android.view.View, int)}
 **/
android.view.ViewGroup.prototype.dispatchVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchProvideStructure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchProvideStructure(android.view.ViewStructure)}
 **/
android.view.ViewGroup.prototype.dispatchProvideStructure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchProvideStructure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutAnimationListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getLayoutAnimationListener()}
 **/
android.view.ViewGroup.prototype.getLayoutAnimationListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutAnimationListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchDrawableHotspotChanged(float, float)}
 **/
android.view.ViewGroup.prototype.dispatchDrawableHotspotChanged = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scheduleLayoutAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#scheduleLayoutAnimation()}
 **/
android.view.ViewGroup.prototype.scheduleLayoutAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scheduleLayoutAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function gatherTransparentRegion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#gatherTransparentRegion(android.graphics.Region)}
 **/
android.view.ViewGroup.prototype.gatherTransparentRegion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'gatherTransparentRegion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachLayoutAnimationParameters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#attachLayoutAnimationParameters(android.view.View, android.view.ViewGroup$LayoutParams, int, int)}
 **/
android.view.ViewGroup.prototype.attachLayoutAnimationParameters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachLayoutAnimationParameters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getLayoutTransition()}
 **/
android.view.ViewGroup.prototype.getLayoutTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getLayoutAnimation()}
 **/
android.view.ViewGroup.prototype.getLayoutAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchKeyShortcutEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchKeyShortcutEvent(android.view.KeyEvent)}
 **/
android.view.ViewGroup.prototype.dispatchKeyShortcutEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchKeyShortcutEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchKeyEventPreIme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchKeyEventPreIme(android.view.KeyEvent)}
 **/
android.view.ViewGroup.prototype.dispatchKeyEventPreIme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchKeyEventPreIme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setLayoutTransition(android.animation.LayoutTransition)}
 **/
android.view.ViewGroup.prototype.setLayoutTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#drawableStateChanged()}
 **/
android.view.ViewGroup.prototype.drawableStateChanged = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detachAllViewsFromParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#detachAllViewsFromParent()}
 **/
android.view.ViewGroup.prototype.detachAllViewsFromParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detachAllViewsFromParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMotionEventSplittingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#isMotionEventSplittingEnabled()}
 **/
android.view.ViewGroup.prototype.isMotionEventSplittingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMotionEventSplittingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPersistentDrawingCache
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setPersistentDrawingCache(int)}
 **/
android.view.ViewGroup.prototype.setPersistentDrawingCache = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPersistentDrawingCache',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#requestChildRectangleOnScreen(android.view.View, android.graphics.Rect, boolean)}
 **/
android.view.ViewGroup.prototype.requestChildRectangleOnScreen = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDescendantFocusability
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getDescendantFocusability()}
 **/
android.view.ViewGroup.prototype.getDescendantFocusability = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDescendantFocusability',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestChildFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#requestChildFocus(android.view.View, android.view.View)}
 **/
android.view.ViewGroup.prototype.requestChildFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestChildFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeViews
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#removeViews(int, int)}
 **/
android.view.ViewGroup.prototype.removeViews = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeViews',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchConfigurationChanged(android.content.res.Configuration)}
 **/
android.view.ViewGroup.prototype.dispatchConfigurationChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchConfigurationChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function childHasTransientStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#childHasTransientStateChanged(android.view.View, boolean)}
 **/
android.view.ViewGroup.prototype.childHasTransientStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'childHasTransientStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRequestFocusInDescendants
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onRequestFocusInDescendants(int, android.graphics.Rect)}
 **/
android.view.ViewGroup.prototype.onRequestFocusInDescendants = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRequestFocusInDescendants',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchSetSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchSetSelected(boolean)}
 **/
android.view.ViewGroup.prototype.dispatchSetSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchSetSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeAllViewsInLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#removeAllViewsInLayout()}
 **/
android.view.ViewGroup.prototype.removeAllViewsInLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeAllViewsInLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeDetachedView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#removeDetachedView(android.view.View, boolean)}
 **/
android.view.ViewGroup.prototype.removeDetachedView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeDetachedView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTouchscreenBlocksFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setTouchscreenBlocksFocus(boolean)}
 **/
android.view.ViewGroup.prototype.setTouchscreenBlocksFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTouchscreenBlocksFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onInterceptTouchEvent(android.view.MotionEvent)}
 **/
android.view.ViewGroup.prototype.onInterceptTouchEvent = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onNestedScroll(android.view.View, int, int, int, int)}
 **/
android.view.ViewGroup.prototype.onNestedScroll = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#requestFocus(int, android.graphics.Rect)}
 **/
android.view.ViewGroup.prototype.requestFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#removeViewAt(int)}
 **/
android.view.ViewGroup.prototype.removeViewAt = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchDragEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchDragEvent(android.view.DragEvent)}
 **/
android.view.ViewGroup.prototype.dispatchDragEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchDragEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startViewTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#startViewTransition(android.view.View)}
 **/
android.view.ViewGroup.prototype.startViewTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startViewTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#canAnimate()}
 **/
android.view.ViewGroup.prototype.canAnimate = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClipChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setClipChildren(boolean)}
 **/
android.view.ViewGroup.prototype.setClipChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClipChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#generateDefaultLayoutParams()}
 **/
android.view.ViewGroup.prototype.generateDefaultLayoutParams = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchTouchEvent(android.view.MotionEvent)}
 **/
android.view.ViewGroup.prototype.dispatchTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStaticTransformationsEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setStaticTransformationsEnabled(boolean)}
 **/
android.view.ViewGroup.prototype.setStaticTransformationsEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStaticTransformationsEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeViewInLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#removeViewInLayout(android.view.View)}
 **/
android.view.ViewGroup.prototype.removeViewInLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeViewInLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAnimationCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#isAnimationCacheEnabled()}
 **/
android.view.ViewGroup.prototype.isAnimationCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAnimationCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function recomputeViewAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#recomputeViewAttributes(android.view.View)}
 **/
android.view.ViewGroup.prototype.recomputeViewAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recomputeViewAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOverlay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getOverlay()}
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getOverlay()}
 **/
android.view.ViewGroup.prototype.getOverlay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOverlay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipToPadding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#getClipToPadding()}
 **/
android.view.ViewGroup.prototype.getClipToPadding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipToPadding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAddStatesFromChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setAddStatesFromChildren(boolean)}
 **/
android.view.ViewGroup.prototype.setAddStatesFromChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAddStatesFromChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNestedPrePerformAccessibilityAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onNestedPrePerformAccessibilityAction(android.view.View, int, android.os.Bundle)}
 **/
android.view.ViewGroup.prototype.onNestedPrePerformAccessibilityAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNestedPrePerformAccessibilityAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#findFocus()}
 **/
android.view.ViewGroup.prototype.findFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchFreezeSelfOnly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchFreezeSelfOnly(android.util.SparseArray)}
 **/
android.view.ViewGroup.prototype.dispatchFreezeSelfOnly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchFreezeSelfOnly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shouldDelayChildPressedState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#shouldDelayChildPressedState()}
 **/
android.view.ViewGroup.prototype.shouldDelayChildPressedState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shouldDelayChildPressedState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChildrenDrawnWithCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setChildrenDrawnWithCacheEnabled(boolean)}
 **/
android.view.ViewGroup.prototype.setChildrenDrawnWithCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChildrenDrawnWithCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateChildInParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#invalidateChildInParent(int[], android.graphics.Rect)}
 **/
android.view.ViewGroup.prototype.invalidateChildInParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateChildInParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasFocusable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#hasFocusable()}
 **/
android.view.ViewGroup.prototype.hasFocusable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasFocusable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#debug(int)}
 **/
android.view.ViewGroup.prototype.debug = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAlwaysDrawnWithCacheEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#isAlwaysDrawnWithCacheEnabled()}
 **/
android.view.ViewGroup.prototype.isAlwaysDrawnWithCacheEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAlwaysDrawnWithCacheEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchWindowVisibilityChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#dispatchWindowVisibilityChanged(int)}
 **/
android.view.ViewGroup.prototype.dispatchWindowVisibilityChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchWindowVisibilityChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#addTouchables(java.util.ArrayList)}
 **/
android.view.ViewGroup.prototype.addTouchables = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function layout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#layout(int, int, int, int)}
 **/
android.view.ViewGroup.prototype.layout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'layout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChildrenDrawingOrderEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#setChildrenDrawingOrderEnabled(boolean)}
 **/
android.view.ViewGroup.prototype.setChildrenDrawingOrderEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChildrenDrawingOrderEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestSendAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#requestSendAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
android.view.ViewGroup.prototype.requestSendAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestSendAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.html#onDetachedFromWindow()}
 **/
android.view.ViewGroup.prototype.onDetachedFromWindow = function() {
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
		if (result.apiName === 'android.view.ViewGroup') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ViewGroup;
