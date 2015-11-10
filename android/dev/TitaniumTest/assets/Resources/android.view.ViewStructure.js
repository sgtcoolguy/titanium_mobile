/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewStructure
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.ViewStructure
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html}
 **/
android.view.ViewStructure = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.ViewStructure') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.ViewStructure. Create a subclass using android.view.ViewStructure.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.ViewStructure.prototype = Object.create(SuperClass.prototype);
android.view.ViewStructure.prototype.constructor = android.view.ViewStructure;

android.view.ViewStructure.className = "android.view.ViewStructure";
android.view.ViewStructure.prototype.className = "android.view.ViewStructure";

// class property
Object.defineProperty(android.view.ViewStructure, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.ViewStructure',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.ViewStructure.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.ViewStructure',
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
	whatever.prototype = Object.create(android.view.ViewStructure.prototype);
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
 * @function setContextClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setContextClickable(boolean)}
 **/
android.view.ViewStructure.prototype.setContextClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContextClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setTextStyle(float, int, int, int)}
 **/
android.view.ViewStructure.prototype.setTextStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setHint(java.lang.CharSequence)}
 **/
android.view.ViewStructure.prototype.setHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setSelected(boolean)}
 **/
android.view.ViewStructure.prototype.setSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setClickable(boolean)}
 **/
android.view.ViewStructure.prototype.setClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#hasExtras()}
 **/
android.view.ViewStructure.prototype.hasExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextLines
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setTextLines(int[], int[])}
 **/
android.view.ViewStructure.prototype.setTextLines = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextLines',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setClassName(java.lang.String)}
 **/
android.view.ViewStructure.prototype.setClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChildCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setChildCount(int)}
 **/
android.view.ViewStructure.prototype.setChildCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChildCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asyncNewChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#asyncNewChild(int)}
 **/
android.view.ViewStructure.prototype.asyncNewChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asyncNewChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDimens
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setDimens(int, int, int, int, int, int)}
 **/
android.view.ViewStructure.prototype.setDimens = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDimens',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setVisibility(int)}
 **/
android.view.ViewStructure.prototype.setVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#newChild(int)}
 **/
android.view.ViewStructure.prototype.newChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setChecked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setChecked(boolean)}
 **/
android.view.ViewStructure.prototype.setChecked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setChecked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setId(int, java.lang.String, java.lang.String, java.lang.String)}
 **/
android.view.ViewStructure.prototype.setId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setContentDescription(java.lang.CharSequence)}
 **/
android.view.ViewStructure.prototype.setContentDescription = function() {
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
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextSelectionStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#getTextSelectionStart()}
 **/
android.view.ViewStructure.prototype.getTextSelectionStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextSelectionStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#getExtras()}
 **/
android.view.ViewStructure.prototype.getExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAccessibilityFocused
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setAccessibilityFocused(boolean)}
 **/
android.view.ViewStructure.prototype.setAccessibilityFocused = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAccessibilityFocused',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setActivated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setActivated(boolean)}
 **/
android.view.ViewStructure.prototype.setActivated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setActivated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setElevation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setElevation(float)}
 **/
android.view.ViewStructure.prototype.setElevation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setElevation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#getText()}
 **/
android.view.ViewStructure.prototype.getText = function() {
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
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLongClickable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setLongClickable(boolean)}
 **/
android.view.ViewStructure.prototype.setLongClickable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLongClickable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCheckable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setCheckable(boolean)}
 **/
android.view.ViewStructure.prototype.setCheckable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCheckable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setAlpha(float)}
 **/
android.view.ViewStructure.prototype.setAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFocusable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setFocusable(boolean)}
 **/
android.view.ViewStructure.prototype.setFocusable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFocusable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChildCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#getChildCount()}
 **/
android.view.ViewStructure.prototype.getChildCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChildCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setEnabled(boolean)}
 **/
android.view.ViewStructure.prototype.setEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransformation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setTransformation(android.graphics.Matrix)}
 **/
android.view.ViewStructure.prototype.setTransformation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransformation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFocused
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setFocused(boolean)}
 **/
android.view.ViewStructure.prototype.setFocused = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFocused',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextSelectionEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#getTextSelectionEnd()}
 **/
android.view.ViewStructure.prototype.getTextSelectionEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextSelectionEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#getHint()}
 **/
android.view.ViewStructure.prototype.getHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addChildCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#addChildCount(int)}
 **/
android.view.ViewStructure.prototype.addChildCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addChildCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setText(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#setText(java.lang.CharSequence, int, int)}
 **/
android.view.ViewStructure.prototype.setText = function() {
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
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function asyncCommit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewStructure.html#asyncCommit()}
 **/
android.view.ViewStructure.prototype.asyncCommit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'asyncCommit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewStructure') {
			return new android.view.ViewStructure(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.ViewStructure;
