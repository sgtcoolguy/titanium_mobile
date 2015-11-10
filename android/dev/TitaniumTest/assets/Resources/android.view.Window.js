/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.Window
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.Window
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/Window.html}
 **/
android.view.Window = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.Window') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.Window. Create a subclass using android.view.Window.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.Window.prototype = Object.create(SuperClass.prototype);
android.view.Window.prototype.constructor = android.view.Window;

android.view.Window.className = "android.view.Window";
android.view.Window.prototype.className = "android.view.Window";

// class property
Object.defineProperty(android.view.Window, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.Window',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.Window.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.Window',
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
	whatever.prototype = Object.create(android.view.Window.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#PROGRESS_SECONDARY_END}
 */
android.view.Window.PROGRESS_SECONDARY_END = 30000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#STATUS_BAR_BACKGROUND_TRANSITION_NAME}
 */
android.view.Window.STATUS_BAR_BACKGROUND_TRANSITION_NAME = "android:status:background";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#PROGRESS_START}
 */
android.view.Window.PROGRESS_START = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_NO_TITLE}
 */
android.view.Window.FEATURE_NO_TITLE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_PROGRESS}
 */
android.view.Window.FEATURE_PROGRESS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#PROGRESS_INDETERMINATE_OFF}
 */
android.view.Window.PROGRESS_INDETERMINATE_OFF = -4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_ACTION_BAR_OVERLAY}
 */
android.view.Window.FEATURE_ACTION_BAR_OVERLAY = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#PROGRESS_END}
 */
android.view.Window.PROGRESS_END = 10000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#PROGRESS_VISIBILITY_OFF}
 */
android.view.Window.PROGRESS_VISIBILITY_OFF = -2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#PROGRESS_VISIBILITY_ON}
 */
android.view.Window.PROGRESS_VISIBILITY_ON = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#ID_ANDROID_CONTENT}
 */
android.view.Window.ID_ANDROID_CONTENT = 16908290;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_ACTION_MODE_OVERLAY}
 */
android.view.Window.FEATURE_ACTION_MODE_OVERLAY = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_CONTEXT_MENU}
 */
android.view.Window.FEATURE_CONTEXT_MENU = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_ACTION_BAR}
 */
android.view.Window.FEATURE_ACTION_BAR = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_ACTIVITY_TRANSITIONS}
 */
android.view.Window.FEATURE_ACTIVITY_TRANSITIONS = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#DEFAULT_FEATURES}
 */
android.view.Window.DEFAULT_FEATURES = 65;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_RIGHT_ICON}
 */
android.view.Window.FEATURE_RIGHT_ICON = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_SWIPE_TO_DISMISS}
 */
android.view.Window.FEATURE_SWIPE_TO_DISMISS = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#PROGRESS_SECONDARY_START}
 */
android.view.Window.PROGRESS_SECONDARY_START = 20000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_CUSTOM_TITLE}
 */
android.view.Window.FEATURE_CUSTOM_TITLE = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_OPTIONS_PANEL}
 */
android.view.Window.FEATURE_OPTIONS_PANEL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_CONTENT_TRANSITIONS}
 */
android.view.Window.FEATURE_CONTENT_TRANSITIONS = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#NAVIGATION_BAR_BACKGROUND_TRANSITION_NAME}
 */
android.view.Window.NAVIGATION_BAR_BACKGROUND_TRANSITION_NAME = "android:navigation:background";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#PROGRESS_INDETERMINATE_ON}
 */
android.view.Window.PROGRESS_INDETERMINATE_ON = -3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_INDETERMINATE_PROGRESS}
 */
android.view.Window.FEATURE_INDETERMINATE_PROGRESS = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Window.html#FEATURE_LEFT_ICON}
 */
android.view.Window.FEATURE_LEFT_ICON = 3;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getDefaultFeatures
 * @static
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getDefaultFeatures(android.content.Context)}
 **/
android.view.Window.getDefaultFeatures = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDefaultFeatures',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @function superDispatchTrackballEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#superDispatchTrackballEvent(android.view.MotionEvent)}
 **/
android.view.Window.prototype.superDispatchTrackballEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'superDispatchTrackballEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSharedElementEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getSharedElementEnterTransition()}
 **/
android.view.Window.prototype.getSharedElementEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSharedElementEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExitTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getExitTransition()}
 **/
android.view.Window.prototype.getExitTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExitTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#findViewById(int)}
 **/
android.view.Window.prototype.findViewById = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUiOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setUiOptions(int)}
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setUiOptions(int, int)}
 **/
android.view.Window.prototype.setUiOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUiOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setLayout(int, int)}
 **/
android.view.Window.prototype.setLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReturnTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setReturnTransition(android.transition.Transition)}
 **/
android.view.Window.prototype.setReturnTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReturnTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function superDispatchGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#superDispatchGenericMotionEvent(android.view.MotionEvent)}
 **/
android.view.Window.prototype.superDispatchGenericMotionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'superDispatchGenericMotionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExitTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setExitTransition(android.transition.Transition)}
 **/
android.view.Window.prototype.setExitTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExitTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWindowManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setWindowManager(android.view.WindowManager, android.os.IBinder, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setWindowManager(android.view.WindowManager, android.os.IBinder, java.lang.String, boolean)}
 **/
android.view.Window.prototype.setWindowManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWindowManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasSoftInputMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#hasSoftInputMode()}
 **/
android.view.Window.prototype.hasSoftInputMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasSoftInputMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDecorView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getDecorView()}
 **/
android.view.Window.prototype.getDecorView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDecorView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function takeInputQueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#takeInputQueue(android.view.InputQueue$Callback)}
 **/
android.view.Window.prototype.takeInputQueue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'takeInputQueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getAttributes()}
 **/
android.view.Window.prototype.getAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getWindowStyle()}
 **/
android.view.Window.prototype.getWindowStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContainer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getContainer()}
 **/
android.view.Window.prototype.getContainer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContainer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getCallback()}
 **/
android.view.Window.prototype.getCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function makeActive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#makeActive()}
 **/
android.view.Window.prototype.makeActive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'makeActive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSharedElementEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setSharedElementEnterTransition(android.transition.Transition)}
 **/
android.view.Window.prototype.setSharedElementEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSharedElementEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setBackgroundDrawable(android.graphics.drawable.Drawable)}
 **/
android.view.Window.prototype.setBackgroundDrawable = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFeatures
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getFeatures()}
 **/
android.view.Window.prototype.getFeatures = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFeatures',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReturnTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getReturnTransition()}
 **/
android.view.Window.prototype.getReturnTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReturnTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasFeature
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#hasFeature(int)}
 **/
android.view.Window.prototype.hasFeature = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasFeature',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function superDispatchKeyEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#superDispatchKeyEvent(android.view.KeyEvent)}
 **/
android.view.Window.prototype.superDispatchKeyEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'superDispatchKeyEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllowEnterTransitionOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getAllowEnterTransitionOverlap()}
 **/
android.view.Window.prototype.getAllowEnterTransitionOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllowEnterTransitionOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDimAmount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setDimAmount(float)}
 **/
android.view.Window.prototype.setDimAmount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDimAmount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransitionBackgroundFadeDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setTransitionBackgroundFadeDuration(long)}
 **/
android.view.Window.prototype.setTransitionBackgroundFadeDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransitionBackgroundFadeDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransitionManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setTransitionManager(android.transition.TransitionManager)}
 **/
android.view.Window.prototype.setTransitionManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransitionManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getCurrentFocus()}
 **/
android.view.Window.prototype.getCurrentFocus = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalFeatures
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getLocalFeatures()}
 **/
android.view.Window.prototype.getLocalFeatures = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalFeatures',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReenterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setReenterTransition(android.transition.Transition)}
 **/
android.view.Window.prototype.setReenterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReenterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSharedElementExitTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getSharedElementExitTransition()}
 **/
android.view.Window.prototype.getSharedElementExitTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSharedElementExitTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFormat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setFormat(int)}
 **/
android.view.Window.prototype.setFormat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFormat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setVolumeControlStream(int)}
 **/
android.view.Window.prototype.setVolumeControlStream = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performPanelShortcut
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#performPanelShortcut(int, int, android.view.KeyEvent, int)}
 **/
android.view.Window.prototype.performPanelShortcut = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performPanelShortcut',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getLayoutInflater()}
 **/
android.view.Window.prototype.getLayoutInflater = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidatePanelMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#invalidatePanelMenu(int)}
 **/
android.view.Window.prototype.invalidatePanelMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidatePanelMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function injectInputEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#injectInputEvent(android.view.InputEvent)}
 **/
android.view.Window.prototype.injectInputEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'injectInputEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setLogo(int)}
 **/
android.view.Window.prototype.setLogo = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionBackgroundFadeDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getTransitionBackgroundFadeDuration()}
 **/
android.view.Window.prototype.getTransitionBackgroundFadeDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionBackgroundFadeDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setElevation(float)}
 **/
android.view.Window.prototype.setElevation = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setFeatureInt(int, int)}
 **/
android.view.Window.prototype.setFeatureInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMediaController
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setMediaController(android.media.session.MediaController)}
 **/
android.view.Window.prototype.setMediaController = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMediaController',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setGravity(int)}
 **/
android.view.Window.prototype.setGravity = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContainer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setContainer(android.view.Window)}
 **/
android.view.Window.prototype.setContainer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContainer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getVolumeControlStream()}
 **/
android.view.Window.prototype.getVolumeControlStream = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllowReturnTransitionOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getAllowReturnTransitionOverlap()}
 **/
android.view.Window.prototype.getAllowReturnTransitionOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllowReturnTransitionOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setFeatureDrawableAlpha(int, int)}
 **/
android.view.Window.prototype.setFeatureDrawableAlpha = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#hasChildren()}
 **/
android.view.Window.prototype.hasChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#addContentView(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
android.view.Window.prototype.addContentView = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setCallback(android.view.Window$Callback)}
 **/
android.view.Window.prototype.setCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function restoreHierarchyState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#restoreHierarchyState(android.os.Bundle)}
 **/
android.view.Window.prototype.restoreHierarchyState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restoreHierarchyState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAllowEnterTransitionOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setAllowEnterTransitionOverlap(boolean)}
 **/
android.view.Window.prototype.setAllowEnterTransitionOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAllowEnterTransitionOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isActive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#isActive()}
 **/
android.view.Window.prototype.isActive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isActive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function takeSurface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#takeSurface(android.view.SurfaceHolder$Callback2)}
 **/
android.view.Window.prototype.takeSurface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'takeSurface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function closeAllPanels
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#closeAllPanels()}
 **/
android.view.Window.prototype.closeAllPanels = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'closeAllPanels',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getEnterTransition()}
 **/
android.view.Window.prototype.getEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getWindowManager()}
 **/
android.view.Window.prototype.getWindowManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#addFlags(int)}
 **/
android.view.Window.prototype.addFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openPanel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#openPanel(int, android.view.KeyEvent)}
 **/
android.view.Window.prototype.openPanel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openPanel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStatusBarColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getStatusBarColor()}
 **/
android.view.Window.prototype.getStatusBarColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStatusBarColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestFeature
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#requestFeature(int)}
 **/
android.view.Window.prototype.requestFeature = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestFeature',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundDrawableResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setBackgroundDrawableResource(int)}
 **/
android.view.Window.prototype.setBackgroundDrawableResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundDrawableResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocalFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setLocalFocus(boolean, boolean)}
 **/
android.view.Window.prototype.setLocalFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocalFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getTransitionManager()}
 **/
android.view.Window.prototype.getTransitionManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReenterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getReenterTransition()}
 **/
android.view.Window.prototype.getReenterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReenterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSharedElementReturnTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getSharedElementReturnTransition()}
 **/
android.view.Window.prototype.getSharedElementReturnTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSharedElementReturnTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStatusBarColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setStatusBarColor(int)}
 **/
android.view.Window.prototype.setStatusBarColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStatusBarColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function superDispatchTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#superDispatchTouchEvent(android.view.MotionEvent)}
 **/
android.view.Window.prototype.superDispatchTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'superDispatchTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSharedElementReenterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getSharedElementReenterTransition()}
 **/
android.view.Window.prototype.getSharedElementReenterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSharedElementReenterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setTitle(java.lang.CharSequence)}
 **/
android.view.Window.prototype.setTitle = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function closePanel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#closePanel(int)}
 **/
android.view.Window.prototype.closePanel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'closePanel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChildDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setChildDrawable(int, android.graphics.drawable.Drawable)}
 **/
android.view.Window.prototype.setChildDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChildDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setIcon(int)}
 **/
android.view.Window.prototype.setIcon = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekDecorView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#peekDecorView()}
 **/
android.view.Window.prototype.peekDecorView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peekDecorView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClipToOutline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setClipToOutline(boolean)}
 **/
android.view.Window.prototype.setClipToOutline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClipToOutline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationBarColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setNavigationBarColor(int)}
 **/
android.view.Window.prototype.setNavigationBarColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationBarColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultWindowFormat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setDefaultWindowFormat(int)}
 **/
android.view.Window.prototype.setDefaultWindowFormat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultWindowFormat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function togglePanel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#togglePanel(int, android.view.KeyEvent)}
 **/
android.view.Window.prototype.togglePanel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'togglePanel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMediaController
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getMediaController()}
 **/
android.view.Window.prototype.getMediaController = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMediaController',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
android.view.Window.prototype.onConfigurationChanged = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setFeatureDrawableResource(int, int)}
 **/
android.view.Window.prototype.setFeatureDrawableResource = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setFlags(int, int)}
 **/
android.view.Window.prototype.setFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitleColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setTitleColor(int)}
 **/
android.view.Window.prototype.setTitleColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitleColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChildInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setChildInt(int, int)}
 **/
android.view.Window.prototype.setChildInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChildInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setFeatureDrawableUri(int, android.net.Uri)}
 **/
android.view.Window.prototype.setFeatureDrawableUri = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setAttributes(android.view.WindowManager$LayoutParams)}
 **/
android.view.Window.prototype.setAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function superDispatchKeyShortcutEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#superDispatchKeyShortcutEvent(android.view.KeyEvent)}
 **/
android.view.Window.prototype.superDispatchKeyShortcutEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'superDispatchKeyShortcutEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isShortcutKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#isShortcutKey(int, android.view.KeyEvent)}
 **/
android.view.Window.prototype.isShortcutKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isShortcutKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function saveHierarchyState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#saveHierarchyState()}
 **/
android.view.Window.prototype.saveHierarchyState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'saveHierarchyState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#clearFlags(int)}
 **/
android.view.Window.prototype.clearFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSharedElementExitTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setSharedElementExitTransition(android.transition.Transition)}
 **/
android.view.Window.prototype.setSharedElementExitTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSharedElementExitTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFloating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#isFloating()}
 **/
android.view.Window.prototype.isFloating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFloating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentScene
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getContentScene()}
 **/
android.view.Window.prototype.getContentScene = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentScene',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performPanelIdentifierAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#performPanelIdentifierAction(int, int, int)}
 **/
android.view.Window.prototype.performPanelIdentifierAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performPanelIdentifierAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#onActive()}
 **/
android.view.Window.prototype.onActive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performContextMenuIdentifierAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#performContextMenuIdentifierAction(int, int)}
 **/
android.view.Window.prototype.performContextMenuIdentifierAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performContextMenuIdentifierAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSharedElementsUseOverlay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setSharedElementsUseOverlay(boolean)}
 **/
android.view.Window.prototype.setSharedElementsUseOverlay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSharedElementsUseOverlay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSharedElementReturnTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setSharedElementReturnTransition(android.transition.Transition)}
 **/
android.view.Window.prototype.setSharedElementReturnTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSharedElementReturnTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setFeatureDrawable(int, android.graphics.drawable.Drawable)}
 **/
android.view.Window.prototype.setFeatureDrawable = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setType(int)}
 **/
android.view.Window.prototype.setType = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSharedElementsUseOverlay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getSharedElementsUseOverlay()}
 **/
android.view.Window.prototype.getSharedElementsUseOverlay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSharedElementsUseOverlay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSoftInputMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setSoftInputMode(int)}
 **/
android.view.Window.prototype.setSoftInputMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSoftInputMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAllowReturnTransitionOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setAllowReturnTransitionOverlap(boolean)}
 **/
android.view.Window.prototype.setAllowReturnTransitionOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAllowReturnTransitionOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getForcedWindowFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getForcedWindowFlags()}
 **/
android.view.Window.prototype.getForcedWindowFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getForcedWindowFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#takeKeyEvents(boolean)}
 **/
android.view.Window.prototype.takeKeyEvents = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setContentView(int)}
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setContentView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setContentView(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
android.view.Window.prototype.setContentView = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setEnterTransition(android.transition.Transition)}
 **/
android.view.Window.prototype.setEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSharedElementReenterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setSharedElementReenterTransition(android.transition.Transition)}
 **/
android.view.Window.prototype.setSharedElementReenterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSharedElementReenterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getContext()}
 **/
android.view.Window.prototype.getContext = function() {
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
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWindowAnimations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#setWindowAnimations(int)}
 **/
android.view.Window.prototype.setWindowAnimations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWindowAnimations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationBarColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Window.html#getNavigationBarColor()}
 **/
android.view.Window.prototype.getNavigationBarColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationBarColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Window') {
			return new android.view.Window(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.Window;
