/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.RectF
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.graphics = global.android.graphics || {};

/**
 * @class android.graphics.RectF
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html}
 **/
android.graphics.RectF = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.graphics.RectF') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.graphics.RectF',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
android.graphics.RectF.prototype = Object.create(SuperClass.prototype);
android.graphics.RectF.prototype.constructor = android.graphics.RectF;

android.graphics.RectF.className = "android.graphics.RectF";
android.graphics.RectF.prototype.className = "android.graphics.RectF";

// Constants

// Static fields
// http://developer.android.com/reference/android/graphics/RectF.html#CREATOR
Object.defineProperty(android.graphics.RectF, 'CREATOR', {
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
			if (result.apiName === 'android.graphics.RectF') {
				return new android.graphics.RectF(result);
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
// http://developer.android.com/reference/android/graphics/RectF.html#top
Object.defineProperty(android.graphics.RectF.prototype, 'top', {
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
			if (result.apiName === 'android.graphics.RectF') {
				return new android.graphics.RectF(result);
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
// http://developer.android.com/reference/android/graphics/RectF.html#left
Object.defineProperty(android.graphics.RectF.prototype, 'left', {
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
			if (result.apiName === 'android.graphics.RectF') {
				return new android.graphics.RectF(result);
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
// http://developer.android.com/reference/android/graphics/RectF.html#bottom
Object.defineProperty(android.graphics.RectF.prototype, 'bottom', {
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
			if (result.apiName === 'android.graphics.RectF') {
				return new android.graphics.RectF(result);
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
// http://developer.android.com/reference/android/graphics/RectF.html#right
Object.defineProperty(android.graphics.RectF.prototype, 'right', {
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
			if (result.apiName === 'android.graphics.RectF') {
				return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#intersects(android.graphics.RectF, android.graphics.RectF)}
 **/
android.graphics.RectF.intersects = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#centerY()}
 **/
android.graphics.RectF.prototype.centerY = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#centerX()}
 **/
android.graphics.RectF.prototype.centerX = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#intersects(float, float, float, float)}
 **/
android.graphics.RectF.prototype.intersects = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#toShortString()}
 **/
android.graphics.RectF.prototype.toShortString = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#hashCode()}
 **/
android.graphics.RectF.prototype.hashCode = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function roundOut
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#roundOut(android.graphics.Rect)}
 **/
android.graphics.RectF.prototype.roundOut = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'roundOut',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#offsetTo(float, float)}
 **/
android.graphics.RectF.prototype.offsetTo = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#height()}
 **/
android.graphics.RectF.prototype.height = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#setIntersect(android.graphics.RectF, android.graphics.RectF)}
 **/
android.graphics.RectF.prototype.setIntersect = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#set(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#set(android.graphics.RectF)}
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#set(android.graphics.Rect)}
 **/
android.graphics.RectF.prototype.set = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#offset(float, float)}
 **/
android.graphics.RectF.prototype.offset = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#intersect(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#intersect(android.graphics.RectF)}
 **/
android.graphics.RectF.prototype.intersect = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#setEmpty()}
 **/
android.graphics.RectF.prototype.setEmpty = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#inset(float, float)}
 **/
android.graphics.RectF.prototype.inset = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#isEmpty()}
 **/
android.graphics.RectF.prototype.isEmpty = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#union(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#union(android.graphics.RectF)}
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#union(float, float)}
 **/
android.graphics.RectF.prototype.union = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#sort()}
 **/
android.graphics.RectF.prototype.sort = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#readFromParcel(android.os.Parcel)}
 **/
android.graphics.RectF.prototype.readFromParcel = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#describeContents()}
 **/
android.graphics.RectF.prototype.describeContents = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#contains(float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#contains(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#contains(android.graphics.RectF)}
 **/
android.graphics.RectF.prototype.contains = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function round
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#round(android.graphics.Rect)}
 **/
android.graphics.RectF.prototype.round = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'round',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#equals(java.lang.Object)}
 **/
android.graphics.RectF.prototype.equals = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#width()}
 **/
android.graphics.RectF.prototype.width = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#toString()}
 **/
android.graphics.RectF.prototype.toString = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/RectF.html#writeToParcel(android.os.Parcel, int)}
 **/
android.graphics.RectF.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.graphics.RectF') {
			return new android.graphics.RectF(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.graphics.RectF;
