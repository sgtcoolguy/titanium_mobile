/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.net.Uri.Builder
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.net = global.android.net || {};
global.android.net.Uri = global.android.net.Uri || {};

/**
 * @class android.net.Uri.Builder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html}
 **/
android.net.Uri.Builder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.net.Uri$Builder') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.net.Uri$Builder',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.net.Uri.Builder.prototype = Object.create(SuperClass.prototype);
android.net.Uri.Builder.prototype.constructor = android.net.Uri.Builder;

android.net.Uri.Builder.className = "android.net.Uri$Builder";
android.net.Uri.Builder.prototype.className = "android.net.Uri$Builder";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function appendQueryParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#appendQueryParameter(java.lang.String, java.lang.String)}
 **/
android.net.Uri.Builder.prototype.appendQueryParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'appendQueryParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function encodedPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#encodedPath(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.encodedPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encodedPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function opaquePart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#opaquePart(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.opaquePart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'opaquePart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function appendEncodedPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#appendEncodedPath(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.appendEncodedPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'appendEncodedPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#scheme(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.scheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function appendPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#appendPath(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.appendPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'appendPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#query(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.query = function() {
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
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function encodedFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#encodedFragment(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.encodedFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encodedFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function encodedAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#encodedAuthority(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.encodedAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encodedAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function path
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#path(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.path = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'path',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#fragment(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.fragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function encodedQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#encodedQuery(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.encodedQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encodedQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function build
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#build()}
 **/
android.net.Uri.Builder.prototype.build = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'build',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#clearQuery()}
 **/
android.net.Uri.Builder.prototype.clearQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function authority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#authority(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.authority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'authority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#toString()}
 **/
android.net.Uri.Builder.prototype.toString = function() {
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
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function encodedOpaquePart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.Builder.html#encodedOpaquePart(java.lang.String)}
 **/
android.net.Uri.Builder.prototype.encodedOpaquePart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encodedOpaquePart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri$Builder') {
			return new android.net.Uri.Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.net.Uri.Builder;
