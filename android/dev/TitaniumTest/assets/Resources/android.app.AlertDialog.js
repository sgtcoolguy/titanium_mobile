/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.AlertDialog
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.AlertDialog
 * @extends android.app.Dialog 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html}
 **/
android.app.AlertDialog = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.AlertDialog') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.AlertDialog',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.app.Dialog');
android.app.AlertDialog.prototype = Object.create(SuperClass.prototype);
android.app.AlertDialog.prototype.constructor = android.app.AlertDialog;

android.app.AlertDialog.className = "android.app.AlertDialog";
android.app.AlertDialog.prototype.className = "android.app.AlertDialog";

// class property
Object.defineProperty(android.app.AlertDialog, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.AlertDialog',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.AlertDialog.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.AlertDialog',
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
	whatever.prototype = Object.create(android.app.AlertDialog.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#THEME_TRADITIONAL}
 */
android.app.AlertDialog.THEME_TRADITIONAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#THEME_DEVICE_DEFAULT_DARK}
 */
android.app.AlertDialog.THEME_DEVICE_DEFAULT_DARK = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#THEME_HOLO_DARK}
 */
android.app.AlertDialog.THEME_HOLO_DARK = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#THEME_DEVICE_DEFAULT_LIGHT}
 */
android.app.AlertDialog.THEME_DEVICE_DEFAULT_LIGHT = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#THEME_HOLO_LIGHT}
 */
android.app.AlertDialog.THEME_HOLO_LIGHT = 3;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#onCreate(android.os.Bundle)}
 **/
android.app.AlertDialog.prototype.onCreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#onKeyDown(int, android.view.KeyEvent)}
 **/
android.app.AlertDialog.prototype.onKeyDown = function() {
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
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#onKeyUp(int, android.view.KeyEvent)}
 **/
android.app.AlertDialog.prototype.onKeyUp = function() {
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
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInverseBackgroundForced
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setInverseBackgroundForced(boolean)}
 **/
android.app.AlertDialog.prototype.setInverseBackgroundForced = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInverseBackgroundForced',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getListView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#getListView()}
 **/
android.app.AlertDialog.prototype.getListView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getListView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setTitle(java.lang.CharSequence)}
 **/
android.app.AlertDialog.prototype.setTitle = function() {
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
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setMessage(java.lang.CharSequence)}
 **/
android.app.AlertDialog.prototype.setMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setCustomTitle(android.view.View)}
 **/
android.app.AlertDialog.prototype.setCustomTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setIcon(int)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setIcon(android.graphics.drawable.Drawable)}
 **/
android.app.AlertDialog.prototype.setIcon = function() {
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
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getButton
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#getButton(int)}
 **/
android.app.AlertDialog.prototype.getButton = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getButton',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setView(android.view.View, int, int, int, int)}
 **/
android.app.AlertDialog.prototype.setView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIconAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setIconAttribute(int)}
 **/
android.app.AlertDialog.prototype.setIconAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIconAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setButton
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setButton(int, java.lang.CharSequence, android.os.Message)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setButton(int, java.lang.CharSequence, android.content.DialogInterface$OnClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setButton(java.lang.CharSequence, android.os.Message)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setButton(java.lang.CharSequence, android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.prototype.setButton = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setButton',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setButton3
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setButton3(java.lang.CharSequence, android.os.Message)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setButton3(java.lang.CharSequence, android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.prototype.setButton3 = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setButton3',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setButton2
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setButton2(java.lang.CharSequence, android.os.Message)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.html#setButton2(java.lang.CharSequence, android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.prototype.setButton2 = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setButton2',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog') {
			return new android.app.AlertDialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.AlertDialog;
