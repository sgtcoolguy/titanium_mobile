/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.ActionBar.Tab
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};
global.android.app.ActionBar = global.android.app.ActionBar || {};

/**
 * @class android.app.ActionBar.Tab
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html}
 **/
android.app.ActionBar.Tab = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.ActionBar$Tab') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.ActionBar$Tab. Create a subclass using android.app.ActionBar.Tab.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.ActionBar.Tab.prototype = Object.create(SuperClass.prototype);
android.app.ActionBar.Tab.prototype.constructor = android.app.ActionBar.Tab;

android.app.ActionBar.Tab.className = "android.app.ActionBar$Tab";
android.app.ActionBar.Tab.prototype.className = "android.app.ActionBar$Tab";

// class property
Object.defineProperty(android.app.ActionBar.Tab, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.ActionBar$Tab',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.ActionBar.Tab.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.ActionBar$Tab',
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
	whatever.prototype = Object.create(android.app.ActionBar.Tab.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#INVALID_POSITION}
 */
android.app.ActionBar.Tab.INVALID_POSITION = -1;

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function select
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#select()}
 **/
android.app.ActionBar.Tab.prototype.select = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'select',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#getText()}
 **/
android.app.ActionBar.Tab.prototype.getText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setCustomView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setCustomView(int)}
 **/
android.app.ActionBar.Tab.prototype.setCustomView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#getContentDescription()}
 **/
android.app.ActionBar.Tab.prototype.getContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#getTag()}
 **/
android.app.ActionBar.Tab.prototype.getTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#getIcon()}
 **/
android.app.ActionBar.Tab.prototype.getIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setIcon(android.graphics.drawable.Drawable)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setIcon(int)}
 **/
android.app.ActionBar.Tab.prototype.setIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#getPosition()}
 **/
android.app.ActionBar.Tab.prototype.getPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCustomView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#getCustomView()}
 **/
android.app.ActionBar.Tab.prototype.getCustomView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCustomView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setTag(java.lang.Object)}
 **/
android.app.ActionBar.Tab.prototype.setTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setContentDescription(int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setContentDescription(java.lang.CharSequence)}
 **/
android.app.ActionBar.Tab.prototype.setContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTabListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setTabListener(android.app.ActionBar$TabListener)}
 **/
android.app.ActionBar.Tab.prototype.setTabListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTabListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setText(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.Tab.html#setText(int)}
 **/
android.app.ActionBar.Tab.prototype.setText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar$Tab') {
			return new android.app.ActionBar.Tab(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.ActionBar.Tab;
