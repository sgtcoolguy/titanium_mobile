/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.FragmentTransaction
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.FragmentTransaction
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html}
 **/
android.app.FragmentTransaction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.FragmentTransaction') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.FragmentTransaction',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.FragmentTransaction.prototype = Object.create(SuperClass.prototype);
android.app.FragmentTransaction.prototype.constructor = android.app.FragmentTransaction;

android.app.FragmentTransaction.className = "android.app.FragmentTransaction";
android.app.FragmentTransaction.prototype.className = "android.app.FragmentTransaction";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_FRAGMENT_FADE}
 */
android.app.FragmentTransaction.TRANSIT_FRAGMENT_FADE = 4099;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_ENTER_MASK}
 */
android.app.FragmentTransaction.TRANSIT_ENTER_MASK = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_EXIT_MASK}
 */
android.app.FragmentTransaction.TRANSIT_EXIT_MASK = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_FRAGMENT_CLOSE}
 */
android.app.FragmentTransaction.TRANSIT_FRAGMENT_CLOSE = 8194;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_UNSET}
 */
android.app.FragmentTransaction.TRANSIT_UNSET = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_NONE}
 */
android.app.FragmentTransaction.TRANSIT_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_FRAGMENT_OPEN}
 */
android.app.FragmentTransaction.TRANSIT_FRAGMENT_OPEN = 4097;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function add
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#add(android.app.Fragment, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#add(int, android.app.Fragment)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#add(int, android.app.Fragment, java.lang.String)}
 **/
android.app.FragmentTransaction.prototype.add = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'add',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBreadCrumbShortTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setBreadCrumbShortTitle(int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setBreadCrumbShortTitle(java.lang.CharSequence)}
 **/
android.app.FragmentTransaction.prototype.setBreadCrumbShortTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBreadCrumbShortTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function commitAllowingStateLoss
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#commitAllowingStateLoss()}
 **/
android.app.FragmentTransaction.prototype.commitAllowingStateLoss = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'commitAllowingStateLoss',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAddToBackStackAllowed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#isAddToBackStackAllowed()}
 **/
android.app.FragmentTransaction.prototype.isAddToBackStackAllowed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAddToBackStackAllowed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addSharedElement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#addSharedElement(android.view.View, java.lang.String)}
 **/
android.app.FragmentTransaction.prototype.addSharedElement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addSharedElement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#replace(int, android.app.Fragment)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#replace(int, android.app.Fragment, java.lang.String)}
 **/
android.app.FragmentTransaction.prototype.replace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function show
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#show(android.app.Fragment)}
 **/
android.app.FragmentTransaction.prototype.show = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'show',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#isEmpty()}
 **/
android.app.FragmentTransaction.prototype.isEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function commit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#commit()}
 **/
android.app.FragmentTransaction.prototype.commit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'commit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remove
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#remove(android.app.Fragment)}
 **/
android.app.FragmentTransaction.prototype.remove = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'remove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hide
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#hide(android.app.Fragment)}
 **/
android.app.FragmentTransaction.prototype.hide = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hide',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function disallowAddToBackStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#disallowAddToBackStack()}
 **/
android.app.FragmentTransaction.prototype.disallowAddToBackStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disallowAddToBackStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBreadCrumbTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setBreadCrumbTitle(int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setBreadCrumbTitle(java.lang.CharSequence)}
 **/
android.app.FragmentTransaction.prototype.setBreadCrumbTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBreadCrumbTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomAnimations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setCustomAnimations(int, int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setCustomAnimations(int, int, int, int)}
 **/
android.app.FragmentTransaction.prototype.setCustomAnimations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomAnimations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setTransition(int)}
 **/
android.app.FragmentTransaction.prototype.setTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransitionStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setTransitionStyle(int)}
 **/
android.app.FragmentTransaction.prototype.setTransitionStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransitionStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addToBackStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#addToBackStack(java.lang.String)}
 **/
android.app.FragmentTransaction.prototype.addToBackStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addToBackStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#detach(android.app.Fragment)}
 **/
android.app.FragmentTransaction.prototype.detach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#attach(android.app.Fragment)}
 **/
android.app.FragmentTransaction.prototype.attach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new android.app.FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.FragmentTransaction;
