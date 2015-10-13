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
 * http://developer.android.com/reference/android/view/View.OnClickListener.html
 **/
android.view.View.OnClickListener = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.View$OnClickListener') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			wrapper: this,
			class: 'android.view.View$OnClickListener',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
		
		var instance = this,
			overrides = arguments[0];
		Object.keys(overrides).forEach(function (each) {
			// hang the interface method impl on the anonymous instance of the interface (JS wrapper)
			instance[each] = overrides[each];
			// hang a redirecting method on the proxy that delegates to the JS wrapper
			// (so if we call from native side, it invokes on JS wrapper and not on hyperloop Java proxy)
			result[each] = function() {
				return instance[each](arguments);
			}
		});
	}
	
	this.native = result;
	this._hasPointer = result != null;
	this._private = {};
};

android.view.View.OnClickListener.toString = function() {
	return "[object " + this.className + "]";
};

android.view.View.OnClickListener.prototype.toString = function() {
	return "JS instance of OnClickListener";
};

android.view.View.OnClickListener.prototype.barf = function() {
	console.log("BARF!");
};

android.view.View.OnClickListener.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

android.view.View.OnClickListener.className = "android.view.View$OnClickListener";
android.view.View.OnClickListener.prototype.className = "android.view.View$OnClickListener";

// Constants

// export the interface
module.exports = android.view.View.OnClickListener;