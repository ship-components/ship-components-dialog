(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"), require("ship-components-buttons"), require("ship-components-icon"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames", "ship-components-buttons", "ship-components-icon"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames"), require("ship-components-buttons"), require("ship-components-icon")) : factory(root["React"], root["classnames"], root["ship-components-buttons"], root["ship-components-icon"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Model = exports.Dialog = undefined;
	
	var _Dialog = __webpack_require__(5);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _Modal = __webpack_require__(1);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = _Dialog2.default;
	var Dialog = exports.Dialog = _Dialog2.default;
	var Model = exports.Model = _Modal2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _shipComponentsButtons = __webpack_require__(4);
	
	var _Modal = __webpack_require__(7);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _shipComponentsIcon = __webpack_require__(10);
	
	var _shipComponentsIcon2 = _interopRequireDefault(_shipComponentsIcon);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /** ****************************************************************************
	   * Modal
	   *
	   * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	   * @file         Generic Modal View
	   ******************************************************************************/
	
	// Modules
	
	
	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);
	
	  function Modal(props) {
	    _classCallCheck(this, Modal);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));
	
	    _this.handleWindowKeyDown = _this.handleWindowKeyDown.bind(_this);
	    _this.handleClickBackground = _this.handleClickBackground.bind(_this);
	    return _this;
	  }
	
	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('keydown', this.handleWindowKeyDown);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('keydown', this.handleWindowKeyDown);
	    }
	  }, {
	    key: 'handleWindowKeyDown',
	    value: function handleWindowKeyDown(event) {
	      if (event.code === 'Escape' || event.keyCode === 27) {
	        this.props.onClose(event);
	      }
	    }
	  }, {
	    key: 'renderTitle',
	    value: function renderTitle() {
	      if (!this.props.title || !this.props.header) {
	        return null;
	      }
	      return _react2.default.createElement('h1', { className: (0, _classnames2.default)(_Modal2.default.title) }, this.props.title);
	    }
	  }, {
	    key: 'renderCloseButton',
	    value: function renderCloseButton() {
	      if (!this.props.header) {
	        return null;
	      }
	      return _react2.default.createElement(_shipComponentsButtons.Button, {
	        className: (0, _classnames2.default)(_Modal2.default.close),
	        type: 'flat',
	        iconClass: _shipComponentsIcon2.default.close,
	        onClick: this.props.onClose
	      });
	    }
	
	    /**
	     * Check to see if the use clicked the background or not
	     * @param  {[type]} event [description]
	     * @return {[type]}       [description]
	     */
	
	  }, {
	    key: 'handleClickBackground',
	    value: function handleClickBackground(event) {
	      var el = event.target;
	      var source = el;
	      while (source.parentNode) {
	        if (source === this.refs.container) {
	          return;
	        }
	        source = source.parentNode;
	      }
	      // Prevent the click from affecting things behind it
	      event.stopPropagation();
	
	      this.props.onClose(event);
	    }
	
	    /**
	     * Render
	     * @return {[React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', {
	        ref: 'popup',
	        className: (0, _classnames2.default)(_Modal2.default.overlay),
	        style: this.props.style,
	        onMouseDown: this.handleClickBackground
	      }, _react2.default.createElement('div', {
	        ref: 'container',
	        className: (0, _classnames2.default)(_Modal2.default.container)
	      }, this.renderTitle(), this.renderCloseButton(), _react2.default.createElement('div', { className: (0, _classnames2.default)(_Modal2.default.body, this.props.className) }, this.props.children)));
	    }
	  }]);
	
	  return Modal;
	}(_react2.default.Component);
	
	exports.default = Modal;
	
	Modal.defaultProps = {
	  title: null,
	  header: true
	};
	
	Modal.propTypes = {
	  onClose: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Modal = __webpack_require__(1);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _shipComponentsButtons = __webpack_require__(4);
	
	var _Dialog = __webpack_require__(6);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Dialog = function (_React$Component) {
	  _inherits(Dialog, _React$Component);
	
	  function Dialog(props) {
	    _classCallCheck(this, Dialog);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));
	
	    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
	    return _this;
	  }
	
	  _createClass(Dialog, [{
	    key: 'handleCloseModal',
	    value: function handleCloseModal() {
	      this.props.onClose();
	    }
	  }, {
	    key: 'getDefaultButtons',
	    value: function getDefaultButtons() {
	      return [{
	        label: 'OK',
	        onClick: this.handleCloseModal
	      }];
	    }
	  }, {
	    key: 'getButtons',
	    value: function getButtons() {
	      return this.props.buttons || this.getDefaultButton();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Modal2.default, _extends({}, this.props, {
	        className: (0, _classnames2.default)(_Dialog2.default.container, this.props.className),
	        header: false
	      }), this.props.name ? _react2.default.createElement('h1', { className: (0, _classnames2.default)(_Dialog2.default.title) }, this.props.name) : null, _react2.default.createElement('div', { className: (0, _classnames2.default)(_Dialog2.default.body) }, this.props.message || this.props.children), _react2.default.createElement(_shipComponentsButtons.ButtonGroup, {
	        align: 'right',
	        className: (0, _classnames2.default)(_Dialog2.default.controls)
	      }, this.getButtons().map(function (btn) {
	        return _react2.default.createElement(_shipComponentsButtons.Button, {
	          key: btn.label,
	          disabled: btn.disabled === true,
	          onClick: btn.onClick }, btn.label);
	      })));
	    }
	  }]);
	
	  return Dialog;
	}(_react2.default.Component);
	
	exports.default = Dialog;
	
	Dialog.defaultProps = {
	  confirm: 'Yes',
	  cancel: 'Cancel',
	  onConfirm: function onConfirm() {
	    (0, _invariant2.default)(false, 'Dialog.props.onConfirm is not defined');
	  },
	  onCancel: function onCancel() {
	    (0, _invariant2.default)(false, 'Dialog.props.onCancel is not defined');
	  },
	  disableConfirm: false
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"columnGroup":"Dialog--columnGroup","column":"Dialog--column"};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"overlay":"Modal--overlay","container":"Modal--container","body":"Modal--body","markdown":"Modal--markdown","tab-group--nav":"Modal--tab-group--nav","tab-section":"Modal--tab-section","close":"Modal--close","title":"Modal--title"};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ShipComponentsDialog.js.map