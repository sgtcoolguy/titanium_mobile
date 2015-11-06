/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Rect
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.Rect
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html}
 **/
android.graphics.Rect = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.Rect') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.Rect',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.Rect.prototype = Object.create(SuperClass.prototype);
android.graphics.Rect.prototype.constructor = android.graphics.Rect;

android.graphics.Rect.className = "android.graphics.Rect";
android.graphics.Rect.prototype.className = "android.graphics.Rect";

// Constants

// Static fields
// http://developer.android.com/reference/android/graphics/Rect.html#CREATOR
Object.defineProperty(android.graphics.Rect, 'CREATOR', {
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
			if (result.apiName === 'android.graphics.Rect') {
				return new android.graphics.Rect(result);
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
// http://developer.android.com/reference/android/graphics/Rect.html#top
Object.defineProperty(android.graphics.Rect.prototype, 'top', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'top'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Rect') {
				return new android.graphics.Rect(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'top',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Rect.html#left
Object.defineProperty(android.graphics.Rect.prototype, 'left', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'left'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Rect') {
				return new android.graphics.Rect(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'left',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Rect.html#bottom
Object.defineProperty(android.graphics.Rect.prototype, 'bottom', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'bottom'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Rect') {
				return new android.graphics.Rect(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'bottom',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Rect.html#right
Object.defineProperty(android.graphics.Rect.prototype, 'right', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'right'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Rect') {
				return new android.graphics.Rect(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField({
			field: 'right',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function intersects
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#intersects(android.graphics.Rect, android.graphics.Rect)}
 **/
android.graphics.Rect.intersects = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'intersects',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unflattenFromString
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#unflattenFromString(java.lang.String)}
 **/
android.graphics.Rect.unflattenFromString = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'unflattenFromString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @function centerY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#centerY()}
 **/
android.graphics.Rect.prototype.centerY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'centerY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flattenToString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#flattenToString()}
 **/
android.graphics.Rect.prototype.flattenToString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flattenToString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function centerX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#centerX()}
 **/
android.graphics.Rect.prototype.centerX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'centerX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function intersects
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#intersects(int, int, int, int)}
 **/
android.graphics.Rect.prototype.intersects = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'intersects',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toShortString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#toShortString()}
 **/
android.graphics.Rect.prototype.toShortString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toShortString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#hashCode()}
 **/
android.graphics.Rect.prototype.hashCode = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function exactCenterX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#exactCenterX()}
 **/
android.graphics.Rect.prototype.exactCenterX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'exactCenterX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function exactCenterY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#exactCenterY()}
 **/
android.graphics.Rect.prototype.exactCenterY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'exactCenterY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offsetTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#offsetTo(int, int)}
 **/
android.graphics.Rect.prototype.offsetTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offsetTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function height
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#height()}
 **/
android.graphics.Rect.prototype.height = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'height',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIntersect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#setIntersect(android.graphics.Rect, android.graphics.Rect)}
 **/
android.graphics.Rect.prototype.setIntersect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIntersect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#set(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#set(android.graphics.Rect)}
 **/
android.graphics.Rect.prototype.set = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#offset(int, int)}
 **/
android.graphics.Rect.prototype.offset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function intersect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#intersect(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#intersect(android.graphics.Rect)}
 **/
android.graphics.Rect.prototype.intersect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'intersect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#setEmpty()}
 **/
android.graphics.Rect.prototype.setEmpty = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#inset(int, int)}
 **/
android.graphics.Rect.prototype.inset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#isEmpty()}
 **/
android.graphics.Rect.prototype.isEmpty = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#union(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#union(android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#union(int, int)}
 **/
android.graphics.Rect.prototype.union = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#sort()}
 **/
android.graphics.Rect.prototype.sort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFromParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#readFromParcel(android.os.Parcel)}
 **/
android.graphics.Rect.prototype.readFromParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFromParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#describeContents()}
 **/
android.graphics.Rect.prototype.describeContents = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#contains(int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#contains(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#contains(android.graphics.Rect)}
 **/
android.graphics.Rect.prototype.contains = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#equals(java.lang.Object)}
 **/
android.graphics.Rect.prototype.equals = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function width
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#width()}
 **/
android.graphics.Rect.prototype.width = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'width',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#toString()}
 **/
android.graphics.Rect.prototype.toString = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Rect.html#writeToParcel(android.os.Parcel, int)}
 **/
android.graphics.Rect.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.graphics.Rect') {
			return new android.graphics.Rect(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.Rect;
