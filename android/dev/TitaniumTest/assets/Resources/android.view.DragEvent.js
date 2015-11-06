/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.DragEvent
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.DragEvent
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html}
 **/
android.view.DragEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.DragEvent') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.DragEvent',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.DragEvent.prototype = Object.create(SuperClass.prototype);
android.view.DragEvent.prototype.constructor = android.view.DragEvent;

android.view.DragEvent.className = "android.view.DragEvent";
android.view.DragEvent.prototype.className = "android.view.DragEvent";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_ENDED}
 */
android.view.DragEvent.ACTION_DRAG_ENDED = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_EXITED}
 */
android.view.DragEvent.ACTION_DRAG_EXITED = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_STARTED}
 */
android.view.DragEvent.ACTION_DRAG_STARTED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_ENTERED}
 */
android.view.DragEvent.ACTION_DRAG_ENTERED = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DROP}
 */
android.view.DragEvent.ACTION_DROP = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_LOCATION}
 */
android.view.DragEvent.ACTION_DRAG_LOCATION = 2;

// Static fields
// http://developer.android.com/reference/android/view/DragEvent.html#CREATOR
Object.defineProperty(android.view.DragEvent, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.DragEvent') {
				return new android.view.DragEvent(result);
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
 * @function getLocalState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getLocalState()}
 **/
android.view.DragEvent.prototype.getLocalState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getX()}
 **/
android.view.DragEvent.prototype.getX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getY()}
 **/
android.view.DragEvent.prototype.getY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getClipDescription()}
 **/
android.view.DragEvent.prototype.getClipDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getClipData()}
 **/
android.view.DragEvent.prototype.getClipData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getResult()}
 **/
android.view.DragEvent.prototype.getResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getAction()}
 **/
android.view.DragEvent.prototype.getAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#toString()}
 **/
android.view.DragEvent.prototype.toString = function() {
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
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#describeContents()}
 **/
android.view.DragEvent.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.DragEvent.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new android.view.DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.DragEvent;
