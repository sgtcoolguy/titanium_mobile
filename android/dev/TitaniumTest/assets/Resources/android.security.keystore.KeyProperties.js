/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.security.keystore.KeyProperties
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.security = global.android.security || {};
global.android.security.keystore = global.android.security.keystore || {};

/**
 * @class android.security.keystore.KeyProperties
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html}
 **/
android.security.keystore.KeyProperties = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName === 'android.security.keystore.KeyProperties') {
		// TODO We should verify it's an _instance_ proxy.
        // if it's a class proxy, then we could call newInstance() on it, too. Not sure when that would ever happen...
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.security.keystore.KeyProperties. Create a subclass using android.security.keystore.KeyProperties.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.security.keystore.KeyProperties.prototype = Object.create(SuperClass.prototype);
android.security.keystore.KeyProperties.prototype.constructor = android.security.keystore.KeyProperties;

android.security.keystore.KeyProperties.className = "android.security.keystore.KeyProperties";
android.security.keystore.KeyProperties.prototype.className = "android.security.keystore.KeyProperties";

// class property
Object.defineProperty(android.security.keystore.KeyProperties, 'class', {
	get: function() {
		return Hyperloop.createProxy({
			class: 'android.security.keystore.KeyProperties',
			alloc: false,
			args: []
		});
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
android.security.keystore.KeyProperties.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend({
		class: 'android.security.keystore.KeyProperties',
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
	whatever.prototype = Object.create(android.security.keystore.KeyProperties.prototype);
	whatever.prototype.constructor = whatever;
	return whatever;
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#KEY_ALGORITHM_HMAC_SHA256}
 */
android.security.keystore.KeyProperties.KEY_ALGORITHM_HMAC_SHA256 = "HmacSHA256";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#PURPOSE_SIGN}
 */
android.security.keystore.KeyProperties.PURPOSE_SIGN = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#BLOCK_MODE_CTR}
 */
android.security.keystore.KeyProperties.BLOCK_MODE_CTR = "CTR";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#KEY_ALGORITHM_RSA}
 */
android.security.keystore.KeyProperties.KEY_ALGORITHM_RSA = "RSA";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#PURPOSE_VERIFY}
 */
android.security.keystore.KeyProperties.PURPOSE_VERIFY = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#BLOCK_MODE_CBC}
 */
android.security.keystore.KeyProperties.BLOCK_MODE_CBC = "CBC";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#KEY_ALGORITHM_AES}
 */
android.security.keystore.KeyProperties.KEY_ALGORITHM_AES = "AES";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#DIGEST_SHA256}
 */
android.security.keystore.KeyProperties.DIGEST_SHA256 = "SHA-256";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#DIGEST_SHA512}
 */
android.security.keystore.KeyProperties.DIGEST_SHA512 = "SHA-512";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#ENCRYPTION_PADDING_RSA_PKCS1}
 */
android.security.keystore.KeyProperties.ENCRYPTION_PADDING_RSA_PKCS1 = "PKCS1Padding";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#ENCRYPTION_PADDING_PKCS7}
 */
android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7 = "PKCS7Padding";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#PURPOSE_ENCRYPT}
 */
android.security.keystore.KeyProperties.PURPOSE_ENCRYPT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#BLOCK_MODE_GCM}
 */
android.security.keystore.KeyProperties.BLOCK_MODE_GCM = "GCM";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#DIGEST_SHA384}
 */
android.security.keystore.KeyProperties.DIGEST_SHA384 = "SHA-384";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#ENCRYPTION_PADDING_RSA_OAEP}
 */
android.security.keystore.KeyProperties.ENCRYPTION_PADDING_RSA_OAEP = "OAEPPadding";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#KEY_ALGORITHM_HMAC_SHA512}
 */
android.security.keystore.KeyProperties.KEY_ALGORITHM_HMAC_SHA512 = "HmacSHA512";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#KEY_ALGORITHM_EC}
 */
android.security.keystore.KeyProperties.KEY_ALGORITHM_EC = "EC";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#SIGNATURE_PADDING_RSA_PKCS1}
 */
android.security.keystore.KeyProperties.SIGNATURE_PADDING_RSA_PKCS1 = "PKCS1";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#KEY_ALGORITHM_HMAC_SHA1}
 */
android.security.keystore.KeyProperties.KEY_ALGORITHM_HMAC_SHA1 = "HmacSHA1";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#KEY_ALGORITHM_HMAC_SHA384}
 */
android.security.keystore.KeyProperties.KEY_ALGORITHM_HMAC_SHA384 = "HmacSHA384";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#BLOCK_MODE_ECB}
 */
android.security.keystore.KeyProperties.BLOCK_MODE_ECB = "ECB";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#ORIGIN_IMPORTED}
 */
android.security.keystore.KeyProperties.ORIGIN_IMPORTED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#DIGEST_NONE}
 */
android.security.keystore.KeyProperties.DIGEST_NONE = "NONE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#DIGEST_SHA224}
 */
android.security.keystore.KeyProperties.DIGEST_SHA224 = "SHA-224";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#DIGEST_MD5}
 */
android.security.keystore.KeyProperties.DIGEST_MD5 = "MD5";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#ENCRYPTION_PADDING_NONE}
 */
android.security.keystore.KeyProperties.ENCRYPTION_PADDING_NONE = "NoPadding";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#SIGNATURE_PADDING_RSA_PSS}
 */
android.security.keystore.KeyProperties.SIGNATURE_PADDING_RSA_PSS = "PSS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#DIGEST_SHA1}
 */
android.security.keystore.KeyProperties.DIGEST_SHA1 = "SHA-1";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#ORIGIN_UNKNOWN}
 */
android.security.keystore.KeyProperties.ORIGIN_UNKNOWN = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#ORIGIN_GENERATED}
 */
android.security.keystore.KeyProperties.ORIGIN_GENERATED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#KEY_ALGORITHM_HMAC_SHA224}
 */
android.security.keystore.KeyProperties.KEY_ALGORITHM_HMAC_SHA224 = "HmacSHA224";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/security/keystore/KeyProperties.html#PURPOSE_DECRYPT}
 */
android.security.keystore.KeyProperties.PURPOSE_DECRYPT = 2;

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = android.security.keystore.KeyProperties;
