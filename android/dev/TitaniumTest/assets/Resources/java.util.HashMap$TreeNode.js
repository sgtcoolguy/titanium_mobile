/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.HashMap.TreeNode
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.util = global.java.util || {};
global.java.util.HashMap = global.java.util.HashMap || {};

/**
 * @class java.util.HashMap.TreeNode
 * @extends java.util.LinkedHashMap.Entry 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html}
 **/
java.util.HashMap.TreeNode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.util.HashMap$TreeNode') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.util.HashMap$TreeNode',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.util.LinkedHashMap$Entry');
java.util.HashMap.TreeNode.prototype = Object.create(SuperClass.prototype);
java.util.HashMap.TreeNode.prototype.constructor = java.util.HashMap.TreeNode;

java.util.HashMap.TreeNode.className = "java.util.HashMap$TreeNode";
java.util.HashMap.TreeNode.prototype.className = "java.util.HashMap$TreeNode";

// Constants

// Static fields
// http://developer.android.com/reference/java/util/HashMap.TreeNode.html#$assertionsDisabled
Object.defineProperty(java.util.HashMap.TreeNode, '$assertionsDisabled', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: '$assertionsDisabled'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap$TreeNode') {
				return new java.util.HashMap.TreeNode(result);
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
// http://developer.android.com/reference/java/util/HashMap.TreeNode.html#red
Object.defineProperty(java.util.HashMap.TreeNode.prototype, 'red', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'red'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap$TreeNode') {
				return new java.util.HashMap.TreeNode(result);
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
			field: 'red',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.TreeNode.html#parent
Object.defineProperty(java.util.HashMap.TreeNode.prototype, 'parent', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'parent'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap$TreeNode') {
				return new java.util.HashMap.TreeNode(result);
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
			field: 'parent',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.TreeNode.html#left
Object.defineProperty(java.util.HashMap.TreeNode.prototype, 'left', {
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
			if (result.apiName === 'java.util.HashMap$TreeNode') {
				return new java.util.HashMap.TreeNode(result);
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
// http://developer.android.com/reference/java/util/HashMap.TreeNode.html#prev
Object.defineProperty(java.util.HashMap.TreeNode.prototype, 'prev', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'prev'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.HashMap$TreeNode') {
				return new java.util.HashMap.TreeNode(result);
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
			field: 'prev',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/HashMap.TreeNode.html#right
Object.defineProperty(java.util.HashMap.TreeNode.prototype, 'right', {
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
			if (result.apiName === 'java.util.HashMap$TreeNode') {
				return new java.util.HashMap.TreeNode(result);
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
 * @function rotateRight
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#rotateRight(java.util.HashMap$TreeNode, java.util.HashMap$TreeNode)}
 **/
java.util.HashMap.TreeNode.rotateRight = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'rotateRight',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function tieBreakOrder
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#tieBreakOrder(java.lang.Object, java.lang.Object)}
 **/
java.util.HashMap.TreeNode.tieBreakOrder = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'tieBreakOrder',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotateLeft
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#rotateLeft(java.util.HashMap$TreeNode, java.util.HashMap$TreeNode)}
 **/
java.util.HashMap.TreeNode.rotateLeft = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'rotateLeft',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function balanceDeletion
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#balanceDeletion(java.util.HashMap$TreeNode, java.util.HashMap$TreeNode)}
 **/
java.util.HashMap.TreeNode.balanceDeletion = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'balanceDeletion',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function balanceInsertion
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#balanceInsertion(java.util.HashMap$TreeNode, java.util.HashMap$TreeNode)}
 **/
java.util.HashMap.TreeNode.balanceInsertion = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'balanceInsertion',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkInvariants
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#checkInvariants(java.util.HashMap$TreeNode)}
 **/
java.util.HashMap.TreeNode.checkInvariants = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'checkInvariants',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function moveRootToFront
 * @static
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#moveRootToFront(java.util.HashMap$Node[], java.util.HashMap$TreeNode)}
 **/
java.util.HashMap.TreeNode.moveRootToFront = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'moveRootToFront',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
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
 * @function getTreeNode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#getTreeNode(int, java.lang.Object)}
 **/
java.util.HashMap.TreeNode.prototype.getTreeNode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTreeNode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function treeify
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#treeify(java.util.HashMap$Node[])}
 **/
java.util.HashMap.TreeNode.prototype.treeify = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'treeify',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function untreeify
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#untreeify(java.util.HashMap)}
 **/
java.util.HashMap.TreeNode.prototype.untreeify = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'untreeify',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function split
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#split(java.util.HashMap, java.util.HashMap$Node[], int, int)}
 **/
java.util.HashMap.TreeNode.prototype.split = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'split',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function find
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#find(int, java.lang.Object, java.lang.Class)}
 **/
java.util.HashMap.TreeNode.prototype.find = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'find',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putTreeVal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#putTreeVal(java.util.HashMap, java.util.HashMap$Node[], int, java.lang.Object, java.lang.Object)}
 **/
java.util.HashMap.TreeNode.prototype.putTreeVal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putTreeVal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function root
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#root()}
 **/
java.util.HashMap.TreeNode.prototype.root = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'root',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTreeNode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/HashMap.TreeNode.html#removeTreeNode(java.util.HashMap, java.util.HashMap$Node[], boolean)}
 **/
java.util.HashMap.TreeNode.prototype.removeTreeNode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTreeNode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.HashMap$TreeNode') {
			return new java.util.HashMap.TreeNode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.util.HashMap.TreeNode;
