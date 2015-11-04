/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.Activity
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.Activity
 * @extends android.view.ContextThemeWrapper  * @constructor
 * @see {@link http://developer.android.com/reference/android/app/Activity.html}
 **/
android.app.Activity = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.Activity') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.Activity',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		}); 
	}
	
	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ContextThemeWrapper');
android.app.Activity.prototype = Object.create(SuperClass.prototype);
android.app.Activity.prototype.constructor = android.app.Activity;

android.app.Activity.className = "android.app.Activity";
android.app.Activity.prototype.className = "android.app.Activity";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#RESULT_CANCELED}
 */
android.app.Activity.RESULT_CANCELED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_SEARCH_LOCAL}
 */
android.app.Activity.DEFAULT_KEYS_SEARCH_LOCAL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_SHORTCUT}
 */
android.app.Activity.DEFAULT_KEYS_SHORTCUT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#RESULT_OK}
 */
android.app.Activity.RESULT_OK = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_DIALER}
 */
android.app.Activity.DEFAULT_KEYS_DIALER = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#RESULT_FIRST_USER}
 */
android.app.Activity.RESULT_FIRST_USER = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_DISABLE}
 */
android.app.Activity.DEFAULT_KEYS_DISABLE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_SEARCH_GLOBAL}
 */
android.app.Activity.DEFAULT_KEYS_SEARCH_GLOBAL = 4;

// Static fields
// http://developer.android.com/reference/android/app/Activity.html#FOCUSED_STATE_SET
Object.defineProperty(android.app.Activity, 'FOCUSED_STATE_SET', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,			
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'FOCUSED_STATE_SET'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.app.Activity') {
				return new this(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onChildTitleChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onChildTitleChanged(android.app.Activity, java.lang.CharSequence)}
 **/
android.app.Activity.prototype.onChildTitleChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onChildTitleChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getChangingConfigurations()}
 **/
android.app.Activity.prototype.getChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onSearchRequested
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onSearchRequested(android.view.SearchEvent)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onSearchRequested()}
 **/
android.app.Activity.prototype.onSearchRequested = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function navigateUpToFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#navigateUpToFromChild(android.app.Activity, android.content.Intent)}
 **/
android.app.Activity.prototype.navigateUpToFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'navigateUpToFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function removeDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#removeDialog(int)}
 **/
android.app.Activity.prototype.removeDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function postponeEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#postponeEnterTransition()}
 **/
android.app.Activity.prototype.postponeEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postponeEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setProgressBarIndeterminate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setProgressBarIndeterminate(boolean)}
 **/
android.app.Activity.prototype.setProgressBarIndeterminate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProgressBarIndeterminate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function startActivityFromFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityFromFragment(android.app.Fragment, android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityFromFragment(android.app.Fragment, android.content.Intent, int, android.os.Bundle)}
 **/
android.app.Activity.prototype.startActivityFromFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityFromFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function dispatchGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchGenericMotionEvent(android.view.MotionEvent)}
 **/
android.app.Activity.prototype.dispatchGenericMotionEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setTaskDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setTaskDescription(android.app.ActivityManager$TaskDescription)}
 **/
android.app.Activity.prototype.setTaskDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTaskDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onBackPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onBackPressed()}
 **/
android.app.Activity.prototype.onBackPressed = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onRestart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRestart()}
 **/
android.app.Activity.prototype.onRestart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRestart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function shouldUpRecreateTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#shouldUpRecreateTask(android.content.Intent)}
 **/
android.app.Activity.prototype.shouldUpRecreateTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shouldUpRecreateTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function finishAffinity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishAffinity()}
 **/
android.app.Activity.prototype.finishAffinity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishAffinity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setIntent(android.content.Intent)}
 **/
android.app.Activity.prototype.setIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function dispatchPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)}
 **/
android.app.Activity.prototype.dispatchPopulateAccessibilityEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getLoaderManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getLoaderManager()}
 **/
android.app.Activity.prototype.getLoaderManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLoaderManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setActionBar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setActionBar(android.widget.Toolbar)}
 **/
android.app.Activity.prototype.setActionBar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setActionBar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function startIntentSender
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSender(android.content.IntentSender, android.content.Intent, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSender(android.content.IntentSender, android.content.Intent, int, int, int, android.os.Bundle)}
 **/
android.app.Activity.prototype.startIntentSender = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startIntentSender',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function showAssist
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#showAssist(android.os.Bundle)}
 **/
android.app.Activity.prototype.showAssist = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showAssist',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function closeOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#closeOptionsMenu()}
 **/
android.app.Activity.prototype.closeOptionsMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function openOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#openOptionsMenu()}
 **/
android.app.Activity.prototype.openOptionsMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getCallingActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getCallingActivity()}
 **/
android.app.Activity.prototype.getCallingActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCallingActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onWindowAttributesChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onWindowAttributesChanged(android.view.WindowManager$LayoutParams)}
 **/
android.app.Activity.prototype.onWindowAttributesChanged = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function invalidateOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#invalidateOptionsMenu()}
 **/
android.app.Activity.prototype.invalidateOptionsMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setProgressBarVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setProgressBarVisibility(boolean)}
 **/
android.app.Activity.prototype.setProgressBarVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProgressBarVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreateNavigateUpTaskStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateNavigateUpTaskStack(android.app.TaskStackBuilder)}
 **/
android.app.Activity.prototype.onCreateNavigateUpTaskStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateNavigateUpTaskStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getCurrentFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getCurrentFocus()}
 **/
android.app.Activity.prototype.getCurrentFocus = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchKeyEvent(android.view.KeyEvent)}
 **/
android.app.Activity.prototype.dispatchKeyEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setProgress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setProgress(int)}
 **/
android.app.Activity.prototype.setProgress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProgress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setVolumeControlStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setVolumeControlStream(int)}
 **/
android.app.Activity.prototype.setVolumeControlStream = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onOptionsMenuClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onOptionsMenuClosed(android.view.Menu)}
 **/
android.app.Activity.prototype.onOptionsMenuClosed = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setFinishOnTouchOutside
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFinishOnTouchOutside(boolean)}
 **/
android.app.Activity.prototype.setFinishOnTouchOutside = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFinishOnTouchOutside',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onAttachedToWindow()}
 **/
android.app.Activity.prototype.onAttachedToWindow = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getApplication
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getApplication()}
 **/
android.app.Activity.prototype.getApplication = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplication',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onPrepareOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPrepareOptionsMenu(android.view.Menu)}
 **/
android.app.Activity.prototype.onPrepareOptionsMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setProgressBarIndeterminateVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setProgressBarIndeterminateVisibility(boolean)}
 **/
android.app.Activity.prototype.setProgressBarIndeterminateVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProgressBarIndeterminateVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getComponentName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getComponentName()}
 **/
android.app.Activity.prototype.getComponentName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getComponentName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getParent()}
 **/
android.app.Activity.prototype.getParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function stopManagingCursor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#stopManagingCursor(android.database.Cursor)}
 **/
android.app.Activity.prototype.stopManagingCursor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stopManagingCursor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onTrimMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onTrimMemory(int)}
 **/
android.app.Activity.prototype.onTrimMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTrimMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getParentActivityIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getParentActivityIntent()}
 **/
android.app.Activity.prototype.getParentActivityIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParentActivityIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onActionModeFinished
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onActionModeFinished(android.view.ActionMode)}
 **/
android.app.Activity.prototype.onActionModeFinished = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function recreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#recreate()}
 **/
android.app.Activity.prototype.recreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreateDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateDialog(int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateDialog(int, android.os.Bundle)}
 **/
android.app.Activity.prototype.onCreateDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function startActivityForResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent, int, android.os.Bundle)}
 **/
android.app.Activity.prototype.startActivityForResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityForResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onTitleChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onTitleChanged(java.lang.CharSequence, int)}
 **/
android.app.Activity.prototype.onTitleChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTitleChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onActivityReenter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onActivityReenter(int, android.content.Intent)}
 **/
android.app.Activity.prototype.onActivityReenter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActivityReenter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onEnterAnimationComplete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onEnterAnimationComplete()}
 **/
android.app.Activity.prototype.onEnterAnimationComplete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onEnterAnimationComplete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onNewIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onNewIntent(android.content.Intent)}
 **/
android.app.Activity.prototype.onNewIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNewIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getActionBar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getActionBar()}
 **/
android.app.Activity.prototype.getActionBar = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreatePanelView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreatePanelView(int)}
 **/
android.app.Activity.prototype.onCreatePanelView = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onKeyMultiple
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyMultiple(int, int, android.view.KeyEvent)}
 **/
android.app.Activity.prototype.onKeyMultiple = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getFragmentManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getFragmentManager()}
 **/
android.app.Activity.prototype.getFragmentManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFragmentManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onPanelClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPanelClosed(int, android.view.Menu)}
 **/
android.app.Activity.prototype.onPanelClosed = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onKeyShortcut
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyShortcut(int, android.view.KeyEvent)}
 **/
android.app.Activity.prototype.onKeyShortcut = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchTrackballEvent(android.view.MotionEvent)}
 **/
android.app.Activity.prototype.dispatchTrackballEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setFeatureDrawableAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFeatureDrawableAlpha(int, int)}
 **/
android.app.Activity.prototype.setFeatureDrawableAlpha = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onVisibleBehindCanceled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onVisibleBehindCanceled()}
 **/
android.app.Activity.prototype.onVisibleBehindCanceled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onVisibleBehindCanceled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function addContentView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#addContentView(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
android.app.Activity.prototype.addContentView = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onActivityResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onActivityResult(int, int, android.content.Intent)}
 **/
android.app.Activity.prototype.onActivityResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActivityResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getWindowManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getWindowManager()}
 **/
android.app.Activity.prototype.getWindowManager = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getRequestedOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getRequestedOrientation()}
 **/
android.app.Activity.prototype.getRequestedOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRequestedOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function triggerSearch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#triggerSearch(java.lang.String, android.os.Bundle)}
 **/
android.app.Activity.prototype.triggerSearch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'triggerSearch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function finish
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finish()}
 **/
android.app.Activity.prototype.finish = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function isChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isChild()}
 **/
android.app.Activity.prototype.isChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function isVoiceInteraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isVoiceInteraction()}
 **/
android.app.Activity.prototype.isVoiceInteraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVoiceInteraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function isVoiceInteractionRoot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isVoiceInteractionRoot()}
 **/
android.app.Activity.prototype.isVoiceInteractionRoot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVoiceInteractionRoot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchKeyShortcutEvent(android.view.KeyEvent)}
 **/
android.app.Activity.prototype.dispatchKeyShortcutEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onProvideReferrer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onProvideReferrer()}
 **/
android.app.Activity.prototype.onProvideReferrer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideReferrer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setVisible(boolean)}
 **/
android.app.Activity.prototype.setVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function isDestroyed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isDestroyed()}
 **/
android.app.Activity.prototype.isDestroyed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDestroyed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setTitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setTitle(int)}
 **/
android.app.Activity.prototype.setTitle = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getVoiceInteractor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getVoiceInteractor()}
 **/
android.app.Activity.prototype.getVoiceInteractor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVoiceInteractor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function stopLockTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#stopLockTask()}
 **/
android.app.Activity.prototype.stopLockTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stopLockTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function startActivities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivities(android.content.Intent[])}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivities(android.content.Intent[], android.os.Bundle)}
 **/
android.app.Activity.prototype.startActivities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onKeyLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyLongPress(int, android.view.KeyEvent)}
 **/
android.app.Activity.prototype.onKeyLongPress = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function startLockTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startLockTask()}
 **/
android.app.Activity.prototype.startLockTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startLockTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onGenericMotionEvent(android.view.MotionEvent)}
 **/
android.app.Activity.prototype.onGenericMotionEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getMenuInflater
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getMenuInflater()}
 **/
android.app.Activity.prototype.getMenuInflater = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function isChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isChangingConfigurations()}
 **/
android.app.Activity.prototype.isChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function isImmersive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isImmersive()}
 **/
android.app.Activity.prototype.isImmersive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isImmersive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setRequestedOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setRequestedOrientation(int)}
 **/
android.app.Activity.prototype.setRequestedOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRequestedOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setEnterSharedElementCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setEnterSharedElementCallback(android.app.SharedElementCallback)}
 **/
android.app.Activity.prototype.setEnterSharedElementCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnterSharedElementCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function dismissDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dismissDialog(int)}
 **/
android.app.Activity.prototype.dismissDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dismissDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getWindow()}
 **/
android.app.Activity.prototype.getWindow = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onRestoreInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRestoreInstanceState(android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRestoreInstanceState(android.os.Bundle, android.os.PersistableBundle)}
 **/
android.app.Activity.prototype.onRestoreInstanceState = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getLocalClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getLocalClassName()}
 **/
android.app.Activity.prototype.getLocalClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onRequestPermissionsResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRequestPermissionsResult(int, java.lang.String[], int[])}
 **/
android.app.Activity.prototype.onRequestPermissionsResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRequestPermissionsResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setTitleColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setTitleColor(int)}
 **/
android.app.Activity.prototype.setTitleColor = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function closeContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#closeContextMenu()}
 **/
android.app.Activity.prototype.closeContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'closeContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function moveTaskToBack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#moveTaskToBack(boolean)}
 **/
android.app.Activity.prototype.moveTaskToBack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'moveTaskToBack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchTouchEvent(android.view.MotionEvent)}
 **/
android.app.Activity.prototype.dispatchTouchEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onActionModeStarted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onActionModeStarted(android.view.ActionMode)}
 **/
android.app.Activity.prototype.onActionModeStarted = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onPostCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPostCreate(android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPostCreate(android.os.Bundle, android.os.PersistableBundle)}
 **/
android.app.Activity.prototype.onPostCreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPostCreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function showDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#showDialog(int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#showDialog(int, android.os.Bundle)}
 **/
android.app.Activity.prototype.showDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getSearchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getSearchEvent()}
 **/
android.app.Activity.prototype.getSearchEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getTaskId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getTaskId()}
 **/
android.app.Activity.prototype.getTaskId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTaskId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function navigateUpTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#navigateUpTo(android.content.Intent)}
 **/
android.app.Activity.prototype.navigateUpTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'navigateUpTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getTitleColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getTitleColor()}
 **/
android.app.Activity.prototype.getTitleColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTitleColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setFeatureDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFeatureDrawable(int, android.graphics.drawable.Drawable)}
 **/
android.app.Activity.prototype.setFeatureDrawable = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function requestWindowFeature
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#requestWindowFeature(int)}
 **/
android.app.Activity.prototype.requestWindowFeature = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function finishActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishActivity(int)}
 **/
android.app.Activity.prototype.finishActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function managedQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#managedQuery(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String)}
 **/
android.app.Activity.prototype.managedQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'managedQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function finishFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishFromChild(android.app.Activity)}
 **/
android.app.Activity.prototype.finishFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function takeKeyEvents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#takeKeyEvents(boolean)}
 **/
android.app.Activity.prototype.takeKeyEvents = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function overridePendingTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#overridePendingTransition(int, int)}
 **/
android.app.Activity.prototype.overridePendingTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'overridePendingTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function unregisterForContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#unregisterForContextMenu(android.view.View)}
 **/
android.app.Activity.prototype.unregisterForContextMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function findViewById
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#findViewById(int)}
 **/
android.app.Activity.prototype.findViewById = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onNavigateUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onNavigateUp()}
 **/
android.app.Activity.prototype.onNavigateUp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNavigateUp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function requestPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#requestPermissions(java.lang.String[], int)}
 **/
android.app.Activity.prototype.requestPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onNavigateUpFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onNavigateUpFromChild(android.app.Activity)}
 **/
android.app.Activity.prototype.onNavigateUpFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNavigateUpFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function shouldShowRequestPermissionRationale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#shouldShowRequestPermissionRationale(java.lang.String)}
 **/
android.app.Activity.prototype.shouldShowRequestPermissionRationale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shouldShowRequestPermissionRationale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function isTaskRoot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isTaskRoot()}
 **/
android.app.Activity.prototype.isTaskRoot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTaskRoot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onProvideAssistData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onProvideAssistData(android.os.Bundle)}
 **/
android.app.Activity.prototype.onProvideAssistData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideAssistData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function isFinishing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isFinishing()}
 **/
android.app.Activity.prototype.isFinishing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFinishing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getIntent()}
 **/
android.app.Activity.prototype.getIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onStop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onStop()}
 **/
android.app.Activity.prototype.onStop = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onWindowStartingActionMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onWindowStartingActionMode(android.view.ActionMode$Callback)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onWindowStartingActionMode(android.view.ActionMode$Callback, int)}
 **/
android.app.Activity.prototype.onWindowStartingActionMode = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function startActivityIfNeeded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityIfNeeded(android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityIfNeeded(android.content.Intent, int, android.os.Bundle)}
 **/
android.app.Activity.prototype.startActivityIfNeeded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityIfNeeded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setExitSharedElementCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setExitSharedElementCallback(android.app.SharedElementCallback)}
 **/
android.app.Activity.prototype.setExitSharedElementCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExitSharedElementCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onPostResume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPostResume()}
 **/
android.app.Activity.prototype.onPostResume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPostResume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreatePanelMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreatePanelMenu(int, android.view.Menu)}
 **/
android.app.Activity.prototype.onCreatePanelMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onPreparePanel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPreparePanel(int, android.view.View, android.view.Menu)}
 **/
android.app.Activity.prototype.onPreparePanel = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setSecondaryProgress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setSecondaryProgress(int)}
 **/
android.app.Activity.prototype.setSecondaryProgress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSecondaryProgress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getSystemService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getSystemService(java.lang.String)}
 **/
android.app.Activity.prototype.getSystemService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function startSearch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startSearch(java.lang.String, boolean, android.os.Bundle, boolean)}
 **/
android.app.Activity.prototype.startSearch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startSearch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setDefaultKeyMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setDefaultKeyMode(int)}
 **/
android.app.Activity.prototype.setDefaultKeyMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultKeyMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onContextItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onContextItemSelected(android.view.MenuItem)}
 **/
android.app.Activity.prototype.onContextItemSelected = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onPause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPause()}
 **/
android.app.Activity.prototype.onPause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onApplyThemeResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onApplyThemeResource(android.content.res.Resources$Theme, int, boolean)}
 **/
android.app.Activity.prototype.onApplyThemeResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onApplyThemeResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onProvideAssistContent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onProvideAssistContent(android.app.assist.AssistContent)}
 **/
android.app.Activity.prototype.onProvideAssistContent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideAssistContent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function finishActivityFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishActivityFromChild(android.app.Activity, int)}
 **/
android.app.Activity.prototype.finishActivityFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishActivityFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function startActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivity(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivity(android.content.Intent, android.os.Bundle)}
 **/
android.app.Activity.prototype.startActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setContentTransitionManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setContentTransitionManager(android.transition.TransitionManager)}
 **/
android.app.Activity.prototype.setContentTransitionManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentTransitionManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function reportFullyDrawn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#reportFullyDrawn()}
 **/
android.app.Activity.prototype.reportFullyDrawn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reportFullyDrawn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getLayoutInflater
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getLayoutInflater()}
 **/
android.app.Activity.prototype.getLayoutInflater = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function startActionMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActionMode(android.view.ActionMode$Callback)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActionMode(android.view.ActionMode$Callback, int)}
 **/
android.app.Activity.prototype.startActionMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActionMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onRetainNonConfigurationInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRetainNonConfigurationInstance()}
 **/
android.app.Activity.prototype.onRetainNonConfigurationInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRetainNonConfigurationInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getReferrer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getReferrer()}
 **/
android.app.Activity.prototype.getReferrer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReferrer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onDestroy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onDestroy()}
 **/
android.app.Activity.prototype.onDestroy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDestroy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onKeyUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyUp(int, android.view.KeyEvent)}
 **/
android.app.Activity.prototype.onKeyUp = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onMenuOpened
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onMenuOpened(int, android.view.Menu)}
 **/
android.app.Activity.prototype.onMenuOpened = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function finishAfterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishAfterTransition()}
 **/
android.app.Activity.prototype.finishAfterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishAfterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function startManagingCursor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startManagingCursor(android.database.Cursor)}
 **/
android.app.Activity.prototype.startManagingCursor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startManagingCursor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onPrepareDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPrepareDialog(int, android.app.Dialog)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPrepareDialog(int, android.app.Dialog, android.os.Bundle)}
 **/
android.app.Activity.prototype.onPrepareDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function openContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#openContextMenu(android.view.View)}
 **/
android.app.Activity.prototype.openContextMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getCallingPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getCallingPackage()}
 **/
android.app.Activity.prototype.getCallingPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCallingPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setMediaController
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setMediaController(android.media.session.MediaController)}
 **/
android.app.Activity.prototype.setMediaController = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onAttachFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onAttachFragment(android.app.Fragment)}
 **/
android.app.Activity.prototype.onAttachFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAttachFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onSaveInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onSaveInstanceState(android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onSaveInstanceState(android.os.Bundle, android.os.PersistableBundle)}
 **/
android.app.Activity.prototype.onSaveInstanceState = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function hasWindowFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#hasWindowFocus()}
 **/
android.app.Activity.prototype.hasWindowFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasWindowFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreateOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateOptionsMenu(android.view.Menu)}
 **/
android.app.Activity.prototype.onCreateOptionsMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getVolumeControlStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getVolumeControlStream()}
 **/
android.app.Activity.prototype.getVolumeControlStream = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setResult(int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setResult(int, android.content.Intent)}
 **/
android.app.Activity.prototype.setResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function startIntentSenderForResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSenderForResult(android.content.IntentSender, int, android.content.Intent, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSenderForResult(android.content.IntentSender, int, android.content.Intent, int, int, int, android.os.Bundle)}
 **/
android.app.Activity.prototype.startIntentSenderForResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startIntentSenderForResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onLowMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onLowMemory()}
 **/
android.app.Activity.prototype.onLowMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLowMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onOptionsItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onOptionsItemSelected(android.view.MenuItem)}
 **/
android.app.Activity.prototype.onOptionsItemSelected = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreateThumbnail
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateThumbnail(android.graphics.Bitmap, android.graphics.Canvas)}
 **/
android.app.Activity.prototype.onCreateThumbnail = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateThumbnail',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onStart()}
 **/
android.app.Activity.prototype.onStart = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function getTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getTitle()}
 **/
android.app.Activity.prototype.getTitle = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function startNextMatchingActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startNextMatchingActivity(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startNextMatchingActivity(android.content.Intent, android.os.Bundle)}
 **/
android.app.Activity.prototype.startNextMatchingActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startNextMatchingActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function releaseInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#releaseInstance()}
 **/
android.app.Activity.prototype.releaseInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'releaseInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onUserInteraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onUserInteraction()}
 **/
android.app.Activity.prototype.onUserInteraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onUserInteraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onTrackballEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onTrackballEvent(android.view.MotionEvent)}
 **/
android.app.Activity.prototype.onTrackballEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onTouchEvent(android.view.MotionEvent)}
 **/
android.app.Activity.prototype.onTouchEvent = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onUserLeaveHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onUserLeaveHint()}
 **/
android.app.Activity.prototype.onUserLeaveHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onUserLeaveHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onResume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onResume()}
 **/
android.app.Activity.prototype.onResume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onResume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getPreferences
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getPreferences(int)}
 **/
android.app.Activity.prototype.getPreferences = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPreferences',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getContentTransitionManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getContentTransitionManager()}
 **/
android.app.Activity.prototype.getContentTransitionManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentTransitionManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onContextMenuClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onContextMenuClosed(android.view.Menu)}
 **/
android.app.Activity.prototype.onContextMenuClosed = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreateView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateView(java.lang.String, android.content.Context, android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateView(android.view.View, java.lang.String, android.content.Context, android.util.AttributeSet)}
 **/
android.app.Activity.prototype.onCreateView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getMediaController
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getMediaController()}
 **/
android.app.Activity.prototype.getMediaController = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
android.app.Activity.prototype.onConfigurationChanged = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onContentChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onContentChanged()}
 **/
android.app.Activity.prototype.onContentChanged = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setFeatureDrawableResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFeatureDrawableResource(int, int)}
 **/
android.app.Activity.prototype.setFeatureDrawableResource = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreateContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateContextMenu(android.view.ContextMenu, android.view.View, android.view.ContextMenu$ContextMenuInfo)}
 **/
android.app.Activity.prototype.onCreateContextMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onPrepareNavigateUpTaskStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPrepareNavigateUpTaskStack(android.app.TaskStackBuilder)}
 **/
android.app.Activity.prototype.onPrepareNavigateUpTaskStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareNavigateUpTaskStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getLastNonConfigurationInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getLastNonConfigurationInstance()}
 **/
android.app.Activity.prototype.getLastNonConfigurationInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastNonConfigurationInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onKeyDown
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyDown(int, android.view.KeyEvent)}
 **/
android.app.Activity.prototype.onKeyDown = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setFeatureDrawableUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFeatureDrawableUri(int, android.net.Uri)}
 **/
android.app.Activity.prototype.setFeatureDrawableUri = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function createPendingResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#createPendingResult(int, android.content.Intent, int)}
 **/
android.app.Activity.prototype.createPendingResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createPendingResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function registerForContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#registerForContextMenu(android.view.View)}
 **/
android.app.Activity.prototype.registerForContextMenu = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dump(java.lang.String, java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
android.app.Activity.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function showLockTaskEscapeMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#showLockTaskEscapeMessage()}
 **/
android.app.Activity.prototype.showLockTaskEscapeMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showLockTaskEscapeMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function getContentScene
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getContentScene()}
 **/
android.app.Activity.prototype.getContentScene = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function startIntentSenderFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSenderFromChild(android.app.Activity, android.content.IntentSender, int, android.content.Intent, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSenderFromChild(android.app.Activity, android.content.IntentSender, int, android.content.Intent, int, int, int, android.os.Bundle)}
 **/
android.app.Activity.prototype.startIntentSenderFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startIntentSenderFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreate(android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreate(android.os.Bundle, android.os.PersistableBundle)}
 **/
android.app.Activity.prototype.onCreate = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function startPostponedEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startPostponedEnterTransition()}
 **/
android.app.Activity.prototype.startPostponedEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startPostponedEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onWindowFocusChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onWindowFocusChanged(boolean)}
 **/
android.app.Activity.prototype.onWindowFocusChanged = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function startActivityFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityFromChild(android.app.Activity, android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityFromChild(android.app.Activity, android.content.Intent, int, android.os.Bundle)}
 **/
android.app.Activity.prototype.startActivityFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onMenuItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onMenuItemSelected(int, android.view.MenuItem)}
 **/
android.app.Activity.prototype.onMenuItemSelected = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function onCreateDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateDescription()}
 **/
android.app.Activity.prototype.onCreateDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function requestVisibleBehind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#requestVisibleBehind(boolean)}
 **/
android.app.Activity.prototype.requestVisibleBehind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestVisibleBehind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function runOnUiThread
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#runOnUiThread(java.lang.Runnable)}
 **/
android.app.Activity.prototype.runOnUiThread = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'runOnUiThread',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function setContentView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setContentView(int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setContentView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setContentView(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
android.app.Activity.prototype.setContentView = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function setImmersive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setImmersive(boolean)}
 **/
android.app.Activity.prototype.setImmersive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setImmersive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onDetachedFromWindow()}
 **/
android.app.Activity.prototype.onDetachedFromWindow = function() {
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
		if (result.apiName === 'android.app.Activity') {
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
 * @function finishAndRemoveTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishAndRemoveTask()}
 **/
android.app.Activity.prototype.finishAndRemoveTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishAndRemoveTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
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
 * @function onStateNotSaved
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onStateNotSaved()}
 **/
android.app.Activity.prototype.onStateNotSaved = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStateNotSaved',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new this(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.Activity;
