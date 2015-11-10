/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.IntentFilter
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.content = global.android.content || {};

/**
 * @class android.content.IntentFilter
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html}
 **/
android.content.IntentFilter = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.content.IntentFilter') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.content.IntentFilter',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.content.IntentFilter.prototype = Object.create(SuperClass.prototype);
android.content.IntentFilter.prototype.constructor = android.content.IntentFilter;

android.content.IntentFilter.className = "android.content.IntentFilter";
android.content.IntentFilter.prototype.className = "android.content.IntentFilter";

// class property
Object.defineProperty(android.content.IntentFilter, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.content.IntentFilter',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.content.IntentFilter.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.content.IntentFilter',
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
	whatever.prototype = Object.create(android.content.IntentFilter.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_PORT}
 */
android.content.IntentFilter.MATCH_CATEGORY_PORT = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#NO_MATCH_TYPE}
 */
android.content.IntentFilter.NO_MATCH_TYPE = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_PATH}
 */
android.content.IntentFilter.MATCH_CATEGORY_PATH = 5242880;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#SYSTEM_LOW_PRIORITY}
 */
android.content.IntentFilter.SYSTEM_LOW_PRIORITY = -1000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_SCHEME_SPECIFIC_PART}
 */
android.content.IntentFilter.MATCH_CATEGORY_SCHEME_SPECIFIC_PART = 5767168;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_HOST}
 */
android.content.IntentFilter.MATCH_CATEGORY_HOST = 3145728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_TYPE}
 */
android.content.IntentFilter.MATCH_CATEGORY_TYPE = 6291456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#NO_MATCH_DATA}
 */
android.content.IntentFilter.NO_MATCH_DATA = -2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_EMPTY}
 */
android.content.IntentFilter.MATCH_CATEGORY_EMPTY = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_SCHEME}
 */
android.content.IntentFilter.MATCH_CATEGORY_SCHEME = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_ADJUSTMENT_MASK}
 */
android.content.IntentFilter.MATCH_ADJUSTMENT_MASK = 65535;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#NO_MATCH_CATEGORY}
 */
android.content.IntentFilter.NO_MATCH_CATEGORY = -4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_ADJUSTMENT_NORMAL}
 */
android.content.IntentFilter.MATCH_ADJUSTMENT_NORMAL = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_MASK}
 */
android.content.IntentFilter.MATCH_CATEGORY_MASK = 268369920;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#SYSTEM_HIGH_PRIORITY}
 */
android.content.IntentFilter.SYSTEM_HIGH_PRIORITY = 1000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#NO_MATCH_ACTION}
 */
android.content.IntentFilter.NO_MATCH_ACTION = -3;

// Static fields
// http://developer.android.com/reference/android/content/IntentFilter.html#CREATOR
Object.defineProperty(android.content.IntentFilter, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.IntentFilter') {
				return new android.content.IntentFilter(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function create
 * @static
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#create(java.lang.String, java.lang.String)}
 **/
android.content.IntentFilter.create = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'create',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
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
 * @function getDataSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataSchemeSpecificPart(int)}
 **/
android.content.IntentFilter.prototype.getDataSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToXml
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#writeToXml(org.xmlpull.v1.XmlSerializer)}
 **/
android.content.IntentFilter.prototype.writeToXml = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToXml',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataType(int)}
 **/
android.content.IntentFilter.prototype.getDataType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matchDataAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#matchDataAuthority(android.net.Uri)}
 **/
android.content.IntentFilter.prototype.matchDataAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matchDataAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataScheme(int)}
 **/
android.content.IntentFilter.prototype.getDataScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataAuthority(java.lang.String, java.lang.String)}
 **/
android.content.IntentFilter.prototype.addDataAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFromXml
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#readFromXml(org.xmlpull.v1.XmlPullParser)}
 **/
android.content.IntentFilter.prototype.readFromXml = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFromXml',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataPath(int)}
 **/
android.content.IntentFilter.prototype.getDataPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matchData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#matchData(java.lang.String, java.lang.String, android.net.Uri)}
 **/
android.content.IntentFilter.prototype.matchData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matchData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataTypes()}
 **/
android.content.IntentFilter.prototype.countDataTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getCategory(int)}
 **/
android.content.IntentFilter.prototype.getCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function schemeSpecificPartsIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#schemeSpecificPartsIterator()}
 **/
android.content.IntentFilter.prototype.schemeSpecificPartsIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'schemeSpecificPartsIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataScheme(java.lang.String)}
 **/
android.content.IntentFilter.prototype.addDataScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataPaths
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataPaths()}
 **/
android.content.IntentFilter.prototype.countDataPaths = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataPaths',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countActions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countActions()}
 **/
android.content.IntentFilter.prototype.countActions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countActions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataAuthorities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataAuthorities()}
 **/
android.content.IntentFilter.prototype.countDataAuthorities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataAuthorities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataAuthority(int)}
 **/
android.content.IntentFilter.prototype.getDataAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matchAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#matchAction(java.lang.String)}
 **/
android.content.IntentFilter.prototype.matchAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matchAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#setPriority(int)}
 **/
android.content.IntentFilter.prototype.setPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#writeToParcel(android.os.Parcel, int)}
 **/
android.content.IntentFilter.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataPath(java.lang.String, int)}
 **/
android.content.IntentFilter.prototype.addDataPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataAuthority(android.net.Uri)}
 **/
android.content.IntentFilter.prototype.hasDataAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matchCategories
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#matchCategories(java.util.Set)}
 **/
android.content.IntentFilter.prototype.matchCategories = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matchCategories',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataType(java.lang.String)}
 **/
android.content.IntentFilter.prototype.hasDataType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataSchemes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataSchemes()}
 **/
android.content.IntentFilter.prototype.countDataSchemes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataSchemes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataSchemeSpecificPart(java.lang.String)}
 **/
android.content.IntentFilter.prototype.hasDataSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addCategory(java.lang.String)}
 **/
android.content.IntentFilter.prototype.addCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addAction(java.lang.String)}
 **/
android.content.IntentFilter.prototype.addAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasAction(java.lang.String)}
 **/
android.content.IntentFilter.prototype.hasAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pathsIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#pathsIterator()}
 **/
android.content.IntentFilter.prototype.pathsIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pathsIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataType(java.lang.String)}
 **/
android.content.IntentFilter.prototype.addDataType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataSchemeSpecificPart(java.lang.String, int)}
 **/
android.content.IntentFilter.prototype.addDataSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function categoriesIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#categoriesIterator()}
 **/
android.content.IntentFilter.prototype.categoriesIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'categoriesIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function authoritiesIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#authoritiesIterator()}
 **/
android.content.IntentFilter.prototype.authoritiesIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'authoritiesIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#dump(android.util.Printer, java.lang.String)}
 **/
android.content.IntentFilter.prototype.dump = function() {
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
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataPath(java.lang.String)}
 **/
android.content.IntentFilter.prototype.hasDataPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataSchemeSpecificParts
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataSchemeSpecificParts()}
 **/
android.content.IntentFilter.prototype.countDataSchemeSpecificParts = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataSchemeSpecificParts',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataScheme(java.lang.String)}
 **/
android.content.IntentFilter.prototype.hasDataScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function schemesIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#schemesIterator()}
 **/
android.content.IntentFilter.prototype.schemesIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'schemesIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function match
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#match(android.content.ContentResolver, android.content.Intent, boolean, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#match(java.lang.String, java.lang.String, java.lang.String, android.net.Uri, java.util.Set, java.lang.String)}
 **/
android.content.IntentFilter.prototype.match = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'match',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getAction(int)}
 **/
android.content.IntentFilter.prototype.getAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#describeContents()}
 **/
android.content.IntentFilter.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasCategory(java.lang.String)}
 **/
android.content.IntentFilter.prototype.hasCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function typesIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#typesIterator()}
 **/
android.content.IntentFilter.prototype.typesIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'typesIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getPriority()}
 **/
android.content.IntentFilter.prototype.getPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function actionsIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#actionsIterator()}
 **/
android.content.IntentFilter.prototype.actionsIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'actionsIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countCategories
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countCategories()}
 **/
android.content.IntentFilter.prototype.countCategories = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countCategories',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new android.content.IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.content.IntentFilter;
