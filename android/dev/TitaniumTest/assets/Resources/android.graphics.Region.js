/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Region
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Region
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html}
 **/
android.graphics.Region = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Region') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Region',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Region.prototype = Object.create(SuperClass.prototype);
android.graphics.Region.prototype.constructor = android.graphics.Region;

android.graphics.Region.className = "android.graphics.Region";
android.graphics.Region.prototype.className = "android.graphics.Region";

// Constants

// Static fields
// http://developer.android.com/reference/android/graphics/Region.html#CREATOR
Object.defineProperty(android.graphics.Region, 'CREATOR', {
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
			if (result.apiName === 'android.graphics.Region') {
				return new android.graphics.Region(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function op
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#op(android.graphics.Rect, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#op(int, int, int, int, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#op(android.graphics.Region, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#op(android.graphics.Rect, android.graphics.Region, android.graphics.Region$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#op(android.graphics.Region, android.graphics.Region, android.graphics.Region$Op)}
 **/
android.graphics.Region.prototype.op = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'op',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function set
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#set(android.graphics.Region)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#set(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#set(int, int, int, int)}
 **/
android.graphics.Region.prototype.set = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'set',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#setEmpty()}
 **/
android.graphics.Region.prototype.setEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#isRect()}
 **/
android.graphics.Region.prototype.isRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#isEmpty()}
 **/
android.graphics.Region.prototype.isEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#setPath(android.graphics.Path, android.graphics.Region)}
 **/
android.graphics.Region.prototype.setPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function union
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#union(android.graphics.Rect)}
 **/
android.graphics.Region.prototype.union = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'union',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#describeContents()}
 **/
android.graphics.Region.prototype.describeContents = function() {
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
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#getBounds()}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#getBounds(android.graphics.Rect)}
 **/
android.graphics.Region.prototype.getBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#translate(int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#translate(int, int, android.graphics.Region)}
 **/
android.graphics.Region.prototype.translate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function quickContains
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#quickContains(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#quickContains(int, int, int, int)}
 **/
android.graphics.Region.prototype.quickContains = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'quickContains',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function contains
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#contains(int, int)}
 **/
android.graphics.Region.prototype.contains = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'contains',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#equals(java.lang.Object)}
 **/
android.graphics.Region.prototype.equals = function() {
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
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBoundaryPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#getBoundaryPath()}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#getBoundaryPath(android.graphics.Path)}
 **/
android.graphics.Region.prototype.getBoundaryPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBoundaryPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#toString()}
 **/
android.graphics.Region.prototype.toString = function() {
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
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#finalize()}
 **/
android.graphics.Region.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#writeToParcel(android.os.Parcel, int)}
 **/
android.graphics.Region.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isComplex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#isComplex()}
 **/
android.graphics.Region.prototype.isComplex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isComplex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function quickReject
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#quickReject(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#quickReject(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Region.html#quickReject(android.graphics.Region)}
 **/
android.graphics.Region.prototype.quickReject = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'quickReject',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Region') {
			return new android.graphics.Region(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Region;
