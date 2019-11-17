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

const getExpoRoot = () => global.Expo || global.__expo || global.__exponent;

const isExpo = () => getExpoRoot() !== undefined;

function getStatusBarHeight(skipAndroid) {
    return reactNative.Platform.select({
        ios: isIPhoneX ? 44 : 20,
        android: skipAndroid ? 0 : reactNative.StatusBar.currentHeight,
        default: 0
    })
}

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	isExpo: isExpo,
	getStatusBarHeight: getStatusBarHeight
});

const BackgroundImage = reactNative.ImageBackground || reactNative.Image;

var colors = {
  primary: '#2089dc',
  secondary: '#8F0CE8',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  success: '#52c41a',
  error: '#ff190c',
  warning: '#faad14',
  disabled: 'hsl(208, 8%, 90%)',
  // Darker color if hairlineWidth is not thin enough
  divider: reactNative.StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
  platform: {
    ios: {
      primary: '#007aff',
      secondary: '#5856d6',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00'
    },
    android: {
      primary: '#2196f3',
      secondary: '#9C27B0',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ffeb3b'
    }
  }
};

const ViewPropTypes = reactNative.ViewPropTypes || reactNative.View.propTypes;

var fonts = {
  android: {
    regular: {
      fontFamily: 'sans-serif'
    },
    light: {
      fontFamily: 'sans-serif-light'
    },
    condensed: {
      fontFamily: 'sans-serif-condensed'
    },
    condensed_light: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'light'
    },
    black: {
      // note(brentvatne): sans-serif-black is only supported on Android 5+,
      // we can detect that here and use it in that case at some point.
      fontFamily: 'sans-serif',
      fontWeight: 'bold'
    },
    thin: {
      fontFamily: 'sans-serif-thin'
    },
    medium: {
      fontFamily: 'sans-serif-medium'
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold'
    }
  },
  default: {}
};

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

var umd$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': umd,
	__moduleExports: umd
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const ThemeContext = React__default.createContext({
  theme: {
    colors
  }
});
class ThemeProvider extends React__default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateTheme", updates => {
      this.setState(({
        theme
      }) => ({
        theme: umd(theme, updates)
      }));
    });

    _defineProperty(this, "replaceTheme", theme => {
      this.setState(() => ({
        theme: umd(this.defaultTheme, theme)
      }));
    });

    _defineProperty(this, "getTheme", () => this.state.theme);

    this.defaultTheme = umd({
      colors
    }, props.theme);
    this.state = {
      theme: this.defaultTheme
    };
  }

  render() {
    return React__default.createElement(ThemeContext.Provider, {
      value: {
        theme: this.state.theme,
        updateTheme: this.updateTheme,
        replaceTheme: this.replaceTheme
      }
    }, this.props.children);
  }

}
ThemeProvider.propTypes = {
  theme: propTypes.object,
  children: propTypes.node.isRequired
};
ThemeProvider.defaultProps = {
  theme: {}
};
const ThemeConsumer = ThemeContext.Consumer;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols$1) {
      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var DefaultTheme = {
  colors
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const isClassComponent = Component => Boolean(Component.prototype && Component.prototype.isReactComponent);

const withTheme = (WrappedComponent, themeKey) => {
  class ThemedComponent extends React__default.Component {
    render() {
      const {
        forwardedRef,
        children,
        ...rest
      } = this.props;
      return React__default.createElement(ThemeConsumer, null, context => {
        // If user isn't using ThemeProvider
        if (!context) {
          const props = { ...rest,
            theme: DefaultTheme,
            children
          };
          return isClassComponent(WrappedComponent) ? React__default.createElement(WrappedComponent, _extends({
            ref: forwardedRef
          }, props)) : React__default.createElement(WrappedComponent, props);
        }

        const {
          theme,
          updateTheme,
          replaceTheme
        } = context;
        const props = {
          theme,
          updateTheme,
          replaceTheme,
          ...umd(themeKey && theme[themeKey] || {}, rest),
          children
        };

        if (isClassComponent(WrappedComponent)) {
          return React__default.createElement(WrappedComponent, _extends({
            ref: forwardedRef
          }, props));
        }

        return React__default.createElement(WrappedComponent, props);
      });
    }

  }

  const name = themeKey ? `Themed.${themeKey}` : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;

  if (isClassComponent(WrappedComponent)) {
    const forwardRef = (props, ref) => React__default.createElement(ThemedComponent, _extends({}, props, {
      forwardedRef: ref
    }));

    forwardRef.displayName = name;
    return hoistNonReactStatics_cjs(React__default.forwardRef(forwardRef), WrappedComponent);
  }

  ThemedComponent.displayName = name;
  return ThemedComponent;
};

const TextPropTypes = reactNative.Text.propTypes;

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

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

const renderNode = (Component, content, defaultProps) => {
  if (content == null || content === false) {
    return null;
  }

  if (React__default.isValidElement(content)) {
    return content;
  }

  if (typeof content === 'function') {
    return content();
  } // Just in case


  if (content === true) {
    return React__default.createElement(Component, defaultProps);
  }

  if (typeof content === 'string' || typeof content === 'number') {
    return React__default.createElement(Component, defaultProps, content);
  }

  return React__default.createElement(Component, _extends$1({}, defaultProps, content));
};

const customIcons = {};
const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};
var getIconType = (type => {
  switch (type) {
    case 'zocial':
      return ZocialIcon;

    case 'octicon':
      return OcticonIcon;

    case 'material':
      return MaterialIcon;

    case 'material-community':
      return MaterialCommunityIcon;

    case 'ionicon':
      return Ionicon;

    case 'foundation':
      return FoundationIcon;

    case 'evilicon':
      return EvilIcon;

    case 'entypo':
      return EntypoIcon;

    case 'font-awesome':
      return FAIcon;

    case 'simple-line-icon':
      return SimpleLineIcon;

    case 'feather':
      return FeatherIcon;

    case 'antdesign':
      return AntIcon;

    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }

      return MaterialIcon;
  }
});

//
const pixelRatio = reactNative.PixelRatio.get();
const deviceHeight = reactNative.Dimensions.get('window').height;
const deviceWidth = reactNative.Dimensions.get('window').width; // -- Testing Only --
// const fontScale = PixelRatio.getFontScale();
// const layoutSize = PixelRatio.getPixelSizeForLayoutSize(14);
// console.log('normalizeText getPR ->', pixelRatio);
// console.log('normalizeText getFS ->', fontScale);
// console.log('normalizeText getDH ->', deviceHeight);
// console.log('normalizeText getDW ->', deviceWidth);
// console.log('normalizeText getPSFLS ->', layoutSize);

const normalize = size => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    } // iphone 5


    if (deviceHeight < 667) {
      return size; // iphone 6-6s
    }

    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    } // older phablets


    return size * 1.25;
  }

  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    } // Catch other weird android width sizings


    if (deviceHeight < 667) {
      return size * 1.15; // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    } // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等


    return size * 1.27;
  }

  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size; // Catch other smaller android height sizings
    }

    if (deviceHeight < 667) {
      return size * 1.2; // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    } // catch larger phablet devices


    return size * 1.4;
  }

  return size;
};

var nodeType = propTypes.oneOfType([propTypes.element, propTypes.object, propTypes.bool, propTypes.func]);

const Screen = reactNative.Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = reactNative.Platform.OS === 'ios';

const conditionalStyle = (condition, style) => condition ? style : {};

const patchWebProps = ({
  updateTheme,
  replaceTheme,
  onClear,
  ...rest
}) => {
  return rest;
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

const Icon = props => {
  const {
    type,
    name,
    size,
    color,
    iconStyle,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseColor,
    disabled,
    disabledStyle,
    onPress,
    Component = onPress ? reactNative.TouchableHighlight : reactNative.View,
    ...attributes
  } = props;
  const IconComponent = getIconType(type);

  const getBackgroundColor = () => {
    if (reverse) {
      return color;
    }

    return raised ? 'white' : 'transparent';
  };

  return React__default.createElement(reactNative.View, {
    style: containerStyle && containerStyle
  }, React__default.createElement(Component, _extends$2({}, attributes, {
    underlayColor: reverse ? color : underlayColor || color,
    style: reactNative.StyleSheet.flatten([(reverse || raised) && styles.button, (reverse || raised) && {
      borderRadius: size + 4,
      height: size * 2 + 4,
      width: size * 2 + 4
    }, raised && styles.raised, {
      backgroundColor: getBackgroundColor(),
      alignItems: 'center',
      justifyContent: 'center'
    }, disabled && styles.disabled, disabled && disabledStyle])
  }, onPress && {
    disabled
  }, {
    onPress: onPress
  }), React__default.createElement(IconComponent, {
    testID: "iconIcon",
    style: reactNative.StyleSheet.flatten([{
      backgroundColor: 'transparent'
    }, iconStyle && iconStyle]),
    size: size,
    name: name,
    color: reverse ? reverseColor : color
  })));
};

Icon.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  size: propTypes.number,
  color: propTypes.string,
  Component: propTypes.elementType,
  underlayColor: propTypes.string,
  reverse: propTypes.bool,
  raised: propTypes.bool,
  containerStyle: ViewPropTypes.style,
  iconStyle: reactNative.Text.propTypes.style,
  onPress: propTypes.func,
  reverseColor: propTypes.string,
  disabled: propTypes.bool,
  disabledStyle: ViewPropTypes.style
};
Icon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseColor: 'white',
  disabled: false,
  type: 'material'
};
const styles = reactNative.StyleSheet.create({
  button: {
    margin: 7
  },
  raised: { ...reactNative.Platform.select({
      android: {
        elevation: 2
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {
          height: 1,
          width: 1
        },
        shadowOpacity: 1,
        shadowRadius: 1
      }
    })
  },
  disabled: {
    backgroundColor: '#D1D5D8'
  }
});
var Icon$1 = withTheme(Icon, 'Icon');

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

const defaultLoadingProps = (type, theme) => ({
  color: type === 'solid' ? 'white' : theme.colors.primary,
  size: 'small'
});

class Button extends React.Component {
  componentDidMount() {
    const {
      linearGradientProps,
      ViewComponent
    } = this.props;

    if (linearGradientProps && !global.Expo && !ViewComponent) {
      console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
    }
  }

  render() {
    const {
      TouchableComponent,
      containerStyle,
      onPress,
      buttonStyle,
      type,
      loading,
      loadingStyle,
      loadingProps: passedLoadingProps,
      title,
      titleProps,
      titleStyle,
      icon,
      iconContainerStyle,
      iconRight,
      disabled,
      disabledStyle,
      disabledTitleStyle,
      raised,
      linearGradientProps,
      ViewComponent = !disabled && linearGradientProps && global.Expo ? global.Expo.LinearGradient : reactNative.View,
      theme,
      ...attributes
    } = this.props;

    if (reactNative.Platform.OS === 'android' && buttonStyle.borderRadius && !attributes.background) {
      if (reactNative.Platform.Version >= 21) {
        attributes.background = reactNative.TouchableNativeFeedback.Ripple(undefined, false);
      } else {
        attributes.background = reactNative.TouchableNativeFeedback.SelectableBackground();
      }
    }

    const loadingProps = { ...defaultLoadingProps(type, theme),
      ...passedLoadingProps
    };
    return React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$1.container, {
        borderRadius: buttonStyle.borderRadius || styles$1.container.borderRadius
      }, containerStyle, raised && !disabled && styles$1.raised(type)])
    }, React__default.createElement(TouchableComponent, _extends$3({
      onPress: onPress,
      activeOpacity: 0.3,
      disabled: disabled
    }, attributes), React__default.createElement(ViewComponent, _extends$3({}, linearGradientProps, {
      style: reactNative.StyleSheet.flatten([styles$1.button(type, theme), buttonStyle, disabled && styles$1.disabled(type, theme), disabled && disabledStyle])
    }), loading && React__default.createElement(reactNative.ActivityIndicator, _extends$3({
      style: reactNative.StyleSheet.flatten([styles$1.loading, loadingStyle]),
      color: loadingProps.color,
      size: loadingProps.size
    }, loadingProps)), !loading && icon && !iconRight && renderNode(Icon$1, icon, {
      containerStyle: reactNative.StyleSheet.flatten([styles$1.iconContainer, iconContainerStyle])
    }), !loading && !!title && React__default.createElement(reactNative.Text, _extends$3({
      style: reactNative.StyleSheet.flatten([styles$1.title(type, theme), titleStyle, disabled && styles$1.disabledTitle(theme), disabled && disabledTitleStyle])
    }, titleProps), title), !loading && icon && iconRight && renderNode(Icon$1, icon, {
      containerStyle: reactNative.StyleSheet.flatten([styles$1.iconContainer, iconContainerStyle])
    }))));
  }

}

Button.propTypes = {
  title: propTypes.string,
  titleStyle: reactNative.Text.propTypes.style,
  titleProps: propTypes.object,
  buttonStyle: ViewPropTypes.style,
  type: propTypes.oneOf(['solid', 'clear', 'outline']),
  loading: propTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: propTypes.object,
  onPress: propTypes.func,
  containerStyle: ViewPropTypes.style,
  icon: nodeType,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: propTypes.bool,
  linearGradientProps: propTypes.object,
  TouchableComponent: propTypes.elementType,
  ViewComponent: propTypes.elementType,
  disabled: propTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: reactNative.Text.propTypes.style,
  raised: propTypes.bool,
  theme: propTypes.object
};
Button.defaultProps = {
  title: '',
  iconRight: false,
  TouchableComponent: reactNative.Platform.select({
    android: reactNative.TouchableNativeFeedback,
    default: reactNative.TouchableOpacity
  }),
  onPress: () => console.log('Please attach a method to this component'),
  type: 'solid',
  buttonStyle: {
    borderRadius: 3
  },
  disabled: false,
  raised: false,
  loading: false
};
const styles$1 = {
  button: (type, theme) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: type === 'solid' ? theme.colors.primary : 'transparent',
    padding: 8,
    borderWidth: type === 'outline' ? reactNative.StyleSheet.hairlineWidth : 0,
    borderColor: theme.colors.primary
  }),
  container: {
    borderRadius: 3
  },
  disabled: (type, theme) => ({ ...conditionalStyle(type === 'solid', {
      backgroundColor: theme.colors.disabled
    }),
    ...conditionalStyle(type === 'outline', {
      borderColor: color(theme.colors.disabled).darken(0.3)
    })
  }),
  disabledTitle: theme => ({
    color: color(theme.colors.disabled).darken(0.3)
  }),
  title: (type, theme) => ({
    color: type === 'solid' ? 'white' : theme.colors.primary,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1,
    ...reactNative.Platform.select({
      android: {
        fontFamily: 'sans-serif-medium'
      },
      default: {
        fontSize: 18
      }
    })
  }),
  iconContainer: {
    marginHorizontal: 5
  },
  raised: type => type !== 'clear' && {
    backgroundColor: '#fff',
    ...reactNative.Platform.select({
      android: {
        elevation: 4
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {
          height: 1,
          width: 1
        },
        shadowOpacity: 1,
        shadowRadius: 1
      }
    })
  },
  loading: {
    marginVertical: 2
  }
};
var Button$1 = withTheme(Button, 'Button');

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const renderText = (content, defaultProps, style) => renderNode(reactNative.Text, content, { ...defaultProps,
  style: reactNative.StyleSheet.flatten([style, defaultProps && defaultProps.style])
});

class Input extends React__default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty$1(this, "shakeAnimationValue", new reactNative.Animated.Value(0));

    _defineProperty$1(this, "shake", () => {
      const {
        shakeAnimationValue
      } = this;
      shakeAnimationValue.setValue(0); // Animation duration based on Material Design
      // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations

      reactNative.Animated.timing(shakeAnimationValue, {
        duration: 375,
        toValue: 3,
        ease: reactNative.Easing.bounce
      }).start();
    });
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clear() {
    this.input.clear();
  }

  isFocused() {
    return this.input.isFocused();
  }

  setNativeProps(nativeProps) {
    this.input.setNativeProps(nativeProps);
  }

  render() {
    const {
      containerStyle,
      disabled,
      disabledInputStyle,
      inputContainerStyle,
      leftIcon,
      leftIconContainerStyle,
      rightIcon,
      rightIconContainerStyle,
      inputComponent: InputComponent = reactNative.TextInput,
      inputStyle,
      errorProps,
      errorStyle,
      errorMessage,
      label,
      labelStyle,
      labelProps,
      theme,
      ...attributes
    } = this.props;
    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0]
    });
    return React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$2.container, containerStyle])
    }, renderText(label, {
      style: labelStyle,
      ...labelProps
    }, styles$2.label(theme)), React__default.createElement(reactNative.Animated.View, {
      style: reactNative.StyleSheet.flatten([styles$2.inputContainer(theme), inputContainerStyle, {
        transform: [{
          translateX
        }]
      }])
    }, leftIcon && React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$2.iconContainer, leftIconContainerStyle])
    }, renderNode(Icon$1, leftIcon)), React__default.createElement(InputComponent, _extends$4({
      testID: "RNE__Input__text-input",
      underlineColorAndroid: "transparent",
      editable: !disabled
    }, patchWebProps(attributes), {
      ref: ref => {
        this.input = ref;
      },
      style: reactNative.StyleSheet.flatten([styles$2.input, inputStyle, disabled && styles$2.disabledInput, disabled && disabledInputStyle])
    })), rightIcon && React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$2.iconContainer, rightIconContainerStyle])
    }, renderNode(Icon$1, rightIcon))), !!errorMessage && React__default.createElement(reactNative.Text, _extends$4({}, errorProps, {
      style: reactNative.StyleSheet.flatten([styles$2.error(theme), errorStyle && errorStyle])
    }), errorMessage));
  }

}

Input.propTypes = {
  containerStyle: ViewPropTypes.style,
  disabled: propTypes.bool,
  disabledInputStyle: TextPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  leftIcon: nodeType,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIcon: nodeType,
  rightIconContainerStyle: ViewPropTypes.style,
  inputStyle: TextPropTypes.style,
  inputComponent: propTypes.elementType,
  errorProps: propTypes.object,
  errorStyle: TextPropTypes.style,
  errorMessage: propTypes.string,
  label: propTypes.node,
  labelStyle: TextPropTypes.style,
  labelProps: propTypes.object,
  theme: propTypes.object
};
const styles$2 = {
  container: {
    width: '100%',
    paddingHorizontal: 10
  },
  disabledInput: {
    opacity: 0.5
  },
  inputContainer: theme => ({
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: theme.colors.grey3
  }),
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
  input: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    flex: 1,
    minHeight: 40
  },
  error: theme => ({
    margin: 5,
    fontSize: 12,
    color: theme.colors.error
  }),
  label: theme => ({
    fontSize: 16,
    color: theme.colors.grey3,
    ...reactNative.Platform.select({
      android: { ...fonts.android.bold
      },
      default: {
        fontWeight: 'bold'
      }
    })
  })
};
var Input$1 = withTheme(Input, 'Input');

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Image extends React__default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty$2(this, "state", {
      placeholderOpacity: new reactNative.Animated.Value(1)
    });

    _defineProperty$2(this, "onLoad", () => {
      const minimumWait = 100;
      const staggerNonce = 200 * Math.random();
      setTimeout(() => {
        reactNative.Animated.timing(this.state.placeholderOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: reactNative.Platform.OS === 'android' ? false : true
        }).start();
      }, reactNative.Platform.OS === 'android' ? 0 : Math.floor(minimumWait + staggerNonce));
    });
  }

  render() {
    const {
      placeholderStyle,
      PlaceholderContent,
      containerStyle,
      style,
      ImageComponent,
      children,
      ...attributes
    } = this.props;
    const hasImage = Boolean(attributes.source);
    return React__default.createElement(reactNative.View, {
      accessibilityIgnoresInvertColors: true,
      style: reactNative.StyleSheet.flatten([styles$3.container, containerStyle])
    }, React__default.createElement(ImageComponent, _extends$5({
      testID: "RNE__Image"
    }, attributes, {
      onLoad: this.onLoad,
      style: [reactNative.StyleSheet.absoluteFill, {
        width: style.width,
        height: style.height
      }]
    })), React__default.createElement(reactNative.Animated.View, {
      pointerEvents: hasImage ? 'none' : 'auto',
      accessibilityElementsHidden: hasImage,
      importantForAccessibility: hasImage ? 'no-hide-descendants' : 'yes',
      style: [styles$3.placeholderContainer, {
        opacity: hasImage ? this.state.placeholderOpacity : 1
      }]
    }, React__default.createElement(reactNative.View, {
      testID: "RNE__Image__placeholder",
      style: reactNative.StyleSheet.flatten([style, styles$3.placeholder, placeholderStyle])
    }, PlaceholderContent)), React__default.createElement(reactNative.View, {
      style: style
    }, children));
  }

}

const styles$3 = {
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },
  placeholderContainer: { ...reactNative.StyleSheet.absoluteFillObject
  },
  placeholder: {
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
Image.propTypes = { ...reactNative.Image.propTypes,
  ImageComponent: propTypes.elementType,
  PlaceholderContent: nodeType,
  containerStyle: ViewPropTypes.style,
  placeholderStyle: reactNative.Image.propTypes.style
};
Image.defaultProps = {
  ImageComponent: reactNative.Image,
  style: {}
};
var Image$1 = withTheme(Image, 'Image');

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
const avatarSizes = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150
};
const defaultEditButton = {
  name: 'mode-edit',
  type: 'material',
  color: '#fff',
  underlayColor: '#000'
};

const Avatar = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? reactNative.TouchableOpacity : reactNative.View,
  containerStyle,
  icon,
  iconStyle,
  source,
  size,
  avatarStyle,
  rounded,
  title,
  titleStyle,
  overlayContainerStyle,
  showEditButton,
  editButton: passedEditButton,
  onEditPress,
  imageProps,
  placeholderStyle,
  renderPlaceholderContent,
  ImageComponent,
  ...attributes
}) => {
  const width = typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
  const height = width;
  const titleSize = width / 2;
  const iconSize = width / 2;
  const editButton = { ...defaultEditButton,
    ...passedEditButton
  };
  const editButtonSize = editButton.size || (width + height) / 2 / 3;
  const Utils = showEditButton && React__default.createElement(reactNative.TouchableHighlight, {
    style: reactNative.StyleSheet.flatten([styles$4.editButton, {
      width: editButtonSize,
      height: editButtonSize,
      borderRadius: editButtonSize / 2
    }, editButton.style]),
    underlayColor: editButton.underlayColor,
    onPress: onEditPress
  }, React__default.createElement(reactNative.View, null, React__default.createElement(Icon$1, _extends$6({
    size: editButtonSize * 0.8
  }, editButton))));
  const PlaceholderContent = renderPlaceholderContent && renderNode(undefined, renderPlaceholderContent) || title && React__default.createElement(reactNative.Text, {
    style: reactNative.StyleSheet.flatten([styles$4.title, {
      fontSize: titleSize
    }, titleStyle])
  }, title) || icon && React__default.createElement(Icon$1, {
    style: iconStyle && iconStyle,
    color: icon.color || 'white',
    name: icon.name || 'user',
    size: icon.size || iconSize,
    type: icon.type && icon.type
  }); // Remove placeholder styling if we're not using image

  const hidePlaceholder = !source;
  return React__default.createElement(Component, _extends$6({
    onPress: onPress,
    onLongPress: onLongPress,
    style: reactNative.StyleSheet.flatten([styles$4.container, {
      height,
      width
    }, rounded && {
      borderRadius: width / 2
    }, containerStyle])
  }, attributes), React__default.createElement(Image$1, _extends$6({
    placeholderStyle: reactNative.StyleSheet.flatten([placeholderStyle, hidePlaceholder && {
      backgroundColor: 'transparent'
    }]),
    PlaceholderContent: PlaceholderContent,
    containerStyle: reactNative.StyleSheet.flatten([styles$4.overlayContainer, overlayContainerStyle, rounded && {
      borderRadius: width / 2,
      overflow: 'hidden'
    }]),
    source: source
  }, imageProps, {
    style: reactNative.StyleSheet.flatten([styles$4.avatar, imageProps && imageProps.style, avatarStyle]),
    ImageComponent: ImageComponent
  })), Utils);
};

const styles$4 = reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  avatar: {
    flex: 1,
    width: null,
    height: null
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: '#bdbdbd'
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    ...reactNative.Platform.select({
      android: {
        elevation: 1
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.5
      }
    })
  }
});
Avatar.propTypes = {
  Component: propTypes.oneOf([reactNative.View, reactNative.TouchableOpacity, reactNative.TouchableHighlight, reactNative.TouchableNativeFeedback, reactNative.TouchableWithoutFeedback]),
  onPress: propTypes.func,
  onLongPress: propTypes.func,
  containerStyle: ViewPropTypes.style,
  source: reactNative.Image.propTypes.source,
  avatarStyle: ViewPropTypes.style,
  rounded: propTypes.bool,
  title: propTypes.string,
  titleStyle: reactNative.Text.propTypes.style,
  overlayContainerStyle: ViewPropTypes.style,
  activeOpacity: propTypes.number,
  icon: propTypes.object,
  iconStyle: reactNative.Text.propTypes.style,
  size: propTypes.oneOfType([propTypes.oneOf(['small', 'medium', 'large', 'xlarge']), propTypes.number]),
  showEditButton: propTypes.bool,
  onEditPress: propTypes.func,
  editButton: propTypes.shape({
    size: propTypes.number,
    name: propTypes.string,
    type: propTypes.string,
    color: propTypes.string,
    underlayColor: propTypes.string,
    style: ViewPropTypes.style
  }),
  placeholderStyle: ViewPropTypes.style,
  renderPlaceholderContent: nodeType,
  imageProps: propTypes.object,
  ImageComponent: propTypes.elementType
};
Avatar.defaultProps = {
  showEditButton: false,
  onEditPress: null,
  size: 'small',
  editButton: defaultEditButton,
  ImageComponent: reactNative.Image
};
var Avatar$1 = withTheme(Avatar, 'Avatar');

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

const Badge = props => {
  const {
    containerStyle,
    textStyle,
    badgeStyle,
    onPress,
    Component = onPress ? reactNative.TouchableOpacity : reactNative.View,
    value,
    theme,
    status,
    ...attributes
  } = props;
  const element = renderNode(reactNative.Text, value, {
    style: reactNative.StyleSheet.flatten([styles$5.text, textStyle && textStyle])
  });
  return React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([containerStyle && containerStyle])
  }, React__default.createElement(Component, _extends$7({}, attributes, {
    style: reactNative.StyleSheet.flatten([styles$5.badge(theme, status), !element && styles$5.miniBadge, badgeStyle && badgeStyle]),
    onPress: onPress
  }), element));
};

Badge.propTypes = {
  containerStyle: ViewPropTypes.style,
  badgeStyle: ViewPropTypes.style,
  textStyle: reactNative.Text.propTypes.style,
  value: propTypes.node,
  onPress: propTypes.func,
  Component: propTypes.elementType,
  theme: propTypes.object,
  status: propTypes.oneOf(['primary', 'success', 'warning', 'error'])
};
Badge.defaultProps = {
  status: 'primary'
};
const size = 18;
const miniSize = 8;
const styles$5 = {
  badge: (theme, status) => ({
    alignSelf: 'center',
    minWidth: size,
    height: size,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors[status],
    borderWidth: reactNative.StyleSheet.hairlineWidth,
    borderColor: '#fff'
  }),
  miniBadge: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: miniSize,
    height: miniSize,
    borderRadius: miniSize / 2
  },
  text: {
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 4
  }
};
var Badge$1 = withTheme(Badge, 'Badge');

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

const TextElement = props => {
  const {
    style,
    children,
    h1,
    h2,
    h3,
    h4,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    ...rest
  } = props;
  return React__default.createElement(reactNative.Text, _extends$8({
    style: reactNative.StyleSheet.flatten([styles$6.text, style && style, h1 && styles$6.bold, h2 && styles$6.bold, h3 && styles$6.bold, h4 && styles$6.bold, h1 && reactNative.StyleSheet.flatten([{
      fontSize: normalize(40)
    }, h1Style]), h2 && reactNative.StyleSheet.flatten([{
      fontSize: normalize(34)
    }, h2Style]), h3 && reactNative.StyleSheet.flatten([{
      fontSize: normalize(28)
    }, h3Style]), h4 && reactNative.StyleSheet.flatten([{
      fontSize: normalize(22)
    }, h4Style])])
  }, patchWebProps(rest)), children);
};

TextElement.propTypes = {
  style: reactNative.Text.propTypes.style,
  h1: propTypes.bool,
  h2: propTypes.bool,
  h3: propTypes.bool,
  h4: propTypes.bool,
  h1Style: reactNative.Text.propTypes.style,
  h2Style: reactNative.Text.propTypes.style,
  h3Style: reactNative.Text.propTypes.style,
  h4Style: reactNative.Text.propTypes.style,
  children: propTypes.node
};
TextElement.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  style: {},
  h1Style: {},
  h2Style: {},
  h3Style: {},
  h4Style: {},
  children: ''
};
const styles$6 = reactNative.StyleSheet.create({
  text: { ...reactNative.Platform.select({
      android: { ...fonts.android.regular
      }
    })
  },
  bold: { ...reactNative.Platform.select({
      android: { ...fonts.android.bold
      }
    })
  }
});
var Text = withTheme(TextElement, 'Text');

const CheckBoxIcon = ({
  checked,
  onIconPress,
  onLongIconPress,
  size,
  checkedIcon,
  uncheckedIcon,
  iconType,
  checkedColor,
  uncheckedColor
}) => {
  if (checked && React__default.isValidElement(checkedIcon)) {
    return checkedIcon;
  }

  if (!checked && React__default.isValidElement(uncheckedIcon)) {
    return uncheckedIcon;
  }

  const VectorIcon = iconType ? getIconType(iconType) : FAIcon;
  return React__default.createElement(VectorIcon, {
    color: checked ? checkedColor : uncheckedColor,
    name: checked ? checkedIcon : uncheckedIcon,
    size: size || 24,
    style: {
      minWidth: size || 24
    },
    onLongPress: onLongIconPress,
    onPress: onIconPress
  });
};

CheckBoxIcon.propTypes = {
  checked: propTypes.bool,
  onIconPress: propTypes.func,
  onLongIconPress: propTypes.func,
  size: propTypes.number,
  checkedIcon: propTypes.oneOfType([propTypes.string, propTypes.element]),
  uncheckedIcon: propTypes.oneOfType([propTypes.string, propTypes.element]),
  iconType: propTypes.string,
  checkedColor: propTypes.string,
  uncheckedColor: propTypes.string
};

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

const CheckBox = props => {
  const {
    theme,
    ...rest
  } = props;
  const {
    Component,
    checked,
    iconRight,
    title,
    titleProps,
    center,
    right,
    containerStyle,
    textStyle,
    wrapperStyle,
    onPress,
    onLongPress,
    checkedTitle,
    fontFamily,
    checkedColor = theme.colors.primary,
    ...attributes
  } = rest;
  return React__default.createElement(Component, _extends$9({}, attributes, {
    testID: "checkbox",
    onLongPress: onLongPress,
    onPress: onPress,
    style: reactNative.StyleSheet.flatten([styles$7.container, title && styles$7.containerHasTitle, containerStyle && containerStyle])
  }), React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles$7.wrapper, right && {
      justifyContent: 'flex-end'
    }, center && {
      justifyContent: 'center'
    }, wrapperStyle && wrapperStyle])
  }, !iconRight && React__default.createElement(CheckBoxIcon, _extends$9({}, props, {
    checkedColor: checkedColor
  })), React__default.isValidElement(title) ? title : title && React__default.createElement(Text, _extends$9({
    testID: "checkboxTitle",
    style: reactNative.StyleSheet.flatten([styles$7.text(theme), textStyle && textStyle, fontFamily && {
      fontFamily
    }])
  }, titleProps), checked ? checkedTitle || title : title), iconRight && React__default.createElement(CheckBoxIcon, _extends$9({}, props, {
    checkedColor: checkedColor
  }))));
};

CheckBox.propTypes = { ...CheckBoxIcon.propTypes,
  Component: propTypes.elementType,
  iconRight: propTypes.bool,
  title: propTypes.oneOfType([propTypes.string, propTypes.element]),
  titleProps: propTypes.object,
  center: propTypes.bool,
  right: propTypes.bool,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  textStyle: reactNative.Text.propTypes.style,
  onPress: propTypes.func,
  onLongPress: propTypes.func,
  checkedTitle: propTypes.string,
  fontFamily: propTypes.string
};
CheckBox.defaultProps = {
  checked: false,
  iconRight: false,
  right: false,
  center: false,
  uncheckedColor: '#bfbfbf',
  checkedIcon: 'check-square-o',
  uncheckedIcon: 'square-o',
  size: 24,
  Component: reactNative.TouchableOpacity,
  titleProps: {}
};
const styles$7 = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 10
  },
  containerHasTitle: {
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fafafa',
    borderColor: '#ededed'
  },
  text: theme => ({
    marginLeft: 10,
    marginRight: 10,
    color: theme.colors.grey1,
    ...reactNative.Platform.select({
      android: { ...fonts.android.bold
      },
      default: {
        fontWeight: 'bold'
      }
    })
  })
};
var CheckBox$1 = withTheme(CheckBox, 'CheckBox');

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

const ButtonGroup = props => {
  const {
    theme,
    ...rest
  } = props;
  const {
    Component,
    buttons,
    onPress,
    selectedIndex,
    selectedIndexes,
    selectMultiple,
    containerStyle,
    innerBorderStyle,
    lastBorderStyle,
    buttonStyle,
    textStyle,
    selectedTextStyle,
    selectedButtonStyle,
    underlayColor = theme.colors.primary,
    activeOpacity,
    onHideUnderlay,
    onShowUnderlay,
    setOpacityTo,
    containerBorderRadius,
    disabled,
    disabledStyle,
    disabledTextStyle,
    disabledSelectedStyle,
    disabledSelectedTextStyle,
    ...attributes
  } = rest;
  let innerBorderWidth = 1;

  if (innerBorderStyle && Object.prototype.hasOwnProperty.call(innerBorderStyle, 'width')) {
    innerBorderWidth = innerBorderStyle.width;
  }

  return React__default.createElement(reactNative.View, _extends$a({}, attributes, {
    style: reactNative.StyleSheet.flatten([styles$8.container, containerStyle && containerStyle])
  }), buttons.map((button, i) => {
    const isSelected = selectedIndex === i || selectedIndexes.includes(i);
    const isDisabled = disabled === true || Array.isArray(disabled) && disabled.includes(i);
    return React__default.createElement(reactNative.View, {
      key: i,
      style: reactNative.StyleSheet.flatten([// FIXME: This is a workaround to the borderColor and borderRadius bug
      // react-native ref: https://github.com/facebook/react-native/issues/8236
      styles$8.button, i < buttons.length - 1 && {
        borderRightWidth: i === 0 ? 0 : innerBorderWidth,
        borderRightColor: innerBorderStyle && innerBorderStyle.color || theme.colors.grey4
      }, i === 1 && {
        borderLeftWidth: innerBorderWidth,
        borderLeftColor: innerBorderStyle && innerBorderStyle.color || theme.colors.grey4
      }, i === buttons.length - 1 && { ...lastBorderStyle,
        borderTopRightRadius: containerBorderRadius,
        borderBottomRightRadius: containerBorderRadius
      }, i === 0 && {
        borderTopLeftRadius: containerBorderRadius,
        borderBottomLeftRadius: containerBorderRadius
      }])
    }, React__default.createElement(Component, {
      testID: "buttonGroupItem",
      activeOpacity: activeOpacity,
      setOpacityTo: setOpacityTo,
      onHideUnderlay: onHideUnderlay,
      onShowUnderlay: onShowUnderlay,
      underlayColor: underlayColor,
      disabled: isDisabled,
      onPress: () => {
        if (selectMultiple) {
          if (selectedIndexes.includes(i)) {
            onPress(selectedIndexes.filter(index => index !== i));
          } else {
            onPress([...selectedIndexes, i]);
          }
        } else {
          onPress(i);
        }
      },
      style: styles$8.button
    }, React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$8.textContainer, buttonStyle && buttonStyle, isSelected && {
        backgroundColor: theme.colors.primary
      }, isSelected && selectedButtonStyle && selectedButtonStyle, isDisabled && styles$8.disabled, isDisabled && disabledStyle, isDisabled && isSelected && styles$8.disabledSelected(theme), isDisabled && isSelected && disabledSelectedStyle])
    }, button.element ? React__default.createElement(button.element, null) : React__default.createElement(Text, {
      testID: "buttonGroupItemText",
      style: reactNative.StyleSheet.flatten([styles$8.buttonText(theme), textStyle && textStyle, isSelected && {
        color: '#fff'
      }, isSelected && selectedTextStyle, isDisabled && styles$8.disabledText(theme), isDisabled && disabledTextStyle, isDisabled && isSelected && disabledSelectedTextStyle])
    }, button))));
  }));
};

const styles$8 = {
  button: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: 40
  },
  buttonText: theme => ({
    fontSize: normalize(13),
    color: theme.colors.grey2,
    ...reactNative.Platform.select({
      android: {},
      default: {
        fontWeight: '500'
      }
    })
  }),
  disabled: {
    backgroundColor: 'transparent'
  },
  disabledText: theme => ({
    color: color(theme.colors.disabled).darken(0.3).toString()
  }),
  disabledSelected: theme => ({
    backgroundColor: theme.colors.disabled
  })
};
ButtonGroup.propTypes = {
  button: propTypes.object,
  Component: propTypes.elementType,
  onPress: propTypes.func,
  buttons: propTypes.array,
  containerStyle: ViewPropTypes.style,
  textStyle: reactNative.Text.propTypes.style,
  selectedTextStyle: reactNative.Text.propTypes.style,
  selectedButtonStyle: ViewPropTypes.style,
  underlayColor: propTypes.string,
  selectedIndex: propTypes.number,
  selectedIndexes: propTypes.arrayOf(propTypes.number),
  activeOpacity: propTypes.number,
  onHideUnderlay: propTypes.func,
  onShowUnderlay: propTypes.func,
  setOpacityTo: propTypes.func,
  innerBorderStyle: propTypes.shape({
    color: propTypes.string,
    width: propTypes.number
  }),
  lastBorderStyle: propTypes.oneOfType([ViewPropTypes.style, reactNative.Text.propTypes.style]),
  buttonStyle: ViewPropTypes.style,
  containerBorderRadius: propTypes.number,
  selectMultiple: propTypes.bool,
  theme: propTypes.object,
  disabled: propTypes.oneOfType([propTypes.bool, propTypes.arrayOf(propTypes.number)]),
  disabledStyle: ViewPropTypes.style,
  disabledTextStyle: reactNative.Text.propTypes.style,
  disabledSelectedStyle: ViewPropTypes.style,
  disabledSelectedTextStyle: reactNative.Text.propTypes.style
};
ButtonGroup.defaultProps = {
  selectedIndex: null,
  selectedIndexes: [],
  selectMultiple: false,
  containerBorderRadius: 3,
  disabled: false,
  Component: reactNative.Platform.select({
    android: reactNative.TouchableNativeFeedback,
    default: reactNative.TouchableOpacity
  }),
  onPress: () => null
};
var ButtonGroup$1 = withTheme(ButtonGroup, 'ButtonGroup');

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }
const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';
const chevronDefaultProps = {
  type: reactNative.Platform.OS === 'ios' ? 'ionicon' : 'material',
  color: '#D1D1D6',
  name: reactNative.Platform.OS === 'ios' ? 'ios-arrow-forward' : 'keyboard-arrow-right',
  size: 16
};

const checkmarkDefaultProps = theme => ({
  name: 'check',
  size: 20,
  color: theme.colors.primary
});

const renderText$1 = (content, defaultProps, style) => renderNode(Text, content, { ...defaultProps,
  style: reactNative.StyleSheet.flatten([style, defaultProps && defaultProps.style])
});

const renderAvatar = content => renderNode(Avatar$1, content, {
  size: 40,
  rounded: true
});

const renderIcon = content => renderNode(Icon$1, content, {
  color: reactNative.Platform.OS === 'ios' ? null : ANDROID_SECONDARY,
  size: 24
});

const ListItem = props => {
  const {
    title,
    titleStyle,
    titleProps,
    subtitle,
    subtitleStyle,
    subtitleProps,
    containerStyle,
    onPress,
    onLongPress,
    Component = onPress || onLongPress ? reactNative.TouchableHighlight : reactNative.View,
    leftIcon,
    leftAvatar,
    leftElement,
    rightIcon,
    rightAvatar,
    rightElement,
    rightTitle,
    rightTitleStyle,
    rightTitleProps,
    rightSubtitle,
    rightSubtitleStyle,
    rightSubtitleProps,
    input,
    buttonGroup,
    switch: switchProps,
    // switch is a reserved keyword
    checkBox,
    badge,
    chevron,
    contentContainerStyle,
    rightContentContainerStyle,
    checkmark,
    disabled,
    disabledStyle,
    bottomDivider,
    topDivider,
    pad,
    linearGradientProps,
    ViewComponent = linearGradientProps && global.Expo ? global.Expo.LinearGradient : reactNative.View,
    theme,
    ...attributes
  } = props;
  return React__default.createElement(Component, _extends$b({}, attributes, {
    onPress: onPress,
    onLongPress: onLongPress,
    disabled: disabled
  }), React__default.createElement(PadView, _extends$b({
    Component: ViewComponent
  }, linearGradientProps, {
    style: reactNative.StyleSheet.flatten([styles$9.container(theme), (buttonGroup || switchProps) && {
      paddingVertical: 8
    }, topDivider && {
      borderTopWidth: reactNative.StyleSheet.hairlineWidth
    }, bottomDivider && {
      borderBottomWidth: reactNative.StyleSheet.hairlineWidth
    }, containerStyle, disabled && disabledStyle]),
    pad: pad
  }), renderNode(Text, leftElement), renderIcon(leftIcon), renderAvatar(leftAvatar), (typeof title !== 'undefined' || subtitle) && React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles$9.contentContainer, contentContainerStyle])
  }, renderText$1(title, {
    testID: 'listItemTitle',
    ...titleProps
  }, reactNative.StyleSheet.flatten([styles$9.title, titleStyle])), renderText$1(subtitle, subtitleProps, reactNative.StyleSheet.flatten([styles$9.subtitle, subtitleStyle]))), (!!rightTitle || !!rightSubtitle) && React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles$9.rightContentContainer, rightContentContainerStyle])
  }, renderText$1(rightTitle, rightTitleProps, reactNative.StyleSheet.flatten([styles$9.title, styles$9.rightTitle, rightTitleStyle])), renderText$1(rightSubtitle, rightSubtitleProps, reactNative.StyleSheet.flatten([styles$9.subtitle, styles$9.rightSubtitle, rightSubtitleStyle]))), input && React__default.createElement(Input$1, _extends$b({}, input, {
    inputStyle: reactNative.StyleSheet.flatten([styles$9.input, input && input.inputStyle]),
    inputContainerStyle: reactNative.StyleSheet.flatten([styles$9.inputContentContainer, input && input.inputContainerStyle]),
    containerStyle: reactNative.StyleSheet.flatten([styles$9.inputContainer, input && input.containerStyle])
  })), switchProps && React__default.createElement(reactNative.Switch, switchProps), checkBox && React__default.createElement(CheckBox$1, _extends$b({}, checkBox, {
    containerStyle: reactNative.StyleSheet.flatten([styles$9.checkboxContainer, checkBox && checkBox.containerStyle])
  })), badge && React__default.createElement(Badge$1, badge), buttonGroup && React__default.createElement(ButtonGroup$1, _extends$b({}, buttonGroup, {
    containerStyle: reactNative.StyleSheet.flatten([styles$9.buttonGroupContainer, buttonGroup && buttonGroup.containerStyle])
  })), renderAvatar(rightAvatar), renderIcon(rightIcon), renderNode(Text, rightElement), renderNode(Icon$1, checkmark, checkmarkDefaultProps(theme)), renderNode(Icon$1, chevron, chevronDefaultProps)));
};

const styles$9 = {
  container: theme => ({ ...reactNative.Platform.select({
      ios: {
        padding: 14
      },
      default: {
        padding: 16
      }
    }),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: theme.colors.divider
  }),
  title: {
    backgroundColor: 'transparent',
    ...reactNative.Platform.select({
      ios: {
        fontSize: 17
      },
      default: {
        fontSize: 16
      }
    })
  },
  subtitle: {
    backgroundColor: 'transparent',
    ...reactNative.Platform.select({
      ios: {
        fontSize: 15
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 14
      }
    })
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  rightContentContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  inputContainer: {
    flex: 1,
    paddingRight: 0
  },
  inputContentContainer: {
    flex: 1,
    borderBottomWidth: 0,
    width: null,
    height: null
  },
  input: {
    flex: 1,
    textAlign: 'right',
    width: null,
    height: null
  },
  checkboxContainer: {
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    padding: 0
  },
  buttonGroupContainer: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0
  },
  rightTitle: {
    color: ANDROID_SECONDARY
  },
  rightSubtitle: {
    color: ANDROID_SECONDARY
  }
};
ListItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  rightContentContainerStyle: ViewPropTypes.style,
  Component: propTypes.elementType,
  onPress: propTypes.func,
  onLongPress: propTypes.func,
  title: propTypes.oneOfType([propTypes.string, propTypes.element]),
  titleStyle: TextPropTypes.style,
  titleProps: propTypes.object,
  subtitle: propTypes.oneOfType([propTypes.string, propTypes.element]),
  subtitleStyle: TextPropTypes.style,
  subtitleProps: propTypes.object,
  leftIcon: nodeType,
  leftAvatar: nodeType,
  leftElement: nodeType,
  rightIcon: nodeType,
  rightAvatar: nodeType,
  rightElement: nodeType,
  rightTitle: propTypes.oneOfType([propTypes.string, propTypes.element]),
  rightTitleStyle: TextPropTypes.style,
  rightTitleProps: propTypes.object,
  rightSubtitle: propTypes.oneOfType([propTypes.string, propTypes.element]),
  rightSubtitleStyle: TextPropTypes.style,
  rightSubtitleProps: propTypes.object,
  input: propTypes.object,
  buttonGroup: propTypes.object,
  switch: propTypes.object,
  checkBox: propTypes.object,
  badge: propTypes.object,
  chevron: nodeType,
  checkmark: nodeType,
  disabled: propTypes.bool,
  disabledStyle: ViewPropTypes.style,
  topDivider: propTypes.bool,
  bottomDivider: propTypes.bool,
  pad: propTypes.number,
  linearGradientProps: propTypes.object,
  ViewComponent: propTypes.elementType,
  theme: propTypes.object
};
ListItem.defaultProps = {
  pad: 16,
  title: ''
};

class PadView extends React__default.Component {
  constructor(props) {
    super(props);

    _defineProperty$3(this, "setNativeProps", nativeProps => {
      this._root.current.setNativeProps(nativeProps);
    });

    this._root = React__default.createRef();
  }

  render() {
    const {
      children,
      pad,
      Component,
      ...props
    } = this.props;
    const childrens = React__default.Children.toArray(children);
    const {
      length
    } = childrens;
    const Container = Component || reactNative.View;
    return React__default.createElement(Container, _extends$b({}, props, {
      ref: this._root
    }), React__default.Children.map(childrens, (child, index) => child && [child, index !== length - 1 && React__default.createElement(reactNative.View, {
      width: pad
    })]));
  }

}

PadView.propTypes = {
  children: propTypes.node,
  pad: propTypes.number,
  Component: propTypes.elementType
};
var ListItem$1 = withTheme(ListItem, 'ListItem');

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }
const colors$1 = {
  'github-alt': '#000000',
  'google-plus-official': '#dd4b39',
  google: '#dd4b39',
  'reddit-alien': '#fc461e',
  'stack-overflow': '#f27f33',
  angellist: '#1c4082',
  codepen: '#000000',
  envelope: '#000000',
  etsy: '#f2581e',
  facebook: '#3b5998',
  flickr: '#ff0084',
  foursquare: '#0072b1',
  github: '#000000',
  gitlab: '#e14329',
  instagram: '#517fa4',
  linkedin: '#007bb6',
  medium: '#02b875',
  pinterest: '#cb2027',
  quora: '#a82400',
  soundcloud: '#f50',
  steam: '#c6c3c1',
  stumbleupon: '#EB4823',
  tumblr: '#32506d',
  twitch: '#6441A5',
  twitter: '#00aced',
  vimeo: '#aad450',
  vk: '#5181b8',
  wechat: '#7bb32e',
  weibo: '#e6162d',
  wordpress: '#21759b',
  youtube: '#bb0000'
};

const SocialIcon = props => {
  const {
    activityIndicatorStyle,
    button,
    disabled,
    fontFamily,
    fontStyle,
    fontWeight,
    iconColor,
    iconSize,
    iconStyle,
    light,
    loading,
    onLongPress,
    onPress,
    Component = onPress || onLongPress ? reactNative.TouchableHighlight : reactNative.View,
    raised,
    small,
    style,
    title,
    type,
    underlayColor,
    ...attributes
  } = props;
  return React__default.createElement(Component, _extends$c({}, attributes, {
    underlayColor: light ? 'white' : underlayColor || colors$1[type],
    onLongPress: disabled ? null : onLongPress,
    onPress: disabled ? null : onPress,
    disabled: disabled,
    style: reactNative.StyleSheet.flatten([raised && styles$a.raised, styles$a.container, button && styles$a.button, !button && raised && styles$a.icon, !button && !light && !raised && {
      width: iconSize * 2 + 4,
      height: iconSize * 2 + 4,
      borderRadius: iconSize * 2
    }, {
      backgroundColor: colors$1[type]
    }, light && {
      backgroundColor: 'white'
    }, style && style])
  }), React__default.createElement(reactNative.View, {
    style: styles$a.wrapper
  }, React__default.createElement(FAIcon, {
    style: reactNative.StyleSheet.flatten([iconStyle && iconStyle]),
    color: light ? colors$1[type] : iconColor,
    name: type,
    size: iconSize
  }), button && title && React__default.createElement(Text, {
    style: reactNative.StyleSheet.flatten([styles$a.title, light && {
      color: colors$1[type]
    }, fontFamily && {
      fontFamily
    }, fontWeight && {
      fontWeight
    }, fontStyle && fontStyle])
  }, title), loading && React__default.createElement(reactNative.ActivityIndicator, {
    animating: true,
    style: reactNative.StyleSheet.flatten([styles$a.activityIndicatorStyle, activityIndicatorStyle]),
    color: iconColor || 'white',
    size: small && 'small' || 'large'
  })));
};

SocialIcon.propTypes = {
  Component: propTypes.elementType,
  type: propTypes.string,
  button: propTypes.bool,
  onPress: propTypes.func,
  onLongPress: propTypes.func,
  iconStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  iconColor: propTypes.string,
  underlayColor: propTypes.string,
  title: propTypes.string,
  raised: propTypes.bool,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  activityIndicatorStyle: ViewPropTypes.style,
  small: propTypes.string,
  iconSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
  light: propTypes.bool,
  fontWeight: propTypes.string,
  fontStyle: reactNative.Text.propTypes.style,
  fontFamily: propTypes.string
};
SocialIcon.defaultProps = {
  raised: true,
  iconColor: 'white',
  iconSize: 24,
  button: false
};
const styles$a = reactNative.StyleSheet.create({
  container: {
    margin: 7,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    paddingTop: 14,
    paddingBottom: 14
  },
  raised: { ...reactNative.Platform.select({
      android: {
        elevation: 2
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {
          height: 1,
          width: 1
        },
        shadowOpacity: 1,
        shadowRadius: 1
      }
    })
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    marginLeft: 15,
    ...reactNative.Platform.select({
      android: { ...fonts.android.black
      },
      default: {
        fontWeight: 'bold'
      }
    })
  },
  icon: {
    height: 52,
    width: 52
  },
  activityIndicatorStyle: {
    marginHorizontal: 10,
    height: 0
  }
});
var SocialIcon$1 = withTheme(SocialIcon, 'SocialIcon');

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

const Overlay = props => {
  const {
    children,
    isVisible,
    containerStyle,
    overlayStyle,
    windowBackgroundColor,
    overlayBackgroundColor,
    onBackdropPress,
    borderRadius,
    width,
    height,
    fullScreen,
    ...rest
  } = props;
  return React__default.createElement(reactNative.Modal, _extends$d({
    visible: isVisible,
    onRequestClose: onBackdropPress,
    transparent: true
  }, rest), React__default.createElement(reactNative.TouchableWithoutFeedback, {
    onPress: onBackdropPress,
    testID: "RNE__Overlay__backdrop"
  }, React__default.createElement(reactNative.View, {
    testID: "overlayContainer",
    style: reactNative.StyleSheet.flatten([styles$b.backdrop, {
      backgroundColor: windowBackgroundColor
    }, containerStyle])
  })), React__default.createElement(reactNative.View, {
    style: styles$b.container,
    pointerEvents: "box-none"
  }, React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles$b.overlay, {
      borderRadius,
      backgroundColor: overlayBackgroundColor,
      width,
      height
    }, fullScreen && styles$b.fullscreen, overlayStyle])
  }, children)));
};

Overlay.propTypes = {
  children: propTypes.element.isRequired,
  isVisible: propTypes.bool.isRequired,
  containerStyle: ViewPropTypes.style,
  overlayStyle: ViewPropTypes.style,
  windowBackgroundColor: propTypes.string,
  overlayBackgroundColor: propTypes.string,
  onBackdropPress: propTypes.func,
  borderRadius: propTypes.number,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  fullScreen: propTypes.bool
};
Overlay.defaultProps = {
  borderRadius: 3,
  fullScreen: false,
  windowBackgroundColor: 'rgba(0, 0, 0, .4)',
  overlayBackgroundColor: 'white',
  width: ScreenWidth - 80,
  height: ScreenHeight - 180,
  onBackdropPress: () => null
};
const styles$b = reactNative.StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullscreen: {
    width: '100%',
    height: '100%'
  },
  overlay: {
    borderRadius: 5,
    padding: 10,
    ...reactNative.Platform.select({
      android: {
        elevation: 2
      },
      default: {
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 4
      }
    })
  }
});
var Overlay$1 = withTheme(Overlay, 'Overlay');

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const IOS_GRAY = '#7d7d7d';
const defaultSearchIcon = {
  type: 'ionicon',
  size: 20,
  name: 'ios-search',
  color: IOS_GRAY
};
const defaultClearIcon = {
  type: 'ionicon',
  name: 'ios-close-circle',
  size: 20,
  color: IOS_GRAY
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty$4(this, "focus", () => {
      this.input.focus();
    });

    _defineProperty$4(this, "blur", () => {
      this.input.blur();
    });

    _defineProperty$4(this, "clear", () => {
      this.input.clear();
      this.onChangeText('');
      this.props.onClear();
    });

    _defineProperty$4(this, "cancel", () => {
      this.onChangeText('');

      if (this.props.showCancel) {
        reactNative.UIManager.configureNextLayoutAnimation && reactNative.LayoutAnimation.easeInEaseOut();
        this.setState({
          hasFocus: false
        });
      }

      setTimeout(() => {
        this.blur();
        this.props.onCancel();
      }, 0);
    });

    _defineProperty$4(this, "onFocus", () => {
      this.props.onFocus();
      reactNative.UIManager.configureNextLayoutAnimation && reactNative.LayoutAnimation.easeInEaseOut();
      this.setState({
        hasFocus: true,
        isEmpty: this.props.value === ''
      });
    });

    _defineProperty$4(this, "onBlur", () => {
      this.props.onBlur();
      reactNative.UIManager.configureNextLayoutAnimation && reactNative.LayoutAnimation.easeInEaseOut();

      if (!this.props.showCancel) {
        this.setState({
          hasFocus: false
        });
      }
    });

    _defineProperty$4(this, "onChangeText", text => {
      this.props.onChangeText(text);
      this.setState({
        isEmpty: text === ''
      });
    });

    const {
      value
    } = props;
    this.state = {
      hasFocus: false,
      isEmpty: value ? value === '' : true,
      cancelButtonWidth: null
    };
  }

  render() {
    const {
      cancelButtonProps,
      cancelButtonTitle,
      clearIcon,
      containerStyle,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      placeholderTextColor,
      showLoading,
      loadingProps,
      searchIcon,
      showCancel,
      ...attributes
    } = this.props;
    const {
      hasFocus,
      isEmpty
    } = this.state;
    const {
      style: loadingStyle,
      ...otherLoadingProps
    } = loadingProps;
    const {
      buttonStyle,
      buttonTextStyle,
      color: buttonColor,
      disabled: buttonDisabled,
      buttonDisabledStyle,
      buttonDisabledTextStyle,
      ...otherCancelButtonProps
    } = cancelButtonProps;
    return React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$c.container, containerStyle])
    }, React__default.createElement(Input$1, _extends$e({
      testID: "searchInput"
    }, attributes, {
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChangeText: this.onChangeText,
      ref: input => {
        this.input = input;
      },
      inputStyle: reactNative.StyleSheet.flatten([styles$c.input, inputStyle]),
      containerStyle: {
        paddingHorizontal: 0
      },
      inputContainerStyle: reactNative.StyleSheet.flatten([styles$c.inputContainer, hasFocus && {
        marginRight: this.state.cancelButtonWidth
      }, inputContainerStyle]),
      leftIcon: renderNode(Icon$1, searchIcon, defaultSearchIcon),
      leftIconContainerStyle: reactNative.StyleSheet.flatten([styles$c.leftIconContainerStyle, leftIconContainerStyle]),
      placeholderTextColor: placeholderTextColor,
      rightIcon: React__default.createElement(reactNative.View, {
        style: {
          flexDirection: 'row'
        }
      }, showLoading && React__default.createElement(reactNative.ActivityIndicator, _extends$e({
        key: "loading",
        style: reactNative.StyleSheet.flatten([{
          marginRight: 5
        }, loadingStyle])
      }, otherLoadingProps)), !isEmpty && renderNode(Icon$1, clearIcon, { ...defaultClearIcon,
        key: 'cancel',
        onPress: this.clear
      })),
      rightIconContainerStyle: reactNative.StyleSheet.flatten([styles$c.rightIconContainerStyle, rightIconContainerStyle])
    })), React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$c.cancelButtonContainer, {
        opacity: this.state.cancelButtonWidth === null ? 0 : 1,
        right: hasFocus ? 0 : -this.state.cancelButtonWidth
      }]),
      onLayout: event => this.setState({
        cancelButtonWidth: event.nativeEvent.layout.width
      })
    }, React__default.createElement(reactNative.TouchableOpacity, _extends$e({
      accessibilityRole: "button",
      onPress: this.cancel,
      disabled: buttonDisabled
    }, otherCancelButtonProps), React__default.createElement(reactNative.View, {
      style: [buttonStyle, buttonDisabled && buttonDisabledStyle]
    }, React__default.createElement(reactNative.Text, {
      style: [styles$c.buttonTextStyle, buttonColor && {
        color: buttonColor
      }, buttonTextStyle, buttonDisabled && (buttonDisabledTextStyle || styles$c.buttonTextDisabled)],
      disabled: buttonDisabled
    }, cancelButtonTitle)))));
  }

}

SearchBar.propTypes = {
  value: propTypes.string,
  cancelButtonProps: propTypes.object,
  cancelButtonTitle: propTypes.string,
  clearIcon: nodeType,
  searchIcon: nodeType,
  loadingProps: propTypes.object,
  showLoading: propTypes.bool,
  onClear: propTypes.func,
  onCancel: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onChangeText: propTypes.func,
  containerStyle: ViewPropTypes.style,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconContainerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: reactNative.Text.propTypes.style,
  placeholderTextColor: propTypes.string,
  showCancel: propTypes.bool
};
SearchBar.defaultProps = {
  value: '',
  cancelButtonTitle: 'Cancel',
  loadingProps: {},
  cancelButtonProps: {},
  showLoading: false,
  onClear: () => null,
  onCancel: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
  placeholderTextColor: IOS_GRAY,
  searchIcon: defaultSearchIcon,
  clearIcon: defaultClearIcon,
  showCancel: false
};
const styles$c = reactNative.StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingBottom: 13,
    paddingTop: 13,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center'
  },
  input: {
    marginLeft: 6,
    overflow: 'hidden'
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#dcdce1',
    borderRadius: 9,
    minHeight: 36,
    marginLeft: 8,
    marginRight: 8
  },
  rightIconContainerStyle: {
    marginRight: 8
  },
  leftIconContainerStyle: {
    marginLeft: 8
  },
  buttonTextStyle: {
    color: '#007aff',
    textAlign: 'center',
    padding: 8,
    fontSize: 18
  },
  buttonTextDisabled: {
    color: '#cdcdcd'
  },
  cancelButtonContainer: {
    position: 'absolute'
  }
});

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const ANDROID_GRAY = 'rgba(0, 0, 0, 0.54)';
const defaultSearchIcon$1 = {
  type: 'material',
  size: 25,
  color: ANDROID_GRAY,
  name: 'search'
};
const defaultCancelIcon = {
  type: 'material',
  size: 25,
  color: ANDROID_GRAY,
  name: 'arrow-back'
};
const defaultClearIcon$1 = {
  type: 'material',
  size: 25,
  color: ANDROID_GRAY,
  name: 'clear'
};

class SearchBar$1 extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty$5(this, "focus", () => {
      this.input.focus();
    });

    _defineProperty$5(this, "blur", () => {
      this.input.blur();
    });

    _defineProperty$5(this, "clear", () => {
      this.input.clear();
      this.onChangeText('');
      this.props.onClear();
    });

    _defineProperty$5(this, "cancel", () => {
      this.blur();
      this.props.onCancel();
    });

    _defineProperty$5(this, "onFocus", () => {
      this.props.onFocus();
      this.setState({
        hasFocus: true,
        isEmpty: this.props.value === ''
      });
    });

    _defineProperty$5(this, "onBlur", () => {
      this.props.onBlur();
      this.setState({
        hasFocus: false
      });
    });

    _defineProperty$5(this, "onChangeText", text => {
      this.props.onChangeText(text);
      this.setState({
        isEmpty: text === ''
      });
    });

    const {
      value
    } = props;
    this.state = {
      hasFocus: false,
      isEmpty: value ? value === '' : true
    };
  }

  render() {
    const {
      clearIcon,
      containerStyle,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      searchIcon,
      cancelIcon,
      showLoading,
      loadingProps,
      ...attributes
    } = this.props;
    const {
      hasFocus,
      isEmpty
    } = this.state;
    const {
      style: loadingStyle,
      ...otherLoadingProps
    } = loadingProps;
    return React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$d.container, containerStyle])
    }, React__default.createElement(Input$1, _extends$f({
      testID: "searchInput"
    }, attributes, {
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChangeText: this.onChangeText,
      ref: input => {
        this.input = input;
      },
      containerStyle: {
        paddingHorizontal: 0
      },
      inputStyle: reactNative.StyleSheet.flatten([styles$d.input, inputStyle]),
      inputContainerStyle: reactNative.StyleSheet.flatten([styles$d.inputContainer, inputContainerStyle]),
      leftIcon: hasFocus ? renderNode(Icon$1, cancelIcon, { ...defaultCancelIcon,
        onPress: this.cancel
      }) : renderNode(Icon$1, searchIcon, defaultSearchIcon$1),
      leftIconContainerStyle: reactNative.StyleSheet.flatten([styles$d.leftIconContainerStyle, leftIconContainerStyle]),
      rightIcon: React__default.createElement(reactNative.View, {
        style: {
          flexDirection: 'row'
        }
      }, showLoading && React__default.createElement(reactNative.ActivityIndicator, _extends$f({
        key: "loading",
        style: reactNative.StyleSheet.flatten([{
          marginRight: 5
        }, loadingStyle])
      }, otherLoadingProps)), !isEmpty && renderNode(Icon$1, clearIcon, { ...defaultClearIcon$1,
        key: 'cancel',
        onPress: this.clear
      })),
      rightIconContainerStyle: reactNative.StyleSheet.flatten([styles$d.rightIconContainerStyle, rightIconContainerStyle])
    })));
  }

}

SearchBar$1.propTypes = {
  value: propTypes.string,
  clearIcon: nodeType,
  searchIcon: nodeType,
  cancelIcon: nodeType,
  loadingProps: propTypes.object,
  showLoading: propTypes.bool,
  containerStyle: ViewPropTypes.style,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconContainerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: reactNative.Text.propTypes.style,
  onClear: propTypes.func,
  onCancel: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onChangeText: propTypes.func
};
SearchBar$1.defaultProps = {
  value: '',
  loadingProps: {},
  showLoading: false,
  onClear: () => null,
  onCancel: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
  searchIcon: defaultSearchIcon$1,
  clearIcon: defaultClearIcon$1,
  cancelIcon: defaultCancelIcon
};
const styles$d = reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 8,
    paddingBottom: 8
  },
  input: {
    marginLeft: 24,
    marginRight: 8
  },
  inputContainer: {
    borderBottomWidth: 0,
    width: '100%'
  },
  rightIconContainerStyle: {
    marginRight: 8
  },
  leftIconContainerStyle: {
    marginLeft: 8
  }
});

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultSearchIcon$2 = theme => ({
  type: 'material',
  size: 18,
  name: 'search',
  color: theme.colors.grey3
});

const defaultClearIcon$2 = theme => ({
  type: 'material',
  size: 18,
  name: 'clear',
  color: theme.colors.grey3
});

class SearchBar$2 extends React__default.Component {
  constructor(props) {
    super(props);

    _defineProperty$6(this, "focus", () => {
      this.input.focus();
    });

    _defineProperty$6(this, "blur", () => {
      this.input.blur();
    });

    _defineProperty$6(this, "clear", () => {
      this.input.clear();
      this.onChangeText('');
      this.props.onClear();
    });

    _defineProperty$6(this, "onFocus", () => {
      this.props.onFocus();
      this.setState({
        isEmpty: this.props.value === ''
      });
    });

    _defineProperty$6(this, "onBlur", () => {
      this.props.onBlur();
    });

    _defineProperty$6(this, "onChangeText", text => {
      this.props.onChangeText(text);
      this.setState({
        isEmpty: text === ''
      });
    });

    const {
      value
    } = props;
    this.state = {
      isEmpty: value ? value === '' : true
    };
  }

  render() {
    const {
      theme,
      ...rest
    } = this.props;
    const {
      lightTheme,
      round,
      clearIcon = defaultClearIcon$2(theme),
      containerStyle,
      searchIcon = defaultSearchIcon$2(theme),
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      showLoading,
      loadingProps,
      placeholderTextColor = theme.colors.grey3,
      ...attributes
    } = rest;
    const {
      isEmpty
    } = this.state;
    const {
      style: loadingStyle,
      ...otherLoadingProps
    } = loadingProps;
    return React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$e.container(theme), lightTheme && styles$e.containerLight(theme), containerStyle])
    }, React__default.createElement(Input$1, _extends$g({
      testID: "searchInput"
    }, attributes, {
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChangeText: this.onChangeText,
      ref: input => {
        this.input = input;
      },
      placeholderTextColor: placeholderTextColor,
      inputStyle: reactNative.StyleSheet.flatten([styles$e.inputStyle(theme), inputStyle]),
      inputContainerStyle: reactNative.StyleSheet.flatten([styles$e.inputContentContainer(theme), lightTheme && styles$e.inputContentContainerLight(theme), round && styles$e.round, inputContainerStyle]),
      containerStyle: styles$e.inputContainer,
      leftIcon: renderNode(Icon$1, searchIcon, defaultSearchIcon$2(theme)),
      leftIconContainerStyle: reactNative.StyleSheet.flatten([styles$e.leftIconContainerStyle, leftIconContainerStyle]),
      rightIcon: React__default.createElement(reactNative.View, {
        style: {
          flexDirection: 'row'
        }
      }, showLoading && React__default.createElement(reactNative.ActivityIndicator, _extends$g({
        key: "loading",
        style: reactNative.StyleSheet.flatten([{
          marginRight: 5
        }, loadingStyle])
      }, otherLoadingProps)), !isEmpty && renderNode(Icon$1, clearIcon, { ...defaultClearIcon$2(theme),
        key: 'cancel',
        onPress: this.clear
      })),
      rightIconContainerStyle: reactNative.StyleSheet.flatten([styles$e.rightIconContainerStyle, rightIconContainerStyle])
    })));
  }

}

SearchBar$2.propTypes = {
  value: propTypes.string,
  clearIcon: nodeType,
  searchIcon: nodeType,
  loadingProps: propTypes.object,
  showLoading: propTypes.bool,
  containerStyle: ViewPropTypes.style,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconContainerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: reactNative.Text.propTypes.style,
  onClear: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onChangeText: propTypes.func,
  placeholderTextColor: propTypes.string,
  lightTheme: propTypes.bool,
  round: propTypes.bool,
  theme: propTypes.object
};
SearchBar$2.defaultProps = {
  value: '',
  loadingProps: {},
  showLoading: false,
  lightTheme: false,
  round: false,
  onClear: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null
};
const styles$e = {
  container: theme => ({
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    padding: 8,
    backgroundColor: theme.colors.grey0
  }),
  rightIconContainerStyle: {
    marginRight: 8
  },
  leftIconContainerStyle: {
    marginLeft: 8
  },
  containerLight: theme => ({
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
    backgroundColor: theme.colors.grey5
  }),
  inputContainer: {
    paddingHorizontal: 0
  },
  inputStyle: theme => ({
    color: theme.colors.grey3,
    marginLeft: 10
  }),
  inputContentContainer: theme => ({
    borderBottomWidth: 0,
    borderRadius: 3,
    overflow: 'hidden',
    minHeight: 30,
    backgroundColor: theme.colors.searchBg
  }),
  inputContentContainerLight: theme => ({
    backgroundColor: theme.colors.grey4
  }),
  round: {
    borderRadius: 15
  }
};

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const SEARCHBAR_COMPONENTS = {
  ios: SearchBar,
  android: SearchBar$1,
  default: SearchBar$2
};

class SearchBar$3 extends React__default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty$7(this, "focus", () => {
      this.searchbar.focus();
    });

    _defineProperty$7(this, "blur", () => {
      this.searchbar.blur();
    });

    _defineProperty$7(this, "clear", () => {
      this.searchbar.clear();
    });

    _defineProperty$7(this, "cancel", () => {
      this.searchbar.cancel && this.searchbar.cancel();
    });
  }

  render() {
    const Component = SEARCHBAR_COMPONENTS[this.props.platform] || SearchBar$2;
    return React__default.createElement(Component, _extends$h({
      ref: ref => {
        this.searchbar = ref;
      }
    }, this.props));
  }

}

SearchBar$3.propTypes = {
  platform: propTypes.oneOf(['default', 'ios', 'android'])
};
SearchBar$3.defaultProps = {
  platform: 'default'
};
var SearchBar$4 = withTheme(SearchBar$3, 'SearchBar');

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

const withBadge = (value, options = {}) => WrappedComponent => {
  const WithBadge = props => {
    const {
      bottom,
      hidden = false,
      left,
      containerStyle,
      ...badgeProps
    } = options;
    let {
      right = -16,
      top = -1
    } = options;

    if (!value) {
      right = -3;
      top = 3;
    }

    const badgeValue = typeof value === 'function' ? value(props) : value;
    return React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([styles$f.container, containerStyle])
    }, React__default.createElement(WrappedComponent, props), !hidden && React__default.createElement(Badge$1, _extends$i({
      value: badgeValue,
      status: "error",
      containerStyle: reactNative.StyleSheet.flatten([styles$f.badgeContainer, {
        bottom,
        left,
        right,
        top
      }])
    }, badgeProps)));
  };

  WithBadge.displayName = `WithBadge(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithBadge;
};

const styles$f = reactNative.StyleSheet.create({
  badgeContainer: {
    position: 'absolute'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
});

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

const Divider = ({
  style,
  theme,
  ...rest
}) => React__default.createElement(reactNative.View, _extends$j({
  style: reactNative.StyleSheet.flatten([styles$g.container(theme), style])
}, rest));

Divider.propTypes = {
  style: ViewPropTypes.style,
  theme: propTypes.object
};
const styles$g = {
  container: theme => ({
    backgroundColor: theme.colors.divider,
    height: reactNative.StyleSheet.hairlineWidth
  })
};
var Divider$1 = withTheme(Divider, 'Divider');

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const TRACK_SIZE = 4;
const THUMB_SIZE = 20;
const DEFAULT_ANIMATION_CONFIGS = {
  spring: {
    friction: 7,
    tension: 100
  },
  timing: {
    duration: 150,
    easing: reactNative.Easing.inOut(reactNative.Easing.ease),
    delay: 0
  }
};

const getBoundedValue = ({
  value,
  maximumValue,
  minimumValue
}) => value > maximumValue ? maximumValue : value < minimumValue ? minimumValue : value;

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  containsPoint(x, y) {
    return x >= this.x && y >= this.y && x <= this.x + this.width && y <= this.y + this.height;
  }

}

class Slider extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty$8(this, "measureContainer", x => {
      this.handleMeasure('containerSize', x);
    });

    _defineProperty$8(this, "measureTrack", x => {
      this.handleMeasure('trackSize', x);
    });

    _defineProperty$8(this, "measureThumb", x => {
      this.handleMeasure('thumbSize', x);
    });

    this.state = {
      containerSize: {
        width: 0,
        height: 0
      },
      trackSize: {
        width: 0,
        height: 0
      },
      thumbSize: {
        width: 0,
        height: 0
      },
      allMeasured: false,
      value: new reactNative.Animated.Value(getBoundedValue(props))
    };
    this.panResponder = reactNative.PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(this),
      onPanResponderGrant: this.handlePanResponderGrant.bind(this),
      onPanResponderMove: this.handlePanResponderMove.bind(this),
      onPanResponderRelease: this.handlePanResponderEnd.bind(this),
      onPanResponderTerminationRequest: this.handlePanResponderRequestEnd.bind(this),
      onPanResponderTerminate: this.handlePanResponderEnd.bind(this)
    });
  }

  componentDidUpdate(prevProps) {
    const newValue = getBoundedValue(this.props);

    if (prevProps.value !== newValue) {
      if (this.props.animateTransitions) {
        this.setCurrentValueAnimated(newValue);
      } else {
        this.setCurrentValue(newValue);
      }
    }
  }

  setCurrentValue(value) {
    this.state.value.setValue(value);
  }

  setCurrentValueAnimated(value) {
    const {
      animationType
    } = this.props;
    const animationConfig = Object.assign({}, DEFAULT_ANIMATION_CONFIGS[animationType], this.props.animationConfig, {
      toValue: value
    });
    reactNative.Animated[animationType](this.state.value, animationConfig).start();
  }

  handleMoveShouldSetPanResponder()
  /* e: Object, gestureState: Object */
  {
    // Should we become active when the user moves a touch over the thumb?
    return false;
  }

  handlePanResponderGrant()
  /* e: Object, gestureState: Object */
  {
    this._previousLeft = this.getThumbLeft(this.getCurrentValue());
    this.fireChangeEvent('onSlidingStart');
  }

  handlePanResponderMove(_, gestureState) {
    if (this.props.disabled) {
      return;
    }

    this.setCurrentValue(this.getValue(gestureState));
    this.fireChangeEvent('onValueChange');
  }

  handlePanResponderRequestEnd() {
    // Should we allow another component to take over this pan?
    return false;
  }

  handlePanResponderEnd(_, gestureState) {
    if (this.props.disabled) {
      return;
    }

    this.setCurrentValue(this.getValue(gestureState));
    this.fireChangeEvent('onSlidingComplete');
  }

  thumbHitTest({
    nativeEvent
  }) {
    const thumbTouchRect = this.getThumbTouchRect();
    return thumbTouchRect.containsPoint(nativeEvent.locationX, nativeEvent.locationY);
  }

  handleStartShouldSetPanResponder(e
  /* gestureState: Object */
  ) {
    // Should we become active when the user presses down on the thumb?
    return this.thumbHitTest(e);
  }

  fireChangeEvent(event) {
    if (this.props[event]) {
      this.props[event](this.getCurrentValue());
    }
  }

  getTouchOverflowSize() {
    const {
      thumbSize,
      allMeasured,
      containerSize
    } = this.state;
    const {
      thumbTouchSize
    } = this.props;
    const size = {};

    if (allMeasured === true) {
      size.width = Math.max(0, thumbTouchSize.width - thumbSize.width);
      size.height = Math.max(0, thumbTouchSize.height - containerSize.height);
    }

    return size;
  }

  getTouchOverflowStyle() {
    const {
      width,
      height
    } = this.getTouchOverflowSize();
    const touchOverflowStyle = {};

    if (width !== undefined && height !== undefined) {
      const verticalMargin = -height / 2;
      touchOverflowStyle.marginTop = verticalMargin;
      touchOverflowStyle.marginBottom = verticalMargin;
      const horizontalMargin = -width / 2;
      touchOverflowStyle.marginLeft = horizontalMargin;
      touchOverflowStyle.marginRight = horizontalMargin;
    }

    if (this.props.debugTouchArea === true) {
      touchOverflowStyle.backgroundColor = 'orange';
      touchOverflowStyle.opacity = 0.5;
    }

    return touchOverflowStyle;
  }

  handleMeasure(name, x) {
    const {
      width: layoutWidth,
      height: layoutHeight
    } = x.nativeEvent.layout;
    const width = this.props.orientation === 'vertical' ? layoutHeight : layoutWidth;
    const height = this.props.orientation === 'vertical' ? layoutWidth : layoutHeight;
    const size = {
      width,
      height
    };
    const storeName = `_${name}`;
    const currentSize = this[storeName];

    if (currentSize && width === currentSize.width && height === currentSize.height) {
      return;
    }

    this[storeName] = size;

    if (this._containerSize && this._trackSize && this._thumbSize) {
      this.setState({
        containerSize: this._containerSize,
        trackSize: this._trackSize,
        thumbSize: this._thumbSize,
        allMeasured: true
      });
    }
  }

  getValue(gestureState) {
    const length = this.state.containerSize.width - this.state.thumbSize.width;
    const thumbLeft = this._previousLeft + (this.props.orientation === 'vertical' ? gestureState.dy : gestureState.dx);
    const ratio = thumbLeft / length;

    if (this.props.step) {
      return Math.max(this.props.minimumValue, Math.min(this.props.maximumValue, this.props.minimumValue + Math.round(ratio * (this.props.maximumValue - this.props.minimumValue) / this.props.step) * this.props.step));
    }

    return Math.max(this.props.minimumValue, Math.min(this.props.maximumValue, ratio * (this.props.maximumValue - this.props.minimumValue) + this.props.minimumValue));
  }

  getCurrentValue() {
    return this.state.value.__getValue();
  }

  getRatio(value) {
    return (value - this.props.minimumValue) / (this.props.maximumValue - this.props.minimumValue);
  }

  getThumbLeft(value) {
    const ratio = this.getRatio(value);
    return ratio * (this.state.containerSize.width - this.state.thumbSize.width);
  }

  getThumbTouchRect() {
    const {
      thumbSize,
      containerSize
    } = this.state;
    const {
      thumbTouchSize
    } = this.props;
    const touchOverflowSize = this.getTouchOverflowSize();

    if (this.props.orientation === 'vertical') {
      return new Rect(touchOverflowSize.height / 2 + (containerSize.height - thumbTouchSize.height) / 2, touchOverflowSize.width / 2 + this.getThumbLeft(this.getCurrentValue()) + (thumbSize.width - thumbTouchSize.width) / 2, thumbTouchSize.width, thumbTouchSize.height);
    }

    return new Rect(touchOverflowSize.width / 2 + this.getThumbLeft(this.getCurrentValue()) + (thumbSize.width - thumbTouchSize.width) / 2, touchOverflowSize.height / 2 + (containerSize.height - thumbTouchSize.height) / 2, thumbTouchSize.width, thumbTouchSize.height);
  }

  renderDebugThumbTouchRect(thumbLeft) {
    const thumbTouchRect = this.getThumbTouchRect();
    const positionStyle = {
      left: thumbLeft,
      top: thumbTouchRect.y,
      width: thumbTouchRect.width,
      height: thumbTouchRect.height
    };
    return React__default.createElement(reactNative.Animated.View, {
      style: positionStyle,
      pointerEvents: "none"
    });
  }

  getMinimumTrackStyles(thumbStart) {
    const {
      thumbSize,
      trackSize
    } = this.state;
    const minimumTrackStyle = {
      position: 'absolute'
    };

    if (this.props.orientation === 'vertical') {
      minimumTrackStyle.height = reactNative.Animated.add(thumbStart, thumbSize.height / 2);
      minimumTrackStyle.marginLeft = -trackSize.width;
    } else {
      minimumTrackStyle.width = reactNative.Animated.add(thumbStart, thumbSize.width / 2);
      minimumTrackStyle.marginTop = -trackSize.height;
    }

    return minimumTrackStyle;
  }

  getThumbPositionStyles(thumbStart) {
    if (this.props.orientation === 'vertical') {
      return [{
        translateX: -(this.state.trackSize.height + this.state.thumbSize.height) / 2
      }, {
        translateY: thumbStart
      }];
    }

    return [{
      translateX: thumbStart
    }, {
      translateY: -(this.state.trackSize.height + this.state.thumbSize.height) / 2
    }];
  }

  render() {
    const {
      minimumValue,
      maximumValue,
      minimumTrackTintColor,
      maximumTrackTintColor,
      thumbTintColor,
      containerStyle,
      style,
      trackStyle,
      thumbStyle,
      debugTouchArea,
      orientation,
      ...other
    } = this.props;
    const {
      value,
      containerSize,
      thumbSize,
      allMeasured
    } = this.state;
    const mainStyles = containerStyle || styles$h;
    const thumbStart = value.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, containerSize.width - thumbSize.width] // extrapolate: 'clamp',

    });
    const valueVisibleStyle = {};

    if (!allMeasured) {
      valueVisibleStyle.height = 0;
      valueVisibleStyle.width = 0;
    }

    const minimumTrackStyle = { ...this.getMinimumTrackStyles(thumbStart),
      backgroundColor: minimumTrackTintColor,
      ...valueVisibleStyle
    };
    const thumbStyleTransform = thumbStyle && thumbStyle.transform || [];
    const touchOverflowStyle = this.getTouchOverflowStyle();
    return React__default.createElement(reactNative.View, _extends$k({}, other, {
      style: reactNative.StyleSheet.flatten([orientation === 'vertical' ? mainStyles.containerVertical : mainStyles.containerHorizontal, style]),
      onLayout: this.measureContainer
    }), React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([mainStyles.track, orientation === 'vertical' ? mainStyles.trackVertical : mainStyles.trackHorizontal, trackStyle, {
        backgroundColor: maximumTrackTintColor
      }]),
      onLayout: this.measureTrack
    }), React__default.createElement(reactNative.Animated.View, {
      style: reactNative.StyleSheet.flatten([mainStyles.track, orientation === 'vertical' ? mainStyles.trackVertical : mainStyles.trackHorizontal, trackStyle, minimumTrackStyle])
    }), React__default.createElement(reactNative.Animated.View, {
      testID: "sliderThumb",
      onLayout: this.measureThumb,
      style: reactNative.StyleSheet.flatten([{
        backgroundColor: thumbTintColor
      }, mainStyles.thumb, orientation === 'vertical' ? mainStyles.thumbVertical(trackStyle && trackStyle.width) : mainStyles.thumbHorizontal(trackStyle && trackStyle.height), thumbStyle, {
        transform: [...this.getThumbPositionStyles(thumbStart), ...thumbStyleTransform],
        ...valueVisibleStyle
      }])
    }), React__default.createElement(reactNative.View, _extends$k({
      style: reactNative.StyleSheet.flatten([styles$h.touchArea, touchOverflowStyle])
    }, this.panResponder.panHandlers), debugTouchArea === true && this.renderDebugThumbTouchRect(thumbStart)));
  }

}

Slider.propTypes = {
  /**
   * Initial value of the slider. The value should be between minimumValue
   * and maximumValue, which default to 0 and 1 respectively.
   * Default value is 0.
   *
   * *This is not a controlled component*, e.g. if you don't update
   * the value, the component won't be reset to its inital value.
   */
  value: propTypes.number,

  /**
   * If true the user won't be able to move the slider.
   * Default value is false.
   */
  disabled: propTypes.bool,

  /**
   * Initial minimum value of the slider. Default value is 0.
   */
  minimumValue: propTypes.number,

  /**
   * Initial maximum value of the slider. Default value is 1.
   */
  maximumValue: propTypes.number,

  /**
   * Step value of the slider. The value should be between 0 and
   * (maximumValue - minimumValue). Default value is 0.
   */
  step: propTypes.number,

  /**
   * The color used for the track to the left of the button. Overrides the
   * default blue gradient image.
   */
  minimumTrackTintColor: propTypes.string,

  /**
   * The color used for the track to the right of the button. Overrides the
   * default blue gradient image.
   */
  maximumTrackTintColor: propTypes.string,

  /**
   * The color used for the thumb.
   */
  thumbTintColor: propTypes.string,

  /**
   * The size of the touch area that allows moving the thumb.
   * The touch area has the same center has the visible thumb.
   * This allows to have a visually small thumb while still allowing the user
   * to move it easily.
   * The default is {width: 40, height: 40}.
   */
  thumbTouchSize: propTypes.shape({
    width: propTypes.number,
    height: propTypes.number
  }),

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange: propTypes.func,

  /**
   * Callback called when the user starts changing the value (e.g. when
   * the slider is pressed).
   */
  onSlidingStart: propTypes.func,

  /**
   * Callback called when the user finishes changing the value (e.g. when
   * the slider is released).
   */
  onSlidingComplete: propTypes.func,

  /**
   * The style applied to the slider container.
   */
  style: ViewPropTypes.style,

  /**
   * The style applied to the track.
   */
  trackStyle: ViewPropTypes.style,

  /**
   * The style applied to the thumb.
   */
  thumbStyle: ViewPropTypes.style,

  /**
   * Set this to true to visually see the thumb touch rect in green.
   */
  debugTouchArea: propTypes.bool,

  /**
   * Set to true to animate values with default 'timing' animation type
   */
  animateTransitions: propTypes.bool,

  /**
   * Custom Animation type. 'spring' or 'timing'.
   */
  animationType: propTypes.oneOf(['spring', 'timing']),

  /**
   * Choose the orientation. 'horizontal' or 'vertical'.
   */
  orientation: propTypes.oneOf(['horizontal', 'vertical']),

  /**
   * Used to configure the animation parameters.  These are the same parameters in the Animated library.
   */
  animationConfig: propTypes.object,
  containerStyle: ViewPropTypes.style
};
Slider.defaultProps = {
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
  minimumTrackTintColor: '#3f3f3f',
  maximumTrackTintColor: '#b3b3b3',
  thumbTintColor: 'red',
  thumbTouchSize: {
    width: 40,
    height: 40
  },
  debugTouchArea: false,
  animationType: 'timing',
  orientation: 'horizontal'
};
const styles$h = reactNative.StyleSheet.create({
  containerHorizontal: {
    height: 40,
    justifyContent: 'center'
  },
  containerVertical: {
    width: 40,
    flexDirection: 'column',
    alignItems: 'center'
  },
  track: {
    borderRadius: TRACK_SIZE / 2
  },
  trackHorizontal: {
    height: TRACK_SIZE
  },
  trackVertical: {
    flex: 1,
    width: TRACK_SIZE
  },
  thumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2
  },
  thumbHorizontal: height => ({
    top: 22 + (height ? (height - 4) / 2 : 0)
  }),
  thumbVertical: width => ({
    left: 22 + (width ? (width - 4) / 2 : 0)
  }),
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  debugThumbTouchArea: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.5
  }
});
var Slider$1 = withTheme(Slider, 'Slider');

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

const Card = props => {
  const {
    children,
    containerStyle,
    wrapperStyle,
    imageWrapperStyle,
    title,
    titleStyle,
    titleNumberOfLines,
    featuredTitle,
    featuredTitleStyle,
    featuredSubtitle,
    featuredSubtitleStyle,
    dividerStyle,
    image,
    imageStyle,
    imageProps,
    theme,
    ...attributes
  } = props;
  return React__default.createElement(reactNative.View, _extends$l({}, attributes, {
    style: reactNative.StyleSheet.flatten([styles$i.container(theme), image && {
      padding: 0
    }, containerStyle && containerStyle])
  }), React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles$i.wrapper, wrapperStyle && wrapperStyle])
  }, title === '' || React__default.isValidElement(title) ? title : title && title.length && React__default.createElement(reactNative.View, null, React__default.createElement(Text, {
    testID: "cardTitle",
    style: reactNative.StyleSheet.flatten([styles$i.cardTitle(theme), image && styles$i.imageCardTitle, titleStyle && titleStyle]),
    numberOfLines: titleNumberOfLines
  }, title), !image && React__default.createElement(Divider$1, {
    style: reactNative.StyleSheet.flatten([styles$i.divider, dividerStyle && dividerStyle])
  })), image && React__default.createElement(reactNative.View, {
    style: imageWrapperStyle && imageWrapperStyle
  }, React__default.createElement(Image$1, _extends$l({
    style: [{
      width: null,
      height: 150
    }, imageStyle && imageStyle],
    source: image
  }, imageProps), (featuredTitle || featuredSubtitle) && React__default.createElement(reactNative.View, {
    style: styles$i.overlayContainer
  }, featuredTitle && React__default.createElement(Text, {
    style: reactNative.StyleSheet.flatten([styles$i.featuredTitle, featuredTitleStyle && featuredTitleStyle])
  }, featuredTitle), featuredSubtitle && React__default.createElement(Text, {
    style: reactNative.StyleSheet.flatten([styles$i.featuredSubtitle, featuredSubtitleStyle && featuredSubtitleStyle])
  }, featuredSubtitle))), React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([{
      padding: 10
    }, wrapperStyle && wrapperStyle])
  }, children)), !image && children));
};

Card.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]),
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  overlayStyle: ViewPropTypes.style,
  title: propTypes.oneOfType([propTypes.string, propTypes.element]),
  titleStyle: TextPropTypes.style,
  featuredTitle: propTypes.string,
  featuredTitleStyle: TextPropTypes.style,
  featuredSubtitle: propTypes.string,
  featuredSubtitleStyle: TextPropTypes.style,
  dividerStyle: ViewPropTypes.style,
  image: reactNative.Image.propTypes.source,
  imageStyle: ViewPropTypes.style,
  imageWrapperStyle: ViewPropTypes.style,
  imageProps: propTypes.object,
  titleNumberOfLines: propTypes.number,
  theme: propTypes.object
};
const styles$i = {
  container: theme => ({
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    borderColor: theme.colors.grey5,
    ...reactNative.Platform.select({
      android: {
        elevation: 1
      },
      default: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {
          height: 0,
          width: 0
        },
        shadowOpacity: 1,
        shadowRadius: 1
      }
    })
  }),
  featuredTitle: {
    fontSize: normalize(18),
    marginBottom: 8,
    color: 'white',
    ...reactNative.Platform.select({
      android: { ...fonts.android.black
      },
      default: {
        fontWeight: '800'
      }
    })
  },
  featuredSubtitle: {
    fontSize: normalize(13),
    marginBottom: 8,
    color: 'white',
    ...reactNative.Platform.select({
      android: { ...fonts.android.black
      },
      default: {
        fontWeight: '400'
      }
    })
  },
  wrapper: {
    backgroundColor: 'transparent'
  },
  divider: {
    marginBottom: 15
  },
  cardTitle: theme => ({
    fontSize: normalize(14),
    color: theme.colors.grey1,
    ...reactNative.Platform.select({
      android: { ...fonts.android.black
      },
      default: {
        fontWeight: 'bold'
      }
    }),
    textAlign: 'center',
    marginBottom: 15
  }),
  imageCardTitle: {
    marginTop: 15
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};
var Card$1 = withTheme(Card, 'Card');

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

const renderText$2 = (content, defaultProps, style) => renderNode(Text, content, { ...defaultProps,
  style: reactNative.StyleSheet.flatten([style, defaultProps && defaultProps.style])
});

const FeaturedTile = props => {
  const {
    title,
    icon,
    caption,
    imageSrc,
    containerStyle,
    imageContainerStyle,
    overlayContainerStyle,
    iconContainerStyle,
    titleStyle,
    captionStyle,
    ImageComponent,
    imageProps,
    ...attributes
  } = props;
  const {
    width = reactNative.Dimensions.get('window').width,
    height = width * 0.8
  } = props;
  const styles = reactNative.StyleSheet.create({
    container: {
      width,
      height
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width,
      height
    },
    overlayContainer: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 45,
      paddingBottom: 40,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    text: {
      color: '#ffffff',
      backgroundColor: 'rgba(0,0,0,0)',
      marginBottom: 15,
      textAlign: 'center'
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    }
  });
  return React__default.createElement(reactNative.TouchableOpacity, _extends$m({}, attributes, {
    style: reactNative.StyleSheet.flatten([styles.container, containerStyle && containerStyle])
  }), React__default.createElement(ImageComponent, _extends$m({
    resizeMode: "cover"
  }, imageProps, {
    source: imageSrc,
    style: reactNative.StyleSheet.flatten([styles.imageContainer, imageContainerStyle && imageContainerStyle])
  }), React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles.overlayContainer, overlayContainerStyle && overlayContainerStyle])
  }, React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles.iconContainer, iconContainerStyle && iconContainerStyle])
  }, icon && React__default.createElement(Icon$1, icon)), React__default.createElement(Text, {
    testID: "featuredTileTitle",
    h4: true,
    style: reactNative.StyleSheet.flatten([styles.text, titleStyle && titleStyle])
  }, title), renderText$2(caption, {
    style: captionStyle
  }, styles.text))));
};

FeaturedTile.propTypes = {
  title: propTypes.string,
  icon: propTypes.object,
  caption: propTypes.node,
  imageSrc: reactNative.Image.propTypes.source,
  onPress: propTypes.func,
  containerStyle: ViewPropTypes.style,
  iconContainerStyle: ViewPropTypes.style,
  imageContainerStyle: ViewPropTypes.style,
  overlayContainerStyle: ViewPropTypes.style,
  titleStyle: reactNative.Text.propTypes.style,
  captionStyle: reactNative.Text.propTypes.style,
  width: propTypes.number,
  height: propTypes.number,
  ImageComponent: propTypes.elementType,
  imageProps: propTypes.object
};
FeaturedTile.defaultProps = {
  ImageComponent: BackgroundImage,
  imageProps: {}
};
var FeaturedTile$1 = withTheme(FeaturedTile, 'FeaturedTile');

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

const Tile = props => {
  const {
    featured,
    imageSrc,
    icon,
    title,
    children,
    caption,
    titleStyle,
    onPress,
    activeOpacity,
    overlayContainerStyle,
    captionStyle,
    iconContainerStyle,
    imageContainerStyle,
    containerStyle,
    contentContainerStyle,
    titleNumberOfLines,
    ImageComponent,
    imageProps,
    ...attributes
  } = props;
  const {
    width,
    height = width * 0.8
  } = props;

  if (featured) {
    const featuredProps = {
      title,
      icon,
      caption,
      imageSrc,
      onPress,
      activeOpacity,
      containerStyle,
      imageContainerStyle,
      overlayContainerStyle,
      titleStyle,
      captionStyle,
      width,
      height,
      imageProps,
      ImageComponent
    };
    return React__default.createElement(FeaturedTile$1, featuredProps);
  }

  return React__default.createElement(reactNative.TouchableOpacity, _extends$n({}, attributes, {
    onPress: onPress,
    activeOpacity: activeOpacity,
    style: reactNative.StyleSheet.flatten([{
      width,
      height
    }, containerStyle && containerStyle])
  }), React__default.createElement(ImageComponent, _extends$n({
    resizeMode: "cover",
    source: imageSrc,
    containerStyle: reactNative.StyleSheet.flatten([styles$j.imageContainer, imageContainerStyle && imageContainerStyle]),
    style: { ...reactNative.StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, imageProps), React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles$j.iconContainer, iconContainerStyle && iconContainerStyle])
  }, icon && React__default.createElement(Icon$1, icon))), React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles$j.contentContainer, contentContainerStyle && contentContainerStyle])
  }, React__default.createElement(Text, {
    testID: "tileTitle",
    h4: true,
    style: reactNative.StyleSheet.flatten([styles$j.text, titleStyle && titleStyle]),
    numberOfLines: titleNumberOfLines
  }, title), children));
};

Tile.propTypes = {
  title: propTypes.string,
  icon: propTypes.object,
  caption: propTypes.node,
  imageSrc: reactNative.Image.propTypes.source,
  onPress: propTypes.func,
  activeOpacity: propTypes.number,
  containerStyle: ViewPropTypes.style,
  imageContainerStyle: ViewPropTypes.style,
  iconContainerStyle: ViewPropTypes.style,
  overlayContainerStyle: ViewPropTypes.style,
  titleStyle: TextPropTypes.style,
  captionStyle: TextPropTypes.style,
  width: propTypes.number,
  height: propTypes.number,
  featured: propTypes.bool,
  children: propTypes.node,
  contentContainerStyle: ViewPropTypes.style,
  titleNumberOfLines: propTypes.number,
  imageProps: propTypes.object,
  ImageComponent: propTypes.elementType
};
Tile.defaultProps = {
  width: reactNative.Dimensions.get('window').width,
  ImageComponent: Image$1,
  imageProps: {}
};
const styles$j = reactNative.StyleSheet.create({
  imageContainer: {
    flex: 2
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 5
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});
var Tile$1 = withTheme(Tile, 'Tile');

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }
const ALIGN_STYLE = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
};

const Children = ({
  style,
  placement,
  children
}) => React__default.createElement(reactNative.View, {
  style: reactNative.StyleSheet.flatten([{
    alignItems: ALIGN_STYLE[placement]
  }, style])
}, children == null || children === false ? null : children.text ? renderNode(Text, children.text, {
  numberOfLines: 1,
  ...children
}) : children.icon ? renderNode(Icon$1, { ...children,
  name: children.icon,
  containerStyle: reactNative.StyleSheet.flatten([{
    alignItems: ALIGN_STYLE[placement]
  }, children.containerStyle])
}) : renderNode(Text, children));

Children.propTypes = {
  placement: propTypes.oneOf(['left', 'center', 'right']),
  style: ViewPropTypes.style,
  children: propTypes.oneOfType([nodeType, propTypes.node])
};

class Header extends React.Component {
  componentDidMount() {
    const {
      linearGradientProps,
      ViewComponent
    } = this.props;

    if (linearGradientProps && !global.Expo && !ViewComponent) {
      console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
    }
  }

  render() {
    const {
      statusBarProps,
      leftComponent,
      centerComponent,
      rightComponent,
      leftContainerStyle,
      centerContainerStyle,
      rightContainerStyle,
      backgroundColor,
      backgroundImage,
      backgroundImageStyle,
      containerStyle,
      placement,
      barStyle,
      children,
      linearGradientProps,
      ViewComponent = linearGradientProps && global.Expo ? global.Expo.LinearGradient : reactNative.ImageBackground,
      theme,
      ...attributes
    } = this.props;
    return React__default.createElement(ViewComponent, _extends$o({
      testID: "headerContainer"
    }, attributes, {
      style: reactNative.StyleSheet.flatten([styles$k.container(theme), backgroundColor && {
        backgroundColor
      }, containerStyle]),
      source: backgroundImage,
      imageStyle: backgroundImageStyle
    }, linearGradientProps), React__default.createElement(reactNative.StatusBar, _extends$o({
      barStyle: barStyle
    }, statusBarProps)), React__default.createElement(Children, {
      style: reactNative.StyleSheet.flatten([placement === 'center' && styles$k.rightLeftContainer, leftContainerStyle]),
      placement: "left"
    }, React__default.isValidElement(children) && children || children[0] || leftComponent), React__default.createElement(Children, {
      style: reactNative.StyleSheet.flatten([styles$k.centerContainer, placement !== 'center' && {
        paddingHorizontal: reactNative.Platform.select({
          android: 16,
          default: 15
        })
      }, centerContainerStyle]),
      placement: placement
    }, children[1] || centerComponent), React__default.createElement(Children, {
      style: reactNative.StyleSheet.flatten([placement === 'center' && styles$k.rightLeftContainer, rightContainerStyle]),
      placement: "right"
    }, children[2] || rightComponent));
  }

}

Header.propTypes = {
  placement: propTypes.oneOf(['left', 'center', 'right']),
  leftComponent: nodeType,
  centerComponent: nodeType,
  rightComponent: nodeType,
  leftContainerStyle: ViewPropTypes.style,
  centerContainerStyle: ViewPropTypes.style,
  rightContainerStyle: ViewPropTypes.style,
  backgroundColor: propTypes.string,
  backgroundImage: reactNative.Image.propTypes.source,
  backgroundImageStyle: reactNative.Image.propTypes.style,
  containerStyle: ViewPropTypes.style,
  statusBarProps: propTypes.object,
  barStyle: propTypes.oneOf(['default', 'light-content', 'dark-content']),
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  theme: propTypes.object,
  linearGradientProps: propTypes.object,
  ViewComponent: propTypes.elementType
};
Header.defaultProps = {
  placement: 'center',
  children: []
};
const styles$k = {
  container: theme => ({
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: reactNative.StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primary,
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: reactNative.Platform.select({
      android: 56,
      default: 44
    }) + getStatusBarHeight()
  }),
  centerContainer: {
    flex: 3
  },
  rightLeftContainer: {
    flex: 1
  }
};
var Header$1 = withTheme(Header, 'Header');

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

const PricingCard = props => {
  const {
    theme,
    ...rest
  } = props;
  const {
    containerStyle,
    wrapperStyle,
    title,
    price,
    info,
    button,
    color = theme.colors.primary,
    titleStyle,
    pricingStyle,
    infoStyle,
    onButtonPress,
    ...attributes
  } = rest;
  return React__default.createElement(reactNative.View, _extends$p({}, attributes, {
    style: reactNative.StyleSheet.flatten([styles$l.container(theme), containerStyle && containerStyle])
  }), React__default.createElement(reactNative.View, {
    style: reactNative.StyleSheet.flatten([styles$l.wrapper, wrapperStyle && wrapperStyle])
  }, React__default.createElement(Text, {
    testID: "pricingCardTitle",
    style: reactNative.StyleSheet.flatten([styles$l.pricingTitle, titleStyle, {
      color
    }])
  }, title), React__default.createElement(Text, {
    style: reactNative.StyleSheet.flatten([styles$l.pricingPrice, pricingStyle])
  }, price), info.map(item => React__default.createElement(Text, {
    key: item,
    style: reactNative.StyleSheet.flatten([styles$l.pricingInfo(theme), infoStyle])
  }, item)), React__default.createElement(Button$1, {
    title: button.title,
    buttonStyle: reactNative.StyleSheet.flatten([styles$l.button, button.buttonStyle, {
      backgroundColor: color
    }]),
    titleStyle: button.titleStyle,
    onPress: onButtonPress,
    icon: React__default.createElement(Icon$1, {
      name: button.icon,
      size: 15,
      color: "white"
    })
  })));
};

PricingCard.propTypes = {
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  title: propTypes.string,
  price: propTypes.oneOfType([propTypes.string, propTypes.number]),
  info: propTypes.arrayOf(propTypes.string),
  button: propTypes.object,
  color: propTypes.string,
  onButtonPress: propTypes.func,
  titleStyle: reactNative.Text.propTypes.style,
  pricingStyle: reactNative.Text.propTypes.style,
  infoStyle: reactNative.Text.propTypes.style,
  theme: propTypes.object
};
PricingCard.defaultProps = {
  info: []
};
const styles$l = {
  container: theme => ({
    margin: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 15,
    borderColor: theme.colors.grey5,
    ...reactNative.Platform.select({
      android: {
        elevation: 1
      },
      default: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {
          height: 1,
          width: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 0.5
      }
    })
  }),
  wrapper: {
    backgroundColor: 'transparent'
  },
  pricingTitle: {
    textAlign: 'center',
    fontSize: normalize(30),
    ...reactNative.Platform.select({
      android: { ...fonts.android.black
      },
      default: {
        fontWeight: '800'
      }
    })
  },
  pricingPrice: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: normalize(40),
    ...reactNative.Platform.select({
      android: { ...fonts.android.bold
      },
      default: {
        fontWeight: '700'
      }
    })
  },
  pricingInfo: theme => ({
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: theme.colors.grey3,
    ...reactNative.Platform.select({
      android: { ...fonts.android.bold
      },
      default: {
        fontWeight: '600'
      }
    })
  }),
  button: {
    marginTop: 15,
    marginBottom: 10
  }
};
var PricingCard$1 = withTheme(PricingCard, 'PricingCard');

const Triangle = ({
  style,
  isDown
}) => React__default.createElement(reactNative.View, {
  style: reactNative.StyleSheet.flatten([styles$m.triangle, style, isDown ? styles$m.down : {}])
});

Triangle.propTypes = {
  style: ViewPropTypes.style,
  isDown: propTypes.bool
};
const styles$m = reactNative.StyleSheet.create({
  down: {
    transform: [{
      rotate: '180deg'
    }]
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white'
  }
});

const getArea = (a, b) => a * b;

const getPointDistance = (a, b) => Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));

const getElementVisibleWidth = (elementWidth, xOffset, ScreenWidth) => {
  // Element is fully visible OR scrolled right
  if (xOffset >= 0) {
    return xOffset + elementWidth <= ScreenWidth // is element fully visible?
    ? elementWidth // element is fully visible;
    : ScreenWidth - xOffset; // calculate visible width of scrolled element
  } // Element is scrolled LEFT


  return elementWidth - xOffset; // calculate visible width of scrolled element
};
/*
type Coord = {
  x: number,
  y: number,
};

  ~Tooltip coordinate system:~
  The tooltip coordinates are based on the element which it is wrapping.
  We take the x and y coordinates of the element and find the best position
  to place the tooltip. To find the best position we look for the side with the
  most space. In order to find the side with the most space we divide the the
  surroundings in four quadrants and check for the one with biggest area.
  Once we know the quandrant with the biggest area it place the tooltip in that
  direction.

  To find the areas we first get 5 coordinate points. The center and the other 4 extreme points
  which together make a perfect cross shape.

  Once we know the coordincates we can get the length of the vertices which form each quadrant.
  Since they are squares we only need two.
*/

const getTooltipCoordinate = (x, y, width, height, ScreenWidth, ScreenHeight, tooltipWidth, tooltipHeight, withPointer) => {
  // The following are point coordinates: [x, y]
  const center = [x + getElementVisibleWidth(width, x, ScreenWidth) / 2, y + height / 2];
  const pOne = [center[0], 0];
  const pTwo = [ScreenWidth, center[1]];
  const pThree = [center[0], ScreenHeight];
  const pFour = [0, center[1]]; // vertices

  const vOne = getPointDistance(center, pOne);
  const vTwo = getPointDistance(center, pTwo);
  const vThree = getPointDistance(center, pThree);
  const vFour = getPointDistance(center, pFour); // Quadrant areas.
  // type Areas = {
  //   area: number,
  //   id: number,
  // };

  const areas = [getArea(vOne, vFour), getArea(vOne, vTwo), getArea(vTwo, vThree), getArea(vThree, vFour)].map((each, index) => ({
    area: each,
    id: index
  }));
  const sortedArea = areas.sort((a, b) => b.area - a.area); // deslocated points

  const dX = 0.001;
  const dY = height / 2; // Deslocate the coordinates in the direction of the quadrant.

  const directionCorrection = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  const deslocateReferencePoint = [[-tooltipWidth, -tooltipHeight], [0, -tooltipHeight], [0, 0], [-tooltipWidth, 0]]; // current quadrant index

  const qIndex = sortedArea[0].id;

  const getWithPointerOffsetY = () => withPointer ? 10 * directionCorrection[qIndex][1] : 0;

  const getWithPointerOffsetX = () => withPointer ? center[0] - 18 * directionCorrection[qIndex][0] : center[0];

  const newX = getWithPointerOffsetX() + (dX * directionCorrection[qIndex][0] + deslocateReferencePoint[qIndex][0]);
  return {
    x: constraintX(newX, qIndex, center[0], ScreenWidth, tooltipWidth),
    y: center[1] + (dY * directionCorrection[qIndex][1] + deslocateReferencePoint[qIndex][1]) + getWithPointerOffsetY()
  };
};

const constraintX = (newX, qIndex, x, ScreenWidth, tooltipWidth) => {
  switch (qIndex) {
    // 0 and 3 are the left side quadrants.
    case 0:
    case 3:
      {
        const maxWidth = newX > ScreenWidth ? ScreenWidth - 10 : newX;
        return newX < 1 ? 10 : maxWidth;
      }
    // 1 and 2 are the right side quadrants

    case 1:
    case 2:
      {
        const leftOverSpace = ScreenWidth - newX;
        return leftOverSpace >= tooltipWidth ? newX : newX - (tooltipWidth - leftOverSpace + 10);
      }

    default:
      {
        return 0;
      }
  }
};

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Tooltip extends React__default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty$9(this, "state", {
      isVisible: false,
      yOffset: 0,
      xOffset: 0,
      elementWidth: 0,
      elementHeight: 0
    });

    _defineProperty$9(this, "renderedElement", void 0);

    _defineProperty$9(this, "toggleTooltip", () => {
      const {
        onClose
      } = this.props;
      this.getElementPosition();
      this.setState(prevState => {
        if (prevState.isVisible && !isIOS) {
          onClose && onClose();
        }

        return {
          isVisible: !prevState.isVisible
        };
      });
    });

    _defineProperty$9(this, "wrapWithPress", (toggleOnPress, children) => {
      if (toggleOnPress) {
        return React__default.createElement(reactNative.TouchableOpacity, {
          onPress: this.toggleTooltip,
          activeOpacity: 1
        }, children);
      }

      return children;
    });

    _defineProperty$9(this, "getTooltipStyle", () => {
      const {
        yOffset,
        xOffset,
        elementHeight,
        elementWidth
      } = this.state;
      const {
        height,
        backgroundColor,
        width,
        withPointer,
        containerStyle
      } = this.props;
      const {
        x,
        y
      } = getTooltipCoordinate(xOffset, yOffset, elementWidth, elementHeight, ScreenWidth, ScreenHeight, width, height, withPointer);
      return {
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        backgroundColor,
        // default styles
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 10,
        padding: 10,
        ...containerStyle
      };
    });

    _defineProperty$9(this, "renderPointer", tooltipY => {
      const {
        yOffset,
        xOffset,
        elementHeight,
        elementWidth
      } = this.state;
      const {
        backgroundColor,
        pointerColor
      } = this.props;
      const pastMiddleLine = yOffset > tooltipY;
      return React__default.createElement(reactNative.View, {
        style: {
          position: 'absolute',
          top: pastMiddleLine ? yOffset - 13 : yOffset + elementHeight - 2,
          left: xOffset + getElementVisibleWidth(elementWidth, xOffset, ScreenWidth) / 2 - 7.5
        }
      }, React__default.createElement(Triangle, {
        style: {
          borderBottomColor: pointerColor || backgroundColor
        },
        isDown: pastMiddleLine
      }));
    });

    _defineProperty$9(this, "renderContent", withTooltip => {
      const {
        popover,
        withPointer,
        toggleOnPress,
        highlightColor
      } = this.props;

      if (!withTooltip) {
        return this.wrapWithPress(toggleOnPress, this.props.children);
      }

      const {
        yOffset,
        xOffset,
        elementWidth,
        elementHeight
      } = this.state;
      const tooltipStyle = this.getTooltipStyle();
      return React__default.createElement(reactNative.View, null, React__default.createElement(reactNative.View, {
        style: {
          position: 'absolute',
          top: yOffset,
          left: xOffset,
          backgroundColor: highlightColor,
          overflow: 'visible',
          width: elementWidth,
          height: elementHeight
        }
      }, this.props.children), withPointer && this.renderPointer(tooltipStyle.top), React__default.createElement(reactNative.View, {
        style: tooltipStyle,
        testID: "tooltipPopoverContainer"
      }, popover));
    });

    _defineProperty$9(this, "getElementPosition", () => {
      this.renderedElement && this.renderedElement.measure((frameOffsetX, frameOffsetY, width, height, pageOffsetX, pageOffsetY) => {
        this.setState({
          xOffset: pageOffsetX,
          yOffset: isIOS ? pageOffsetY : pageOffsetY - reactNative.StatusBar.currentHeight,
          elementWidth: width,
          elementHeight: height
        });
      });
    });
  }

  componentDidMount() {
    // wait to compute onLayout values.
    setTimeout(this.getElementPosition, 500);
  }

  render() {
    const {
      isVisible
    } = this.state;
    const {
      onClose,
      withOverlay,
      overlayColor,
      onOpen
    } = this.props;
    return React__default.createElement(reactNative.View, {
      collapsable: false,
      ref: e => {
        this.renderedElement = e;
      }
    }, this.renderContent(false), React__default.createElement(reactNative.Modal, {
      animationType: "fade",
      visible: isVisible,
      transparent: true,
      onDismiss: onClose,
      onShow: onOpen,
      onRequestClose: onClose
    }, React__default.createElement(reactNative.TouchableOpacity, {
      style: styles$n.container(withOverlay, overlayColor),
      onPress: this.toggleTooltip,
      activeOpacity: 1
    }, this.renderContent(true))));
  }

}

Tooltip.propTypes = {
  children: propTypes.element,
  withPointer: propTypes.bool,
  popover: propTypes.element,
  toggleOnPress: propTypes.bool,
  height: propTypes.number,
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  containerStyle: ViewPropTypes.style,
  pointerColor: propTypes.string,
  onClose: propTypes.func,
  onOpen: propTypes.func,
  overlayColor: propTypes.string,
  withOverlay: propTypes.bool,
  backgroundColor: propTypes.string,
  highlightColor: propTypes.string
};
Tooltip.defaultProps = {
  withOverlay: true,
  overlayColor: 'rgba(250, 250, 250, 0.70)',
  highlightColor: 'transparent',
  withPointer: true,
  toggleOnPress: true,
  height: 40,
  width: 150,
  containerStyle: {},
  backgroundColor: '#617080',
  onClose: () => {},
  onOpen: () => {}
};
const styles$n = {
  container: (withOverlay, overlayColor) => ({
    backgroundColor: withOverlay ? overlayColor : 'transparent',
    flex: 1
  })
};
var Tooltip$1 = withTheme(Tooltip, 'Tooltip');

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const STAR_IMAGE = require('./images/star.png');

const HEART_IMAGE = require('./images/heart.png');

const ROCKET_IMAGE = require('./images/rocket.png');

const BELL_IMAGE = require('./images/bell.png');

const TYPES = {
  star: {
    source: STAR_IMAGE,
    color: '#f1c40f',
    backgroundColor: 'white'
  },
  heart: {
    source: HEART_IMAGE,
    color: '#e74c3c',
    backgroundColor: 'white'
  },
  rocket: {
    source: ROCKET_IMAGE,
    color: '#2ecc71',
    backgroundColor: 'white'
  },
  bell: {
    source: BELL_IMAGE,
    color: '#f39c12',
    backgroundColor: 'white'
  }
};
class SwipeRating extends React.Component {
  constructor(props) {
    super(props);
    const {
      onStartRating,
      onFinishRating,
      fractions
    } = this.props;
    const position = new reactNative.Animated.ValueXY();
    const panResponder = reactNative.PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        if (typeof onStartRating === 'function') {
          onStartRating();
        }
      },
      onPanResponderMove: (event, gesture) => {
        const newPosition = new reactNative.Animated.ValueXY();
        newPosition.setValue({
          x: gesture.dx,
          y: 0
        });
        this.setState({
          position: newPosition,
          value: gesture.dx
        });
      },
      onPanResponderRelease: event => {
        const rating = this.getCurrentRating(this.state.value);

        if (rating >= this.props.minValue) {
          if (!fractions) {
            // 'round up' to the nearest rating image
            this.setCurrentRating(rating);
          }

          onFinishRating(rating);
        }
      }
    });
    this.state = {
      panResponder,
      position,
      display: false
    };
  }

  async componentDidMount() {
    try {
      const STAR_IMAGE = await require('./images/star.png');
      const HEART_IMAGE = await require('./images/heart.png');
      const ROCKET_IMAGE = await require('./images/rocket.png');
      const BELL_IMAGE = await require('./images/bell.png');
      this.setState({
        display: true
      });
    } catch (err) {
      console.log(err);
    }

    this.setCurrentRating(this.props.startingValue);
  }

  componentDidUpdate(prevProps) {
    if (this.props.startingValue !== prevProps.startingValue) {
      this.setCurrentRating(this.props.startingValue);
    }
  }

  getPrimaryViewStyle() {
    const {
      position
    } = this.state;
    const {
      imageSize,
      ratingCount,
      type
    } = this.props;
    const color = TYPES[type].color;
    const width = position.x.interpolate({
      inputRange: [-ratingCount * (imageSize / 2), 0, ratingCount * (imageSize / 2)],
      outputRange: [0, ratingCount * imageSize / 2, ratingCount * imageSize],
      extrapolate: 'clamp'
    }, {
      useNativeDriver: true
    });
    return {
      backgroundColor: color,
      width,
      height: width ? imageSize : 0
    };
  }

  getSecondaryViewStyle() {
    const {
      position
    } = this.state;
    const {
      imageSize,
      ratingCount,
      type
    } = this.props;
    const backgroundColor = TYPES[type].backgroundColor;
    const width = position.x.interpolate({
      inputRange: [-ratingCount * (imageSize / 2), 0, ratingCount * (imageSize / 2)],
      outputRange: [ratingCount * imageSize, ratingCount * imageSize / 2, 0],
      extrapolate: 'clamp'
    }, {
      useNativeDriver: true
    });
    return {
      backgroundColor,
      width,
      height: width ? imageSize : 0
    };
  }

  renderRatings() {
    const {
      imageSize,
      ratingCount,
      type,
      tintColor
    } = this.props;
    const source = TYPES[type].source;
    return times(ratingCount, index => React__default.createElement(reactNative.View, {
      key: index,
      style: styles$o.starContainer
    }, React__default.createElement(reactNative.Image, {
      source: source,
      style: {
        width: imageSize,
        height: imageSize,
        tintColor
      }
    })));
  }

  getCurrentRating(value) {
    // const { value } = this.state;
    const {
      fractions,
      imageSize,
      ratingCount
    } = this.props;
    const startingValue = ratingCount / 2;
    let currentRating = this.props.minValue ? this.props.minValue : 0;

    if (value > ratingCount * imageSize / 2) {
      currentRating = ratingCount;
    } else if (value < -ratingCount * imageSize / 2) {
      currentRating = this.props.minValue ? this.props.minValue : 0;
    } else if (value <= imageSize || value > imageSize) {
      currentRating = startingValue + value / imageSize;
      currentRating = !fractions ? Math.ceil(currentRating) : +currentRating.toFixed(fractions);
    } else {
      currentRating = !fractions ? Math.ceil(startingValue) : +startingValue.toFixed(fractions);
    }

    return currentRating;
  }

  setCurrentRating(rating) {
    const {
      imageSize,
      ratingCount
    } = this.props; // `initialRating` corresponds to `startingValue` in the getter. Naming it
    // differently here avoids confusion with `value` below.

    const initialRating = ratingCount / 2;
    let value = null;

    if (rating > ratingCount) {
      value = ratingCount * imageSize / 2;
    } else if (rating < 0) {
      value = -ratingCount * imageSize / 2;
    } else if (rating < ratingCount / 2 || rating > ratingCount / 2) {
      value = (rating - initialRating) * imageSize;
    } else {
      value = 0;
    }

    const newPosition = new reactNative.Animated.ValueXY();
    newPosition.setValue({
      x: value,
      y: 0
    });
    this.setState({
      position: newPosition,
      value
    });
  }

  displayCurrentRating() {
    const {
      ratingCount,
      type,
      readonly,
      ratingTextColor
    } = this.props;
    const color = ratingTextColor || TYPES[type].color;
    return React__default.createElement(reactNative.View, {
      style: styles$o.showRatingView
    }, React__default.createElement(reactNative.View, {
      style: styles$o.ratingView
    }, React__default.createElement(reactNative.Text, {
      style: [styles$o.ratingText, {
        color
      }]
    }, "Rating:", ' '), React__default.createElement(reactNative.Text, {
      style: [styles$o.currentRatingText, {
        color
      }]
    }, this.getCurrentRating(this.state.value)), React__default.createElement(reactNative.Text, {
      style: [styles$o.maxRatingText, {
        color
      }]
    }, "/", ratingCount)), React__default.createElement(reactNative.View, null, readonly && React__default.createElement(reactNative.Text, {
      style: [styles$o.readonlyLabel, {
        color
      }]
    }, "(readonly)")));
  }

  render() {
    const {
      readonly,
      type,
      ratingImage,
      ratingColor,
      ratingBackgroundColor,
      style,
      showRating
    } = this.props;

    if (type === 'custom') {
      let custom = {
        source: ratingImage,
        color: ratingColor,
        backgroundColor: ratingBackgroundColor
      };
      TYPES.custom = custom;
    }

    return this.state.display ? React__default.createElement(reactNative.View, {
      pointerEvents: readonly ? 'none' : 'auto',
      style: style
    }, showRating && this.displayCurrentRating(), React__default.createElement(reactNative.View, _extends$q({
      style: styles$o.starsWrapper
    }, this.state.panResponder.panHandlers), React__default.createElement(reactNative.View, {
      style: styles$o.starsInsideWrapper
    }, React__default.createElement(reactNative.Animated.View, {
      style: this.getPrimaryViewStyle()
    }), React__default.createElement(reactNative.Animated.View, {
      style: this.getSecondaryViewStyle()
    })), this.renderRatings())) : null;
  }

}

_defineProperty$a(SwipeRating, "defaultProps", {
  type: 'star',
  ratingImage: require('./images/star.png'),
  ratingColor: '#f1c40f',
  ratingBackgroundColor: 'white',
  ratingCount: 5,
  imageSize: 40,
  onFinishRating: () => console.log('Attach a onFinishRating function here.'),
  minValue: 0
});

const styles$o = reactNative.StyleSheet.create({
  starsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  starsInsideWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  showRatingView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  ratingText: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: reactNative.Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e'
  },
  readonlyLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: reactNative.Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495a'
  },
  currentRatingText: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: reactNative.Platform.OS === 'ios' ? 'Trebuchet MS' : null
  },
  maxRatingText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: reactNative.Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e'
  }
});

const fractionsType = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName];

    if (typeof value === 'number') {
      return value >= 0 && value <= 20 ? null : new Error(`\`${propName}\` in \`${componentName}\` must be between 0 and 20`);
    }

    return new Error(`\`${propName}\` in \`${componentName}\` must be a number`);
  }
};

SwipeRating.propTypes = {
  type: propTypes.string,
  ratingImage: reactNative.Image.propTypes.source,
  ratingColor: propTypes.string,
  ratingBackgroundColor: propTypes.string,
  ratingCount: propTypes.number,
  ratingTextColor: propTypes.string,
  imageSize: propTypes.number,
  onStartRating: propTypes.func,
  onFinishRating: propTypes.func,
  showRating: propTypes.bool,
  style: reactNative.ViewPropTypes.style,
  readonly: propTypes.bool,
  startingValue: propTypes.number,
  fractions: fractionsType,
  minValue: propTypes.number
};

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const STAR_IMAGE$1 = require('../images/airbnb-star.png');

const STAR_SELECTED_IMAGE = require('../images/airbnb-star-selected.png');

const STAR_SIZE = 40;
class Star extends React.PureComponent {
  constructor() {
    super();
    this.springValue = new reactNative.Animated.Value(1);
    this.state = {
      selected: false
    };
  }

  spring() {
    const {
      position,
      starSelectedInPosition
    } = this.props;
    this.springValue.setValue(1.2);
    reactNative.Animated.spring(this.springValue, {
      toValue: 1,
      friction: 2,
      tension: 1
    }).start();
    this.setState({
      selected: !this.state.selected
    });
    starSelectedInPosition(position);
  }

  render() {
    const {
      fill,
      size,
      selectedColor,
      isDisabled,
      starStyle
    } = this.props;
    const starSource = fill && selectedColor === null ? STAR_SELECTED_IMAGE : STAR_IMAGE$1;
    return React__default.createElement(reactNative.TouchableOpacity, {
      activeOpacity: 1,
      onPress: this.spring.bind(this),
      disabled: isDisabled
    }, React__default.createElement(reactNative.Animated.Image, {
      source: starSource,
      style: [styles$p.starStyle, {
        tintColor: fill && selectedColor ? selectedColor : undefined,
        width: size || STAR_SIZE,
        height: size || STAR_SIZE,
        transform: [{
          scale: this.springValue
        }]
      }, starStyle]
    }));
  }

}

_defineProperty$b(Star, "defaultProps", {
  selectedColor: '#f1c40f'
});

const styles$p = reactNative.StyleSheet.create({
  starStyle: {
    margin: 3
  }
});

function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class TapRating extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      defaultRating
    } = nextProps;

    if (defaultRating !== prevState.defaultRating) {
      return {
        position: defaultRating,
        defaultRating
      };
    }

    return null;
  }

  constructor() {
    super();
    this.state = {
      position: 5
    };
  }

  componentDidMount() {
    const {
      defaultRating
    } = this.props;
    this.setState({
      position: defaultRating
    });
  }

  renderStars(rating_array) {
    return _.map(rating_array, (star, index) => {
      return star;
    });
  }

  starSelectedInPosition(position) {
    const {
      onFinishRating
    } = this.props;
    onFinishRating(position);
    this.setState({
      position: position
    });
  }

  render() {
    const {
      position
    } = this.state;
    const {
      count,
      reviews,
      showRating,
      reviewColor,
      reviewSize
    } = this.props;
    const rating_array = [];
    const starContainerStyle = [styles$q.starContainer];

    if (this.props.starContainerStyle) {
      starContainerStyle.push(this.props.starContainerStyle);
    }

    _.times(count, index => {
      rating_array.push(React__default.createElement(Star, _extends$r({
        key: index,
        position: index + 1,
        starSelectedInPosition: this.starSelectedInPosition.bind(this),
        fill: position >= index + 1
      }, this.props)));
    });

    return React__default.createElement(reactNative.View, {
      style: styles$q.ratingContainer
    }, showRating && React__default.createElement(reactNative.Text, {
      style: [styles$q.reviewText, {
        fontSize: reviewSize,
        color: reviewColor
      }]
    }, reviews[position - 1]), React__default.createElement(reactNative.View, {
      style: starContainerStyle
    }, this.renderStars(rating_array)));
  }

}

_defineProperty$c(TapRating, "defaultProps", {
  defaultRating: 3,
  reviews: ["Terrible", "Bad", "Okay", "Good", "Great"],
  count: 5,
  onFinishRating: () => console.log('Rating selected. Attach a function here.'),
  showRating: true,
  reviewColor: 'rgba(230, 196, 46, 1)',
  reviewSize: 25
});

const styles$q = reactNative.StyleSheet.create({
  ratingContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  reviewText: {
    fontWeight: 'bold',
    margin: 10
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});



var index$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Rating: SwipeRating,
	AirbnbRating: TapRating
});

// UI references
const AirbnbRating = withTheme(TapRating, 'AirbnbRating');
const Rating = withTheme(SwipeRating, 'Rating');

exports.$deepmerge = umd$1;
exports.$ratings = index$1;
exports.$statusBarHeight = index;
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
