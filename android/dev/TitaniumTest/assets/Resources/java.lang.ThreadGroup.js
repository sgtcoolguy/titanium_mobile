/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ThreadGroup
 */
var Hyperloop = Ti.Hyperloop;

global.java = global.java || {};
global.java.lang = global.java.lang || {};

/**
 * @class java.lang.ThreadGroup
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html}
 **/
java.lang.ThreadGroup = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'java.lang.ThreadGroup') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'java.lang.ThreadGroup',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
java.lang.ThreadGroup.prototype = Object.create(SuperClass.prototype);
java.lang.ThreadGroup.prototype.constructor = java.lang.ThreadGroup;

java.lang.ThreadGroup.className = "java.lang.ThreadGroup";
java.lang.ThreadGroup.prototype.className = "java.lang.ThreadGroup";

// Constants

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/lang/ThreadGroup.html#maxPriority
Object.defineProperty(java.lang.ThreadGroup.prototype, 'maxPriority', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'maxPriority'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'maxPriority',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#destroyed
Object.defineProperty(java.lang.ThreadGroup.prototype, 'destroyed', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'destroyed'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'destroyed',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#name
Object.defineProperty(java.lang.ThreadGroup.prototype, 'name', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'name'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'name',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#threads
Object.defineProperty(java.lang.ThreadGroup.prototype, 'threads', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'threads'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'threads',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#ngroups
Object.defineProperty(java.lang.ThreadGroup.prototype, 'ngroups', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'ngroups'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'ngroups',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#groups
Object.defineProperty(java.lang.ThreadGroup.prototype, 'groups', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'groups'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'groups',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#nthreads
Object.defineProperty(java.lang.ThreadGroup.prototype, 'nthreads', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'nthreads'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'nthreads',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#nUnstartedThreads
Object.defineProperty(java.lang.ThreadGroup.prototype, 'nUnstartedThreads', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'nUnstartedThreads'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'nUnstartedThreads',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#daemon
Object.defineProperty(java.lang.ThreadGroup.prototype, 'daemon', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'daemon'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'daemon',
			value: newValue
		});
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/ThreadGroup.html#vmAllowSuspension
Object.defineProperty(java.lang.ThreadGroup.prototype, 'vmAllowSuspension', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField({
			field: 'vmAllowSuspension'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.ThreadGroup') {
				return new java.lang.ThreadGroup(result);
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
			field: 'vmAllowSuspension',
			value: newValue
		});
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setMaxPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#setMaxPriority(int)}
 **/
java.lang.ThreadGroup.prototype.setMaxPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#getName()}
 **/
java.lang.ThreadGroup.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDaemon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#isDaemon()}
 **/
java.lang.ThreadGroup.prototype.isDaemon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDaemon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function interrupt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#interrupt()}
 **/
java.lang.ThreadGroup.prototype.interrupt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'interrupt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function activeGroupCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#activeGroupCount()}
 **/
java.lang.ThreadGroup.prototype.activeGroupCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'activeGroupCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enumerate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#enumerate(java.lang.Thread[])}
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#enumerate(java.lang.Thread[], boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#enumerate(java.lang.ThreadGroup[])}
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#enumerate(java.lang.ThreadGroup[], boolean)}
 **/
java.lang.ThreadGroup.prototype.enumerate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enumerate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addUnstarted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#addUnstarted()}
 **/
java.lang.ThreadGroup.prototype.addUnstarted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addUnstarted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function activeCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#activeCount()}
 **/
java.lang.ThreadGroup.prototype.activeCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'activeCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function suspend
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#suspend()}
 **/
java.lang.ThreadGroup.prototype.suspend = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'suspend',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#resume()}
 **/
java.lang.ThreadGroup.prototype.resume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function add
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#add(java.lang.Thread)}
 **/
java.lang.ThreadGroup.prototype.add = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'add',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#getParent()}
 **/
java.lang.ThreadGroup.prototype.getParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDestroyed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#isDestroyed()}
 **/
java.lang.ThreadGroup.prototype.isDestroyed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDestroyed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function threadTerminated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#threadTerminated(java.lang.Thread)}
 **/
java.lang.ThreadGroup.prototype.threadTerminated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'threadTerminated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function destroy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#destroy()}
 **/
java.lang.ThreadGroup.prototype.destroy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'destroy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parentOf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#parentOf(java.lang.ThreadGroup)}
 **/
java.lang.ThreadGroup.prototype.parentOf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parentOf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function list
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#list()}
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#list(java.io.PrintStream, int)}
 **/
java.lang.ThreadGroup.prototype.list = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'list',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkAccess
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#checkAccess()}
 **/
java.lang.ThreadGroup.prototype.checkAccess = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkAccess',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDaemon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#setDaemon(boolean)}
 **/
java.lang.ThreadGroup.prototype.setDaemon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDaemon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#getMaxPriority()}
 **/
java.lang.ThreadGroup.prototype.getMaxPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function allowThreadSuspension
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#allowThreadSuspension(boolean)}
 **/
java.lang.ThreadGroup.prototype.allowThreadSuspension = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'allowThreadSuspension',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#stop()}
 **/
java.lang.ThreadGroup.prototype.stop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function uncaughtException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#uncaughtException(java.lang.Thread, java.lang.Throwable)}
 **/
java.lang.ThreadGroup.prototype.uncaughtException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'uncaughtException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#toString()}
 **/
java.lang.ThreadGroup.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function threadStartFailed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ThreadGroup.html#threadStartFailed(java.lang.Thread)}
 **/
java.lang.ThreadGroup.prototype.threadStartFailed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'threadStartFailed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ThreadGroup') {
			return new java.lang.ThreadGroup(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = java.lang.ThreadGroup;
