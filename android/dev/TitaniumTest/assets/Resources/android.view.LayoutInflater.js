/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.LayoutInflater
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.LayoutInflater
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html}
 **/
android.view.LayoutInflater = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.LayoutInflater') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.LayoutInflater. Create a subclass using android.view.LayoutInflater.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.LayoutInflater.prototype = Object.create(SuperClass.prototype);
android.view.LayoutInflater.prototype.constructor = android.view.LayoutInflater;

android.view.LayoutInflater.className = "android.view.LayoutInflater";
android.view.LayoutInflater.prototype.className = "android.view.LayoutInflater";

// class property
Object.defineProperty(android.view.LayoutInflater, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.LayoutInflater',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.LayoutInflater.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.LayoutInflater',
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
	whatever.prototype = Object.create(android.view.LayoutInflater.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function from
 * @static
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#from(android.content.Context)}
 **/
android.view.LayoutInflater.from = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'from',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
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
 * @function setFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#setFactory(android.view.LayoutInflater$Factory)}
 **/
android.view.LayoutInflater.prototype.setFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFactory2
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#setFactory2(android.view.LayoutInflater$Factory2)}
 **/
android.view.LayoutInflater.prototype.setFactory2 = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFactory2',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cloneInContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#cloneInContext(android.content.Context)}
 **/
android.view.LayoutInflater.prototype.cloneInContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cloneInContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFactory2
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#getFactory2()}
 **/
android.view.LayoutInflater.prototype.getFactory2 = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFactory2',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#getFactory()}
 **/
android.view.LayoutInflater.prototype.getFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#setFilter(android.view.LayoutInflater$Filter)}
 **/
android.view.LayoutInflater.prototype.setFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#getFilter()}
 **/
android.view.LayoutInflater.prototype.getFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inflate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#inflate(int, android.view.ViewGroup)}
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#inflate(org.xmlpull.v1.XmlPullParser, android.view.ViewGroup)}
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#inflate(int, android.view.ViewGroup, boolean)}
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#inflate(org.xmlpull.v1.XmlPullParser, android.view.ViewGroup, boolean)}
 **/
android.view.LayoutInflater.prototype.inflate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inflate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#onCreateView(java.lang.String, android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#onCreateView(android.view.View, java.lang.String, android.util.AttributeSet)}
 **/
android.view.LayoutInflater.prototype.onCreateView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#createView(java.lang.String, java.lang.String, android.util.AttributeSet)}
 **/
android.view.LayoutInflater.prototype.createView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
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
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#getContext()}
 **/
android.view.LayoutInflater.prototype.getContext = function() {
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
		if (result.apiName === 'android.view.LayoutInflater') {
			return new android.view.LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.LayoutInflater;
