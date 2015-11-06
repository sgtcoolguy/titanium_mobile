/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.database = global.android.database || {};

/**
 * constructor
 * http://developer.android.com/reference/android/database/Cursor.html
 **/
android.database.Cursor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.database.Cursor') {
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
			class: 'android.database.Cursor',
			alloc: true,
			args: [modified]
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

android.database.Cursor.toString = function() {
	return "[object " + this.className + "]";
};

android.database.Cursor.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

android.database.Cursor.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

android.database.Cursor.className = "android.database.Cursor";
android.database.Cursor.prototype.className = "android.database.Cursor";

// Constants
// http://developer.android.com/reference/android/database/Cursor.html#FIELD_TYPE_FLOAT
android.database.Cursor.FIELD_TYPE_FLOAT = 2;
// http://developer.android.com/reference/android/database/Cursor.html#FIELD_TYPE_INTEGER
android.database.Cursor.FIELD_TYPE_INTEGER = 1;
// http://developer.android.com/reference/android/database/Cursor.html#FIELD_TYPE_BLOB
android.database.Cursor.FIELD_TYPE_BLOB = 4;
// http://developer.android.com/reference/android/database/Cursor.html#FIELD_TYPE_NULL
android.database.Cursor.FIELD_TYPE_NULL = 0;
// http://developer.android.com/reference/android/database/Cursor.html#FIELD_TYPE_STRING
android.database.Cursor.FIELD_TYPE_STRING = 3;

// export the interface
module.exports = android.database.Cursor;
