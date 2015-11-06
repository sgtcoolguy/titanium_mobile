/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.LongSummaryStatistics
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.LongSummaryStatistics
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html}
 **/
java.util.LongSummaryStatistics = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.LongSummaryStatistics') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.LongSummaryStatistics',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.LongSummaryStatistics.prototype = Object.create(SuperClass.prototype);
java.util.LongSummaryStatistics.prototype.constructor = java.util.LongSummaryStatistics;

java.util.LongSummaryStatistics.className = "java.util.LongSummaryStatistics";
java.util.LongSummaryStatistics.prototype.className = "java.util.LongSummaryStatistics";

// Constants

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getMin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#getMin()}
 **/
java.util.LongSummaryStatistics.prototype.getMin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.LongSummaryStatistics') {
			return new java.util.LongSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMax
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#getMax()}
 **/
java.util.LongSummaryStatistics.prototype.getMax = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMax',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.LongSummaryStatistics') {
			return new java.util.LongSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#toString()}
 **/
java.util.LongSummaryStatistics.prototype.toString = function() {
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
		if (result.apiName === 'java.util.LongSummaryStatistics') {
			return new java.util.LongSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#getCount()}
 **/
java.util.LongSummaryStatistics.prototype.getCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.LongSummaryStatistics') {
			return new java.util.LongSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSum
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#getSum()}
 **/
java.util.LongSummaryStatistics.prototype.getSum = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSum',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.LongSummaryStatistics') {
			return new java.util.LongSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAverage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#getAverage()}
 **/
java.util.LongSummaryStatistics.prototype.getAverage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAverage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.LongSummaryStatistics') {
			return new java.util.LongSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function accept
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#accept(int)}
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#accept(long)}
 **/
java.util.LongSummaryStatistics.prototype.accept = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'accept',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.LongSummaryStatistics') {
			return new java.util.LongSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function combine
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/LongSummaryStatistics.html#combine(java.util.LongSummaryStatistics)}
 **/
java.util.LongSummaryStatistics.prototype.combine = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'combine',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.LongSummaryStatistics') {
			return new java.util.LongSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.LongSummaryStatistics;
