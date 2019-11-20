'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');

var red50='#ffebee';var red100='#ffcdd2';var red200='#ef9a9a';var red300='#e57373';var red400='#ef5350';var red500='#f44336';var red600='#e53935';var red700='#d32f2f';var red800='#c62828';var red900='#b71c1c';var redA100='#ff8a80';var redA200='#ff5252';var redA400='#ff1744';var redA700='#d50000';var pink50='#fce4ec';var pink100='#f8bbd0';var pink200='#f48fb1';var pink300='#f06292';var pink400='#ec407a';var pink500='#e91e63';var pink600='#d81b60';var pink700='#c2185b';var pink800='#ad1457';var pink900='#880e4f';var pinkA100='#ff80ab';var pinkA200='#ff4081';var pinkA400='#f50057';var pinkA700='#c51162';var purple50='#f3e5f5';var purple100='#e1bee7';var purple200='#ce93d8';var purple300='#ba68c8';var purple400='#ab47bc';var purple500='#9c27b0';var purple600='#8e24aa';var purple700='#7b1fa2';var purple800='#6a1b9a';var purple900='#4a148c';var purpleA100='#ea80fc';var purpleA200='#e040fb';var purpleA400='#d500f9';var purpleA700='#aa00ff';var deepPurple50='#ede7f6';var deepPurple100='#d1c4e9';var deepPurple200='#b39ddb';var deepPurple300='#9575cd';var deepPurple400='#7e57c2';var deepPurple500='#673ab7';var deepPurple600='#5e35b1';var deepPurple700='#512da8';var deepPurple800='#4527a0';var deepPurple900='#311b92';var deepPurpleA100='#b388ff';var deepPurpleA200='#7c4dff';var deepPurpleA400='#651fff';var deepPurpleA700='#6200ea';var indigo50='#e8eaf6';var indigo100='#c5cae9';var indigo200='#9fa8da';var indigo300='#7986cb';var indigo400='#5c6bc0';var indigo500='#3f51b5';var indigo600='#3949ab';var indigo700='#303f9f';var indigo800='#283593';var indigo900='#1a237e';var indigoA100='#8c9eff';var indigoA200='#536dfe';var indigoA400='#3d5afe';var indigoA700='#304ffe';var blue50='#e3f2fd';var blue100='#bbdefb';var blue200='#90caf9';var blue300='#64b5f6';var blue400='#42a5f5';var blue500='#2196f3';var blue600='#1e88e5';var blue700='#1976d2';var blue800='#1565c0';var blue900='#0d47a1';var blueA100='#82b1ff';var blueA200='#448aff';var blueA400='#2979ff';var blueA700='#2962ff';var lightBlue50='#e1f5fe';var lightBlue100='#b3e5fc';var lightBlue200='#81d4fa';var lightBlue300='#4fc3f7';var lightBlue400='#29b6f6';var lightBlue500='#03a9f4';var lightBlue600='#039be5';var lightBlue700='#0288d1';var lightBlue800='#0277bd';var lightBlue900='#01579b';var lightBlueA100='#80d8ff';var lightBlueA200='#40c4ff';var lightBlueA400='#00b0ff';var lightBlueA700='#0091ea';var cyan50='#e0f7fa';var cyan100='#b2ebf2';var cyan200='#80deea';var cyan300='#4dd0e1';var cyan400='#26c6da';var cyan500='#00bcd4';var cyan600='#00acc1';var cyan700='#0097a7';var cyan800='#00838f';var cyan900='#006064';var cyanA100='#84ffff';var cyanA200='#18ffff';var cyanA400='#00e5ff';var cyanA700='#00b8d4';var teal50='#e0f2f1';var teal100='#b2dfdb';var teal200='#80cbc4';var teal300='#4db6ac';var teal400='#26a69a';var teal500='#009688';var teal600='#00897b';var teal700='#00796b';var teal800='#00695c';var teal900='#004d40';var tealA100='#a7ffeb';var tealA200='#64ffda';var tealA400='#1de9b6';var tealA700='#00bfa5';var green50='#e8f5e9';var green100='#c8e6c9';var green200='#a5d6a7';var green300='#81c784';var green400='#66bb6a';var green500='#4caf50';var green600='#43a047';var green700='#388e3c';var green800='#2e7d32';var green900='#1b5e20';var greenA100='#b9f6ca';var greenA200='#69f0ae';var greenA400='#00e676';var greenA700='#00c853';var lightGreen50='#f1f8e9';var lightGreen100='#dcedc8';var lightGreen200='#c5e1a5';var lightGreen300='#aed581';var lightGreen400='#9ccc65';var lightGreen500='#8bc34a';var lightGreen600='#7cb342';var lightGreen700='#689f38';var lightGreen800='#558b2f';var lightGreen900='#33691e';var lightGreenA100='#ccff90';var lightGreenA200='#b2ff59';var lightGreenA400='#76ff03';var lightGreenA700='#64dd17';var lime50='#f9fbe7';var lime100='#f0f4c3';var lime200='#e6ee9c';var lime300='#dce775';var lime400='#d4e157';var lime500='#cddc39';var lime600='#c0ca33';var lime700='#afb42b';var lime800='#9e9d24';var lime900='#827717';var limeA100='#f4ff81';var limeA200='#eeff41';var limeA400='#c6ff00';var limeA700='#aeea00';var yellow50='#fffde7';var yellow100='#fff9c4';var yellow200='#fff59d';var yellow300='#fff176';var yellow400='#ffee58';var yellow500='#ffeb3b';var yellow600='#fdd835';var yellow700='#fbc02d';var yellow800='#f9a825';var yellow900='#f57f17';var yellowA100='#ffff8d';var yellowA200='#ffff00';var yellowA400='#ffea00';var yellowA700='#ffd600';var amber50='#fff8e1';var amber100='#ffecb3';var amber200='#ffe082';var amber300='#ffd54f';var amber400='#ffca28';var amber500='#ffc107';var amber600='#ffb300';var amber700='#ffa000';var amber800='#ff8f00';var amber900='#ff6f00';var amberA100='#ffe57f';var amberA200='#ffd740';var amberA400='#ffc400';var amberA700='#ffab00';var orange50='#fff3e0';var orange100='#ffe0b2';var orange200='#ffcc80';var orange300='#ffb74d';var orange400='#ffa726';var orange500='#ff9800';var orange600='#fb8c00';var orange700='#f57c00';var orange800='#ef6c00';var orange900='#e65100';var orangeA100='#ffd180';var orangeA200='#ffab40';var orangeA400='#ff9100';var orangeA700='#ff6d00';var deepOrange50='#fbe9e7';var deepOrange100='#ffccbc';var deepOrange200='#ffab91';var deepOrange300='#ff8a65';var deepOrange400='#ff7043';var deepOrange500='#ff5722';var deepOrange600='#f4511e';var deepOrange700='#e64a19';var deepOrange800='#d84315';var deepOrange900='#bf360c';var deepOrangeA100='#ff9e80';var deepOrangeA200='#ff6e40';var deepOrangeA400='#ff3d00';var deepOrangeA700='#dd2c00';var brown50='#efebe9';var brown100='#d7ccc8';var brown200='#bcaaa4';var brown300='#a1887f';var brown400='#8d6e63';var brown500='#795548';var brown600='#6d4c41';var brown700='#5d4037';var brown800='#4e342e';var brown900='#3e2723';var blueGrey50='#eceff1';var blueGrey100='#cfd8dc';var blueGrey200='#b0bec5';var blueGrey300='#90a4ae';var blueGrey400='#78909c';var blueGrey500='#607d8b';var blueGrey600='#546e7a';var blueGrey700='#455a64';var blueGrey800='#37474f';var blueGrey900='#263238';var grey50='#fafafa';var grey100='#f5f5f5';var grey200='#eeeeee';var grey300='#e0e0e0';var grey400='#bdbdbd';var grey500='#9e9e9e';var grey600='#757575';var grey700='#616161';var grey800='#424242';var grey900='#212121';var black='#000000';var white='#ffffff';

var colors = /*#__PURE__*/Object.freeze({
	__proto__: null,
	red50: red50,
	red100: red100,
	red200: red200,
	red300: red300,
	red400: red400,
	red500: red500,
	red600: red600,
	red700: red700,
	red800: red800,
	red900: red900,
	redA100: redA100,
	redA200: redA200,
	redA400: redA400,
	redA700: redA700,
	pink50: pink50,
	pink100: pink100,
	pink200: pink200,
	pink300: pink300,
	pink400: pink400,
	pink500: pink500,
	pink600: pink600,
	pink700: pink700,
	pink800: pink800,
	pink900: pink900,
	pinkA100: pinkA100,
	pinkA200: pinkA200,
	pinkA400: pinkA400,
	pinkA700: pinkA700,
	purple50: purple50,
	purple100: purple100,
	purple200: purple200,
	purple300: purple300,
	purple400: purple400,
	purple500: purple500,
	purple600: purple600,
	purple700: purple700,
	purple800: purple800,
	purple900: purple900,
	purpleA100: purpleA100,
	purpleA200: purpleA200,
	purpleA400: purpleA400,
	purpleA700: purpleA700,
	deepPurple50: deepPurple50,
	deepPurple100: deepPurple100,
	deepPurple200: deepPurple200,
	deepPurple300: deepPurple300,
	deepPurple400: deepPurple400,
	deepPurple500: deepPurple500,
	deepPurple600: deepPurple600,
	deepPurple700: deepPurple700,
	deepPurple800: deepPurple800,
	deepPurple900: deepPurple900,
	deepPurpleA100: deepPurpleA100,
	deepPurpleA200: deepPurpleA200,
	deepPurpleA400: deepPurpleA400,
	deepPurpleA700: deepPurpleA700,
	indigo50: indigo50,
	indigo100: indigo100,
	indigo200: indigo200,
	indigo300: indigo300,
	indigo400: indigo400,
	indigo500: indigo500,
	indigo600: indigo600,
	indigo700: indigo700,
	indigo800: indigo800,
	indigo900: indigo900,
	indigoA100: indigoA100,
	indigoA200: indigoA200,
	indigoA400: indigoA400,
	indigoA700: indigoA700,
	blue50: blue50,
	blue100: blue100,
	blue200: blue200,
	blue300: blue300,
	blue400: blue400,
	blue500: blue500,
	blue600: blue600,
	blue700: blue700,
	blue800: blue800,
	blue900: blue900,
	blueA100: blueA100,
	blueA200: blueA200,
	blueA400: blueA400,
	blueA700: blueA700,
	lightBlue50: lightBlue50,
	lightBlue100: lightBlue100,
	lightBlue200: lightBlue200,
	lightBlue300: lightBlue300,
	lightBlue400: lightBlue400,
	lightBlue500: lightBlue500,
	lightBlue600: lightBlue600,
	lightBlue700: lightBlue700,
	lightBlue800: lightBlue800,
	lightBlue900: lightBlue900,
	lightBlueA100: lightBlueA100,
	lightBlueA200: lightBlueA200,
	lightBlueA400: lightBlueA400,
	lightBlueA700: lightBlueA700,
	cyan50: cyan50,
	cyan100: cyan100,
	cyan200: cyan200,
	cyan300: cyan300,
	cyan400: cyan400,
	cyan500: cyan500,
	cyan600: cyan600,
	cyan700: cyan700,
	cyan800: cyan800,
	cyan900: cyan900,
	cyanA100: cyanA100,
	cyanA200: cyanA200,
	cyanA400: cyanA400,
	cyanA700: cyanA700,
	teal50: teal50,
	teal100: teal100,
	teal200: teal200,
	teal300: teal300,
	teal400: teal400,
	teal500: teal500,
	teal600: teal600,
	teal700: teal700,
	teal800: teal800,
	teal900: teal900,
	tealA100: tealA100,
	tealA200: tealA200,
	tealA400: tealA400,
	tealA700: tealA700,
	green50: green50,
	green100: green100,
	green200: green200,
	green300: green300,
	green400: green400,
	green500: green500,
	green600: green600,
	green700: green700,
	green800: green800,
	green900: green900,
	greenA100: greenA100,
	greenA200: greenA200,
	greenA400: greenA400,
	greenA700: greenA700,
	lightGreen50: lightGreen50,
	lightGreen100: lightGreen100,
	lightGreen200: lightGreen200,
	lightGreen300: lightGreen300,
	lightGreen400: lightGreen400,
	lightGreen500: lightGreen500,
	lightGreen600: lightGreen600,
	lightGreen700: lightGreen700,
	lightGreen800: lightGreen800,
	lightGreen900: lightGreen900,
	lightGreenA100: lightGreenA100,
	lightGreenA200: lightGreenA200,
	lightGreenA400: lightGreenA400,
	lightGreenA700: lightGreenA700,
	lime50: lime50,
	lime100: lime100,
	lime200: lime200,
	lime300: lime300,
	lime400: lime400,
	lime500: lime500,
	lime600: lime600,
	lime700: lime700,
	lime800: lime800,
	lime900: lime900,
	limeA100: limeA100,
	limeA200: limeA200,
	limeA400: limeA400,
	limeA700: limeA700,
	yellow50: yellow50,
	yellow100: yellow100,
	yellow200: yellow200,
	yellow300: yellow300,
	yellow400: yellow400,
	yellow500: yellow500,
	yellow600: yellow600,
	yellow700: yellow700,
	yellow800: yellow800,
	yellow900: yellow900,
	yellowA100: yellowA100,
	yellowA200: yellowA200,
	yellowA400: yellowA400,
	yellowA700: yellowA700,
	amber50: amber50,
	amber100: amber100,
	amber200: amber200,
	amber300: amber300,
	amber400: amber400,
	amber500: amber500,
	amber600: amber600,
	amber700: amber700,
	amber800: amber800,
	amber900: amber900,
	amberA100: amberA100,
	amberA200: amberA200,
	amberA400: amberA400,
	amberA700: amberA700,
	orange50: orange50,
	orange100: orange100,
	orange200: orange200,
	orange300: orange300,
	orange400: orange400,
	orange500: orange500,
	orange600: orange600,
	orange700: orange700,
	orange800: orange800,
	orange900: orange900,
	orangeA100: orangeA100,
	orangeA200: orangeA200,
	orangeA400: orangeA400,
	orangeA700: orangeA700,
	deepOrange50: deepOrange50,
	deepOrange100: deepOrange100,
	deepOrange200: deepOrange200,
	deepOrange300: deepOrange300,
	deepOrange400: deepOrange400,
	deepOrange500: deepOrange500,
	deepOrange600: deepOrange600,
	deepOrange700: deepOrange700,
	deepOrange800: deepOrange800,
	deepOrange900: deepOrange900,
	deepOrangeA100: deepOrangeA100,
	deepOrangeA200: deepOrangeA200,
	deepOrangeA400: deepOrangeA400,
	deepOrangeA700: deepOrangeA700,
	brown50: brown50,
	brown100: brown100,
	brown200: brown200,
	brown300: brown300,
	brown400: brown400,
	brown500: brown500,
	brown600: brown600,
	brown700: brown700,
	brown800: brown800,
	brown900: brown900,
	blueGrey50: blueGrey50,
	blueGrey100: blueGrey100,
	blueGrey200: blueGrey200,
	blueGrey300: blueGrey300,
	blueGrey400: blueGrey400,
	blueGrey500: blueGrey500,
	blueGrey600: blueGrey600,
	blueGrey700: blueGrey700,
	blueGrey800: blueGrey800,
	blueGrey900: blueGrey900,
	grey50: grey50,
	grey100: grey100,
	grey200: grey200,
	grey300: grey300,
	grey400: grey400,
	grey500: grey500,
	grey600: grey600,
	grey700: grey700,
	grey800: grey800,
	grey900: grey900,
	black: black,
	white: white
});

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

var fontConfig={web:{regular:{fontFamily:'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',fontWeight:'400'},medium:{fontFamily:'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',fontWeight:'500'},light:{fontFamily:'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',fontWeight:'300'},thin:{fontFamily:'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',fontWeight:'100'}},ios:{regular:{fontFamily:'System',fontWeight:'400'},medium:{fontFamily:'System',fontWeight:'500'},light:{fontFamily:'System',fontWeight:'300'},thin:{fontFamily:'System',fontWeight:'100'}},default:{regular:{fontFamily:'sans-serif',fontWeight:'normal'},medium:{fontFamily:'sans-serif-medium',fontWeight:'normal'},light:{fontFamily:'sans-serif-light',fontWeight:'normal'},thin:{fontFamily:'sans-serif-thin',fontWeight:'normal'}}};function configureFonts(config){var fonts=reactNative.Platform.select(objectSpread({},fontConfig,config));return fonts;}

var DefaultTheme={dark:false,roundness:4,colors:{primary:'#6200ee',accent:'#03dac4',background:'#f6f6f6',surface:white,error:'#B00020',text:black,onBackground:'#000000',onSurface:'#000000',disabled:color(black).alpha(0.26).rgb().string(),placeholder:color(black).alpha(0.54).rgb().string(),backdrop:color(black).alpha(0.5).rgb().string(),notification:pinkA400},fonts:configureFonts(),animation:{scale:1.0}};

var _createTheming=lib_1(DefaultTheme),ThemeProvider=_createTheming.ThemeProvider,withTheme=_createTheming.withTheme,useTheme=_createTheming.useTheme;

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

var getPrototypeOf$1 = createCommonjsModule(function (module) {
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

var _jsxFileName="/Users/satya/Workspace/Callstack/react-native-paper/src/components/MaterialCommunityIcon.tsx";var MaterialCommunityIcons;try{MaterialCommunityIcons=require('react-native-vector-icons/MaterialCommunityIcons').default;}catch(e){if(global.__expo&&global.__expo.Icon&&global.__expo.Icon.MaterialCommunityIcons){MaterialCommunityIcons=global.__expo.Icon.MaterialCommunityIcons;}else{var isErrorLogged=false;MaterialCommunityIcons=function MaterialCommunityIcons(_ref){var name=_ref.name,color=_ref.color,size=_ref.size,rest=objectWithoutProperties(_ref,["name","color","size"]);if(!isErrorLogged){if(!/(Cannot find module|Module not found|Cannot resolve module)/.test(e.message)){console.error(e);}console.warn("Tried to use the icon '"+name+"' in a component from 'react-native-paper', but 'react-native-vector-icons' could not be loaded.","To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/icons.html.");isErrorLogged=true;}return React.createElement(reactNative.Text,_extends_1({},rest,{style:[styles.icon,{color:color,fontSize:size}],pointerEvents:"none",__source:{fileName:_jsxFileName,lineNumber:55}}),"\u25A1");};}}var accessibilityProps=reactNative.Platform.OS==='web'?{role:'img',focusable:false}:{accessibilityElementsHidden:true,importantForAccessibility:'no-hide-descendants'};var defaultIcon=function defaultIcon(_ref2){var name=_ref2.name,color=_ref2.color,size=_ref2.size,direction=_ref2.direction;return React.createElement(MaterialCommunityIcons,_extends_1({name:name,color:color,size:size,style:[{transform:[{scaleX:direction==='rtl'?-1:1}]},styles.icon],pointerEvents:"none"},accessibilityProps,{__source:{fileName:_jsxFileName,lineNumber:79}}));};var styles=reactNative.StyleSheet.create({icon:{backgroundColor:'transparent'}});

var _React$createContext=React.createContext({icon:defaultIcon}),Provider=_React$createContext.Provider,Consumer=_React$createContext.Consumer;

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

var _jsxFileName$1="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Portal/PortalManager.tsx";var PortalManager=function(_React$PureComponent){inherits(PortalManager,_React$PureComponent);function PortalManager(){var _getPrototypeOf2;var _this;classCallCheck(this,PortalManager);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(PortalManager)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={portals:[]};_this.mount=function(key,children){_this.setState(function(state){return {portals:[].concat(toConsumableArray(state.portals),[{key:key,children:children}])};});};_this.update=function(key,children){return _this.setState(function(state){return {portals:state.portals.map(function(item){if(item.key===key){return objectSpread({},item,{children:children});}return item;})};});};_this.unmount=function(key){return _this.setState(function(state){return {portals:state.portals.filter(function(item){return item.key!==key;})};});};return _this;}createClass(PortalManager,[{key:"render",value:function render(){return this.state.portals.map(function(_ref){var key=_ref.key,children=_ref.children;return React.createElement(reactNative.View,{key:key,collapsable:false,pointerEvents:"box-none",style:reactNative.StyleSheet.absoluteFill,__source:{fileName:_jsxFileName$1,lineNumber:42}},children);});}}]);return PortalManager;}(React.PureComponent);

var _jsxFileName$2="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Portal/PortalHost.tsx";var PortalContext=React.createContext(null);var PortalHost=function(_React$Component){inherits(PortalHost,_React$Component);function PortalHost(){var _getPrototypeOf2;var _this;classCallCheck(this,PortalHost);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(PortalHost)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.setManager=function(manager){_this.manager=manager;};_this.mount=function(children){var key=_this.nextKey++;if(_this.manager){_this.manager.mount(key,children);}else{_this.queue.push({type:'mount',key:key,children:children});}return key;};_this.update=function(key,children){if(_this.manager){_this.manager.update(key,children);}else{var op={type:'mount',key:key,children:children};var index=_this.queue.findIndex(function(o){return o.type==='mount'||o.type==='update'&&o.key===key;});if(index>-1){_this.queue[index]=op;}else{_this.queue.push(op);}}};_this.unmount=function(key){if(_this.manager){_this.manager.unmount(key);}else{_this.queue.push({type:'unmount',key:key});}};_this.nextKey=0;_this.queue=[];return _this;}createClass(PortalHost,[{key:"componentDidMount",value:function componentDidMount(){var manager=this.manager;var queue=this.queue;while(queue.length&&manager){var action=queue.pop();if(action){switch(action.type){case'mount':manager.mount(action.key,action.children);break;case'update':manager.update(action.key,action.children);break;case'unmount':manager.unmount(action.key);break;}}}}},{key:"render",value:function render(){return React.createElement(PortalContext.Provider,{value:{mount:this.mount,update:this.update,unmount:this.unmount},__source:{fileName:_jsxFileName$2,lineNumber:120}},React.createElement(reactNative.View,{style:styles$1.container,collapsable:false,pointerEvents:"box-none",__source:{fileName:_jsxFileName$2,lineNumber:128}},this.props.children),React.createElement(PortalManager,{ref:this.setManager,__source:{fileName:_jsxFileName$2,lineNumber:135}}));}}]);return PortalHost;}(React.Component);PortalHost.displayName='Portal.Host';var styles$1=reactNative.StyleSheet.create({container:{flex:1}});

var _jsxFileName$3="/Users/satya/Workspace/Callstack/react-native-paper/src/core/Provider.tsx";var Provider$1=function(_React$Component){inherits(Provider$1,_React$Component);function Provider$1(){classCallCheck(this,Provider$1);return possibleConstructorReturn(this,getPrototypeOf$1(Provider$1).apply(this,arguments));}createClass(Provider$1,[{key:"render",value:function render(){return React.createElement(PortalHost,{__source:{fileName:_jsxFileName$3,lineNumber:17}},React.createElement(Provider,{value:this.props.settings||{icon:defaultIcon},__source:{fileName:_jsxFileName$3,lineNumber:18}},React.createElement(ThemeProvider,{theme:this.props.theme,__source:{fileName:_jsxFileName$3,lineNumber:21}},this.props.children)));}}]);return Provider$1;}(React.Component);

var DarkTheme=objectSpread({},DefaultTheme,{dark:true,mode:'adaptive',colors:objectSpread({},DefaultTheme.colors,{primary:'#BB86FC',accent:'#03dac6',background:'#121212',surface:'#121212',error:'#CF6679',onBackground:'#FFFFFF',onSurface:'#FFFFFF',text:white,disabled:color(white).alpha(0.38).rgb().string(),placeholder:color(white).alpha(0.54).rgb().string(),backdrop:color(black).alpha(0.5).rgb().string(),notification:pinkA100})});

var SHADOW_COLOR=black;var SHADOW_OPACITY=0.24;function shadow(){var elevation=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;if(elevation instanceof reactNative.Animated.Value){var inputRange=[0,1,2,3,8,24];return {shadowColor:SHADOW_COLOR,shadowOffset:{width:new reactNative.Animated.Value(0),height:elevation.interpolate({inputRange:inputRange,outputRange:[0,0.5,0.75,2,7,23]})},shadowOpacity:new reactNative.Animated.Value(SHADOW_OPACITY),shadowRadius:elevation.interpolate({inputRange:inputRange,outputRange:[0,0.75,1.5,3,8,24]})};}else{if(elevation===0){return {};}var height,radius;switch(elevation){case 1:height=0.5;radius=0.75;break;case 2:height=0.75;radius=1.5;break;default:height=elevation-1;radius=elevation;}return {shadowColor:SHADOW_COLOR,shadowOffset:{width:0,height:height},shadowOpacity:SHADOW_OPACITY,shadowRadius:radius};}}

function overlay(){var elevation=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var surfaceColor=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DarkTheme.colors.surface;if(elevation instanceof reactNative.Animated.Value){var inputRange=[0,1,2,3,8,24];return elevation.interpolate({inputRange:inputRange,outputRange:inputRange.map(function(elevation){return calculateColor(surfaceColor,elevation);})});}return calculateColor(surfaceColor,elevation);}function calculateColor(surfaceColor,elevation){var overlayTransparency;if(elevation>=1&&elevation<=24){overlayTransparency=elevationOverlayTransparency[elevation];}else if(elevation>24){overlayTransparency=elevationOverlayTransparency[24];}else{overlayTransparency=elevationOverlayTransparency[1];}return color(surfaceColor).mix(color('white'),overlayTransparency*0.01).hex();}var elevationOverlayTransparency={1:5,2:7,3:8,4:9,5:10,6:11,7:11.5,8:12,9:12.5,10:13,11:13.5,12:14,13:14.25,14:14.5,15:14.75,16:15,17:15.12,18:15.24,19:15.36,20:15.48,21:15.6,22:15.72,23:15.84,24:16};

var _jsxFileName$4="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Icon.tsx";var isImageSource=function isImageSource(source){return typeof source==='object'&&source!==null&&Object.prototype.hasOwnProperty.call(source,'uri')&&typeof source.uri==='string'||typeof source==='number'||reactNative.Platform.OS==='web'&&typeof source==='string'&&(source.startsWith('data:image')||/\.(bmp|jpg|jpeg|png|gif|svg)$/.test(source));};var getIconId=function getIconId(source){if(typeof source==='object'&&source!==null&&Object.prototype.hasOwnProperty.call(source,'uri')&&typeof source.uri==='string'){return source.uri;}return source;};var isValidIcon=function isValidIcon(source){return typeof source==='string'||isImageSource(source);};var isEqualIcon=function isEqualIcon(a,b){return a===b||getIconId(a)===getIconId(b);};var Icon=function Icon(_ref){var source=_ref.source,color=_ref.color,size=_ref.size,theme=_ref.theme,rest=objectWithoutProperties(_ref,["source","color","size","theme"]);var direction=typeof source==='object'&&source.direction&&source.source?source.direction==='auto'?reactNative.I18nManager.isRTL?'rtl':'ltr':source.direction:null;var s=typeof source==='object'&&source.direction&&source.source?source.source:source;var iconColor=color||theme.colors.text;if(isImageSource(s)){return React.createElement(reactNative.Image,_extends_1({},rest,{source:s,style:[{transform:[{scaleX:direction==='rtl'?-1:1}]},{width:size,height:size,tintColor:color,resizeMode:'contain'}]},accessibilityProps,{__source:{fileName:_jsxFileName$4,lineNumber:86}}));}else if(typeof s==='string'){return React.createElement(Consumer,{__source:{fileName:_jsxFileName$4,lineNumber:106}},function(_ref2){var icon=_ref2.icon;return icon({name:s,color:iconColor,size:size,direction:direction});});}else if(typeof s==='function'){return s({color:iconColor,size:size,direction:direction});}return null;};var Icon$1 = withTheme(Icon);

var _jsxFileName$5="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Avatar/AvatarIcon.tsx";var defaultSize=64;var Avatar=function(_React$Component){inherits(Avatar,_React$Component);function Avatar(){classCallCheck(this,Avatar);return possibleConstructorReturn(this,getPrototypeOf$1(Avatar).apply(this,arguments));}createClass(Avatar,[{key:"render",value:function render(){var _this$props=this.props,icon=_this$props.icon,_this$props$size=_this$props.size,size=_this$props$size===void 0?defaultSize:_this$props$size,style=_this$props.style,theme=_this$props.theme;var _ref=reactNative.StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?theme.colors.primary:_ref$backgroundColor,restStyle=objectWithoutProperties(_ref,["backgroundColor"]);var textColor=this.props.color||(color(backgroundColor).isLight()?'rgba(0, 0, 0, .54)':white);return React.createElement(reactNative.View,{style:[{width:size,height:size,borderRadius:size/2,backgroundColor:backgroundColor},styles$2.container,restStyle],__source:{fileName:_jsxFileName$5,lineNumber:68}},React.createElement(Icon$1,{source:icon,color:textColor,size:size*0.6,__source:{fileName:_jsxFileName$5,lineNumber:80}}));}}]);return Avatar;}(React.Component);Avatar.displayName='Avatar.Icon';Avatar.defaultProps={size:defaultSize};var styles$2=reactNative.StyleSheet.create({container:{justifyContent:'center',alignItems:'center'}});var AvatarIcon = withTheme(Avatar);

var _jsxFileName$6="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Avatar/AvatarImage.tsx";var defaultSize$1=64;var AvatarImage=function(_React$Component){inherits(AvatarImage,_React$Component);function AvatarImage(){classCallCheck(this,AvatarImage);return possibleConstructorReturn(this,getPrototypeOf$1(AvatarImage).apply(this,arguments));}createClass(AvatarImage,[{key:"render",value:function render(){var _this$props=this.props,_this$props$size=_this$props.size,size=_this$props$size===void 0?defaultSize$1:_this$props$size,source=_this$props.source,style=_this$props.style,theme=_this$props.theme;var colors=theme.colors;var _ref=reactNative.StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?colors.primary:_ref$backgroundColor;return React.createElement(reactNative.View,{style:[{width:size,height:size,borderRadius:size/2,backgroundColor:backgroundColor},style],__source:{fileName:_jsxFileName$6,lineNumber:65}},React.createElement(reactNative.Image,{source:source,style:{width:size,height:size,borderRadius:size/2},__source:{fileName:_jsxFileName$6,lineNumber:76}}));}}]);return AvatarImage;}(React.Component);AvatarImage.displayName='Avatar.Image';AvatarImage.defaultProps={size:defaultSize$1};var AvatarImage$1 = withTheme(AvatarImage);

var _jsxFileName$7="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Typography/Text.tsx";var Text=function(_React$Component){inherits(Text,_React$Component);function Text(){classCallCheck(this,Text);return possibleConstructorReturn(this,getPrototypeOf$1(Text).apply(this,arguments));}createClass(Text,[{key:"setNativeProps",value:function setNativeProps(args){return this.root&&this.root.setNativeProps(args);}},{key:"render",value:function render(){var _this=this;var _this$props=this.props,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["style","theme"]);return React.createElement(reactNative.Text,_extends_1({},rest,{ref:function ref(c){_this.root=c;},style:[objectSpread({},theme.fonts.regular,{color:theme.colors.text,textAlign:'left'}),style],__source:{fileName:_jsxFileName$7,lineNumber:35}}));}}]);return Text;}(React.Component);var Text$1 = withTheme(Text);

var _jsxFileName$8="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Avatar/AvatarText.tsx";var defaultSize$2=64;var AvatarText=function(_React$Component){inherits(AvatarText,_React$Component);function AvatarText(){classCallCheck(this,AvatarText);return possibleConstructorReturn(this,getPrototypeOf$1(AvatarText).apply(this,arguments));}createClass(AvatarText,[{key:"render",value:function render(){var _this$props=this.props,label=_this$props.label,_this$props$size=_this$props.size,size=_this$props$size===void 0?defaultSize$2:_this$props$size,style=_this$props.style,theme=_this$props.theme,labelStyle=_this$props.labelStyle;var _ref=reactNative.StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?theme.colors.primary:_ref$backgroundColor,restStyle=objectWithoutProperties(_ref,["backgroundColor"]);var textColor=this.props.color||(color(backgroundColor).isLight()?'rgba(0, 0, 0, .54)':white);return React.createElement(reactNative.View,{style:[{width:size,height:size,borderRadius:size/2,backgroundColor:backgroundColor},styles$3.container,restStyle],__source:{fileName:_jsxFileName$8,lineNumber:80}},React.createElement(Text$1,{style:[styles$3.text,{color:textColor,fontSize:size/2,lineHeight:size},labelStyle],numberOfLines:1,__source:{fileName:_jsxFileName$8,lineNumber:92}},label));}}]);return AvatarText;}(React.Component);AvatarText.displayName='Avatar.Text';AvatarText.defaultProps={size:defaultSize$2};var styles$3=reactNative.StyleSheet.create({container:{justifyContent:'center',alignItems:'center'},text:{textAlign:'center',textAlignVertical:'center'}});var AvatarText$1 = withTheme(AvatarText);



var Avatar$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Icon: AvatarIcon,
	Image: AvatarImage$1,
	Text: AvatarText$1
});

var _jsxFileName$9="/Users/satya/Workspace/Callstack/react-native-paper/src/components/TouchableRipple/index.tsx";var TouchableRipple=function(_React$Component){inherits(TouchableRipple,_React$Component);function TouchableRipple(){var _getPrototypeOf2;var _this;classCallCheck(this,TouchableRipple);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(TouchableRipple)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.handlePressIn=function(e){var _this$props=_this.props,centered=_this$props.centered,rippleColor=_this$props.rippleColor,onPressIn=_this$props.onPressIn,theme=_this$props.theme;onPressIn&&onPressIn(e);var dark=theme.dark,colors=theme.colors;var calculatedRippleColor=rippleColor||color(colors.text).alpha(dark?0.32:0.2).rgb().string();var button=e.currentTarget;var style=window.getComputedStyle(button);var dimensions=button.getBoundingClientRect();var touchX;var touchY;if(centered){touchX=dimensions.width/2;touchY=dimensions.height/2;}else{var startX=e.nativeEvent.touches?e.nativeEvent.touches[0].pageX:e.pageX;var startY=e.nativeEvent.touches?e.nativeEvent.touches[0].pageY:e.pageY;touchX=startX-dimensions.left;touchY=startY-dimensions.top;}var size=centered?Math.min(dimensions.width,dimensions.height)*1.25:Math.max(dimensions.width,dimensions.height)*2;var container=document.createElement('span');container.setAttribute('data-paper-ripple','');_extends_1(container.style,{position:'absolute',pointerEvents:'none',top:'0',left:'0',right:'0',bottom:'0',borderTopLeftRadius:style.borderTopLeftRadius,borderTopRightRadius:style.borderTopRightRadius,borderBottomRightRadius:style.borderBottomRightRadius,borderBottomLeftRadius:style.borderBottomLeftRadius,overflow:centered?'visible':'hidden'});var ripple=document.createElement('span');_extends_1(ripple.style,{position:'absolute',pointerEvents:'none',backgroundColor:calculatedRippleColor,borderRadius:'50%',transitionProperty:'transform opacity',transitionDuration:Math.min(size*1.5,350)+"ms",transitionTimingFunction:'linear',transformOrigin:'center',transform:'translate3d(-50%, -50%, 0) scale3d(0.1, 0.1, 0.1)',opacity:'0.5',left:touchX+"px",top:touchY+"px",width:size+"px",height:size+"px"});container.appendChild(ripple);button.appendChild(container);requestAnimationFrame(function(){requestAnimationFrame(function(){_extends_1(ripple.style,{transform:'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',opacity:'1'});});});};_this.handlePressOut=function(e){_this.props.onPressOut&&_this.props.onPressOut(e);var containers=e.currentTarget.querySelectorAll('[data-paper-ripple]');requestAnimationFrame(function(){requestAnimationFrame(function(){containers.forEach(function(container){var ripple=container.firstChild;_extends_1(ripple.style,{transitionDuration:'250ms',opacity:0});setTimeout(function(){var parentNode=container.parentNode;if(parentNode){parentNode.removeChild(container);}},500);});});});};return _this;}createClass(TouchableRipple,[{key:"render",value:function render(){var _this$props2=this.props,style=_this$props2.style,background=_this$props2.background,borderless=_this$props2.borderless,disabledProp=_this$props2.disabled,rippleColor=_this$props2.rippleColor,underlayColor=_this$props2.underlayColor,children=_this$props2.children,theme=_this$props2.theme,rest=objectWithoutProperties(_this$props2,["style","background","borderless","disabled","rippleColor","underlayColor","children","theme"]);var disabled=disabledProp||!this.props.onPress;return React.createElement(reactNative.TouchableWithoutFeedback,_extends_1({},rest,{onPressIn:this.handlePressIn,onPressOut:this.handlePressOut,disabled:disabled,__source:{fileName:_jsxFileName$9,lineNumber:246}}),React.createElement(reactNative.View,{style:[styles$4.touchable,borderless&&styles$4.borderless,style],__source:{fileName:_jsxFileName$9,lineNumber:252}},React.Children.only(children)));}}]);return TouchableRipple;}(React.Component);TouchableRipple.defaultProps={borderless:false};TouchableRipple.supported=true;var styles$4=reactNative.StyleSheet.create({touchable:{position:'relative'},borderless:{overflow:'hidden'}});var TouchableRipple$1 = withTheme(TouchableRipple);

var _jsxFileName$a="/Users/satya/Workspace/Callstack/react-native-paper/src/components/List/ListAccordionGroup.tsx";var ListAccordionGroupContext=React.createContext(null);var ListAccordionGroup=function(_React$Component){inherits(ListAccordionGroup,_React$Component);function ListAccordionGroup(){var _getPrototypeOf2;var _this;classCallCheck(this,ListAccordionGroup);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(ListAccordionGroup)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={expandedId:undefined};_this.onAccordionPress=function(expandedId){_this.setState(function(_ref){var currentExpandedId=_ref.expandedId;return {expandedId:currentExpandedId===expandedId?undefined:expandedId};});};return _this;}createClass(ListAccordionGroup,[{key:"render",value:function render(){var _this$props=this.props,expandedId=_this$props.expandedId,onAccordionPress=_this$props.onAccordionPress,children=_this$props.children;return React.createElement(ListAccordionGroupContext.Provider,{value:{expandedId:expandedId||this.state.expandedId,onAccordionPress:onAccordionPress||this.onAccordionPress},__source:{fileName:_jsxFileName$a,lineNumber:82}},children);}}]);return ListAccordionGroup;}(React.Component);ListAccordionGroup.displayName='List.AccordionGroup';

var _jsxFileName$b="/Users/satya/Workspace/Callstack/react-native-paper/src/components/List/ListAccordion.tsx";var ListAccordion=function(_React$Component){inherits(ListAccordion,_React$Component);function ListAccordion(){var _getPrototypeOf2;var _this;classCallCheck(this,ListAccordion);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(ListAccordion)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={expanded:_this.props.expanded||false};_this.handlePress=function(){_this.props.onPress&&_this.props.onPress();if(_this.props.expanded===undefined){_this.setState(function(state){return {expanded:!state.expanded};});}};return _this;}createClass(ListAccordion,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,left=_this$props.left,title=_this$props.title,description=_this$props.description,children=_this$props.children,theme=_this$props.theme,titleStyle=_this$props.titleStyle,descriptionStyle=_this$props.descriptionStyle,titleNumberOfLines=_this$props.titleNumberOfLines,descriptionNumberOfLines=_this$props.descriptionNumberOfLines,style=_this$props.style,id=_this$props.id;var titleColor=color(theme.colors.text).alpha(0.87).rgb().string();var descriptionColor=color(theme.colors.text).alpha(0.54).rgb().string();var expandedInternal=this.props.expanded!==undefined?this.props.expanded:this.state.expanded;return React.createElement(ListAccordionGroupContext.Consumer,{__source:{fileName:_jsxFileName$b,lineNumber:189}},function(groupContext){if(groupContext!==null&&!id){throw new Error('List.Accordion is used inside a List.AccordionGroup without specifying an id prop.');}var expanded=groupContext?groupContext.expandedId===id:expandedInternal;var handlePress=groupContext&&id!==undefined?function(){return groupContext.onAccordionPress(id);}:_this2.handlePress;return React.createElement(reactNative.View,{__source:{fileName:_jsxFileName$b,lineNumber:204}},React.createElement(TouchableRipple$1,{style:[styles$5.container,style],onPress:handlePress,accessibilityTraits:"button",accessibilityComponentType:"button",accessibilityRole:"button",__source:{fileName:_jsxFileName$b,lineNumber:205}},React.createElement(reactNative.View,{style:styles$5.row,pointerEvents:"none",__source:{fileName:_jsxFileName$b,lineNumber:212}},left?left({color:expanded?theme.colors.primary:descriptionColor}):null,React.createElement(reactNative.View,{style:[styles$5.item,styles$5.content],__source:{fileName:_jsxFileName$b,lineNumber:220}},React.createElement(Text$1,{numberOfLines:titleNumberOfLines,style:[styles$5.title,{color:expanded?theme.colors.primary:titleColor},titleStyle],__source:{fileName:_jsxFileName$b,lineNumber:221}},title),description&&React.createElement(Text$1,{numberOfLines:descriptionNumberOfLines,style:[styles$5.description,{color:descriptionColor},descriptionStyle],__source:{fileName:_jsxFileName$b,lineNumber:234}},description)),React.createElement(reactNative.View,{style:[styles$5.item,description?styles$5.multiline:undefined],__source:{fileName:_jsxFileName$b,lineNumber:248}},React.createElement(Icon$1,{source:expanded?'chevron-up':'chevron-down',color:titleColor,size:24,__source:{fileName:_jsxFileName$b,lineNumber:254}})))),expanded?React.Children.map(children,function(child){if(left&&React.isValidElement(child)&&!child.props.left&&!child.props.right){return React.cloneElement(child,{style:[styles$5.child,child.props.style]});}return child;}):null);});}}]);return ListAccordion;}(React.Component);ListAccordion.displayName='List.Accordion';ListAccordion.defaultProps={titleNumberOfLines:1,descriptionNumberOfLines:2};var styles$5=reactNative.StyleSheet.create({container:{padding:8},row:{flexDirection:'row',alignItems:'center'},multiline:{height:40,alignItems:'center',justifyContent:'center'},title:{fontSize:16},description:{fontSize:14},item:{margin:8},child:{paddingLeft:64},content:{flex:1,justifyContent:'center'}});var ListAccordion$1 = withTheme(ListAccordion);

var _jsxFileName$c="/Users/satya/Workspace/Callstack/react-native-paper/src/components/List/ListIcon.tsx";var ListIcon=function(_React$Component){inherits(ListIcon,_React$Component);function ListIcon(){classCallCheck(this,ListIcon);return possibleConstructorReturn(this,getPrototypeOf$1(ListIcon).apply(this,arguments));}createClass(ListIcon,[{key:"render",value:function render(){var _this$props=this.props,icon=_this$props.icon,iconColor=_this$props.color,style=_this$props.style;return React.createElement(reactNative.View,{style:[styles$6.item,style],pointerEvents:"box-none",__source:{fileName:_jsxFileName$c,lineNumber:39}},React.createElement(Icon$1,{source:icon,size:24,color:iconColor,__source:{fileName:_jsxFileName$c,lineNumber:40}}));}}]);return ListIcon;}(React.Component);ListIcon.displayName='List.Icon';var styles$6=reactNative.StyleSheet.create({item:{margin:8,height:40,width:40,alignItems:'center',justifyContent:'center'}});

var _jsxFileName$d="/Users/satya/Workspace/Callstack/react-native-paper/src/components/List/ListItem.tsx";var ListItem=function(_React$Component){inherits(ListItem,_React$Component);function ListItem(){classCallCheck(this,ListItem);return possibleConstructorReturn(this,getPrototypeOf$1(ListItem).apply(this,arguments));}createClass(ListItem,[{key:"renderDescription",value:function renderDescription(descriptionColor,description){var _this$props=this.props,descriptionEllipsizeMode=_this$props.descriptionEllipsizeMode,descriptionStyle=_this$props.descriptionStyle,descriptionNumberOfLines=_this$props.descriptionNumberOfLines;return typeof description==='function'?description({ellipsizeMode:descriptionEllipsizeMode,color:descriptionColor,fontSize:styles$7.description.fontSize}):React.createElement(Text$1,{numberOfLines:descriptionNumberOfLines,ellipsizeMode:descriptionEllipsizeMode,style:[styles$7.description,{color:descriptionColor},descriptionStyle],__source:{fileName:_jsxFileName$d,lineNumber:144}},description);}},{key:"render",value:function render(){var _this$props2=this.props,left=_this$props2.left,right=_this$props2.right,title=_this$props2.title,description=_this$props2.description,onPress=_this$props2.onPress,theme=_this$props2.theme,style=_this$props2.style,titleStyle=_this$props2.titleStyle,titleNumberOfLines=_this$props2.titleNumberOfLines,titleEllipsizeMode=_this$props2.titleEllipsizeMode,rest=objectWithoutProperties(_this$props2,["left","right","title","description","onPress","theme","style","titleStyle","titleNumberOfLines","titleEllipsizeMode"]);var titleColor=color(theme.colors.text).alpha(0.87).rgb().string();var descriptionColor=color(theme.colors.text).alpha(0.54).rgb().string();return React.createElement(TouchableRipple$1,_extends_1({},rest,{style:[styles$7.container,style],onPress:onPress,__source:{fileName:_jsxFileName$d,lineNumber:182}}),React.createElement(reactNative.View,{style:styles$7.row,__source:{fileName:_jsxFileName$d,lineNumber:187}},left?left({color:descriptionColor,style:description?styles$7.iconMarginLeft:objectSpread({},styles$7.iconMarginLeft,styles$7.marginVerticalNone)}):null,React.createElement(reactNative.View,{style:[styles$7.item,styles$7.content],pointerEvents:"none",__source:{fileName:_jsxFileName$d,lineNumber:199}},React.createElement(Text$1,{ellipsizeMode:titleEllipsizeMode,numberOfLines:titleNumberOfLines,style:[styles$7.title,{color:titleColor},titleStyle],__source:{fileName:_jsxFileName$d,lineNumber:200}},title),description?this.renderDescription(descriptionColor,description):null),right?right({color:descriptionColor,style:description?styles$7.iconMarginRight:objectSpread({},styles$7.iconMarginRight,styles$7.marginVerticalNone)}):null));}}]);return ListItem;}(React.Component);ListItem.displayName='List.Item';ListItem.defaultProps={titleNumberOfLines:1,descriptionNumberOfLines:2};var styles$7=reactNative.StyleSheet.create({container:{padding:8},row:{flexDirection:'row'},title:{fontSize:16},description:{fontSize:14},marginVerticalNone:{marginVertical:0},iconMarginLeft:{marginLeft:0,marginRight:16},iconMarginRight:{marginRight:0},item:{marginVertical:6,paddingLeft:8},content:{flex:1,justifyContent:'center'}});var ListItem$1 = withTheme(ListItem);

var _jsxFileName$e="/Users/satya/Workspace/Callstack/react-native-paper/src/components/List/ListSubheader.tsx";var ListSubheader=function(_React$Component){inherits(ListSubheader,_React$Component);function ListSubheader(){classCallCheck(this,ListSubheader);return possibleConstructorReturn(this,getPrototypeOf$1(ListSubheader).apply(this,arguments));}createClass(ListSubheader,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["style","theme"]);var colors=theme.colors,fonts=theme.fonts;var font=fonts.medium;var textColor=color(colors.text).alpha(0.54).rgb().string();return React.createElement(Text$1,_extends_1({numberOfLines:1},rest,{style:[styles$8.container,objectSpread({color:textColor},font),style],__source:{fileName:_jsxFileName$e,lineNumber:49}}));}}]);return ListSubheader;}(React.Component);ListSubheader.displayName='List.Subheader';var styles$8=reactNative.StyleSheet.create({container:{paddingHorizontal:16,paddingVertical:13}});var ListSubheader$1 = withTheme(ListSubheader);

var _jsxFileName$f="/Users/satya/Workspace/Callstack/react-native-paper/src/components/List/ListSection.tsx";var ListSection=function(_React$Component){inherits(ListSection,_React$Component);function ListSection(){classCallCheck(this,ListSection);return possibleConstructorReturn(this,getPrototypeOf$1(ListSection).apply(this,arguments));}createClass(ListSection,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,title=_this$props.title,titleStyle=_this$props.titleStyle,style=_this$props.style,rest=objectWithoutProperties(_this$props,["children","title","titleStyle","style"]);return React.createElement(reactNative.View,_extends_1({},rest,{style:[styles$9.container,style],__source:{fileName:_jsxFileName$f,lineNumber:73}}),title&&React.createElement(ListSubheader$1,{style:titleStyle,__source:{fileName:_jsxFileName$f,lineNumber:74}},title),children);}}]);return ListSection;}(React.Component);ListSection.displayName='List.Section';var styles$9=reactNative.StyleSheet.create({container:{marginVertical:8}});var ListSection$1 = withTheme(ListSection);



var List = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Accordion: ListAccordion$1,
	AccordionGroup: ListAccordionGroup,
	Icon: ListIcon,
	Item: ListItem$1,
	Section: ListSection$1,
	Subheader: ListSubheader$1
});

var _jsxFileName$g="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Drawer/DrawerItem.tsx";var DrawerItem=function(_React$Component){inherits(DrawerItem,_React$Component);function DrawerItem(){classCallCheck(this,DrawerItem);return possibleConstructorReturn(this,getPrototypeOf$1(DrawerItem).apply(this,arguments));}createClass(DrawerItem,[{key:"render",value:function render(){var _this$props=this.props,icon=_this$props.icon,label=_this$props.label,active=_this$props.active,theme=_this$props.theme,style=_this$props.style,onPress=_this$props.onPress,rest=objectWithoutProperties(_this$props,["icon","label","active","theme","style","onPress"]);var colors=theme.colors,roundness=theme.roundness;var backgroundColor=active?color(colors.primary).alpha(0.12).rgb().string():'transparent';var contentColor=active?colors.primary:color(colors.text).alpha(0.68).rgb().string();var font=theme.fonts.medium;var labelMargin=icon?32:0;return React.createElement(reactNative.View,_extends_1({},rest,{style:[styles$a.container,{backgroundColor:backgroundColor,borderRadius:roundness},style],__source:{fileName:_jsxFileName$g,lineNumber:71}}),React.createElement(TouchableRipple$1,{borderless:true,delayPressIn:0,onPress:onPress,style:{borderRadius:roundness},accessibilityTraits:active?['button','selected']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:active?['selected']:[],__source:{fileName:_jsxFileName$g,lineNumber:79}},React.createElement(reactNative.View,{style:styles$a.wrapper,__source:{fileName:_jsxFileName$g,lineNumber:89}},icon?React.createElement(Icon$1,{source:icon,size:24,color:contentColor,__source:{fileName:_jsxFileName$g,lineNumber:91}}):null,React.createElement(Text$1,{numberOfLines:1,style:[styles$a.label,objectSpread({color:contentColor},font,{marginLeft:labelMargin})],__source:{fileName:_jsxFileName$g,lineNumber:93}},label))));}}]);return DrawerItem;}(React.Component);DrawerItem.displayName='Drawer.Item';var styles$a=reactNative.StyleSheet.create({container:{marginHorizontal:10,marginVertical:4},wrapper:{flexDirection:'row',alignItems:'center',padding:8},label:{marginRight:32}});var DrawerItem$1 = withTheme(DrawerItem);

var _jsxFileName$h="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Divider.tsx";var Divider=function(_React$Component){inherits(Divider,_React$Component);function Divider(){classCallCheck(this,Divider);return possibleConstructorReturn(this,getPrototypeOf$1(Divider).apply(this,arguments));}createClass(Divider,[{key:"render",value:function render(){var _this$props=this.props,inset=_this$props.inset,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["inset","style","theme"]);var isDarkTheme=theme.dark;return React.createElement(reactNative.View,_extends_1({},rest,{style:[isDarkTheme?styles$b.dark:styles$b.light,inset&&styles$b.inset,style],__source:{fileName:_jsxFileName$h,lineNumber:46}}));}}]);return Divider;}(React.Component);var styles$b=reactNative.StyleSheet.create({light:{backgroundColor:color(black).alpha(0.12).rgb().string(),height:reactNative.StyleSheet.hairlineWidth},dark:{backgroundColor:color(white).alpha(0.12).rgb().string(),height:reactNative.StyleSheet.hairlineWidth},inset:{marginLeft:72}});var Divider$1 = withTheme(Divider);

var _jsxFileName$i="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Drawer/DrawerSection.tsx";var DrawerSection=function(_React$Component){inherits(DrawerSection,_React$Component);function DrawerSection(){classCallCheck(this,DrawerSection);return possibleConstructorReturn(this,getPrototypeOf$1(DrawerSection).apply(this,arguments));}createClass(DrawerSection,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,title=_this$props.title,theme=_this$props.theme,style=_this$props.style,rest=objectWithoutProperties(_this$props,["children","title","theme","style"]);var colors=theme.colors,fonts=theme.fonts;var titleColor=color(colors.text).alpha(0.54).rgb().string();var font=fonts.medium;return React.createElement(reactNative.View,_extends_1({style:[styles$c.container,style]},rest,{__source:{fileName:_jsxFileName$i,lineNumber:72}}),title&&React.createElement(reactNative.View,{style:styles$c.titleContainer,__source:{fileName:_jsxFileName$i,lineNumber:74}},React.createElement(Text$1,{numberOfLines:1,style:objectSpread({color:titleColor},font,{marginLeft:16}),__source:{fileName:_jsxFileName$i,lineNumber:75}},title)),children,React.createElement(Divider$1,{style:styles$c.divider,__source:{fileName:_jsxFileName$i,lineNumber:84}}));}}]);return DrawerSection;}(React.Component);DrawerSection.displayName='Drawer.Section';var styles$c=reactNative.StyleSheet.create({container:{marginBottom:4},titleContainer:{height:40,justifyContent:'center'},divider:{marginTop:4}});var DrawerSection$1 = withTheme(DrawerSection);



var Drawer = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Item: DrawerItem$1,
	Section: DrawerSection$1
});

var _jsxFileName$j="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Badge.tsx";var defaultSize$3=20;var Badge=function(_React$Component){inherits(Badge,_React$Component);function Badge(){var _getPrototypeOf2;var _this;classCallCheck(this,Badge);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Badge)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={opacity:new reactNative.Animated.Value(_this.props.visible?1:0)};return _this;}createClass(Badge,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var visible=this.props.visible;if(visible!==prevProps.visible){reactNative.Animated.timing(this.state.opacity,{toValue:visible?1:0,duration:150,useNativeDriver:true}).start();}}},{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,_this$props$size=_this$props.size,size=_this$props$size===void 0?defaultSize$3:_this$props$size,style=_this$props.style,theme=_this$props.theme;var opacity=this.state.opacity;var _ref=reactNative.StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?theme.colors.notification:_ref$backgroundColor,restStyle=objectWithoutProperties(_ref,["backgroundColor"]);var textColor=color(backgroundColor).isLight()?black:white;var borderRadius=size/2;return React.createElement(reactNative.Animated.Text,{numberOfLines:1,style:[objectSpread({opacity:opacity,backgroundColor:backgroundColor,color:textColor,fontSize:size*0.5},theme.fonts.regular,{lineHeight:size,height:size,minWidth:size,borderRadius:borderRadius}),styles$d.container,restStyle],__source:{fileName:_jsxFileName$j,lineNumber:89}},children);}}]);return Badge;}(React.Component);Badge.defaultProps={visible:true,size:defaultSize$3};var Badge$1 = withTheme(Badge);var styles$d=reactNative.StyleSheet.create({container:{alignSelf:'flex-end',textAlign:'center',textAlignVertical:'center',paddingHorizontal:4,overflow:'hidden'}});

var _jsxFileName$k="/Users/satya/Workspace/Callstack/react-native-paper/src/components/ActivityIndicator.tsx";var DURATION=2400;var ActivityIndicator=function(_React$Component){inherits(ActivityIndicator,_React$Component);function ActivityIndicator(){var _getPrototypeOf2;var _this;classCallCheck(this,ActivityIndicator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(ActivityIndicator)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={timer:new reactNative.Animated.Value(0),fade:new reactNative.Animated.Value(!_this.props.animating&&_this.props.hidesWhenStopped?0:1)};_this.rotation=undefined;_this.startRotation=function(){var _this$state=_this.state,fade=_this$state.fade,timer=_this$state.timer;reactNative.Animated.timing(fade,{duration:200,toValue:1,isInteraction:false,useNativeDriver:true}).start();if(_this.rotation){timer.setValue(0);reactNative.Animated.loop(_this.rotation).start();}};_this.stopRotation=function(){if(_this.rotation){_this.rotation.stop();}};return _this;}createClass(ActivityIndicator,[{key:"componentDidMount",value:function componentDidMount(){var animating=this.props.animating;var timer=this.state.timer;this.rotation=reactNative.Animated.timing(timer,{duration:DURATION,easing:reactNative.Easing.linear,useNativeDriver:reactNative.Platform.OS!=='web',toValue:1,isInteraction:false});if(animating){this.startRotation();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props=this.props,animating=_this$props.animating,hidesWhenStopped=_this$props.hidesWhenStopped;var fade=this.state.fade;if(animating!==prevProps.animating){if(animating){this.startRotation();}else if(hidesWhenStopped){reactNative.Animated.timing(fade,{duration:200,toValue:0,useNativeDriver:true,isInteraction:false}).start(this.stopRotation.bind(this));}else{this.stopRotation();}}}},{key:"render",value:function render(){var _this$state2=this.state,fade=_this$state2.fade,timer=_this$state2.timer;var _this$props2=this.props,animating=_this$props2.animating,indicatorColor=_this$props2.color,hidesWhenStopped=_this$props2.hidesWhenStopped,indicatorSize=_this$props2.size,style=_this$props2.style,theme=_this$props2.theme,rest=objectWithoutProperties(_this$props2,["animating","color","hidesWhenStopped","size","style","theme"]);var color=indicatorColor||theme.colors.primary;var size=typeof indicatorSize==='string'?indicatorSize==='small'?24:48:indicatorSize?indicatorSize:24;var frames=60*DURATION/1000;var easing=reactNative.Easing.bezier(0.4,0.0,0.7,1.0);var containerStyle={width:size,height:size/2,overflow:'hidden'};return React.createElement(reactNative.View,_extends_1({style:[styles$e.container,style]},rest,{__source:{fileName:_jsxFileName$k,lineNumber:178}}),React.createElement(reactNative.Animated.View,{style:[{width:size,height:size,opacity:fade}],__source:{fileName:_jsxFileName$k,lineNumber:179}},[0,1].map(function(index){var inputRange=Array.from(new Array(frames),function(_,frameIndex){return frameIndex/(frames-1);});var outputRange=Array.from(new Array(frames),function(_,frameIndex){var progress=2*frameIndex/(frames-1);var rotation=index?+(360-15):-(180-15);if(progress>1.0){progress=2.0-progress;}var direction=index?-1:+1;return direction*(180-30)*easing(progress)+rotation+"deg";});var layerStyle={width:size,height:size,transform:[{rotate:timer.interpolate({inputRange:[0,1],outputRange:[0+30+15+"deg",2*360+30+15+"deg"]})}]};var viewportStyle={width:size,height:size,transform:[{translateY:index?-size/2:0},{rotate:timer.interpolate({inputRange:inputRange,outputRange:outputRange})}]};var offsetStyle=index?{top:size/2}:null;var lineStyle={width:size,height:size,borderColor:color,borderWidth:size/10,borderRadius:size/2};return React.createElement(reactNative.Animated.View,{key:index,style:[styles$e.layer],__source:{fileName:_jsxFileName$k,lineNumber:243}},React.createElement(reactNative.Animated.View,{style:layerStyle,__source:{fileName:_jsxFileName$k,lineNumber:244}},React.createElement(reactNative.Animated.View,{style:[containerStyle,offsetStyle],collapsable:false,__source:{fileName:_jsxFileName$k,lineNumber:245}},React.createElement(reactNative.Animated.View,{style:viewportStyle,__source:{fileName:_jsxFileName$k,lineNumber:249}},React.createElement(reactNative.Animated.View,{style:containerStyle,collapsable:false,__source:{fileName:_jsxFileName$k,lineNumber:250}},React.createElement(reactNative.Animated.View,{style:lineStyle,__source:{fileName:_jsxFileName$k,lineNumber:251}}))))));})));}}]);return ActivityIndicator;}(React.Component);ActivityIndicator.defaultProps={animating:true,size:'small',hidesWhenStopped:true};var styles$e=reactNative.StyleSheet.create({container:{justifyContent:'center',alignItems:'center'},layer:objectSpread({},reactNative.StyleSheet.absoluteFillObject,{justifyContent:'center',alignItems:'center'})});var ActivityIndicator$1 = withTheme(ActivityIndicator);

var _jsxFileName$l="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Surface.tsx";var Surface=function(_React$Component){inherits(Surface,_React$Component);function Surface(){classCallCheck(this,Surface);return possibleConstructorReturn(this,getPrototypeOf$1(Surface).apply(this,arguments));}createClass(Surface,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["style","theme"]);var flattenedStyles=reactNative.StyleSheet.flatten(style)||{};var _flattenedStyles$elev=flattenedStyles.elevation,elevation=_flattenedStyles$elev===void 0?4:_flattenedStyles$elev;var isDarkTheme=theme.dark,mode=theme.mode,colors=theme.colors;return React.createElement(reactNative.Animated.View,_extends_1({},rest,{style:[{backgroundColor:isDarkTheme&&mode==='adaptive'?overlay(elevation,colors.surface):colors.surface},elevation&&shadow(elevation),style],__source:{fileName:_jsxFileName$l,lineNumber:70}}));}}]);return Surface;}(React.Component);var Surface$1 = withTheme(Surface);

var _jsxFileName$m="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Button.tsx";var Button=function(_React$Component){inherits(Button,_React$Component);function Button(){var _getPrototypeOf2;var _this;classCallCheck(this,Button);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Button)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={elevation:new reactNative.Animated.Value(_this.props.mode==='contained'?2:0)};_this.handlePressIn=function(){if(_this.props.mode==='contained'){reactNative.Animated.timing(_this.state.elevation,{toValue:8,duration:200}).start();}};_this.handlePressOut=function(){if(_this.props.mode==='contained'){reactNative.Animated.timing(_this.state.elevation,{toValue:2,duration:150}).start();}};return _this;}createClass(Button,[{key:"render",value:function render(){var _this$props=this.props,disabled=_this$props.disabled,compact=_this$props.compact,mode=_this$props.mode,dark=_this$props.dark,loading=_this$props.loading,icon=_this$props.icon,buttonColor=_this$props.color,children=_this$props.children,uppercase=_this$props.uppercase,accessibilityLabel=_this$props.accessibilityLabel,onPress=_this$props.onPress,style=_this$props.style,theme=_this$props.theme,contentStyle=_this$props.contentStyle,labelStyle=_this$props.labelStyle,rest=objectWithoutProperties(_this$props,["disabled","compact","mode","dark","loading","icon","color","children","uppercase","accessibilityLabel","onPress","style","theme","contentStyle","labelStyle"]);var colors=theme.colors,roundness=theme.roundness;var font=theme.fonts.medium;var backgroundColor,borderColor,textColor,borderWidth;if(mode==='contained'){if(disabled){backgroundColor=color(theme.dark?white:black).alpha(0.12).rgb().string();}else if(buttonColor){backgroundColor=buttonColor;}else{backgroundColor=colors.primary;}}else{backgroundColor='transparent';}if(mode==='outlined'){borderColor=color(theme.dark?white:black).alpha(0.29).rgb().string();borderWidth=reactNative.StyleSheet.hairlineWidth;}else{borderColor='transparent';borderWidth=0;}if(disabled){textColor=color(theme.dark?white:black).alpha(0.32).rgb().string();}else if(mode==='contained'){var isDark;if(typeof dark==='boolean'){isDark=dark;}else{isDark=backgroundColor==='transparent'?false:!color(backgroundColor).isLight();}textColor=isDark?white:black;}else if(buttonColor){textColor=buttonColor;}else{textColor=colors.primary;}var rippleColor=color(textColor).alpha(0.32).rgb().string();var buttonStyle={backgroundColor:backgroundColor,borderColor:borderColor,borderWidth:borderWidth,borderRadius:roundness};var touchableStyle={borderRadius:style?reactNative.StyleSheet.flatten(style).borderRadius||roundness:roundness};var textStyle=objectSpread({color:textColor},font);var elevation=disabled||mode!=='contained'?0:this.state.elevation;return React.createElement(Surface$1,_extends_1({},rest,{style:[styles$f.button,compact&&styles$f.compact,{elevation:elevation},buttonStyle,style],__source:{fileName:_jsxFileName$m,lineNumber:244}}),React.createElement(TouchableRipple$1,{borderless:true,delayPressIn:0,onPress:onPress,onPressIn:this.handlePressIn,onPressOut:this.handlePressOut,accessibilityLabel:accessibilityLabel,accessibilityTraits:disabled?['button','disabled']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:disabled?['disabled']:[],disabled:disabled,rippleColor:rippleColor,style:touchableStyle,__source:{fileName:_jsxFileName$m,lineNumber:254}},React.createElement(reactNative.View,{style:[styles$f.content,contentStyle],__source:{fileName:_jsxFileName$m,lineNumber:269}},icon&&loading!==true?React.createElement(reactNative.View,{style:styles$f.icon,__source:{fileName:_jsxFileName$m,lineNumber:271}},React.createElement(Icon$1,{source:icon,size:16,color:textColor,__source:{fileName:_jsxFileName$m,lineNumber:272}})):null,loading?React.createElement(ActivityIndicator$1,{size:16,color:textColor,style:styles$f.icon,__source:{fileName:_jsxFileName$m,lineNumber:276}}):null,React.createElement(Text$1,{numberOfLines:1,style:[styles$f.label,compact&&styles$f.compactLabel,uppercase&&styles$f.uppercaseLabel,textStyle,font,labelStyle],__source:{fileName:_jsxFileName$m,lineNumber:282}},children))));}}]);return Button;}(React.Component);Button.defaultProps={mode:'text',uppercase:true};var styles$f=reactNative.StyleSheet.create({button:{minWidth:64,borderStyle:'solid'},compact:{minWidth:'auto'},content:{flexDirection:'row',alignItems:'center',justifyContent:'center'},icon:{width:16,marginLeft:12,marginRight:-4},label:{textAlign:'center',letterSpacing:1,marginVertical:9,marginHorizontal:16},compactLabel:{marginHorizontal:8},uppercaseLabel:{textTransform:'uppercase'}});var Button$1 = withTheme(Button);

var _jsxFileName$n="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Banner.tsx";var ELEVATION=1;var DEFAULT_MAX_WIDTH=960;var Banner=function(_React$Component){inherits(Banner,_React$Component);function Banner(){var _getPrototypeOf2;var _this;classCallCheck(this,Banner);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Banner)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={position:new reactNative.Animated.Value(_this.props.visible?1:0),layout:{height:0,measured:false}};_this.handleLayout=function(_ref){var nativeEvent=_ref.nativeEvent;var height=nativeEvent.layout.height;_this.setState({layout:{height:height,measured:true}});};_this.toggle=function(){if(_this.props.visible){_this.show();}else{_this.hide();}};_this.show=function(){reactNative.Animated.timing(_this.state.position,{duration:250,toValue:1}).start();};_this.hide=function(){reactNative.Animated.timing(_this.state.position,{duration:200,toValue:0}).start();};return _this;}createClass(Banner,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.visible!==this.props.visible){this.toggle();}}},{key:"render",value:function render(){var _this$props=this.props,visible=_this$props.visible,icon=_this$props.icon,children=_this$props.children,actions=_this$props.actions,contentStyle=_this$props.contentStyle,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["visible","icon","children","actions","contentStyle","style","theme"]);var _this$state=this.state,position=_this$state.position,layout=_this$state.layout;var height=reactNative.Animated.multiply(position,layout.height);var translateY=reactNative.Animated.multiply(reactNative.Animated.add(position,-1),layout.height);return React.createElement(Surface$1,_extends_1({},rest,{style:[styles$g.container,shadow(ELEVATION),style],__source:{fileName:_jsxFileName$n,lineNumber:191}}),React.createElement(reactNative.View,{style:[styles$g.wrapper,contentStyle],__source:{fileName:_jsxFileName$n,lineNumber:195}},React.createElement(reactNative.Animated.View,{style:{height:height},__source:{fileName:_jsxFileName$n,lineNumber:196}}),React.createElement(reactNative.Animated.View,{onLayout:this.handleLayout,style:[layout.measured||!visible?[styles$g.absolute,{transform:[{translateY:translateY}]}]:null,!layout.measured&&!visible?{opacity:0}:null],__source:{fileName:_jsxFileName$n,lineNumber:197}},React.createElement(reactNative.View,{style:styles$g.content,__source:{fileName:_jsxFileName$n,lineNumber:213}},icon?React.createElement(reactNative.View,{style:styles$g.icon,__source:{fileName:_jsxFileName$n,lineNumber:215}},React.createElement(Icon$1,{source:icon,size:40,__source:{fileName:_jsxFileName$n,lineNumber:218}})):null,React.createElement(Text$1,{style:styles$g.message,__source:{fileName:_jsxFileName$n,lineNumber:221}},children)),React.createElement(reactNative.View,{style:styles$g.actions,__source:{fileName:_jsxFileName$n,lineNumber:223}},actions.map(function(_ref2,i){var label=_ref2.label,others=objectWithoutProperties(_ref2,["label"]);return React.createElement(Button$1,_extends_1({key:i,compact:true,mode:"text",style:styles$g.button},others,{__source:{fileName:_jsxFileName$n,lineNumber:225}}),label);})))));}}]);return Banner;}(React.Component);var styles$g=reactNative.StyleSheet.create({container:{elevation:ELEVATION},wrapper:{overflow:'hidden',alignSelf:'center',width:'100%',maxWidth:DEFAULT_MAX_WIDTH},absolute:{position:'absolute',top:0,width:'100%'},content:{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:8,marginTop:16,marginBottom:0},icon:{margin:8},message:{flex:1,margin:8},actions:{flexDirection:'row',justifyContent:'flex-end',margin:4},button:{margin:4}});var Banner$1 = withTheme(Banner);

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

var defineProperty$2 = Object.defineProperty;
var getOwnPropertyNames$1 = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var getPrototypeOf$2 = Object.getPrototypeOf;
var objectPrototype$1 = getPrototypeOf$2 && getPrototypeOf$2(Object);

function hoistNonReactStatics$1(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype$1) {
            var inheritedComponent = getPrototypeOf$2(sourceComponent);
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
                    defineProperty$2(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs$1 = hoistNonReactStatics$1;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const isOrientationLandscape = ({
  width,
  height
}) => width > height;
function withOrientation (WrappedComponent) {
  class withOrientation extends React.Component {
    constructor() {
      super();

      _defineProperty$1(this, "handleOrientationChange", ({
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

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty$2(this, "state", {
      touchesTop: true,
      touchesBottom: true,
      touchesLeft: true,
      touchesRight: true,
      orientation: null,
      viewWidth: 0,
      viewHeight: 0
    });

    _defineProperty$2(this, "_onLayout", (...args) => {
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

    _defineProperty$2(this, "_getSafeAreaStyle", () => {
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

    _defineProperty$2(this, "_getViewStyles", () => {
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

    _defineProperty$2(this, "_getInset", key => {
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

_defineProperty$2(SafeView, "setStatusBarHeight", height => {
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

var _jsxFileName$o="/Users/satya/Workspace/Callstack/react-native-paper/src/components/BottomNavigation.tsx";var MIN_RIPPLE_SCALE=0.001;var MIN_TAB_WIDTH=96;var MAX_TAB_WIDTH=168;var BAR_HEIGHT=56;var FAR_FAR_AWAY=9999;var Touchable=TouchableRipple$1.supported?TouchableRipple$1:function(_ref){var style=_ref.style,children=_ref.children,borderless=_ref.borderless,centered=_ref.centered,rippleColor=_ref.rippleColor,rest=objectWithoutProperties(_ref,["style","children","borderless","centered","rippleColor"]);return React.createElement(reactNative.TouchableWithoutFeedback,_extends_1({},rest,{__source:{fileName:_jsxFileName$o,lineNumber:266}}),React.createElement(reactNative.View,{style:style,__source:{fileName:_jsxFileName$o,lineNumber:267}},children));};var SceneComponent=function(_React$PureComponent){inherits(SceneComponent,_React$PureComponent);function SceneComponent(){classCallCheck(this,SceneComponent);return possibleConstructorReturn(this,getPrototypeOf$1(SceneComponent).apply(this,arguments));}createClass(SceneComponent,[{key:"render",value:function render(){var _this$props=this.props,component=_this$props.component,rest=objectWithoutProperties(_this$props,["component"]);return React.createElement(component,rest);}}]);return SceneComponent;}(React.PureComponent);var BottomNavigation=function(_React$Component){inherits(BottomNavigation,_React$Component);createClass(BottomNavigation,null,[{key:"SceneMap",value:function SceneMap(scenes){return function(_ref2){var route=_ref2.route,jumpTo=_ref2.jumpTo;return React.createElement(SceneComponent,{key:route.key,component:scenes[route.key?route.key:''],route:route,jumpTo:jumpTo,__source:{fileName:_jsxFileName$o,lineNumber:351}});};}},{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(nextProps,prevState){var _nextProps$navigation=nextProps.navigationState,index=_nextProps$navigation.index,routes=_nextProps$navigation.routes;var tabs=routes.map(function(_,i){return prevState.tabs[i]||new reactNative.Animated.Value(i===index?1:0);});var offsets=routes.map(function(_,i){return prevState.offsets[i]||new reactNative.Animated.Value(i===index?0:1);});var nextState={tabs:tabs,offsets:offsets};if(index!==prevState.current){_extends_1(nextState,{current:index,previous:prevState.current,loaded:prevState.loaded.includes(index)?prevState.loaded:[].concat(toConsumableArray(prevState.loaded),[index])});}return nextState;}}]);function BottomNavigation(props){var _this;classCallCheck(this,BottomNavigation);_this=possibleConstructorReturn(this,getPrototypeOf$1(BottomNavigation).call(this,props));_this.handleKeyboardShow=function(){return _this.setState({keyboard:true},function(){return reactNative.Animated.timing(_this.state.visible,{toValue:0,duration:150,useNativeDriver:true}).start();});};_this.handleKeyboardHide=function(){return reactNative.Animated.timing(_this.state.visible,{toValue:1,duration:100,useNativeDriver:true}).start(function(){_this.setState({keyboard:false});});};_this.animateToCurrentIndex=function(){var shifting=_this.isShifting();var _this$props2=_this.props,sceneAnimationEnabled=_this$props2.sceneAnimationEnabled,navigationState=_this$props2.navigationState;var routes=navigationState.routes,index=navigationState.index;_this.state.ripple.setValue(MIN_RIPPLE_SCALE);reactNative.Animated.parallel([reactNative.Animated.timing(_this.state.ripple,{toValue:1,duration:shifting?400:0,useNativeDriver:true})].concat(toConsumableArray(routes.map(function(_,i){return reactNative.Animated.timing(_this.state.tabs[i],{toValue:i===index?1:0,duration:shifting&&sceneAnimationEnabled!==false?150:0,useNativeDriver:true});})))).start(function(_ref3){var finished=_ref3.finished;_this.state.tabs.map(function(tab,i){return tab.setValue(i===index?1:0);});_this.state.index.setValue(index);_this.state.ripple.setValue(MIN_RIPPLE_SCALE);if(finished){_this.state.offsets.forEach(function(offset,i){if(i===index){offset.setValue(0);}else{offset.setValue(1);}});}});};_this.handleLayout=function(e){var layout=_this.state.layout;var _e$nativeEvent$layout=e.nativeEvent.layout,height=_e$nativeEvent$layout.height,width=_e$nativeEvent$layout.width;if(height===layout.height&&width===layout.width){return;}_this.setState({layout:{height:height,width:width,measured:true}});};_this.handleTabPress=function(index){var _this$props3=_this.props,navigationState=_this$props3.navigationState,onTabPress=_this$props3.onTabPress,onIndexChange=_this$props3.onIndexChange;if(onTabPress){onTabPress({route:navigationState.routes[index]});}if(index!==navigationState.index){onIndexChange(index);}};_this.jumpTo=function(key){var index=_this.props.navigationState.routes.findIndex(function(route){return route.key===key;});_this.props.onIndexChange(index);};_this.isShifting=function(){return typeof _this.props.shifting==='boolean'?_this.props.shifting:_this.props.navigationState.routes.length>3;};var _index=_this.props.navigationState.index;_this.state={visible:new reactNative.Animated.Value(1),tabs:[],offsets:[],index:new reactNative.Animated.Value(_index),ripple:new reactNative.Animated.Value(MIN_RIPPLE_SCALE),touch:new reactNative.Animated.Value(MIN_RIPPLE_SCALE),layout:{height:0,width:0,measured:false},current:_index,previous:0,loaded:[_index],keyboard:false};return _this;}createClass(BottomNavigation,[{key:"componentDidMount",value:function componentDidMount(){this.animateToCurrentIndex();if(reactNative.Platform.OS==='ios'){reactNative.Keyboard.addListener('keyboardWillShow',this.handleKeyboardShow);reactNative.Keyboard.addListener('keyboardWillHide',this.handleKeyboardHide);}else{reactNative.Keyboard.addListener('keyboardDidShow',this.handleKeyboardShow);reactNative.Keyboard.addListener('keyboardDidHide',this.handleKeyboardHide);}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this2=this;if(prevProps.navigationState.index===this.props.navigationState.index){return;}this.state.offsets.forEach(function(offset,i){if(i===_this2.props.navigationState.index||i===prevProps.navigationState.index){offset.setValue(0);}});this.animateToCurrentIndex();}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(reactNative.Platform.OS==='ios'){reactNative.Keyboard.removeListener('keyboardWillShow',this.handleKeyboardShow);reactNative.Keyboard.removeListener('keyboardWillHide',this.handleKeyboardHide);}else{reactNative.Keyboard.removeListener('keyboardDidShow',this.handleKeyboardShow);reactNative.Keyboard.removeListener('keyboardDidHide',this.handleKeyboardHide);}}},{key:"render",value:function render(){var _this3=this;var _this$props4=this.props,navigationState=_this$props4.navigationState,renderScene=_this$props4.renderScene,renderIcon=_this$props4.renderIcon,renderLabel=_this$props4.renderLabel,_this$props4$getLabel=_this$props4.getLabelText,getLabelText=_this$props4$getLabel===void 0?function(_ref4){var route=_ref4.route;return route.title;}:_this$props4$getLabel,_this$props4$getBadge=_this$props4.getBadge,getBadge=_this$props4$getBadge===void 0?function(_ref5){var route=_ref5.route;return route.badge;}:_this$props4$getBadge,_this$props4$getColor=_this$props4.getColor,getColor=_this$props4$getColor===void 0?function(_ref6){var route=_ref6.route;return route.color;}:_this$props4$getColor,_this$props4$getAcces=_this$props4.getAccessibilityLabel,getAccessibilityLabel=_this$props4$getAcces===void 0?function(_ref7){var route=_ref7.route;return route.accessibilityLabel;}:_this$props4$getAcces,_this$props4$getTestI=_this$props4.getTestID,getTestID=_this$props4$getTestI===void 0?function(_ref8){var route=_ref8.route;return route.testID;}:_this$props4$getTestI,activeColor=_this$props4.activeColor,inactiveColor=_this$props4.inactiveColor,keyboardHidesNavigationBar=_this$props4.keyboardHidesNavigationBar,barStyle=_this$props4.barStyle,labeled=_this$props4.labeled,style=_this$props4.style,theme=_this$props4.theme;var _this$state=this.state,layout=_this$state.layout,loaded=_this$state.loaded,index=_this$state.index,visible=_this$state.visible,ripple=_this$state.ripple,keyboard=_this$state.keyboard,tabs=_this$state.tabs,offsets=_this$state.offsets;var routes=navigationState.routes;var colors=theme.colors,isDarkTheme=theme.dark,mode=theme.mode;var shifting=this.isShifting();var _ref9=reactNative.StyleSheet.flatten(barStyle)||{},customBackground=_ref9.backgroundColor,_ref9$elevation=_ref9.elevation,elevation=_ref9$elevation===void 0?4:_ref9$elevation;var approxBackgroundColor=customBackground?customBackground:isDarkTheme&&mode==='adaptive'?overlay(elevation,colors.surface):colors.primary;var backgroundColor=shifting?index.interpolate({inputRange:routes.map(function(_,i){return i;}),outputRange:routes.map(function(route){return getColor({route:route})||approxBackgroundColor;})}):approxBackgroundColor;var isDark=!color(approxBackgroundColor).isLight();var textColor=isDark?white:black;var activeTintColor=typeof activeColor!=='undefined'?activeColor:textColor;var inactiveTintColor=typeof inactiveColor!=='undefined'?inactiveColor:color(textColor).alpha(0.5).rgb().string();var touchColor=color(activeColor||activeTintColor).alpha(0.12).rgb().string();var maxTabWidth=routes.length>3?MIN_TAB_WIDTH:MAX_TAB_WIDTH;var maxTabBarWidth=maxTabWidth*routes.length;var tabBarWidth=Math.min(layout.width,maxTabBarWidth);var tabWidth=tabBarWidth/routes.length;var rippleSize=layout.width/4;return React.createElement(reactNative.View,{style:[styles$h.container,style],__source:{fileName:_jsxFileName$o,lineNumber:651}},React.createElement(reactNative.View,{style:[styles$h.content,{backgroundColor:colors.background}],__source:{fileName:_jsxFileName$o,lineNumber:652}},routes.map(function(route,index){if(!loaded.includes(index)){return null;}var opacity=tabs[index];var top=offsets[index].interpolate({inputRange:[0,1],outputRange:[0,FAR_FAR_AWAY]});var focused=navigationState.index===index;return React.createElement(reactNative.Animated.View,{key:route.key,pointerEvents:focused?'auto':'none',accessibilityElementsHidden:!focused,importantForAccessibility:focused?'auto':'no-hide-descendants',style:[reactNative.StyleSheet.absoluteFill,{opacity:opacity}],collapsable:false,removeClippedSubviews:reactNative.Platform.OS==='ios'?navigationState.index!==index:true,__source:{fileName:_jsxFileName$o,lineNumber:668}},React.createElement(reactNative.Animated.View,{style:[styles$h.content,{top:top}],__source:{fileName:_jsxFileName$o,lineNumber:683}},renderScene({route:route,jumpTo:_this3.jumpTo})));})),React.createElement(Surface$1,{style:[styles$h.bar,keyboardHidesNavigationBar?{transform:[{translateY:visible.interpolate({inputRange:[0,1],outputRange:[layout.height,0]})}],position:keyboard?'absolute':null}:null,barStyle],pointerEvents:layout.measured?keyboardHidesNavigationBar&&keyboard?'none':'auto':'none',onLayout:this.handleLayout,__source:{fileName:_jsxFileName$o,lineNumber:693}},React.createElement(reactNative.Animated.View,{style:[styles$h.barContent,{backgroundColor:backgroundColor}],__source:{fileName:_jsxFileName$o,lineNumber:725}},React.createElement(SafeAreaView,{forceInset:{top:'never',bottom:'always'},style:[styles$h.items,{maxWidth:maxTabBarWidth}],__source:{fileName:_jsxFileName$o,lineNumber:726}},shifting?React.createElement(reactNative.Animated.View,{pointerEvents:"none",style:[styles$h.ripple,{top:(BAR_HEIGHT-rippleSize)/2,left:tabWidth*(navigationState.index+0.5)-rippleSize/2,height:rippleSize,width:rippleSize,borderRadius:rippleSize/2,backgroundColor:getColor({route:routes[navigationState.index]}),transform:[{scale:ripple.interpolate({inputRange:[0,1],outputRange:[0,8]})}],opacity:ripple.interpolate({inputRange:[0,MIN_RIPPLE_SCALE,0.3,1],outputRange:[0,0,1,1]})}],__source:{fileName:_jsxFileName$o,lineNumber:731}}):null,routes.map(function(route,index){var focused=navigationState.index===index;var active=tabs[index];var scale=labeled&&shifting?active.interpolate({inputRange:[0,1],outputRange:[0.5,1]}):1;var translateY=labeled?shifting?active.interpolate({inputRange:[0,1],outputRange:[7,0]}):0:7;var activeOpacity=active;var inactiveOpacity=active.interpolate({inputRange:[0,1],outputRange:[1,0]});var badge=getBadge({route:route});return React.createElement(Touchable,{key:route.key,borderless:true,centered:true,rippleColor:touchColor,onPress:function onPress(){return _this3.handleTabPress(index);},testID:getTestID({route:route}),accessibilityLabel:getAccessibilityLabel({route:route}),accessibilityTraits:focused?['button','selected']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:['selected'],style:styles$h.item,__source:{fileName:_jsxFileName$o,lineNumber:800}},React.createElement(reactNative.View,{pointerEvents:"none",__source:{fileName:_jsxFileName$o,lineNumber:816}},React.createElement(reactNative.Animated.View,{style:[styles$h.iconContainer,{transform:[{translateY:translateY}]}],__source:{fileName:_jsxFileName$o,lineNumber:817}},React.createElement(reactNative.Animated.View,{style:[styles$h.iconWrapper,{opacity:activeOpacity}],__source:{fileName:_jsxFileName$o,lineNumber:823}},renderIcon?renderIcon({route:route,focused:true,color:activeTintColor}):React.createElement(Icon$1,{source:route.icon,color:activeTintColor,size:24,__source:{fileName:_jsxFileName$o,lineNumber:836}})),React.createElement(reactNative.Animated.View,{style:[styles$h.iconWrapper,{opacity:inactiveOpacity}],__source:{fileName:_jsxFileName$o,lineNumber:843}},renderIcon?renderIcon({route:route,focused:false,color:inactiveTintColor}):React.createElement(Icon$1,{source:route.icon,color:inactiveTintColor,size:24,__source:{fileName:_jsxFileName$o,lineNumber:856}})),React.createElement(reactNative.View,{style:[styles$h.badgeContainer,{right:(badge!=null&&typeof badge!=='boolean'?String(badge).length*-2:0)-2}],__source:{fileName:_jsxFileName$o,lineNumber:863}},typeof badge==='boolean'?React.createElement(Badge$1,{visible:badge,size:8,__source:{fileName:_jsxFileName$o,lineNumber:875}}):React.createElement(Badge$1,{visible:badge!=null,size:16,__source:{fileName:_jsxFileName$o,lineNumber:877}},badge))),labeled?React.createElement(reactNative.Animated.View,{style:[styles$h.labelContainer,{transform:[{scale:scale}]}],__source:{fileName:_jsxFileName$o,lineNumber:884}},React.createElement(reactNative.Animated.View,{style:[styles$h.labelWrapper,{opacity:activeOpacity}],__source:{fileName:_jsxFileName$o,lineNumber:890}},renderLabel?renderLabel({route:route,focused:true,color:activeTintColor}):React.createElement(Text$1,{style:[styles$h.label,{color:activeTintColor}],__source:{fileName:_jsxFileName$o,lineNumber:903}},getLabelText({route:route}))),shifting?null:React.createElement(reactNative.Animated.View,{style:[styles$h.labelWrapper,{opacity:inactiveOpacity}],__source:{fileName:_jsxFileName$o,lineNumber:914}},renderLabel?renderLabel({route:route,focused:false,color:inactiveTintColor}):React.createElement(Text$1,{style:[styles$h.label,{color:inactiveTintColor}],__source:{fileName:_jsxFileName$o,lineNumber:927}},getLabelText({route:route})))):React.createElement(reactNative.View,{style:styles$h.labelContainer,__source:{fileName:_jsxFileName$o,lineNumber:940}})));})))));}}]);return BottomNavigation;}(React.Component);BottomNavigation.defaultProps={labeled:true,keyboardHidesNavigationBar:true};var BottomNavigation$1 = withTheme(BottomNavigation);var styles$h=reactNative.StyleSheet.create({container:{flex:1,overflow:'hidden'},content:{flex:1},bar:{left:0,right:0,bottom:0,elevation:4},barContent:{alignItems:'center',overflow:'hidden'},items:{flexDirection:'row',width:'100%'},item:{flex:1,paddingVertical:6},ripple:{position:'absolute'},iconContainer:{height:24,width:24,marginTop:2,marginHorizontal:12,alignSelf:'center'},iconWrapper:objectSpread({},reactNative.StyleSheet.absoluteFillObject,{alignItems:'center'}),labelContainer:{height:16,paddingBottom:2},labelWrapper:objectSpread({},reactNative.StyleSheet.absoluteFillObject),label:objectSpread({fontSize:12,textAlign:'center',backgroundColor:'transparent'},reactNative.Platform.OS==='web'?{whiteSpace:'nowrap'}:null),badgeContainer:{position:'absolute',left:0,top:-2}});

var _jsxFileName$p="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Card/CardContent.tsx";var CardContent=function(_React$Component){inherits(CardContent,_React$Component);function CardContent(){classCallCheck(this,CardContent);return possibleConstructorReturn(this,getPrototypeOf$1(CardContent).apply(this,arguments));}createClass(CardContent,[{key:"render",value:function render(){var _this$props=this.props,index=_this$props.index,total=_this$props.total,siblings=_this$props.siblings,style=_this$props.style,rest=objectWithoutProperties(_this$props,["index","total","siblings","style"]);var cover='withTheme(CardCover)';var title='withTheme(CardTitle)';var contentStyle,prev,next;if(typeof index==='number'&&siblings){prev=siblings[index-1];next=siblings[index+1];}if(prev===cover&&next===cover||prev===title&&next===title||total===1){contentStyle=styles$i.only;}else if(index===0){if(next===cover||next===title){contentStyle=styles$i.only;}else{contentStyle=styles$i.first;}}else if(typeof total==='number'&&index===total-1){if(prev===cover||prev===title){contentStyle=styles$i.only;}else{contentStyle=styles$i.last;}}else if(prev===cover||prev===title){contentStyle=styles$i.first;}else if(next===cover||next===title){contentStyle=styles$i.last;}return React.createElement(reactNative.View,_extends_1({},rest,{style:[styles$i.container,contentStyle,style],__source:{fileName:_jsxFileName$p,lineNumber:83}}));}}]);return CardContent;}(React.Component);CardContent.displayName='Card.Content';var styles$i=reactNative.StyleSheet.create({container:{paddingHorizontal:16},first:{paddingTop:16},last:{paddingBottom:16},only:{paddingVertical:16}});

var _jsxFileName$q="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Card/CardActions.tsx";var CardActions=function(_React$Component){inherits(CardActions,_React$Component);function CardActions(){classCallCheck(this,CardActions);return possibleConstructorReturn(this,getPrototypeOf$1(CardActions).apply(this,arguments));}createClass(CardActions,[{key:"render",value:function render(){return React.createElement(reactNative.View,_extends_1({},this.props,{style:[styles$j.container,this.props.style],__source:{fileName:_jsxFileName$q,lineNumber:37}}),React.Children.map(this.props.children,function(child){return React.isValidElement(child)?React.cloneElement(child,{compact:child.props.compact!==false}):child;}));}}]);return CardActions;}(React.Component);CardActions.displayName='Card.Actions';var styles$j=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',padding:8}});

var _jsxFileName$r="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Card/CardCover.tsx";var CardCover=function(_React$Component){inherits(CardCover,_React$Component);function CardCover(){classCallCheck(this,CardCover);return possibleConstructorReturn(this,getPrototypeOf$1(CardCover).apply(this,arguments));}createClass(CardCover,[{key:"render",value:function render(){var _this$props=this.props,index=_this$props.index,total=_this$props.total,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["index","total","style","theme"]);var roundness=theme.roundness;var coverStyle;if(index===0){if(total===1){coverStyle={borderRadius:roundness};}else{coverStyle={borderTopLeftRadius:roundness,borderTopRightRadius:roundness};}}else if(typeof total==='number'&&index===total-1){coverStyle={borderBottomLeftRadius:roundness};}return React.createElement(reactNative.View,{style:[styles$k.container,coverStyle,style],__source:{fileName:_jsxFileName$r,lineNumber:69}},React.createElement(reactNative.Image,_extends_1({},rest,{style:[styles$k.image,coverStyle],__source:{fileName:_jsxFileName$r,lineNumber:70}})));}}]);return CardCover;}(React.Component);CardCover.displayName='Card.Cover';var styles$k=reactNative.StyleSheet.create({container:{height:195,backgroundColor:grey200,overflow:'hidden'},image:{flex:1,height:undefined,width:undefined,padding:16,justifyContent:'flex-end',resizeMode:'cover'}});var CardCover$1 = withTheme(CardCover);

var _jsxFileName$s="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Typography/StyledText.tsx";var StyledText=function(_React$Component){inherits(StyledText,_React$Component);function StyledText(){classCallCheck(this,StyledText);return possibleConstructorReturn(this,getPrototypeOf$1(StyledText).apply(this,arguments));}createClass(StyledText,[{key:"render",value:function render(){var _this$props=this.props,theme=_this$props.theme,alpha=_this$props.alpha,family=_this$props.family,style=_this$props.style,rest=objectWithoutProperties(_this$props,["theme","alpha","family","style"]);var textColor=color(theme.colors.text).alpha(alpha).rgb().string();var font=theme.fonts[family];var writingDirection=reactNative.I18nManager.isRTL?'rtl':'ltr';return React.createElement(Text$1,_extends_1({},rest,{style:[objectSpread({color:textColor},font,{textAlign:'left',writingDirection:writingDirection}),style,this.props.style],__source:{fileName:_jsxFileName$s,lineNumber:27}}));}}]);return StyledText;}(React.Component);var StyledText$1 = withTheme(StyledText);

var _jsxFileName$t="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Typography/Caption.tsx";var Caption=function Caption(props){return React.createElement(StyledText$1,_extends_1({},props,{alpha:0.54,family:"regular",style:[styles$l.text,props.style],__source:{fileName:_jsxFileName$t,lineNumber:32}}));};var styles$l=reactNative.StyleSheet.create({text:{fontSize:12,lineHeight:20,marginVertical:2,letterSpacing:0.4}});

var _jsxFileName$u="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Typography/Title.tsx";var Title=function Title(props){return React.createElement(StyledText$1,_extends_1({},props,{alpha:0.87,family:"medium",style:[styles$m.text,props.style],__source:{fileName:_jsxFileName$u,lineNumber:31}}));};var styles$m=reactNative.StyleSheet.create({text:{fontSize:20,lineHeight:30,marginVertical:2,letterSpacing:0.15}});

var _jsxFileName$v="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Card/CardTitle.tsx";var LEFT_SIZE=40;var CardTitle=function(_React$Component){inherits(CardTitle,_React$Component);function CardTitle(){classCallCheck(this,CardTitle);return possibleConstructorReturn(this,getPrototypeOf$1(CardTitle).apply(this,arguments));}createClass(CardTitle,[{key:"render",value:function render(){var _this$props=this.props,left=_this$props.left,leftStyle=_this$props.leftStyle,right=_this$props.right,rightStyle=_this$props.rightStyle,subtitle=_this$props.subtitle,subtitleStyle=_this$props.subtitleStyle,style=_this$props.style,title=_this$props.title,titleStyle=_this$props.titleStyle;return React.createElement(reactNative.View,{style:[styles$n.container,{height:subtitle||left||right?72:50},style],__source:{fileName:_jsxFileName$v,lineNumber:106}},left?React.createElement(reactNative.View,{style:[styles$n.left,leftStyle],__source:{fileName:_jsxFileName$v,lineNumber:114}},left({size:LEFT_SIZE})):null,React.createElement(reactNative.View,{style:[styles$n.titles],__source:{fileName:_jsxFileName$v,lineNumber:121}},title?React.createElement(Title,{style:[styles$n.title,{marginBottom:subtitle?0:2},titleStyle],numberOfLines:1,__source:{fileName:_jsxFileName$v,lineNumber:123}},title):null,subtitle?React.createElement(Caption,{style:[styles$n.subtitle,subtitleStyle],numberOfLines:1,__source:{fileName:_jsxFileName$v,lineNumber:136}},subtitle):null),React.createElement(reactNative.View,{style:rightStyle,__source:{fileName:_jsxFileName$v,lineNumber:142}},right?right({size:24}):null));}}]);return CardTitle;}(React.Component);CardTitle.displayName='Card.Title';var styles$n=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:16},left:{justifyContent:'center',marginRight:16,height:LEFT_SIZE,width:LEFT_SIZE},titles:{flex:1,flexDirection:'column',justifyContent:'center',height:50},title:{minHeight:30},subtitle:{minHeight:20,marginVertical:0}});var CardTitle$1 = withTheme(CardTitle);

var _jsxFileName$w="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Card/Card.tsx";var Card=function(_React$Component){inherits(Card,_React$Component);function Card(){var _getPrototypeOf2;var _this;classCallCheck(this,Card);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Card)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={elevation:new reactNative.Animated.Value(_this.props.elevation)};_this.handlePressIn=function(){reactNative.Animated.timing(_this.state.elevation,{toValue:8,duration:150}).start();};_this.handlePressOut=function(){reactNative.Animated.timing(_this.state.elevation,{toValue:_this.props.elevation,duration:150}).start();};return _this;}createClass(Card,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,cardElevation=_this$props.elevation,onLongPress=_this$props.onLongPress,onPress=_this$props.onPress,style=_this$props.style,theme=_this$props.theme,testID=_this$props.testID,accessible=_this$props.accessible,rest=objectWithoutProperties(_this$props,["children","elevation","onLongPress","onPress","style","theme","testID","accessible"]);var elevation=this.state.elevation;var roundness=theme.roundness;var total=React.Children.count(children);var siblings=React.Children.map(children,function(child){return React.isValidElement(child)&&child.type?child.type.displayName:null;});return React.createElement(Surface$1,_extends_1({style:[{borderRadius:roundness,elevation:elevation},style]},rest,{__source:{fileName:_jsxFileName$w,lineNumber:143}}),React.createElement(reactNative.TouchableWithoutFeedback,{delayPressIn:0,disabled:!(onPress||onLongPress),onLongPress:onLongPress,onPress:onPress,onPressIn:onPress?this.handlePressIn:undefined,onPressOut:onPress?this.handlePressOut:undefined,testID:testID,accessible:accessible,__source:{fileName:_jsxFileName$w,lineNumber:147}},React.createElement(reactNative.View,{style:styles$o.innerContainer,__source:{fileName:_jsxFileName$w,lineNumber:157}},React.Children.map(children,function(child,index){return React.isValidElement(child)?React.cloneElement(child,{index:index,total:total,siblings:siblings}):child;}))));}}]);return Card;}(React.Component);Card.Content=CardContent;Card.Actions=CardActions;Card.Cover=CardCover$1;Card.Title=CardTitle$1;Card.defaultProps={elevation:1};var styles$o=reactNative.StyleSheet.create({innerContainer:{flexGrow:1}});var Card$1 = withTheme(Card);

var _jsxFileName$x="/Users/satya/Workspace/Callstack/react-native-paper/src/components/CheckboxAndroid.tsx";var CheckboxAndroid=function(_React$Component){inherits(CheckboxAndroid,_React$Component);function CheckboxAndroid(){var _getPrototypeOf2;var _this;classCallCheck(this,CheckboxAndroid);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(CheckboxAndroid)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={scaleAnim:new reactNative.Animated.Value(1)};return _this;}createClass(CheckboxAndroid,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.status===this.props.status){return;}var checked=this.props.status==='checked';reactNative.Animated.sequence([reactNative.Animated.timing(this.state.scaleAnim,{toValue:0.85,duration:checked?200:0}),reactNative.Animated.timing(this.state.scaleAnim,{toValue:1,duration:checked?200:350})]).start();}},{key:"render",value:function render(){var _this$props=this.props,status=_this$props.status,disabled=_this$props.disabled,onPress=_this$props.onPress,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["status","disabled","onPress","theme"]);var checked=status==='checked';var indeterminate=status==='indeterminate';var checkedColor=this.props.color||theme.colors.accent;var uncheckedColor=this.props.uncheckedColor||color(theme.colors.text).alpha(theme.dark?0.7:0.54).rgb().string();var rippleColor,checkboxColor;if(disabled){rippleColor=color(theme.colors.text).alpha(0.16).rgb().string();checkboxColor=theme.colors.disabled;}else{rippleColor=color(checkedColor).fade(0.32).rgb().string();checkboxColor=checked?checkedColor:uncheckedColor;}var borderWidth=this.state.scaleAnim.interpolate({inputRange:[0.8,1],outputRange:[7,0]});var icon=indeterminate?'minus-box':checked?'checkbox-marked':'checkbox-blank-outline';return React.createElement(TouchableRipple$1,_extends_1({},rest,{borderless:true,rippleColor:rippleColor,onPress:onPress,disabled:disabled,accessibilityTraits:disabled?['button','disabled']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:disabled?['disabled']:[],accessibilityLiveRegion:"polite",style:styles$p.container,__source:{fileName:_jsxFileName$x,lineNumber:120}}),React.createElement(reactNative.Animated.View,{style:{transform:[{scale:this.state.scaleAnim}]},__source:{fileName:_jsxFileName$x,lineNumber:133}},React.createElement(Icon$1,{allowFontScaling:false,source:icon,size:24,color:checkboxColor,__source:{fileName:_jsxFileName$x,lineNumber:134}}),React.createElement(reactNative.View,{style:[reactNative.StyleSheet.absoluteFill,styles$p.fillContainer],__source:{fileName:_jsxFileName$x,lineNumber:140}},React.createElement(reactNative.Animated.View,{style:[styles$p.fill,{borderColor:checkboxColor},{borderWidth:borderWidth}],__source:{fileName:_jsxFileName$x,lineNumber:141}}))));}}]);return CheckboxAndroid;}(React.Component);CheckboxAndroid.displayName='Checkbox.Android';var styles$p=reactNative.StyleSheet.create({container:{borderRadius:18,width:36,height:36,padding:6},fillContainer:{alignItems:'center',justifyContent:'center'},fill:{height:14,width:14}});var CheckboxAndroid$1 = withTheme(CheckboxAndroid);

var _jsxFileName$y="/Users/satya/Workspace/Callstack/react-native-paper/src/components/CheckboxIOS.tsx";var CheckboxIOS=function(_React$Component){inherits(CheckboxIOS,_React$Component);function CheckboxIOS(){classCallCheck(this,CheckboxIOS);return possibleConstructorReturn(this,getPrototypeOf$1(CheckboxIOS).apply(this,arguments));}createClass(CheckboxIOS,[{key:"render",value:function render(){var _this$props=this.props,status=_this$props.status,disabled=_this$props.disabled,onPress=_this$props.onPress,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["status","disabled","onPress","theme"]);var checked=status==='checked';var indeterminate=status==='indeterminate';var checkedColor=disabled?theme.colors.disabled:this.props.color||theme.colors.accent;var rippleColor;if(disabled){rippleColor=color(theme.colors.text).alpha(0.16).rgb().string();}else{rippleColor=color(checkedColor).fade(0.32).rgb().string();}var icon=indeterminate?'minus':'check';return React.createElement(TouchableRipple$1,_extends_1({},rest,{borderless:true,rippleColor:rippleColor,onPress:onPress,disabled:disabled,accessibilityTraits:disabled?['button','disabled']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:disabled?['disabled']:[],accessibilityLiveRegion:"polite",style:styles$q.container,__source:{fileName:_jsxFileName$y,lineNumber:76}}),React.createElement(reactNative.View,{style:{opacity:indeterminate||checked?1:0},__source:{fileName:_jsxFileName$y,lineNumber:89}},React.createElement(Icon$1,{allowFontScaling:false,source:icon,size:24,color:checkedColor,__source:{fileName:_jsxFileName$y,lineNumber:90}})));}}]);return CheckboxIOS;}(React.Component);CheckboxIOS.displayName='Checkbox.IOS';var styles$q=reactNative.StyleSheet.create({container:{borderRadius:18,padding:6}});var CheckboxIOS$1 = withTheme(CheckboxIOS);

var _jsxFileName$z="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Checkbox.tsx";var Checkbox=function(_React$Component){inherits(Checkbox,_React$Component);function Checkbox(){classCallCheck(this,Checkbox);return possibleConstructorReturn(this,getPrototypeOf$1(Checkbox).apply(this,arguments));}createClass(Checkbox,[{key:"render",value:function render(){return reactNative.Platform.OS==='ios'?React.createElement(CheckboxIOS$1,_extends_1({},this.props,{__source:{fileName:_jsxFileName$z,lineNumber:92}})):React.createElement(CheckboxAndroid$1,_extends_1({},this.props,{__source:{fileName:_jsxFileName$z,lineNumber:94}}));}}]);return Checkbox;}(React.Component);Checkbox.Android=CheckboxAndroid$1;Checkbox.IOS=CheckboxIOS$1;var Checkbox$1 = withTheme(Checkbox);

var _jsxFileName$A="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Chip.tsx";var Chip=function(_React$Component){inherits(Chip,_React$Component);function Chip(){var _getPrototypeOf2;var _this;classCallCheck(this,Chip);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Chip)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={elevation:new reactNative.Animated.Value(0)};_this.handlePressIn=function(){reactNative.Animated.timing(_this.state.elevation,{toValue:4,duration:200}).start();};_this.handlePressOut=function(){reactNative.Animated.timing(_this.state.elevation,{toValue:0,duration:150}).start();};return _this;}createClass(Chip,[{key:"render",value:function render(){var _this$props=this.props,mode=_this$props.mode,children=_this$props.children,icon=_this$props.icon,avatar=_this$props.avatar,selected=_this$props.selected,disabled=_this$props.disabled,accessibilityLabel=_this$props.accessibilityLabel,onPress=_this$props.onPress,onLongPress=_this$props.onLongPress,onClose=_this$props.onClose,textStyle=_this$props.textStyle,style=_this$props.style,theme=_this$props.theme,testID=_this$props.testID,selectedColor=_this$props.selectedColor,rest=objectWithoutProperties(_this$props,["mode","children","icon","avatar","selected","disabled","accessibilityLabel","onPress","onLongPress","onClose","textStyle","style","theme","testID","selectedColor"]);var dark=theme.dark,colors=theme.colors;var _ref=reactNative.StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?mode==='outlined'?colors.surface:dark?'#383838':'#ebebeb':_ref$backgroundColor,_ref$borderRadius=_ref.borderRadius,borderRadius=_ref$borderRadius===void 0?16:_ref$borderRadius;var borderColor=mode==='outlined'?color(selectedColor!==undefined?selectedColor:color(dark?white:black)).alpha(0.29).rgb().string():backgroundColor;var textColor=disabled?colors.disabled:color(selectedColor!==undefined?selectedColor:colors.text).alpha(0.87).rgb().string();var iconColor=disabled?colors.disabled:color(selectedColor!==undefined?selectedColor:colors.text).alpha(0.54).rgb().string();var selectedBackgroundColor=(dark?color(backgroundColor).lighten(mode==='outlined'?0.2:0.4):color(backgroundColor).darken(mode==='outlined'?0.08:0.2)).rgb().string();var underlayColor=selectedColor?color(selectedColor).fade(0.5).rgb().string():selectedBackgroundColor;var accessibilityTraits=['button'];var accessibilityStates=[];if(selected){accessibilityTraits.push('selected');accessibilityStates.push('selected');}if(disabled){accessibilityTraits.push('disabled');accessibilityStates.push('disabled');}return React.createElement(Surface$1,_extends_1({style:[styles$r.container,{elevation:reactNative.Platform.OS==='android'?this.state.elevation:0,backgroundColor:selected?selectedBackgroundColor:backgroundColor,borderColor:borderColor,borderRadius:borderRadius},style]},rest,{__source:{fileName:_jsxFileName$A,lineNumber:221}}),React.createElement(TouchableRipple$1,{borderless:true,delayPressIn:0,style:{borderRadius:borderRadius},onPress:onPress,onLongPress:onLongPress,onPressIn:this.handlePressIn,onPressOut:this.handlePressOut,underlayColor:underlayColor,disabled:disabled,accessibilityLabel:accessibilityLabel,accessibilityTraits:accessibilityTraits,accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:accessibilityStates,testID:testID,__source:{fileName:_jsxFileName$A,lineNumber:238}},React.createElement(reactNative.View,{style:styles$r.content,__source:{fileName:_jsxFileName$A,lineNumber:255}},avatar&&!icon?React.createElement(reactNative.View,{style:[styles$r.avatarWrapper,disabled&&{opacity:0.26}],__source:{fileName:_jsxFileName$A,lineNumber:257}},React.isValidElement(avatar)?React.cloneElement(avatar,{style:[styles$r.avatar,avatar.props.style]}):avatar):null,icon||selected?React.createElement(reactNative.View,{style:[styles$r.icon,avatar?[styles$r.avatar,styles$r.avatarSelected]:null],__source:{fileName:_jsxFileName$A,lineNumber:270}},React.createElement(Icon$1,{source:icon||'check',color:avatar?white:iconColor,size:18,__source:{fileName:_jsxFileName$A,lineNumber:276}})):null,React.createElement(Text$1,{numberOfLines:1,style:[styles$r.text,objectSpread({},theme.fonts.regular,{color:textColor,marginRight:onClose?4:8,marginLeft:avatar||icon||selected?4:8}),textStyle],__source:{fileName:_jsxFileName$A,lineNumber:283}},children),onClose?React.createElement(reactNative.TouchableWithoutFeedback,{onPress:onClose,accessibilityTraits:"button",accessibilityComponentType:"button",__source:{fileName:_jsxFileName$A,lineNumber:299}},React.createElement(reactNative.View,{style:styles$r.icon,__source:{fileName:_jsxFileName$A,lineNumber:304}},React.createElement(Icon$1,{source:"close-circle",size:16,color:iconColor,__source:{fileName:_jsxFileName$A,lineNumber:305}}))):null)));}}]);return Chip;}(React.Component);Chip.defaultProps={mode:'flat',disabled:false,selected:false};var styles$r=reactNative.StyleSheet.create({container:{borderWidth:reactNative.StyleSheet.hairlineWidth,borderStyle:'solid'},content:{flexDirection:'row',alignItems:'center',paddingHorizontal:4},icon:{padding:4},text:{minHeight:24,lineHeight:24,textAlignVertical:'center',marginVertical:4},avatar:{width:24,height:24,borderRadius:12},avatarWrapper:{marginRight:4},avatarSelected:{position:'absolute',top:4,left:4,backgroundColor:'rgba(0, 0, 0, .29)'}});var Chip$1 = withTheme(Chip);

var _jsxFileName$B="/Users/satya/Workspace/Callstack/react-native-paper/src/components/DataTable/DataTableCell.tsx";var DataTableCell=function(_React$Component){inherits(DataTableCell,_React$Component);function DataTableCell(){classCallCheck(this,DataTableCell);return possibleConstructorReturn(this,getPrototypeOf$1(DataTableCell).apply(this,arguments));}createClass(DataTableCell,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,style=_this$props.style,numeric=_this$props.numeric,rest=objectWithoutProperties(_this$props,["children","style","numeric"]);return React.createElement(TouchableRipple$1,_extends_1({},rest,{style:[styles$s.container,numeric&&styles$s.right,style],__source:{fileName:_jsxFileName$B,lineNumber:30}}),React.createElement(Text$1,{numberOfLines:1,__source:{fileName:_jsxFileName$B,lineNumber:34}},children));}}]);return DataTableCell;}(React.Component);DataTableCell.displayName='DataTable.Cell';var styles$s=reactNative.StyleSheet.create({container:{flex:1,flexDirection:'row',alignItems:'center'},right:{justifyContent:'flex-end'}});

var _jsxFileName$C="/Users/satya/Workspace/Callstack/react-native-paper/src/components/DataTable/DataTableHeader.tsx";var DataTableHeader=function(_React$Component){inherits(DataTableHeader,_React$Component);function DataTableHeader(){classCallCheck(this,DataTableHeader);return possibleConstructorReturn(this,getPrototypeOf$1(DataTableHeader).apply(this,arguments));}createClass(DataTableHeader,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["children","style","theme"]);var borderBottomColor=color(theme.dark?white:black).alpha(0.12).rgb().string();return React.createElement(reactNative.View,_extends_1({},rest,{style:[styles$t.header,{borderBottomColor:borderBottomColor},style],__source:{fileName:_jsxFileName$C,lineNumber:31}}),children);}}]);return DataTableHeader;}(React.Component);DataTableHeader.displayName='DataTable.Header';var styles$t=reactNative.StyleSheet.create({header:{flexDirection:'row',height:48,paddingHorizontal:16,borderBottomWidth:reactNative.StyleSheet.hairlineWidth*2}});var DataTableHeader$1 = withTheme(DataTableHeader);

var _jsxFileName$D="/Users/satya/Workspace/Callstack/react-native-paper/src/components/DataTable/DataTableTitle.tsx";var DataTableTitle=function(_React$Component){inherits(DataTableTitle,_React$Component);function DataTableTitle(){var _getPrototypeOf2;var _this;classCallCheck(this,DataTableTitle);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(DataTableTitle)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={spinAnim:new reactNative.Animated.Value(_this.props.sortDirection==='ascending'?0:1)};return _this;}createClass(DataTableTitle,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.sortDirection===this.props.sortDirection){return;}reactNative.Animated.timing(this.state.spinAnim,{toValue:this.props.sortDirection==='ascending'?0:1,duration:150,useNativeDriver:true}).start();}},{key:"render",value:function render(){var _this$props=this.props,numeric=_this$props.numeric,children=_this$props.children,onPress=_this$props.onPress,sortDirection=_this$props.sortDirection,theme=_this$props.theme,style=_this$props.style,numberOfLines=_this$props.numberOfLines,rest=objectWithoutProperties(_this$props,["numeric","children","onPress","sortDirection","theme","style","numberOfLines"]);var textColor=color(theme.colors.text).alpha(0.6).rgb().string();var spin=this.state.spinAnim.interpolate({inputRange:[0,1],outputRange:['0deg','180deg']});var icon=sortDirection?React.createElement(reactNative.Animated.View,{style:[styles$u.icon,{transform:[{rotate:spin}]}],__source:{fileName:_jsxFileName$D,lineNumber:96}},React.createElement(Icon$1,{source:"arrow-down",size:16,color:theme.colors.text,__source:{fileName:_jsxFileName$D,lineNumber:97}})):null;return React.createElement(reactNative.TouchableWithoutFeedback,_extends_1({disabled:!onPress,onPress:onPress},rest,{__source:{fileName:_jsxFileName$D,lineNumber:102}}),React.createElement(reactNative.View,{style:[styles$u.container,numeric&&styles$u.right,style],__source:{fileName:_jsxFileName$D,lineNumber:103}},icon,React.createElement(Text$1,{style:[styles$u.cell,sortDirection?styles$u.sorted:{color:textColor}],numberOfLines:numberOfLines,__source:{fileName:_jsxFileName$D,lineNumber:106}},children)));}}]);return DataTableTitle;}(React.Component);DataTableTitle.displayName='DataTable.Title';DataTableTitle.defaultProps={numberOfLines:1};var styles$u=reactNative.StyleSheet.create({container:{flex:1,flexDirection:'row',alignContent:'center',paddingVertical:12},right:{justifyContent:'flex-end'},cell:{height:24,lineHeight:24,fontSize:12,fontWeight:'500',alignItems:'center'},sorted:{marginLeft:8},icon:{height:24,justifyContent:'center'}});var DataTableTitle$1 = withTheme(DataTableTitle);

var _jsxFileName$E="/Users/satya/Workspace/Callstack/react-native-paper/src/components/CrossFadeIcon.tsx";var CrossFadeIcon=function(_React$Component){inherits(CrossFadeIcon,_React$Component);function CrossFadeIcon(){var _getPrototypeOf2;var _this;classCallCheck(this,CrossFadeIcon);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(CrossFadeIcon)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={currentIcon:_this.props.source,previousIcon:null,fade:new reactNative.Animated.Value(1)};return _this;}createClass(CrossFadeIcon,[{key:"componentDidUpdate",value:function componentDidUpdate(_,prevState){var previousIcon=this.state.previousIcon;var scale=this.props.theme.animation.scale;if(!isValidIcon(previousIcon)||isEqualIcon(previousIcon,prevState.previousIcon)){return;}this.state.fade.setValue(1);reactNative.Animated.timing(this.state.fade,{duration:scale*200,toValue:0}).start();}},{key:"render",value:function render(){var _this$props=this.props,color=_this$props.color,size=_this$props.size;var opacityPrev=this.state.fade;var opacityNext=this.state.previousIcon?this.state.fade.interpolate({inputRange:[0,1],outputRange:[1,0]}):1;var rotatePrev=this.state.fade.interpolate({inputRange:[0,1],outputRange:['-90deg','0deg']});var rotateNext=this.state.previousIcon?this.state.fade.interpolate({inputRange:[0,1],outputRange:['0deg','-180deg']}):'0deg';return React.createElement(reactNative.View,{style:[styles$v.content,{height:size,width:size}],__source:{fileName:_jsxFileName$E,lineNumber:97}},this.state.previousIcon?React.createElement(reactNative.Animated.View,{style:[styles$v.icon,{opacity:opacityPrev,transform:[{rotate:rotatePrev}]}],__source:{fileName:_jsxFileName$E,lineNumber:107}},React.createElement(Icon$1,{source:this.state.previousIcon,size:size,color:color,__source:{fileName:_jsxFileName$E,lineNumber:116}})):null,React.createElement(reactNative.Animated.View,{style:[styles$v.icon,{opacity:opacityNext,transform:[{rotate:rotateNext}]}],__source:{fileName:_jsxFileName$E,lineNumber:119}},React.createElement(Icon$1,{source:this.state.currentIcon,size:size,color:color,__source:{fileName:_jsxFileName$E,lineNumber:128}})));}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(nextProps,nextState){if(nextState.currentIcon===nextProps.source){return null;}return {currentIcon:nextProps.source,previousIcon:nextState.currentIcon};}}]);return CrossFadeIcon;}(React.Component);var CrossFadeIcon$1 = withTheme(CrossFadeIcon);var styles$v=reactNative.StyleSheet.create({content:{alignItems:'center',justifyContent:'center'},icon:{position:'absolute',top:0,left:0,right:0,bottom:0}});

var _jsxFileName$F="/Users/satya/Workspace/Callstack/react-native-paper/src/components/IconButton.tsx";var IconButton=function IconButton(_ref){var icon=_ref.icon,customColor=_ref.color,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size,accessibilityLabel=_ref.accessibilityLabel,disabled=_ref.disabled,onPress=_ref.onPress,_ref$animated=_ref.animated,animated=_ref$animated===void 0?false:_ref$animated,theme=_ref.theme,style=_ref.style,rest=objectWithoutProperties(_ref,["icon","color","size","accessibilityLabel","disabled","onPress","animated","theme","style"]);var iconColor=typeof customColor!=='undefined'?customColor:theme.colors.text;var rippleColor=color(iconColor).alpha(0.32).rgb().string();var IconComponent=animated?CrossFadeIcon$1:Icon$1;var buttonSize=size*1.5;return React.createElement(TouchableRipple$1,_extends_1({borderless:true,centered:true,onPress:onPress,rippleColor:rippleColor,style:[styles$w.container,{width:buttonSize,height:buttonSize,borderRadius:buttonSize/2},disabled&&styles$w.disabled,style],accessibilityLabel:accessibilityLabel,accessibilityTraits:disabled?['button','disabled']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:disabled?['disabled']:[],disabled:disabled,hitSlop:TouchableRipple$1.supported?{top:10,left:10,bottom:10,right:10}:{top:6,left:6,bottom:6,right:6}},rest,{__source:{fileName:_jsxFileName$F,lineNumber:107}}),React.createElement(reactNative.View,{__source:{fileName:_jsxFileName$F,lineNumber:132}},React.createElement(IconComponent,{color:iconColor,source:icon,size:size,__source:{fileName:_jsxFileName$F,lineNumber:133}})));};var styles$w=reactNative.StyleSheet.create({container:{alignItems:'center',justifyContent:'center',overflow:'hidden',margin:6},disabled:{opacity:0.32}});var IconButton$1 = withTheme(IconButton);

var _jsxFileName$G="/Users/satya/Workspace/Callstack/react-native-paper/src/components/DataTable/DataTablePagination.tsx";var DataTablePagination=function(_React$Component){inherits(DataTablePagination,_React$Component);function DataTablePagination(){classCallCheck(this,DataTablePagination);return possibleConstructorReturn(this,getPrototypeOf$1(DataTablePagination).apply(this,arguments));}createClass(DataTablePagination,[{key:"render",value:function render(){var _this$props=this.props,label=_this$props.label,page=_this$props.page,numberOfPages=_this$props.numberOfPages,onPageChange=_this$props.onPageChange,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["label","page","numberOfPages","onPageChange","style","theme"]);var labelColor=color(theme.colors.text).alpha(0.6).rgb().string();return React.createElement(reactNative.View,_extends_1({},rest,{style:[styles$x.container,style],__source:{fileName:_jsxFileName$G,lineNumber:59}}),React.createElement(Text$1,{style:[styles$x.label,{color:labelColor}],numberOfLines:1,__source:{fileName:_jsxFileName$G,lineNumber:60}},label),React.createElement(IconButton$1,{icon:function icon(_ref){var size=_ref.size,color=_ref.color;return React.createElement(defaultIcon,{name:"chevron-left",color:color,size:size,direction:reactNative.I18nManager.isRTL?'rtl':'ltr',__source:{fileName:_jsxFileName$G,lineNumber:65}});},color:theme.colors.text,disabled:page===0,onPress:function onPress(){return onPageChange(page-1);},__source:{fileName:_jsxFileName$G,lineNumber:63}}),React.createElement(IconButton$1,{icon:function icon(_ref2){var size=_ref2.size,color=_ref2.color;return React.createElement(defaultIcon,{name:"chevron-right",color:color,size:size,direction:reactNative.I18nManager.isRTL?'rtl':'ltr',__source:{fileName:_jsxFileName$G,lineNumber:78}});},color:theme.colors.text,disabled:page===numberOfPages-1,onPress:function onPress(){return onPageChange(page+1);},__source:{fileName:_jsxFileName$G,lineNumber:76}}));}}]);return DataTablePagination;}(React.Component);DataTablePagination.displayName='DataTable.Pagination';var styles$x=reactNative.StyleSheet.create({container:{justifyContent:'flex-end',flexDirection:'row',alignItems:'center',paddingLeft:16},label:{fontSize:12,marginRight:44}});var DataTablePagination$1 = withTheme(DataTablePagination);

var _jsxFileName$H="/Users/satya/Workspace/Callstack/react-native-paper/src/components/DataTable/DataTableRow.tsx";var DataTableRow=function(_React$Component){inherits(DataTableRow,_React$Component);function DataTableRow(){classCallCheck(this,DataTableRow);return possibleConstructorReturn(this,getPrototypeOf$1(DataTableRow).apply(this,arguments));}createClass(DataTableRow,[{key:"render",value:function render(){var _this$props=this.props,onPress=_this$props.onPress,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["onPress","style","theme"]);var borderBottomColor=color(theme.dark?white:black).alpha(0.12).rgb().string();return React.createElement(TouchableRipple$1,_extends_1({},rest,{onPress:onPress,style:[styles$y.container,{borderBottomColor:borderBottomColor},style],__source:{fileName:_jsxFileName$H,lineNumber:36}}),React.createElement(reactNative.View,{style:styles$y.content,__source:{fileName:_jsxFileName$H,lineNumber:41}},this.props.children));}}]);return DataTableRow;}(React.Component);DataTableRow.displayName='DataTable.Row';var styles$y=reactNative.StyleSheet.create({container:{borderStyle:'solid',borderBottomWidth:reactNative.StyleSheet.hairlineWidth,minHeight:48,paddingHorizontal:16},content:{flex:1,flexDirection:'row'}});var DataTableRow$1 = withTheme(DataTableRow);

var _jsxFileName$I="/Users/satya/Workspace/Callstack/react-native-paper/src/components/DataTable/DataTable.tsx";var DataTable=function(_React$Component){inherits(DataTable,_React$Component);function DataTable(){classCallCheck(this,DataTable);return possibleConstructorReturn(this,getPrototypeOf$1(DataTable).apply(this,arguments));}createClass(DataTable,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,style=_this$props.style,rest=objectWithoutProperties(_this$props,["children","style"]);return React.createElement(reactNative.View,_extends_1({},rest,{style:[styles$z.container,style],__source:{fileName:_jsxFileName$I,lineNumber:96}}),children);}}]);return DataTable;}(React.Component);DataTable.Header=DataTableHeader$1;DataTable.Title=DataTableTitle$1;DataTable.Row=DataTableRow$1;DataTable.Cell=DataTableCell;DataTable.Pagination=DataTablePagination$1;var styles$z=reactNative.StyleSheet.create({container:{width:'100%'}});

var _jsxFileName$J="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Modal.tsx";var DEFAULT_DURATION=220;var Modal=function(_React$Component){inherits(Modal,_React$Component);function Modal(){var _getPrototypeOf2;var _this;classCallCheck(this,Modal);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Modal)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={opacity:new reactNative.Animated.Value(_this.props.visible?1:0),rendered:_this.props.visible};_this.handleBack=function(){if(_this.props.dismissable){_this.hideModal();}return true;};_this.showModal=function(){reactNative.BackHandler.removeEventListener('hardwareBackPress',_this.handleBack);reactNative.BackHandler.addEventListener('hardwareBackPress',_this.handleBack);var opacity=_this.state.opacity;var scale=_this.props.theme.animation.scale;reactNative.Animated.timing(opacity,{toValue:1,duration:scale*DEFAULT_DURATION,easing:reactNative.Easing.out(reactNative.Easing.cubic),useNativeDriver:true}).start();};_this.hideModal=function(){reactNative.BackHandler.removeEventListener('hardwareBackPress',_this.handleBack);var opacity=_this.state.opacity;var scale=_this.props.theme.animation.scale;reactNative.Animated.timing(opacity,{toValue:0,duration:scale*DEFAULT_DURATION,easing:reactNative.Easing.out(reactNative.Easing.cubic),useNativeDriver:true}).start(function(_ref){var finished=_ref.finished;if(!finished){return;}if(_this.props.visible&&_this.props.onDismiss){_this.props.onDismiss();}if(_this.props.visible){_this.showModal();}else{_this.setState({rendered:false});}});};return _this;}createClass(Modal,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.visible!==this.props.visible){if(this.props.visible){this.showModal();}else{this.hideModal();}}}},{key:"componentWillUnmount",value:function componentWillUnmount(){reactNative.BackHandler.removeEventListener('hardwareBackPress',this.handleBack);}},{key:"render",value:function render(){var _this$state=this.state,rendered=_this$state.rendered,opacity=_this$state.opacity;if(!rendered)return null;var _this$props=this.props,children=_this$props.children,dismissable=_this$props.dismissable,theme=_this$props.theme,contentContainerStyle=_this$props.contentContainerStyle;var colors=theme.colors;return React.createElement(reactNative.Animated.View,{pointerEvents:this.props.visible?'auto':'none',accessibilityViewIsModal:true,accessibilityLiveRegion:"polite",style:reactNative.StyleSheet.absoluteFill,__source:{fileName:_jsxFileName$J,lineNumber:184}},React.createElement(reactNative.TouchableWithoutFeedback,{onPress:dismissable?this.hideModal:undefined,__source:{fileName:_jsxFileName$J,lineNumber:190}},React.createElement(reactNative.Animated.View,{style:[styles$A.backdrop,{backgroundColor:colors.backdrop,opacity:opacity}],__source:{fileName:_jsxFileName$J,lineNumber:193}})),React.createElement(SafeAreaView,{style:styles$A.wrapper,__source:{fileName:_jsxFileName$J,lineNumber:200}},React.createElement(Surface$1,{style:[{opacity:opacity},styles$A.content,contentContainerStyle],__source:{fileName:_jsxFileName$J,lineNumber:201}},children)));}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(nextProps,prevState){if(nextProps.visible&&!prevState.rendered){return {rendered:true};}return null;}}]);return Modal;}(React.Component);Modal.defaultProps={dismissable:true,visible:false};var Modal$1 = withTheme(Modal);var styles$A=reactNative.StyleSheet.create({backdrop:{flex:1},wrapper:objectSpread({},reactNative.StyleSheet.absoluteFillObject,{justifyContent:'center'}),content:{backgroundColor:'transparent',justifyContent:'center'}});

var _jsxFileName$K="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Dialog/DialogContent.tsx";var DialogContent=function(_React$Component){inherits(DialogContent,_React$Component);function DialogContent(){classCallCheck(this,DialogContent);return possibleConstructorReturn(this,getPrototypeOf$1(DialogContent).apply(this,arguments));}createClass(DialogContent,[{key:"render",value:function render(){return React.createElement(reactNative.View,_extends_1({},this.props,{style:[styles$B.container,this.props.style],__source:{fileName:_jsxFileName$K,lineNumber:48}}),this.props.children);}}]);return DialogContent;}(React.Component);DialogContent.displayName='Dialog.Content';var styles$B=reactNative.StyleSheet.create({container:{paddingBottom:24,paddingHorizontal:24}});

var _jsxFileName$L="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Dialog/DialogActions.tsx";var DialogActions=function(_React$Component){inherits(DialogActions,_React$Component);function DialogActions(){classCallCheck(this,DialogActions);return possibleConstructorReturn(this,getPrototypeOf$1(DialogActions).apply(this,arguments));}createClass(DialogActions,[{key:"render",value:function render(){return React.createElement(reactNative.View,_extends_1({},this.props,{style:[styles$C.container,this.props.style],__source:{fileName:_jsxFileName$L,lineNumber:49}}),React.Children.map(this.props.children,function(child){return React.isValidElement(child)?React.cloneElement(child,{compact:true}):child;}));}}]);return DialogActions;}(React.Component);DialogActions.displayName='Dialog.Actions';var styles$C=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',padding:8}});

var _jsxFileName$M="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Dialog/DialogTitle.tsx";var DialogTitle=function(_React$Component){inherits(DialogTitle,_React$Component);function DialogTitle(){classCallCheck(this,DialogTitle);return possibleConstructorReturn(this,getPrototypeOf$1(DialogTitle).apply(this,arguments));}createClass(DialogTitle,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,theme=_this$props.theme,style=_this$props.style,rest=objectWithoutProperties(_this$props,["children","theme","style"]);return React.createElement(Title,_extends_1({accessibilityTraits:"header",accessibilityRole:"header",style:[styles$D.text,{color:theme.colors.text},style]},rest,{__source:{fileName:_jsxFileName$M,lineNumber:58}}),children);}}]);return DialogTitle;}(React.Component);DialogTitle.displayName='Dialog.Title';var styles$D=reactNative.StyleSheet.create({text:{marginTop:22,marginBottom:18,marginHorizontal:24}});var DialogTitle$1 = withTheme(DialogTitle);

var _jsxFileName$N="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Dialog/DialogScrollArea.tsx";var DialogScrollArea=function(_React$Component){inherits(DialogScrollArea,_React$Component);function DialogScrollArea(){classCallCheck(this,DialogScrollArea);return possibleConstructorReturn(this,getPrototypeOf$1(DialogScrollArea).apply(this,arguments));}createClass(DialogScrollArea,[{key:"render",value:function render(){return React.createElement(reactNative.View,_extends_1({},this.props,{style:[styles$E.container,this.props.style],__source:{fileName:_jsxFileName$N,lineNumber:52}}),this.props.children);}}]);return DialogScrollArea;}(React.Component);DialogScrollArea.displayName='Dialog.ScrollArea';var styles$E=reactNative.StyleSheet.create({container:{borderColor:'rgba(0, 0, 0, .12)',borderTopWidth:reactNative.StyleSheet.hairlineWidth,borderBottomWidth:reactNative.StyleSheet.hairlineWidth,paddingHorizontal:24,flexGrow:1,flexShrink:1}});

var _jsxFileName$O="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Dialog/Dialog.tsx";var Dialog=function(_React$Component){inherits(Dialog,_React$Component);function Dialog(){classCallCheck(this,Dialog);return possibleConstructorReturn(this,getPrototypeOf$1(Dialog).apply(this,arguments));}createClass(Dialog,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,dismissable=_this$props.dismissable,onDismiss=_this$props.onDismiss,visible=_this$props.visible,style=_this$props.style,theme=_this$props.theme;return React.createElement(Modal$1,{dismissable:dismissable,onDismiss:onDismiss,visible:visible,contentContainerStyle:[{borderRadius:theme.roundness,backgroundColor:theme.colors.surface},styles$F.container,style],__source:{fileName:_jsxFileName$O,lineNumber:109}},React.Children.toArray(children).filter(function(child){return child!=null&&typeof child!=='boolean';}).map(function(child,i){if(i===0&&React.isValidElement(child)&&child.type===DialogContent){return React.cloneElement(child,{style:[{paddingTop:24},child.props.style]});}return child;}));}}]);return Dialog;}(React.Component);Dialog.Content=DialogContent;Dialog.Actions=DialogActions;Dialog.Title=DialogTitle$1;Dialog.ScrollArea=DialogScrollArea;Dialog.defaultProps={dismissable:true,visible:false};var styles$F=reactNative.StyleSheet.create({container:{marginVertical:reactNative.Platform.OS==='android'?44:0,marginHorizontal:26,elevation:24,justifyContent:'flex-start'}});var Dialog$1 = withTheme(Dialog);

var _jsxFileName$P="/Users/satya/Workspace/Callstack/react-native-paper/src/components/FAB/FABGroup.tsx";var FABGroup=function(_React$Component){inherits(FABGroup,_React$Component);function FABGroup(){var _getPrototypeOf2;var _this;classCallCheck(this,FABGroup);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(FABGroup)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={backdrop:new reactNative.Animated.Value(0),animations:[]};_this.close=function(){return _this.props.onStateChange({open:false});};_this.toggle=function(){return _this.props.onStateChange({open:!_this.props.open});};return _this;}createClass(FABGroup,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.props.open===prevProps.open){return;}if(this.props.open){reactNative.Animated.parallel([reactNative.Animated.timing(this.state.backdrop,{toValue:1,duration:250,useNativeDriver:true}),reactNative.Animated.stagger(50,this.state.animations.map(function(animation){return reactNative.Animated.timing(animation,{toValue:1,duration:150,useNativeDriver:true});}).reverse())]).start();}else{reactNative.Animated.parallel([reactNative.Animated.timing(this.state.backdrop,{toValue:0,duration:200,useNativeDriver:true})].concat(toConsumableArray(this.state.animations.map(function(animation){return reactNative.Animated.timing(animation,{toValue:0,duration:150,useNativeDriver:true});})))).start();}}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,actions=_this$props.actions,icon=_this$props.icon,open=_this$props.open,_onPress=_this$props.onPress,accessibilityLabel=_this$props.accessibilityLabel,theme=_this$props.theme,style=_this$props.style,fabStyle=_this$props.fabStyle,visible=_this$props.visible;var colors=theme.colors;var labelColor=theme.dark?colors.text:color(colors.text).fade(0.54).rgb().string();var backdropOpacity=open?this.state.backdrop.interpolate({inputRange:[0,0.5,1],outputRange:[0,1,1]}):this.state.backdrop;var opacities=this.state.animations;var scales=opacities.map(function(opacity){return open?opacity.interpolate({inputRange:[0,1],outputRange:[0.8,1]}):1;});return React.createElement(reactNative.View,{pointerEvents:"box-none",style:[styles$G.container,style],__source:{fileName:_jsxFileName$P,lineNumber:235}},React.createElement(reactNative.TouchableWithoutFeedback,{onPress:this.close,__source:{fileName:_jsxFileName$P,lineNumber:236}},React.createElement(reactNative.Animated.View,{pointerEvents:open?'auto':'none',style:[styles$G.backdrop,{opacity:backdropOpacity,backgroundColor:colors.backdrop}],__source:{fileName:_jsxFileName$P,lineNumber:237}})),React.createElement(reactNative.SafeAreaView,{pointerEvents:"box-none",style:styles$G.safeArea,__source:{fileName:_jsxFileName$P,lineNumber:248}},React.createElement(reactNative.View,{pointerEvents:open?'box-none':'none',__source:{fileName:_jsxFileName$P,lineNumber:249}},actions.map(function(it,i){return React.createElement(reactNative.View,{key:i,style:styles$G.item,pointerEvents:"box-none",__source:{fileName:_jsxFileName$P,lineNumber:251}},it.label&&React.createElement(Card$1,{style:[styles$G.label,{transform:[{scale:scales[i]}],opacity:opacities[i]}],onPress:function onPress(){it.onPress();_this2.close();},accessibilityLabel:it.accessibilityLabel!=='undefined'?it.accessibilityLabel:it.label,accessibilityTraits:"button",accessibilityComponentType:"button",accessibilityRole:"button",__source:{fileName:_jsxFileName$P,lineNumber:257}},React.createElement(Text$1,{style:{color:labelColor},__source:{fileName:_jsxFileName$P,lineNumber:280}},it.label)),React.createElement(FAB$1,{small:true,icon:it.icon,color:it.color,style:[{transform:[{scale:scales[i]}],opacity:opacities[i],backgroundColor:theme.colors.surface},it.style],onPress:function onPress(){it.onPress();_this2.close();},accessibilityLabel:typeof it.accessibilityLabel!=='undefined'?it.accessibilityLabel:it.label,accessibilityTraits:"button",accessibilityComponentType:"button",accessibilityRole:"button",__source:{fileName:_jsxFileName$P,lineNumber:283}}));})),React.createElement(FAB$1,{onPress:function onPress(){_onPress&&_onPress();_this2.toggle();},icon:icon,color:this.props.color,accessibilityLabel:accessibilityLabel,accessibilityTraits:"button",accessibilityComponentType:"button",accessibilityRole:"button",style:[styles$G.fab,fabStyle],visible:visible,__source:{fileName:_jsxFileName$P,lineNumber:313}})));}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(nextProps,prevState){return {animations:nextProps.actions.map(function(_,i){return prevState.animations[i]||new reactNative.Animated.Value(nextProps.open?1:0);})};}}]);return FABGroup;}(React.Component);FABGroup.displayName='FAB.Group';var FABGroup$1 = withTheme(FABGroup);var styles$G=reactNative.StyleSheet.create({safeArea:{alignItems:'flex-end'},container:objectSpread({},reactNative.StyleSheet.absoluteFillObject,{justifyContent:'flex-end'}),fab:{marginHorizontal:16,marginBottom:16,marginTop:0},backdrop:objectSpread({},reactNative.StyleSheet.absoluteFillObject),label:{borderRadius:5,paddingHorizontal:12,paddingVertical:6,marginVertical:8,marginHorizontal:16,elevation:2},item:{marginHorizontal:24,marginBottom:16,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}});

var _jsxFileName$Q="/Users/satya/Workspace/Callstack/react-native-paper/src/components/FAB/FAB.tsx";var FAB=function(_React$Component){inherits(FAB,_React$Component);function FAB(){var _getPrototypeOf2;var _this;classCallCheck(this,FAB);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(FAB)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={visibility:new reactNative.Animated.Value(_this.props.visible?1:0)};return _this;}createClass(FAB,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.props.visible===prevProps.visible){return;}if(this.props.visible){reactNative.Animated.timing(this.state.visibility,{toValue:1,duration:200,useNativeDriver:true}).start();}else{reactNative.Animated.timing(this.state.visibility,{toValue:0,duration:150,useNativeDriver:true}).start();}}},{key:"render",value:function render(){var _this$props=this.props,small=_this$props.small,icon=_this$props.icon,label=_this$props.label,_this$props$accessibi=_this$props.accessibilityLabel,accessibilityLabel=_this$props$accessibi===void 0?label:_this$props$accessibi,customColor=_this$props.color,disabled=_this$props.disabled,onPress=_this$props.onPress,theme=_this$props.theme,style=_this$props.style,visible=_this$props.visible,loading=_this$props.loading,rest=objectWithoutProperties(_this$props,["small","icon","label","accessibilityLabel","color","disabled","onPress","theme","style","visible","loading"]);var visibility=this.state.visibility;var disabledColor=color(theme.dark?white:black).alpha(0.12).rgb().string();var _ref=reactNative.StyleSheet.flatten(style)||{},_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?disabled?disabledColor:theme.colors.accent:_ref$backgroundColor;var foregroundColor;if(typeof customColor!=='undefined'){foregroundColor=customColor;}else if(disabled){foregroundColor=color(theme.dark?white:black).alpha(0.32).rgb().string();}else{foregroundColor=!color(backgroundColor).isLight()?white:'rgba(0, 0, 0, .54)';}var rippleColor=color(foregroundColor).alpha(0.32).rgb().string();return React.createElement(Surface$1,_extends_1({},rest,{style:[{backgroundColor:backgroundColor,opacity:visibility,transform:[{scale:visibility}]},styles$H.container,disabled&&styles$H.disabled,style],pointerEvents:visible?'auto':'none',__source:{fileName:_jsxFileName$Q,lineNumber:178}}),React.createElement(TouchableRipple$1,{borderless:true,onPress:onPress,rippleColor:rippleColor,disabled:disabled,accessibilityLabel:accessibilityLabel,accessibilityTraits:disabled?['button','disabled']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:disabled?['disabled']:[],style:styles$H.touchable,__source:{fileName:_jsxFileName$Q,lineNumber:198}},React.createElement(reactNative.View,{style:[styles$H.content,label?styles$H.extended:small?styles$H.small:styles$H.standard],pointerEvents:"none",__source:{fileName:_jsxFileName$Q,lineNumber:210}},icon&&loading!==true?React.createElement(CrossFadeIcon$1,{source:icon,size:24,color:foregroundColor,__source:{fileName:_jsxFileName$Q,lineNumber:218}}):null,loading?React.createElement(ActivityIndicator$1,{size:18,color:foregroundColor,__source:{fileName:_jsxFileName$Q,lineNumber:221}}):null,label?React.createElement(Text$1,{style:[styles$H.label,objectSpread({color:foregroundColor},theme.fonts.medium)],__source:{fileName:_jsxFileName$Q,lineNumber:224}},label.toUpperCase()):null)));}}]);return FAB;}(React.Component);FAB.Group=FABGroup$1;FAB.defaultProps={visible:true};var styles$H=reactNative.StyleSheet.create({container:{borderRadius:28,elevation:6},touchable:{borderRadius:28},standard:{height:56,width:56},small:{height:40,width:40},extended:{height:48,paddingHorizontal:16},content:{flexDirection:'row',alignItems:'center',justifyContent:'center'},label:{marginHorizontal:8},disabled:{elevation:0}});var FAB$1 = withTheme(FAB);

var _jsxFileName$R="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Typography/AnimatedText.tsx";function AnimatedText(_ref){var style=_ref.style,theme=_ref.theme,rest=objectWithoutProperties(_ref,["style","theme"]);var writingDirection=reactNative.I18nManager.isRTL?'rtl':'ltr';return React.createElement(reactNative.Animated.Text,_extends_1({},rest,{style:[objectSpread({},theme.fonts.regular,{color:theme.colors.text,textAlign:'left',writingDirection:writingDirection}),style],__source:{fileName:_jsxFileName$R,lineNumber:23}}));}var AnimatedText$1 = withTheme(AnimatedText);

var _jsxFileName$S="/Users/satya/Workspace/Callstack/react-native-paper/src/components/HelperText.tsx";var HelperText=function(_React$PureComponent){inherits(HelperText,_React$PureComponent);function HelperText(){var _getPrototypeOf2;var _this;classCallCheck(this,HelperText);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(HelperText)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={shown:new reactNative.Animated.Value(_this.props.visible?1:0),textHeight:0};_this.showText=function(){reactNative.Animated.timing(_this.state.shown,{toValue:1,duration:150,useNativeDriver:true}).start();};_this.hideText=function(){reactNative.Animated.timing(_this.state.shown,{toValue:0,duration:180,useNativeDriver:true}).start();};_this.handleTextLayout=function(e){_this.props.onLayout&&_this.props.onLayout(e);_this.setState({textHeight:e.nativeEvent.layout.height});};return _this;}createClass(HelperText,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){if(prevProps.visible!==this.props.visible||prevState.textHeight!==this.state.textHeight){if(this.props.visible){this.showText();}else{this.hideText();}}}},{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,type=_this$props.type,visible=_this$props.visible,theme=_this$props.theme,onLayout=_this$props.onLayout,padding=_this$props.padding,rest=objectWithoutProperties(_this$props,["style","type","visible","theme","onLayout","padding"]);var colors=theme.colors,dark=theme.dark;var textColor=this.props.type==='error'?colors.error:color(colors.text).alpha(dark?0.7:0.54).rgb().string();return React.createElement(AnimatedText$1,_extends_1({onLayout:this.handleTextLayout,style:[styles$I.text,padding!=='none'?styles$I.padding:{},{color:textColor,opacity:this.state.shown,transform:visible&&type==='error'?[{translateY:this.state.shown.interpolate({inputRange:[0,1],outputRange:[-this.state.textHeight/2,0]})}]:[]},style]},rest,{__source:{fileName:_jsxFileName$S,lineNumber:158}}),this.props.children);}}]);return HelperText;}(React.PureComponent);HelperText.defaultProps={type:'info',padding:'normal',visible:true};var styles$I=reactNative.StyleSheet.create({text:{fontSize:12,paddingVertical:4},padding:{paddingHorizontal:12}});var HelperText$1 = withTheme(HelperText);

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

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

var PortalConsumer=function(_React$Component){inherits(PortalConsumer,_React$Component);function PortalConsumer(){classCallCheck(this,PortalConsumer);return possibleConstructorReturn(this,getPrototypeOf$1(PortalConsumer).apply(this,arguments));}createClass(PortalConsumer,[{key:"componentDidMount",value:function componentDidMount(){return regenerator.async(function componentDidMount$(_context){while(1){switch(_context.prev=_context.next){case 0:this.checkManager();_context.next=3;return regenerator.awrap(Promise.resolve());case 3:this.key=this.props.manager.mount(this.props.children);case 4:case"end":return _context.stop();}}},null,this);}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.checkManager();this.props.manager.update(this.key,this.props.children);}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.checkManager();this.props.manager.unmount(this.key);}},{key:"checkManager",value:function checkManager(){if(!this.props.manager){throw new Error('Looks like you forgot to wrap your root component with `Provider` component from `react-native-paper`.\n\n'+"Please read our getting-started guide and make sure you've followed all the required steps.\n\n"+'https://callstack.github.io/react-native-paper/getting-started.html');}}},{key:"render",value:function render(){return null;}}]);return PortalConsumer;}(React.Component);

var _jsxFileName$T="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Portal/Portal.tsx";var Portal=function(_React$Component){inherits(Portal,_React$Component);function Portal(){classCallCheck(this,Portal);return possibleConstructorReturn(this,getPrototypeOf$1(Portal).apply(this,arguments));}createClass(Portal,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,theme=_this$props.theme;return React.createElement(PortalContext.Consumer,{__source:{fileName:_jsxFileName$T,lineNumber:47}},function(manager){return React.createElement(PortalConsumer,{manager:manager,__source:{fileName:_jsxFileName$T,lineNumber:49}},React.createElement(ThemeProvider,{theme:theme,__source:{fileName:_jsxFileName$T,lineNumber:50}},children));});}}]);return Portal;}(React.Component);Portal.Host=PortalHost;var Portal$1 = withTheme(Portal);

var _jsxFileName$U="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Menu/MenuItem.tsx";var MenuItem=function(_React$Component){inherits(MenuItem,_React$Component);function MenuItem(){classCallCheck(this,MenuItem);return possibleConstructorReturn(this,getPrototypeOf$1(MenuItem).apply(this,arguments));}createClass(MenuItem,[{key:"render",value:function render(){var _this$props=this.props,icon=_this$props.icon,title=_this$props.title,disabled=_this$props.disabled,onPress=_this$props.onPress,theme=_this$props.theme,style=_this$props.style;var disabledColor=color(theme.dark?white:black).alpha(0.32).rgb().string();var titleColor=disabled?disabledColor:color(theme.colors.text).alpha(0.87).rgb().string();var iconColor=disabled?disabledColor:color(theme.colors.text).alpha(0.54).rgb().string();return React.createElement(TouchableRipple$1,{style:[styles$J.container,style],onPress:onPress,disabled:disabled,__source:{fileName:_jsxFileName$U,lineNumber:66}},React.createElement(reactNative.View,{style:styles$J.row,__source:{fileName:_jsxFileName$U,lineNumber:71}},icon?React.createElement(reactNative.View,{style:[styles$J.item,styles$J.icon],pointerEvents:"box-none",__source:{fileName:_jsxFileName$U,lineNumber:73}},React.createElement(Icon$1,{source:icon,size:24,color:iconColor,__source:{fileName:_jsxFileName$U,lineNumber:74}})):null,React.createElement(reactNative.View,{style:[styles$J.item,styles$J.content,icon?styles$J.widthWithIcon:null],pointerEvents:"none",__source:{fileName:_jsxFileName$U,lineNumber:77}},React.createElement(Text$1,{numberOfLines:1,style:[styles$J.title,{color:titleColor}],__source:{fileName:_jsxFileName$U,lineNumber:85}},title))));}}]);return MenuItem;}(React.Component);MenuItem.displayName='Menu.Item';var minWidth=112;var maxWidth=280;var iconWidth=40;var styles$J=reactNative.StyleSheet.create({container:{padding:8,minWidth:minWidth,maxWidth:maxWidth},row:{flexDirection:'row'},icon:{width:iconWidth},title:{fontSize:16},item:{margin:8},content:{justifyContent:'center',minWidth:minWidth-16,maxWidth:maxWidth-16},widthWithIcon:{maxWidth:maxWidth-(iconWidth+48)}});var MenuItem$1 = withTheme(MenuItem);

var expo=global.__expo;var DEFAULT_STATUSBAR_HEIGHT_EXPO=expo&&expo.Constants?expo.Constants.statusBarHeight:0;var APPROX_STATUSBAR_HEIGHT=reactNative.Platform.select({android:DEFAULT_STATUSBAR_HEIGHT_EXPO,ios:reactNative.Platform.Version<11?DEFAULT_STATUSBAR_HEIGHT_EXPO:0});

var _jsxFileName$V="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Menu/Menu.tsx";var SCREEN_INDENT=8;var ANIMATION_DURATION=250;var EASING=reactNative.Easing.bezier(0.4,0,0.2,1);var Menu=function(_React$Component){inherits(Menu,_React$Component);function Menu(){var _getPrototypeOf2;var _this;classCallCheck(this,Menu);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Menu)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={rendered:_this.props.visible,top:0,left:0,menuLayout:{width:0,height:0},anchorLayout:{width:0,height:0},opacityAnimation:new reactNative.Animated.Value(0),scaleAnimation:new reactNative.Animated.ValueXY({x:0,y:0})};_this.anchor=null;_this.menu=null;_this.isAnchorCoord=function(){return !React.isValidElement(_this.props.anchor);};_this.measureMenuLayout=function(){return new Promise(function(resolve){if(_this.menu){_this.menu.measureInWindow(function(x,y,width,height){resolve({x:x,y:y,width:width,height:height});});}});};_this.measureAnchorLayout=function(){return new Promise(function(resolve){var anchor=_this.props.anchor;if(_this.isAnchorCoord()){resolve({x:anchor.x,y:anchor.y,width:0,height:0});return;}if(_this.anchor){_this.anchor.measureInWindow(function(x,y,width,height){resolve({x:x,y:y,width:width,height:height});});}});};_this.updateVisibility=function _callee(){return regenerator.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regenerator.awrap(Promise.resolve());case 2:if(_this.props.visible){_this.show();}else{_this.hide();}case 3:case"end":return _context.stop();}}});};_this.isBrowser=function(){return reactNative.Platform.OS==='web'&&'document'in global;};_this.focusFirstDOMNode=function(el){if(el&&_this.isBrowser()){var node=reactNative.findNodeHandle(el);var focusableNode=node.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');focusableNode&&focusableNode.focus();}};_this.handleDismiss=function(){if(_this.props.visible){_this.props.onDismiss();}return true;};_this.handleKeypress=function(e){if(e.key==='Escape'){_this.props.onDismiss();}};_this.attachListeners=function(){reactNative.BackHandler.addEventListener('hardwareBackPress',_this.handleDismiss);reactNative.Dimensions.addEventListener('change',_this.handleDismiss);_this.isBrowser()&&document.addEventListener('keyup',_this.handleKeypress);};_this.removeListeners=function(){reactNative.BackHandler.removeEventListener('hardwareBackPress',_this.handleDismiss);reactNative.Dimensions.removeEventListener('change',_this.handleDismiss);_this.isBrowser()&&document.removeEventListener('keyup',_this.handleKeypress);};_this.show=function _callee2(){var windowLayout,_ref,_ref2,menuLayout,anchorLayout;return regenerator.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:windowLayout=reactNative.Dimensions.get('window');_context2.next=3;return regenerator.awrap(Promise.all([_this.measureMenuLayout(),_this.measureAnchorLayout()]));case 3:_ref=_context2.sent;_ref2=slicedToArray(_ref,2);menuLayout=_ref2[0];anchorLayout=_ref2[1];if(!(!windowLayout.width||!windowLayout.height||!menuLayout.width||!menuLayout.height||!anchorLayout.width&&!_this.isAnchorCoord()||!anchorLayout.height&&!_this.isAnchorCoord())){_context2.next=10;break;}requestAnimationFrame(_this.show);return _context2.abrupt("return");case 10:_this.setState(function(){return {left:anchorLayout.x,top:anchorLayout.y,anchorLayout:{height:anchorLayout.height,width:anchorLayout.width},menuLayout:{width:menuLayout.width,height:menuLayout.height}};},function(){_this.attachListeners();var animation=_this.props.theme.animation;reactNative.Animated.parallel([reactNative.Animated.timing(_this.state.scaleAnimation,{toValue:{x:menuLayout.width,y:menuLayout.height},duration:ANIMATION_DURATION*animation.scale,easing:EASING,useNativeDriver:true}),reactNative.Animated.timing(_this.state.opacityAnimation,{toValue:1,duration:ANIMATION_DURATION*animation.scale,easing:EASING,useNativeDriver:true})]).start(function(_ref3){var finished=_ref3.finished;if(finished){_this.focusFirstDOMNode(_this.menu);}});});case 11:case"end":return _context2.stop();}}});};_this.hide=function(){_this.removeListeners();var animation=_this.props.theme.animation;reactNative.Animated.timing(_this.state.opacityAnimation,{toValue:0,duration:ANIMATION_DURATION*animation.scale,easing:EASING,useNativeDriver:true}).start(function(finished){if(finished){_this.setState({menuLayout:{width:0,height:0}});_this.state.scaleAnimation.setValue({x:0,y:0});_this.focusFirstDOMNode(_this.anchor);_this.setState({rendered:false});}});};return _this;}createClass(Menu,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.visible!==this.props.visible){this.updateVisibility();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.removeListeners();}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,visible=_this$props.visible,anchor=_this$props.anchor,contentStyle=_this$props.contentStyle,style=_this$props.style,children=_this$props.children,theme=_this$props.theme,statusBarHeight=_this$props.statusBarHeight,onDismiss=_this$props.onDismiss;var _this$state=this.state,rendered=_this$state.rendered,menuLayout=_this$state.menuLayout,anchorLayout=_this$state.anchorLayout,opacityAnimation=_this$state.opacityAnimation,scaleAnimation=_this$state.scaleAnimation;var _this$state2=this.state,left=_this$state2.left,top=_this$state2.top;var additionalVerticalValue=reactNative.Platform.select({android:statusBarHeight,default:0});var scaleTransforms=[{scaleX:scaleAnimation.x.interpolate({inputRange:[0,menuLayout.width],outputRange:[0,1]})},{scaleY:scaleAnimation.y.interpolate({inputRange:[0,menuLayout.height],outputRange:[0,1]})}];var windowLayout=reactNative.Dimensions.get('window');var positionTransforms=[];if(left<=windowLayout.width-menuLayout.width-SCREEN_INDENT){positionTransforms.push({translateX:scaleAnimation.x.interpolate({inputRange:[0,menuLayout.width],outputRange:[-(menuLayout.width/2),0]})});if(left<SCREEN_INDENT){left=SCREEN_INDENT;}}else{positionTransforms.push({translateX:scaleAnimation.x.interpolate({inputRange:[0,menuLayout.width],outputRange:[menuLayout.width/2,0]})});left+=anchorLayout.width-menuLayout.width;var right=left+menuLayout.width;if(right>windowLayout.width-SCREEN_INDENT){left=windowLayout.width-SCREEN_INDENT-menuLayout.width;}}var scrollableMenuHeight=0;if(top>=windowLayout.height-menuLayout.height-SCREEN_INDENT-additionalVerticalValue&&top<=windowLayout.height-top){scrollableMenuHeight=windowLayout.height-top-SCREEN_INDENT-additionalVerticalValue;}else if(top>=windowLayout.height-menuLayout.height-SCREEN_INDENT-additionalVerticalValue&&top>=windowLayout.height-top&&top<=menuLayout.height-anchorLayout.height+SCREEN_INDENT-additionalVerticalValue){scrollableMenuHeight=top+anchorLayout.height-SCREEN_INDENT+additionalVerticalValue;}scrollableMenuHeight=scrollableMenuHeight>windowLayout.height-2*SCREEN_INDENT?windowLayout.height-2*SCREEN_INDENT:scrollableMenuHeight;if(top<=windowLayout.height-menuLayout.height-SCREEN_INDENT-additionalVerticalValue||top>=windowLayout.height-menuLayout.height-SCREEN_INDENT-additionalVerticalValue&&top<=windowLayout.height-top){positionTransforms.push({translateY:scaleAnimation.y.interpolate({inputRange:[0,menuLayout.height],outputRange:[-((scrollableMenuHeight||menuLayout.height)/2),0]})});if(top<SCREEN_INDENT){top=SCREEN_INDENT;}}else{positionTransforms.push({translateY:scaleAnimation.y.interpolate({inputRange:[0,menuLayout.height],outputRange:[(scrollableMenuHeight||menuLayout.height)/2,0]})});top+=anchorLayout.height-(scrollableMenuHeight||menuLayout.height);var bottom=top+(scrollableMenuHeight||menuLayout.height)+additionalVerticalValue;if(bottom>windowLayout.height-SCREEN_INDENT){top=scrollableMenuHeight===windowLayout.height-2*SCREEN_INDENT?-SCREEN_INDENT*2:windowLayout.height-menuLayout.height-SCREEN_INDENT-additionalVerticalValue;}}var shadowMenuContainerStyle=objectSpread({opacity:opacityAnimation,transform:scaleTransforms,borderRadius:theme.roundness},scrollableMenuHeight?{height:scrollableMenuHeight}:{});var positionStyle=objectSpread({top:this.isAnchorCoord()?top:top+additionalVerticalValue},reactNative.I18nManager.isRTL?{right:left}:{left:left});return React.createElement(reactNative.View,{ref:function ref(_ref5){_this2.anchor=_ref5;},collapsable:false,__source:{fileName:_jsxFileName$V,lineNumber:530}},this.isAnchorCoord()?null:anchor,rendered?React.createElement(Portal$1,{__source:{fileName:_jsxFileName$V,lineNumber:538}},React.createElement(reactNative.TouchableWithoutFeedback,{onPress:onDismiss,__source:{fileName:_jsxFileName$V,lineNumber:539}},React.createElement(reactNative.View,{style:reactNative.StyleSheet.absoluteFill,__source:{fileName:_jsxFileName$V,lineNumber:540}})),React.createElement(reactNative.View,{ref:function ref(_ref4){_this2.menu=_ref4;},collapsable:false,accessibilityViewIsModal:visible,style:[styles$K.wrapper,positionStyle,style],pointerEvents:visible?'box-none':'none',__source:{fileName:_jsxFileName$V,lineNumber:542}},React.createElement(reactNative.Animated.View,{style:{transform:positionTransforms},__source:{fileName:_jsxFileName$V,lineNumber:551}},React.createElement(Surface$1,{style:[styles$K.shadowMenuContainer,shadowMenuContainerStyle,contentStyle],__source:{fileName:_jsxFileName$V,lineNumber:552}},scrollableMenuHeight&&React.createElement(reactNative.ScrollView,{__source:{fileName:_jsxFileName$V,lineNumber:562}},children)||React.createElement(React.Fragment,{__source:{fileName:_jsxFileName$V,lineNumber:563}},children))))):null);}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(nextProps,prevState){if(nextProps.visible&&!prevState.rendered){return {rendered:true};}return null;}}]);return Menu;}(React.Component);Menu.Item=MenuItem$1;Menu.defaultProps={statusBarHeight:APPROX_STATUSBAR_HEIGHT};var styles$K=reactNative.StyleSheet.create({wrapper:{position:'absolute'},shadowMenuContainer:{opacity:0,paddingVertical:8,elevation:8}});var Menu$1 = withTheme(Menu);

var _jsxFileName$W="/Users/satya/Workspace/Callstack/react-native-paper/src/components/ProgressBar.tsx";var INDETERMINATE_DURATION=2000;var INDETERMINATE_MAX_WIDTH=0.6;var ProgressBar=function(_React$Component){inherits(ProgressBar,_React$Component);function ProgressBar(){var _getPrototypeOf2;var _this;classCallCheck(this,ProgressBar);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(ProgressBar)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={width:0,timer:new reactNative.Animated.Value(0),fade:new reactNative.Animated.Value(0)};_this.indeterminateAnimation=null;_this.onLayout=function(event){var visible=_this.props.visible;var previousWidth=_this.state.width;_this.setState({width:event.nativeEvent.layout.width},function(){if(visible&&previousWidth===0){_this.startAnimation();}});};_this.startAnimation=function(){var _this$props=_this.props,indeterminate=_this$props.indeterminate,progress=_this$props.progress;var _this$state=_this.state,fade=_this$state.fade,timer=_this$state.timer;reactNative.Animated.timing(fade,{duration:200,toValue:1,useNativeDriver:true,isInteraction:false}).start();if(indeterminate){if(!_this.indeterminateAnimation){_this.indeterminateAnimation=reactNative.Animated.timing(timer,{duration:INDETERMINATE_DURATION,toValue:1,useNativeDriver:reactNative.Platform.OS!=='web',isInteraction:false});}timer.setValue(0);reactNative.Animated.loop(_this.indeterminateAnimation).start();}else{reactNative.Animated.timing(timer,{duration:200,toValue:progress?progress:0,useNativeDriver:true,isInteraction:false}).start();}};_this.stopAnimation=function(){var fade=_this.state.fade;if(_this.indeterminateAnimation){_this.indeterminateAnimation.stop();}reactNative.Animated.timing(fade,{duration:200,toValue:0,useNativeDriver:true,isInteraction:false}).start();};return _this;}createClass(ProgressBar,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props2=this.props,visible=_this$props2.visible,progress=_this$props2.progress;if(progress!==prevProps.progress||visible!==prevProps.visible){if(visible){this.startAnimation();}else{this.stopAnimation();}}}},{key:"render",value:function render(){var _this$props3=this.props,color$1=_this$props3.color,indeterminate=_this$props3.indeterminate,style=_this$props3.style,theme=_this$props3.theme;var _this$state2=this.state,fade=_this$state2.fade,timer=_this$state2.timer,width=_this$state2.width;var tintColor=color$1||theme.colors.primary;var trackTintColor=color(tintColor).alpha(0.38).rgb().string();return React.createElement(reactNative.View,{onLayout:this.onLayout,__source:{fileName:_jsxFileName$W,lineNumber:169}},React.createElement(reactNative.Animated.View,{style:[styles$L.container,{backgroundColor:trackTintColor,opacity:fade},style],__source:{fileName:_jsxFileName$W,lineNumber:170}},React.createElement(reactNative.Animated.View,{style:[styles$L.progressBar,{backgroundColor:tintColor,width:width,transform:[{translateX:timer.interpolate(indeterminate?{inputRange:[0,0.5,1],outputRange:[-0.5*width,-0.5*INDETERMINATE_MAX_WIDTH*width,0.7*width]}:{inputRange:[0,1],outputRange:[-0.5*width,0]})},{scaleX:timer.interpolate(indeterminate?{inputRange:[0,0.5,1],outputRange:[0.0001,INDETERMINATE_MAX_WIDTH,0.0001]}:{inputRange:[0,1],outputRange:[0.0001,1]})}]}],__source:{fileName:_jsxFileName$W,lineNumber:177}})));}}]);return ProgressBar;}(React.Component);ProgressBar.defaultProps={visible:true,progress:0};var styles$L=reactNative.StyleSheet.create({container:{height:4,overflow:'hidden'},progressBar:{flex:1}});var ProgressBar$1 = withTheme(ProgressBar);

var _jsxFileName$X="/Users/satya/Workspace/Callstack/react-native-paper/src/components/RadioButtonGroup.tsx";var RadioButtonContext=React.createContext(null);var RadioButtonGroup=function(_React$Component){inherits(RadioButtonGroup,_React$Component);function RadioButtonGroup(){classCallCheck(this,RadioButtonGroup);return possibleConstructorReturn(this,getPrototypeOf$1(RadioButtonGroup).apply(this,arguments));}createClass(RadioButtonGroup,[{key:"render",value:function render(){var _this$props=this.props,value=_this$props.value,onValueChange=_this$props.onValueChange,children=_this$props.children;return React.createElement(RadioButtonContext.Provider,{value:{value:value,onValueChange:onValueChange},__source:{fileName:_jsxFileName$X,lineNumber:68}},children);}}]);return RadioButtonGroup;}(React.Component);RadioButtonGroup.displayName='RadioButton.Group';

var _jsxFileName$Y="/Users/satya/Workspace/Callstack/react-native-paper/src/components/RadioButtonAndroid.tsx";var BORDER_WIDTH=2;var RadioButtonAndroid=function(_React$Component){inherits(RadioButtonAndroid,_React$Component);function RadioButtonAndroid(){var _getPrototypeOf2;var _this;classCallCheck(this,RadioButtonAndroid);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(RadioButtonAndroid)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={borderAnim:new reactNative.Animated.Value(BORDER_WIDTH),radioAnim:new reactNative.Animated.Value(1)};return _this;}createClass(RadioButtonAndroid,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.status===this.props.status){return;}if(this.props.status==='checked'){this.state.radioAnim.setValue(1.2);reactNative.Animated.timing(this.state.radioAnim,{toValue:1,duration:150}).start();}else{this.state.borderAnim.setValue(10);reactNative.Animated.timing(this.state.borderAnim,{toValue:BORDER_WIDTH,duration:150}).start();}}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,disabled=_this$props.disabled,onPress=_this$props.onPress,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["disabled","onPress","theme"]);var checkedColor=this.props.color||theme.colors.accent;var uncheckedColor=this.props.uncheckedColor||color(theme.colors.text).alpha(theme.dark?0.7:0.54).rgb().string();var rippleColor,radioColor;var checked=this.props.status==='checked';if(disabled){rippleColor=color(theme.colors.text).alpha(0.16).rgb().string();radioColor=theme.colors.disabled;}else{rippleColor=color(checkedColor).fade(0.32).rgb().string();radioColor=checked?checkedColor:uncheckedColor;}return React.createElement(TouchableRipple$1,_extends_1({},rest,{borderless:true,rippleColor:rippleColor,onPress:disabled?undefined:function(){onPress&&onPress(_this2.props.value);},accessibilityTraits:disabled?['button','disabled']:'button',accessibilityComponentType:checked?'radiobutton_checked':'radiobutton_unchecked',accessibilityRole:"button",accessibilityStates:disabled?['disabled']:[],accessibilityLiveRegion:"polite",style:styles$M.container,__source:{fileName:_jsxFileName$Y,lineNumber:120}}),React.createElement(reactNative.Animated.View,{style:[styles$M.radio,{borderColor:radioColor,borderWidth:this.state.borderAnim}],__source:{fileName:_jsxFileName$Y,lineNumber:140}},checked?React.createElement(reactNative.View,{style:[reactNative.StyleSheet.absoluteFill,styles$M.radioContainer],__source:{fileName:_jsxFileName$Y,lineNumber:150}},React.createElement(reactNative.Animated.View,{style:[styles$M.dot,{backgroundColor:radioColor,transform:[{scale:this.state.radioAnim}]}],__source:{fileName:_jsxFileName$Y,lineNumber:151}})):null));}}]);return RadioButtonAndroid;}(React.Component);RadioButtonAndroid.displayName='RadioButton.Android';var styles$M=reactNative.StyleSheet.create({container:{borderRadius:18},radioContainer:{alignItems:'center',justifyContent:'center'},radio:{height:20,width:20,borderRadius:10,margin:8},dot:{height:10,width:10,borderRadius:5}});var RadioButtonAndroid$1 = withTheme(RadioButtonAndroid);

var _jsxFileName$Z="/Users/satya/Workspace/Callstack/react-native-paper/src/components/RadioButtonIOS.tsx";var RadioButtonIOS=function(_React$Component){inherits(RadioButtonIOS,_React$Component);function RadioButtonIOS(){classCallCheck(this,RadioButtonIOS);return possibleConstructorReturn(this,getPrototypeOf$1(RadioButtonIOS).apply(this,arguments));}createClass(RadioButtonIOS,[{key:"render",value:function render(){var _this$props=this.props,disabled=_this$props.disabled,onPress=_this$props.onPress,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["disabled","onPress","theme"]);var checkedColor=disabled?theme.colors.disabled:this.props.color||theme.colors.accent;var rippleColor;var checked=this.props.status==='checked';if(disabled){rippleColor=color(theme.colors.text).alpha(0.16).rgb().string();}else{rippleColor=color(checkedColor).fade(0.32).rgb().string();}return React.createElement(TouchableRipple$1,_extends_1({},rest,{borderless:true,rippleColor:rippleColor,onPress:disabled?undefined:function(){onPress&&onPress();},accessibilityTraits:disabled?['button','disabled']:'button',accessibilityComponentType:checked?'radiobutton_checked':'radiobutton_unchecked',accessibilityRole:"button",accessibilityStates:disabled?['disabled']:[],accessibilityLiveRegion:"polite",style:styles$N.container,__source:{fileName:_jsxFileName$Z,lineNumber:77}}),React.createElement(reactNative.View,{style:{opacity:checked?1:0},__source:{fileName:_jsxFileName$Z,lineNumber:97}},React.createElement(Icon$1,{allowFontScaling:false,source:"check",size:24,color:checkedColor,__source:{fileName:_jsxFileName$Z,lineNumber:98}})));}}]);return RadioButtonIOS;}(React.Component);RadioButtonIOS.displayName='RadioButton.IOS';var styles$N=reactNative.StyleSheet.create({container:{borderRadius:18,padding:6}});var RadioButtonIOS$1 = withTheme(RadioButtonIOS);

var _jsxFileName$_="/Users/satya/Workspace/Callstack/react-native-paper/src/components/RadioButton.tsx";var RadioButton=function(_React$Component){inherits(RadioButton,_React$Component);function RadioButton(){var _getPrototypeOf2;var _this;classCallCheck(this,RadioButton);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(RadioButton)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.handlePress=function(context){var onPress=_this.props.onPress;var onValueChange=context?context.onValueChange:function(){};onPress?onPress():onValueChange(_this.props.value);};_this.isChecked=function(context){return context.value===_this.props.value?'checked':'unchecked';};return _this;}createClass(RadioButton,[{key:"render",value:function render(){var _this2=this;var Button=reactNative.Platform.select({default:RadioButtonAndroid$1,ios:RadioButtonIOS$1});return React.createElement(RadioButtonContext.Consumer,{__source:{fileName:_jsxFileName$_,lineNumber:130}},function(context){return React.createElement(Button,_extends_1({},_this2.props,{status:_this2.props.status||context&&_this2.isChecked(context),onPress:function onPress(){return _this2.handlePress(context);},__source:{fileName:_jsxFileName$_,lineNumber:132}}));});}}]);return RadioButton;}(React.Component);RadioButton.Group=RadioButtonGroup;RadioButton.Android=RadioButtonAndroid$1;RadioButton.IOS=RadioButtonIOS$1;var RadioButton$1 = withTheme(RadioButton);

var _jsxFileName$$="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Searchbar.tsx";var Searchbar=function(_React$Component){inherits(Searchbar,_React$Component);function Searchbar(){var _getPrototypeOf2;var _this;classCallCheck(this,Searchbar);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Searchbar)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.handleClearPress=function(){_this.clear();_this.props.onChangeText&&_this.props.onChangeText('');};return _this;}createClass(Searchbar,[{key:"setNativeProps",value:function setNativeProps(args){return this.root&&this.root.setNativeProps(args);}},{key:"isFocused",value:function isFocused(){return this.root&&this.root.isFocused();}},{key:"clear",value:function clear(){return this.root&&this.root.clear();}},{key:"focus",value:function focus(){return this.root&&this.root.focus();}},{key:"blur",value:function blur(){return this.root&&this.root.blur();}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,placeholder=_this$props.placeholder,onIconPress=_this$props.onIconPress,icon=_this$props.icon,value=_this$props.value,theme=_this$props.theme,style=_this$props.style,customIconColor=_this$props.iconColor,clearIcon=_this$props.clearIcon,inputStyle=_this$props.inputStyle,rest=objectWithoutProperties(_this$props,["placeholder","onIconPress","icon","value","theme","style","iconColor","clearIcon","inputStyle"]);var colors=theme.colors,roundness=theme.roundness,dark=theme.dark,fonts=theme.fonts;var textColor=colors.text;var font=fonts.regular;var iconColor=customIconColor||(dark?textColor:color(textColor).alpha(0.54).rgb().string());var rippleColor=color(textColor).alpha(0.32).rgb().string();return React.createElement(Surface$1,{style:[{borderRadius:roundness,elevation:4},styles$O.container,style],__source:{fileName:_jsxFileName$$,lineNumber:162}},React.createElement(IconButton$1,{borderless:true,rippleColor:rippleColor,onPress:onIconPress,color:iconColor,icon:icon||function(_ref){var size=_ref.size,color=_ref.color;return React.createElement(defaultIcon,{name:"magnify",color:color,size:size,direction:reactNative.I18nManager.isRTL?'rtl':'ltr',__source:{fileName:_jsxFileName$$,lineNumber:177}});},__source:{fileName:_jsxFileName$$,lineNumber:169}}),React.createElement(reactNative.TextInput,_extends_1({style:[styles$O.input,objectSpread({color:textColor},font),inputStyle],placeholder:placeholder||'',placeholderTextColor:colors.placeholder,selectionColor:colors.primary,underlineColorAndroid:"transparent",returnKeyType:"search",keyboardAppearance:dark?'dark':'light',accessibilityTraits:"search",accessibilityRole:"search",ref:function ref(c){_this2.root=c;},value:value},rest,{__source:{fileName:_jsxFileName$$,lineNumber:186}})),React.createElement(IconButton$1,{borderless:true,disabled:!value,color:value?iconColor:'rgba(255, 255, 255, 0)',rippleColor:rippleColor,onPress:this.handleClearPress,icon:clearIcon||function(_ref2){var size=_ref2.size,color=_ref2.color;return React.createElement(defaultIcon,{name:"close",color:color,size:size,direction:reactNative.I18nManager.isRTL?'rtl':'ltr',__source:{fileName:_jsxFileName$$,lineNumber:211}});},accessibilityTraits:"button",accessibilityComponentType:"button",accessibilityRole:"button",__source:{fileName:_jsxFileName$$,lineNumber:202}}));}}]);return Searchbar;}(React.Component);var styles$O=reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center'},input:{flex:1,fontSize:18,paddingLeft:8,alignSelf:'stretch',textAlign:reactNative.I18nManager.isRTL?'right':'left',minWidth:0}});var Searchbar$1 = withTheme(Searchbar);

var _jsxFileName$10="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Snackbar.tsx";var DURATION_SHORT=4000;var DURATION_MEDIUM=7000;var DURATION_LONG=10000;var Snackbar=function(_React$Component){inherits(Snackbar,_React$Component);function Snackbar(){var _getPrototypeOf2;var _this;classCallCheck(this,Snackbar);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(Snackbar)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={opacity:new reactNative.Animated.Value(0.0),hidden:!_this.props.visible};_this.toggle=function(){if(_this.props.visible){_this.show();}else{_this.hide();}};_this.show=function(){if(_this.hideTimeout){clearTimeout(_this.hideTimeout);}_this.setState({hidden:false});reactNative.Animated.timing(_this.state.opacity,{toValue:1,duration:200,useNativeDriver:true}).start(function(_ref){var finished=_ref.finished;if(finished){var duration=_this.props.duration;var isInfinity=duration===Number.POSITIVE_INFINITY||duration===Number.NEGATIVE_INFINITY;if(finished&&!isInfinity){_this.hideTimeout=setTimeout(_this.props.onDismiss,duration);}}});};_this.hide=function(){if(_this.hideTimeout){clearTimeout(_this.hideTimeout);}reactNative.Animated.timing(_this.state.opacity,{toValue:0,duration:100,useNativeDriver:true}).start(function(_ref2){var finished=_ref2.finished;if(finished){_this.setState({hidden:true});}});};return _this;}createClass(Snackbar,[{key:"componentDidMount",value:function componentDidMount(){if(this.props.visible){this.show();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.visible!==this.props.visible){this.toggle();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.hideTimeout){clearTimeout(this.hideTimeout);}}},{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,visible=_this$props.visible,action=_this$props.action,onDismiss=_this$props.onDismiss,theme=_this$props.theme,style=_this$props.style;var colors=theme.colors,roundness=theme.roundness;if(this.state.hidden){return null;}return React.createElement(reactNative.SafeAreaView,{pointerEvents:"box-none",style:styles$P.wrapper,__source:{fileName:_jsxFileName$10,lineNumber:214}},React.createElement(Surface$1,{pointerEvents:"box-none",accessibilityLiveRegion:"polite",style:[styles$P.container,{borderRadius:roundness,opacity:this.state.opacity,transform:[{scale:visible?this.state.opacity.interpolate({inputRange:[0,1],outputRange:[0.9,1]}):1}]},{backgroundColor:colors.onSurface},style],__source:{fileName:_jsxFileName$10,lineNumber:215}},React.createElement(Text$1,{style:[styles$P.content,{marginRight:action?0:16,color:colors.surface}],__source:{fileName:_jsxFileName$10,lineNumber:240}},children),action?React.createElement(Button$1,{accessibilityLabel:action.accessibilityLabel,onPress:function onPress(){action.onPress();onDismiss();},style:styles$P.button,color:colors.accent,compact:true,mode:"text",__source:{fileName:_jsxFileName$10,lineNumber:249}},action.label):null));}}]);return Snackbar;}(React.Component);Snackbar.DURATION_SHORT=DURATION_SHORT;Snackbar.DURATION_MEDIUM=DURATION_MEDIUM;Snackbar.DURATION_LONG=DURATION_LONG;Snackbar.defaultProps={duration:DURATION_MEDIUM};var styles$P=reactNative.StyleSheet.create({wrapper:{position:'absolute',bottom:0,width:'100%'},container:{elevation:6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:8,borderRadius:4},content:{marginLeft:16,marginVertical:14,flexWrap:'wrap',flex:1},button:{marginHorizontal:8,marginVertical:6}});var Snackbar$1 = withTheme(Snackbar);

var _jsxFileName$11="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Switch.tsx";var version=reactNative.NativeModules.PlatformConstants?reactNative.NativeModules.PlatformConstants.reactNativeVersion:undefined;var Switch=function(_React$Component){inherits(Switch,_React$Component);function Switch(){classCallCheck(this,Switch);return possibleConstructorReturn(this,getPrototypeOf$1(Switch).apply(this,arguments));}createClass(Switch,[{key:"render",value:function render(){var _this$props=this.props,value=_this$props.value,disabled=_this$props.disabled,onValueChange=_this$props.onValueChange,color$1=_this$props.color,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["value","disabled","onValueChange","color","theme"]);var checkedColor=color$1||theme.colors.accent;var onTintColor=reactNative.Platform.OS==='ios'?checkedColor:disabled?theme.dark?color(white).alpha(0.1).rgb().string():color(black).alpha(0.12).rgb().string():color(checkedColor).alpha(0.5).rgb().string();var thumbTintColor=reactNative.Platform.OS==='ios'?undefined:disabled?theme.dark?grey800:grey400:value?checkedColor:theme.dark?grey400:grey50;var props=version&&version.major===0&&version.minor<=56?{onTintColor:onTintColor,thumbTintColor:thumbTintColor}:{thumbColor:thumbTintColor,trackColor:{true:onTintColor,false:''}};return React.createElement(reactNative.Switch,_extends_1({value:value,disabled:disabled,onValueChange:disabled?undefined:onValueChange},props,rest,{__source:{fileName:_jsxFileName$11,lineNumber:147}}));}}]);return Switch;}(React.Component);var Switch$1 = withTheme(Switch);

var _jsxFileName$12="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Appbar/AppbarContent.tsx";var AppbarContent=function(_React$Component){inherits(AppbarContent,_React$Component);function AppbarContent(){classCallCheck(this,AppbarContent);return possibleConstructorReturn(this,getPrototypeOf$1(AppbarContent).apply(this,arguments));}createClass(AppbarContent,[{key:"render",value:function render(){var _this$props=this.props,_this$props$color=_this$props.color,titleColor=_this$props$color===void 0?white:_this$props$color,subtitle=_this$props.subtitle,subtitleStyle=_this$props.subtitleStyle,onPress=_this$props.onPress,style=_this$props.style,titleStyle=_this$props.titleStyle,theme=_this$props.theme,title=_this$props.title,rest=objectWithoutProperties(_this$props,["color","subtitle","subtitleStyle","onPress","style","titleStyle","theme","title"]);var fonts=theme.fonts;var subtitleColor=color(titleColor).alpha(0.7).rgb().string();return React.createElement(reactNative.TouchableWithoutFeedback,{onPress:onPress,__source:{fileName:_jsxFileName$12,lineNumber:78}},React.createElement(reactNative.View,_extends_1({style:[styles$Q.container,style]},rest,{__source:{fileName:_jsxFileName$12,lineNumber:79}}),React.createElement(Text$1,{style:[objectSpread({color:titleColor},reactNative.Platform.OS==='ios'?fonts.regular:fonts.medium),styles$Q.title,titleStyle],numberOfLines:1,accessibilityTraits:"header",accessibilityRole:reactNative.Platform.OS==='web'?'heading':'header',__source:{fileName:_jsxFileName$12,lineNumber:80}},title),subtitle?React.createElement(Text$1,{style:[styles$Q.subtitle,{color:subtitleColor},subtitleStyle],numberOfLines:1,__source:{fileName:_jsxFileName$12,lineNumber:97}},subtitle):null));}}]);return AppbarContent;}(React.Component);AppbarContent.displayName='Appbar.Content';var styles$Q=reactNative.StyleSheet.create({container:{flex:1,paddingHorizontal:12},title:{fontSize:reactNative.Platform.OS==='ios'?17:20},subtitle:{fontSize:reactNative.Platform.OS==='ios'?11:14}});var AppbarContent$1 = withTheme(AppbarContent);

var _jsxFileName$13="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Appbar/AppbarAction.tsx";var AppbarAction=function(_React$Component){inherits(AppbarAction,_React$Component);function AppbarAction(){classCallCheck(this,AppbarAction);return possibleConstructorReturn(this,getPrototypeOf$1(AppbarAction).apply(this,arguments));}createClass(AppbarAction,[{key:"render",value:function render(){var _this$props=this.props,_this$props$color=_this$props.color,iconColor=_this$props$color===void 0?color(black).alpha(0.54).rgb().string():_this$props$color,icon=_this$props.icon,disabled=_this$props.disabled,onPress=_this$props.onPress,accessibilityLabel=_this$props.accessibilityLabel,rest=objectWithoutProperties(_this$props,["color","icon","disabled","onPress","accessibilityLabel"]);return React.createElement(IconButton$1,_extends_1({onPress:onPress,color:iconColor,icon:icon,disabled:disabled,accessibilityLabel:accessibilityLabel,animated:true},rest,{__source:{fileName:_jsxFileName$13,lineNumber:60}}));}}]);return AppbarAction;}(React.Component);AppbarAction.displayName='Appbar.Action';AppbarAction.defaultProps={size:24};

var _jsxFileName$14="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Appbar/AppbarBackAction.tsx";var AppbarBackAction=function(_React$Component){inherits(AppbarBackAction,_React$Component);function AppbarBackAction(){classCallCheck(this,AppbarBackAction);return possibleConstructorReturn(this,getPrototypeOf$1(AppbarBackAction).apply(this,arguments));}createClass(AppbarBackAction,[{key:"render",value:function render(){return React.createElement(AppbarAction,_extends_1({},this.props,{icon:function icon(_ref){var size=_ref.size,color=_ref.color;return reactNative.Platform.OS==='ios'?React.createElement(reactNative.View,{style:[styles$R.wrapper,{width:size,height:size,transform:[{scaleX:reactNative.I18nManager.isRTL?-1:1}]}],__source:{fileName:_jsxFileName$14,lineNumber:58}},React.createElement(reactNative.Image,{source:require('react-native-paper/assets/back-chevron.png'),style:[styles$R.icon,{tintColor:color}],__source:{fileName:_jsxFileName$14,lineNumber:68}})):React.createElement(defaultIcon,{name:"arrow-left",color:color,size:size,direction:reactNative.I18nManager.isRTL?'rtl':'ltr',__source:{fileName:_jsxFileName$14,lineNumber:74}});},__source:{fileName:_jsxFileName$14,lineNumber:54}}));}}]);return AppbarBackAction;}(React.Component);AppbarBackAction.displayName='Appbar.BackAction';AppbarBackAction.defaultProps={accessibilityLabel:'Back'};var styles$R=reactNative.StyleSheet.create({wrapper:{alignItems:'center',justifyContent:'center'},icon:{height:21,width:21,resizeMode:'contain'}});

var _jsxFileName$15="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Appbar/AppbarHeader.tsx";var AppbarHeader=function(_React$Component){inherits(AppbarHeader,_React$Component);function AppbarHeader(){classCallCheck(this,AppbarHeader);return possibleConstructorReturn(this,getPrototypeOf$1(AppbarHeader).apply(this,arguments));}createClass(AppbarHeader,[{key:"render",value:function render(){var _this$props=this.props,_this$props$statusBar=_this$props.statusBarHeight,statusBarHeight=_this$props$statusBar===void 0?APPROX_STATUSBAR_HEIGHT:_this$props$statusBar,style=_this$props.style,dark=_this$props.dark,rest=objectWithoutProperties(_this$props,["statusBarHeight","style","dark"]);var _rest$theme=rest.theme,isDarkTheme=_rest$theme.dark,colors=_rest$theme.colors,mode=_rest$theme.mode;var _ref=reactNative.StyleSheet.flatten(style)||{},_ref$height=_ref.height,height=_ref$height===void 0?DEFAULT_APPBAR_HEIGHT:_ref$height,_ref$elevation=_ref.elevation,elevation=_ref$elevation===void 0?4:_ref$elevation,customBackground=_ref.backgroundColor,_ref$zIndex=_ref.zIndex,zIndex=_ref$zIndex===void 0?0:_ref$zIndex,restStyle=objectWithoutProperties(_ref,["height","elevation","backgroundColor","zIndex"]);var backgroundColor=customBackground?customBackground:isDarkTheme&&mode==='adaptive'?overlay(elevation,colors.surface):colors.primary;var Wrapper=typeof this.props.statusBarHeight==='number'?reactNative.View:reactNative.SafeAreaView;var isDark;if(typeof dark==='boolean'){isDark=dark;}else{isDark=backgroundColor==='transparent'?false:!color(backgroundColor).isLight();}reactNative.StatusBar.setBarStyle(isDark?'light-content':'dark-content');return React.createElement(Wrapper,{style:[{backgroundColor:backgroundColor,zIndex:zIndex,elevation:elevation},shadow(elevation)],__source:{fileName:_jsxFileName$15,lineNumber:125}},React.createElement(Appbar$1,_extends_1({style:[{height:height,backgroundColor:backgroundColor,marginTop:statusBarHeight},styles$S.appbar,restStyle],dark:dark},rest,{__source:{fileName:_jsxFileName$15,lineNumber:134}})));}}]);return AppbarHeader;}(React.Component);AppbarHeader.displayName='Appbar.Header';var styles$S=reactNative.StyleSheet.create({appbar:{elevation:0}});var AppbarHeader$1 = withTheme(AppbarHeader);

var _jsxFileName$16="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Appbar/Appbar.tsx";var DEFAULT_APPBAR_HEIGHT=56;var Appbar=function(_React$Component){inherits(Appbar,_React$Component);function Appbar(){classCallCheck(this,Appbar);return possibleConstructorReturn(this,getPrototypeOf$1(Appbar).apply(this,arguments));}createClass(Appbar,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,dark=_this$props.dark,style=_this$props.style,theme=_this$props.theme,rest=objectWithoutProperties(_this$props,["children","dark","style","theme"]);var colors=theme.colors,isDarkTheme=theme.dark,mode=theme.mode;var _ref=reactNative.StyleSheet.flatten(style)||{},customBackground=_ref.backgroundColor,_ref$elevation=_ref.elevation,elevation=_ref$elevation===void 0?4:_ref$elevation,restStyle=objectWithoutProperties(_ref,["backgroundColor","elevation"]);var isDark;var backgroundColor=customBackground?customBackground:isDarkTheme&&mode==='adaptive'?overlay(elevation,colors.surface):colors.primary;if(typeof dark==='boolean'){isDark=dark;}else{isDark=backgroundColor==='transparent'?false:!color(backgroundColor).isLight();}var shouldCenterContent=false;var shouldAddLeftSpacing=false;var shouldAddRightSpacing=false;if(reactNative.Platform.OS==='ios'){var hasAppbarContent=false;var leftItemsCount=0;var rightItemsCount=0;React.Children.forEach(children,function(child){if(React.isValidElement(child)){if(child.type===AppbarContent$1){hasAppbarContent=true;}else if(hasAppbarContent){rightItemsCount++;}else{leftItemsCount++;}}});shouldCenterContent=hasAppbarContent&&leftItemsCount<2&&rightItemsCount<2;shouldAddLeftSpacing=shouldCenterContent&&leftItemsCount===0;shouldAddRightSpacing=shouldCenterContent&&rightItemsCount===0;}return React.createElement(Surface$1,_extends_1({style:[{backgroundColor:backgroundColor},styles$T.appbar,{elevation:elevation},restStyle]},rest,{__source:{fileName:_jsxFileName$16,lineNumber:140}}),shouldAddLeftSpacing?React.createElement(reactNative.View,{style:styles$T.spacing,__source:{fileName:_jsxFileName$16,lineNumber:145}}):null,React.Children.toArray(children).filter(function(child){return child!=null&&typeof child!=='boolean';}).map(function(child,i){if(!React.isValidElement(child)||![AppbarContent$1,AppbarAction,AppbarBackAction].includes(child.type)){return child;}var props={color:typeof child.props.color!=='undefined'?child.props.color:isDark?white:black};if(child.type===AppbarContent$1){props.style=[i!==0&&{marginLeft:8},shouldCenterContent&&{alignItems:'center'},child.props.style];}return React.cloneElement(child,props);}),shouldAddRightSpacing?React.createElement(reactNative.View,{style:styles$T.spacing,__source:{fileName:_jsxFileName$16,lineNumber:180}}):null);}}]);return Appbar;}(React.Component);Appbar.Content=AppbarContent$1;Appbar.Action=AppbarAction;Appbar.BackAction=AppbarBackAction;Appbar.Header=AppbarHeader$1;var styles$T=reactNative.StyleSheet.create({appbar:{height:DEFAULT_APPBAR_HEIGHT,flexDirection:'row',alignItems:'center',paddingHorizontal:4,elevation:4},spacing:{width:48}});var Appbar$1 = withTheme(Appbar);

var _jsxFileName$17="/Users/satya/Workspace/Callstack/react-native-paper/src/components/TextInput/Label/InputLabel.tsx";var InputLabel=function InputLabel(props){var parentState=props.parentState,labelBackground=props.labelBackground;var _props$labelProps=props.labelProps,label=_props$labelProps.label,error=_props$labelProps.error,onLayoutAnimatedText=_props$labelProps.onLayoutAnimatedText,hasActiveOutline=_props$labelProps.hasActiveOutline,activeColor=_props$labelProps.activeColor,placeholderStyle=_props$labelProps.placeholderStyle,baseLabelTranslateX=_props$labelProps.baseLabelTranslateX,baseLabelTranslateY=_props$labelProps.baseLabelTranslateY,font=_props$labelProps.font,fontSize=_props$labelProps.fontSize,fontWeight=_props$labelProps.fontWeight,placeholderOpacity=_props$labelProps.placeholderOpacity,wiggleOffsetX=_props$labelProps.wiggleOffsetX,labelScale=_props$labelProps.labelScale,topPosition=_props$labelProps.topPosition,paddingOffset=_props$labelProps.paddingOffset,placeholderColor=_props$labelProps.placeholderColor,errorColor=_props$labelProps.errorColor;var labelTranslationX={transform:[{translateX:parentState.labeled.interpolate({inputRange:[0,1],outputRange:[baseLabelTranslateX,0]})}]};var labelStyle=objectSpread({},font,{fontSize:fontSize,fontWeight:fontWeight,transform:[{translateX:parentState.error.interpolate({inputRange:[0,0.5,1],outputRange:[0,parentState.value&&error?wiggleOffsetX:0,0]})},{translateY:parentState.labeled.interpolate({inputRange:[0,1],outputRange:[baseLabelTranslateY,0]})},{scale:parentState.labeled.interpolate({inputRange:[0,1],outputRange:[labelScale,1]})}]});return label?React__default.createElement(reactNative.Animated.View,{pointerEvents:"none",style:[reactNative.StyleSheet.absoluteFill,{opacity:parentState.value||parentState.focused?parentState.labelLayout.measured?1:0:1},labelTranslationX],__source:{fileName:_jsxFileName$17,lineNumber:75}},labelBackground&&labelBackground({parentState:parentState,labelStyle:labelStyle,labelProps:props.labelProps}),React__default.createElement(AnimatedText$1,{onLayout:onLayoutAnimatedText,style:[placeholderStyle,{top:topPosition},labelStyle,paddingOffset||{},{color:activeColor,opacity:parentState.labeled.interpolate({inputRange:[0,1],outputRange:[hasActiveOutline?1:0,0]})}],numberOfLines:1,__source:{fileName:_jsxFileName$17,lineNumber:97}},label),React__default.createElement(AnimatedText$1,{style:[placeholderStyle,{top:topPosition},labelStyle,paddingOffset,{color:error&&errorColor?errorColor:placeholderColor,opacity:placeholderOpacity}],numberOfLines:1,__source:{fileName:_jsxFileName$17,lineNumber:118}},label)):null;};

var _jsxFileName$18="/Users/satya/Workspace/Callstack/react-native-paper/src/components/TextInput/Label/LabelBackground.tsx";var LabelBackground=function LabelBackground(_ref){var parentState=_ref.parentState,_ref$labelProps=_ref.labelProps,placeholderStyle=_ref$labelProps.placeholderStyle,baseLabelTranslateX=_ref$labelProps.baseLabelTranslateX,topPosition=_ref$labelProps.topPosition,hasActiveOutline=_ref$labelProps.hasActiveOutline,label=_ref$labelProps.label,backgroundColor=_ref$labelProps.backgroundColor,labelStyle=_ref.labelStyle;var hasFocus=hasActiveOutline||parentState.value;var opacity=parentState.labeled.interpolate({inputRange:[0,1],outputRange:[hasFocus?1:0,0]});var labelTranslationX={transform:[{translateX:parentState.labeled.interpolate({inputRange:[0,1],outputRange:[-baseLabelTranslateX,0]})}]};return label?[React.createElement(reactNative.Animated.View,{key:"labelBackground-view",pointerEvents:"none",style:[reactNative.StyleSheet.absoluteFill,styles$U.view,{backgroundColor:backgroundColor,opacity:opacity},labelTranslationX],__source:{fileName:_jsxFileName$18,lineNumber:39}}),React.createElement(AnimatedText$1,{key:"labelBackground-text",style:[placeholderStyle,labelStyle,styles$U.outlinedLabel,{top:topPosition+1,backgroundColor:backgroundColor,opacity:opacity,transform:[].concat(toConsumableArray(labelStyle.transform),[{scaleY:parentState.labeled.interpolate({inputRange:[0,1],outputRange:[0.2,1]})}])}],numberOfLines:1,__source:{fileName:_jsxFileName$18,lineNumber:52}},label)]:null;};var styles$U=reactNative.StyleSheet.create({view:{position:'absolute',top:6,left:10,width:8,height:2},outlinedLabel:{position:'absolute',left:18,paddingHorizontal:0,color:'transparent'}});

var MAXIMIZED_LABEL_FONT_SIZE=16;var MINIMIZED_LABEL_FONT_SIZE=12;var LABEL_WIGGLE_X_OFFSET=4;var LABEL_PADDING_HORIZONTAL=12;

var calculateLabelTopPosition=function calculateLabelTopPosition(labelHeight){var height=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var optionalPadding=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var customHeight=height>0?height:0;return Math.floor((customHeight-labelHeight)/2+optionalPadding);};var calculateInputHeight=function calculateInputHeight(labelHeight){var height=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var minHeight=arguments.length>2?arguments[2]:undefined;var finalHeight=height>0?height:labelHeight;if(height>0)return height;return finalHeight<minHeight?minHeight:finalHeight;};var calculatePadding=function calculatePadding(props){var height=props.height,_props$multiline=props.multiline,multiline=_props$multiline===void 0?false:_props$multiline;var result=0;if(multiline){if(height&&multiline){result=calculateTextAreaPadding(props);}else{result=calculateInputPadding(props);}}return Math.max(0,result);};var calculateTextAreaPadding=function calculateTextAreaPadding(props){var dense=props.dense;return dense?10:20;};var calculateInputPadding=function calculateInputPadding(_ref){var topPosition=_ref.topPosition,fontSize=_ref.fontSize,multiline=_ref.multiline,scale=_ref.scale,dense=_ref.dense,offset=_ref.offset,isAndroid=_ref.isAndroid;var refFontSize=scale*fontSize;var result=Math.floor(topPosition/2);result=result+Math.floor((refFontSize-fontSize)/2)-(scale<1?offset/2:0);if(multiline&&isAndroid)result=Math.min(dense?offset/2:offset,result);return result;};var adjustPaddingOut=function adjustPaddingOut(_ref2){var pad=_ref2.pad,multiline=_ref2.multiline,label=_ref2.label,scale=_ref2.scale,height=_ref2.height,fontSize=_ref2.fontSize,dense=_ref2.dense,offset=_ref2.offset,isAndroid=_ref2.isAndroid;var refFontSize=scale*fontSize;var result=pad;if(height){return {paddingTop:Math.max(0,(height-fontSize)/2),paddingBottom:Math.max(0,(height-fontSize)/2)};}if(!isAndroid&&multiline){if(dense){if(label){result+=scale<1?Math.min(offset,refFontSize/2*scale):0;}else{result+=0;}}if(!dense){if(label){result+=scale<1?Math.min(offset,refFontSize*scale):Math.min(offset/2,refFontSize*scale);}else{result+=scale<1?Math.min(offset/2,refFontSize*scale):0;}}result=Math.floor(result);}return {paddingTop:result,paddingBottom:result};};var adjustPaddingFlat=function adjustPaddingFlat(_ref3){var pad=_ref3.pad,scale=_ref3.scale,multiline=_ref3.multiline,label=_ref3.label,height=_ref3.height,offset=_ref3.offset,dense=_ref3.dense,fontSize=_ref3.fontSize,isAndroid=_ref3.isAndroid,styles=_ref3.styles;var result=pad;var topResult=result;var bottomResult=result;var paddingTop=styles.paddingTop,paddingBottom=styles.paddingBottom;var refFontSize=scale*fontSize;if(!multiline){if(label){return {paddingTop:paddingTop,paddingBottom:paddingBottom};}return {paddingTop:result,paddingBottom:result};}if(label){topResult=paddingTop;bottomResult=paddingBottom;if(!isAndroid){if(dense){topResult+=scale<1?Math.min(result,refFontSize*scale)-result/2:Math.min(result,refFontSize*scale)-result/2;}if(!dense){topResult+=scale<1?Math.min(offset/2,refFontSize*scale):Math.min(result,refFontSize*scale)-offset/2;}}topResult=Math.floor(topResult);}else{if(height){return {paddingTop:Math.max(0,(height-fontSize)/2),paddingBottom:Math.max(0,(height-fontSize)/2)};}if(!isAndroid){if(dense){result+=scale<1?Math.min(offset/2,fontSize/2*scale):Math.min(offset/2,scale);}if(!dense){result+=scale<1?Math.min(offset,fontSize*scale):Math.min(fontSize,offset/2*scale);}result=Math.floor(result);topResult=result;bottomResult=result;}}return {paddingTop:Math.max(0,topResult),paddingBottom:Math.max(0,bottomResult)};};var interpolatePlaceholder=function interpolatePlaceholder(labeled,hasActiveOutline){return labeled.interpolate({inputRange:[0,1],outputRange:[hasActiveOutline?0:1,1]});};

var _jsxFileName$19="/Users/satya/Workspace/Callstack/react-native-paper/src/components/TextInput/TextInputOutlined.tsx";var OUTLINE_MINIMIZED_LABEL_Y_OFFSET=-6;var LABEL_PADDING_TOP=8;var MIN_HEIGHT=64;var MIN_DENSE_HEIGHT=48;var INPUT_PADDING_HORIZONTAL=14;var TextInputOutlined=function(_React$Component){inherits(TextInputOutlined,_React$Component);function TextInputOutlined(){classCallCheck(this,TextInputOutlined);return possibleConstructorReturn(this,getPrototypeOf$1(TextInputOutlined).apply(this,arguments));}createClass(TextInputOutlined,[{key:"render",value:function render(){var _this$props=this.props,disabled=_this$props.disabled,editable=_this$props.editable,label=_this$props.label,error=_this$props.error,selectionColor=_this$props.selectionColor,underlineColor=_this$props.underlineColor,dense=_this$props.dense,style=_this$props.style,theme=_this$props.theme,render=_this$props.render,multiline=_this$props.multiline,parentState=_this$props.parentState,innerRef=_this$props.innerRef,onFocus=_this$props.onFocus,onBlur=_this$props.onBlur,onChangeText=_this$props.onChangeText,onLayoutAnimatedText=_this$props.onLayoutAnimatedText,rest=objectWithoutProperties(_this$props,["disabled","editable","label","error","selectionColor","underlineColor","dense","style","theme","render","multiline","parentState","innerRef","onFocus","onBlur","onChangeText","onLayoutAnimatedText"]);var colors=theme.colors,fonts=theme.fonts;var font=fonts.regular;var hasActiveOutline=parentState.focused||error;var _ref=reactNative.StyleSheet.flatten(style)||{},fontSizeStyle=_ref.fontSize,fontWeight=_ref.fontWeight,height=_ref.height,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=_ref$backgroundColor===void 0?colors.background:_ref$backgroundColor,viewStyle=objectWithoutProperties(_ref,["fontSize","fontWeight","height","backgroundColor"]);var fontSize=fontSizeStyle||MAXIMIZED_LABEL_FONT_SIZE;var inputTextColor,activeColor,outlineColor,placeholderColor,errorColor,containerStyle;if(disabled){inputTextColor=activeColor=color(colors.text).alpha(0.54).rgb().string();placeholderColor=outlineColor=colors.disabled;}else{inputTextColor=colors.text;activeColor=error?colors.error:colors.primary;placeholderColor=outlineColor=colors.placeholder;errorColor=colors.error;}var labelScale=MINIMIZED_LABEL_FONT_SIZE/fontSize;var fontScale=MAXIMIZED_LABEL_FONT_SIZE/fontSize;var labelWidth=parentState.labelLayout.width;var labelHeight=parentState.labelLayout.height;var labelHalfWidth=labelWidth/2;var labelHalfHeight=labelHeight/2;var baseLabelTranslateX=(reactNative.I18nManager.isRTL?1:-1)*(labelHalfWidth-labelScale*labelWidth/2-(fontSize-MINIMIZED_LABEL_FONT_SIZE)*labelScale);var minInputHeight=(dense?MIN_DENSE_HEIGHT:MIN_HEIGHT)-LABEL_PADDING_TOP;var inputHeight=calculateInputHeight(labelHeight,height,minInputHeight);var topPosition=calculateLabelTopPosition(labelHeight,inputHeight,LABEL_PADDING_TOP);if(height&&typeof height!=='number')console.warn('Currently we support only numbers in height prop');var paddingSettings={height:height?+height:null,labelHalfHeight:labelHalfHeight,offset:LABEL_PADDING_TOP,multiline:multiline?multiline:null,dense:dense?dense:null,topPosition:topPosition,fontSize:fontSize,label:label,scale:fontScale,isAndroid:reactNative.Platform.OS==='android',styles:reactNative.StyleSheet.flatten(dense?styles$V.inputOutlinedDense:styles$V.inputOutlined)};var pad=calculatePadding(paddingSettings);var paddingOut=adjustPaddingOut(objectSpread({},paddingSettings,{pad:pad}));var baseLabelTranslateY=-labelHalfHeight-(topPosition+OUTLINE_MINIMIZED_LABEL_Y_OFFSET);var placeholderOpacity=interpolatePlaceholder(parentState.labeled,hasActiveOutline);var labelProps={label:label,onLayoutAnimatedText:onLayoutAnimatedText,placeholderOpacity:placeholderOpacity,error:error,placeholderStyle:styles$V.placeholder,baseLabelTranslateY:baseLabelTranslateY,baseLabelTranslateX:baseLabelTranslateX,font:font,fontSize:fontSize,fontWeight:fontWeight,labelScale:labelScale,wiggleOffsetX:LABEL_WIGGLE_X_OFFSET,topPosition:topPosition,hasActiveOutline:hasActiveOutline,activeColor:activeColor,placeholderColor:placeholderColor,backgroundColor:backgroundColor,errorColor:errorColor};var minHeight=height||(dense?MIN_DENSE_HEIGHT:MIN_HEIGHT);return React.createElement(reactNative.View,{style:[containerStyle,viewStyle],__source:{fileName:_jsxFileName$19,lineNumber:188}},React.createElement(reactNative.View,{__source:{fileName:_jsxFileName$19,lineNumber:194}},React.createElement(Outline,{theme:theme,hasActiveOutline:hasActiveOutline,activeColor:activeColor,outlineColor:outlineColor,backgroundColor:backgroundColor,__source:{fileName:_jsxFileName$19,lineNumber:195}}),React.createElement(reactNative.View,{style:{paddingTop:LABEL_PADDING_TOP,paddingBottom:0,minHeight:minHeight},__source:{fileName:_jsxFileName$19,lineNumber:202}},React.createElement(InputLabel,{parentState:parentState,labelProps:labelProps,labelBackground:LabelBackground,__source:{fileName:_jsxFileName$19,lineNumber:209}}),render&&render(objectSpread({},rest,{ref:innerRef,onChangeText:onChangeText,placeholder:label?parentState.placeholder:this.props.placeholder,placeholderTextColor:placeholderColor,editable:!disabled&&editable,selectionColor:typeof selectionColor==='undefined'?activeColor:selectionColor,onFocus:onFocus,onBlur:onBlur,underlineColorAndroid:'transparent',multiline:multiline,style:[styles$V.input,!multiline||multiline&&height?{height:inputHeight}:{},paddingOut,objectSpread({},font,{fontSize:fontSize,fontWeight:fontWeight,color:inputTextColor,textAlignVertical:multiline?'top':'center'})]})))));}}]);return TextInputOutlined;}(React.Component);TextInputOutlined.defaultProps={disabled:false,error:false,multiline:false,editable:true,render:function render(props){return React.createElement(reactNative.TextInput,_extends_1({},props,{__source:{fileName:_jsxFileName$19,lineNumber:44}}));}};var Outline=function Outline(_ref2){var theme=_ref2.theme,hasActiveOutline=_ref2.hasActiveOutline,activeColor=_ref2.activeColor,outlineColor=_ref2.outlineColor,backgroundColor=_ref2.backgroundColor;return React.createElement(reactNative.View,{pointerEvents:"none",style:[styles$V.outline,{backgroundColor:backgroundColor,borderRadius:theme.roundness,borderWidth:hasActiveOutline?2:1,borderColor:hasActiveOutline?activeColor:outlineColor}],__source:{fileName:_jsxFileName$19,lineNumber:272}});};var styles$V=reactNative.StyleSheet.create({placeholder:{position:'absolute',left:0,paddingHorizontal:INPUT_PADDING_HORIZONTAL},outline:{position:'absolute',left:0,right:0,top:6,bottom:0},input:{flexGrow:1,paddingHorizontal:INPUT_PADDING_HORIZONTAL,margin:0,textAlign:reactNative.I18nManager.isRTL?'right':'left',zIndex:1},inputOutlined:{paddingTop:8,paddingBottom:8},inputOutlinedDense:{paddingTop:4,paddingBottom:4}});

var _jsxFileName$1a="/Users/satya/Workspace/Callstack/react-native-paper/src/components/TextInput/TextInputFlat.tsx";var MINIMIZED_LABEL_Y_OFFSET=-18;var LABEL_PADDING_TOP$1=30;var LABEL_PADDING_TOP_DENSE=24;var MIN_HEIGHT$1=64;var MIN_DENSE_HEIGHT_WL=52;var MIN_DENSE_HEIGHT$1=40;var INPUT_OFFSET=8;var TextInputFlat=function(_React$Component){inherits(TextInputFlat,_React$Component);function TextInputFlat(){classCallCheck(this,TextInputFlat);return possibleConstructorReturn(this,getPrototypeOf$1(TextInputFlat).apply(this,arguments));}createClass(TextInputFlat,[{key:"render",value:function render(){var _this$props=this.props,disabled=_this$props.disabled,editable=_this$props.editable,label=_this$props.label,error=_this$props.error,selectionColor=_this$props.selectionColor,underlineColor=_this$props.underlineColor,dense=_this$props.dense,style=_this$props.style,theme=_this$props.theme,render=_this$props.render,multiline=_this$props.multiline,parentState=_this$props.parentState,innerRef=_this$props.innerRef,onFocus=_this$props.onFocus,onBlur=_this$props.onBlur,onChangeText=_this$props.onChangeText,onLayoutAnimatedText=_this$props.onLayoutAnimatedText,rest=objectWithoutProperties(_this$props,["disabled","editable","label","error","selectionColor","underlineColor","dense","style","theme","render","multiline","parentState","innerRef","onFocus","onBlur","onChangeText","onLayoutAnimatedText"]);var colors=theme.colors,fonts=theme.fonts;var font=fonts.regular;var hasActiveOutline=parentState.focused||error;var _ref=reactNative.StyleSheet.flatten(style)||{},fontSizeStyle=_ref.fontSize,fontWeight=_ref.fontWeight,height=_ref.height,paddingHorizontal=_ref.paddingHorizontal,viewStyle=objectWithoutProperties(_ref,["fontSize","fontWeight","height","paddingHorizontal"]);var fontSize=fontSizeStyle||MAXIMIZED_LABEL_FONT_SIZE;var paddingOffset=paddingHorizontal!==undefined&&typeof paddingHorizontal==='number'?{paddingHorizontal:paddingHorizontal}:reactNative.StyleSheet.flatten(styles$W.paddingOffset);var inputTextColor,activeColor,underlineColorCustom,placeholderColor,errorColor;if(disabled){inputTextColor=activeColor=color(colors.text).alpha(0.54).rgb().string();placeholderColor=colors.disabled;underlineColorCustom='transparent';}else{inputTextColor=colors.text;activeColor=error?colors.error:colors.primary;placeholderColor=colors.placeholder;errorColor=colors.error;underlineColorCustom=underlineColor||colors.disabled;}var containerStyle={backgroundColor:theme.dark?color(colors.background).lighten(0.24).rgb().string():color(colors.background).darken(0.06).rgb().string(),borderTopLeftRadius:theme.roundness,borderTopRightRadius:theme.roundness};var labelScale=MINIMIZED_LABEL_FONT_SIZE/fontSize;var fontScale=MAXIMIZED_LABEL_FONT_SIZE/fontSize;var labelWidth=parentState.labelLayout.width;var labelHeight=parentState.labelLayout.height;var labelHalfWidth=labelWidth/2;var labelHalfHeight=labelHeight/2;var baseLabelTranslateX=(reactNative.I18nManager.isRTL?1:-1)*(labelHalfWidth-labelScale*labelWidth/2)+(1-labelScale)*paddingOffset.paddingHorizontal;var minInputHeight=dense?(label?MIN_DENSE_HEIGHT_WL:MIN_DENSE_HEIGHT$1)-LABEL_PADDING_TOP_DENSE:MIN_HEIGHT$1-LABEL_PADDING_TOP$1;var inputHeight=calculateInputHeight(labelHeight,height,minInputHeight);var topPosition=calculateLabelTopPosition(labelHeight,inputHeight,multiline&&height?0:!height?minInputHeight/2:0);if(height&&typeof height!=='number')console.warn('Currently we support only numbers in height prop');var paddingSettings={height:height?+height:null,labelHalfHeight:labelHalfHeight,offset:INPUT_OFFSET,multiline:multiline?multiline:null,dense:dense?dense:null,topPosition:topPosition,fontSize:fontSize,label:label,scale:fontScale,isAndroid:reactNative.Platform.OS==='android',styles:reactNative.StyleSheet.flatten(dense?styles$W.inputFlatDense:styles$W.inputFlat)};var pad=calculatePadding(paddingSettings);var paddingFlat=adjustPaddingFlat(objectSpread({},paddingSettings,{pad:pad}));var baseLabelTranslateY=-labelHalfHeight-(topPosition+MINIMIZED_LABEL_Y_OFFSET);var placeholderOpacity=hasActiveOutline?interpolatePlaceholder(parentState.labeled,hasActiveOutline):parentState.labelLayout.measured?1:0;var labelProps={label:label,onLayoutAnimatedText:onLayoutAnimatedText,placeholderOpacity:placeholderOpacity,error:error,placeholderStyle:styles$W.placeholder,baseLabelTranslateY:baseLabelTranslateY,baseLabelTranslateX:baseLabelTranslateX,font:font,fontSize:fontSize,fontWeight:fontWeight,labelScale:labelScale,wiggleOffsetX:LABEL_WIGGLE_X_OFFSET,topPosition:topPosition,paddingOffset:paddingOffset,hasActiveOutline:hasActiveOutline,activeColor:activeColor,placeholderColor:placeholderColor,errorColor:errorColor};var minHeight=height||(dense?label?MIN_DENSE_HEIGHT_WL:MIN_DENSE_HEIGHT$1:MIN_HEIGHT$1);var flatHeight=inputHeight+(!height?dense?LABEL_PADDING_TOP_DENSE:LABEL_PADDING_TOP$1:0);return React.createElement(reactNative.View,{style:[containerStyle,viewStyle],__source:{fileName:_jsxFileName$1a,lineNumber:222}},React.createElement(Underline,{parentState:parentState,underlineColorCustom:underlineColorCustom,error:error,colors:colors,activeColor:activeColor,__source:{fileName:_jsxFileName$1a,lineNumber:223}}),React.createElement(reactNative.View,{style:{paddingTop:0,paddingBottom:0,minHeight:minHeight},__source:{fileName:_jsxFileName$1a,lineNumber:230}},React.createElement(InputLabel,{parentState:parentState,labelProps:labelProps,__source:{fileName:_jsxFileName$1a,lineNumber:237}}),render&&render(objectSpread({},rest,{ref:innerRef,onChangeText:onChangeText,placeholder:label?parentState.placeholder:this.props.placeholder,placeholderTextColor:placeholderColor,editable:!disabled&&editable,selectionColor:typeof selectionColor==='undefined'?activeColor:selectionColor,onFocus:onFocus,onBlur:onBlur,underlineColorAndroid:'transparent',multiline:multiline,style:[styles$W.input,paddingOffset,!multiline||multiline&&height?{height:flatHeight}:{},paddingFlat,objectSpread({},font,{fontSize:fontSize,fontWeight:fontWeight,color:inputTextColor,textAlignVertical:multiline?'top':'center'})]}))));}}]);return TextInputFlat;}(React.Component);TextInputFlat.defaultProps={disabled:false,error:false,multiline:false,editable:true,render:function render(props){return React.createElement(reactNative.TextInput,_extends_1({},props,{__source:{fileName:_jsxFileName$1a,lineNumber:47}}));}};var Underline=function Underline(_ref2){var parentState=_ref2.parentState,error=_ref2.error,colors=_ref2.colors,activeColor=_ref2.activeColor,underlineColorCustom=_ref2.underlineColorCustom;var backgroundColor=parentState.focused?activeColor:underlineColorCustom;if(error)backgroundColor=colors.error;return React.createElement(reactNative.Animated.View,{style:[styles$W.underline,{backgroundColor:backgroundColor,transform:[{scaleY:parentState.focused?1:0.5}]}],__source:{fileName:_jsxFileName$1a,lineNumber:306}});};var styles$W=reactNative.StyleSheet.create({placeholder:{position:'absolute',left:0},underline:{position:'absolute',left:0,right:0,bottom:0,height:2},input:{flexGrow:1,margin:0,textAlign:reactNative.I18nManager.isRTL?'right':'left',zIndex:1},inputFlat:{paddingTop:24,paddingBottom:4},inputFlatDense:{paddingTop:22,paddingBottom:2},paddingOffset:{paddingHorizontal:LABEL_PADDING_HORIZONTAL}});

var _jsxFileName$1b="/Users/satya/Workspace/Callstack/react-native-paper/src/components/TextInput/TextInput.tsx";var BLUR_ANIMATION_DURATION=180;var FOCUS_ANIMATION_DURATION=150;var TextInput=function(_React$Component){inherits(TextInput,_React$Component);function TextInput(){var _getPrototypeOf2;var _this;classCallCheck(this,TextInput);for(var _len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++){_args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf$1(TextInput)).call.apply(_getPrototypeOf2,[this].concat(_args)));_this.state={labeled:new reactNative.Animated.Value((_this.props.value!==undefined?_this.props.value:_this.props.defaultValue)?0:1),error:new reactNative.Animated.Value(_this.props.error?1:0),focused:false,placeholder:'',value:_this.props.value!==undefined?_this.props.value:_this.props.defaultValue,labelLayout:{measured:false,width:0,height:0}};_this.showPlaceholder=function(){if(_this.timer){clearTimeout(_this.timer);}_this.timer=setTimeout(function(){return _this.setState({placeholder:_this.props.placeholder});},50);};_this.hidePlaceholder=function(){return _this.setState({placeholder:''});};_this.showError=function(){reactNative.Animated.timing(_this.state.error,{toValue:1,duration:FOCUS_ANIMATION_DURATION,useNativeDriver:reactNative.Platform.select({ios:false,default:true})}).start(_this.showPlaceholder);};_this.hideError=function(){reactNative.Animated.timing(_this.state.error,{toValue:0,duration:BLUR_ANIMATION_DURATION,useNativeDriver:reactNative.Platform.select({ios:false,default:true})}).start();};_this.restoreLabel=function(){return reactNative.Animated.timing(_this.state.labeled,{toValue:1,duration:FOCUS_ANIMATION_DURATION,useNativeDriver:reactNative.Platform.select({ios:false,default:true})}).start();};_this.minimizeLabel=function(){return reactNative.Animated.timing(_this.state.labeled,{toValue:0,duration:BLUR_ANIMATION_DURATION,useNativeDriver:reactNative.Platform.select({ios:false,default:true})}).start();};_this.handleFocus=function(args){if(_this.props.disabled||!_this.props.editable){return;}_this.setState({focused:true});if(_this.props.onFocus){_this.props.onFocus(args);}};_this.handleBlur=function(args){if(_this.props.disabled||!_this.props.editable){return;}_this.setState({focused:false});if(_this.props.onBlur){_this.props.onBlur(args);}};_this.handleChangeText=function(value){if(!_this.props.editable){return;}_this.setState({value:value});_this.props.onChangeText&&_this.props.onChangeText(value);};_this.handleLayoutAnimatedText=function(e){_this.setState({labelLayout:{width:e.nativeEvent.layout.width,height:e.nativeEvent.layout.height,measured:true}});};return _this;}createClass(TextInput,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){if(prevState.focused!==this.state.focused||prevState.value!==this.state.value||prevState.labelLayout!==this.state.labelLayout){if(this.state.value||this.state.focused){this.minimizeLabel();}else{this.restoreLabel();}}if(prevState.focused!==this.state.focused||prevProps.label!==this.props.label){if(this.state.focused||!this.props.label){this.showPlaceholder();}else{this.hidePlaceholder();}}if(prevProps.error!==this.props.error){if(this.props.error){this.showError();}else{this.hideError();}}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.timer){clearTimeout(this.timer);}}},{key:"setNativeProps",value:function setNativeProps(args){return this.root&&this.root.setNativeProps(args);}},{key:"isFocused",value:function isFocused(){return this.root&&this.root.isFocused();}},{key:"clear",value:function clear(){return this.root&&this.root.clear();}},{key:"focus",value:function focus(){return this.root&&this.root.focus();}},{key:"blur",value:function blur(){return this.root&&this.root.blur();}},{key:"render",value:function render(){var _this2=this;var _ref=this.props,mode=_ref.mode,rest=objectWithoutProperties(_ref,["mode"]);return mode==='outlined'?React.createElement(TextInputOutlined,_extends_1({},rest,{parentState:this.state,innerRef:function innerRef(ref){_this2.root=ref;},onFocus:this.handleFocus,onBlur:this.handleBlur,onChangeText:this.handleChangeText,onLayoutAnimatedText:this.handleLayoutAnimatedText,__source:{fileName:_jsxFileName$1b,lineNumber:410}})):React.createElement(TextInputFlat,_extends_1({},rest,{parentState:this.state,innerRef:function innerRef(ref){_this2.root=ref;},onFocus:this.handleFocus,onBlur:this.handleBlur,onChangeText:this.handleChangeText,onLayoutAnimatedText:this.handleLayoutAnimatedText,__source:{fileName:_jsxFileName$1b,lineNumber:422}}));}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(nextProps,prevState){return {value:typeof nextProps.value!=='undefined'?nextProps.value:prevState.value};}}]);return TextInput;}(React.Component);TextInput.defaultProps={mode:'flat',dense:false,disabled:false,error:false,multiline:false,editable:true,render:function render(props){return React.createElement(reactNative.TextInput,_extends_1({},props,{__source:{fileName:_jsxFileName$1b,lineNumber:174}}));}};var TextInput$1 = withTheme(TextInput);

var _jsxFileName$1c="/Users/satya/Workspace/Callstack/react-native-paper/src/components/ToggleButton/ToggleButtonGroup.tsx";var ToggleButtonGroupContext=React.createContext(null);var ToggleButtonGroup=function(_React$Component){inherits(ToggleButtonGroup,_React$Component);function ToggleButtonGroup(){classCallCheck(this,ToggleButtonGroup);return possibleConstructorReturn(this,getPrototypeOf$1(ToggleButtonGroup).apply(this,arguments));}createClass(ToggleButtonGroup,[{key:"render",value:function render(){var _this$props=this.props,value=_this$props.value,onValueChange=_this$props.onValueChange,children=_this$props.children;return React.createElement(ToggleButtonGroupContext.Provider,{value:{value:value,onValueChange:onValueChange},__source:{fileName:_jsxFileName$1c,lineNumber:63}},children);}}]);return ToggleButtonGroup;}(React.Component);ToggleButtonGroup.displayName='ToggleButton.Group';

var _jsxFileName$1d="/Users/satya/Workspace/Callstack/react-native-paper/src/components/ToggleButton/ToggleButtonRow.tsx";var ToggleButtonRow=function(_React$Component){inherits(ToggleButtonRow,_React$Component);function ToggleButtonRow(){classCallCheck(this,ToggleButtonRow);return possibleConstructorReturn(this,getPrototypeOf$1(ToggleButtonRow).apply(this,arguments));}createClass(ToggleButtonRow,[{key:"render",value:function render(){var _this$props=this.props,value=_this$props.value,onValueChange=_this$props.onValueChange,children=_this$props.children,style=_this$props.style;var count=React.Children.count(children);return React.createElement(ToggleButton$1.Group,{value:value,onValueChange:onValueChange,__source:{fileName:_jsxFileName$1d,lineNumber:57}},React.createElement(reactNative.View,{style:[styles$X.row,style],__source:{fileName:_jsxFileName$1d,lineNumber:58}},React.Children.map(children,function(child,i){if(child&&child.type===ToggleButton$1){return React.cloneElement(child,{style:[styles$X.button,i===0?styles$X.first:i===count-1?styles$X.last:styles$X.middle,child.props.style]});}return child;})));}}]);return ToggleButtonRow;}(React.Component);ToggleButtonRow.displayName='ToggleButton.Row';var styles$X=reactNative.StyleSheet.create({row:{flexDirection:'row'},button:{borderWidth:reactNative.StyleSheet.hairlineWidth},first:{borderTopRightRadius:0,borderBottomRightRadius:0},middle:{borderRadius:0,borderLeftWidth:0},last:{borderLeftWidth:0,borderTopLeftRadius:0,borderBottomLeftRadius:0}});

var _jsxFileName$1e="/Users/satya/Workspace/Callstack/react-native-paper/src/components/ToggleButton/ToggleButton.tsx";var ToggleButton=function(_React$Component){inherits(ToggleButton,_React$Component);function ToggleButton(){classCallCheck(this,ToggleButton);return possibleConstructorReturn(this,getPrototypeOf$1(ToggleButton).apply(this,arguments));}createClass(ToggleButton,[{key:"render",value:function render(){var _this$props=this.props,icon=_this$props.icon,size=_this$props.size,theme=_this$props.theme,accessibilityLabel=_this$props.accessibilityLabel,disabled=_this$props.disabled,style=_this$props.style,value=_this$props.value,status=_this$props.status,_onPress=_this$props.onPress,rest=objectWithoutProperties(_this$props,["icon","size","theme","accessibilityLabel","disabled","style","value","status","onPress"]);var borderRadius=theme.roundness;return React.createElement(ToggleButtonGroupContext.Consumer,{__source:{fileName:_jsxFileName$1e,lineNumber:117}},function(context){var backgroundColor;var checked=context&&context.value===value||status==='checked';if(checked){backgroundColor=theme.dark?'rgba(255, 255, 255, .12)':'rgba(0, 0, 0, .08)';}else{backgroundColor='transparent';}return React.createElement(IconButton$1,_extends_1({borderless:false,icon:icon,onPress:function onPress(e){if(_onPress){_onPress(e);}if(context){context.onValueChange(!checked?value:null);}},size:size,accessibilityLabel:accessibilityLabel,disabled:disabled,style:[styles$Y.content,{backgroundColor:backgroundColor,borderRadius:borderRadius,borderColor:color(theme.dark?white:black).alpha(0.29).rgb().string()},style]},rest,{__source:{fileName:_jsxFileName$1e,lineNumber:133}}));});}}]);return ToggleButton;}(React.Component);ToggleButton.Group=ToggleButtonGroup;ToggleButton.Row=ToggleButtonRow;var styles$Y=reactNative.StyleSheet.create({content:{width:42,height:42,margin:0}});var ToggleButton$1 = withTheme(ToggleButton);

var _jsxFileName$1f="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Typography/Headline.tsx";var Headline=function Headline(props){return React.createElement(StyledText$1,_extends_1({},props,{alpha:0.87,family:"regular",style:[styles$Z.text,props.style],__source:{fileName:_jsxFileName$1f,lineNumber:33}}));};var styles$Z=reactNative.StyleSheet.create({text:{fontSize:24,lineHeight:32,marginVertical:2,letterSpacing:0}});

var _jsxFileName$1g="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Typography/Paragraph.tsx";var Paragraph=function Paragraph(props){return React.createElement(StyledText$1,_extends_1({},props,{alpha:0.87,family:"regular",style:[styles$_.text,props.style],__source:{fileName:_jsxFileName$1g,lineNumber:31}}));};var styles$_=reactNative.StyleSheet.create({text:{fontSize:14,lineHeight:20,marginVertical:2,letterSpacing:0.25}});

var _jsxFileName$1h="/Users/satya/Workspace/Callstack/react-native-paper/src/components/Typography/Subheading.tsx";var Subheading=function Subheading(props){return React.createElement(StyledText$1,_extends_1({},props,{alpha:0.87,family:"regular",style:[styles$$.text,props.style],__source:{fileName:_jsxFileName$1h,lineNumber:33}}));};var styles$$=reactNative.StyleSheet.create({text:{fontSize:16,lineHeight:24,marginVertical:2,letterSpacing:0.5}});

exports.$safeAreaView = index$2;
exports.$themeProvider = index$1;
exports.ActivityIndicator = ActivityIndicator$1;
exports.Appbar = Appbar$1;
exports.Avatar = Avatar$1;
exports.Badge = Badge$1;
exports.Banner = Banner$1;
exports.BottomNavigation = BottomNavigation$1;
exports.Button = Button$1;
exports.Caption = Caption;
exports.Card = Card$1;
exports.Checkbox = Checkbox$1;
exports.Chip = Chip$1;
exports.Colors = colors;
exports.DarkTheme = DarkTheme;
exports.DataTable = DataTable;
exports.DefaultTheme = DefaultTheme;
exports.Dialog = Dialog$1;
exports.Divider = Divider$1;
exports.Drawer = Drawer;
exports.FAB = FAB$1;
exports.Headline = Headline;
exports.HelperText = HelperText$1;
exports.IconButton = IconButton$1;
exports.List = List;
exports.Menu = Menu$1;
exports.Modal = Modal$1;
exports.Paragraph = Paragraph;
exports.Portal = Portal$1;
exports.ProgressBar = ProgressBar$1;
exports.Provider = Provider$1;
exports.RadioButton = RadioButton$1;
exports.Searchbar = Searchbar$1;
exports.Snackbar = Snackbar$1;
exports.Subheading = Subheading;
exports.Surface = Surface$1;
exports.Switch = Switch$1;
exports.Text = Text$1;
exports.TextInput = TextInput$1;
exports.ThemeProvider = ThemeProvider;
exports.Title = Title;
exports.ToggleButton = ToggleButton$1;
exports.TouchableRipple = TouchableRipple$1;
exports.configureFonts = configureFonts;
exports.overlay = overlay;
exports.shadow = shadow;
exports.useTheme = useTheme;
exports.withTheme = withTheme;
