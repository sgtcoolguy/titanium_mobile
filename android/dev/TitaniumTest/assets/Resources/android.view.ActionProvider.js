/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ActionProvider
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ActionProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html}
 **/
android.view.ActionProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.ActionProvider') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.ActionProvider. Create a subclass using android.view.ActionProvider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.ActionProvider.prototype = Object.create(SuperClass.prototype);
android.view.ActionProvider.prototype.constructor = android.view.ActionProvider;

android.view.ActionProvider.className = "android.view.ActionProvider";
android.view.ActionProvider.prototype.className = "android.view.ActionProvider";

// class property
Object.defineProperty(android.view.ActionProvider, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.ActionProvider',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.ActionProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.ActionProvider',
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
	whatever.prototype = Object.create(android.view.ActionProvider.prototype);
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
 * @function onCreateActionView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#onCreateActionView()}
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#onCreateActionView(android.view.MenuItem)}
 **/
android.view.ActionProvider.prototype.onCreateActionView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateActionView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new android.view.ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function overridesItemVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#overridesItemVisibility()}
 **/
android.view.ActionProvider.prototype.overridesItemVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'overridesItemVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new android.view.ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasSubMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#hasSubMenu()}
 **/
android.view.ActionProvider.prototype.hasSubMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasSubMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new android.view.ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPerformDefaultAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#onPerformDefaultAction()}
 **/
android.view.ActionProvider.prototype.onPerformDefaultAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPerformDefaultAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new android.view.ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVisibilityListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#setVisibilityListener(android.view.ActionProvider$VisibilityListener)}
 **/
android.view.ActionProvider.prototype.setVisibilityListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVisibilityListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new android.view.ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#isVisible()}
 **/
android.view.ActionProvider.prototype.isVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new android.view.ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPrepareSubMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#onPrepareSubMenu(android.view.SubMenu)}
 **/
android.view.ActionProvider.prototype.onPrepareSubMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareSubMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new android.view.ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function refreshVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#refreshVisibility()}
 **/
android.view.ActionProvider.prototype.refreshVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'refreshVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new android.view.ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ActionProvider;
