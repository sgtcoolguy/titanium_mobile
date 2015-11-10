/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ContentResolver
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.ContentResolver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html}
 **/
android.content.ContentResolver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.ContentResolver') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.content.ContentResolver. Create a subclass using android.content.ContentResolver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.ContentResolver.prototype = Object.create(SuperClass.prototype);
android.content.ContentResolver.prototype.constructor = android.content.ContentResolver;

android.content.ContentResolver.className = "android.content.ContentResolver";
android.content.ContentResolver.prototype.className = "android.content.ContentResolver";

// class property
Object.defineProperty(android.content.ContentResolver, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.ContentResolver',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.ContentResolver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.ContentResolver',
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
	whatever.prototype = Object.create(android.content.ContentResolver.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_DO_NOT_RETRY}
 */
android.content.ContentResolver.SYNC_EXTRAS_DO_NOT_RETRY = "do_not_retry";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SCHEME_ANDROID_RESOURCE}
 */
android.content.ContentResolver.SCHEME_ANDROID_RESOURCE = "android.resource";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_ACCOUNT}
 */
android.content.ContentResolver.SYNC_EXTRAS_ACCOUNT = "account";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_IGNORE_BACKOFF}
 */
android.content.ContentResolver.SYNC_EXTRAS_IGNORE_BACKOFF = "ignore_backoff";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_OVERRIDE_TOO_MANY_DELETIONS}
 */
android.content.ContentResolver.SYNC_EXTRAS_OVERRIDE_TOO_MANY_DELETIONS = "deletions_override";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_EXPEDITED}
 */
android.content.ContentResolver.SYNC_EXTRAS_EXPEDITED = "expedited";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_FORCE}
 */
android.content.ContentResolver.SYNC_EXTRAS_FORCE = "force";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#CURSOR_DIR_BASE_TYPE}
 */
android.content.ContentResolver.CURSOR_DIR_BASE_TYPE = "vnd.android.cursor.dir";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_IGNORE_SETTINGS}
 */
android.content.ContentResolver.SYNC_EXTRAS_IGNORE_SETTINGS = "ignore_settings";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#ANY_CURSOR_ITEM_TYPE}
 */
android.content.ContentResolver.ANY_CURSOR_ITEM_TYPE = "vnd.android.cursor.item/*";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#EXTRA_SIZE}
 */
android.content.ContentResolver.EXTRA_SIZE = "android.content.extra.SIZE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#CURSOR_ITEM_BASE_TYPE}
 */
android.content.ContentResolver.CURSOR_ITEM_BASE_TYPE = "vnd.android.cursor.item";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_OBSERVER_TYPE_PENDING}
 */
android.content.ContentResolver.SYNC_OBSERVER_TYPE_PENDING = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_INITIALIZE}
 */
android.content.ContentResolver.SYNC_EXTRAS_INITIALIZE = "initialize";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SCHEME_CONTENT}
 */
android.content.ContentResolver.SCHEME_CONTENT = "content";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_MANUAL}
 */
android.content.ContentResolver.SYNC_EXTRAS_MANUAL = "force";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_UPLOAD}
 */
android.content.ContentResolver.SYNC_EXTRAS_UPLOAD = "upload";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_EXTRAS_DISCARD_LOCAL_DELETIONS}
 */
android.content.ContentResolver.SYNC_EXTRAS_DISCARD_LOCAL_DELETIONS = "discard_deletions";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_OBSERVER_TYPE_SETTINGS}
 */
android.content.ContentResolver.SYNC_OBSERVER_TYPE_SETTINGS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SYNC_OBSERVER_TYPE_ACTIVE}
 */
android.content.ContentResolver.SYNC_OBSERVER_TYPE_ACTIVE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#SCHEME_FILE}
 */
android.content.ContentResolver.SCHEME_FILE = "file";

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function requestSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#requestSync(android.accounts.Account, java.lang.String, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#requestSync(android.content.SyncRequest)}
 **/
android.content.ContentResolver.requestSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addPeriodicSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#addPeriodicSync(android.accounts.Account, java.lang.String, android.os.Bundle, long)}
 **/
android.content.ContentResolver.addPeriodicSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'addPeriodicSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMasterSyncAutomatically
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getMasterSyncAutomatically()}
 **/
android.content.ContentResolver.getMasterSyncAutomatically = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getMasterSyncAutomatically',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMasterSyncAutomatically
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#setMasterSyncAutomatically(boolean)}
 **/
android.content.ContentResolver.setMasterSyncAutomatically = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setMasterSyncAutomatically',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getCurrentSync()}
 **/
android.content.ContentResolver.getCurrentSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getCurrentSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSyncActive
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#isSyncActive(android.accounts.Account, java.lang.String)}
 **/
android.content.ContentResolver.isSyncActive = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isSyncActive',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function validateSyncExtrasBundle
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#validateSyncExtrasBundle(android.os.Bundle)}
 **/
android.content.ContentResolver.validateSyncExtrasBundle = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'validateSyncExtrasBundle',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSyncAutomatically
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getSyncAutomatically(android.accounts.Account, java.lang.String)}
 **/
android.content.ContentResolver.getSyncAutomatically = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSyncAutomatically',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeStatusChangeListener
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#removeStatusChangeListener(java.lang.Object)}
 **/
android.content.ContentResolver.removeStatusChangeListener = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'removeStatusChangeListener',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSyncAdapterTypes
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getSyncAdapterTypes()}
 **/
android.content.ContentResolver.getSyncAdapterTypes = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSyncAdapterTypes',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSyncAutomatically
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#setSyncAutomatically(android.accounts.Account, java.lang.String, boolean)}
 **/
android.content.ContentResolver.setSyncAutomatically = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setSyncAutomatically',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSyncPending
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#isSyncPending(android.accounts.Account, java.lang.String)}
 **/
android.content.ContentResolver.isSyncPending = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isSyncPending',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancelSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#cancelSync(android.accounts.Account, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#cancelSync(android.content.SyncRequest)}
 **/
android.content.ContentResolver.cancelSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'cancelSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIsSyncable
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#setIsSyncable(android.accounts.Account, java.lang.String, int)}
 **/
android.content.ContentResolver.setIsSyncable = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setIsSyncable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentSyncs
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getCurrentSyncs()}
 **/
android.content.ContentResolver.getCurrentSyncs = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getCurrentSyncs',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPeriodicSyncs
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getPeriodicSyncs(android.accounts.Account, java.lang.String)}
 **/
android.content.ContentResolver.getPeriodicSyncs = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getPeriodicSyncs',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIsSyncable
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getIsSyncable(android.accounts.Account, java.lang.String)}
 **/
android.content.ContentResolver.getIsSyncable = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getIsSyncable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removePeriodicSync
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#removePeriodicSync(android.accounts.Account, java.lang.String, android.os.Bundle)}
 **/
android.content.ContentResolver.removePeriodicSync = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'removePeriodicSync',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addStatusChangeListener
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#addStatusChangeListener(int, android.content.SyncStatusObserver)}
 **/
android.content.ContentResolver.addStatusChangeListener = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'addStatusChangeListener',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
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
 * @function getOutgoingPersistedUriPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getOutgoingPersistedUriPermissions()}
 **/
android.content.ContentResolver.prototype.getOutgoingPersistedUriPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutgoingPersistedUriPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function notifyChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#notifyChange(android.net.Uri, android.database.ContentObserver)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#notifyChange(android.net.Uri, android.database.ContentObserver, boolean)}
 **/
android.content.ContentResolver.prototype.notifyChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'notifyChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startSync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#startSync(android.net.Uri, android.os.Bundle)}
 **/
android.content.ContentResolver.prototype.startSync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startSync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#insert(android.net.Uri, android.content.ContentValues)}
 **/
android.content.ContentResolver.prototype.insert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function update
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#update(android.net.Uri, android.content.ContentValues, java.lang.String, java.lang.String[])}
 **/
android.content.ContentResolver.prototype.update = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'update',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function acquireContentProviderClient
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#acquireContentProviderClient(android.net.Uri)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#acquireContentProviderClient(java.lang.String)}
 **/
android.content.ContentResolver.prototype.acquireContentProviderClient = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'acquireContentProviderClient',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openTypedAssetFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openTypedAssetFileDescriptor(android.net.Uri, java.lang.String, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openTypedAssetFileDescriptor(android.net.Uri, java.lang.String, android.os.Bundle, android.os.CancellationSignal)}
 **/
android.content.ContentResolver.prototype.openTypedAssetFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openTypedAssetFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function delete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#delete(android.net.Uri, java.lang.String, java.lang.String[])}
 **/
android.content.ContentResolver.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openAssetFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openAssetFileDescriptor(android.net.Uri, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openAssetFileDescriptor(android.net.Uri, java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentResolver.prototype.openAssetFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openAssetFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function uncanonicalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#uncanonicalize(android.net.Uri)}
 **/
android.content.ContentResolver.prototype.uncanonicalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'uncanonicalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPersistedUriPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getPersistedUriPermissions()}
 **/
android.content.ContentResolver.prototype.getPersistedUriPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPersistedUriPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bulkInsert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#bulkInsert(android.net.Uri, android.content.ContentValues[])}
 **/
android.content.ContentResolver.prototype.bulkInsert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bulkInsert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openFileDescriptor(android.net.Uri, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openFileDescriptor(android.net.Uri, java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentResolver.prototype.openFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openOutputStream(android.net.Uri)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openOutputStream(android.net.Uri, java.lang.String)}
 **/
android.content.ContentResolver.prototype.openOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStreamTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getStreamTypes(android.net.Uri, java.lang.String)}
 **/
android.content.ContentResolver.prototype.getStreamTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStreamTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canonicalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#canonicalize(android.net.Uri)}
 **/
android.content.ContentResolver.prototype.canonicalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canonicalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#openInputStream(android.net.Uri)}
 **/
android.content.ContentResolver.prototype.openInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyBatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#applyBatch(java.lang.String, java.util.ArrayList)}
 **/
android.content.ContentResolver.prototype.applyBatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyBatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterContentObserver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#unregisterContentObserver(android.database.ContentObserver)}
 **/
android.content.ContentResolver.prototype.unregisterContentObserver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterContentObserver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function takePersistableUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#takePersistableUriPermission(android.net.Uri, int)}
 **/
android.content.ContentResolver.prototype.takePersistableUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'takePersistableUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancelSync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#cancelSync(android.net.Uri)}
 **/
android.content.ContentResolver.prototype.cancelSync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancelSync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function query
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#query(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#query(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, android.os.CancellationSignal)}
 **/
android.content.ContentResolver.prototype.query = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'query',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releasePersistableUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#releasePersistableUriPermission(android.net.Uri, int)}
 **/
android.content.ContentResolver.prototype.releasePersistableUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'releasePersistableUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function call
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#call(android.net.Uri, java.lang.String, java.lang.String, android.os.Bundle)}
 **/
android.content.ContentResolver.prototype.call = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'call',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#getType(android.net.Uri)}
 **/
android.content.ContentResolver.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerContentObserver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#registerContentObserver(android.net.Uri, boolean, android.database.ContentObserver)}
 **/
android.content.ContentResolver.prototype.registerContentObserver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerContentObserver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function acquireUnstableContentProviderClient
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#acquireUnstableContentProviderClient(android.net.Uri)}
 * @see {@link http://developer.android.com/reference/android/content/ContentResolver.html#acquireUnstableContentProviderClient(java.lang.String)}
 **/
android.content.ContentResolver.prototype.acquireUnstableContentProviderClient = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'acquireUnstableContentProviderClient',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContentResolver') {
			return new android.content.ContentResolver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.ContentResolver;
