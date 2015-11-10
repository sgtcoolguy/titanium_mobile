/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.Dialog
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.Dialog
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html}
 **/
android.app.Dialog = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.Dialog') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.Dialog',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.Dialog.prototype = Object.create(SuperClass.prototype);
android.app.Dialog.prototype.constructor = android.app.Dialog;

android.app.Dialog.className = "android.app.Dialog";
android.app.Dialog.prototype.className = "android.app.Dialog";

// class property
Object.defineProperty(android.app.Dialog, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.Dialog',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.Dialog.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.Dialog',
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
	whatever.prototype = Object.create(android.app.Dialog.prototype);
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
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#cancel()}
 **/
android.app.Dialog.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onKeyShortcut(int, android.view.KeyEvent)}
 **/
android.app.Dialog.prototype.onKeyShortcut = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVolumeControlStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#getVolumeControlStream()}
 **/
android.app.Dialog.prototype.getVolumeControlStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVolumeControlStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#dispatchTrackballEvent(android.view.MotionEvent)}
 **/
android.app.Dialog.prototype.dispatchTrackballEvent = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterForContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#unregisterForContextMenu(android.view.View)}
 **/
android.app.Dialog.prototype.unregisterForContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterForContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureDrawableAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setFeatureDrawableAlpha(int, int)}
 **/
android.app.Dialog.prototype.setFeatureDrawableAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureDrawableAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findViewById
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#findViewById(int)}
 **/
android.app.Dialog.prototype.findViewById = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findViewById',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addContentView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#addContentView(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
android.app.Dialog.prototype.addContentView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addContentView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSearchRequested
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onSearchRequested(android.view.SearchEvent)}
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onSearchRequested()}
 **/
android.app.Dialog.prototype.onSearchRequested = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSearchRequested',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOwnerActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#getOwnerActivity()}
 **/
android.app.Dialog.prototype.getOwnerActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOwnerActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onOptionsItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onOptionsItemSelected(android.view.MenuItem)}
 **/
android.app.Dialog.prototype.onOptionsItemSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onOptionsItemSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#isShowing()}
 **/
android.app.Dialog.prototype.isShowing = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onStart()}
 **/
android.app.Dialog.prototype.onStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCancelMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setCancelMessage(android.os.Message)}
 **/
android.app.Dialog.prototype.setCancelMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCancelMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnShowListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setOnShowListener(android.content.DialogInterface$OnShowListener)}
 **/
android.app.Dialog.prototype.setOnShowListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnShowListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function create
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#create()}
 **/
android.app.Dialog.prototype.create = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'create',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#dispatchGenericMotionEvent(android.view.MotionEvent)}
 **/
android.app.Dialog.prototype.dispatchGenericMotionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchGenericMotionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onStop()}
 **/
android.app.Dialog.prototype.onStop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowStartingActionMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onWindowStartingActionMode(android.view.ActionMode$Callback)}
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onWindowStartingActionMode(android.view.ActionMode$Callback, int)}
 **/
android.app.Dialog.prototype.onWindowStartingActionMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowStartingActionMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onBackPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onBackPressed()}
 **/
android.app.Dialog.prototype.onBackPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onBackPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#dispatchKeyShortcutEvent(android.view.KeyEvent)}
 **/
android.app.Dialog.prototype.dispatchKeyShortcutEvent = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onTrackballEvent(android.view.MotionEvent)}
 **/
android.app.Dialog.prototype.onTrackballEvent = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onTouchEvent(android.view.MotionEvent)}
 **/
android.app.Dialog.prototype.onTouchEvent = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#dispatchPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)}
 **/
android.app.Dialog.prototype.dispatchPopulateAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchPopulateAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dismiss
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#dismiss()}
 **/
android.app.Dialog.prototype.dismiss = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dismiss',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setTitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setTitle(int)}
 **/
android.app.Dialog.prototype.setTitle = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCancelable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setCancelable(boolean)}
 **/
android.app.Dialog.prototype.setCancelable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCancelable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function closeOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#closeOptionsMenu()}
 **/
android.app.Dialog.prototype.closeOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'closeOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onKeyLongPress(int, android.view.KeyEvent)}
 **/
android.app.Dialog.prototype.onKeyLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#openOptionsMenu()}
 **/
android.app.Dialog.prototype.openOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onContextMenuClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onContextMenuClosed(android.view.Menu)}
 **/
android.app.Dialog.prototype.onContextMenuClosed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onContextMenuClosed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onGenericMotionEvent(android.view.MotionEvent)}
 **/
android.app.Dialog.prototype.onGenericMotionEvent = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreatePanelMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onCreatePanelMenu(int, android.view.Menu)}
 **/
android.app.Dialog.prototype.onCreatePanelMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreatePanelMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onContentChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onContentChanged()}
 **/
android.app.Dialog.prototype.onContentChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onContentChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowAttributesChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onWindowAttributesChanged(android.view.WindowManager$LayoutParams)}
 **/
android.app.Dialog.prototype.onWindowAttributesChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowAttributesChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureDrawableResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setFeatureDrawableResource(int, int)}
 **/
android.app.Dialog.prototype.setFeatureDrawableResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureDrawableResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#invalidateOptionsMenu()}
 **/
android.app.Dialog.prototype.invalidateOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onCreateContextMenu(android.view.ContextMenu, android.view.View, android.view.ContextMenu$ContextMenuInfo)}
 **/
android.app.Dialog.prototype.onCreateContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPreparePanel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onPreparePanel(int, android.view.View, android.view.Menu)}
 **/
android.app.Dialog.prototype.onPreparePanel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPreparePanel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onKeyDown(int, android.view.KeyEvent)}
 **/
android.app.Dialog.prototype.onKeyDown = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnDismissListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setOnDismissListener(android.content.DialogInterface$OnDismissListener)}
 **/
android.app.Dialog.prototype.setOnDismissListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnDismissListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onRestoreInstanceState(android.os.Bundle)}
 **/
android.app.Dialog.prototype.onRestoreInstanceState = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#getWindow()}
 **/
android.app.Dialog.prototype.getWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCanceledOnTouchOutside
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setCanceledOnTouchOutside(boolean)}
 **/
android.app.Dialog.prototype.setCanceledOnTouchOutside = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCanceledOnTouchOutside',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#show()}
 **/
android.app.Dialog.prototype.show = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#getCurrentFocus()}
 **/
android.app.Dialog.prototype.getCurrentFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#dispatchKeyEvent(android.view.KeyEvent)}
 **/
android.app.Dialog.prototype.dispatchKeyEvent = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onContextItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onContextItemSelected(android.view.MenuItem)}
 **/
android.app.Dialog.prototype.onContextItemSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onContextItemSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureDrawableUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setFeatureDrawableUri(int, android.net.Uri)}
 **/
android.app.Dialog.prototype.setFeatureDrawableUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureDrawableUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnCancelListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setOnCancelListener(android.content.DialogInterface$OnCancelListener)}
 **/
android.app.Dialog.prototype.setOnCancelListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnCancelListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#dispatchTouchEvent(android.view.MotionEvent)}
 **/
android.app.Dialog.prototype.dispatchTouchEvent = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActionModeStarted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onActionModeStarted(android.view.ActionMode)}
 **/
android.app.Dialog.prototype.onActionModeStarted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActionModeStarted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerForContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#registerForContextMenu(android.view.View)}
 **/
android.app.Dialog.prototype.registerForContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerForContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVolumeControlStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setVolumeControlStream(int)}
 **/
android.app.Dialog.prototype.setVolumeControlStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVolumeControlStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnKeyListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setOnKeyListener(android.content.DialogInterface$OnKeyListener)}
 **/
android.app.Dialog.prototype.setOnKeyListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnKeyListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onOptionsMenuClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onOptionsMenuClosed(android.view.Menu)}
 **/
android.app.Dialog.prototype.onOptionsMenuClosed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onOptionsMenuClosed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOwnerActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setOwnerActivity(android.app.Activity)}
 **/
android.app.Dialog.prototype.setOwnerActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOwnerActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSearchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#getSearchEvent()}
 **/
android.app.Dialog.prototype.getSearchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSearchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutInflater
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#getLayoutInflater()}
 **/
android.app.Dialog.prototype.getLayoutInflater = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutInflater',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDismissMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setDismissMessage(android.os.Message)}
 **/
android.app.Dialog.prototype.setDismissMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDismissMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onAttachedToWindow()}
 **/
android.app.Dialog.prototype.onAttachedToWindow = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPrepareOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onPrepareOptionsMenu(android.view.Menu)}
 **/
android.app.Dialog.prototype.onPrepareOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onCreate(android.os.Bundle)}
 **/
android.app.Dialog.prototype.onCreate = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onKeyUp(int, android.view.KeyEvent)}
 **/
android.app.Dialog.prototype.onKeyUp = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMenuOpened
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onMenuOpened(int, android.view.Menu)}
 **/
android.app.Dialog.prototype.onMenuOpened = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMenuOpened',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onWindowFocusChanged(boolean)}
 **/
android.app.Dialog.prototype.onWindowFocusChanged = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMenuItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onMenuItemSelected(int, android.view.MenuItem)}
 **/
android.app.Dialog.prototype.onMenuItemSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMenuItemSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setFeatureDrawable(int, android.graphics.drawable.Drawable)}
 **/
android.app.Dialog.prototype.setFeatureDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActionModeFinished
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onActionModeFinished(android.view.ActionMode)}
 **/
android.app.Dialog.prototype.onActionModeFinished = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActionModeFinished',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestWindowFeature
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#requestWindowFeature(int)}
 **/
android.app.Dialog.prototype.requestWindowFeature = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestWindowFeature',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function takeKeyEvents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#takeKeyEvents(boolean)}
 **/
android.app.Dialog.prototype.takeKeyEvents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'takeKeyEvents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#hide()}
 **/
android.app.Dialog.prototype.hide = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#openContextMenu(android.view.View)}
 **/
android.app.Dialog.prototype.openContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setContentView(int)}
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setContentView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#setContentView(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
android.app.Dialog.prototype.setContentView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActionBar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#getActionBar()}
 **/
android.app.Dialog.prototype.getActionBar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActionBar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreatePanelView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onCreatePanelView(int)}
 **/
android.app.Dialog.prototype.onCreatePanelView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreatePanelView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onSaveInstanceState()}
 **/
android.app.Dialog.prototype.onSaveInstanceState = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onKeyMultiple(int, int, android.view.KeyEvent)}
 **/
android.app.Dialog.prototype.onKeyMultiple = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPanelClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onPanelClosed(int, android.view.Menu)}
 **/
android.app.Dialog.prototype.onPanelClosed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPanelClosed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#getContext()}
 **/
android.app.Dialog.prototype.getContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onDetachedFromWindow()}
 **/
android.app.Dialog.prototype.onDetachedFromWindow = function() {
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
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Dialog.html#onCreateOptionsMenu(android.view.Menu)}
 **/
android.app.Dialog.prototype.onCreateOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Dialog') {
			return new android.app.Dialog(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.Dialog;
