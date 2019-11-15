'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var ZocialIcon = _interopDefault(require('react-native-vector-icons/Zocial'));
var OcticonIcon = _interopDefault(require('react-native-vector-icons/Octicons'));
var MaterialIcon = _interopDefault(require('react-native-vector-icons/MaterialIcons'));
var MaterialCommunityIcon = _interopDefault(require('react-native-vector-icons/MaterialCommunityIcons'));
var Ionicon = _interopDefault(require('react-native-vector-icons/Ionicons'));
var FoundationIcon = _interopDefault(require('react-native-vector-icons/Foundation'));
var EvilIcon = _interopDefault(require('react-native-vector-icons/EvilIcons'));
var EntypoIcon = _interopDefault(require('react-native-vector-icons/Entypo'));
var FAIcon = _interopDefault(require('react-native-vector-icons/FontAwesome'));
var SimpleLineIcon = _interopDefault(require('react-native-vector-icons/SimpleLineIcons'));
var FeatherIcon = _interopDefault(require('react-native-vector-icons/Feather'));
var AntIcon = _interopDefault(require('react-native-vector-icons/AntDesign'));
var times = _interopDefault(require('lodash/times'));
var _ = _interopDefault(require('lodash'));

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});
var reactIs_1 = reactIs.isElement;
var reactIs_2 = reactIs.ForwardRef;
var reactIs_3 = reactIs.isValidElementType;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = reactNative.Dimensions.get('window');

let isIPhoneX = false;

if (reactNative.Platform.OS === 'ios' && !reactNative.Platform.isPad && !reactNative.Platform.isTVOS) {
    isIPhoneX = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT;
}

function getStatusBarHeight(skipAndroid) {
    return reactNative.Platform.select({
        ios: isIPhoneX ? 44 : 20,
        android: skipAndroid ? 0 : reactNative.StatusBar.currentHeight,
        default: 0
    })
}

var BackgroundImage=reactNative.ImageBackground||reactNative.Image;

var colors = {primary:'#2089dc',secondary:'#8F0CE8',grey0:'#393e42',grey1:'#43484d',grey2:'#5e6977',grey3:'#86939e',grey4:'#bdc6cf',grey5:'#e1e8ee',greyOutline:'#bbb',searchBg:'#303337',success:'#52c41a',error:'#ff190c',warning:'#faad14',disabled:'hsl(208, 8%, 90%)',divider:reactNative.StyleSheet.hairlineWidth<1?'#bcbbc1':'rgba(0, 0, 0, 0.12)',platform:{ios:{primary:'#007aff',secondary:'#5856d6',success:'#4cd964',error:'#ff3b30',warning:'#ffcc00'},android:{primary:'#2196f3',secondary:'#9C27B0',success:'#4caf50',error:'#f44336',warning:'#ffeb3b'}}};

var ViewPropTypes=reactNative.ViewPropTypes||reactNative.View.propTypes;

var fonts = {android:{regular:{fontFamily:'sans-serif'},light:{fontFamily:'sans-serif-light'},condensed:{fontFamily:'sans-serif-condensed'},condensed_light:{fontFamily:'sans-serif-condensed',fontWeight:'light'},black:{fontFamily:'sans-serif',fontWeight:'bold'},thin:{fontFamily:'sans-serif-thin'},medium:{fontFamily:'sans-serif-medium'},bold:{fontFamily:'sans-serif',fontWeight:'bold'}},default:{}};

var umd = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	 module.exports = factory() ;
}(commonjsGlobal, function () {
	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return target.propertyIsEnumerable(symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (!options.isMergeableObject(source[key]) || !target[key]) {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			} else {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	return deepmerge_1;

}));
});

var _jsxFileName="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\config\\ThemeProvider.js";var ThemeContext=React__default.createContext({theme:{colors:colors}});var ThemeProvider=function(_React$Component){inherits(ThemeProvider,_React$Component);function ThemeProvider(props){var _this;classCallCheck(this,ThemeProvider);_this=possibleConstructorReturn(this,getPrototypeOf(ThemeProvider).call(this,props));_this.updateTheme=function(updates){_this.setState(function(_ref){var theme=_ref.theme;return {theme:umd(theme,updates)};});};_this.replaceTheme=function(theme){_this.setState(function(){return {theme:umd(_this.defaultTheme,theme)};});};_this.getTheme=function(){return _this.state.theme;};_this.defaultTheme=umd({colors:colors},props.theme);_this.state={theme:_this.defaultTheme};return _this;}createClass(ThemeProvider,[{key:"render",value:function render(){return React__default.createElement(ThemeContext.Provider,{value:{theme:this.state.theme,updateTheme:this.updateTheme,replaceTheme:this.replaceTheme},__source:{fileName:_jsxFileName,lineNumber:44}},this.props.children);}}]);return ThemeProvider;}(React__default.Component);ThemeProvider.propTypes={theme:propTypes.object,children:propTypes.node.isRequired};ThemeProvider.defaultProps={theme:{}};var ThemeConsumer=ThemeContext.Consumer;

var REACT_STATICS={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true};var KNOWN_STATICS={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true};var FORWARD_REF_STATICS={'$$typeof':true,render:true,defaultProps:true,displayName:true,propTypes:true};var MEMO_STATICS={'$$typeof':true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true};var TYPE_STATICS={};TYPE_STATICS[reactIs.ForwardRef]=FORWARD_REF_STATICS;function getStatics(component){if(reactIs.isMemo(component)){return MEMO_STATICS;}return TYPE_STATICS[component['$$typeof']]||REACT_STATICS;}var defineProperty$1=Object.defineProperty;var getOwnPropertyNames=Object.getOwnPropertyNames;var getOwnPropertySymbols$1=Object.getOwnPropertySymbols;var getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var getPrototypeOf$1=Object.getPrototypeOf;var objectPrototype=Object.prototype;function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if(typeof sourceComponent!=='string'){if(objectPrototype){var inheritedComponent=getPrototypeOf$1(sourceComponent);if(inheritedComponent&&inheritedComponent!==objectPrototype){hoistNonReactStatics(targetComponent,inheritedComponent,blacklist);}}var keys=getOwnPropertyNames(sourceComponent);if(getOwnPropertySymbols$1){keys=keys.concat(getOwnPropertySymbols$1(sourceComponent));}var targetStatics=getStatics(targetComponent);var sourceStatics=getStatics(sourceComponent);for(var i=0;i<keys.length;++i){var key=keys[i];if(!KNOWN_STATICS[key]&&!(blacklist&&blacklist[key])&&!(sourceStatics&&sourceStatics[key])&&!(targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty$1(targetComponent,key,descriptor);}catch(e){}}}}return targetComponent;}var hoistNonReactStatics_cjs=hoistNonReactStatics;

var DefaultTheme = {colors:colors};

var _jsxFileName$1="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\config\\withTheme.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var isClassComponent=function isClassComponent(Component){return Boolean(Component.prototype&&Component.prototype.isReactComponent);};var withTheme=function withTheme(WrappedComponent,themeKey){var ThemedComponent=function(_React$Component){inherits(ThemedComponent,_React$Component);function ThemedComponent(){classCallCheck(this,ThemedComponent);return possibleConstructorReturn(this,getPrototypeOf(ThemedComponent).apply(this,arguments));}createClass(ThemedComponent,[{key:"render",value:function render(){var _this$props=this.props,forwardedRef=_this$props.forwardedRef,children=_this$props.children,rest=objectWithoutProperties(_this$props,["forwardedRef","children"]);return React__default.createElement(ThemeConsumer,{__source:{fileName:_jsxFileName$1,lineNumber:17}},function(context){if(!context){var _props=_objectSpread({},rest,{theme:DefaultTheme,children:children});return isClassComponent(WrappedComponent)?React__default.createElement(WrappedComponent,_extends_1({ref:forwardedRef},_props,{__source:{fileName:_jsxFileName$1,lineNumber:24}})):React__default.createElement(WrappedComponent,_extends_1({},_props,{__source:{fileName:_jsxFileName$1,lineNumber:26}}));}var theme=context.theme,updateTheme=context.updateTheme,replaceTheme=context.replaceTheme;var props=_objectSpread({theme:theme,updateTheme:updateTheme,replaceTheme:replaceTheme},umd(themeKey&&theme[themeKey]||{},rest),{children:children});if(isClassComponent(WrappedComponent)){return React__default.createElement(WrappedComponent,_extends_1({ref:forwardedRef},props,{__source:{fileName:_jsxFileName$1,lineNumber:40}}));}return React__default.createElement(WrappedComponent,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:42}}));});}}]);return ThemedComponent;}(React__default.Component);var name=themeKey?"Themed."+themeKey:"Themed."+(WrappedComponent.displayName||WrappedComponent.name||'Component');if(isClassComponent(WrappedComponent)){var forwardRef=function forwardRef(props,ref){return React__default.createElement(ThemedComponent,_extends_1({},props,{forwardedRef:ref,__source:{fileName:_jsxFileName$1,lineNumber:57}}));};forwardRef.displayName=name;return hoistNonReactStatics_cjs(React__default.forwardRef(forwardRef),WrappedComponent);}ThemedComponent.displayName=name;return ThemedComponent;};

var TextPropTypes=reactNative.Text.propTypes;

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
/* MIT license */



var reverseNames = {};

// create a list of reverse color names
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorName[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});
var colorString_1 = colorString.to;
var colorString_2 = colorString.get;

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = colorConvert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

var color = Color;

var _jsxFileName$2="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\helpers\\renderNode.js";var renderNode=function renderNode(Component,content,defaultProps){if(content==null||content===false){return null;}if(React__default.isValidElement(content)){return content;}if(typeof content==='function'){return content();}if(content===true){return React__default.createElement(Component,_extends_1({},defaultProps,{__source:{fileName:_jsxFileName$2,lineNumber:15}}));}if(typeof content==='string'||typeof content==='number'){return React__default.createElement(Component,_extends_1({},defaultProps,{__source:{fileName:_jsxFileName$2,lineNumber:18}}),content);}return React__default.createElement(Component,_extends_1({},defaultProps,content,{__source:{fileName:_jsxFileName$2,lineNumber:20}}));};

var customIcons={};var registerCustomIconType=function registerCustomIconType(id,customIcon){customIcons[id]=customIcon;};var getIconType = (function(type){switch(type){case'zocial':return ZocialIcon;case'octicon':return OcticonIcon;case'material':return MaterialIcon;case'material-community':return MaterialCommunityIcon;case'ionicon':return Ionicon;case'foundation':return FoundationIcon;case'evilicon':return EvilIcon;case'entypo':return EntypoIcon;case'font-awesome':return FAIcon;case'simple-line-icon':return SimpleLineIcon;case'feather':return FeatherIcon;case'antdesign':return AntIcon;default:if(Object.prototype.hasOwnProperty.call(customIcons,type)){return customIcons[type];}return MaterialIcon;}});

var pixelRatio=reactNative.PixelRatio.get();var deviceHeight=reactNative.Dimensions.get('window').height;var deviceWidth=reactNative.Dimensions.get('window').width;var normalize=function normalize(size){if(pixelRatio>=2&&pixelRatio<3){if(deviceWidth<360){return size*0.95;}if(deviceHeight<667){return size;}if(deviceHeight>=667&&deviceHeight<=735){return size*1.15;}return size*1.25;}if(pixelRatio>=3&&pixelRatio<3.5){if(deviceWidth<=360){return size;}if(deviceHeight<667){return size*1.15;}if(deviceHeight>=667&&deviceHeight<=735){return size*1.2;}return size*1.27;}if(pixelRatio>=3.5){if(deviceWidth<=360){return size;}if(deviceHeight<667){return size*1.2;}if(deviceHeight>=667&&deviceHeight<=735){return size*1.25;}return size*1.4;}return size;};

var nodeType = propTypes.oneOfType([propTypes.element,propTypes.object,propTypes.bool,propTypes.func]);

var Screen=reactNative.Dimensions.get('window');var ScreenWidth=Screen.width;var ScreenHeight=Screen.height;var isIOS=reactNative.Platform.OS==='ios';var conditionalStyle=function conditionalStyle(condition,style){return condition?style:{};};var patchWebProps=function patchWebProps(_ref){var updateTheme=_ref.updateTheme,replaceTheme=_ref.replaceTheme,onClear=_ref.onClear,rest=objectWithoutProperties(_ref,["updateTheme","replaceTheme","onClear"]);return rest;};

var _jsxFileName$3="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\icons\\Icon.js";function ownKeys$1(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$1(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$1(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$1(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Icon=function Icon(props){var type=props.type,name=props.name,size=props.size,color=props.color,iconStyle=props.iconStyle,underlayColor=props.underlayColor,reverse=props.reverse,raised=props.raised,containerStyle=props.containerStyle,reverseColor=props.reverseColor,disabled=props.disabled,disabledStyle=props.disabledStyle,onPress=props.onPress,_props$Component=props.Component,Component=_props$Component===void 0?onPress?reactNative.TouchableHighlight:reactNative.View:_props$Component,attributes=objectWithoutProperties(props,["type","name","size","color","iconStyle","underlayColor","reverse","raised","containerStyle","reverseColor","disabled","disabledStyle","onPress","Component"]);var IconComponent=getIconType(type);var getBackgroundColor=function getBackgroundColor(){if(reverse){return color;}return raised?'white':'transparent';};return React__default.createElement(reactNative.View,{style:containerStyle&&containerStyle,__source:{fileName:_jsxFileName$3,lineNumber:43}},React__default.createElement(Component,_extends_1({},attributes,{underlayColor:reverse?color:underlayColor||color,style:reactNative.StyleSheet.flatten([(reverse||raised)&&styles.button,(reverse||raised)&&{borderRadius:size+4,height:size*2+4,width:size*2+4},raised&&styles.raised,{backgroundColor:getBackgroundColor(),alignItems:'center',justifyContent:'center'},disabled&&styles.disabled,disabled&&disabledStyle])},onPress&&{disabled:disabled},{onPress:onPress,__source:{fileName:_jsxFileName$3,lineNumber:44}}),React__default.createElement(IconComponent,{testID:"iconIcon",style:reactNative.StyleSheet.flatten([{backgroundColor:'transparent'},iconStyle&&iconStyle]),size:size,name:name,color:reverse?reverseColor:color,__source:{fileName:_jsxFileName$3,lineNumber:66}})));};Icon.propTypes={type:propTypes.string,name:propTypes.string,size:propTypes.number,color:propTypes.string,Component:propTypes.elementType,underlayColor:propTypes.string,reverse:propTypes.bool,raised:propTypes.bool,containerStyle:ViewPropTypes.style,iconStyle:reactNative.Text.propTypes.style,onPress:propTypes.func,reverseColor:propTypes.string,disabled:propTypes.bool,disabledStyle:ViewPropTypes.style};Icon.defaultProps={underlayColor:'white',reverse:false,raised:false,size:24,color:'black',reverseColor:'white',disabled:false,type:'material'};var styles=reactNative.StyleSheet.create({button:{margin:7},raised:_objectSpread$1({},reactNative.Platform.select({android:{elevation:2},default:{shadowColor:'rgba(0,0,0, .4)',shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1}})),disabled:{backgroundColor:'#D1D5D8'}});var Icon$1 = withTheme(Icon,'Icon');

var _jsxFileName$4="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\buttons\\Button.js";function ownKeys$2(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$2(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$2(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$2(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var defaultLoadingProps=function defaultLoadingProps(type,theme){return {color:type==='solid'?'white':theme.colors.primary,size:'small'};};var Button=function(_Component){inherits(Button,_Component);function Button(){classCallCheck(this,Button);return possibleConstructorReturn(this,getPrototypeOf(Button).apply(this,arguments));}createClass(Button,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,linearGradientProps=_this$props.linearGradientProps,ViewComponent=_this$props.ViewComponent;if(linearGradientProps&&!global.Expo&&!ViewComponent){console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");}}},{key:"render",value:function render(){var _this$props2=this.props,TouchableComponent=_this$props2.TouchableComponent,containerStyle=_this$props2.containerStyle,onPress=_this$props2.onPress,buttonStyle=_this$props2.buttonStyle,type=_this$props2.type,loading=_this$props2.loading,loadingStyle=_this$props2.loadingStyle,passedLoadingProps=_this$props2.loadingProps,title=_this$props2.title,titleProps=_this$props2.titleProps,titleStyle=_this$props2.titleStyle,icon=_this$props2.icon,iconContainerStyle=_this$props2.iconContainerStyle,iconRight=_this$props2.iconRight,disabled=_this$props2.disabled,disabledStyle=_this$props2.disabledStyle,disabledTitleStyle=_this$props2.disabledTitleStyle,raised=_this$props2.raised,linearGradientProps=_this$props2.linearGradientProps,_this$props2$ViewComp=_this$props2.ViewComponent,ViewComponent=_this$props2$ViewComp===void 0?!disabled&&linearGradientProps&&global.Expo?global.Expo.LinearGradient:reactNative.View:_this$props2$ViewComp,theme=_this$props2.theme,attributes=objectWithoutProperties(_this$props2,["TouchableComponent","containerStyle","onPress","buttonStyle","type","loading","loadingStyle","loadingProps","title","titleProps","titleStyle","icon","iconContainerStyle","iconRight","disabled","disabledStyle","disabledTitleStyle","raised","linearGradientProps","ViewComponent","theme"]);if(reactNative.Platform.OS==='android'&&buttonStyle.borderRadius&&!attributes.background){if(reactNative.Platform.Version>=21){attributes.background=reactNative.TouchableNativeFeedback.Ripple(undefined,false);}else{attributes.background=reactNative.TouchableNativeFeedback.SelectableBackground();}}var loadingProps=_objectSpread$2({},defaultLoadingProps(type,theme),{},passedLoadingProps);return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$1.container,{borderRadius:buttonStyle.borderRadius||styles$1.container.borderRadius},containerStyle,raised&&!disabled&&styles$1.raised(type)]),__source:{fileName:_jsxFileName$4,lineNumber:80}},React__default.createElement(TouchableComponent,_extends_1({onPress:onPress,activeOpacity:0.3,disabled:disabled},attributes,{__source:{fileName:_jsxFileName$4,lineNumber:91}}),React__default.createElement(ViewComponent,_extends_1({},linearGradientProps,{style:reactNative.StyleSheet.flatten([styles$1.button(type,theme),buttonStyle,disabled&&styles$1.disabled(type,theme),disabled&&disabledStyle]),__source:{fileName:_jsxFileName$4,lineNumber:97}}),loading&&React__default.createElement(reactNative.ActivityIndicator,_extends_1({style:reactNative.StyleSheet.flatten([styles$1.loading,loadingStyle]),color:loadingProps.color,size:loadingProps.size},loadingProps,{__source:{fileName:_jsxFileName$4,lineNumber:107}})),!loading&&icon&&!iconRight&&renderNode(Icon$1,icon,{containerStyle:reactNative.StyleSheet.flatten([styles$1.iconContainer,iconContainerStyle])}),!loading&&!!title&&React__default.createElement(reactNative.Text,_extends_1({style:reactNative.StyleSheet.flatten([styles$1.title(type,theme),titleStyle,disabled&&styles$1.disabledTitle(theme),disabled&&disabledTitleStyle])},titleProps,{__source:{fileName:_jsxFileName$4,lineNumber:126}}),title),!loading&&icon&&iconRight&&renderNode(Icon$1,icon,{containerStyle:reactNative.StyleSheet.flatten([styles$1.iconContainer,iconContainerStyle])}))));}}]);return Button;}(React.Component);Button.propTypes={title:propTypes.string,titleStyle:reactNative.Text.propTypes.style,titleProps:propTypes.object,buttonStyle:ViewPropTypes.style,type:propTypes.oneOf(['solid','clear','outline']),loading:propTypes.bool,loadingStyle:ViewPropTypes.style,loadingProps:propTypes.object,onPress:propTypes.func,containerStyle:ViewPropTypes.style,icon:nodeType,iconContainerStyle:ViewPropTypes.style,iconRight:propTypes.bool,linearGradientProps:propTypes.object,TouchableComponent:propTypes.elementType,ViewComponent:propTypes.elementType,disabled:propTypes.bool,disabledStyle:ViewPropTypes.style,disabledTitleStyle:reactNative.Text.propTypes.style,raised:propTypes.bool,theme:propTypes.object};Button.defaultProps={title:'',iconRight:false,TouchableComponent:reactNative.Platform.select({android:reactNative.TouchableNativeFeedback,default:reactNative.TouchableOpacity}),onPress:function onPress(){return console.log('Please attach a method to this component');},type:'solid',buttonStyle:{borderRadius:3},disabled:false,raised:false,loading:false};var styles$1={button:function button(type,theme){return {flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:3,backgroundColor:type==='solid'?theme.colors.primary:'transparent',padding:8,borderWidth:type==='outline'?reactNative.StyleSheet.hairlineWidth:0,borderColor:theme.colors.primary};},container:{borderRadius:3},disabled:function disabled(type,theme){return _objectSpread$2({},conditionalStyle(type==='solid',{backgroundColor:theme.colors.disabled}),{},conditionalStyle(type==='outline',{borderColor:color(theme.colors.disabled).darken(0.3)}));},disabledTitle:function disabledTitle(theme){return {color:color(theme.colors.disabled).darken(0.3)};},title:function title(type,theme){return _objectSpread$2({color:type==='solid'?'white':theme.colors.primary,fontSize:16,textAlign:'center',paddingTop:2,paddingBottom:1},reactNative.Platform.select({android:{fontFamily:'sans-serif-medium'},default:{fontSize:18}}));},iconContainer:{marginHorizontal:5},raised:function raised(type){return type!=='clear'&&_objectSpread$2({backgroundColor:'#fff'},reactNative.Platform.select({android:{elevation:4},default:{shadowColor:'rgba(0,0,0, .4)',shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1}}));},loading:{marginVertical:2}};var Button$1 = withTheme(Button,'Button');

var _jsxFileName$5="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\input\\Input.js";function ownKeys$3(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$3(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$3(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$3(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var renderText=function renderText(content,defaultProps,style){return renderNode(reactNative.Text,content,_objectSpread$3({},defaultProps,{style:reactNative.StyleSheet.flatten([style,defaultProps&&defaultProps.style])}));};var Input=function(_React$Component){inherits(Input,_React$Component);function Input(){var _getPrototypeOf2;var _this;classCallCheck(this,Input);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Input)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.shakeAnimationValue=new reactNative.Animated.Value(0);_this.shake=function(){var _assertThisInitialize=assertThisInitialized(_this),shakeAnimationValue=_assertThisInitialize.shakeAnimationValue;shakeAnimationValue.setValue(0);reactNative.Animated.timing(shakeAnimationValue,{duration:375,toValue:3,ease:reactNative.Easing.bounce}).start();};return _this;}createClass(Input,[{key:"focus",value:function focus(){this.input.focus();}},{key:"blur",value:function blur(){this.input.blur();}},{key:"clear",value:function clear(){this.input.clear();}},{key:"isFocused",value:function isFocused(){return this.input.isFocused();}},{key:"setNativeProps",value:function setNativeProps(nativeProps){this.input.setNativeProps(nativeProps);}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,containerStyle=_this$props.containerStyle,disabled=_this$props.disabled,disabledInputStyle=_this$props.disabledInputStyle,inputContainerStyle=_this$props.inputContainerStyle,leftIcon=_this$props.leftIcon,leftIconContainerStyle=_this$props.leftIconContainerStyle,rightIcon=_this$props.rightIcon,rightIconContainerStyle=_this$props.rightIconContainerStyle,_this$props$inputComp=_this$props.inputComponent,InputComponent=_this$props$inputComp===void 0?reactNative.TextInput:_this$props$inputComp,inputStyle=_this$props.inputStyle,errorProps=_this$props.errorProps,errorStyle=_this$props.errorStyle,errorMessage=_this$props.errorMessage,label=_this$props.label,labelStyle=_this$props.labelStyle,labelProps=_this$props.labelProps,theme=_this$props.theme,attributes=objectWithoutProperties(_this$props,["containerStyle","disabled","disabledInputStyle","inputContainerStyle","leftIcon","leftIconContainerStyle","rightIcon","rightIconContainerStyle","inputComponent","inputStyle","errorProps","errorStyle","errorMessage","label","labelStyle","labelProps","theme"]);var translateX=this.shakeAnimationValue.interpolate({inputRange:[0,0.5,1,1.5,2,2.5,3],outputRange:[0,-15,0,15,0,-15,0]});return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$2.container,containerStyle]),__source:{fileName:_jsxFileName$5,lineNumber:88}},renderText(label,_objectSpread$3({style:labelStyle},labelProps),styles$2.label(theme)),React__default.createElement(reactNative.Animated.View,{style:reactNative.StyleSheet.flatten([styles$2.inputContainer(theme),inputContainerStyle,{transform:[{translateX:translateX}]}]),__source:{fileName:_jsxFileName$5,lineNumber:95}},leftIcon&&React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$2.iconContainer,leftIconContainerStyle]),__source:{fileName:_jsxFileName$5,lineNumber:103}},renderNode(Icon$1,leftIcon)),React__default.createElement(InputComponent,_extends_1({testID:"RNE__Input__text-input",underlineColorAndroid:"transparent",editable:!disabled},patchWebProps(attributes),{ref:function ref(_ref){_this2.input=_ref;},style:reactNative.StyleSheet.flatten([styles$2.input,inputStyle,disabled&&styles$2.disabledInput,disabled&&disabledInputStyle]),__source:{fileName:_jsxFileName$5,lineNumber:113}})),rightIcon&&React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$2.iconContainer,rightIconContainerStyle]),__source:{fileName:_jsxFileName$5,lineNumber:130}},renderNode(Icon$1,rightIcon))),!!errorMessage&&React__default.createElement(reactNative.Text,_extends_1({},errorProps,{style:reactNative.StyleSheet.flatten([styles$2.error(theme),errorStyle&&errorStyle]),__source:{fileName:_jsxFileName$5,lineNumber:142}}),errorMessage));}}]);return Input;}(React__default.Component);Input.propTypes={containerStyle:ViewPropTypes.style,disabled:propTypes.bool,disabledInputStyle:TextPropTypes.style,inputContainerStyle:ViewPropTypes.style,leftIcon:nodeType,leftIconContainerStyle:ViewPropTypes.style,rightIcon:nodeType,rightIconContainerStyle:ViewPropTypes.style,inputStyle:TextPropTypes.style,inputComponent:propTypes.elementType,errorProps:propTypes.object,errorStyle:TextPropTypes.style,errorMessage:propTypes.string,label:propTypes.node,labelStyle:TextPropTypes.style,labelProps:propTypes.object,theme:propTypes.object};var styles$2={container:{width:'100%',paddingHorizontal:10},disabledInput:{opacity:0.5},inputContainer:function inputContainer(theme){return {flexDirection:'row',borderBottomWidth:1,alignItems:'center',borderColor:theme.colors.grey3};},iconContainer:{height:40,justifyContent:'center',alignItems:'center',marginLeft:15},input:{alignSelf:'center',color:'black',fontSize:18,flex:1,minHeight:40},error:function error(theme){return {margin:5,fontSize:12,color:theme.colors.error};},label:function label(theme){return _objectSpread$3({fontSize:16,color:theme.colors.grey3},reactNative.Platform.select({android:_objectSpread$3({},fonts.android.bold),default:{fontWeight:'bold'}}));}};var Input$1 = withTheme(Input,'Input');

var _jsxFileName$6="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\image\\Image.js";function ownKeys$4(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$4(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$4(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$4(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Image=function(_React$Component){inherits(Image,_React$Component);function Image(){var _getPrototypeOf2;var _this;classCallCheck(this,Image);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Image)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={placeholderOpacity:new reactNative.Animated.Value(1)};_this.onLoad=function(){var minimumWait=100;var staggerNonce=200*Math.random();setTimeout(function(){reactNative.Animated.timing(_this.state.placeholderOpacity,{toValue:0,duration:350,useNativeDriver:reactNative.Platform.OS==='android'?false:true}).start();},reactNative.Platform.OS==='android'?0:Math.floor(minimumWait+staggerNonce));};return _this;}createClass(Image,[{key:"render",value:function render(){var _this$props=this.props,placeholderStyle=_this$props.placeholderStyle,PlaceholderContent=_this$props.PlaceholderContent,containerStyle=_this$props.containerStyle,style=_this$props.style,ImageComponent=_this$props.ImageComponent,children=_this$props.children,attributes=objectWithoutProperties(_this$props,["placeholderStyle","PlaceholderContent","containerStyle","style","ImageComponent","children"]);var hasImage=Boolean(attributes.source);return React__default.createElement(reactNative.View,{accessibilityIgnoresInvertColors:true,style:reactNative.StyleSheet.flatten([styles$3.container,containerStyle]),__source:{fileName:_jsxFileName$6,lineNumber:48}},React__default.createElement(ImageComponent,_extends_1({testID:"RNE__Image"},attributes,{onLoad:this.onLoad,style:[reactNative.StyleSheet.absoluteFill,{width:style.width,height:style.height}],__source:{fileName:_jsxFileName$6,lineNumber:52}})),React__default.createElement(reactNative.Animated.View,{pointerEvents:hasImage?'none':'auto',accessibilityElementsHidden:hasImage,importantForAccessibility:hasImage?'no-hide-descendants':'yes',style:[styles$3.placeholderContainer,{opacity:hasImage?this.state.placeholderOpacity:1}],__source:{fileName:_jsxFileName$6,lineNumber:65}},React__default.createElement(reactNative.View,{testID:"RNE__Image__placeholder",style:reactNative.StyleSheet.flatten([style,styles$3.placeholder,placeholderStyle]),__source:{fileName:_jsxFileName$6,lineNumber:76}},PlaceholderContent)),React__default.createElement(reactNative.View,{style:style,__source:{fileName:_jsxFileName$6,lineNumber:88}},children));}}]);return Image;}(React__default.Component);var styles$3={container:{backgroundColor:'transparent',position:'relative'},placeholderContainer:_objectSpread$4({},reactNative.StyleSheet.absoluteFillObject),placeholder:{backgroundColor:'#bdbdbd',alignItems:'center',justifyContent:'center'}};Image.propTypes=_objectSpread$4({},reactNative.Image.propTypes,{ImageComponent:propTypes.elementType,PlaceholderContent:nodeType,containerStyle:ViewPropTypes.style,placeholderStyle:reactNative.Image.propTypes.style});Image.defaultProps={ImageComponent:reactNative.Image,style:{}};var Image$1 = withTheme(Image,'Image');

var _jsxFileName$7="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\avatar\\Avatar.js";function ownKeys$5(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$5(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$5(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$5(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var avatarSizes={small:34,medium:50,large:75,xlarge:150};var defaultEditButton={name:'mode-edit',type:'material',color:'#fff',underlayColor:'#000'};var Avatar=function Avatar(_ref){var onPress=_ref.onPress,onLongPress=_ref.onLongPress,_ref$Component=_ref.Component,Component=_ref$Component===void 0?onPress||onLongPress?reactNative.TouchableOpacity:reactNative.View:_ref$Component,containerStyle=_ref.containerStyle,icon=_ref.icon,iconStyle=_ref.iconStyle,source=_ref.source,size=_ref.size,avatarStyle=_ref.avatarStyle,rounded=_ref.rounded,title=_ref.title,titleStyle=_ref.titleStyle,overlayContainerStyle=_ref.overlayContainerStyle,showEditButton=_ref.showEditButton,passedEditButton=_ref.editButton,onEditPress=_ref.onEditPress,imageProps=_ref.imageProps,placeholderStyle=_ref.placeholderStyle,renderPlaceholderContent=_ref.renderPlaceholderContent,ImageComponent=_ref.ImageComponent,attributes=objectWithoutProperties(_ref,["onPress","onLongPress","Component","containerStyle","icon","iconStyle","source","size","avatarStyle","rounded","title","titleStyle","overlayContainerStyle","showEditButton","editButton","onEditPress","imageProps","placeholderStyle","renderPlaceholderContent","ImageComponent"]);var width=typeof size==='number'?size:avatarSizes[size]||avatarSizes.small;var height=width;var titleSize=width/2;var iconSize=width/2;var editButton=_objectSpread$5({},defaultEditButton,{},passedEditButton);var editButtonSize=editButton.size||(width+height)/2/3;var Utils=showEditButton&&React__default.createElement(reactNative.TouchableHighlight,{style:reactNative.StyleSheet.flatten([styles$4.editButton,{width:editButtonSize,height:editButtonSize,borderRadius:editButtonSize/2},editButton.style]),underlayColor:editButton.underlayColor,onPress:onEditPress,__source:{fileName:_jsxFileName$7,lineNumber:71}},React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$7,lineNumber:84}},React__default.createElement(Icon$1,_extends_1({size:editButtonSize*0.8},editButton,{__source:{fileName:_jsxFileName$7,lineNumber:85}}))));var PlaceholderContent=renderPlaceholderContent&&renderNode(undefined,renderPlaceholderContent)||title&&React__default.createElement(reactNative.Text,{style:reactNative.StyleSheet.flatten([styles$4.title,{fontSize:titleSize},titleStyle]),__source:{fileName:_jsxFileName$7,lineNumber:94}},title)||icon&&React__default.createElement(Icon$1,{style:iconStyle&&iconStyle,color:icon.color||'white',name:icon.name||'user',size:icon.size||iconSize,type:icon.type&&icon.type,__source:{fileName:_jsxFileName$7,lineNumber:105}});var hidePlaceholder=!source;return React__default.createElement(Component,_extends_1({onPress:onPress,onLongPress:onLongPress,style:reactNative.StyleSheet.flatten([styles$4.container,{height:height,width:width},rounded&&{borderRadius:width/2},containerStyle])},attributes,{__source:{fileName:_jsxFileName$7,lineNumber:118}}),React__default.createElement(Image$1,_extends_1({placeholderStyle:reactNative.StyleSheet.flatten([placeholderStyle,hidePlaceholder&&{backgroundColor:'transparent'}]),PlaceholderContent:PlaceholderContent,containerStyle:reactNative.StyleSheet.flatten([styles$4.overlayContainer,overlayContainerStyle,rounded&&{borderRadius:width/2,overflow:'hidden'}]),source:source},imageProps,{style:reactNative.StyleSheet.flatten([styles$4.avatar,imageProps&&imageProps.style,avatarStyle]),ImageComponent:ImageComponent,__source:{fileName:_jsxFileName$7,lineNumber:129}})),Utils);};var styles$4=reactNative.StyleSheet.create({container:{backgroundColor:'transparent'},avatar:{flex:1,width:null,height:null},overlayContainer:{flex:1,backgroundColor:'#bdbdbd'},title:{color:'#ffffff',backgroundColor:'transparent',textAlign:'center'},editButton:_objectSpread$5({position:'absolute',bottom:0,right:0,alignItems:'center',justifyContent:'center',backgroundColor:'#aaa'},reactNative.Platform.select({android:{elevation:1},default:{shadowColor:'#000',shadowOffset:{width:1,height:1},shadowRadius:2,shadowOpacity:0.5}}))});Avatar.propTypes={Component:propTypes.oneOf([reactNative.View,reactNative.TouchableOpacity,reactNative.TouchableHighlight,reactNative.TouchableNativeFeedback,reactNative.TouchableWithoutFeedback]),onPress:propTypes.func,onLongPress:propTypes.func,containerStyle:ViewPropTypes.style,source:reactNative.Image.propTypes.source,avatarStyle:ViewPropTypes.style,rounded:propTypes.bool,title:propTypes.string,titleStyle:reactNative.Text.propTypes.style,overlayContainerStyle:ViewPropTypes.style,activeOpacity:propTypes.number,icon:propTypes.object,iconStyle:reactNative.Text.propTypes.style,size:propTypes.oneOfType([propTypes.oneOf(['small','medium','large','xlarge']),propTypes.number]),showEditButton:propTypes.bool,onEditPress:propTypes.func,editButton:propTypes.shape({size:propTypes.number,name:propTypes.string,type:propTypes.string,color:propTypes.string,underlayColor:propTypes.string,style:ViewPropTypes.style}),placeholderStyle:ViewPropTypes.style,renderPlaceholderContent:nodeType,imageProps:propTypes.object,ImageComponent:propTypes.elementType};Avatar.defaultProps={showEditButton:false,onEditPress:null,size:'small',editButton:defaultEditButton,ImageComponent:reactNative.Image};var Avatar$1 = withTheme(Avatar,'Avatar');

var _jsxFileName$8="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\badge\\Badge.js";var Badge=function Badge(props){var containerStyle=props.containerStyle,textStyle=props.textStyle,badgeStyle=props.badgeStyle,onPress=props.onPress,_props$Component=props.Component,Component=_props$Component===void 0?onPress?reactNative.TouchableOpacity:reactNative.View:_props$Component,value=props.value,theme=props.theme,status=props.status,attributes=objectWithoutProperties(props,["containerStyle","textStyle","badgeStyle","onPress","Component","value","theme","status"]);var element=renderNode(reactNative.Text,value,{style:reactNative.StyleSheet.flatten([styles$5.text,textStyle&&textStyle])});return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([containerStyle&&containerStyle]),__source:{fileName:_jsxFileName$8,lineNumber:26}},React__default.createElement(Component,_extends_1({},attributes,{style:reactNative.StyleSheet.flatten([styles$5.badge(theme,status),!element&&styles$5.miniBadge,badgeStyle&&badgeStyle]),onPress:onPress,__source:{fileName:_jsxFileName$8,lineNumber:27}}),element));};Badge.propTypes={containerStyle:ViewPropTypes.style,badgeStyle:ViewPropTypes.style,textStyle:reactNative.Text.propTypes.style,value:propTypes.node,onPress:propTypes.func,Component:propTypes.elementType,theme:propTypes.object,status:propTypes.oneOf(['primary','success','warning','error'])};Badge.defaultProps={status:'primary'};var size=18;var miniSize=8;var styles$5={badge:function badge(theme,status){return {alignSelf:'center',minWidth:size,height:size,borderRadius:size/2,alignItems:'center',justifyContent:'center',backgroundColor:theme.colors[status],borderWidth:reactNative.StyleSheet.hairlineWidth,borderColor:'#fff'};},miniBadge:{paddingHorizontal:0,paddingVertical:0,minWidth:miniSize,height:miniSize,borderRadius:miniSize/2},text:{fontSize:12,color:'white',paddingHorizontal:4}};var Badge$1 = withTheme(Badge,'Badge');

var _jsxFileName$9="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\text\\Text.js";function ownKeys$6(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$6(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$6(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$6(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var TextElement=function TextElement(props){var style=props.style,children=props.children,h1=props.h1,h2=props.h2,h3=props.h3,h4=props.h4,h1Style=props.h1Style,h2Style=props.h2Style,h3Style=props.h3Style,h4Style=props.h4Style,rest=objectWithoutProperties(props,["style","children","h1","h2","h3","h4","h1Style","h2Style","h3Style","h4Style"]);return React__default.createElement(reactNative.Text,_extends_1({style:reactNative.StyleSheet.flatten([styles$6.text,style&&style,h1&&styles$6.bold,h2&&styles$6.bold,h3&&styles$6.bold,h4&&styles$6.bold,h1&&reactNative.StyleSheet.flatten([{fontSize:normalize(40)},h1Style]),h2&&reactNative.StyleSheet.flatten([{fontSize:normalize(34)},h2Style]),h3&&reactNative.StyleSheet.flatten([{fontSize:normalize(28)},h3Style]),h4&&reactNative.StyleSheet.flatten([{fontSize:normalize(22)},h4Style])])},patchWebProps(rest),{__source:{fileName:_jsxFileName$9,lineNumber:25}}),children);};TextElement.propTypes={style:reactNative.Text.propTypes.style,h1:propTypes.bool,h2:propTypes.bool,h3:propTypes.bool,h4:propTypes.bool,h1Style:reactNative.Text.propTypes.style,h2Style:reactNative.Text.propTypes.style,h3Style:reactNative.Text.propTypes.style,h4Style:reactNative.Text.propTypes.style,children:propTypes.node};TextElement.defaultProps={h1:false,h2:false,h3:false,h4:false,style:{},h1Style:{},h2Style:{},h3Style:{},h4Style:{},children:''};var styles$6=reactNative.StyleSheet.create({text:_objectSpread$6({},reactNative.Platform.select({android:_objectSpread$6({},fonts.android.regular)})),bold:_objectSpread$6({},reactNative.Platform.select({android:_objectSpread$6({},fonts.android.bold)}))});var Text = withTheme(TextElement,'Text');

var _jsxFileName$a="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\checkbox\\CheckBoxIcon.js";var CheckBoxIcon=function CheckBoxIcon(_ref){var checked=_ref.checked,onIconPress=_ref.onIconPress,onLongIconPress=_ref.onLongIconPress,size=_ref.size,checkedIcon=_ref.checkedIcon,uncheckedIcon=_ref.uncheckedIcon,iconType=_ref.iconType,checkedColor=_ref.checkedColor,uncheckedColor=_ref.uncheckedColor;if(checked&&React__default.isValidElement(checkedIcon)){return checkedIcon;}if(!checked&&React__default.isValidElement(uncheckedIcon)){return uncheckedIcon;}var VectorIcon=iconType?getIconType(iconType):FAIcon;return React__default.createElement(VectorIcon,{color:checked?checkedColor:uncheckedColor,name:checked?checkedIcon:uncheckedIcon,size:size||24,style:{minWidth:size||24},onLongPress:onLongIconPress,onPress:onIconPress,__source:{fileName:_jsxFileName$a,lineNumber:29}});};CheckBoxIcon.propTypes={checked:propTypes.bool,onIconPress:propTypes.func,onLongIconPress:propTypes.func,size:propTypes.number,checkedIcon:propTypes.oneOfType([propTypes.string,propTypes.element]),uncheckedIcon:propTypes.oneOfType([propTypes.string,propTypes.element]),iconType:propTypes.string,checkedColor:propTypes.string,uncheckedColor:propTypes.string};

var _jsxFileName$b="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\checkbox\\CheckBox.js";function ownKeys$7(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$7(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$7(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$7(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var CheckBox=function CheckBox(props){var theme=props.theme,rest=objectWithoutProperties(props,["theme"]);var Component=rest.Component,checked=rest.checked,iconRight=rest.iconRight,title=rest.title,titleProps=rest.titleProps,center=rest.center,right=rest.right,containerStyle=rest.containerStyle,textStyle=rest.textStyle,wrapperStyle=rest.wrapperStyle,onPress=rest.onPress,onLongPress=rest.onLongPress,checkedTitle=rest.checkedTitle,fontFamily=rest.fontFamily,_rest$checkedColor=rest.checkedColor,checkedColor=_rest$checkedColor===void 0?theme.colors.primary:_rest$checkedColor,attributes=objectWithoutProperties(rest,["Component","checked","iconRight","title","titleProps","center","right","containerStyle","textStyle","wrapperStyle","onPress","onLongPress","checkedTitle","fontFamily","checkedColor"]);return React__default.createElement(Component,_extends_1({},attributes,{testID:"checkbox",onLongPress:onLongPress,onPress:onPress,style:reactNative.StyleSheet.flatten([styles$7.container,title&&styles$7.containerHasTitle,containerStyle&&containerStyle]),__source:{fileName:_jsxFileName$b,lineNumber:38}}),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$7.wrapper,right&&{justifyContent:'flex-end'},center&&{justifyContent:'center'},wrapperStyle&&wrapperStyle]),__source:{fileName:_jsxFileName$b,lineNumber:49}},!iconRight&&React__default.createElement(CheckBoxIcon,_extends_1({},props,{checkedColor:checkedColor,__source:{fileName:_jsxFileName$b,lineNumber:57}})),React__default.isValidElement(title)?title:title&&React__default.createElement(Text,_extends_1({testID:"checkboxTitle",style:reactNative.StyleSheet.flatten([styles$7.text(theme),textStyle&&textStyle,fontFamily&&{fontFamily:fontFamily}])},titleProps,{__source:{fileName:_jsxFileName$b,lineNumber:62}}),checked?checkedTitle||title:title),iconRight&&React__default.createElement(CheckBoxIcon,_extends_1({},props,{checkedColor:checkedColor,__source:{fileName:_jsxFileName$b,lineNumber:75}}))));};CheckBox.propTypes=_objectSpread$7({},CheckBoxIcon.propTypes,{Component:propTypes.elementType,iconRight:propTypes.bool,title:propTypes.oneOfType([propTypes.string,propTypes.element]),titleProps:propTypes.object,center:propTypes.bool,right:propTypes.bool,containerStyle:ViewPropTypes.style,wrapperStyle:ViewPropTypes.style,textStyle:reactNative.Text.propTypes.style,onPress:propTypes.func,onLongPress:propTypes.func,checkedTitle:propTypes.string,fontFamily:propTypes.string});CheckBox.defaultProps={checked:false,iconRight:false,right:false,center:false,uncheckedColor:'#bfbfbf',checkedIcon:'check-square-o',uncheckedIcon:'square-o',size:24,Component:reactNative.TouchableOpacity,titleProps:{}};var styles$7={wrapper:{flexDirection:'row',alignItems:'center'},container:{margin:5,marginLeft:10,marginRight:10,padding:10},containerHasTitle:{borderWidth:1,borderRadius:3,backgroundColor:'#fafafa',borderColor:'#ededed'},text:function text(theme){return _objectSpread$7({marginLeft:10,marginRight:10,color:theme.colors.grey1},reactNative.Platform.select({android:_objectSpread$7({},fonts.android.bold),default:{fontWeight:'bold'}}));}};var CheckBox$1 = withTheme(CheckBox,'CheckBox');

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

var _jsxFileName$c="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\buttons\\ButtonGroup.js";function ownKeys$8(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$8(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$8(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$8(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ButtonGroup=function ButtonGroup(props){var theme=props.theme,rest=objectWithoutProperties(props,["theme"]);var Component=rest.Component,buttons=rest.buttons,_onPress=rest.onPress,selectedIndex=rest.selectedIndex,selectedIndexes=rest.selectedIndexes,selectMultiple=rest.selectMultiple,containerStyle=rest.containerStyle,innerBorderStyle=rest.innerBorderStyle,lastBorderStyle=rest.lastBorderStyle,buttonStyle=rest.buttonStyle,textStyle=rest.textStyle,selectedTextStyle=rest.selectedTextStyle,selectedButtonStyle=rest.selectedButtonStyle,_rest$underlayColor=rest.underlayColor,underlayColor=_rest$underlayColor===void 0?theme.colors.primary:_rest$underlayColor,activeOpacity=rest.activeOpacity,onHideUnderlay=rest.onHideUnderlay,onShowUnderlay=rest.onShowUnderlay,setOpacityTo=rest.setOpacityTo,containerBorderRadius=rest.containerBorderRadius,disabled=rest.disabled,disabledStyle=rest.disabledStyle,disabledTextStyle=rest.disabledTextStyle,disabledSelectedStyle=rest.disabledSelectedStyle,disabledSelectedTextStyle=rest.disabledSelectedTextStyle,attributes=objectWithoutProperties(rest,["Component","buttons","onPress","selectedIndex","selectedIndexes","selectMultiple","containerStyle","innerBorderStyle","lastBorderStyle","buttonStyle","textStyle","selectedTextStyle","selectedButtonStyle","underlayColor","activeOpacity","onHideUnderlay","onShowUnderlay","setOpacityTo","containerBorderRadius","disabled","disabledStyle","disabledTextStyle","disabledSelectedStyle","disabledSelectedTextStyle"]);var innerBorderWidth=1;if(innerBorderStyle&&Object.prototype.hasOwnProperty.call(innerBorderStyle,'width')){innerBorderWidth=innerBorderStyle.width;}return React__default.createElement(reactNative.View,_extends_1({},attributes,{style:reactNative.StyleSheet.flatten([styles$8.container,containerStyle&&containerStyle]),__source:{fileName:_jsxFileName$c,lineNumber:58}}),buttons.map(function(button,i){var isSelected=selectedIndex===i||selectedIndexes.includes(i);var isDisabled=disabled===true||Array.isArray(disabled)&&disabled.includes(i);return React__default.createElement(reactNative.View,{key:i,style:reactNative.StyleSheet.flatten([styles$8.button,i<buttons.length-1&&{borderRightWidth:i===0?0:innerBorderWidth,borderRightColor:innerBorderStyle&&innerBorderStyle.color||theme.colors.grey4},i===1&&{borderLeftWidth:innerBorderWidth,borderLeftColor:innerBorderStyle&&innerBorderStyle.color||theme.colors.grey4},i===buttons.length-1&&_objectSpread$8({},lastBorderStyle,{borderTopRightRadius:containerBorderRadius,borderBottomRightRadius:containerBorderRadius}),i===0&&{borderTopLeftRadius:containerBorderRadius,borderBottomLeftRadius:containerBorderRadius}]),__source:{fileName:_jsxFileName$c,lineNumber:72}},React__default.createElement(Component,{testID:"buttonGroupItem",activeOpacity:activeOpacity,setOpacityTo:setOpacityTo,onHideUnderlay:onHideUnderlay,onShowUnderlay:onShowUnderlay,underlayColor:underlayColor,disabled:isDisabled,onPress:function onPress(){if(selectMultiple){if(selectedIndexes.includes(i)){_onPress(selectedIndexes.filter(function(index){return index!==i;}));}else{_onPress([].concat(toConsumableArray(selectedIndexes),[i]));}}else{_onPress(i);}},style:styles$8.button,__source:{fileName:_jsxFileName$c,lineNumber:101}},React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$8.textContainer,buttonStyle&&buttonStyle,isSelected&&{backgroundColor:theme.colors.primary},isSelected&&selectedButtonStyle&&selectedButtonStyle,isDisabled&&styles$8.disabled,isDisabled&&disabledStyle,isDisabled&&isSelected&&styles$8.disabledSelected(theme),isDisabled&&isSelected&&disabledSelectedStyle]),__source:{fileName:_jsxFileName$c,lineNumber:122}},button.element?React__default.createElement(button.element,{__source:{fileName:_jsxFileName$c,lineNumber:137}}):React__default.createElement(Text,{testID:"buttonGroupItemText",style:reactNative.StyleSheet.flatten([styles$8.buttonText(theme),textStyle&&textStyle,isSelected&&{color:'#fff'},isSelected&&selectedTextStyle,isDisabled&&styles$8.disabledText(theme),isDisabled&&disabledTextStyle,isDisabled&&isSelected&&disabledSelectedTextStyle]),__source:{fileName:_jsxFileName$c,lineNumber:139}},button))));}));};var styles$8={button:{flex:1},textContainer:{flex:1,justifyContent:'center',alignItems:'center'},container:{marginLeft:10,marginRight:10,marginBottom:5,marginTop:5,borderColor:'#e3e3e3',borderWidth:1,flexDirection:'row',borderRadius:3,overflow:'hidden',backgroundColor:'#fff',height:40},buttonText:function buttonText(theme){return _objectSpread$8({fontSize:normalize(13),color:theme.colors.grey2},reactNative.Platform.select({android:{},default:{fontWeight:'500'}}));},disabled:{backgroundColor:'transparent'},disabledText:function disabledText(theme){return {color:color(theme.colors.disabled).darken(0.3).toString()};},disabledSelected:function disabledSelected(theme){return {backgroundColor:theme.colors.disabled};}};ButtonGroup.propTypes={button:propTypes.object,Component:propTypes.elementType,onPress:propTypes.func,buttons:propTypes.array,containerStyle:ViewPropTypes.style,textStyle:reactNative.Text.propTypes.style,selectedTextStyle:reactNative.Text.propTypes.style,selectedButtonStyle:ViewPropTypes.style,underlayColor:propTypes.string,selectedIndex:propTypes.number,selectedIndexes:propTypes.arrayOf(propTypes.number),activeOpacity:propTypes.number,onHideUnderlay:propTypes.func,onShowUnderlay:propTypes.func,setOpacityTo:propTypes.func,innerBorderStyle:propTypes.shape({color:propTypes.string,width:propTypes.number}),lastBorderStyle:propTypes.oneOfType([ViewPropTypes.style,reactNative.Text.propTypes.style]),buttonStyle:ViewPropTypes.style,containerBorderRadius:propTypes.number,selectMultiple:propTypes.bool,theme:propTypes.object,disabled:propTypes.oneOfType([propTypes.bool,propTypes.arrayOf(propTypes.number)]),disabledStyle:ViewPropTypes.style,disabledTextStyle:reactNative.Text.propTypes.style,disabledSelectedStyle:ViewPropTypes.style,disabledSelectedTextStyle:reactNative.Text.propTypes.style};ButtonGroup.defaultProps={selectedIndex:null,selectedIndexes:[],selectMultiple:false,containerBorderRadius:3,disabled:false,Component:reactNative.Platform.select({android:reactNative.TouchableNativeFeedback,default:reactNative.TouchableOpacity}),onPress:function onPress(){return null;}};var ButtonGroup$1 = withTheme(ButtonGroup,'ButtonGroup');

var _jsxFileName$d="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\list\\ListItem.js";function ownKeys$9(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$9(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$9(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$9(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ANDROID_SECONDARY='rgba(0, 0, 0, 0.54)';var chevronDefaultProps={type:reactNative.Platform.OS==='ios'?'ionicon':'material',color:'#D1D1D6',name:reactNative.Platform.OS==='ios'?'ios-arrow-forward':'keyboard-arrow-right',size:16};var checkmarkDefaultProps=function checkmarkDefaultProps(theme){return {name:'check',size:20,color:theme.colors.primary};};var renderText$1=function renderText(content,defaultProps,style){return renderNode(Text,content,_objectSpread$9({},defaultProps,{style:reactNative.StyleSheet.flatten([style,defaultProps&&defaultProps.style])}));};var renderAvatar=function renderAvatar(content){return renderNode(Avatar$1,content,{size:40,rounded:true});};var renderIcon=function renderIcon(content){return renderNode(Icon$1,content,{color:reactNative.Platform.OS==='ios'?null:ANDROID_SECONDARY,size:24});};var ListItem=function ListItem(props){var title=props.title,titleStyle=props.titleStyle,titleProps=props.titleProps,subtitle=props.subtitle,subtitleStyle=props.subtitleStyle,subtitleProps=props.subtitleProps,containerStyle=props.containerStyle,onPress=props.onPress,onLongPress=props.onLongPress,_props$Component=props.Component,Component=_props$Component===void 0?onPress||onLongPress?reactNative.TouchableHighlight:reactNative.View:_props$Component,leftIcon=props.leftIcon,leftAvatar=props.leftAvatar,leftElement=props.leftElement,rightIcon=props.rightIcon,rightAvatar=props.rightAvatar,rightElement=props.rightElement,rightTitle=props.rightTitle,rightTitleStyle=props.rightTitleStyle,rightTitleProps=props.rightTitleProps,rightSubtitle=props.rightSubtitle,rightSubtitleStyle=props.rightSubtitleStyle,rightSubtitleProps=props.rightSubtitleProps,input=props.input,buttonGroup=props.buttonGroup,switchProps=props.switch,checkBox=props.checkBox,badge=props.badge,chevron=props.chevron,contentContainerStyle=props.contentContainerStyle,rightContentContainerStyle=props.rightContentContainerStyle,checkmark=props.checkmark,disabled=props.disabled,disabledStyle=props.disabledStyle,bottomDivider=props.bottomDivider,topDivider=props.topDivider,pad=props.pad,linearGradientProps=props.linearGradientProps,_props$ViewComponent=props.ViewComponent,ViewComponent=_props$ViewComponent===void 0?linearGradientProps&&global.Expo?global.Expo.LinearGradient:reactNative.View:_props$ViewComponent,theme=props.theme,attributes=objectWithoutProperties(props,["title","titleStyle","titleProps","subtitle","subtitleStyle","subtitleProps","containerStyle","onPress","onLongPress","Component","leftIcon","leftAvatar","leftElement","rightIcon","rightAvatar","rightElement","rightTitle","rightTitleStyle","rightTitleProps","rightSubtitle","rightSubtitleStyle","rightSubtitleProps","input","buttonGroup","switch","checkBox","badge","chevron","contentContainerStyle","rightContentContainerStyle","checkmark","disabled","disabledStyle","bottomDivider","topDivider","pad","linearGradientProps","ViewComponent","theme"]);return React__default.createElement(Component,_extends_1({},attributes,{onPress:onPress,onLongPress:onLongPress,disabled:disabled,__source:{fileName:_jsxFileName$d,lineNumber:101}}),React__default.createElement(PadView,_extends_1({Component:ViewComponent},linearGradientProps,{style:reactNative.StyleSheet.flatten([styles$9.container(theme),(buttonGroup||switchProps)&&{paddingVertical:8},topDivider&&{borderTopWidth:reactNative.StyleSheet.hairlineWidth},bottomDivider&&{borderBottomWidth:reactNative.StyleSheet.hairlineWidth},containerStyle,disabled&&disabledStyle]),pad:pad,__source:{fileName:_jsxFileName$d,lineNumber:107}}),renderNode(Text,leftElement),renderIcon(leftIcon),renderAvatar(leftAvatar),(typeof title!=='undefined'||subtitle)&&React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$9.contentContainer,contentContainerStyle]),__source:{fileName:_jsxFileName$d,lineNumber:125}},renderText$1(title,_objectSpread$9({testID:'listItemTitle'},titleProps),reactNative.StyleSheet.flatten([styles$9.title,titleStyle])),renderText$1(subtitle,subtitleProps,reactNative.StyleSheet.flatten([styles$9.subtitle,subtitleStyle]))),(!!rightTitle||!!rightSubtitle)&&React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$9.rightContentContainer,rightContentContainerStyle]),__source:{fileName:_jsxFileName$d,lineNumber:145}},renderText$1(rightTitle,rightTitleProps,reactNative.StyleSheet.flatten([styles$9.title,styles$9.rightTitle,rightTitleStyle])),renderText$1(rightSubtitle,rightSubtitleProps,reactNative.StyleSheet.flatten([styles$9.subtitle,styles$9.rightSubtitle,rightSubtitleStyle]))),input&&React__default.createElement(Input$1,_extends_1({},input,{inputStyle:reactNative.StyleSheet.flatten([styles$9.input,input&&input.inputStyle]),inputContainerStyle:reactNative.StyleSheet.flatten([styles$9.inputContentContainer,input&&input.inputContainerStyle]),containerStyle:reactNative.StyleSheet.flatten([styles$9.inputContainer,input&&input.containerStyle]),__source:{fileName:_jsxFileName$d,lineNumber:174}})),switchProps&&React__default.createElement(reactNative.Switch,_extends_1({},switchProps,{__source:{fileName:_jsxFileName$d,lineNumber:190}})),checkBox&&React__default.createElement(CheckBox$1,_extends_1({},checkBox,{containerStyle:reactNative.StyleSheet.flatten([styles$9.checkboxContainer,checkBox&&checkBox.containerStyle]),__source:{fileName:_jsxFileName$d,lineNumber:192}})),badge&&React__default.createElement(Badge$1,_extends_1({},badge,{__source:{fileName:_jsxFileName$d,lineNumber:200}})),buttonGroup&&React__default.createElement(ButtonGroup$1,_extends_1({},buttonGroup,{containerStyle:reactNative.StyleSheet.flatten([styles$9.buttonGroupContainer,buttonGroup&&buttonGroup.containerStyle]),__source:{fileName:_jsxFileName$d,lineNumber:202}})),renderAvatar(rightAvatar),renderIcon(rightIcon),renderNode(Text,rightElement),renderNode(Icon$1,checkmark,checkmarkDefaultProps(theme)),renderNode(Icon$1,chevron,chevronDefaultProps)));};var styles$9={container:function container(theme){return _objectSpread$9({},reactNative.Platform.select({ios:{padding:14},default:{padding:16}}),{flexDirection:'row',alignItems:'center',backgroundColor:'white',borderColor:theme.colors.divider});},title:_objectSpread$9({backgroundColor:'transparent'},reactNative.Platform.select({ios:{fontSize:17},default:{fontSize:16}})),subtitle:_objectSpread$9({backgroundColor:'transparent'},reactNative.Platform.select({ios:{fontSize:15},default:{color:ANDROID_SECONDARY,fontSize:14}})),contentContainer:{flex:1,justifyContent:'center'},rightContentContainer:{flex:0.5,justifyContent:'center',alignItems:'flex-end'},inputContainer:{flex:1,paddingRight:0},inputContentContainer:{flex:1,borderBottomWidth:0,width:null,height:null},input:{flex:1,textAlign:'right',width:null,height:null},checkboxContainer:{margin:0,marginRight:0,marginLeft:0,padding:0},buttonGroupContainer:{flex:1,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0},rightTitle:{color:ANDROID_SECONDARY},rightSubtitle:{color:ANDROID_SECONDARY}};ListItem.propTypes={containerStyle:ViewPropTypes.style,contentContainerStyle:ViewPropTypes.style,rightContentContainerStyle:ViewPropTypes.style,Component:propTypes.elementType,onPress:propTypes.func,onLongPress:propTypes.func,title:propTypes.oneOfType([propTypes.string,propTypes.element]),titleStyle:TextPropTypes.style,titleProps:propTypes.object,subtitle:propTypes.oneOfType([propTypes.string,propTypes.element]),subtitleStyle:TextPropTypes.style,subtitleProps:propTypes.object,leftIcon:nodeType,leftAvatar:nodeType,leftElement:nodeType,rightIcon:nodeType,rightAvatar:nodeType,rightElement:nodeType,rightTitle:propTypes.oneOfType([propTypes.string,propTypes.element]),rightTitleStyle:TextPropTypes.style,rightTitleProps:propTypes.object,rightSubtitle:propTypes.oneOfType([propTypes.string,propTypes.element]),rightSubtitleStyle:TextPropTypes.style,rightSubtitleProps:propTypes.object,input:propTypes.object,buttonGroup:propTypes.object,switch:propTypes.object,checkBox:propTypes.object,badge:propTypes.object,chevron:nodeType,checkmark:nodeType,disabled:propTypes.bool,disabledStyle:ViewPropTypes.style,topDivider:propTypes.bool,bottomDivider:propTypes.bool,pad:propTypes.number,linearGradientProps:propTypes.object,ViewComponent:propTypes.elementType,theme:propTypes.object};ListItem.defaultProps={pad:16,title:''};var PadView=function(_React$Component){inherits(PadView,_React$Component);function PadView(props){var _this;classCallCheck(this,PadView);_this=possibleConstructorReturn(this,getPrototypeOf(PadView).call(this,props));_this.setNativeProps=function(nativeProps){_this._root.current.setNativeProps(nativeProps);};_this._root=React__default.createRef();return _this;}createClass(PadView,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,pad=_this$props.pad,Component=_this$props.Component,props=objectWithoutProperties(_this$props,["children","pad","Component"]);var childrens=React__default.Children.toArray(children);var length=childrens.length;var Container=Component||reactNative.View;return React__default.createElement(Container,_extends_1({},props,{ref:this._root,__source:{fileName:_jsxFileName$d,lineNumber:367}}),React__default.Children.map(childrens,function(child,index){return child&&[child,index!==length-1&&React__default.createElement(reactNative.View,{width:pad,__source:{fileName:_jsxFileName$d,lineNumber:371}})];}));}}]);return PadView;}(React__default.Component);PadView.propTypes={children:propTypes.node,pad:propTypes.number,Component:propTypes.elementType};var ListItem$1 = withTheme(ListItem,'ListItem');

var _jsxFileName$e="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\social\\SocialIcon.js";function ownKeys$a(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$a(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$a(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$a(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var colors$1={'github-alt':'#000000','google-plus-official':'#dd4b39',google:'#dd4b39','reddit-alien':'#fc461e','stack-overflow':'#f27f33',angellist:'#1c4082',codepen:'#000000',envelope:'#000000',etsy:'#f2581e',facebook:'#3b5998',flickr:'#ff0084',foursquare:'#0072b1',github:'#000000',gitlab:'#e14329',instagram:'#517fa4',linkedin:'#007bb6',medium:'#02b875',pinterest:'#cb2027',quora:'#a82400',soundcloud:'#f50',steam:'#c6c3c1',stumbleupon:'#EB4823',tumblr:'#32506d',twitch:'#6441A5',twitter:'#00aced',vimeo:'#aad450',vk:'#5181b8',wechat:'#7bb32e',weibo:'#e6162d',wordpress:'#21759b',youtube:'#bb0000'};var SocialIcon=function SocialIcon(props){var activityIndicatorStyle=props.activityIndicatorStyle,button=props.button,disabled=props.disabled,fontFamily=props.fontFamily,fontStyle=props.fontStyle,fontWeight=props.fontWeight,iconColor=props.iconColor,iconSize=props.iconSize,iconStyle=props.iconStyle,light=props.light,loading=props.loading,onLongPress=props.onLongPress,onPress=props.onPress,_props$Component=props.Component,Component=_props$Component===void 0?onPress||onLongPress?reactNative.TouchableHighlight:reactNative.View:_props$Component,raised=props.raised,small=props.small,style=props.style,title=props.title,type=props.type,underlayColor=props.underlayColor,attributes=objectWithoutProperties(props,["activityIndicatorStyle","button","disabled","fontFamily","fontStyle","fontWeight","iconColor","iconSize","iconStyle","light","loading","onLongPress","onPress","Component","raised","small","style","title","type","underlayColor"]);return React__default.createElement(Component,_extends_1({},attributes,{underlayColor:light?'white':underlayColor||colors$1[type],onLongPress:disabled?null:onLongPress,onPress:disabled?null:onPress,disabled:disabled,style:reactNative.StyleSheet.flatten([raised&&styles$a.raised,styles$a.container,button&&styles$a.button,!button&&raised&&styles$a.icon,!button&&!light&&!raised&&{width:iconSize*2+4,height:iconSize*2+4,borderRadius:iconSize*2},{backgroundColor:colors$1[type]},light&&{backgroundColor:'white'},style&&style]),__source:{fileName:_jsxFileName$e,lineNumber:78}}),React__default.createElement(reactNative.View,{style:styles$a.wrapper,__source:{fileName:_jsxFileName$e,lineNumber:101}},React__default.createElement(FAIcon,{style:reactNative.StyleSheet.flatten([iconStyle&&iconStyle]),color:light?colors$1[type]:iconColor,name:type,size:iconSize,__source:{fileName:_jsxFileName$e,lineNumber:102}}),button&&title&&React__default.createElement(Text,{style:reactNative.StyleSheet.flatten([styles$a.title,light&&{color:colors$1[type]},fontFamily&&{fontFamily:fontFamily},fontWeight&&{fontWeight:fontWeight},fontStyle&&fontStyle]),__source:{fileName:_jsxFileName$e,lineNumber:109}},title),loading&&React__default.createElement(reactNative.ActivityIndicator,{animating:true,style:reactNative.StyleSheet.flatten([styles$a.activityIndicatorStyle,activityIndicatorStyle]),color:iconColor||'white',size:small&&'small'||'large',__source:{fileName:_jsxFileName$e,lineNumber:123}})));};SocialIcon.propTypes={Component:propTypes.elementType,type:propTypes.string,button:propTypes.bool,onPress:propTypes.func,onLongPress:propTypes.func,iconStyle:ViewPropTypes.style,style:ViewPropTypes.style,iconColor:propTypes.string,underlayColor:propTypes.string,title:propTypes.string,raised:propTypes.bool,disabled:propTypes.bool,loading:propTypes.bool,activityIndicatorStyle:ViewPropTypes.style,small:propTypes.string,iconSize:propTypes.oneOfType([propTypes.string,propTypes.number]),light:propTypes.bool,fontWeight:propTypes.string,fontStyle:reactNative.Text.propTypes.style,fontFamily:propTypes.string};SocialIcon.defaultProps={raised:true,iconColor:'white',iconSize:24,button:false};var styles$a=reactNative.StyleSheet.create({container:{margin:7,borderRadius:30,flexDirection:'row',justifyContent:'center',alignItems:'center'},button:{paddingTop:14,paddingBottom:14},raised:_objectSpread$a({},reactNative.Platform.select({android:{elevation:2},default:{shadowColor:'rgba(0,0,0, .4)',shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1}})),wrapper:{flexDirection:'row',justifyContent:'center',alignItems:'center'},title:_objectSpread$a({color:'white',marginLeft:15},reactNative.Platform.select({android:_objectSpread$a({},fonts.android.black),default:{fontWeight:'bold'}})),icon:{height:52,width:52},activityIndicatorStyle:{marginHorizontal:10,height:0}});var SocialIcon$1 = withTheme(SocialIcon,'SocialIcon');

var _jsxFileName$f="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\overlay\\Overlay.js";function ownKeys$b(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$b(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$b(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$b(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Overlay=function Overlay(props){var children=props.children,isVisible=props.isVisible,containerStyle=props.containerStyle,overlayStyle=props.overlayStyle,windowBackgroundColor=props.windowBackgroundColor,overlayBackgroundColor=props.overlayBackgroundColor,onBackdropPress=props.onBackdropPress,borderRadius=props.borderRadius,width=props.width,height=props.height,fullScreen=props.fullScreen,rest=objectWithoutProperties(props,["children","isVisible","containerStyle","overlayStyle","windowBackgroundColor","overlayBackgroundColor","onBackdropPress","borderRadius","width","height","fullScreen"]);return React__default.createElement(reactNative.Modal,_extends_1({visible:isVisible,onRequestClose:onBackdropPress,transparent:true},rest,{__source:{fileName:_jsxFileName$f,lineNumber:31}}),React__default.createElement(reactNative.TouchableWithoutFeedback,{onPress:onBackdropPress,testID:"RNE__Overlay__backdrop",__source:{fileName:_jsxFileName$f,lineNumber:37}},React__default.createElement(reactNative.View,{testID:"overlayContainer",style:reactNative.StyleSheet.flatten([styles$b.backdrop,{backgroundColor:windowBackgroundColor},containerStyle]),__source:{fileName:_jsxFileName$f,lineNumber:41}})),React__default.createElement(reactNative.View,{style:styles$b.container,pointerEvents:"box-none",__source:{fileName:_jsxFileName$f,lineNumber:51}},React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$b.overlay,{borderRadius:borderRadius,backgroundColor:overlayBackgroundColor,width:width,height:height},fullScreen&&styles$b.fullscreen,overlayStyle]),__source:{fileName:_jsxFileName$f,lineNumber:52}},children)));};Overlay.propTypes={children:propTypes.element.isRequired,isVisible:propTypes.bool.isRequired,containerStyle:ViewPropTypes.style,overlayStyle:ViewPropTypes.style,windowBackgroundColor:propTypes.string,overlayBackgroundColor:propTypes.string,onBackdropPress:propTypes.func,borderRadius:propTypes.number,width:propTypes.oneOfType([propTypes.string,propTypes.number]),height:propTypes.oneOfType([propTypes.string,propTypes.number]),fullScreen:propTypes.bool};Overlay.defaultProps={borderRadius:3,fullScreen:false,windowBackgroundColor:'rgba(0, 0, 0, .4)',overlayBackgroundColor:'white',width:ScreenWidth-80,height:ScreenHeight-180,onBackdropPress:function onBackdropPress(){return null;}};var styles$b=reactNative.StyleSheet.create({backdrop:{position:'absolute',top:0,left:0,width:'100%',height:'100%',justifyContent:'center',alignItems:'center'},container:{flex:1,alignItems:'center',justifyContent:'center'},fullscreen:{width:'100%',height:'100%'},overlay:_objectSpread$b({borderRadius:5,padding:10},reactNative.Platform.select({android:{elevation:2},default:{shadowColor:'rgba(0, 0, 0, .3)',shadowOffset:{width:0,height:1},shadowRadius:4}}))});var Overlay$1 = withTheme(Overlay,'Overlay');

var _jsxFileName$g="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\searchbar\\SearchBar-ios.js";function ownKeys$c(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$c(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$c(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$c(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var IOS_GRAY='#7d7d7d';var defaultSearchIcon={type:'ionicon',size:20,name:'ios-search',color:IOS_GRAY};var defaultClearIcon={type:'ionicon',name:'ios-close-circle',size:20,color:IOS_GRAY};var SearchBar=function(_Component){inherits(SearchBar,_Component);function SearchBar(props){var _this;classCallCheck(this,SearchBar);_this=possibleConstructorReturn(this,getPrototypeOf(SearchBar).call(this,props));_this.focus=function(){_this.input.focus();};_this.blur=function(){_this.input.blur();};_this.clear=function(){_this.input.clear();_this.onChangeText('');_this.props.onClear();};_this.cancel=function(){_this.onChangeText('');if(_this.props.showCancel){reactNative.UIManager.configureNextLayoutAnimation&&reactNative.LayoutAnimation.easeInEaseOut();_this.setState({hasFocus:false});}setTimeout(function(){_this.blur();_this.props.onCancel();},0);};_this.onFocus=function(){_this.props.onFocus();reactNative.UIManager.configureNextLayoutAnimation&&reactNative.LayoutAnimation.easeInEaseOut();_this.setState({hasFocus:true,isEmpty:_this.props.value===''});};_this.onBlur=function(){_this.props.onBlur();reactNative.UIManager.configureNextLayoutAnimation&&reactNative.LayoutAnimation.easeInEaseOut();if(!_this.props.showCancel){_this.setState({hasFocus:false});}};_this.onChangeText=function(text){_this.props.onChangeText(text);_this.setState({isEmpty:text===''});};var value=props.value;_this.state={hasFocus:false,isEmpty:value?value==='':true,cancelButtonWidth:null};return _this;}createClass(SearchBar,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,cancelButtonProps=_this$props.cancelButtonProps,cancelButtonTitle=_this$props.cancelButtonTitle,clearIcon=_this$props.clearIcon,containerStyle=_this$props.containerStyle,leftIconContainerStyle=_this$props.leftIconContainerStyle,rightIconContainerStyle=_this$props.rightIconContainerStyle,inputContainerStyle=_this$props.inputContainerStyle,inputStyle=_this$props.inputStyle,placeholderTextColor=_this$props.placeholderTextColor,showLoading=_this$props.showLoading,loadingProps=_this$props.loadingProps,searchIcon=_this$props.searchIcon,showCancel=_this$props.showCancel,attributes=objectWithoutProperties(_this$props,["cancelButtonProps","cancelButtonTitle","clearIcon","containerStyle","leftIconContainerStyle","rightIconContainerStyle","inputContainerStyle","inputStyle","placeholderTextColor","showLoading","loadingProps","searchIcon","showCancel"]);var _this$state=this.state,hasFocus=_this$state.hasFocus,isEmpty=_this$state.isEmpty;var loadingStyle=loadingProps.style,otherLoadingProps=objectWithoutProperties(loadingProps,["style"]);var buttonStyle=cancelButtonProps.buttonStyle,buttonTextStyle=cancelButtonProps.buttonTextStyle,buttonColor=cancelButtonProps.color,buttonDisabled=cancelButtonProps.disabled,buttonDisabledStyle=cancelButtonProps.buttonDisabledStyle,buttonDisabledTextStyle=cancelButtonProps.buttonDisabledTextStyle,otherCancelButtonProps=objectWithoutProperties(cancelButtonProps,["buttonStyle","buttonTextStyle","color","disabled","buttonDisabledStyle","buttonDisabledTextStyle"]);return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$c.container,containerStyle]),__source:{fileName:_jsxFileName$g,lineNumber:130}},React__default.createElement(Input$1,_extends_1({testID:"searchInput"},attributes,{onFocus:this.onFocus,onBlur:this.onBlur,onChangeText:this.onChangeText,ref:function ref(input){_this2.input=input;},inputStyle:reactNative.StyleSheet.flatten([styles$c.input,inputStyle]),containerStyle:{paddingHorizontal:0},inputContainerStyle:reactNative.StyleSheet.flatten([styles$c.inputContainer,hasFocus&&{marginRight:this.state.cancelButtonWidth},inputContainerStyle]),leftIcon:renderNode(Icon$1,searchIcon,defaultSearchIcon),leftIconContainerStyle:reactNative.StyleSheet.flatten([styles$c.leftIconContainerStyle,leftIconContainerStyle]),placeholderTextColor:placeholderTextColor,rightIcon:React__default.createElement(reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName$g,lineNumber:156}},showLoading&&React__default.createElement(reactNative.ActivityIndicator,_extends_1({key:"loading",style:reactNative.StyleSheet.flatten([{marginRight:5},loadingStyle])},otherLoadingProps,{__source:{fileName:_jsxFileName$g,lineNumber:158}})),!isEmpty&&renderNode(Icon$1,clearIcon,_objectSpread$c({},defaultClearIcon,{key:'cancel',onPress:this.clear}))),rightIconContainerStyle:reactNative.StyleSheet.flatten([styles$c.rightIconContainerStyle,rightIconContainerStyle]),__source:{fileName:_jsxFileName$g,lineNumber:131}})),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$c.cancelButtonContainer,{opacity:this.state.cancelButtonWidth===null?0:1,right:hasFocus?0:-this.state.cancelButtonWidth}]),onLayout:function onLayout(event){return _this2.setState({cancelButtonWidth:event.nativeEvent.layout.width});},__source:{fileName:_jsxFileName$g,lineNumber:178}},React__default.createElement(reactNative.TouchableOpacity,_extends_1({accessibilityRole:"button",onPress:this.cancel,disabled:buttonDisabled},otherCancelButtonProps,{__source:{fileName:_jsxFileName$g,lineNumber:190}}),React__default.createElement(reactNative.View,{style:[buttonStyle,buttonDisabled&&buttonDisabledStyle],__source:{fileName:_jsxFileName$g,lineNumber:196}},React__default.createElement(reactNative.Text,{style:[styles$c.buttonTextStyle,buttonColor&&{color:buttonColor},buttonTextStyle,buttonDisabled&&(buttonDisabledTextStyle||styles$c.buttonTextDisabled)],disabled:buttonDisabled,__source:{fileName:_jsxFileName$g,lineNumber:197}},cancelButtonTitle)))));}}]);return SearchBar;}(React.Component);SearchBar.propTypes={value:propTypes.string,cancelButtonProps:propTypes.object,cancelButtonTitle:propTypes.string,clearIcon:nodeType,searchIcon:nodeType,loadingProps:propTypes.object,showLoading:propTypes.bool,onClear:propTypes.func,onCancel:propTypes.func,onFocus:propTypes.func,onBlur:propTypes.func,onChangeText:propTypes.func,containerStyle:ViewPropTypes.style,leftIconContainerStyle:ViewPropTypes.style,rightIconContainerStyle:ViewPropTypes.style,inputContainerStyle:ViewPropTypes.style,inputStyle:reactNative.Text.propTypes.style,placeholderTextColor:propTypes.string,showCancel:propTypes.bool};SearchBar.defaultProps={value:'',cancelButtonTitle:'Cancel',loadingProps:{},cancelButtonProps:{},showLoading:false,onClear:function onClear(){return null;},onCancel:function onCancel(){return null;},onFocus:function onFocus(){return null;},onBlur:function onBlur(){return null;},onChangeText:function onChangeText(){return null;},placeholderTextColor:IOS_GRAY,searchIcon:defaultSearchIcon,clearIcon:defaultClearIcon,showCancel:false};var styles$c=reactNative.StyleSheet.create({container:{backgroundColor:'#f5f5f5',paddingBottom:13,paddingTop:13,flexDirection:'row',overflow:'hidden',alignItems:'center'},input:{marginLeft:6,overflow:'hidden'},inputContainer:{borderBottomWidth:0,backgroundColor:'#dcdce1',borderRadius:9,minHeight:36,marginLeft:8,marginRight:8},rightIconContainerStyle:{marginRight:8},leftIconContainerStyle:{marginLeft:8},buttonTextStyle:{color:'#007aff',textAlign:'center',padding:8,fontSize:18},buttonTextDisabled:{color:'#cdcdcd'},cancelButtonContainer:{position:'absolute'}});

var _jsxFileName$h="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\searchbar\\SearchBar-android.js";function ownKeys$d(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$d(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$d(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$d(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ANDROID_GRAY='rgba(0, 0, 0, 0.54)';var defaultSearchIcon$1={type:'material',size:25,color:ANDROID_GRAY,name:'search'};var defaultCancelIcon={type:'material',size:25,color:ANDROID_GRAY,name:'arrow-back'};var defaultClearIcon$1={type:'material',size:25,color:ANDROID_GRAY,name:'clear'};var SearchBar$1=function(_Component){inherits(SearchBar,_Component);function SearchBar(props){var _this;classCallCheck(this,SearchBar);_this=possibleConstructorReturn(this,getPrototypeOf(SearchBar).call(this,props));_this.focus=function(){_this.input.focus();};_this.blur=function(){_this.input.blur();};_this.clear=function(){_this.input.clear();_this.onChangeText('');_this.props.onClear();};_this.cancel=function(){_this.blur();_this.props.onCancel();};_this.onFocus=function(){_this.props.onFocus();_this.setState({hasFocus:true,isEmpty:_this.props.value===''});};_this.onBlur=function(){_this.props.onBlur();_this.setState({hasFocus:false});};_this.onChangeText=function(text){_this.props.onChangeText(text);_this.setState({isEmpty:text===''});};var value=props.value;_this.state={hasFocus:false,isEmpty:value?value==='':true};return _this;}createClass(SearchBar,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,clearIcon=_this$props.clearIcon,containerStyle=_this$props.containerStyle,leftIconContainerStyle=_this$props.leftIconContainerStyle,rightIconContainerStyle=_this$props.rightIconContainerStyle,inputContainerStyle=_this$props.inputContainerStyle,inputStyle=_this$props.inputStyle,searchIcon=_this$props.searchIcon,cancelIcon=_this$props.cancelIcon,showLoading=_this$props.showLoading,loadingProps=_this$props.loadingProps,attributes=objectWithoutProperties(_this$props,["clearIcon","containerStyle","leftIconContainerStyle","rightIconContainerStyle","inputContainerStyle","inputStyle","searchIcon","cancelIcon","showLoading","loadingProps"]);var _this$state=this.state,hasFocus=_this$state.hasFocus,isEmpty=_this$state.isEmpty;var loadingStyle=loadingProps.style,otherLoadingProps=objectWithoutProperties(loadingProps,["style"]);return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$d.container,containerStyle]),__source:{fileName:_jsxFileName$h,lineNumber:99}},React__default.createElement(Input$1,_extends_1({testID:"searchInput"},attributes,{onFocus:this.onFocus,onBlur:this.onBlur,onChangeText:this.onChangeText,ref:function ref(input){_this2.input=input;},containerStyle:{paddingHorizontal:0},inputStyle:reactNative.StyleSheet.flatten([styles$d.input,inputStyle]),inputContainerStyle:reactNative.StyleSheet.flatten([styles$d.inputContainer,inputContainerStyle]),leftIcon:hasFocus?renderNode(Icon$1,cancelIcon,_objectSpread$d({},defaultCancelIcon,{onPress:this.cancel})):renderNode(Icon$1,searchIcon,defaultSearchIcon$1),leftIconContainerStyle:reactNative.StyleSheet.flatten([styles$d.leftIconContainerStyle,leftIconContainerStyle]),rightIcon:React__default.createElement(reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName$h,lineNumber:128}},showLoading&&React__default.createElement(reactNative.ActivityIndicator,_extends_1({key:"loading",style:reactNative.StyleSheet.flatten([{marginRight:5},loadingStyle])},otherLoadingProps,{__source:{fileName:_jsxFileName$h,lineNumber:130}})),!isEmpty&&renderNode(Icon$1,clearIcon,_objectSpread$d({},defaultClearIcon$1,{key:'cancel',onPress:this.clear}))),rightIconContainerStyle:reactNative.StyleSheet.flatten([styles$d.rightIconContainerStyle,rightIconContainerStyle]),__source:{fileName:_jsxFileName$h,lineNumber:100}})));}}]);return SearchBar;}(React.Component);SearchBar$1.propTypes={value:propTypes.string,clearIcon:nodeType,searchIcon:nodeType,cancelIcon:nodeType,loadingProps:propTypes.object,showLoading:propTypes.bool,containerStyle:ViewPropTypes.style,leftIconContainerStyle:ViewPropTypes.style,rightIconContainerStyle:ViewPropTypes.style,inputContainerStyle:ViewPropTypes.style,inputStyle:reactNative.Text.propTypes.style,onClear:propTypes.func,onCancel:propTypes.func,onFocus:propTypes.func,onBlur:propTypes.func,onChangeText:propTypes.func};SearchBar$1.defaultProps={value:'',loadingProps:{},showLoading:false,onClear:function onClear(){return null;},onCancel:function onCancel(){return null;},onFocus:function onFocus(){return null;},onBlur:function onBlur(){return null;},onChangeText:function onChangeText(){return null;},searchIcon:defaultSearchIcon$1,clearIcon:defaultClearIcon$1,cancelIcon:defaultCancelIcon};var styles$d=reactNative.StyleSheet.create({container:{backgroundColor:'white',paddingTop:8,paddingBottom:8},input:{marginLeft:24,marginRight:8},inputContainer:{borderBottomWidth:0,width:'100%'},rightIconContainerStyle:{marginRight:8},leftIconContainerStyle:{marginLeft:8}});

var _jsxFileName$i="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\searchbar\\SearchBar-default.js";function ownKeys$e(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$e(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$e(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$e(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var defaultSearchIcon$2=function defaultSearchIcon(theme){return {type:'material',size:18,name:'search',color:theme.colors.grey3};};var defaultClearIcon$2=function defaultClearIcon(theme){return {type:'material',size:18,name:'clear',color:theme.colors.grey3};};var SearchBar$2=function(_React$Component){inherits(SearchBar,_React$Component);function SearchBar(props){var _this;classCallCheck(this,SearchBar);_this=possibleConstructorReturn(this,getPrototypeOf(SearchBar).call(this,props));_this.focus=function(){_this.input.focus();};_this.blur=function(){_this.input.blur();};_this.clear=function(){_this.input.clear();_this.onChangeText('');_this.props.onClear();};_this.onFocus=function(){_this.props.onFocus();_this.setState({isEmpty:_this.props.value===''});};_this.onBlur=function(){_this.props.onBlur();};_this.onChangeText=function(text){_this.props.onChangeText(text);_this.setState({isEmpty:text===''});};var value=props.value;_this.state={isEmpty:value?value==='':true};return _this;}createClass(SearchBar,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["theme"]);var lightTheme=rest.lightTheme,round=rest.round,_rest$clearIcon=rest.clearIcon,clearIcon=_rest$clearIcon===void 0?defaultClearIcon$2(theme):_rest$clearIcon,containerStyle=rest.containerStyle,_rest$searchIcon=rest.searchIcon,searchIcon=_rest$searchIcon===void 0?defaultSearchIcon$2(theme):_rest$searchIcon,leftIconContainerStyle=rest.leftIconContainerStyle,rightIconContainerStyle=rest.rightIconContainerStyle,inputContainerStyle=rest.inputContainerStyle,inputStyle=rest.inputStyle,showLoading=rest.showLoading,loadingProps=rest.loadingProps,_rest$placeholderText=rest.placeholderTextColor,placeholderTextColor=_rest$placeholderText===void 0?theme.colors.grey3:_rest$placeholderText,attributes=objectWithoutProperties(rest,["lightTheme","round","clearIcon","containerStyle","searchIcon","leftIconContainerStyle","rightIconContainerStyle","inputContainerStyle","inputStyle","showLoading","loadingProps","placeholderTextColor"]);var isEmpty=this.state.isEmpty;var loadingStyle=loadingProps.style,otherLoadingProps=objectWithoutProperties(loadingProps,["style"]);return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$e.container(theme),lightTheme&&styles$e.containerLight(theme),containerStyle]),__source:{fileName:_jsxFileName$i,lineNumber:85}},React__default.createElement(Input$1,_extends_1({testID:"searchInput"},attributes,{onFocus:this.onFocus,onBlur:this.onBlur,onChangeText:this.onChangeText,ref:function ref(input){_this2.input=input;},placeholderTextColor:placeholderTextColor,inputStyle:reactNative.StyleSheet.flatten([styles$e.inputStyle(theme),inputStyle]),inputContainerStyle:reactNative.StyleSheet.flatten([styles$e.inputContentContainer(theme),lightTheme&&styles$e.inputContentContainerLight(theme),round&&styles$e.round,inputContainerStyle]),containerStyle:styles$e.inputContainer,leftIcon:renderNode(Icon$1,searchIcon,defaultSearchIcon$2(theme)),leftIconContainerStyle:reactNative.StyleSheet.flatten([styles$e.leftIconContainerStyle,leftIconContainerStyle]),rightIcon:React__default.createElement(reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName$i,lineNumber:119}},showLoading&&React__default.createElement(reactNative.ActivityIndicator,_extends_1({key:"loading",style:reactNative.StyleSheet.flatten([{marginRight:5},loadingStyle])},otherLoadingProps,{__source:{fileName:_jsxFileName$i,lineNumber:121}})),!isEmpty&&renderNode(Icon$1,clearIcon,_objectSpread$e({},defaultClearIcon$2(theme),{key:'cancel',onPress:this.clear}))),rightIconContainerStyle:reactNative.StyleSheet.flatten([styles$e.rightIconContainerStyle,rightIconContainerStyle]),__source:{fileName:_jsxFileName$i,lineNumber:92}})));}}]);return SearchBar;}(React__default.Component);SearchBar$2.propTypes={value:propTypes.string,clearIcon:nodeType,searchIcon:nodeType,loadingProps:propTypes.object,showLoading:propTypes.bool,containerStyle:ViewPropTypes.style,leftIconContainerStyle:ViewPropTypes.style,rightIconContainerStyle:ViewPropTypes.style,inputContainerStyle:ViewPropTypes.style,inputStyle:reactNative.Text.propTypes.style,onClear:propTypes.func,onFocus:propTypes.func,onBlur:propTypes.func,onChangeText:propTypes.func,placeholderTextColor:propTypes.string,lightTheme:propTypes.bool,round:propTypes.bool,theme:propTypes.object};SearchBar$2.defaultProps={value:'',loadingProps:{},showLoading:false,lightTheme:false,round:false,onClear:function onClear(){return null;},onFocus:function onFocus(){return null;},onBlur:function onBlur(){return null;},onChangeText:function onChangeText(){return null;}};var styles$e={container:function container(theme){return {borderTopWidth:1,borderBottomWidth:1,borderBottomColor:'#000',borderTopColor:'#000',padding:8,backgroundColor:theme.colors.grey0};},rightIconContainerStyle:{marginRight:8},leftIconContainerStyle:{marginLeft:8},containerLight:function containerLight(theme){return {borderTopColor:'#e1e1e1',borderBottomColor:'#e1e1e1',backgroundColor:theme.colors.grey5};},inputContainer:{paddingHorizontal:0},inputStyle:function inputStyle(theme){return {color:theme.colors.grey3,marginLeft:10};},inputContentContainer:function inputContentContainer(theme){return {borderBottomWidth:0,borderRadius:3,overflow:'hidden',minHeight:30,backgroundColor:theme.colors.searchBg};},inputContentContainerLight:function inputContentContainerLight(theme){return {backgroundColor:theme.colors.grey4};},round:{borderRadius:15}};

var _jsxFileName$j="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\searchbar\\SearchBar.js";var SEARCHBAR_COMPONENTS={ios:SearchBar,android:SearchBar$1,default:SearchBar$2};var SearchBar$3=function(_React$Component){inherits(SearchBar,_React$Component);function SearchBar(){var _getPrototypeOf2;var _this;classCallCheck(this,SearchBar);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(SearchBar)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.focus=function(){_this.searchbar.focus();};_this.blur=function(){_this.searchbar.blur();};_this.clear=function(){_this.searchbar.clear();};_this.cancel=function(){_this.searchbar.cancel&&_this.searchbar.cancel();};return _this;}createClass(SearchBar,[{key:"render",value:function render(){var _this2=this;var Component=SEARCHBAR_COMPONENTS[this.props.platform]||SearchBar$2;return React__default.createElement(Component,_extends_1({ref:function ref(_ref){_this2.searchbar=_ref;}},this.props,{__source:{fileName:_jsxFileName$j,lineNumber:38}}));}}]);return SearchBar;}(React__default.Component);SearchBar$3.propTypes={platform:propTypes.oneOf(['default','ios','android'])};SearchBar$3.defaultProps={platform:'default'};var SearchBar$4 = withTheme(SearchBar$3,'SearchBar');

var _jsxFileName$k="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\badge\\withBadge.js";var withBadge=function withBadge(value){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(WrappedComponent){var WithBadge=function WithBadge(props){var bottom=options.bottom,_options$hidden=options.hidden,hidden=_options$hidden===void 0?false:_options$hidden,left=options.left,containerStyle=options.containerStyle,badgeProps=objectWithoutProperties(options,["bottom","hidden","left","containerStyle"]);var _options$right=options.right,right=_options$right===void 0?-16:_options$right,_options$top=options.top,top=_options$top===void 0?-1:_options$top;if(!value){right=-3;top=3;}var badgeValue=typeof value==='function'?value(props):value;return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$f.container,containerStyle]),__source:{fileName:_jsxFileName$k,lineNumber:26}},React__default.createElement(WrappedComponent,_extends_1({},props,{__source:{fileName:_jsxFileName$k,lineNumber:27}})),!hidden&&React__default.createElement(Badge$1,_extends_1({value:badgeValue,status:"error",containerStyle:reactNative.StyleSheet.flatten([styles$f.badgeContainer,{bottom:bottom,left:left,right:right,top:top}])},badgeProps,{__source:{fileName:_jsxFileName$k,lineNumber:30}})));};WithBadge.displayName="WithBadge("+(WrappedComponent.displayName||WrappedComponent.name||'Component')+")";return WithBadge;};};var styles$f=reactNative.StyleSheet.create({badgeContainer:{position:'absolute'},container:{alignItems:'center',justifyContent:'center',position:'relative'}});

var _jsxFileName$l="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\divider\\Divider.js";var Divider=function Divider(_ref){var style=_ref.style,theme=_ref.theme,rest=objectWithoutProperties(_ref,["style","theme"]);return React__default.createElement(reactNative.View,_extends_1({style:reactNative.StyleSheet.flatten([styles$g.container(theme),style])},rest,{__source:{fileName:_jsxFileName$l,lineNumber:8}}));};Divider.propTypes={style:ViewPropTypes.style,theme:propTypes.object};var styles$g={container:function container(theme){return {backgroundColor:theme.colors.divider,height:reactNative.StyleSheet.hairlineWidth};}};var Divider$1 = withTheme(Divider,'Divider');

var _jsxFileName$m="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\slider\\Slider.js";function ownKeys$f(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$f(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$f(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$f(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var TRACK_SIZE=4;var THUMB_SIZE=20;var DEFAULT_ANIMATION_CONFIGS={spring:{friction:7,tension:100},timing:{duration:150,easing:reactNative.Easing.inOut(reactNative.Easing.ease),delay:0}};var getBoundedValue=function getBoundedValue(_ref){var value=_ref.value,maximumValue=_ref.maximumValue,minimumValue=_ref.minimumValue;return value>maximumValue?maximumValue:value<minimumValue?minimumValue:value;};var Rect=function(){function Rect(x,y,width,height){classCallCheck(this,Rect);this.x=x;this.y=y;this.width=width;this.height=height;}createClass(Rect,[{key:"containsPoint",value:function containsPoint(x,y){return x>=this.x&&y>=this.y&&x<=this.x+this.width&&y<=this.y+this.height;}}]);return Rect;}();var Slider=function(_Component){inherits(Slider,_Component);function Slider(props){var _this;classCallCheck(this,Slider);_this=possibleConstructorReturn(this,getPrototypeOf(Slider).call(this,props));_this.measureContainer=function(x){_this.handleMeasure('containerSize',x);};_this.measureTrack=function(x){_this.handleMeasure('trackSize',x);};_this.measureThumb=function(x){_this.handleMeasure('thumbSize',x);};_this.state={containerSize:{width:0,height:0},trackSize:{width:0,height:0},thumbSize:{width:0,height:0},allMeasured:false,value:new reactNative.Animated.Value(getBoundedValue(props))};_this.panResponder=reactNative.PanResponder.create({onStartShouldSetPanResponder:_this.handleStartShouldSetPanResponder.bind(assertThisInitialized(_this)),onMoveShouldSetPanResponder:_this.handleMoveShouldSetPanResponder.bind(assertThisInitialized(_this)),onPanResponderGrant:_this.handlePanResponderGrant.bind(assertThisInitialized(_this)),onPanResponderMove:_this.handlePanResponderMove.bind(assertThisInitialized(_this)),onPanResponderRelease:_this.handlePanResponderEnd.bind(assertThisInitialized(_this)),onPanResponderTerminationRequest:_this.handlePanResponderRequestEnd.bind(assertThisInitialized(_this)),onPanResponderTerminate:_this.handlePanResponderEnd.bind(assertThisInitialized(_this))});return _this;}createClass(Slider,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var newValue=getBoundedValue(this.props);if(prevProps.value!==newValue){if(this.props.animateTransitions){this.setCurrentValueAnimated(newValue);}else{this.setCurrentValue(newValue);}}}},{key:"setCurrentValue",value:function setCurrentValue(value){this.state.value.setValue(value);}},{key:"setCurrentValueAnimated",value:function setCurrentValueAnimated(value){var animationType=this.props.animationType;var animationConfig=_extends_1({},DEFAULT_ANIMATION_CONFIGS[animationType],this.props.animationConfig,{toValue:value});reactNative.Animated[animationType](this.state.value,animationConfig).start();}},{key:"handleMoveShouldSetPanResponder",value:function handleMoveShouldSetPanResponder(){return false;}},{key:"handlePanResponderGrant",value:function handlePanResponderGrant(){this._previousLeft=this.getThumbLeft(this.getCurrentValue());this.fireChangeEvent('onSlidingStart');}},{key:"handlePanResponderMove",value:function handlePanResponderMove(_,gestureState){if(this.props.disabled){return;}this.setCurrentValue(this.getValue(gestureState));this.fireChangeEvent('onValueChange');}},{key:"handlePanResponderRequestEnd",value:function handlePanResponderRequestEnd(){return false;}},{key:"handlePanResponderEnd",value:function handlePanResponderEnd(_,gestureState){if(this.props.disabled){return;}this.setCurrentValue(this.getValue(gestureState));this.fireChangeEvent('onSlidingComplete');}},{key:"thumbHitTest",value:function thumbHitTest(_ref2){var nativeEvent=_ref2.nativeEvent;var thumbTouchRect=this.getThumbTouchRect();return thumbTouchRect.containsPoint(nativeEvent.locationX,nativeEvent.locationY);}},{key:"handleStartShouldSetPanResponder",value:function handleStartShouldSetPanResponder(e){return this.thumbHitTest(e);}},{key:"fireChangeEvent",value:function fireChangeEvent(event){if(this.props[event]){this.props[event](this.getCurrentValue());}}},{key:"getTouchOverflowSize",value:function getTouchOverflowSize(){var _this$state=this.state,thumbSize=_this$state.thumbSize,allMeasured=_this$state.allMeasured,containerSize=_this$state.containerSize;var thumbTouchSize=this.props.thumbTouchSize;var size={};if(allMeasured===true){size.width=Math.max(0,thumbTouchSize.width-thumbSize.width);size.height=Math.max(0,thumbTouchSize.height-containerSize.height);}return size;}},{key:"getTouchOverflowStyle",value:function getTouchOverflowStyle(){var _this$getTouchOverflo=this.getTouchOverflowSize(),width=_this$getTouchOverflo.width,height=_this$getTouchOverflo.height;var touchOverflowStyle={};if(width!==undefined&&height!==undefined){var verticalMargin=-height/2;touchOverflowStyle.marginTop=verticalMargin;touchOverflowStyle.marginBottom=verticalMargin;var horizontalMargin=-width/2;touchOverflowStyle.marginLeft=horizontalMargin;touchOverflowStyle.marginRight=horizontalMargin;}if(this.props.debugTouchArea===true){touchOverflowStyle.backgroundColor='orange';touchOverflowStyle.opacity=0.5;}return touchOverflowStyle;}},{key:"handleMeasure",value:function handleMeasure(name,x){var _x$nativeEvent$layout=x.nativeEvent.layout,layoutWidth=_x$nativeEvent$layout.width,layoutHeight=_x$nativeEvent$layout.height;var width=this.props.orientation==='vertical'?layoutHeight:layoutWidth;var height=this.props.orientation==='vertical'?layoutWidth:layoutHeight;var size={width:width,height:height};var storeName="_"+name;var currentSize=this[storeName];if(currentSize&&width===currentSize.width&&height===currentSize.height){return;}this[storeName]=size;if(this._containerSize&&this._trackSize&&this._thumbSize){this.setState({containerSize:this._containerSize,trackSize:this._trackSize,thumbSize:this._thumbSize,allMeasured:true});}}},{key:"getValue",value:function getValue(gestureState){var length=this.state.containerSize.width-this.state.thumbSize.width;var thumbLeft=this._previousLeft+(this.props.orientation==='vertical'?gestureState.dy:gestureState.dx);var ratio=thumbLeft/length;if(this.props.step){return Math.max(this.props.minimumValue,Math.min(this.props.maximumValue,this.props.minimumValue+Math.round(ratio*(this.props.maximumValue-this.props.minimumValue)/this.props.step)*this.props.step));}return Math.max(this.props.minimumValue,Math.min(this.props.maximumValue,ratio*(this.props.maximumValue-this.props.minimumValue)+this.props.minimumValue));}},{key:"getCurrentValue",value:function getCurrentValue(){return this.state.value.__getValue();}},{key:"getRatio",value:function getRatio(value){return (value-this.props.minimumValue)/(this.props.maximumValue-this.props.minimumValue);}},{key:"getThumbLeft",value:function getThumbLeft(value){var ratio=this.getRatio(value);return ratio*(this.state.containerSize.width-this.state.thumbSize.width);}},{key:"getThumbTouchRect",value:function getThumbTouchRect(){var _this$state2=this.state,thumbSize=_this$state2.thumbSize,containerSize=_this$state2.containerSize;var thumbTouchSize=this.props.thumbTouchSize;var touchOverflowSize=this.getTouchOverflowSize();if(this.props.orientation==='vertical'){return new Rect(touchOverflowSize.height/2+(containerSize.height-thumbTouchSize.height)/2,touchOverflowSize.width/2+this.getThumbLeft(this.getCurrentValue())+(thumbSize.width-thumbTouchSize.width)/2,thumbTouchSize.width,thumbTouchSize.height);}return new Rect(touchOverflowSize.width/2+this.getThumbLeft(this.getCurrentValue())+(thumbSize.width-thumbTouchSize.width)/2,touchOverflowSize.height/2+(containerSize.height-thumbTouchSize.height)/2,thumbTouchSize.width,thumbTouchSize.height);}},{key:"renderDebugThumbTouchRect",value:function renderDebugThumbTouchRect(thumbLeft){var thumbTouchRect=this.getThumbTouchRect();var positionStyle={left:thumbLeft,top:thumbTouchRect.y,width:thumbTouchRect.width,height:thumbTouchRect.height};return React__default.createElement(reactNative.Animated.View,{style:positionStyle,pointerEvents:"none",__source:{fileName:_jsxFileName$m,lineNumber:319}});}},{key:"getMinimumTrackStyles",value:function getMinimumTrackStyles(thumbStart){var _this$state3=this.state,thumbSize=_this$state3.thumbSize,trackSize=_this$state3.trackSize;var minimumTrackStyle={position:'absolute'};if(this.props.orientation==='vertical'){minimumTrackStyle.height=reactNative.Animated.add(thumbStart,thumbSize.height/2);minimumTrackStyle.marginLeft=-trackSize.width;}else{minimumTrackStyle.width=reactNative.Animated.add(thumbStart,thumbSize.width/2);minimumTrackStyle.marginTop=-trackSize.height;}return minimumTrackStyle;}},{key:"getThumbPositionStyles",value:function getThumbPositionStyles(thumbStart){if(this.props.orientation==='vertical'){return [{translateX:-(this.state.trackSize.height+this.state.thumbSize.height)/2},{translateY:thumbStart}];}return [{translateX:thumbStart},{translateY:-(this.state.trackSize.height+this.state.thumbSize.height)/2}];}},{key:"render",value:function render(){var _this$props=this.props,minimumValue=_this$props.minimumValue,maximumValue=_this$props.maximumValue,minimumTrackTintColor=_this$props.minimumTrackTintColor,maximumTrackTintColor=_this$props.maximumTrackTintColor,thumbTintColor=_this$props.thumbTintColor,containerStyle=_this$props.containerStyle,style=_this$props.style,trackStyle=_this$props.trackStyle,thumbStyle=_this$props.thumbStyle,debugTouchArea=_this$props.debugTouchArea,orientation=_this$props.orientation,other=objectWithoutProperties(_this$props,["minimumValue","maximumValue","minimumTrackTintColor","maximumTrackTintColor","thumbTintColor","containerStyle","style","trackStyle","thumbStyle","debugTouchArea","orientation"]);var _this$state4=this.state,value=_this$state4.value,containerSize=_this$state4.containerSize,thumbSize=_this$state4.thumbSize,allMeasured=_this$state4.allMeasured;var mainStyles=containerStyle||styles$h;var thumbStart=value.interpolate({inputRange:[minimumValue,maximumValue],outputRange:[0,containerSize.width-thumbSize.width]});var valueVisibleStyle={};if(!allMeasured){valueVisibleStyle.height=0;valueVisibleStyle.width=0;}var minimumTrackStyle=_objectSpread$f({},this.getMinimumTrackStyles(thumbStart),{backgroundColor:minimumTrackTintColor},valueVisibleStyle);var thumbStyleTransform=thumbStyle&&thumbStyle.transform||[];var touchOverflowStyle=this.getTouchOverflowStyle();return React__default.createElement(reactNative.View,_extends_1({},other,{style:reactNative.StyleSheet.flatten([orientation==='vertical'?mainStyles.containerVertical:mainStyles.containerHorizontal,style]),onLayout:this.measureContainer,__source:{fileName:_jsxFileName$m,lineNumber:397}}),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([mainStyles.track,orientation==='vertical'?mainStyles.trackVertical:mainStyles.trackHorizontal,trackStyle,{backgroundColor:maximumTrackTintColor}]),onLayout:this.measureTrack,__source:{fileName:_jsxFileName$m,lineNumber:407}}),React__default.createElement(reactNative.Animated.View,{style:reactNative.StyleSheet.flatten([mainStyles.track,orientation==='vertical'?mainStyles.trackVertical:mainStyles.trackHorizontal,trackStyle,minimumTrackStyle]),__source:{fileName:_jsxFileName$m,lineNumber:418}}),React__default.createElement(reactNative.Animated.View,{testID:"sliderThumb",onLayout:this.measureThumb,style:reactNative.StyleSheet.flatten([{backgroundColor:thumbTintColor},mainStyles.thumb,orientation==='vertical'?mainStyles.thumbVertical(trackStyle&&trackStyle.width):mainStyles.thumbHorizontal(trackStyle&&trackStyle.height),thumbStyle,_objectSpread$f({transform:[].concat(toConsumableArray(this.getThumbPositionStyles(thumbStart)),toConsumableArray(thumbStyleTransform))},valueVisibleStyle)]),__source:{fileName:_jsxFileName$m,lineNumber:428}}),React__default.createElement(reactNative.View,_extends_1({style:reactNative.StyleSheet.flatten([styles$h.touchArea,touchOverflowStyle])},this.panResponder.panHandlers,{__source:{fileName:_jsxFileName$m,lineNumber:447}}),debugTouchArea===true&&this.renderDebugThumbTouchRect(thumbStart)));}}]);return Slider;}(React.Component);Slider.propTypes={value:propTypes.number,disabled:propTypes.bool,minimumValue:propTypes.number,maximumValue:propTypes.number,step:propTypes.number,minimumTrackTintColor:propTypes.string,maximumTrackTintColor:propTypes.string,thumbTintColor:propTypes.string,thumbTouchSize:propTypes.shape({width:propTypes.number,height:propTypes.number}),onValueChange:propTypes.func,onSlidingStart:propTypes.func,onSlidingComplete:propTypes.func,style:ViewPropTypes.style,trackStyle:ViewPropTypes.style,thumbStyle:ViewPropTypes.style,debugTouchArea:propTypes.bool,animateTransitions:propTypes.bool,animationType:propTypes.oneOf(['spring','timing']),orientation:propTypes.oneOf(['horizontal','vertical']),animationConfig:propTypes.object,containerStyle:ViewPropTypes.style};Slider.defaultProps={value:0,minimumValue:0,maximumValue:1,step:0,minimumTrackTintColor:'#3f3f3f',maximumTrackTintColor:'#b3b3b3',thumbTintColor:'red',thumbTouchSize:{width:40,height:40},debugTouchArea:false,animationType:'timing',orientation:'horizontal'};var styles$h=reactNative.StyleSheet.create({containerHorizontal:{height:40,justifyContent:'center'},containerVertical:{width:40,flexDirection:'column',alignItems:'center'},track:{borderRadius:TRACK_SIZE/2},trackHorizontal:{height:TRACK_SIZE},trackVertical:{flex:1,width:TRACK_SIZE},thumb:{position:'absolute',width:THUMB_SIZE,height:THUMB_SIZE,borderRadius:THUMB_SIZE/2},thumbHorizontal:function thumbHorizontal(height){return {top:22+(height?(height-4)/2:0)};},thumbVertical:function thumbVertical(width){return {left:22+(width?(width-4)/2:0)};},touchArea:{position:'absolute',backgroundColor:'transparent',top:0,left:0,right:0,bottom:0},debugThumbTouchArea:{position:'absolute',backgroundColor:'green',opacity:0.5}});var Slider$1 = withTheme(Slider,'Slider');

var _jsxFileName$n="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\card\\Card.js";function ownKeys$g(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$g(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$g(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$g(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Card=function Card(props){var children=props.children,containerStyle=props.containerStyle,wrapperStyle=props.wrapperStyle,imageWrapperStyle=props.imageWrapperStyle,title=props.title,titleStyle=props.titleStyle,titleNumberOfLines=props.titleNumberOfLines,featuredTitle=props.featuredTitle,featuredTitleStyle=props.featuredTitleStyle,featuredSubtitle=props.featuredSubtitle,featuredSubtitleStyle=props.featuredSubtitleStyle,dividerStyle=props.dividerStyle,image=props.image,imageStyle=props.imageStyle,imageProps=props.imageProps,theme=props.theme,attributes=objectWithoutProperties(props,["children","containerStyle","wrapperStyle","imageWrapperStyle","title","titleStyle","titleNumberOfLines","featuredTitle","featuredTitleStyle","featuredSubtitle","featuredSubtitleStyle","dividerStyle","image","imageStyle","imageProps","theme"]);return React__default.createElement(reactNative.View,_extends_1({},attributes,{style:reactNative.StyleSheet.flatten([styles$i.container(theme),image&&{padding:0},containerStyle&&containerStyle]),__source:{fileName:_jsxFileName$n,lineNumber:34}}),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$i.wrapper,wrapperStyle&&wrapperStyle]),__source:{fileName:_jsxFileName$n,lineNumber:42}},title===''||React__default.isValidElement(title)?title:title&&title.length&&React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$n,lineNumber:52}},React__default.createElement(Text,{testID:"cardTitle",style:reactNative.StyleSheet.flatten([styles$i.cardTitle(theme),image&&styles$i.imageCardTitle,titleStyle&&titleStyle]),numberOfLines:titleNumberOfLines,__source:{fileName:_jsxFileName$n,lineNumber:53}},title),!image&&React__default.createElement(Divider$1,{style:reactNative.StyleSheet.flatten([styles$i.divider,dividerStyle&&dividerStyle]),__source:{fileName:_jsxFileName$n,lineNumber:66}})),image&&React__default.createElement(reactNative.View,{style:imageWrapperStyle&&imageWrapperStyle,__source:{fileName:_jsxFileName$n,lineNumber:77}},React__default.createElement(Image$1,_extends_1({style:[{width:null,height:150},imageStyle&&imageStyle],source:image},imageProps,{__source:{fileName:_jsxFileName$n,lineNumber:78}}),(featuredTitle||featuredSubtitle)&&React__default.createElement(reactNative.View,{style:styles$i.overlayContainer,__source:{fileName:_jsxFileName$n,lineNumber:84}},featuredTitle&&React__default.createElement(Text,{style:reactNative.StyleSheet.flatten([styles$i.featuredTitle,featuredTitleStyle&&featuredTitleStyle]),__source:{fileName:_jsxFileName$n,lineNumber:86}},featuredTitle),featuredSubtitle&&React__default.createElement(Text,{style:reactNative.StyleSheet.flatten([styles$i.featuredSubtitle,featuredSubtitleStyle&&featuredSubtitleStyle]),__source:{fileName:_jsxFileName$n,lineNumber:96}},featuredSubtitle))),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([{padding:10},wrapperStyle&&wrapperStyle]),__source:{fileName:_jsxFileName$n,lineNumber:109}},children)),!image&&children));};Card.propTypes={children:propTypes.oneOfType([propTypes.element,propTypes.arrayOf(propTypes.element)]),containerStyle:ViewPropTypes.style,wrapperStyle:ViewPropTypes.style,overlayStyle:ViewPropTypes.style,title:propTypes.oneOfType([propTypes.string,propTypes.element]),titleStyle:TextPropTypes.style,featuredTitle:propTypes.string,featuredTitleStyle:TextPropTypes.style,featuredSubtitle:propTypes.string,featuredSubtitleStyle:TextPropTypes.style,dividerStyle:ViewPropTypes.style,image:reactNative.Image.propTypes.source,imageStyle:ViewPropTypes.style,imageWrapperStyle:ViewPropTypes.style,imageProps:propTypes.object,titleNumberOfLines:propTypes.number,theme:propTypes.object};var styles$i={container:function container(theme){return _objectSpread$g({backgroundColor:'white',borderWidth:1,padding:15,margin:15,marginBottom:0,borderColor:theme.colors.grey5},reactNative.Platform.select({android:{elevation:1},default:{shadowColor:'rgba(0,0,0, .2)',shadowOffset:{height:0,width:0},shadowOpacity:1,shadowRadius:1}}));},featuredTitle:_objectSpread$g({fontSize:normalize(18),marginBottom:8,color:'white'},reactNative.Platform.select({android:_objectSpread$g({},fonts.android.black),default:{fontWeight:'800'}})),featuredSubtitle:_objectSpread$g({fontSize:normalize(13),marginBottom:8,color:'white'},reactNative.Platform.select({android:_objectSpread$g({},fonts.android.black),default:{fontWeight:'400'}})),wrapper:{backgroundColor:'transparent'},divider:{marginBottom:15},cardTitle:function cardTitle(theme){return _objectSpread$g({fontSize:normalize(14),color:theme.colors.grey1},reactNative.Platform.select({android:_objectSpread$g({},fonts.android.black),default:{fontWeight:'bold'}}),{textAlign:'center',marginBottom:15});},imageCardTitle:{marginTop:15},overlayContainer:{flex:1,alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.2)',alignSelf:'stretch',justifyContent:'center',position:'absolute',top:0,left:0,right:0,bottom:0}};var Card$1 = withTheme(Card,'Card');

var _jsxFileName$o="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\tile\\FeaturedTile.js";function ownKeys$h(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$h(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$h(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$h(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var renderText$2=function renderText(content,defaultProps,style){return renderNode(Text,content,_objectSpread$h({},defaultProps,{style:reactNative.StyleSheet.flatten([style,defaultProps&&defaultProps.style])}));};var FeaturedTile=function FeaturedTile(props){var title=props.title,icon=props.icon,caption=props.caption,imageSrc=props.imageSrc,containerStyle=props.containerStyle,imageContainerStyle=props.imageContainerStyle,overlayContainerStyle=props.overlayContainerStyle,iconContainerStyle=props.iconContainerStyle,titleStyle=props.titleStyle,captionStyle=props.captionStyle,ImageComponent=props.ImageComponent,imageProps=props.imageProps,attributes=objectWithoutProperties(props,["title","icon","caption","imageSrc","containerStyle","imageContainerStyle","overlayContainerStyle","iconContainerStyle","titleStyle","captionStyle","ImageComponent","imageProps"]);var _props$width=props.width,width=_props$width===void 0?reactNative.Dimensions.get('window').width:_props$width,_props$height=props.height,height=_props$height===void 0?width*0.8:_props$height;var styles=reactNative.StyleSheet.create({container:{width:width,height:height},imageContainer:{alignItems:'center',justifyContent:'center',width:width,height:height},overlayContainer:{flex:1,alignItems:'center',alignSelf:'stretch',justifyContent:'center',paddingLeft:25,paddingRight:25,paddingTop:45,paddingBottom:40,position:'absolute',top:0,left:0,right:0,bottom:0},text:{color:'#ffffff',backgroundColor:'rgba(0,0,0,0)',marginBottom:15,textAlign:'center'},iconContainer:{justifyContent:'center',alignItems:'center',alignSelf:'center'}});return React__default.createElement(reactNative.TouchableOpacity,_extends_1({},attributes,{style:reactNative.StyleSheet.flatten([styles.container,containerStyle&&containerStyle]),__source:{fileName:_jsxFileName$o,lineNumber:86}}),React__default.createElement(ImageComponent,_extends_1({resizeMode:"cover"},imageProps,{source:imageSrc,style:reactNative.StyleSheet.flatten([styles.imageContainer,imageContainerStyle&&imageContainerStyle]),__source:{fileName:_jsxFileName$o,lineNumber:93}}),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles.overlayContainer,overlayContainerStyle&&overlayContainerStyle]),__source:{fileName:_jsxFileName$o,lineNumber:102}},React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles.iconContainer,iconContainerStyle&&iconContainerStyle]),__source:{fileName:_jsxFileName$o,lineNumber:108}},icon&&React__default.createElement(Icon$1,_extends_1({},icon,{__source:{fileName:_jsxFileName$o,lineNumber:114}}))),React__default.createElement(Text,{testID:"featuredTileTitle",h4:true,style:reactNative.StyleSheet.flatten([styles.text,titleStyle&&titleStyle]),__source:{fileName:_jsxFileName$o,lineNumber:116}},title),renderText$2(caption,{style:captionStyle},styles.text))));};FeaturedTile.propTypes={title:propTypes.string,icon:propTypes.object,caption:propTypes.node,imageSrc:reactNative.Image.propTypes.source,onPress:propTypes.func,containerStyle:ViewPropTypes.style,iconContainerStyle:ViewPropTypes.style,imageContainerStyle:ViewPropTypes.style,overlayContainerStyle:ViewPropTypes.style,titleStyle:reactNative.Text.propTypes.style,captionStyle:reactNative.Text.propTypes.style,width:propTypes.number,height:propTypes.number,ImageComponent:propTypes.elementType,imageProps:propTypes.object};FeaturedTile.defaultProps={ImageComponent:BackgroundImage,imageProps:{}};var FeaturedTile$1 = withTheme(FeaturedTile,'FeaturedTile');

var _jsxFileName$p="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\tile\\Tile.js";function ownKeys$i(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$i(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$i(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$i(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Tile=function Tile(props){var featured=props.featured,imageSrc=props.imageSrc,icon=props.icon,title=props.title,children=props.children,caption=props.caption,titleStyle=props.titleStyle,onPress=props.onPress,activeOpacity=props.activeOpacity,overlayContainerStyle=props.overlayContainerStyle,captionStyle=props.captionStyle,iconContainerStyle=props.iconContainerStyle,imageContainerStyle=props.imageContainerStyle,containerStyle=props.containerStyle,contentContainerStyle=props.contentContainerStyle,titleNumberOfLines=props.titleNumberOfLines,ImageComponent=props.ImageComponent,imageProps=props.imageProps,attributes=objectWithoutProperties(props,["featured","imageSrc","icon","title","children","caption","titleStyle","onPress","activeOpacity","overlayContainerStyle","captionStyle","iconContainerStyle","imageContainerStyle","containerStyle","contentContainerStyle","titleNumberOfLines","ImageComponent","imageProps"]);var width=props.width,_props$height=props.height,height=_props$height===void 0?width*0.8:_props$height;if(featured){var featuredProps={title:title,icon:icon,caption:caption,imageSrc:imageSrc,onPress:onPress,activeOpacity:activeOpacity,containerStyle:containerStyle,imageContainerStyle:imageContainerStyle,overlayContainerStyle:overlayContainerStyle,titleStyle:titleStyle,captionStyle:captionStyle,width:width,height:height,imageProps:imageProps,ImageComponent:ImageComponent};return React__default.createElement(FeaturedTile$1,_extends_1({},featuredProps,{__source:{fileName:_jsxFileName$p,lineNumber:61}}));}return React__default.createElement(reactNative.TouchableOpacity,_extends_1({},attributes,{onPress:onPress,activeOpacity:activeOpacity,style:reactNative.StyleSheet.flatten([{width:width,height:height},containerStyle&&containerStyle]),__source:{fileName:_jsxFileName$p,lineNumber:65}}),React__default.createElement(ImageComponent,_extends_1({resizeMode:"cover",source:imageSrc,containerStyle:reactNative.StyleSheet.flatten([styles$j.imageContainer,imageContainerStyle&&imageContainerStyle]),style:_objectSpread$i({},reactNative.StyleSheet.absoluteFillObject,{alignItems:'center',justifyContent:'center'})},imageProps,{__source:{fileName:_jsxFileName$p,lineNumber:77}}),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$j.iconContainer,iconContainerStyle&&iconContainerStyle]),__source:{fileName:_jsxFileName$p,lineNumber:91}},icon&&React__default.createElement(Icon$1,_extends_1({},icon,{__source:{fileName:_jsxFileName$p,lineNumber:97}})))),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$j.contentContainer,contentContainerStyle&&contentContainerStyle]),__source:{fileName:_jsxFileName$p,lineNumber:101}},React__default.createElement(Text,{testID:"tileTitle",h4:true,style:reactNative.StyleSheet.flatten([styles$j.text,titleStyle&&titleStyle]),numberOfLines:titleNumberOfLines,__source:{fileName:_jsxFileName$p,lineNumber:107}},title),children));};Tile.propTypes={title:propTypes.string,icon:propTypes.object,caption:propTypes.node,imageSrc:reactNative.Image.propTypes.source,onPress:propTypes.func,activeOpacity:propTypes.number,containerStyle:ViewPropTypes.style,imageContainerStyle:ViewPropTypes.style,iconContainerStyle:ViewPropTypes.style,overlayContainerStyle:ViewPropTypes.style,titleStyle:TextPropTypes.style,captionStyle:TextPropTypes.style,width:propTypes.number,height:propTypes.number,featured:propTypes.bool,children:propTypes.node,contentContainerStyle:ViewPropTypes.style,titleNumberOfLines:propTypes.number,imageProps:propTypes.object,ImageComponent:propTypes.elementType};Tile.defaultProps={width:reactNative.Dimensions.get('window').width,ImageComponent:Image$1,imageProps:{}};var styles$j=reactNative.StyleSheet.create({imageContainer:{flex:2},text:{backgroundColor:'rgba(0,0,0,0)',marginBottom:5},contentContainer:{paddingTop:15,paddingBottom:5,paddingLeft:15,paddingRight:15},iconContainer:{justifyContent:'center',alignItems:'center',alignSelf:'center'}});var Tile$1 = withTheme(Tile,'Tile');

var _jsxFileName$q="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\header\\Header.js";function ownKeys$j(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$j(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$j(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$j(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ALIGN_STYLE={left:'flex-start',right:'flex-end',center:'center'};var Children=function Children(_ref){var style=_ref.style,placement=_ref.placement,children=_ref.children;return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([{alignItems:ALIGN_STYLE[placement]},style]),__source:{fileName:_jsxFileName$q,lineNumber:25}},children==null||children===false?null:children.text?renderNode(Text,children.text,_objectSpread$j({numberOfLines:1},children)):children.icon?renderNode(Icon$1,_objectSpread$j({},children,{name:children.icon,containerStyle:reactNative.StyleSheet.flatten([{alignItems:ALIGN_STYLE[placement]},children.containerStyle])})):renderNode(Text,children));};Children.propTypes={placement:propTypes.oneOf(['left','center','right']),style:ViewPropTypes.style,children:propTypes.oneOfType([nodeType,propTypes.node])};var Header=function(_Component){inherits(Header,_Component);function Header(){classCallCheck(this,Header);return possibleConstructorReturn(this,getPrototypeOf(Header).apply(this,arguments));}createClass(Header,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,linearGradientProps=_this$props.linearGradientProps,ViewComponent=_this$props.ViewComponent;if(linearGradientProps&&!global.Expo&&!ViewComponent){console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");}}},{key:"render",value:function render(){var _this$props2=this.props,statusBarProps=_this$props2.statusBarProps,leftComponent=_this$props2.leftComponent,centerComponent=_this$props2.centerComponent,rightComponent=_this$props2.rightComponent,leftContainerStyle=_this$props2.leftContainerStyle,centerContainerStyle=_this$props2.centerContainerStyle,rightContainerStyle=_this$props2.rightContainerStyle,backgroundColor=_this$props2.backgroundColor,backgroundImage=_this$props2.backgroundImage,backgroundImageStyle=_this$props2.backgroundImageStyle,containerStyle=_this$props2.containerStyle,placement=_this$props2.placement,barStyle=_this$props2.barStyle,children=_this$props2.children,linearGradientProps=_this$props2.linearGradientProps,_this$props2$ViewComp=_this$props2.ViewComponent,ViewComponent=_this$props2$ViewComp===void 0?linearGradientProps&&global.Expo?global.Expo.LinearGradient:reactNative.ImageBackground:_this$props2$ViewComp,theme=_this$props2.theme,attributes=objectWithoutProperties(_this$props2,["statusBarProps","leftComponent","centerComponent","rightComponent","leftContainerStyle","centerContainerStyle","rightContainerStyle","backgroundColor","backgroundImage","backgroundImageStyle","containerStyle","placement","barStyle","children","linearGradientProps","ViewComponent","theme"]);return React__default.createElement(ViewComponent,_extends_1({testID:"headerContainer"},attributes,{style:reactNative.StyleSheet.flatten([styles$k.container(theme),backgroundColor&&{backgroundColor:backgroundColor},containerStyle]),source:backgroundImage,imageStyle:backgroundImageStyle},linearGradientProps,{__source:{fileName:_jsxFileName$q,lineNumber:86}}),React__default.createElement(reactNative.StatusBar,_extends_1({barStyle:barStyle},statusBarProps,{__source:{fileName:_jsxFileName$q,lineNumber:98}})),React__default.createElement(Children,{style:reactNative.StyleSheet.flatten([placement==='center'&&styles$k.rightLeftContainer,leftContainerStyle]),placement:"left",__source:{fileName:_jsxFileName$q,lineNumber:99}},React__default.isValidElement(children)&&children||children[0]||leftComponent),React__default.createElement(Children,{style:reactNative.StyleSheet.flatten([styles$k.centerContainer,placement!=='center'&&{paddingHorizontal:reactNative.Platform.select({android:16,default:15})},centerContainerStyle]),placement:placement,__source:{fileName:_jsxFileName$q,lineNumber:111}},children[1]||centerComponent),React__default.createElement(Children,{style:reactNative.StyleSheet.flatten([placement==='center'&&styles$k.rightLeftContainer,rightContainerStyle]),placement:"right",__source:{fileName:_jsxFileName$q,lineNumber:127}},children[2]||rightComponent));}}]);return Header;}(React.Component);Header.propTypes={placement:propTypes.oneOf(['left','center','right']),leftComponent:nodeType,centerComponent:nodeType,rightComponent:nodeType,leftContainerStyle:ViewPropTypes.style,centerContainerStyle:ViewPropTypes.style,rightContainerStyle:ViewPropTypes.style,backgroundColor:propTypes.string,backgroundImage:reactNative.Image.propTypes.source,backgroundImageStyle:reactNative.Image.propTypes.style,containerStyle:ViewPropTypes.style,statusBarProps:propTypes.object,barStyle:propTypes.oneOf(['default','light-content','dark-content']),children:propTypes.oneOfType([propTypes.arrayOf(propTypes.node),propTypes.node]),theme:propTypes.object,linearGradientProps:propTypes.object,ViewComponent:propTypes.elementType};Header.defaultProps={placement:'center',children:[]};var styles$k={container:function container(theme){return {borderBottomColor:'#f2f2f2',borderBottomWidth:reactNative.StyleSheet.hairlineWidth,paddingHorizontal:10,backgroundColor:theme.colors.primary,paddingTop:getStatusBarHeight(),flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:reactNative.Platform.select({android:56,default:44})+getStatusBarHeight()};},centerContainer:{flex:3},rightLeftContainer:{flex:1}};var Header$1 = withTheme(Header,'Header');

var _jsxFileName$r="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\pricing\\PricingCard.js";function ownKeys$k(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$k(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$k(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$k(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var PricingCard=function PricingCard(props){var theme=props.theme,rest=objectWithoutProperties(props,["theme"]);var containerStyle=rest.containerStyle,wrapperStyle=rest.wrapperStyle,title=rest.title,price=rest.price,info=rest.info,button=rest.button,_rest$color=rest.color,color=_rest$color===void 0?theme.colors.primary:_rest$color,titleStyle=rest.titleStyle,pricingStyle=rest.pricingStyle,infoStyle=rest.infoStyle,onButtonPress=rest.onButtonPress,attributes=objectWithoutProperties(rest,["containerStyle","wrapperStyle","title","price","info","button","color","titleStyle","pricingStyle","infoStyle","onButtonPress"]);return React__default.createElement(reactNative.View,_extends_1({},attributes,{style:reactNative.StyleSheet.flatten([styles$l.container(theme),containerStyle&&containerStyle]),__source:{fileName:_jsxFileName$r,lineNumber:31}}),React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$l.wrapper,wrapperStyle&&wrapperStyle]),__source:{fileName:_jsxFileName$r,lineNumber:38}},React__default.createElement(Text,{testID:"pricingCardTitle",style:reactNative.StyleSheet.flatten([styles$l.pricingTitle,titleStyle,{color:color}]),__source:{fileName:_jsxFileName$r,lineNumber:44}},title),React__default.createElement(Text,{style:reactNative.StyleSheet.flatten([styles$l.pricingPrice,pricingStyle]),__source:{fileName:_jsxFileName$r,lineNumber:55}},price),info.map(function(item){return React__default.createElement(Text,{key:item,style:reactNative.StyleSheet.flatten([styles$l.pricingInfo(theme),infoStyle]),__source:{fileName:_jsxFileName$r,lineNumber:60}},item);}),React__default.createElement(Button$1,{title:button.title,buttonStyle:reactNative.StyleSheet.flatten([styles$l.button,button.buttonStyle,{backgroundColor:color}]),titleStyle:button.titleStyle,onPress:onButtonPress,icon:React__default.createElement(Icon$1,{name:button.icon,size:15,color:"white",__source:{fileName:_jsxFileName$r,lineNumber:77}}),__source:{fileName:_jsxFileName$r,lineNumber:68}})));};PricingCard.propTypes={containerStyle:ViewPropTypes.style,wrapperStyle:ViewPropTypes.style,title:propTypes.string,price:propTypes.oneOfType([propTypes.string,propTypes.number]),info:propTypes.arrayOf(propTypes.string),button:propTypes.object,color:propTypes.string,onButtonPress:propTypes.func,titleStyle:reactNative.Text.propTypes.style,pricingStyle:reactNative.Text.propTypes.style,infoStyle:reactNative.Text.propTypes.style,theme:propTypes.object};PricingCard.defaultProps={info:[]};var styles$l={container:function container(theme){return _objectSpread$k({margin:15,marginBottom:15,backgroundColor:'white',borderWidth:1,padding:15,borderColor:theme.colors.grey5},reactNative.Platform.select({android:{elevation:1},default:{shadowColor:'rgba(0,0,0, .2)',shadowOffset:{height:1,width:0},shadowOpacity:0.5,shadowRadius:0.5}}));},wrapper:{backgroundColor:'transparent'},pricingTitle:_objectSpread$k({textAlign:'center',fontSize:normalize(30)},reactNative.Platform.select({android:_objectSpread$k({},fonts.android.black),default:{fontWeight:'800'}})),pricingPrice:_objectSpread$k({textAlign:'center',marginTop:10,marginBottom:10,fontSize:normalize(40)},reactNative.Platform.select({android:_objectSpread$k({},fonts.android.bold),default:{fontWeight:'700'}})),pricingInfo:function pricingInfo(theme){return _objectSpread$k({textAlign:'center',marginTop:5,marginBottom:5,color:theme.colors.grey3},reactNative.Platform.select({android:_objectSpread$k({},fonts.android.bold),default:{fontWeight:'600'}}));},button:{marginTop:15,marginBottom:10}};var PricingCard$1 = withTheme(PricingCard,'PricingCard');

var _jsxFileName$s="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\tooltip\\Triangle.js";var Triangle=function Triangle(_ref){var style=_ref.style,isDown=_ref.isDown;return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.flatten([styles$m.triangle,style,isDown?styles$m.down:{}]),__source:{fileName:_jsxFileName$s,lineNumber:8}});};Triangle.propTypes={style:ViewPropTypes.style,isDown:propTypes.bool};var styles$m=reactNative.StyleSheet.create({down:{transform:[{rotate:'180deg'}]},triangle:{width:0,height:0,backgroundColor:'transparent',borderStyle:'solid',borderLeftWidth:8,borderRightWidth:8,borderBottomWidth:15,borderLeftColor:'transparent',borderRightColor:'transparent',borderBottomColor:'white'}});

var getArea=function getArea(a,b){return a*b;};var getPointDistance=function getPointDistance(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2));};var getElementVisibleWidth=function getElementVisibleWidth(elementWidth,xOffset,ScreenWidth){if(xOffset>=0){return xOffset+elementWidth<=ScreenWidth?elementWidth:ScreenWidth-xOffset;}return elementWidth-xOffset;};var getTooltipCoordinate=function getTooltipCoordinate(x,y,width,height,ScreenWidth,ScreenHeight,tooltipWidth,tooltipHeight,withPointer){var center=[x+getElementVisibleWidth(width,x,ScreenWidth)/2,y+height/2];var pOne=[center[0],0];var pTwo=[ScreenWidth,center[1]];var pThree=[center[0],ScreenHeight];var pFour=[0,center[1]];var vOne=getPointDistance(center,pOne);var vTwo=getPointDistance(center,pTwo);var vThree=getPointDistance(center,pThree);var vFour=getPointDistance(center,pFour);var areas=[getArea(vOne,vFour),getArea(vOne,vTwo),getArea(vTwo,vThree),getArea(vThree,vFour)].map(function(each,index){return {area:each,id:index};});var sortedArea=areas.sort(function(a,b){return b.area-a.area;});var dX=0.001;var dY=height/2;var directionCorrection=[[-1,-1],[1,-1],[1,1],[-1,1]];var deslocateReferencePoint=[[-tooltipWidth,-tooltipHeight],[0,-tooltipHeight],[0,0],[-tooltipWidth,0]];var qIndex=sortedArea[0].id;var getWithPointerOffsetY=function getWithPointerOffsetY(){return withPointer?10*directionCorrection[qIndex][1]:0;};var getWithPointerOffsetX=function getWithPointerOffsetX(){return withPointer?center[0]-18*directionCorrection[qIndex][0]:center[0];};var newX=getWithPointerOffsetX()+(dX*directionCorrection[qIndex][0]+deslocateReferencePoint[qIndex][0]);return {x:constraintX(newX,qIndex,center[0],ScreenWidth,tooltipWidth),y:center[1]+(dY*directionCorrection[qIndex][1]+deslocateReferencePoint[qIndex][1])+getWithPointerOffsetY()};};var constraintX=function constraintX(newX,qIndex,x,ScreenWidth,tooltipWidth){switch(qIndex){case 0:case 3:{var maxWidth=newX>ScreenWidth?ScreenWidth-10:newX;return newX<1?10:maxWidth;}case 1:case 2:{var leftOverSpace=ScreenWidth-newX;return leftOverSpace>=tooltipWidth?newX:newX-(tooltipWidth-leftOverSpace+10);}default:{return 0;}}};

var _jsxFileName$t="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-elements\\src\\tooltip\\Tooltip.js";function ownKeys$l(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$l(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$l(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$l(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Tooltip=function(_React$PureComponent){inherits(Tooltip,_React$PureComponent);function Tooltip(){var _getPrototypeOf2;var _this;classCallCheck(this,Tooltip);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={isVisible:false,yOffset:0,xOffset:0,elementWidth:0,elementHeight:0};_this.toggleTooltip=function(){var onClose=_this.props.onClose;_this.getElementPosition();_this.setState(function(prevState){if(prevState.isVisible&&!isIOS){onClose&&onClose();}return {isVisible:!prevState.isVisible};});};_this.wrapWithPress=function(toggleOnPress,children){if(toggleOnPress){return React__default.createElement(reactNative.TouchableOpacity,{onPress:_this.toggleTooltip,activeOpacity:1,__source:{fileName:_jsxFileName$t,lineNumber:39}},children);}return children;};_this.getTooltipStyle=function(){var _this$state=_this.state,yOffset=_this$state.yOffset,xOffset=_this$state.xOffset,elementHeight=_this$state.elementHeight,elementWidth=_this$state.elementWidth;var _this$props=_this.props,height=_this$props.height,backgroundColor=_this$props.backgroundColor,width=_this$props.width,withPointer=_this$props.withPointer,containerStyle=_this$props.containerStyle;var _getTooltipCoordinate=getTooltipCoordinate(xOffset,yOffset,elementWidth,elementHeight,ScreenWidth,ScreenHeight,width,height,withPointer),x=_getTooltipCoordinate.x,y=_getTooltipCoordinate.y;return _objectSpread$l({position:'absolute',left:x,top:y,width:width,height:height,backgroundColor:backgroundColor,display:'flex',alignItems:'center',justifyContent:'center',flex:1,borderRadius:10,padding:10},containerStyle);};_this.renderPointer=function(tooltipY){var _this$state2=_this.state,yOffset=_this$state2.yOffset,xOffset=_this$state2.xOffset,elementHeight=_this$state2.elementHeight,elementWidth=_this$state2.elementWidth;var _this$props2=_this.props,backgroundColor=_this$props2.backgroundColor,pointerColor=_this$props2.pointerColor;var pastMiddleLine=yOffset>tooltipY;return React__default.createElement(reactNative.View,{style:{position:'absolute',top:pastMiddleLine?yOffset-13:yOffset+elementHeight-2,left:xOffset+getElementVisibleWidth(elementWidth,xOffset,ScreenWidth)/2-7.5},__source:{fileName:_jsxFileName$t,lineNumber:94}},React__default.createElement(Triangle,{style:{borderBottomColor:pointerColor||backgroundColor},isDown:pastMiddleLine,__source:{fileName:_jsxFileName$t,lineNumber:104}}));};_this.renderContent=function(withTooltip){var _this$props3=_this.props,popover=_this$props3.popover,withPointer=_this$props3.withPointer,toggleOnPress=_this$props3.toggleOnPress,highlightColor=_this$props3.highlightColor;if(!withTooltip){return _this.wrapWithPress(toggleOnPress,_this.props.children);}var _this$state3=_this.state,yOffset=_this$state3.yOffset,xOffset=_this$state3.xOffset,elementWidth=_this$state3.elementWidth,elementHeight=_this$state3.elementHeight;var tooltipStyle=_this.getTooltipStyle();return React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$t,lineNumber:122}},React__default.createElement(reactNative.View,{style:{position:'absolute',top:yOffset,left:xOffset,backgroundColor:highlightColor,overflow:'visible',width:elementWidth,height:elementHeight},__source:{fileName:_jsxFileName$t,lineNumber:123}},_this.props.children),withPointer&&_this.renderPointer(tooltipStyle.top),React__default.createElement(reactNative.View,{style:tooltipStyle,testID:"tooltipPopoverContainer",__source:{fileName:_jsxFileName$t,lineNumber:137}},popover));};_this.getElementPosition=function(){_this.renderedElement&&_this.renderedElement.measure(function(frameOffsetX,frameOffsetY,width,height,pageOffsetX,pageOffsetY){_this.setState({xOffset:pageOffsetX,yOffset:isIOS?pageOffsetY:pageOffsetY-reactNative.StatusBar.currentHeight,elementWidth:width,elementHeight:height});});};return _this;}createClass(Tooltip,[{key:"componentDidMount",value:function componentDidMount(){setTimeout(this.getElementPosition,500);}},{key:"render",value:function render(){var _this2=this;var isVisible=this.state.isVisible;var _this$props4=this.props,onClose=_this$props4.onClose,withOverlay=_this$props4.withOverlay,overlayColor=_this$props4.overlayColor,onOpen=_this$props4.onOpen;return React__default.createElement(reactNative.View,{collapsable:false,ref:function ref(e){_this2.renderedElement=e;},__source:{fileName:_jsxFileName$t,lineNumber:177}},this.renderContent(false),React__default.createElement(reactNative.Modal,{animationType:"fade",visible:isVisible,transparent:true,onDismiss:onClose,onShow:onOpen,onRequestClose:onClose,__source:{fileName:_jsxFileName$t,lineNumber:184}},React__default.createElement(reactNative.TouchableOpacity,{style:styles$n.container(withOverlay,overlayColor),onPress:this.toggleTooltip,activeOpacity:1,__source:{fileName:_jsxFileName$t,lineNumber:192}},this.renderContent(true))));}}]);return Tooltip;}(React__default.PureComponent);Tooltip.propTypes={children:propTypes.element,withPointer:propTypes.bool,popover:propTypes.element,toggleOnPress:propTypes.bool,height:propTypes.number,width:propTypes.oneOfType([propTypes.number,propTypes.string]),containerStyle:ViewPropTypes.style,pointerColor:propTypes.string,onClose:propTypes.func,onOpen:propTypes.func,overlayColor:propTypes.string,withOverlay:propTypes.bool,backgroundColor:propTypes.string,highlightColor:propTypes.string};Tooltip.defaultProps={withOverlay:true,overlayColor:'rgba(250, 250, 250, 0.70)',highlightColor:'transparent',withPointer:true,toggleOnPress:true,height:40,width:150,containerStyle:{},backgroundColor:'#617080',onClose:function onClose(){},onOpen:function onOpen(){}};var styles$n={container:function container(withOverlay,overlayColor){return {backgroundColor:withOverlay?overlayColor:'transparent',flex:1};}};var Tooltip$1 = withTheme(Tooltip,'Tooltip');

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

var _jsxFileName$u="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ratings\\src\\SwipeRating.js";var STAR_IMAGE=require('./images/star.png');var HEART_IMAGE=require('./images/heart.png');var ROCKET_IMAGE=require('./images/rocket.png');var BELL_IMAGE=require('./images/bell.png');var TYPES={star:{source:STAR_IMAGE,color:'#f1c40f',backgroundColor:'white'},heart:{source:HEART_IMAGE,color:'#e74c3c',backgroundColor:'white'},rocket:{source:ROCKET_IMAGE,color:'#2ecc71',backgroundColor:'white'},bell:{source:BELL_IMAGE,color:'#f39c12',backgroundColor:'white'}};var SwipeRating=function(_Component){inherits(SwipeRating,_Component);function SwipeRating(props){var _this;classCallCheck(this,SwipeRating);_this=possibleConstructorReturn(this,getPrototypeOf(SwipeRating).call(this,props));var _this$props=_this.props,onStartRating=_this$props.onStartRating,onFinishRating=_this$props.onFinishRating,fractions=_this$props.fractions;var position=new reactNative.Animated.ValueXY();var panResponder=reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},onPanResponderGrant:function onPanResponderGrant(){if(typeof onStartRating==='function'){onStartRating();}},onPanResponderMove:function onPanResponderMove(event,gesture){var newPosition=new reactNative.Animated.ValueXY();newPosition.setValue({x:gesture.dx,y:0});_this.setState({position:newPosition,value:gesture.dx});},onPanResponderRelease:function onPanResponderRelease(event){var rating=_this.getCurrentRating(_this.state.value);if(rating>=_this.props.minValue){if(!fractions){_this.setCurrentRating(rating);}onFinishRating(rating);}}});_this.state={panResponder:panResponder,position:position,display:false};return _this;}createClass(SwipeRating,[{key:"componentDidMount",value:function componentDidMount(){var _STAR_IMAGE,_HEART_IMAGE,_ROCKET_IMAGE,_BELL_IMAGE;return regenerator.async(function componentDidMount$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regenerator.awrap(require('./images/star.png'));case 3:_STAR_IMAGE=_context.sent;_context.next=6;return regenerator.awrap(require('./images/heart.png'));case 6:_HEART_IMAGE=_context.sent;_context.next=9;return regenerator.awrap(require('./images/rocket.png'));case 9:_ROCKET_IMAGE=_context.sent;_context.next=12;return regenerator.awrap(require('./images/bell.png'));case 12:_BELL_IMAGE=_context.sent;this.setState({display:true});_context.next=19;break;case 16:_context.prev=16;_context.t0=_context["catch"](0);console.log(_context.t0);case 19:this.setCurrentRating(this.props.startingValue);case 20:case"end":return _context.stop();}}},null,this,[[0,16]]);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.props.startingValue!==prevProps.startingValue){this.setCurrentRating(this.props.startingValue);}}},{key:"getPrimaryViewStyle",value:function getPrimaryViewStyle(){var position=this.state.position;var _this$props2=this.props,imageSize=_this$props2.imageSize,ratingCount=_this$props2.ratingCount,type=_this$props2.type;var color=TYPES[type].color;var width=position.x.interpolate({inputRange:[-ratingCount*(imageSize/2),0,ratingCount*(imageSize/2)],outputRange:[0,ratingCount*imageSize/2,ratingCount*imageSize],extrapolate:'clamp'},{useNativeDriver:true});return {backgroundColor:color,width:width,height:width?imageSize:0};}},{key:"getSecondaryViewStyle",value:function getSecondaryViewStyle(){var position=this.state.position;var _this$props3=this.props,imageSize=_this$props3.imageSize,ratingCount=_this$props3.ratingCount,type=_this$props3.type;var backgroundColor=TYPES[type].backgroundColor;var width=position.x.interpolate({inputRange:[-ratingCount*(imageSize/2),0,ratingCount*(imageSize/2)],outputRange:[ratingCount*imageSize,ratingCount*imageSize/2,0],extrapolate:'clamp'},{useNativeDriver:true});return {backgroundColor:backgroundColor,width:width,height:width?imageSize:0};}},{key:"renderRatings",value:function renderRatings(){var _this$props4=this.props,imageSize=_this$props4.imageSize,ratingCount=_this$props4.ratingCount,type=_this$props4.type,tintColor=_this$props4.tintColor;var source=TYPES[type].source;return times(ratingCount,function(index){return React__default.createElement(reactNative.View,{key:index,style:styles$o.starContainer,__source:{fileName:_jsxFileName$u,lineNumber:158}},React__default.createElement(reactNative.Image,{source:source,style:{width:imageSize,height:imageSize,tintColor:tintColor},__source:{fileName:_jsxFileName$u,lineNumber:159}}));});}},{key:"getCurrentRating",value:function getCurrentRating(value){var _this$props5=this.props,fractions=_this$props5.fractions,imageSize=_this$props5.imageSize,ratingCount=_this$props5.ratingCount;var startingValue=ratingCount/2;var currentRating=this.props.minValue?this.props.minValue:0;if(value>ratingCount*imageSize/2){currentRating=ratingCount;}else if(value<-ratingCount*imageSize/2){currentRating=this.props.minValue?this.props.minValue:0;}else if(value<=imageSize||value>imageSize){currentRating=startingValue+value/imageSize;currentRating=!fractions?Math.ceil(currentRating):+currentRating.toFixed(fractions);}else{currentRating=!fractions?Math.ceil(startingValue):+startingValue.toFixed(fractions);}return currentRating;}},{key:"setCurrentRating",value:function setCurrentRating(rating){var _this$props6=this.props,imageSize=_this$props6.imageSize,ratingCount=_this$props6.ratingCount;var initialRating=ratingCount/2;var value=null;if(rating>ratingCount){value=ratingCount*imageSize/2;}else if(rating<0){value=-ratingCount*imageSize/2;}else if(rating<ratingCount/2||rating>ratingCount/2){value=(rating-initialRating)*imageSize;}else{value=0;}var newPosition=new reactNative.Animated.ValueXY();newPosition.setValue({x:value,y:0});this.setState({position:newPosition,value:value});}},{key:"displayCurrentRating",value:function displayCurrentRating(){var _this$props7=this.props,ratingCount=_this$props7.ratingCount,type=_this$props7.type,readonly=_this$props7.readonly,ratingTextColor=_this$props7.ratingTextColor;var color=ratingTextColor||TYPES[type].color;return React__default.createElement(reactNative.View,{style:styles$o.showRatingView,__source:{fileName:_jsxFileName$u,lineNumber:213}},React__default.createElement(reactNative.View,{style:styles$o.ratingView,__source:{fileName:_jsxFileName$u,lineNumber:214}},React__default.createElement(reactNative.Text,{style:[styles$o.ratingText,{color:color}],__source:{fileName:_jsxFileName$u,lineNumber:215}},"Rating:",' '),React__default.createElement(reactNative.Text,{style:[styles$o.currentRatingText,{color:color}],__source:{fileName:_jsxFileName$u,lineNumber:216}},this.getCurrentRating(this.state.value)),React__default.createElement(reactNative.Text,{style:[styles$o.maxRatingText,{color:color}],__source:{fileName:_jsxFileName$u,lineNumber:217}},"/",ratingCount)),React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$u,lineNumber:219}},readonly&&React__default.createElement(reactNative.Text,{style:[styles$o.readonlyLabel,{color:color}],__source:{fileName:_jsxFileName$u,lineNumber:219}},"(readonly)")));}},{key:"render",value:function render(){var _this$props8=this.props,readonly=_this$props8.readonly,type=_this$props8.type,ratingImage=_this$props8.ratingImage,ratingColor=_this$props8.ratingColor,ratingBackgroundColor=_this$props8.ratingBackgroundColor,style=_this$props8.style,showRating=_this$props8.showRating;if(type==='custom'){var custom={source:ratingImage,color:ratingColor,backgroundColor:ratingBackgroundColor};TYPES.custom=custom;}return this.state.display?React__default.createElement(reactNative.View,{pointerEvents:readonly?'none':'auto',style:style,__source:{fileName:_jsxFileName$u,lineNumber:238}},showRating&&this.displayCurrentRating(),React__default.createElement(reactNative.View,_extends_1({style:styles$o.starsWrapper},this.state.panResponder.panHandlers,{__source:{fileName:_jsxFileName$u,lineNumber:240}}),React__default.createElement(reactNative.View,{style:styles$o.starsInsideWrapper,__source:{fileName:_jsxFileName$u,lineNumber:241}},React__default.createElement(reactNative.Animated.View,{style:this.getPrimaryViewStyle(),__source:{fileName:_jsxFileName$u,lineNumber:242}}),React__default.createElement(reactNative.Animated.View,{style:this.getSecondaryViewStyle(),__source:{fileName:_jsxFileName$u,lineNumber:243}})),this.renderRatings())):null;}}]);return SwipeRating;}(React.Component);SwipeRating.defaultProps={type:'star',ratingImage:require('./images/star.png'),ratingColor:'#f1c40f',ratingBackgroundColor:'white',ratingCount:5,imageSize:40,onFinishRating:function onFinishRating(){return console.log('Attach a onFinishRating function here.');},minValue:0};var styles$o=reactNative.StyleSheet.create({starsWrapper:{flexDirection:'row',justifyContent:'center',alignItems:'center'},starsInsideWrapper:{position:'absolute',top:0,left:0,right:0,bottom:0,flexDirection:'row',justifyContent:'center',alignItems:'center'},showRatingView:{flexDirection:'column',justifyContent:'center',alignItems:'center',paddingBottom:5},ratingView:{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:5},ratingText:{fontSize:15,textAlign:'center',fontFamily:reactNative.Platform.OS==='ios'?'Trebuchet MS':null,color:'#34495e'},readonlyLabel:{justifyContent:'center',alignItems:'center',fontSize:12,textAlign:'center',fontFamily:reactNative.Platform.OS==='ios'?'Trebuchet MS':null,color:'#34495a'},currentRatingText:{fontSize:30,textAlign:'center',fontFamily:reactNative.Platform.OS==='ios'?'Trebuchet MS':null},maxRatingText:{fontSize:18,textAlign:'center',fontFamily:reactNative.Platform.OS==='ios'?'Trebuchet MS':null,color:'#34495e'}});var fractionsType=function fractionsType(props,propName,componentName){if(props[propName]){var value=props[propName];if(typeof value==='number'){return value>=0&&value<=20?null:new Error("`"+propName+"` in `"+componentName+"` must be between 0 and 20");}return new Error("`"+propName+"` in `"+componentName+"` must be a number");}};SwipeRating.propTypes={type:propTypes.string,ratingImage:reactNative.Image.propTypes.source,ratingColor:propTypes.string,ratingBackgroundColor:propTypes.string,ratingCount:propTypes.number,ratingTextColor:propTypes.string,imageSize:propTypes.number,onStartRating:propTypes.func,onFinishRating:propTypes.func,showRating:propTypes.bool,style:reactNative.ViewPropTypes.style,readonly:propTypes.bool,startingValue:propTypes.number,fractions:fractionsType,minValue:propTypes.number};

var _jsxFileName$v="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ratings\\src\\components\\Star.js";var STAR_IMAGE$1=require('../images/airbnb-star.png');var STAR_SELECTED_IMAGE=require('../images/airbnb-star-selected.png');var STAR_SIZE=40;var Star=function(_PureComponent){inherits(Star,_PureComponent);function Star(){var _this;classCallCheck(this,Star);_this=possibleConstructorReturn(this,getPrototypeOf(Star).call(this));_this.springValue=new reactNative.Animated.Value(1);_this.state={selected:false};return _this;}createClass(Star,[{key:"spring",value:function spring(){var _this$props=this.props,position=_this$props.position,starSelectedInPosition=_this$props.starSelectedInPosition;this.springValue.setValue(1.2);reactNative.Animated.spring(this.springValue,{toValue:1,friction:2,tension:1}).start();this.setState({selected:!this.state.selected});starSelectedInPosition(position);}},{key:"render",value:function render(){var _this$props2=this.props,fill=_this$props2.fill,size=_this$props2.size,selectedColor=_this$props2.selectedColor,isDisabled=_this$props2.isDisabled,starStyle=_this$props2.starStyle;var starSource=fill&&selectedColor===null?STAR_SELECTED_IMAGE:STAR_IMAGE$1;return React__default.createElement(reactNative.TouchableOpacity,{activeOpacity:1,onPress:this.spring.bind(this),disabled:isDisabled,__source:{fileName:_jsxFileName$v,lineNumber:45}},React__default.createElement(reactNative.Animated.Image,{source:starSource,style:[styles$p.starStyle,{tintColor:fill&&selectedColor?selectedColor:undefined,width:size||STAR_SIZE,height:size||STAR_SIZE,transform:[{scale:this.springValue}]},starStyle],__source:{fileName:_jsxFileName$v,lineNumber:46}}));}}]);return Star;}(React.PureComponent);Star.defaultProps={selectedColor:'#f1c40f'};var styles$p=reactNative.StyleSheet.create({starStyle:{margin:3}});

var _jsxFileName$w="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ratings\\src\\TapRating.js";var TapRating=function(_Component){inherits(TapRating,_Component);createClass(TapRating,null,[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(nextProps,prevState){var defaultRating=nextProps.defaultRating;if(defaultRating!==prevState.defaultRating){return {position:defaultRating,defaultRating:defaultRating};}return null;}}]);function TapRating(){var _this;classCallCheck(this,TapRating);_this=possibleConstructorReturn(this,getPrototypeOf(TapRating).call(this));_this.state={position:5};return _this;}createClass(TapRating,[{key:"componentDidMount",value:function componentDidMount(){var defaultRating=this.props.defaultRating;this.setState({position:defaultRating});}},{key:"renderStars",value:function renderStars(rating_array){return _.map(rating_array,function(star,index){return star;});}},{key:"starSelectedInPosition",value:function starSelectedInPosition(position){var onFinishRating=this.props.onFinishRating;onFinishRating(position);this.setState({position:position});}},{key:"render",value:function render(){var _this2=this;var position=this.state.position;var _this$props=this.props,count=_this$props.count,reviews=_this$props.reviews,showRating=_this$props.showRating,reviewColor=_this$props.reviewColor,reviewSize=_this$props.reviewSize;var rating_array=[];var starContainerStyle=[styles$q.starContainer];if(this.props.starContainerStyle){starContainerStyle.push(this.props.starContainerStyle);}_.times(count,function(index){rating_array.push(React__default.createElement(Star,_extends_1({key:index,position:index+1,starSelectedInPosition:_this2.starSelectedInPosition.bind(_this2),fill:position>=index+1},_this2.props,{__source:{fileName:_jsxFileName$w,lineNumber:73}})));});return React__default.createElement(reactNative.View,{style:styles$q.ratingContainer,__source:{fileName:_jsxFileName$w,lineNumber:84}},showRating&&React__default.createElement(reactNative.Text,{style:[styles$q.reviewText,{fontSize:reviewSize,color:reviewColor}],__source:{fileName:_jsxFileName$w,lineNumber:86}},reviews[position-1]),React__default.createElement(reactNative.View,{style:starContainerStyle,__source:{fileName:_jsxFileName$w,lineNumber:90}},this.renderStars(rating_array)));}}]);return TapRating;}(React.Component);TapRating.defaultProps={defaultRating:3,reviews:["Terrible","Bad","Okay","Good","Great"],count:5,onFinishRating:function onFinishRating(){return console.log('Rating selected. Attach a function here.');},showRating:true,reviewColor:'rgba(230, 196, 46, 1)',reviewSize:25};var styles$q=reactNative.StyleSheet.create({ratingContainer:{backgroundColor:'transparent',flexDirection:'column',alignItems:'center',justifyContent:'center'},reviewText:{fontWeight:'bold',margin:10},starContainer:{flexDirection:'row',alignItems:'center',justifyContent:'center'}});

var AirbnbRating=withTheme(TapRating,'AirbnbRating');var Rating=withTheme(SwipeRating,'Rating');

exports.AirbnbRating = AirbnbRating;
exports.Avatar = Avatar$1;
exports.Badge = Badge$1;
exports.Button = Button$1;
exports.ButtonGroup = ButtonGroup$1;
exports.Card = Card$1;
exports.CheckBox = CheckBox$1;
exports.Divider = Divider$1;
exports.Header = Header$1;
exports.Icon = Icon$1;
exports.Image = Image$1;
exports.Input = Input$1;
exports.ListItem = ListItem$1;
exports.Overlay = Overlay$1;
exports.PricingCard = PricingCard$1;
exports.Rating = Rating;
exports.SearchBar = SearchBar$4;
exports.Slider = Slider$1;
exports.SocialIcon = SocialIcon$1;
exports.Text = Text;
exports.ThemeConsumer = ThemeConsumer;
exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
exports.Tile = Tile$1;
exports.Tooltip = Tooltip$1;
exports.colors = colors;
exports.getIconType = getIconType;
exports.normalize = normalize;
exports.registerCustomIconType = registerCustomIconType;
exports.withBadge = withBadge;
exports.withTheme = withTheme;
