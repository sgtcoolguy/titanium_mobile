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
 * http://developer.android.com/reference/android/view/MenuItem.html
 **/
android.view.MenuItem = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName && arguments[0].apiName === 'android.view.MenuItem') {
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
			class: 'android.view.MenuItem',
			alloc: true,
			args: [modified]
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

android.view.MenuItem.toString = function() {
	return "[object " + this.className + "]";
};

android.view.MenuItem.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

android.view.MenuItem.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

android.view.MenuItem.className = "android.view.MenuItem";
android.view.MenuItem.prototype.className = "android.view.MenuItem";

// class property
Object.defineProperty(android.view.MenuItem, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.MenuItem',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Constants
// http://developer.android.com/reference/android/view/MenuItem.html#SHOW_AS_ACTION_IF_ROOM
android.view.MenuItem.SHOW_AS_ACTION_IF_ROOM = 1;
// http://developer.android.com/reference/android/view/MenuItem.html#SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
android.view.MenuItem.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW = 8;
// http://developer.android.com/reference/android/view/MenuItem.html#SHOW_AS_ACTION_NEVER
android.view.MenuItem.SHOW_AS_ACTION_NEVER = 0;
// http://developer.android.com/reference/android/view/MenuItem.html#SHOW_AS_ACTION_ALWAYS
android.view.MenuItem.SHOW_AS_ACTION_ALWAYS = 2;
// http://developer.android.com/reference/android/view/MenuItem.html#SHOW_AS_ACTION_WITH_TEXT
android.view.MenuItem.SHOW_AS_ACTION_WITH_TEXT = 4;

// export the interface
module.exports = android.view.MenuItem;
