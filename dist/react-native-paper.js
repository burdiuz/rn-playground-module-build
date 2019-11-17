'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactNativePaper = require('react-native-paper');
var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

var createThemeProvider_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(React__default);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createThemeProvider(defaultTheme, ThemeContext) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ThemeProvider, _React$Component);

    function ThemeProvider() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = ThemeProvider.prototype;

    _proto.render = function render() {
      return React.createElement(ThemeContext.Provider, {
        value: this.props.theme
      }, this.props.children);
    };

    return ThemeProvider;
  }(React.Component), _defineProperty(_class, "defaultProps", {
    theme: defaultTheme
  }), _temp;
}

var _default = createThemeProvider;
exports.default = _default;

});

unwrapExports(createThemeProvider_1);

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
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
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

var createWithTheme_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(React__default);

var _deepmerge = _interopRequireDefault(umd);

var _hoistNonReactStatics = _interopRequireDefault(hoistNonReactStatics_cjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createWithTheme = function createWithTheme(ThemeProvider, ThemeContext) {
  return function withTheme(Comp) {
    var ThemedComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(ThemedComponent, _React$Component);

      function ThemedComponent() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

        _defineProperty(_assertThisInitialized(_this), "_previous", void 0);

        _defineProperty(_assertThisInitialized(_this), "_merge", function (a, b) {
          var previous = _this._previous;

          if (previous && previous.a === a && previous.b === b) {
            return previous.result;
          }

          var result = a && b && a !== b ? (0, _deepmerge.default)(a, b) : a || b;
          _this._previous = {
            a: a,
            b: b,
            result: result
          };
          return result;
        });

        return _this;
      }

      var _proto = ThemedComponent.prototype;

      _proto.render = function render() {
        var _this2 = this;

        var _this$props = this.props,
            _reactThemeProviderForwardedRef = _this$props._reactThemeProviderForwardedRef,
            rest = _objectWithoutPropertiesLoose(_this$props, ["_reactThemeProviderForwardedRef"]);

        return React.createElement(ThemeContext.Consumer, null, function (theme) {
          return React.createElement(Comp, _extends({}, rest, {
            theme: _this2._merge(theme, rest.theme),
            ref: _reactThemeProviderForwardedRef
          }));
        });
      };

      return ThemedComponent;
    }(React.Component);

    var ResultComponent = React.forwardRef(function (props, ref) {
      return React.createElement(ThemedComponent, _extends({}, props, {
        _reactThemeProviderForwardedRef: ref
      }));
    });
    ResultComponent.displayName = "withTheme(" + (Comp.displayName || Comp.name) + ")";
    (0, _hoistNonReactStatics.default)(ResultComponent, Comp);
    return ResultComponent;
  };
};

var _default = createWithTheme;
exports.default = _default;

});

unwrapExports(createWithTheme_1);

var createTheming_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = createTheming;

var React = _interopRequireWildcard(React__default);

var _deepmerge = _interopRequireDefault(umd);

var _createThemeProvider = _interopRequireDefault(createThemeProvider_1);

var _createWithTheme = _interopRequireDefault(createWithTheme_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function createTheming(defaultTheme) {
  var ThemeContext = React.createContext(defaultTheme);
  var ThemeProvider = (0, _createThemeProvider.default)(defaultTheme, ThemeContext);
  var withTheme = (0, _createWithTheme.default)(ThemeProvider, ThemeContext);

  var useTheme = function useTheme(overrides) {
    var theme = React.useContext(ThemeContext);
    var result = React.useMemo(function () {
      return theme && overrides ? (0, _deepmerge.default)(theme, overrides) : theme || overrides;
    }, [theme, overrides]);
    return result;
  };

  return {
    ThemeContext: ThemeContext,
    ThemeProvider: ThemeProvider,
    withTheme: withTheme,
    useTheme: useTheme
  };
}

});

unwrapExports(createTheming_1);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

var _createTheming = _interopRequireDefault(createTheming_1);

exports.createTheming = _createTheming.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

});

var index = unwrapExports(lib);
var lib_1 = lib.createTheming;

var index$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': index,
	__moduleExports: lib,
	createTheming: lib_1
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS$1 = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS$1 = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames$1 = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var getPrototypeOf$1 = Object.getPrototypeOf;
var objectPrototype$1 = getPrototypeOf$1 && getPrototypeOf$1(Object);

function hoistNonReactStatics$1(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype$1) {
            var inheritedComponent = getPrototypeOf$1(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype$1) {
                hoistNonReactStatics$1(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames$1(sourceComponent);

        if (getOwnPropertySymbols$1) {
            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS$1[key] && !KNOWN_STATICS$1[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor$1(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs$1 = hoistNonReactStatics$1;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const isOrientationLandscape = ({
  width,
  height
}) => width > height;
function withOrientation (WrappedComponent) {
  class withOrientation extends React.Component {
    constructor() {
      super();

      _defineProperty(this, "handleOrientationChange", ({
        window
      }) => {
        const isLandscape = isOrientationLandscape(window);
        this.setState({
          isLandscape
        });
      });

      const _isLandscape = isOrientationLandscape(reactNative.Dimensions.get('window'));

      this.state = {
        isLandscape: _isLandscape
      };
    }

    componentDidMount() {
      if (typeof reactNative.Dimensions.addEventListener === 'function') {
        reactNative.Dimensions.addEventListener('change', this.handleOrientationChange);
      }
    }

    componentWillUnmount() {
      if (typeof reactNative.Dimensions.removeEventListener === 'function') {
        reactNative.Dimensions.removeEventListener('change', this.handleOrientationChange);
      }
    }

    render() {
      return React.createElement(WrappedComponent, _extends({}, this.props, this.state));
    }

  }

  return hoistNonReactStatics_cjs$1(withOrientation, WrappedComponent);
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const PAD_WIDTH = 768;
const IPADPRO11_WIDTH = 834;
const IPADPRO11_HEIGHT = 1194;
const IPADPRO129_HEIGHT = 1024;
const IPADPRO129_WIDTH = 1366;
const {
  height: D_HEIGHT,
  width: D_WIDTH
} = reactNative.Dimensions.get('window');
const {
  PlatformConstants = {}
} = reactNative.NativeModules;
const {
  minor = 0
} = PlatformConstants.reactNativeVersion || {};

const isIPhoneX = (() => {
  if (reactNative.Platform.OS === 'web') return false;
  return reactNative.Platform.OS === 'ios' && (D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH || D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT) || D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH || D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT;
})();

const isNewIPadPro = (() => {
  if (reactNative.Platform.OS !== 'ios') return false;
  return D_HEIGHT === IPADPRO11_HEIGHT && D_WIDTH === IPADPRO11_WIDTH || D_HEIGHT === IPADPRO11_WIDTH && D_WIDTH === IPADPRO11_HEIGHT || D_HEIGHT === IPADPRO129_HEIGHT && D_WIDTH === IPADPRO129_WIDTH || D_HEIGHT === IPADPRO129_WIDTH && D_WIDTH === IPADPRO129_HEIGHT;
})();

const isIPad = (() => {
  if (reactNative.Platform.OS !== 'ios' || isIPhoneX) return false; // if portrait and width is smaller than iPad width

  if (D_HEIGHT > D_WIDTH && D_WIDTH < PAD_WIDTH) {
    return false;
  } // if landscape and height is smaller that iPad height


  if (D_WIDTH > D_HEIGHT && D_HEIGHT < PAD_WIDTH) {
    return false;
  }

  return true;
})();

let _customStatusBarHeight = null;

const statusBarHeight = isLandscape => {
  if (_customStatusBarHeight !== null) {
    return _customStatusBarHeight;
  }
  /**
   * This is a temporary workaround because we don't have a way to detect
   * if the status bar is translucent or opaque. If opaque, we don't need to
   * factor in the height here; if translucent (content renders under it) then
   * we do.
   */


  if (reactNative.Platform.OS === 'android') {
    if (global.Expo) {
      return global.Expo.Constants.statusBarHeight;
    } else {
      return 0;
    }
  }

  if (isIPhoneX) {
    return isLandscape ? 0 : 44;
  }

  if (isNewIPadPro) {
    return 24;
  }

  if (isIPad) {
    return 20;
  }

  return isLandscape ? 0 : 20;
};

const doubleFromPercentString = percent => {
  if (!percent.includes('%')) {
    return 0;
  }

  const dbl = parseFloat(percent) / 100;
  if (isNaN(dbl)) return 0;
  return dbl;
};

class SafeView extends React.Component {
  constructor(..._args) {
    super(..._args);

    _defineProperty$1(this, "state", {
      touchesTop: true,
      touchesBottom: true,
      touchesLeft: true,
      touchesRight: true,
      orientation: null,
      viewWidth: 0,
      viewHeight: 0
    });

    _defineProperty$1(this, "_onLayout", (...args) => {
      if (!this._isMounted) return;
      if (!this.view) return;
      const {
        isLandscape
      } = this.props;
      const {
        orientation
      } = this.state;
      const newOrientation = isLandscape ? 'landscape' : 'portrait';

      if (orientation && orientation === newOrientation) {
        return;
      }

      const WIDTH = isLandscape ? X_HEIGHT : X_WIDTH;
      const HEIGHT = isLandscape ? X_WIDTH : X_HEIGHT;

      this.view._component.measureInWindow((winX, winY, winWidth, winHeight) => {
        if (!this.view) {
          return;
        }

        let realY = winY;
        let realX = winX;

        if (realY >= HEIGHT) {
          realY = realY % HEIGHT;
        } else if (realY < 0) {
          realY = realY % HEIGHT + HEIGHT;
        }

        if (realX >= WIDTH) {
          realX = realX % WIDTH;
        } else if (realX < 0) {
          realX = realX % WIDTH + WIDTH;
        }

        const touchesTop = realY === 0;
        const touchesBottom = realY + winHeight >= HEIGHT;
        const touchesLeft = realX === 0;
        const touchesRight = realX + winWidth >= WIDTH;
        this.setState({
          touchesTop,
          touchesBottom,
          touchesLeft,
          touchesRight,
          orientation: newOrientation,
          viewWidth: winWidth,
          viewHeight: winHeight
        });
        if (this.props.onLayout) this.props.onLayout(...args);
      });
    });

    _defineProperty$1(this, "_getSafeAreaStyle", () => {
      const {
        touchesTop,
        touchesBottom,
        touchesLeft,
        touchesRight
      } = this.state;
      const {
        forceInset,
        isLandscape
      } = this.props;

      const {
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        viewStyle
      } = this._getViewStyles();

      const style = { ...viewStyle,
        paddingTop: touchesTop ? this._getInset('top') : 0,
        paddingBottom: touchesBottom ? this._getInset('bottom') : 0,
        paddingLeft: touchesLeft ? this._getInset('left') : 0,
        paddingRight: touchesRight ? this._getInset('right') : 0
      };

      if (forceInset) {
        Object.keys(forceInset).forEach(key => {
          let inset = forceInset[key];

          if (inset === 'always') {
            inset = this._getInset(key);
          }

          if (inset === 'never') {
            inset = 0;
          }

          switch (key) {
            case 'horizontal':
              {
                style.paddingLeft = inset;
                style.paddingRight = inset;
                break;
              }

            case 'vertical':
              {
                style.paddingTop = inset;
                style.paddingBottom = inset;
                break;
              }

            case 'left':
            case 'right':
            case 'top':
            case 'bottom':
              {
                const padding = `padding${key[0].toUpperCase()}${key.slice(1)}`;
                style[padding] = inset;
                break;
              }
          }
        });
      } // new height/width should only include padding from insets
      // height/width should not be affected by padding from style obj


      if (style.height && typeof style.height === 'number') {
        style.height += style.paddingTop + style.paddingBottom;
      }

      if (style.width && typeof style.width === 'number') {
        style.width += style.paddingLeft + style.paddingRight;
      }

      style.paddingTop = Math.max(style.paddingTop, paddingTop);
      style.paddingBottom = Math.max(style.paddingBottom, paddingBottom);
      style.paddingLeft = Math.max(style.paddingLeft, paddingLeft);
      style.paddingRight = Math.max(style.paddingRight, paddingRight);
      return style;
    });

    _defineProperty$1(this, "_getViewStyles", () => {
      const {
        viewWidth
      } = this.state; // get padding values from style to add back in after insets are determined
      // default precedence: padding[Side] -> vertical | horizontal -> padding -> 0

      let {
        padding = 0,
        paddingVertical = padding,
        paddingHorizontal = padding,
        paddingTop = paddingVertical,
        paddingBottom = paddingVertical,
        paddingLeft = paddingHorizontal,
        paddingRight = paddingHorizontal,
        ...viewStyle
      } = reactNative.StyleSheet.flatten(this.props.style || {});

      if (typeof paddingTop !== 'number') {
        paddingTop = doubleFromPercentString(paddingTop) * viewWidth;
      }

      if (typeof paddingBottom !== 'number') {
        paddingBottom = doubleFromPercentString(paddingBottom) * viewWidth;
      }

      if (typeof paddingLeft !== 'number') {
        paddingLeft = doubleFromPercentString(paddingLeft) * viewWidth;
      }

      if (typeof paddingRight !== 'number') {
        paddingRight = doubleFromPercentString(paddingRight) * viewWidth;
      }

      return {
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        viewStyle
      };
    });

    _defineProperty$1(this, "_getInset", key => {
      const {
        isLandscape
      } = this.props;

      switch (key) {
        case 'horizontal':
        case 'right':
        case 'left':
          {
            return isLandscape ? isIPhoneX ? 44 : 0 : 0;
          }

        case 'vertical':
        case 'top':
          {
            return statusBarHeight(isLandscape);
          }

        case 'bottom':
          {
            if (isIPhoneX) {
              return isLandscape ? 24 : 34;
            }

            if (isNewIPadPro) {
              return 20;
            }

            return 0;
          }
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
    reactNative.InteractionManager.runAfterInteractions(() => {
      this._onLayout();
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps() {
    this._onLayout();
  }

  render() {
    const {
      forceInset = false,
      isLandscape,
      style,
      ...props
    } = this.props;

    const safeAreaStyle = this._getSafeAreaStyle();

    return React__default.createElement(reactNative.Animated.View, _extends$1({
      ref: c => this.view = c,
      pointerEvents: "box-none"
    }, props, {
      onLayout: this._onLayout,
      style: safeAreaStyle
    }));
  }

}

_defineProperty$1(SafeView, "setStatusBarHeight", height => {
  _customStatusBarHeight = height;
});

const SafeAreaView = withOrientation(SafeView);

const withSafeArea = function (forceInset = {}) {
  return WrappedComponent => {
    class withSafeArea extends React.Component {
      render() {
        return React__default.createElement(SafeAreaView, {
          style: {
            flex: 1
          },
          forceInset: forceInset
        }, React__default.createElement(WrappedComponent, this.props));
      }

    }

    return hoistNonReactStatics_cjs$1(withSafeArea, WrappedComponent);
  };
};

var index$2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': SafeAreaView,
	withSafeArea: withSafeArea
});

Object.keys(reactNativePaper).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return reactNativePaper[k];
		}
	});
});
exports.$safeAreaView = index$2;
exports.$themeProvider = index$1;
