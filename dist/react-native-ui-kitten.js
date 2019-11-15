'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var merge = _interopDefault(require('lodash.merge'));
var reactNative = require('react-native');

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

var REACT_STATICS={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true};var KNOWN_STATICS={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true};var FORWARD_REF_STATICS={'$$typeof':true,render:true,defaultProps:true,displayName:true,propTypes:true};var MEMO_STATICS={'$$typeof':true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true};var TYPE_STATICS={};TYPE_STATICS[reactIs.ForwardRef]=FORWARD_REF_STATICS;function getStatics(component){if(reactIs.isMemo(component)){return MEMO_STATICS;}return TYPE_STATICS[component['$$typeof']]||REACT_STATICS;}var defineProperty=Object.defineProperty;var getOwnPropertyNames=Object.getOwnPropertyNames;var getOwnPropertySymbols=Object.getOwnPropertySymbols;var getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var getPrototypeOf$1=Object.getPrototypeOf;var objectPrototype=Object.prototype;function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if(typeof sourceComponent!=='string'){if(objectPrototype){var inheritedComponent=getPrototypeOf$1(sourceComponent);if(inheritedComponent&&inheritedComponent!==objectPrototype){hoistNonReactStatics(targetComponent,inheritedComponent,blacklist);}}var keys=getOwnPropertyNames(sourceComponent);if(getOwnPropertySymbols){keys=keys.concat(getOwnPropertySymbols(sourceComponent));}var targetStatics=getStatics(targetComponent);var sourceStatics=getStatics(sourceComponent);for(var i=0;i<keys.length;++i){var key=keys[i];if(!KNOWN_STATICS[key]&&!(blacklist&&blacklist[key])&&!(sourceStatics&&sourceStatics[key])&&!(targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor);}catch(e){}}}}return targetComponent;}var hoistNonReactStatics_cjs=hoistNonReactStatics;

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

var defineProperty$1 = _defineProperty;

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

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var SYMBOL_REFERENCE='$';function getThemeValue(name,theme,fallback){if(isReferenceKey(name)){var themeKey=toThemeKey(name);return findThemeValue(themeKey,theme)||fallback;}return findThemeValue(name,theme)||fallback;}function findThemeValue(name,theme){var value=theme[name];if(isReferenceKey(value)){var themeKey=toThemeKey(value);return findThemeValue(themeKey,theme);}return value;}function isReferenceKey(value){return (""+value).startsWith(SYMBOL_REFERENCE);}function toThemeKey(value){return (""+value).substring(1);}

function createThemedStyle(mapping,theme){return Object.keys(mapping).reduce(function(acc,current){var mappingValue=mapping[current];return _extends_1(_extends_1({},acc),defineProperty$1({},current,getThemeValue(mappingValue,theme,mappingValue)));},{});}

var SEPARATOR_MAPPING_ENTRY='.';var StyleConsumerService=function(){function StyleConsumerService(name,context){classCallCheck(this,StyleConsumerService);this.name=name;this.meta=this.safe(context.style[name],function(generatedConfig){return generatedConfig.meta;});if(!this.meta){var docRoot='https://akveo.github.io/react-native-ui-kitten/docs';var message=["\n"+this.name+": unsupported configuration.",'Using UI Kitten components is only possible with configuring ApplicationProvider.',"\uD83D\uDCD6 Documentation: "+docRoot+"/guides/install-ui-kitten#configure-application-root",'\nIn case you have all in place, there might be an incorrect usage of a "styled" function.',"\uD83D\uDCD6 Documentation: "+docRoot+"/design-system/custom-component-mapping"].join('\n');console.error(message);}}createClass(StyleConsumerService,[{key:"createDefaultProps",value:function createDefaultProps(){var appearance=this.getDefaultAppearance();var variants=this.getDefaultVariants();var states=this.getDefaultStates();return _extends_1(_extends_1({appearance:appearance},variants),states);}},{key:"withStyledProps",value:function withStyledProps(source,context,interaction){var styleInfo=this.getStyleInfo(source,interaction);var generatedMapping=this.getGeneratedStyleMapping(context.style,styleInfo);if(!generatedMapping){var docRoot='https://akveo.github.io/react-native-ui-kitten/docs';var message=[this.name+": unsupported configuration.","Check one of the following prop values "+JSON.stringify(styleInfo,null,2),"\uD83D\uDCD6 Documentation: "+docRoot+"/components/"+this.name.toLowerCase()+"/api"].join('\n');console.warn(message);return this.withStyledProps(_extends_1(_extends_1({},source),this.createDefaultProps()),context,interaction);}var mapping=this.withValidParameters(generatedMapping);return _extends_1(_extends_1({},source),{theme:context.theme,themedStyle:createThemedStyle(mapping,context.theme)});}},{key:"getGeneratedStyleMapping",value:function getGeneratedStyleMapping(style,info){var _this=this;return this.safe(style[this.name],function(componentStyles){var styleKeys=Object.keys(componentStyles.styles);var query=_this.findGeneratedQuery(info,styleKeys);return componentStyles.styles[query];});}},{key:"withValidParameters",value:function withValidParameters(mapping){var _this2=this;var invalidParameters=[];Object.keys(mapping).forEach(function(key){if(!Object.keys(_this2.meta.parameters).includes(key)){invalidParameters.push(key);delete mapping[key];}});if(invalidParameters.length!==0){var docRoot='https://akveo.github.io/react-native-ui-kitten/docs';var message=[this.name+": unsupported configuration.","Unable to apply "+invalidParameters,'There might be an incorrect usage of mapping',"\uD83D\uDCD6 Documentation: "+docRoot+"/design-system/custom-component-mapping"].join('\n');console.warn(message);}return mapping;}},{key:"getStyleInfo",value:function getStyleInfo(props,interaction){var variantProps=this.getDerivedVariants(this.meta,props);var stateProps=this.getDerivedStates(this.meta,props);var variants=Object.keys(variantProps).map(function(variant){return variantProps[variant];});var states=Object.keys(stateProps);return {appearance:props.appearance,variants:variants,states:[].concat(toConsumableArray(states),toConsumableArray(interaction))};}},{key:"getDefaultAppearance",value:function getDefaultAppearance(){var _this3=this;var matches=Object.keys(this.meta.appearances).filter(function(appearance){return _this3.meta.appearances[appearance].default===true;});return matches[matches.length-1];}},{key:"getDefaultVariants",value:function getDefaultVariants(){return this.transformObject(this.meta.variantGroups,function(variants,group){return Object.keys(variants[group]).find(function(variant){return variants[group][variant].default===true;});});}},{key:"getDefaultStates",value:function getDefaultStates(){return this.transformObject(this.meta.states,function(states,state){var isDefault=states[state].default===true;return isDefault?isDefault:undefined;});}},{key:"getDerivedVariants",value:function getDerivedVariants(meta,props){return this.transformObject(props,function(p,prop){var isVariant=Object.keys(meta.variantGroups).includes(prop);return isVariant?p[prop]:undefined;});}},{key:"getDerivedStates",value:function getDerivedStates(meta,props){return this.transformObject(props,function(p,prop){var isState=Object.keys(meta.states).includes(prop);var isAssigned=p[prop]===true;return isState&&isAssigned;});}},{key:"transformObject",value:function transformObject(value,transform){return Object.keys(value).reduce(function(acc,key){var nextValue=transform(value,key);return nextValue?_extends_1(_extends_1({},acc),defineProperty$1({},key,nextValue)):acc;},{});}},{key:"findGeneratedQuery",value:function findGeneratedQuery(info,source){var _this4=this;var query=[info.appearance].concat(toConsumableArray(info.variants),toConsumableArray(info.states));var matches=source.filter(function(key){var keyQuery=key.split(SEPARATOR_MAPPING_ENTRY);return _this4.compareArrays(query,keyQuery);});return matches[0];}},{key:"compareArrays",value:function compareArrays(lhs,rhs){if(lhs.length!==rhs.length){return false;}return lhs.reduce(function(acc,current){return acc&&rhs.includes(current);},true);}},{key:"safe",value:function safe(value,reducer,fallback){if(value){return reducer(value);}return fallback;}}]);return StyleConsumerService;}();

var defaultValue={};var MappingContext=React.createContext(defaultValue);

var defaultValue$1={};var ThemeContext=React.createContext(defaultValue$1);

var _jsxFileName="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\theme\\style\\styleConsumer.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var styled=function styled(Component){if(!Component.styledComponentName){console.warn('Styled components should specify corresponding style name.');return null;}var Wrapper=function(_React$Component){inherits(Wrapper,_React$Component);function Wrapper(){var _this;classCallCheck(this,Wrapper);_this=possibleConstructorReturn(this,getPrototypeOf(Wrapper).apply(this,arguments));_this.state={interaction:[]};_this.init=false;_this.onInit=function(context){_this.service=new StyleConsumerService(Component.styledComponentName,context);_this.defaultProps=_this.service.createDefaultProps();_this.init=true;};_this.onDispatch=function(interaction){_this.setState({interaction:interaction});};_this.withStyledProps=function(source,context){var interaction=_this.state.interaction;var props=_extends_1(_extends_1({},_this.defaultProps),source);return _this.service.withStyledProps(props,context,interaction);};_this.renderWrappedElement=function(context){if(!_this.init){_this.onInit(context);}var _a=_this.props,forwardedRef=_a.forwardedRef,restProps=__rest(_a,["forwardedRef"]);var props=_this.withStyledProps(restProps,context);return React.createElement(Component,_extends_1({},props,{ref:forwardedRef,dispatch:_this.onDispatch,__source:{fileName:_jsxFileName,lineNumber:137}}));};return _this;}createClass(Wrapper,[{key:"render",value:function render(){var StyledElement=this.renderWrappedElement;return React.createElement(MappingContext.Consumer,{__source:{fileName:_jsxFileName,lineNumber:142}},function(styles){return React.createElement(ThemeContext.Consumer,{__source:{fileName:_jsxFileName,lineNumber:142}},function(theme){return React.createElement(StyledElement,{style:styles,theme:theme,__source:{fileName:_jsxFileName,lineNumber:142}});});});}}]);return Wrapper;}(React.Component);var WrappingElement=function WrappingElement(props,ref){return React.createElement(Wrapper,_extends_1({},props,{forwardedRef:ref,__source:{fileName:_jsxFileName,lineNumber:148}}));};var ResultComponent=React.forwardRef(WrappingElement);ResultComponent.displayName=Component.displayName||Component.name;hoistNonReactStatics_cjs(ResultComponent,Component);return ResultComponent;};

var _jsxFileName$1="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\theme\\theme\\themeConsumer.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$1=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var withStyles=function withStyles(Component,createStyles){var Wrapper=function(_React$Component){inherits(Wrapper,_React$Component);function Wrapper(){var _this;classCallCheck(this,Wrapper);_this=possibleConstructorReturn(this,getPrototypeOf(Wrapper).apply(this,arguments));_this.createThemedStyles=function(style,theme){return Object.keys(style).reduce(function(acc,current){return _extends_1(_extends_1({},acc),defineProperty$1({},current,createThemedStyle(style[current],theme)));},{});};_this.withThemedProps=function(source,context){var style=createStyles?createStyles(context.theme):{};return _extends_1(_extends_1({},source),{theme:context.theme,themedStyle:_this.createThemedStyles(style,context.theme)});};_this.renderWrappedElement=function(context){var _a=_this.props,forwardedRef=_a.forwardedRef,restProps=__rest$1(_a,["forwardedRef"]);var props=_this.withThemedProps(restProps,context);return React.createElement(Component,_extends_1({},props,{ref:forwardedRef,__source:{fileName:_jsxFileName$1,lineNumber:90}}));};return _this;}createClass(Wrapper,[{key:"render",value:function render(){var ThemedElement=this.renderWrappedElement;return React.createElement(ThemeContext.Consumer,{__source:{fileName:_jsxFileName$1,lineNumber:95}},function(theme){return React.createElement(ThemedElement,{theme:theme,__source:{fileName:_jsxFileName$1,lineNumber:95}});});}}]);return Wrapper;}(React.Component);var WrappingElement=function WrappingElement(props,ref){return React.createElement(Wrapper,_extends_1({},props,{forwardedRef:ref,__source:{fileName:_jsxFileName$1,lineNumber:101}}));};var ThemedComponent=React.forwardRef(WrappingElement);ThemedComponent.displayName=Component.displayName||Component.name;hoistNonReactStatics_cjs(ThemedComponent,Component);return ThemedComponent;};

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

var _jsxFileName$2="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\theme\\mapping\\mappingProvider.component.js";var MappingProvider=function(_React$PureComponent){inherits(MappingProvider,_React$PureComponent);function MappingProvider(){classCallCheck(this,MappingProvider);return possibleConstructorReturn(this,getPrototypeOf(MappingProvider).apply(this,arguments));}createClass(MappingProvider,[{key:"render",value:function render(){var _this$props=this.props,styles=_this$props.styles,children=_this$props.children;return React.createElement(MappingContext.Provider,{value:styles,__source:{fileName:_jsxFileName$2,lineNumber:6}},children);}}]);return MappingProvider;}(React.PureComponent);

var _jsxFileName$3="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\theme\\theme\\themeProvider.component.js";var ThemeProvider=function(_React$PureComponent){inherits(ThemeProvider,_React$PureComponent);function ThemeProvider(){classCallCheck(this,ThemeProvider);return possibleConstructorReturn(this,getPrototypeOf(ThemeProvider).apply(this,arguments));}createClass(ThemeProvider,[{key:"render",value:function render(){var _this$props=this.props,theme=_this$props.theme,children=_this$props.children;return React.createElement(ThemeContext.Provider,{value:theme,__source:{fileName:_jsxFileName$3,lineNumber:11}},children);}}]);return ThemeProvider;}(React.PureComponent);

var _jsxFileName$4="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\theme\\style\\styleProvider.component.js";var StyleProvider=function(_React$PureComponent){inherits(StyleProvider,_React$PureComponent);function StyleProvider(){classCallCheck(this,StyleProvider);return possibleConstructorReturn(this,getPrototypeOf(StyleProvider).apply(this,arguments));}createClass(StyleProvider,[{key:"render",value:function render(){var _this$props=this.props,styles=_this$props.styles,theme=_this$props.theme,children=_this$props.children;return React.createElement(MappingProvider,{styles:styles,__source:{fileName:_jsxFileName$4,lineNumber:12}},React.createElement(ThemeProvider,{theme:theme,__source:{fileName:_jsxFileName$4,lineNumber:13}},children));}}]);return StyleProvider;}(React.PureComponent);

var _jsxFileName$5="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\theme\\modal\\modalResolver.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$2=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var ModalResolver=function(_React$Component){inherits(ModalResolver,_React$Component);function ModalResolver(){var _this;classCallCheck(this,ModalResolver);_this=possibleConstructorReturn(this,getPrototypeOf(ModalResolver).apply(this,arguments));_this.onBackdropPress=function(){var _this$props=_this.props,allowBackdrop=_this$props.allowBackdrop,onBackdropPress=_this$props.onBackdropPress;if(allowBackdrop){onBackdropPress();}};_this.onStartShouldSetResponder=function(){return true;};_this.onResponderRelease=function(){return;};_this.onStartShouldSetResponderCapture=function(){return false;};_this.renderComponentChild=function(source){return React.cloneElement(source,{style:[source.props.style,_this.props.style]});};_this.renderComponentChildren=function(source){return React.Children.map(source,_this.renderComponentChild);};_this.renderWithBackDrop=function(component){return React.createElement(reactNative.TouchableOpacity,{style:styles.container,onPress:_this.onBackdropPress,activeOpacity:1,__source:{fileName:_jsxFileName$5,lineNumber:46}},component);};_this.renderWithoutBackDrop=function(component){return React.createElement(reactNative.View,{style:styles.notVisibleWrapper,__source:{fileName:_jsxFileName$5,lineNumber:51}},React.createElement(reactNative.View,{style:styles.container,pointerEvents:"none",__source:{fileName:_jsxFileName$5,lineNumber:52}}),component);};_this.renderComponent=function(){var _a=_this.props,children=_a.children,allowBackdrop=_a.allowBackdrop,derivedProps=__rest$2(_a,["children","allowBackdrop"]);var componentChildren=_this.renderComponentChildren(children);var dialog=React.createElement(reactNative.View,_extends_1({},derivedProps,{style:styles.contentWrapper,onStartShouldSetResponder:_this.onStartShouldSetResponder,onResponderRelease:_this.onResponderRelease,onStartShouldSetResponderCapture:_this.onStartShouldSetResponderCapture,pointerEvents:"box-none",__source:{fileName:_jsxFileName$5,lineNumber:59}}),componentChildren);return allowBackdrop?_this.renderWithBackDrop(dialog):_this.renderWithoutBackDrop(dialog);};return _this;}createClass(ModalResolver,[{key:"render",value:function render(){return this.props.visible?this.renderComponent():null;}}]);return ModalResolver;}(React.Component);ModalResolver.defaultProps={visible:false};var styles=reactNative.StyleSheet.create({container:reactNative.StyleSheet.absoluteFillObject,notVisibleWrapper:{position:'absolute',width:0,height:0},contentWrapper:{alignSelf:'flex-start'}});

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var ModalServiceType=function(){function ModalServiceType(){classCallCheck(this,ModalServiceType);this.panel=null;}createClass(ModalServiceType,[{key:"mount",value:function mount(panel){this.panel=panel;}},{key:"unmount",value:function unmount(){this.panel=null;}},{key:"show",value:function show(element,config){if(this.panel){return this.panel.show(element,config);}}},{key:"update",value:function update(identifier,children){if(this.panel){this.panel.update(identifier,children);}}},{key:"hide",value:function hide(identifier){if(this.panel){return this.panel.hide(identifier);}}}]);return ModalServiceType;}();var ModalService=new ModalServiceType();

var _jsxFileName$6="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\theme\\modal\\modalPanel.component.js";var ModalPanel=function(_React$Component){inherits(ModalPanel,_React$Component);function ModalPanel(){var _this;classCallCheck(this,ModalPanel);_this=possibleConstructorReturn(this,getPrototypeOf(ModalPanel).apply(this,arguments));_this.state={components:new Map()};_this.hide=function(identifier){var components=_this.state.components;components.delete(identifier);_this.setState({components:components});return '';};_this.generateUniqueComponentKey=function(){return Math.random().toString(36).substring(2);};_this.areThereAnyComponents=function(){return _this.state.components&&_this.state.components.size!==0;};_this.renderModal=function(config,index){return React.createElement(ModalResolver,_extends_1({},config.element.props,{visible:true,key:index,allowBackdrop:config.allowBackdrop,onBackdropPress:config.onBackdropPress,__source:{fileName:_jsxFileName$6,lineNumber:29}}),config.element);};_this.renderModals=function(){return Array.from(_this.state.components.values()).map(_this.renderModal);};return _this;}createClass(ModalPanel,[{key:"componentDidMount",value:function componentDidMount(){ModalService.mount(this);}},{key:"componentWillUnmount",value:function componentWillUnmount(){ModalService.unmount();}},{key:"show",value:function show(element,config){var key=this.generateUniqueComponentKey();var components=this.state.components.set(key,_extends_1(_extends_1({},config),{element:element}));this.setState({components:components});return key;}},{key:"update",value:function update(identifier,children){var panelChild=this.state.components.get(identifier);var childElement=panelChild.element;panelChild.element=React.cloneElement(childElement,{children:children});var components=this.state.components;components.delete(identifier);components.set(identifier,panelChild);this.setState({components:components});}},{key:"render",value:function render(){return React.createElement(reactNative.View,{style:styles$1.container,__source:{fileName:_jsxFileName$6,lineNumber:62}},this.props.children,this.areThereAnyComponents()&&this.renderModals());}}]);return ModalPanel;}(React.Component);var styles$1=reactNative.StyleSheet.create({container:{flex:1}});

var _jsxFileName$7="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\theme\\application\\applicationProvider.component.js";var ApplicationProvider=function(_React$Component){inherits(ApplicationProvider,_React$Component);function ApplicationProvider(props){var _this;classCallCheck(this,ApplicationProvider);_this=possibleConstructorReturn(this,getPrototypeOf(ApplicationProvider).call(this,props));_this.schemaProcessor=new processor_2$1();_this.createStyles=function(mapping,custom){var customizedMapping=merge({},mapping,custom);return _this.schemaProcessor.process(customizedMapping);};var _this$props=_this.props,mapping=_this$props.mapping,customMapping=_this$props.customMapping,theme=_this$props.theme;var styles=_this.createStyles(mapping,customMapping);_this.state={styles:styles};return _this;}createClass(ApplicationProvider,[{key:"render",value:function render(){return React.createElement(StyleProvider,{theme:this.props.theme,styles:this.state.styles,__source:{fileName:_jsxFileName$7,lineNumber:69}},React.createElement(ModalPanel,{__source:{fileName:_jsxFileName$7,lineNumber:70}},this.props.children));}}]);return ApplicationProvider;}(React.Component);

(function(Interaction){Interaction["ACTIVE"]="active";Interaction["FOCUSED"]="focused";Interaction["INDETERMINATE"]="indeterminate";Interaction["VISIBLE"]="visible";})(exports.Interaction||(exports.Interaction={}));(function(State){State["CHECKED"]="checked";State["SELECTED"]="selected";State["DISABLED"]="disabled";})(exports.State||(exports.State={}));

var _jsxFileName$8="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\avatar\\avatar.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$3=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var AvatarComponent=function(_React$Component){inherits(AvatarComponent,_React$Component);function AvatarComponent(){var _this;classCallCheck(this,AvatarComponent);_this=possibleConstructorReturn(this,getPrototypeOf(AvatarComponent).apply(this,arguments));_this.getComponentStyle=function(source){var roundCoefficient=source.roundCoefficient,containerParameters=__rest$3(source,["roundCoefficient"]);var baseStyle=reactNative.StyleSheet.flatten([containerParameters,_this.props.style]);var borderRadius=roundCoefficient*baseStyle.height;return _extends_1({borderRadius:borderRadius},baseStyle);};return _this;}createClass(AvatarComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,restProps=__rest$3(_a,["themedStyle"]);var componentStyle=this.getComponentStyle(themedStyle);return React.createElement(reactNative.Image,_extends_1({},restProps,{style:componentStyle,__source:{fileName:_jsxFileName$8,lineNumber:111}}));}}]);return AvatarComponent;}(React.Component);AvatarComponent.styledComponentName='Avatar';var Avatar=styled(AvatarComponent);

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

var toArray = _toArray;

var _jsxFileName$9="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\support\\components\\arrow\\arrow.component.js";var __rest$4=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var Arrow=function(_React$Component){inherits(Arrow,_React$Component);function Arrow(){var _this;classCallCheck(this,Arrow);_this=possibleConstructorReturn(this,getPrototypeOf(Arrow).apply(this,arguments));_this.getComponentStyle=function(source){var flatStyle=reactNative.StyleSheet.flatten(source);return {container:{borderLeftWidth:flatStyle.width,borderRightWidth:flatStyle.width,borderBottomWidth:flatStyle.height,borderBottomColor:flatStyle.backgroundColor,borderLeftColor:'transparent',borderRightColor:'transparent',backgroundColor:'transparent'}};};return _this;}createClass(Arrow,[{key:"render",value:function render(){var _a=this.props,style=_a.style,props=__rest$4(_a,["style"]);var componentStyle=this.getComponentStyle(style);return React.createElement(reactNative.View,_extends_1({},props,{style:[style,styles$2.container,componentStyle.container],__source:{fileName:_jsxFileName$9,lineNumber:38}}));}}]);return Arrow;}(React.Component);var styles$2=reactNative.StyleSheet.create({container:{}});

var __rest$5=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};function allWithRest(source,from){if(!source){return {rest:{}};}return Object.keys(source).reduce(function(acc,prop){var rest=acc.rest,allOf=__rest$5(acc,["rest"]);if(from.includes(prop)){var _extends3;return _extends_1(_extends_1({},allOf),(_extends3={},defineProperty$1(_extends3,prop,source[prop]),defineProperty$1(_extends3,"rest",rest),_extends3));}return _extends_1(_extends_1({},allOf),{rest:_extends_1(_extends_1({},rest),defineProperty$1({},prop,source[prop]))});},{});}function allWithPrefix(source,key){return Object.keys(source).filter(function(styleName){return styleName.includes(key);}).reduce(function(obj,styleKey){return _extends_1(_extends_1({},obj),defineProperty$1({},styleKey,source[styleKey]));},{});}

var FLEX_PREFIX='flex';var FLEX_ROW_PREFIX='row';var FLEX_WRAP_PREFIX='wrap';var FLEX_START_PREFIX='start';var FLEX_END_PREFIX='end';var FLEX_REVERSE_PREFIX='reverse';var FlexStartEndMapper={toI18n:function toI18n(value,rtl){if(!rtl||!value.startsWith(FLEX_PREFIX)){return value;}var isReverse=value.endsWith(FLEX_END_PREFIX);if(isReverse){return FLEX_PREFIX+"-"+FLEX_START_PREFIX;}return FLEX_PREFIX+"-"+FLEX_END_PREFIX;}};var FlexRowMapper={toI18n:function toI18n(value,rtl){if(!rtl||!value.startsWith(FLEX_ROW_PREFIX)){return value;}var isReverse=value.endsWith(FLEX_REVERSE_PREFIX);if(isReverse){return FLEX_ROW_PREFIX;}return FLEX_ROW_PREFIX+"-"+FLEX_REVERSE_PREFIX;}};var FlexWrapMapper={toI18n:function toI18n(value,rtl){if(!rtl||!value.startsWith(FLEX_WRAP_PREFIX)){return value;}var isReverse=value.endsWith("-"+FLEX_REVERSE_PREFIX);if(isReverse){return FLEX_WRAP_PREFIX;}return FLEX_WRAP_PREFIX+"-"+FLEX_REVERSE_PREFIX;}};var I18nLayoutFlexMap={alignContent:FlexStartEndMapper,alignItems:FlexStartEndMapper,alignSelf:FlexStartEndMapper,justifyContent:FlexStartEndMapper,flexDirection:FlexRowMapper,flexWrap:FlexWrapMapper};

var NativeI18nLayoutService=function(){function NativeI18nLayoutService(){classCallCheck(this,NativeI18nLayoutService);}createClass(NativeI18nLayoutService,[{key:"isRTL",value:function isRTL(){return reactNative.I18nManager.isRTL;}},{key:"select",value:function select(ltr,rtl){return this.isRTL()?rtl:ltr;}},{key:"toI18nStyle",value:function toI18nStyle(source){var rtl=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.isRTL();var i18nStyle=Object.keys(I18nLayoutFlexMap).reduce(function(style,prop){var currentStyleValue=source[prop];if(currentStyleValue){var i18nStyleValue=I18nLayoutFlexMap[prop].toI18n(currentStyleValue,rtl);return _extends_1(_extends_1({},style),defineProperty$1({},prop,i18nStyleValue));}return style;},{});return _extends_1(_extends_1({},source),i18nStyle);}}]);return NativeI18nLayoutService;}();var I18nLayoutService=new NativeI18nLayoutService();

var isValidString=function isValidString(source){if(source&&source.length>0){return true;}return false;};

var _jsxFileName$a="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\support\\components\\checkmark\\checkmark.component.js";var CheckMark=function(_React$Component){inherits(CheckMark,_React$Component);function CheckMark(){var _this;classCallCheck(this,CheckMark);_this=possibleConstructorReturn(this,getPrototypeOf(CheckMark).apply(this,arguments));_this.getComponentStyle=function(source){var width=source.width,height=source.height,backgroundColor=source.backgroundColor;return {container:{width:width,height:height},shape:{borderWidth:width*0.125,borderTopLeftRadius:height*0.5,borderTopRightRadius:height*0.5,borderBottomLeftRadius:height*0.5,borderBottomRightRadius:height*0.5,borderColor:backgroundColor,backgroundColor:backgroundColor},left:{left:width*0.125,top:width*0.25,height:height*0.65},right:{right:width*0.175,height:height*0.875}};};return _this;}createClass(CheckMark,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,isAnimated=_this$props.isAnimated;var _this$getComponentSty=this.getComponentStyle(reactNative.StyleSheet.flatten(style)),container=_this$getComponentSty.container,shape=_this$getComponentSty.shape,left=_this$getComponentSty.left,right=_this$getComponentSty.right;var Component=isAnimated?reactNative.Animated.View:reactNative.View;return React.createElement(Component,{style:[container,styles$3.container],__source:{fileName:_jsxFileName$a,lineNumber:40}},React.createElement(Component,{style:[shape,left,styles$3.shape,styles$3.left],__source:{fileName:_jsxFileName$a,lineNumber:41}}),React.createElement(Component,{style:[shape,right,styles$3.shape,styles$3.right],__source:{fileName:_jsxFileName$a,lineNumber:42}}));}}]);return CheckMark;}(React.Component);CheckMark.defaultProps={isAnimated:false};var styles$3=reactNative.StyleSheet.create({container:I18nLayoutService.toI18nStyle({flexDirection:'row',transform:[{rotate:'-5deg'}]}),shape:{position:'absolute'},left:{transform:[{rotate:'-40deg'}]},right:{transform:[{rotate:'40deg'}]}});

var _jsxFileName$b="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\support\\components\\tabIndicator\\tabIndicator.component.js";var __rest$6=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TabIndicator=function(_React$Component){inherits(TabIndicator,_React$Component);function TabIndicator(){var _this;classCallCheck(this,TabIndicator);_this=possibleConstructorReturn(this,getPrototypeOf(TabIndicator).apply(this,arguments));_this.contentOffset=new reactNative.Animated.Value(0);_this.onContentOffsetAnimationStateChanged=function(state){};_this.onContentOffsetAnimationStateEnd=function(result){};_this.createOffsetAnimation=function(params){var animationDuration=params.animated?_this.props.animationDuration:0;return reactNative.Animated.timing(_this.contentOffset,{toValue:I18nLayoutService.select(params.offset,-params.offset),duration:animationDuration,easing:reactNative.Easing.linear});};_this.onLayout=function(event){_this.indicatorWidth=event.nativeEvent.layout.width;_this.scrollToOffset({offset:_this.indicatorWidth*_this.props.selectedPosition,animated:false});};_this.getComponentStyle=function(){var widthPercent=100/_this.props.positions;return {width:widthPercent+"%",transform:[{translateX:_this.contentOffset}]};};return _this;}createClass(TabIndicator,[{key:"componentDidMount",value:function componentDidMount(){this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps){return this.props.selectedPosition!==nextProps.selectedPosition;}},{key:"componentDidUpdate",value:function componentDidUpdate(){var index=this.props.selectedPosition;this.scrollToIndex({index:index,animated:true});}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.contentOffset.removeAllListeners();}},{key:"scrollToIndex",value:function scrollToIndex(params){var index=params.index,rest=__rest$6(params,["index"]);var offset=this.indicatorWidth*index;this.scrollToOffset(_extends_1({offset:offset},rest));}},{key:"scrollToOffset",value:function scrollToOffset(params){this.createOffsetAnimation(params).start(this.onContentOffsetAnimationStateEnd);}},{key:"render",value:function render(){var _a=this.props,style=_a.style,restProps=__rest$6(_a,["style"]);var componentStyle=this.getComponentStyle();return React.createElement(reactNative.Animated.View,_extends_1({},restProps,{onLayout:this.onLayout,style:[style,componentStyle],__source:{fileName:_jsxFileName$b,lineNumber:89}}));}}]);return TabIndicator;}(React.Component);TabIndicator.defaultProps={selectedPosition:0,animationDuration:200};

var _jsxFileName$c="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\support\\components\\chevron\\chevron.component.js";var Chevron=function(_React$Component){inherits(Chevron,_React$Component);function Chevron(){var _this;classCallCheck(this,Chevron);_this=possibleConstructorReturn(this,getPrototypeOf(Chevron).apply(this,arguments));_this.getDirectionStyle=function(){var direction=_this.props.direction;switch(direction){case'top':return styles$4.containerTopRotate;case'right':return styles$4.containerRightRotate;case'left':return styles$4.containerLeftRotate;default:return null;}};_this.getComponentStyle=function(source){var width=source.width,height=source.height,backgroundColor=source.tintColor,marginHorizontal=source.marginHorizontal;return {container:{width:width,height:height,marginHorizontal:marginHorizontal},shape:{top:height*0.25,borderWidth:width*0.06,borderTopLeftRadius:height*0.5,borderTopRightRadius:height*0.5,borderBottomLeftRadius:height*0.5,borderBottomRightRadius:height*0.5,borderColor:backgroundColor,backgroundColor:backgroundColor},left:{left:width*0.28,height:height*0.45},right:{right:width*0.28,height:height*0.45}};};return _this;}createClass(Chevron,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,isAnimated=_this$props.isAnimated;var _this$getComponentSty=this.getComponentStyle(reactNative.StyleSheet.flatten(style)),container=_this$getComponentSty.container,shape=_this$getComponentSty.shape,left=_this$getComponentSty.left,right=_this$getComponentSty.right;var directionStyle=this.getDirectionStyle();var Component=isAnimated?reactNative.Animated.View:reactNative.View;return React.createElement(Component,{style:[container,directionStyle,style],__source:{fileName:_jsxFileName$c,lineNumber:54}},React.createElement(Component,{style:[shape,left,styles$4.shape,styles$4.left],__source:{fileName:_jsxFileName$c,lineNumber:55}}),React.createElement(Component,{style:[shape,right,styles$4.shape,styles$4.right],__source:{fileName:_jsxFileName$c,lineNumber:56}}));}}]);return Chevron;}(React.Component);Chevron.defaultProps={isAnimated:false,direction:'bottom'};var styles$4=reactNative.StyleSheet.create({containerTopRotate:{transform:[{rotate:'180deg'}]},containerLeftRotate:{transform:[{rotate:'90deg'}]},containerRightRotate:{transform:[{rotate:'-90deg'}]},shape:{position:'absolute'},left:{transform:[{rotate:'-45deg'},{translateY:1}]},right:{transform:[{rotate:'45deg'},{translateY:1}]}});

var _jsxFileName$d="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\bottomNavigation\\bottomNavigation.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$7=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var BottomNavigationComponent=function(_React$Component){inherits(BottomNavigationComponent,_React$Component);function BottomNavigationComponent(){var _this;classCallCheck(this,BottomNavigationComponent);_this=possibleConstructorReturn(this,getPrototypeOf(BottomNavigationComponent).apply(this,arguments));_this.onTabSelect=function(index){if(_this.props.onSelect&&_this.props.selectedIndex!==index){_this.props.onSelect(index);}};_this.getComponentStyle=function(source){var indicatorHeight=source.indicatorHeight,indicatorBackgroundColor=source.indicatorBackgroundColor,containerParameters=__rest$7(source,["indicatorHeight","indicatorBackgroundColor"]);return {container:containerParameters,item:{},indicator:{height:indicatorHeight,backgroundColor:indicatorBackgroundColor}};};_this.renderIndicatorElement=function(positions,style){var _this$props=_this.props,indicatorStyle=_this$props.indicatorStyle,selectedIndex=_this$props.selectedIndex;return React.createElement(TabIndicator,{key:0,style:[style,styles$5.indicator,indicatorStyle],selectedPosition:selectedIndex,positions:positions,__source:{fileName:_jsxFileName$d,lineNumber:179}});};_this.renderTabElement=function(element,index){return React.cloneElement(element,{key:index,style:[styles$5.item,element.props.style],selected:index===_this.props.selectedIndex,onSelect:function onSelect(){return _this.onTabSelect(index);}});};_this.renderTabElements=function(source){return React.Children.map(source,_this.renderTabElement);};_this.renderComponentChildren=function(style){var tabElements=_this.renderTabElements(_this.props.children);var hasIndicator=style.indicator.height>0;return [hasIndicator&&_this.renderIndicatorElement(tabElements.length,style.indicator)].concat(toConsumableArray(tabElements));};return _this;}createClass(BottomNavigationComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,derivedProps=__rest$7(_a,["themedStyle","style"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,componentStyles=__rest$7(_b,["container"]);var _this$renderComponent=this.renderComponentChildren(componentStyles),_this$renderComponent2=toArray(_this$renderComponent),indicatorElement=_this$renderComponent2[0],tabElements=_this$renderComponent2.slice(1);return React.createElement(reactNative.View,_extends_1({},derivedProps,{style:[container,styles$5.container,style],__source:{fileName:_jsxFileName$d,lineNumber:205}}),indicatorElement,tabElements);}}]);return BottomNavigationComponent;}(React.Component);BottomNavigationComponent.styledComponentName='BottomNavigation';BottomNavigationComponent.defaultProps={selectedIndex:0};var styles$5=reactNative.StyleSheet.create({container:{flexDirection:'row'},item:{flex:1},indicator:{position:'absolute'}});var BottomNavigation=styled(BottomNavigationComponent);

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

var _jsxFileName$e="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\text\\text.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$8=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TextComponent=function(_React$Component){inherits(TextComponent,_React$Component);function TextComponent(){classCallCheck(this,TextComponent);return possibleConstructorReturn(this,getPrototypeOf(TextComponent).apply(this,arguments));}createClass(TextComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,derivedProps=__rest$8(_a,["themedStyle","style"]);return React.createElement(reactNative.Text,_extends_1({},derivedProps,{style:[themedStyle,style],__source:{fileName:_jsxFileName$e,lineNumber:88}}));}}]);return TextComponent;}(React.Component);TextComponent.styledComponentName='Text';var Text=styled(TextComponent);

var _jsxFileName$f="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\bottomNavigation\\bottomNavigationTab.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$9=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var BottomNavigationTabComponent=function(_React$Component){inherits(BottomNavigationTabComponent,_React$Component);function BottomNavigationTabComponent(){var _this;classCallCheck(this,BottomNavigationTabComponent);_this=possibleConstructorReturn(this,getPrototypeOf(BottomNavigationTabComponent).apply(this,arguments));_this.onPress=function(){if(_this.props.onSelect){_this.props.onSelect(!_this.props.selected);}};_this.getComponentStyle=function(source){var iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconMarginVertical=source.iconMarginVertical,iconTintColor=source.iconTintColor,textMarginVertical=source.textMarginVertical,textFontFamily=source.textFontFamily,textFontSize=source.textFontSize,textLineHeight=source.textLineHeight,textFontWeight=source.textFontWeight,textColor=source.textColor,containerParameters=__rest$9(source,["iconWidth","iconHeight","iconMarginVertical","iconTintColor","textMarginVertical","textFontFamily","textFontSize","textLineHeight","textFontWeight","textColor"]);return {container:containerParameters,text:{marginVertical:textMarginVertical,fontFamily:textFontFamily,fontSize:textFontSize,lineHeight:textLineHeight,fontWeight:textFontWeight,color:textColor},icon:{width:iconWidth,height:iconHeight,marginVertical:iconMarginVertical,tintColor:iconTintColor}};};_this.renderIconElement=function(style){var iconElement=_this.props.icon(style);return React.cloneElement(iconElement,{key:1,style:[style,styles$6.icon,iconElement.props.style]});};_this.renderTitleElement=function(style){var _this$props=_this.props,title=_this$props.title,titleStyle=_this$props.titleStyle;return React.createElement(Text,{key:2,style:[style,styles$6.text,titleStyle],__source:{fileName:_jsxFileName$f,lineNumber:146}},title);};_this.renderComponentChildren=function(style){var _this$props2=_this.props,icon=_this$props2.icon,title=_this$props2.title;return [icon&&_this.renderIconElement(style.icon),isValidString(title)&&_this.renderTitleElement(style.text)];};return _this;}createClass(BottomNavigationTabComponent,[{key:"render",value:function render(){var _a=this.props,style=_a.style,themedStyle=_a.themedStyle,restProps=__rest$9(_a,["style","themedStyle"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,componentStyles=__rest$9(_b,["container"]);var _this$renderComponent=this.renderComponentChildren(componentStyles),_this$renderComponent2=slicedToArray(_this$renderComponent,2),iconElement=_this$renderComponent2[0],titleElement=_this$renderComponent2[1];return React.createElement(reactNative.TouchableOpacity,_extends_1({},restProps,{style:[container,styles$6.container,style],activeOpacity:1.0,onPress:this.onPress,__source:{fileName:_jsxFileName$f,lineNumber:162}}),iconElement,titleElement);}}]);return BottomNavigationTabComponent;}(React.Component);BottomNavigationTabComponent.styledComponentName='BottomNavigationTab';var styles$6=reactNative.StyleSheet.create({container:{justifyContent:'center',alignItems:'center'},text:{},icon:{}});var BottomNavigationTab=styled(BottomNavigationTabComponent);

var _jsxFileName$g="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\button\\button.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$a=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var ButtonComponent=function(_React$Component){inherits(ButtonComponent,_React$Component);function ButtonComponent(){var _this;classCallCheck(this,ButtonComponent);_this=possibleConstructorReturn(this,getPrototypeOf(ButtonComponent).apply(this,arguments));_this.onPress=function(event){if(_this.props.onPress){_this.props.onPress(event);}};_this.onPressIn=function(event){_this.props.dispatch([exports.Interaction.ACTIVE]);if(_this.props.onPressIn){_this.props.onPressIn(event);}};_this.onPressOut=function(event){_this.props.dispatch([]);if(_this.props.onPressOut){_this.props.onPressOut(event);}};_this.getComponentStyle=function(source){var textColor=source.textColor,textFontFamily=source.textFontFamily,textFontSize=source.textFontSize,textLineHeight=source.textLineHeight,textFontWeight=source.textFontWeight,textMarginHorizontal=source.textMarginHorizontal,iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconTintColor=source.iconTintColor,iconMarginHorizontal=source.iconMarginHorizontal,containerParameters=__rest$a(source,["textColor","textFontFamily","textFontSize","textLineHeight","textFontWeight","textMarginHorizontal","iconWidth","iconHeight","iconTintColor","iconMarginHorizontal"]);return {container:containerParameters,text:{color:textColor,fontFamily:textFontFamily,fontSize:textFontSize,lineHeight:textLineHeight,fontWeight:textFontWeight,marginHorizontal:textMarginHorizontal},icon:{width:iconWidth,height:iconHeight,tintColor:iconTintColor,marginHorizontal:iconMarginHorizontal}};};_this.renderTextElement=function(style){return React.createElement(Text,{key:1,style:[style,styles$7.text,_this.props.textStyle],__source:{fileName:_jsxFileName$g,lineNumber:182}},_this.props.children);};_this.renderIconElement=function(style){var iconElement=_this.props.icon(style);return React.cloneElement(iconElement,{key:2,style:[style,styles$7.icon,iconElement.props.style]});};_this.renderComponentChildren=function(style){var _this$props=_this.props,icon=_this$props.icon,children=_this$props.children;return [icon&&_this.renderIconElement(style.icon),isValidString(children)&&_this.renderTextElement(style.text)];};return _this;}createClass(ButtonComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,containerProps=__rest$a(_a,["themedStyle","style"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,childStyles=__rest$a(_b,["container"]);var _this$renderComponent=this.renderComponentChildren(childStyles),_this$renderComponent2=slicedToArray(_this$renderComponent,2),iconElement=_this$renderComponent2[0],textElement=_this$renderComponent2[1];return React.createElement(reactNative.TouchableOpacity,_extends_1({activeOpacity:1.0},containerProps,{style:[container,styles$7.container,style],onPress:this.onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,__source:{fileName:_jsxFileName$g,lineNumber:205}}),iconElement,textElement);}}]);return ButtonComponent;}(React.Component);ButtonComponent.styledComponentName='Button';var styles$7=reactNative.StyleSheet.create({container:{flexDirection:'row',justifyContent:'center',alignItems:'center'},text:{},icon:{}});var Button=styled(ButtonComponent);

var _jsxFileName$h="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\buttonGroup\\buttonGroup.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$b=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var ButtonGroupComponent=function(_React$Component){inherits(ButtonGroupComponent,_React$Component);function ButtonGroupComponent(){var _this;classCallCheck(this,ButtonGroupComponent);_this=possibleConstructorReturn(this,getPrototypeOf(ButtonGroupComponent).apply(this,arguments));_this.getComponentStyle=function(source){var dividerBackgroundColor=source.dividerBackgroundColor,dividerWidth=source.dividerWidth,containerParameters=__rest$b(source,["dividerBackgroundColor","dividerWidth"]);return {container:containerParameters,button:{borderEndColor:dividerBackgroundColor,borderEndWidth:dividerWidth}};};_this.isLastElement=function(index){var children=_this.props.children;return index===React.Children.count(children)-1;};_this.renderButtonElement=function(element,index,style){var _this$props=_this.props,appearance=_this$props.appearance,size=_this$props.size,status=_this$props.status;var additionalStyle=_this.isLastElement(index)?styles$8.lastButton:style;return React.cloneElement(element,{key:index,appearance:appearance,size:size,status:status,style:[element.props.style,styles$8.button,additionalStyle]});};_this.renderButtonElements=function(source,style){return React.Children.map(source,function(element,index){return _this.renderButtonElement(element,index,style.button);});};return _this;}createClass(ButtonGroupComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,children=_a.children,derivedProps=__rest$b(_a,["themedStyle","style","children"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,componentStyles=__rest$b(_b,["container"]);var buttonElements=this.renderButtonElements(children,componentStyles);return React.createElement(reactNative.View,_extends_1({},derivedProps,{style:[container,styles$8.container,style],__source:{fileName:_jsxFileName$h,lineNumber:132}}),buttonElements);}}]);return ButtonGroupComponent;}(React.Component);ButtonGroupComponent.styledComponentName='ButtonGroup';var styles$8=reactNative.StyleSheet.create({container:{flexDirection:'row',overflow:'hidden'},button:{borderRadius:0,borderLeftWidth:0,borderTopWidth:0,borderBottomWidth:0},lastButton:{borderWidth:0,borderRadius:0}});var ButtonGroup=styled(ButtonGroupComponent);

var _jsxFileName$i="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\calendar\\components\\calendarHeader.component.js";var __rest$c=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CalendarHeader=function(_React$Component){inherits(CalendarHeader,_React$Component);function CalendarHeader(){var _this;classCallCheck(this,CalendarHeader);_this=possibleConstructorReturn(this,getPrototypeOf(CalendarHeader).apply(this,arguments));_this.renderSpecificTitleIcon=function(style,direction){return React.createElement(Chevron,{style:style,direction:direction,__source:{fileName:_jsxFileName$i,lineNumber:20}});};_this.renderTitleIcon=function(style){var iconStyle=_this.props.iconStyle;return _this.renderSpecificTitleIcon(iconStyle,'bottom');};_this.renderLeftIcon=function(style){var iconStyle=_this.props.iconStyle;return _this.renderSpecificTitleIcon([iconStyle,styles$9.lateralIcon],'left');};_this.renderRightIcon=function(style){var iconStyle=_this.props.iconStyle;return _this.renderSpecificTitleIcon([iconStyle,styles$9.lateralIcon],'right');};_this.renderLateralNavigationControls=function(){return React.createElement(reactNative.View,{style:styles$9.subContainer,__source:{fileName:_jsxFileName$i,lineNumber:35}},React.createElement(Button,{style:styles$9.headerButton,appearance:"ghost",icon:_this.renderLeftIcon,onPress:_this.props.onLeft,__source:{fileName:_jsxFileName$i,lineNumber:36}}),React.createElement(Button,{style:styles$9.headerButton,appearance:"ghost",icon:_this.renderRightIcon,onPress:_this.props.onRight,__source:{fileName:_jsxFileName$i,lineNumber:39}}));};return _this;}createClass(CalendarHeader,[{key:"render",value:function render(){var _a=this.props,style=_a.style,titleStyle=_a.titleStyle,onTitlePress=_a.onTitlePress,title=_a.title,lateralNavigationAllowed=_a.lateralNavigationAllowed,restProps=__rest$c(_a,["style","titleStyle","onTitlePress","title","lateralNavigationAllowed"]);return React.createElement(reactNative.View,_extends_1({style:[styles$9.container,style]},restProps,{__source:{fileName:_jsxFileName$i,lineNumber:47}}),React.createElement(Button,{style:styles$9.headerButton,appearance:"ghost",textStyle:[titleStyle,styles$9.headerButtonText],icon:this.renderTitleIcon,onPress:onTitlePress,__source:{fileName:_jsxFileName$i,lineNumber:48}},title),lateralNavigationAllowed&&this.renderLateralNavigationControls());}}]);return CalendarHeader;}(React.Component);var styles$9=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},headerButton:{paddingVertical:0,paddingHorizontal:0,minWidth:24,minHeight:24},headerButtonText:{marginHorizontal:0},lateralIcon:{marginHorizontal:0},subContainer:{flexDirection:'row',alignItems:'center'}});

var _jsxFileName$j="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\calendar\\components\\calendarMonthHeader.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$d=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CalendarMonthHeader=function(_React$Component){inherits(CalendarMonthHeader,_React$Component);function CalendarMonthHeader(){classCallCheck(this,CalendarMonthHeader);return possibleConstructorReturn(this,getPrototypeOf(CalendarMonthHeader).apply(this,arguments));}createClass(CalendarMonthHeader,[{key:"render",value:function render(){var _a=this.props,style=_a.style,data=_a.data,children=_a.children,restProps=__rest$d(_a,["style","data","children"]);return React.createElement(reactNative.View,_extends_1({},restProps,{style:[styles$a.container,style],__source:{fileName:_jsxFileName$j,lineNumber:22}}),data.map(children));}}]);return CalendarMonthHeader;}(React.Component);var styles$a=reactNative.StyleSheet.create({container:{justifyContent:'center',flexDirection:'row'}});

var _jsxFileName$k="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\viewPager\\viewPager.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$e=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var ViewPager=function(_React$Component){inherits(ViewPager,_React$Component);function ViewPager(){var _this;classCallCheck(this,ViewPager);_this=possibleConstructorReturn(this,getPrototypeOf(ViewPager).apply(this,arguments));_this.containerRef=React.createRef();_this.contentWidth=0;_this.contentOffsetValue=0;_this.contentOffset=new reactNative.Animated.Value(_this.contentOffsetValue);_this.panResponder=reactNative.PanResponder.create(assertThisInitialized(_this));_this.onMoveShouldSetPanResponder=function(event,state){var isHorizontalMove=Math.abs(state.dx)>0&&Math.abs(state.dx)>Math.abs(state.dy);if(isHorizontalMove){var i18nOffset=I18nLayoutService.select(state.dx,-state.dx);var nextSelectedIndex=_this.props.selectedIndex-Math.sign(i18nOffset);return nextSelectedIndex>=0&&nextSelectedIndex<_this.getChildCount();}return false;};_this.onPanResponderMove=function(event,state){var i18nOffset=I18nLayoutService.select(_this.contentWidth,-_this.contentWidth);var selectedPageOffset=_this.props.selectedIndex*i18nOffset;_this.contentOffset.setValue(state.dx-selectedPageOffset);};_this.onPanResponderRelease=function(event,state){if(Math.abs(state.vx)>=0.5||Math.abs(state.dx)>=0.5*_this.contentWidth){var i18nOffset=I18nLayoutService.select(state.dx,-state.dx);var index=i18nOffset>0?_this.props.selectedIndex-1:_this.props.selectedIndex+1;_this.scrollToIndex({index:index,animated:true});}else{var _index=_this.props.selectedIndex;_this.scrollToIndex({index:_index,animated:true});}};_this.scrollToOffset=function(params){_this.createOffsetAnimation(params).start(_this.onContentOffsetAnimationStateEnd);};_this.onLayout=function(event){_this.contentWidth=event.nativeEvent.layout.width/_this.getChildCount();_this.scrollToIndex({index:_this.props.selectedIndex});};_this.onContentOffsetAnimationStateChanged=function(state){_this.contentOffsetValue=I18nLayoutService.select(-state.value,state.value);if(_this.props.onOffsetChange){_this.props.onOffsetChange(_this.contentOffsetValue);}};_this.onContentOffsetAnimationStateEnd=function(result){var selectedIndex=_this.contentOffsetValue/_this.contentWidth;if(selectedIndex!==_this.props.selectedIndex&&_this.props.onSelect){_this.props.onSelect(Math.round(selectedIndex));}};_this.createOffsetAnimation=function(params){var animationDuration=params.animated?300:0;return reactNative.Animated.timing(_this.contentOffset,{toValue:I18nLayoutService.select(-params.offset,params.offset),easing:reactNative.Easing.linear,duration:animationDuration});};_this.renderComponentChild=function(source,index){var contentView=_this.props.shouldLoadComponent(index)?source:null;return React.createElement(reactNative.View,{style:styles$b.contentContainer,__source:{fileName:_jsxFileName$k,lineNumber:212}},contentView);};_this.renderComponentChildren=function(source){return React.Children.map(source,_this.renderComponentChild);};_this.getChildCount=function(){return React.Children.count(_this.props.children);};_this.getContainerStyle=function(){return {width:100*_this.getChildCount()+"%",transform:[{translateX:_this.contentOffset}]};};return _this;}createClass(ViewPager,[{key:"componentDidMount",value:function componentDidMount(){this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.selectedIndex!==this.props.selectedIndex){var index=this.props.selectedIndex;this.scrollToIndex({index:index,animated:true});}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.contentOffset.removeAllListeners();}},{key:"scrollToIndex",value:function scrollToIndex(params){var index=params.index,rest=__rest$e(params,["index"]);var childCount=this.getChildCount()-1;var offset=this.contentWidth*(index<0?0:index>childCount?childCount:index);this.scrollToOffset(_extends_1({offset:offset},rest));}},{key:"render",value:function render(){var _a=this.props,style=_a.style,children=_a.children,restProps=__rest$e(_a,["style","children"]);return React.createElement(reactNative.Animated.View,_extends_1({},restProps,{ref:this.containerRef,style:[styles$b.container,style,this.getContainerStyle()],onLayout:this.onLayout},this.panResponder.panHandlers,{__source:{fileName:_jsxFileName$k,lineNumber:250}}),this.renderComponentChildren(children));}}]);return ViewPager;}(React.Component);ViewPager.defaultProps={selectedIndex:0,shouldLoadComponent:function shouldLoadComponent(){return true;}};var styles$b=reactNative.StyleSheet.create({container:{flexDirection:'row'},contentContainer:{flex:1,width:'100%'}});

var _jsxFileName$l="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\calendar\\components\\calendarPager.component.js";var __rest$f=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CalendarPager=function(_React$Component){inherits(CalendarPager,_React$Component);function CalendarPager(){var _this;classCallCheck(this,CalendarPager);_this=possibleConstructorReturn(this,getPrototypeOf(CalendarPager).apply(this,arguments));_this.viewPagerRef=React.createRef();_this.onSelect=function(index){setTimeout(function(){_this.props.onSelect(index);});};_this.shouldLoadComponent=function(index){if(_this.props.shouldLoadComponent){return _this.props.shouldLoadComponent(index);}return true;};_this.createChildElement=function(date,index){if(_this.shouldLoadComponent(index)){return _this.props.children(date,index);}return null;};return _this;}createClass(CalendarPager,[{key:"scrollToIndex",value:function scrollToIndex(params){this.viewPagerRef.current.scrollToIndex(params);}},{key:"render",value:function render(){var _a=this.props,data=_a.data,children=_a.children,restProps=__rest$f(_a,["data","children"]);return React.createElement(ViewPager,_extends_1({},restProps,{ref:this.viewPagerRef,shouldLoadComponent:this.shouldLoadComponent,onSelect:this.onSelect,__source:{fileName:_jsxFileName$l,lineNumber:42}}),data.map(this.createChildElement));}}]);return CalendarPager;}(React.Component);

var _jsxFileName$m="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\calendar\\components\\picker\\calendarPickerRow.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$g=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CalendarPickerRow=function(_React$Component){inherits(CalendarPickerRow,_React$Component);function CalendarPickerRow(){classCallCheck(this,CalendarPickerRow);return possibleConstructorReturn(this,getPrototypeOf(CalendarPickerRow).apply(this,arguments));}createClass(CalendarPickerRow,[{key:"render",value:function render(){var _a=this.props,style=_a.style,data=_a.data,renderItem=_a.renderItem,restProps=__rest$g(_a,["style","data","renderItem"]);return React.createElement(reactNative.View,_extends_1({},restProps,{style:[styles$c.container,style],__source:{fileName:_jsxFileName$m,lineNumber:22}}),data.map(renderItem));}}]);return CalendarPickerRow;}(React.Component);var styles$c=reactNative.StyleSheet.create({container:{flexDirection:'row',overflow:'hidden'}});

var _jsxFileName$n="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\calendar\\components\\picker\\calendarPickerCell.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$h=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CalendarPickerCellComponent=function(_React$Component){inherits(CalendarPickerCellComponent,_React$Component);function CalendarPickerCellComponent(){var _this;classCallCheck(this,CalendarPickerCellComponent);_this=possibleConstructorReturn(this,getPrototypeOf(CalendarPickerCellComponent).apply(this,arguments));_this.onPress=function(){if(_this.props.onSelect){_this.props.onSelect(_this.props.date);}};_this.getContainerBorderRadius=function(borderRadius){var _this$props=_this.props,firstRangeItem=_this$props.firstRangeItem,lastRangeItem=_this$props.lastRangeItem;if(firstRangeItem){return {borderBottomLeftRadius:borderRadius,borderBottomRightRadius:0,borderTopLeftRadius:borderRadius,borderTopRightRadius:0};}if(lastRangeItem){return {borderBottomLeftRadius:0,borderBottomRightRadius:borderRadius,borderTopLeftRadius:0,borderTopRightRadius:borderRadius};}return {};};_this.getComponentStyle=function(source){var contentBorderWidth=source.contentBorderWidth,contentBorderRadius=source.contentBorderRadius,contentBorderColor=source.contentBorderColor,contentBackgroundColor=source.contentBackgroundColor,contentTextFontSize=source.contentTextFontSize,contentTextLineHeight=source.contentTextLineHeight,contentTextFontWeight=source.contentTextFontWeight,contentTextColor=source.contentTextColor,contentTextFontFamily=source.contentTextFontFamily,borderRadius=source.borderRadius,containerParameters=__rest$h(source,["contentBorderWidth","contentBorderRadius","contentBorderColor","contentBackgroundColor","contentTextFontSize","contentTextLineHeight","contentTextFontWeight","contentTextColor","contentTextFontFamily","borderRadius"]);return {container:_extends_1(_extends_1({},containerParameters),_this.getContainerBorderRadius(borderRadius)),contentContainer:{borderWidth:contentBorderWidth,borderRadius:contentBorderRadius,borderColor:contentBorderColor,backgroundColor:contentBackgroundColor},contentText:{fontSize:contentTextFontSize,fontWeight:contentTextFontWeight,lineHeight:contentTextLineHeight,color:contentTextColor,fontFamily:contentTextFontFamily}};};_this.renderContentElement=function(source,style){return source&&source(_this.props.date,{container:style.contentContainer,text:style.contentText});};return _this;}createClass(CalendarPickerCellComponent,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps){if(nextProps.shouldComponentUpdate){return nextProps.shouldComponentUpdate(this.props,nextProps);}return true;}},{key:"render",value:function render(){var _a=this.props,style=_a.style,themedStyle=_a.themedStyle,date=_a.date,bounding=_a.bounding,children=_a.children,restProps=__rest$h(_a,["style","themedStyle","date","bounding","children"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,componentStyles=__rest$h(_b,["container"]);return React.createElement(reactNative.TouchableOpacity,_extends_1({activeOpacity:1.0,onPress:this.onPress},restProps,{style:[container,styles$d.container,style],__source:{fileName:_jsxFileName$n,lineNumber:83}}),this.renderContentElement(children,componentStyles));}}]);return CalendarPickerCellComponent;}(React.Component);CalendarPickerCellComponent.styledComponentName='CalendarCell';CalendarPickerCellComponent.defaultProps={selected:false,today:false};var styles$d=reactNative.StyleSheet.create({container:{flex:1}});var CalendarPickerCell=styled(CalendarPickerCellComponent);

var _jsxFileName$o="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\calendar\\components\\picker\\calendarPicker.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$i=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CalendarPicker=function(_React$Component){inherits(CalendarPicker,_React$Component);function CalendarPicker(){var _this;classCallCheck(this,CalendarPicker);_this=possibleConstructorReturn(this,getPrototypeOf(CalendarPicker).apply(this,arguments));_this.isFirstRangeItem=function(item,range){return range.indexOf(item)===0;};_this.isLastRangeItem=function(item,range){return range.indexOf(item)===range.length-1;};_this.renderCellElement=function(item,index){var isFirstRangeItem=_this.isFirstRangeItem(item,_this.rangedArray);var isLastRangeItem=_this.isLastRangeItem(item,_this.rangedArray);return React.createElement(CalendarPickerCell,{key:index,date:item,category:_this.props.category,selected:_this.props.isItemSelected(item),disabled:_this.props.isItemDisabled(item),bounding:item.bounding,today:_this.props.isItemToday(item),range:item.range,firstRangeItem:isFirstRangeItem,lastRangeItem:isLastRangeItem,onSelect:_this.props.onSelect,shouldComponentUpdate:_this.props.shouldItemUpdate,__source:{fileName:_jsxFileName$o,lineNumber:33}},_this.props.renderItem);};_this.renderRowElement=function(item,index){var rowStyle=_this.props.rowStyle;return React.createElement(CalendarPickerRow,{style:rowStyle,key:index,data:item,renderItem:_this.renderCellElement,__source:{fileName:_jsxFileName$o,lineNumber:39}});};return _this;}createClass(CalendarPicker,[{key:"render",value:function render(){var _a=this.props,data=_a.data,renderItem=_a.renderItem,restProps=__rest$i(_a,["data","renderItem"]);return React.createElement(reactNative.View,_extends_1({},restProps,{__source:{fileName:_jsxFileName$o,lineNumber:50}}),data.map(this.renderRowElement));}},{key:"rangedArray",get:function get(){var _ref;var data=this.props.data;return (_ref=[]).concat.apply(_ref,toConsumableArray(data)).filter(function(item){return item.range;});}}]);return CalendarPicker;}(React.Component);

var _jsxFileName$p="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\calendar\\components\\calendarDateContent.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$j=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CalendarDateContent=function(_React$Component){inherits(CalendarDateContent,_React$Component);function CalendarDateContent(){classCallCheck(this,CalendarDateContent);return possibleConstructorReturn(this,getPrototypeOf(CalendarDateContent).apply(this,arguments));}createClass(CalendarDateContent,[{key:"render",value:function render(){var _a=this.props,style=_a.style,textStyle=_a.textStyle,children=_a.children,restProps=__rest$j(_a,["style","textStyle","children"]);return React.createElement(reactNative.View,_extends_1({},restProps,{style:[styles$e.container,style],__source:{fileName:_jsxFileName$p,lineNumber:23}}),React.createElement(Text,{style:textStyle,__source:{fileName:_jsxFileName$p,lineNumber:24}},children));}}]);return CalendarDateContent;}(React.Component);var styles$e=reactNative.StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center'}});

var VIEW_MODE_DATE={id:'DATE',navigationNext:function navigationNext(){return VIEW_MODE_YEAR;},pickNext:function pickNext(){return VIEW_MODE_DATE;}};var VIEW_MODE_MONTH={id:'MONTH',navigationNext:function navigationNext(){return VIEW_MODE_DATE;},pickNext:function pickNext(){return VIEW_MODE_DATE;}};var VIEW_MODE_YEAR={id:'YEAR',navigationNext:function navigationNext(){return VIEW_MODE_DATE;},pickNext:function pickNext(){return VIEW_MODE_MONTH;}};var CalendarViewModes={DATE:VIEW_MODE_DATE,MONTH:VIEW_MODE_MONTH,YEAR:VIEW_MODE_YEAR};

var DateService=function(){function DateService(){classCallCheck(this,DateService);}createClass(DateService,[{key:"setLocale",value:function setLocale(locale){this.locale=locale;}},{key:"compareDatesSafe",value:function compareDatesSafe(date1,date2){if(date1&&date2){return this.compareDates(date1,date2);}else if(!date1&&!date2){return 0;}return -1;}},{key:"isBetween",value:function isBetween(date,start,end){return this.compareDates(date,start)>0&&this.compareDates(date,end)<0;}},{key:"isBetweenSafe",value:function isBetweenSafe(date,start,end){return date&&start&&end&&this.compareDates(date,start)>0&&this.compareDates(date,end)<0;}},{key:"isBetweenIncluding",value:function isBetweenIncluding(date,start,end){return this.compareDates(date,start)>=0&&this.compareDates(date,end)<=0;}},{key:"isBetweenIncludingSafe",value:function isBetweenIncludingSafe(date,start,end){return date&&start&&end&&this.isBetweenIncluding(date,start,end);}},{key:"isSameDaySafe",value:function isSameDaySafe(date1,date2){return date1&&date2&&this.isSameDay(date1,date2);}},{key:"isSameMonthSafe",value:function isSameMonthSafe(date1,date2){return date1&&date2&&this.isSameMonth(date1,date2);}},{key:"isSameYearSafe",value:function isSameYearSafe(date1,date2){return date1&&date2&&this.isSameYear(date1,date2);}}]);return DateService;}();DateService.DAYS_IN_WEEK=7;DateService.MONTHS_IN_YEAR=12;

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

var superPropBase = _superPropBase;

var get = createCommonjsModule(function (module) {
function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
});

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

(function(TranslationWidth){TranslationWidth["SHORT"]="short";TranslationWidth["LONG"]="long";})(exports.TranslationWidth||(exports.TranslationWidth={}));

var EN={dayNames:{short:['Su','Mo','Tu','We','Th','Fr','Sa'],long:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']},monthNames:{short:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],long:['January','February','March','April','May','June','July','August','September','October','November','December']}};

var LOCALE_DEFAULT='en';var FIRST_DAY_OF_WEEK=0;var NativeDateService=function(_DateService){inherits(NativeDateService,_DateService);function NativeDateService(){var _this;var locale=arguments.length>0&&arguments[0]!==undefined?arguments[0]:LOCALE_DEFAULT;var i18n=arguments.length>1?arguments[1]:undefined;classCallCheck(this,NativeDateService);_this=possibleConstructorReturn(this,getPrototypeOf(NativeDateService).call(this));get(getPrototypeOf(NativeDateService.prototype),"setLocale",assertThisInitialized(_this)).call(assertThisInitialized(_this),i18n?locale:LOCALE_DEFAULT);_this.setFechaLocaleData(i18n||EN);return _this;}createClass(NativeDateService,[{key:"setLocale",value:function setLocale(locale){console.warn('Runtime locale is not supported');}},{key:"isValidDateString",value:function isValidDateString(date,format){return !isNaN(this.parse(date,format).getTime());}},{key:"today",value:function today(){return new Date();}},{key:"getDate",value:function getDate(date){return date.getDate();}},{key:"getMonth",value:function getMonth(date){return date.getMonth();}},{key:"getYear",value:function getYear(date){return date.getFullYear();}},{key:"getDayOfWeek",value:function getDayOfWeek(date){return date.getDay();}},{key:"getFirstDayOfWeek",value:function getFirstDayOfWeek(){return FIRST_DAY_OF_WEEK;}},{key:"getMonthName",value:function getMonthName(date){var style=arguments.length>1&&arguments[1]!==undefined?arguments[1]:exports.TranslationWidth.SHORT;var index=date.getMonth();return this.getMonthNameByIndex(index,style);}},{key:"getMonthNameByIndex",value:function getMonthNameByIndex(index){var style=arguments.length>1&&arguments[1]!==undefined?arguments[1]:exports.TranslationWidth.SHORT;return this.getFechaMonthNames(style)[index];}},{key:"getDayOfWeekNames",value:function getDayOfWeekNames(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:exports.TranslationWidth.SHORT;return this.getFechaDayNames(style);}},{key:"format",value:function format(date,_format){return fecha.format(date,_format);}},{key:"parse",value:function parse(date,format){return new Date(Date.parse(date));}},{key:"addDay",value:function addDay(date,num){return this.createDate(date.getFullYear(),date.getMonth(),date.getDate()+num);}},{key:"addMonth",value:function addMonth(date,num){var month=this.createDate(date.getFullYear(),date.getMonth()+num,1);month.setDate(Math.min(date.getDate(),this.getMonthEnd(month).getDate()));return month;}},{key:"addYear",value:function addYear(date,num){return this.createDate(date.getFullYear()+num,date.getMonth(),date.getDate());}},{key:"clone",value:function clone(date){return new Date(date.getTime());}},{key:"compareDates",value:function compareDates(date1,date2){return date1.getTime()-date2.getTime();}},{key:"compareDatesSafe",value:function compareDatesSafe(date1,date2){if(this.compareDates(date1,date2)<0){return -1;}else if(this.compareDates(date1,date2)>0){return 1;}else if(this.compareDates(date1,date2)===0){return 0;}}},{key:"createDate",value:function createDate(year,month,date){var result=new Date(Date.UTC(year,month,date));if(year>=0&&year<100){result.setFullYear(result.getFullYear()-1900);}return result;}},{key:"getMonthEnd",value:function getMonthEnd(date){return this.createDate(date.getFullYear(),date.getMonth()+1,0);}},{key:"getMonthStart",value:function getMonthStart(date){return this.createDate(date.getFullYear(),date.getMonth(),1);}},{key:"getNumberOfDaysInMonth",value:function getNumberOfDaysInMonth(date){return this.getMonthEnd(date).getDate();}},{key:"getYearEnd",value:function getYearEnd(date){return this.createDate(date.getFullYear(),11,31);}},{key:"getYearStart",value:function getYearStart(date){return this.createDate(date.getFullYear(),0,1);}},{key:"isSameDay",value:function isSameDay(date1,date2){return this.isSameMonth(date1,date2)&&date1.getDate()===date2.getDate();}},{key:"isSameMonth",value:function isSameMonth(date1,date2){return this.isSameYear(date1,date2)&&date1.getMonth()===date2.getMonth();}},{key:"isSameYear",value:function isSameYear(date1,date2){return date1.getFullYear()===date2.getFullYear();}},{key:"getId",value:function getId(){return 'native';}},{key:"getFechaDayNames",value:function getFechaDayNames(style){switch(style){case exports.TranslationWidth.SHORT:return fecha.i18n.dayNamesShort;case exports.TranslationWidth.LONG:return fecha.i18n.dayNames;}}},{key:"getFechaMonthNames",value:function getFechaMonthNames(style){switch(style){case exports.TranslationWidth.SHORT:return fecha.i18n.monthNamesShort;case exports.TranslationWidth.LONG:return fecha.i18n.monthNames;}}},{key:"setFechaLocaleData",value:function setFechaLocaleData(config){fecha.i18n.dayNames=config.dayNames[exports.TranslationWidth.LONG];fecha.i18n.dayNamesShort=config.dayNames[exports.TranslationWidth.SHORT];fecha.i18n.monthNames=config.monthNames[exports.TranslationWidth.LONG];fecha.i18n.monthNamesShort=config.monthNames[exports.TranslationWidth.SHORT];}}]);return NativeDateService;}(DateService);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var batch=function batch(target,batchSize){var offset=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;return target.reduce(function(res,item,index){var chunkIndex=Math.floor((index+offset)/batchSize);if(!res[chunkIndex]){res[chunkIndex]=[];}res[chunkIndex].push(item);return res;},[]);};var range=function range(bound){var producer=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(i){return i;};var arr=[];for(var i=0;i<bound;i++){arr.push(producer(i));}return arr;};

var DEFAULT_DATE_OPTIONS={bounding:false,holiday:false,range:false};var CalendarDataService=function(){function CalendarDataService(dateService){var _this=this;classCallCheck(this,CalendarDataService);this.dateService=dateService;this.createDayPickerData=function(date,dateRange){var weeks=_this.createDates(date,DEFAULT_DATE_OPTIONS,dateRange);return _this.withBoundingMonths(weeks,date);};this.createMonthPickerData=function(date,rows,columns){var yearStart=_this.dateService.getYearStart(date);var monthRange=range(rows*columns,function(index){var monthDate=_this.dateService.addMonth(yearStart,index);return _extends_1({date:monthDate},DEFAULT_DATE_OPTIONS);});return batch(monthRange,rows);};this.createYearPickerData=function(date,rows,columns){var yearStart=_this.dateService.getYearStart(date);var yearRange=range(rows*columns,function(index){var yearDate=_this.dateService.addYear(yearStart,index);return _extends_1({date:yearDate},DEFAULT_DATE_OPTIONS);});return batch(yearRange,rows);};this.createDayPickerPagerData=function(startDate,endDate){var numberOfDayPickers=_this.getNumberOfMonths(startDate,endDate)+1;return range(numberOfDayPickers,function(index){var monthDate=_this.dateService.addMonth(startDate,index);return _extends_1({date:monthDate},DEFAULT_DATE_OPTIONS);});};this.createYearPickerPagerData=function(startDate,endDate,rows,columns){var numberOfYears=_this.getNumberOfYears(startDate,endDate)+1;var numberOfYearPickers=Math.max(Math.ceil(numberOfYears/(rows*columns)),1);return range(numberOfYearPickers,function(index){var yearDate=_this.dateService.addYear(startDate,index*rows*columns);return _extends_1({date:yearDate},DEFAULT_DATE_OPTIONS);});};this.getNumberOfMonths=function(lhs,rhs){var numberOfYears=_this.getNumberOfYears(lhs,rhs);var numberOfMonths=_this.dateService.getMonth(rhs)-_this.dateService.getMonth(lhs);return numberOfMonths+numberOfYears*DateService.MONTHS_IN_YEAR;};this.getNumberOfYears=function(lhs,rhs){return _this.dateService.getYear(rhs)-_this.dateService.getYear(lhs);};}createClass(CalendarDataService,[{key:"createDates",value:function createDates(activeMonth,options,dateRange){var days=this.createDateRangeForMonth(activeMonth,options);if(dateRange){days=this.withRangedDates(days,dateRange);}var startOfWeekDayDiff=this.getStartOfWeekDayDiff(activeMonth);return batch(days,DateService.DAYS_IN_WEEK,startOfWeekDayDiff);}},{key:"withRangedDates",value:function withRangedDates(days,calendarRange){if(calendarRange.startDate&&!calendarRange.endDate){return this.withRangedStartDates(days,calendarRange.startDate);}if(calendarRange.startDate&&calendarRange.endDate){return this.withRangedStartEndDates(days,calendarRange.startDate,calendarRange.endDate);}return days;}},{key:"withRangedStartDates",value:function withRangedStartDates(days,startDate){var _this2=this;return days.map(function(day){var isSameStartDate=_this2.dateService.compareDatesSafe(day.date,startDate)===0;return isSameStartDate?_extends_1(_extends_1({},day),{range:true}):day;});}},{key:"withRangedStartEndDates",value:function withRangedStartEndDates(days,startDate,endDate){var _this3=this;return days.map(function(day){var isSameStartDate=_this3.dateService.compareDatesSafe(day.date,startDate)===0;var isSameEndDate=_this3.dateService.compareDatesSafe(day.date,endDate)===0;if(isSameStartDate||isSameEndDate){return _extends_1(_extends_1({},day),{range:true});}else{var isInRange=_this3.dateService.isBetween(day.date,startDate,endDate);return _extends_1(_extends_1({},day),{range:isInRange});}});}},{key:"withBoundingMonths",value:function withBoundingMonths(weeks,activeMonth){var withBoundingMonths=weeks;if(this.isShouldAddPrevBoundingMonth(withBoundingMonths)){withBoundingMonths=this.addPrevBoundingMonth(withBoundingMonths,activeMonth);}if(this.isShouldAddNextBoundingMonth(withBoundingMonths)){withBoundingMonths=this.addNextBoundingMonth(withBoundingMonths,activeMonth);}return withBoundingMonths;}},{key:"addPrevBoundingMonth",value:function addPrevBoundingMonth(weeks,activeMonth){var firstWeek=weeks.shift();var numberOfBoundingDates=DateService.DAYS_IN_WEEK-firstWeek.length;firstWeek.unshift.apply(firstWeek,toConsumableArray(this.createPrevBoundingDays(activeMonth,numberOfBoundingDates)));return [firstWeek].concat(toConsumableArray(weeks));}},{key:"addNextBoundingMonth",value:function addNextBoundingMonth(weeks,activeMonth){var lastWeek=weeks.pop();var numberOfBoundingDates=DateService.DAYS_IN_WEEK-lastWeek.length;lastWeek.push.apply(lastWeek,toConsumableArray(this.createNextBoundingDays(activeMonth,numberOfBoundingDates)));return [].concat(toConsumableArray(weeks),[lastWeek]);}},{key:"createPrevBoundingDays",value:function createPrevBoundingDays(activeMonth,numberOfBoundingDates){var month=this.dateService.addMonth(activeMonth,-1);var daysInMonth=this.dateService.getNumberOfDaysInMonth(month);return this.createDateRangeForMonth(month,DEFAULT_DATE_OPTIONS).slice(daysInMonth-numberOfBoundingDates).map(function(date){return _extends_1(_extends_1({},date),{bounding:true});});}},{key:"createNextBoundingDays",value:function createNextBoundingDays(activeMonth,numberOfBoundingDates){var month=this.dateService.addMonth(activeMonth,1);return this.createDateRangeForMonth(month,DEFAULT_DATE_OPTIONS).slice(0,numberOfBoundingDates).map(function(date){return _extends_1(_extends_1({},date),{bounding:true});});}},{key:"getStartOfWeekDayDiff",value:function getStartOfWeekDayDiff(date){var startOfMonth=this.dateService.getMonthStart(date);return this.getWeekStartDiff(startOfMonth);}},{key:"getWeekStartDiff",value:function getWeekStartDiff(date){return (DateService.DAYS_IN_WEEK-this.dateService.getFirstDayOfWeek()+this.dateService.getDayOfWeek(date))%DateService.DAYS_IN_WEEK;}},{key:"isShouldAddPrevBoundingMonth",value:function isShouldAddPrevBoundingMonth(weeks){return weeks[0].length<DateService.DAYS_IN_WEEK;}},{key:"isShouldAddNextBoundingMonth",value:function isShouldAddNextBoundingMonth(weeks){return weeks[weeks.length-1].length<DateService.DAYS_IN_WEEK;}},{key:"createDateRangeForMonth",value:function createDateRangeForMonth(monthDate,options){var _this4=this;var daysInMonth=this.dateService.getNumberOfDaysInMonth(monthDate);return range(daysInMonth,function(i){var year=_this4.dateService.getYear(monthDate);var month=_this4.dateService.getMonth(monthDate);var date=_this4.dateService.createDate(year,month,i+1);return _extends_1({date:date},options);});}}]);return CalendarDataService;}();

var _jsxFileName$q="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\divider\\divider.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$k=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var DividerComponent=function(_React$Component){inherits(DividerComponent,_React$Component);function DividerComponent(){classCallCheck(this,DividerComponent);return possibleConstructorReturn(this,getPrototypeOf(DividerComponent).apply(this,arguments));}createClass(DividerComponent,[{key:"render",value:function render(){var _a=this.props,style=_a.style,themedStyle=_a.themedStyle,restProps=__rest$k(_a,["style","themedStyle"]);return React.createElement(reactNative.View,_extends_1({},restProps,{style:[themedStyle,style],__source:{fileName:_jsxFileName$q,lineNumber:23}}));}}]);return DividerComponent;}(React.Component);DividerComponent.styledComponentName='Divider';var Divider=styled(DividerComponent);

var _jsxFileName$r="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\calendar\\baseCalendar.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$l=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var PICKER_ROWS=4;var PICKER_COLUMNS=3;var VIEWS_IN_PICKER=PICKER_ROWS*PICKER_COLUMNS;var FORMAT_DAY='D';var FORMAT_MONTH='MMM';var FORMAT_YEAR='YYYY';var FORMAT_HEADER_DATE='MMM YYYY';var FORMAT_HEADER_MONTH='YYYY';var FORMAT_HEADER_YEAR='YYYY';var BaseCalendarComponent=function(_React$Component){inherits(BaseCalendarComponent,_React$Component);function BaseCalendarComponent(){var _this;classCallCheck(this,BaseCalendarComponent);_this=possibleConstructorReturn(this,getPrototypeOf(BaseCalendarComponent).apply(this,arguments));_this.state={viewMode:_this.props.startView,visibleDate:_this.dateService.getMonthStart(_this.getSelectedDate())};_this.dataService=new CalendarDataService(_this.dateService);_this.calendarDayPagerRef=React.createRef();_this.calendarYearPagerRef=React.createRef();_this.scrollToToday=function(){_this.setState({viewMode:CalendarViewModes.DATE,visibleDate:_this.dateService.today()});};_this.onSelect=function(item){_this.onDaySelect(item);};_this.onMonthSelect=function(date){var nextVisibleDate=_this.dateService.createDate(_this.dateService.getYear(_this.state.visibleDate),_this.dateService.getMonth(date.date),_this.dateService.getDate(_this.state.visibleDate));_this.setState({viewMode:_this.state.viewMode.pickNext(),visibleDate:nextVisibleDate});};_this.onYearSelect=function(date){var nextVisibleDate=_this.dateService.createDate(_this.dateService.getYear(date.date),_this.dateService.getMonth(_this.state.visibleDate),_this.dateService.getDate(_this.state.visibleDate));_this.setState({viewMode:_this.state.viewMode.pickNext(),visibleDate:nextVisibleDate});};_this.onDayPickerPagerSelect=function(index){var yearStart=_this.dateService.getYearStart(_this.min);_this.setState({visibleDate:_this.dateService.addMonth(yearStart,index)});};_this.onYearPickerPagerSelect=function(index){var yearStart=_this.dateService.getYearStart(_this.min);_this.setState({visibleDate:_this.dateService.addYear(yearStart,index*VIEWS_IN_PICKER)});};_this.onPickerNavigationPress=function(){_this.setState({viewMode:_this.state.viewMode.navigationNext()});};_this.onCalendarPagerLeft=function(){_this.onCalendarPagerMove(-1);};_this.onCalendarPagerRight=function(){_this.onCalendarPagerMove(1);};_this.onCalendarPagerMove=function(step){var ref=_this.getCurrentPagerRef();var index=_this.getCalendarPagerIndex();_this.onCalendarPagerMoveStart(ref,index,step);};_this.onCalendarPagerMoveStart=function(ref,index,step){ref.current.scrollToIndex({index:index+step,animated:true});};_this.shouldUpdateDayItem=function(props,nextProps){return _this.shouldUpdateDayElement(props,nextProps);};_this.getCalendarStyle=function(source){return {container:{paddingVertical:source.paddingVertical,borderColor:source.borderColor,borderWidth:source.borderWidth,borderRadius:source.borderRadius,maxWidth:source.maxWidth,maxHeight:source.maxHeight},headerContainer:{paddingHorizontal:source.headerPaddingHorizontal,paddingVertical:source.headerPaddingVertical},title:{fontSize:source.titleFontSize,fontWeight:source.titleFontWeight,lineHeight:source.titleLineHeight,color:source.titleColor,fontFamily:source.titleFontFamily},icon:{width:source.iconWidth,height:source.iconHeight,tintColor:source.iconTintColor},divider:{marginVertical:source.dividerMarginVertical},daysHeaderContainer:{marginHorizontal:source.rowMarginHorizontal},row:{minHeight:source.rowMinHeight,marginHorizontal:source.rowMarginHorizontal}};};_this.getWeekdayStyle=function(source){return {fontSize:source.weekdayTextFontSize,fontWeight:source.weekdayTextFontWeight,lineHeight:source.weekdayTextLineHeight,color:source.weekdayTextColor,fontFamily:source.weekdayTextFontFamily};};_this.getIsDaySelected=function(date){return _this.isDaySelected(date);};_this.isMonthSelected=function(date){return _this.dateService.isSameMonthSafe(date.date,_this.getSelectedDate());};_this.isYearSelected=function(date){return _this.dateService.isSameYearSafe(date.date,_this.getSelectedDate());};_this.isDayDisabled=function(date){return !_this.isDateFitsBounds(date)||_this.isDateFitsFilter(date);};_this.isMonthDisabled=function(date){return !_this.isDateFitsBounds(date)||_this.isDateFitsFilter(date);};_this.isYearDisabled=function(date){return !_this.isDateFitsBounds(date)||_this.isDateFitsFilter(date);};_this.isDayToday=function(date){return _this.dateService.isSameDaySafe(date.date,_this.dateService.today());};_this.isMonthToday=function(date){return _this.dateService.isSameMonthSafe(date.date,_this.dateService.today());};_this.isYearToday=function(date){return _this.dateService.isSameYearSafe(date.date,_this.dateService.today());};_this.isDateFitsFilter=function(date){return _this.props.filter&&!_this.props.filter(date.date)||false;};_this.isDateFitsBounds=function(date){return _this.dateService.isBetweenIncludingSafe(date.date,_this.min,_this.max);};_this.isDayPickerInViewPort=function(index){var visibleDayPickerIndex=_this.dataService.getNumberOfMonths(_this.min,_this.state.visibleDate);return index===visibleDayPickerIndex||Math.abs(index-visibleDayPickerIndex)===1;};_this.isYearPickerInViewPort=function(index){var numberOfYears=_this.dataService.getNumberOfYears(_this.min,_this.state.visibleDate);var visibleYearPickerIndex=Math.floor(numberOfYears/VIEWS_IN_PICKER);return index===visibleYearPickerIndex||Math.abs(index-visibleYearPickerIndex)===1;};_this.createHeaderTitle=function(date,viewMode){switch(viewMode){case CalendarViewModes.DATE:return _this.dateService.format(date,FORMAT_HEADER_DATE);case CalendarViewModes.MONTH:{return _this.dateService.format(date,FORMAT_HEADER_MONTH);}case CalendarViewModes.YEAR:{var minDateFormat=_this.dateService.format(_this.min,FORMAT_HEADER_YEAR);var maxDateFormat=_this.dateService.format(_this.max,FORMAT_HEADER_YEAR);return minDateFormat+" - "+maxDateFormat;}}};_this.getCalendarPagerIndex=function(){switch(_this.state.viewMode.id){case CalendarViewModes.DATE.id:return _this.dataService.getNumberOfMonths(_this.min,_this.state.visibleDate);case CalendarViewModes.YEAR.id:return Math.floor(_this.dataService.getNumberOfYears(_this.min,_this.state.visibleDate)/VIEWS_IN_PICKER);}};_this.getCurrentPagerRef=function(){switch(_this.state.viewMode.id){case CalendarViewModes.DATE.id:return _this.calendarDayPagerRef;case CalendarViewModes.YEAR.id:return _this.calendarYearPagerRef;}};_this.isLateralNavigationAllowed=function(){var viewMode=_this.state.viewMode;return viewMode.id===CalendarViewModes.DATE.id||viewMode.id===CalendarViewModes.YEAR.id;};_this.renderWeekdayElement=function(weekday,index){return React.createElement(CalendarDateContent,{key:index,textStyle:_this.getWeekdayStyle(_this.props.themedStyle),__source:{fileName:_jsxFileName$r,lineNumber:232}},weekday);};_this.renderDayElement=function(date,style){return React.createElement(CalendarDateContent,{style:style.container,textStyle:style.text,__source:{fileName:_jsxFileName$r,lineNumber:237}},_this.dateService.format(date.date,FORMAT_DAY));};_this.renderDayIfNeeded=function(item,style){var shouldRender=!item.bounding||_this.props.boundingMonth;if(shouldRender){var renderSelector=_this.props.renderDay||_this.renderDayElement;return renderSelector(item,style);}return null;};_this.renderMonthElement=function(date,style){return React.createElement(CalendarDateContent,{style:[style.container,styles$f.monthCell],textStyle:style.text,__source:{fileName:_jsxFileName$r,lineNumber:250}},_this.dateService.format(date.date,FORMAT_MONTH));};_this.renderYearElement=function(date,style){return React.createElement(CalendarDateContent,{style:[style.container,styles$f.yearCell],textStyle:style.text,__source:{fileName:_jsxFileName$r,lineNumber:255}},_this.dateService.format(date.date,FORMAT_YEAR));};_this.renderDayPickerElement=function(date,index){var _this$getCalendarStyl=_this.getCalendarStyle(_this.props.themedStyle),row=_this$getCalendarStyl.row;return React.createElement(CalendarPicker,{key:index,category:"day",data:_this.getDayPickerData(date),rowStyle:row,onSelect:_this.onSelect,isItemSelected:_this.getIsDaySelected,isItemDisabled:_this.isDayDisabled,isItemToday:_this.isDayToday,shouldItemUpdate:_this.shouldUpdateDayItem,renderItem:_this.renderDayIfNeeded,__source:{fileName:_jsxFileName$r,lineNumber:261}});};_this.renderDayPickerPagerElement=function(date){var themedStyle=_this.props.themedStyle;var _this$getCalendarStyl2=_this.getCalendarStyle(themedStyle),divider=_this$getCalendarStyl2.divider,daysHeaderContainer=_this$getCalendarStyl2.daysHeaderContainer;var visibleDayPickerIndex=_this.dataService.getNumberOfMonths(_this.min,_this.state.visibleDate);return React.createElement(React.Fragment,{__source:{fileName:_jsxFileName$r,lineNumber:267}},React.createElement(CalendarMonthHeader,{style:daysHeaderContainer,data:_this.dateService.getDayOfWeekNames(),__source:{fileName:_jsxFileName$r,lineNumber:268}},_this.renderWeekdayElement),React.createElement(Divider,{style:divider,__source:{fileName:_jsxFileName$r,lineNumber:271}}),React.createElement(CalendarPager,{ref:_this.calendarDayPagerRef,selectedIndex:visibleDayPickerIndex,data:_this.dataService.createDayPickerPagerData(_this.min,_this.max),onSelect:_this.onDayPickerPagerSelect,shouldLoadComponent:_this.isDayPickerInViewPort,__source:{fileName:_jsxFileName$r,lineNumber:272}},_this.renderDayPickerElement));};_this.renderMonthPickerElement=function(date){var _this$getCalendarStyl3=_this.getCalendarStyle(_this.props.themedStyle),row=_this$getCalendarStyl3.row;return React.createElement(CalendarPicker,{category:"month",data:_this.dataService.createMonthPickerData(date,PICKER_ROWS,PICKER_COLUMNS),rowStyle:row,onSelect:_this.onMonthSelect,isItemSelected:_this.isMonthSelected,isItemDisabled:_this.isMonthDisabled,isItemToday:_this.isMonthToday,renderItem:_this.props.renderMonth||_this.renderMonthElement,__source:{fileName:_jsxFileName$r,lineNumber:279}});};_this.renderYearPickerElement=function(date,index){var _this$getCalendarStyl4=_this.getCalendarStyle(_this.props.themedStyle),row=_this$getCalendarStyl4.row;return React.createElement(CalendarPicker,{key:index,category:"year",data:_this.dataService.createYearPickerData(date.date,PICKER_ROWS,PICKER_COLUMNS),rowStyle:row,onSelect:_this.onYearSelect,isItemSelected:_this.isYearSelected,isItemDisabled:_this.isYearDisabled,isItemToday:_this.isYearToday,renderItem:_this.props.renderYear||_this.renderYearElement,__source:{fileName:_jsxFileName$r,lineNumber:283}});};_this.renderYearPickerPagerElement=function(date){var numberOfYears=_this.dataService.getNumberOfYears(_this.min,_this.state.visibleDate);var visibleYearPickerIndex=Math.floor(numberOfYears/VIEWS_IN_PICKER);return React.createElement(CalendarPager,{ref:_this.calendarYearPagerRef,selectedIndex:visibleYearPickerIndex,data:_this.dataService.createYearPickerPagerData(_this.min,_this.max,PICKER_ROWS,PICKER_COLUMNS),onSelect:_this.onYearPickerPagerSelect,shouldLoadComponent:_this.isYearPickerInViewPort,__source:{fileName:_jsxFileName$r,lineNumber:288}},_this.renderYearPickerElement);};_this.renderPickerElement=function(date){switch(_this.state.viewMode.id){case CalendarViewModes.DATE.id:return _this.renderDayPickerPagerElement(date);case CalendarViewModes.MONTH.id:return _this.renderMonthPickerElement(date);case CalendarViewModes.YEAR.id:return _this.renderYearPickerPagerElement(date);}};_this.renderCalendarFooter=function(){var renderFooter=_this.props.renderFooter;return renderFooter&&renderFooter();};_this.renderCalendarHeader=function(){var _this$props=_this.props,themedStyle=_this$props.themedStyle,title=_this$props.title;var _this$getCalendarStyl5=_this.getCalendarStyle(themedStyle),headerContainer=_this$getCalendarStyl5.headerContainer,titleStyle=_this$getCalendarStyl5.title,icon=_this$getCalendarStyl5.icon;var titleSelector=title||_this.createHeaderTitle;return React.createElement(CalendarHeader,{style:headerContainer,title:titleSelector(_this.state.visibleDate,_this.state.viewMode),titleStyle:titleStyle,iconStyle:icon,lateralNavigationAllowed:_this.isLateralNavigationAllowed(),onTitlePress:_this.onPickerNavigationPress,onLeft:_this.onCalendarPagerLeft,onRight:_this.onCalendarPagerRight,__source:{fileName:_jsxFileName$r,lineNumber:310}});};return _this;}createClass(BaseCalendarComponent,[{key:"render",value:function render(){var _a=this.props,style=_a.style,themedStyle=_a.themedStyle,restProps=__rest$l(_a,["style","themedStyle"]);var _this$getCalendarStyl6=this.getCalendarStyle(themedStyle),container=_this$getCalendarStyl6.container;return React.createElement(reactNative.View,_extends_1({},restProps,{style:[styles$f.container,container,style],__source:{fileName:_jsxFileName$r,lineNumber:325}}),this.renderCalendarHeader(),this.renderPickerElement(this.state.visibleDate),this.renderCalendarFooter());}},{key:"dateService",get:function get(){return this.props.dateService;}},{key:"min",get:function get(){return this.props.min||this.dateService.getYearStart(this.dateService.today());}},{key:"max",get:function get(){return this.props.max||this.dateService.getYearEnd(this.dateService.today());}}]);return BaseCalendarComponent;}(React.Component);BaseCalendarComponent.defaultProps={dateService:new NativeDateService(),boundingMonth:true,startView:CalendarViewModes.DATE};var styles$f=reactNative.StyleSheet.create({container:{overflow:'hidden'},monthCell:{aspectRatio:0.25*DateService.DAYS_IN_WEEK},yearCell:{aspectRatio:0.25*DateService.DAYS_IN_WEEK}});

var CalendarComponent=function(_BaseCalendarComponen){inherits(CalendarComponent,_BaseCalendarComponen);function CalendarComponent(){classCallCheck(this,CalendarComponent);return possibleConstructorReturn(this,getPrototypeOf(CalendarComponent).apply(this,arguments));}createClass(CalendarComponent,[{key:"onDaySelect",value:function onDaySelect(date){var onSelect=this.props.onSelect;if(onSelect){onSelect(date.date);}}},{key:"getDayPickerData",value:function getDayPickerData(date){return this.dataService.createDayPickerData(date.date);}},{key:"getSelectedDate",value:function getSelectedDate(){return this.props.date||this.dateService.today();}},{key:"isDaySelected",value:function isDaySelected(date){return this.dateService.isSameDaySafe(date.date,this.getSelectedDate());}},{key:"shouldUpdateDayElement",value:function shouldUpdateDayElement(props,nextProps){var dateChanged=this.dateService.compareDatesSafe(props.date.date,nextProps.date.date)!==0;if(dateChanged){return true;}var selectionChanged=props.selected!==nextProps.selected;var disablingChanged=props.disabled!==nextProps.disabled;var value=selectionChanged||disablingChanged;if(value){return true;}return props.theme!==nextProps.theme;}}]);return CalendarComponent;}(BaseCalendarComponent);CalendarComponent.styledComponentName='Calendar';var Calendar=styled(CalendarComponent);

var RangeDateService=function(){function RangeDateService(dateService){classCallCheck(this,RangeDateService);this.dateService=dateService;}createClass(RangeDateService,[{key:"createRange",value:function createRange(range,date){switch(true){case!range.startDate&&!range.endDate:return {startDate:date.date,endDate:null};case range.startDate&&!range.endDate:return this.createRangeForStart(range,date);case range.startDate!==null&&range.endDate!==null:return this.createRangeForStartEnd(date);default:return range;}}},{key:"createRangeForStart",value:function createRangeForStart(range,date){if(this.dateService.compareDatesSafe(date.date,range.startDate)===1){return {startDate:range.startDate,endDate:date.date};}else if(this.dateService.compareDatesSafe(date.date,range.startDate)===-1){return {startDate:date.date,endDate:range.startDate};}else{return range;}}},{key:"createRangeForStartEnd",value:function createRangeForStartEnd(date){return {startDate:date.date,endDate:null};}}]);return RangeDateService;}();

var RangeCalendarComponent=function(_BaseCalendarComponen){inherits(RangeCalendarComponent,_BaseCalendarComponen);function RangeCalendarComponent(){var _this;classCallCheck(this,RangeCalendarComponent);_this=possibleConstructorReturn(this,getPrototypeOf(RangeCalendarComponent).apply(this,arguments));_this.rangeDateService=new RangeDateService(_this.dateService);return _this;}createClass(RangeCalendarComponent,[{key:"onDaySelect",value:function onDaySelect(date){var _this$props=this.props,range=_this$props.range,onSelect=_this$props.onSelect;var calendarRange=this.rangeDateService.createRange(range,date);onSelect&&onSelect(calendarRange);}},{key:"getSelectedDate",value:function getSelectedDate(){return this.dateService.today();}},{key:"isDaySelected",value:function isDaySelected(date){return false;}},{key:"shouldUpdateDayElement",value:function shouldUpdateDayElement(props,nextProps){var dateChanged=this.dateService.compareDatesSafe(props.date.date,nextProps.date.date)!==0;if(dateChanged){return true;}var selectionChanged=props.selected!==nextProps.selected;var disablingChanged=props.disabled!==nextProps.disabled;var rangeChanged=props.range!==nextProps.range;var rangeStartPlaceChanged=props.firstRangeItem!==nextProps.firstRangeItem;var rangeEndPlaceChanged=props.lastRangeItem!==nextProps.lastRangeItem;var shouldUpdate=selectionChanged||disablingChanged||rangeChanged||rangeStartPlaceChanged||rangeEndPlaceChanged;if(shouldUpdate){return true;}return props.theme!==nextProps.theme;}},{key:"getDayPickerData",value:function getDayPickerData(date){return this.dataService.createDayPickerData(date.date,this.props.range);}}]);return RangeCalendarComponent;}(BaseCalendarComponent);RangeCalendarComponent.styledComponentName='Calendar';var RangeCalendar=styled(RangeCalendarComponent);

var _jsxFileName$s="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\checkbox\\checkbox.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$m=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CheckBoxComponent=function(_React$Component){inherits(CheckBoxComponent,_React$Component);function CheckBoxComponent(){var _this;classCallCheck(this,CheckBoxComponent);_this=possibleConstructorReturn(this,getPrototypeOf(CheckBoxComponent).apply(this,arguments));_this.onPress=function(){_this.props.dispatch([]);if(_this.props.onChange){_this.props.onChange(!_this.props.checked,false);}};_this.onPressIn=function(event){_this.props.dispatch([exports.Interaction.ACTIVE]);if(_this.props.onPressIn){_this.props.onPressIn(event);}};_this.onPressOut=function(event){_this.props.dispatch([]);if(_this.props.onPressOut){_this.props.onPressOut(event);}};_this.getComponentStyle=function(source){var textMarginHorizontal=source.textMarginHorizontal,textFontFamily=source.textFontFamily,textFontSize=source.textFontSize,textFontWeight=source.textFontWeight,textLineHeight=source.textLineHeight,textColor=source.textColor,iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconBorderRadius=source.iconBorderRadius,iconTintColor=source.iconTintColor,outlineWidth=source.outlineWidth,outlineHeight=source.outlineHeight,outlineBorderRadius=source.outlineBorderRadius,outlineBackgroundColor=source.outlineBackgroundColor,containerParameters=__rest$m(source,["textMarginHorizontal","textFontFamily","textFontSize","textFontWeight","textLineHeight","textColor","iconWidth","iconHeight","iconBorderRadius","iconTintColor","outlineWidth","outlineHeight","outlineBorderRadius","outlineBackgroundColor"]);return {container:{},highlightContainer:{},selectContainer:containerParameters,text:{marginHorizontal:textMarginHorizontal,fontFamily:textFontFamily,fontSize:textFontSize,fontWeight:textFontWeight,lineHeight:textLineHeight,color:textColor},icon:{width:iconWidth,height:iconHeight,borderRadius:iconBorderRadius,backgroundColor:iconTintColor},highlight:{width:outlineWidth,height:outlineHeight,borderRadius:outlineBorderRadius,backgroundColor:outlineBackgroundColor}};};_this.createHitSlopInsets=function(style){var _StyleSheet$flatten=reactNative.StyleSheet.flatten(style),width=_StyleSheet$flatten.width;var value=40-width;return {left:value,top:value,right:value,bottom:value};};_this.renderTextElement=function(style){var _this$props=_this.props,text=_this$props.text,textStyle=_this$props.textStyle;return React.createElement(Text,{style:[style,styles$g.text,textStyle],__source:{fileName:_jsxFileName$s,lineNumber:325}},text);};_this.renderSelectIconElement=function(style){return React.createElement(CheckMark,{style:[style,styles$g.icon],__source:{fileName:_jsxFileName$s,lineNumber:328}});};_this.renderIndeterminateIconElement=function(style){return React.createElement(reactNative.View,{style:[style,styles$g.icon],__source:{fileName:_jsxFileName$s,lineNumber:331}});};_this.renderIconElement=function(style){if(_this.props.indeterminate){return _this.renderIndeterminateIconElement(style);}else{return _this.renderSelectIconElement(style);}};_this.renderComponentChildren=function(style){var text=_this.props.text;return [_this.renderIconElement(style.icon),isValidString(text)&&_this.renderTextElement(style.text)];};return _this;}createClass(CheckBoxComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,disabled=_a.disabled,text=_a.text,derivedProps=__rest$m(_a,["themedStyle","style","disabled","text"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,highlightContainer=_b.highlightContainer,highlight=_b.highlight,selectContainer=_b.selectContainer,componentStyle=__rest$m(_b,["container","highlightContainer","highlight","selectContainer"]);var selectContainerStyle=[selectContainer,styles$g.selectContainer];var hitSlopInsets=this.createHitSlopInsets(selectContainerStyle);var _this$renderComponent=this.renderComponentChildren(componentStyle),_this$renderComponent2=slicedToArray(_this$renderComponent,2),iconElement=_this$renderComponent2[0],textElement=_this$renderComponent2[1];return React.createElement(reactNative.TouchableOpacity,{style:[container,styles$g.container,style],activeOpacity:1.0,disabled:disabled,hitSlop:hitSlopInsets,onPress:this.onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,__source:{fileName:_jsxFileName$s,lineNumber:355}},React.createElement(reactNative.View,{style:[highlightContainer,styles$g.highlightContainer],__source:{fileName:_jsxFileName$s,lineNumber:356}},React.createElement(reactNative.View,{style:[highlight,styles$g.highlight],__source:{fileName:_jsxFileName$s,lineNumber:357}}),React.createElement(reactNative.TouchableOpacity,_extends_1({activeOpacity:1.0},derivedProps,{disabled:disabled,style:selectContainerStyle,onPress:this.onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,__source:{fileName:_jsxFileName$s,lineNumber:358}}),iconElement)),textElement);}}]);return CheckBoxComponent;}(React.Component);CheckBoxComponent.styledComponentName='CheckBox';var styles$g=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center'},highlightContainer:{justifyContent:'center',alignItems:'center'},selectContainer:{justifyContent:'center',alignItems:'center'},highlight:{position:'absolute'},icon:{},text:{}});var CheckBox=styled(CheckBoxComponent);

var Point=function(){function Point(x,y){classCallCheck(this,Point);this.x=x;this.y=y;}createClass(Point,null,[{key:"zero",value:function zero(){return new Point(0,0);}}]);return Point;}();var Size=function(){function Size(width,height){classCallCheck(this,Size);this.width=width;this.height=height;}createClass(Size,null,[{key:"zero",value:function zero(){return new Size(0,0);}}]);return Size;}();var Frame=function(){function Frame(x,y,width,height){classCallCheck(this,Frame);this.origin=new Point(x,y);this.size=new Size(width,height);}createClass(Frame,[{key:"leftOf",value:function leftOf(other){return new Frame(other.origin.x-this.size.width,this.origin.y,this.size.width,this.size.height);}},{key:"topOf",value:function topOf(other){return new Frame(this.origin.x,other.origin.y-this.size.height,this.size.width,this.size.height);}},{key:"rightOf",value:function rightOf(other){return new Frame(other.origin.x+other.size.width,this.origin.y,this.size.width,this.size.height);}},{key:"bottomOf",value:function bottomOf(other){return new Frame(this.origin.x,other.origin.y+other.size.height,this.size.width,this.size.height);}},{key:"centerHorizontalOf",value:function centerHorizontalOf(other){return new Frame(other.origin.x+(other.size.width-this.size.width)/2,this.origin.y,this.size.width,this.size.height);}},{key:"centerVerticalOf",value:function centerVerticalOf(other){return new Frame(this.origin.x,other.origin.y+(other.size.height-this.size.height)/2,this.size.width,this.size.height);}}],[{key:"zero",value:function zero(){return Frame.from(Point.zero(),Size.zero());}},{key:"from",value:function from(point,size){return new Frame(point.x,point.y,size.width,size.height);}}]);return Frame;}();var OffsetRect=function(){function OffsetRect(){classCallCheck(this,OffsetRect);}createClass(OffsetRect,null,[{key:"zero",value:function zero(){return {left:0,top:0,right:0,bottom:0};}}]);return OffsetRect;}();var Offsets=function(){function Offsets(){classCallCheck(this,Offsets);}createClass(Offsets,null,[{key:"find",value:function find(source){var keys=[Offsets.MARGIN.rawValue,Offsets.MARGIN_HORIZONTAL.rawValue,Offsets.MARGIN_VERTICAL.rawValue,Offsets.MARGIN_LEFT.rawValue,Offsets.MARGIN_TOP.rawValue,Offsets.MARGIN_RIGHT.rawValue,Offsets.MARGIN_BOTTOM.rawValue];var flatStyle=reactNative.StyleSheet.flatten(source)||{};return Object.keys(flatStyle).filter(function(key){return keys.includes(key);}).reduce(function(acc,key){var value=flatStyle[key];var offsetValue=Offsets.parseString(key);return offsetValue?offsetValue.applyToRect(acc,value):acc;},OffsetRect.zero());}},{key:"parseString",value:function parseString(rawValue,fallback){switch(rawValue){case Offsets.MARGIN.rawValue:return Offsets.MARGIN;case Offsets.MARGIN_HORIZONTAL.rawValue:return Offsets.MARGIN_HORIZONTAL;case Offsets.MARGIN_VERTICAL.rawValue:return Offsets.MARGIN_VERTICAL;case Offsets.MARGIN_LEFT.rawValue:return Offsets.MARGIN_LEFT;case Offsets.MARGIN_TOP.rawValue:return Offsets.MARGIN_TOP;case Offsets.MARGIN_RIGHT.rawValue:return Offsets.MARGIN_RIGHT;case Offsets.MARGIN_BOTTOM.rawValue:return Offsets.MARGIN_BOTTOM;default:return fallback;}}}]);return Offsets;}();Offsets.MARGIN=new(function(){function _class(){classCallCheck(this,_class);this.rawValue='margin';}createClass(_class,[{key:"applyToRect",value:function applyToRect(rect,value){return {left:value,top:value,right:value,bottom:value};}}]);return _class;}())();Offsets.MARGIN_HORIZONTAL=new(function(){function _class2(){classCallCheck(this,_class2);this.rawValue='marginHorizontal';}createClass(_class2,[{key:"applyToRect",value:function applyToRect(rect,value){return _extends_1(_extends_1({},rect),{left:value,right:value});}}]);return _class2;}())();Offsets.MARGIN_VERTICAL=new(function(){function _class3(){classCallCheck(this,_class3);this.rawValue='marginVertical';}createClass(_class3,[{key:"applyToRect",value:function applyToRect(rect,value){return _extends_1(_extends_1({},rect),{top:value,bottom:value});}}]);return _class3;}())();Offsets.MARGIN_LEFT=new(function(){function _class4(){classCallCheck(this,_class4);this.rawValue='marginLeft';}createClass(_class4,[{key:"applyToRect",value:function applyToRect(rect,value){return _extends_1(_extends_1({},rect),{left:value});}}]);return _class4;}())();Offsets.MARGIN_TOP=new(function(){function _class5(){classCallCheck(this,_class5);this.rawValue='marginTop';}createClass(_class5,[{key:"applyToRect",value:function applyToRect(rect,value){return _extends_1(_extends_1({},rect),{top:value});}}]);return _class5;}())();Offsets.MARGIN_RIGHT=new(function(){function _class6(){classCallCheck(this,_class6);this.rawValue='marginRight';}createClass(_class6,[{key:"applyToRect",value:function applyToRect(rect,value){return _extends_1(_extends_1({},rect),{right:value});}}]);return _class6;}())();Offsets.MARGIN_BOTTOM=new(function(){function _class7(){classCallCheck(this,_class7);this.rawValue='marginBottom';}createClass(_class7,[{key:"applyToRect",value:function applyToRect(rect,value){return _extends_1(_extends_1({},rect),{bottom:value});}}]);return _class7;}())();var PopoverPlacements=function(){function PopoverPlacements(){classCallCheck(this,PopoverPlacements);}createClass(PopoverPlacements,null,[{key:"parse",value:function parse(value,fallback){return PopoverPlacements.typeOf(value)?value:PopoverPlacements.parseString(value,fallback);}},{key:"parseString",value:function parseString(rawValue,fallback){switch(rawValue){case PopoverPlacements.LEFT.rawValue:return PopoverPlacements.LEFT;case PopoverPlacements.TOP.rawValue:return PopoverPlacements.TOP;case PopoverPlacements.RIGHT.rawValue:return PopoverPlacements.RIGHT;case PopoverPlacements.BOTTOM.rawValue:return PopoverPlacements.BOTTOM;case PopoverPlacements.LEFT_START.rawValue:return PopoverPlacements.LEFT_START;case PopoverPlacements.LEFT_END.rawValue:return PopoverPlacements.LEFT_END;case PopoverPlacements.TOP_START.rawValue:return PopoverPlacements.TOP_START;case PopoverPlacements.TOP_END.rawValue:return PopoverPlacements.TOP_END;case PopoverPlacements.RIGHT_START.rawValue:return PopoverPlacements.RIGHT_START;case PopoverPlacements.RIGHT_END.rawValue:return PopoverPlacements.RIGHT_END;case PopoverPlacements.BOTTOM_START.rawValue:return PopoverPlacements.BOTTOM_START;case PopoverPlacements.BOTTOM_END.rawValue:return PopoverPlacements.BOTTOM_END;default:return fallback;}}},{key:"typeOf",value:function typeOf(value){var rawValue=value.rawValue;return rawValue!==undefined;}}]);return PopoverPlacements;}();PopoverPlacements.LEFT=new(function(){function _class8(){classCallCheck(this,_class8);this.rawValue='left';}createClass(_class8,[{key:"frame",value:function frame(options){var _options$source$leftO=options.source.leftOf(options.other).centerVerticalOf(options.other),origin=_options$source$leftO.origin,size=_options$source$leftO.size;var x=I18nLayoutService.select(origin.x+options.offsets.left,options.bounds.size.width-size.width-(origin.x+options.offsets.right));return new Frame(x,origin.y,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'row',alignment:'center'};}},{key:"parent",value:function parent(){return this;}},{key:"reverse",value:function reverse(){return PopoverPlacements.RIGHT;}},{key:"family",value:function family(){return [PopoverPlacements.LEFT,PopoverPlacements.LEFT_START,PopoverPlacements.LEFT_END];}},{key:"fits",value:function fits(frame,other){return fitsStart(frame,other)&&fitsTop(frame,other)&&fitsBottom(frame,other);}}]);return _class8;}())();PopoverPlacements.LEFT_START=new(function(){function _class9(){classCallCheck(this,_class9);this.rawValue='left start';}createClass(_class9,[{key:"frame",value:function frame(options){var _this$parent$frame=this.parent().frame(options),origin=_this$parent$frame.origin,size=_this$parent$frame.size;return new Frame(origin.x,origin.y-(options.other.size.height-size.height)/2+options.offsets.top,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'row',alignment:'flex-start'};}},{key:"parent",value:function parent(){return PopoverPlacements.LEFT;}},{key:"reverse",value:function reverse(){return PopoverPlacements.RIGHT_START;}},{key:"family",value:function family(){return this.parent().family();}},{key:"fits",value:function fits(frame,other){return this.parent().fits(frame,other);}}]);return _class9;}())();PopoverPlacements.LEFT_END=new(function(){function _class10(){classCallCheck(this,_class10);this.rawValue='left end';}createClass(_class10,[{key:"frame",value:function frame(options){var _this$parent$frame2=this.parent().frame(options),origin=_this$parent$frame2.origin,size=_this$parent$frame2.size;return new Frame(origin.x,origin.y+(options.other.size.height-size.height)/2-options.offsets.bottom,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'row',alignment:'flex-end'};}},{key:"parent",value:function parent(){return PopoverPlacements.LEFT;}},{key:"reverse",value:function reverse(){return PopoverPlacements.RIGHT_END;}},{key:"family",value:function family(){return this.parent().family();}},{key:"fits",value:function fits(frame,other){return this.parent().fits(frame,other);}}]);return _class10;}())();PopoverPlacements.TOP=new(function(){function _class11(){classCallCheck(this,_class11);this.rawValue='top';}createClass(_class11,[{key:"frame",value:function frame(options){var _options$source$topOf=options.source.topOf(options.other).centerHorizontalOf(options.other),origin=_options$source$topOf.origin,size=_options$source$topOf.size;var x=I18nLayoutService.select(origin.x,options.bounds.size.width-(origin.x+size.width));return new Frame(x,origin.y+options.offsets.top,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'column',alignment:'center'};}},{key:"parent",value:function parent(){return this;}},{key:"reverse",value:function reverse(){return PopoverPlacements.BOTTOM;}},{key:"family",value:function family(){return [PopoverPlacements.TOP,PopoverPlacements.TOP_START,PopoverPlacements.TOP_END];}},{key:"fits",value:function fits(frame,other){return fitsTop(frame,other)&&fitsLeft(frame,other)&&fitsRight(frame,other);}}]);return _class11;}())();PopoverPlacements.TOP_START=new(function(){function _class12(){classCallCheck(this,_class12);this.rawValue='top start';}createClass(_class12,[{key:"frame",value:function frame(options){var _this$parent$frame3=this.parent().frame(options),origin=_this$parent$frame3.origin,size=_this$parent$frame3.size;return new Frame(origin.x-(options.other.size.width-size.width)/2+options.offsets.left,origin.y,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'column',alignment:'flex-start'};}},{key:"parent",value:function parent(){return PopoverPlacements.TOP;}},{key:"reverse",value:function reverse(){return PopoverPlacements.BOTTOM_START;}},{key:"family",value:function family(){return this.parent().family();}},{key:"fits",value:function fits(frame,other){return this.parent().fits(frame,other);}}]);return _class12;}())();PopoverPlacements.TOP_END=new(function(){function _class13(){classCallCheck(this,_class13);this.rawValue='top end';}createClass(_class13,[{key:"frame",value:function frame(options){var _this$parent$frame4=this.parent().frame(options),origin=_this$parent$frame4.origin,size=_this$parent$frame4.size;return new Frame(origin.x+(options.other.size.width-size.width)/2-options.offsets.right,origin.y,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'column',alignment:'flex-end'};}},{key:"parent",value:function parent(){return PopoverPlacements.TOP;}},{key:"reverse",value:function reverse(){return PopoverPlacements.BOTTOM_END;}},{key:"family",value:function family(){return this.parent().family();}},{key:"fits",value:function fits(frame,other){return this.parent().fits(frame,other);}}]);return _class13;}())();PopoverPlacements.RIGHT=new(function(){function _class14(){classCallCheck(this,_class14);this.rawValue='right';}createClass(_class14,[{key:"frame",value:function frame(options){var _options$source$right=options.source.rightOf(options.other).centerVerticalOf(options.other),origin=_options$source$right.origin,size=_options$source$right.size;var x=I18nLayoutService.select(origin.x-options.offsets.right,options.bounds.size.width-size.width-(origin.x-options.offsets.right));return new Frame(x,origin.y,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'row-reverse',alignment:'center'};}},{key:"parent",value:function parent(){return this;}},{key:"reverse",value:function reverse(){return PopoverPlacements.LEFT;}},{key:"family",value:function family(){return [PopoverPlacements.RIGHT,PopoverPlacements.RIGHT_START,PopoverPlacements.RIGHT_END];}},{key:"fits",value:function fits(frame,other){return fitsEnd(frame,other)&&fitsTop(frame,other)&&fitsBottom(frame,other);}}]);return _class14;}())();PopoverPlacements.RIGHT_START=new(function(){function _class15(){classCallCheck(this,_class15);this.rawValue='right start';}createClass(_class15,[{key:"frame",value:function frame(options){var _this$parent$frame5=this.parent().frame(options),origin=_this$parent$frame5.origin,size=_this$parent$frame5.size;return new Frame(origin.x,origin.y-(options.other.size.height-size.height)/2+options.offsets.top,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'row-reverse',alignment:'flex-start'};}},{key:"parent",value:function parent(){return PopoverPlacements.RIGHT;}},{key:"reverse",value:function reverse(){return PopoverPlacements.LEFT_START;}},{key:"family",value:function family(){return this.parent().family();}},{key:"fits",value:function fits(frame,other){return this.parent().fits(frame,other);}}]);return _class15;}())();PopoverPlacements.RIGHT_END=new(function(){function _class16(){classCallCheck(this,_class16);this.rawValue='right end';}createClass(_class16,[{key:"frame",value:function frame(options){var _this$parent$frame6=this.parent().frame(options),origin=_this$parent$frame6.origin,size=_this$parent$frame6.size;return new Frame(origin.x,origin.y+(options.other.size.height-size.height)/2-options.offsets.bottom,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'row-reverse',alignment:'flex-end'};}},{key:"parent",value:function parent(){return PopoverPlacements.RIGHT;}},{key:"reverse",value:function reverse(){return PopoverPlacements.LEFT_END;}},{key:"family",value:function family(){return this.parent().family();}},{key:"fits",value:function fits(frame,other){return this.parent().fits(frame,other);}}]);return _class16;}())();PopoverPlacements.BOTTOM=new(function(){function _class17(){classCallCheck(this,_class17);this.rawValue='bottom';}createClass(_class17,[{key:"frame",value:function frame(options){var _options$source$botto=options.source.bottomOf(options.other).centerHorizontalOf(options.other),origin=_options$source$botto.origin,size=_options$source$botto.size;var x=I18nLayoutService.select(origin.x,options.bounds.size.width-(origin.x+size.width));return new Frame(x,origin.y-options.offsets.bottom,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'column-reverse',alignment:'center'};}},{key:"parent",value:function parent(){return this;}},{key:"reverse",value:function reverse(){return PopoverPlacements.TOP;}},{key:"family",value:function family(){return [PopoverPlacements.BOTTOM,PopoverPlacements.BOTTOM_START,PopoverPlacements.BOTTOM_END];}},{key:"fits",value:function fits(frame,other){return fitsBottom(frame,other)&&fitsLeft(frame,other)&&fitsRight(frame,other);}}]);return _class17;}())();PopoverPlacements.BOTTOM_START=new(function(){function _class18(){classCallCheck(this,_class18);this.rawValue='bottom start';}createClass(_class18,[{key:"frame",value:function frame(options){var _this$parent$frame7=this.parent().frame(options),origin=_this$parent$frame7.origin,size=_this$parent$frame7.size;return new Frame(origin.x-(options.other.size.width-size.width)/2+options.offsets.left,origin.y,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'column-reverse',alignment:'flex-start'};}},{key:"parent",value:function parent(){return PopoverPlacements.BOTTOM;}},{key:"reverse",value:function reverse(){return PopoverPlacements.TOP_START;}},{key:"family",value:function family(){return this.parent().family();}},{key:"fits",value:function fits(frame,other){return this.parent().fits(frame,other);}}]);return _class18;}())();PopoverPlacements.BOTTOM_END=new(function(){function _class19(){classCallCheck(this,_class19);this.rawValue='bottom end';}createClass(_class19,[{key:"frame",value:function frame(options){var _this$parent$frame8=this.parent().frame(options),origin=_this$parent$frame8.origin,size=_this$parent$frame8.size;return new Frame(origin.x+(options.other.size.width-size.width)/2-options.offsets.right,origin.y,size.width,size.height);}},{key:"flex",value:function flex(){return {direction:'column-reverse',alignment:'flex-end'};}},{key:"parent",value:function parent(){return PopoverPlacements.BOTTOM;}},{key:"reverse",value:function reverse(){return PopoverPlacements.TOP_END;}},{key:"family",value:function family(){return this.parent().family();}},{key:"fits",value:function fits(frame,other){return this.parent().fits(frame,other);}}]);return _class19;}())();var fitsStart=function fitsStart(frame,other){return I18nLayoutService.select(fitsLeft,fitsRight)(frame,other);};var fitsEnd=function fitsEnd(frame,other){return I18nLayoutService.select(fitsRight,fitsLeft)(frame,other);};var fitsLeft=function fitsLeft(frame,other){return frame.origin.x>=other.origin.x;};var fitsRight=function fitsRight(frame,other){return frame.origin.x+frame.size.width<=other.size.width;};var fitsTop=function fitsTop(frame,other){return frame.origin.y>=other.origin.y;};var fitsBottom=function fitsBottom(frame,other){return frame.origin.y+frame.size.height<=other.size.height;};

var _jsxFileName$t="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\popover\\popoverView.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$n=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var PLACEMENT_DEFAULT=PopoverPlacements.TOP;var PopoverView=function(_React$Component){inherits(PopoverView,_React$Component);function PopoverView(){var _this;classCallCheck(this,PopoverView);_this=possibleConstructorReturn(this,getPrototypeOf(PopoverView).apply(this,arguments));_this.getComponentStyle=function(source,placement){var derivedIndicatorStyle=reactNative.StyleSheet.flatten(_this.props.indicatorStyle);var _placement$flex=placement.flex(),direction=_placement$flex.direction,alignment=_placement$flex.alignment;var isVertical=direction.startsWith('column');var isStart=alignment.endsWith('start');var isEnd=alignment.endsWith('end');var isReverse=direction.endsWith('reverse');var indicatorPrimaryRotate=isVertical?180:90;var indicatorSecondaryRotate=isReverse?0:180;var containerTranslate=isVertical?0:derivedIndicatorStyle.width/2;containerTranslate=isReverse?containerTranslate:-containerTranslate;var indicatorTranslate=isVertical?-_this.props.indicatorOffset:_this.props.indicatorOffset;indicatorTranslate=isReverse?-indicatorTranslate:indicatorTranslate;var i18nVerticalIndicatorTranslate=I18nLayoutService.select(indicatorTranslate,-indicatorTranslate);indicatorTranslate=isVertical?i18nVerticalIndicatorTranslate:indicatorTranslate;var containerStyle=I18nLayoutService.toI18nStyle({flexDirection:direction,transform:[{translateX:containerTranslate}]});var contentStyle={backgroundColor:'black',transform:[{translateX:containerTranslate}]};var indicatorStyle=_extends_1(_extends_1({transform:[{rotate:indicatorPrimaryRotate+"deg"},{rotate:indicatorSecondaryRotate+"deg"},{translateX:isStart?-indicatorTranslate:0},{translateX:isEnd?indicatorTranslate:0}]},derivedIndicatorStyle),styles$h.indicator);return {container:_extends_1(_extends_1({},containerStyle),{alignItems:alignment}),content:contentStyle,indicator:indicatorStyle};};return _this;}createClass(PopoverView,[{key:"render",value:function render(){var _a=this.props,style=_a.style,indicatorStyle=_a.indicatorStyle,rawPlacement=_a.placement,children=_a.children,derivedProps=__rest$n(_a,["style","indicatorStyle","placement","children"]);var placement=PopoverPlacements.parse(rawPlacement,PLACEMENT_DEFAULT);var _this$getComponentSty=this.getComponentStyle(style,placement),container=_this$getComponentSty.container,indicator=_this$getComponentSty.indicator,content=_this$getComponentSty.content;return React.createElement(reactNative.View,_extends_1({},derivedProps,{style:[container,styles$h.container],__source:{fileName:_jsxFileName$t,lineNumber:79}}),React.createElement(Arrow,{style:[indicator,styles$h.indicator,indicatorStyle],__source:{fileName:_jsxFileName$t,lineNumber:80}}),React.createElement(reactNative.View,{style:[content,styles$h.content,style],__source:{fileName:_jsxFileName$t,lineNumber:81}},children));}}]);return PopoverView;}(React.Component);PopoverView.defaultProps={placement:PLACEMENT_DEFAULT.rawValue,indicatorOffset:8};var styles$h=reactNative.StyleSheet.create({container:{alignSelf:'flex-start'},content:{justifyContent:'center'},indicator:{}});

var _jsxFileName$u="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\popover\\measure.component.js";var MeasureElement=function MeasureElement(props){var ref=React.createRef();var children=props.children,onResult=props.onResult;var bindToWindow=function bindToWindow(frame,window){if(frame.origin.x<window.width){return frame;}var boundFrame=new Frame(frame.origin.x-window.width,frame.origin.y,frame.size.width,frame.size.height);return bindToWindow(boundFrame,window);};var measureSelf=function measureSelf(){var node=reactNative.findNodeHandle(ref.current);reactNative.UIManager.measureInWindow(node,function(x,y,w,h){var window=reactNative.Dimensions.get('window');var frame=bindToWindow(new Frame(x,y,w,h),window);var measuredElement=React.cloneElement(children,{frame:frame});onResult(measuredElement);});};return React.cloneElement(children,{ref:ref,onLayout:measureSelf});};var MeasureNode=function MeasureNode(props){var result={};var children=props.children,onResult=props.onResult;var onChildMeasure=function onChildMeasure(element){var _element$props=element.props,tag=_element$props.tag,frame=_element$props.frame;result[tag]=frame;if(Object.keys(result).length===React.Children.count(children)){onResult(result);}};var renderMeasuringElement=function renderMeasuringElement(element,index){return React.createElement(MeasureElement,{key:index,onResult:onChildMeasure,__source:{fileName:_jsxFileName$u,lineNumber:78}},element);};var renderChildren=function renderChildren(){return React.Children.map(children,renderMeasuringElement);};return React.createElement(React.Fragment,{__source:{fileName:_jsxFileName$u,lineNumber:85}},renderChildren());};

var PLACEMENT_FAMILIES=[PopoverPlacements.BOTTOM.rawValue,PopoverPlacements.TOP.rawValue,PopoverPlacements.LEFT.rawValue,PopoverPlacements.RIGHT.rawValue];var PopoverPlacementService=function(){function PopoverPlacementService(){classCallCheck(this,PopoverPlacementService);}createClass(PopoverPlacementService,[{key:"find",value:function find(preferredValue,options){var placement=this.findRecursive(preferredValue,PLACEMENT_FAMILIES,options);return placement||preferredValue;}},{key:"findRecursive",value:function findRecursive(placement,families,options){var oneOfCurrentFamily=this.findFromFamily(placement,options);if(oneOfCurrentFamily){return oneOfCurrentFamily;}var oneOfReversedFamily=this.findFromFamily(placement.reverse(),options);if(oneOfReversedFamily){return oneOfReversedFamily;}delete families[families.indexOf(placement.parent().rawValue)];delete families[families.indexOf(placement.reverse().parent().rawValue)];var firstTruthy=families.filter(Boolean)[0];if(firstTruthy){var nextPlacement=PopoverPlacements.parse(firstTruthy);return this.findRecursive(nextPlacement,families,options);}return null;}},{key:"findFromFamily",value:function findFromFamily(placement,options){var preferredFrame=placement.frame(options);if(placement.fits(preferredFrame,options.bounds)){return placement;}return placement.family().find(function(familyValue){var familyFrame=familyValue.frame(options);return familyValue.fits(familyFrame,options.bounds);});}}]);return PopoverPlacementService;}();

var _jsxFileName$v="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\popover\\popover.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$o=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var WINDOW=reactNative.Dimensions.get('window');var WINDOW_BOUNDS=new Frame(0,0,WINDOW.width,WINDOW.height);var TAG_CHILD=0;var TAG_CONTENT=1;var PLACEMENT_DEFAULT$1=PopoverPlacements.BOTTOM;var PopoverComponent=function(_React$Component){inherits(PopoverComponent,_React$Component);function PopoverComponent(){var _this;classCallCheck(this,PopoverComponent);_this=possibleConstructorReturn(this,getPrototypeOf(PopoverComponent).apply(this,arguments));_this.placementService=new PopoverPlacementService();_this.handleVisibility=function(prevProps){if(prevProps.visible!==_this.props.visible){if(_this.props.visible){_this.setState({layout:undefined});}else{_this.popoverId=ModalService.hide(_this.popoverId);}}else if(prevProps.visible&&_this.props.visible){_this.updatePopoverElement();}};_this.updatePopoverElement=function(){var element=_this.renderPopoverElement(_this.props.content,_this.popoverPlacement);var popoverElement=React.cloneElement(element,{style:[element.props.style,styles$i.popoverVisible]});_this.popoverId&&ModalService.update(_this.popoverId,popoverElement);};_this.getComponentStyle=function(source){var indicatorWidth=source.indicatorWidth,indicatorHeight=source.indicatorHeight,indicatorBackgroundColor=source.indicatorBackgroundColor,containerParameters=__rest$o(source,["indicatorWidth","indicatorHeight","indicatorBackgroundColor"]);return {container:containerParameters,indicator:{width:indicatorWidth,height:indicatorHeight,backgroundColor:indicatorBackgroundColor}};};_this.onMeasure=function(layout){if(_this.props.visible){var placementOptions=_this.createPlacementOptions(layout);var popoverPlacement=_this.placementService.find(_this.popoverPlacement,placementOptions);_this.popoverId=_this.showPopoverModal(popoverPlacement,placementOptions);}};_this.createPlacement=function(value){return PopoverPlacements.parse(value,PLACEMENT_DEFAULT$1);};_this.createPlacementOptions=function(layout){var children=_this.props.children;return {source:layout[TAG_CONTENT],other:layout[TAG_CHILD],bounds:WINDOW_BOUNDS,offsets:Offsets.find(children.props.style)};};_this.showPopoverModal=function(placement,options){var popoverFrame=placement.frame(options);var popoverElement=_this.renderPopoverElement(_this.props.content,placement);var positionStyle={left:popoverFrame.origin.x,top:popoverFrame.origin.y};var positionedPopoverElement=React.cloneElement(popoverElement,{style:[styles$i.popoverVisible,positionStyle]});return ModalService.show(positionedPopoverElement,{allowBackdrop:_this.props.allowBackdrop,onBackdropPress:_this.props.onBackdropPress});};_this.renderPopoverElement=function(children,placement){var _a=_this.props,derivedStyle=_a.style,themedStyle=_a.themedStyle,indicatorStyle=_a.indicatorStyle,derivedProps=__rest$o(_a,["style","themedStyle","indicatorStyle"]);var _this$getComponentSty=_this.getComponentStyle(themedStyle),container=_this$getComponentSty.container,indicator=_this$getComponentSty.indicator;var measuringProps={tag:TAG_CONTENT};return React.createElement(reactNative.View,_extends_1({},measuringProps,{key:TAG_CONTENT,style:[styles$i.popover,styles$i.popoverInvisible],__source:{fileName:_jsxFileName$v,lineNumber:169}}),React.createElement(PopoverView,_extends_1({},derivedProps,{style:[container,derivedStyle],indicatorStyle:[indicator,styles$i.indicator,indicatorStyle],placement:placement.reverse().rawValue,__source:{fileName:_jsxFileName$v,lineNumber:170}}),children));};_this.renderChildElement=function(source){var measuringProps={tag:TAG_CHILD};return React.createElement(reactNative.View,_extends_1({},measuringProps,{key:TAG_CHILD,style:styles$i.child,__source:{fileName:_jsxFileName$v,lineNumber:177}}),source);};_this.renderMeasuringElement=function(){for(var _len=arguments.length,children=new Array(_len),_key=0;_key<_len;_key++){children[_key]=arguments[_key];}return React.createElement(MeasureNode,{onResult:_this.onMeasure,__source:{fileName:_jsxFileName$v,lineNumber:182}},children);};return _this;}createClass(PopoverComponent,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){this.handleVisibility(prevProps);}},{key:"render",value:function render(){if(this.props.visible){this.popoverPlacement=this.createPlacement(this.props.placement);var popoverElement=this.renderPopoverElement(this.props.content,this.popoverPlacement);var childElement=this.renderChildElement(this.props.children);return this.renderMeasuringElement(childElement,popoverElement);}return this.props.children;}}]);return PopoverComponent;}(React.Component);PopoverComponent.styledComponentName='Popover';PopoverComponent.defaultProps={placement:PLACEMENT_DEFAULT$1.rawValue,visible:false,allowBackdrop:true,onBackdropPress:function onBackdropPress(){return null;}};var styles$i=reactNative.StyleSheet.create({popover:{position:'absolute'},popoverInvisible:{opacity:0},popoverVisible:{opacity:1},indicator:{},child:{}});var Popover=styled(PopoverComponent);

var _jsxFileName$w="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\datepicker\\baseDatepicker.component.js";var __rest$p=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var FULL_DATE_FORMAT_STRING='DD/MM/YYYY';var BaseDatepickerComponent=function(_React$Component){inherits(BaseDatepickerComponent,_React$Component);function BaseDatepickerComponent(){var _this;classCallCheck(this,BaseDatepickerComponent);_this=possibleConstructorReturn(this,getPrototypeOf(BaseDatepickerComponent).apply(this,arguments));_this.state={visible:false};_this.getComponentStyles=function(style){var popoverMarginHorizontal=style.popoverMarginHorizontal,textFontSize=style.textFontSize,textLineHeight=style.textLineHeight,textFontWeight=style.textFontWeight,textFontFamily=style.textFontFamily,textColor=style.textColor,iconWidth=style.iconWidth,iconHeight=style.iconHeight,iconTintColor=style.iconTintColor,containerStyles=__rest$p(style,["popoverMarginHorizontal","textFontSize","textLineHeight","textFontWeight","textFontFamily","textColor","iconWidth","iconHeight","iconTintColor"]);return {container:containerStyles,icon:{width:iconWidth,height:iconHeight,tintColor:iconTintColor},text:{fontSize:textFontSize,lineHeight:textLineHeight,fontWeight:textFontWeight,color:textColor,fontFamily:textFontFamily},popover:{indent:popoverMarginHorizontal}};};_this.onPressIn=function(event){_this.props.dispatch([exports.Interaction.ACTIVE]);if(_this.props.onPressIn){_this.props.onPressIn(event);}};_this.onPressOut=function(event){_this.props.dispatch([]);if(_this.props.onPressOut){_this.props.onPressOut(event);}};_this.toggleVisible=function(){var visible=!_this.state.visible;_this.setState({visible:visible},_this.dispatchActive);};_this.dispatchActive=function(){var visible=_this.state.visible;if(visible){_this.props.dispatch([exports.Interaction.ACTIVE]);}else{_this.props.dispatch([]);}};_this.renderIcon=function(style){var icon=_this.props.icon;return icon&&icon(style);};_this.renderText=function(style){return React.createElement(Text,{style:style,__source:{fileName:_jsxFileName$w,lineNumber:77}},_this.getComponentTitle());};_this.renderControl=function(){var _this$props=_this.props,themedStyle=_this$props.themedStyle,disabled=_this$props.disabled,style=_this$props.style;var _this$getComponentSty=_this.getComponentStyles(themedStyle),container=_this$getComponentSty.container,icon=_this$getComponentSty.icon,text=_this$getComponentSty.text;return React.createElement(reactNative.TouchableOpacity,{activeOpacity:1.0,disabled:disabled,style:[container,styles$j.container,style],onPress:_this.toggleVisible,onPressIn:_this.onPressIn,onPressOut:_this.onPressOut,__source:{fileName:_jsxFileName$w,lineNumber:84}},_this.renderText(text),_this.renderIcon(icon));};return _this;}createClass(BaseDatepickerComponent,[{key:"formatDateToString",value:function formatDateToString(date){return this.props.dateService.format(date,FULL_DATE_FORMAT_STRING);}},{key:"render",value:function render(){var themedStyle=this.props.themedStyle;var _this$getComponentSty2=this.getComponentStyles(themedStyle),popover=_this$getComponentSty2.popover;var popoverStyle={width:reactNative.Dimensions.get('window').width-popover.indent,maxWidth:reactNative.Dimensions.get('window').width-popover.indent};return React.createElement(Popover,{style:popoverStyle,visible:this.state.visible,content:this.renderCalendar(),onBackdropPress:this.toggleVisible,__source:{fileName:_jsxFileName$w,lineNumber:100}},this.renderControl());}}]);return BaseDatepickerComponent;}(React.Component);BaseDatepickerComponent.defaultProps={dateService:new NativeDateService()};var styles$j=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}});

var _jsxFileName$x="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\datepicker\\datepicker.component.js";var DatepickerComponent=function(_BaseDatepickerCompon){inherits(DatepickerComponent,_BaseDatepickerCompon);function DatepickerComponent(){classCallCheck(this,DatepickerComponent);return possibleConstructorReturn(this,getPrototypeOf(DatepickerComponent).apply(this,arguments));}createClass(DatepickerComponent,[{key:"getComponentTitle",value:function getComponentTitle(){var date=this.props.date;if(date){return this.formatDateToString(date);}else{return 'dd/mm/yyyy';}}},{key:"renderCalendar",value:function renderCalendar(){return React.createElement(Calendar,_extends_1({},this.props,{__source:{fileName:_jsxFileName$x,lineNumber:205}}));}}]);return DatepickerComponent;}(BaseDatepickerComponent);DatepickerComponent.styledComponentName='Datepicker';var Datepicker=styled(DatepickerComponent);

var _jsxFileName$y="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\datepicker\\rangeDatepicker.component.js";var RangeDatepickerComponent=function(_BaseDatepickerCompon){inherits(RangeDatepickerComponent,_BaseDatepickerCompon);function RangeDatepickerComponent(){classCallCheck(this,RangeDatepickerComponent);return possibleConstructorReturn(this,getPrototypeOf(RangeDatepickerComponent).apply(this,arguments));}createClass(RangeDatepickerComponent,[{key:"getComponentTitle",value:function getComponentTitle(){var range=this.props.range;var startDate=range.startDate,endDate=range.endDate;if(startDate||endDate){var start=startDate?this.formatDateToString(startDate):'';var end=endDate?this.formatDateToString(endDate):'';return start+" - "+end;}else{return 'dd/mm/yyyy';}}},{key:"renderCalendar",value:function renderCalendar(){return React.createElement(RangeCalendar,_extends_1({},this.props,{__source:{fileName:_jsxFileName$y,lineNumber:91}}));}}]);return RangeDatepickerComponent;}(BaseDatepickerComponent);RangeDatepickerComponent.styledComponentName='Datepicker';var RangeDatepicker=styled(RangeDatepickerComponent);

var _jsxFileName$z="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\list\\list.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$q=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var ListComponent=function(_React$Component){inherits(ListComponent,_React$Component);function ListComponent(){var _this;classCallCheck(this,ListComponent);_this=possibleConstructorReturn(this,getPrototypeOf(ListComponent).apply(this,arguments));_this.listRef=React.createRef();_this.scrollToEnd=function(params){_this.listRef.current.scrollToEnd(params);};_this.scrollToIndex=function(params){_this.listRef.current.scrollToIndex(params);};_this.getComponentStyle=function(source){return {container:source,item:{}};};_this.getItemStyle=function(source,index){var item=source.item;return item;};_this.keyExtractor=function(item,index){return index.toString();};_this.renderItem=function(info){var itemStyle=_this.getItemStyle(_this.props.themedStyle,info.index);var itemElement=_this.props.renderItem(info,itemStyle);return React.cloneElement(itemElement,{style:[itemStyle,styles$k.item,itemElement.props.style],index:info.index});};return _this;}createClass(ListComponent,[{key:"scrollToOffset",value:function scrollToOffset(params){this.listRef.current.scrollToOffset(params);}},{key:"render",value:function render(){var _a=this.props,style=_a.style,themedStyle=_a.themedStyle,derivedProps=__rest$q(_a,["style","themedStyle"]);var componentStyle=this.getComponentStyle(themedStyle);return React.createElement(reactNative.FlatList,_extends_1({},derivedProps,{ref:this.listRef,style:[componentStyle.container,styles$k.container,style],keyExtractor:this.keyExtractor,renderItem:this.renderItem,__source:{fileName:_jsxFileName$z,lineNumber:164}}));}}]);return ListComponent;}(React.Component);ListComponent.styledComponentName='List';var styles$k=reactNative.StyleSheet.create({container:{},item:{}});var List=styled(ListComponent);

var _jsxFileName$A="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\menu\\menuItem.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$r=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var MenuItemComponent=function(_React$Component){inherits(MenuItemComponent,_React$Component);function MenuItemComponent(){var _this;classCallCheck(this,MenuItemComponent);_this=possibleConstructorReturn(this,getPrototypeOf(MenuItemComponent).apply(this,arguments));_this.onPress=function(event){var _this$props=_this.props,onPress=_this$props.onPress,menuIndex=_this$props.menuIndex;if(onPress){onPress(menuIndex,event);}};_this.onPressIn=function(event){var _this$props2=_this.props,onPressIn=_this$props2.onPressIn,menuIndex=_this$props2.menuIndex,dispatch=_this$props2.dispatch;dispatch([exports.Interaction.ACTIVE]);if(onPressIn){onPressIn(menuIndex,event);}};_this.onPressOut=function(event){var _this$props3=_this.props,onPressOut=_this$props3.onPressOut,menuIndex=_this$props3.menuIndex,dispatch=_this$props3.dispatch;dispatch([]);if(onPressOut){onPressOut(menuIndex,event);}};_this.onLongPress=function(event){var _this$props4=_this.props,onLongPress=_this$props4.onLongPress,menuIndex=_this$props4.menuIndex;if(onLongPress){onLongPress(menuIndex,event);}};_this.getComponentStyles=function(style){var paddingHorizontal=style.paddingHorizontal,paddingVertical=style.paddingVertical,backgroundColor=style.backgroundColor;var titleStyles=allWithPrefix(style,'title');var indicatorStyles=allWithPrefix(style,'indicator');var iconStyles=allWithPrefix(style,'icon');var accessoryStyle=allWithPrefix(style,'accessory');return {container:{paddingHorizontal:paddingHorizontal,paddingVertical:paddingVertical,backgroundColor:backgroundColor},title:{marginHorizontal:titleStyles.titleMarginHorizontal,fontFamily:titleStyles.titleFontFamily,fontSize:titleStyles.titleFontSize,fontWeight:titleStyles.titleFontWeight,lineHeight:titleStyles.titleLineHeight,color:titleStyles.titleColor},indicator:{width:indicatorStyles.indicatorWidth,backgroundColor:indicatorStyles.indicatorBackgroundColor},icon:{width:iconStyles.iconWidth,height:iconStyles.iconHeight,marginHorizontal:iconStyles.iconMarginHorizontal,tintColor:iconStyles.iconTintColor}};};_this.renderIcon=function(style){var icon=_this.props.icon;return icon(style);};_this.renderTitle=function(style){var _this$props5=_this.props,title=_this$props5.title,titleStyle=_this$props5.titleStyle;return React.createElement(Text,{style:[style,titleStyle],__source:{fileName:_jsxFileName$A,lineNumber:111}},title);};_this.renderAccessory=function(style){var accessory=_this.props.accessory;return accessory(style);};_this.renderComponentChildren=function(style){var _this$props6=_this.props,title=_this$props6.title,icon=_this$props6.icon,accessory=_this$props6.accessory;return [icon&&_this.renderIcon(style.icon),title&&_this.renderTitle(style.title),accessory&&_this.renderAccessory(style.icon)];};return _this;}createClass(MenuItemComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,restProps=__rest$r(_a,["themedStyle","style"]);var _b=this.getComponentStyles(themedStyle),container=_b.container,indicator=_b.indicator,restStyles=__rest$r(_b,["container","indicator"]);var _this$renderComponent=this.renderComponentChildren(restStyles),_this$renderComponent2=slicedToArray(_this$renderComponent,3),iconElement=_this$renderComponent2[0],textElement=_this$renderComponent2[1],accessoryElement=_this$renderComponent2[2];return React.createElement(reactNative.TouchableOpacity,_extends_1({activeOpacity:1.0},restProps,{style:[styles$l.container,container,style],onPress:this.onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,onLongPress:this.onLongPress,__source:{fileName:_jsxFileName$A,lineNumber:130}}),React.createElement(reactNative.View,{style:[styles$l.indicator,indicator],__source:{fileName:_jsxFileName$A,lineNumber:131}}),React.createElement(reactNative.View,{style:styles$l.subContainer,__source:{fileName:_jsxFileName$A,lineNumber:132}},iconElement,textElement),accessoryElement);}}]);return MenuItemComponent;}(React.Component);MenuItemComponent.styledComponentName='MenuItem';var styles$l=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},subContainer:{flexDirection:'row',alignItems:'center'},indicator:_extends_1(_extends_1({},reactNative.StyleSheet.absoluteFillObject),{zIndex:2})});var MenuItem=styled(MenuItemComponent);

var _jsxFileName$B="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\menu\\subMenu.component.js";var MAIN_ITEM_KEY='Main Item';var DIVIDER_ELEMENT_KEY='Divider';var SUB_ITEMS_MEASURE_TAG='Sub Items';var SubMenuComponent=function(_React$Component){inherits(SubMenuComponent,_React$Component);function SubMenuComponent(){var _this;classCallCheck(this,SubMenuComponent);_this=possibleConstructorReturn(this,getPrototypeOf(SubMenuComponent).apply(this,arguments));_this.state={subItemsVisible:false,subItemsHeight:0};_this.subItemsAnimation=new reactNative.Animated.Value(0);_this.iconAnimation=new reactNative.Animated.Value(-180);_this.subItemsExpandAnimate=function(toValue){reactNative.Animated.spring(_this.subItemsAnimation,{toValue:toValue}).start();};_this.animateIcon=function(toValue){reactNative.Animated.timing(_this.iconAnimation,{toValue:toValue,duration:200}).start();};_this.onMainItemPress=function(){var subItemsVisible=!_this.state.subItemsVisible;_this.setState({subItemsVisible:subItemsVisible});};_this.onSubItemPress=function(index,event){if(_this.props.onSelect){_this.props.onSelect(index,event);}};_this.getComponentStyles=function(style){return {subContainer:{paddingHorizontal:style.subItemsPaddingHorizontal}};};_this.onSubMenuMeasure=function(result){var subItemsHeight=result[SUB_ITEMS_MEASURE_TAG].size.height;_this.setState({subItemsHeight:subItemsHeight});};_this.getIsSelected=function(item){var selectedIndex=_this.props.selectedIndex;return selectedIndex===item.menuIndex;};_this.isMainItemDividerExist=function(){var divider=_this.props.divider;var subItemsVisible=_this.state.subItemsVisible;return subItemsVisible&&divider!==null;};_this.isSubItemDividerExist=function(item,index){var divider=_this.props.divider;return index!==item.subItems.length-1&&divider!==null;};_this.renderDivider=function(){var divider=_this.props.divider;return divider&&React.cloneElement(divider,{key:DIVIDER_ELEMENT_KEY});};_this.renderMainItemAccessory=function(style){var rotateInterpolate=_this.iconAnimation.interpolate({inputRange:[-180,0],outputRange:['-180deg','0deg']});var animatedStyle={transform:[{rotate:rotateInterpolate}]};return React.createElement(Chevron,{style:[style,animatedStyle],isAnimated:true,__source:{fileName:_jsxFileName$B,lineNumber:80}});};_this.renderMenuItem=function(item,isMainItem,index){var onPressHandler=isMainItem?_this.onMainItemPress:_this.onSubItemPress;var mainMenuItemAccessory=isMainItem?_this.renderMainItemAccessory:null;return React.createElement(MenuItem,_extends_1({},item,{key:index,accessory:mainMenuItemAccessory,onPress:onPressHandler,__source:{fileName:_jsxFileName$B,lineNumber:85}}));};_this.renderSubItemsInvisible=function(subItems){var measuringProps={tag:SUB_ITEMS_MEASURE_TAG};return React.createElement(MeasureNode,{onResult:_this.onSubMenuMeasure,__source:{fileName:_jsxFileName$B,lineNumber:89}},[React.createElement(reactNative.View,_extends_1({},measuringProps,{pointerEvents:"none",key:SUB_ITEMS_MEASURE_TAG,style:styles$m.invisibleMenu,__source:{fileName:_jsxFileName$B,lineNumber:91}}),subItems)]);};_this.renderSubItems=function(){var _this$props=_this.props,item=_this$props.item,themedStyle=_this$props.themedStyle,divider=_this$props.divider;return item.subItems.map(function(sub,index){var _this$getComponentSty=_this.getComponentStyles(themedStyle),subContainer=_this$getComponentSty.subContainer;var isSelected=_this.getIsSelected(sub);var element=React.cloneElement(_this.renderMenuItem(sub,false,index),{style:subContainer,selected:isSelected});var dividerElement=_this.isSubItemDividerExist(item,index)?_this.renderDivider():null;return React.createElement(React.Fragment,{key:index,__source:{fileName:_jsxFileName$B,lineNumber:108}},element,dividerElement);});};_this.renderComponentChildren=function(){var item=_this.props.item;return [_this.renderMenuItem(item,true,MAIN_ITEM_KEY),_this.renderSubItems(),_this.isMainItemDividerExist()?_this.renderDivider():null];};return _this;}createClass(SubMenuComponent,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){if(prevState.subItemsVisible!==this.state.subItemsVisible){if(this.state.subItemsVisible){this.subItemsExpandAnimate(this.state.subItemsHeight);this.animateIcon(0);}else{this.subItemsExpandAnimate(0);this.animateIcon(-180);}}}},{key:"render",value:function render(){var subItemsVisible=this.state.subItemsVisible;var _this$renderComponent=this.renderComponentChildren(),_this$renderComponent2=slicedToArray(_this$renderComponent,3),mainItem=_this$renderComponent2[0],subItems=_this$renderComponent2[1],divider=_this$renderComponent2[2];var invisibleSubs=this.renderSubItemsInvisible(subItems);var animatedStyle={height:this.subItemsAnimation};return React.createElement(React.Fragment,{__source:{fileName:_jsxFileName$B,lineNumber:140}},mainItem,divider,React.createElement(reactNative.Animated.View,{style:animatedStyle,__source:{fileName:_jsxFileName$B,lineNumber:143}},subItemsVisible&&subItems),invisibleSubs);}}]);return SubMenuComponent;}(React.Component);SubMenuComponent.styledComponentName='SubMenu';var styles$m=reactNative.StyleSheet.create({invisibleMenu:{opacity:0,position:'absolute'}});var SubMenu=styled(SubMenuComponent);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var MenuService=function(){function MenuService(){classCallCheck(this,MenuService);}createClass(MenuService,[{key:"setIndexes",value:function setIndexes(data){var tempIndex=0;return data.map(function(item){if(!item.subItems||item.subItems.length===0){item.menuIndex=tempIndex;tempIndex=tempIndex+1;}else{item.subItems=item.subItems.map(function(sub){sub.menuIndex=tempIndex;tempIndex=tempIndex+1;return sub;});}return item;});}}]);return MenuService;}();

var _jsxFileName$C="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\menu\\menu.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$s=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var MenuComponent=function(_React$Component){inherits(MenuComponent,_React$Component);function MenuComponent(){var _this;classCallCheck(this,MenuComponent);_this=possibleConstructorReturn(this,getPrototypeOf(MenuComponent).apply(this,arguments));_this.service=new MenuService();_this.onSelect=function(selectedIndex,event){var onSelect=_this.props.onSelect;if(onSelect){onSelect(selectedIndex,event);}};_this.isDividerAbsent=function(){var appearance=_this.props.appearance;return appearance!=='noDivider';};_this.areThereSubItems=function(item){return item.subItems&&item.subItems.length!==0;};_this.getIsSelected=function(item){var selectedIndex=_this.props.selectedIndex;return selectedIndex===item.menuIndex;};_this.renderMenuItem=function(info){var selectedIndex=_this.props.selectedIndex;var isSelected=_this.getIsSelected(info.item);return _this.areThereSubItems(info.item)?React.createElement(SubMenu,{item:info.item,selectedIndex:selectedIndex,divider:_this.renderDivider(),onSelect:_this.onSelect,__source:{fileName:_jsxFileName$C,lineNumber:331}}):React.createElement(MenuItem,_extends_1({},info.item,{selected:isSelected,onPress:_this.onSelect,__source:{fileName:_jsxFileName$C,lineNumber:331}}));};_this.renderDivider=function(){return _this.isDividerAbsent()&&React.createElement(Divider,{__source:{fileName:_jsxFileName$C,lineNumber:334}});};return _this;}createClass(MenuComponent,[{key:"render",value:function render(){var _a=this.props,appearance=_a.appearance,data=_a.data,restProps=__rest$s(_a,["appearance","data"]);var items=this.service.setIndexes(data);return React.createElement(List,_extends_1({ItemSeparatorComponent:this.renderDivider,renderItem:this.renderMenuItem,data:items},restProps,{__source:{fileName:_jsxFileName$C,lineNumber:340}}));}}]);return MenuComponent;}(React.Component);MenuComponent.styledComponentName='Menu';var Menu=styled(MenuComponent);

var _jsxFileName$D="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\drawer\\drawer.component.js";var __rest$t=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var DrawerComponent=function(_React$Component){inherits(DrawerComponent,_React$Component);function DrawerComponent(){var _this;classCallCheck(this,DrawerComponent);_this=possibleConstructorReturn(this,getPrototypeOf(DrawerComponent).apply(this,arguments));_this.renderHeader=function(){var header=_this.props.header;return header();};_this.renderFooter=function(){var footer=_this.props.footer;return footer();};_this.renderMenu=function(){var _a=_this.props,style=_a.style,header=_a.header,footer=_a.footer,themedStyle=_a.themedStyle,restProps=__rest$t(_a,["style","header","footer","themedStyle"]);return React.createElement(Menu,_extends_1({style:themedStyle,showsVerticalScrollIndicator:false,bounces:false},restProps,{__source:{fileName:_jsxFileName$D,lineNumber:235}}));};_this.renderComponentChildren=function(){var _this$props=_this.props,header=_this$props.header,footer=_this$props.footer;return [header&&_this.renderHeader(),_this.renderMenu(),footer&&_this.renderFooter()];};return _this;}createClass(DrawerComponent,[{key:"render",value:function render(){var _this$renderComponent=this.renderComponentChildren(),_this$renderComponent2=slicedToArray(_this$renderComponent,3),header=_this$renderComponent2[0],menu=_this$renderComponent2[1],footer=_this$renderComponent2[2];return React.createElement(React.Fragment,{__source:{fileName:_jsxFileName$D,lineNumber:248}},header,menu,footer);}}]);return DrawerComponent;}(React.Component);DrawerComponent.styledComponentName='Drawer';var Drawer=styled(DrawerComponent);

var _jsxFileName$E="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\list\\listItem.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$u=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var ListItemComponent=function(_React$Component){inherits(ListItemComponent,_React$Component);function ListItemComponent(){var _this;classCallCheck(this,ListItemComponent);_this=possibleConstructorReturn(this,getPrototypeOf(ListItemComponent).apply(this,arguments));_this.onPress=function(event){if(_this.props.onPress){_this.props.onPress(_this.props.index,event);}};_this.onPressIn=function(event){_this.props.dispatch([exports.Interaction.ACTIVE]);if(_this.props.onPressIn){_this.props.onPressIn(_this.props.index,event);}};_this.onPressOut=function(event){_this.props.dispatch([]);if(_this.props.onPressOut){_this.props.onPressOut(_this.props.index,event);}};_this.onLongPress=function(event){if(_this.props.onLongPress){_this.props.onLongPress(_this.props.index,event);}};_this.getComponentStyle=function(source){var iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconMarginHorizontal=source.iconMarginHorizontal,iconTintColor=source.iconTintColor,titleMarginHorizontal=source.titleMarginHorizontal,titleFontFamily=source.titleFontFamily,titleFontSize=source.titleFontSize,titleLineHeight=source.titleLineHeight,titleFontWeight=source.titleFontWeight,titleColor=source.titleColor,descriptionFontFamily=source.descriptionFontFamily,descriptionFontSize=source.descriptionFontSize,descriptionFontWeight=source.descriptionFontWeight,descriptionLineHeight=source.descriptionLineHeight,descriptionColor=source.descriptionColor,descriptionMarginHorizontal=source.descriptionMarginHorizontal,accessoryMarginHorizontal=source.accessoryMarginHorizontal,containerParameters=__rest$u(source,["iconWidth","iconHeight","iconMarginHorizontal","iconTintColor","titleMarginHorizontal","titleFontFamily","titleFontSize","titleLineHeight","titleFontWeight","titleColor","descriptionFontFamily","descriptionFontSize","descriptionFontWeight","descriptionLineHeight","descriptionColor","descriptionMarginHorizontal","accessoryMarginHorizontal"]);return {container:containerParameters,contentContainer:{},icon:{width:iconWidth,height:iconHeight,marginHorizontal:iconMarginHorizontal,tintColor:iconTintColor},title:{marginHorizontal:titleMarginHorizontal,fontFamily:titleFontFamily,fontSize:titleFontSize,lineHeight:titleLineHeight,fontWeight:titleFontWeight,color:titleColor},description:{color:descriptionColor,fontFamily:descriptionFontFamily,fontSize:descriptionFontSize,fontWeight:descriptionFontWeight,lineHeight:descriptionLineHeight,marginHorizontal:descriptionMarginHorizontal},accessory:{marginHorizontal:accessoryMarginHorizontal}};};_this.renderIconElement=function(style){var _this$props=_this.props,index=_this$props.index,icon=_this$props.icon;var iconElement=icon(style,index);return React.cloneElement(iconElement,{key:0,style:[style,styles$n.icon,iconElement.props.style]});};_this.renderContentElement=function(style){var contentContainer=style.contentContainer,contentStyles=__rest$u(style,["contentContainer"]);var _this$renderContentEl=_this.renderContentElementChildren(contentStyles),_this$renderContentEl2=slicedToArray(_this$renderContentEl,2),titleElement=_this$renderContentEl2[0],descriptionElement=_this$renderContentEl2[1];return React.createElement(reactNative.View,{key:1,style:[contentContainer,styles$n.contentContainer],__source:{fileName:_jsxFileName$E,lineNumber:204}},titleElement,descriptionElement);};_this.renderTitleElement=function(style){var _this$props2=_this.props,title=_this$props2.title,titleStyle=_this$props2.titleStyle;return React.createElement(Text,{key:2,style:[style,styles$n.title,titleStyle],__source:{fileName:_jsxFileName$E,lineNumber:212}},title);};_this.renderDescriptionElement=function(style){var _this$props3=_this.props,description=_this$props3.description,descriptionStyle=_this$props3.descriptionStyle;return React.createElement(Text,{key:3,style:[style,styles$n.description,descriptionStyle],__source:{fileName:_jsxFileName$E,lineNumber:219}},description);};_this.renderAccessoryElement=function(style){var _this$props4=_this.props,index=_this$props4.index,accessory=_this$props4.accessory;var accessoryElement=accessory(style,index);return React.cloneElement(accessoryElement,{key:4,style:[style,styles$n.accessory,accessoryElement.props.style]});};_this.renderContentElementChildren=function(style){var _this$props5=_this.props,title=_this$props5.title,description=_this$props5.description;return [isValidString(title)&&_this.renderTitleElement(style.title),isValidString(description)&&_this.renderDescriptionElement(style.description)];};_this.renderTemplateChildren=function(style){var _this$props6=_this.props,icon=_this$props6.icon,title=_this$props6.title,description=_this$props6.description,accessory=_this$props6.accessory;return [icon&&_this.renderIconElement(style.icon),(title||description)&&_this.renderContentElement(style),accessory&&_this.renderAccessoryElement(style.accessory)];};_this.renderComponentChildren=function(style){var children=_this.props.children;return children?children:_this.renderTemplateChildren(style);};return _this;}createClass(ListItemComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,derivedProps=__rest$u(_a,["themedStyle","style"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,componentStyles=__rest$u(_b,["container"]);var componentChildren=this.renderComponentChildren(componentStyles);return React.createElement(reactNative.TouchableOpacity,_extends_1({activeOpacity:1.0},derivedProps,{style:[container,styles$n.container,style],onPress:this.onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,onLongPress:this.onLongPress,__source:{fileName:_jsxFileName$E,lineNumber:258}}),componentChildren);}}]);return ListItemComponent;}(React.Component);ListItemComponent.styledComponentName='ListItem';var styles$n=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center'},contentContainer:{flex:1},icon:{},title:{textAlign:'left'},description:{textAlign:'left'},accessory:{}});var ListItem=styled(ListItemComponent);

var _jsxFileName$F="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\drawer\\drawerHeaderFooter.component.js";var DrawerHeaderFooter=function(_React$Component){inherits(DrawerHeaderFooter,_React$Component);function DrawerHeaderFooter(){classCallCheck(this,DrawerHeaderFooter);return possibleConstructorReturn(this,getPrototypeOf(DrawerHeaderFooter).apply(this,arguments));}createClass(DrawerHeaderFooter,[{key:"render",value:function render(){return React.createElement(ListItem,_extends_1({},this.props,{__source:{fileName:_jsxFileName$F,lineNumber:114}}));}}]);return DrawerHeaderFooter;}(React.Component);

var _jsxFileName$G="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\select\\selectOption.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$v=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var SelectOptionComponent=function(_React$Component){inherits(SelectOptionComponent,_React$Component);function SelectOptionComponent(){var _this;classCallCheck(this,SelectOptionComponent);_this=possibleConstructorReturn(this,getPrototypeOf(SelectOptionComponent).apply(this,arguments));_this.onPress=function(event){var _this$props=_this.props,item=_this$props.item,onPress=_this$props.onPress;_this.props.dispatch([]);onPress(item,event);};_this.onMultiSelectItemPress=function(value){_this.onPress(null);};_this.onPressIn=function(event){_this.props.dispatch([exports.Interaction.ACTIVE]);if(_this.props.onPressIn){_this.props.onPressIn(_this.props.item,event);}};_this.onPressOut=function(event){_this.props.dispatch([]);if(_this.props.onPressOut){_this.props.onPressOut(_this.props.item,event);}};_this.onLongPress=function(event){if(_this.props.onLongPress){_this.props.onLongPress(_this.props.item,event);}};_this.getComponentStyle=function(source){var textColor=source.textColor,textFontFamily=source.textFontFamily,textFontSize=source.textFontSize,textFontWeight=source.textFontWeight,textLineHeight=source.textLineHeight,textMarginHorizontal=source.textMarginHorizontal,multiSelectBackgroundColor=source.multiSelectBackgroundColor,multiSelectTextColor=source.multiSelectTextColor,containerStyles=__rest$v(source,["textColor","textFontFamily","textFontSize","textFontWeight","textLineHeight","textMarginHorizontal","multiSelectBackgroundColor","multiSelectTextColor"]);return {container:containerStyles,multiSelectContainer:_extends_1(_extends_1({},containerStyles),{backgroundColor:multiSelectBackgroundColor}),text:{color:textColor,fontFamily:textFontFamily,fontSize:textFontSize,fontWeight:textFontWeight,lineHeight:textLineHeight,marginHorizontal:textMarginHorizontal},multiSelectText:{color:multiSelectTextColor,fontFamily:textFontFamily,fontSize:textFontSize,fontWeight:textFontWeight,lineHeight:textLineHeight,marginHorizontal:textMarginHorizontal}};};_this.renderTextElement=function(style){var item=_this.props.item;return React.createElement(Text,{style:[style,styles$o.text,item.textStyle],__source:{fileName:_jsxFileName$G,lineNumber:75}},item.text);};_this.renderDefaultItem=function(){var _a=_this.props,themedStyle=_a.themedStyle,style=_a.style,item=_a.item,restProps=__rest$v(_a,["themedStyle","style","item"]);var _this$getComponentSty=_this.getComponentStyle(themedStyle),container=_this$getComponentSty.container,text=_this$getComponentSty.text;var textElement=_this.renderTextElement(text);return React.createElement(reactNative.TouchableOpacity,_extends_1({},restProps,{activeOpacity:1.0,style:[styles$o.container,container,style],onPress:_this.onPress,onPressIn:_this.onPressIn,onPressOut:_this.onPressOut,onLongPress:_this.onLongPress,__source:{fileName:_jsxFileName$G,lineNumber:83}}),textElement);};_this.renderMultiSelectItem=function(){var _a=_this.props,disabled=_a.disabled,item=_a.item,themedStyle=_a.themedStyle,selected=_a.selected,style=_a.style,indeterminate=_a.indeterminate,restProps=__rest$v(_a,["disabled","item","themedStyle","selected","style","indeterminate"]);var _this$getComponentSty2=_this.getComponentStyle(themedStyle),multiSelectContainer=_this$getComponentSty2.multiSelectContainer,multiSelectText=_this$getComponentSty2.multiSelectText;return React.createElement(reactNative.View,_extends_1({},restProps,{style:[styles$o.container,multiSelectContainer,style],__source:{fileName:_jsxFileName$G,lineNumber:90}}),React.createElement(CheckBox,{text:item.text,textStyle:[multiSelectText,item.textStyle],disabled:disabled,checked:selected,indeterminate:indeterminate,onChange:_this.onMultiSelectItemPress,__source:{fileName:_jsxFileName$G,lineNumber:91}}));};return _this;}createClass(SelectOptionComponent,[{key:"render",value:function render(){var multiSelect=this.props.multiSelect;return multiSelect?this.renderMultiSelectItem():this.renderDefaultItem();}}]);return SelectOptionComponent;}(React.Component);SelectOptionComponent.styledComponentName='SelectOption';var styles$o=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center'},icon:{},text:{}});var SelectOption=styled(SelectOptionComponent);

var _jsxFileName$H="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\select\\selectGroupOption.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$w=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var SelectGroupOptionComponent=function(_React$Component){inherits(SelectGroupOptionComponent,_React$Component);function SelectGroupOptionComponent(){var _this;classCallCheck(this,SelectGroupOptionComponent);_this=possibleConstructorReturn(this,getPrototypeOf(SelectGroupOptionComponent).apply(this,arguments));_this.getComponentStyle=function(source){var itemPaddingHorizontal=source.itemPaddingHorizontal,containerStyles=__rest$w(source,["itemPaddingHorizontal"]);return {container:containerStyles,item:{paddingHorizontal:itemPaddingHorizontal}};};_this.getMainItemStatus=function(subItemsSelectedStatusArray){var someSelected=subItemsSelectedStatusArray.some(function(item){return item===true;});var everySelected=subItemsSelectedStatusArray.every(function(item){return item===true;});switch(true){case someSelected&&!everySelected:return {selected:true,indeterminate:true};case!someSelected:return {selected:false,indeterminate:false};case everySelected:return {selected:true,indeterminate:false};}};_this.renderSubItem=function(option,index){var _a=_this.props,item=_a.item,renderItem=_a.renderItem,strategy=_a.strategy,restProps=__rest$w(_a,["item","renderItem","strategy"]);var returningOption={item:option,index:index,separators:null};var selected=strategy.isSelected(option);return renderItem?renderItem(returningOption):React.createElement(SelectOption,_extends_1({},restProps,{selected:selected,item:option,__source:{fileName:_jsxFileName$H,lineNumber:55}}));};_this.renderSubItemsElements=function(){var _this$props=_this.props,item=_this$props.item,themedStyle=_this$props.themedStyle;var _this$getComponentSty=_this.getComponentStyle(themedStyle),itemStyle=_this$getComponentSty.item;return item.items.map(function(option,index){var element=_this.renderSubItem(option,index);return React.cloneElement(element,_extends_1(_extends_1({},option),{style:[element.props.style,itemStyle],key:index}));});};_this.renderMultiSelectMainElement=function(subItemsElements){var _a=_this.props,item=_a.item,restProps=__rest$w(_a,["item"]);var subItemsSelectedStatusArray=subItemsElements.map(function(subItem){return subItem.props.selected;});var itemStatus=_this.getMainItemStatus(subItemsSelectedStatusArray);return React.createElement(SelectOption,_extends_1({},restProps,itemStatus,{item:item,__source:{fileName:_jsxFileName$H,lineNumber:71}}));};_this.renderDefaultMainElement=function(){var item=_this.props.item;return React.createElement(SelectOption,{disabled:true,item:item,__source:{fileName:_jsxFileName$H,lineNumber:75}});};_this.renderMainElement=function(subItemsElements){var multiSelect=_this.props.multiSelect;return multiSelect?_this.renderMultiSelectMainElement(subItemsElements):_this.renderDefaultMainElement();};return _this;}createClass(SelectGroupOptionComponent,[{key:"render",value:function render(){var themedStyle=this.props.themedStyle;var _this$getComponentSty2=this.getComponentStyle(themedStyle),container=_this$getComponentSty2.container;var subItemsElements=this.renderSubItemsElements();var mainElement=this.renderMainElement(subItemsElements);return React.createElement(reactNative.View,{style:container,__source:{fileName:_jsxFileName$H,lineNumber:87}},mainElement,subItemsElements);}}]);return SelectGroupOptionComponent;}(React.Component);SelectGroupOptionComponent.styledComponentName='SelectGroupOption';var SelectGroupOption=styled(SelectGroupOptionComponent);

var _jsxFileName$I="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\select\\selectOptionsList.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$x=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var SelectOptionsList=function(_React$Component){inherits(SelectOptionsList,_React$Component);function SelectOptionsList(){var _this;classCallCheck(this,SelectOptionsList);_this=possibleConstructorReturn(this,getPrototypeOf(SelectOptionsList).apply(this,arguments));_this.areThereSubItems=function(dropdownItem){var items=dropdownItem.items;return items&&items.length!==0;};_this.onSelect=function(option,event){_this.props.onSelect(option,event);};_this.renderDefaultItem=function(info){var _this$props=_this.props,renderItem=_this$props.renderItem,multiSelect=_this$props.multiSelect,strategy=_this$props.strategy;var selected=strategy.isSelected(info.item);return _this.areThereSubItems(info.item)?React.createElement(SelectGroupOption,_extends_1({},info,{strategy:strategy,multiSelect:multiSelect,renderItem:renderItem,onPress:_this.onSelect,__source:{fileName:_jsxFileName$I,lineNumber:35}})):React.createElement(SelectOption,_extends_1({},info,{disabled:info.item.disabled,selected:selected,multiSelect:multiSelect,onPress:_this.onSelect,__source:{fileName:_jsxFileName$I,lineNumber:35}}));};_this.renderItem=function(info){var renderItem=_this.props.renderItem;return renderItem?renderItem(info):_this.renderDefaultItem(info);};return _this;}createClass(SelectOptionsList,[{key:"render",value:function render(){var _a=this.props,style=_a.style,restProps=__rest$x(_a,["style"]);return React.createElement(List,_extends_1({},restProps,{style:[styles$p.container,style],renderItem:this.renderItem,__source:{fileName:_jsxFileName$I,lineNumber:44}}));}}]);return SelectOptionsList;}(React.Component);var styles$p=reactNative.StyleSheet.create({container:{}});

var MultiSelectStrategy=function(){function MultiSelectStrategy(options){classCallCheck(this,MultiSelectStrategy);if(Array.isArray(options)){this.selectedOption=options;}}createClass(MultiSelectStrategy,[{key:"select",value:function select(option,callback){var subOptionsExist=this.areThereSubOptions(option);if(subOptionsExist){this.selectOptionWithSubOptions(option);}else{this.selectDefaultOption(option);}return this.selectedOption;}},{key:"selectDefaultOption",value:function selectDefaultOption(option){var optionAlreadyExist=this.selectedOption.some(function(item){return item===option;});if(optionAlreadyExist){this.removeOption(option);}else{this.selectedOption.push(option);}}},{key:"selectOptionWithSubOptions",value:function selectOptionWithSubOptions(option){var _this=this;var subOptionsAlreadyExist=this.selectedOption.some(function(item){return option.items.some(function(subItem){return subItem===item;});});if(subOptionsAlreadyExist){option.items.forEach(function(subItem){return _this.removeOption(subItem);});}else{var enabledItems=option.items.filter(function(item){return !item.disabled;});this.selectedOption=this.selectedOption.concat(enabledItems);}}},{key:"getPlaceholder",value:function getPlaceholder(placeholder){if(this.isSelectedOptionExist()){return this.selectedOption.map(function(item){return item&&item.text;}).join(', ');}else{return placeholder;}}},{key:"isSelected",value:function isSelected(item){return this.selectedOption.some(function(option){return option===item;});}},{key:"isSelectedOptionExist",value:function isSelectedOptionExist(){return this.selectedOption&&this.selectedOption.length!==0;}},{key:"removeOption",value:function removeOption(option){var index=this.selectedOption.findIndex(function(item){return item===option;});if(index!==-1){this.selectedOption.splice(index,1);}}},{key:"areThereSubOptions",value:function areThereSubOptions(option){return option.items&&option.items.length!==0;}}]);return MultiSelectStrategy;}();var SingleSelectStrategy=function(){function SingleSelectStrategy(options){classCallCheck(this,SingleSelectStrategy);if(!Array.isArray(options)){this.selectedOption=options;}}createClass(SingleSelectStrategy,[{key:"select",value:function select(option,callback){this.selectedOption=option;if(callback){callback();}return this.selectedOption;}},{key:"getPlaceholder",value:function getPlaceholder(placeholder){if(this.selectedOption){return this.selectedOption.text;}else{return placeholder;}}},{key:"isSelected",value:function isSelected(item){var _this2=this;if(this.hasOptionSubItems(item)){return item.items.some(function(option){return _this2.isSelected(option);});}else{return this.selectedOption===item;}}},{key:"hasOptionSubItems",value:function hasOptionSubItems(option){return option.items&&option.items.length!==0;}}]);return SingleSelectStrategy;}();

var _jsxFileName$J="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\select\\select.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$y=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var MEASURED_CONTROL_TAG='Control';var SelectComponent=function(_React$Component){inherits(SelectComponent,_React$Component);function SelectComponent(props){var _this;classCallCheck(this,SelectComponent);_this=possibleConstructorReturn(this,getPrototypeOf(SelectComponent).call(this,props));_this.state={visible:false,optionsListWidth:0};_this.onPress=function(event){_this.props.dispatch([]);if(_this.props.onPress){_this.props.onPress(event);}_this.setVisibility();};_this.onPressIn=function(event){_this.props.dispatch([exports.Interaction.ACTIVE]);if(_this.props.onPressIn){_this.props.onPressIn(event);}};_this.onPressOut=function(event){_this.props.dispatch([]);if(_this.props.onPressOut){_this.props.onPressOut(event);}};_this.onItemSelect=function(option,event){var onSelect=_this.props.onSelect;onSelect(_this.strategy.select(option,_this.setVisibility));};_this.onControlMeasure=function(result){var width=result[MEASURED_CONTROL_TAG].size.width;_this.setState({optionsListWidth:width});};_this.createSelectionStrategy=function(){var _this$props=_this.props,multiSelect=_this$props.multiSelect,selectedOption=_this$props.selectedOption;return multiSelect?new MultiSelectStrategy(selectedOption):new SingleSelectStrategy(selectedOption);};_this.setVisibility=function(){var visible=!_this.state.visible;_this.setState({visible:visible},_this.handleVisibleChange);};_this.handleVisibleChange=function(){_this.dispatchActive();_this.startIconAnimation();};_this.dispatchActive=function(){var visible=_this.state.visible;if(visible){_this.props.dispatch([exports.Interaction.ACTIVE]);}else{_this.props.dispatch([]);}};_this.startIconAnimation=function(){var visible=_this.state.visible;if(visible){_this.animateIcon(0);}else{_this.animateIcon(-180);}};_this.animateIcon=function(toValue){reactNative.Animated.timing(_this.iconAnimation,{toValue:toValue,duration:200}).start();};_this.getComponentStyle=function(source){var backgroundColor=source.backgroundColor,borderColor=source.borderColor,borderWidth=source.borderWidth,minHeight=source.minHeight,minWidth=source.minWidth,paddingHorizontal=source.paddingHorizontal,paddingVertical=source.paddingVertical,borderRadius=source.borderRadius;var iconStyles=allWithPrefix(source,'icon');var textStyles=allWithPrefix(source,'text');var placeholderStyles=allWithPrefix(source,'placeholder');var optionsListStyles=allWithPrefix(source,'optionsList');var labelStyle=allWithPrefix(source,'label');var outlineStyles=allWithPrefix(source,'outline');return {control:{backgroundColor:backgroundColor,borderColor:borderColor,borderWidth:borderWidth,minHeight:minHeight,minWidth:minWidth,paddingHorizontal:paddingHorizontal,paddingVertical:paddingVertical,borderRadius:borderRadius},icon:{height:iconStyles.iconHeight,width:iconStyles.iconWidth,marginHorizontal:iconStyles.iconMarginHorizontal,tintColor:iconStyles.iconTintColor},text:{color:textStyles.textColor,fontFamily:textStyles.textFontFamily,fontSize:textStyles.textFontSize,fontWeight:textStyles.textFontWeight,lineHeight:textStyles.textLineHeight,marginHorizontal:textStyles.textMarginHorizontal},placeholder:{color:placeholderStyles.placeholderColor,fontFamily:placeholderStyles.placeholderFontFamily,fontSize:placeholderStyles.placeholderFontSize,fontWeight:placeholderStyles.placeholderFontWeight,lineHeight:placeholderStyles.placeholderLineHeight,marginHorizontal:placeholderStyles.placeholderMarginHorizontal},outline:{backgroundColor:outlineStyles.outlineBackgroundColor,padding:outlineStyles.outlinePadding,borderRadius:outlineStyles.outlineBorderRadius},optionsList:{maxHeight:optionsListStyles.optionsListMaxHeight,borderRadius:optionsListStyles.optionsListBorderRadius,borderColor:optionsListStyles.optionsListBorderColor,borderWidth:optionsListStyles.optionsListBorderWidth},label:{color:labelStyle.labelColor,marginBottom:labelStyle.labelMarginBottom}};};_this.renderLabelElement=function(style){var _this$props2=_this.props,label=_this$props2.label,labelStyle=_this$props2.labelStyle;return React.createElement(Text,{style:[style,styles$q.label,labelStyle],__source:{fileName:_jsxFileName$J,lineNumber:512}},label);};_this.renderDefaultIconElement=function(style){var rotateInterpolate=_this.iconAnimation.interpolate({inputRange:[-180,0],outputRange:['-180deg','0deg']});var animatedStyle={transform:[{rotate:rotateInterpolate}]};return React.createElement(Chevron,{style:[style,animatedStyle],isAnimated:true,__source:{fileName:_jsxFileName$J,lineNumber:522}});};_this.renderIconElement=function(style){var icon=_this.props.icon;var visible=_this.state.visible;if(icon){return icon(style,visible);}else{return _this.renderDefaultIconElement(style);}};_this.renderTextElement=function(valueStyle,placeholderStyle){var _this$props3=_this.props,placeholder=_this$props3.placeholder,textStyle=_this$props3.textStyle;var value=_this.strategy.getPlaceholder(placeholder);var style=placeholder===value?placeholderStyle:valueStyle;return React.createElement(Text,{style:[style,styles$q.text,textStyle],numberOfLines:1,ellipsizeMode:"tail",__source:{fileName:_jsxFileName$J,lineNumber:538}},value);};_this.renderOptionsListElement=function(style){var _a=_this.props,appearance=_a.appearance,selectedOption=_a.selectedOption,restProps=__rest$y(_a,["appearance","selectedOption"]);var additionalOptionsListStyle={width:_this.state.optionsListWidth};return React.createElement(SelectOptionsList,_extends_1({},restProps,{strategy:_this.strategy,key:0,style:[styles$q.optionsList,style,additionalOptionsListStyle],bounces:false,onSelect:_this.onItemSelect,__source:{fileName:_jsxFileName$J,lineNumber:545}}));};_this.renderControlChildren=function(style){return [_this.renderIconElement(style.icon),_this.renderTextElement(style.text,style.placeholder)];};_this.renderControlElement=function(){var _a=_this.props,themedStyle=_a.themedStyle,controlStyle=_a.controlStyle,restProps=__rest$y(_a,["themedStyle","controlStyle"]);var _b=_this.getComponentStyle(themedStyle),control=_b.control,outline=_b.outline,childrenStyles=__rest$y(_b,["control","outline"]);var _this$renderControlCh=_this.renderControlChildren(childrenStyles),_this$renderControlCh2=slicedToArray(_this$renderControlCh,2),iconElement=_this$renderControlCh2[0],textElement=_this$renderControlCh2[1];var measuringProps={tag:MEASURED_CONTROL_TAG};return React.createElement(MeasureNode,{onResult:_this.onControlMeasure,__source:{fileName:_jsxFileName$J,lineNumber:558}},[React.createElement(reactNative.TouchableOpacity,_extends_1({},restProps,measuringProps,{key:MEASURED_CONTROL_TAG,activeOpacity:1.0,style:[styles$q.control,control,controlStyle],onPress:_this.onPress,onPressIn:_this.onPressIn,onPressOut:_this.onPressOut,__source:{fileName:_jsxFileName$J,lineNumber:560}}),textElement,iconElement)]);};_this.renderComponentChildren=function(style){var label=_this.props.label;return [_this.renderOptionsListElement(style.optionsList),isValidString(label)&&_this.renderLabelElement(style.label),_this.renderControlElement()];};_this.strategy=_this.createSelectionStrategy();_this.iconAnimation=new reactNative.Animated.Value(-180);return _this;}createClass(SelectComponent,[{key:"componentDidUpdate",value:function componentDidUpdate(){this.strategy=this.createSelectionStrategy();}},{key:"render",value:function render(){var _this$props4=this.props,themedStyle=_this$props4.themedStyle,style=_this$props4.style;var _this$state=this.state,visible=_this$state.visible,optionsListWidth=_this$state.optionsListWidth;var componentStyle=this.getComponentStyle(themedStyle);var _this$renderComponent=this.renderComponentChildren(componentStyle),_this$renderComponent2=slicedToArray(_this$renderComponent,3),optionsListElement=_this$renderComponent2[0],labelElement=_this$renderComponent2[1],controlElement=_this$renderComponent2[2];var additionalOptionsListStyle={maxWidth:optionsListWidth};return React.createElement(reactNative.View,{style:style,__source:{fileName:_jsxFileName$J,lineNumber:587}},labelElement,React.createElement(reactNative.View,{style:[styles$q.outline,componentStyle.outline],__source:{fileName:_jsxFileName$J,lineNumber:589}},React.createElement(Popover,{visible:visible,content:optionsListElement,style:additionalOptionsListStyle,indicatorStyle:styles$q.indicator,onBackdropPress:this.setVisibility,__source:{fileName:_jsxFileName$J,lineNumber:590}},controlElement)));}}]);return SelectComponent;}(React.Component);SelectComponent.styledComponentName='Select';SelectComponent.defaultProps={placeholder:'Select Option',multiSelect:false};var styles$q=reactNative.StyleSheet.create({control:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},text:{flex:1},icon:{},label:{},indicator:{width:0,height:6},optionsList:{flexGrow:0},outlineContainer:{flex:1,alignItems:'center',justifyContent:'center'},outline:{justifyContent:'center'}});var Select=styled(SelectComponent);

var DEFAULT_CONFIG={cycles:1,useNativeDriver:true};var Animation=function(){function Animation(config){var _this=this;classCallCheck(this,Animation);this.counter=0;this.running=false;this.onAnimationEnd=function(result){_this.counter+=1;if(_this.counter===_this.config.cycles){_this.stop();}if(_this.running){_this.start(_this.endCallback);}if(!_this.running){_this.counter=0;_this.endCallback&&_this.endCallback(result);_this.endCallback=null;}};this.config=_extends_1(_extends_1({},DEFAULT_CONFIG),config);}createClass(Animation,[{key:"start",value:function start(callback){this.endCallback=callback;this.running=true;this.animation.start(this.onAnimationEnd);}},{key:"stop",value:function stop(){this.running=false;this.animation.stop();}},{key:"release",value:function release(){this.stop();}}]);return Animation;}();

var __rest$z=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var DEFAULT_CONFIG$1={start:1.0,end:1.25,easing:reactNative.Easing.linear,duration:500};var PulseAnimation=function(_Animation){inherits(PulseAnimation,_Animation);function PulseAnimation(config){var _this;classCallCheck(this,PulseAnimation);_this=possibleConstructorReturn(this,getPrototypeOf(PulseAnimation).call(this,_extends_1(_extends_1({},DEFAULT_CONFIG$1),config)));_this.value=new reactNative.Animated.Value(_this.config.start);return _this;}createClass(PulseAnimation,[{key:"toProps",value:function toProps(){return {style:{transform:[{scale:this.value}]}};}},{key:"animation",get:function get(){var _a=this.config,start=_a.start,end=_a.end,restConfig=__rest$z(_a,["start","end"]);var startAnimation=reactNative.Animated.timing(this.value,_extends_1({toValue:end},restConfig));var endAnimation=reactNative.Animated.timing(this.value,_extends_1({toValue:start},restConfig));return reactNative.Animated.sequence([startAnimation,endAnimation]);}}]);return PulseAnimation;}(Animation);

var __rest$A=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var DEFAULT_CONFIG$2={start:0.0,offset:2.5,easing:reactNative.Easing.linear,duration:25,cycles:8};var ShakeAnimation=function(_Animation){inherits(ShakeAnimation,_Animation);function ShakeAnimation(config){var _this;classCallCheck(this,ShakeAnimation);_this=possibleConstructorReturn(this,getPrototypeOf(ShakeAnimation).call(this,_extends_1(_extends_1({},DEFAULT_CONFIG$2),config)));_this.value=new reactNative.Animated.Value(_this.config.start);return _this;}createClass(ShakeAnimation,[{key:"toProps",value:function toProps(){return {style:{transform:[{translateX:this.value}]}};}},{key:"animation",get:function get(){var _a=this.config,start=_a.start,offset=_a.offset,restConfig=__rest$A(_a,["start","offset"]);var startAnimation=reactNative.Animated.timing(this.value,_extends_1({toValue:this.counter%2!==0?-offset:offset},restConfig));var endAnimation=reactNative.Animated.timing(this.value,_extends_1({toValue:this.counter%2!==0?offset:-offset},restConfig));return reactNative.Animated.sequence([startAnimation,endAnimation]);}}]);return ShakeAnimation;}(Animation);

var __rest$B=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var DEFAULT_CONFIG$3={start:1.0,end:0.5,easing:reactNative.Easing.linear,duration:500};var ZoomAnimation=function(_Animation){inherits(ZoomAnimation,_Animation);function ZoomAnimation(config){var _this;classCallCheck(this,ZoomAnimation);_this=possibleConstructorReturn(this,getPrototypeOf(ZoomAnimation).call(this,_extends_1(_extends_1({},DEFAULT_CONFIG$3),config)));_this.value=new reactNative.Animated.Value(_this.config.start);return _this;}createClass(ZoomAnimation,[{key:"toProps",value:function toProps(){return {style:{transform:[{scale:this.value}]}};}},{key:"animation",get:function get(){var _a=this.config,start=_a.start,end=_a.end,restConfig=__rest$B(_a,["start","end"]);var startAnimation=reactNative.Animated.timing(this.value,_extends_1({toValue:end},restConfig));var endAnimation=reactNative.Animated.timing(this.value,_extends_1({toValue:start},restConfig));return reactNative.Animated.sequence([startAnimation,endAnimation]);}}]);return ZoomAnimation;}(Animation);

function getIconAnimation(animation,config){switch(animation){case'zoom':return new ZoomAnimation(config);case'pulse':return new PulseAnimation(config);case'shake':return new ShakeAnimation(config);}}

function throwPackNotFoundError(name){var docRoot='https://akveo.github.io/react-native-ui-kitten/docs';var message=["\nIcon: Icon Pack '"+name+"' is not registered",'Using UI Kitten components is only possible with configuring ApplicationProvider.',"\uD83D\uDCD6 Documentation: "+docRoot+"/guides/setting-up-icons"].join('\n');throw Error(message);}function throwIconNotFoundError(name,pack){var docRoot='https://akveo.github.io/react-native-ui-kitten/docs';var message=["\nIcon: '"+name+"' icon is not registered in pack '"+pack+"'.",'Check icon name or consider switching icon pack.',"\uD83D\uDCD6 Documentation: "+docRoot+"/guides/setting-up-icons"].join('\n');throw Error(message);}var RegistryService=function(){function RegistryService(){classCallCheck(this,RegistryService);this.packs=new Map();}createClass(RegistryService,[{key:"register",value:function register(){var _this=this;for(var _len=arguments.length,packs=new Array(_len),_key=0;_key<_len;_key++){packs[_key]=arguments[_key];}packs.forEach(function(pack){_this.registerIconPack(pack);});}},{key:"setDefaultIconPack",value:function setDefaultIconPack(name){if(!this.packs.has(name)){throwPackNotFoundError(name);}this.defaultPack=name;}},{key:"getIconPack",value:function getIconPack(name){return this.packs.get(name);}},{key:"getIcon",value:function getIcon(name,pack){var iconsPack=pack?this.getPackOrThrow(pack):this.getDefaultPack();return {name:name,pack:iconsPack.name,icon:this.getIconFromPack(name,iconsPack)};}},{key:"registerIconPack",value:function registerIconPack(pack){this.packs.set(pack.name,pack);}},{key:"getPackOrThrow",value:function getPackOrThrow(name){var pack=this.packs.get(name);if(!pack){throwPackNotFoundError(name);}return pack;}},{key:"getDefaultPack",value:function getDefaultPack(){return this.getIconPack(this.defaultPack);}},{key:"getIconFromPack",value:function getIconFromPack(name,pack){var shouldThrow=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(shouldThrow&&!pack.icons[name]){throwIconNotFoundError(name,pack.name);}return pack.icons[name];}}]);return RegistryService;}();var IconRegistryService=new RegistryService();

var _jsxFileName$K="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\icon\\icon.component.js";var __rest$C=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var Icon=function(_React$Component){inherits(Icon,_React$Component);function Icon(props){var _this;classCallCheck(this,Icon);_this=possibleConstructorReturn(this,getPrototypeOf(Icon).call(this,props));_this.startAnimation=function(callback){_this.animation.start(callback);};_this.stopAnimation=function(){_this.animation.stop();};_this.getComponentStyle=function(){return _this.animation.toProps();};_this.animation=getIconAnimation(props.animation,props.animationConfig);return _this;}createClass(Icon,[{key:"componentWillUnmount",value:function componentWillUnmount(){this.animation.release();}},{key:"render",value:function render(){var _a=this.props,name=_a.name,pack=_a.pack,restProps=__rest$C(_a,["name","pack"]);var registeredIcon=IconRegistryService.getIcon(name,pack);return React.createElement(reactNative.Animated.View,_extends_1({},this.getComponentStyle(),{__source:{fileName:_jsxFileName$K,lineNumber:252}}),registeredIcon.icon.toReactElement(restProps));}}]);return Icon;}(React.Component);Icon.defaultProps={animation:'zoom'};

var IconRegistry=function(_React$Component){inherits(IconRegistry,_React$Component);function IconRegistry(){var _this;classCallCheck(this,IconRegistry);_this=possibleConstructorReturn(this,getPrototypeOf(IconRegistry).apply(this,arguments));_this.findDefaultIconPack=function(packs,name){var requestedPackIndex=packs.findIndex(function(pack){return pack.name===name;});return packs[Math.max(0,requestedPackIndex)];};_this.registerIcons=function(source,defaultPack){var packs=Array.isArray(source)?source:[source];var defaultIconPack=_this.findDefaultIconPack(packs,defaultPack);IconRegistryService.register.apply(IconRegistryService,toConsumableArray(packs));IconRegistryService.setDefaultIconPack(defaultIconPack.name);};return _this;}createClass(IconRegistry,[{key:"render",value:function render(){var _this$props=this.props,icons=_this$props.icons,defaultIcons=_this$props.defaultIcons;this.registerIcons(icons,defaultIcons);return null;}}]);return IconRegistry;}(React.Component);IconRegistry.defaultProps={icons:[]};

var FlexStyleProps=['alignContent','alignItems','alignSelf','aspectRatio','borderBottomWidth','borderEndWidth','borderLeftWidth','borderRightWidth','borderStartWidth','borderTopWidth','borderWidth','bottom','display','end','flex','flexBasis','flexDirection','flexGrow','flexShrink','flexWrap','height','justifyContent','left','margin','marginBottom','marginEnd','marginHorizontal','marginLeft','marginRight','marginStart','marginTop','marginVertical','maxHeight','maxWidth','minHeight','minWidth','overflow','padding','paddingBottom','paddingEnd','paddingHorizontal','paddingLeft','paddingRight','paddingStart','paddingTop','paddingVertical','position','right','start','top','width','zIndex','direction'];

var _jsxFileName$L="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\input\\input.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$D=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var InputComponent=function(_React$Component){inherits(InputComponent,_React$Component);function InputComponent(){var _this;classCallCheck(this,InputComponent);_this=possibleConstructorReturn(this,getPrototypeOf(InputComponent).apply(this,arguments));_this.textInputRef=React.createRef();_this.focus=function(){_this.textInputRef.current.focus();};_this.blur=function(){_this.textInputRef.current.blur();};_this.isFocused=function(){return _this.textInputRef.current.isFocused();};_this.clear=function(){_this.textInputRef.current.clear();};_this.onFocus=function(event){_this.props.dispatch([exports.Interaction.FOCUSED]);if(_this.props.onFocus){_this.props.onFocus(event);}};_this.onBlur=function(event){_this.props.dispatch([]);if(_this.props.onBlur){_this.props.onBlur(event);}};_this.onIconPress=function(event){if(_this.props.onIconPress){_this.props.onIconPress(event);}};_this.getComponentStyle=function(source){var flatStyles=reactNative.StyleSheet.flatten(_this.props.style);var _a=allWithRest(flatStyles,FlexStyleProps),inputContainerStyle=_a.rest,containerStyle=__rest$D(_a,["rest"]);var textMarginHorizontal=source.textMarginHorizontal,textFontFamily=source.textFontFamily,textFontSize=source.textFontSize,textLineHeight=source.textLineHeight,textFontWeight=source.textFontWeight,textColor=source.textColor,placeholderColor=source.placeholderColor,iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconMarginHorizontal=source.iconMarginHorizontal,iconTintColor=source.iconTintColor,labelColor=source.labelColor,labelFontSize=source.labelFontSize,labelLineHeight=source.labelLineHeight,labelMarginBottom=source.labelMarginBottom,labelFontWeight=source.labelFontWeight,captionMarginTop=source.captionMarginTop,captionColor=source.captionColor,captionFontSize=source.captionFontSize,captionLineHeight=source.captionLineHeight,captionFontWeight=source.captionFontWeight,captionIconWidth=source.captionIconWidth,captionIconHeight=source.captionIconHeight,captionIconMarginRight=source.captionIconMarginRight,captionIconTintColor=source.captionIconTintColor,containerParameters=__rest$D(source,["textMarginHorizontal","textFontFamily","textFontSize","textLineHeight","textFontWeight","textColor","placeholderColor","iconWidth","iconHeight","iconMarginHorizontal","iconTintColor","labelColor","labelFontSize","labelLineHeight","labelMarginBottom","labelFontWeight","captionMarginTop","captionColor","captionFontSize","captionLineHeight","captionFontWeight","captionIconWidth","captionIconHeight","captionIconMarginRight","captionIconTintColor"]);return {container:containerStyle,inputContainer:_extends_1(_extends_1({},containerParameters),inputContainerStyle),captionContainer:{marginTop:captionMarginTop},text:{marginHorizontal:textMarginHorizontal,fontFamily:textFontFamily,fontSize:textFontSize,fontWeight:textFontWeight,color:textColor},placeholder:{color:placeholderColor},icon:{width:iconWidth,height:iconHeight,marginHorizontal:iconMarginHorizontal,tintColor:iconTintColor},label:{color:labelColor,fontSize:labelFontSize,lineHeight:labelLineHeight,marginBottom:labelMarginBottom,fontWeight:labelFontWeight},captionIcon:{width:captionIconWidth,height:captionIconHeight,tintColor:captionIconTintColor,marginRight:captionIconMarginRight},captionLabel:{fontSize:captionFontSize,fontWeight:captionFontWeight,lineHeight:captionLineHeight,color:captionColor}};};_this.renderIconTouchableElement=function(style){var iconElement=_this.renderIconElement(style);return React.createElement(reactNative.TouchableWithoutFeedback,{onPress:_this.onIconPress,__source:{fileName:_jsxFileName$L,lineNumber:369}},iconElement);};_this.renderIconElement=function(style){var iconElement=_this.props.icon(style);return React.cloneElement(iconElement,{key:0,style:[style,styles$r.icon,iconElement.props.style]});};_this.renderLabelElement=function(style){return React.createElement(Text,{key:1,style:[style,styles$r.label,_this.props.labelStyle],__source:{fileName:_jsxFileName$L,lineNumber:381}},_this.props.label);};_this.renderCaptionElement=function(style){return React.createElement(Text,{key:2,style:[style,styles$r.captionLabel,_this.props.captionTextStyle],__source:{fileName:_jsxFileName$L,lineNumber:386}},_this.props.caption);};_this.renderCaptionIconElement=function(style){var iconElement=_this.props.captionIcon(style);return React.cloneElement(iconElement,{key:3,style:[style,styles$r.captionIcon,iconElement.props.style]});};_this.renderComponentChildren=function(style){var _this$props=_this.props,icon=_this$props.icon,label=_this$props.label,captionIcon=_this$props.captionIcon,caption=_this$props.caption;return [icon&&_this.renderIconTouchableElement(style.icon),isValidString(label)&&_this.renderLabelElement(style.label),isValidString(caption)&&_this.renderCaptionElement(style.captionLabel),captionIcon&&_this.renderCaptionIconElement(style.captionIcon)];};return _this;}createClass(InputComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,textStyle=_a.textStyle,disabled=_a.disabled,restProps=__rest$D(_a,["themedStyle","textStyle","disabled"]);var componentStyle=this.getComponentStyle(themedStyle);var _this$renderComponent=this.renderComponentChildren(componentStyle),_this$renderComponent2=slicedToArray(_this$renderComponent,4),iconElement=_this$renderComponent2[0],labelElement=_this$renderComponent2[1],captionElement=_this$renderComponent2[2],captionIconElement=_this$renderComponent2[3];return React.createElement(reactNative.View,{style:[componentStyle.container,styles$r.container],__source:{fileName:_jsxFileName$L,lineNumber:411}},labelElement,React.createElement(reactNative.View,{style:[componentStyle.inputContainer,styles$r.inputContainer],__source:{fileName:_jsxFileName$L,lineNumber:413}},React.createElement(reactNative.TextInput,_extends_1({ref:this.textInputRef},restProps,{style:[componentStyle.text,styles$r.text,textStyle],placeholderTextColor:componentStyle.placeholder.color,editable:!disabled,onFocus:this.onFocus,onBlur:this.onBlur,__source:{fileName:_jsxFileName$L,lineNumber:414}})),iconElement),React.createElement(reactNative.View,{style:[componentStyle.captionContainer,styles$r.captionContainer],__source:{fileName:_jsxFileName$L,lineNumber:417}},captionIconElement,captionElement));}}]);return InputComponent;}(React.Component);InputComponent.styledComponentName='Input';var styles$r=reactNative.StyleSheet.create({container:{},inputContainer:{flexDirection:'row',alignItems:'center',width:'100%'},captionContainer:{flexDirection:'row',alignItems:'center'},text:{flexGrow:1,flexShrink:1,flexBasis:'auto'},placeholder:{},icon:{},label:{textAlign:'left'},captionIcon:{},captionLabel:{textAlign:'left'}});var Input=styled(InputComponent);

var _jsxFileName$M="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\layout\\layout.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$E=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var LayoutComponent=function(_React$Component){inherits(LayoutComponent,_React$Component);function LayoutComponent(){classCallCheck(this,LayoutComponent);return possibleConstructorReturn(this,getPrototypeOf(LayoutComponent).apply(this,arguments));}createClass(LayoutComponent,[{key:"render",value:function render(){var _a=this.props,style=_a.style,themedStyle=_a.themedStyle,derivedProps=__rest$E(_a,["style","themedStyle"]);return React.createElement(reactNative.View,_extends_1({},derivedProps,{style:[themedStyle,style],__source:{fileName:_jsxFileName$M,lineNumber:108}}));}}]);return LayoutComponent;}(React.Component);LayoutComponent.styledComponentName='Layout';var Layout=styled(LayoutComponent);

var _jsxFileName$N="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\modal\\modal.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$F=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var _Dimensions$get=reactNative.Dimensions.get('screen'),screenWidth=_Dimensions$get.width,screenHeight=_Dimensions$get.height;var TAG_CHILD$1='Modal';var initialContentSize={width:0,height:0};var baseModalTestId='@modal/base';var Modal=function(_React$Component){inherits(Modal,_React$Component);function Modal(){var _this;classCallCheck(this,Modal);_this=possibleConstructorReturn(this,getPrototypeOf(Modal).apply(this,arguments));_this.contentSize=initialContentSize;_this.id='';_this.handleVisibility=function(props){var _this$props=_this.props,allowBackdrop=_this$props.allowBackdrop,onBackdropPress=_this$props.onBackdropPress;if(props.visible){var element=_this.renderModal();_this.id=ModalService.show(element,{allowBackdrop:allowBackdrop,onBackdropPress:onBackdropPress});}else{ModalService.hide(_this.id);_this.id='';}};_this.getAbsoluteRelatedStyle=function(){var _this$contentSize=_this.contentSize,width=_this$contentSize.width,height=_this$contentSize.height;return {top:(screenHeight-height)/2,left:(screenWidth-width)/2};};_this.onMeasure=function(result){_this.contentSize=result[TAG_CHILD$1].size;};_this.renderBaseModal=function(){var _a=_this.props,style=_a.style,children=_a.children,restProps=__rest$F(_a,["style","children"]);var absoluteRelatedStyle=_this.getAbsoluteRelatedStyle();var measuringProps={tag:TAG_CHILD$1};return React.createElement(reactNative.View,_extends_1({},restProps,measuringProps,{testID:baseModalTestId,key:TAG_CHILD$1,style:[styles$s.container,absoluteRelatedStyle,style],__source:{fileName:_jsxFileName$N,lineNumber:189}}),children);};_this.renderModal=function(){var backdropStyle=_this.props.backdropStyle;var modal=_this.renderBaseModal();return backdropStyle?React.createElement(React.Fragment,{__source:{fileName:_jsxFileName$N,lineNumber:196}},React.createElement(reactNative.View,{pointerEvents:"box-none",style:[styles$s.backdrop,backdropStyle],__source:{fileName:_jsxFileName$N,lineNumber:197}}),modal):modal;};_this.renderMeasureNode=function(){var modal=_this.renderBaseModal();var measureStyledModal=React.cloneElement(modal,{style:[modal.props.style,styles$s.hiddenModal],key:TAG_CHILD$1,pointerEvents:'none'});return React.createElement(MeasureNode,{onResult:_this.onMeasure,__source:{fileName:_jsxFileName$N,lineNumber:208}},[measureStyledModal]);};return _this;}createClass(Modal,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.visible!==this.props.visible){this.handleVisibility(this.props);}else if(prevProps.visible&&this.props.visible){var element=this.renderModal();ModalService.update(this.id,element.props.children);}}},{key:"render",value:function render(){return this.renderMeasureNode();}}]);return Modal;}(React.Component);Modal.defaultProps={allowBackdrop:false,onBackdropPress:function onBackdropPress(){return null;}};var styles$s=reactNative.StyleSheet.create({container:{position:'absolute'},backdrop:{position:'absolute',width:screenWidth,height:screenHeight},hiddenModal:{opacity:0}});

var _jsxFileName$O="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\overflowMenu\\overflowMenu.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$G=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var OverflowMenuComponent=function(_React$Component){inherits(OverflowMenuComponent,_React$Component);function OverflowMenuComponent(){var _this;classCallCheck(this,OverflowMenuComponent);_this=possibleConstructorReturn(this,getPrototypeOf(OverflowMenuComponent).apply(this,arguments));_this.getComponentStyle=function(source){var indicatorBackgroundColor=source.indicatorBackgroundColor,containerParameters=__rest$G(source,["indicatorBackgroundColor"]);return {container:containerParameters,indicator:{backgroundColor:indicatorBackgroundColor}};};_this.renderPopoverContentElement=function(style){var _a=_this.props,themedStyle=_a.themedStyle,indicatorStyle=_a.indicatorStyle,children=_a.children,data=_a.data,restProps=__rest$G(_a,["themedStyle","indicatorStyle","children","data"]);return React.createElement(Menu,_extends_1({},restProps,{data:data,style:[styles$t.menu,style],initialNumToRender:data.length,bounces:false,__source:{fileName:_jsxFileName$O,lineNumber:288}}));};return _this;}createClass(OverflowMenuComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,indicatorStyle=_a.indicatorStyle,children=_a.children,appearance=_a.appearance,restProps=__rest$G(_a,["themedStyle","style","indicatorStyle","children","appearance"]);var _this$getComponentSty=this.getComponentStyle(themedStyle),container=_this$getComponentSty.container,indicator=_this$getComponentSty.indicator;var contentElement=this.renderPopoverContentElement(container);return React.createElement(Popover,_extends_1({},restProps,{style:[styles$t.container,style],indicatorStyle:[indicator,indicatorStyle],content:contentElement,__source:{fileName:_jsxFileName$O,lineNumber:295}}),children);}}]);return OverflowMenuComponent;}(React.Component);OverflowMenuComponent.styledComponentName='OverflowMenu';OverflowMenuComponent.defaultProps={indicatorOffset:12};var styles$t=reactNative.StyleSheet.create({container:{overflow:'hidden'},menu:{flexGrow:0}});var OverflowMenu=styled(OverflowMenuComponent);

var _jsxFileName$P="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\radio\\radio.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$H=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var RadioComponent=function(_React$Component){inherits(RadioComponent,_React$Component);function RadioComponent(){var _this;classCallCheck(this,RadioComponent);_this=possibleConstructorReturn(this,getPrototypeOf(RadioComponent).apply(this,arguments));_this.onPress=function(){if(_this.props.onChange){_this.props.onChange(!_this.props.checked);}};_this.onPressIn=function(event){_this.props.dispatch([exports.Interaction.ACTIVE]);if(_this.props.onPressIn){_this.props.onPressIn(event);}};_this.onPressOut=function(event){_this.props.dispatch([]);if(_this.props.onPressOut){_this.props.onPressOut(event);}};_this.getComponentStyle=function(source){var textMarginHorizontal=source.textMarginHorizontal,textFontFamily=source.textFontFamily,textFontSize=source.textFontSize,textFontWeight=source.textFontWeight,textLineHeight=source.textLineHeight,textColor=source.textColor,iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconBorderRadius=source.iconBorderRadius,iconTintColor=source.iconTintColor,outlineWidth=source.outlineWidth,outlineHeight=source.outlineHeight,outlineBorderRadius=source.outlineBorderRadius,outlineBackgroundColor=source.outlineBackgroundColor,containerParameters=__rest$H(source,["textMarginHorizontal","textFontFamily","textFontSize","textFontWeight","textLineHeight","textColor","iconWidth","iconHeight","iconBorderRadius","iconTintColor","outlineWidth","outlineHeight","outlineBorderRadius","outlineBackgroundColor"]);return {container:{},highlightContainer:{},selectContainer:containerParameters,text:{marginHorizontal:textMarginHorizontal,fontFamily:textFontFamily,fontSize:textFontSize,lineHeight:textLineHeight,fontWeight:textFontWeight,color:textColor},icon:{width:iconWidth,height:iconHeight,borderRadius:iconBorderRadius,backgroundColor:iconTintColor},highlight:{width:outlineWidth,height:outlineHeight,borderRadius:outlineBorderRadius,backgroundColor:outlineBackgroundColor}};};_this.createHitSlopInsets=function(style){var flatStyle=reactNative.StyleSheet.flatten(style);var value=40-flatStyle.width;return {left:value,top:value,right:value,bottom:value};};_this.renderTextElement=function(style){var _this$props=_this.props,text=_this$props.text,textStyle=_this$props.textStyle;return React.createElement(Text,{key:0,style:[style,styles$u.text,textStyle],__source:{fileName:_jsxFileName$P,lineNumber:212}},text);};_this.renderComponentChildren=function(style){var text=_this.props.text;return [isValidString(text)&&_this.renderTextElement(style.text)];};return _this;}createClass(RadioComponent,[{key:"render",value:function render(){var _a=this.props,style=_a.style,themedStyle=_a.themedStyle,disabled=_a.disabled,derivedProps=__rest$H(_a,["style","themedStyle","disabled"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,highlightContainer=_b.highlightContainer,selectContainer=_b.selectContainer,icon=_b.icon,highlight=_b.highlight,componentStyles=__rest$H(_b,["container","highlightContainer","selectContainer","icon","highlight"]);var selectContainerStyle=[selectContainer,styles$u.selectContainer];var hitSlopInsets=this.createHitSlopInsets(selectContainerStyle);var _this$renderComponent=this.renderComponentChildren(componentStyles),_this$renderComponent2=slicedToArray(_this$renderComponent,1),textElement=_this$renderComponent2[0];return React.createElement(reactNative.TouchableOpacity,{style:[container,styles$u.container,style],activeOpacity:1.0,disabled:disabled,hitSlop:hitSlopInsets,onPress:this.onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,__source:{fileName:_jsxFileName$P,lineNumber:229}},React.createElement(reactNative.View,{style:[highlightContainer,styles$u.highlightContainer],__source:{fileName:_jsxFileName$P,lineNumber:230}},React.createElement(reactNative.View,{style:[highlight,styles$u.highlight],__source:{fileName:_jsxFileName$P,lineNumber:231}}),React.createElement(reactNative.TouchableOpacity,_extends_1({activeOpacity:1.0},derivedProps,{disabled:disabled,style:selectContainerStyle,onPress:this.onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,__source:{fileName:_jsxFileName$P,lineNumber:232}}),React.createElement(reactNative.View,{style:[icon,styles$u.icon],__source:{fileName:_jsxFileName$P,lineNumber:233}}))),textElement);}}]);return RadioComponent;}(React.Component);RadioComponent.styledComponentName='Radio';var styles$u=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center'},highlightContainer:{justifyContent:'center',alignItems:'center'},selectContainer:{justifyContent:'center',alignItems:'center'},icon:{},highlight:{position:'absolute'},text:{}});var Radio=styled(RadioComponent);

var _jsxFileName$Q="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\radioGroup\\radioGroup.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$I=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var RadioGroupComponent=function(_React$Component){inherits(RadioGroupComponent,_React$Component);function RadioGroupComponent(){var _this;classCallCheck(this,RadioGroupComponent);_this=possibleConstructorReturn(this,getPrototypeOf(RadioGroupComponent).apply(this,arguments));_this.onRadioChange=function(index){if(_this.props.onChange){_this.props.onChange(index);}};_this.getComponentStyle=function(source){return {container:source};};_this.renderRadioElement=function(element,index){return React.cloneElement(element,{key:index,checked:_this.props.selectedIndex===index,onChange:function onChange(){return _this.onRadioChange(index);}});};_this.renderRadioElements=function(source){return React.Children.map(source,_this.renderRadioElement);};return _this;}createClass(RadioGroupComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,children=_a.children,derivedProps=__rest$I(_a,["themedStyle","style","children"]);var componentStyle=this.getComponentStyle(themedStyle);var radioElements=this.renderRadioElements(children);return React.createElement(reactNative.View,_extends_1({},derivedProps,{style:[componentStyle.container,styles$v.container,style],__source:{fileName:_jsxFileName$Q,lineNumber:125}}),radioElements);}}]);return RadioGroupComponent;}(React.Component);RadioGroupComponent.styledComponentName='RadioGroup';RadioGroupComponent.defaultProps={selectedIndex:-1};var styles$v=reactNative.StyleSheet.create({container:{}});var RadioGroup=styled(RadioGroupComponent);

var PI=180;var PI2=360;var OFFSET_MIN=PI/12;var OFFSET_MAX=PI/6;var BaseBezierEasing=reactNative.Easing.bezier(0.4,0.0,0.7,1.0);var StartArcEasing=function StartArcEasing(progress){return -PI+OFFSET_MIN+(PI-OFFSET_MAX)*BaseBezierEasing(progress);};var EndArcEasing=function EndArcEasing(progress){return PI2-OFFSET_MIN+(-PI+OFFSET_MAX)*BaseBezierEasing(progress);};var DEFAULT_CONFIG$4={duration:2400,easing:reactNative.Easing.linear,cycles:-1};var SpinnerAnimation=function(_Animation){inherits(SpinnerAnimation,_Animation);function SpinnerAnimation(arcSize,config){var _this;classCallCheck(this,SpinnerAnimation);_this=possibleConstructorReturn(this,getPrototypeOf(SpinnerAnimation).call(this,_extends_1(_extends_1({},DEFAULT_CONFIG$4),config)));_this.createFrameRange=function(duration){var numberOfFrames=60*duration/1000;return new Array(numberOfFrames).fill(0);};_this.createContainerInterpolation=function(){return _this.animationValue.interpolate({inputRange:[0,1],outputRange:[_this.toDegValue(OFFSET_MAX+OFFSET_MIN),_this.toDegValue(2*PI2+OFFSET_MAX+OFFSET_MIN)]});};_this.createArcInterpolation=function(easing){return _this.animationValue.interpolate({inputRange:_this.createArcInterpolationInputRange(),outputRange:_this.createArcInterpolationOutputRange(easing)});};_this.createArcInterpolationInputRange=function(){return _this.animationFrames.map(function(item,frame){return frame/(_this.animationFrames.length-1);});};_this.createArcInterpolationOutputRange=function(easing){return _this.animationFrames.map(function(item,frame){var progress=2*frame/(_this.animationFrames.length-1);var boundedProgress=Math.min(2.0-progress,progress);return _this.toDegValue(easing(boundedProgress));});};_this.toStyleTransformProp=function(rotate){var source=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var transform=[].concat(toConsumableArray(source.transform||[]),[{rotate:rotate}]);return _extends_1(_extends_1({},source),{transform:transform});};_this.toDegValue=function(source){return source+"deg";};_this.arcSize=arcSize;_this.animationValue=new reactNative.Animated.Value(0);_this.animationFrames=_this.createFrameRange(_this.config.duration);return _this;}createClass(SpinnerAnimation,[{key:"start",value:function start(callback){this.animationValue.setValue(0);get(getPrototypeOf(SpinnerAnimation.prototype),"start",this).call(this,callback);}},{key:"stop",value:function stop(){get(getPrototypeOf(SpinnerAnimation.prototype),"stop",this).call(this);this.animationValue.setValue(0);}},{key:"toProps",value:function toProps(){var containerInterpolation=this.createContainerInterpolation();var startArcInterpolation=this.createArcInterpolation(StartArcEasing);var endArcInterpolation=this.createArcInterpolation(EndArcEasing);return {container:this.toStyleTransformProp(containerInterpolation),start:this.toStyleTransformProp(startArcInterpolation),end:this.toStyleTransformProp(endArcInterpolation,{transform:[{translateY:-this.arcSize/2}]})};}},{key:"animation",get:function get(){return reactNative.Animated.timing(this.animationValue,_extends_1({toValue:1.0},this.config));}}]);return SpinnerAnimation;}(Animation);

var _jsxFileName$R="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\spinner\\spinner.component.js";var SpinnerComponent=function(_React$PureComponent){inherits(SpinnerComponent,_React$PureComponent);function SpinnerComponent(){var _this;classCallCheck(this,SpinnerComponent);_this=possibleConstructorReturn(this,getPrototypeOf(SpinnerComponent).apply(this,arguments));_this.animation=new SpinnerAnimation(_this.containerSize.height);_this.startAnimation=function(){_this.animation.start();};_this.stopAnimation=function(){_this.animation.stop();};_this.getComponentStyle=function(source){var start={container:source.container,arc:source.start};var end={container:source.container,arc:source.end,overflow:{top:_this.containerSize.height/2}};return {start:start,end:end};};_this.renderArcElement=function(style,size){var arcSize=new Size(size.width,size.height/2);return React.createElement(reactNative.Animated.View,{style:[style.container,styles$w.absolute,size],__source:{fileName:_jsxFileName$R,lineNumber:129}},React.createElement(reactNative.View,{style:[styles$w.noOverflow,style.overflow,arcSize],__source:{fileName:_jsxFileName$R,lineNumber:130}},React.createElement(reactNative.Animated.View,{style:[style.arc,size],__source:{fileName:_jsxFileName$R,lineNumber:131}},React.createElement(reactNative.View,{style:[styles$w.noOverflow,arcSize],__source:{fileName:_jsxFileName$R,lineNumber:132}},React.createElement(reactNative.View,{style:[_this.props.themedStyle,_this.props.style],__source:{fileName:_jsxFileName$R,lineNumber:133}})))));};return _this;}createClass(SpinnerComponent,[{key:"componentDidMount",value:function componentDidMount(){if(this.props.animating){this.startAnimation();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var animatingChanged=this.props.animating!==prevProps.animating;if(animatingChanged&&this.props.animating){this.startAnimation();}if(animatingChanged&&!this.props.animating){this.stopAnimation();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.animation.release();}},{key:"render",value:function render(){var containerSize=this.containerSize;var _this$getComponentSty=this.getComponentStyle(this.animation.toProps()),start=_this$getComponentSty.start,end=_this$getComponentSty.end;return React.createElement(reactNative.View,{style:containerSize,__source:{fileName:_jsxFileName$R,lineNumber:165}},this.renderArcElement(start,containerSize),this.renderArcElement(end,containerSize));}},{key:"containerSize",get:function get(){var _StyleSheet$flatten=reactNative.StyleSheet.flatten([this.props.themedStyle,this.props.style]),width=_StyleSheet$flatten.width,height=_StyleSheet$flatten.height;return new Size(width,height);}}]);return SpinnerComponent;}(React.PureComponent);SpinnerComponent.styledComponentName='Spinner';SpinnerComponent.defaultProps={animating:true};var styles$w=reactNative.StyleSheet.create({absolute:reactNative.StyleSheet.absoluteFillObject,noOverflow:{overflow:'hidden'}});var Spinner=styled(SpinnerComponent);

var _jsxFileName$S="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\tab\\tabBar.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$J=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TabBarComponent=function(_React$Component){inherits(TabBarComponent,_React$Component);function TabBarComponent(){var _this;classCallCheck(this,TabBarComponent);_this=possibleConstructorReturn(this,getPrototypeOf(TabBarComponent).apply(this,arguments));_this.tabIndicatorRef=React.createRef();_this.onTabSelect=function(index){if(_this.props.onSelect){_this.props.onSelect(index);}};_this.getComponentStyle=function(source){var indicatorHeight=source.indicatorHeight,indicatorBorderRadius=source.indicatorBorderRadius,indicatorBackgroundColor=source.indicatorBackgroundColor,containerParameters=__rest$J(source,["indicatorHeight","indicatorBorderRadius","indicatorBackgroundColor"]);return {container:containerParameters,item:{},indicator:{height:indicatorHeight,borderRadius:indicatorBorderRadius,backgroundColor:indicatorBackgroundColor}};};_this.isTabSelected=function(index){var selectedIndex=_this.props.selectedIndex;return index===selectedIndex;};_this.renderTabElement=function(element,index){return React.cloneElement(element,{key:index,style:[styles$x.item,element.props.style],selected:_this.isTabSelected(index),onSelect:function onSelect(){return _this.onTabSelect(index);}});};_this.renderTabElements=function(source){return React.Children.map(source,_this.renderTabElement);};return _this;}createClass(TabBarComponent,[{key:"scrollToIndex",value:function scrollToIndex(params){var tabIndicator=this.tabIndicatorRef.current;tabIndicator.scrollToIndex(params);}},{key:"scrollToOffset",value:function scrollToOffset(params){var tabIndicator=this.tabIndicatorRef.current;tabIndicator.scrollToOffset(params);}},{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,indicatorStyle=_a.indicatorStyle,selectedIndex=_a.selectedIndex,children=_a.children,derivedProps=__rest$J(_a,["themedStyle","style","indicatorStyle","selectedIndex","children"]);var componentStyle=this.getComponentStyle(themedStyle);var tabElements=this.renderTabElements(children);return React.createElement(React.Fragment,{__source:{fileName:_jsxFileName$S,lineNumber:117}},React.createElement(reactNative.View,_extends_1({},derivedProps,{style:[componentStyle.container,styles$x.container,style],__source:{fileName:_jsxFileName$S,lineNumber:118}}),tabElements),React.createElement(TabIndicator,{ref:this.tabIndicatorRef,style:[componentStyle.indicator,styles$x.indicator,indicatorStyle],selectedPosition:selectedIndex,positions:tabElements.length,__source:{fileName:_jsxFileName$S,lineNumber:121}}));}}]);return TabBarComponent;}(React.Component);TabBarComponent.styledComponentName='TabBar';TabBarComponent.defaultProps={selectedIndex:0};var styles$x=reactNative.StyleSheet.create({container:{flexDirection:'row'},item:{flex:1},indicator:{}});var TabBar=styled(TabBarComponent);

var _jsxFileName$T="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\tab\\tabView.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$K=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TabViewChildren=function TabViewChildren(){classCallCheck(this,TabViewChildren);this.tabs=[];this.content=[];};var TabView=function(_React$Component){inherits(TabView,_React$Component);function TabView(){var _this;classCallCheck(this,TabView);_this=possibleConstructorReturn(this,getPrototypeOf(TabView).apply(this,arguments));_this.viewPagerRef=React.createRef();_this.tabBarRef=React.createRef();_this.onBarSelect=function(index){var viewPager=_this.viewPagerRef.current;viewPager.scrollToIndex({index:index,animated:true});};_this.onPagerOffsetChange=function(offset){var tabBar=_this.tabBarRef.current;var tabCount=React.Children.count(tabBar.props.children);tabBar.scrollToOffset({offset:offset/tabCount});};_this.onPagerSelect=function(selectedIndex){if(_this.props.onSelect){_this.props.onSelect(selectedIndex);}};_this.renderComponentChild=function(element,index){return {tab:React.cloneElement(element,{key:index}),content:element.props.children};};_this.renderComponentChildren=function(source){return React.Children.toArray(source).reduce(function(acc,element,index){var _this$renderComponent=_this.renderComponentChild(element,index),tab=_this$renderComponent.tab,content=_this$renderComponent.content;return {tabs:[].concat(toConsumableArray(acc.tabs),[tab]),content:[].concat(toConsumableArray(acc.content),[content])};},new TabViewChildren());};return _this;}createClass(TabView,[{key:"render",value:function render(){var _a=this.props,style=_a.style,selectedIndex=_a.selectedIndex,children=_a.children,tabBarStyle=_a.tabBarStyle,indicatorStyle=_a.indicatorStyle,derivedProps=__rest$K(_a,["style","selectedIndex","children","tabBarStyle","indicatorStyle"]);var _this$renderComponent2=this.renderComponentChildren(children),tabs=_this$renderComponent2.tabs,content=_this$renderComponent2.content;return React.createElement(React.Fragment,{__source:{fileName:_jsxFileName$T,lineNumber:191}},React.createElement(TabBar,{style:tabBarStyle,ref:this.tabBarRef,selectedIndex:selectedIndex,indicatorStyle:indicatorStyle,onSelect:this.onBarSelect,__source:{fileName:_jsxFileName$T,lineNumber:192}},tabs),React.createElement(ViewPager,_extends_1({ref:this.viewPagerRef},derivedProps,{style:[styles$y.container,style],selectedIndex:selectedIndex,shouldLoadComponent:this.props.shouldLoadComponent,onOffsetChange:this.onPagerOffsetChange,onSelect:this.onPagerSelect,__source:{fileName:_jsxFileName$T,lineNumber:195}}),content));}}]);return TabView;}(React.Component);TabView.defaultProps={selectedIndex:0};var styles$y=reactNative.StyleSheet.create({container:{overflow:'hidden'}});

var _jsxFileName$U="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\tab\\tab.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$L=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TabComponent=function(_React$Component){inherits(TabComponent,_React$Component);function TabComponent(){var _this;classCallCheck(this,TabComponent);_this=possibleConstructorReturn(this,getPrototypeOf(TabComponent).apply(this,arguments));_this.onPress=function(){if(_this.props.onSelect){_this.props.onSelect(!_this.props.selected);}};_this.getComponentStyle=function(source){var textMarginVertical=source.textMarginVertical,textFontFamily=source.textFontFamily,textFontSize=source.textFontSize,textLineHeight=source.textLineHeight,textFontWeight=source.textFontWeight,textColor=source.textColor,iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconMarginVertical=source.iconMarginVertical,iconTintColor=source.iconTintColor,containerParameters=__rest$L(source,["textMarginVertical","textFontFamily","textFontSize","textLineHeight","textFontWeight","textColor","iconWidth","iconHeight","iconMarginVertical","iconTintColor"]);return {container:containerParameters,icon:{width:iconWidth,height:iconHeight,marginVertical:iconMarginVertical,tintColor:iconTintColor},title:{marginVertical:textMarginVertical,fontFamily:textFontFamily,fontSize:textFontSize,lineHeight:textLineHeight,fontWeight:textFontWeight,color:textColor}};};_this.renderTitleElement=function(style){var _this$props=_this.props,title=_this$props.title,titleStyle=_this$props.titleStyle;return React.createElement(Text,{key:1,style:[style,styles$z.title,titleStyle],__source:{fileName:_jsxFileName$U,lineNumber:141}},title);};_this.renderIconElement=function(style){var iconElement=_this.props.icon(style);return React.cloneElement(iconElement,{key:2,style:[style,styles$z.icon,iconElement.props.style]});};_this.renderComponentChildren=function(style){var _this$props2=_this.props,title=_this$props2.title,icon=_this$props2.icon;return [icon&&_this.renderIconElement(style.icon),isValidString(title)&&_this.renderTitleElement(style.title)];};return _this;}createClass(TabComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,derivedProps=__rest$L(_a,["themedStyle","style"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,componentStyles=__rest$L(_b,["container"]);var _this$renderComponent=this.renderComponentChildren(componentStyles),_this$renderComponent2=slicedToArray(_this$renderComponent,2),iconElement=_this$renderComponent2[0],titleElement=_this$renderComponent2[1];return React.createElement(reactNative.TouchableOpacity,_extends_1({activeOpacity:1.0},derivedProps,{style:[container,styles$z.container,style],onPress:this.onPress,__source:{fileName:_jsxFileName$U,lineNumber:164}}),iconElement,titleElement);}}]);return TabComponent;}(React.Component);TabComponent.styledComponentName='Tab';TabComponent.defaultProps={selected:false};var styles$z=reactNative.StyleSheet.create({container:{justifyContent:'center',alignItems:'center'},icon:{},title:{}});var Tab=styled(TabComponent);

var _jsxFileName$V="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\toggle\\toggle.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$M=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var ToggleComponent=function(_React$Component){inherits(ToggleComponent,_React$Component);function ToggleComponent(props){var _this;classCallCheck(this,ToggleComponent);_this=possibleConstructorReturn(this,getPrototypeOf(ToggleComponent).call(this,props));_this.onStartShouldSetPanResponder=function(){return true;};_this.onStartShouldSetPanResponderCapture=function(){return true;};_this.onMoveShouldSetPanResponder=function(){return true;};_this.onMoveShouldSetPanResponderCapture=function(){return true;};_this.onPanResponderTerminationRequest=function(){return false;};_this.onPanResponderGrant=function(){var _this$props=_this.props,checked=_this$props.checked,disabled=_this$props.disabled,themedStyle=_this$props.themedStyle;if(disabled){return;}_this.onPressIn();if(_this.thumbTranslateAnimationActive){_this.thumbTranslateAnimationActive=false;_this.stopAnimations();return;}_this.animateThumbWidth(themedStyle.thumbWidth*1.2);_this.animateEllipseScale(checked?1:0.01);};_this.onPanResponderMove=function(){return true;};_this.onPanResponderRelease=function(e,gestureState){var _this$props2=_this.props,checked=_this$props2.checked,disabled=_this$props2.disabled,themedStyle=_this$props2.themedStyle;if(!disabled){if(!checked&&gestureState.dx>-5||checked&&gestureState.dx<5){_this.toggle(_this.onPress);}else{_this.animateEllipseScale(checked?0.01:1);}}_this.animateThumbWidth(themedStyle.thumbWidth);_this.onPressOut();};_this.onPressIn=function(){_this.props.dispatch([exports.Interaction.ACTIVE]);};_this.onPressOut=function(){_this.props.dispatch([]);};_this.onPress=function(){if(_this.props.onChange){_this.props.onChange(!_this.props.checked);}};_this.getComponentStyle=function(source){var _this$props3=_this.props,style=_this$props3.style,checked=_this$props3.checked,disabled=_this$props3.disabled;var outlineWidth=source.outlineWidth,outlineHeight=source.outlineHeight,outlineBorderRadius=source.outlineBorderRadius,outlineBackgroundColor=source.outlineBackgroundColor,thumbWidth=source.thumbWidth,thumbHeight=source.thumbHeight,thumbBorderRadius=source.thumbBorderRadius,thumbBackgroundColor=source.thumbBackgroundColor,textMarginHorizontal=source.textMarginHorizontal,textFontSize=source.textFontSize,textFontWeight=source.textFontWeight,textLineHeight=source.textLineHeight,textFontFamily=source.textFontFamily,textColor=source.textColor,iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconTintColor=source.iconTintColor,offsetValue=source.offsetValue,backgroundColor=source.backgroundColor,borderColor=source.borderColor,containerParameters=__rest$M(source,["outlineWidth","outlineHeight","outlineBorderRadius","outlineBackgroundColor","thumbWidth","thumbHeight","thumbBorderRadius","thumbBackgroundColor","textMarginHorizontal","textFontSize","textFontWeight","textLineHeight","textFontFamily","textColor","iconWidth","iconHeight","iconTintColor","offsetValue","backgroundColor","borderColor"]);var interpolatedBackgroundColor=_this.getInterpolatedColor(backgroundColor,borderColor);var thumbScale=_this.animateThumbScale(offsetValue);return {toggleContainer:{},ellipseContainer:_extends_1({borderColor:borderColor,backgroundColor:interpolatedBackgroundColor},containerParameters),highlight:{width:outlineWidth,height:outlineHeight,borderRadius:outlineBorderRadius,backgroundColor:outlineBackgroundColor},ellipse:{width:containerParameters.width-containerParameters.borderWidth*2,height:containerParameters.height-containerParameters.borderWidth*2,borderRadius:(source.height-source.borderWidth*2)/2,backgroundColor:interpolatedBackgroundColor,transform:[{scale:checked?thumbScale:_this.ellipseScaleAnimation}]},thumb:{alignSelf:checked?'flex-end':'flex-start',width:_this.thumbWidthAnimation,height:thumbHeight,borderRadius:thumbBorderRadius,backgroundColor:thumbBackgroundColor,elevation:disabled?0:5,transform:[{translateX:_this.thumbTranslateAnimation}]},text:{marginHorizontal:textMarginHorizontal,fontSize:textFontSize,fontWeight:textFontWeight,lineHeight:textLineHeight,fontFamily:textFontFamily,color:textColor},icon:{width:source.iconWidth,height:source.iconHeight,backgroundColor:iconTintColor}};};_this.animateThumbTranslate=function(value){var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){return null;};_this.thumbTranslateAnimationActive=true;reactNative.Animated.timing(_this.thumbTranslateAnimation,{toValue:I18nLayoutService.select(value,-value),duration:150,easing:reactNative.Easing.linear}).start(function(){_this.thumbTranslateAnimationActive=false;callback();});};_this.animateThumbWidth=function(value){var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){return null;};reactNative.Animated.timing(_this.thumbWidthAnimation,{toValue:value,duration:150,easing:reactNative.Easing.linear}).start(callback);};_this.animateEllipseScale=function(value){var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){return null;};reactNative.Animated.timing(_this.ellipseScaleAnimation,{toValue:value,duration:200,easing:reactNative.Easing.linear}).start(callback);};_this.animateThumbScale=function(value){return _this.thumbTranslateAnimation.interpolate({inputRange:[-value,0],outputRange:[1,0.01]});};_this.stopAnimations=function(){var value=_this.props.checked?0.01:1;_this.thumbTranslateAnimation.stopAnimation();_this.ellipseScaleAnimation.stopAnimation();_this.thumbWidthAnimation.stopAnimation();_this.ellipseScaleAnimation.setValue(value);};_this.toggle=function(){var callback=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(nextValue){return null;};var _this$props4=_this.props,checked=_this$props4.checked,themedStyle=_this$props4.themedStyle;var value=checked?-themedStyle.offsetValue:themedStyle.offsetValue;_this.animateThumbTranslate(value,function(){_this.thumbTranslateAnimation.setValue(0);callback(!checked);});_this.animateThumbWidth(_this.props.themedStyle.thumbWidth);};_this.getInterpolatedColor=function(startColor,endColor){var _this$props5=_this.props,checked=_this$props5.checked,themedStyle=_this$props5.themedStyle;return _this.thumbTranslateAnimation.interpolate({inputRange:checked?[-themedStyle.offsetValue,0]:[0,themedStyle.offsetValue],outputRange:[startColor,endColor]});};_this.renderTextElement=function(style){return React.createElement(Text,{style:[style,_this.props.textStyle],__source:{fileName:_jsxFileName$V,lineNumber:329}},_this.props.text);};_this.renderComponentChildren=function(style){return [_this.props.text&&_this.renderTextElement(style.text)];};var checked=props.checked,themedStyle=props.themedStyle;_this.thumbWidthAnimation=new reactNative.Animated.Value(themedStyle.thumbWidth);_this.thumbTranslateAnimation=new reactNative.Animated.Value(0);_this.ellipseScaleAnimation=new reactNative.Animated.Value(checked?0.01:1.0);_this.thumbTranslateAnimationActive=false;_this.panResponder=reactNative.PanResponder.create(assertThisInitialized(_this));return _this;}createClass(ToggleComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,disabled=_a.disabled,checked=_a.checked,restProps=__rest$M(_a,["themedStyle","style","disabled","checked"]);var componentStyle=this.getComponentStyle(themedStyle);var _this$renderComponent=this.renderComponentChildren(componentStyle),_this$renderComponent2=slicedToArray(_this$renderComponent,1),textElement=_this$renderComponent2[0];return React.createElement(reactNative.View,_extends_1({},restProps,this.panResponder.panHandlers,{style:[styles$A.container,style],__source:{fileName:_jsxFileName$V,lineNumber:349}}),React.createElement(reactNative.View,{style:[componentStyle.toggleContainer,styles$A.toggleContainer],__source:{fileName:_jsxFileName$V,lineNumber:350}},React.createElement(reactNative.View,{style:[componentStyle.highlight,styles$A.highlight],__source:{fileName:_jsxFileName$V,lineNumber:351}}),React.createElement(reactNative.Animated.View,{style:[componentStyle.ellipseContainer,styles$A.ellipseContainer],__source:{fileName:_jsxFileName$V,lineNumber:352}},React.createElement(reactNative.Animated.View,{style:[componentStyle.ellipse,styles$A.ellipse],__source:{fileName:_jsxFileName$V,lineNumber:353}}),React.createElement(reactNative.Animated.View,{style:[componentStyle.thumb,styles$A.thumb],__source:{fileName:_jsxFileName$V,lineNumber:354}},React.createElement(CheckMark,{style:componentStyle.icon,isAnimated:true,__source:{fileName:_jsxFileName$V,lineNumber:355}})))),textElement);}}]);return ToggleComponent;}(React.Component);ToggleComponent.styledComponentName='Toggle';var styles$A=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'center'},toggleContainer:{alignItems:'center',justifyContent:'center'},ellipseContainer:{justifyContent:'center',alignSelf:'center',overflow:'hidden'},ellipse:{alignSelf:'center',position:'absolute'},highlight:{alignSelf:'center',position:'absolute'},thumb:{justifyContent:'center',alignItems:'center'}});var Toggle=styled(ToggleComponent);

var _jsxFileName$W="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\tooltip\\tooltip.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$N=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TooltipComponent=function(_React$Component){inherits(TooltipComponent,_React$Component);function TooltipComponent(){var _this;classCallCheck(this,TooltipComponent);_this=possibleConstructorReturn(this,getPrototypeOf(TooltipComponent).apply(this,arguments));_this.getComponentStyle=function(source){var indicatorBackgroundColor=source.indicatorBackgroundColor,iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconMarginHorizontal=source.iconMarginHorizontal,iconTintColor=source.iconTintColor,textMarginHorizontal=source.textMarginHorizontal,textFontSize=source.textFontSize,textFontFamily=source.textFontFamily,textLineHeight=source.textLineHeight,textColor=source.textColor,containerParameters=__rest$N(source,["indicatorBackgroundColor","iconWidth","iconHeight","iconMarginHorizontal","iconTintColor","textMarginHorizontal","textFontSize","textFontFamily","textLineHeight","textColor"]);return {container:containerParameters,content:{},indicator:{backgroundColor:indicatorBackgroundColor},icon:{width:iconWidth,height:iconHeight,marginHorizontal:iconMarginHorizontal,tintColor:iconTintColor},text:{marginHorizontal:textMarginHorizontal,fontFamily:textFontFamily,fontSize:textFontSize,lineHeight:textLineHeight,color:textColor}};};_this.renderTextElement=function(style){var _this$props=_this.props,text=_this$props.text,textStyle=_this$props.textStyle;return React.createElement(Text,{key:1,style:[style,styles$B.text,textStyle],__source:{fileName:_jsxFileName$W,lineNumber:219}},text);};_this.renderIconElement=function(style){var iconElement=_this.props.icon(style);return React.cloneElement(iconElement,{key:0,style:[style,styles$B.icon,iconElement.props.style]});};_this.renderContentElementChildren=function(style){var icon=_this.props.icon;return [icon&&_this.renderIconElement(style.icon),_this.renderTextElement(style.text)];};_this.renderPopoverContentElement=function(style){var content=style.content,childrenStyle=__rest$N(style,["content"]);var contentChildren=_this.renderContentElementChildren(childrenStyle);return React.createElement(reactNative.View,{style:[content,styles$B.content],__source:{fileName:_jsxFileName$W,lineNumber:240}},contentChildren);};return _this;}createClass(TooltipComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,indicatorStyle=_a.indicatorStyle,children=_a.children,derivedProps=__rest$N(_a,["themedStyle","style","indicatorStyle","children"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,indicator=_b.indicator,componentStyle=__rest$N(_b,["container","indicator"]);var contentElement=this.renderPopoverContentElement(componentStyle);return React.createElement(Popover,_extends_1({},derivedProps,{style:[container,styles$B.container,style],indicatorStyle:[indicator,indicatorStyle],content:contentElement,__source:{fileName:_jsxFileName$W,lineNumber:249}}),children);}}]);return TooltipComponent;}(React.Component);TooltipComponent.styledComponentName='Tooltip';TooltipComponent.defaultProps={indicatorOffset:8};var styles$B=reactNative.StyleSheet.create({container:{},content:{flexDirection:'row'},indicator:{},icon:{},text:{alignSelf:'center'}});var Tooltip=styled(TooltipComponent);

var _jsxFileName$X="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\topNavigation\\topNavigation.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$O=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TopNavigationComponent=function(_React$Component){inherits(TopNavigationComponent,_React$Component);function TopNavigationComponent(){var _this;classCallCheck(this,TopNavigationComponent);_this=possibleConstructorReturn(this,getPrototypeOf(TopNavigationComponent).apply(this,arguments));_this.getAlignmentDependentStyles=function(alignment){if(alignment==='center'){return {container:styles$C.containerCentered,titleContainer:styles$C.titleContainerCentered};}return {rightControlsContainer:styles$C.rightControlsContainerStart};};_this.getComponentStyle=function(source){var titleTextAlign=source.titleTextAlign,titleFontFamily=source.titleFontFamily,titleFontSize=source.titleFontSize,titleLineHeight=source.titleLineHeight,titleFontWeight=source.titleFontWeight,titleColor=source.titleColor,subtitleTextAlign=source.subtitleTextAlign,subtitleFontFamily=source.subtitleFontFamily,subtitleFontSize=source.subtitleFontSize,subtitleLineHeight=source.subtitleLineHeight,subtitleFontWeight=source.subtitleFontWeight,subtitleColor=source.subtitleColor,containerParameters=__rest$O(source,["titleTextAlign","titleFontFamily","titleFontSize","titleLineHeight","titleFontWeight","titleColor","subtitleTextAlign","subtitleFontFamily","subtitleFontSize","subtitleLineHeight","subtitleFontWeight","subtitleColor"]);return {container:containerParameters,titleContainer:{},title:{textAlign:titleTextAlign,fontFamily:titleFontFamily,fontSize:titleFontSize,lineHeight:titleLineHeight,fontWeight:titleFontWeight,color:titleColor},subtitle:{textAlign:subtitleTextAlign,fontFamily:subtitleFontFamily,fontSize:subtitleFontSize,color:subtitleColor,fontWeight:subtitleFontWeight,lineHeight:subtitleLineHeight},leftControlContainer:{},rightControlsContainer:{}};};_this.renderTextElement=function(text,style){return React.createElement(Text,{style:style,__source:{fileName:_jsxFileName$X,lineNumber:278}},text);};_this.renderComponentChildren=function(style){var _this$props=_this.props,title=_this$props.title,subtitle=_this$props.subtitle,leftControl=_this$props.leftControl,rightControls=_this$props.rightControls,titleStyle=_this$props.titleStyle,subtitleStyle=_this$props.subtitleStyle;return [isValidString(title)&&_this.renderTextElement(title,[style.title,styles$C.title,titleStyle]),isValidString(subtitle)&&_this.renderTextElement(subtitle,[style.subtitle,styles$C.subtitle,subtitleStyle]),leftControl&&_this.renderActionElements(leftControl),rightControls&&_this.renderActionElements(rightControls)];};return _this;}createClass(TopNavigationComponent,[{key:"renderActionElements",value:function renderActionElements(source){var _this2=this;return React.Children.map(source,function(element,index){return React.cloneElement(element,{key:index,appearance:_this2.props.appearance});});}},{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,alignment=_a.alignment,restProps=__rest$O(_a,["themedStyle","style","alignment"]);var _b=this.getComponentStyle(themedStyle),container=_b.container,leftControlContainer=_b.leftControlContainer,titleContainer=_b.titleContainer,rightControlsContainer=_b.rightControlsContainer,componentStyles=__rest$O(_b,["container","leftControlContainer","titleContainer","rightControlsContainer"]);var alignmentStyles=this.getAlignmentDependentStyles(alignment);var _this$renderComponent=this.renderComponentChildren(componentStyles),_this$renderComponent2=slicedToArray(_this$renderComponent,4),titleElement=_this$renderComponent2[0],subtitleElement=_this$renderComponent2[1],leftControlElement=_this$renderComponent2[2],rightControlElements=_this$renderComponent2[3];return React.createElement(reactNative.View,_extends_1({style:[container,styles$C.container,alignmentStyles.container,style]},restProps,{__source:{fileName:_jsxFileName$X,lineNumber:305}}),React.createElement(reactNative.View,{style:[leftControlContainer,styles$C.leftControlContainer],__source:{fileName:_jsxFileName$X,lineNumber:306}},leftControlElement),React.createElement(reactNative.View,{style:[titleContainer,styles$C.titleContainer,alignmentStyles.titleContainer],__source:{fileName:_jsxFileName$X,lineNumber:309}},titleElement,subtitleElement),React.createElement(reactNative.View,{style:[rightControlsContainer,styles$C.rightControlsContainer,alignmentStyles.rightControlsContainer],__source:{fileName:_jsxFileName$X,lineNumber:313}},rightControlElements));}}]);return TopNavigationComponent;}(React.Component);TopNavigationComponent.styledComponentName='TopNavigation';var styles$C=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center'},containerCentered:{justifyContent:'space-between'},titleContainer:{},titleContainerCentered:_extends_1(_extends_1({},reactNative.StyleSheet.absoluteFillObject),{justifyContent:'center',alignItems:'center'}),title:{},subtitle:{},leftControlContainer:{flexDirection:'row',zIndex:1},rightControlsContainer:{flexDirection:'row',zIndex:1},rightControlsContainerStart:{flex:1,justifyContent:'flex-end'}});var TopNavigation=styled(TopNavigationComponent);

var _jsxFileName$Y="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-ui-kitten\\ui\\topNavigation\\topNavigationAction.component.js";/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */var __rest$P=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TopNavigationActionComponent=function(_React$Component){inherits(TopNavigationActionComponent,_React$Component);function TopNavigationActionComponent(){var _this;classCallCheck(this,TopNavigationActionComponent);_this=possibleConstructorReturn(this,getPrototypeOf(TopNavigationActionComponent).apply(this,arguments));_this.onPress=function(event){if(_this.props.onPress){_this.props.onPress(event);}};_this.onPressIn=function(event){_this.props.dispatch([exports.Interaction.ACTIVE]);if(_this.props.onPressIn){_this.props.onPressIn(event);}};_this.onPressOut=function(event){_this.props.dispatch([]);if(_this.props.onPressOut){_this.props.onPressOut(event);}};_this.getComponentStyle=function(source){var iconTintColor=source.iconTintColor,iconWidth=source.iconWidth,iconHeight=source.iconHeight,iconMarginHorizontal=source.iconMarginHorizontal;return {container:{marginHorizontal:iconMarginHorizontal},icon:_extends_1({tintColor:iconTintColor,width:iconWidth,height:iconHeight},styles$D.icon)};};_this.createHitSlopInsets=function(iconStyle){var flatStyle=reactNative.StyleSheet.flatten(iconStyle);var value=40-flatStyle.width;return {left:value,top:value,right:value,bottom:value};};_this.renderIconElement=function(style){return _this.props.icon(style);};return _this;}createClass(TopNavigationActionComponent,[{key:"render",value:function render(){var _a=this.props,themedStyle=_a.themedStyle,style=_a.style,icon=_a.icon,touchableProps=__rest$P(_a,["themedStyle","style","icon"]);var componentStyle=this.getComponentStyle(themedStyle);var hitSlopInsets=this.createHitSlopInsets(componentStyle.icon);var iconElement=this.renderIconElement(componentStyle.icon);return React.createElement(reactNative.TouchableOpacity,_extends_1({activeOpacity:1.0,hitSlop:hitSlopInsets},touchableProps,{style:[componentStyle.container,styles$D.container,style],onPress:this.onPress,onPressIn:this.onPressIn,onPressOut:this.onPressOut,__source:{fileName:_jsxFileName$Y,lineNumber:132}}),iconElement);}}]);return TopNavigationActionComponent;}(React.Component);TopNavigationActionComponent.styledComponentName='TopNavigationAction';var styles$D=reactNative.StyleSheet.create({container:{},icon:{}});var TopNavigationAction=styled(TopNavigationActionComponent);

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
