/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.Fragment
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.app = global.android.app || {};

/**
 * @class android.app.Fragment
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html}
 **/
android.app.Fragment = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.app.Fragment') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.app.Fragment',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.app.Fragment.prototype = Object.create(SuperClass.prototype);
android.app.Fragment.prototype.constructor = android.app.Fragment;

android.app.Fragment.className = "android.app.Fragment";
android.app.Fragment.prototype.className = "android.app.Fragment";

// class property
Object.defineProperty(android.app.Fragment, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.app.Fragment',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.app.Fragment.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.app.Fragment',
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
	whatever.prototype = Object.create(android.app.Fragment.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function instantiate
 * @static
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#instantiate(android.content.Context, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#instantiate(android.content.Context, java.lang.String, android.os.Bundle)}
 **/
android.app.Fragment.instantiate = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'instantiate',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
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
 * @function getSharedElementEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getSharedElementEnterTransition()}
 **/
android.app.Fragment.prototype.getSharedElementEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSharedElementEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllowReturnTransitionOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getAllowReturnTransitionOverlap()}
 **/
android.app.Fragment.prototype.getAllowReturnTransitionOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllowReturnTransitionOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterForContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#unregisterForContextMenu(android.view.View)}
 **/
android.app.Fragment.prototype.unregisterForContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterForContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDestroyView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onDestroyView()}
 **/
android.app.Fragment.prototype.onDestroyView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDestroyView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExitTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getExitTransition()}
 **/
android.app.Fragment.prototype.getExitTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExitTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#requestPermissions(java.lang.String[], int)}
 **/
android.app.Fragment.prototype.requestPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHasOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setHasOptionsMenu(boolean)}
 **/
android.app.Fragment.prototype.setHasOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHasOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAllowEnterTransitionOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setAllowEnterTransitionOverlap(boolean)}
 **/
android.app.Fragment.prototype.setAllowEnterTransitionOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAllowEnterTransitionOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActivityResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onActivityResult(int, int, android.content.Intent)}
 **/
android.app.Fragment.prototype.onActivityResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActivityResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDetach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onDetach()}
 **/
android.app.Fragment.prototype.onDetach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDetach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLowMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onLowMemory()}
 **/
android.app.Fragment.prototype.onLowMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLowMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getEnterTransition()}
 **/
android.app.Fragment.prototype.getEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReturnTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setReturnTransition(android.transition.Transition)}
 **/
android.app.Fragment.prototype.setReturnTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReturnTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onOptionsItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onOptionsItemSelected(android.view.MenuItem)}
 **/
android.app.Fragment.prototype.onOptionsItemSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onOptionsItemSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isResumed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#isResumed()}
 **/
android.app.Fragment.prototype.isResumed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isResumed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExitTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setExitTransition(android.transition.Transition)}
 **/
android.app.Fragment.prototype.setExitTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExitTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onStart()}
 **/
android.app.Fragment.prototype.onStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shouldShowRequestPermissionRationale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#shouldShowRequestPermissionRationale(java.lang.String)}
 **/
android.app.Fragment.prototype.shouldShowRequestPermissionRationale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shouldShowRequestPermissionRationale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetRequestCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getTargetRequestCode()}
 **/
android.app.Fragment.prototype.getTargetRequestCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetRequestCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUserVisibleHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setUserVisibleHint(boolean)}
 **/
android.app.Fragment.prototype.setUserVisibleHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUserVisibleHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAttach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onAttach(android.content.Context)}
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onAttach(android.app.Activity)}
 **/
android.app.Fragment.prototype.onAttach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAttach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInitialSavedState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setInitialSavedState(android.app.Fragment$SavedState)}
 **/
android.app.Fragment.prototype.setInitialSavedState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInitialSavedState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAdded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#isAdded()}
 **/
android.app.Fragment.prototype.isAdded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAdded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReenterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getReenterTransition()}
 **/
android.app.Fragment.prototype.getReenterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReenterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSharedElementReturnTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getSharedElementReturnTransition()}
 **/
android.app.Fragment.prototype.getSharedElementReturnTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSharedElementReturnTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRetainInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getRetainInstance()}
 **/
android.app.Fragment.prototype.getRetainInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRetainInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getView()}
 **/
android.app.Fragment.prototype.getView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHost
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getHost()}
 **/
android.app.Fragment.prototype.getHost = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHost',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRetainInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setRetainInstance(boolean)}
 **/
android.app.Fragment.prototype.setRetainInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRetainInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onStop()}
 **/
android.app.Fragment.prototype.onStop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getTargetFragment()}
 **/
android.app.Fragment.prototype.getTargetFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getActivity()}
 **/
android.app.Fragment.prototype.getActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getText(int)}
 **/
android.app.Fragment.prototype.getText = function() {
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
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onCreateAnimator(int, boolean, int)}
 **/
android.app.Fragment.prototype.onCreateAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLoaderManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getLoaderManager()}
 **/
android.app.Fragment.prototype.getLoaderManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLoaderManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#isVisible()}
 **/
android.app.Fragment.prototype.isVisible = function() {
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
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRemoving
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#isRemoving()}
 **/
android.app.Fragment.prototype.isRemoving = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRemoving',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onResume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onResume()}
 **/
android.app.Fragment.prototype.onResume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onResume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExitSharedElementCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setExitSharedElementCallback(android.app.SharedElementCallback)}
 **/
android.app.Fragment.prototype.setExitSharedElementCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExitSharedElementCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSharedElementEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setSharedElementEnterTransition(android.transition.Transition)}
 **/
android.app.Fragment.prototype.setSharedElementEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSharedElementEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInflate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onInflate(android.util.AttributeSet, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onInflate(android.content.Context, android.util.AttributeSet, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onInflate(android.app.Activity, android.util.AttributeSet, android.os.Bundle)}
 **/
android.app.Fragment.prototype.onInflate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInflate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReturnTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getReturnTransition()}
 **/
android.app.Fragment.prototype.getReturnTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReturnTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChildFragmentManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getChildFragmentManager()}
 **/
android.app.Fragment.prototype.getChildFragmentManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChildFragmentManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getArguments
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getArguments()}
 **/
android.app.Fragment.prototype.getArguments = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getArguments',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParentFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getParentFragment()}
 **/
android.app.Fragment.prototype.getParentFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParentFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#isInLayout()}
 **/
android.app.Fragment.prototype.isInLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onHiddenChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onHiddenChanged(boolean)}
 **/
android.app.Fragment.prototype.onHiddenChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onHiddenChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onCreateView(android.view.LayoutInflater, android.view.ViewGroup, android.os.Bundle)}
 **/
android.app.Fragment.prototype.onCreateView = function() {
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
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDestroyOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onDestroyOptionsMenu()}
 **/
android.app.Fragment.prototype.onDestroyOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDestroyOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
android.app.Fragment.prototype.onConfigurationChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onConfigurationChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onCreateContextMenu(android.view.ContextMenu, android.view.View, android.view.ContextMenu$ContextMenuInfo)}
 **/
android.app.Fragment.prototype.onCreateContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllowEnterTransitionOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getAllowEnterTransitionOverlap()}
 **/
android.app.Fragment.prototype.getAllowEnterTransitionOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllowEnterTransitionOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnterSharedElementCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setEnterSharedElementCallback(android.app.SharedElementCallback)}
 **/
android.app.Fragment.prototype.setEnterSharedElementCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnterSharedElementCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMenuVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setMenuVisibility(boolean)}
 **/
android.app.Fragment.prototype.setMenuVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMenuVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRequestPermissionsResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onRequestPermissionsResult(int, java.lang.String[], int[])}
 **/
android.app.Fragment.prototype.onRequestPermissionsResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRequestPermissionsResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDetached
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#isDetached()}
 **/
android.app.Fragment.prototype.isDetached = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDetached',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTargetFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setTargetFragment(android.app.Fragment, int)}
 **/
android.app.Fragment.prototype.setTargetFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTargetFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onContextItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onContextItemSelected(android.view.MenuItem)}
 **/
android.app.Fragment.prototype.onContextItemSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onContextItemSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getId()}
 **/
android.app.Fragment.prototype.getId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onPause()}
 **/
android.app.Fragment.prototype.onPause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReenterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setReenterTransition(android.transition.Transition)}
 **/
android.app.Fragment.prototype.setReenterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReenterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#startActivity(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#startActivity(android.content.Intent, android.os.Bundle)}
 **/
android.app.Fragment.prototype.startActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onViewStateRestored
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onViewStateRestored(android.os.Bundle)}
 **/
android.app.Fragment.prototype.onViewStateRestored = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onViewStateRestored',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getResources()}
 **/
android.app.Fragment.prototype.getResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerForContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#registerForContextMenu(android.view.View)}
 **/
android.app.Fragment.prototype.registerForContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerForContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#hashCode()}
 **/
android.app.Fragment.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onOptionsMenuClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onOptionsMenuClosed(android.view.Menu)}
 **/
android.app.Fragment.prototype.onOptionsMenuClosed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onOptionsMenuClosed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#dump(java.lang.String, java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
android.app.Fragment.prototype.dump = function() {
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
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUserVisibleHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getUserVisibleHint()}
 **/
android.app.Fragment.prototype.getUserVisibleHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUserVisibleHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPrepareOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onPrepareOptionsMenu(android.view.Menu)}
 **/
android.app.Fragment.prototype.onPrepareOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onCreate(android.os.Bundle)}
 **/
android.app.Fragment.prototype.onCreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDestroy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onDestroy()}
 **/
android.app.Fragment.prototype.onDestroy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDestroy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSharedElementReturnTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setSharedElementReturnTransition(android.transition.Transition)}
 **/
android.app.Fragment.prototype.setSharedElementReturnTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSharedElementReturnTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTrimMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onTrimMemory(int)}
 **/
android.app.Fragment.prototype.onTrimMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTrimMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getString(int)}
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getString(int, java.lang.Object[])}
 **/
android.app.Fragment.prototype.getString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getTag()}
 **/
android.app.Fragment.prototype.getTag = function() {
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
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHidden
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#isHidden()}
 **/
android.app.Fragment.prototype.isHidden = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHidden',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onViewCreated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onViewCreated(android.view.View, android.os.Bundle)}
 **/
android.app.Fragment.prototype.onViewCreated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onViewCreated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAllowReturnTransitionOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setAllowReturnTransitionOverlap(boolean)}
 **/
android.app.Fragment.prototype.setAllowReturnTransitionOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAllowReturnTransitionOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivityForResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#startActivityForResult(android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#startActivityForResult(android.content.Intent, int, android.os.Bundle)}
 **/
android.app.Fragment.prototype.startActivityForResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityForResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActivityCreated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onActivityCreated(android.os.Bundle)}
 **/
android.app.Fragment.prototype.onActivityCreated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActivityCreated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#equals(java.lang.Object)}
 **/
android.app.Fragment.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setArguments
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setArguments(android.os.Bundle)}
 **/
android.app.Fragment.prototype.setArguments = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setArguments',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#toString()}
 **/
android.app.Fragment.prototype.toString = function() {
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
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSaveInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onSaveInstanceState(android.os.Bundle)}
 **/
android.app.Fragment.prototype.onSaveInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSaveInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFragmentManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getFragmentManager()}
 **/
android.app.Fragment.prototype.getFragmentManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFragmentManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#setEnterTransition(android.transition.Transition)}
 **/
android.app.Fragment.prototype.setEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#getContext()}
 **/
android.app.Fragment.prototype.getContext = function() {
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
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Fragment.html#onCreateOptionsMenu(android.view.Menu, android.view.MenuInflater)}
 **/
android.app.Fragment.prototype.onCreateOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Fragment') {
			return new android.app.Fragment(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.app.Fragment;
