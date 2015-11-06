/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 */
var Hyperloop = Ti.Hyperloop;

global.org = global.org || {};
global.org.xmlpull = global.org.xmlpull || {};
global.org.xmlpull.v1 = global.org.xmlpull.v1 || {};

/**
 * constructor
 * http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html
 **/
org.xmlpull.v1.XmlPullParser = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'org.xmlpull.v1.XmlPullParser') {
		result = arguments[0];
	}
	else {
		var instance = this,
			copy = Array.prototype.slice.call(arguments)[0],
			modified = {};

		function _wrapArg(arg) {
			if (arg.apiName && arg.callNativeFunction) { // Assume hyperloop proxy, wrap in JS wrapper
				var other = require(arg.apiName);
				return new other(arg);
			}
			return arg;
		}

		function _wrapArgs() {
			var newArgs = [];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i] = _wrapArg(arguments[i]);
			}
			return newArgs;
		};
		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(this, arguments);
			};

			// Hang a delegate on the "overrides" object we pass into Java.
			// This one wraps hyperloop proxies from Java in their JS wrapper before forwarding on
			modified[each] = function() {
				return instance[each].apply(this, _wrapArgs.apply(this, arguments));
			}
		});
		// Create interface proxy and pass along the modified overrides that auto wrap native objects in JS wrappers
		// and delegate to the original impls.
		result = Hyperloop.createProxy({
			class: 'org.xmlpull.v1.XmlPullParser',
			alloc: true,
			args: [modified]
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

org.xmlpull.v1.XmlPullParser.toString = function() {
	return "[object " + this.className + "]";
};

org.xmlpull.v1.XmlPullParser.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

org.xmlpull.v1.XmlPullParser.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

org.xmlpull.v1.XmlPullParser.className = "org.xmlpull.v1.XmlPullParser";
org.xmlpull.v1.XmlPullParser.prototype.className = "org.xmlpull.v1.XmlPullParser";

// Constants
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#FEATURE_VALIDATION
org.xmlpull.v1.XmlPullParser.FEATURE_VALIDATION = "http://xmlpull.org/v1/doc/features.html#validation";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#DOCDECL
org.xmlpull.v1.XmlPullParser.DOCDECL = 10;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#END_TAG
org.xmlpull.v1.XmlPullParser.END_TAG = 3;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#END_DOCUMENT
org.xmlpull.v1.XmlPullParser.END_DOCUMENT = 1;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#FEATURE_PROCESS_NAMESPACES
org.xmlpull.v1.XmlPullParser.FEATURE_PROCESS_NAMESPACES = "http://xmlpull.org/v1/doc/features.html#process-namespaces";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#TEXT
org.xmlpull.v1.XmlPullParser.TEXT = 4;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#COMMENT
org.xmlpull.v1.XmlPullParser.COMMENT = 9;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#FEATURE_REPORT_NAMESPACE_ATTRIBUTES
org.xmlpull.v1.XmlPullParser.FEATURE_REPORT_NAMESPACE_ATTRIBUTES = "http://xmlpull.org/v1/doc/features.html#report-namespace-prefixes";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#ENTITY_REF
org.xmlpull.v1.XmlPullParser.ENTITY_REF = 6;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#FEATURE_PROCESS_DOCDECL
org.xmlpull.v1.XmlPullParser.FEATURE_PROCESS_DOCDECL = "http://xmlpull.org/v1/doc/features.html#process-docdecl";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#NO_NAMESPACE
org.xmlpull.v1.XmlPullParser.NO_NAMESPACE = "";
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#PROCESSING_INSTRUCTION
org.xmlpull.v1.XmlPullParser.PROCESSING_INSTRUCTION = 8;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#START_DOCUMENT
org.xmlpull.v1.XmlPullParser.START_DOCUMENT = 0;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#IGNORABLE_WHITESPACE
org.xmlpull.v1.XmlPullParser.IGNORABLE_WHITESPACE = 7;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#START_TAG
org.xmlpull.v1.XmlPullParser.START_TAG = 2;
// http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html#CDSECT
org.xmlpull.v1.XmlPullParser.CDSECT = 5;

// export the interface
module.exports = org.xmlpull.v1.XmlPullParser;
