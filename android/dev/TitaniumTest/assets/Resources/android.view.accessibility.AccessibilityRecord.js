/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityRecord
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};
global.android.view.accessibility = global.android.view.accessibility || {};

/**
 * @class android.view.accessibility.AccessibilityRecord
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html}
 **/
android.view.accessibility.AccessibilityRecord = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.view.accessibility.AccessibilityRecord') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityRecord',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.view.accessibility.AccessibilityRecord.prototype = Object.create(SuperClass.prototype);
android.view.accessibility.AccessibilityRecord.prototype.constructor = android.view.accessibility.AccessibilityRecord;

android.view.accessibility.AccessibilityRecord.className = "android.view.accessibility.AccessibilityRecord";
android.view.accessibility.AccessibilityRecord.prototype.className = "android.view.accessibility.AccessibilityRecord";

// class property
Object.defineProperty(android.view.accessibility.AccessibilityRecord, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.view.accessibility.AccessibilityRecord',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.view.accessibility.AccessibilityRecord.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.view.accessibility.AccessibilityRecord',
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
	whatever.prototype = Object.create(android.view.accessibility.AccessibilityRecord.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#obtain(android.view.accessibility.AccessibilityRecord)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#obtain()}
 **/
android.view.accessibility.AccessibilityRecord.obtain = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'obtain',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
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
 * @function setSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setSource(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setSource(android.view.View, int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPassword
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setPassword(boolean)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setPassword = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPassword',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBeforeText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setBeforeText(java.lang.CharSequence)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setBeforeText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBeforeText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFullScreen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setFullScreen(boolean)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setFullScreen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFullScreen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAddedCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getAddedCount()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getAddedCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAddedCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getItemCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getItemCount()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getItemCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getItemCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getContentDescription()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getContentDescription = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setClassName(java.lang.CharSequence)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setClassName = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxScrollX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getMaxScrollX()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getMaxScrollX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxScrollX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxScrollY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getMaxScrollY()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getMaxScrollY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxScrollY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFromIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getFromIndex()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getFromIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFromIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFromIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setFromIndex(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setFromIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFromIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getScrollX()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getScrollX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScrollY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getScrollY()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getScrollY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScrollY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isScrollable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#isScrollable()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.isScrollable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isScrollable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCurrentItemIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setCurrentItemIndex(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setCurrentItemIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCurrentItemIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setChecked(boolean)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setChecked = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function recycle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#recycle()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.recycle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recycle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setContentDescription(java.lang.CharSequence)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setContentDescription = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentItemIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getCurrentItemIndex()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getCurrentItemIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentItemIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaxScrollX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setMaxScrollX(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setMaxScrollX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxScrollX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaxScrollY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setMaxScrollY(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setMaxScrollY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxScrollY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getToIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getToIndex()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getToIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getToIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPassword
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#isPassword()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.isPassword = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPassword',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setToIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setToIndex(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setToIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setToIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRemovedCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getRemovedCount()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getRemovedCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRemovedCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getText()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getText = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBeforeText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getBeforeText()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getBeforeText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBeforeText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isChecked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#isChecked()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.isChecked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChecked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setItemCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setItemCount(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setItemCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setItemCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setEnabled(boolean)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setEnabled = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getSource()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#isEnabled()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.isEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setScrollable(boolean)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setScrollable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAddedCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setAddedCount(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setAddedCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAddedCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelableData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getParcelableData()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getParcelableData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelableData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFullScreen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#isFullScreen()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.isFullScreen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFullScreen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#toString()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.toString = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getClassName()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setScrollX(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setScrollX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRemovedCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setRemovedCount(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setRemovedCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRemovedCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#getWindowId()}
 **/
android.view.accessibility.AccessibilityRecord.prototype.getWindowId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScrollY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setScrollY(int)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setScrollY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScrollY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setParcelableData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityRecord.html#setParcelableData(android.os.Parcelable)}
 **/
android.view.accessibility.AccessibilityRecord.prototype.setParcelableData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setParcelableData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityRecord') {
			return new android.view.accessibility.AccessibilityRecord(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.accessibility.AccessibilityRecord;
