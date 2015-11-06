/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.AlertDialog.Builder
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};
global.android.app.AlertDialog = global.android.app.AlertDialog || {};

/**
 * @class android.app.AlertDialog.Builder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html}
 **/
android.app.AlertDialog.Builder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.app.AlertDialog$Builder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.AlertDialog$Builder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.AlertDialog.Builder.prototype = Object.create(SuperClass.prototype);
android.app.AlertDialog.Builder.prototype.constructor = android.app.AlertDialog.Builder;

android.app.AlertDialog.Builder.className = "android.app.AlertDialog$Builder";
android.app.AlertDialog.Builder.prototype.className = "android.app.AlertDialog$Builder";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setOnItemSelectedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setOnItemSelectedListener(android.widget.AdapterView$OnItemSelectedListener)}
 **/
android.app.AlertDialog.Builder.prototype.setOnItemSelectedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnItemSelectedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnDismissListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setOnDismissListener(android.content.DialogInterface$OnDismissListener)}
 **/
android.app.AlertDialog.Builder.prototype.setOnDismissListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnDismissListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNegativeButton
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setNegativeButton(int, android.content.DialogInterface$OnClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setNegativeButton(java.lang.CharSequence, android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.Builder.prototype.setNegativeButton = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNegativeButton',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAdapter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setAdapter(android.widget.ListAdapter, android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.Builder.prototype.setAdapter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAdapter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInverseBackgroundForced
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setInverseBackgroundForced(boolean)}
 **/
android.app.AlertDialog.Builder.prototype.setInverseBackgroundForced = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInverseBackgroundForced',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
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
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#show()}
 **/
android.app.AlertDialog.Builder.prototype.show = function() {
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
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setTitle(int)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setTitle(java.lang.CharSequence)}
 **/
android.app.AlertDialog.Builder.prototype.setTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCancelable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setCancelable(boolean)}
 **/
android.app.AlertDialog.Builder.prototype.setCancelable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCancelable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setMessage(int)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setMessage(java.lang.CharSequence)}
 **/
android.app.AlertDialog.Builder.prototype.setMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setCustomTitle(android.view.View)}
 **/
android.app.AlertDialog.Builder.prototype.setCustomTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPositiveButton
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setPositiveButton(int, android.content.DialogInterface$OnClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setPositiveButton(java.lang.CharSequence, android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.Builder.prototype.setPositiveButton = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPositiveButton',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnCancelListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setOnCancelListener(android.content.DialogInterface$OnCancelListener)}
 **/
android.app.AlertDialog.Builder.prototype.setOnCancelListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnCancelListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNeutralButton
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setNeutralButton(int, android.content.DialogInterface$OnClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setNeutralButton(java.lang.CharSequence, android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.Builder.prototype.setNeutralButton = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNeutralButton',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
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
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setIcon(int)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setIcon(android.graphics.drawable.Drawable)}
 **/
android.app.AlertDialog.Builder.prototype.setIcon = function() {
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
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMultiChoiceItems
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setMultiChoiceItems(int, boolean[], android.content.DialogInterface$OnMultiChoiceClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setMultiChoiceItems(java.lang.CharSequence[], boolean[], android.content.DialogInterface$OnMultiChoiceClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setMultiChoiceItems(android.database.Cursor, java.lang.String, java.lang.String, android.content.DialogInterface$OnMultiChoiceClickListener)}
 **/
android.app.AlertDialog.Builder.prototype.setMultiChoiceItems = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMultiChoiceItems',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnKeyListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setOnKeyListener(android.content.DialogInterface$OnKeyListener)}
 **/
android.app.AlertDialog.Builder.prototype.setOnKeyListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnKeyListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSingleChoiceItems
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setSingleChoiceItems(int, int, android.content.DialogInterface$OnClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setSingleChoiceItems(android.database.Cursor, int, java.lang.String, android.content.DialogInterface$OnClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setSingleChoiceItems(java.lang.CharSequence[], int, android.content.DialogInterface$OnClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setSingleChoiceItems(android.widget.ListAdapter, int, android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.Builder.prototype.setSingleChoiceItems = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSingleChoiceItems',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setView(int)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setView(android.view.View)}
 **/
android.app.AlertDialog.Builder.prototype.setView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setItems
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setItems(int, android.content.DialogInterface$OnClickListener)}
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setItems(java.lang.CharSequence[], android.content.DialogInterface$OnClickListener)}
 **/
android.app.AlertDialog.Builder.prototype.setItems = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setItems',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIconAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setIconAttribute(int)}
 **/
android.app.AlertDialog.Builder.prototype.setIconAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIconAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function create
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#create()}
 **/
android.app.AlertDialog.Builder.prototype.create = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'create',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCursor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#setCursor(android.database.Cursor, android.content.DialogInterface$OnClickListener, java.lang.String)}
 **/
android.app.AlertDialog.Builder.prototype.setCursor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCursor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
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
 * @see {@link http://developer.android.com/reference/android/app/AlertDialog.Builder.html#getContext()}
 **/
android.app.AlertDialog.Builder.prototype.getContext = function() {
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
		if (result.apiName === 'android.app.AlertDialog$Builder') {
			return new android.app.AlertDialog.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.AlertDialog.Builder;
