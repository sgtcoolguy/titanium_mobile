/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.FragmentManager
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.FragmentManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html}
 **/
android.app.FragmentManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.FragmentManager') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.FragmentManager. Create a subclass using android.app.FragmentManager.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.FragmentManager.prototype = Object.create(SuperClass.prototype);
android.app.FragmentManager.prototype.constructor = android.app.FragmentManager;

android.app.FragmentManager.className = "android.app.FragmentManager";
android.app.FragmentManager.prototype.className = "android.app.FragmentManager";

// class property
Object.defineProperty(android.app.FragmentManager, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.FragmentManager',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.FragmentManager.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.FragmentManager',
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
	whatever.prototype = Object.create(android.app.FragmentManager.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#POP_BACK_STACK_INCLUSIVE}
 */
android.app.FragmentManager.POP_BACK_STACK_INCLUSIVE = 1;

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function enableDebugLogging
 * @static
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#enableDebugLogging(boolean)}
 **/
android.app.FragmentManager.enableDebugLogging = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'enableDebugLogging',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function putFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#putFragment(android.os.Bundle, java.lang.String, android.app.Fragment)}
 **/
android.app.FragmentManager.prototype.putFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackStackEntryAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#getBackStackEntryAt(int)}
 **/
android.app.FragmentManager.prototype.getBackStackEntryAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackStackEntryAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnBackStackChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#removeOnBackStackChangedListener(android.app.FragmentManager$OnBackStackChangedListener)}
 **/
android.app.FragmentManager.prototype.removeOnBackStackChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnBackStackChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackStackEntryCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#getBackStackEntryCount()}
 **/
android.app.FragmentManager.prototype.getBackStackEntryCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackStackEntryCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
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
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#isDestroyed()}
 **/
android.app.FragmentManager.prototype.isDestroyed = function() {
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
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnBackStackChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#addOnBackStackChangedListener(android.app.FragmentManager$OnBackStackChangedListener)}
 **/
android.app.FragmentManager.prototype.addOnBackStackChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnBackStackChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function popBackStackImmediate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStackImmediate()}
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStackImmediate(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStackImmediate(int, int)}
 **/
android.app.FragmentManager.prototype.popBackStackImmediate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'popBackStackImmediate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function saveFragmentInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#saveFragmentInstanceState(android.app.Fragment)}
 **/
android.app.FragmentManager.prototype.saveFragmentInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'saveFragmentInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function popBackStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStack()}
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStack(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStack(int, int)}
 **/
android.app.FragmentManager.prototype.popBackStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'popBackStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransaction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#beginTransaction()}
 **/
android.app.FragmentManager.prototype.beginTransaction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransaction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function executePendingTransactions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#executePendingTransactions()}
 **/
android.app.FragmentManager.prototype.executePendingTransactions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'executePendingTransactions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findFragmentById
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#findFragmentById(int)}
 **/
android.app.FragmentManager.prototype.findFragmentById = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findFragmentById',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#getFragment(android.os.Bundle, java.lang.String)}
 **/
android.app.FragmentManager.prototype.getFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
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
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#dump(java.lang.String, java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
android.app.FragmentManager.prototype.dump = function() {
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
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findFragmentByTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#findFragmentByTag(java.lang.String)}
 **/
android.app.FragmentManager.prototype.findFragmentByTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findFragmentByTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
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
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#invalidateOptionsMenu()}
 **/
android.app.FragmentManager.prototype.invalidateOptionsMenu = function() {
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
		if (result.apiName === 'android.app.FragmentManager') {
			return new android.app.FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.FragmentManager;
