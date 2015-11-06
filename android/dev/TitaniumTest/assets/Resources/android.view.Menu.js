/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * constructor
 * http://developer.android.com/reference/android/view/Menu.html
 **/
android.view.Menu = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.Menu') {
		result = arguments[0];
	}
	else {
		var instance = this,
			copy = Array.prototype.slice.call(arguments)[0],
			modified = {};

		function _wrapArg(arg) {
			if (arg.apiName && arg.callNativeFunction) { // Assume hyperloop proxy, wrap in JS wrapper
				var other = require(arg.apiName);
				return new other(arg);
			}
			return arg;
		}

		function _wrapArgs() {
			var newArgs = [];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i] = _wrapArg(arguments[i]);
			}
			return newArgs;
		};
		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(this, arguments);
			};

			// Hang a delegate on the "overrides" object we pass into Java.
			// This one wraps hyperloop proxies from Java in their JS wrapper before forwarding on
			modified[each] = function() {
				return instance[each].apply(this, _wrapArgs.apply(this, arguments));
			}
		});
		// Create interface proxy and pass along the modified overrides that auto wrap native objects in JS wrappers
		// and delegate to the original impls.
		result = Hyperloop.createProxy({
			class: 'android.view.Menu',
			alloc: true,
			args: [modified]
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

android.view.Menu.toString = function() {
	return "[object " + this.className + "]";
};

android.view.Menu.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

android.view.Menu.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

android.view.Menu.className = "android.view.Menu";
android.view.Menu.prototype.className = "android.view.Menu";

// Constants
// http://developer.android.com/reference/android/view/Menu.html#CATEGORY_ALTERNATIVE
android.view.Menu.CATEGORY_ALTERNATIVE = 262144;
// http://developer.android.com/reference/android/view/Menu.html#FLAG_ALWAYS_PERFORM_CLOSE
android.view.Menu.FLAG_ALWAYS_PERFORM_CLOSE = 2;
// http://developer.android.com/reference/android/view/Menu.html#FLAG_PERFORM_NO_CLOSE
android.view.Menu.FLAG_PERFORM_NO_CLOSE = 1;
// http://developer.android.com/reference/android/view/Menu.html#CATEGORY_CONTAINER
android.view.Menu.CATEGORY_CONTAINER = 65536;
// http://developer.android.com/reference/android/view/Menu.html#CATEGORY_SYSTEM
android.view.Menu.CATEGORY_SYSTEM = 131072;
// http://developer.android.com/reference/android/view/Menu.html#CATEGORY_SECONDARY
android.view.Menu.CATEGORY_SECONDARY = 196608;
// http://developer.android.com/reference/android/view/Menu.html#FLAG_APPEND_TO_GROUP
android.view.Menu.FLAG_APPEND_TO_GROUP = 1;
// http://developer.android.com/reference/android/view/Menu.html#FIRST
android.view.Menu.FIRST = 1;
// http://developer.android.com/reference/android/view/Menu.html#NONE
android.view.Menu.NONE = 0;

// export the interface
module.exports = android.view.Menu;
