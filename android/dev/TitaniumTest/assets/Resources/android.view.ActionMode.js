/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ActionMode
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ActionMode
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html}
 **/
android.view.ActionMode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.ActionMode') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.ActionMode',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.ActionMode.prototype = Object.create(SuperClass.prototype);
android.view.ActionMode.prototype.constructor = android.view.ActionMode;

android.view.ActionMode.className = "android.view.ActionMode";
android.view.ActionMode.prototype.className = "android.view.ActionMode";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#TYPE_FLOATING}
 */
android.view.ActionMode.TYPE_FLOATING = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#TYPE_PRIMARY}
 */
android.view.ActionMode.TYPE_PRIMARY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#DEFAULT_HIDE_DURATION}
 */
android.view.ActionMode.DEFAULT_HIDE_DURATION = -1;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setCustomView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#setCustomView(android.view.View)}
 **/
android.view.ActionMode.prototype.setCustomView = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#getSubtitle()}
 **/
android.view.ActionMode.prototype.getSubtitle = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#onWindowFocusChanged(boolean)}
 **/
android.view.ActionMode.prototype.onWindowFocusChanged = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#setTitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#setTitle(int)}
 **/
android.view.ActionMode.prototype.setTitle = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#invalidate()}
 **/
android.view.ActionMode.prototype.invalidate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#getTag()}
 **/
android.view.ActionMode.prototype.getTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#setType(int)}
 **/
android.view.ActionMode.prototype.setType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTitleOptional
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#isTitleOptional()}
 **/
android.view.ActionMode.prototype.isTitleOptional = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTitleOptional',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#hide(long)}
 **/
android.view.ActionMode.prototype.hide = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#getTitle()}
 **/
android.view.ActionMode.prototype.getTitle = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitleOptionalHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#setTitleOptionalHint(boolean)}
 **/
android.view.ActionMode.prototype.setTitleOptionalHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitleOptionalHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#getType()}
 **/
android.view.ActionMode.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#getCustomView()}
 **/
android.view.ActionMode.prototype.getCustomView = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#getMenu()}
 **/
android.view.ActionMode.prototype.getMenu = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMenuInflater
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#getMenuInflater()}
 **/
android.view.ActionMode.prototype.getMenuInflater = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMenuInflater',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#setTag(java.lang.Object)}
 **/
android.view.ActionMode.prototype.setTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTitleOptionalHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#getTitleOptionalHint()}
 **/
android.view.ActionMode.prototype.getTitleOptionalHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTitleOptionalHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finish
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#finish()}
 **/
android.view.ActionMode.prototype.finish = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finish',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#setSubtitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#setSubtitle(int)}
 **/
android.view.ActionMode.prototype.setSubtitle = function() {
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
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateContentRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.html#invalidateContentRect()}
 **/
android.view.ActionMode.prototype.invalidateContentRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateContentRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode') {
			return new android.view.ActionMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ActionMode;
