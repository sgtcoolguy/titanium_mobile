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
global.android.view.View = global.android.view.View || {};

/**
 * constructor
 * http://developer.android.com/reference/android/view/View.OnTouchListener.html
 **/
android.view.View.OnTouchListener = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.View$OnTouchListener') {
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
		// Take original overrides, copy them to hang off JS wrapper later.
		// Pass along to Java world a function that wraps native arguments before delegating to the JS wrapper
		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(this, arguments);
			};
			
			modified[each] = function() {
				return instance[each].apply(this, _wrapArgs.apply(this, arguments));
			}
		});
		// Create interface proxy and pass along the modified overrides that auto wrap native objects in JS wrappers
		// and delegate to the original impls.
		result = Hyperloop.createProxy({
			class: 'android.view.View$OnTouchListener',
			alloc: true,
			args: [modified]
		});
	}

	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

android.view.View.OnTouchListener.toString = function() {
	return "[object " + this.className + "]";
};

android.view.View.OnTouchListener.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

android.view.View.OnTouchListener.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

android.view.View.OnTouchListener.className = "android.view.View$OnTouchListener";
android.view.View.OnTouchListener.prototype.className = "android.view.View$OnTouchListener";

// Constants

// export the interface
module.exports = android.view.View.OnTouchListener;
