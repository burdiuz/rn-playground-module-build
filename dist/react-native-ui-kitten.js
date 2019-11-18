'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var merge = require('lodash.merge');
var reactNative = require('react-native');
var icons = require('react-native-eva-icons/icons');
var _rollupMoment = require('moment');

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

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const SYMBOL_REFERENCE = '$';
/**
 * @param name: string - theme property name, like `backgroundColor`
 * @param theme: ThemeType - theme
 * @param fallback: any - fallback value
 *
 * @return any. Theme property value if it presents in theme, fallback otherwise
 */

function getThemeValue(name, theme, fallback) {
  if (isReferenceKey(name)) {
    const themeKey = toThemeKey(name);
    return findThemeValue(themeKey, theme) || fallback;
  }

  return findThemeValue(name, theme) || fallback;
}

function findThemeValue(name, theme) {
  const value = theme[name];

  if (isReferenceKey(value)) {
    const themeKey = toThemeKey(value);
    return findThemeValue(themeKey, theme);
  }

  return value;
}
/**
 * @returns true if theme value references to another
 */


function isReferenceKey(value) {
  return `${value}`.startsWith(SYMBOL_REFERENCE);
}
/**
 * Transforms reference key to theme key
 */


function toThemeKey(value) {
  return `${value}`.substring(1);
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function createThemedStyle(mapping, theme) {
  return Object.keys(mapping).reduce((acc, current) => {
    const mappingValue = mapping[current];
    return Object.assign(Object.assign({}, acc), {
      [current]: getThemeValue(mappingValue, theme, mappingValue)
    });
  }, {});
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const SEPARATOR_MAPPING_ENTRY = '.';
class StyleConsumerService {
  constructor(name, context) {
    this.name = name;
    this.meta = this.safe(context.style[name], generatedConfig => {
      return generatedConfig.meta;
    });

    if (!this.meta) {
      const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';
      const message = [`\n${this.name}: unsupported configuration.`, 'Using UI Kitten components is only possible with configuring ApplicationProvider.', `📖 Documentation: ${docRoot}/guides/install-ui-kitten#configure-application-root`, '\nIn case you have all in place, there might be an incorrect usage of a "styled" function.', `📖 Documentation: ${docRoot}/design-system/custom-component-mapping`].join('\n');
      console.error(message);
    }
  }

  createDefaultProps() {
    const appearance = this.getDefaultAppearance();
    const variants = this.getDefaultVariants();
    const states = this.getDefaultStates();
    return Object.assign(Object.assign({
      appearance
    }, variants), states);
  }

  withStyledProps(source, context, interaction) {
    const styleInfo = this.getStyleInfo(source, interaction);
    const generatedMapping = this.getGeneratedStyleMapping(context.style, styleInfo);

    if (!generatedMapping) {
      const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';
      const message = [`${this.name}: unsupported configuration.`, `Check one of the following prop values ${JSON.stringify(styleInfo, null, 2)}`, `📖 Documentation: ${docRoot}/components/${this.name.toLowerCase()}/api`].join('\n');
      console.warn(message);
      return this.withStyledProps(Object.assign(Object.assign({}, source), this.createDefaultProps()), context, interaction);
    }

    const mapping = this.withValidParameters(generatedMapping);
    return Object.assign(Object.assign({}, source), {
      theme: context.theme,
      themedStyle: createThemedStyle(mapping, context.theme)
    });
  }

  getGeneratedStyleMapping(style, info) {
    return this.safe(style[this.name], componentStyles => {
      const styleKeys = Object.keys(componentStyles.styles);
      const query = this.findGeneratedQuery(info, styleKeys);
      return componentStyles.styles[query];
    });
  }

  withValidParameters(mapping) {
    const invalidParameters = [];
    Object.keys(mapping).forEach(key => {
      if (!Object.keys(this.meta.parameters).includes(key)) {
        invalidParameters.push(key);
        delete mapping[key];
      }
    });

    if (invalidParameters.length !== 0) {
      const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';
      const message = [`${this.name}: unsupported configuration.`, `Unable to apply ${invalidParameters}`, 'There might be an incorrect usage of mapping', `📖 Documentation: ${docRoot}/design-system/custom-component-mapping`].join('\n');
      console.warn(message);
    }

    return mapping;
  }

  getStyleInfo(props, interaction) {
    const variantProps = this.getDerivedVariants(this.meta, props);
    const stateProps = this.getDerivedStates(this.meta, props);
    const variants = Object.keys(variantProps).map(variant => {
      return variantProps[variant];
    });
    const states = Object.keys(stateProps);
    return {
      appearance: props.appearance,
      variants: variants,
      states: [...states, ...interaction]
    };
  }

  getDefaultAppearance() {
    const matches = Object.keys(this.meta.appearances).filter(appearance => {
      return this.meta.appearances[appearance].default === true;
    });
    return matches[matches.length - 1];
  }

  getDefaultVariants() {
    return this.transformObject(this.meta.variantGroups, (variants, group) => {
      return Object.keys(variants[group]).find(variant => {
        return variants[group][variant].default === true;
      });
    });
  }

  getDefaultStates() {
    return this.transformObject(this.meta.states, (states, state) => {
      const isDefault = states[state].default === true;
      return isDefault ? isDefault : undefined;
    });
  }

  getDerivedVariants(meta, props) {
    return this.transformObject(props, (p, prop) => {
      const isVariant = Object.keys(meta.variantGroups).includes(prop);
      return isVariant ? p[prop] : undefined;
    });
  }

  getDerivedStates(meta, props) {
    return this.transformObject(props, (p, prop) => {
      const isState = Object.keys(meta.states).includes(prop);
      const isAssigned = p[prop] === true;
      return isState && isAssigned;
    });
  }
  /**
   * Iterates throw `value` object keys and fills it values with values provided by `transform` callback
   * If `transform` returns `undefined`, then appends nothing
   *
   * @param value (V extends object) - object to transform
   * @param transform - object key transformation callback
   */


  transformObject(value, transform) {
    return Object.keys(value).reduce((acc, key) => {
      const nextValue = transform(value, key);
      return nextValue ? Object.assign(Object.assign({}, acc), {
        [key]: nextValue
      }) : acc;
    }, {});
  }
  /**
   * Finds identical keys across `source` keys array
   *
   * Example:
   *
   * source = ['default.error.small.checked', ...]
   * info = { appearance: 'default', variants: ['small', 'error'], states: ['checked'] }
   *
   * will return ['default', 'error', 'small', 'checked']
   *
   * @param info (StyleInfo) - component style info
   * @param source (string[]) - array of style keys
   *
   * @return (string | undefined) - key identical to some of `source` keys if presents
   */


  findGeneratedQuery(info, source) {
    const query = [info.appearance, ...info.variants, ...info.states];
    const matches = source.filter(key => {
      const keyQuery = key.split(SEPARATOR_MAPPING_ENTRY);
      return this.compareArrays(query, keyQuery);
    });
    return matches[0];
  }
  /**
   * @param lhs (string[]) - comparable array
   * @param rhs (string[]) - comparing array
   *
   * @return true if all of lhs keys are included in rhs
   */


  compareArrays(lhs, rhs) {
    if (lhs.length !== rhs.length) {
      return false;
    }

    return lhs.reduce((acc, current) => acc && rhs.includes(current), true);
  }
  /**
   * Safely retrieves R value of T object with reducer
   *
   * @param value (T | undefined) - unsafe object which should be processed
   * @param reducer ((T) => R) - `value` processing lambda. Called if `value` is not `undefined`
   * @param fallback (R) - fallback value to return. Optional
   *
   * @return (R | undefined) - object returned by `reducer` if `value` is not `undefined`, `fallback` otherwise
   **/


  safe(value, reducer, fallback) {
    if (value) {
      return reducer(value);
    }

    return fallback;
  }

}

const defaultValue = {};
const MappingContext = React.createContext(defaultValue);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const defaultValue$1 = {};
const ThemeContext = React.createContext(defaultValue$1);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `styled` is a High Order Function which is used to apply style mapping on component.
 *
 * Requires component to have `styledComponentName` string property which defines
 * corresponding component name in mapping. (e.g 'Button' for Button component).
 * Returns component class which can be used as styled component.
 *
 * @property {string} appearance - Determines style appearance of component. Default is provided by mapping.
 *
 * @property {ThemeType} theme - Determines theme used to style component.
 *
 * @property {StyleType} themedStyle - Determines component style for it's current state.
 *
 * @property {(interaction: Interaction[]) => void} dispatch - Determines function
 * for dispatching current state of component. This is designed to be used as style request function.
 * Calls component re-render if style for requested state differ from current.
 *
 * @param Component - Type: {React.ComponentClass}. Determines class or functional component to be styled.
 *
 * @overview-example Declaring Styled Component
 *
 * ```
 * import React from 'react';
 * import { TouchableOpacity } from 'react-native';
 * import { styled, Interaction } from '../..';
 *
 * class Button extends React.Component {
 *
 *   // Define component name used in `mapping`
 *   static styledComponentName = 'Button';
 *
 *   onPressIn = (e) => {
 *     // Request styles for `active` state and re-render
 *
 *     this.props.dispatch([Interaction.ACTIVE]);
 *
 *     if(this.props.onPressIn) {
 *       this.props.onPressIn(e);
 *     }
 *   };
 *
 *   onPressOut = (e) => {
 *     // Request styles for default state and re-render
 *
 *     this.props.dispatch([]);
 *
 *     if(this.props.onPressOut) {
 *       this.props.onPressOut(e);
 *     }
 *   };
 *
 *   render() {
 *     // Retrieve styles for current state from props (provided with themedStyle prop)
 *     // And apply it with saving priority of `style` prop
 *
 *     const { style, themedStyle, ...restProps } = this.props;
 *
 *     return (
 *       <TouchableOpacity
 *         {...restProps}
 *         style={[themedStyle, style]}
 *         onPressIn={this.onPressIn}
 *         onPressOut={this.onPressOut}
 *       />
 *     );
 *   }
 * }
 *
 * export const StyledButton = styled(Button);
 * ```
 *
 * @overview-example Styled Component Usage
 *
 * ```
 * import React from 'react';
 * import { StyledButton } from './path-to/styledButton.component';
 *
 * export const StyledButtonShowcase = (props) => (
 *   <StyledButton {...props}/>
 * );
 * ```
 */

const styled = Component => {
  // @ts-ignore
  if (!Component.styledComponentName) {
    console.warn('Styled components should specify corresponding style name.');
    return null;
  }

  class Wrapper extends React.Component {
    constructor() {
      super(...arguments);
      this.state = {
        interaction: []
      };
      this.init = false;

      this.onInit = context => {
        // @ts-ignore
        this.service = new StyleConsumerService(Component.styledComponentName, context);
        this.defaultProps = this.service.createDefaultProps();
        this.init = true;
      };

      this.onDispatch = interaction => {
        this.setState({
          interaction
        });
      };

      this.withStyledProps = (source, context) => {
        const {
          interaction
        } = this.state;
        const props = Object.assign(Object.assign({}, this.defaultProps), source);
        return this.service.withStyledProps(props, context, interaction);
      };

      this.renderWrappedElement = context => {
        if (!this.init) {
          this.onInit(context);
        }

        const _a = this.props,
              {
          forwardedRef
        } = _a,
              restProps = __rest(_a, ["forwardedRef"]);

        const props = this.withStyledProps(restProps, context);
        return React.createElement(Component, _extends({}, props, {
          ref: forwardedRef,
          dispatch: this.onDispatch
        }));
      };
    }

    render() {
      const StyledElement = this.renderWrappedElement;
      return React.createElement(MappingContext.Consumer, null, styles => React.createElement(ThemeContext.Consumer, null, theme => React.createElement(StyledElement, {
        style: styles,
        theme: theme
      })));
    }

  }

  const WrappingElement = (props, ref) => {
    return (// @ts-ignore
      React.createElement(Wrapper, _extends({}, props, {
        forwardedRef: ref
      }))
    );
  };

  const ResultComponent = React.forwardRef(WrappingElement);
  ResultComponent.displayName = Component.displayName || Component.name; // @ts-ignore

  hoistNonReactStatics_cjs(ResultComponent, Component); // @ts-ignore

  return ResultComponent;
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$1 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `withStyles` is a High Order Function which is used to create themed style for non-styled component.
 * Basically used when need to use theme variable somewhere.
 * Returns component class which can be used as themed component.
 *
 * @property {ThemeType} theme - Determines theme used to style component.
 *
 * @property {StyleType} themedStyle - Determines component style for it's current state.
 *
 * @param Component - Type: {React.ComponentClass}. Determines class of component to be themed.
 *
 * @param createStyles - Type: {(theme: ThemeType) => any}. Determines arrow function used to create styles.
 *
 * @overview-example Declaring Themed Component
 *
 * ```
 * import React from 'react';
 * import { TouchableOpacity } from 'react-native';
 * import { withStyles } from '../..';
 *
 * class Button extends React.Component {
 *
 *   render() {
 *     // Retrieve styles from props (provided with themedStyle prop)
 *     // And apply it with saving priority of `style` prop
 *
 *     const { style, themedStyle, ...restProps } = this.props;
 *
 *     return (
 *       <TouchableOpacity
 *         {...restProps}
 *         style={[themedStyle, style]}
 *       />
 *     );
 *   }
 * }
 *
 * export const ThemedButton = withStyles(Button, (theme) => ({
 *   backgroundColor: theme['color-primary-default'],
 * }));
 * ```
 *
 * @overview-example Themed Component Usage
 *
 * ```
 * import React from 'react';
 * import { ThemedButton } from './path-to/themedButton.component';
 *
 * export const ThemedButtonShowcase = (props) => (
 *   <ThemedButton {...props}/>
 * );
 * ```
 */

const withStyles = (Component, createStyles) => {
  class Wrapper extends React.Component {
    constructor() {
      super(...arguments);

      this.createThemedStyles = (style, theme) => {
        return Object.keys(style).reduce((acc, current) => {
          return Object.assign(Object.assign({}, acc), {
            [current]: createThemedStyle(style[current], theme)
          });
        }, {});
      };

      this.withThemedProps = (source, context) => {
        const style = createStyles ? createStyles(context.theme) : {};
        return Object.assign(Object.assign({}, source), {
          theme: context.theme,
          themedStyle: this.createThemedStyles(style, context.theme)
        });
      };

      this.renderWrappedElement = context => {
        const _a = this.props,
              {
          forwardedRef
        } = _a,
              restProps = __rest$1(_a, ["forwardedRef"]);

        const props = this.withThemedProps(restProps, context);
        return React.createElement(Component, _extends$1({}, props, {
          ref: forwardedRef
        }));
      };
    }

    render() {
      const ThemedElement = this.renderWrappedElement;
      return React.createElement(ThemeContext.Consumer, null, theme => React.createElement(ThemedElement, {
        theme: theme
      }));
    }

  }

  const WrappingElement = (props, ref) => {
    return (// @ts-ignore
      React.createElement(Wrapper, _extends$1({}, props, {
        forwardedRef: ref
      }))
    );
  };

  const ThemedComponent = React.forwardRef(WrappingElement);
  ThemedComponent.displayName = Component.displayName || Component.name; // @ts-ignore

  hoistNonReactStatics_cjs(ThemedComponent, Component); // @ts-ignore

  return ThemedComponent;
};

var common_service = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Safely retrieves R value of T object with reducer
 *
 * @param value (T | undefined) - unsafe object which should be processed
 * @param reducer ((T) => R) - `value` processing lambda. Called if `value` is not `undefined`
 *
 * @return (R | undefined) - object returned by `reducer` if `value` is not `undefined`, `undefined` otherwise
 **/
function safe(value, reducer) {
    if (value) {
        return reducer(value);
    }
    return undefined;
}
exports.safe = safe;
/**
 * Maps 2-dim array to 1-dim
 *
 * @param params (T[][]) - 2-dim array
 *
 * @return 1-dim array
 */
function flatten(params) {
    return [].concat(...params);
}
exports.flatten = flatten;
/**
 * Removes all duplicates from array
 *
 * @param params (T[]) - array with possible duplicate values
 *
 * @return (T[]) - processed array
 */
function noDuplicates(params) {
    return [...new Set(params)];
}
exports.noDuplicates = noDuplicates;
/**
 * Removes null and undefined values from array
 *
 * @param params (T[]) - array with possible null values
 *
 * @return (T[]) - processed array
 */
function noNulls(params) {
    return params.filter(Boolean);
}
exports.noNulls = noNulls;
/**
 * Returns Object with string keys from array type [string, IndexSignatureBase]
 *
 * @param array like [string, IndexSignatureBase]
 *
 * @return object with string keys and IndexSignatureBase values
 */
function toObject(array) {
    return array.reduce((p, c) => {
        if (p && p.hasOwnProperty(c[0])) {
            p[c[0]] = Object.assign(Object.assign({}, p[c[0]]), c[1]);
        }
        else {
            p[c[0]] = c[1];
        }
        return p;
    }, {});
}
exports.toObject = toObject;

});

unwrapExports(common_service);
var common_service_1 = common_service.safe;
var common_service_2 = common_service.flatten;
var common_service_3 = common_service.noDuplicates;
var common_service_4 = common_service.noNulls;
var common_service_5 = common_service.toObject;

var common = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(common_service);

});

unwrapExports(common);

var mapping_service = createCommonjsModule(function (module, exports) {
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });

function getComponentDefaultAppearance(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { appearances } = value.meta;
        return Object.keys(appearances).find((appearance) => {
            return appearances[appearance].default === true;
        });
    });
}
exports.getComponentDefaultAppearance = getComponentDefaultAppearance;
function getComponentDefaultVariants(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { variantGroups } = value.meta;
        return Object.keys(variantGroups).map((group) => {
            return Object.keys(variantGroups[group]).find((variant) => {
                return variantGroups[group][variant].default === true;
            });
        });
    });
}
exports.getComponentDefaultVariants = getComponentDefaultVariants;
function getComponentDefaultState(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { states } = value.meta;
        return Object.keys(states).find((state) => {
            return states[state].default === true;
        });
    });
}
exports.getComponentDefaultState = getComponentDefaultState;
function getComponentVariantGroups(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { variantGroups } = value.meta;
        return Object.keys(variantGroups);
    });
}
exports.getComponentVariantGroups = getComponentVariantGroups;
function getComponentVariants(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { variantGroups } = value.meta;
        return Object.keys(variantGroups).map((group) => {
            return Object.keys(variantGroups[group]);
        });
    });
}
exports.getComponentVariants = getComponentVariants;
function getComponentStates(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { states } = value.meta;
        return Object.keys(states);
    });
}
exports.getComponentStates = getComponentStates;
function getStateAppearanceMapping(mapping, component, appearance, state) {
    const appearanceMapping = getAppearanceMapping(mapping, component, appearance);
    return common.safe(appearanceMapping, (value) => {
        return getStateMapping(value, state);
    });
}
exports.getStateAppearanceMapping = getStateAppearanceMapping;
function getStatelessAppearanceMapping(mapping, component, appearance) {
    const appearanceMapping = getAppearanceMapping(mapping, component, appearance);
    return common.safe(appearanceMapping, (value) => {
        const params = __rest(value, ["state"]);
        return params;
    });
}
exports.getStatelessAppearanceMapping = getStatelessAppearanceMapping;
function getStateVariantMapping(mapping, component, appearance, variant, state) {
    const variantMapping = getVariantMapping(mapping, component, appearance, variant);
    return common.safe(variantMapping, (value) => {
        return getStateMapping(value, state);
    });
}
exports.getStateVariantMapping = getStateVariantMapping;
function getStatelessVariantMapping(mapping, component, appearance, variant) {
    const variantMapping = getVariantMapping(mapping, component, appearance, variant);
    return common.safe(variantMapping, (value) => {
        const params = __rest(value, ["state"]);
        return params;
    });
}
exports.getStatelessVariantMapping = getStatelessVariantMapping;
function getComponentMapping(mapping, component) {
    return mapping[component];
}
exports.getComponentMapping = getComponentMapping;
function getAppearance(mapping, component, appearance) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        return value.appearances[appearance];
    });
}
function getAppearanceMapping(mapping, component, appearance) {
    const appearanceConfig = getAppearance(mapping, component, appearance);
    return common.safe(appearanceConfig, (value) => {
        return value.mapping;
    });
}
function getVariantMapping(mapping, component, appearance, variant) {
    const appearanceConfig = getAppearance(mapping, component, appearance);
    return common.safe(appearanceConfig, (value) => {
        return common.safe(value.variantGroups, (groupValue) => {
            const groupName = Object.keys(groupValue).find((group) => {
                return groupValue[group][variant] !== undefined;
            });
            return common.safe(groupName, (groupNameValue) => {
                return groupValue[groupNameValue][variant];
            });
        });
    });
}
function getStateMapping(mapping, state) {
    return common.safe(mapping.state, (value) => {
        return value[state];
    });
}

});

unwrapExports(mapping_service);
var mapping_service_1 = mapping_service.getComponentDefaultAppearance;
var mapping_service_2 = mapping_service.getComponentDefaultVariants;
var mapping_service_3 = mapping_service.getComponentDefaultState;
var mapping_service_4 = mapping_service.getComponentVariantGroups;
var mapping_service_5 = mapping_service.getComponentVariants;
var mapping_service_6 = mapping_service.getComponentStates;
var mapping_service_7 = mapping_service.getStateAppearanceMapping;
var mapping_service_8 = mapping_service.getStatelessAppearanceMapping;
var mapping_service_9 = mapping_service.getStateVariantMapping;
var mapping_service_10 = mapping_service.getStatelessVariantMapping;
var mapping_service_11 = mapping_service.getComponentMapping;

var mapping = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(mapping_service);

});

unwrapExports(mapping);

var style_service = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


exports.SEPARATOR_MAPPING_ENTRY = '.';
/**
 * Creates style object for variant/list of variants(optional) and its state/list of states(optional)
 *
 * Example
 *
 * appearance = 'outline';
 * variants = ['success', 'large'];
 * state = ['active', 'checked'];
 *
 * a = `default` + `outline`                    - acc appearance (apce) mapping
 *
 * v1 = `success` of `default`                  - `success` variant mapping of `default` apce
 * v2 = `success` of `outline`                  - `success` variant mapping of `outline` apce
 * v3 = `large` of `default`                    - `large` variant mapping of `default` apce
 * v4 = `large` of `outline`                    - `large` variant mapping of `outline` apce
 *
 * s1 = `active` of `default`                   - `active` state mapping of `default` apce
 * s2 = `active` of `outline`                   - `active` state mapping of `outline` apce
 * s3 = `active` of `default success`           - `active` state mapping of `success` variant of `default` apce
 * s4 = `active` of `outline success`           - `active` state mapping of `success` variant of `outline` apce
 * s5 = `active` of `default large`             - `active` state mapping of `large` variant of `default` apce
 * s6 = `active` of `outline large`             - `active` state mapping of `large` variant of `outline` apce
 *
 * s7 = `checked` of `default`                  - `checked` state mapping of `default` apce
 * s8 = `checked` of `outline`                  - `checked` state mapping of `outline` apce
 * s9 = `checked` of `default success`          - `checked` state mapping of `success` variant of `default` apce
 * s10 = `checked` of `outline success`         - `checked` state mapping of `success` variant of `outline` apce
 * s11 = `checked` of `default large`           - `checked` state mapping of `large` variant of `default` apce
 * s12 = `checked` of `outline large`           - `checked` state mapping of `large` variant of `outline` apce
 *
 * s13 = `active.checked` of `default`          - `active.checked` state mapping of `default` apce
 * s14 = `active.checked` of `outline`          - `active.checked` state mapping of `outline` apce
 * s15 = `active.checked` of `default success`  - `active.checked` state mapping of `success` variant of `default` apce
 * s16 = `active.checked` of `outline success`  - `active.checked` state mapping of `success` variant of `outline` apce
 * s17 = `active.checked` of `default large`    - `active.checked` state mapping of `large` variant of `default` apce
 * s18 = `active.checked` of `outline large`    - `active.checked` state mapping of `large` variant of `outline` apce
 *
 * res = a + (v1 + v2 + ... + vn) + (s1 + s2 + ... + sn)
 *
 * @param mapping: ThemeMappingType - theme mapping configuration
 * @param component: string - component name
 * @param appearance: string - appearance applied to component
 * @param variants: string[] - variants applied to component. Default is []
 * @param states: string[] - states in which component is. Default is []
 * @param theme: StrictTheme - theme configuration object. Default is {}
 *
 * @return ThemedStyleType - compiled component styles declared in mappings, mapped to theme values
 */
function createStyle(mapping$1, component, appearance, variants = [], states = [], theme = {}) {
    const normalizedAppearance = normalizeAppearance(mapping$1, component, appearance);
    const normalizedVariants = normalizeVariants(mapping$1, component, variants);
    const normalizedStates = normalizeStates(mapping$1, component, states, (state) => {
        return states.indexOf(state);
    });
    const appearanceMapping = reduce(normalizedAppearance, apce => {
        return mapping.getStatelessAppearanceMapping(mapping$1, component, apce);
    });
    const variantMapping = reduce(normalizedVariants, variant => {
        return reduce(normalizedAppearance, apce => {
            return mapping.getStatelessVariantMapping(mapping$1, component, apce, variant);
        });
    });
    const stateMapping = reduce(normalizedStates, state => {
        const appearanceStateMapping = reduce(normalizedAppearance, apce => {
            return mapping.getStateAppearanceMapping(mapping$1, component, apce, state);
        });
        const variantStateMapping = reduce(normalizedVariants, variant => {
            return reduce(normalizedAppearance, apce => {
                return mapping.getStateVariantMapping(mapping$1, component, apce, variant, state);
            });
        });
        return Object.assign(Object.assign({}, appearanceStateMapping), variantStateMapping);
    });
    const strictlessMapping = Object.assign(Object.assign(Object.assign({}, appearanceMapping), variantMapping), stateMapping);
    return withStrictTokens(strictlessMapping, theme);
}
exports.createStyle = createStyle;
function createAllStyles(mapping, component, appearance, variants, states, theme) {
    const stateless = createStyleEntry(mapping, component, appearance, appearance, '', '', theme);
    const withStates = states.reduce((acc, current) => {
        const key = appearance.concat(exports.SEPARATOR_MAPPING_ENTRY, current);
        const next = createStyleEntry(mapping, component, key, appearance, '', current, theme);
        return [...acc, next];
    }, []);
    const withVariants = variants.map(variant => {
        const key = appearance.concat(exports.SEPARATOR_MAPPING_ENTRY, variant);
        return createStyleEntry(mapping, component, key, appearance, variant, '', theme);
    });
    const withVariantStates = variants.reduce((acc, current) => {
        const next = states.map(state => {
            const key = appearance.concat(exports.SEPARATOR_MAPPING_ENTRY, current, exports.SEPARATOR_MAPPING_ENTRY, state);
            return createStyleEntry(mapping, component, key, appearance, current, state, theme);
        });
        return [...acc, ...next];
    }, []);
    return [
        stateless,
        ...withStates,
        ...withVariants,
        ...withVariantStates,
    ];
}
exports.createAllStyles = createAllStyles;
function getStyle(mapping, component, appearance, variants, states) {
    return common.safe(mapping, (themeMapping) => {
        return common.safe(themeMapping[component], (componentMapping) => {
            const query = findStyleKey(Object.keys(componentMapping), [
                appearance,
                ...variants,
                ...states,
            ]);
            return componentMapping[query];
        });
    });
}
exports.getStyle = getStyle;
/**
 * Creates normalized to design system array of component appearances
 *
 * Example:
 *
 * '' => ['default']
 * 'bold' => ['default', 'bold']
 * 'default' => ['default']
 * ...
 *
 * @param mapping: ThemeMappingType - theme mapping configuration
 * @param component: string - component name
 * @param appearance: string - appearance applied to component
 *
 * @return string[] - array of merged appearances
 */
function normalizeAppearance(mapping$1, component, appearance) {
    const defaultAppearance = mapping.getComponentDefaultAppearance(mapping$1, component);
    return normalize([defaultAppearance, appearance]);
}
exports.normalizeAppearance = normalizeAppearance;
/**
 * Creates normalized to design system array of component variants
 *
 * Example:
 *
 * [''] => ['default0', 'default1']
 * ['success'] => ['default0', 'default1', 'success']
 * ['default0', 'tiny'] => ['default0', 'default1', 'tiny']
 * ...
 *
 * @param mapping: ThemeMappingType - theme mapping configuration
 * @param component: string - component name
 * @param variants: string[] - variants applied to component
 *
 * @return string[] - array of merged variants
 */
function normalizeVariants(mapping$1, component, variants) {
    const defaultVariants = mapping.getComponentDefaultVariants(mapping$1, component);
    return normalize([...defaultVariants, ...variants]);
}
exports.normalizeVariants = normalizeVariants;
/**
 * Creates normalized to design system array of component states
 *
 * Example:
 *
 * [''] => ['default']
 * ['active', 'checked'] => [
 *                           'default',
 *                           'active',
 *                           'default.active',
 *                           'checked',
 *                           'default.active.checked'
 *                          ]
 * ...
 *
 * @param mapping: ThemeMappingType - theme mapping configuration
 * @param component: string - component name
 * @param states: string[] - states in which component is
 * @param stateWeight: (state: string) => number - state weight calculation lambda
 * @param separator - state separator. `.` in example
 *
 * @return string[] - array of merged states
 */
function normalizeStates(mapping$1, component, states, stateWeight, separator = exports.SEPARATOR_MAPPING_ENTRY) {
    const defaultState = mapping.getComponentDefaultState(mapping$1, component);
    const preprocess = normalize([defaultState, ...states]);
    if (preprocess.length === 0) {
        return preprocess;
    }
    const variations = createStateVariations([...preprocess], separator, []);
    return variations.sort((lhs, rhs) => {
        const lhsWeight = getStateVariationWeight(lhs, separator, stateWeight);
        const rhsWeight = getStateVariationWeight(rhs, separator, stateWeight);
        return lhsWeight - rhsWeight;
    });
}
exports.normalizeStates = normalizeStates;
function createStateVariations(states, separator, result = []) {
    if (states.length === 0) {
        return result;
    }
    const next = states.reduce((acc, current) => {
        const nextItem = acc.map(value => value.concat(separator, current));
        return [...acc, ...nextItem];
    }, [states.shift()]);
    return createStateVariations(states, separator, [...result, ...next]);
}
function withStrictTokens(mapping, theme) {
    return Object.keys(mapping).reduce((acc, next) => {
        const currentToken = mapping[next];
        const nextToken = theme[currentToken] || currentToken;
        return Object.assign(Object.assign({}, acc), { [next]: nextToken });
    }, {});
}
function getStateVariationWeight(state, separator, stateWeight) {
    const parts = state.split(separator);
    return parts.reduce((acc, current) => {
        return acc + stateWeight(current) + parts.length;
    }, 0);
}
/**
 * Finds identical keys across `source` keys array
 *
 * Example:
 *
 * source = ['default.error.small.checked', ...]
 * query = ['default', 'small', 'error', 'checked']
 *
 * will return 'default.error.small.checked'
 *
 * @param source (string[]) - array of style keys
 * @param query (string[]) - array of key parts to search
 *
 * @return (string | undefined) - key identical to some of `source` keys if presents
 */
function findStyleKey(source, query) {
    const partialKeys = source.map((key) => {
        return key.split(exports.SEPARATOR_MAPPING_ENTRY);
    });
    const result = partialKeys.filter((partial) => {
        return compareArrays(query, partial);
    });
    return common.safe(result[0], (value) => {
        return value.join(exports.SEPARATOR_MAPPING_ENTRY);
    });
}
exports.findStyleKey = findStyleKey;
function createStyleEntry(mapping, component, key, appearance, variant = '', state = '', theme = {}) {
    const value = createStyle(mapping, component, appearance, variant.split(exports.SEPARATOR_MAPPING_ENTRY), state.split(exports.SEPARATOR_MAPPING_ENTRY), theme);
    return [key, value];
}
function normalize(params) {
    return common.noNulls(common.noDuplicates(params));
}
function compareArrays(lhs, rhs) {
    const isEqualLength = lhs && rhs && lhs.length === rhs.length;
    if (!isEqualLength) {
        return false;
    }
    return lhs.reduce((acc, next) => acc && rhs.includes(next), true);
}
function reduce(items, next) {
    return items.reduce((acc, current) => (Object.assign(Object.assign({}, acc), next(current))), {});
}

});

unwrapExports(style_service);
var style_service_1 = style_service.SEPARATOR_MAPPING_ENTRY;
var style_service_2 = style_service.createStyle;
var style_service_3 = style_service.createAllStyles;
var style_service_4 = style_service.getStyle;
var style_service_5 = style_service.normalizeAppearance;
var style_service_6 = style_service.normalizeVariants;
var style_service_7 = style_service.normalizeStates;
var style_service_8 = style_service.findStyleKey;

var style = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(style_service);

});

unwrapExports(style);

var service = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(common);
__export(mapping);
__export(style);

});

unwrapExports(service);

var mappingProcessor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class MappingProcessor {
    process(params) {
        return Object.keys(params).reduce((acc, component) => {
            return [
                ...acc,
                ...this.getComponentMappingMeta(params, component),
            ];
        }, []);
    }
    getComponentMappingMeta(mapping, component) {
        const componentMapping = mapping[component];
        return Object.keys(componentMapping.appearances).map((appearance) => {
            return {
                name: component,
                appearance: appearance,
                variants: this.getComponentVariants(mapping, component),
                states: this.getComponentStates(mapping, component),
            };
        });
    }
    getComponentVariants(mapping, component) {
        const variants = service.getComponentVariants(mapping, component);
        return this.concatComponentVariants([...variants]);
    }
    getComponentStates(mapping, component) {
        const states = service.getComponentStates(mapping, component);
        return this.concatComponentStates([...states]);
    }
    concatComponentVariants(variants, result = []) {
        if (variants.length === 0) {
            return result;
        }
        const concat = variants.reduce((acc, current) => {
            return [...acc, ...this.concatVariantGroups(acc, current)];
        }, variants.shift());
        return this.concatComponentVariants(variants, [...result, ...concat]);
    }
    concatVariantGroups(lhs, rhs) {
        return lhs.reduce((acc, lhsValue) => {
            const concat = rhs.map(rhsValue => {
                return lhsValue.concat(service.SEPARATOR_MAPPING_ENTRY, rhsValue);
            });
            return [...acc, ...concat];
        }, []);
    }
    concatComponentStates(states, result = []) {
        if (states.length === 0) {
            return result;
        }
        const concat = states.reduce((acc, current) => {
            const next = acc.map(value => value.concat(service.SEPARATOR_MAPPING_ENTRY, current));
            return [...acc, ...next];
        }, [states.shift()]);
        return this.concatComponentStates(states, [...result, ...concat]);
    }
}
exports.MappingProcessor = MappingProcessor;

});

unwrapExports(mappingProcessor);
var mappingProcessor_1 = mappingProcessor.MappingProcessor;

var metaProcessor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class MetaProcessor {
    process(params) {
        const { mapping, meta, theme } = params;
        const entries = meta.reduce((acc, controlMeta) => {
            const { name, appearance, variants, states } = controlMeta;
            const nextAppearanceEntries = service.createAllStyles(mapping, name, appearance, variants, states, theme);
            const prevAppearanceStyles = acc[name];
            const nextAppearanceStyles = service.toObject(nextAppearanceEntries);
            return Object.assign(Object.assign({}, acc), { [name]: Object.assign(Object.assign({}, prevAppearanceStyles), nextAppearanceStyles) });
        }, {});
        return this.withControlMeta(mapping, entries);
    }
    withControlMeta(mapping, style) {
        return Object.keys(style).reduce((acc, control) => {
            const controlEntry = {
                meta: mapping[control].meta,
                styles: style[control],
            };
            return Object.assign(Object.assign({}, acc), { [control]: controlEntry });
        }, {});
    }
}
exports.MetaProcessor = MetaProcessor;

});

unwrapExports(metaProcessor);
var metaProcessor_1 = metaProcessor.MetaProcessor;

var schemaProcessor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


class SchemaProcessor {
    constructor() {
        this.mappingProcessor = new mappingProcessor.MappingProcessor();
        this.metaProcessor = new metaProcessor.MetaProcessor();
    }
    process(params) {
        const { components: themeMapping, strict: strictTheme } = params;
        const meta = this.mappingProcessor.process(themeMapping);
        return this.metaProcessor.process({
            mapping: themeMapping,
            meta: meta,
            theme: strictTheme,
        });
    }
}
exports.SchemaProcessor = SchemaProcessor;

});

unwrapExports(schemaProcessor);
var schemaProcessor_1 = schemaProcessor.SchemaProcessor;

var processor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.MappingProcessor = mappingProcessor.MappingProcessor;

exports.MetaProcessor = metaProcessor.MetaProcessor;

exports.SchemaProcessor = schemaProcessor.SchemaProcessor;

});

unwrapExports(processor);
var processor_1 = processor.MappingProcessor;
var processor_2 = processor.MetaProcessor;
var processor_3 = processor.SchemaProcessor;

var processor$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.SchemaProcessor = processor.SchemaProcessor;

});

unwrapExports(processor$1);
var processor_2$1 = processor$1.SchemaProcessor;

class MappingProvider extends React.PureComponent {
  render() {
    const {
      styles,
      children
    } = this.props;
    return React.createElement(MappingContext.Provider, {
      value: styles
    }, children);
  }

}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class ThemeProvider extends React.PureComponent {
  render() {
    const {
      theme,
      children
    } = this.props;
    return React.createElement(ThemeContext.Provider, {
      value: theme
    }, children);
  }

}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class StyleProvider extends React.PureComponent {
  render() {
    const {
      styles,
      theme,
      children
    } = this.props;
    return React.createElement(MappingProvider, {
      styles: styles
    }, React.createElement(ThemeProvider, {
      theme: theme
    }, children));
  }

}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$2 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class ModalResolver extends React.Component {
  constructor() {
    super(...arguments);

    this.onBackdropPress = () => {
      const {
        allowBackdrop,
        onBackdropPress
      } = this.props;

      if (allowBackdrop) {
        onBackdropPress();
      }
    };

    this.onStartShouldSetResponder = () => {
      return true;
    };

    this.onResponderRelease = () => {
      return;
    };

    this.onStartShouldSetResponderCapture = () => {
      return false;
    };

    this.renderComponentChild = source => {
      return React.cloneElement(source, {
        style: [source.props.style, this.props.style]
      });
    };

    this.renderComponentChildren = source => {
      return React.Children.map(source, this.renderComponentChild);
    };

    this.renderWithBackDrop = component => {
      return React.createElement(reactNative.TouchableOpacity, {
        style: styles.container,
        onPress: this.onBackdropPress,
        activeOpacity: 1
      }, component);
    };

    this.renderWithoutBackDrop = component => {
      return React.createElement(reactNative.View, {
        style: styles.notVisibleWrapper
      }, React.createElement(reactNative.View, {
        style: styles.container,
        pointerEvents: "none"
      }), component);
    };

    this.renderComponent = () => {
      const _a = this.props,
            {
        children,
        allowBackdrop
      } = _a,
            derivedProps = __rest$2(_a, ["children", "allowBackdrop"]);

      const componentChildren = this.renderComponentChildren(children);
      const dialog = React.createElement(reactNative.View, _extends$2({}, derivedProps, {
        style: styles.contentWrapper,
        onStartShouldSetResponder: this.onStartShouldSetResponder,
        onResponderRelease: this.onResponderRelease,
        onStartShouldSetResponderCapture: this.onStartShouldSetResponderCapture,
        pointerEvents: "box-none"
      }), componentChildren);
      return allowBackdrop ? this.renderWithBackDrop(dialog) : this.renderWithoutBackDrop(dialog);
    };
  }

  render() {
    return this.props.visible ? this.renderComponent() : null;
  }

}
ModalResolver.defaultProps = {
  visible: false
};
const styles = reactNative.StyleSheet.create({
  container: reactNative.StyleSheet.absoluteFillObject,
  notVisibleWrapper: {
    position: 'absolute',
    width: 0,
    height: 0
  },
  contentWrapper: {
    alignSelf: 'flex-start'
  }
});

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Singleton service designed to manage modal components.
 *
 * @type ModalServiceType
 *
 * @method {(element: React.ReactElement<ModalPresentingBased>, config: ModalPresentingConfig) => string} show -
 * Shows component in a modal window. Returns its id.
 *
 * @method {(identifier: string) => string} hide - Hides component from a modal window and returns empty string.
 *
 * @method {(identifier: string, children: React.ReactNode) => void} update - Updates component from a modal window.
 *
 * @example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Layout, Button, Text, ModalService } from '../..';
 *
 * export const ModalServiceShowcase = () => {
 *
 *   const modalID = '';
 *
 *   const showModal = () => {
 *     const contentElement = this.renderModalContentElement();
 *     this.modalID = ModalService.show(contentElement, { allowBackdrop: true, onBackdropPress: this.hideModal });
 *   };
 *
 *   const hideModal = () => {
 *     ModalService.hide(this.modalID);
 *   };
 *
 *   const renderModalContentElement = () => {
 *     return (
 *       <Layout>
 *         <Text>Hi, I'm modal!</Text>
 *       </Layout>
 *     );
 *   };
 *
 *   return (
 *     <Layout>
 *       <Button onPress={showModal}>SHOW MODAL</Button>
 *       <Button onPress={hideModal}>HIDE MODAL</Button>
 *     </Layout>
 *   );
 * }
 * ```
 */
class ModalServiceType {
  constructor() {
    this.panel = null;
  }

  mount(panel) {
    this.panel = panel;
  }

  unmount() {
    this.panel = null;
  }

  show(element, config) {
    if (this.panel) {
      return this.panel.show(element, config);
    }
  }

  update(identifier, children) {
    if (this.panel) {
      this.panel.update(identifier, children);
    }
  }

  hide(identifier) {
    if (this.panel) {
      return this.panel.hide(identifier);
    }
  }

}

const ModalService = new ModalServiceType();

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
class ModalPanel extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      components: new Map()
    };

    this.hide = identifier => {
      const components = this.state.components;
      components.delete(identifier);
      this.setState({
        components
      });
      return '';
    };

    this.generateUniqueComponentKey = () => {
      return Math.random().toString(36).substring(2);
    };

    this.areThereAnyComponents = () => {
      return this.state.components && this.state.components.size !== 0;
    };

    this.renderModal = (config, index) => {
      return React.createElement(ModalResolver, _extends$3({}, config.element.props, {
        visible: true,
        key: index,
        allowBackdrop: config.allowBackdrop,
        onBackdropPress: config.onBackdropPress
      }), config.element);
    };

    this.renderModals = () => {
      return Array.from(this.state.components.values()).map(this.renderModal);
    };
  }

  componentDidMount() {
    ModalService.mount(this);
  }

  componentWillUnmount() {
    ModalService.unmount();
  }

  show(element, config) {
    const key = this.generateUniqueComponentKey();
    const components = this.state.components.set(key, Object.assign(Object.assign({}, config), {
      element
    }));
    this.setState({
      components
    });
    return key;
  }

  update(identifier, children) {
    const panelChild = this.state.components.get(identifier);
    const childElement = panelChild.element;
    panelChild.element = React.cloneElement(childElement, {
      children: children
    });
    const components = this.state.components;
    components.delete(identifier);
    components.set(identifier, panelChild);
    this.setState({
      components
    });
  }

  render() {
    return React.createElement(reactNative.View, {
      style: styles$1.container
    }, this.props.children, this.areThereAnyComponents() && this.renderModals());
  }

}
const styles$1 = reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * `ApplicationProvider` component is designed to be a root of the application.
 *
 * This does basically two things:
 * - Provides styles for basic components;
 * - Renders modal window which is used to be common for all elements presented as modal;
 *
 * @extends React.Component
 *
 * @property {SchemaType} mapping - Determines the mapping for basic components.
 * This is designed to be provided by developers team and can be imported from npm package (e.g. `@eva-design/eva`).
 *
 * @property {CustomSchemaType} customMapping - Determines the customization mapping.
 * This is merged with `mapping` property and designed to be used components customization.
 *
 * @property {ThemeType} theme - Determines the theme for basic components.
 * This is designed to be provided by developers team and can be imported from npm package (e.g. `@eva-design/eva`).
 *
 * @property {React.ReactNode} children - Determines application root component.
 *
 * @property ThemeProviderProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { mapping, light as lightTheme } from '@eva-design/eva';
 * import { ApplicationProvider, Layout, Text } from '../..';
 *
 * export default class App extends React.Component {
 *
 *   render() {
 *     return (
 *       <ApplicationProvider
 *         mapping={mapping}
 *         theme={lightTheme}>
 *         <Layout style={{ flex: 1 }}>
 *           <Text>Welcome to UI Kitten</Text>
 *         </Layout>
 *       </ApplicationProvider>
 *     );
 *   }
 * }
 * ```
 */

class ApplicationProvider extends React.Component {
  constructor(props) {
    super(props);
    this.schemaProcessor = new processor_2$1();

    this.createStyles = (mapping, custom) => {
      const customizedMapping = merge({}, mapping, custom);
      return this.schemaProcessor.process(customizedMapping);
    };

    const {
      mapping,
      customMapping,
      theme
    } = this.props;
    const styles = this.createStyles(mapping, customMapping);
    this.state = {
      styles
    };
  }

  render() {
    return React.createElement(StyleProvider, {
      theme: this.props.theme,
      styles: this.state.styles
    }, React.createElement(ModalPanel, null, this.props.children));
  }

}

(function (Interaction) {
  Interaction["ACTIVE"] = "active";
  Interaction["FOCUSED"] = "focused";
  Interaction["INDETERMINATE"] = "indeterminate";
  Interaction["VISIBLE"] = "visible";
})(exports.Interaction || (exports.Interaction = {}));

(function (State) {
  State["CHECKED"] = "checked";
  State["SELECTED"] = "selected";
  State["DISABLED"] = "disabled";
})(exports.State || (exports.State = {}));

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$3 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `Avatar` is a styled `Image` component.
 *
 * @extends React.Component
 *
 * @property {string} shape - Determines the shape of the component.
 * Can be `round`, `rounded` or `square`.
 * Default is `round`.
 *
 * @property {string} size - Determines the size of the component.
 * Can be `giant`, `large`, `medium`, `small`, or `tiny`.
 * Default is `medium`.
 *
 * @property ImageProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Avatar } from '../..';
 *
 * export const AvatarShowcase = (props) => (
 *   <Avatar source={require('path-to-assets/local-image.png')} />
 * );
 * ```
 *
 * @overview-example Remote Images
 *
 * ```
 * import React from 'react';
 * import { Avatar } from '../..';
 *
 * export const AvatarShowcase = (props) => (
 *   <Avatar source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }} />
 * );
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Avatar } from '../..';
 *
 * export const AvatarShowcase = (props) => (
 *   <Avatar
 *     source={require('path-to-assets/local-image.png')}
 *     size='large'
 *     shape='rounded'
 *   />
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Avatar } from '../..';
 *
 * export const AvatarShowcase = (props) => (
 *   <Avatar
 *     style={styles.avatar}
 *     source={require('path-to-assets/local-image.png')}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   avatar: { width: 96, height: 96, borderRadius: 16 }
 * });
 * ```
 */

class AvatarComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.getComponentStyle = source => {
      const {
        roundCoefficient
      } = source,
            containerParameters = __rest$3(source, ["roundCoefficient"]); // @ts-ignore: avoid checking `containerParameters`


      const baseStyle = reactNative.StyleSheet.flatten([containerParameters, this.props.style]); // @ts-ignore: rhs operator is restricted to be number

      const borderRadius = roundCoefficient * baseStyle.height;
      return Object.assign({
        borderRadius
      }, baseStyle);
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle
    } = _a,
          restProps = __rest$3(_a, ["themedStyle"]);

    const componentStyle = this.getComponentStyle(themedStyle);
    return React.createElement(reactNative.Image, _extends$4({}, restProps, {
      style: componentStyle
    }));
  }

}
AvatarComponent.styledComponentName = 'Avatar';
const Avatar = styled(AvatarComponent);

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var __rest$4 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class Arrow extends React.Component {
  constructor() {
    super(...arguments);

    this.getComponentStyle = source => {
      const flatStyle = reactNative.StyleSheet.flatten(source);
      return {
        container: {
          // @ts-ignore: `width` is restricted to be a number
          borderLeftWidth: flatStyle.width,
          // @ts-ignore: `width` is restricted to be a number
          borderRightWidth: flatStyle.width,
          // @ts-ignore: `height` is restricted to be a number
          borderBottomWidth: flatStyle.height,
          borderBottomColor: flatStyle.backgroundColor,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          backgroundColor: 'transparent'
        }
      };
    };
  }

  render() {
    const _a = this.props,
          {
      style
    } = _a,
          props = __rest$4(_a, ["style"]);

    const componentStyle = this.getComponentStyle(style);
    return React.createElement(reactNative.View, _extends$5({}, props, {
      style: [style, styles$2.container, componentStyle.container]
    }));
  }

}
const styles$2 = reactNative.StyleSheet.create({
  container: {}
});

var __rest$5 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Retrieves all props included in `from` array, rest props includes in under the `rest` key
 */

function allWithRest(source, from) {
  if (!source) {
    return {
      rest: {}
    };
  }

  return Object.keys(source).reduce((acc, prop) => {
    const {
      rest
    } = acc,
          allOf = __rest$5(acc, ["rest"]);

    if (from.includes(prop)) {
      return Object.assign(Object.assign({}, allOf), {
        [prop]: source[prop],
        rest
      });
    }

    return Object.assign(Object.assign({}, allOf), {
      rest: Object.assign(Object.assign({}, rest), {
        [prop]: source[prop]
      })
    });
  }, {});
}
/**
 * Returns all styles with prefix
 *
 * @param {StyleType} source - Eva Styles
 * @param {string} key - prefix
 *
 * @return {StyleType} - all styles with prefix
 */

function allWithPrefix(source, key) {
  return Object.keys(source).filter(styleName => styleName.includes(key)).reduce((obj, styleKey) => {
    return Object.assign(Object.assign({}, obj), {
      [styleKey]: source[styleKey]
    });
  }, {});
}

const FLEX_PREFIX = 'flex';
const FLEX_ROW_PREFIX = 'row';
const FLEX_WRAP_PREFIX = 'wrap';
const FLEX_START_PREFIX = 'start';
const FLEX_END_PREFIX = 'end';
const FLEX_REVERSE_PREFIX = 'reverse';
/**
 * Works with FlexBox style properties that starts with `flex` and ends with `-start` or `-end`
 *
 * E.g justifyContent: flex-start
 */

const FlexStartEndMapper = {
  toI18n(value, rtl) {
    if (!rtl || !value.startsWith(FLEX_PREFIX)) {
      return value;
    }

    const isReverse = value.endsWith(FLEX_END_PREFIX);

    if (isReverse) {
      return `${FLEX_PREFIX}-${FLEX_START_PREFIX}`;
    }

    return `${FLEX_PREFIX}-${FLEX_END_PREFIX}`;
  }

};
/**
 * Works with FlexBox style properties that starts with `row` and optionally ends with `-reverse`
 *
 * E.g flexDirection: row-reverse
 */

const FlexRowMapper = {
  toI18n(value, rtl) {
    if (!rtl || !value.startsWith(FLEX_ROW_PREFIX)) {
      return value;
    }

    const isReverse = value.endsWith(FLEX_REVERSE_PREFIX);

    if (isReverse) {
      return FLEX_ROW_PREFIX;
    }

    return `${FLEX_ROW_PREFIX}-${FLEX_REVERSE_PREFIX}`;
  }

};
/**
 * Works with FlexBox style properties that starts with `wrap` and optionally ends with `-reverse`
 *
 * E.g flexWrap: wrap-reverse
 */

const FlexWrapMapper = {
  toI18n(value, rtl) {
    if (!rtl || !value.startsWith(FLEX_WRAP_PREFIX)) {
      return value;
    }

    const isReverse = value.endsWith(`-${FLEX_REVERSE_PREFIX}`);

    if (isReverse) {
      return FLEX_WRAP_PREFIX;
    }

    return `${FLEX_WRAP_PREFIX}-${FLEX_REVERSE_PREFIX}`;
  }

};
/**
 * Matches FlexBox style properties that can affect on Layout depending on LTR/RTL mode corresponding Mappers
 */

const I18nLayoutFlexMap = {
  alignContent: FlexStartEndMapper,
  alignItems: FlexStartEndMapper,
  alignSelf: FlexStartEndMapper,
  justifyContent: FlexStartEndMapper,
  flexDirection: FlexRowMapper,
  flexWrap: FlexWrapMapper
};

class NativeI18nLayoutService {
  isRTL() {
    return reactNative.I18nManager.isRTL;
  }

  select(ltr, rtl) {
    return this.isRTL() ? rtl : ltr;
  }
  /**
   * Iterates through I18nLayoutFlexMap and reverses style values if needed.
   *
   * @param {ViewStyle} source - style to convert
   * @param {boolean} rtl - is layout currently in RTL mode (Needed for tests, because unable to mock this)
   *
   * @returns {ViewStyle} - style reversed to fit i18n
   */


  toI18nStyle(source, rtl = this.isRTL()) {
    const i18nStyle = Object.keys(I18nLayoutFlexMap).reduce((style, prop) => {
      const currentStyleValue = source[prop];

      if (currentStyleValue) {
        const i18nStyleValue = I18nLayoutFlexMap[prop].toI18n(currentStyleValue, rtl);
        return Object.assign(Object.assign({}, style), {
          [prop]: i18nStyleValue
        });
      }

      return style;
    }, {});
    return Object.assign(Object.assign({}, source), i18nStyle);
  }

}

const I18nLayoutService = new NativeI18nLayoutService();

const isValidString = source => {
  if (source && source.length > 0) {
    return true;
  }

  return false;
};

class CheckMark extends React.Component {
  constructor() {
    super(...arguments);

    this.getComponentStyle = source => {
      const {
        width,
        height,
        backgroundColor
      } = source;
      return {
        container: {
          width: width,
          height: height
        },
        // the dependence of the variables was determined experimentally. Changes may be needed later.
        shape: {
          borderWidth: width * 0.125,
          borderTopLeftRadius: height * 0.5,
          borderTopRightRadius: height * 0.5,
          borderBottomLeftRadius: height * 0.5,
          borderBottomRightRadius: height * 0.5,
          borderColor: backgroundColor,
          backgroundColor: backgroundColor
        },
        left: {
          left: width * 0.125,
          top: width * 0.25,
          height: height * 0.65
        },
        right: {
          right: width * 0.175,
          height: height * 0.875
        }
      };
    };
  }

  render() {
    const {
      style,
      isAnimated
    } = this.props;
    const {
      container,
      shape,
      left,
      right
    } = this.getComponentStyle(reactNative.StyleSheet.flatten(style));
    const Component = isAnimated ? reactNative.Animated.View : reactNative.View;
    return React.createElement(Component, {
      style: [container, styles$3.container]
    }, React.createElement(Component, {
      style: [shape, left, styles$3.shape, styles$3.left]
    }), React.createElement(Component, {
      style: [shape, right, styles$3.shape, styles$3.right]
    }));
  }

}
CheckMark.defaultProps = {
  isAnimated: false
};
const styles$3 = reactNative.StyleSheet.create({
  container: I18nLayoutService.toI18nStyle({
    flexDirection: 'row',
    transform: [{
      rotate: '-5deg'
    }]
  }),
  shape: {
    position: 'absolute'
  },
  left: {
    transform: [{
      rotate: '-40deg'
    }]
  },
  right: {
    transform: [{
      rotate: '40deg'
    }]
  }
});

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var __rest$6 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class TabIndicator extends React.Component {
  constructor() {
    super(...arguments);
    this.contentOffset = new reactNative.Animated.Value(0);

    this.onContentOffsetAnimationStateChanged = state => {// no-op
    };

    this.onContentOffsetAnimationStateEnd = result => {// no-op
    };

    this.createOffsetAnimation = params => {
      const animationDuration = params.animated ? this.props.animationDuration : 0;
      return reactNative.Animated.timing(this.contentOffset, {
        toValue: I18nLayoutService.select(params.offset, -params.offset),
        duration: animationDuration,
        easing: reactNative.Easing.linear
      });
    };

    this.onLayout = event => {
      this.indicatorWidth = event.nativeEvent.layout.width;
      this.scrollToOffset({
        offset: this.indicatorWidth * this.props.selectedPosition,
        animated: false
      });
    };

    this.getComponentStyle = () => {
      const widthPercent = 100 / this.props.positions;
      return {
        width: `${widthPercent}%`,
        // @ts-ignore: RN has no types for `Animated` styles
        transform: [{
          translateX: this.contentOffset
        }]
      };
    };
  }

  componentDidMount() {
    this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.selectedPosition !== nextProps.selectedPosition;
  }

  componentDidUpdate() {
    const {
      selectedPosition: index
    } = this.props;
    this.scrollToIndex({
      index,
      animated: true
    });
  }

  componentWillUnmount() {
    this.contentOffset.removeAllListeners();
  }
  /**
   * scrolls indicator to passed index
   *
   * @param params (object) - {
   *  index: number,
   *  animated: boolean | undefined
   * }
   */


  scrollToIndex(params) {
    const {
      index
    } = params,
          rest = __rest$6(params, ["index"]);

    const offset = this.indicatorWidth * index;
    this.scrollToOffset(Object.assign({
      offset
    }, rest));
  }
  /**
   * scrolls indicator to passed offset
   *
   * @param params (object) - {
   *  offset: number,
   *  animated: boolean | undefined
   * }
   */


  scrollToOffset(params) {
    this.createOffsetAnimation(params).start(this.onContentOffsetAnimationStateEnd);
  }

  render() {
    const _a = this.props,
          {
      style
    } = _a,
          restProps = __rest$6(_a, ["style"]);

    const componentStyle = this.getComponentStyle();
    return React.createElement(reactNative.Animated.View, _extends$6({}, restProps, {
      onLayout: this.onLayout,
      style: [style, componentStyle]
    }));
  }

}
TabIndicator.defaultProps = {
  selectedPosition: 0,
  animationDuration: 200
};

class Chevron extends React.Component {
  constructor() {
    super(...arguments);

    this.getDirectionStyle = () => {
      const {
        direction
      } = this.props;

      switch (direction) {
        case 'top':
          return styles$4.containerTopRotate;

        case 'right':
          return styles$4.containerRightRotate;

        case 'left':
          return styles$4.containerLeftRotate;

        default:
          return null;
      }
    };

    this.getComponentStyle = source => {
      const {
        width,
        height,
        tintColor: backgroundColor,
        marginHorizontal
      } = source;
      return {
        container: {
          width: width,
          height: height,
          marginHorizontal: marginHorizontal
        },
        // the dependence of the variables was determined experimentally. Changes may be needed later.
        shape: {
          top: height * 0.25,
          borderWidth: width * 0.06,
          borderTopLeftRadius: height * 0.5,
          borderTopRightRadius: height * 0.5,
          borderBottomLeftRadius: height * 0.5,
          borderBottomRightRadius: height * 0.5,
          borderColor: backgroundColor,
          backgroundColor: backgroundColor
        },
        left: {
          left: width * 0.28,
          height: height * 0.45
        },
        right: {
          right: width * 0.28,
          height: height * 0.45
        }
      };
    };
  }

  render() {
    const {
      style,
      isAnimated
    } = this.props;
    const {
      container,
      shape,
      left,
      right
    } = this.getComponentStyle(reactNative.StyleSheet.flatten(style));
    const directionStyle = this.getDirectionStyle();
    const Component = isAnimated ? reactNative.Animated.View : reactNative.View;
    return React.createElement(Component, {
      style: [container, directionStyle, style]
    }, React.createElement(Component, {
      style: [shape, left, styles$4.shape, styles$4.left]
    }), React.createElement(Component, {
      style: [shape, right, styles$4.shape, styles$4.right]
    }));
  }

}
Chevron.defaultProps = {
  isAnimated: false,
  direction: 'bottom'
};
const styles$4 = reactNative.StyleSheet.create({
  containerTopRotate: {
    transform: [{
      rotate: '180deg'
    }]
  },
  containerLeftRotate: {
    transform: [{
      rotate: '90deg'
    }]
  },
  containerRightRotate: {
    transform: [{
      rotate: '-90deg'
    }]
  },
  shape: {
    position: 'absolute'
  },
  left: {
    transform: [{
      rotate: '-45deg'
    }, {
      translateY: 1
    }]
  },
  right: {
    transform: [{
      rotate: '45deg'
    }, {
      translateY: 1
    }]
  }
});

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$7 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `BottomNavigation` component is designed to be a Bottom Tab Bar.
 * Can be used for navigation.
 *
 * @extends React.Component
 *
 * @property {number} selectedIndex - Determines index of the selected tab.
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `default` | `noIndicator`.
 *
 * @property {React.ReactElement<TabProps> | React.ReactElement<TabProps>[]} children -
 * Determines tabs of the Bottom Navigation.
 *
 * @property {StyleProp<ViewStyle>} indicatorStyle - Determines styles of the indicator.
 *
 * @property {(index: number) => void} onSelect - Triggered on select value.
 *
 * @property ViewProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { BottomNavigation, BottomNavigationTab } from '../..';
 *
 * export class BottomNavigationShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: 0,
 *   };
 *
 *   onTabSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <BottomNavigation
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onTabSelect}>
 *          <BottomNavigationTab title='Dashboard' />
 *          <BottomNavigationTab title='Settings' />
 *       </BottomNavigation>
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With React Navigation
 *
 * ```
 * import React from 'react';
 * import { BottomNavigation, BottomNavigationTab } from '../..';
 * import { createBottomTabNavigator } from 'react-navigation-tabs';
 * import { Dashboard, Settings } from './path-to/screen-components'; // <-- Import screen components
 *
 * export const BottomNavigationShowcase = (props) => {
 *
 *  const onTabSelect = (selectedIndex) => {
 *    const { [index]: selectedRoute } = props.navigation.state.routes;
 *    props.navigation.navigate(selectedRoute.routeName);
 *  };
 *
 *  return (
 *    <BottomNavigation
 *      selectedIndex={props.navigation.state.index}
 *      onSelect={onTabSelect}>
 *      <BottomNavigationTab title='Dashboard' />
 *      <BottomNavigationTab title='Settings' />
 *    </BottomNavigation>
 *   );
 * }
 *
 * export const BottomTabNavigator = createBottomTabNavigator({
 *   Dashboard: Dashboard,
 *   Settings: Settings,
 * }, {
 *   initialRouteName: 'Dashboard',
 *   tabBarComponent: BottomNavigationShowcase,
 * });
 * ```
 *
 * @example Without Indicator
 *
 * ```
 * import React from 'react';
 * import { BottomNavigation, BottomNavigationTab } from '../..';
 *
 * export class BottomNavigationShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: 0,
 *   };
 *
 *   onTabSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render()  {
 *     return (
 *       <BottomNavigation
 *          appearance='noIndicator'
 *          selectedIndex={this.state.selectedIndex}
 *          onSelect={this.onTabSelect}>
 *          <BottomNavigationTab title='Dashboard' />
 *          <BottomNavigationTab title='Settings' />
 *       </BottomNavigation>
 *     );
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { BottomNavigation, BottomNavigationTab } from '../..';
 *
 * export const BottomNavigationShowcase = (props) => (
 *   <BottomNavigation
 *      style={styles.bottomNavigation}
 *      indicatorStyle={styles.indicator}>
 *      <BottomNavigationTab title='Dashboard' />
 *      <BottomNavigationTab title='Settings' />
 *   </BottomNavigation>
 * );
 *
 * const styles = StyleSheet.create({
 *   bottomNavigation: { backgroundColor: 'white' },
 *   indicator: { backgroundColor: 'black' },
 * });
 * ```
 */

class BottomNavigationComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onTabSelect = index => {
      if (this.props.onSelect && this.props.selectedIndex !== index) {
        this.props.onSelect(index);
      }
    };

    this.getComponentStyle = source => {
      const {
        indicatorHeight,
        indicatorBackgroundColor
      } = source,
            containerParameters = __rest$7(source, ["indicatorHeight", "indicatorBackgroundColor"]);

      return {
        container: containerParameters,
        item: {},
        indicator: {
          height: indicatorHeight,
          backgroundColor: indicatorBackgroundColor
        }
      };
    };

    this.renderIndicatorElement = (positions, style) => {
      const {
        indicatorStyle,
        selectedIndex
      } = this.props;
      return React.createElement(TabIndicator, {
        key: 0,
        style: [style, styles$5.indicator, indicatorStyle],
        selectedPosition: selectedIndex,
        positions: positions
      });
    };

    this.renderTabElement = (element, index) => {
      return React.cloneElement(element, {
        key: index,
        style: [styles$5.item, element.props.style],
        selected: index === this.props.selectedIndex,
        onSelect: () => this.onTabSelect(index)
      });
    };

    this.renderTabElements = source => {
      return React.Children.map(source, this.renderTabElement);
    };

    this.renderComponentChildren = style => {
      const tabElements = this.renderTabElements(this.props.children);
      const hasIndicator = style.indicator.height > 0;
      return [hasIndicator && this.renderIndicatorElement(tabElements.length, style.indicator), ...tabElements];
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style
    } = _a,
          derivedProps = __rest$7(_a, ["themedStyle", "style"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container
    } = _b,
          componentStyles = __rest$7(_b, ["container"]);

    const [indicatorElement, ...tabElements] = this.renderComponentChildren(componentStyles);
    return React.createElement(reactNative.View, _extends$7({}, derivedProps, {
      style: [container, styles$5.container, style]
    }), indicatorElement, tabElements);
  }

}
BottomNavigationComponent.styledComponentName = 'BottomNavigation';
BottomNavigationComponent.defaultProps = {
  selectedIndex: 0
};
const styles$5 = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  item: {
    flex: 1
  },
  indicator: {
    position: 'absolute'
  }
});
const BottomNavigation = styled(BottomNavigationComponent);

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$8 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Styled `Text` component.
 *
 * @extends React.Component
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning` or `danger`.
 *
 * @property {string} children - Determines text of the component.
 *
 * @property {string} category - Determines the category of the component.
 * Can be `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `s1`, `s2`, `p1`, `p2`, `c1`, `c2`, `label`.
 * Default is `p1`.
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `default`, `alternative`, `hint`.
 * Default is `default`.
 *
 * @property TextComponentProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Text } from '../..';
 *
 * export const TextShowcase = (props) => (
 *   <Text>Sample Text</Text>
 * );
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Text } from '../..';
 *
 * export const TextShowcase = (props) => (
 *   <Text
 *     appearance='hint'
 *     category='p2'
 *     status='success'>
 *     Sample Text
 *   </Text>
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Text } from '../..';
 *
 * export const TextShowcase = (props) => (
 *   <Text style={styles.text}>Sample Text</Text>
 * );
 *
 * const styles = StyleSheet.create({
 *   text: { color: 'black', fontSize: 18 },
 * });
 * ```
 */

class TextComponent extends React.Component {
  render() {
    const _a = this.props,
          {
      themedStyle,
      style
    } = _a,
          derivedProps = __rest$8(_a, ["themedStyle", "style"]);

    return React.createElement(reactNative.Text, _extends$8({}, derivedProps, {
      style: [themedStyle, style]
    }));
  }

}
TextComponent.styledComponentName = 'Text';
const Text = styled(TextComponent);

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$9 = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `BottomNavigationTab` component is a part of the `BottomNavigation` component.
 * `BottomNavigation` tabs should be wrapped in BottomNavigation to provide usable component.
 * See usage examples at `BottomNavigation` component documentation.
 *
 * @extends React.Component
 *
 * @property {boolean} selected - Determines whether component is selected.
 *
 * @property {string} title - Determines the title of the tab.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes title style.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} icon - Determines the icon of the tab.
 *
 * @property {(selected: boolean) => void} onSelect - Triggered on select value.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { BottomNavigationTab } from '../..';
 *
 * export const BottomNavigationTabShowcase = (props) => (
 *   <BottomNavigationTab title='Dashboard' />
 * );
 * ```
 *
 * @overview-example With Icon
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { BottomNavigationTab, Icon } from '../..';
 *
 * const DashboardIcon = (style) => (
 *   <Icon {...style} name='layout' />
 * );
 *
 * export const BottomNavigationTabShowcase = (props) => (
 *   <BottomNavigationTab title='Dashboard' icon={DashboardIcon} />
 * );
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { BottomNavigationTab } from '../..';
 *
 * const DashboardIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export const BottomNavigationTabShowcase = (props) => (
 *   <BottomNavigationTab title='Dashboard' icon={DashboardIcon} />
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { BottomNavigationTab } from '../..';
 *
 * export const BottomNavigationTabShowcase = (props) => (
 *   <BottomNavigationTab
 *     style={styles.tab}
 *     titleStyle={styles.tabTitle}
 *     title='Dashboard'
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   tab: { backgroundColor: 'white' },
 *   tabTitle: { color: 'black' },
 * });
 * ```
 */

class BottomNavigationTabComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = () => {
      if (this.props.onSelect) {
        this.props.onSelect(!this.props.selected);
      }
    };

    this.getComponentStyle = source => {
      const {
        iconWidth,
        iconHeight,
        iconMarginVertical,
        iconTintColor,
        textMarginVertical,
        textFontFamily,
        textFontSize,
        textLineHeight,
        textFontWeight,
        textColor
      } = source,
            containerParameters = __rest$9(source, ["iconWidth", "iconHeight", "iconMarginVertical", "iconTintColor", "textMarginVertical", "textFontFamily", "textFontSize", "textLineHeight", "textFontWeight", "textColor"]);

      return {
        container: containerParameters,
        text: {
          marginVertical: textMarginVertical,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          fontWeight: textFontWeight,
          color: textColor
        },
        icon: {
          width: iconWidth,
          height: iconHeight,
          marginVertical: iconMarginVertical,
          tintColor: iconTintColor
        }
      };
    };

    this.renderIconElement = style => {
      const iconElement = this.props.icon(style);
      return React.cloneElement(iconElement, {
        key: 1,
        style: [style, styles$6.icon, iconElement.props.style]
      });
    };

    this.renderTitleElement = style => {
      const {
        title,
        titleStyle
      } = this.props;
      return React.createElement(Text, {
        key: 2,
        style: [style, styles$6.text, titleStyle]
      }, title);
    };

    this.renderComponentChildren = style => {
      const {
        icon,
        title
      } = this.props;
      return [icon && this.renderIconElement(style.icon), isValidString(title) && this.renderTitleElement(style.text)];
    };
  }

  render() {
    const _a = this.props,
          {
      style,
      themedStyle
    } = _a,
          restProps = __rest$9(_a, ["style", "themedStyle"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container
    } = _b,
          componentStyles = __rest$9(_b, ["container"]);

    const [iconElement, titleElement] = this.renderComponentChildren(componentStyles);
    return React.createElement(reactNative.TouchableOpacity, _extends$9({}, restProps, {
      style: [container, styles$6.container, style],
      activeOpacity: 1.0,
      onPress: this.onPress
    }), iconElement, titleElement);
  }

}
BottomNavigationTabComponent.styledComponentName = 'BottomNavigationTab';
const styles$6 = reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {},
  icon: {}
});
const BottomNavigationTab = styled(BottomNavigationTabComponent);

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$a = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Styled `Button` component.
 *
 * @extends React.Component
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Default is `primary`.
 *
 * @property {string} size - Determines the size of the component.
 * Can be `giant`, `large`, `medium`, `small`, or `tiny`.
 * Default is `medium`.
 *
 * @property {string} children - Determines text of the component.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes text style.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} icon - Determines icon of the component.
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `filled` | `outline` | `ghost`.
 * Default is `filled`.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Button } from '../..';
 *
 * export const ButtonShowcase = (props) => {
 *
 *   const onPress = () => {
 *     // Handle Button press
 *   };
 *
 *   return (
 *     <Button onPress={onPress}>BUTTON</Button>
 *   );
 * };
 * ```
 *
 * @overview-example With Icon
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { Button, Icon } from '../..';
 *
 * const FacebookIcon = (style) => (
 *   <Icon {...style} name='facebook' />
 * );
 *
 * export const LoginButton = (props) => (
 *   <Button icon={FacebookIcon}>Login with Facebook</Button>
 * );
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Button } from '../..';
 *
 * export const ButtonShowcase = (props) => (
 *   <Button
 *     appearance='outline'
 *     status='danger'
 *     size='large'>
 *     BUTTON
 *   </Button>
 * );
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { Button } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export const StarButton = (props) => (
 *   <Button icon={StarIcon}>BUTTON</Button>
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Button } from '../..';
 *
 * export const ButtonShowcase = (props) => (
 *   <Button
 *     style={styles.button}
 *     textStyle={styles.buttonText}>
 *     BUTTON
 *   </Button>
 * );
 *
 * const styles = StyleSheet.create({
 *   button: { borderRadius: 8 },
 *   buttonText: { color: 'white' },
 * });
 * ```
 */

class ButtonComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = event => {
      if (this.props.onPress) {
        this.props.onPress(event);
      }
    };

    this.onPressIn = event => {
      this.props.dispatch([exports.Interaction.ACTIVE]);

      if (this.props.onPressIn) {
        this.props.onPressIn(event);
      }
    };

    this.onPressOut = event => {
      this.props.dispatch([]);

      if (this.props.onPressOut) {
        this.props.onPressOut(event);
      }
    };

    this.getComponentStyle = source => {
      const {
        textColor,
        textFontFamily,
        textFontSize,
        textLineHeight,
        textFontWeight,
        textMarginHorizontal,
        iconWidth,
        iconHeight,
        iconTintColor,
        iconMarginHorizontal
      } = source,
            containerParameters = __rest$a(source, ["textColor", "textFontFamily", "textFontSize", "textLineHeight", "textFontWeight", "textMarginHorizontal", "iconWidth", "iconHeight", "iconTintColor", "iconMarginHorizontal"]);

      return {
        container: containerParameters,
        text: {
          color: textColor,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          fontWeight: textFontWeight,
          marginHorizontal: textMarginHorizontal
        },
        icon: {
          width: iconWidth,
          height: iconHeight,
          tintColor: iconTintColor,
          marginHorizontal: iconMarginHorizontal
        }
      };
    };

    this.renderTextElement = style => {
      return React.createElement(Text, {
        key: 1,
        style: [style, styles$7.text, this.props.textStyle]
      }, this.props.children);
    };

    this.renderIconElement = style => {
      const iconElement = this.props.icon(style);
      return React.cloneElement(iconElement, {
        key: 2,
        style: [style, styles$7.icon, iconElement.props.style]
      });
    };

    this.renderComponentChildren = style => {
      const {
        icon,
        children
      } = this.props;
      return [icon && this.renderIconElement(style.icon), isValidString(children) && this.renderTextElement(style.text)];
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style
    } = _a,
          containerProps = __rest$a(_a, ["themedStyle", "style"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container
    } = _b,
          childStyles = __rest$a(_b, ["container"]);

    const [iconElement, textElement] = this.renderComponentChildren(childStyles);
    return React.createElement(reactNative.TouchableOpacity, _extends$a({
      activeOpacity: 1.0
    }, containerProps, {
      style: [container, styles$7.container, style],
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    }), iconElement, textElement);
  }

}
ButtonComponent.styledComponentName = 'Button';
const styles$7 = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {},
  icon: {}
});
const Button = styled(ButtonComponent);

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$b = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Renders a group of `Buttons`.
 *
 * @extends React.Component
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning`, `danger` or `white`.
 *
 * @property {string} size - Determines the size of the component.
 * Can be `giant`, `large`, `medium`, `small`, or `tiny`.
 * Default is `medium`.
 *
 * @property {React.ReactElement<ButtonProps>[]} children - Determines buttons in group.
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `filled` or `outline`.
 * Default is `filled`.
 *
 * @property ViewProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Button, ButtonGroup } from '../..';
 *
 * export const ButtonGroupShowcase = (props) => (
 *   <ButtonGroup>
 *     <Button>Left</Button>
 *     <Button>Mid</Button>
 *     <Button>Right</Button>
 *   </ButtonGroup>
 * );
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Button, ButtonGroup } from '../..';
 *
 * export const DangerButtonGroup = (props) => (
 *   <ButtonGroup
 *     size='large'
 *     status='danger'>
 *     <Button>Left</Button>
 *     <Button>Mid</Button>
 *     <Button>Right</Button>
 *   </ButtonGroup>
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Button, ButtonGroup } from '../..';
 *
 * export const ButtonGroupShowcase = (props) => (
 *   <ButtonGroup style={styles.buttonGroup}>
 *     <Button>Left</Button>
 *     <Button>Mid</Button>
 *     <Button>Right</Button>
 *   </ButtonGroup>
 * );
 *
 * const styles = StyleSheet.create({
 *   buttonGroup: { borderRadius: 8 },
 * });
 * ```
 */

class ButtonGroupComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.getComponentStyle = source => {
      const {
        dividerBackgroundColor,
        dividerWidth
      } = source,
            containerParameters = __rest$b(source, ["dividerBackgroundColor", "dividerWidth"]);

      return {
        container: containerParameters,
        button: {
          borderEndColor: dividerBackgroundColor,
          borderEndWidth: dividerWidth
        }
      };
    };

    this.isLastElement = index => {
      const {
        children
      } = this.props;
      return index === React.Children.count(children) - 1;
    };

    this.renderButtonElement = (element, index, style) => {
      const {
        appearance,
        size,
        status
      } = this.props;
      const additionalStyle = this.isLastElement(index) ? styles$8.lastButton : style;
      return React.cloneElement(element, {
        key: index,
        appearance: appearance,
        size: size,
        status: status,
        style: [element.props.style, styles$8.button, additionalStyle]
      });
    };

    this.renderButtonElements = (source, style) => {
      return React.Children.map(source, (element, index) => {
        return this.renderButtonElement(element, index, style.button);
      });
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      children
    } = _a,
          derivedProps = __rest$b(_a, ["themedStyle", "style", "children"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container
    } = _b,
          componentStyles = __rest$b(_b, ["container"]);

    const buttonElements = this.renderButtonElements(children, componentStyles);
    return React.createElement(reactNative.View, _extends$b({}, derivedProps, {
      style: [container, styles$8.container, style]
    }), buttonElements);
  }

}

ButtonGroupComponent.styledComponentName = 'ButtonGroup';
const styles$8 = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden'
  },
  button: {
    borderRadius: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  lastButton: {
    borderWidth: 0,
    borderRadius: 0
  }
});
const ButtonGroup = styled(ButtonGroupComponent);

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

var __rest$c = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class CalendarHeader extends React.Component {
  constructor() {
    super(...arguments);

    this.renderSpecificTitleIcon = (style, direction) => {
      return React.createElement(Chevron, {
        style: style,
        direction: direction
      });
    };

    this.renderTitleIcon = style => {
      const {
        iconStyle
      } = this.props;
      return this.renderSpecificTitleIcon(iconStyle, 'bottom');
    };

    this.renderLeftIcon = style => {
      const {
        iconStyle
      } = this.props;
      return this.renderSpecificTitleIcon([iconStyle, styles$9.lateralIcon], 'left');
    };

    this.renderRightIcon = style => {
      const {
        iconStyle
      } = this.props;
      return this.renderSpecificTitleIcon([iconStyle, styles$9.lateralIcon], 'right');
    };

    this.renderLateralNavigationControls = () => {
      return React.createElement(reactNative.View, {
        style: styles$9.subContainer
      }, React.createElement(Button, {
        style: styles$9.headerButton,
        appearance: "ghost" // @ts-ignore
        ,
        icon: this.renderLeftIcon,
        onPress: this.props.onLeft
      }), React.createElement(Button, {
        style: styles$9.headerButton,
        appearance: "ghost" // @ts-ignore
        ,
        icon: this.renderRightIcon,
        onPress: this.props.onRight
      }));
    };
  }

  render() {
    const _a = this.props,
          {
      style,
      titleStyle,
      onTitlePress,
      title,
      lateralNavigationAllowed
    } = _a,
          restProps = __rest$c(_a, ["style", "titleStyle", "onTitlePress", "title", "lateralNavigationAllowed"]);

    return React.createElement(reactNative.View, _extends$c({
      style: [styles$9.container, style]
    }, restProps), React.createElement(Button, {
      style: styles$9.headerButton,
      appearance: "ghost",
      textStyle: [titleStyle, styles$9.headerButtonText] // @ts-ignore
      ,
      icon: this.renderTitleIcon,
      onPress: onTitlePress
    }, title), lateralNavigationAllowed && this.renderLateralNavigationControls());
  }

}
const styles$9 = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerButton: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    minWidth: 24,
    minHeight: 24
  },
  headerButtonText: {
    marginHorizontal: 0
  },
  lateralIcon: {
    marginHorizontal: 0
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$d = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class CalendarMonthHeader extends React.Component {
  render() {
    const _a = this.props,
          {
      style,
      data,
      children
    } = _a,
          restProps = __rest$d(_a, ["style", "data", "children"]);

    return React.createElement(reactNative.View, _extends$d({}, restProps, {
      style: [styles$a.container, style]
    }), data.map(children));
  }

}
const styles$a = reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$e = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `ViewPager` allows flipping through the "pages".
 *
 * @extends React.Component
 *
 * @property {React.ReactElement<any> | React.ReactElement<any>[]} children - Determines children of the component.
 *
 * @property {number} selectedIndex - Determines the index of selected "page".
 *
 * @property {(index: number) => boolean} shouldLoadComponent - Determines loading behavior particular page and can be
 * used for lazy loading.
 *
 * @property {(offset: number) => void} onOffsetChange - Fires on scroll event with current scroll offset.
 *
 * @property {(index: number) => void} onSelect - Fires on "page" select with corresponding index.
 *
 * @property ScrollViewProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { ViewPager, Layout, Text } from '../..';
 *
 * export class ViewPagerShowcase extends React.Component {
 *
 *   state = {
 *      selectedIndex: 0,
 *    };
 *
 *   onIndexChange = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <ViewPager
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onIndexChange}>
 *         <Layout>
 *           <Text>Tab 1</Text>
 *         </Layout>
 *         <Layout>
 *           <Text>Tab 2</Text>
 *         </Layout>
 *       </ViewPager>
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Lazy Loading
 *
 * ```
 * import React from 'react';
 * import { ViewPager, Layout, Text } from '../..';
 *
 * export class ViewPagerShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: 0,
 *   };
 *
 *   onIndexChange = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   shouldLoadPageContent = (index) => {
 *     return index === this.state.selectedIndex;
 *   };
 *
 *   render() {
 *     return (
 *       <ViewPager
 *         selectedIndex={this.state.selectedIndex}
 *         shouldLoadComponent={this.shouldLoadPageContent}
 *         onSelect={this.onIndexChange}>
 *         <Layout>
 *           <Text>Tab 1</Text>
 *         </Layout>
 *         <Layout>
 *           <Text>Tab 2</Text>
 *         </Layout>
 *       </ViewPager>
 *     );
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { ViewPager, Layout, Text } from '../..';
 *
 * export class ViewPagerShowcase extends React.Component {
 *
 *   state = {
 *      selectedIndex: 0,
 *    };
 *
 *   onIndexChange = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <ViewPager
 *         style={styles.container}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onIndexChange}>
 *         <Layout>
 *           <Text>Tab 1</Text>
 *         </Layout>
 *         <Layout>
 *           <Text>Tab 2</Text>
 *         </Layout>
 *       </ViewPager>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: { paddingHorizontal: 16 },
 * });
 * ```
 */

class ViewPager extends React.Component {
  constructor() {
    super(...arguments);
    this.containerRef = React.createRef();
    this.contentWidth = 0;
    this.contentOffsetValue = 0;
    this.contentOffset = new reactNative.Animated.Value(this.contentOffsetValue);
    this.panResponder = reactNative.PanResponder.create(this);

    this.onMoveShouldSetPanResponder = (event, state) => {
      const isHorizontalMove = Math.abs(state.dx) > 0 && Math.abs(state.dx) > Math.abs(state.dy);

      if (isHorizontalMove) {
        const i18nOffset = I18nLayoutService.select(state.dx, -state.dx);
        const nextSelectedIndex = this.props.selectedIndex - Math.sign(i18nOffset);
        return nextSelectedIndex >= 0 && nextSelectedIndex < this.getChildCount();
      }

      return false;
    };

    this.onPanResponderMove = (event, state) => {
      const i18nOffset = I18nLayoutService.select(this.contentWidth, -this.contentWidth);
      const selectedPageOffset = this.props.selectedIndex * i18nOffset;
      this.contentOffset.setValue(state.dx - selectedPageOffset);
    };

    this.onPanResponderRelease = (event, state) => {
      if (Math.abs(state.vx) >= 0.5 || Math.abs(state.dx) >= 0.5 * this.contentWidth) {
        const i18nOffset = I18nLayoutService.select(state.dx, -state.dx);
        const index = i18nOffset > 0 ? this.props.selectedIndex - 1 : this.props.selectedIndex + 1;
        this.scrollToIndex({
          index,
          animated: true
        });
      } else {
        const index = this.props.selectedIndex;
        this.scrollToIndex({
          index,
          animated: true
        });
      }
    };

    this.scrollToOffset = params => {
      this.createOffsetAnimation(params).start(this.onContentOffsetAnimationStateEnd);
    };

    this.onLayout = event => {
      this.contentWidth = event.nativeEvent.layout.width / this.getChildCount();
      this.scrollToIndex({
        index: this.props.selectedIndex
      });
    };

    this.onContentOffsetAnimationStateChanged = state => {
      this.contentOffsetValue = I18nLayoutService.select(-state.value, state.value);

      if (this.props.onOffsetChange) {
        this.props.onOffsetChange(this.contentOffsetValue);
      }
    };

    this.onContentOffsetAnimationStateEnd = result => {
      const selectedIndex = this.contentOffsetValue / this.contentWidth;

      if (selectedIndex !== this.props.selectedIndex && this.props.onSelect) {
        this.props.onSelect(Math.round(selectedIndex));
      }
    };

    this.createOffsetAnimation = params => {
      const animationDuration = params.animated ? 300 : 0;
      return reactNative.Animated.timing(this.contentOffset, {
        toValue: I18nLayoutService.select(-params.offset, params.offset),
        easing: reactNative.Easing.linear,
        duration: animationDuration
      });
    };

    this.renderComponentChild = (source, index) => {
      const contentView = this.props.shouldLoadComponent(index) ? source : null;
      return React.createElement(reactNative.View, {
        style: styles$b.contentContainer
      }, contentView);
    };

    this.renderComponentChildren = source => {
      return React.Children.map(source, this.renderComponentChild);
    };

    this.getChildCount = () => {
      return React.Children.count(this.props.children);
    };

    this.getContainerStyle = () => {
      return {
        width: `${100 * this.getChildCount()}%`,
        // @ts-ignore: RN has no types for `Animated` styles
        transform: [{
          translateX: this.contentOffset
        }]
      };
    };
  }

  componentDidMount() {
    this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      const index = this.props.selectedIndex;
      this.scrollToIndex({
        index,
        animated: true
      });
    }
  }

  componentWillUnmount() {
    this.contentOffset.removeAllListeners();
  }

  scrollToIndex(params) {
    const {
      index
    } = params,
          rest = __rest$e(params, ["index"]);

    const childCount = this.getChildCount() - 1;
    const offset = this.contentWidth * (index < 0 ? 0 : index > childCount ? childCount : index);
    this.scrollToOffset(Object.assign({
      offset
    }, rest));
  }

  render() {
    const _a = this.props,
          {
      style,
      children
    } = _a,
          restProps = __rest$e(_a, ["style", "children"]);

    return React.createElement(reactNative.Animated.View, _extends$e({}, restProps, {
      ref: this.containerRef,
      style: [styles$b.container, style, this.getContainerStyle()],
      onLayout: this.onLayout
    }, this.panResponder.panHandlers), this.renderComponentChildren(children));
  }

}
ViewPager.defaultProps = {
  selectedIndex: 0,
  shouldLoadComponent: () => true
};
const styles$b = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  contentContainer: {
    flex: 1,
    width: '100%'
  }
});

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

var __rest$f = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class CalendarPager extends React.Component {
  constructor() {
    super(...arguments);
    this.viewPagerRef = React.createRef();

    this.onSelect = index => {
      // TODO: This fixes layout junks (for any reason)
      setTimeout(() => {
        this.props.onSelect(index);
      });
    };

    this.shouldLoadComponent = index => {
      if (this.props.shouldLoadComponent) {
        return this.props.shouldLoadComponent(index);
      }

      return true;
    };

    this.createChildElement = (date, index) => {
      if (this.shouldLoadComponent(index)) {
        return this.props.children(date, index);
      }

      return null;
    };
  }

  scrollToIndex(params) {
    this.viewPagerRef.current.scrollToIndex(params);
  }

  render() {
    const _a = this.props,
          {
      data,
      children
    } = _a,
          restProps = __rest$f(_a, ["data", "children"]);

    return React.createElement(ViewPager, _extends$f({}, restProps, {
      ref: this.viewPagerRef,
      shouldLoadComponent: this.shouldLoadComponent,
      onSelect: this.onSelect
    }), data.map(this.createChildElement));
  }

}

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$g = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class CalendarPickerRow extends React.Component {
  render() {
    const _a = this.props,
          {
      style,
      data,
      renderItem
    } = _a,
          restProps = __rest$g(_a, ["style", "data", "renderItem"]);

    return React.createElement(reactNative.View, _extends$g({}, restProps, {
      style: [styles$c.container, style]
    }), data.map(renderItem));
  }

}
const styles$c = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden'
  }
});

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$h = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

class CalendarPickerCellComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = () => {
      if (this.props.onSelect) {
        this.props.onSelect(this.props.date);
      }
    };

    this.getContainerBorderRadius = borderRadius => {
      const {
        firstRangeItem,
        lastRangeItem
      } = this.props;

      if (firstRangeItem) {
        return {
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: 0
        };
      }

      if (lastRangeItem) {
        return {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: borderRadius,
          borderTopLeftRadius: 0,
          borderTopRightRadius: borderRadius
        };
      }

      return {};
    };

    this.getComponentStyle = source => {
      const {
        contentBorderWidth,
        contentBorderRadius,
        contentBorderColor,
        contentBackgroundColor,
        contentTextFontSize,
        contentTextLineHeight,
        contentTextFontWeight,
        contentTextColor,
        contentTextFontFamily,
        borderRadius
      } = source,
            containerParameters = __rest$h(source, ["contentBorderWidth", "contentBorderRadius", "contentBorderColor", "contentBackgroundColor", "contentTextFontSize", "contentTextLineHeight", "contentTextFontWeight", "contentTextColor", "contentTextFontFamily", "borderRadius"]);

      return {
        container: Object.assign(Object.assign({}, containerParameters), this.getContainerBorderRadius(borderRadius)),
        contentContainer: {
          borderWidth: contentBorderWidth,
          borderRadius: contentBorderRadius,
          borderColor: contentBorderColor,
          backgroundColor: contentBackgroundColor
        },
        contentText: {
          fontSize: contentTextFontSize,
          fontWeight: contentTextFontWeight,
          lineHeight: contentTextLineHeight,
          color: contentTextColor,
          fontFamily: contentTextFontFamily
        }
      };
    };

    this.renderContentElement = (source, style) => {
      return source && source(this.props.date, {
        container: style.contentContainer,
        text: style.contentText
      });
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.shouldComponentUpdate) {
      return nextProps.shouldComponentUpdate(this.props, nextProps);
    }

    return true;
  }

  render() {
    const _a = this.props,
          {
      style,
      themedStyle,
      date,
      bounding,
      children
    } = _a,
          restProps = __rest$h(_a, ["style", "themedStyle", "date", "bounding", "children"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container
    } = _b,
          componentStyles = __rest$h(_b, ["container"]);

    return React.createElement(reactNative.TouchableOpacity, _extends$h({
      activeOpacity: 1.0,
      onPress: this.onPress
    }, restProps, {
      style: [container, styles$d.container, style]
    }), this.renderContentElement(children, componentStyles));
  }

}

CalendarPickerCellComponent.styledComponentName = 'CalendarCell';
CalendarPickerCellComponent.defaultProps = {
  selected: false,
  today: false
};
const styles$d = reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
const CalendarPickerCell = styled(CalendarPickerCellComponent);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$i = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class CalendarPicker extends React.Component {
  constructor() {
    super(...arguments);

    this.isFirstRangeItem = (item, range) => {
      return range.indexOf(item) === 0;
    };

    this.isLastRangeItem = (item, range) => {
      return range.indexOf(item) === range.length - 1;
    };

    this.renderCellElement = (item, index) => {
      const isFirstRangeItem = this.isFirstRangeItem(item, this.rangedArray);
      const isLastRangeItem = this.isLastRangeItem(item, this.rangedArray);
      return React.createElement(CalendarPickerCell, {
        key: index,
        date: item,
        category: this.props.category,
        selected: this.props.isItemSelected(item),
        disabled: this.props.isItemDisabled(item),
        bounding: item.bounding,
        today: this.props.isItemToday(item),
        range: item.range,
        firstRangeItem: isFirstRangeItem,
        lastRangeItem: isLastRangeItem,
        onSelect: this.props.onSelect,
        shouldComponentUpdate: this.props.shouldItemUpdate
      }, this.props.renderItem);
    };

    this.renderRowElement = (item, index) => {
      const {
        rowStyle
      } = this.props;
      return React.createElement(CalendarPickerRow, {
        style: rowStyle,
        key: index,
        data: item,
        renderItem: this.renderCellElement
      });
    };
  }

  get rangedArray() {
    const {
      data
    } = this.props;
    return [].concat(...data).filter(item => {
      return item.range;
    });
  }

  render() {
    const _a = this.props,
          {
      data,
      renderItem
    } = _a,
          restProps = __rest$i(_a, ["data", "renderItem"]);

    return React.createElement(reactNative.View, restProps, data.map(this.renderRowElement));
  }

}

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$j = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class CalendarDateContent extends React.Component {
  render() {
    const _a = this.props,
          {
      style,
      textStyle,
      children
    } = _a,
          restProps = __rest$j(_a, ["style", "textStyle", "children"]);

    return React.createElement(reactNative.View, _extends$i({}, restProps, {
      style: [styles$e.container, style]
    }), React.createElement(Text, {
      style: textStyle
    }, children));
  }

}
const styles$e = reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const VIEW_MODE_DATE = {
  id: 'DATE',
  navigationNext: () => {
    return VIEW_MODE_YEAR;
  },
  pickNext: () => {
    return VIEW_MODE_DATE;
  }
};
const VIEW_MODE_MONTH = {
  id: 'MONTH',
  navigationNext: () => {
    return VIEW_MODE_DATE;
  },
  pickNext: () => {
    return VIEW_MODE_DATE;
  }
};
const VIEW_MODE_YEAR = {
  id: 'YEAR',
  navigationNext: () => {
    return VIEW_MODE_DATE;
  },
  pickNext: () => {
    return VIEW_MODE_MONTH;
  }
};
const CalendarViewModes = {
  DATE: VIEW_MODE_DATE,
  MONTH: VIEW_MODE_MONTH,
  YEAR: VIEW_MODE_YEAR
};

class DateService {
  setLocale(locale) {
    this.locale = locale;
  }

  compareDatesSafe(date1, date2) {
    if (date1 && date2) {
      return this.compareDates(date1, date2);
    } else if (!date1 && !date2) {
      return 0;
    }

    return -1;
  }
  /**
   * Checks if the date is between the start date and the end date.
   * */


  isBetween(date, start, end) {
    return this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
  }
  /**
   * Checks if the date is between the start date and the end date.
   * */


  isBetweenSafe(date, start, end) {
    return date && start && end && this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
  }
  /**
   * Checks if the date is between the start date and the end date including bounds.
   * */


  isBetweenIncluding(date, start, end) {
    return this.compareDates(date, start) >= 0 && this.compareDates(date, end) <= 0;
  }
  /**
   * Checks if the date is between the start date and the end date including bounds.
   * */


  isBetweenIncludingSafe(date, start, end) {
    return date && start && end && this.isBetweenIncluding(date, start, end);
  }
  /**
   * Checks is two dates have the same day.
   * */


  isSameDaySafe(date1, date2) {
    return date1 && date2 && this.isSameDay(date1, date2);
  }
  /**
   * Checks is two dates have the same month.
   * */


  isSameMonthSafe(date1, date2) {
    return date1 && date2 && this.isSameMonth(date1, date2);
  }
  /**
   * Checks is two dates have the same year.
   * */


  isSameYearSafe(date1, date2) {
    return date1 && date2 && this.isSameYear(date1, date2);
  }

}
DateService.DAYS_IN_WEEK = 7;
DateService.MONTHS_IN_YEAR = 12;

/**
 * Parse or format dates
 * @class fecha
 */
var fecha = {};
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = '\\d\\d?';
var threeDigits = '\\d{3}';
var fourDigits = '\\d{4}';
var word = '[^\\s]+';
var literal = /\[([^]*?)\]/gm;
var noop = function () {
};

function regexEscape(str) {
  return str.replace( /[|\\{()[^$+*?.-]/g, '\\$&');
}

function shorten(arr, sLen) {
  var newArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }
  return newArr;
}

function monthUpdate(arrName) {
  return function (d, v, i18n) {
    var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
    if (~index) {
      d.month = index;
    }
  };
}

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
  dayNamesShort: dayNamesShort,
  dayNames: dayNames,
  monthNamesShort: monthNamesShort,
  monthNames: monthNames,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  }
};

var formatFlags = {
  D: function(dateObj) {
    return dateObj.getDate();
  },
  DD: function(dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function(dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function(dateObj) {
    return dateObj.getDay();
  },
  dd: function(dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function(dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function(dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function(dateObj) {
    return dateObj.getMonth() + 1;
  },
  MM: function(dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function(dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function(dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function(dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function(dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function(dateObj) {
    return dateObj.getHours() % 12 || 12;
  },
  hh: function(dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function(dateObj) {
    return dateObj.getHours();
  },
  HH: function(dateObj) {
    return pad(dateObj.getHours());
  },
  m: function(dateObj) {
    return dateObj.getMinutes();
  },
  mm: function(dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function(dateObj) {
    return dateObj.getSeconds();
  },
  ss: function(dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function(dateObj) {
    return Math.round(dateObj.getMilliseconds() / 100);
  },
  SS: function(dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function(dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function(dateObj) {
    var o = dateObj.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};

var parseFlags = {
  D: [twoDigits, function (d, v) {
    d.day = v;
  }],
  Do: [twoDigits + word, function (d, v) {
    d.day = parseInt(v, 10);
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  YY: [twoDigits, function (d, v) {
    var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  YYYY: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: ['\\d', function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: ['\\d{2}', function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  d: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();
    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  ZZ: ['[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z', function (d, v) {
    var parts = (v + '').match(/([+-]|\d\d)/gi), minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
parseFlags.dd = parseFlags.d;
parseFlags.dddd = parseFlags.ddd;
parseFlags.DD = parseFlags.D;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;


// Some common format strings
fecha.masks = {
  default: 'ddd MMM DD YYYY HH:mm:ss',
  shortDate: 'M/D/YY',
  mediumDate: 'MMM D, YYYY',
  longDate: 'MMMM D, YYYY',
  fullDate: 'dddd, MMMM D, YYYY',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
};

/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 */
fecha.format = function (dateObj, mask, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }

  if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format');
  }

  mask = fecha.masks[mask] || mask || fecha.masks['default'];

  var literals = [];

  // Make literals inactive by replacing them with ??
  mask = mask.replace(literal, function($0, $1) {
    literals.push($1);
    return '@@@';
  });
  // Apply formatting rules
  mask = mask.replace(token, function ($0) {
    return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
  });
  // Inline literal values back into the formatted value
  return mask.replace(/@@@/g, function() {
    return literals.shift();
  });
};

/**
 * Parse a date string into an object, changes - into /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @returns {Date|boolean}
 */
fecha.parse = function (dateStr, format, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof format !== 'string') {
    throw new Error('Invalid format in fecha.parse');
  }

  format = fecha.masks[format] || format;

  // Avoid regular expression denial of service, fail early for really long strings
  // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
  if (dateStr.length > 1000) {
    return null;
  }

  var dateInfo = {};
  var parseInfo = [];
  var literals = [];
  format = format.replace(literal, function($0, $1) {
    literals.push($1);
    return '@@@';
  });
  var newFormat = regexEscape(format).replace(token, function ($0) {
    if (parseFlags[$0]) {
      var info = parseFlags[$0];
      parseInfo.push(info[1]);
      return '(' + info[0] + ')';
    }

    return $0;
  });
  newFormat = newFormat.replace(/@@@/g, function() {
    return literals.shift();
  });
  var matches = dateStr.match(new RegExp(newFormat, 'i'));
  if (!matches) {
    return null;
  }

  for (var i = 1; i < matches.length; i++) {
    parseInfo[i - 1](dateInfo, matches[i], i18n);
  }

  var today = new Date();
  if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }

  var date;
  if (dateInfo.timezoneOffset != null) {
    dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
    date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
      dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
  } else {
    date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
      dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
  }
  return date;
};

var fecha$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': fecha
});

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

(function (TranslationWidth) {
  TranslationWidth["SHORT"] = "short";
  TranslationWidth["LONG"] = "long";
})(exports.TranslationWidth || (exports.TranslationWidth = {}));

const EN = {
  dayNames: {
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  monthNames: {
    short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const LOCALE_DEFAULT = 'en';
const FIRST_DAY_OF_WEEK = 0;
/**
 * The `NativeDateService` is basic implementation of `DateService` using
 * native js date objects.
 */

class NativeDateService extends DateService {
  constructor(locale = LOCALE_DEFAULT, i18n) {
    super();
    super.setLocale(i18n ? locale : LOCALE_DEFAULT);
    this.setFechaLocaleData(i18n || EN);
  }

  setLocale(locale) {
    console.warn('Runtime locale is not supported');
  }

  isValidDateString(date, format) {
    return !isNaN(this.parse(date, format).getTime());
  }

  today() {
    return new Date();
  }

  getDate(date) {
    return date.getDate();
  }

  getMonth(date) {
    return date.getMonth();
  }

  getYear(date) {
    return date.getFullYear();
  }

  getDayOfWeek(date) {
    return date.getDay();
  }
  /**
   * returns first day of the week, it can be 1 if week starts from monday
   * and 0 if from sunday and so on.
   * */


  getFirstDayOfWeek() {
    return FIRST_DAY_OF_WEEK;
  }

  getMonthName(date, style = exports.TranslationWidth.SHORT) {
    const index = date.getMonth();
    return this.getMonthNameByIndex(index, style);
  }

  getMonthNameByIndex(index, style = exports.TranslationWidth.SHORT) {
    return this.getFechaMonthNames(style)[index];
  }

  getDayOfWeekNames(style = exports.TranslationWidth.SHORT) {
    return this.getFechaDayNames(style);
  }

  format(date, format) {
    return fecha.format(date, format);
  }
  /**
   * We haven't got capability to parse date using formatting without third party libraries.
   * */


  parse(date, format) {
    return new Date(Date.parse(date));
  }

  addDay(date, num) {
    return this.createDate(date.getFullYear(), date.getMonth(), date.getDate() + num);
  }

  addMonth(date, num) {
    const month = this.createDate(date.getFullYear(), date.getMonth() + num, 1); // In case of date has more days than calculated month js Date will change that month to the next one
    // because of the date overflow.

    month.setDate(Math.min(date.getDate(), this.getMonthEnd(month).getDate()));
    return month;
  }

  addYear(date, num) {
    return this.createDate(date.getFullYear() + num, date.getMonth(), date.getDate());
  }

  clone(date) {
    return new Date(date.getTime());
  }

  compareDates(date1, date2) {
    return date1.getTime() - date2.getTime();
  }

  compareDatesSafe(date1, date2) {
    if (this.compareDates(date1, date2) < 0) {
      return -1;
    } else if (this.compareDates(date1, date2) > 0) {
      return 1;
    } else if (this.compareDates(date1, date2) === 0) {
      return 0;
    }
  }

  createDate(year, month, date) {
    const result = new Date(Date.UTC(year, month, date)); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
    // abbreviations for 19xx.

    if (year >= 0 && year < 100) {
      result.setFullYear(result.getFullYear() - 1900);
    }

    return result;
  }

  getMonthEnd(date) {
    return this.createDate(date.getFullYear(), date.getMonth() + 1, 0);
  }

  getMonthStart(date) {
    return this.createDate(date.getFullYear(), date.getMonth(), 1);
  }

  getNumberOfDaysInMonth(date) {
    return this.getMonthEnd(date).getDate();
  }

  getYearEnd(date) {
    return this.createDate(date.getFullYear(), 11, 31);
  }

  getYearStart(date) {
    return this.createDate(date.getFullYear(), 0, 1);
  }

  isSameDay(date1, date2) {
    return this.isSameMonth(date1, date2) && date1.getDate() === date2.getDate();
  }

  isSameMonth(date1, date2) {
    return this.isSameYear(date1, date2) && date1.getMonth() === date2.getMonth();
  }

  isSameYear(date1, date2) {
    return date1.getFullYear() === date2.getFullYear();
  }

  getId() {
    return 'native';
  }

  getFechaDayNames(style) {
    switch (style) {
      case exports.TranslationWidth.SHORT:
        return fecha.i18n.dayNamesShort;

      case exports.TranslationWidth.LONG:
        return fecha.i18n.dayNames;
    }
  }

  getFechaMonthNames(style) {
    switch (style) {
      case exports.TranslationWidth.SHORT:
        return fecha.i18n.monthNamesShort;

      case exports.TranslationWidth.LONG:
        return fecha.i18n.monthNames;
    }
  }

  setFechaLocaleData(config) {
    fecha.i18n.dayNames = config.dayNames[exports.TranslationWidth.LONG];
    fecha.i18n.dayNamesShort = config.dayNames[exports.TranslationWidth.SHORT];
    fecha.i18n.monthNames = config.monthNames[exports.TranslationWidth.LONG];
    fecha.i18n.monthNamesShort = config.monthNames[exports.TranslationWidth.SHORT];
  }

}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const batch = (target, batchSize, offset = 0) => {
  return target.reduce((res, item, index) => {
    const chunkIndex = Math.floor((index + offset) / batchSize);

    if (!res[chunkIndex]) {
      res[chunkIndex] = [];
    }

    res[chunkIndex].push(item);
    return res;
  }, []);
};
/**
 * returns array with numbers from zero to bound.
 * */

const range = (bound, producer = i => i) => {
  const arr = [];

  for (let i = 0; i < bound; i++) {
    arr.push(producer(i));
  }

  return arr;
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const DEFAULT_DATE_OPTIONS = {
  bounding: false,
  holiday: false,
  range: false
};
class CalendarDataService {
  constructor(dateService) {
    this.dateService = dateService;

    this.createDayPickerData = (date, dateRange) => {
      const weeks = this.createDates(date, DEFAULT_DATE_OPTIONS, dateRange);
      return this.withBoundingMonths(weeks, date);
    };

    this.createMonthPickerData = (date, rows, columns) => {
      const yearStart = this.dateService.getYearStart(date);
      const monthRange = range(rows * columns, index => {
        const monthDate = this.dateService.addMonth(yearStart, index);
        return Object.assign({
          date: monthDate
        }, DEFAULT_DATE_OPTIONS);
      });
      return batch(monthRange, rows);
    };

    this.createYearPickerData = (date, rows, columns) => {
      const yearStart = this.dateService.getYearStart(date);
      const yearRange = range(rows * columns, index => {
        const yearDate = this.dateService.addYear(yearStart, index);
        return Object.assign({
          date: yearDate
        }, DEFAULT_DATE_OPTIONS);
      });
      return batch(yearRange, rows);
    };

    this.createDayPickerPagerData = (startDate, endDate) => {
      const numberOfDayPickers = this.getNumberOfMonths(startDate, endDate) + 1;
      return range(numberOfDayPickers, index => {
        const monthDate = this.dateService.addMonth(startDate, index);
        return Object.assign({
          date: monthDate
        }, DEFAULT_DATE_OPTIONS);
      });
    };

    this.createYearPickerPagerData = (startDate, endDate, rows, columns) => {
      const numberOfYears = this.getNumberOfYears(startDate, endDate) + 1;
      const numberOfYearPickers = Math.max(Math.ceil(numberOfYears / (rows * columns)), 1);
      return range(numberOfYearPickers, index => {
        const yearDate = this.dateService.addYear(startDate, index * rows * columns);
        return Object.assign({
          date: yearDate
        }, DEFAULT_DATE_OPTIONS);
      });
    };

    this.getNumberOfMonths = (lhs, rhs) => {
      const numberOfYears = this.getNumberOfYears(lhs, rhs);
      const numberOfMonths = this.dateService.getMonth(rhs) - this.dateService.getMonth(lhs);
      return numberOfMonths + numberOfYears * DateService.MONTHS_IN_YEAR;
    };

    this.getNumberOfYears = (lhs, rhs) => {
      return this.dateService.getYear(rhs) - this.dateService.getYear(lhs);
    };
  }

  createDates(activeMonth, options, dateRange) {
    let days = this.createDateRangeForMonth(activeMonth, options);

    if (dateRange) {
      days = this.withRangedDates(days, dateRange);
    }

    const startOfWeekDayDiff = this.getStartOfWeekDayDiff(activeMonth);
    return batch(days, DateService.DAYS_IN_WEEK, startOfWeekDayDiff);
  }

  withRangedDates(days, calendarRange) {
    if (calendarRange.startDate && !calendarRange.endDate) {
      return this.withRangedStartDates(days, calendarRange.startDate);
    }

    if (calendarRange.startDate && calendarRange.endDate) {
      return this.withRangedStartEndDates(days, calendarRange.startDate, calendarRange.endDate);
    }

    return days;
  }

  withRangedStartDates(days, startDate) {
    return days.map(day => {
      const isSameStartDate = this.dateService.compareDatesSafe(day.date, startDate) === 0;
      return isSameStartDate ? Object.assign(Object.assign({}, day), {
        range: true
      }) : day;
    });
  }

  withRangedStartEndDates(days, startDate, endDate) {
    return days.map(day => {
      const isSameStartDate = this.dateService.compareDatesSafe(day.date, startDate) === 0;
      const isSameEndDate = this.dateService.compareDatesSafe(day.date, endDate) === 0;

      if (isSameStartDate || isSameEndDate) {
        return Object.assign(Object.assign({}, day), {
          range: true
        });
      } else {
        const isInRange = this.dateService.isBetween(day.date, startDate, endDate);
        return Object.assign(Object.assign({}, day), {
          range: isInRange
        });
      }
    });
  }

  withBoundingMonths(weeks, activeMonth) {
    let withBoundingMonths = weeks;

    if (this.isShouldAddPrevBoundingMonth(withBoundingMonths)) {
      withBoundingMonths = this.addPrevBoundingMonth(withBoundingMonths, activeMonth);
    }

    if (this.isShouldAddNextBoundingMonth(withBoundingMonths)) {
      withBoundingMonths = this.addNextBoundingMonth(withBoundingMonths, activeMonth);
    }

    return withBoundingMonths;
  }

  addPrevBoundingMonth(weeks, activeMonth) {
    const firstWeek = weeks.shift();
    const numberOfBoundingDates = DateService.DAYS_IN_WEEK - firstWeek.length;
    firstWeek.unshift(...this.createPrevBoundingDays(activeMonth, numberOfBoundingDates));
    return [firstWeek, ...weeks];
  }

  addNextBoundingMonth(weeks, activeMonth) {
    const lastWeek = weeks.pop();
    const numberOfBoundingDates = DateService.DAYS_IN_WEEK - lastWeek.length;
    lastWeek.push(...this.createNextBoundingDays(activeMonth, numberOfBoundingDates));
    return [...weeks, lastWeek];
  }

  createPrevBoundingDays(activeMonth, numberOfBoundingDates) {
    const month = this.dateService.addMonth(activeMonth, -1);
    const daysInMonth = this.dateService.getNumberOfDaysInMonth(month);
    return this.createDateRangeForMonth(month, DEFAULT_DATE_OPTIONS).slice(daysInMonth - numberOfBoundingDates).map(date => {
      return Object.assign(Object.assign({}, date), {
        bounding: true
      });
    });
  }

  createNextBoundingDays(activeMonth, numberOfBoundingDates) {
    const month = this.dateService.addMonth(activeMonth, 1);
    return this.createDateRangeForMonth(month, DEFAULT_DATE_OPTIONS).slice(0, numberOfBoundingDates).map(date => {
      return Object.assign(Object.assign({}, date), {
        bounding: true
      });
    });
  }

  getStartOfWeekDayDiff(date) {
    const startOfMonth = this.dateService.getMonthStart(date);
    return this.getWeekStartDiff(startOfMonth);
  }

  getWeekStartDiff(date) {
    return (DateService.DAYS_IN_WEEK - this.dateService.getFirstDayOfWeek() + this.dateService.getDayOfWeek(date)) % DateService.DAYS_IN_WEEK;
  }

  isShouldAddPrevBoundingMonth(weeks) {
    return weeks[0].length < DateService.DAYS_IN_WEEK;
  }

  isShouldAddNextBoundingMonth(weeks) {
    return weeks[weeks.length - 1].length < DateService.DAYS_IN_WEEK;
  }

  createDateRangeForMonth(monthDate, options) {
    const daysInMonth = this.dateService.getNumberOfDaysInMonth(monthDate);
    return range(daysInMonth, i => {
      const year = this.dateService.getYear(monthDate);
      const month = this.dateService.getMonth(monthDate);
      const date = this.dateService.createDate(year, month, i + 1);
      return Object.assign({
        date
      }, options);
    });
  }

}

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$k = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

class DividerComponent extends React.Component {
  render() {
    const _a = this.props,
          {
      style,
      themedStyle
    } = _a,
          restProps = __rest$k(_a, ["style", "themedStyle"]);

    return React.createElement(reactNative.View, _extends$j({}, restProps, {
      style: [themedStyle, style]
    }));
  }

}

DividerComponent.styledComponentName = 'Divider';
const Divider = styled(DividerComponent);

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$l = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const PICKER_ROWS = 4;
const PICKER_COLUMNS = 3;
const VIEWS_IN_PICKER = PICKER_ROWS * PICKER_COLUMNS;
const FORMAT_DAY = 'D';
const FORMAT_MONTH = 'MMM';
const FORMAT_YEAR = 'YYYY';
const FORMAT_HEADER_DATE = 'MMM YYYY';
const FORMAT_HEADER_MONTH = 'YYYY';
const FORMAT_HEADER_YEAR = 'YYYY';
class BaseCalendarComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      viewMode: this.props.startView,
      visibleDate: this.dateService.getMonthStart(this.getSelectedDate())
    };
    this.dataService = new CalendarDataService(this.dateService);
    this.calendarDayPagerRef = React.createRef();
    this.calendarYearPagerRef = React.createRef();

    this.scrollToToday = () => {
      this.setState({
        viewMode: CalendarViewModes.DATE,
        visibleDate: this.dateService.today()
      });
    };

    this.onSelect = item => {
      this.onDaySelect(item);
    };

    this.onMonthSelect = date => {
      const nextVisibleDate = this.dateService.createDate(this.dateService.getYear(this.state.visibleDate), this.dateService.getMonth(date.date), this.dateService.getDate(this.state.visibleDate));
      this.setState({
        viewMode: this.state.viewMode.pickNext(),
        visibleDate: nextVisibleDate
      });
    };

    this.onYearSelect = date => {
      const nextVisibleDate = this.dateService.createDate(this.dateService.getYear(date.date), this.dateService.getMonth(this.state.visibleDate), this.dateService.getDate(this.state.visibleDate));
      this.setState({
        viewMode: this.state.viewMode.pickNext(),
        visibleDate: nextVisibleDate
      });
    };

    this.onDayPickerPagerSelect = index => {
      const yearStart = this.dateService.getYearStart(this.min);
      this.setState({
        visibleDate: this.dateService.addMonth(yearStart, index)
      });
    };

    this.onYearPickerPagerSelect = index => {
      const yearStart = this.dateService.getYearStart(this.min);
      this.setState({
        visibleDate: this.dateService.addYear(yearStart, index * VIEWS_IN_PICKER)
      });
    };

    this.onPickerNavigationPress = () => {
      this.setState({
        viewMode: this.state.viewMode.navigationNext()
      });
    };

    this.onCalendarPagerLeft = () => {
      this.onCalendarPagerMove(-1);
    };

    this.onCalendarPagerRight = () => {
      this.onCalendarPagerMove(1);
    };

    this.onCalendarPagerMove = step => {
      const ref = this.getCurrentPagerRef();
      const index = this.getCalendarPagerIndex();
      this.onCalendarPagerMoveStart(ref, index, step);
    };

    this.onCalendarPagerMoveStart = (ref, index, step) => {
      ref.current.scrollToIndex({
        index: index + step,
        animated: true
      });
    };

    this.shouldUpdateDayItem = (props, nextProps) => {
      return this.shouldUpdateDayElement(props, nextProps);
    };

    this.getCalendarStyle = source => {
      return {
        container: {
          paddingVertical: source.paddingVertical,
          borderColor: source.borderColor,
          borderWidth: source.borderWidth,
          borderRadius: source.borderRadius,
          maxWidth: source.maxWidth,
          maxHeight: source.maxHeight
        },
        headerContainer: {
          paddingHorizontal: source.headerPaddingHorizontal,
          paddingVertical: source.headerPaddingVertical
        },
        title: {
          fontSize: source.titleFontSize,
          fontWeight: source.titleFontWeight,
          lineHeight: source.titleLineHeight,
          color: source.titleColor,
          fontFamily: source.titleFontFamily
        },
        icon: {
          width: source.iconWidth,
          height: source.iconHeight,
          tintColor: source.iconTintColor
        },
        divider: {
          marginVertical: source.dividerMarginVertical
        },
        daysHeaderContainer: {
          marginHorizontal: source.rowMarginHorizontal
        },
        row: {
          minHeight: source.rowMinHeight,
          marginHorizontal: source.rowMarginHorizontal
        }
      };
    };

    this.getWeekdayStyle = source => {
      return {
        fontSize: source.weekdayTextFontSize,
        fontWeight: source.weekdayTextFontWeight,
        lineHeight: source.weekdayTextLineHeight,
        color: source.weekdayTextColor,
        fontFamily: source.weekdayTextFontFamily
      };
    };

    this.getIsDaySelected = date => {
      return this.isDaySelected(date);
    };

    this.isMonthSelected = date => {
      return this.dateService.isSameMonthSafe(date.date, this.getSelectedDate());
    };

    this.isYearSelected = date => {
      return this.dateService.isSameYearSafe(date.date, this.getSelectedDate());
    };

    this.isDayDisabled = date => {
      return !this.isDateFitsBounds(date) || this.isDateFitsFilter(date);
    };

    this.isMonthDisabled = date => {
      return !this.isDateFitsBounds(date) || this.isDateFitsFilter(date);
    };

    this.isYearDisabled = date => {
      return !this.isDateFitsBounds(date) || this.isDateFitsFilter(date);
    };

    this.isDayToday = date => {
      return this.dateService.isSameDaySafe(date.date, this.dateService.today());
    };

    this.isMonthToday = date => {
      return this.dateService.isSameMonthSafe(date.date, this.dateService.today());
    };

    this.isYearToday = date => {
      return this.dateService.isSameYearSafe(date.date, this.dateService.today());
    };

    this.isDateFitsFilter = date => {
      return this.props.filter && !this.props.filter(date.date) || false;
    };

    this.isDateFitsBounds = date => {
      return this.dateService.isBetweenIncludingSafe(date.date, this.min, this.max);
    };

    this.isDayPickerInViewPort = index => {
      const visibleDayPickerIndex = this.dataService.getNumberOfMonths(this.min, this.state.visibleDate);
      return index === visibleDayPickerIndex || Math.abs(index - visibleDayPickerIndex) === 1;
    };

    this.isYearPickerInViewPort = index => {
      const numberOfYears = this.dataService.getNumberOfYears(this.min, this.state.visibleDate);
      const visibleYearPickerIndex = Math.floor(numberOfYears / VIEWS_IN_PICKER);
      return index === visibleYearPickerIndex || Math.abs(index - visibleYearPickerIndex) === 1;
    };

    this.createHeaderTitle = (date, viewMode) => {
      switch (viewMode) {
        case CalendarViewModes.DATE:
          return this.dateService.format(date, FORMAT_HEADER_DATE);

        case CalendarViewModes.MONTH:
          {
            return this.dateService.format(date, FORMAT_HEADER_MONTH);
          }

        case CalendarViewModes.YEAR:
          {
            const minDateFormat = this.dateService.format(this.min, FORMAT_HEADER_YEAR);
            const maxDateFormat = this.dateService.format(this.max, FORMAT_HEADER_YEAR);
            return `${minDateFormat} - ${maxDateFormat}`;
          }
      }
    };

    this.getCalendarPagerIndex = () => {
      switch (this.state.viewMode.id) {
        case CalendarViewModes.DATE.id:
          return this.dataService.getNumberOfMonths(this.min, this.state.visibleDate);

        case CalendarViewModes.YEAR.id:
          return Math.floor(this.dataService.getNumberOfYears(this.min, this.state.visibleDate) / VIEWS_IN_PICKER);
      }
    };

    this.getCurrentPagerRef = () => {
      switch (this.state.viewMode.id) {
        case CalendarViewModes.DATE.id:
          return this.calendarDayPagerRef;

        case CalendarViewModes.YEAR.id:
          return this.calendarYearPagerRef;
      }
    };

    this.isLateralNavigationAllowed = () => {
      const {
        viewMode
      } = this.state;
      return viewMode.id === CalendarViewModes.DATE.id || viewMode.id === CalendarViewModes.YEAR.id;
    };

    this.renderWeekdayElement = (weekday, index) => {
      return React.createElement(CalendarDateContent, {
        key: index,
        textStyle: this.getWeekdayStyle(this.props.themedStyle)
      }, weekday);
    };

    this.renderDayElement = (date, style) => {
      return React.createElement(CalendarDateContent, {
        style: style.container,
        textStyle: style.text
      }, this.dateService.format(date.date, FORMAT_DAY));
    };

    this.renderDayIfNeeded = (item, style) => {
      const shouldRender = !item.bounding || this.props.boundingMonth;

      if (shouldRender) {
        const renderSelector = this.props.renderDay || this.renderDayElement;
        return renderSelector(item, style);
      }

      return null;
    };

    this.renderMonthElement = (date, style) => {
      return React.createElement(CalendarDateContent, {
        style: [style.container, styles$f.monthCell],
        textStyle: style.text
      }, this.dateService.format(date.date, FORMAT_MONTH));
    };

    this.renderYearElement = (date, style) => {
      return React.createElement(CalendarDateContent, {
        style: [style.container, styles$f.yearCell],
        textStyle: style.text
      }, this.dateService.format(date.date, FORMAT_YEAR));
    };

    this.renderDayPickerElement = (date, index) => {
      const {
        row
      } = this.getCalendarStyle(this.props.themedStyle);
      return React.createElement(CalendarPicker, {
        key: index,
        category: "day",
        data: this.getDayPickerData(date),
        rowStyle: row,
        onSelect: this.onSelect,
        isItemSelected: this.getIsDaySelected,
        isItemDisabled: this.isDayDisabled,
        isItemToday: this.isDayToday,
        shouldItemUpdate: this.shouldUpdateDayItem,
        renderItem: this.renderDayIfNeeded
      });
    };

    this.renderDayPickerPagerElement = date => {
      const {
        themedStyle
      } = this.props;
      const {
        divider,
        daysHeaderContainer
      } = this.getCalendarStyle(themedStyle);
      const visibleDayPickerIndex = this.dataService.getNumberOfMonths(this.min, this.state.visibleDate);
      return React.createElement(React.Fragment, null, React.createElement(CalendarMonthHeader, {
        style: daysHeaderContainer,
        data: this.dateService.getDayOfWeekNames()
      }, this.renderWeekdayElement), React.createElement(Divider, {
        style: divider
      }), React.createElement(CalendarPager, {
        ref: this.calendarDayPagerRef,
        selectedIndex: visibleDayPickerIndex,
        data: this.dataService.createDayPickerPagerData(this.min, this.max),
        onSelect: this.onDayPickerPagerSelect,
        shouldLoadComponent: this.isDayPickerInViewPort
      }, this.renderDayPickerElement));
    };

    this.renderMonthPickerElement = date => {
      const {
        row
      } = this.getCalendarStyle(this.props.themedStyle);
      return React.createElement(CalendarPicker, {
        category: "month",
        data: this.dataService.createMonthPickerData(date, PICKER_ROWS, PICKER_COLUMNS),
        rowStyle: row,
        onSelect: this.onMonthSelect,
        isItemSelected: this.isMonthSelected,
        isItemDisabled: this.isMonthDisabled,
        isItemToday: this.isMonthToday,
        renderItem: this.props.renderMonth || this.renderMonthElement
      });
    };

    this.renderYearPickerElement = (date, index) => {
      const {
        row
      } = this.getCalendarStyle(this.props.themedStyle);
      return React.createElement(CalendarPicker, {
        key: index,
        category: "year",
        data: this.dataService.createYearPickerData(date.date, PICKER_ROWS, PICKER_COLUMNS),
        rowStyle: row,
        onSelect: this.onYearSelect,
        isItemSelected: this.isYearSelected,
        isItemDisabled: this.isYearDisabled,
        isItemToday: this.isYearToday,
        renderItem: this.props.renderYear || this.renderYearElement
      });
    };

    this.renderYearPickerPagerElement = date => {
      const numberOfYears = this.dataService.getNumberOfYears(this.min, this.state.visibleDate);
      const visibleYearPickerIndex = Math.floor(numberOfYears / VIEWS_IN_PICKER);
      return React.createElement(CalendarPager, {
        ref: this.calendarYearPagerRef,
        selectedIndex: visibleYearPickerIndex,
        data: this.dataService.createYearPickerPagerData(this.min, this.max, PICKER_ROWS, PICKER_COLUMNS),
        onSelect: this.onYearPickerPagerSelect,
        shouldLoadComponent: this.isYearPickerInViewPort
      }, this.renderYearPickerElement);
    };

    this.renderPickerElement = date => {
      switch (this.state.viewMode.id) {
        case CalendarViewModes.DATE.id:
          return this.renderDayPickerPagerElement(date);

        case CalendarViewModes.MONTH.id:
          return this.renderMonthPickerElement(date);

        case CalendarViewModes.YEAR.id:
          return this.renderYearPickerPagerElement(date);
      }
    };

    this.renderCalendarFooter = () => {
      const {
        renderFooter
      } = this.props;
      return renderFooter && renderFooter();
    };

    this.renderCalendarHeader = () => {
      const {
        themedStyle,
        title
      } = this.props;
      const {
        headerContainer,
        title: titleStyle,
        icon
      } = this.getCalendarStyle(themedStyle);
      const titleSelector = title || this.createHeaderTitle;
      return React.createElement(CalendarHeader, {
        style: headerContainer,
        title: titleSelector(this.state.visibleDate, this.state.viewMode),
        titleStyle: titleStyle,
        iconStyle: icon,
        lateralNavigationAllowed: this.isLateralNavigationAllowed(),
        onTitlePress: this.onPickerNavigationPress,
        onLeft: this.onCalendarPagerLeft,
        onRight: this.onCalendarPagerRight
      });
    };
  }

  get dateService() {
    return this.props.dateService;
  }

  get min() {
    return this.props.min || this.dateService.getYearStart(this.dateService.today());
  }

  get max() {
    return this.props.max || this.dateService.getYearEnd(this.dateService.today());
  }

  render() {
    const _a = this.props,
          {
      style,
      themedStyle
    } = _a,
          restProps = __rest$l(_a, ["style", "themedStyle"]);

    const {
      container
    } = this.getCalendarStyle(themedStyle);
    return React.createElement(reactNative.View, _extends$k({}, restProps, {
      style: [styles$f.container, container, style]
    }), this.renderCalendarHeader(), this.renderPickerElement(this.state.visibleDate), this.renderCalendarFooter());
  }

}
BaseCalendarComponent.defaultProps = {
  dateService: new NativeDateService(),
  boundingMonth: true,
  startView: CalendarViewModes.DATE
};
const styles$f = reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  monthCell: {
    aspectRatio: 0.25 * DateService.DAYS_IN_WEEK
  },
  yearCell: {
    aspectRatio: 0.25 * DateService.DAYS_IN_WEEK
  }
});

/**
 * Styled `Calendar` component.
 * Supports locales and different date objects like Moment.js or date-fns.
 * Composes date picker components in a horizontal pageable list.
 *
 * @extends React.Component
 *
 * @property {D} min - Minimal date that is able to be selected.
 *
 * @property {D} max - Maximum date that is able to be selected.
 *
 * @property {D} date - Date which is currently selected.
 *
 * @property {DateService<D>} dateService - Date service that is able to work with a date objects.
 * Defaults to Native Date service that works with JS Date.
 * Allows using different types of date like Moment.js or date-fns.
 *
 * @property {boolean} boundingMonth - Defines if we should render previous and next months in the current month view.
 *
 * @property {CalendarViewMode} startView - Defines starting view for calendar. Defaults to Date view.
 *
 * @property {(date: D) => string} title - Defines the title for visible date.
 *
 * @property {(date: D) => string} todayTitle - Defines the title for today's date.
 *
 * @property {(date: D) => ReactElement<any>} filter - Predicate that decides which cells will be disabled.
 *
 * @property {(date: D) => void} onSelect - Selection emitter. Fires when another day cell is pressed.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderDay - Should return the content of day cell.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderMonth - Should return the content of month cell.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderYear - Should return the content of year cell.
 *
 * @overview-example Basic Usage
 *
 * ```
 * import React from 'react';
 * import { Calendar } from '../..';
 *
 * export class BasicCalendar extends React.Component {
 *
 *   state = {
 *     date: new Date(),
 *   };
 *
 *   onSelect = (date) => {
 *     this.setState({ date });
 *   };
 *
 *   render() {
 *     return (
 *       <Calendar
 *         date={this.state.date}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Custom Day Cell
 *
 * ```
 * import React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Calendar, Text } from '../..';
 *
 * export const DayCell = ({ date }, style) => (
 *   <View
 *     style={[styles.container, style.container]}>
 *     <Text style={style.text}>{`${date.getDate()}`}</Text>
 *     <Text style={[style.text, styles.value]}>
 *       {`${100 * date.getDate() + Math.pow(date.getDate(), 2)}$`}
 *     </Text>
 *   </View>
 * );
 *
 * const styles = StyleSheet.create({
 *   container: { flex: 1, justifyContent: 'center', alignItems: 'center', aspectRatio: 1 },
 *   value: { fontSize: 12, fontWeight: '400' },
 * });
 *
 * export class DailyValueCalendar extends React.Component {
 *
 *   state = {
 *     date: new Date(),
 *   };
 *
 *   onSelect = (date) => {
 *     this.setState({ date });
 *   };
 *
 *   render() {
 *     return (
 *       <Calendar
 *         date={this.state.date}
 *         onSelect={this.onSelect}
 *         renderDay={DayCell}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Custom Locale
 *
 * ```
 * import React from 'react';
 * import { Calendar, NativeDateService } from '../..';
 *
 * const i18n = {
 *   dayNames: {
 *     short: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
 *     long: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
 *   },
 *   monthNames: {
 *     short: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
 *     long: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
 *   },
 * };
 *
 * export class ChineseCalendar extends React.Component {
 *
 *   dateService = new NativeDateService('zh', i18n);
 *
 *   state = {
 *     date: new Date(),
 *   };
 *
 *   onSelect = (date) => {
 *     this.setState({ date });
 *   };
 *
 *   render() {
 *     return (
 *       <Calendar
 *         date={this.state.date}
 *         dateService={this.dateService}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Working with Moment
 *
 * ```
 * // IMPORTANT: To use Moment make sure to install Moment Date Service
 * // npm i @ui-kitten/moment
 *
 * import React from 'react';
 * import moment from 'moment';
 * import { Calendar } from '../..';
 * import { MomentDateService } from '../../../moment';
 *
 * export class MomentCalendar extends React.Component {
 *
 *   state = {
 *     date: moment();
 *   };
 *
 *   dateService = new MomentDateService();
 *
 *   onSelect = (date) => {
 *     this.setState({ date });
 *   }
 *
 *   render() {
 *     return (
 *       <Calendar
 *         date={this.state.date}
 *         dateService={this.dateService}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 */

class CalendarComponent extends BaseCalendarComponent {
  // BaseCalendarComponent
  onDaySelect(date) {
    const {
      onSelect
    } = this.props;

    if (onSelect) {
      onSelect(date.date);
    }
  }

  getDayPickerData(date) {
    return this.dataService.createDayPickerData(date.date);
  }

  getSelectedDate() {
    return this.props.date || this.dateService.today();
  }

  isDaySelected(date) {
    return this.dateService.isSameDaySafe(date.date, this.getSelectedDate());
  }

  shouldUpdateDayElement(props, nextProps) {
    const dateChanged = this.dateService.compareDatesSafe(props.date.date, nextProps.date.date) !== 0;

    if (dateChanged) {
      return true;
    }

    const selectionChanged = props.selected !== nextProps.selected;
    const disablingChanged = props.disabled !== nextProps.disabled;
    const value = selectionChanged || disablingChanged;

    if (value) {
      return true;
    }

    return props.theme !== nextProps.theme;
  }

}
CalendarComponent.styledComponentName = 'Calendar';
const Calendar = styled(CalendarComponent);

class RangeDateService {
  constructor(dateService) {
    this.dateService = dateService;
  }

  createRange(range, date) {
    switch (true) {
      case !range.startDate && !range.endDate:
        return {
          startDate: date.date,
          endDate: null
        };

      case range.startDate && !range.endDate:
        return this.createRangeForStart(range, date);

      case range.startDate !== null && range.endDate !== null:
        return this.createRangeForStartEnd(date);

      default:
        return range;
    }
  }

  createRangeForStart(range, date) {
    if (this.dateService.compareDatesSafe(date.date, range.startDate) === 1) {
      return {
        startDate: range.startDate,
        endDate: date.date
      };
    } else if (this.dateService.compareDatesSafe(date.date, range.startDate) === -1) {
      return {
        startDate: date.date,
        endDate: range.startDate
      };
    } else {
      return range;
    }
  }

  createRangeForStartEnd(date) {
    return {
      startDate: date.date,
      endDate: null
    };
  }

}

/**
 * Styled `RangeCalendar` component.
 * Supports locales and different date objects like Moment.js or date-fns.
 * Composes date picker components in a horizontal pageable list.
 *
 * @extends React.Component
 *
 * @property {D} min - Minimal date that is able to be selected.
 *
 * @property {D} max - Maximum date that is able to be selected.
 *
 * @property {CalendarRange<D>} range - Range which is currently selected.
 *
 * @property {DateService<D>} dateService - Date service that is able to work with a date objects.
 * Defaults to Native Date service that works with JS Date.
 * Allows using different types of date like Moment.js or date-fns.
 *
 * @property {boolean} boundingMonth - Defines if we should render previous and next months in the current month view.
 *
 * @property {CalendarViewMode} startView - Defines starting view for calendar. Defaults to Date view.
 *
 * @property {(date: D) => string} title - Defines the title for visible date.
 *
 * @property {(date: D) => string} todayTitle - Defines the title for today's date.
 *
 * @property {(date: D) => ReactElement<any>} filter - Predicate that decides which cells will be disabled.
 *
 * @property {(date: D) => void} onSelect - Selection emitter. Fires when another day cell is pressed.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderDay - Should return the content of day cell.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderMonth - Should return the content of month cell.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderYear - Should return the content of year cell.
 *
 * @overview-example Basic Usage
 *
 * ```
 * import React from 'react';
 * import { RangeCalendar } from '../..';
 *
 * export class RangeCalendar extends React.Component {
 *
 *   state = {
 *     range: {
 *       startDate: null,
 *       endDate: null,
 *     },
 *   };
 *
 *   onSelect = (range) => {
 *     this.setState({ range });
 *   };
 *
 *   render() {
 *     return (
 *       <RangeCalendar
 *         range={this.state.range}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 */

class RangeCalendarComponent extends BaseCalendarComponent {
  constructor() {
    super(...arguments);
    this.rangeDateService = new RangeDateService(this.dateService);
  } // BaseCalendarComponent


  onDaySelect(date) {
    const {
      range,
      onSelect
    } = this.props;
    const calendarRange = this.rangeDateService.createRange(range, date);
    onSelect && onSelect(calendarRange);
  }

  getSelectedDate() {
    return this.dateService.today();
  }

  isDaySelected(date) {
    return false;
  }

  shouldUpdateDayElement(props, nextProps) {
    const dateChanged = this.dateService.compareDatesSafe(props.date.date, nextProps.date.date) !== 0;

    if (dateChanged) {
      return true;
    }

    const selectionChanged = props.selected !== nextProps.selected;
    const disablingChanged = props.disabled !== nextProps.disabled;
    const rangeChanged = props.range !== nextProps.range;
    const rangeStartPlaceChanged = props.firstRangeItem !== nextProps.firstRangeItem;
    const rangeEndPlaceChanged = props.lastRangeItem !== nextProps.lastRangeItem;
    const shouldUpdate = selectionChanged || disablingChanged || rangeChanged || rangeStartPlaceChanged || rangeEndPlaceChanged;

    if (shouldUpdate) {
      return true;
    }

    return props.theme !== nextProps.theme;
  }

  getDayPickerData(date) {
    return this.dataService.createDayPickerData(date.date, this.props.range);
  }

}
RangeCalendarComponent.styledComponentName = 'Calendar';
const RangeCalendar = styled(RangeCalendarComponent);

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$m = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Styled `CheckBox` component.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Determines whether component is checked.`
 * Default is `false`.
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning`, `danger`, `basic` or `control`.
 * Default is `basic`.
 *
 * @property {string} text - Determines text of the component.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes text style.
 *
 * @property {(checked: boolean) => void} onChange - Fires on checkbox value change.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { CheckBox } from '../..';
 *
 * export class CheckBoxShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <CheckBox
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With Text
 *
 * ```
 * import React from 'react';
 * import { CheckBox } from '../..';
 *
 * export class RememberPasswordCheckBox extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <CheckBox
 *         text='Remember Password'
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { CheckBox } from '../..';
 *
 * export class CheckBoxShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <CheckBox
 *         checked={this.state.checked}
 *         status='success'
 *         onChange={this.onChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Indeterminate State
 *
 * ```
 * import React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { CheckBox } from '../..';
 *
 * export class CheckBoxContainer extends React.Component {
 *
 *   state = {
 *     mainCheckboxChecked: false,
 *     mainCheckboxIndeterminate: false,
 *     checkbox1Checked: false,
 *     checkbox2Checked: false,
 *     checkbox3Checked: false,
 *   };
 *
 *   onMainCheckboxChange = (checked) => {
 *     if (checked) {
 *       this.setState({
 *         checkbox1Checked: true,
 *         checkbox2Checked: true,
 *         checkbox3Checked: true,
 *       });
 *     } else {
 *       this.setState({
 *         checkbox1Checked: false,
 *         checkbox2Checked: false,
 *         checkbox3Checked: false,
 *       });
 *     }
 *     this.setState({ mainCheckboxChecked: checked });
 *   };
 *
 *   onCheckbox1Change = (checked) => {
 *     this.setState({ checkbox1Checked: checked }, this.setMainCheckboxDependingState);
 *   };
 *
 *   onCheckbox2Change = (checked) => {
 *     this.setState({ checkbox2Checked: checked }, this.setMainCheckboxDependingState);
 *   };
 *
 *   onCheckbox3Change = (checked) => {
 *     this.setState({ checkbox3Checked: checked }, this.setMainCheckboxDependingState);
 *   };
 *
 *   setMainCheckboxDependingState = () => {
 *     const { checkbox1Checked, checkbox2Checked, checkbox3Checked } = this.state;
 *     const states = [checkbox1Checked, checkbox2Checked, checkbox3Checked];
 *     const someChecked = states.some((item) => item === true);
 *     const everyChecked = states.every((item) => item === true);
 *
 *     if (someChecked && !everyChecked) {
 *       this.setState({
 *         mainCheckboxChecked: true,
 *         mainCheckboxIndeterminate: true,
 *       });
 *     } else if (!someChecked && !everyChecked) {
 *       this.setState({
 *         mainCheckboxChecked: false,
 *         mainCheckboxIndeterminate: false,
 *       });
 *     } else if (everyChecked) {
 *       this.setState({
 *         mainCheckboxChecked: true,
 *         mainCheckboxIndeterminate: false,
 *       });
 *     }
 *   };
 *
 *   render() {
 *     const {
 *       mainCheckboxChecked,
 *       mainCheckboxIndeterminate,
 *       checkbox1Checked,
 *       checkbox2Checked,
 *       checkbox3Checked,
 *     } = this.state;
 *
 *    return (
 *      <View style={{ flex: 1 }}>
 *        <CheckBox
 *          style={{ marginBottom: 12 }}
 *          text='Main'
 *          checked={mainCheckboxChecked}
 *          indeterminate={mainCheckboxIndeterminate}
 *          onChange={this.onMainCheckboxChange}
 *        />
 *        <CheckBox
 *          text='Checkbox 1'
 *          style={{ marginLeft: 12, marginBottom: 12 }}
 *          checked={checkbox1Checked}
 *          onChange={this.onCheckbox1Change}
 *        />
 *        <CheckBox
 *          text='Checkbox 2'
 *          style={{ marginLeft: 12, marginBottom: 12 }}
 *          checked={checkbox2Checked}
 *          onChange={this.onCheckbox2Change}
 *        />
 *        <CheckBox
 *          text='Checkbox 3'
 *          style={{ marginLeft: 12 }}
 *          checked={checkbox3Checked}
 *          onChange={this.onCheckbox3Change}
 *        />
 *      </View>
 *    );
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { CheckBox } from '../..';
 *
 * export const CheckBoxShowcase = (props) => (
 *   <CheckBox
 *     style={styles.checkbox}
 *     textStyle={styles.checkboxText}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   checkbox: { borderRadius: 8 },
 *   checkboxText: { color: 'black' },
 * });
 * ```
 */

class CheckBoxComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = () => {
      this.props.dispatch([]);

      if (this.props.onChange) {
        this.props.onChange(!this.props.checked, false);
      }
    };

    this.onPressIn = event => {
      this.props.dispatch([exports.Interaction.ACTIVE]);

      if (this.props.onPressIn) {
        this.props.onPressIn(event);
      }
    };

    this.onPressOut = event => {
      this.props.dispatch([]);

      if (this.props.onPressOut) {
        this.props.onPressOut(event);
      }
    };

    this.getComponentStyle = source => {
      const {
        textMarginHorizontal,
        textFontFamily,
        textFontSize,
        textFontWeight,
        textLineHeight,
        textColor,
        iconWidth,
        iconHeight,
        iconBorderRadius,
        iconTintColor,
        outlineWidth,
        outlineHeight,
        outlineBorderRadius,
        outlineBackgroundColor
      } = source,
            containerParameters = __rest$m(source, ["textMarginHorizontal", "textFontFamily", "textFontSize", "textFontWeight", "textLineHeight", "textColor", "iconWidth", "iconHeight", "iconBorderRadius", "iconTintColor", "outlineWidth", "outlineHeight", "outlineBorderRadius", "outlineBackgroundColor"]);

      return {
        container: {},
        highlightContainer: {},
        selectContainer: containerParameters,
        text: {
          marginHorizontal: textMarginHorizontal,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          fontWeight: textFontWeight,
          lineHeight: textLineHeight,
          color: textColor
        },
        icon: {
          width: iconWidth,
          height: iconHeight,
          borderRadius: iconBorderRadius,
          backgroundColor: iconTintColor
        },
        highlight: {
          width: outlineWidth,
          height: outlineHeight,
          borderRadius: outlineBorderRadius,
          backgroundColor: outlineBackgroundColor
        }
      };
    };

    this.createHitSlopInsets = style => {
      const {
        width
      } = reactNative.StyleSheet.flatten(style); // @ts-ignore: `width` is restricted to be a number

      const value = 40 - width;
      return {
        left: value,
        top: value,
        right: value,
        bottom: value
      };
    };

    this.renderTextElement = style => {
      const {
        text,
        textStyle
      } = this.props;
      return React.createElement(Text, {
        style: [style, styles$g.text, textStyle]
      }, text);
    };

    this.renderSelectIconElement = style => {
      return React.createElement(CheckMark, {
        style: [style, styles$g.icon]
      });
    };

    this.renderIndeterminateIconElement = style => {
      return React.createElement(reactNative.View, {
        style: [style, styles$g.icon]
      });
    };

    this.renderIconElement = style => {
      if (this.props.indeterminate) {
        return this.renderIndeterminateIconElement(style);
      } else {
        return this.renderSelectIconElement(style);
      }
    };

    this.renderComponentChildren = style => {
      const {
        text
      } = this.props;
      return [this.renderIconElement(style.icon), isValidString(text) && this.renderTextElement(style.text)];
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      disabled,
      text
    } = _a,
          derivedProps = __rest$m(_a, ["themedStyle", "style", "disabled", "text"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container,
      highlightContainer,
      highlight,
      selectContainer
    } = _b,
          componentStyle = __rest$m(_b, ["container", "highlightContainer", "highlight", "selectContainer"]);

    const selectContainerStyle = [selectContainer, styles$g.selectContainer];
    const hitSlopInsets = this.createHitSlopInsets(selectContainerStyle);
    const [iconElement, textElement] = this.renderComponentChildren(componentStyle);
    return React.createElement(reactNative.TouchableOpacity, {
      style: [container, styles$g.container, style],
      activeOpacity: 1.0,
      disabled: disabled,
      hitSlop: hitSlopInsets,
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    }, React.createElement(reactNative.View, {
      style: [highlightContainer, styles$g.highlightContainer]
    }, React.createElement(reactNative.View, {
      style: [highlight, styles$g.highlight]
    }), React.createElement(reactNative.TouchableOpacity, _extends$l({
      activeOpacity: 1.0
    }, derivedProps, {
      disabled: disabled,
      style: selectContainerStyle,
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    }), iconElement)), textElement);
  }

}

CheckBoxComponent.styledComponentName = 'CheckBox';
const styles$g = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  highlightContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  highlight: {
    position: 'absolute'
  },
  icon: {},
  text: {}
});
const CheckBox = styled(CheckBoxComponent);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static zero() {
    return new Point(0, 0);
  }

}
class Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  static zero() {
    return new Size(0, 0);
  }

}
class Frame {
  constructor(x, y, width, height) {
    this.origin = new Point(x, y);
    this.size = new Size(width, height);
  }
  /**
   * Creates new frame aligned to left of other
   */


  leftOf(other) {
    return new Frame(other.origin.x - this.size.width, this.origin.y, this.size.width, this.size.height);
  }
  /**
   * Creates new frame aligned to top of other
   */


  topOf(other) {
    return new Frame(this.origin.x, other.origin.y - this.size.height, this.size.width, this.size.height);
  }
  /**
   * Creates new frame aligned to right of other
   */


  rightOf(other) {
    return new Frame(other.origin.x + other.size.width, this.origin.y, this.size.width, this.size.height);
  }
  /**
   * Creates new frame aligned to bottom of other
   */


  bottomOf(other) {
    return new Frame(this.origin.x, other.origin.y + other.size.height, this.size.width, this.size.height);
  }
  /**
   * Creates new frame centered horizontally to other
   */


  centerHorizontalOf(other) {
    return new Frame(other.origin.x + (other.size.width - this.size.width) / 2, this.origin.y, this.size.width, this.size.height);
  }
  /**
   * Creates new frame centered vertically to other
   */


  centerVerticalOf(other) {
    return new Frame(this.origin.x, other.origin.y + (other.size.height - this.size.height) / 2, this.size.width, this.size.height);
  }

  static zero() {
    return Frame.from(Point.zero(), Size.zero());
  }

  static from(point, size) {
    return new Frame(point.x, point.y, size.width, size.height);
  }

}
class OffsetRect {
  static zero() {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
  }

}
class Offsets {
  static find(source) {
    const keys = [Offsets.MARGIN.rawValue, Offsets.MARGIN_HORIZONTAL.rawValue, Offsets.MARGIN_VERTICAL.rawValue, Offsets.MARGIN_LEFT.rawValue, Offsets.MARGIN_TOP.rawValue, Offsets.MARGIN_RIGHT.rawValue, Offsets.MARGIN_BOTTOM.rawValue];
    const flatStyle = reactNative.StyleSheet.flatten(source) || {};
    return Object.keys(flatStyle).filter(key => {
      return keys.includes(key);
    }).reduce((acc, key) => {
      const value = flatStyle[key];
      const offsetValue = Offsets.parseString(key);
      return offsetValue ? offsetValue.applyToRect(acc, value) : acc;
    }, OffsetRect.zero());
  }

  static parseString(rawValue, fallback) {
    switch (rawValue) {
      case Offsets.MARGIN.rawValue:
        return Offsets.MARGIN;

      case Offsets.MARGIN_HORIZONTAL.rawValue:
        return Offsets.MARGIN_HORIZONTAL;

      case Offsets.MARGIN_VERTICAL.rawValue:
        return Offsets.MARGIN_VERTICAL;

      case Offsets.MARGIN_LEFT.rawValue:
        return Offsets.MARGIN_LEFT;

      case Offsets.MARGIN_TOP.rawValue:
        return Offsets.MARGIN_TOP;

      case Offsets.MARGIN_RIGHT.rawValue:
        return Offsets.MARGIN_RIGHT;

      case Offsets.MARGIN_BOTTOM.rawValue:
        return Offsets.MARGIN_BOTTOM;

      default:
        return fallback;
    }
  }

}
Offsets.MARGIN = new class {
  constructor() {
    this.rawValue = 'margin';
  }

  applyToRect(rect, value) {
    return {
      left: value,
      top: value,
      right: value,
      bottom: value
    };
  }

}();
Offsets.MARGIN_HORIZONTAL = new class {
  constructor() {
    this.rawValue = 'marginHorizontal';
  }

  applyToRect(rect, value) {
    return Object.assign(Object.assign({}, rect), {
      left: value,
      right: value
    });
  }

}();
Offsets.MARGIN_VERTICAL = new class {
  constructor() {
    this.rawValue = 'marginVertical';
  }

  applyToRect(rect, value) {
    return Object.assign(Object.assign({}, rect), {
      top: value,
      bottom: value
    });
  }

}();
Offsets.MARGIN_LEFT = new class {
  constructor() {
    this.rawValue = 'marginLeft';
  }

  applyToRect(rect, value) {
    return Object.assign(Object.assign({}, rect), {
      left: value
    });
  }

}();
Offsets.MARGIN_TOP = new class {
  constructor() {
    this.rawValue = 'marginTop';
  }

  applyToRect(rect, value) {
    return Object.assign(Object.assign({}, rect), {
      top: value
    });
  }

}();
Offsets.MARGIN_RIGHT = new class {
  constructor() {
    this.rawValue = 'marginRight';
  }

  applyToRect(rect, value) {
    return Object.assign(Object.assign({}, rect), {
      right: value
    });
  }

}();
Offsets.MARGIN_BOTTOM = new class {
  constructor() {
    this.rawValue = 'marginBottom';
  }

  applyToRect(rect, value) {
    return Object.assign(Object.assign({}, rect), {
      bottom: value
    });
  }

}();
class PopoverPlacements {
  static parse(value, fallback) {
    return PopoverPlacements.typeOf(value) ? value : PopoverPlacements.parseString(value, fallback);
  }

  static parseString(rawValue, fallback) {
    switch (rawValue) {
      case PopoverPlacements.LEFT.rawValue:
        return PopoverPlacements.LEFT;

      case PopoverPlacements.TOP.rawValue:
        return PopoverPlacements.TOP;

      case PopoverPlacements.RIGHT.rawValue:
        return PopoverPlacements.RIGHT;

      case PopoverPlacements.BOTTOM.rawValue:
        return PopoverPlacements.BOTTOM;

      case PopoverPlacements.LEFT_START.rawValue:
        return PopoverPlacements.LEFT_START;

      case PopoverPlacements.LEFT_END.rawValue:
        return PopoverPlacements.LEFT_END;

      case PopoverPlacements.TOP_START.rawValue:
        return PopoverPlacements.TOP_START;

      case PopoverPlacements.TOP_END.rawValue:
        return PopoverPlacements.TOP_END;

      case PopoverPlacements.RIGHT_START.rawValue:
        return PopoverPlacements.RIGHT_START;

      case PopoverPlacements.RIGHT_END.rawValue:
        return PopoverPlacements.RIGHT_END;

      case PopoverPlacements.BOTTOM_START.rawValue:
        return PopoverPlacements.BOTTOM_START;

      case PopoverPlacements.BOTTOM_END.rawValue:
        return PopoverPlacements.BOTTOM_END;

      default:
        return fallback;
    }
  }

  static typeOf(value) {
    const {
      rawValue
    } = value;
    return rawValue !== undefined;
  }

}
PopoverPlacements.LEFT = new class {
  constructor() {
    this.rawValue = 'left';
  }

  frame(options) {
    const {
      origin,
      size
    } = options.source.leftOf(options.other).centerVerticalOf(options.other);
    const x = I18nLayoutService.select(origin.x + options.offsets.left, options.bounds.size.width - size.width - (origin.x + options.offsets.right));
    return new Frame(x, origin.y, size.width, size.height);
  }

  flex() {
    return {
      direction: 'row',
      alignment: 'center'
    };
  }

  parent() {
    return this;
  }

  reverse() {
    return PopoverPlacements.RIGHT;
  }

  family() {
    return [PopoverPlacements.LEFT, PopoverPlacements.LEFT_START, PopoverPlacements.LEFT_END];
  }

  fits(frame, other) {
    return fitsStart(frame, other) && fitsTop(frame, other) && fitsBottom(frame, other);
  }

}();
PopoverPlacements.LEFT_START = new class {
  constructor() {
    this.rawValue = 'left start';
  }

  frame(options) {
    const {
      origin,
      size
    } = this.parent().frame(options);
    return new Frame(origin.x, origin.y - (options.other.size.height - size.height) / 2 + options.offsets.top, size.width, size.height);
  }

  flex() {
    return {
      direction: 'row',
      alignment: 'flex-start'
    };
  }

  parent() {
    return PopoverPlacements.LEFT;
  }

  reverse() {
    return PopoverPlacements.RIGHT_START;
  }

  family() {
    return this.parent().family();
  }

  fits(frame, other) {
    return this.parent().fits(frame, other);
  }

}();
PopoverPlacements.LEFT_END = new class {
  constructor() {
    this.rawValue = 'left end';
  }

  frame(options) {
    const {
      origin,
      size
    } = this.parent().frame(options);
    return new Frame(origin.x, origin.y + (options.other.size.height - size.height) / 2 - options.offsets.bottom, size.width, size.height);
  }

  flex() {
    return {
      direction: 'row',
      alignment: 'flex-end'
    };
  }

  parent() {
    return PopoverPlacements.LEFT;
  }

  reverse() {
    return PopoverPlacements.RIGHT_END;
  }

  family() {
    return this.parent().family();
  }

  fits(frame, other) {
    return this.parent().fits(frame, other);
  }

}();
PopoverPlacements.TOP = new class {
  constructor() {
    this.rawValue = 'top';
  }

  frame(options) {
    const {
      origin,
      size
    } = options.source.topOf(options.other).centerHorizontalOf(options.other);
    const x = I18nLayoutService.select(origin.x, options.bounds.size.width - (origin.x + size.width));
    return new Frame(x, origin.y + options.offsets.top, size.width, size.height);
  }

  flex() {
    return {
      direction: 'column',
      alignment: 'center'
    };
  }

  parent() {
    return this;
  }

  reverse() {
    return PopoverPlacements.BOTTOM;
  }

  family() {
    return [PopoverPlacements.TOP, PopoverPlacements.TOP_START, PopoverPlacements.TOP_END];
  }

  fits(frame, other) {
    return fitsTop(frame, other) && fitsLeft(frame, other) && fitsRight(frame, other);
  }

}();
PopoverPlacements.TOP_START = new class {
  constructor() {
    this.rawValue = 'top start';
  }

  frame(options) {
    const {
      origin,
      size
    } = this.parent().frame(options);
    return new Frame(origin.x - (options.other.size.width - size.width) / 2 + options.offsets.left, origin.y, size.width, size.height);
  }

  flex() {
    return {
      direction: 'column',
      alignment: 'flex-start'
    };
  }

  parent() {
    return PopoverPlacements.TOP;
  }

  reverse() {
    return PopoverPlacements.BOTTOM_START;
  }

  family() {
    return this.parent().family();
  }

  fits(frame, other) {
    return this.parent().fits(frame, other);
  }

}();
PopoverPlacements.TOP_END = new class {
  constructor() {
    this.rawValue = 'top end';
  }

  frame(options) {
    const {
      origin,
      size
    } = this.parent().frame(options);
    return new Frame(origin.x + (options.other.size.width - size.width) / 2 - options.offsets.right, origin.y, size.width, size.height);
  }

  flex() {
    return {
      direction: 'column',
      alignment: 'flex-end'
    };
  }

  parent() {
    return PopoverPlacements.TOP;
  }

  reverse() {
    return PopoverPlacements.BOTTOM_END;
  }

  family() {
    return this.parent().family();
  }

  fits(frame, other) {
    return this.parent().fits(frame, other);
  }

}();
PopoverPlacements.RIGHT = new class {
  constructor() {
    this.rawValue = 'right';
  }

  frame(options) {
    const {
      origin,
      size
    } = options.source.rightOf(options.other).centerVerticalOf(options.other);
    const x = I18nLayoutService.select(origin.x - options.offsets.right, options.bounds.size.width - size.width - (origin.x - options.offsets.right));
    return new Frame(x, origin.y, size.width, size.height);
  }

  flex() {
    return {
      direction: 'row-reverse',
      alignment: 'center'
    };
  }

  parent() {
    return this;
  }

  reverse() {
    return PopoverPlacements.LEFT;
  }

  family() {
    return [PopoverPlacements.RIGHT, PopoverPlacements.RIGHT_START, PopoverPlacements.RIGHT_END];
  }

  fits(frame, other) {
    return fitsEnd(frame, other) && fitsTop(frame, other) && fitsBottom(frame, other);
  }

}();
PopoverPlacements.RIGHT_START = new class {
  constructor() {
    this.rawValue = 'right start';
  }

  frame(options) {
    const {
      origin,
      size
    } = this.parent().frame(options);
    return new Frame(origin.x, origin.y - (options.other.size.height - size.height) / 2 + options.offsets.top, size.width, size.height);
  }

  flex() {
    return {
      direction: 'row-reverse',
      alignment: 'flex-start'
    };
  }

  parent() {
    return PopoverPlacements.RIGHT;
  }

  reverse() {
    return PopoverPlacements.LEFT_START;
  }

  family() {
    return this.parent().family();
  }

  fits(frame, other) {
    return this.parent().fits(frame, other);
  }

}();
PopoverPlacements.RIGHT_END = new class {
  constructor() {
    this.rawValue = 'right end';
  }

  frame(options) {
    const {
      origin,
      size
    } = this.parent().frame(options);
    return new Frame(origin.x, origin.y + (options.other.size.height - size.height) / 2 - options.offsets.bottom, size.width, size.height);
  }

  flex() {
    return {
      direction: 'row-reverse',
      alignment: 'flex-end'
    };
  }

  parent() {
    return PopoverPlacements.RIGHT;
  }

  reverse() {
    return PopoverPlacements.LEFT_END;
  }

  family() {
    return this.parent().family();
  }

  fits(frame, other) {
    return this.parent().fits(frame, other);
  }

}();
PopoverPlacements.BOTTOM = new class {
  constructor() {
    this.rawValue = 'bottom';
  }

  frame(options) {
    const {
      origin,
      size
    } = options.source.bottomOf(options.other).centerHorizontalOf(options.other);
    const x = I18nLayoutService.select(origin.x, options.bounds.size.width - (origin.x + size.width));
    return new Frame(x, origin.y - options.offsets.bottom, size.width, size.height);
  }

  flex() {
    return {
      direction: 'column-reverse',
      alignment: 'center'
    };
  }

  parent() {
    return this;
  }

  reverse() {
    return PopoverPlacements.TOP;
  }

  family() {
    return [PopoverPlacements.BOTTOM, PopoverPlacements.BOTTOM_START, PopoverPlacements.BOTTOM_END];
  }

  fits(frame, other) {
    return fitsBottom(frame, other) && fitsLeft(frame, other) && fitsRight(frame, other);
  }

}();
PopoverPlacements.BOTTOM_START = new class {
  constructor() {
    this.rawValue = 'bottom start';
  }

  frame(options) {
    const {
      origin,
      size
    } = this.parent().frame(options);
    return new Frame(origin.x - (options.other.size.width - size.width) / 2 + options.offsets.left, origin.y, size.width, size.height);
  }

  flex() {
    return {
      direction: 'column-reverse',
      alignment: 'flex-start'
    };
  }

  parent() {
    return PopoverPlacements.BOTTOM;
  }

  reverse() {
    return PopoverPlacements.TOP_START;
  }

  family() {
    return this.parent().family();
  }

  fits(frame, other) {
    return this.parent().fits(frame, other);
  }

}();
PopoverPlacements.BOTTOM_END = new class {
  constructor() {
    this.rawValue = 'bottom end';
  }

  frame(options) {
    const {
      origin,
      size
    } = this.parent().frame(options);
    return new Frame(origin.x + (options.other.size.width - size.width) / 2 - options.offsets.right, origin.y, size.width, size.height);
  }

  flex() {
    return {
      direction: 'column-reverse',
      alignment: 'flex-end'
    };
  }

  parent() {
    return PopoverPlacements.BOTTOM;
  }

  reverse() {
    return PopoverPlacements.TOP_END;
  }

  family() {
    return this.parent().family();
  }

  fits(frame, other) {
    return this.parent().fits(frame, other);
  }

}();

const fitsStart = (frame, other) => {
  return I18nLayoutService.select(fitsLeft, fitsRight)(frame, other);
};

const fitsEnd = (frame, other) => {
  return I18nLayoutService.select(fitsRight, fitsLeft)(frame, other);
};

const fitsLeft = (frame, other) => {
  return frame.origin.x >= other.origin.x;
};

const fitsRight = (frame, other) => {
  return frame.origin.x + frame.size.width <= other.size.width;
};

const fitsTop = (frame, other) => {
  return frame.origin.y >= other.origin.y;
};

const fitsBottom = (frame, other) => {
  return frame.origin.y + frame.size.height <= other.size.height;
};

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$n = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const PLACEMENT_DEFAULT = PopoverPlacements.TOP;
class PopoverView extends React.Component {
  constructor() {
    super(...arguments);

    this.getComponentStyle = (source, placement) => {
      const derivedIndicatorStyle = reactNative.StyleSheet.flatten(this.props.indicatorStyle);
      const {
        direction,
        alignment
      } = placement.flex();
      const isVertical = direction.startsWith('column');
      const isStart = alignment.endsWith('start');
      const isEnd = alignment.endsWith('end');
      const isReverse = direction.endsWith('reverse'); // Rotate indicator by 90 deg if we have `row` direction (left/right placement)
      // Rotate it again by 180 if we have `row-reverse` (bottom/right placement)

      const indicatorPrimaryRotate = isVertical ? 180 : 90;
      const indicatorSecondaryRotate = isReverse ? 0 : 180; // Translate container by half of `indicatorWidth`. Exactly half (because it has a square shape)
      // Reverse if needed
      // @ts-ignore: indicatorWidth type is always number

      let containerTranslate = isVertical ? 0 : derivedIndicatorStyle.width / 2;
      containerTranslate = isReverse ? containerTranslate : -containerTranslate; // Translate indicator by passed `indicatorOffset`
      // Reverse if needed

      let indicatorTranslate = isVertical ? -this.props.indicatorOffset : this.props.indicatorOffset;
      indicatorTranslate = isReverse ? -indicatorTranslate : indicatorTranslate;
      const i18nVerticalIndicatorTranslate = I18nLayoutService.select(indicatorTranslate, -indicatorTranslate);
      indicatorTranslate = isVertical ? i18nVerticalIndicatorTranslate : indicatorTranslate;
      const containerStyle = I18nLayoutService.toI18nStyle({
        flexDirection: direction,
        transform: [{
          translateX: containerTranslate
        }]
      });
      const contentStyle = {
        backgroundColor: 'black',
        transform: [{
          translateX: containerTranslate
        }]
      };
      const indicatorStyle = Object.assign(Object.assign({
        transform: [{
          rotate: `${indicatorPrimaryRotate}deg`
        }, {
          rotate: `${indicatorSecondaryRotate}deg`
        }, // Translate indicator "to start" if we have `-start` alignment
        // Or translate it "to end" if we have `-end` alignment
        {
          translateX: isStart ? -indicatorTranslate : 0
        }, {
          translateX: isEnd ? indicatorTranslate : 0
        }]
      }, derivedIndicatorStyle), styles$h.indicator);
      return {
        container: Object.assign(Object.assign({}, containerStyle), {
          alignItems: alignment
        }),
        content: contentStyle,
        indicator: indicatorStyle
      };
    };
  }

  render() {
    const _a = this.props,
          {
      style,
      indicatorStyle,
      placement: rawPlacement,
      children
    } = _a,
          derivedProps = __rest$n(_a, ["style", "indicatorStyle", "placement", "children"]);

    const placement = PopoverPlacements.parse(rawPlacement, PLACEMENT_DEFAULT);
    const {
      container,
      indicator,
      content
    } = this.getComponentStyle(style, placement);
    return React.createElement(reactNative.View, _extends$m({}, derivedProps, {
      style: [container, styles$h.container]
    }), React.createElement(Arrow, {
      style: [indicator, styles$h.indicator, indicatorStyle]
    }), React.createElement(reactNative.View, {
      style: [content, styles$h.content, style]
    }, children));
  }

}
PopoverView.defaultProps = {
  placement: PLACEMENT_DEFAULT.rawValue,
  indicatorOffset: 8
};
const styles$h = reactNative.StyleSheet.create({
  container: {
    alignSelf: 'flex-start'
  },
  content: {
    justifyContent: 'center'
  },
  indicator: {}
});

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Measures child element size and it's screen position asynchronously.
 * Returns measure result in `onResult` callback.
 *
 * Usage:
 *
 * const onMeasure = (element: ElementToMeasure): void => {
 *   const { x, y, width, height } = element.props.frame;
 *   ...
 * };
 *
 * <MeasureElement onResult={this.onMeasure}>
 *   <ElementToMeasure tag='@measure/measure-me!'/>
 * </MeasureElement>
 */

const MeasureElement = props => {
  const ref = React.createRef();
  const {
    children,
    onResult
  } = props;

  const bindToWindow = (frame, window) => {
    if (frame.origin.x < window.width) {
      return frame;
    }

    const boundFrame = new Frame(frame.origin.x - window.width, frame.origin.y, frame.size.width, frame.size.height);
    return bindToWindow(boundFrame, window);
  };

  const measureSelf = () => {
    const node = reactNative.findNodeHandle(ref.current);
    reactNative.UIManager.measureInWindow(node, (x, y, w, h) => {
      const window = reactNative.Dimensions.get('window');
      const frame = bindToWindow(new Frame(x, y, w, h), window);
      const measuredElement = React.cloneElement(children, {
        frame
      });
      onResult(measuredElement);
    });
  };

  return React.cloneElement(children, {
    ref,
    onLayout: measureSelf
  });
};
/**
 * Measures passed child elements size and it's screen position asynchronously.
 * Returns measure result in `onResult` callback.
 *
 * Does the same as `MeasureElement` but calls `onResult` after all children are measured.
 *
 * Usage:
 *
 * const onMeasure = (result: MeasureResult): void => {
 *   const { [0]: firstElementFrame, [1]: secondElementFrame } = result;
 *   const { x, y, width, height } = firstElementFrame;
 *   ...
 * };
 *
 * <MeasureNode onResult={this.onMeasure}>
 *   <ElementToMeasure tag={0}/>
 *   <ElementToMeasure tag={1}/>
 * </MeasureNode>
 */

const MeasureNode = props => {
  const result = {};
  const {
    children,
    onResult
  } = props;

  const onChildMeasure = element => {
    const {
      tag,
      frame
    } = element.props;
    result[tag] = frame;

    if (Object.keys(result).length === React.Children.count(children)) {
      onResult(result);
    }
  };

  const renderMeasuringElement = (element, index) => {
    return React.createElement(MeasureElement, {
      key: index,
      onResult: onChildMeasure
    }, element);
  };

  const renderChildren = () => {
    return React.Children.map(children, renderMeasuringElement);
  };

  return React.createElement(React.Fragment, null, renderChildren());
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const PLACEMENT_FAMILIES = [PopoverPlacements.BOTTOM.rawValue, PopoverPlacements.TOP.rawValue, PopoverPlacements.LEFT.rawValue, PopoverPlacements.RIGHT.rawValue];
class PopoverPlacementService {
  find(preferredValue, options) {
    const placement = this.findRecursive(preferredValue, PLACEMENT_FAMILIES, options);
    return placement || preferredValue;
  }

  findRecursive(placement, families, options) {
    const oneOfCurrentFamily = this.findFromFamily(placement, options);

    if (oneOfCurrentFamily) {
      return oneOfCurrentFamily;
    }

    const oneOfReversedFamily = this.findFromFamily(placement.reverse(), options);

    if (oneOfReversedFamily) {
      return oneOfReversedFamily;
    }

    delete families[families.indexOf(placement.parent().rawValue)];
    delete families[families.indexOf(placement.reverse().parent().rawValue)];
    const firstTruthy = families.filter(Boolean)[0];

    if (firstTruthy) {
      const nextPlacement = PopoverPlacements.parse(firstTruthy);
      return this.findRecursive(nextPlacement, families, options);
    }

    return null;
  }

  findFromFamily(placement, options) {
    const preferredFrame = placement.frame(options);

    if (placement.fits(preferredFrame, options.bounds)) {
      return placement;
    }

    return placement.family().find(familyValue => {
      const familyFrame = familyValue.frame(options);
      return familyValue.fits(familyFrame, options.bounds);
    });
  }

}

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$o = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const WINDOW = reactNative.Dimensions.get('window');
const WINDOW_BOUNDS = new Frame(0, 0, WINDOW.width, WINDOW.height);
const TAG_CHILD = 0;
const TAG_CONTENT = 1;
const PLACEMENT_DEFAULT$1 = PopoverPlacements.BOTTOM;
/**
 * Displays content in a `Modal` when users focus on or tap an element. Also supports automatic placement.
 *
 * @extends React.Component
 *
 * @property {React.ReactElement<any>} content - Determines the content of the popover.
 *
 * @property {React.ReactElement<any>} children - Determines the element "above" which popover will be shown.
 *
 * @property {boolean} visible - Determines whether popover is visible or not.
 *
 * @property {string | PopoverPlacement} placement - Determines the placement of the popover.
 * Can be `left`, `top`, `right`, `bottom`, `left start`, `left end`, `top start`, `top end`, `right start`,
 * `right end`, `bottom start` or `bottom end`.
 * Default is `bottom`.
 *
 * @property {number} indicatorOffset - Determines the offset of indicator (arrow).
 * @property {StyleProp<ViewStyle>} indicatorStyle - Determines style of indicator (arrow).
 *
 * @property ViewProps
 *
 * @property ModalPresentingBased
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Popover, Layout, Button, Text } from '../..';
 *
 * export class PopoverShowcase extends React.Component {
 *
 *   state = {
 *     popoverVisible: false,
 *   };
 *
 *   togglePopover = () => {
 *     const popoverVisible = !this.state.popoverVisible;
 *     this.setState({ popoverVisible });
 *   };
 *
 *   renderPopoverContentElement = () => (
 *     <Layout style={styles.popoverContent}>
 *       <Text>Hi! This is popover.</Text>
 *     </Layout>
 *   );
 *
 *   render() {
 *     return (
 *       <Popover
 *         visible={this.state.popoverVisible}
 *         content={this.renderPopoverContentElement()}
 *         onBackdropPress={this.togglePopover}>
 *         <Button onPress={this.togglePopover}>TOGGLE POPOVER</Button>
 *       </Popover>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   popoverContent: { justifyContent: 'center', alignItems: 'center' },
 * });
 * ```
 */

class PopoverComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.placementService = new PopoverPlacementService();

    this.handleVisibility = prevProps => {
      if (prevProps.visible !== this.props.visible) {
        if (this.props.visible) {
          // Toggles re-measuring. This is needed for dynamic containers like ScrollView
          this.setState({
            layout: undefined
          });
        } else {
          this.popoverId = ModalService.hide(this.popoverId);
        }
      } else if (prevProps.visible && this.props.visible) {
        this.updatePopoverElement();
      }
    };

    this.updatePopoverElement = () => {
      const element = this.renderPopoverElement(this.props.content, this.popoverPlacement);
      const popoverElement = React.cloneElement(element, {
        style: [element.props.style, styles$i.popoverVisible]
      });
      this.popoverId && ModalService.update(this.popoverId, popoverElement);
    };

    this.getComponentStyle = source => {
      const {
        indicatorWidth,
        indicatorHeight,
        indicatorBackgroundColor
      } = source,
            containerParameters = __rest$o(source, ["indicatorWidth", "indicatorHeight", "indicatorBackgroundColor"]);

      return {
        container: containerParameters,
        indicator: {
          width: indicatorWidth,
          height: indicatorHeight,
          backgroundColor: indicatorBackgroundColor
        }
      };
    };

    this.onMeasure = layout => {
      if (this.props.visible) {
        const placementOptions = this.createPlacementOptions(layout);
        const popoverPlacement = this.placementService.find(this.popoverPlacement, placementOptions);
        this.popoverId = this.showPopoverModal(popoverPlacement, placementOptions);
      }
    };

    this.createPlacement = value => {
      return PopoverPlacements.parse(value, PLACEMENT_DEFAULT$1);
    };

    this.createPlacementOptions = layout => {
      const {
        children
      } = this.props;
      return {
        source: layout[TAG_CONTENT],
        other: layout[TAG_CHILD],
        bounds: WINDOW_BOUNDS,
        offsets: Offsets.find(children.props.style)
      };
    };

    this.showPopoverModal = (placement, options) => {
      const popoverFrame = placement.frame(options);
      const popoverElement = this.renderPopoverElement(this.props.content, placement);
      const positionStyle = {
        left: popoverFrame.origin.x,
        top: popoverFrame.origin.y
      };
      const positionedPopoverElement = React.cloneElement(popoverElement, {
        style: [styles$i.popoverVisible, positionStyle]
      });
      return ModalService.show(positionedPopoverElement, {
        allowBackdrop: this.props.allowBackdrop,
        onBackdropPress: this.props.onBackdropPress
      });
    };

    this.renderPopoverElement = (children, placement) => {
      const _a = this.props,
            {
        style: derivedStyle,
        themedStyle,
        indicatorStyle
      } = _a,
            derivedProps = __rest$o(_a, ["style", "themedStyle", "indicatorStyle"]);

      const {
        container,
        indicator
      } = this.getComponentStyle(themedStyle);
      const measuringProps = {
        tag: TAG_CONTENT
      };
      return React.createElement(reactNative.View, _extends$n({}, measuringProps, {
        key: TAG_CONTENT,
        style: [styles$i.popover, styles$i.popoverInvisible]
      }), React.createElement(PopoverView, _extends$n({}, derivedProps, {
        style: [container, derivedStyle],
        indicatorStyle: [indicator, styles$i.indicator, indicatorStyle],
        placement: placement.reverse().rawValue
      }), children));
    };

    this.renderChildElement = source => {
      const measuringProps = {
        tag: TAG_CHILD
      };
      return React.createElement(reactNative.View, _extends$n({}, measuringProps, {
        key: TAG_CHILD,
        style: styles$i.child
      }), source);
    };

    this.renderMeasuringElement = (...children) => {
      return React.createElement(MeasureNode, {
        onResult: this.onMeasure
      }, children);
    };
  }

  componentDidUpdate(prevProps) {
    this.handleVisibility(prevProps);
  }

  render() {
    if (this.props.visible) {
      this.popoverPlacement = this.createPlacement(this.props.placement);
      const popoverElement = this.renderPopoverElement(this.props.content, this.popoverPlacement);
      const childElement = this.renderChildElement(this.props.children);
      return this.renderMeasuringElement(childElement, popoverElement);
    }

    return this.props.children;
  }

}
PopoverComponent.styledComponentName = 'Popover';
PopoverComponent.defaultProps = {
  placement: PLACEMENT_DEFAULT$1.rawValue,
  visible: false,
  allowBackdrop: true,
  onBackdropPress: () => null
};
const styles$i = reactNative.StyleSheet.create({
  popover: {
    position: 'absolute'
  },
  popoverInvisible: {
    opacity: 0
  },
  popoverVisible: {
    opacity: 1
  },
  indicator: {},
  child: {}
});
const Popover = styled(PopoverComponent);

var __rest$p = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const FULL_DATE_FORMAT_STRING = 'DD/MM/YYYY';
class BaseDatepickerComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };

    this.getComponentStyles = style => {
      const {
        popoverMarginHorizontal,
        textFontSize,
        textLineHeight,
        textFontWeight,
        textFontFamily,
        textColor,
        iconWidth,
        iconHeight,
        iconTintColor
      } = style,
            containerStyles = __rest$p(style, ["popoverMarginHorizontal", "textFontSize", "textLineHeight", "textFontWeight", "textFontFamily", "textColor", "iconWidth", "iconHeight", "iconTintColor"]);

      return {
        container: containerStyles,
        icon: {
          width: iconWidth,
          height: iconHeight,
          tintColor: iconTintColor
        },
        text: {
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          fontWeight: textFontWeight,
          color: textColor,
          fontFamily: textFontFamily
        },
        popover: {
          indent: popoverMarginHorizontal
        }
      };
    };

    this.onPressIn = event => {
      this.props.dispatch([exports.Interaction.ACTIVE]);

      if (this.props.onPressIn) {
        this.props.onPressIn(event);
      }
    };

    this.onPressOut = event => {
      this.props.dispatch([]);

      if (this.props.onPressOut) {
        this.props.onPressOut(event);
      }
    };

    this.toggleVisible = () => {
      const visible = !this.state.visible;
      this.setState({
        visible
      }, this.dispatchActive);
    };

    this.dispatchActive = () => {
      const {
        visible
      } = this.state;

      if (visible) {
        this.props.dispatch([exports.Interaction.ACTIVE]);
      } else {
        this.props.dispatch([]);
      }
    };

    this.renderIcon = style => {
      const {
        icon
      } = this.props;
      return icon && icon(style);
    };

    this.renderText = style => {
      return React.createElement(Text, {
        style: style
      }, this.getComponentTitle());
    };

    this.renderControl = () => {
      const {
        themedStyle,
        disabled,
        style
      } = this.props;
      const {
        container,
        icon,
        text
      } = this.getComponentStyles(themedStyle);
      return React.createElement(reactNative.TouchableOpacity, {
        activeOpacity: 1.0,
        disabled: disabled,
        style: [container, styles$j.container, style],
        onPress: this.toggleVisible,
        onPressIn: this.onPressIn,
        onPressOut: this.onPressOut
      }, this.renderText(text), this.renderIcon(icon));
    };
  }

  formatDateToString(date) {
    return this.props.dateService.format(date, FULL_DATE_FORMAT_STRING);
  }

  render() {
    const {
      themedStyle
    } = this.props;
    const {
      popover
    } = this.getComponentStyles(themedStyle);
    const popoverStyle = {
      width: reactNative.Dimensions.get('window').width - popover.indent,
      maxWidth: reactNative.Dimensions.get('window').width - popover.indent
    };
    return React.createElement(Popover, {
      style: popoverStyle,
      visible: this.state.visible,
      content: this.renderCalendar(),
      onBackdropPress: this.toggleVisible
    }, this.renderControl());
  }

}
BaseDatepickerComponent.defaultProps = {
  dateService: new NativeDateService()
};
const styles$j = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

/**
 * Styled `Datepicker` component.
 * Renders `Calendar` component in the `Popover`.
 * Supports locales and different date objects like Moment.js or date-fns.
 * Composes date picker components in a horizontal pageable list.
 *
 * @extends React.Component
 *
 * @property {(style: ImageStyle) => React.ReactElement<ImageProps>} icon - Determines the icon of the component.
 *
 * @property {D} min - Minimal date that is able to be selected.
 *
 * @property {D} max - Maximum date that is able to be selected.
 *
 * @property {D} date - Date which is currently selected.
 *
 * @property {DateService<D>} dateService - Date service that is able to work with a date objects.
 * Defaults to Native Date service that works with JS Date.
 * Allows using different types of date like Moment.js or date-fns.
 *
 * @property {boolean} boundingMonth - Defines if we should render previous and next months in the current month view.
 *
 * @property {CalendarViewMode} startView - Defines starting view for calendar. Defaults to Date view.
 *
 * @property {(date: D) => string} title - Defines the title for visible date.
 *
 * @property {(date: D) => string} todayTitle - Defines the title for today's date.
 *
 * @property {(date: D) => ReactElement<any>} filter - Predicate that decides which cells will be disabled.
 *
 * @property {(date: D) => void} onSelect - Selection emitter. Fires when another day cell is pressed.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderDay - Should return the content of day cell.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderMonth - Should return the content of month cell.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderYear - Should return the content of year cell.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Basic Usage
 *
 * ```
 * import React from 'react';
 * import { Datepicker } from '../..';
 *
 * export class BasicDatepicker extends React.Component {
 *
 *   state = {
 *     date: new Date(),
 *   };
 *
 *   onSelect = (date) => {
 *     this.setState({ date });
 *   };
 *
 *   render() {
 *     return (
 *       <Datepicker
 *         date={this.state.date}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Custom Day Cell
 *
 * ```
 * import React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Datepicker, Text } from '../..';
 *
 * export const DayCell = ({ date }, style) => (
 *   <View
 *     style={[styles.container, style.container]}>
 *     <Text style={style.text}>{`${date.getDate()}`}</Text>
 *     <Text style={[style.text, styles.value]}>
 *       {`${100 * date.getDate() + Math.pow(date.getDate(), 2)}$`}
 *     </Text>
 *   </View>
 * );
 *
 * const styles = StyleSheet.create({
 *   container: { flex: 1, justifyContent: 'center', alignItems: 'center', aspectRatio: 1 },
 *   value: { fontSize: 12, fontWeight: '400' },
 * });
 *
 * export class DailyValueDatepicker extends React.Component {
 *
 *   state = {
 *     date: new Date(),
 *   };
 *
 *   onSelect = (date) => {
 *     this.setState({ date });
 *   };
 *
 *   render() {
 *     return (
 *       <Datepicker
 *         date={this.state.date}
 *         onSelect={this.onSelect}
 *         renderDay={DayCell}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Custom Locale
 *
 * ```
 * import React from 'react';
 * import { Datepicker, NativeDateService } from '../..';
 *
 * const i18n = {
 *   dayNames: {
 *     short: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
 *     long: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
 *   },
 *   monthNames: {
 *     short: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
 *     long: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
 *   },
 * };
 *
 * export class ChineseDatepicker extends React.Component {
 *
 *   dateService = new NativeDateService('zh', i18n);
 *
 *   state = {
 *     date: new Date(),
 *   };
 *
 *   onSelect = (date) => {
 *     this.setState({ date });
 *   };
 *
 *   render() {
 *     return (
 *       <Datepicker
 *         date={this.state.date}
 *         dateService={this.dateService}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Working with Moment
 *
 * ```
 * // IMPORTANT: To use Moment make sure to install Moment Date Service
 * // npm i @ui-kitten/moment
 *
 * import React from 'react';
 * import moment from 'moment';
 * import { Datepicker } from '../..';
 * import { MomentDateService } from '../../../moment';
 *
 * export class MomentDatepicker extends React.Component {
 *
 *   state = {
 *     date: moment();
 *   };
 *
 *   dateService = new MomentDateService();
 *
 *   onSelect = (date) => {
 *     this.setState({ date });
 *   }
 *
 *   render() {
 *     return (
 *       <Datepicker
 *         date={this.state.date}
 *         dateService={this.dateService}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 */

class DatepickerComponent extends BaseDatepickerComponent {
  getComponentTitle() {
    const {
      date
    } = this.props;

    if (date) {
      return this.formatDateToString(date);
    } else {
      return 'dd/mm/yyyy';
    }
  }

  renderCalendar() {
    return React.createElement(Calendar, this.props);
  }

}
DatepickerComponent.styledComponentName = 'Datepicker';
const Datepicker = styled(DatepickerComponent);

/**
 * Styled `RangeDatepicker` component.
 * Renders `RangeCalendar` component in the `Popover`.
 * Supports locales and different date objects like Moment.js or date-fns.
 * Composes date picker components in a horizontal pageable list.
 *
 * @extends React.Component
 *
 * @property {(style: ImageStyle) => React.ReactElement<ImageProps>} icon - Determines the icon of the component.
 *
 * @property {D} min - Minimal date that is able to be selected.
 *
 * @property {D} max - Maximum date that is able to be selected.
 *
 * @property {D} date - Date which is currently selected.
 *
 * @property {DateService<D>} dateService - Date service that is able to work with a date objects.
 * Defaults to Native Date service that works with JS Date.
 * Allows using different types of date like Moment.js or date-fns.
 *
 * @property {boolean} boundingMonth - Defines if we should render previous and next months in the current month view.
 *
 * @property {CalendarViewMode} startView - Defines starting view for calendar. Defaults to Date view.
 *
 * @property {(date: D) => string} title - Defines the title for visible date.
 *
 * @property {(date: D) => string} todayTitle - Defines the title for today's date.
 *
 * @property {(date: D) => ReactElement<any>} filter - Predicate that decides which cells will be disabled.
 *
 * @property {(date: D) => void} onSelect - Selection emitter. Fires when another day cell is pressed.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderDay - Should return the content of day cell.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderMonth - Should return the content of month cell.
 *
 * @property {(date: D, style: StyleType) => ReactElement<any>} renderYear - Should return the content of year cell.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Basic Usage
 *
 * ```
 * import React from 'react';
 * import { RangeDatepicker } from '../..';
 *
 * export class BasicDatepicker extends React.Component {
 *
 *   state = {
 *     range: {
 *       startDate: null,
 *       endDate: null,
 *     },
 *   };
 *
 *   onSelect = (range) => {
 *     this.setState({ range });
 *   };
 *
 *   render() {
 *     return (
 *       <RangeDatepicker
 *         range={this.state.range}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 */

class RangeDatepickerComponent extends BaseDatepickerComponent {
  getComponentTitle() {
    const {
      range
    } = this.props;
    const {
      startDate,
      endDate
    } = range;

    if (startDate || endDate) {
      const start = startDate ? this.formatDateToString(startDate) : '';
      const end = endDate ? this.formatDateToString(endDate) : '';
      return `${start} - ${end}`;
    } else {
      return 'dd/mm/yyyy';
    }
  }

  renderCalendar() {
    return React.createElement(RangeCalendar, this.props);
  }

}
RangeDatepickerComponent.styledComponentName = 'Datepicker';
const RangeDatepicker = styled(RangeDatepickerComponent);

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$q = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `List` component is a performant interface for rendering simple, flat lists. Extends `FlatList`. Renders list of
 * `ListItem` components or custom content.
 *
 * @extends React.Component
 *
 * @property {(info: ListRenderItemInfo<ItemT>, style: StyleType) => React.ReactElement<any>} renderItem - Takes an
 * item from data and renders it into the list.
 *
 * @property FlatListProps<ItemType>
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { List, ListItem } from '../..';
 *
 * export const ListShowcase = (props) => {
 *
 *   const data = ['Item 1', 'Item 2', 'Item 3'];
 *
 *   const onItemPress = (index) => {
 *     // Handle item press
 *   };
 *
 *   const renderItem = ({ item, index }) => (
 *     <ListItem
 *       title={item}
 *       description='Description'
 *       onPress={onItemPress}
 *     />
 *   );
 *
 *   return (
 *     <List
 *       data={data}
 *       renderItem={renderItem}
 *     />
 *   );
 * };
 * ```
 *
 * @overview-example Custom List Item
 *
 * ```
 * import React from 'react';
 * import { List, ListItem, Text } from '../..';
 *
 * export const ListShowcase = (props) => {
 *
 *   const data = ['Item 1', 'Item 2', 'Item 3'];
 *
 *   const renderItem = ({ item, index }) => (
 *     <ListItem>
 *       <Text>{item}</Text>
 *     </ListItem>
 *   );
 *
 *   return (
 *     <List
 *       data={data}
 *       renderItem={renderItem}
 *     />
 *   );
 * };
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from '../..';
 * import { List, ListItem } from '../..';
 *
 * export const ListShowcase = (props) => {
 *
 *   const data = ['Item 1', 'Item 2', 'Item 3'];
 *
 *   const onItemPress = (index) => {
 *     // Handle item press
 *   };
 *
 *   const renderItem = ({ item, index }) => (
 *     <ListItem
 *       title={item}
 *       description='Description'
 *       onPress={onItemPress}
 *     />
 *   );
 *
 *   return (
 *     <List
 *       contentContainerStyle={styles.contentContainer}
 *       data={data}
 *       renderItem={renderItem}
 *     />
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   contentContainer: { paddingHorizontal: 8 },
 * });
 * ```
 */

class ListComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.listRef = React.createRef();

    this.scrollToEnd = params => {
      this.listRef.current.scrollToEnd(params);
    };

    this.scrollToIndex = params => {
      this.listRef.current.scrollToIndex(params);
    };

    this.getComponentStyle = source => {
      return {
        container: source,
        item: {}
      };
    };

    this.getItemStyle = (source, index) => {
      const {
        item
      } = source;
      return item;
    };

    this.keyExtractor = (item, index) => {
      return index.toString();
    };

    this.renderItem = info => {
      const itemStyle = this.getItemStyle(this.props.themedStyle, info.index);
      const itemElement = this.props.renderItem(info, itemStyle);
      return React.cloneElement(itemElement, {
        style: [itemStyle, styles$k.item, itemElement.props.style],
        index: info.index
      });
    };
  }

  scrollToOffset(params) {
    this.listRef.current.scrollToOffset(params);
  }

  render() {
    const _a = this.props,
          {
      style,
      themedStyle
    } = _a,
          derivedProps = __rest$q(_a, ["style", "themedStyle"]);

    const componentStyle = this.getComponentStyle(themedStyle);
    return React.createElement(reactNative.FlatList, _extends$o({}, derivedProps, {
      ref: this.listRef,
      style: [componentStyle.container, styles$k.container, style],
      keyExtractor: this.keyExtractor,
      renderItem: this.renderItem
    }));
  }

}
ListComponent.styledComponentName = 'List';
const styles$k = reactNative.StyleSheet.create({
  container: {},
  item: {}
});
const List = styled(ListComponent);

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$r = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `MenuItem` is a support component for `Menu`.
 *
 * @extends React.Component
 *
 * @property {string} title - Determines the title of the ListItem.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes title style.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} accessory - Determines the accessory of the
 * component.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} icon - Determines the icon of the component.
 *
 * @property {MenuItemType[]} subItems - Determines the sub-items of the MenuItem.
 *
 * @property {(index: number, event: GestureResponderEvent) => void} onPress - Emits when component is pressed.
 *
 * @property StyledComponentProps
 *
 * @property TouchableTypeReturningProps<MenuItemType>
 * */

class MenuItemComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = event => {
      const {
        onPress,
        menuIndex
      } = this.props;

      if (onPress) {
        onPress(menuIndex, event);
      }
    };

    this.onPressIn = event => {
      const {
        onPressIn,
        menuIndex,
        dispatch
      } = this.props;
      dispatch([exports.Interaction.ACTIVE]);

      if (onPressIn) {
        onPressIn(menuIndex, event);
      }
    };

    this.onPressOut = event => {
      const {
        onPressOut,
        menuIndex,
        dispatch
      } = this.props;
      dispatch([]);

      if (onPressOut) {
        onPressOut(menuIndex, event);
      }
    };

    this.onLongPress = event => {
      const {
        onLongPress,
        menuIndex
      } = this.props;

      if (onLongPress) {
        onLongPress(menuIndex, event);
      }
    };

    this.getComponentStyles = style => {
      const {
        paddingHorizontal,
        paddingVertical,
        backgroundColor
      } = style;
      const titleStyles = allWithPrefix(style, 'title');
      const indicatorStyles = allWithPrefix(style, 'indicator');
      const iconStyles = allWithPrefix(style, 'icon');
      const accessoryStyle = allWithPrefix(style, 'accessory');
      return {
        container: {
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          backgroundColor: backgroundColor
        },
        title: {
          marginHorizontal: titleStyles.titleMarginHorizontal,
          fontFamily: titleStyles.titleFontFamily,
          fontSize: titleStyles.titleFontSize,
          fontWeight: titleStyles.titleFontWeight,
          lineHeight: titleStyles.titleLineHeight,
          color: titleStyles.titleColor
        },
        indicator: {
          width: indicatorStyles.indicatorWidth,
          backgroundColor: indicatorStyles.indicatorBackgroundColor
        },
        icon: {
          width: iconStyles.iconWidth,
          height: iconStyles.iconHeight,
          marginHorizontal: iconStyles.iconMarginHorizontal,
          tintColor: iconStyles.iconTintColor
        }
      };
    };

    this.renderIcon = style => {
      const {
        icon
      } = this.props;
      return icon(style);
    };

    this.renderTitle = style => {
      const {
        title,
        titleStyle
      } = this.props;
      return React.createElement(Text, {
        style: [style, titleStyle]
      }, title);
    };

    this.renderAccessory = style => {
      const {
        accessory
      } = this.props;
      return accessory(style);
    };

    this.renderComponentChildren = style => {
      const {
        title,
        icon,
        accessory
      } = this.props;
      return [icon && this.renderIcon(style.icon), title && this.renderTitle(style.title), accessory && this.renderAccessory(style.icon)];
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style
    } = _a,
          restProps = __rest$r(_a, ["themedStyle", "style"]);

    const _b = this.getComponentStyles(themedStyle),
          {
      container,
      indicator
    } = _b,
          restStyles = __rest$r(_b, ["container", "indicator"]);

    const [iconElement, textElement, accessoryElement] = this.renderComponentChildren(restStyles);
    return React.createElement(reactNative.TouchableOpacity, _extends$p({
      activeOpacity: 1.0
    }, restProps, {
      style: [styles$l.container, container, style],
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut,
      onLongPress: this.onLongPress
    }), React.createElement(reactNative.View, {
      style: [styles$l.indicator, indicator]
    }), React.createElement(reactNative.View, {
      style: styles$l.subContainer
    }, iconElement, textElement), accessoryElement);
  }

}

MenuItemComponent.styledComponentName = 'MenuItem';
const styles$l = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  indicator: Object.assign(Object.assign({}, reactNative.StyleSheet.absoluteFillObject), {
    zIndex: 2
  })
});
const MenuItem = styled(MenuItemComponent);

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }
const MAIN_ITEM_KEY = 'Main Item';
const DIVIDER_ELEMENT_KEY = 'Divider';
const SUB_ITEMS_MEASURE_TAG = 'Sub Items';

class SubMenuComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      subItemsVisible: false,
      subItemsHeight: 0
    };
    this.subItemsAnimation = new reactNative.Animated.Value(0);
    this.iconAnimation = new reactNative.Animated.Value(-180);

    this.subItemsExpandAnimate = toValue => {
      reactNative.Animated.spring(this.subItemsAnimation, {
        toValue: toValue
      }).start();
    };

    this.animateIcon = toValue => {
      reactNative.Animated.timing(this.iconAnimation, {
        toValue: toValue,
        duration: 200
      }).start();
    };

    this.onMainItemPress = () => {
      const subItemsVisible = !this.state.subItemsVisible;
      this.setState({
        subItemsVisible
      });
    };

    this.onSubItemPress = (index, event) => {
      if (this.props.onSelect) {
        this.props.onSelect(index, event);
      }
    };

    this.getComponentStyles = style => {
      return {
        subContainer: {
          paddingHorizontal: style.subItemsPaddingHorizontal
        }
      };
    };

    this.onSubMenuMeasure = result => {
      const subItemsHeight = result[SUB_ITEMS_MEASURE_TAG].size.height;
      this.setState({
        subItemsHeight
      });
    };

    this.getIsSelected = item => {
      const {
        selectedIndex
      } = this.props;
      return selectedIndex === item.menuIndex;
    };

    this.isMainItemDividerExist = () => {
      const {
        divider
      } = this.props;
      const {
        subItemsVisible
      } = this.state;
      return subItemsVisible && divider !== null;
    };

    this.isSubItemDividerExist = (item, index) => {
      const {
        divider
      } = this.props;
      return index !== item.subItems.length - 1 && divider !== null;
    };

    this.renderDivider = () => {
      const {
        divider
      } = this.props;
      return divider && React.cloneElement(divider, {
        key: DIVIDER_ELEMENT_KEY
      });
    };

    this.renderMainItemAccessory = style => {
      const rotateInterpolate = this.iconAnimation.interpolate({
        inputRange: [-180, 0],
        outputRange: ['-180deg', '0deg']
      });
      const animatedStyle = {
        transform: [{
          rotate: rotateInterpolate
        }]
      };
      return React.createElement(Chevron, {
        style: [style, animatedStyle],
        isAnimated: true
      });
    };

    this.renderMenuItem = (item, isMainItem, index) => {
      const onPressHandler = isMainItem ? this.onMainItemPress : this.onSubItemPress;
      const mainMenuItemAccessory = isMainItem ? this.renderMainItemAccessory : null;
      return React.createElement(MenuItem, _extends$q({}, item, {
        key: index,
        accessory: mainMenuItemAccessory,
        onPress: onPressHandler
      }));
    };

    this.renderSubItemsInvisible = subItems => {
      const measuringProps = {
        tag: SUB_ITEMS_MEASURE_TAG
      };
      return React.createElement(MeasureNode, {
        onResult: this.onSubMenuMeasure
      }, [React.createElement(reactNative.View, _extends$q({}, measuringProps, {
        pointerEvents: "none",
        key: SUB_ITEMS_MEASURE_TAG,
        style: styles$m.invisibleMenu
      }), subItems)]);
    };

    this.renderSubItems = () => {
      const {
        item,
        themedStyle,
        divider
      } = this.props;
      return item.subItems.map((sub, index) => {
        const {
          subContainer
        } = this.getComponentStyles(themedStyle);
        const isSelected = this.getIsSelected(sub);
        const element = React.cloneElement(this.renderMenuItem(sub, false, index), {
          style: subContainer,
          selected: isSelected
        });
        const dividerElement = this.isSubItemDividerExist(item, index) ? this.renderDivider() : null;
        return React.createElement(React.Fragment, {
          key: index
        }, element, dividerElement);
      });
    };

    this.renderComponentChildren = () => {
      const {
        item
      } = this.props;
      return [this.renderMenuItem(item, true, MAIN_ITEM_KEY), this.renderSubItems(), this.isMainItemDividerExist() ? this.renderDivider() : null];
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.subItemsVisible !== this.state.subItemsVisible) {
      if (this.state.subItemsVisible) {
        this.subItemsExpandAnimate(this.state.subItemsHeight);
        this.animateIcon(0);
      } else {
        this.subItemsExpandAnimate(0);
        this.animateIcon(-180);
      }
    }
  }

  render() {
    const {
      subItemsVisible
    } = this.state;
    const [mainItem, subItems, divider] = this.renderComponentChildren();
    const invisibleSubs = this.renderSubItemsInvisible(subItems);
    const animatedStyle = {
      height: this.subItemsAnimation
    };
    return React.createElement(React.Fragment, null, mainItem, divider, React.createElement(reactNative.Animated.View, {
      style: animatedStyle
    }, subItemsVisible && subItems), invisibleSubs);
  }

}

SubMenuComponent.styledComponentName = 'SubMenu';
const styles$m = reactNative.StyleSheet.create({
  invisibleMenu: {
    opacity: 0,
    position: 'absolute'
  }
});
const SubMenu = styled(SubMenuComponent);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Support service for the menu component. Can be expanded.
 */
class MenuService {
  /**
   * Makes custom indexes for the MenuItems array for proper handling group items.
   *
   * @param {ReadonlyArray<MenuItemType>} data
   * @returns {MenuItemType[]} pack by name
   */
  setIndexes(data) {
    let tempIndex = 0;
    return data.map(item => {
      if (!item.subItems || item.subItems.length === 0) {
        item.menuIndex = tempIndex;
        tempIndex = tempIndex + 1;
      } else {
        item.subItems = item.subItems.map(sub => {
          sub.menuIndex = tempIndex;
          tempIndex = tempIndex + 1;
          return sub;
        });
      }

      return item;
    });
  }

}

function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$s = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `Menu` renders vertical list of `MenuItems`.
 *
 * @extends React.Component
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `default` or `noDivider`.
 * Default is `default`.
 *
 * @property {MenuItemType[]} data - Determines menu items.
 *
 * @property {number} selectedIndex - The index of selected item.
 *
 * @property {(index: number, event?: GestureResponderEvent) => void} onSelect - Fires when
 * selected item is changed.
 *
 * @property Omit<ListProps, 'renderItem'>
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Menu } from '../..';
 *
 * export class MenuShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: null,
 *   };
 *
 *   data = [
 *     { title: 'Item 1' },
 *     { title: 'Item 2' },
 *     { title: 'Item 3' },
 *   ];
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <Menu
 *         data={this.data}
 *         selectedItem={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Sub Menus
 *
 * ```
 * import React from 'react';
 * import { Menu } from '../..';
 *
 * export class MenuShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: null,
 *   };
 *
 *   data = [
 *     { title: 'Item 1' },
 *     {
 *       title: 'Item 2',
 *       subItems: [
 *         { title: 'Item 21' },
 *         { title: 'Item 22' },
 *         { title: 'Item 23' },
 *       ],
 *     },
 *     { title: 'Item 3' },
 *   ];
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <Menu
 *         data={this.data}
 *         selectedItem={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With Icons
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { Menu, Icon } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Icon {...style} name='star' />
 * );
 *
 * export class MenuShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: null,
 *   };
 *
 *   data = [
 *     { title: 'Item 1', icon: StarIcon },
 *     { title: 'Item 2', icon: StarIcon },
 *     { title: 'Item 3', icon: StarIcon },
 *   ];
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <Menu
 *         data={this.data}
 *         selectedItem={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Menu } from '../..';
 *
 * export class MenuShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: null,
 *   };
 *
 *   data = [
 *     { title: 'Item 1' },
 *     { title: 'Item 2' },
 *     { title: 'Item 3' },
 *   ];
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <Menu
 *         appearance='noDivider'
 *         data={this.data}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Disabled Item
 *
 * ```
 * import React from 'react';
 * import { Menu } from '../..';
 *
 * export class MenuShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: null,
 *   };
 *
 *   data = [
 *     { title: 'Item 1', disabled: true },
 *     { title: 'Item 2' },
 *     { title: 'Item 3' },
 *   ];
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <Menu
 *         data={this.data}
 *         selectedItem={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { Menu } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export class MenuShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: null,
 *   };
 *
 *   data = [
 *     { title: 'Item 1', icon: StarIcon },
 *     { title: 'Item 2', icon: StarIcon },
 *     { title: 'Item 3', icon: StarIcon },
 *   ];
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <Menu
 *         data={this.data}
 *         selectedItem={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Menu } from '../..';
 *
 * export class MenuShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: null,
 *   };
 *
 *   data = [
 *     { title: 'Item 1', titleStyle: styles.menuItemTitle },
 *     { title: 'Item 2', titleStyle: styles.menuItemTitle },
 *     { title: 'Item 3', titleStyle: styles.menuItemTitle },
 *   ];
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <Menu
 *         data={this.data}
 *         selectedItem={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *       />
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   menuItemTitle: { color: 'black', fontSize: 18 },
 * });
 * ```
 */

class MenuComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.service = new MenuService();

    this.onSelect = (selectedIndex, event) => {
      const {
        onSelect
      } = this.props;

      if (onSelect) {
        onSelect(selectedIndex, event);
      }
    };

    this.isDividerAbsent = () => {
      const {
        appearance
      } = this.props;
      return appearance !== 'noDivider';
    };

    this.areThereSubItems = item => {
      return item.subItems && item.subItems.length !== 0;
    };

    this.getIsSelected = item => {
      const {
        selectedIndex
      } = this.props;
      return selectedIndex === item.menuIndex;
    };

    this.renderMenuItem = info => {
      const {
        selectedIndex
      } = this.props;
      const isSelected = this.getIsSelected(info.item);
      return this.areThereSubItems(info.item) ? React.createElement(SubMenu, {
        item: info.item,
        selectedIndex: selectedIndex,
        divider: this.renderDivider(),
        onSelect: this.onSelect
      }) : React.createElement(MenuItem, _extends$r({}, info.item, {
        selected: isSelected,
        onPress: this.onSelect
      }));
    };

    this.renderDivider = () => {
      return this.isDividerAbsent() && React.createElement(Divider, null);
    };
  }

  render() {
    const _a = this.props,
          {
      appearance,
      data
    } = _a,
          restProps = __rest$s(_a, ["appearance", "data"]);

    const items = this.service.setIndexes(data);
    return React.createElement(List, _extends$r({
      ItemSeparatorComponent: this.renderDivider,
      renderItem: this.renderMenuItem,
      data: items
    }, restProps));
  }

}

MenuComponent.styledComponentName = 'Menu';
const Menu = styled(MenuComponent);

function _extends$s() { _extends$s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

var __rest$t = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Styled `Navigation Drawer` component. The principle of rendering a `Drawer` is the same as a rendering a List.
 *
 * @extends React.Component
 *
 * @property {MenuItemType[]} data - Determines the items displayed in drawer menu.
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `default` or `noDivider`.
 * Default is `default`.
 *
 * @property {() => DrawerHeaderElement} header - Determines the function to render a header. Optional.
 *
 * @property {() => DrawerFooterElement} footer - Determines the function to render a footer. Optional.
 *
 * @property {(index: number, event: GestureResponderEvent) => void} onSelect - Determines the function to handle
 * menu item press.
 *
 * @property ListProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Drawer } from '../..';
 *
 * const data = [
 *   { title: 'Dashboard' },
 *   { title: 'Messages' },
 *   { title: 'Settings' },
 * ];
 *
 * export const DrawerShowcase = (props) => (
 *   <Drawer data={data}/>
 * );
 * ```
 *
 * @overview-example Using with React Navigation
 *
 * ```
 * import React from 'react';
 * import { SafeAreaView } from 'react-navigation';
 * import { createDrawerNavigator } from 'react-navigation-drawer';
 * import { Dashboard, Messages, Settings } from './path-to/screen-components'; // <-- Import screen components
 *
 * class DrawerNavigation extends React.Component {
 *
 *   constructor(props) {
 *     super(props);
 *     this.drawerData = props.items.map(this.createDrawerItem);
 *   }
 *
 *   onRouteSelect = (index) => {
 *     const { [index]: route } = this.drawerData;
 *     this.props.navigation.navigate(route.title);
 *   };
 *
 *   createDrawerItem = ({ routeName }) => ({
 *     title: routeName,
 *   });
 *
 *   render() {
 *     return (
 *       <SafeAreaView>
 *         <Drawer data={this.drawerData} onSelect={this.onRouteSelect}/>
 *       </SafeAreaView>
 *     );
 *   }
 * }
 *
 * export const DrawerNavigator = createDrawerNavigator({
 *   Dashboard: Dashboard,
 *   Messages: Messages,
 *   Settings: Settings,
 * }, {
 *   contentComponent: DrawerNavigation,
 * });
 * ```
 *
 * @overview-example With Icons
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { Drawer, Icon } from '../..';
 *
 * const data = [
 *   { title: 'Dashboard', icon: DashboardIcon },
 *   { title: 'Messages', icon: MessagesIcon },
 *   { title: 'Settings', icon: SettingsIcon },
 * ];
 *
 * const DashboardIcon = (style) => (
 *   <Icon {...style} name='layout'/>
 * );
 *
 * const MessagesIcon = (style) => (
 *   <Icon {...style} name='email'/>
 * );
 *
 * const SettingsIcon = (style) => (
 *   <Icon {...style} name='settings'/>
 * );
 *
 * export const DrawerShowcase = (props) => (
 *   <Drawer data={data} />
 * );
 * ```
 *
 * @overview-example Header
 *
 * ```
 * import React from 'react'
 * import { Drawer, DrawerHeaderFooter } from '../..';
 *
 * export const ProfileHeader = (props) => (
 *   <DrawerHeaderFooter title='John Doe' description='React Native Developer' />
 * );
 *
 * export const DrawerShowcase = (props) => (
 *   <Drawer data={data} header={ProfileHeader} />
 * );
 * ```
 *
 * @overview-example Footer
 *
 * ```
 * import React from 'react';
 * import { Drawer, DrawerHeaderFooter } from '../..';
 *
 * const data = [
 *   { title: 'Dashboard' },
 *   { title: 'Messages' },
 *   { title: 'Settings' },
 * ];
 *
 * const DrawerFooter = () => (
 *   <DrawerHeaderFooter description='Awesome Application Version 4.2.0-beta.1' />
 * );
 *
 * export const DrawerShowcase = (props) => (
 *   <Drawer data={data} footer={DrawerFooter} />
 * );
 * ```
 *
 * @example Custom Header
 *
 * ```
 * import React from 'react';
 * import { View } from 'react-native';
 * import { Drawer, Text } from '../..';
 *
 * const data = [
 *   { title: 'Dashboard' },
 *   { title: 'Messages' },
 *   { title: 'Settings' },
 * ];
 *
 * const DrawerHeader = () => (
 *   <View>
 *     <Text category='h6'>Awesome Application</Text>
 *   </View>
 * );
 *
 * export const DrawerShowcase = (props) => (
 *   <Drawer data={data} header={DrawerHeader} />
 * );
 * ```
 *
 * @example Notification Badge Item
 *
 * ```
 * import React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Drawer, Text } from '../..';
 *
 * const data = [
 *   { title: 'Dashboard' },
 *   { title: 'Messages', accessory: NotificationBadge },
 *   { title: 'Settings' },
 * ];
 *
 * const NotificationBadge = (style) => (
 *   <View style={[style, styles.badge]}>
 *     <Text>NEW</Text>
 *   </View>
 * );
 *
 * export const DrawerShowcase = (props) => (
 *   <Drawer data={data} />
 * );
 *
 * const styles = StyleSheet.create({
 *   badge: {
 *     justifyContent: 'center',
 *     alignItems: 'center',
 *     height: 24,
 *     width: 48,
 *     paddingHorizontal: 24,
 *     borderRadius: 12,
 *     backgroundColor: 'orange',
 *   },
 * });
 * ```
 */

class DrawerComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.renderHeader = () => {
      const {
        header
      } = this.props;
      return header();
    };

    this.renderFooter = () => {
      const {
        footer
      } = this.props;
      return footer();
    };

    this.renderMenu = () => {
      const _a = this.props,
            {
        style,
        header,
        footer,
        themedStyle
      } = _a,
            restProps = __rest$t(_a, ["style", "header", "footer", "themedStyle"]);

      return React.createElement(Menu, _extends$s({
        style: themedStyle,
        showsVerticalScrollIndicator: false,
        bounces: false
      }, restProps));
    };

    this.renderComponentChildren = () => {
      const {
        header,
        footer
      } = this.props;
      return [header && this.renderHeader(), this.renderMenu(), footer && this.renderFooter()];
    };
  }

  render() {
    const [header, menu, footer] = this.renderComponentChildren();
    return React.createElement(React.Fragment, null, header, menu, footer);
  }

}

DrawerComponent.styledComponentName = 'Drawer';
const Drawer = styled(DrawerComponent);

function _extends$t() { _extends$t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$u = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `ListItem` is a support component for `List`.
 * The key feature of wrapping custom list items into `ListItem` component is that it automatically
 * picks background color fitting to current theme and responds to touches with feedback.
 *
 * @extends React.Component
 *
 * @property {string} title - Determines the title of the ListItem.
 *
 * @property {string} description - Determines the description of the ListItem's title.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes title style.
 *
 * @property {StyleProp<TextStyle>} descriptionStyle - Customizes description style.
 *
 * @property {React.ReactNode} children - Determines React Children of the component.
 *
 * @property {(style: StyleType, index: number) => React.ReactElement<any>} accessory - Determines the accessory of the
 * component.
 *
 * @property {(style: StyleType, index: number) => React.ReactElement<ImageProps>} icon - Determines the icon of the
 * component.
 *
 * @property {(index: number, event: GestureResponderEvent) => React.ReactElement<ImageProps>} onPress - Emits when
 * component is pressed.
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react'
 * import { ListItem } from '../..';
 *
 * export const ListItemShowcase = (props) => (
 *   <ListItem title='Title' description='Description' />
 * );
 * ```
 *
 * @overview-example With Icon
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react'
 * import { ListItem, Icon } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Icon {...style} name='star' />
 * );
 *
 * export const ListItemShowcase = (props) => (
 *   <ListItem title='Title' description='Description' icon={StarIcon} />
 * );
 * ```
 *
 * @example With Accessory
 *
 * ```
 * import React from 'react'
 * import { ListItem, Button } from '../..';
 *
 * export const ListItemShowcase = (props) => {
 *
 *   const Accessory = (style) => (
 *     <Button style={style}>BUTTON</Button>
 *   );
 *
 *   return (
 *     <ListItem title='Title' description='Description' accessory={Accessory} />
 *   );
 * };
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { ListItem } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export const ListItemShowcase = (props) => (
 *   <ListItem title='Title' description='Description' icon={StarIcon} />
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react'
 * import { StyleSheet } from '../..';
 * import { ListItem } from '../..';
 *
 * export const ListItemShowcase = (props) => (
 *   <ListItem
 *     style={styles.listItem}
 *     titleStyle={styles.listItemTitle}
 *     descriptionStyle={styles.listItemDescription}
 *     title='Title'
 *     description='Description'
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   listItem: { borderRadius: 8 },
 *   listItemTitle: { color: 'black' },
 *   listItemDescription: { color: 'gray' },
 * });
 * ```
 */

class ListItemComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = event => {
      if (this.props.onPress) {
        this.props.onPress(this.props.index, event);
      }
    };

    this.onPressIn = event => {
      this.props.dispatch([exports.Interaction.ACTIVE]);

      if (this.props.onPressIn) {
        this.props.onPressIn(this.props.index, event);
      }
    };

    this.onPressOut = event => {
      this.props.dispatch([]);

      if (this.props.onPressOut) {
        this.props.onPressOut(this.props.index, event);
      }
    };

    this.onLongPress = event => {
      if (this.props.onLongPress) {
        this.props.onLongPress(this.props.index, event);
      }
    };

    this.getComponentStyle = source => {
      const {
        iconWidth,
        iconHeight,
        iconMarginHorizontal,
        iconTintColor,
        titleMarginHorizontal,
        titleFontFamily,
        titleFontSize,
        titleLineHeight,
        titleFontWeight,
        titleColor,
        descriptionFontFamily,
        descriptionFontSize,
        descriptionFontWeight,
        descriptionLineHeight,
        descriptionColor,
        descriptionMarginHorizontal,
        accessoryMarginHorizontal
      } = source,
            containerParameters = __rest$u(source, ["iconWidth", "iconHeight", "iconMarginHorizontal", "iconTintColor", "titleMarginHorizontal", "titleFontFamily", "titleFontSize", "titleLineHeight", "titleFontWeight", "titleColor", "descriptionFontFamily", "descriptionFontSize", "descriptionFontWeight", "descriptionLineHeight", "descriptionColor", "descriptionMarginHorizontal", "accessoryMarginHorizontal"]);

      return {
        container: containerParameters,
        contentContainer: {},
        icon: {
          width: iconWidth,
          height: iconHeight,
          marginHorizontal: iconMarginHorizontal,
          tintColor: iconTintColor
        },
        title: {
          marginHorizontal: titleMarginHorizontal,
          fontFamily: titleFontFamily,
          fontSize: titleFontSize,
          lineHeight: titleLineHeight,
          fontWeight: titleFontWeight,
          color: titleColor
        },
        description: {
          color: descriptionColor,
          fontFamily: descriptionFontFamily,
          fontSize: descriptionFontSize,
          fontWeight: descriptionFontWeight,
          lineHeight: descriptionLineHeight,
          marginHorizontal: descriptionMarginHorizontal
        },
        accessory: {
          marginHorizontal: accessoryMarginHorizontal
        }
      };
    };

    this.renderIconElement = style => {
      // @ts-ignore: will be not executed if `icon` prop is provided
      const {
        index,
        icon
      } = this.props;
      const iconElement = icon(style, index);
      return React.cloneElement(iconElement, {
        key: 0,
        style: [style, styles$n.icon, iconElement.props.style]
      });
    };

    this.renderContentElement = style => {
      const {
        contentContainer
      } = style,
            contentStyles = __rest$u(style, ["contentContainer"]);

      const [titleElement, descriptionElement] = this.renderContentElementChildren(contentStyles);
      return React.createElement(reactNative.View, {
        key: 1,
        style: [contentContainer, styles$n.contentContainer]
      }, titleElement, descriptionElement);
    };

    this.renderTitleElement = style => {
      // @ts-ignore: will be not executed if `title` property is provided
      const {
        title,
        titleStyle
      } = this.props;
      return React.createElement(Text, {
        key: 2,
        style: [style, styles$n.title, titleStyle]
      }, title);
    };

    this.renderDescriptionElement = style => {
      // @ts-ignore: will be not executed if `description` property is provided
      const {
        description,
        descriptionStyle
      } = this.props;
      return React.createElement(Text, {
        key: 3,
        style: [style, styles$n.description, descriptionStyle]
      }, description);
    };

    this.renderAccessoryElement = style => {
      // @ts-ignore: will be not executed if `accessory` property is provided
      const {
        index,
        accessory
      } = this.props;
      const accessoryElement = accessory(style, index);
      return React.cloneElement(accessoryElement, {
        key: 4,
        style: [style, styles$n.accessory, accessoryElement.props.style]
      });
    };

    this.renderContentElementChildren = style => {
      // @ts-ignore: will be not executed if any of properties below is provided
      const {
        title,
        description
      } = this.props;
      return [isValidString(title) && this.renderTitleElement(style.title), isValidString(description) && this.renderDescriptionElement(style.description)];
    };

    this.renderTemplateChildren = style => {
      // @ts-ignore: following props could not be provided
      const {
        icon,
        title,
        description,
        accessory
      } = this.props;
      return [icon && this.renderIconElement(style.icon), (title || description) && this.renderContentElement(style), accessory && this.renderAccessoryElement(style.accessory)];
    };

    this.renderComponentChildren = style => {
      const {
        children
      } = this.props;
      return children ? children : this.renderTemplateChildren(style);
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style
    } = _a,
          derivedProps = __rest$u(_a, ["themedStyle", "style"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container
    } = _b,
          componentStyles = __rest$u(_b, ["container"]);

    const componentChildren = this.renderComponentChildren(componentStyles);
    return React.createElement(reactNative.TouchableOpacity, _extends$t({
      activeOpacity: 1.0
    }, derivedProps, {
      style: [container, styles$n.container, style],
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut,
      onLongPress: this.onLongPress
    }), componentChildren);
  }

}
ListItemComponent.styledComponentName = 'ListItem';
const styles$n = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 1
  },
  icon: {},
  title: {
    textAlign: 'left'
  },
  description: {
    textAlign: 'left'
  },
  accessory: {}
});
const ListItem = styled(ListItemComponent);

/**
 * `DrawerHeaderFooter` is a support component for `Drawer`.
 * Designed to be used as Header or Footer of `Drawer`.
 *
 * @extends React.Component
 *
 * @property {string} title - Determines the title of the DrawerHeaderFooter.
 *
 * @property {string} description - Determines the description of the DrawerHeaderFooter's title.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes title style.
 *
 * @property {StyleProp<TextStyle>} descriptionStyle - Customizes description style.
 *
 * @property {React.ReactNode} children - Determines React Children of the component.
 *
 * @property {(style: StyleType, index: number) => React.ReactElement<any>} accessory - Determines the accessory of the
 * component.
 *
 * @property {(style: StyleType, index: number) => React.ReactElement<ImageProps>} icon - Determines the icon of the
 * component.
 *
 * @property {(index: number, event: GestureResponderEvent) => React.ReactElement<ImageProps>} onPress - Emits when
 * component is pressed.
 *
 * @overview-example Simple Usage
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react'
 * import { DrawerHeaderFooter, Icon } from '../..';
 *
 * const ProfileIcon = (style) => (
 *   <Icon {...style} name='person' />
 * );
 *
 * export const ProfileHeader = (props) => (
 *   <DrawerHeaderFooter title='John Doe' description='React Native Developer' icon={ProfileIcon} />
 * );
 * ```
 *
 * @overview-example With Accessory
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react'
 * import { DrawerHeaderFooter, Icon } from '../..';
 *
 * const LogoutIcon = (style) => (
 *   <Icon {...style} name='log-out' />
 * );
 *
 * const LogoutButton = (style): React.ReactElement<ButtonProps> => (
 *   <Button style={style} icon={LogoutIcon} />
 * );
 *
 * export const ProfileHeader = (props) => (
 *   <DrawerHeaderFooter
 *     title='John Doe'
 *     description='React Native Developer'
 *     accessory={LogoutButton}
 *   />
 * );
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react'
 * import { Image } from '../..';
 * import { DrawerHeaderFooter } from '../..';
 *
 * const ProfileIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export const ProfileHeader = (props) => (
 *   <DrawerHeaderFooter title='John Doe' description='React Native Developer' icon={ProfileIcon} />
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react'
 * import { StyleSheet } from 'react-native';
 * import { DrawerHeaderFooter } from '../..';
 *
 * export const ProfileHeader = (props) => (
 *   <DrawerHeaderFooter
 *     style={styles.drawerHeader}
 *     titleStyle={styles.drawerHeaderTitle}
 *     descriptionStyle={styles.drawerHeaderDescription}
 *     title='John Doe'
 *     description='React Native Developer'
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   drawerHeader: { backgroundColor: 'black' }
 *   drawerHeaderTitle: { color: 'white' }
 *   drawerHeaderDescription: { color: 'gray' }
 * });
 * ```
 */

class DrawerHeaderFooter extends React.Component {
  render() {
    return React.createElement(ListItem, this.props);
  }

}

function _extends$u() { _extends$u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$v = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

class SelectOptionComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = event => {
      const {
        item,
        onPress
      } = this.props;
      this.props.dispatch([]);
      onPress(item, event);
    };

    this.onMultiSelectItemPress = value => {
      this.onPress(null);
    };

    this.onPressIn = event => {
      this.props.dispatch([exports.Interaction.ACTIVE]);

      if (this.props.onPressIn) {
        this.props.onPressIn(this.props.item, event);
      }
    };

    this.onPressOut = event => {
      this.props.dispatch([]);

      if (this.props.onPressOut) {
        this.props.onPressOut(this.props.item, event);
      }
    };

    this.onLongPress = event => {
      if (this.props.onLongPress) {
        this.props.onLongPress(this.props.item, event);
      }
    };

    this.getComponentStyle = source => {
      const {
        textColor,
        textFontFamily,
        textFontSize,
        textFontWeight,
        textLineHeight,
        textMarginHorizontal,
        multiSelectBackgroundColor,
        multiSelectTextColor
      } = source,
            containerStyles = __rest$v(source, ["textColor", "textFontFamily", "textFontSize", "textFontWeight", "textLineHeight", "textMarginHorizontal", "multiSelectBackgroundColor", "multiSelectTextColor"]);

      return {
        container: containerStyles,
        multiSelectContainer: Object.assign(Object.assign({}, containerStyles), {
          backgroundColor: multiSelectBackgroundColor
        }),
        text: {
          color: textColor,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          fontWeight: textFontWeight,
          lineHeight: textLineHeight,
          marginHorizontal: textMarginHorizontal
        },
        multiSelectText: {
          color: multiSelectTextColor,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          fontWeight: textFontWeight,
          lineHeight: textLineHeight,
          marginHorizontal: textMarginHorizontal
        }
      };
    };

    this.renderTextElement = style => {
      const {
        item
      } = this.props;
      return React.createElement(Text, {
        style: [style, styles$o.text, item.textStyle]
      }, item.text);
    };

    this.renderDefaultItem = () => {
      const _a = this.props,
            {
        themedStyle,
        style,
        item
      } = _a,
            restProps = __rest$v(_a, ["themedStyle", "style", "item"]);

      const {
        container,
        text
      } = this.getComponentStyle(themedStyle);
      const textElement = this.renderTextElement(text);
      return React.createElement(reactNative.TouchableOpacity, _extends$u({}, restProps, {
        activeOpacity: 1.0,
        style: [styles$o.container, container, style],
        onPress: this.onPress,
        onPressIn: this.onPressIn,
        onPressOut: this.onPressOut,
        onLongPress: this.onLongPress
      }), textElement);
    };

    this.renderMultiSelectItem = () => {
      const _a = this.props,
            {
        disabled,
        item,
        themedStyle,
        selected,
        style,
        indeterminate
      } = _a,
            restProps = __rest$v(_a, ["disabled", "item", "themedStyle", "selected", "style", "indeterminate"]);

      const {
        multiSelectContainer,
        multiSelectText
      } = this.getComponentStyle(themedStyle);
      return React.createElement(reactNative.View, _extends$u({}, restProps, {
        style: [styles$o.container, multiSelectContainer, style]
      }), React.createElement(CheckBox, {
        text: item.text,
        textStyle: [multiSelectText, item.textStyle],
        disabled: disabled,
        checked: selected,
        indeterminate: indeterminate,
        onChange: this.onMultiSelectItemPress
      }));
    };
  }

  render() {
    const {
      multiSelect
    } = this.props;
    return multiSelect ? this.renderMultiSelectItem() : this.renderDefaultItem();
  }

}

SelectOptionComponent.styledComponentName = 'SelectOption';
const styles$o = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {},
  text: {}
});
const SelectOption = styled(SelectOptionComponent);

function _extends$v() { _extends$v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$w = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

class SelectGroupOptionComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.getComponentStyle = source => {
      const {
        itemPaddingHorizontal
      } = source,
            containerStyles = __rest$w(source, ["itemPaddingHorizontal"]);

      return {
        container: containerStyles,
        item: {
          paddingHorizontal: itemPaddingHorizontal
        }
      };
    };

    this.getMainItemStatus = subItemsSelectedStatusArray => {
      const someSelected = subItemsSelectedStatusArray.some(item => item === true);
      const everySelected = subItemsSelectedStatusArray.every(item => item === true);

      switch (true) {
        case someSelected && !everySelected:
          return {
            selected: true,
            indeterminate: true
          };

        case !someSelected:
          return {
            selected: false,
            indeterminate: false
          };

        case everySelected:
          return {
            selected: true,
            indeterminate: false
          };
      }
    };

    this.renderSubItem = (option, index) => {
      const _a = this.props,
            {
        item,
        renderItem,
        strategy
      } = _a,
            restProps = __rest$w(_a, ["item", "renderItem", "strategy"]);

      const returningOption = {
        item: option,
        index: index,
        separators: null
      };
      const selected = strategy.isSelected(option);
      return renderItem ? renderItem(returningOption) : React.createElement(SelectOption, _extends$v({}, restProps, {
        selected: selected,
        item: option
      }));
    };

    this.renderSubItemsElements = () => {
      const {
        item,
        themedStyle
      } = this.props;
      const {
        item: itemStyle
      } = this.getComponentStyle(themedStyle);
      return item.items.map((option, index) => {
        const element = this.renderSubItem(option, index);
        return React.cloneElement(element, Object.assign(Object.assign({}, option), {
          style: [element.props.style, itemStyle],
          key: index
        }));
      });
    };

    this.renderMultiSelectMainElement = subItemsElements => {
      const _a = this.props,
            {
        item
      } = _a,
            restProps = __rest$w(_a, ["item"]);

      const subItemsSelectedStatusArray = subItemsElements.map(subItem => subItem.props.selected);
      const itemStatus = this.getMainItemStatus(subItemsSelectedStatusArray);
      return React.createElement(SelectOption, _extends$v({}, restProps, itemStatus, {
        item: item
      }));
    };

    this.renderDefaultMainElement = () => {
      const {
        item
      } = this.props;
      return React.createElement(SelectOption, {
        disabled: true,
        item: item
      });
    };

    this.renderMainElement = subItemsElements => {
      const {
        multiSelect
      } = this.props;
      return multiSelect ? this.renderMultiSelectMainElement(subItemsElements) : this.renderDefaultMainElement();
    };
  }

  render() {
    const {
      themedStyle
    } = this.props;
    const {
      container
    } = this.getComponentStyle(themedStyle);
    const subItemsElements = this.renderSubItemsElements();
    const mainElement = this.renderMainElement(subItemsElements);
    return React.createElement(reactNative.View, {
      style: container
    }, mainElement, subItemsElements);
  }

}

SelectGroupOptionComponent.styledComponentName = 'SelectGroupOption';
const SelectGroupOption = styled(SelectGroupOptionComponent);

function _extends$w() { _extends$w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$x = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class SelectOptionsList extends React.Component {
  constructor() {
    super(...arguments);

    this.areThereSubItems = dropdownItem => {
      const {
        items
      } = dropdownItem;
      return items && items.length !== 0;
    };

    this.onSelect = (option, event) => {
      this.props.onSelect(option, event);
    };

    this.renderDefaultItem = info => {
      const {
        renderItem,
        multiSelect,
        strategy
      } = this.props;
      const selected = strategy.isSelected(info.item);
      return this.areThereSubItems(info.item) ? React.createElement(SelectGroupOption, _extends$w({}, info, {
        strategy: strategy,
        multiSelect: multiSelect,
        renderItem: renderItem,
        onPress: this.onSelect
      })) : React.createElement(SelectOption, _extends$w({}, info, {
        disabled: info.item.disabled,
        selected: selected,
        multiSelect: multiSelect,
        onPress: this.onSelect
      }));
    };

    this.renderItem = info => {
      const {
        renderItem
      } = this.props;
      return renderItem ? renderItem(info) : this.renderDefaultItem(info);
    };
  }

  render() {
    const _a = this.props,
          {
      style
    } = _a,
          restProps = __rest$x(_a, ["style"]);

    return React.createElement(List, _extends$w({}, restProps, {
      style: [styles$p.container, style],
      renderItem: this.renderItem
    }));
  }

}
const styles$p = reactNative.StyleSheet.create({
  container: {}
});

class MultiSelectStrategy {
  constructor(options) {
    if (Array.isArray(options)) {
      this.selectedOption = options;
    }
  }

  select(option, callback) {
    const subOptionsExist = this.areThereSubOptions(option);

    if (subOptionsExist) {
      this.selectOptionWithSubOptions(option);
    } else {
      this.selectDefaultOption(option);
    }

    return this.selectedOption;
  }

  selectDefaultOption(option) {
    const optionAlreadyExist = this.selectedOption.some(item => {
      return item === option;
    });

    if (optionAlreadyExist) {
      this.removeOption(option);
    } else {
      this.selectedOption.push(option);
    }
  }

  selectOptionWithSubOptions(option) {
    const subOptionsAlreadyExist = this.selectedOption.some(item => {
      return option.items.some(subItem => {
        return subItem === item;
      });
    });

    if (subOptionsAlreadyExist) {
      option.items.forEach(subItem => this.removeOption(subItem));
    } else {
      const enabledItems = option.items.filter(item => {
        return !item.disabled;
      });
      this.selectedOption = this.selectedOption.concat(enabledItems);
    }
  }

  getPlaceholder(placeholder) {
    if (this.isSelectedOptionExist()) {
      return this.selectedOption.map(item => {
        return item && item.text;
      }).join(', ');
    } else {
      return placeholder;
    }
  }

  isSelected(item) {
    return this.selectedOption.some(option => {
      return option === item;
    });
  }

  isSelectedOptionExist() {
    return this.selectedOption && this.selectedOption.length !== 0;
  }

  removeOption(option) {
    const index = this.selectedOption.findIndex(item => {
      return item === option;
    });

    if (index !== -1) {
      this.selectedOption.splice(index, 1);
    }
  }

  areThereSubOptions(option) {
    return option.items && option.items.length !== 0;
  }

}
class SingleSelectStrategy {
  constructor(options) {
    if (!Array.isArray(options)) {
      this.selectedOption = options;
    }
  }

  select(option, callback) {
    this.selectedOption = option;

    if (callback) {
      callback();
    }

    return this.selectedOption;
  }

  getPlaceholder(placeholder) {
    if (this.selectedOption) {
      return this.selectedOption.text;
    } else {
      return placeholder;
    }
  }

  isSelected(item) {
    if (this.hasOptionSubItems(item)) {
      return item.items.some(option => {
        return this.isSelected(option);
      });
    } else {
      return this.selectedOption === item;
    }
  }

  hasOptionSubItems(option) {
    return option.items && option.items.length !== 0;
  }

}

function _extends$x() { _extends$x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$y = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const MEASURED_CONTROL_TAG = 'Control';
/**
 * Styled `Select` component.
 *
 * @extends React.Component
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning` or `danger`.
 *
 * @property {boolean} multiSelect - Determines `multi-select` behavior of the Select component.
 *
 * @property {SelectOption} selectedOption - Determines selected option of the Select.
 * Can be `SelectOptionType` or `SelectOptionType[]` It depends on `multiSelect` property.
 *
 * @property {SelectOptionType[]} data - Determines items of the Select component.
 *
 * @property {(option: SelectOption, event?: GestureResponderEvent) => void} onSelect - Fires on option selection.
 * Returns selected option/options.
 *
 * @property {(item: ListRenderItemInfo<SelectOptionType>) => React.ReactElement<any>} renderItem - Property for
 * rendering custom select items.
 *
 * @property {StyleProp<TextStyle>} label - Determines the `label` of the component.
 *
 * @property {StyleProp<TextStyle>} placeholder - Determines the `placeholder` of the component.
 * By default is `Select Option`.
 *
 * @property {StyleProp<TextStyle>} labelStyle - Determines the style of the `label`.
 *
 * @property {StyleProp<TextStyle>} placeholderStyle - Determines the style of the `placeholder`.
 *
 * @property {StyleProp<TextStyle>} textStyle - Determines the style of the selected option/options text.
 *
 * @property {StyleProp<ViewStyle>} controlStyle - Determines the style of `control`.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} icon - Determines icon of the component.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes text style.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple usage example
 *
 * ```
 * import React from 'react';
 * import { Select } from '../..';
 *
 * export class SelectContainer extends React.Component {
 *
 *   items = [
 *     { text: 'Option 1' },
 *     { text: 'Option 2' },
 *     { text: 'Option 3' },
 *   ];
 *
 *   state = {
 *     selectedOption: null,
 *   };
 *
 *   onSelect = (selectedOption) => {
 *     this.setState({ selectedOption });
 *   };
 *
 *   render() {
 *     return (
 *       <Select
 *         data={this.items}
 *         selectedOption={this.state.selectedOption}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example MultiSelect
 *
 * ```
 * import React from 'react';
 * import { Select } from '../..';
 *
 * export class SelectContainer extends React.Component {
 *
 *   items = [
 *     { text: 'Option 1' },
 *     { text: 'Option 2' },
 *     { text: 'Option 3' },
 *   ];
 *
 *   state = {
 *     selectedOption: [],
 *   };
 *
 *   onSelect = (selectedOption: SelectOption) => {
 *     this.setState({ selectedOption });
 *   };
 *
 *   render() {
 *     return (
 *       <Select
 *         data={this.items}
 *         multiSelect={true}
 *         selectedOption={this.state.selectedOption}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Select Groups
 *
 * ```
 * import React from 'react';
 * import { Select } from '../..';
 *
 * export class SelectContainer extends React.Component {
 *
 *   items = [
 *     { text: 'Option 1' },
 *     { text: 'Option 2' },
 *     { text: 'Option 3', items: [ { text: 'Option 31' }, { text: 'Option 32' }, { text: 'Option 33' } ] },
 *     { text: 'Option 4' },
 *   ];
 *
 *  state = {
 *    selectedOption: null,
 *  };
 *
 *  onSelect = (selectedOption) => {
 *    this.setState({ selectedOption });
 *  };
 *
 *  render() {
 *    return (
 *       <Select
 *         data={this.items}
 *         selectedOption={this.state.selectedOption}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With Icon
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { Select, Icon } from '../..';
 *
 * export class SelectContainer extends React.Component {
 *
 *  items = [
 *    { text: 'Option 1' },
 *    { text: 'Option 2' },
 *    { text: 'Option 3' },
 *  ];
 *
 *  state = {
 *    selectedOption: null,
 *  };
 *
 *  onSelect = (selectedOption) => {
 *    this.setState({ selectedOption });
 *  };
 *
 *  renderIcon = (style, visible) => {
 *    const iconName = visible ? 'arrow-ios-upward' : 'arrow-ios-downward';
 *    return (
 *      <Icon {...style} name={iconName} />
 *    );
 *  };
 *
 *  render() {
 *    return (
 *      <Select
 *        data={this.items}
 *        selectedOption={this.state.selectedOption}
 *        icon={this.renderIcon}
 *        onSelect={this.onSelect}
 *      />
 *    );
 *   }
 * }
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Select } from '../..';
 *
 * export class SelectContainer extends React.Component {
 *
 *   items = [
 *     { text: 'Option 1' },
 *     { text: 'Option 2' },
 *     { text: 'Option 3' },
 *   ];
 *
 *   state = {
 *     selectedOption: null,
 *   };
 *
 *   onSelect = (selectedOption) => {
 *     this.setState({ selectedOption });
 *   };
 *
 *   render() {
 *     return (
 *       <Select
 *         data={this.items}
 *         status='warning'
 *         selectedOption={this.state.selectedOption}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Disabled Option
 *
 * ```
 * import React from 'react';
 * import { Select } from '../..';
 *
 * export class SelectContainer extends React.Component {
 *
 *  items = [
 *    { text: 'Option 1' },
 *    { text: 'Option 2', disabled: true },
 *    { text: 'Option 3' },
 *    { text: 'Option 4' },
 *  ];
 *
 *  state = {
 *    selectedOption: null,
 *  };
 *
 *  onSelect = (selectedOption) => {
 *    this.setState({ selectedOption });
 *  };
 *
 *  render() {
 *    return (
 *       <Select
 *         style={styles.select}
 *         labelStyle={styles.labelStyle}
 *         placeholderStyle={styles.placeholderStyle}
 *         controlStyle={styles.controlStyle}
 *         data={this.items}
 *         selectedOption={this.state.selectedOption}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { Select } from '../..';
 *
 * export class SelectContainer extends React.Component {
 *
 *  items = [
 *    { text: 'Option 1' },
 *    { text: 'Option 2' },
 *    { text: 'Option 3' },
 *  ];
 *
 *  state = {
 *    selectedOption: null,
 *  };
 *
 *  onSelect = (selectedOption) => {
 *    this.setState({ selectedOption });
 *  };
 *
 *  renderIcon = (style, visible) => (
 *    <Image style={style} source={require('path-to-assets/local-image.png')} />
 *  );
 *
 *  render() {
 *    return (
 *      <Select
 *        data={this.items}
 *        selectedOption={this.state.selectedOption}
 *        icon={this.renderIcon}
 *        onSelect={this.onSelect}
 *      />
 *    );
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Select } from '../..';
 *
 * export class SelectContainer extends React.Component {
 *
 *  private items: SelectOptionType[] = [
 *    { text: 'Option 1' },
 *    { text: 'Option 2', textStyle: { color: 'red', fontSize: 18 } },
 *    { text: 'Option 3' },
 *  ];
 *
 *  state = {
 *    selectedOption: null,
 *  };
 *
 *  onSelect = (selectedOption) => {
 *    this.setState({ selectedOption });
 *  };
 *
 *  render() {
 *    return (
 *       <Select
 *         style={styles.select}
 *         labelStyle={styles.labelStyle}
 *         placeholderStyle={styles.placeholderStyle}
 *         controlStyle={styles.controlStyle}
 *         data={this.items}
 *         selectedOption={this.state.selectedOption}
 *         onSelect={this.onSelect}
 *       />
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   select: { borderRadius: 8 },
 *   labelStyle: { color: 'gray' },
 *   placeholderStyle: { color: 'gray' },
 *   controlStyle: { borderRadius: 8 },
 * });
 * ```
 */

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      optionsListWidth: 0
    };

    this.onPress = event => {
      this.props.dispatch([]);

      if (this.props.onPress) {
        this.props.onPress(event);
      }

      this.setVisibility();
    };

    this.onPressIn = event => {
      this.props.dispatch([exports.Interaction.ACTIVE]);

      if (this.props.onPressIn) {
        this.props.onPressIn(event);
      }
    };

    this.onPressOut = event => {
      this.props.dispatch([]);

      if (this.props.onPressOut) {
        this.props.onPressOut(event);
      }
    };

    this.onItemSelect = (option, event) => {
      const {
        onSelect
      } = this.props;
      onSelect(this.strategy.select(option, this.setVisibility));
    };

    this.onControlMeasure = result => {
      const width = result[MEASURED_CONTROL_TAG].size.width;
      this.setState({
        optionsListWidth: width
      });
    };

    this.createSelectionStrategy = () => {
      const {
        multiSelect,
        selectedOption
      } = this.props;
      return multiSelect ? new MultiSelectStrategy(selectedOption) : new SingleSelectStrategy(selectedOption);
    };

    this.setVisibility = () => {
      const visible = !this.state.visible;
      this.setState({
        visible
      }, this.handleVisibleChange);
    };

    this.handleVisibleChange = () => {
      this.dispatchActive();
      this.startIconAnimation();
    };

    this.dispatchActive = () => {
      const {
        visible
      } = this.state;

      if (visible) {
        this.props.dispatch([exports.Interaction.ACTIVE]);
      } else {
        this.props.dispatch([]);
      }
    };

    this.startIconAnimation = () => {
      const {
        visible
      } = this.state;

      if (visible) {
        this.animateIcon(0);
      } else {
        this.animateIcon(-180);
      }
    };

    this.animateIcon = toValue => {
      reactNative.Animated.timing(this.iconAnimation, {
        toValue: toValue,
        duration: 200
      }).start();
    };

    this.getComponentStyle = source => {
      const {
        backgroundColor,
        borderColor,
        borderWidth,
        minHeight,
        minWidth,
        paddingHorizontal,
        paddingVertical,
        borderRadius
      } = source;
      const iconStyles = allWithPrefix(source, 'icon');
      const textStyles = allWithPrefix(source, 'text');
      const placeholderStyles = allWithPrefix(source, 'placeholder');
      const optionsListStyles = allWithPrefix(source, 'optionsList');
      const labelStyle = allWithPrefix(source, 'label');
      const outlineStyles = allWithPrefix(source, 'outline');
      return {
        control: {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: borderWidth,
          minHeight: minHeight,
          minWidth: minWidth,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          borderRadius: borderRadius
        },
        icon: {
          height: iconStyles.iconHeight,
          width: iconStyles.iconWidth,
          marginHorizontal: iconStyles.iconMarginHorizontal,
          tintColor: iconStyles.iconTintColor
        },
        text: {
          color: textStyles.textColor,
          fontFamily: textStyles.textFontFamily,
          fontSize: textStyles.textFontSize,
          fontWeight: textStyles.textFontWeight,
          lineHeight: textStyles.textLineHeight,
          marginHorizontal: textStyles.textMarginHorizontal
        },
        placeholder: {
          color: placeholderStyles.placeholderColor,
          fontFamily: placeholderStyles.placeholderFontFamily,
          fontSize: placeholderStyles.placeholderFontSize,
          fontWeight: placeholderStyles.placeholderFontWeight,
          lineHeight: placeholderStyles.placeholderLineHeight,
          marginHorizontal: placeholderStyles.placeholderMarginHorizontal
        },
        outline: {
          backgroundColor: outlineStyles.outlineBackgroundColor,
          padding: outlineStyles.outlinePadding,
          borderRadius: outlineStyles.outlineBorderRadius
        },
        optionsList: {
          maxHeight: optionsListStyles.optionsListMaxHeight,
          borderRadius: optionsListStyles.optionsListBorderRadius,
          borderColor: optionsListStyles.optionsListBorderColor,
          borderWidth: optionsListStyles.optionsListBorderWidth
        },
        label: {
          color: labelStyle.labelColor,
          marginBottom: labelStyle.labelMarginBottom
        }
      };
    };

    this.renderLabelElement = style => {
      const {
        label,
        labelStyle
      } = this.props;
      return React.createElement(Text, {
        style: [style, styles$q.label, labelStyle]
      }, label);
    };

    this.renderDefaultIconElement = style => {
      const rotateInterpolate = this.iconAnimation.interpolate({
        inputRange: [-180, 0],
        outputRange: ['-180deg', '0deg']
      });
      const animatedStyle = {
        transform: [{
          rotate: rotateInterpolate
        }]
      };
      return React.createElement(Chevron, {
        style: [style, animatedStyle],
        isAnimated: true
      });
    };

    this.renderIconElement = style => {
      const {
        icon
      } = this.props;
      const {
        visible
      } = this.state;

      if (icon) {
        return icon(style, visible);
      } else {
        return this.renderDefaultIconElement(style);
      }
    };

    this.renderTextElement = (valueStyle, placeholderStyle) => {
      const {
        placeholder,
        textStyle
      } = this.props;
      const value = this.strategy.getPlaceholder(placeholder);
      const style = placeholder === value ? placeholderStyle : valueStyle;
      return React.createElement(Text, {
        style: [style, styles$q.text, textStyle],
        numberOfLines: 1,
        ellipsizeMode: "tail"
      }, value);
    };

    this.renderOptionsListElement = style => {
      const _a = this.props,
            restProps = __rest$y(_a, ["appearance", "selectedOption"]);

      const additionalOptionsListStyle = {
        width: this.state.optionsListWidth
      };
      return React.createElement(SelectOptionsList, _extends$x({}, restProps, {
        strategy: this.strategy,
        key: 0,
        style: [styles$q.optionsList, style, additionalOptionsListStyle],
        bounces: false,
        onSelect: this.onItemSelect
      }));
    };

    this.renderControlChildren = style => {
      return [this.renderIconElement(style.icon), this.renderTextElement(style.text, style.placeholder)];
    };

    this.renderControlElement = () => {
      const _a = this.props,
            {
        themedStyle,
        controlStyle
      } = _a,
            restProps = __rest$y(_a, ["themedStyle", "controlStyle"]);

      const _b = this.getComponentStyle(themedStyle),
            {
        control,
        outline
      } = _b,
            childrenStyles = __rest$y(_b, ["control", "outline"]);

      const [iconElement, textElement] = this.renderControlChildren(childrenStyles);
      const measuringProps = {
        tag: MEASURED_CONTROL_TAG
      };
      return React.createElement(MeasureNode, {
        onResult: this.onControlMeasure
      }, [React.createElement(reactNative.TouchableOpacity, _extends$x({}, restProps, measuringProps, {
        key: MEASURED_CONTROL_TAG,
        activeOpacity: 1.0,
        style: [styles$q.control, control, controlStyle],
        onPress: this.onPress,
        onPressIn: this.onPressIn,
        onPressOut: this.onPressOut
      }), textElement, iconElement)]);
    };

    this.renderComponentChildren = style => {
      const {
        label
      } = this.props;
      return [this.renderOptionsListElement(style.optionsList), isValidString(label) && this.renderLabelElement(style.label), this.renderControlElement()];
    };

    this.strategy = this.createSelectionStrategy();
    this.iconAnimation = new reactNative.Animated.Value(-180);
  }

  componentDidUpdate() {
    this.strategy = this.createSelectionStrategy();
  }

  render() {
    const {
      themedStyle,
      style
    } = this.props;
    const {
      visible,
      optionsListWidth
    } = this.state;
    const componentStyle = this.getComponentStyle(themedStyle);
    const [optionsListElement, labelElement, controlElement] = this.renderComponentChildren(componentStyle);
    const additionalOptionsListStyle = {
      maxWidth: optionsListWidth
    };
    return React.createElement(reactNative.View, {
      style: style
    }, labelElement, React.createElement(reactNative.View, {
      style: [styles$q.outline, componentStyle.outline]
    }, React.createElement(Popover, {
      visible: visible,
      content: optionsListElement,
      style: additionalOptionsListStyle,
      indicatorStyle: styles$q.indicator,
      onBackdropPress: this.setVisibility
    }, controlElement)));
  }

}

SelectComponent.styledComponentName = 'Select';
SelectComponent.defaultProps = {
  placeholder: 'Select Option',
  multiSelect: false
};
const styles$q = reactNative.StyleSheet.create({
  control: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    flex: 1
  },
  icon: {},
  label: {},
  indicator: {
    width: 0,
    height: 6
  },
  optionsList: {
    flexGrow: 0
  },
  outlineContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  outline: {
    justifyContent: 'center'
  }
});
const Select = styled(SelectComponent);

const DEFAULT_CONFIG = {
  cycles: 1,
  useNativeDriver: true
};
class Animation {
  constructor(config) {
    this.counter = 0;
    this.running = false;

    this.onAnimationEnd = result => {
      this.counter += 1;

      if (this.counter === this.config.cycles) {
        this.stop();
      }

      if (this.running) {
        this.start(this.endCallback);
      }

      if (!this.running) {
        this.counter = 0;
        this.endCallback && this.endCallback(result);
        this.endCallback = null;
      }
    };

    this.config = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
  }

  start(callback) {
    this.endCallback = callback;
    this.running = true;
    this.animation.start(this.onAnimationEnd);
  }

  stop() {
    this.running = false;
    this.animation.stop();
  }

  release() {
    this.stop();
  }

}

var __rest$z = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_CONFIG$1 = {
  start: 1.0,
  end: 1.25,
  easing: reactNative.Easing.linear,
  duration: 500
};
class PulseAnimation extends Animation {
  constructor(config) {
    super(Object.assign(Object.assign({}, DEFAULT_CONFIG$1), config));
    this.value = new reactNative.Animated.Value(this.config.start);
  }

  get animation() {
    const _a = this.config,
          {
      start,
      end
    } = _a,
          restConfig = __rest$z(_a, ["start", "end"]);

    const startAnimation = reactNative.Animated.timing(this.value, Object.assign({
      toValue: end
    }, restConfig));
    const endAnimation = reactNative.Animated.timing(this.value, Object.assign({
      toValue: start
    }, restConfig));
    return reactNative.Animated.sequence([startAnimation, endAnimation]);
  }

  toProps() {
    return {
      // @ts-ignore: Animated.Value is not assignable to a number, but it is a number
      style: {
        transform: [{
          scale: this.value
        }]
      }
    };
  }

}

var __rest$A = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_CONFIG$2 = {
  start: 0.0,
  offset: 2.5,
  easing: reactNative.Easing.linear,
  duration: 25,
  cycles: 8
};
class ShakeAnimation extends Animation {
  constructor(config) {
    super(Object.assign(Object.assign({}, DEFAULT_CONFIG$2), config));
    this.value = new reactNative.Animated.Value(this.config.start);
  }

  get animation() {
    const _a = this.config,
          {
      start,
      offset
    } = _a,
          restConfig = __rest$A(_a, ["start", "offset"]);

    const startAnimation = reactNative.Animated.timing(this.value, Object.assign({
      toValue: this.counter % 2 !== 0 ? -offset : offset
    }, restConfig));
    const endAnimation = reactNative.Animated.timing(this.value, Object.assign({
      toValue: this.counter % 2 !== 0 ? offset : -offset
    }, restConfig));
    return reactNative.Animated.sequence([startAnimation, endAnimation]);
  }

  toProps() {
    return {
      // @ts-ignore: Animated.Value is not assignable to a number, but it is a number
      style: {
        transform: [{
          translateX: this.value
        }]
      }
    };
  }

}

var __rest$B = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_CONFIG$3 = {
  start: 1.0,
  end: 0.5,
  easing: reactNative.Easing.linear,
  duration: 500
};
class ZoomAnimation extends Animation {
  constructor(config) {
    super(Object.assign(Object.assign({}, DEFAULT_CONFIG$3), config));
    this.value = new reactNative.Animated.Value(this.config.start);
  }

  get animation() {
    const _a = this.config,
          {
      start,
      end
    } = _a,
          restConfig = __rest$B(_a, ["start", "end"]);

    const startAnimation = reactNative.Animated.timing(this.value, Object.assign({
      toValue: end
    }, restConfig));
    const endAnimation = reactNative.Animated.timing(this.value, Object.assign({
      toValue: start
    }, restConfig));
    return reactNative.Animated.sequence([startAnimation, endAnimation]);
  }

  toProps() {
    return {
      // @ts-ignore: Animated.Value is not assignable to a number, but it is a number
      style: {
        transform: [{
          scale: this.value
        }]
      }
    };
  }

}

function getIconAnimation(animation, config) {
  switch (animation) {
    case 'zoom':
      return new ZoomAnimation(config);

    case 'pulse':
      return new PulseAnimation(config);

    case 'shake':
      return new ShakeAnimation(config);
  }
}

function throwPackNotFoundError(name) {
  const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';
  const message = [`\nIcon: Icon Pack '${name}' is not registered`, 'Using UI Kitten components is only possible with configuring ApplicationProvider.', `📖 Documentation: ${docRoot}/guides/setting-up-icons`].join('\n');
  throw Error(message);
}

function throwIconNotFoundError(name, pack) {
  const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';
  const message = [`\nIcon: '${name}' icon is not registered in pack '${pack}'.`, 'Check icon name or consider switching icon pack.', `📖 Documentation: ${docRoot}/guides/setting-up-icons`].join('\n');
  throw Error(message);
}
/**
 * This service allows to register multiple icon packs to use them later within
 * `<Icon/>` component.
 */


class RegistryService {
  constructor() {
    this.packs = new Map();
  }
  /**
   * Registers multiple icon packs and sets the first one as default if there is no default packs
   *
   * @param {IconPack[]} packs - array of icon packs
   */


  register(...packs) {
    packs.forEach(pack => {
      this.registerIconPack(pack);
    });
  }
  /**
   * Sets pack as default
   *
   * @param {string} name
   * @throws {Error} if pack is nor registered
   */


  setDefaultIconPack(name) {
    if (!this.packs.has(name)) {
      throwPackNotFoundError(name);
    }

    this.defaultPack = name;
  }
  /**
   * @param {string} name
   * @returns {IconPack} pack by name
   */


  getIconPack(name) {
    return this.packs.get(name);
  }
  /**
   * @param {string} name - icon name
   * @param {string} pack - pack name
   * @throws {Error} if requested icon pack is not registered
   * @returns {RegisteredIcon} - registered icon of a requested/default pack
   */


  getIcon(name, pack) {
    const iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPack();
    return {
      name,
      pack: iconsPack.name,
      icon: this.getIconFromPack(name, iconsPack)
    };
  }
  /**
   * Registers single icon pack
   *
   * @param {IconPack} pack - icon pack to register
   */


  registerIconPack(pack) {
    this.packs.set(pack.name, pack);
  }

  getPackOrThrow(name) {
    const pack = this.packs.get(name);

    if (!pack) {
      throwPackNotFoundError(name);
    }

    return pack;
  }

  getDefaultPack() {
    return this.getIconPack(this.defaultPack);
  }

  getIconFromPack(name, pack, shouldThrow = true) {
    if (shouldThrow && !pack.icons[name]) {
      throwIconNotFoundError(name, pack.name);
    }

    return pack.icons[name];
  }

}

const IconRegistryService = new RegistryService();

var __rest$C = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `Icon` component with animation support. Allows to render any ReactElement registered for a specific name.
 * Starting from UI Kitten 4.2, there is `@ui-kitten/eva-icons` module
 * that renders any icon from eva-icons package in `svg` format.
 * It allows easily use icons in any component that has `icon` prop
 *
 * @extends React.Component
 *
 * @method {(callback?: Animated.EndCallback) => void} startAnimation - Toggle animation to start.
 *
 * @method {() => void} stopAnimation - Toggle animation to stop.
 *
 * @property {string} name - Name of registered icon.
 *
 * @property {string} pack - Name of icon pack that is able to provide an icon for specified name.
 *
 * @property {string} animation - Animation name. Available `zoom`, `pulse` and `shake`. Default is `zoom`.
 *
 * @property {AnimationConfig} animationConfig - Determines animation config. Extends `Animated.AnimationConfig`.
 *
 * @overview-example Register Icons
 *
 * ```
 * import React from 'react';
 * import { mapping, light as lightTheme } from '@eva-design/eva';
 * import { ApplicationProvider, IconRegistry, Layout, Text } from '../..';
 * import { EvaIconsPack } from '../../../eva-icons'; // <-- Make sure it is installed. npm i @ui-kitten/eva-icons
 *
 * const ApplicationContent = () => (
 *   <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 *     <Text>Welcome to UI Kitten</Text>
 *   </Layout>
 * );
 *
 * const App = () => (
 *   <React.Fragment>
 *     <IconRegistry icons={EvaIconsPack}/>
 *     <ApplicationProvider mapping={mapping} theme={lightTheme}>
 *       <ApplicationContent/>
 *     </ApplicationProvider>
 *   </React.Fragment>
 * );
 *
 * export default App;
 * ```
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Icon } from '../..';
 *
 * export const StarIcon = (props) => (
 *   <Icon name='star'/>
 * );
 * ```
 *
 * @overview-example Using with UI Kitten components
 *
 * ```
 * import React from 'react';
 * import { Input, Button, Icon } from '../..';
 *
 * const FacebookIcon = (style) => (
 *   <Icon {...style} name='facebook' />
 * );
 *
 * const EyeIcon = (style) => (
 *   <Icon {...style} name='eye' />
 * );
 *
 * export const LoginButton = (props) => (
 *   <Button icon={FacebookIcon}>Login with Facebook</Button>
 * );
 *
 * export const PasswordInput = (props) => (
 *   <Input placeholder='Password' icon={EyeIcon} />
 * );
 * ```
 *
 * @overview-example Using Asset Source
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { Button } from '../..';
 *
 * const FacebookIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export const LoginButton = (props) => (
 *   <Button icon={FacebookIcon}>Login with Facebook</Button>
 * );
 * ```
 *
 * @overview-example Animation Usage
 *
 * ```
 * import React from 'react';
 * import { Icon } from '../..';
 *
 * const iconRef = React.createRef();
 *
 * export const StarIcon = (props) => (
 *   <Icon ref={iconRef} name='star' animation='shake'/>
 * );
 *
 * iconRef.current.startAnimation();
 * ```
 *
 * @example Infinite Animation
 *
 * ```
 * import React from 'react';
 * import { Icon } from '../..';
 *
 * const iconRef = React.createRef();
 *
 * export const StarIcon = (props) => (
 *   <Icon
 *     ref={iconRef}
 *     name='star'
 *     animation='shake'
 *     animationConfig={{ cycles: -1 }}
 *   />
 * );
 *
 * iconRef.current.startAnimation();
 * ```
 *
 * @example Password Input
 *
 * ```
 * import React from 'react';
 * import { Input, Icon } from '../..';
 *
 * export class PasswordInput extends React.Component {
 *
 *  state = {
 *    passwordVisible: false,
 *  };
 *
 *  onPasswordIconPress = () => {
 *    const passwordVisible = !this.state.passwordVisible;
 *    this.setState({ passwordVisible });
 *  };
 *
 *  renderPasswordIcon = (style) => (
 *    <Icon
 *      name={this.state.passwordVisible ? 'eye' : 'eye-off'}
 *      {...style}
 *    />
 *  );
 *
 *  render() {
 *    return (
 *      <Input
 *        icon={this.renderPasswordIcon}
 *        onIconPress={this.onPasswordIconPress}
 *        secureTextEntry={!this.state.passwordVisible}
 *      />
 *    );
 *  }
 * }
 * ```
 *
 * @example Like Button
 *
 * ```
 * import React from 'react';
 * import { Button, Icon } from '../..';
 *
 * export class LikeButton extends React.Component {
 *
 *  state = {
 *    liked: false,
 *  };
 *
 *  onPress = () => {
 *    const liked = !this.state.liked;
 *    this.setState({ liked });
 *  };
 *
 *  renderHeartIcon = (style) => (
 *    <Icon
 *      name={this.state.liked ? 'heart' : 'heart-outline'}
 *      {...style}
 *    />
 *  );
 *
 *  render() {
 *    return (
 *      <Button
 *        icon={this.renderHeartIcon}
 *        onPress={this.onPress}
 *      />
 *    );
 *  }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * // Visit react-native-svg documentation for more details
 * // https://github.com/react-native-community/react-native-svg#common-props
 *
 * import React from 'react';
 * import { Icon } from '../..';
 *
 * export const StarIcon = (props) => (
 *   <Icon name='star' width={32} height={32} fill='#000'/>
 * );
 * ```
 */

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.startAnimation = callback => {
      this.animation.start(callback);
    };

    this.stopAnimation = () => {
      this.animation.stop();
    };

    this.getComponentStyle = () => {
      return this.animation.toProps();
    };

    this.animation = getIconAnimation(props.animation, props.animationConfig);
  }

  componentWillUnmount() {
    this.animation.release();
  }

  render() {
    const _a = this.props,
          {
      name,
      pack
    } = _a,
          restProps = __rest$C(_a, ["name", "pack"]);

    const registeredIcon = IconRegistryService.getIcon(name, pack);
    return React.createElement(reactNative.Animated.View, this.getComponentStyle(), registeredIcon.icon.toReactElement(restProps));
  }

}
Icon.defaultProps = {
  animation: 'zoom'
};

/**
 * Icon Registry component. Registers one or more icon packs for later usage in `<Icon/>` component.
 * Renders nothing, but should be added as a child of an Application Root.
 *
 * @extends React.Component
 *
 * @property {IconPack<any> | IconPack<any>[]} icons - Icon packs to register.
 * @property {string} defaultIcons - Name of an icon pack that is used by default.
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { mapping, light as lightTheme } from '@eva-design/eva';
 * import { ApplicationProvider, IconRegistry, Layout, Text } from '../..';
 * import { EvaIconsPack } from '../../../eva-icons'; // <-- Make sure it is installed. npm i @ui-kitten/eva-icons
 *
 * export default class App extends React.Component {
 *   render() {
 *     return (
 *       <React.Fragment>
 *         <IconRegistry icons={EvaIconsPack}/>
 *         <ApplicationProvider mapping={mapping} theme={lightTheme}>
 *           <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 *             <Text>Welcome to UI Kitten</Text>
 *           </Layout>
 *         </ApplicationProvider>
 *       <React.Fragment>
 *     );
 *   }
 * }
 * ```
 */

class IconRegistry extends React.Component {
  constructor() {
    super(...arguments);

    this.findDefaultIconPack = (packs, name) => {
      const requestedPackIndex = packs.findIndex(pack => {
        return pack.name === name;
      });
      return packs[Math.max(0, requestedPackIndex)];
    };

    this.registerIcons = (source, defaultPack) => {
      const packs = Array.isArray(source) ? source : [source];
      const defaultIconPack = this.findDefaultIconPack(packs, defaultPack);
      IconRegistryService.register(...packs);
      IconRegistryService.setDefaultIconPack(defaultIconPack.name);
    };
  }

  render() {
    const {
      icons,
      defaultIcons
    } = this.props;
    this.registerIcons(icons, defaultIcons);
    return null;
  }

}
IconRegistry.defaultProps = {
  icons: []
};

const FlexStyleProps = ['alignContent', 'alignItems', 'alignSelf', 'aspectRatio', 'borderBottomWidth', 'borderEndWidth', 'borderLeftWidth', 'borderRightWidth', 'borderStartWidth', 'borderTopWidth', 'borderWidth', 'bottom', 'display', 'end', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'height', 'justifyContent', 'left', 'margin', 'marginBottom', 'marginEnd', 'marginHorizontal', 'marginLeft', 'marginRight', 'marginStart', 'marginTop', 'marginVertical', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'overflow', 'padding', 'paddingBottom', 'paddingEnd', 'paddingHorizontal', 'paddingLeft', 'paddingRight', 'paddingStart', 'paddingTop', 'paddingVertical', 'position', 'right', 'start', 'top', 'width', 'zIndex', // ios
'direction'];

function _extends$y() { _extends$y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$D = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Styled `Input` component.
 *
 * @extends React.Component
 *
 * @method {() => void} focus - Requests focus for the given input or view. The exact behavior triggered
 * will depend on the platform and type of view.
 *
 * @method {() => void} blur - Removes focus from an input or view. This is the opposite of `focus()`.
 *
 * @method {() => boolean} isFocused - Returns if the input is currently focused.
 *
 * @method {() => void} clear - Removes all text from the input.
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning` or `danger`.
 *
 * @property {string} size - Determines the size of the component.
 * Can be `large`, `medium` or `small`.
 * Default is `medium`.
 *
 * @property {string} label - Determines label of the component.
 *
 * @property {StyleProp<TextStyle>} labelStyle - Customizes label style.
 *
 * @property {string} caption - Determines caption of the component.
 *
 * @property {StyleProp<TextStyle>} captionStyle - Customizes caption style.
 *
 * @property {string} placeholder - Determines placegolder of the component.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes text style.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} icon - Determines icon of the component.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} captionIcon - Determines caption icon.
 *
 * @property TextInputProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Input } from '../..';
 *
 * export class InputShowcase extends React.Component {
 *
 *   state = {
 *     inputValue: '',
 *   };
 *
 *   onInputValueChange = (inputValue) => {
 *     this.setState({ inputValue });
 *   };
 *
 *   render() {
 *     return (
 *       <Input
 *         value={this.state.inputValue}
 *         onChangeText={this.onInputValueChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With Icon
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { Input, Icon } from '../..';
 *
 * export class SecureInput extends React.Component {
 *
 *   state = {
 *     inputValue: '',
 *     secureTextEntry: true,
 *   };
 *
 *   onInputValueChange = (inputValue) => {
 *     this.setState({ inputValue });
 *   };
 *
 *   onIconPress = () => {
 *     const secureTextEntry = !this.state.secureTextEntry;
 *     this.setState({ secureTextEntry });
 *   };
 *
 *   renderIcon = (style) => (
 *     const iconName = this.state.secureTextEntry ? 'eye' : 'eye-off';
 *     return (
 *       <Icon {...style} name={iconName} />
 *     );
 *   );
 *
 *   render() {
 *     return (
 *       <Input
 *         value={this.state.inputValue}
 *         icon={this.renderIcon}
 *         secureTextEntry={this.state.secureTextEntry}
 *         onIconPress={this.onIconPress}
 *         onChangeText={this.onInputValueChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With Label
 *
 * ```
 * import React from 'react';
 * import { Input } from '../..';
 *
 * export class EmailInput extends React.Component {
 *
 *   state = {
 *     inputValue: '',
 *   };
 *
 *   onInputValueChange = (inputValue) => {
 *     this.setState({ inputValue });
 *   };
 *
 *   render() {
 *     return (
 *       <Input
 *         label='EMAIL'
 *         value={this.state.inputValue}
 *         onChangeText={this.onInputValueChange}
 *       />
 *     );
 *   }
 * }
 * ```
 * @overview-example With Caption
 *
 * ```
 * import React from 'react';
 * import { Input } from '../..';
 *
 * export class PasswordInput extends React.Component {
 *
 *   state = {
 *     inputValue: '',
 *   };
 *
 *   onInputValueChange = (inputValue) => {
 *     this.setState({ inputValue });
 *   };
 *
 *   isValidInputValue = () => {
 *     return this.state.inputValue.length >= 6;
 *   };
 *
 *   render() {
 *     const isValidInputValue = this.isValidInputValue();
 *     return (
 *       <Input
 *         status={isValidInputValue ? 'success' : 'danger'}
 *         caption={isValidInputValue ? '' : 'Invalid password'}
 *         value={this.state.inputValue}
 *         onChangeText={this.onInputValueChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Input } from '../..';
 *
 * export class InputShowcase extends React.Component {
 *
 *   state = {
 *     inputValue: '',
 *   };
 *
 *   onInputValueChange = (inputValue) => {
 *     this.setState({ inputValue });
 *   };
 *
 *   render() {
 *     return (
 *       <Input
 *         size='large'
 *         status='danger'
 *         value={this.state.inputValue}
 *         onChangeText={this.onInputValueChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { Input } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export const StarInput = (props) => (
 *   <Input icon={StarIcon} />
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Input } from '../..';
 *
 * export class InputShowcase extends React.Component {
 *
 *   state = {
 *     inputValue: '',
 *   };
 *
 *   onInputValueChange = (inputValue) => {
 *     this.setState({ inputValue });
 *   };
 *
 *   render() {
 *     return (
 *       <Input
 *         value={this.state.inputValue}
 *         style={styles.input}
 *         textStyle={styles.inputText}
 *         labelStyle={styles.inputLabel}
 *         captionStyle={styles.inputCaption}
 *         onChangeText={this.onInputValueChange}
 *       />
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   input: { borderRadius: 8 },
 *   inputText: { color: 'black' },
 *   inputLabel: { color: 'gray' },
 *   inputCaption: { color: 'gray' },
 * });
 * ```
 */

class InputComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.textInputRef = React.createRef();

    this.focus = () => {
      this.textInputRef.current.focus();
    };

    this.blur = () => {
      this.textInputRef.current.blur();
    };

    this.isFocused = () => {
      return this.textInputRef.current.isFocused();
    };

    this.clear = () => {
      this.textInputRef.current.clear();
    };

    this.onFocus = event => {
      this.props.dispatch([exports.Interaction.FOCUSED]);

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    };

    this.onBlur = event => {
      this.props.dispatch([]);

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    };

    this.onIconPress = event => {
      if (this.props.onIconPress) {
        this.props.onIconPress(event);
      }
    };

    this.getComponentStyle = source => {
      const flatStyles = reactNative.StyleSheet.flatten(this.props.style);

      const _a = allWithRest(flatStyles, FlexStyleProps),
            {
        rest: inputContainerStyle
      } = _a,
            containerStyle = __rest$D(_a, ["rest"]);

      const {
        textMarginHorizontal,
        textFontFamily,
        textFontSize,
        textLineHeight,
        textFontWeight,
        textColor,
        placeholderColor,
        iconWidth,
        iconHeight,
        iconMarginHorizontal,
        iconTintColor,
        labelColor,
        labelFontSize,
        labelLineHeight,
        labelMarginBottom,
        labelFontWeight,
        captionMarginTop,
        captionColor,
        captionFontSize,
        captionLineHeight,
        captionFontWeight,
        captionIconWidth,
        captionIconHeight,
        captionIconMarginRight,
        captionIconTintColor
      } = source,
            containerParameters = __rest$D(source, ["textMarginHorizontal", "textFontFamily", "textFontSize", "textLineHeight", "textFontWeight", "textColor", "placeholderColor", "iconWidth", "iconHeight", "iconMarginHorizontal", "iconTintColor", "labelColor", "labelFontSize", "labelLineHeight", "labelMarginBottom", "labelFontWeight", "captionMarginTop", "captionColor", "captionFontSize", "captionLineHeight", "captionFontWeight", "captionIconWidth", "captionIconHeight", "captionIconMarginRight", "captionIconTintColor"]);

      return {
        container: containerStyle,
        inputContainer: Object.assign(Object.assign({}, containerParameters), inputContainerStyle),
        captionContainer: {
          marginTop: captionMarginTop
        },
        text: {
          marginHorizontal: textMarginHorizontal,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          // FIXME: RN issue (https://github.com/facebook/react-native/issues/7823)
          // lineHeight: textLineHeight,
          fontWeight: textFontWeight,
          color: textColor
        },
        placeholder: {
          color: placeholderColor
        },
        icon: {
          width: iconWidth,
          height: iconHeight,
          marginHorizontal: iconMarginHorizontal,
          tintColor: iconTintColor
        },
        label: {
          color: labelColor,
          fontSize: labelFontSize,
          lineHeight: labelLineHeight,
          marginBottom: labelMarginBottom,
          fontWeight: labelFontWeight
        },
        captionIcon: {
          width: captionIconWidth,
          height: captionIconHeight,
          tintColor: captionIconTintColor,
          marginRight: captionIconMarginRight
        },
        captionLabel: {
          fontSize: captionFontSize,
          fontWeight: captionFontWeight,
          lineHeight: captionLineHeight,
          color: captionColor
        }
      };
    };

    this.renderIconTouchableElement = style => {
      const iconElement = this.renderIconElement(style);
      return React.createElement(reactNative.TouchableWithoutFeedback, {
        onPress: this.onIconPress
      }, iconElement);
    };

    this.renderIconElement = style => {
      const iconElement = this.props.icon(style);
      return React.cloneElement(iconElement, {
        key: 0,
        style: [style, styles$r.icon, iconElement.props.style]
      });
    };

    this.renderLabelElement = style => {
      return React.createElement(Text, {
        key: 1,
        style: [style, styles$r.label, this.props.labelStyle]
      }, this.props.label);
    };

    this.renderCaptionElement = style => {
      return React.createElement(Text, {
        key: 2,
        style: [style, styles$r.captionLabel, this.props.captionTextStyle]
      }, this.props.caption);
    };

    this.renderCaptionIconElement = style => {
      const iconElement = this.props.captionIcon(style);
      return React.cloneElement(iconElement, {
        key: 3,
        style: [style, styles$r.captionIcon, iconElement.props.style]
      });
    };

    this.renderComponentChildren = style => {
      const {
        icon,
        label,
        captionIcon,
        caption
      } = this.props;
      return [icon && this.renderIconTouchableElement(style.icon), isValidString(label) && this.renderLabelElement(style.label), isValidString(caption) && this.renderCaptionElement(style.captionLabel), captionIcon && this.renderCaptionIconElement(style.captionIcon)];
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      textStyle,
      disabled
    } = _a,
          restProps = __rest$D(_a, ["themedStyle", "textStyle", "disabled"]);

    const componentStyle = this.getComponentStyle(themedStyle);
    const [iconElement, labelElement, captionElement, captionIconElement] = this.renderComponentChildren(componentStyle);
    return React.createElement(reactNative.View, {
      style: [componentStyle.container, styles$r.container]
    }, labelElement, React.createElement(reactNative.View, {
      style: [componentStyle.inputContainer, styles$r.inputContainer]
    }, React.createElement(reactNative.TextInput, _extends$y({
      ref: this.textInputRef
    }, restProps, {
      style: [componentStyle.text, styles$r.text, textStyle],
      placeholderTextColor: componentStyle.placeholder.color,
      editable: !disabled,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    })), iconElement), React.createElement(reactNative.View, {
      style: [componentStyle.captionContainer, styles$r.captionContainer]
    }, captionIconElement, captionElement));
  }

}
InputComponent.styledComponentName = 'Input';
const styles$r = reactNative.StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  captionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto'
  },
  placeholder: {},
  icon: {},
  label: {
    textAlign: 'left'
  },
  captionIcon: {},
  captionLabel: {
    textAlign: 'left'
  }
});
const Input = styled(InputComponent);

function _extends$z() { _extends$z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$E = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `Layout` container component. Behaves like React Native `View`.
 * The key feature of using `Layout` instead of `View` is that
 * it automatically picks background color fitting to current theme.
 *
 * @extends React.Component
 *
 * @property {string} level - Determines background color level of component.
 * Can be `level='1'`, `level='2'`, `level='3'` or `level='4'`.
 *
 * @property {React.ReactElement<any> | React.ReactElement<any>[]} children - Determines the children of the component.
 *
 * @property ViewProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Layout, Text } from '../..';
 *
 * export const LayoutShowcase = (props) => (
 *   <Layout>
 *     <Text>Layout</Text>
 *   </Layout>
 * );
 * ```
 *
 * @overview-example Layout Levels
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Layout, Text } from '../..';
 *
 * export const LayoutShowcase = (props) => (
 *   <Layout style={styles.container} level='4'>
 *     <Layout style={styles.container} level='3'>
 *       <Layout style={styles.container} level='2'>
 *         <Layout style={[styles.container, styles.contentContainer]}>
 *           <Text>Welcome to UI Kitten</Text>
 *         </Layout>
 *       </Layout>
 *     </Layout>
 *   </Layout>
 * );
 *
 * const styles = StyleSheet.create({
 *   container: { flex: 1, padding: 16 }
 *   contentContainer: { justifyContent: 'center', alignItems: 'center' }
 * });
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Layout, Text } from '../..';
 *
 * export const LayoutShowcase = (props) => (
 *   <Layout level='2'>
 *     <Text>Layout</Text>
 *   </Layout>
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from '../..';
 * import { Layout, Text } from '../..';
 *
 * export const LayoutShowcase = (props) => (
 *   <Layout style={styles.container}>
 *     <Text>Layout</Text>
 *   </Layout>
 * );
 *
 * const styles = StyleSheet.create({
 *   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 * });
 * ```
 */

class LayoutComponent extends React.Component {
  render() {
    const _a = this.props,
          {
      style,
      themedStyle
    } = _a,
          derivedProps = __rest$E(_a, ["style", "themedStyle"]);

    return React.createElement(reactNative.View, _extends$z({}, derivedProps, {
      style: [themedStyle, style]
    }));
  }

}
LayoutComponent.styledComponentName = 'Layout';
const Layout = styled(LayoutComponent);

function _extends$A() { _extends$A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$F = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const {
  width: screenWidth,
  height: screenHeight
} = reactNative.Dimensions.get('screen');
const TAG_CHILD$1 = 'Modal';
const initialContentSize = {
  width: 0,
  height: 0
};
const baseModalTestId = '@modal/base';
/**
 * `Modal` component is a wrapper than presents content above an enclosing view.
 *
 * @extends React.Component
 *
 * @property {boolean} visible - Determines whether component is visible. By default is false.
 *
 * @property {React.ReactElement<any> | React.ReactElement<any>[]} children -
 * Determines component's children.
 *
 * @property {boolean} allowBackdrop - Determines whether user can tap on back-drop.
 * Default is `false`.
 *
 * @property {BackdropStyle} backdropStyle - Determines the style of backdrop.
 *
 * @property {() => void} onBackdropPress - Determines component's behavior when the user is
 * tapping on back-drop.
 *
 * @property ViewProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Button, Modal, Text, Layout } from '../..';
 *
 * export class ModalShowcase extends React.Component {
 *
 *   state = {
 *     modalVisible: false,
 *   };
 *
 *   setModalVisible = () => {
 *     const modalVisible = !this.state.modalVisible;
 *     this.setState({ modalVisible });
 *   };
 *
 *   renderModalElement = () => {
 *     return (
 *       <Layout
 *         level='3'
 *         style={styles.modalContainer}>
 *         <Text>This is modal</Text>
 *         <Button onPress={this.setModalVisible}>Hide Modal</Button>
 *       </Layout>
 *     );
 *   };
 *
 *   render() {
 *     return (
 *       <Layout style={styles.container}>
 *         <Button onPress={this.setModalVisible}>Show Modal</Button>
 *         <Modal visible={this.state.modalVisible}>
 *           {this.renderModalElement()}
 *         </Modal>
 *       </Layout>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     padding: 16,
 *   },
 *   modalContainer: {
 *     width: 200,
 *     height: 200,
 *     justifyContent: 'center',
 *     alignItems: 'center',
 *   },
 * });
 * ```
 *
 * @overview-example With Backdrop
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Button, Modal, Text, Layout } from '../..';
 *
 * export class ModalShowcase extends React.Component {
 *
 *   state = {
 *     modalVisible: false,
 *   };
 *
 *   setModalVisible = () => {
 *     const modalVisible: boolean = !this.state.modalVisible;
 *     this.setState({ modalVisible });
 *   };
 *
 *   renderModalElement = () => {
 *     return (
 *       <Layout
 *         level='3'
 *         style={styles.modalContainer}>
 *         <Text>This is modal</Text>
 *         <Button onPress={this.setModalVisible}>Hide Modal</Button>
 *       </Layout>
 *     );
 *   };
 *
 *   render() {
 *     return (
 *       <Layout style={styles.container}>
 *         <Button onPress={this.setModalVisible}>Show Modal</Button>
 *         <Modal
 *           allowBackdrop={true}
 *           backdropStyle={{ backgroundColor: 'black', opacity: 0.5 }}
 *           onBackdropPress={this.setModalVisible}
 *           visible={this.state.modalVisible}>
 *           {this.renderModalElement()}
 *         </Modal>
 *       </View>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     padding: 16,
 *   },
 *   modalContainer: {
 *     width: 200,
 *     height: 200,
 *     justifyContent: 'center',
 *     alignItems: 'center',
 *   },
 * });
 * ```
 */

class Modal extends React.Component {
  constructor() {
    super(...arguments);
    this.contentSize = initialContentSize;
    this.id = '';

    this.handleVisibility = props => {
      const {
        allowBackdrop,
        onBackdropPress
      } = this.props;

      if (props.visible) {
        const element = this.renderModal();
        this.id = ModalService.show(element, {
          allowBackdrop,
          onBackdropPress
        });
      } else {
        ModalService.hide(this.id);
        this.id = '';
      }
    };

    this.getAbsoluteRelatedStyle = () => {
      const {
        width,
        height
      } = this.contentSize;
      return {
        top: (screenHeight - height) / 2,
        left: (screenWidth - width) / 2
      };
    };

    this.onMeasure = result => {
      this.contentSize = result[TAG_CHILD$1].size;
    };

    this.renderBaseModal = () => {
      const _a = this.props,
            {
        style,
        children
      } = _a,
            restProps = __rest$F(_a, ["style", "children"]);

      const absoluteRelatedStyle = this.getAbsoluteRelatedStyle();
      const measuringProps = {
        tag: TAG_CHILD$1
      };
      return React.createElement(reactNative.View, _extends$A({}, restProps, measuringProps, {
        testID: baseModalTestId,
        key: TAG_CHILD$1,
        style: [styles$s.container, absoluteRelatedStyle, style]
      }), children);
    };

    this.renderModal = () => {
      const {
        backdropStyle
      } = this.props;
      const modal = this.renderBaseModal();
      return backdropStyle ? React.createElement(React.Fragment, null, React.createElement(reactNative.View, {
        pointerEvents: "box-none",
        style: [styles$s.backdrop, backdropStyle]
      }), modal) : modal;
    };

    this.renderMeasureNode = () => {
      const modal = this.renderBaseModal();
      const measureStyledModal = React.cloneElement(modal, {
        style: [modal.props.style, styles$s.hiddenModal],
        key: TAG_CHILD$1,
        pointerEvents: 'none'
      });
      return React.createElement(MeasureNode, {
        onResult: this.onMeasure
      }, [measureStyledModal]);
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      this.handleVisibility(this.props);
    } else if (prevProps.visible && this.props.visible) {
      const element = this.renderModal();
      ModalService.update(this.id, element.props.children);
    }
  }

  render() {
    return this.renderMeasureNode();
  }

}
Modal.defaultProps = {
  allowBackdrop: false,
  onBackdropPress: () => null
};
const styles$s = reactNative.StyleSheet.create({
  container: {
    position: 'absolute'
  },
  backdrop: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight
  },
  hiddenModal: {
    opacity: 0
  }
});

function _extends$B() { _extends$B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$G = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `OverflowMenu` renders vertical list of menu items in a modal.
 *
 * @extends React.Component
 *
 * @property {React.ReactElement<any>} children - Determines the element above
 * which the menu will be rendered.
 *
 * @property {boolean} visible - determines the visibility of the component.
 *
 * @property {OverflowMenuItemType[]} data - Determines menu items.
 *
 * @property {number} selectedIndex - Determines the index of currently selected item.
 *
 * @property {(index: number, event: GestureResponderEvent) => void} onSelect - Fires when selected item is changed.
 *
 * @property Omit<PopoverProps, 'content'>
 *
 * @property Override<MenuProps, { data: OverflowMenuItemType[] }>
 *
 * @property ModalPresentingBased
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { OverflowMenu, Button } from '../..';
 *
 * export class OverflowMenuShowcase extends React.Component {
 *
 *   data = [
 *     { title: 'Menu Item 1' },
 *     { title: 'Menu Item 2' },
 *     { title: 'Menu Item 3' },
 *   ];
 *
 *   state = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   onItemSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   toggleMenu = () => {
 *     const menuVisible = !this.state.menuVisible;
 *     this.setState({ menuVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <OverflowMenu
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>TOGGLE MENU/Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With Icons
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { OverflowMenu, Button, Icon } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Icon {...style} name='star' />
 * );
 *
 * export class OverflowMenuShowcase extends React.Component {
 *
 *   data = [
 *     { title: 'Menu Item 1', icon: StarIcon },
 *     { title: 'Menu Item 2', icon: StarIcon },
 *     { title: 'Menu Item 3', icon: StarIcon },
 *   ];
 *
 *   state = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   onItemSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   toggleMenu = () => {
 *     const menuVisible = !this.state.menuVisible;
 *     this.setState({ menuVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <OverflowMenu
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>TOGGLE MENU</Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 *
 * @example Disabled Item
 *
 * ```
 * import React from 'react';
 * import { OverflowMenu, Button } from '../..';
 *
 * export class OverflowMenuShowcase extends React.Component {
 *
 *   data = [
 *     { title: 'Menu Item 1' },
 *     { title: 'Menu Item 2', disabled: true },
 *     { title: 'Menu Item 3' },
 *   ];
 *
 *   state = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   onItemSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   toggleMenu = () => {
 *     const menuVisible = !this.state.menuVisible;
 *     this.setState({ menuVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <OverflowMenu
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>TOGGLE MENU</Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 *
 * @example Without Divider
 *
 * ```
 * import React from 'react';
 * import { OverflowMenu, Button } from '../..';
 *
 * export class OverflowMenuShowcase extends React.Component {
 *
 *   data = [
 *     { title: 'Menu Item 1' },
 *     { title: 'Menu Item 2' },
 *     { title: 'Menu Item 3' },
 *   ];
 *
 *   state = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   onItemSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   toggleMenu = () => {
 *     const menuVisible = !this.state.menuVisible;
 *     this.setState({ menuVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <OverflowMenu
 *         appearance='noDivider'
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>TOGGLE MENU</Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { OverflowMenu, Button } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export class OverflowMenuShowcase extends React.Component {
 *
 *   data = [
 *     { title: 'Menu Item 1', icon: StarIcon },
 *     { title: 'Menu Item 2', icon: StarIcon },
 *     { title: 'Menu Item 3', icon: StarIcon },
 *   ];
 *
 *   state = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   onItemSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   toggleMenu = () => {
 *     const menuVisible = !this.state.menuVisible;
 *     this.setState({ menuVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <OverflowMenu
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>TOGGLE MENU</Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 */

class OverflowMenuComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.getComponentStyle = source => {
      const {
        indicatorBackgroundColor
      } = source,
            containerParameters = __rest$G(source, ["indicatorBackgroundColor"]);

      return {
        container: containerParameters,
        indicator: {
          backgroundColor: indicatorBackgroundColor
        }
      };
    };

    this.renderPopoverContentElement = style => {
      const _a = this.props,
            {
        themedStyle,
        indicatorStyle,
        children,
        data
      } = _a,
            restProps = __rest$G(_a, ["themedStyle", "indicatorStyle", "children", "data"]);

      return React.createElement(Menu, _extends$B({}, restProps, {
        data: data,
        style: [styles$t.menu, style],
        initialNumToRender: data.length,
        bounces: false
      }));
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      indicatorStyle,
      children,
      appearance
    } = _a,
          restProps = __rest$G(_a, ["themedStyle", "style", "indicatorStyle", "children", "appearance"]);

    const {
      container,
      indicator
    } = this.getComponentStyle(themedStyle);
    const contentElement = this.renderPopoverContentElement(container);
    return React.createElement(Popover, _extends$B({}, restProps, {
      style: [styles$t.container, style],
      indicatorStyle: [indicator, indicatorStyle],
      content: contentElement
    }), children);
  }

}

OverflowMenuComponent.styledComponentName = 'OverflowMenu';
OverflowMenuComponent.defaultProps = {
  indicatorOffset: 12
};
const styles$t = reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  menu: {
    flexGrow: 0
  }
});
const OverflowMenu = styled(OverflowMenuComponent);

function _extends$C() { _extends$C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$C.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$H = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Styled `Radio` component.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Determines whether component is checked.
 * Default is `false`.
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning`, `danger`, basic` or `control`.
 * Default is `basic`.
 *
 * @property {string} text - Determines text of the component.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes text style.
 *
 * @property {(selected: boolean) => void} onChange - Triggered on onChange value.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Radio } from '../..';
 *
 * export class RadioShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <Radio
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     )
 *   }
 * }
 *
 * ```
 * @overview-example With Text
 *
 * ```
 * import React from 'react';
 * import { Radio } from '../..';
 *
 * export class RadioShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <Radio
 *         text='Place your text'
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     )
 *   }
 * }
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Radio } from '../..';
 *
 * export class RadioShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <Radio
 *         status='warning'
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     )
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Radio } from '../..';
 *
 * export const RadioShowcase = (props) => (
 *   <Radio
 *     style={styles.radio}
 *     textStyle={styles.radioText}
 *     checked={true}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   radio: { width: 32, height: 32 },
 *   radioText: { color: 'black' },
 * });
 * ```
 */

class RadioComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = () => {
      if (this.props.onChange) {
        this.props.onChange(!this.props.checked);
      }
    };

    this.onPressIn = event => {
      this.props.dispatch([exports.Interaction.ACTIVE]);

      if (this.props.onPressIn) {
        this.props.onPressIn(event);
      }
    };

    this.onPressOut = event => {
      this.props.dispatch([]);

      if (this.props.onPressOut) {
        this.props.onPressOut(event);
      }
    };

    this.getComponentStyle = source => {
      const {
        textMarginHorizontal,
        textFontFamily,
        textFontSize,
        textFontWeight,
        textLineHeight,
        textColor,
        iconWidth,
        iconHeight,
        iconBorderRadius,
        iconTintColor,
        outlineWidth,
        outlineHeight,
        outlineBorderRadius,
        outlineBackgroundColor
      } = source,
            containerParameters = __rest$H(source, ["textMarginHorizontal", "textFontFamily", "textFontSize", "textFontWeight", "textLineHeight", "textColor", "iconWidth", "iconHeight", "iconBorderRadius", "iconTintColor", "outlineWidth", "outlineHeight", "outlineBorderRadius", "outlineBackgroundColor"]);

      return {
        container: {},
        highlightContainer: {},
        selectContainer: containerParameters,
        text: {
          marginHorizontal: textMarginHorizontal,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          fontWeight: textFontWeight,
          color: textColor
        },
        icon: {
          width: iconWidth,
          height: iconHeight,
          borderRadius: iconBorderRadius,
          backgroundColor: iconTintColor
        },
        highlight: {
          width: outlineWidth,
          height: outlineHeight,
          borderRadius: outlineBorderRadius,
          backgroundColor: outlineBackgroundColor
        }
      };
    };

    this.createHitSlopInsets = style => {
      const flatStyle = reactNative.StyleSheet.flatten(style); // @ts-ignore `width` is restricted to be a number

      const value = 40 - flatStyle.width;
      return {
        left: value,
        top: value,
        right: value,
        bottom: value
      };
    };

    this.renderTextElement = style => {
      const {
        text,
        textStyle
      } = this.props;
      return React.createElement(Text, {
        key: 0,
        style: [style, styles$u.text, textStyle]
      }, text);
    };

    this.renderComponentChildren = style => {
      const {
        text
      } = this.props;
      return [isValidString(text) && this.renderTextElement(style.text)];
    };
  }

  render() {
    const _a = this.props,
          {
      style,
      themedStyle,
      disabled
    } = _a,
          derivedProps = __rest$H(_a, ["style", "themedStyle", "disabled"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container,
      highlightContainer,
      selectContainer,
      icon,
      highlight
    } = _b,
          componentStyles = __rest$H(_b, ["container", "highlightContainer", "selectContainer", "icon", "highlight"]);

    const selectContainerStyle = [selectContainer, styles$u.selectContainer];
    const hitSlopInsets = this.createHitSlopInsets(selectContainerStyle);
    const [textElement] = this.renderComponentChildren(componentStyles);
    return React.createElement(reactNative.TouchableOpacity, {
      style: [container, styles$u.container, style],
      activeOpacity: 1.0,
      disabled: disabled,
      hitSlop: hitSlopInsets,
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    }, React.createElement(reactNative.View, {
      style: [highlightContainer, styles$u.highlightContainer]
    }, React.createElement(reactNative.View, {
      style: [highlight, styles$u.highlight]
    }), React.createElement(reactNative.TouchableOpacity, _extends$C({
      activeOpacity: 1.0
    }, derivedProps, {
      disabled: disabled,
      style: selectContainerStyle,
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    }), React.createElement(reactNative.View, {
      style: [icon, styles$u.icon]
    }))), textElement);
  }

}
RadioComponent.styledComponentName = 'Radio';
const styles$u = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  highlightContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {},
  highlight: {
    position: 'absolute'
  },
  text: {}
});
const Radio = styled(RadioComponent);

function _extends$D() { _extends$D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$D.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$I = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Renders a group of `Radio` buttons.
 *
 * @extends React.Component
 *
 * @property {React.ReactElement<RadioProps> | React.ReactElement<RadioProps>[]} children -
 * Determines radio buttons in group.
 *
 * @property {number} selectedIndex - Determines the index of selected button
 *
 * @property {(index: number) => void} onChange - Fires when selected radio is changed.
 *
 * @property ViewProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Radio, RadioGroup } from '../..';
 *
 * export class RadioGroupShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: 0,
 *   };
 *
 *   onGroupSelectionChange = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <RadioGroup
 *         selectedIndex={this.state.selectedIndex}
 *         onChange={this.onGroupSelectionChange}>
 *         <Radio text='Option 1' />
 *         <Radio text='Option 2' />
 *         <Radio text='Option 3' />
 *       </RadioGroup>
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Radio, RadioGroup } from '../..';
 *
 * export class RadioGroupShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: 0,
 *   };
 *
 *   onGroupSelectionChange = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <RadioGroup
 *         status='danger'
 *         selectedIndex={this.state.selectedIndex}
 *         onChange={this.onGroupSelectionChange}>
 *         <Radio text='Option 1' />
 *         <Radio text='Option 2' />
 *         <Radio text='Option 3' />
 *       </RadioGroup>
 *     );
 *   }
 * }
 * ```
 */

class RadioGroupComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onRadioChange = index => {
      if (this.props.onChange) {
        this.props.onChange(index);
      }
    };

    this.getComponentStyle = source => {
      return {
        container: source
      };
    };

    this.renderRadioElement = (element, index) => {
      return React.cloneElement(element, {
        key: index,
        checked: this.props.selectedIndex === index,
        onChange: () => this.onRadioChange(index)
      });
    };

    this.renderRadioElements = source => {
      return React.Children.map(source, this.renderRadioElement);
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      children
    } = _a,
          derivedProps = __rest$I(_a, ["themedStyle", "style", "children"]);

    const componentStyle = this.getComponentStyle(themedStyle);
    const radioElements = this.renderRadioElements(children);
    return React.createElement(reactNative.View, _extends$D({}, derivedProps, {
      style: [componentStyle.container, styles$v.container, style]
    }), radioElements);
  }

}

RadioGroupComponent.styledComponentName = 'RadioGroup';
RadioGroupComponent.defaultProps = {
  selectedIndex: -1
};
const styles$v = reactNative.StyleSheet.create({
  container: {}
});
const RadioGroup = styled(RadioGroupComponent);

const PI = 180;
const PI2 = 360;
const OFFSET_MIN = PI / 12;
const OFFSET_MAX = PI / 6;
const BaseBezierEasing = reactNative.Easing.bezier(0.4, 0.0, 0.7, 1.0);

const StartArcEasing = progress => {
  return -PI + OFFSET_MIN + (PI - OFFSET_MAX) * BaseBezierEasing(progress);
};

const EndArcEasing = progress => {
  return PI2 - OFFSET_MIN + (-PI + OFFSET_MAX) * BaseBezierEasing(progress);
};

const DEFAULT_CONFIG$4 = {
  duration: 2400,
  easing: reactNative.Easing.linear,
  cycles: -1
};
/**
 * Animates a Spinner in a Material Design way.
 *
 * Thanks these guys for open sourcing the algorithm: https://github.com/n4kz/react-native-indicators
 */

class SpinnerAnimation extends Animation {
  constructor(arcSize, config) {
    super(Object.assign(Object.assign({}, DEFAULT_CONFIG$4), config));
    /**
     * @param {number} duration - animation duration.
     * @returns an array of frames fitted into animation.
     */

    this.createFrameRange = duration => {
      const numberOfFrames = 60 * duration / 1000;
      return new Array(numberOfFrames).fill(0);
    };

    this.createContainerInterpolation = () => {
      return this.animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [this.toDegValue(OFFSET_MAX + OFFSET_MIN), this.toDegValue(2 * PI2 + OFFSET_MAX + OFFSET_MIN)]
      });
    };

    this.createArcInterpolation = easing => {
      return this.animationValue.interpolate({
        inputRange: this.createArcInterpolationInputRange(),
        outputRange: this.createArcInterpolationOutputRange(easing)
      });
    };
    /**
     * Maps the animation frames into initial animation values specific for each frame.
     *
     * @returns a container interpolation input range in a numeric format.
     */


    this.createArcInterpolationInputRange = () => {
      return this.animationFrames.map((item, frame) => {
        return frame / (this.animationFrames.length - 1);
      });
    };
    /**
     * Maps the animation frames into a final animation values specific for each frame.
     *
     * @param {(progress: number) => number} easing - Easing function specific for the arc.
     * @returns an arc interpolation end values eased with an `easing` function in a StyleSheet degree format.
     */


    this.createArcInterpolationOutputRange = easing => {
      return this.animationFrames.map((item, frame) => {
        const progress = 2 * frame / (this.animationFrames.length - 1);
        const boundedProgress = Math.min(2.0 - progress, progress);
        return this.toDegValue(easing(boundedProgress));
      });
    };
    /**
     * @param {Animated.AnimatedInterpolation} rotate - animated rotation animationValue.
     * @param {ViewStyle} source - initial StyleSheet object.
     * @returns a final StyleSheet object with a `rotate` animation value.
     */


    this.toStyleTransformProp = (rotate, source = {}) => {
      const transform = [...(source.transform || []), {
        rotate
      }]; // @ts-ignore: AnimatedInterpolation does not fit RotateTransform type declaration

      return Object.assign(Object.assign({}, source), {
        transform
      });
    };
    /**
     * @param {number} source - degrees in a numeric format.
     * @returns degrees in a StyleSheet format.
     */


    this.toDegValue = source => {
      return `${source}deg`;
    };

    this.arcSize = arcSize;
    this.animationValue = new reactNative.Animated.Value(0);
    this.animationFrames = this.createFrameRange(this.config.duration);
  }

  get animation() {
    return reactNative.Animated.timing(this.animationValue, Object.assign({
      toValue: 1.0
    }, this.config));
  }

  start(callback) {
    // reset animation value before the next animation cycle
    this.animationValue.setValue(0);
    super.start(callback);
  }

  stop() {
    super.stop();
    this.animationValue.setValue(0);
  }
  /**
   * @returns {SpinnerAnimationStyle} - an object that contains container, start and end arcs transform styles.
   */


  toProps() {
    const containerInterpolation = this.createContainerInterpolation();
    const startArcInterpolation = this.createArcInterpolation(StartArcEasing);
    const endArcInterpolation = this.createArcInterpolation(EndArcEasing);
    return {
      container: this.toStyleTransformProp(containerInterpolation),
      start: this.toStyleTransformProp(startArcInterpolation),
      end: this.toStyleTransformProp(endArcInterpolation, {
        transform: [{
          translateY: -this.arcSize / 2
        }]
      })
    };
  }

}

/**
 * Styled `Spinner` component. Designed to be used as `ActivityIndicator` component
 *
 * @extends React.Component
 *
 * @property {boolean} animating - Determines whether component is animating. Default is `true`.
 *
 * @property {string} size - Determines the the component.
 * Can be `giant`, `large`, `medium`, `small` or `tiny`.
 * Default is `medium`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning`, `danger` or `alternative`.
 * Default is `primary`.
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Spinner } from '../..';
 *
 * export const SpinnerShowcase = () => (
 *   <Spinner />
 * );
 * ```
 *
 * @overview-example Loading Data
 *
 * ```
 * import React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Spinner, List, ListItem } from '../..';
 *
 * export class SpinnerDataLoading extends React.Component {
 *
 *  state = {
 *    data: [],
 *  };
 *
 *  componentDidMount() {
 *    setTimeout(this.loadData, 3000);
 *  }
 *
 *  loadData = () => {
 *    const data = [
 *      {
 *        title: 'Item 1',
 *      },
 *      {
 *        title: 'Item 2',
 *      },
 *      {
 *        title: 'Item 3',
 *      },
 *    ];
 *    this.setState({ data });
 *  };
 *
 *  private renderLoading = () => (
 *    <View style={styles.loading}>
 *      <Spinner/>
 *    </View>
 *  );
 *
 *  renderDataItem = ({ item }) => (
 *    <ListItem title={item.title}/>
 *  );
 *
 *  renderData = () => (
 *    <List data={this.state.data} renderItem={this.renderDataItem}/>
 *  );
 *
 *  render() {
 *    const isLoaded: boolean = this.state.data.length > 0;
 *    return isLoaded ? this.renderData() : this.renderLoading();
 *  }
 *}
 *
 * const styles = StyleSheet.create({
 *   loading: {
 *     flex: 1,
 *     justifyContent: 'center',
 *     alignItems: 'center',
 *   },
 *});
 *```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Spinner } from '../..';
 *
 * export const SpinnerShowcase = (props) => (
 *   <Spinner size='giant' status='danger' />
 * );
 * ```
 */

class SpinnerComponent extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.animation = new SpinnerAnimation(this.containerSize.height);

    this.startAnimation = () => {
      this.animation.start();
    };

    this.stopAnimation = () => {
      this.animation.stop();
    };

    this.getComponentStyle = source => {
      const start = {
        container: source.container,
        arc: source.start
      };
      const end = {
        container: source.container,
        arc: source.end,
        overflow: {
          top: this.containerSize.height / 2
        }
      };
      return {
        start,
        end
      };
    };

    this.renderArcElement = (style, size) => {
      const arcSize = new Size(size.width, size.height / 2);
      return React.createElement(reactNative.Animated.View, {
        style: [style.container, styles$w.absolute, size]
      }, React.createElement(reactNative.View, {
        style: [styles$w.noOverflow, style.overflow, arcSize]
      }, React.createElement(reactNative.Animated.View, {
        style: [style.arc, size]
      }, React.createElement(reactNative.View, {
        style: [styles$w.noOverflow, arcSize]
      }, React.createElement(reactNative.View, {
        style: [this.props.themedStyle, this.props.style]
      })))));
    };
  }

  get containerSize() {
    const {
      width,
      height
    } = reactNative.StyleSheet.flatten([this.props.themedStyle, this.props.style]); // @ts-ignore: width and height are restricted to be a number

    return new Size(width, height);
  }

  componentDidMount() {
    if (this.props.animating) {
      this.startAnimation();
    }
  }

  componentDidUpdate(prevProps) {
    const animatingChanged = this.props.animating !== prevProps.animating;

    if (animatingChanged && this.props.animating) {
      this.startAnimation();
    }

    if (animatingChanged && !this.props.animating) {
      this.stopAnimation();
    }
  }

  componentWillUnmount() {
    this.animation.release();
  }

  render() {
    const containerSize = this.containerSize;
    const {
      start,
      end
    } = this.getComponentStyle(this.animation.toProps());
    return React.createElement(reactNative.View, {
      style: containerSize
    }, this.renderArcElement(start, containerSize), this.renderArcElement(end, containerSize));
  }

}
SpinnerComponent.styledComponentName = 'Spinner';
SpinnerComponent.defaultProps = {
  animating: true
};
const styles$w = reactNative.StyleSheet.create({
  absolute: reactNative.StyleSheet.absoluteFillObject,
  noOverflow: {
    overflow: 'hidden'
  }
});
const Spinner = styled(SpinnerComponent);

function _extends$E() { _extends$E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$E.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$J = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * The `TabBar` component that manages `Tab` components.
 *
 * @extends React.Component
 *
 * @property {number} selectedIndex - Determines current tab index.
 *
 * @property {StyleProp<ViewStyle>} indicatorStyle - Determines style of selected tab indicator.
 *
 * @property {(index: number) => void} onSelect - Fires on tab select with corresponding index.
 *
 * @property {React.ReactElement<TabProps>} children - Determines tabs.
 *
 * @property ViewProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { TabBar, Tab } from '../..';
 *
 * export class TabBarShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: 0,
 *   };
 *
 *   onBarSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <TabBar
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onBarSelect}>
 *         <Tab title='Tab 1'/>
 *         <Tab title='Tab 2'/>
 *         <Tab title='Tab 3'/>
 *       </TabBar>
 *     );
 *   }
 * }
 * ```
 */

class TabBarComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.tabIndicatorRef = React.createRef();

    this.onTabSelect = index => {
      if (this.props.onSelect) {
        this.props.onSelect(index);
      }
    };

    this.getComponentStyle = source => {
      const {
        indicatorHeight,
        indicatorBorderRadius,
        indicatorBackgroundColor
      } = source,
            containerParameters = __rest$J(source, ["indicatorHeight", "indicatorBorderRadius", "indicatorBackgroundColor"]);

      return {
        container: containerParameters,
        item: {},
        indicator: {
          height: indicatorHeight,
          borderRadius: indicatorBorderRadius,
          backgroundColor: indicatorBackgroundColor
        }
      };
    };

    this.isTabSelected = index => {
      const {
        selectedIndex
      } = this.props;
      return index === selectedIndex;
    };

    this.renderTabElement = (element, index) => {
      return React.cloneElement(element, {
        key: index,
        style: [styles$x.item, element.props.style],
        selected: this.isTabSelected(index),
        onSelect: () => this.onTabSelect(index)
      });
    };

    this.renderTabElements = source => {
      return React.Children.map(source, this.renderTabElement);
    };
  }

  scrollToIndex(params) {
    const {
      current: tabIndicator
    } = this.tabIndicatorRef;
    tabIndicator.scrollToIndex(params);
  }

  scrollToOffset(params) {
    const {
      current: tabIndicator
    } = this.tabIndicatorRef;
    tabIndicator.scrollToOffset(params);
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      indicatorStyle,
      selectedIndex,
      children
    } = _a,
          derivedProps = __rest$J(_a, ["themedStyle", "style", "indicatorStyle", "selectedIndex", "children"]);

    const componentStyle = this.getComponentStyle(themedStyle);
    const tabElements = this.renderTabElements(children);
    return React.createElement(React.Fragment, null, React.createElement(reactNative.View, _extends$E({}, derivedProps, {
      style: [componentStyle.container, styles$x.container, style]
    }), tabElements), React.createElement(TabIndicator, {
      ref: this.tabIndicatorRef,
      style: [componentStyle.indicator, styles$x.indicator, indicatorStyle],
      selectedPosition: selectedIndex,
      positions: tabElements.length
    }));
  }

}
TabBarComponent.styledComponentName = 'TabBar';
TabBarComponent.defaultProps = {
  selectedIndex: 0
};
const styles$x = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  item: {
    flex: 1
  },
  indicator: {}
});
const TabBar = styled(TabBarComponent);

function _extends$F() { _extends$F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$F.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$K = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

class TabViewChildren {
  constructor() {
    this.tabs = [];
    this.content = [];
  }

}
/**
 * `TabView` is a dynamic tabset component. Allows flipping through the tab "pages".
 *
 * @extends React.Component
 **
 * @property {number} selectedIndex - Determines current tab index.
 *
 * @property {StyleProp<ViewStyle>} tabBarStyle - Determines style TabBar component.
 *
 * @property {StyleProp<ViewStyle>} indicatorStyle - Determines style of selected tab indicator.
 *
 * @property {(index: number) => void} onSelect - Fires on "page" select with corresponding index.
 *
 * @property {TabElement | TabElement[]} children - Determines children of the component.
 *
 * @property {(index: number) => boolean} shouldLoadComponent - Determines loading behavior particular page and can be
 * used for lazy loading.
 *
 * @property {(offset: number) => void} onOffsetChange - Fires on scroll event with current scroll offset.
 *
 * @property ViewProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { TabView, Tab, Text } from '../..';
 *
 * export class TabViewShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: 0,
 *   };
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   render() {
 *     return (
 *       <TabView
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onSelect}>
 *         <Tab title='DASHBOARD'>
 *           <Text>DASHBOARD</Text>
 *         </Tab>
 *         <Tab title='SETTINGS'>
 *           <Text>SETTINGS</Text>
 *         </Tab>
 *       </TabView>
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example Lazy Loading
 *
 * ```
 * import React from 'react';
 * import { TabView, Tab, Text } from '../..';
 *
 * export class TabViewShowcase extends React.Component {
 *
 *   state = {
 *     selectedIndex: 0,
 *   };
 *
 *   onSelect = (selectedIndex) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   shouldLoadTabContent = (index) => {
 *     return index === this.state.selectedIndex;
 *   };
 *
 *   render() {
 *     return (
 *       <TabView
 *         selectedIndex={this.state.selectedIndex}
 *         shouldLoadComponent={this.shouldLoadTabContent}
 *         onSelect={this.onSelect}>
 *         <Tab title='DASHBOARD'>
 *           <Text>DASHBOARD</Text>
 *         </Tab>
 *         <Tab title='SETTINGS'>
 *           <Text>SETTINGS</Text>
 *         </Tab>
 *       </TabView>
 *     );
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { TabView, Tab, Text } from '../..';
 *
 * export const TabViewShowcase = (props) => (
 *   <TabView
 *     style={styles.tabView}
 *     tabBarStyle={styles.tabBar}
 *     indicatorStyle={styles.tabViewIndicator}>
 *     <Tab title='DASHBOARD'>
 *       <Text>DASHBOARD</Text>
 *     </Tab>
 *     <Tab title='SETTINGS'>
 *       <Text>SETTINGS</Text>
 *     </Tab>
 *   </TabView>
 * );
 *
 * const styles = StyleSheet.create({
 *   tabView: { backgroundColor: 'white' },
 *   tabBar: { backgroundColor: 'gray' },
 *   tabViewIndicator: { backgroundColor: 'blue' },
 * });
 * ```
 */


class TabView extends React.Component {
  constructor() {
    super(...arguments);
    this.viewPagerRef = React.createRef();
    this.tabBarRef = React.createRef();

    this.onBarSelect = index => {
      const {
        current: viewPager
      } = this.viewPagerRef;
      viewPager.scrollToIndex({
        index,
        animated: true
      });
    };

    this.onPagerOffsetChange = offset => {
      const {
        current: tabBar
      } = this.tabBarRef;
      const tabCount = React.Children.count(tabBar.props.children);
      tabBar.scrollToOffset({
        offset: offset / tabCount
      });
    };

    this.onPagerSelect = selectedIndex => {
      if (this.props.onSelect) {
        this.props.onSelect(selectedIndex);
      }
    };

    this.renderComponentChild = (element, index) => {
      return {
        tab: React.cloneElement(element, {
          key: index
        }),
        content: element.props.children
      };
    };

    this.renderComponentChildren = source => {
      return React.Children.toArray(source).reduce((acc, element, index) => {
        const {
          tab,
          content
        } = this.renderComponentChild(element, index);
        return {
          tabs: [...acc.tabs, tab],
          content: [...acc.content, content]
        };
      }, new TabViewChildren());
    };
  }

  render() {
    const _a = this.props,
          {
      style,
      selectedIndex,
      children,
      tabBarStyle,
      indicatorStyle
    } = _a,
          derivedProps = __rest$K(_a, ["style", "selectedIndex", "children", "tabBarStyle", "indicatorStyle"]);

    const {
      tabs,
      content
    } = this.renderComponentChildren(children);
    return React.createElement(React.Fragment, null, React.createElement(TabBar, {
      style: tabBarStyle,
      ref: this.tabBarRef,
      selectedIndex: selectedIndex,
      indicatorStyle: indicatorStyle,
      onSelect: this.onBarSelect
    }, tabs), React.createElement(ViewPager, _extends$F({
      ref: this.viewPagerRef
    }, derivedProps, {
      style: [styles$y.container, style],
      selectedIndex: selectedIndex,
      shouldLoadComponent: this.props.shouldLoadComponent,
      onOffsetChange: this.onPagerOffsetChange,
      onSelect: this.onPagerSelect
    }), content));
  }

}
TabView.defaultProps = {
  selectedIndex: 0
};
const styles$y = reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  }
});

function _extends$G() { _extends$G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$G.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$L = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `Tab` component is a part of `TabBar` or `TabView` component.
 * `TabView` Tabs should be wrapped in `TabBar` or `TabView` to provide usable component.
 * See usage examples at `TabView` component documentation.
 *
 * @extends React.Component
 *
 * @property {string} title - Determines the title of the component.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Determines style of the title.
 *
 * @property {React.ReactElement<any>} children - Determines content of the tab.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} icon - Determines icon of the component.
 *
 * @property {boolean} selected - Determines tab selection state.
 *
 * @property {(selected: boolean) => void} onSelect = Fires on onSelect event.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Tab } from '../..';
 *
 * export const DashboardTab = (props) => (
 *   <Tab title='DASHBOARD' />
 * );
 * ```
 *
 * @overview-example With Icon
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { Tab, Icon } from '../..';
 *
 * const DashboardIcon = (style) => (
 *   <Icon {...style} name='layout' />
 * );
 *
 * export const DashboardTab = (props) => (
 *   <Tab title='DASHBOARD' icon={DashboardIcon} />
 * );
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { Tab } from '../..';
 *
 * const DashboardIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export const DashboardTab = (props) => (
 *   <Tab title='DASHBOARD' icon={DashboardIcon} />
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Tab } from '../..';
 *
 * export const TabShowcase = (props) => (
 *   <Tab
 *     style={styles.tab}
 *     titleStyle={styles.tabTitle}
 *     title='DASHBOARD'
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   tab: { backgroundColor: 'white' },
 *   tabTitle: { color: 'black' },
 * });
 * ```
 */

class TabComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = () => {
      if (this.props.onSelect) {
        this.props.onSelect(!this.props.selected);
      }
    };

    this.getComponentStyle = source => {
      const {
        textMarginVertical,
        textFontFamily,
        textFontSize,
        textLineHeight,
        textFontWeight,
        textColor,
        iconWidth,
        iconHeight,
        iconMarginVertical,
        iconTintColor
      } = source,
            containerParameters = __rest$L(source, ["textMarginVertical", "textFontFamily", "textFontSize", "textLineHeight", "textFontWeight", "textColor", "iconWidth", "iconHeight", "iconMarginVertical", "iconTintColor"]);

      return {
        container: containerParameters,
        icon: {
          width: iconWidth,
          height: iconHeight,
          marginVertical: iconMarginVertical,
          tintColor: iconTintColor
        },
        title: {
          marginVertical: textMarginVertical,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          fontWeight: textFontWeight,
          color: textColor
        }
      };
    };

    this.renderTitleElement = style => {
      const {
        title,
        titleStyle
      } = this.props;
      return React.createElement(Text, {
        key: 1,
        style: [style, styles$z.title, titleStyle]
      }, title);
    };

    this.renderIconElement = style => {
      const iconElement = this.props.icon(style);
      return React.cloneElement(iconElement, {
        key: 2,
        style: [style, styles$z.icon, iconElement.props.style]
      });
    };

    this.renderComponentChildren = style => {
      const {
        title,
        icon
      } = this.props;
      return [icon && this.renderIconElement(style.icon), isValidString(title) && this.renderTitleElement(style.title)];
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style
    } = _a,
          derivedProps = __rest$L(_a, ["themedStyle", "style"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container
    } = _b,
          componentStyles = __rest$L(_b, ["container"]);

    const [iconElement, titleElement] = this.renderComponentChildren(componentStyles);
    return React.createElement(reactNative.TouchableOpacity, _extends$G({
      activeOpacity: 1.0
    }, derivedProps, {
      style: [container, styles$z.container, style],
      onPress: this.onPress
    }), iconElement, titleElement);
  }

}
TabComponent.styledComponentName = 'Tab';
TabComponent.defaultProps = {
  selected: false
};
const styles$z = reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {},
  title: {}
});
const Tab = styled(TabComponent);

function _extends$H() { _extends$H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$H.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$M = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Styled `Toggle` component.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Determines whether component is checked.
 * Default is `false`.
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning`, `danger`, `basic` or `control`.
 * Default is `basic`.
 *
 * @property {string} size - Determines the size of the component.
 * Can be `giant`, `large`, `medium`, `small`, or `tiny`.
 * Default is `medium`.
 *
 * @property {string} text - Determines text of the component.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes text style.
 *
 * @property {(checked: boolean) => void} onChange - Fires when selection state is changed.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Toggle } from '../..';
 *
 * export class ToggleShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <Toggle
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With Text
 *
 * ```
 * import React from 'react';
 * import { Toggle } from '../..';
 *
 * export class ToggleShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <Toggle
 *         text='Place your text'
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     )
 *   }
 * }
 * ```
 *
 * @overview-example Eva Styling
 *
 * ```
 * import React from 'react';
 * import { Toggle } from '../..';
 *
 * export class ToggleShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <Toggle
 *         size='small'
 *         status='info'
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Toggle } from '../..';
 *
 * export class ToggleShowcase extends React.Component {
 *
 *   state = {
 *     checked: false,
 *   };
 *
 *   onChange = (checked) => {
 *     this.setState({ checked });
 *   };
 *
 *   render() {
 *     return (
 *       <Toggle
 *         textStyle={styles.toggleText}
 *         text='Place your Text'
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   toggleText: { color: 'black' },
 * });
 * ```
 */

class ToggleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onStartShouldSetPanResponder = () => {
      return true;
    };

    this.onStartShouldSetPanResponderCapture = () => {
      return true;
    };

    this.onMoveShouldSetPanResponder = () => {
      return true;
    };

    this.onMoveShouldSetPanResponderCapture = () => {
      return true;
    };

    this.onPanResponderTerminationRequest = () => {
      return false;
    };

    this.onPanResponderGrant = () => {
      const {
        checked,
        disabled,
        themedStyle
      } = this.props;

      if (disabled) {
        return;
      }

      this.onPressIn();

      if (this.thumbTranslateAnimationActive) {
        this.thumbTranslateAnimationActive = false;
        this.stopAnimations();
        return;
      }

      this.animateThumbWidth(themedStyle.thumbWidth * 1.2);
      this.animateEllipseScale(checked ? 1 : 0.01);
    };

    this.onPanResponderMove = () => {
      return true;
    };

    this.onPanResponderRelease = (e, gestureState) => {
      const {
        checked,
        disabled,
        themedStyle
      } = this.props;

      if (!disabled) {
        if (!checked && gestureState.dx > -5 || checked && gestureState.dx < 5) {
          this.toggle(this.onPress);
        } else {
          this.animateEllipseScale(checked ? 0.01 : 1);
        }
      }

      this.animateThumbWidth(themedStyle.thumbWidth);
      this.onPressOut();
    };

    this.onPressIn = () => {
      this.props.dispatch([exports.Interaction.ACTIVE]);
    };

    this.onPressOut = () => {
      this.props.dispatch([]);
    };

    this.onPress = () => {
      if (this.props.onChange) {
        this.props.onChange(!this.props.checked);
      }
    };

    this.getComponentStyle = source => {
      const {
        style,
        checked,
        disabled
      } = this.props;

      const {
        outlineWidth,
        outlineHeight,
        outlineBorderRadius,
        outlineBackgroundColor,
        thumbWidth,
        thumbHeight,
        thumbBorderRadius,
        thumbBackgroundColor,
        textMarginHorizontal,
        textFontSize,
        textFontWeight,
        textLineHeight,
        textFontFamily,
        textColor,
        iconWidth,
        iconHeight,
        iconTintColor,
        offsetValue,
        backgroundColor,
        borderColor
      } = source,
            containerParameters = __rest$M(source, ["outlineWidth", "outlineHeight", "outlineBorderRadius", "outlineBackgroundColor", "thumbWidth", "thumbHeight", "thumbBorderRadius", "thumbBackgroundColor", "textMarginHorizontal", "textFontSize", "textFontWeight", "textLineHeight", "textFontFamily", "textColor", "iconWidth", "iconHeight", "iconTintColor", "offsetValue", "backgroundColor", "borderColor"]);

      const interpolatedBackgroundColor = this.getInterpolatedColor(backgroundColor, borderColor);
      const thumbScale = this.animateThumbScale(offsetValue);
      return {
        toggleContainer: {},
        ellipseContainer: Object.assign({
          borderColor: borderColor,
          backgroundColor: interpolatedBackgroundColor
        }, containerParameters),
        highlight: {
          width: outlineWidth,
          height: outlineHeight,
          borderRadius: outlineBorderRadius,
          backgroundColor: outlineBackgroundColor
        },
        ellipse: {
          width: containerParameters.width - containerParameters.borderWidth * 2,
          height: containerParameters.height - containerParameters.borderWidth * 2,
          borderRadius: (source.height - source.borderWidth * 2) / 2,
          backgroundColor: interpolatedBackgroundColor,
          transform: [{
            scale: checked ? thumbScale : this.ellipseScaleAnimation
          }]
        },
        thumb: {
          alignSelf: checked ? 'flex-end' : 'flex-start',
          width: this.thumbWidthAnimation,
          height: thumbHeight,
          borderRadius: thumbBorderRadius,
          backgroundColor: thumbBackgroundColor,
          elevation: disabled ? 0 : 5,
          transform: [{
            translateX: this.thumbTranslateAnimation
          }]
        },
        text: {
          marginHorizontal: textMarginHorizontal,
          fontSize: textFontSize,
          fontWeight: textFontWeight,
          lineHeight: textLineHeight,
          fontFamily: textFontFamily,
          color: textColor
        },
        icon: {
          width: source.iconWidth,
          height: source.iconHeight,
          backgroundColor: iconTintColor
        }
      };
    };

    this.animateThumbTranslate = (value, callback = () => null) => {
      this.thumbTranslateAnimationActive = true;
      reactNative.Animated.timing(this.thumbTranslateAnimation, {
        toValue: I18nLayoutService.select(value, -value),
        duration: 150,
        easing: reactNative.Easing.linear
      }).start(() => {
        this.thumbTranslateAnimationActive = false;
        callback();
      });
    };

    this.animateThumbWidth = (value, callback = () => null) => {
      reactNative.Animated.timing(this.thumbWidthAnimation, {
        toValue: value,
        duration: 150,
        easing: reactNative.Easing.linear
      }).start(callback);
    };

    this.animateEllipseScale = (value, callback = () => null) => {
      reactNative.Animated.timing(this.ellipseScaleAnimation, {
        toValue: value,
        duration: 200,
        easing: reactNative.Easing.linear
      }).start(callback);
    };

    this.animateThumbScale = value => {
      return this.thumbTranslateAnimation.interpolate({
        inputRange: [-value, 0],
        outputRange: [1, 0.01]
      });
    };

    this.stopAnimations = () => {
      const value = this.props.checked ? 0.01 : 1;
      this.thumbTranslateAnimation.stopAnimation();
      this.ellipseScaleAnimation.stopAnimation();
      this.thumbWidthAnimation.stopAnimation();
      this.ellipseScaleAnimation.setValue(value);
    };

    this.toggle = (callback = nextValue => null) => {
      const {
        checked,
        themedStyle
      } = this.props;
      const value = checked ? -themedStyle.offsetValue : themedStyle.offsetValue;
      this.animateThumbTranslate(value, () => {
        this.thumbTranslateAnimation.setValue(0);
        callback(!checked);
      });
      this.animateThumbWidth(this.props.themedStyle.thumbWidth);
    };

    this.getInterpolatedColor = (startColor, endColor) => {
      const {
        checked,
        themedStyle
      } = this.props;
      return this.thumbTranslateAnimation.interpolate({
        inputRange: checked ? [-themedStyle.offsetValue, 0] : [0, themedStyle.offsetValue],
        outputRange: [startColor, endColor]
      });
    };

    this.renderTextElement = style => {
      return React.createElement(Text, {
        style: [style, this.props.textStyle]
      }, this.props.text);
    };

    this.renderComponentChildren = style => {
      return [this.props.text && this.renderTextElement(style.text)];
    };

    const {
      checked,
      themedStyle
    } = props;
    this.thumbWidthAnimation = new reactNative.Animated.Value(themedStyle.thumbWidth);
    this.thumbTranslateAnimation = new reactNative.Animated.Value(0);
    this.ellipseScaleAnimation = new reactNative.Animated.Value(checked ? 0.01 : 1.0);
    this.thumbTranslateAnimationActive = false;
    this.panResponder = reactNative.PanResponder.create(this);
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      disabled,
      checked
    } = _a,
          restProps = __rest$M(_a, ["themedStyle", "style", "disabled", "checked"]);

    const componentStyle = this.getComponentStyle(themedStyle);
    const [textElement] = this.renderComponentChildren(componentStyle);
    return React.createElement(reactNative.View, _extends$H({}, restProps, this.panResponder.panHandlers, {
      style: [styles$A.container, style]
    }), React.createElement(reactNative.View, {
      style: [componentStyle.toggleContainer, styles$A.toggleContainer]
    }, React.createElement(reactNative.View, {
      style: [componentStyle.highlight, styles$A.highlight]
    }), React.createElement(reactNative.Animated.View, {
      style: [componentStyle.ellipseContainer, styles$A.ellipseContainer]
    }, React.createElement(reactNative.Animated.View, {
      style: [componentStyle.ellipse, styles$A.ellipse]
    }), React.createElement(reactNative.Animated.View, {
      style: [componentStyle.thumb, styles$A.thumb]
    }, React.createElement(CheckMark, {
      style: componentStyle.icon,
      isAnimated: true
    })))), textElement);
  }

}
ToggleComponent.styledComponentName = 'Toggle';
const styles$A = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  ellipseContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden'
  },
  ellipse: {
    alignSelf: 'center',
    position: 'absolute'
  },
  highlight: {
    alignSelf: 'center',
    position: 'absolute'
  },
  thumb: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const Toggle = styled(ToggleComponent);

function _extends$I() { _extends$I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$I.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$N = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `Tooltip` displays informative text when users focus on or tap an element.
 *
 * @extends React.Component
 *
 * @property {string} text - Determines the text of the tooltip
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes text style.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} icon - Determines icon of the component.
 *
 * @property {React.ReactElement<any>} children - Determines the element "above" which popover will be shown.
 *
 * @property {boolean} visible - Determines whether popover is visible or not.
 *
 * @property {string | PopoverPlacement} placement - Determines the placement of the popover.
 * Can be `left`, `top`, `right`, `bottom`, `left start`, `left end`, `top start`, `top end`, `right start`,
 * `right end`, `bottom start` or `bottom end`.
 * Default is `bottom`.
 *
 * @property {number} indicatorOffset - Determines the offset of indicator (arrow).
 * @property {StyleProp<ViewStyle>} indicatorStyle - Determines style of indicator (arrow).
 *
 * @property ViewProps
 *
 * @property ModalPresentingBased
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Tooltip, Button } from '../..';
 *
 * export class TooltipShowcase extends React.Component {
 *
 *   state = {
 *     tooltipVisible: false,
 *   };
 *
 *   toggleTooltip = () => {
 *     const tooltipVisible = !this.state.tooltipVisible;
 *     this.setState({ tooltipVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <Tooltip
 *         visible={this.state.tooltipVisible}
 *         text='Tooltip Text'
 *         onBackdropPress={this.toggleTooltip}>
 *         <Button onPress={this.toggleTooltip}>TOGGLE TOOLTIP</Button>
 *       </Tooltip>
 *     );
 *   }
 * }
 * ```
 *
 * @overview-example With Icon
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { Tooltip, Button, Icon } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Icon {...style} name='star' />
 * );
 *
 * export class TooltipShowcase extends React.Component {
 *
 *   state = {
 *     tooltipVisible: false,
 *   };
 *
 *   toggleTooltip = () => {
 *     const tooltipVisible = !this.state.tooltipVisible;
 *     this.setState({ tooltipVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <Tooltip
 *         visible={this.state.tooltipVisible}
 *         text='Tooltip Text'
 *         icon={StarIcon}
 *         onBackdropPress={this.toggleTooltip}>
 *         <Button onPress={this.toggleTooltip}> TOGGLE TOOLTIP</Button>
 *       </Tooltip>
 *     );
 *   }
 * }
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from 'react-native';
 * import { Tooltip, Button } from '../..';
 *
 * const StarIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export class TooltipShowcase extends React.Component {
 *
 *   state = {
 *     tooltipVisible: false,
 *   };
 *
 *   toggleTooltip = () => {
 *     const tooltipVisible = !this.state.tooltipVisible;
 *     this.setState({ tooltipVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <Tooltip
 *         visible={this.state.tooltipVisible}
 *         text='Tooltip Text'
 *         icon={StarIcon}
 *         onBackdropPress={this.toggleTooltip}>
 *         <Button onPress={this.toggleTooltip}>TOGGLE TOOLTIP</Button>
 *       </Tooltip>
 *     );
 *   }
 * }
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Tooltip, Button } from '../..';
 *
 * export class TooltipShowcase extends React.Component {
 *
 *   state = {
 *     tooltipVisible: false,
 *   };
 *
 *   toggleTooltip = () => {
 *     const tooltipVisible = !this.state.tooltipVisible;
 *     this.setState({ tooltipVisible });
 *   };
 *
 *   render() {
 *     return (
 *       <Tooltip
 *         visible={this.state.tooltipVisible}
 *         text='Tooltip Text'
 *         textStyle={styles.tooltipText}
 *         onBackdropPress={this.toggleTooltip}>
 *         <Button onPress={this.toggleTooltip}>TOGGLE TOOLTIP</Button>
 *       </Tooltip>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   tooltipText: { color: 'white', fontSize: 18 },
 * });
 * ```
 */

class TooltipComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.getComponentStyle = source => {
      const {
        indicatorBackgroundColor,
        iconWidth,
        iconHeight,
        iconMarginHorizontal,
        iconTintColor,
        textMarginHorizontal,
        textFontSize,
        textFontFamily,
        textLineHeight,
        textColor
      } = source,
            containerParameters = __rest$N(source, ["indicatorBackgroundColor", "iconWidth", "iconHeight", "iconMarginHorizontal", "iconTintColor", "textMarginHorizontal", "textFontSize", "textFontFamily", "textLineHeight", "textColor"]);

      return {
        container: containerParameters,
        content: {},
        indicator: {
          backgroundColor: indicatorBackgroundColor
        },
        icon: {
          width: iconWidth,
          height: iconHeight,
          marginHorizontal: iconMarginHorizontal,
          tintColor: iconTintColor
        },
        text: {
          marginHorizontal: textMarginHorizontal,
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          color: textColor
        }
      };
    };

    this.renderTextElement = style => {
      const {
        text,
        textStyle
      } = this.props;
      return React.createElement(Text, {
        key: 1,
        style: [style, styles$B.text, textStyle]
      }, text);
    };

    this.renderIconElement = style => {
      const iconElement = this.props.icon(style);
      return React.cloneElement(iconElement, {
        key: 0,
        style: [style, styles$B.icon, iconElement.props.style]
      });
    };

    this.renderContentElementChildren = style => {
      const {
        icon
      } = this.props;
      return [icon && this.renderIconElement(style.icon), this.renderTextElement(style.text)];
    };

    this.renderPopoverContentElement = style => {
      const {
        content
      } = style,
            childrenStyle = __rest$N(style, ["content"]);

      const contentChildren = this.renderContentElementChildren(childrenStyle);
      return React.createElement(reactNative.View, {
        style: [content, styles$B.content]
      }, contentChildren);
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      indicatorStyle,
      children
    } = _a,
          derivedProps = __rest$N(_a, ["themedStyle", "style", "indicatorStyle", "children"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container,
      indicator
    } = _b,
          componentStyle = __rest$N(_b, ["container", "indicator"]);

    const contentElement = this.renderPopoverContentElement(componentStyle);
    return React.createElement(Popover, _extends$I({}, derivedProps, {
      style: [container, styles$B.container, style],
      indicatorStyle: [indicator, indicatorStyle],
      content: contentElement
    }), children);
  }

}
TooltipComponent.styledComponentName = 'Tooltip';
TooltipComponent.defaultProps = {
  indicatorOffset: 8
};
const styles$B = reactNative.StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row'
  },
  indicator: {},
  icon: {},
  text: {
    alignSelf: 'center'
  }
});
const Tooltip = styled(TooltipComponent);

function _extends$J() { _extends$J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$J.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$O = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * `TopNavigation` component is designed to be a Navigation Bar.
 * Can be used for navigation.
 *
 * @extends React.Component
 *
 * @property {string} title - Determines the title of the component.
 *
 * @property {string} subtitle - Determines the subtitle of the component.
 *
 * @property {string} alignment - Determines the alignment of the component.
 * Can be `center` or `start`.
 *
 * @property {React.ReactElement<TopNavigationActionProps>} leftControl - Determines the left control
 * of the component.
 *
 * @property {React.ReactElement<TopNavigationActionProps>[]} rightControls - Determines the right controls
 * of the component.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes text style of title.
 *
 * @property {StyleProp<TextStyle>} subtitleStyle - Customizes text style of subtitle.
 *
 * @property ViewProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { TopNavigation } from '../..';
 *
 * export const AwesomeAppHeader = (props) => (
 *   <TopNavigation title='Awesome App' />
 * );
 * ```
 *
 * @overview-example Actions
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { TopNavigation, TopNavigationAction, Icon } from '../..';
 *
 * const BackIcon = (style) => (
 *   <Icon {...style} name='arrow-back' />
 * );
 *
 * const EditIcon = (style) => (
 *   <Icon {...style} name='edit' />
 * );
 *
 * const MenuIcon = (style) => (
 *   <Icon {...style} name='more-vertical' />
 * );
 *
 * const BackAction = (props) => (
 *   <TopNavigationAction {...props} icon={BackIcon} />
 * );
 *
 * const EditAction = (props) => (
 *   <TopNavigationAction {...props} icon={EditIcon} />
 * );
 *
 * const MenuAction = (props) => (
 *   <TopNavigationAction {...props} icon={MenuIcon} />
 * );
 *
 * export const AwesomeAppHeader = (props) => {
 *
 *   const onBackPress = () => {};
 *
 *   const renderLeftControl = () => (
 *     <BackAction onPress={onBackPress} />
 *   );
 *
 *   const renderRightControls = () => [
 *     <EditAction />,
 *     <MenuAction />,
 *   ];
 *
 *   return (
 *     <TopNavigation
 *       title='Awesome App'
 *       leftControl={renderLeftControl()}
 *       rightControls={renderRightControls()}
 *     />
 *   );
 * };
 * ```
 *
 * @example With Menu
 *
 * ```
 * import React from 'react';
 * import { OverflowMenu, TopNavigation, TopNavigationAction, Icon } from '../..';
 *
 * const BackIcon = (style) => (
 *   <Icon {...style} name='arrow-back'/>
 * );
 *
 * const MenuIcon = (style) => (
 *   <Icon {...style} name='more-vertical'/>
 * );
 *
 * export class TopNavigationWithMenu extends React.Component {
 *
 *   state = {
 *     menuVisible: false,
 *   };
 *
 *   toggleMenu = () => {
 *     const menuVisible = !this.state.menuVisible;
 *     this.setState({ menuVisible });
 *   };
 *
 *   onMenuItemSelect = (index) => {
 *     this.toggleMenu();
 *     this.props.onMenuItemSelect && this.props.onMenuItemSelect(index);
 *   };
 *
 *   renderMenuAction = () => (
 *     <OverflowMenu
 *       visible={this.state.menuVisible}
 *       data={this.props.menu}
 *       onSelect={this.onMenuItemSelect}
 *       onBackdropPress={this.toggleMenu}>
 *       <TopNavigationAction icon={MenuIcon} onPress={this.toggleMenu} />
 *     </OverflowMenu>
 *   );
 *
 *   renderBackAction = () => (
 *     <TopNavigationAction icon={BackIcon} onPress={this.props.onBackPress} />
 *   );
 *
 *   render() {
 *     const { menu, onBackPress, ...restProps } = this.props;
 *     return (
 *       <TopNavigation
 *         leftControl={onBackPress && this.renderBackAction()}
 *         rightControls={menu && this.renderMenuAction()}
 *         {...restProps}
 *       />
 *     );
 *   }
 * }
 *
 * // USAGE:
 *
 * const InfoIcon = (style) => (
 *   <Icon {...style} name='info'/>
 * );
 *
 * const LogoutIcon = (style) => (
 *   <Icon {...style} name='log-out'/>
 * );
 *
 * const navigationMenu = [
 *   { title: 'About', icon: InfoIcon },
 *   { title: 'Logout', icon: LogoutIcon },
 * ];
 *
 * export const HomeScreen = () => {
 *
 *   const onMenuItemSelect = () => {};
 *
 *   const onBackPress = () => {};
 *
 *   return (
 *     <TopNavigationWithMenu
 *       menu={navigationMenu}
 *       onMenuItemSelect={onMenuItemSelect}
 *       onBackPress={onBackPress}
 *     />
 *   );
 * };
 * ```
 *
 * @example Centered Title
 *
 * ```
 * import React from 'react';
 * import { TopNavigation } from '../..';
 *
 * export const AwesomeAppHeader = (props) => (
 *   <TopNavigation alignment='center' title='Awesome App' />
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { TopNavigation } from '../..';
 *
 * export const AwesomeAppHeader = (props) => (
 *   <TopNavigation
 *     style={styles.header}
 *     title='Awesome App'
 *     subtitle='Subtitle'
 *     titleStyle={styles.headerTitle}
 *     subtitleStyle={styles.headerSubtitle}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   header: { backgroundColor: 'black' },
 *   headerTitle: { color: 'white' },
 *   headerSubtitle: { color: 'gray' },
 * });
 * ```
 */

class TopNavigationComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.getAlignmentDependentStyles = alignment => {
      if (alignment === 'center') {
        return {
          container: styles$C.containerCentered,
          titleContainer: styles$C.titleContainerCentered
        };
      }

      return {
        rightControlsContainer: styles$C.rightControlsContainerStart
      };
    };

    this.getComponentStyle = source => {
      const {
        titleTextAlign,
        titleFontFamily,
        titleFontSize,
        titleLineHeight,
        titleFontWeight,
        titleColor,
        subtitleTextAlign,
        subtitleFontFamily,
        subtitleFontSize,
        subtitleLineHeight,
        subtitleFontWeight,
        subtitleColor
      } = source,
            containerParameters = __rest$O(source, ["titleTextAlign", "titleFontFamily", "titleFontSize", "titleLineHeight", "titleFontWeight", "titleColor", "subtitleTextAlign", "subtitleFontFamily", "subtitleFontSize", "subtitleLineHeight", "subtitleFontWeight", "subtitleColor"]);

      return {
        container: containerParameters,
        titleContainer: {},
        title: {
          textAlign: titleTextAlign,
          fontFamily: titleFontFamily,
          fontSize: titleFontSize,
          lineHeight: titleLineHeight,
          fontWeight: titleFontWeight,
          color: titleColor
        },
        subtitle: {
          textAlign: subtitleTextAlign,
          fontFamily: subtitleFontFamily,
          fontSize: subtitleFontSize,
          color: subtitleColor,
          fontWeight: subtitleFontWeight,
          lineHeight: subtitleLineHeight
        },
        leftControlContainer: {},
        rightControlsContainer: {}
      };
    };

    this.renderTextElement = (text, style) => {
      return React.createElement(Text, {
        style: style
      }, text);
    };

    this.renderComponentChildren = style => {
      const {
        title,
        subtitle,
        leftControl,
        rightControls,
        titleStyle,
        subtitleStyle
      } = this.props;
      return [isValidString(title) && this.renderTextElement(title, [style.title, styles$C.title, titleStyle]), isValidString(subtitle) && this.renderTextElement(subtitle, [style.subtitle, styles$C.subtitle, subtitleStyle]), leftControl && this.renderActionElements(leftControl), rightControls && this.renderActionElements(rightControls)];
    };
  }

  renderActionElements(source) {
    return React.Children.map(source, (element, index) => {
      return React.cloneElement(element, {
        key: index,
        appearance: this.props.appearance
      });
    });
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      alignment
    } = _a,
          restProps = __rest$O(_a, ["themedStyle", "style", "alignment"]);

    const _b = this.getComponentStyle(themedStyle),
          {
      container,
      leftControlContainer,
      titleContainer,
      rightControlsContainer
    } = _b,
          componentStyles = __rest$O(_b, ["container", "leftControlContainer", "titleContainer", "rightControlsContainer"]);

    const alignmentStyles = this.getAlignmentDependentStyles(alignment);
    const [titleElement, subtitleElement, leftControlElement, rightControlElements] = this.renderComponentChildren(componentStyles);
    return React.createElement(reactNative.View, _extends$J({
      style: [container, styles$C.container, alignmentStyles.container, style]
    }, restProps), React.createElement(reactNative.View, {
      style: [leftControlContainer, styles$C.leftControlContainer]
    }, leftControlElement), React.createElement(reactNative.View, {
      style: [titleContainer, styles$C.titleContainer, alignmentStyles.titleContainer]
    }, titleElement, subtitleElement), React.createElement(reactNative.View, {
      style: [rightControlsContainer, styles$C.rightControlsContainer, alignmentStyles.rightControlsContainer]
    }, rightControlElements));
  }

}
TopNavigationComponent.styledComponentName = 'TopNavigation';
const styles$C = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerCentered: {
    justifyContent: 'space-between'
  },
  titleContainer: {},
  titleContainerCentered: Object.assign(Object.assign({}, reactNative.StyleSheet.absoluteFillObject), {
    justifyContent: 'center',
    alignItems: 'center'
  }),
  title: {},
  subtitle: {},
  leftControlContainer: {
    flexDirection: 'row',
    zIndex: 1
  },
  rightControlsContainer: {
    flexDirection: 'row',
    zIndex: 1
  },
  rightControlsContainerStart: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
const TopNavigation = styled(TopNavigationComponent);

function _extends$K() { _extends$K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$K.apply(this, arguments); }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __rest$P = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * The `TopNavigationAction` component is a part of the `TopNavigation` component.
 * `TopNavigationActions` should be used in `TopNavigation` to provide usable component.
 * See usage examples at `TopNavigation` component documentation.
 *
 * @extends React.Component
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} icon - Determines the icon of the tab.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * // IMPORTANT: To use Icon component make sure to follow this guide:
 * // https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 *
 * import React from 'react';
 * import { TopNavigationAction, Icon } from '../..';
 *
 * const BackIcon = (style) => (
 *   <Icon {...style} name='arrow-back' } />
 * );
 *
 * export const BackAction = (props) => (
 *   <TopNavigationAction {...props} icon={BackIcon} />
 * );
 * ```
 *
 * @example Using Asset Icons
 *
 * ```
 * import React from 'react';
 * import { Image } from '../..';
 * import { TopNavigationAction } from '../..';
 *
 * const BackIcon = (style) => (
 *   <Image style={style} source={require('path-to-assets/local-image.png')} />
 * );
 *
 * export const BackAction = (props) => (
 *   <TopNavigationAction {...props} icon={BackIcon} />
 * );
 * ```
 *
 * @example Inline Styling
 *
 * ```
 * import React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { TopNavigationAction } from '../..';
 *
 * export const BackAction = (props) => (
 *   <TopNavigationAction style={styles.action} />
 * );
 *
 * const styles = StyleSheet.create({
 *   action: { marginHorizontal: 4 },
 * });
 * ```
 */

class TopNavigationActionComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.onPress = event => {
      if (this.props.onPress) {
        this.props.onPress(event);
      }
    };

    this.onPressIn = event => {
      this.props.dispatch([exports.Interaction.ACTIVE]);

      if (this.props.onPressIn) {
        this.props.onPressIn(event);
      }
    };

    this.onPressOut = event => {
      this.props.dispatch([]);

      if (this.props.onPressOut) {
        this.props.onPressOut(event);
      }
    };

    this.getComponentStyle = source => {
      const {
        iconTintColor,
        iconWidth,
        iconHeight,
        iconMarginHorizontal
      } = source;
      return {
        container: {
          marginHorizontal: iconMarginHorizontal
        },
        icon: Object.assign({
          tintColor: iconTintColor,
          width: iconWidth,
          height: iconHeight
        }, styles$D.icon)
      };
    };

    this.createHitSlopInsets = iconStyle => {
      const flatStyle = reactNative.StyleSheet.flatten(iconStyle); // @ts-ignore: `width` is restricted to be a number

      const value = 40 - flatStyle.width;
      return {
        left: value,
        top: value,
        right: value,
        bottom: value
      };
    };

    this.renderIconElement = style => {
      return this.props.icon(style);
    };
  }

  render() {
    const _a = this.props,
          {
      themedStyle,
      style,
      icon
    } = _a,
          touchableProps = __rest$P(_a, ["themedStyle", "style", "icon"]);

    const componentStyle = this.getComponentStyle(themedStyle);
    const hitSlopInsets = this.createHitSlopInsets(componentStyle.icon);
    const iconElement = this.renderIconElement(componentStyle.icon);
    return React.createElement(reactNative.TouchableOpacity, _extends$K({
      activeOpacity: 1.0,
      hitSlop: hitSlopInsets
    }, touchableProps, {
      style: [componentStyle.container, styles$D.container, style],
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    }), iconElement);
  }

}

TopNavigationActionComponent.styledComponentName = 'TopNavigationAction';
const styles$D = reactNative.StyleSheet.create({
  container: {},
  icon: {}
});
const TopNavigationAction = styled(TopNavigationActionComponent);

function _extends$L() { _extends$L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$L.apply(this, arguments); }

var __rest$Q = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class EvaIcon {
  constructor(content) {
    this.content = content;
  }

  toReactElement(props) {
    const Icon = this.content; // @ts-ignore - Eva maps icon color to `tintColor`

    const {
      tintColor
    } = props,
          restProps = __rest$Q(props, ["tintColor"]);

    return React.createElement(Icon, _extends$L({
      fill: tintColor
    }, restProps));
  }

}

const createIconsMap = () => {
  return new Proxy({}, {
    get(target, name) {
      return new EvaIcon(icons.findIconByName(name));
    }

  });
};

const EvaIconsPack = {
  name: 'eva',
  icons: createIconsMap()
};

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	EvaIconsPack: EvaIconsPack
});

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const moment = _rollupMoment || _rollupMoment;
class MomentDateService extends DateService {
    constructor(locale = 'en') {
        super();
        this.setLocale(locale);
    }
    setLocale(locale) {
        super.setLocale(locale);
        this.setMomentLocaleData(locale);
    }
    addDay(date, days) {
        return this.clone(date).add({ days });
    }
    addMonth(date, months) {
        return this.clone(date).add({ months });
    }
    addYear(date, years) {
        return this.clone(date).add({ years });
    }
    clone(date) {
        return date.clone().locale(this.locale);
    }
    compareDates(date1, date2) {
        return this.getYear(date1) - this.getYear(date2) ||
            this.getMonth(date1) - this.getMonth(date2) ||
            this.getDate(date1) - this.getDate(date2);
    }
    createDate(year, month, date) {
        return moment.utc([year, month, date]);
    }
    format(date, format) {
        if (date) {
            return date.format(format || this.localeData.defaultFormat);
        }
        return '';
    }
    getDate(date) {
        return this.clone(date).date();
    }
    getDayOfWeek(date) {
        return this.clone(date).day();
    }
    getDayOfWeekNames(style = exports.TranslationWidth.SHORT) {
        return this.localeData.days[style];
    }
    getFirstDayOfWeek() {
        return this.localeData.firstDayOfWeek;
    }
    getMonth(date) {
        return this.clone(date).month();
    }
    getMonthEnd(date) {
        return this.clone(date).endOf('month');
    }
    getMonthName(date, style = exports.TranslationWidth.SHORT) {
        const month = this.getMonth(date);
        return this.getMonthNameByIndex(month, style);
    }
    getMonthNameByIndex(month, style = exports.TranslationWidth.SHORT) {
        return this.localeData.months[style][month];
    }
    getMonthStart(date) {
        return this.clone(date).startOf('month');
    }
    getNumberOfDaysInMonth(date) {
        return this.clone(date).daysInMonth();
    }
    getYear(date) {
        return this.clone(date).year();
    }
    getYearEnd(date) {
        return this.clone(date).endOf('year');
    }
    getYearStart(date) {
        return this.clone(date).startOf('year');
    }
    isSameDay(date1, date2) {
        return this.isSameMonth(date1, date2) && this.getDate(date1) === this.getDate(date2);
    }
    isSameMonth(date1, date2) {
        return this.isSameYear(date1, date2) && this.getMonth(date1) === this.getMonth(date2);
    }
    isSameYear(date1, date2) {
        return this.getYear(date1) === this.getYear(date2);
    }
    isValidDateString(date, format) {
        return moment(date, format).isValid();
    }
    parse(date, format) {
        return moment(date, format);
    }
    today() {
        return moment();
    }
    getId() {
        return 'moment';
    }
    setMomentLocaleData(locale) {
        const momentLocaleData = moment.localeData(locale);
        this.localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            defaultFormat: momentLocaleData.longDateFormat('L'),
            months: {
                [exports.TranslationWidth.SHORT]: momentLocaleData.monthsShort(),
                [exports.TranslationWidth.LONG]: momentLocaleData.months(),
            },
            days: {
                [exports.TranslationWidth.SHORT]: momentLocaleData.weekdaysShort(),
                [exports.TranslationWidth.LONG]: momentLocaleData.weekdays(),
            },
        };
    }
}



var index$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	MomentDateService: MomentDateService
});

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(string);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

var MILLISECONDS_IN_MINUTE = 60000;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */

function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token) {
  if (token === 'YYYY') {
    throw new RangeError('Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr');
  } else if (token === 'YY') {
    throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr');
  } else if (token === 'D') {
    throw new RangeError('Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr');
  } else if (token === 'DD') {
    throw new RangeError('Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr');
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE$1 = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1 + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};

var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `backupDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `backupDate` which works as a context of parsing.
 *
 * `backupDate` must be passed for correct work of the function.
 * If you're not sure which `backupDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `backupDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `backupDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   toDate('2016-01-01')
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} backupDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyBackupDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
  }

  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;

  if (!locale$1.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBackupDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1 // If timezone isn't specified, it will be set to the system timezone

  };
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      throwProtectedError(token);
    }

    if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      throwProtectedError(token);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).reverse();
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyBackupDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      assign(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

var index$2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': parse
});

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  return !isNaN(date);
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters$1 = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return formatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;
  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale$1.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale$1.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp$1).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp$1).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString$1(substring);
    }

    var formatter = formatters$1[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring);
      }

      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
}

var index$3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': format
});

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const parse$1 = parse || parse;
const formatDate = format || format;
class DateFnsService extends NativeDateService {
    constructor(locale = 'en', i18n, options) {
        super(locale, i18n);
        this.options = {
            format: `DD/MM/YYYY`,
        };
        this.options = options || this.options;
    }
    format(date, format) {
        if (date) {
            return formatDate(date, format || this.options.format, this.options.formatOptions);
        }
        return '';
    }
    parse(date, format) {
        // Parse format is not supported in current version of date-fns
        return this.parseDate(date);
    }
    parseDate(date) {
        return parse$1(date);
    }
    getId() {
        return 'date-fns';
    }
}



var index$4 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	DateFnsService: DateFnsService
});

exports.$dateFnsFormat = index$3;
exports.$dateFnsParse = index$2;
exports.$fetcha = fecha$1;
exports.$kittenDateFns = index$4;
exports.$kittenEvaIcons = index;
exports.$kittenMoment = index$1;
exports.ApplicationProvider = ApplicationProvider;
exports.Avatar = Avatar;
exports.BottomNavigation = BottomNavigation;
exports.BottomNavigationTab = BottomNavigationTab;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Calendar = Calendar;
exports.CalendarViewModes = CalendarViewModes;
exports.CheckBox = CheckBox;
exports.DateService = DateService;
exports.Datepicker = Datepicker;
exports.DatepickerComponent = DatepickerComponent;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.DrawerHeaderFooter = DrawerHeaderFooter;
exports.Icon = Icon;
exports.IconRegistry = IconRegistry;
exports.Input = Input;
exports.Layout = Layout;
exports.List = List;
exports.ListItem = ListItem;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.Modal = Modal;
exports.ModalPanel = ModalPanel;
exports.ModalService = ModalService;
exports.NativeDateService = NativeDateService;
exports.OverflowMenu = OverflowMenu;
exports.Popover = Popover;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.RangeCalendar = RangeCalendar;
exports.RangeDatepicker = RangeDatepicker;
exports.RangeDatepickerComponent = RangeDatepickerComponent;
exports.Select = Select;
exports.Spinner = Spinner;
exports.SubMenu = SubMenu;
exports.Tab = Tab;
exports.TabBar = TabBar;
exports.TabView = TabView;
exports.Text = Text;
exports.ThemeProvider = ThemeProvider;
exports.Toggle = Toggle;
exports.Tooltip = Tooltip;
exports.TopNavigation = TopNavigation;
exports.TopNavigationAction = TopNavigationAction;
exports.ViewPager = ViewPager;
exports.styled = styled;
exports.withStyles = withStyles;
