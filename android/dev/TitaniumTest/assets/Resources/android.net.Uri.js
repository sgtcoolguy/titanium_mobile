/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.net.Uri
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.net = global.android.net || {};

/**
 * @class android.net.Uri
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/net/Uri.html}
 **/
android.net.Uri = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.net.Uri') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.net.Uri. Create a subclass using android.net.Uri.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.net.Uri.prototype = Object.create(SuperClass.prototype);
android.net.Uri.prototype.constructor = android.net.Uri;

android.net.Uri.className = "android.net.Uri";
android.net.Uri.prototype.className = "android.net.Uri";

// class property
Object.defineProperty(android.net.Uri, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.net.Uri',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.net.Uri.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.net.Uri',
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
	whatever.prototype = Object.create(android.net.Uri.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants

// Static fields
// http://developer.android.com/reference/android/net/Uri.html#CREATOR
Object.defineProperty(android.net.Uri, 'CREATOR', {
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
			if (result.apiName === 'android.net.Uri') {
				return new android.net.Uri(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/net/Uri.html#EMPTY
Object.defineProperty(android.net.Uri, 'EMPTY', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'EMPTY'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.net.Uri') {
				return new android.net.Uri(result);
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
 * @function encode
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#encode(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#encode(java.lang.String, java.lang.String)}
 **/
android.net.Uri.encode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'encode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decode
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#decode(java.lang.String)}
 **/
android.net.Uri.decode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fromFile
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#fromFile(java.io.File)}
 **/
android.net.Uri.fromFile = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromFile',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fromParts
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#fromParts(java.lang.String, java.lang.String, java.lang.String)}
 **/
android.net.Uri.fromParts = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromParts',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withAppendedPath
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#withAppendedPath(android.net.Uri, java.lang.String)}
 **/
android.net.Uri.withAppendedPath = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'withAppendedPath',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parse
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#parse(java.lang.String)}
 **/
android.net.Uri.parse = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parse',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#writeToParcel(android.os.Parcel, android.net.Uri)}
 **/
android.net.Uri.writeToParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
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
 * @function getQueryParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getQueryParameter(java.lang.String)}
 **/
android.net.Uri.prototype.getQueryParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueryParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpaque
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#isOpaque()}
 **/
android.net.Uri.prototype.isOpaque = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpaque',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQueryParameterNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getQueryParameterNames()}
 **/
android.net.Uri.prototype.getQueryParameterNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueryParameterNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#compareTo(android.net.Uri)}
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#compareTo(java.lang.Object)}
 **/
android.net.Uri.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBooleanQueryParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getBooleanQueryParameter(java.lang.String, boolean)}
 **/
android.net.Uri.prototype.getBooleanQueryParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBooleanQueryParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#hashCode()}
 **/
android.net.Uri.prototype.hashCode = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getPath()}
 **/
android.net.Uri.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function normalizeScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#normalizeScheme()}
 **/
android.net.Uri.prototype.normalizeScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'normalizeScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getHost()}
 **/
android.net.Uri.prototype.getHost = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getQuery()}
 **/
android.net.Uri.prototype.getQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLastPathSegment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getLastPathSegment()}
 **/
android.net.Uri.prototype.getLastPathSegment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastPathSegment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getScheme()}
 **/
android.net.Uri.prototype.getScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPathSegments
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getPathSegments()}
 **/
android.net.Uri.prototype.getPathSegments = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPathSegments',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getAuthority()}
 **/
android.net.Uri.prototype.getAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedQuery()}
 **/
android.net.Uri.prototype.getEncodedQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHierarchical
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#isHierarchical()}
 **/
android.net.Uri.prototype.isHierarchical = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHierarchical',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedFragment()}
 **/
android.net.Uri.prototype.getEncodedFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getPort()}
 **/
android.net.Uri.prototype.getPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedSchemeSpecificPart()}
 **/
android.net.Uri.prototype.getEncodedSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQueryParameters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getQueryParameters(java.lang.String)}
 **/
android.net.Uri.prototype.getQueryParameters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueryParameters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedPath()}
 **/
android.net.Uri.prototype.getEncodedPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#equals(java.lang.Object)}
 **/
android.net.Uri.prototype.equals = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function buildUpon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#buildUpon()}
 **/
android.net.Uri.prototype.buildUpon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'buildUpon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAbsolute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#isAbsolute()}
 **/
android.net.Uri.prototype.isAbsolute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAbsolute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#toString()}
 **/
android.net.Uri.prototype.toString = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getFragment()}
 **/
android.net.Uri.prototype.getFragment = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUserInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getUserInfo()}
 **/
android.net.Uri.prototype.getUserInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUserInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#isRelative()}
 **/
android.net.Uri.prototype.isRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getSchemeSpecificPart()}
 **/
android.net.Uri.prototype.getSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedAuthority()}
 **/
android.net.Uri.prototype.getEncodedAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedUserInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedUserInfo()}
 **/
android.net.Uri.prototype.getEncodedUserInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedUserInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new android.net.Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.net.Uri;
