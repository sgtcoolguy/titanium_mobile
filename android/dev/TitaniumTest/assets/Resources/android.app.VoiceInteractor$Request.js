/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.VoiceInteractor.Request
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};
global.android.app.VoiceInteractor = global.android.app.VoiceInteractor || {};

/**
 * @class android.app.VoiceInteractor.Request
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html}
 **/
android.app.VoiceInteractor.Request = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.VoiceInteractor$Request') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.VoiceInteractor$Request. Create a subclass using android.app.VoiceInteractor.Request.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.VoiceInteractor.Request.prototype = Object.create(SuperClass.prototype);
android.app.VoiceInteractor.Request.prototype.constructor = android.app.VoiceInteractor.Request;

android.app.VoiceInteractor.Request.className = "android.app.VoiceInteractor$Request";
android.app.VoiceInteractor.Request.prototype.className = "android.app.VoiceInteractor$Request";

// class property
Object.defineProperty(android.app.VoiceInteractor.Request, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.VoiceInteractor$Request',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.VoiceInteractor.Request.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.VoiceInteractor$Request',
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
	whatever.prototype = Object.create(android.app.VoiceInteractor.Request.prototype);
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
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html#cancel()}
 **/
android.app.VoiceInteractor.Request.prototype.cancel = function() {
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
		if (result.apiName === 'android.app.VoiceInteractor$Request') {
			return new android.app.VoiceInteractor.Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html#getName()}
 **/
android.app.VoiceInteractor.Request.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$Request') {
			return new android.app.VoiceInteractor.Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html#getActivity()}
 **/
android.app.VoiceInteractor.Request.prototype.getActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$Request') {
			return new android.app.VoiceInteractor.Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAttached
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html#onAttached(android.app.Activity)}
 **/
android.app.VoiceInteractor.Request.prototype.onAttached = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAttached',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$Request') {
			return new android.app.VoiceInteractor.Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html#onCancel()}
 **/
android.app.VoiceInteractor.Request.prototype.onCancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$Request') {
			return new android.app.VoiceInteractor.Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html#toString()}
 **/
android.app.VoiceInteractor.Request.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$Request') {
			return new android.app.VoiceInteractor.Request(result);
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
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html#getContext()}
 **/
android.app.VoiceInteractor.Request.prototype.getContext = function() {
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
		if (result.apiName === 'android.app.VoiceInteractor$Request') {
			return new android.app.VoiceInteractor.Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDetached
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.Request.html#onDetached()}
 **/
android.app.VoiceInteractor.Request.prototype.onDetached = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDetached',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$Request') {
			return new android.app.VoiceInteractor.Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.VoiceInteractor.Request;
