/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.SharedElementCallback
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.SharedElementCallback
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html}
 **/
android.app.SharedElementCallback = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.SharedElementCallback') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.SharedElementCallback. Create a subclass using android.app.SharedElementCallback.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.SharedElementCallback.prototype = Object.create(SuperClass.prototype);
android.app.SharedElementCallback.prototype.constructor = android.app.SharedElementCallback;

android.app.SharedElementCallback.className = "android.app.SharedElementCallback";
android.app.SharedElementCallback.prototype.className = "android.app.SharedElementCallback";

// class property
Object.defineProperty(android.app.SharedElementCallback, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.SharedElementCallback',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.SharedElementCallback.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.SharedElementCallback',
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
	whatever.prototype = Object.create(android.app.SharedElementCallback.prototype);
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
 * @function onSharedElementEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onSharedElementEnd(java.util.List, java.util.List, java.util.List)}
 **/
android.app.SharedElementCallback.prototype.onSharedElementEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSharedElementEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new android.app.SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSharedElementsArrived
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onSharedElementsArrived(java.util.List, java.util.List, android.app.SharedElementCallback$OnSharedElementsReadyListener)}
 **/
android.app.SharedElementCallback.prototype.onSharedElementsArrived = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSharedElementsArrived',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new android.app.SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateSnapshotView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onCreateSnapshotView(android.content.Context, android.os.Parcelable)}
 **/
android.app.SharedElementCallback.prototype.onCreateSnapshotView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateSnapshotView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new android.app.SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRejectSharedElements
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onRejectSharedElements(java.util.List)}
 **/
android.app.SharedElementCallback.prototype.onRejectSharedElements = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRejectSharedElements',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new android.app.SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSharedElementStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onSharedElementStart(java.util.List, java.util.List, java.util.List)}
 **/
android.app.SharedElementCallback.prototype.onSharedElementStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSharedElementStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new android.app.SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMapSharedElements
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onMapSharedElements(java.util.List, java.util.Map)}
 **/
android.app.SharedElementCallback.prototype.onMapSharedElements = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMapSharedElements',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new android.app.SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCaptureSharedElementSnapshot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onCaptureSharedElementSnapshot(android.view.View, android.graphics.Matrix, android.graphics.RectF)}
 **/
android.app.SharedElementCallback.prototype.onCaptureSharedElementSnapshot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCaptureSharedElementSnapshot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new android.app.SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.SharedElementCallback;
