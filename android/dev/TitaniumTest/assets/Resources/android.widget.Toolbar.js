/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.Toolbar
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.widget = global.android.widget || {};

/**
 * @class android.widget.Toolbar
 * @extends android.view.ViewGroup 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html}
 **/
android.widget.Toolbar = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.widget.Toolbar') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.widget.Toolbar',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup');
android.widget.Toolbar.prototype = Object.create(SuperClass.prototype);
android.widget.Toolbar.prototype.constructor = android.widget.Toolbar;

android.widget.Toolbar.className = "android.widget.Toolbar";
android.widget.Toolbar.prototype.className = "android.widget.Toolbar";

// class property
Object.defineProperty(android.widget.Toolbar, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.widget.Toolbar',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.widget.Toolbar.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.widget.Toolbar',
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
	whatever.prototype = Object.create(android.widget.Toolbar.prototype);
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
 * @function getContentInsetEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getContentInsetEnd()}
 **/
android.widget.Toolbar.prototype.getContentInsetEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentInsetEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentInsetLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getContentInsetLeft()}
 **/
android.widget.Toolbar.prototype.getContentInsetLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentInsetLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateLayoutParams(android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateLayoutParams(android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateLayoutParams(android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateLayoutParams(android.util.AttributeSet)}
 **/
android.widget.Toolbar.prototype.generateLayoutParams = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onRestoreInstanceState(android.os.Parcelable)}
 **/
android.widget.Toolbar.prototype.onRestoreInstanceState = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getSubtitle()}
 **/
android.widget.Toolbar.prototype.getSubtitle = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationOnClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationOnClickListener(android.view.View$OnClickListener)}
 **/
android.widget.Toolbar.prototype.setNavigationOnClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationOnClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inflateMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#inflateMenu(int)}
 **/
android.widget.Toolbar.prototype.inflateMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inflateMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPopupTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getPopupTheme()}
 **/
android.widget.Toolbar.prototype.getPopupTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPopupTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentInsetStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getContentInsetStart()}
 **/
android.widget.Toolbar.prototype.getContentInsetStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentInsetStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function collapseActionView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#collapseActionView()}
 **/
android.widget.Toolbar.prototype.collapseActionView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'collapseActionView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitleTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setTitleTextColor(int)}
 **/
android.widget.Toolbar.prototype.setTitleTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitleTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubtitleTextAppearance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setSubtitleTextAppearance(android.content.Context, int)}
 **/
android.widget.Toolbar.prototype.setSubtitleTextAppearance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubtitleTextAppearance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onRtlPropertiesChanged(int)}
 **/
android.widget.Toolbar.prototype.onRtlPropertiesChanged = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dismissPopupMenus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#dismissPopupMenus()}
 **/
android.widget.Toolbar.prototype.dismissPopupMenus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dismissPopupMenus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasExpandedActionView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#hasExpandedActionView()}
 **/
android.widget.Toolbar.prototype.hasExpandedActionView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasExpandedActionView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOverflowIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setOverflowIcon(android.graphics.drawable.Drawable)}
 **/
android.widget.Toolbar.prototype.setOverflowIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOverflowIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateDefaultLayoutParams()}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateDefaultLayoutParams()}
 **/
android.widget.Toolbar.prototype.generateDefaultLayoutParams = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getTitle()}
 **/
android.widget.Toolbar.prototype.getTitle = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationIcon(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationIcon(android.graphics.drawable.Drawable)}
 **/
android.widget.Toolbar.prototype.setNavigationIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getMenu()}
 **/
android.widget.Toolbar.prototype.getMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentInsetsAbsolute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setContentInsetsAbsolute(int, int)}
 **/
android.widget.Toolbar.prototype.setContentInsetsAbsolute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentInsetsAbsolute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOverflowMenuShowing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#isOverflowMenuShowing()}
 **/
android.widget.Toolbar.prototype.isOverflowMenuShowing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOverflowMenuShowing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOverflowIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getOverflowIcon()}
 **/
android.widget.Toolbar.prototype.getOverflowIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOverflowIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#checkLayoutParams(android.view.ViewGroup$LayoutParams)}
 **/
android.widget.Toolbar.prototype.checkLayoutParams = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnMenuItemClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setOnMenuItemClickListener(android.widget.Toolbar$OnMenuItemClickListener)}
 **/
android.widget.Toolbar.prototype.setOnMenuItemClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnMenuItemClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hideOverflowMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#hideOverflowMenu()}
 **/
android.widget.Toolbar.prototype.hideOverflowMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hideOverflowMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setSubtitle(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setSubtitle(java.lang.CharSequence)}
 **/
android.widget.Toolbar.prototype.setSubtitle = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLogoDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setLogoDescription(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setLogoDescription(java.lang.CharSequence)}
 **/
android.widget.Toolbar.prototype.setLogoDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLogoDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentInsetsRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setContentInsetsRelative(int, int)}
 **/
android.widget.Toolbar.prototype.setContentInsetsRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentInsetsRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPopupTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setPopupTheme(int)}
 **/
android.widget.Toolbar.prototype.setPopupTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPopupTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setLogo(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setLogo(android.graphics.drawable.Drawable)}
 **/
android.widget.Toolbar.prototype.setLogo = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLogoDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getLogoDescription()}
 **/
android.widget.Toolbar.prototype.getLogoDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLogoDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLogo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getLogo()}
 **/
android.widget.Toolbar.prototype.getLogo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLogo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onTouchEvent(android.view.MotionEvent)}
 **/
android.widget.Toolbar.prototype.onTouchEvent = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getNavigationIcon()}
 **/
android.widget.Toolbar.prototype.getNavigationIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onLayout(boolean, int, int, int, int)}
 **/
android.widget.Toolbar.prototype.onLayout = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setTitle(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setTitle(java.lang.CharSequence)}
 **/
android.widget.Toolbar.prototype.setTitle = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onMeasure(int, int)}
 **/
android.widget.Toolbar.prototype.onMeasure = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentInsetRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getContentInsetRight()}
 **/
android.widget.Toolbar.prototype.getContentInsetRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentInsetRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getNavigationContentDescription()}
 **/
android.widget.Toolbar.prototype.getNavigationContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onSaveInstanceState()}
 **/
android.widget.Toolbar.prototype.onSaveInstanceState = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubtitleTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setSubtitleTextColor(int)}
 **/
android.widget.Toolbar.prototype.setSubtitleTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubtitleTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationContentDescription(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationContentDescription(java.lang.CharSequence)}
 **/
android.widget.Toolbar.prototype.setNavigationContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onDetachedFromWindow()}
 **/
android.widget.Toolbar.prototype.onDetachedFromWindow = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showOverflowMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#showOverflowMenu()}
 **/
android.widget.Toolbar.prototype.showOverflowMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showOverflowMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitleTextAppearance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setTitleTextAppearance(android.content.Context, int)}
 **/
android.widget.Toolbar.prototype.setTitleTextAppearance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitleTextAppearance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new android.widget.Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.widget.Toolbar;
