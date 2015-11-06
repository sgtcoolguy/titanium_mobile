/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.IntSummaryStatistics
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};

/**
 * @class java.util.IntSummaryStatistics
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html}
 **/
java.util.IntSummaryStatistics = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.IntSummaryStatistics') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.IntSummaryStatistics',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.util.IntSummaryStatistics.prototype = Object.create(SuperClass.prototype);
java.util.IntSummaryStatistics.prototype.constructor = java.util.IntSummaryStatistics;

java.util.IntSummaryStatistics.className = "java.util.IntSummaryStatistics";
java.util.IntSummaryStatistics.prototype.className = "java.util.IntSummaryStatistics";

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
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html#getMin()}
 **/
java.util.IntSummaryStatistics.prototype.getMin = function() {
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
		if (result.apiName === 'java.util.IntSummaryStatistics') {
			return new java.util.IntSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html#getMax()}
 **/
java.util.IntSummaryStatistics.prototype.getMax = function() {
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
		if (result.apiName === 'java.util.IntSummaryStatistics') {
			return new java.util.IntSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html#toString()}
 **/
java.util.IntSummaryStatistics.prototype.toString = function() {
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
		if (result.apiName === 'java.util.IntSummaryStatistics') {
			return new java.util.IntSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html#getCount()}
 **/
java.util.IntSummaryStatistics.prototype.getCount = function() {
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
		if (result.apiName === 'java.util.IntSummaryStatistics') {
			return new java.util.IntSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html#getSum()}
 **/
java.util.IntSummaryStatistics.prototype.getSum = function() {
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
		if (result.apiName === 'java.util.IntSummaryStatistics') {
			return new java.util.IntSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html#getAverage()}
 **/
java.util.IntSummaryStatistics.prototype.getAverage = function() {
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
		if (result.apiName === 'java.util.IntSummaryStatistics') {
			return new java.util.IntSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html#accept(int)}
 **/
java.util.IntSummaryStatistics.prototype.accept = function() {
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
		if (result.apiName === 'java.util.IntSummaryStatistics') {
			return new java.util.IntSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/IntSummaryStatistics.html#combine(java.util.IntSummaryStatistics)}
 **/
java.util.IntSummaryStatistics.prototype.combine = function() {
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
		if (result.apiName === 'java.util.IntSummaryStatistics') {
			return new java.util.IntSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.IntSummaryStatistics;
