/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.ActionBar
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.ActionBar
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html}
 **/
android.app.ActionBar = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.ActionBar') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.ActionBar',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.ActionBar.prototype = Object.create(SuperClass.prototype);
android.app.ActionBar.prototype.constructor = android.app.ActionBar;

android.app.ActionBar.className = "android.app.ActionBar";
android.app.ActionBar.prototype.className = "android.app.ActionBar";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_SHOW_TITLE}
 */
android.app.ActionBar.DISPLAY_SHOW_TITLE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#NAVIGATION_MODE_TABS}
 */
android.app.ActionBar.NAVIGATION_MODE_TABS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_SHOW_HOME}
 */
android.app.ActionBar.DISPLAY_SHOW_HOME = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#NAVIGATION_MODE_LIST}
 */
android.app.ActionBar.NAVIGATION_MODE_LIST = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#NAVIGATION_MODE_STANDARD}
 */
android.app.ActionBar.NAVIGATION_MODE_STANDARD = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_HOME_AS_UP}
 */
android.app.ActionBar.DISPLAY_HOME_AS_UP = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_SHOW_CUSTOM}
 */
android.app.ActionBar.DISPLAY_SHOW_CUSTOM = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_USE_LOGO}
 */
android.app.ActionBar.DISPLAY_USE_LOGO = 1;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function addTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addTab(android.app.ActionBar$Tab)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addTab(android.app.ActionBar$Tab, boolean)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addTab(android.app.ActionBar$Tab, int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addTab(android.app.ActionBar$Tab, int, boolean)}
 **/
android.app.ActionBar.prototype.addTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationItemCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getNavigationItemCount()}
 **/
android.app.ActionBar.prototype.getNavigationItemCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationItemCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSubtitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getSubtitle()}
 **/
android.app.ActionBar.prototype.getSubtitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSubtitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayUseLogoEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayUseLogoEnabled(boolean)}
 **/
android.app.ActionBar.prototype.setDisplayUseLogoEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayUseLogoEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getNavigationMode()}
 **/
android.app.ActionBar.prototype.getNavigationMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setListNavigationCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setListNavigationCallbacks(android.widget.SpinnerAdapter, android.app.ActionBar$OnNavigationListener)}
 **/
android.app.ActionBar.prototype.setListNavigationCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setListNavigationCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayShowCustomEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayShowCustomEnabled(boolean)}
 **/
android.app.ActionBar.prototype.setDisplayShowCustomEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayShowCustomEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHomeActionContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeActionContentDescription(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeActionContentDescription(int)}
 **/
android.app.ActionBar.prototype.setHomeActionContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHomeActionContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getElevation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getElevation()}
 **/
android.app.ActionBar.prototype.getElevation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getElevation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isShowing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#isShowing()}
 **/
android.app.ActionBar.prototype.isShowing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isShowing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getTitle()}
 **/
android.app.ActionBar.prototype.getTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getDisplayOptions()}
 **/
android.app.ActionBar.prototype.getDisplayOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStackedBackgroundDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setStackedBackgroundDrawable(android.graphics.drawable.Drawable)}
 **/
android.app.ActionBar.prototype.setStackedBackgroundDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStackedBackgroundDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHideOnContentScrollEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#isHideOnContentScrollEnabled()}
 **/
android.app.ActionBar.prototype.isHideOnContentScrollEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHideOnContentScrollEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#removeTab(android.app.ActionBar$Tab)}
 **/
android.app.ActionBar.prototype.removeTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayOptions(int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayOptions(int, int)}
 **/
android.app.ActionBar.prototype.setDisplayOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setCustomView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setCustomView(android.view.View, android.app.ActionBar$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setCustomView(int)}
 **/
android.app.ActionBar.prototype.setCustomView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnMenuVisibilityListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addOnMenuVisibilityListener(android.app.ActionBar$OnMenuVisibilityListener)}
 **/
android.app.ActionBar.prototype.addOnMenuVisibilityListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnMenuVisibilityListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setTitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setTitle(int)}
 **/
android.app.ActionBar.prototype.setTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#newTab()}
 **/
android.app.ActionBar.prototype.newTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setIcon(int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setIcon(android.graphics.drawable.Drawable)}
 **/
android.app.ActionBar.prototype.setIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setBackgroundDrawable(android.graphics.drawable.Drawable)}
 **/
android.app.ActionBar.prototype.setBackgroundDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayShowHomeEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayShowHomeEnabled(boolean)}
 **/
android.app.ActionBar.prototype.setDisplayShowHomeEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayShowHomeEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayShowTitleEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayShowTitleEnabled(boolean)}
 **/
android.app.ActionBar.prototype.setDisplayShowTitleEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayShowTitleEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectedTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getSelectedTab()}
 **/
android.app.ActionBar.prototype.getSelectedTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectedTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHomeButtonEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeButtonEnabled(boolean)}
 **/
android.app.ActionBar.prototype.setHomeButtonEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHomeButtonEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function selectTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#selectTab(android.app.ActionBar$Tab)}
 **/
android.app.ActionBar.prototype.selectTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'selectTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHideOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHideOffset(int)}
 **/
android.app.ActionBar.prototype.setHideOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHideOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectedNavigationIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getSelectedNavigationIndex()}
 **/
android.app.ActionBar.prototype.getSelectedNavigationIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectedNavigationIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function show
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#show()}
 **/
android.app.ActionBar.prototype.show = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'show',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTabCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getTabCount()}
 **/
android.app.ActionBar.prototype.getTabCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTabCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelectedNavigationItem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setSelectedNavigationItem(int)}
 **/
android.app.ActionBar.prototype.setSelectedNavigationItem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelectedNavigationItem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
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
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getHeight()}
 **/
android.app.ActionBar.prototype.getHeight = function() {
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
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSplitBackgroundDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setSplitBackgroundDrawable(android.graphics.drawable.Drawable)}
 **/
android.app.ActionBar.prototype.setSplitBackgroundDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSplitBackgroundDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCustomView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getCustomView()}
 **/
android.app.ActionBar.prototype.getCustomView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCustomView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnMenuVisibilityListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#removeOnMenuVisibilityListener(android.app.ActionBar$OnMenuVisibilityListener)}
 **/
android.app.ActionBar.prototype.removeOnMenuVisibilityListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnMenuVisibilityListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTabAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#removeTabAt(int)}
 **/
android.app.ActionBar.prototype.removeTabAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTabAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubtitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setSubtitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setSubtitle(int)}
 **/
android.app.ActionBar.prototype.setSubtitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubtitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHomeAsUpIndicator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeAsUpIndicator(android.graphics.drawable.Drawable)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeAsUpIndicator(int)}
 **/
android.app.ActionBar.prototype.setHomeAsUpIndicator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHomeAsUpIndicator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTabAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getTabAt(int)}
 **/
android.app.ActionBar.prototype.getTabAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTabAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLogo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setLogo(int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setLogo(android.graphics.drawable.Drawable)}
 **/
android.app.ActionBar.prototype.setLogo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLogo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setNavigationMode(int)}
 **/
android.app.ActionBar.prototype.setNavigationMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHideOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getHideOffset()}
 **/
android.app.ActionBar.prototype.getHideOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHideOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setElevation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setElevation(float)}
 **/
android.app.ActionBar.prototype.setElevation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setElevation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayHomeAsUpEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayHomeAsUpEnabled(boolean)}
 **/
android.app.ActionBar.prototype.setDisplayHomeAsUpEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayHomeAsUpEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getThemedContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getThemedContext()}
 **/
android.app.ActionBar.prototype.getThemedContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getThemedContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hide
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#hide()}
 **/
android.app.ActionBar.prototype.hide = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hide',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHideOnContentScrollEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHideOnContentScrollEnabled(boolean)}
 **/
android.app.ActionBar.prototype.setHideOnContentScrollEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHideOnContentScrollEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeAllTabs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#removeAllTabs()}
 **/
android.app.ActionBar.prototype.removeAllTabs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeAllTabs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new android.app.ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.ActionBar;
