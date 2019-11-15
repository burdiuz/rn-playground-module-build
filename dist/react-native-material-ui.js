'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactNative = require('react-native');
var merge = _interopDefault(require('lodash.merge'));
var React = require('react');
var React__default = _interopDefault(React);
var Entypo = _interopDefault(require('react-native-vector-icons/Entypo'));
var EvilIcons = _interopDefault(require('react-native-vector-icons/EvilIcons'));
var Feather = _interopDefault(require('react-native-vector-icons/Feather'));
var FontAwesome = _interopDefault(require('react-native-vector-icons/FontAwesome'));
var Foundation = _interopDefault(require('react-native-vector-icons/Foundation'));
var Ionicons = _interopDefault(require('react-native-vector-icons/Ionicons'));
var MaterialIcons = _interopDefault(require('react-native-vector-icons/MaterialIcons'));
var MaterialCommunityIcons = _interopDefault(require('react-native-vector-icons/MaterialCommunityIcons'));
var Octicons = _interopDefault(require('react-native-vector-icons/Octicons'));
var Zocial = _interopDefault(require('react-native-vector-icons/Zocial'));
var SimpleLineIcons = _interopDefault(require('react-native-vector-icons/SimpleLineIcons'));

var red50='#ffebee';var red100='#ffcdd2';var red200='#ef9a9a';var red300='#e57373';var red400='#ef5350';var red500='#f44336';var red600='#e53935';var red700='#d32f2f';var red800='#c62828';var red900='#b71c1c';var redA100='#ff8a80';var redA200='#ff5252';var redA400='#ff1744';var redA700='#d50000';var pink50='#fce4ec';var pink100='#f8bbd0';var pink200='#f48fb1';var pink300='#f06292';var pink400='#ec407a';var pink500='#e91e63';var pink600='#d81b60';var pink700='#c2185b';var pink800='#ad1457';var pink900='#880e4f';var pinkA100='#ff80ab';var pinkA200='#ff4081';var pinkA400='#f50057';var pinkA700='#c51162';var purple50='#f3e5f5';var purple100='#e1bee7';var purple200='#ce93d8';var purple300='#ba68c8';var purple400='#ab47bc';var purple500='#9c27b0';var purple600='#8e24aa';var purple700='#7b1fa2';var purple800='#6a1b9a';var purple900='#4a148c';var purpleA100='#ea80fc';var purpleA200='#e040fb';var purpleA400='#d500f9';var purpleA700='#aa00ff';var deepPurple50='#ede7f6';var deepPurple100='#d1c4e9';var deepPurple200='#b39ddb';var deepPurple300='#9575cd';var deepPurple400='#7e57c2';var deepPurple500='#673ab7';var deepPurple600='#5e35b1';var deepPurple700='#512da8';var deepPurple800='#4527a0';var deepPurple900='#311b92';var deepPurpleA100='#b388ff';var deepPurpleA200='#7c4dff';var deepPurpleA400='#651fff';var deepPurpleA700='#6200ea';var indigo50='#e8eaf6';var indigo100='#c5cae9';var indigo200='#9fa8da';var indigo300='#7986cb';var indigo400='#5c6bc0';var indigo500='#3f51b5';var indigo600='#3949ab';var indigo700='#303f9f';var indigo800='#283593';var indigo900='#1a237e';var indigoA100='#8c9eff';var indigoA200='#536dfe';var indigoA400='#3d5afe';var indigoA700='#304ffe';var blue50='#e3f2fd';var blue100='#bbdefb';var blue200='#90caf9';var blue300='#64b5f6';var blue400='#42a5f5';var blue500='#2196f3';var blue600='#1e88e5';var blue700='#1976d2';var blue800='#1565c0';var blue900='#0d47a1';var blueA100='#82b1ff';var blueA200='#448aff';var blueA400='#2979ff';var blueA700='#2962ff';var lightBlue50='#e1f5fe';var lightBlue100='#b3e5fc';var lightBlue200='#81d4fa';var lightBlue300='#4fc3f7';var lightBlue400='#29b6f6';var lightBlue500='#03a9f4';var lightBlue600='#039be5';var lightBlue700='#0288d1';var lightBlue800='#0277bd';var lightBlue900='#01579b';var lightBlueA100='#80d8ff';var lightBlueA200='#40c4ff';var lightBlueA400='#00b0ff';var lightBlueA700='#0091ea';var cyan50='#e0f7fa';var cyan100='#b2ebf2';var cyan200='#80deea';var cyan300='#4dd0e1';var cyan400='#26c6da';var cyan500='#00bcd4';var cyan600='#00acc1';var cyan700='#0097a7';var cyan800='#00838f';var cyan900='#006064';var cyanA100='#84ffff';var cyanA200='#18ffff';var cyanA400='#00e5ff';var cyanA700='#00b8d4';var teal50='#e0f2f1';var teal100='#b2dfdb';var teal200='#80cbc4';var teal300='#4db6ac';var teal400='#26a69a';var teal500='#009688';var teal600='#00897b';var teal700='#00796b';var teal800='#00695c';var teal900='#004d40';var tealA100='#a7ffeb';var tealA200='#64ffda';var tealA400='#1de9b6';var tealA700='#00bfa5';var green50='#e8f5e9';var green100='#c8e6c9';var green200='#a5d6a7';var green300='#81c784';var green400='#66bb6a';var green500='#4caf50';var green600='#43a047';var green700='#388e3c';var green800='#2e7d32';var green900='#1b5e20';var greenA100='#b9f6ca';var greenA200='#69f0ae';var greenA400='#00e676';var greenA700='#00c853';var lightGreen50='#f1f8e9';var lightGreen100='#dcedc8';var lightGreen200='#c5e1a5';var lightGreen300='#aed581';var lightGreen400='#9ccc65';var lightGreen500='#8bc34a';var lightGreen600='#7cb342';var lightGreen700='#689f38';var lightGreen800='#558b2f';var lightGreen900='#33691e';var lightGreenA100='#ccff90';var lightGreenA200='#b2ff59';var lightGreenA400='#76ff03';var lightGreenA700='#64dd17';var lime50='#f9fbe7';var lime100='#f0f4c3';var lime200='#e6ee9c';var lime300='#dce775';var lime400='#d4e157';var lime500='#cddc39';var lime600='#c0ca33';var lime700='#afb42b';var lime800='#9e9d24';var lime900='#827717';var limeA100='#f4ff81';var limeA200='#eeff41';var limeA400='#c6ff00';var limeA700='#aeea00';var yellow50='#fffde7';var yellow100='#fff9c4';var yellow200='#fff59d';var yellow300='#fff176';var yellow400='#ffee58';var yellow500='#ffeb3b';var yellow600='#fdd835';var yellow700='#fbc02d';var yellow800='#f9a825';var yellow900='#f57f17';var yellowA100='#ffff8d';var yellowA200='#ffff00';var yellowA400='#ffea00';var yellowA700='#ffd600';var amber50='#fff8e1';var amber100='#ffecb3';var amber200='#ffe082';var amber300='#ffd54f';var amber400='#ffca28';var amber500='#ffc107';var amber600='#ffb300';var amber700='#ffa000';var amber800='#ff8f00';var amber900='#ff6f00';var amberA100='#ffe57f';var amberA200='#ffd740';var amberA400='#ffc400';var amberA700='#ffab00';var orange50='#fff3e0';var orange100='#ffe0b2';var orange200='#ffcc80';var orange300='#ffb74d';var orange400='#ffa726';var orange500='#ff9800';var orange600='#fb8c00';var orange700='#f57c00';var orange800='#ef6c00';var orange900='#e65100';var orangeA100='#ffd180';var orangeA200='#ffab40';var orangeA400='#ff9100';var orangeA700='#ff6d00';var deepOrange50='#fbe9e7';var deepOrange100='#ffccbc';var deepOrange200='#ffab91';var deepOrange300='#ff8a65';var deepOrange400='#ff7043';var deepOrange500='#ff5722';var deepOrange600='#f4511e';var deepOrange700='#e64a19';var deepOrange800='#d84315';var deepOrange900='#bf360c';var deepOrangeA100='#ff9e80';var deepOrangeA200='#ff6e40';var deepOrangeA400='#ff3d00';var deepOrangeA700='#dd2c00';var brown50='#efebe9';var brown100='#d7ccc8';var brown200='#bcaaa4';var brown300='#a1887f';var brown400='#8d6e63';var brown500='#795548';var brown600='#6d4c41';var brown700='#5d4037';var brown800='#4e342e';var brown900='#3e2723';var blueGrey50='#eceff1';var blueGrey100='#cfd8dc';var blueGrey200='#b0bec5';var blueGrey300='#90a4ae';var blueGrey400='#78909c';var blueGrey500='#607d8b';var blueGrey600='#546e7a';var blueGrey700='#455a64';var blueGrey800='#37474f';var blueGrey900='#263238';var grey50='#fafafa';var grey100='#f5f5f5';var grey200='#eeeeee';var grey300='#e0e0e0';var grey400='#bdbdbd';var grey500='#9e9e9e';var grey600='#757575';var grey700='#616161';var grey800='#424242';var grey900='#212121';var black='#000000';var white='#ffffff';var transparent='transparent';var snackbarColor='#323232';

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
  white: white,
  transparent: transparent,
  snackbarColor: snackbarColor
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

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

var _slice=[].slice;var skippedModels=['keyword','gray','hex'];var hashedModelKeys={};Object.keys(colorConvert).forEach(function(model){hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')]=model;});var limiters={};function Color(obj,model){if(!(this instanceof Color)){return new Color(obj,model);}if(model&&model in skippedModels){model=null;}if(model&&!(model in colorConvert)){throw new Error('Unknown model: '+model);}var i;var channels;if(!obj){this.model='rgb';this.color=[0,0,0];this.valpha=1;}else if(obj instanceof Color){this.model=obj.model;this.color=obj.color.slice();this.valpha=obj.valpha;}else if(typeof obj==='string'){var result=colorString.get(obj);if(result===null){throw new Error('Unable to parse color from string: '+obj);}this.model=result.model;channels=colorConvert[this.model].channels;this.color=result.value.slice(0,channels);this.valpha=typeof result.value[channels]==='number'?result.value[channels]:1;}else if(obj.length){this.model=model||'rgb';channels=colorConvert[this.model].channels;var newArr=_slice.call(obj,0,channels);this.color=zeroArray(newArr,channels);this.valpha=typeof obj[channels]==='number'?obj[channels]:1;}else if(typeof obj==='number'){obj&=0xFFFFFF;this.model='rgb';this.color=[obj>>16&0xFF,obj>>8&0xFF,obj&0xFF];this.valpha=1;}else{this.valpha=1;var keys=Object.keys(obj);if('alpha'in obj){keys.splice(keys.indexOf('alpha'),1);this.valpha=typeof obj.alpha==='number'?obj.alpha:0;}var hashedKeys=keys.sort().join('');if(!(hashedKeys in hashedModelKeys)){throw new Error('Unable to parse color from object: '+JSON.stringify(obj));}this.model=hashedModelKeys[hashedKeys];var labels=colorConvert[this.model].labels;var color=[];for(i=0;i<labels.length;i++){color.push(obj[labels[i]]);}this.color=zeroArray(color);}if(limiters[this.model]){channels=colorConvert[this.model].channels;for(i=0;i<channels;i++){var limit=limiters[this.model][i];if(limit){this.color[i]=limit(this.color[i]);}}}this.valpha=Math.max(0,Math.min(1,this.valpha));if(Object.freeze){Object.freeze(this);}}Color.prototype={toString:function toString(){return this.string();},toJSON:function toJSON(){return this[this.model]();},string:function string(places){var self=this.model in colorString.to?this:this.rgb();self=self.round(typeof places==='number'?places:1);var args=self.valpha===1?self.color:self.color.concat(this.valpha);return colorString.to[self.model](args);},percentString:function percentString(places){var self=this.rgb().round(typeof places==='number'?places:1);var args=self.valpha===1?self.color:self.color.concat(this.valpha);return colorString.to.rgb.percent(args);},array:function array(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha);},object:function object(){var result={};var channels=colorConvert[this.model].channels;var labels=colorConvert[this.model].labels;for(var i=0;i<channels;i++){result[labels[i]]=this.color[i];}if(this.valpha!==1){result.alpha=this.valpha;}return result;},unitArray:function unitArray(){var rgb=this.rgb().color;rgb[0]/=255;rgb[1]/=255;rgb[2]/=255;if(this.valpha!==1){rgb.push(this.valpha);}return rgb;},unitObject:function unitObject(){var rgb=this.rgb().object();rgb.r/=255;rgb.g/=255;rgb.b/=255;if(this.valpha!==1){rgb.alpha=this.valpha;}return rgb;},round:function round(places){places=Math.max(places||0,0);return new Color(this.color.map(roundToPlace(places)).concat(this.valpha),this.model);},alpha:function alpha(val){if(arguments.length){return new Color(this.color.concat(Math.max(0,Math.min(1,val))),this.model);}return this.valpha;},red:getset('rgb',0,maxfn(255)),green:getset('rgb',1,maxfn(255)),blue:getset('rgb',2,maxfn(255)),hue:getset(['hsl','hsv','hsl','hwb','hcg'],0,function(val){return (val%360+360)%360;}),saturationl:getset('hsl',1,maxfn(100)),lightness:getset('hsl',2,maxfn(100)),saturationv:getset('hsv',1,maxfn(100)),value:getset('hsv',2,maxfn(100)),chroma:getset('hcg',1,maxfn(100)),gray:getset('hcg',2,maxfn(100)),white:getset('hwb',1,maxfn(100)),wblack:getset('hwb',2,maxfn(100)),cyan:getset('cmyk',0,maxfn(100)),magenta:getset('cmyk',1,maxfn(100)),yellow:getset('cmyk',2,maxfn(100)),black:getset('cmyk',3,maxfn(100)),x:getset('xyz',0,maxfn(100)),y:getset('xyz',1,maxfn(100)),z:getset('xyz',2,maxfn(100)),l:getset('lab',0,maxfn(100)),a:getset('lab',1),b:getset('lab',2),keyword:function keyword(val){if(arguments.length){return new Color(val);}return colorConvert[this.model].keyword(this.color);},hex:function hex(val){if(arguments.length){return new Color(val);}return colorString.to.hex(this.rgb().round().color);},rgbNumber:function rgbNumber(){var rgb=this.rgb().color;return (rgb[0]&0xFF)<<16|(rgb[1]&0xFF)<<8|rgb[2]&0xFF;},luminosity:function luminosity(){var rgb=this.rgb().color;var lum=[];for(var i=0;i<rgb.length;i++){var chan=rgb[i]/255;lum[i]=chan<=0.03928?chan/12.92:Math.pow((chan+0.055)/1.055,2.4);}return 0.2126*lum[0]+0.7152*lum[1]+0.0722*lum[2];},contrast:function contrast(color2){var lum1=this.luminosity();var lum2=color2.luminosity();if(lum1>lum2){return (lum1+0.05)/(lum2+0.05);}return (lum2+0.05)/(lum1+0.05);},level:function level(color2){var contrastRatio=this.contrast(color2);if(contrastRatio>=7.1){return 'AAA';}return contrastRatio>=4.5?'AA':'';},isDark:function isDark(){var rgb=this.rgb().color;var yiq=(rgb[0]*299+rgb[1]*587+rgb[2]*114)/1000;return yiq<128;},isLight:function isLight(){return !this.isDark();},negate:function negate(){var rgb=this.rgb();for(var i=0;i<3;i++){rgb.color[i]=255-rgb.color[i];}return rgb;},lighten:function lighten(ratio){var hsl=this.hsl();hsl.color[2]+=hsl.color[2]*ratio;return hsl;},darken:function darken(ratio){var hsl=this.hsl();hsl.color[2]-=hsl.color[2]*ratio;return hsl;},saturate:function saturate(ratio){var hsl=this.hsl();hsl.color[1]+=hsl.color[1]*ratio;return hsl;},desaturate:function desaturate(ratio){var hsl=this.hsl();hsl.color[1]-=hsl.color[1]*ratio;return hsl;},whiten:function whiten(ratio){var hwb=this.hwb();hwb.color[1]+=hwb.color[1]*ratio;return hwb;},blacken:function blacken(ratio){var hwb=this.hwb();hwb.color[2]+=hwb.color[2]*ratio;return hwb;},grayscale:function grayscale(){var rgb=this.rgb().color;var val=rgb[0]*0.3+rgb[1]*0.59+rgb[2]*0.11;return Color.rgb(val,val,val);},fade:function fade(ratio){return this.alpha(this.valpha-this.valpha*ratio);},opaquer:function opaquer(ratio){return this.alpha(this.valpha+this.valpha*ratio);},rotate:function rotate(degrees){var hsl=this.hsl();var hue=hsl.color[0];hue=(hue+degrees)%360;hue=hue<0?360+hue:hue;hsl.color[0]=hue;return hsl;},mix:function mix(mixinColor,weight){var color1=mixinColor.rgb();var color2=this.rgb();var p=weight===undefined?0.5:weight;var w=2*p-1;var a=color1.alpha()-color2.alpha();var w1=((w*a===-1?w:(w+a)/(1+w*a))+1)/2.0;var w2=1-w1;return Color.rgb(w1*color1.red()+w2*color2.red(),w1*color1.green()+w2*color2.green(),w1*color1.blue()+w2*color2.blue(),color1.alpha()*p+color2.alpha()*(1-p));}};Object.keys(colorConvert).forEach(function(model){if(skippedModels.indexOf(model)!==-1){return;}var channels=colorConvert[model].channels;Color.prototype[model]=function(){if(this.model===model){return new Color(this);}if(arguments.length){return new Color(arguments,model);}var newAlpha=typeof arguments[channels]==='number'?channels:this.valpha;return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha),model);};Color[model]=function(color){if(typeof color==='number'){color=zeroArray(_slice.call(arguments),channels);}return new Color(color,model);};});function roundTo(num,places){return Number(num.toFixed(places));}function roundToPlace(places){return function(num){return roundTo(num,places);};}function getset(model,channel,modifier){model=Array.isArray(model)?model:[model];model.forEach(function(m){(limiters[m]||(limiters[m]=[]))[channel]=modifier;});model=model[0];return function(val){var result;if(arguments.length){if(modifier){val=modifier(val);}result=this[model]();result.color[channel]=val;return result;}result=this[model]().color[channel];if(modifier){result=modifier(result);}return result;};}function maxfn(max){return function(v){return Math.max(0,Math.min(max,v));};}function assertArray(val){return Array.isArray(val)?val:[val];}function zeroArray(arr,length){for(var i=0;i<length;i++){if(typeof arr[i]!=='number'){arr[i]=0;}}return arr;}var color=Color;

var fontWeight={light:'300',normal:'400',medium:'500'};var typography = {fontWeight:fontWeight,appBar:{fontWeight:fontWeight.medium,fontSize:20},buttons:{fontWeight:fontWeight.medium,fontSize:14},subheading:{fontWeight:fontWeight.normal,fontSize:16,lineHeight:24},body2:{fontWeight:fontWeight.medium,fontSize:14,lineHeight:24},body1:{fontWeight:fontWeight.normal,fontSize:14,lineHeight:20}};

var spacing = {actionButtonSize:56,iconSize:24,avatarSize:40};

var lightTheme = {spacing:spacing,typography:typography,iconSet:'MaterialIcons',fontFamily:'Roboto',palette:{primaryColor:blue500,accentColor:red500,primaryTextColor:color(black).alpha(0.87).toString(),secondaryTextColor:color(black).alpha(0.54).toString(),alternateTextColor:white,canvasColor:white,borderColor:color(black).alpha(0.12).toString(),disabledColor:color(black).alpha(0.38).toString(),disabledTextColor:color(black).alpha(0.26).toString(),activeIcon:color(black).alpha(0.54).toString(),inactiveIcon:color(black).alpha(0.38).toString()}};

var getPlatformElevation=function getPlatformElevation(elevation){return {elevation:elevation};};

function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function darkenOrLighten(color$1){var ratio=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0.15;var c=color(color$1);return c.luminosity()>0.5?c.darken(ratio):c.lighten(ratio);}function getTheme(theme){for(var _len=arguments.length,more=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){more[_key-1]=arguments[_key];}var mergedTheme=merge.apply(void 0,[lightTheme,theme].concat(more));var _mergedTheme=mergedTheme,iconSet=_mergedTheme.iconSet,spacing=_mergedTheme.spacing,fontFamily=_mergedTheme.fontFamily,typography=_mergedTheme.typography,palette=_mergedTheme.palette;var baseTheme={iconSet:iconSet,spacing:spacing,fontFamily:fontFamily,typography:typography,palette:palette};mergedTheme=merge({actionButton:reactNative.StyleSheet.create(merge({positionContainer:{position:'absolute',bottom:20,right:20},container:{height:spacing.actionButtonSize,width:spacing.actionButtonSize,borderRadius:spacing.actionButtonSize/2,backgroundColor:palette.accentColor},overlayContainer:_objectSpread({},reactNative.StyleSheet.absoluteFillObject,{backgroundColor:color('#fff').alpha(0.8).toString()},getPlatformElevation(4)),toolbarPositionContainer:{position:'absolute',bottom:0,right:0,left:0},toolbarContainer:{flex:1,height:spacing.actionButtonSize,backgroundColor:palette.accentColor,flexDirection:'row'},toolbarActionContainer:{flex:1,alignItems:'center',justifyContent:'center'},speedDialContainer:{alignItems:'flex-end'},speedDialActionContainer:{flexDirection:'row',alignItems:'center',paddingLeft:8},speedDialActionIconContainer:{width:spacing.actionButtonSize,height:spacing.actionButtonSize,alignItems:'center',justifyContent:'center'},speedDialActionIcon:_objectSpread({},getPlatformElevation(2),{height:spacing.actionButtonSize-16,width:spacing.actionButtonSize-16,borderRadius:(spacing.actionButtonSize-16)/2,backgroundColor:grey500}),speedDialActionLabel:{color:palette.secondaryTextColor},speedDialActionLabelContainer:_objectSpread({},getPlatformElevation(2),{borderRadius:2,marginRight:24,paddingVertical:2,paddingHorizontal:8,backgroundColor:grey100}),icon:{color:white}},mergedTheme.actionButton)),avatar:reactNative.StyleSheet.create(merge({container:{width:spacing.avatarSize,height:spacing.avatarSize,borderRadius:spacing.avatarSize/2,backgroundColor:darkenOrLighten(palette.canvasColor,0.26).toString(),alignItems:'center',justifyContent:'center'},content:{color:palette.canvasColor}},mergedTheme.avatar)),badge:reactNative.StyleSheet.create(merge({container:{position:'absolute',width:16,height:16,borderRadius:8,alignItems:'center',justifyContent:'center',backgroundColor:palette.primaryColor},strokeContainer:{position:'absolute',width:16,height:16,borderRadius:8,alignItems:'center',justifyContent:'center',backgroundColor:palette.canvasColor},content:{color:palette.canvasColor,fontWeight:fontWeight.medium,fontSize:12}},mergedTheme.badge)),button:reactNative.StyleSheet.create(merge({container:{height:36,alignItems:'center',justifyContent:'center',paddingHorizontal:16,borderRadius:2,flexDirection:'row'},text:_objectSpread({color:black},typography.buttons),icon:{marginRight:8}},mergedTheme.button)),buttonFlat:reactNative.StyleSheet.create(merge({},mergedTheme.buttonFlat)),buttonDisabled:reactNative.StyleSheet.create(merge({text:{color:palette.disabledTextColor}},mergedTheme.buttonDisabled)),buttonRaised:reactNative.StyleSheet.create(merge({container:{backgroundColor:'#fff',borderColor:'rgba(0,0,0,.12)'}},mergedTheme.buttonRaised)),buttonRaisedDisabled:reactNative.StyleSheet.create(merge({container:{backgroundColor:palette.borderColor},text:{color:palette.disabledTextColor}},mergedTheme.buttonRaisedDisabled)),bottomNavigation:reactNative.StyleSheet.create(merge({container:_objectSpread({height:56,backgroundColor:palette.canvasColor,borderTopColor:palette.borderColor,borderTopWidth:reactNative.StyleSheet.hairlineWidth},getPlatformElevation(8),{zIndex:8}),actionsContainer:{flexDirection:'row',justifyContent:'center'}},mergedTheme.bottomNavigation)),bottomNavigationAction:reactNative.StyleSheet.create(merge({container:{flex:1,alignItems:'center',justifyContent:'center',maxWidth:168,minWidth:80,paddingBottom:12,paddingTop:8,paddingLeft:12,paddingRight:12},label:{fontSize:12,textAlign:'center',color:palette.secondaryTextColor},containerActive:{paddingTop:6},iconActive:{color:palette.primaryColor},labelActive:{color:palette.primaryColor,fontSize:14}},mergedTheme.bottomNavigationAction)),card:reactNative.StyleSheet.create(merge({container:_objectSpread({backgroundColor:palette.canvasColor,borderRadius:2,marginVertical:4,marginHorizontal:8,overflow:'hidden'},getPlatformElevation(2))},mergedTheme.card)),dialog:reactNative.StyleSheet.create(merge({container:_objectSpread({backgroundColor:palette.canvasColor,borderRadius:2},getPlatformElevation(24),{width:280,paddingTop:24}),titleContainer:{paddingBottom:20,paddingHorizontal:24},titleText:{fontFamily:fontFamily,fontSize:20,fontWeight:'bold',color:'black'},contentContainer:{paddingBottom:24,paddingHorizontal:24},actionsContainer:{},defaultActionsContainer:{marginHorizontal:8,height:52,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'},stackedActionsContainer:{marginBottom:8}},mergedTheme.dialog)),checkbox:reactNative.StyleSheet.create(merge({container:{flex:1,flexDirection:'row',alignItems:'center'},icon:{color:palette.primaryColor},label:{color:black,marginLeft:20,flex:1}},mergedTheme.checkbox)),divider:reactNative.StyleSheet.create(merge({container:{backgroundColor:palette.borderColor,height:reactNative.StyleSheet.hairlineWidth}},mergedTheme.divider)),drawer:reactNative.StyleSheet.create(merge({container:{flex:1,backgroundColor:white}},mergedTheme.drawer)),drawerHeader:reactNative.StyleSheet.create(merge({container:{position:'absolute',top:0,left:0,right:0},contentContainer:{backgroundColor:grey500,height:150}},mergedTheme.drawerHeader)),drawerHeaderAccount:reactNative.StyleSheet.create(merge({container:{flex:1,paddingBottom:8},accountContainer:{flex:1,paddingHorizontal:16,marginBottom:8},topContainer:{flex:1,justifyContent:'center'},avatarsContainer:{flexDirection:'row'},activeAvatarContainer:{flex:1},inactiveAvatarContainer:{paddingLeft:8}},mergedTheme.drawerHeaderAccount)),drawerHeaderListItem:reactNative.StyleSheet.create(merge({container:{backgroundColor:transparent}},mergedTheme.drawerHeaderListItem)),drawerSection:reactNative.StyleSheet.create(merge({container:{paddingVertical:8},item:{flex:1,flexDirection:'row',alignItems:'center',height:48,paddingLeft:16},subheader:{flex:1},icon:{position:'absolute',top:13},value:{flex:1,paddingLeft:56,top:2},label:{paddingRight:16,top:2}},mergedTheme.drawerSection)),drawerSectionActiveItem:reactNative.StyleSheet.create(merge({container:{backgroundColor:grey100},leftElement:{color:palette.primaryColor},primaryText:_objectSpread({},typography.buttons,{color:palette.primaryColor})},mergedTheme.drawerSectionActiveItem)),iconToggle:reactNative.StyleSheet.create(merge({container:{width:spacing.iconSize*2,height:spacing.iconSize*2,alignItems:'center',justifyContent:'center'},icon:{color:palette.secondaryTextColor}},mergedTheme.iconToggle)),listItem:reactNative.StyleSheet.create(merge({container:{backgroundColor:palette.canvasColor,height:56},contentViewContainer:{flex:1,flexDirection:'row',alignItems:'center'},leftElementContainer:{width:56,marginLeft:16},centerElementContainer:{flex:1},textViewContainer:{},primaryText:_objectSpread({lineHeight:24,color:palette.primaryTextColor},typography.subheading),firstLine:{flexDirection:'row'},primaryTextContainer:{flex:1},secondaryText:_objectSpread({lineHeight:22,color:palette.secondaryTextColor},typography.body1),tertiaryText:_objectSpread({lineHeight:22,color:palette.secondaryTextColor},typography.body1),rightElementContainer:{paddingRight:4,flexDirection:'row',backgroundColor:'transparent'},leftElement:{margin:16,color:palette.secondaryTextColor},rightElement:{color:palette.secondaryTextColor}},mergedTheme.listItem)),snackbar:reactNative.StyleSheet.create(merge({container:_objectSpread({flex:1,flexDirection:'row',alignItems:'center',backgroundColor:snackbarColor,paddingHorizontal:16},getPlatformElevation(4),{zIndex:4,borderRadius:4,margin:8,position:'absolute',bottom:0}),content:{flex:1,flexDirection:'row',alignItems:'center'},message:_objectSpread({flex:1,marginVertical:16,color:white},typography.body2,{lineHeight:16}),actionContainer:{height:14,paddingHorizontal:0},actionText:{color:palette.primaryColor}},mergedTheme.snackbar)),subheader:reactNative.StyleSheet.create(merge({container:{height:48,justifyContent:'center'},text:_objectSpread({color:palette.secondaryTextColor},typography.body2)},mergedTheme.subheader)),toolbar:reactNative.StyleSheet.create(merge({container:_objectSpread({backgroundColor:palette.primaryColor,height:56,flexDirection:'row',alignItems:'center',paddingHorizontal:4,overflow:'hidden'},getPlatformElevation(4)),leftElementContainer:{backgroundColor:'transparent'},leftElement:{color:palette.alternateTextColor},centerElementContainer:{flex:1,marginLeft:20},titleText:_objectSpread({fontFamily:fontFamily,color:palette.alternateTextColor},typography.appBar),rightElementContainer:{flexDirection:'row',backgroundColor:'transparent'},rightElement:{color:palette.alternateTextColor}},mergedTheme.toolbar)),toolbarSearchActive:reactNative.StyleSheet.create(merge({container:{backgroundColor:palette.canvasColor},leftElement:{color:palette.secondaryTextColor},centerElementContainer:{},titleText:{fontFamily:fontFamily,flex:1,marginLeft:16,color:palette.primaryTextColor,fontWeight:fontWeight.normal},rightElement:{color:palette.secondaryTextColor}},mergedTheme.toolbarSearchActive))},baseTheme);return mergedTheme;}

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

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
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

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf$1 = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf$1 && getPrototypeOf$1(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf$1(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var ThemeContext = React__default.createContext(getTheme());

var _jsxFileName="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\styles\\withTheme.js";var withTheme=function withTheme(WrappedComponent){var ThemedComponent=function(_React$PureComponent){inherits(ThemedComponent,_React$PureComponent);function ThemedComponent(){classCallCheck(this,ThemedComponent);return possibleConstructorReturn(this,getPrototypeOf(ThemedComponent).apply(this,arguments));}createClass(ThemedComponent,[{key:"render",value:function render(){var _this=this;return React__default.createElement(ThemeContext.Consumer,{__source:{fileName:_jsxFileName,lineNumber:11}},function(theme){return React__default.createElement(WrappedComponent,_extends_1({},_this.props,{theme:theme,__source:{fileName:_jsxFileName,lineNumber:12}}));});}}]);return ThemedComponent;}(React__default.PureComponent);hoistNonReactStatics_cjs(ThemedComponent,WrappedComponent);return ThemedComponent;};

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
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
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

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
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

var _jsxFileName$1="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\RippleFeedback\\RippleFeedbackAndroid.react.js";function ownKeys$1(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$1(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$1(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$1(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var propTypes$1={color:propTypes.string,borderless:propTypes.bool,children:propTypes.node.isRequired};var defaultProps={color:null,borderless:true};var isRippleVisible=function isRippleVisible(_ref){var onPress=_ref.onPress,onLongPress=_ref.onLongPress,onPressIn=_ref.onPressIn,onPressOut=_ref.onPressOut;return onPress||onLongPress||onPressIn||onPressOut;};var RippleFeedback=function(_PureComponent){inherits(RippleFeedback,_PureComponent);function RippleFeedback(){classCallCheck(this,RippleFeedback);return possibleConstructorReturn(this,getPrototypeOf(RippleFeedback).apply(this,arguments));}createClass(RippleFeedback,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,color=_this$props.color,borderless=_this$props.borderless,otherProps=objectWithoutProperties(_this$props,["children","color","borderless"]);if(!isRippleVisible(this.props)){return children;}var mapProps=_objectSpread$1({},otherProps);if(color&&reactNative.Platform.Version>=21){mapProps.background=reactNative.TouchableNativeFeedback.Ripple(color,borderless);}return React__default.createElement(reactNative.TouchableNativeFeedback,_extends_1({},mapProps,{__source:{fileName:_jsxFileName$1,lineNumber:39}}),children);}}]);return RippleFeedback;}(React.PureComponent);RippleFeedback.propTypes=propTypes$1;RippleFeedback.defaultProps=defaultProps;

var ViewPropTypes=reactNative.ViewPropTypes||reactNative.View.propTypes;var BackAndroid=reactNative.BackHandler||reactNative.BackAndroid;

var _jsxFileName$2="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Icon\\index.js";var propTypes$2={name:propTypes.string.isRequired,style:propTypes.oneOfType([propTypes.object,propTypes.array]),size:propTypes.number,color:propTypes.string,iconSet:propTypes.string,theme:propTypes.any};var defaultProps$1={size:null,color:null,style:null,iconSet:null};var getIconComponent=function getIconComponent(iconSet){switch(iconSet){case'Entypo':return Entypo;case'EvilIcons':return EvilIcons;case'Feather':return Feather;case'FontAwesome':return FontAwesome;case'Foundation':return Foundation;case'Ionicons':return Ionicons;case'MaterialIcons':return MaterialIcons;case'MaterialCommunityIcons':return MaterialCommunityIcons;case'Octicons':return Octicons;case'Zocial':return Zocial;case'SimpleLineIcons':return SimpleLineIcons;default:return MaterialIcons;}};var Icon=function(_PureComponent){inherits(Icon,_PureComponent);function Icon(){classCallCheck(this,Icon);return possibleConstructorReturn(this,getPrototypeOf(Icon).apply(this,arguments));}createClass(Icon,[{key:"render",value:function render(){var _this$props=this.props,name=_this$props.name,style=_this$props.style,size=_this$props.size,color=_this$props.color,theme=_this$props.theme,iconSet=_this$props.iconSet;var palette=theme.palette,spacing=theme.spacing;var iconColor=color||palette.secondaryTextColor;var iconSize=size||spacing.iconSize;var VectorIcon=getIconComponent(iconSet||theme.iconSet);return React__default.createElement(VectorIcon,{name:name,size:iconSize,color:iconColor,style:style,__source:{fileName:_jsxFileName$2,lineNumber:79}});}}]);return Icon;}(React.PureComponent);Icon.propTypes=propTypes$2;Icon.defaultProps=defaultProps$1;var Icon$1 = withTheme(Icon);

var ELEVATION_ZINDEX=1;

var _jsxFileName$3="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\IconToggle\\IconToggle.react.js";var propTypes$3={testID:propTypes.string,color:propTypes.string,underlayColor:propTypes.string,maxOpacity:propTypes.number,percent:propTypes.number,disabled:propTypes.bool,size:propTypes.number,name:propTypes.string,iconSet:propTypes.string,children:propTypes.element,onPress:propTypes.func,style:propTypes.oneOfType([propTypes.shape({container:ViewPropTypes.style,icon:reactNative.Text.propTypes.style}),propTypes.array])};var defaultProps$2={testID:null,children:null,onPress:null,color:null,underlayColor:null,size:24,name:null,disabled:false,percent:90,maxOpacity:0.16,style:{},iconSet:null};function getStyles(props,state){var _props$theme=props.theme,iconToggle=_props$theme.iconToggle,palette=_props$theme.palette;var local={};if(props.color){local.icon={color:props.color};}if(state.containerSize){local.container={width:state.containerSize,height:state.containerSize};}return {container:[iconToggle.container,local.container,props.style.container],icon:[iconToggle.icon,local.icon,props.style.icon,props.disabled&&{color:palette.disabledColor}]};}function getIconSize(props){var spacing=props.theme.spacing;var icon=props.style.icon;if(icon&&icon.width){return icon.width;}if(props.size){return props.size;}return spacing.iconSize;}function getContainerSize(iconSize){return iconSize*2;}function getRippleSize(containerSize,percent){return percent/100*containerSize;}var IconToggle=function(_PureComponent){inherits(IconToggle,_PureComponent);function IconToggle(props,context){var _this;classCallCheck(this,IconToggle);_this=possibleConstructorReturn(this,getPrototypeOf(IconToggle).call(this,props,context));_this.renderRippleView=function(styles){var _this$state=_this.state,scaleValue=_this$state.scaleValue,opacityValue=_this$state.opacityValue,containerSize=_this$state.containerSize,rippleSize=_this$state.rippleSize;var color$1=color(reactNative.StyleSheet.flatten(styles.icon).color);_this.maxOpacity=color$1.isDark()?0.12:0.3;var top=(containerSize-rippleSize)/2;return React__default.createElement(reactNative.Animated.View,{style:[{position:'absolute',top:top,left:top,width:rippleSize,height:rippleSize,borderRadius:rippleSize/2,transform:[{scale:scaleValue}],opacity:opacityValue,backgroundColor:color$1.toString(),zIndex:reactNative.Platform.OS==='ios'?ELEVATION_ZINDEX:null}],__source:{fileName:_jsxFileName$3,lineNumber:218}});};_this.renderIcon=function(styles){var _this$props=_this.props,name=_this$props.name,children=_this$props.children,iconSet=_this$props.iconSet;var iconSize=_this.state.iconSize;if(children){return children;}var _StyleSheet$flatten=reactNative.StyleSheet.flatten(styles.icon),color=_StyleSheet$flatten.color;return React__default.createElement(Icon$1,{iconSet:iconSet,name:name,color:color,size:iconSize,__source:{fileName:_jsxFileName$3,lineNumber:247}});};var _iconSize=getIconSize(props);var _containerSize=getContainerSize(_iconSize);_this.state={scaleValue:new reactNative.Animated.Value(0.01),opacityValue:new reactNative.Animated.Value(props.maxOpacity),containerSize:_containerSize,iconSize:_iconSize,rippleSize:getRippleSize(_containerSize,props.percent)};_this.onPressIn=_this.onPressIn.bind(assertThisInitialized(_this));_this.onPressOut=_this.onPressOut.bind(assertThisInitialized(_this));return _this;}createClass(IconToggle,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){var iconSize=this.state.iconSize;var percent=this.props.percent;var nextIconSize=getIconSize(nextProps);if(iconSize!==nextIconSize||nextProps.percent!==percent){var containerSize=getContainerSize(iconSize);this.setState({containerSize:containerSize,iconSize:iconSize,rippleSize:getRippleSize(containerSize,nextProps.percent)});}}},{key:"onPressIn",value:function onPressIn(){var disabled=this.props.disabled;var scaleValue=this.state.scaleValue;if(!disabled){reactNative.Animated.timing(scaleValue,{toValue:1,duration:225,easing:reactNative.Easing.bezier(0.0,0.0,0.2,1),useNativeDriver:true}).start();}}},{key:"onPressOut",value:function onPressOut(){var _this$props2=this.props,disabled=_this$props2.disabled,onPress=_this$props2.onPress,maxOpacity=_this$props2.maxOpacity;var _this$state2=this.state,scaleValue=_this$state2.scaleValue,opacityValue=_this$state2.opacityValue;if(!disabled){reactNative.Animated.timing(opacityValue,{toValue:0,useNativeDriver:true}).start(function(){scaleValue.setValue(0.01);opacityValue.setValue(maxOpacity);});if(onPress){onPress();}}}},{key:"render",value:function render(){var testID=this.props.testID;var styles=getStyles(this.props,this.state);return React__default.createElement(reactNative.TouchableWithoutFeedback,{testID:testID,onPressIn:this.onPressIn,onPressOut:this.onPressOut,__source:{fileName:_jsxFileName$3,lineNumber:256}},React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$3,lineNumber:261}},this.renderRippleView(styles),React__default.createElement(reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName$3,lineNumber:263}},this.renderIcon(styles))));}}]);return IconToggle;}(React.PureComponent);IconToggle.propTypes=propTypes$3;IconToggle.defaultProps=defaultProps$2;var IconToggle$1 = withTheme(IconToggle);

var _jsxFileName$4="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\ActionButton\\ActionButton.react.js";function ownKeys$2(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$2(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$2(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$2(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function darkenOrLighten$1(color$1){var ratio=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0.5;var c=color(color$1);return c.luminosity()>0.5?c.darken(ratio):c.lighten(ratio);}var propTypes$4={actions:propTypes.oneOfType([propTypes.arrayOf(propTypes.string),propTypes.arrayOf(propTypes.element),propTypes.arrayOf(propTypes.shape({icon:propTypes.oneOfType([propTypes.string,propTypes.element]),label:propTypes.string,name:propTypes.string}))]),onPress:propTypes.func,onLongPress:propTypes.func,hidden:propTypes.bool,icon:propTypes.oneOfType([propTypes.element,propTypes.string]),transition:propTypes.oneOf(['toolbar','speedDial']),rippleColor:propTypes.string,style:propTypes.shape({container:ViewPropTypes.style,icon:reactNative.Text.propTypes.style})};var defaultProps$3={actions:null,onPress:null,onLongPress:null,transition:null,icon:'add',style:{},hidden:false,rippleColor:null};function getStyles$1(props,state){var size=props.size,theme=props.theme;var actionButton=theme.actionButton;var local={container:{}};if(size){local.container={height:size,width:size,borderRadius:size/2};}local.container=_objectSpread$2({},local.container,{},getPlatformElevation(state.elevation));return {positionContainer:[actionButton.positionContainer,local.positionContainer,props.style.positionContainer],toolbarPositionContainer:[actionButton.toolbarPositionContainer,local.toolbarPositionContainer,props.style.toolbarPositionContainer],container:[actionButton.container,local.container,props.style.container],overlayContainer:[actionButton.overlayContainer,local.overlayContainer,props.style.overlayContainer],toolbarContainer:[actionButton.toolbarContainer,local.toolbarContainer,props.style.toolbarContainer],toolbarActionContainer:[actionButton.toolbarActionContainer,local.toolbarActionContainer,props.style.toolbarActionContainer],speedDialContainer:[actionButton.speedDialContainer,local.speedDialContainer,props.style.speedDialContainer],speedDialActionContainer:[actionButton.speedDialActionContainer,local.speedDialActionContainer,props.style.speedDialActionContainer],speedDialActionLabel:[actionButton.speedDialActionLabel,local.speedDialActionLabel,props.style.speedDialActionLabel],speedDialActionLabelContainer:[actionButton.speedDialActionLabelContainer,local.speedDialActionLabelContainer,props.style.speedDialActionLabelContainer],speedDialActionIconContainer:[actionButton.speedDialActionIconContainer,local.speedDialActionIconContainer,props.style.speedDialActionIconContainer],speedDialActionIcon:[actionButton.speedDialActionIcon,local.speedDialActionIcon,props.style.speedDialActionIcon],icon:[actionButton.icon,local.icon,props.style.icon]};}var getRippleContainerStyle=function getRippleContainerStyle(containerStyle){var flattenContainer=reactNative.StyleSheet.flatten(containerStyle);var height=flattenContainer.height,width=flattenContainer.width,borderRadius=flattenContainer.borderRadius;return {container:{height:height,width:width,borderRadius:borderRadius}};};var ActionButton=function(_PureComponent){inherits(ActionButton,_PureComponent);function ActionButton(props){var _this;classCallCheck(this,ActionButton);_this=possibleConstructorReturn(this,getPrototypeOf(ActionButton).call(this,props));_this.onPress=function(action){var onPress=_this.props.onPress;_this.toggleState();if(onPress){onPress(action);}};_this.getActionItemKey=function(_ref){var icon=_ref.icon,name=_ref.name;var key=icon;if(name){key=name;}else if(React__default.isValidElement(icon)&&icon.key){key=icon.key;}return key;};_this.toggleState=function(){var transition=_this.props.transition;var render=_this.state.render;if(render==='button'){if(transition){_this.setState({render:transition});}}else{_this.setState({render:'button'});}};_this.show=function(){};_this.hide=function(){};_this.renderToolbarTransition=function(styles){var actions=_this.props.actions;return React__default.createElement(reactNative.View,{style:styles.toolbarPositionContainer,__source:{fileName:_jsxFileName$4,lineNumber:275}},React__default.createElement(reactNative.View,{key:"main-button",style:styles.toolbarContainer,__source:{fileName:_jsxFileName$4,lineNumber:276}},actions.map(function(action){if(typeof action==='string'){return _this.renderToolbarAction(styles,action);}if(React__default.isValidElement(action)){return _this.renderToolbarElementAction(styles,action);}var icon=action.icon,label=action.label,name=action.name;return _this.renderToolbarLabelAction(styles,icon,label,name);})));};_this.renderSpeedDialTransition=function(styles){var actions=_this.props.actions;return React__default.createElement(reactNative.View,{style:[reactNative.StyleSheet.absoluteFillObject,{flex:1}],__source:{fileName:_jsxFileName$4,lineNumber:298}},React__default.createElement(reactNative.TouchableWithoutFeedback,{onPress:_this.toggleState,__source:{fileName:_jsxFileName$4,lineNumber:299}},React__default.createElement(reactNative.View,{style:styles.overlayContainer,__source:{fileName:_jsxFileName$4,lineNumber:300}},React__default.createElement(reactNative.View,{style:[styles.positionContainer,styles.speedDialContainer],__source:{fileName:_jsxFileName$4,lineNumber:301}},React__default.createElement(reactNative.View,{style:{alignItems:'flex-end',marginBottom:16},__source:{fileName:_jsxFileName$4,lineNumber:302}},actions.map(function(action){if(typeof action==='string'){return _this.renderAction(styles,action);}if(React__default.isValidElement(action)){return _this.renderElementAction(styles,action);}var icon=action.icon,label=action.label,name=action.name;return _this.renderLabelAction(styles,icon,label,name);})),_this.renderMainButton(styles)))));};_this.renderMainButton=function(styles){var _this$props=_this.props,onLongPress=_this$props.onLongPress,icon=_this$props.icon;var render=_this.state.render;var mainIcon=render!=='button'?'clear':icon;return React__default.createElement(reactNative.View,{key:"main-button",style:styles.container,__source:{fileName:_jsxFileName$4,lineNumber:337}},React__default.createElement(RippleFeedback,{style:getRippleContainerStyle(styles.container),color:_this.getRippleColor(),onPress:function onPress(){return _this.onPress('main-button');},onLongPress:onLongPress,delayPressIn:20,__source:{fileName:_jsxFileName$4,lineNumber:338}},_this.renderIconButton(styles,mainIcon)));};_this.renderToolbarAction=function(styles,icon,name){var content;var key=_this.getActionItemKey({icon:icon,name:name});if(React__default.isValidElement(icon)){content=React__default.createElement(RippleFeedback,{color:_this.getRippleColor(),onPress:function onPress(){return _this.onPress(key);},delayPressIn:20,__source:{fileName:_jsxFileName$4,lineNumber:357}},_this.renderIconButton(styles,icon));}else{content=React__default.createElement(IconToggle$1,{key:key,name:key,onPress:function onPress(){return _this.onPress(key);},style:{icon:styles.icon},__source:{fileName:_jsxFileName$4,lineNumber:367}});}return React__default.createElement(reactNative.View,{key:key,style:styles.toolbarActionContainer,__source:{fileName:_jsxFileName$4,lineNumber:376}},content);};_this.renderToolbarElementAction=function(styles,icon){var key=_this.getActionItemKey({icon:icon});return React__default.createElement(reactNative.View,{key:key,style:styles.toolbarActionContainer,__source:{fileName:_jsxFileName$4,lineNumber:385}},_this.renderToolbarAction(styles,icon));};_this.renderToolbarLabelAction=function(styles,icon,label,name){var key=_this.getActionItemKey({icon:icon,name:name});return React__default.createElement(reactNative.View,{key:key,style:styles.toolbarActionContainer,__source:{fileName:_jsxFileName$4,lineNumber:397}},_this.renderToolbarAction(styles,icon,name));};_this.renderAction=function(styles,icon,name){var key=_this.getActionItemKey({icon:icon,name:name});return React__default.createElement(reactNative.View,{key:key,style:styles.speedDialActionIconContainer,__source:{fileName:_jsxFileName$4,lineNumber:406}},React__default.createElement(reactNative.View,{style:styles.speedDialActionIcon,__source:{fileName:_jsxFileName$4,lineNumber:407}},React__default.createElement(RippleFeedback,{style:getRippleContainerStyle(styles.speedDialActionIcon),color:_this.getRippleColor(),onPress:function onPress(){return _this.onPress(key);},delayPressIn:20,__source:{fileName:_jsxFileName$4,lineNumber:408}},_this.renderIconButton(styles,icon))));};_this.renderElementAction=function(styles,icon){var key=_this.getActionItemKey({icon:icon});return React__default.createElement(reactNative.View,{key:key,style:styles.speedDialActionContainer,__source:{fileName:_jsxFileName$4,lineNumber:424}},_this.renderAction(styles,icon));};_this.renderLabelAction=function(styles,icon,label,name){var key=_this.getActionItemKey({icon:icon,name:name});return React__default.createElement(reactNative.View,{key:key,style:styles.speedDialActionContainer,__source:{fileName:_jsxFileName$4,lineNumber:433}},React__default.createElement(reactNative.View,{style:styles.speedDialActionLabelContainer,__source:{fileName:_jsxFileName$4,lineNumber:434}},React__default.createElement(reactNative.Text,{style:styles.speedDialActionLabel,__source:{fileName:_jsxFileName$4,lineNumber:435}},label)),_this.renderAction(styles,icon,name));};_this.renderIconButton=function(styles,icon){var result;if(React__default.isValidElement(icon)){result=icon;}else{result=React__default.createElement(Icon$1,{name:icon,style:styles.icon,__source:{fileName:_jsxFileName$4,lineNumber:447}});}return React__default.createElement(reactNative.View,{style:{flex:1,alignItems:'center',justifyContent:'center'},pointerEvents:"box-only",__source:{fileName:_jsxFileName$4,lineNumber:450}},result);};_this.renderButton=function(styles){return React__default.createElement(reactNative.Animated.View,{style:styles.positionContainer,__source:{fileName:_jsxFileName$4,lineNumber:464}},_this.renderMainButton(styles));};_this.state={render:'button'};return _this;}createClass(ActionButton,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){var hidden=this.props.hidden;if(nextProps.hidden!==hidden){if(nextProps.hidden===true){this.hide();}else{this.show();}}}},{key:"componentWillUpdate",value:function componentWillUpdate(nextProps,nextState){var render=this.state.render;if(render!==nextState.render){reactNative.LayoutAnimation.easeInEaseOut();}}},{key:"getRippleColor",value:function getRippleColor(){var rippleColor=this.props.rippleColor;if(rippleColor){return rippleColor;}var styles=getStyles$1(this.props,this.state);var _StyleSheet$flatten=reactNative.StyleSheet.flatten(styles.container),backgroundColor=_StyleSheet$flatten.backgroundColor;return darkenOrLighten$1(backgroundColor).toString();}},{key:"render",value:function render(){var render=this.state.render;var styles=getStyles$1(this.props,this.state);if(render==='toolbar'){return this.renderToolbarTransition(styles);}if(render==='speedDial'){return this.renderSpeedDialTransition(styles);}return this.renderButton(styles);}}]);return ActionButton;}(React.PureComponent);ActionButton.propTypes=propTypes$4;ActionButton.defaultProps=defaultProps$3;var ActionButton_react = withTheme(ActionButton);

var _jsxFileName$5="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Avatar\\Avatar.react.js";var propTypes$5={image:propTypes.element,icon:propTypes.string,iconColor:propTypes.string,iconSize:propTypes.number,text:propTypes.string,size:propTypes.number,style:propTypes.shape({container:ViewPropTypes.style,content:reactNative.Text.propTypes.style}),iconSet:propTypes.string,theme:propTypes.any};var defaultProps$4={image:null,icon:null,iconColor:null,iconSize:null,text:null,size:48,style:{},iconSet:null};function getStyles$2(props){var size=props.size,theme=props.theme;var avatar=theme.avatar;var local={};if(size){local.container={height:size,width:size,borderRadius:size/2};}return {container:[avatar.container,local.container,props.style.container],content:[avatar.content,local.content,props.style.content]};}var Avatar=function(_PureComponent){inherits(Avatar,_PureComponent);function Avatar(){classCallCheck(this,Avatar);return possibleConstructorReturn(this,getPrototypeOf(Avatar).apply(this,arguments));}createClass(Avatar,[{key:"render",value:function render(){var _this$props=this.props,image=_this$props.image,icon=_this$props.icon,iconSet=_this$props.iconSet,iconSize=_this$props.iconSize,iconColor=_this$props.iconColor,text=_this$props.text,theme=_this$props.theme;var avatar=theme.avatar,spacing=theme.spacing;var content=null;var styles=getStyles$2(this.props);if(icon){var color=iconColor||reactNative.StyleSheet.flatten(avatar.content).color;var size=iconSize||spacing.iconSize;content=React__default.createElement(Icon$1,{iconSet:iconSet,name:icon,color:color,size:size,__source:{fileName:_jsxFileName$5,lineNumber:100}});}else if(text){content=React__default.createElement(reactNative.Text,{style:styles.content,__source:{fileName:_jsxFileName$5,lineNumber:103}},text);}else if(image){content=image;}return React__default.createElement(reactNative.View,{style:{flexGrow:1},__source:{fileName:_jsxFileName$5,lineNumber:109}},React__default.createElement(reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName$5,lineNumber:110}},content));}}]);return Avatar;}(React.PureComponent);Avatar.propTypes=propTypes$5;Avatar.defaultProps=defaultProps$4;var Avatar_react = withTheme(Avatar);

var _jsxFileName$6="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Badge\\Badge.react.js";var propTypes$6={children:propTypes.node,text:propTypes.string,icon:propTypes.oneOfType([propTypes.string,propTypes.shape({name:propTypes.string,color:propTypes.string,size:propTypes.number})]),size:propTypes.number,stroke:propTypes.number,style:propTypes.oneOfType([propTypes.shape({container:ViewPropTypes.style,strokeContainer:ViewPropTypes.style,content:reactNative.Text.propTypes.style}),propTypes.array])};var defaultProps$5={children:null,text:null,icon:null,size:16,stroke:null,style:{container:{top:-8,right:-8}}};function getStyles$3(props){var accent=props.accent,size=props.size,stroke=props.stroke,theme=props.theme;var badge=theme.badge,palette=theme.palette;var local={container:{},strokeContainer:{}};if(size&&stroke){var strokeSize=size;var contentSize=size-stroke;local.strokeContainer.width=strokeSize;local.strokeContainer.height=strokeSize;local.strokeContainer.borderRadius=strokeSize/2;local.container.position=null;local.container.width=contentSize;local.container.height=contentSize;local.container.borderRadius=contentSize/2;}else if(size&&!stroke){local.container.width=size;local.container.height=size;local.container.borderRadius=size/2;}if(accent){local.container.backgroundColor=palette.accentColor;}return {container:[badge.container,local.container,props.style.container],strokeContainer:[badge.strokeContainer,local.strokeContainer,props.style.strokeContainer],content:[badge.content,local.content,props.style.content]};}var mapIconProps=function mapIconProps(_ref){var icon=_ref.icon,size=_ref.size;var iconProps={};if(typeof icon==='string'){iconProps.name=icon;}else{iconProps=icon;}if(!iconProps.size&&size){iconProps.size=size/2;}return iconProps;};var Badge=function(_PureComponent){inherits(Badge,_PureComponent);function Badge(props,context){var _this;classCallCheck(this,Badge);_this=possibleConstructorReturn(this,getPrototypeOf(Badge).call(this,props,context));_this.renderContent=_this.renderContent.bind(assertThisInitialized(_this));_this.renderChildren=_this.renderChildren.bind(assertThisInitialized(_this));return _this;}createClass(Badge,[{key:"renderContent",value:function renderContent(styles){var _this$props=this.props,text=_this$props.text,icon=_this$props.icon,stroke=_this$props.stroke;var content=null;if(icon){var iconProps=mapIconProps(this.props);content=React__default.createElement(Icon$1,_extends_1({},iconProps,{__source:{fileName:_jsxFileName$6,lineNumber:136}}));}else if(text){content=React__default.createElement(reactNative.Text,{style:styles.content,__source:{fileName:_jsxFileName$6,lineNumber:138}},text);}var contentWrapper=React__default.createElement(reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName$6,lineNumber:141}},content);if(!stroke){return contentWrapper;}return React__default.createElement(reactNative.View,{style:styles.strokeContainer,__source:{fileName:_jsxFileName$6,lineNumber:147}},contentWrapper);}},{key:"renderChildren",value:function renderChildren(){var children=this.props.children;if(!children){return null;}return children;}},{key:"render",value:function render(){var styles=getStyles$3(this.props);return React__default.createElement(reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName$6,lineNumber:164}},this.renderChildren(),this.renderContent(styles));}}]);return Badge;}(React.PureComponent);Badge.propTypes=propTypes$6;Badge.defaultProps=defaultProps$5;var Badge_react = withTheme(Badge);

var _jsxFileName$7="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Button\\Button.react.js";function ownKeys$3(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$3(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$3(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$3(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var propTypes$7={testID:propTypes.string,disabled:propTypes.bool,raised:propTypes.bool,onPress:propTypes.func,onLongPress:propTypes.func,text:propTypes.string.isRequired,upperCase:propTypes.bool,icon:propTypes.oneOfType([propTypes.string,propTypes.element]),iconSet:propTypes.string,style:propTypes.shape({container:ViewPropTypes.style,text:reactNative.Text.propTypes.style}),primary:propTypes.bool,accent:propTypes.bool};var defaultProps$6={testID:null,icon:null,onPress:null,onLongPress:null,primary:false,accent:false,disabled:false,raised:false,upperCase:true,iconSet:null,style:{}};function getStyles$4(props,state){var primary=props.primary,accent=props.accent,disabled=props.disabled,raised=props.raised,theme=props.theme;var button=theme.button,buttonFlat=theme.buttonFlat,buttonRaised=theme.buttonRaised,buttonDisabled=theme.buttonDisabled,buttonRaisedDisabled=theme.buttonRaisedDisabled,palette=theme.palette;var local={container:{}};if(!disabled){if(primary&&!raised){local.text={color:palette.primaryColor};}else if(accent&&!raised){local.text={color:palette.accentColor};}if(primary&&raised){local.container.backgroundColor=palette.primaryColor;local.text={color:palette.canvasColor};}else if(accent&&raised){local.container.backgroundColor=palette.accentColor;local.text={color:palette.canvasColor};}}if(raised&&!disabled){local.container=_objectSpread$3({},local.container,{},getPlatformElevation(state.elevation));}return {container:[button.container,!raised&&buttonFlat.container,raised&&buttonRaised.container,!raised&&disabled&&buttonDisabled.container,raised&&disabled&&buttonRaisedDisabled.container,local.container,props.style.container],text:[button.text,!raised&&buttonFlat.text,raised&&buttonRaised.text,!raised&&disabled&&buttonDisabled.text,raised&&disabled&&buttonRaisedDisabled.text,local.text,props.style.text],icon:[button.icon,!raised&&buttonFlat.icon,disabled&&buttonDisabled.icon,raised&&buttonRaised.icon,local.icon,props.style.icon]};}var Button=function(_PureComponent){inherits(Button,_PureComponent);function Button(props){var _this;classCallCheck(this,Button);_this=possibleConstructorReturn(this,getPrototypeOf(Button).call(this,props));_this.onPress=function(){var _this$props=_this.props,text=_this$props.text,onPress=_this$props.onPress;if(onPress){onPress(text);}};_this.setElevation=function(){_this.setState({elevation:4});};_this.removeElevation=function(){_this.setState({elevation:2});};_this.renderIcon=function(styles){var _this$props2=_this.props,icon=_this$props2.icon,iconSet=_this$props2.iconSet;var textFlatten=reactNative.StyleSheet.flatten(styles.text);if(!icon){return null;}var result;if(React__default.isValidElement(icon)){result=icon;}else if(typeof icon==='string'){result=React__default.createElement(Icon$1,{iconSet:iconSet,name:icon,color:textFlatten.color,style:styles.icon,size:24,__source:{fileName:_jsxFileName$7,lineNumber:182}});}return result;};_this.state={elevation:2};return _this;}createClass(Button,[{key:"render",value:function render(){var _this$props3=this.props,text=_this$props3.text,disabled=_this$props3.disabled,raised=_this$props3.raised,upperCase=_this$props3.upperCase,onLongPress=_this$props3.onLongPress,testID=_this$props3.testID;var styles=getStyles$4(this.props,this.state);var content=React__default.createElement(reactNative.View,{style:styles.container,pointerEvents:"box-only",__source:{fileName:_jsxFileName$7,lineNumber:208}},this.renderIcon(styles),React__default.createElement(reactNative.Text,{style:styles.text,__source:{fileName:_jsxFileName$7,lineNumber:210}},upperCase?text.toUpperCase():text));if(disabled){return content;}return React__default.createElement(RippleFeedback,{testID:testID,onPress:!disabled?this.onPress:null,onLongPress:!disabled?onLongPress:null,onPressIn:raised?this.setElevation:null,onPressOut:raised?this.removeElevation:null,delayPressIn:50,__source:{fileName:_jsxFileName$7,lineNumber:219}},content);}}]);return Button;}(React.PureComponent);Button.propTypes=propTypes$7;Button.defaultProps=defaultProps$6;var Button$1 = withTheme(Button);

var _jsxFileName$8="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\BottomNavigation\\BottomNavigationAction.react.js";var propTypes$8={testID:propTypes.string,icon:propTypes.oneOfType([propTypes.element,propTypes.string]).isRequired,iconSet:propTypes.string,label:propTypes.string,active:propTypes.bool,onPress:propTypes.func,style:propTypes.shape({container:ViewPropTypes.style,active:reactNative.Text.propTypes.style,disabled:reactNative.Text.propTypes.style}),disabled:propTypes.bool};var defaultProps$7={testID:null,label:null,onPress:null,iconSet:null,active:false,disabled:false,style:{}};function getStyles$5(props){var bottomNavigationAction=props.theme.bottomNavigationAction;var local={};if(props.active){local.container=bottomNavigationAction.containerActive;local.icon=bottomNavigationAction.iconActive;local.label=bottomNavigationAction.labelActive;}if(!props.label){local.container={paddingTop:16,paddingBottom:16};}return {container:[bottomNavigationAction.container,local.container,props.style.container],icon:[bottomNavigationAction.icon,local.icon,props.style.icon],label:[bottomNavigationAction.label,local.label,props.style.label]};}var BottomNavigationAction=function(_PureComponent){inherits(BottomNavigationAction,_PureComponent);function BottomNavigationAction(){classCallCheck(this,BottomNavigationAction);return possibleConstructorReturn(this,getPrototypeOf(BottomNavigationAction).apply(this,arguments));}createClass(BottomNavigationAction,[{key:"renderIcon",value:function renderIcon(styles){var icon=this.props.icon;var _StyleSheet$flatten=reactNative.StyleSheet.flatten(styles.icon),color=_StyleSheet$flatten.color;var element;if(React__default.isValidElement(icon)){element=React__default.cloneElement(icon,{style:styles.icon,color:color});}else{element=React__default.createElement(Icon$1,{name:icon,style:styles.icon,color:color,__source:{fileName:_jsxFileName$8,lineNumber:93}});}return element;}},{key:"renderLabel",value:function renderLabel(styles){var label=this.props.label;if(!label){return null;}return React__default.createElement(reactNative.Text,{style:styles.label,__source:{fileName:_jsxFileName$8,lineNumber:105}},label);}},{key:"render",value:function render(){var _this$props=this.props,onPress=_this$props.onPress,testID=_this$props.testID,disabled=_this$props.disabled;var styles=getStyles$5(this.props,this.context);return React__default.createElement(RippleFeedback,{disabled:disabled,testID:testID,onPress:onPress,__source:{fileName:_jsxFileName$8,lineNumber:114}},React__default.createElement(reactNative.View,{style:styles.container,pointerEvents:"box-only",__source:{fileName:_jsxFileName$8,lineNumber:115}},this.renderIcon(styles),this.renderLabel(styles)));}}]);return BottomNavigationAction;}(React.PureComponent);BottomNavigationAction.propTypes=propTypes$8;BottomNavigationAction.defaultProps=defaultProps$7;var BottomNavigationAction$1 = withTheme(BottomNavigationAction);

var _jsxFileName$9="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\BottomNavigation\\BottomNavigation.react.js";function ownKeys$4(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$4(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$4(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$4(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var propTypes$9={active:propTypes.string,children:propTypes.node.isRequired,hidden:propTypes.bool,style:propTypes.shape({container:ViewPropTypes.style})};var defaultProps$8={active:null,hidden:false,style:{}};function getStyles$6(props){var bottomNavigation=props.theme.bottomNavigation;var local={};return {container:[bottomNavigation.container,local.container,props.style.container],actionsContainer:[bottomNavigation.actionsContainer,local.actionsContainer,props.style.actionsContainer]};}var BottomNavigation=function(_PureComponent){inherits(BottomNavigation,_PureComponent);function BottomNavigation(props,context){var _this;classCallCheck(this,BottomNavigation);_this=possibleConstructorReturn(this,getPrototypeOf(BottomNavigation).call(this,props,context));_this.show=function(){var moveAnimated=_this.state.moveAnimated;reactNative.Animated.timing(moveAnimated,{toValue:0,duration:225,easing:reactNative.Easing.bezier(0.0,0.0,0.2,1),useNativeDriver:true}).start();};_this.hide=function(){var _this$state=_this.state,moveAnimated=_this$state.moveAnimated,styles=_this$state.styles;reactNative.Animated.timing(moveAnimated,{toValue:reactNative.StyleSheet.flatten(styles.container).height,duration:195,easing:reactNative.Easing.bezier(0.4,0.0,0.6,1),useNativeDriver:true}).start();};_this.state={styles:getStyles$6(props),moveAnimated:new reactNative.Animated.Value(0)};return _this;}createClass(BottomNavigation,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){var _this$props=this.props,style=_this$props.style,hidden=_this$props.hidden;if(nextProps.style!==style){this.setState({styles:getStyles$6(nextProps,this.context)});}if(nextProps.hidden!==hidden){if(nextProps.hidden===true){this.hide();}else{this.show();}}}},{key:"render",value:function render(){var _this$props2=this.props,active=_this$props2.active,children=_this$props2.children;var _this$state2=this.state,styles=_this$state2.styles,moveAnimated=_this$state2.moveAnimated;return React__default.createElement(reactNative.Animated.View,{style:[styles.container,{transform:[{translateY:moveAnimated}]}],__source:{fileName:_jsxFileName$9,lineNumber:112}},React__default.createElement(reactNative.View,{style:styles.actionsContainer,__source:{fileName:_jsxFileName$9,lineNumber:118}},React__default.Children.map(children,function(child){return React__default.cloneElement(child,_objectSpread$4({},child.props,{active:child.key===active}));})));}}]);return BottomNavigation;}(React.PureComponent);BottomNavigation.propTypes=propTypes$9;BottomNavigation.defaultProps=defaultProps$8;BottomNavigation.Action=BottomNavigationAction$1;var ThemedBottomNavigation=withTheme(BottomNavigation);

var _jsxFileName$a="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Card\\Card.react.js";var propTypes$a={children:propTypes.node,onPress:propTypes.func,style:propTypes.shape({container:ViewPropTypes.style})};var defaultProps$9={children:null,onPress:null,style:{}};function getStyles$7(props){var card=props.theme.card;var local={};if(props.fullWidth){local.container={marginHorizontal:0};}return {container:[card.container,local.container,props.style.container]};}var Card=function(_PureComponent){inherits(Card,_PureComponent);function Card(props,context){var _this;classCallCheck(this,Card);_this=possibleConstructorReturn(this,getPrototypeOf(Card).call(this,props,context));_this.renderContent=function(){var children=_this.props.children;var styles=_this.state.styles;return React__default.createElement(reactNative.View,{style:styles.container,pointerEvents:"auto",__source:{fileName:_jsxFileName$a,lineNumber:57}},children);};_this.state={styles:getStyles$7(props)};return _this;}createClass(Card,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){this.setState({styles:getStyles$7(nextProps)});}},{key:"render",value:function render(){var onPress=this.props.onPress;if(onPress){return React__default.createElement(RippleFeedback,{onPress:onPress,__source:{fileName:_jsxFileName$a,lineNumber:68}},this.renderContent());}return this.renderContent();}}]);return Card;}(React.PureComponent);Card.propTypes=propTypes$a;Card.defaultProps=defaultProps$9;var Card_react = withTheme(Card);

var _jsxFileName$b="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Checkbox\\Checkbox.react.js";var propTypes$b={label:propTypes.string.isRequired,value:propTypes.oneOfType([propTypes.string,propTypes.number]).isRequired,checked:propTypes.bool,disabled:propTypes.bool,uncheckedIcon:propTypes.string,checkedIcon:propTypes.string,onCheck:propTypes.func.isRequired,iconSet:propTypes.string,style:propTypes.shape({container:ViewPropTypes.style,icon:propTypes.any,label:reactNative.Text.propTypes.style}),size:propTypes.number};var defaultProps$a={checked:false,checkedIcon:'check-box',uncheckedIcon:'check-box-outline-blank',disabled:false,style:{},size:24,iconSet:null};function getStyles$8(props){var disabled=props.disabled,theme=props.theme;var checkbox=theme.checkbox,palette=theme.palette;var local={};return {container:[checkbox.container,local.container,props.style.container],icon:[checkbox.icon,props.style.icon],label:[checkbox.label,local.label,props.style.label,disabled&&{color:palette.disabledTextColor}]};}var Checkbox=function(_PureComponent){inherits(Checkbox,_PureComponent);function Checkbox(){var _getPrototypeOf2;var _this;classCallCheck(this,Checkbox);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.onPress=function(){var _this$props=_this.props,checked=_this$props.checked,disabled=_this$props.disabled,onCheck=_this$props.onCheck,value=_this$props.value;if(!disabled&&onCheck){onCheck(!checked,value);}};return _this;}createClass(Checkbox,[{key:"render",value:function render(){var _this$props2=this.props,checked=_this$props2.checked,checkedIcon=_this$props2.checkedIcon,uncheckedIcon=_this$props2.uncheckedIcon,disabled=_this$props2.disabled,value=_this$props2.value,size=_this$props2.size,label=_this$props2.label,iconSet=_this$props2.iconSet;var styles=getStyles$8(this.props);var labelColor=reactNative.StyleSheet.flatten(styles.label).color;var iconColor=reactNative.StyleSheet.flatten(styles.icon).color;var content=React__default.createElement(reactNative.View,{style:styles.container,pointerEvents:"box-only",__source:{fileName:_jsxFileName$b,lineNumber:111}},React__default.createElement(IconToggle$1,{key:value+"-"+checked,name:checked?checkedIcon:uncheckedIcon,disabled:disabled,color:checked?iconColor:labelColor,onPress:this.onPress,iconSet:iconSet,size:size,__source:{fileName:_jsxFileName$b,lineNumber:112}}),React__default.createElement(reactNative.Text,{style:styles.label,__source:{fileName:_jsxFileName$b,lineNumber:121}},label));if(disabled){return content;}return React__default.createElement(RippleFeedback,{onPress:this.onPress,__source:{fileName:_jsxFileName$b,lineNumber:129}},content);}}]);return Checkbox;}(React.PureComponent);Checkbox.propTypes=propTypes$b;Checkbox.defaultProps=defaultProps$a;var Checkbox$1 = withTheme(Checkbox);

var _jsxFileName$c="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Dialog\\Title.react.js";var propTypes$c={children:propTypes.node.isRequired,style:propTypes.shape({titleContainer:ViewPropTypes.style,titleText:reactNative.Text.propTypes.style})};var defaultProps$b={style:{}};function getStyles$9(props){var dialog=props.theme.dialog;return {titleContainer:[dialog.titleContainer,props.style.titleContainer],titleText:[dialog.titleText,props.style.titleText]};}var DialogHeader=function(_PureComponent){inherits(DialogHeader,_PureComponent);function DialogHeader(){classCallCheck(this,DialogHeader);return possibleConstructorReturn(this,getPrototypeOf(DialogHeader).apply(this,arguments));}createClass(DialogHeader,[{key:"render",value:function render(){var children=this.props.children;var styles=getStyles$9(this.props);return React__default.createElement(reactNative.View,{style:styles.titleContainer,__source:{fileName:_jsxFileName$c,lineNumber:36}},React__default.createElement(reactNative.Text,{style:styles.titleText,__source:{fileName:_jsxFileName$c,lineNumber:37}},children));}}]);return DialogHeader;}(React.PureComponent);DialogHeader.propTypes=propTypes$c;DialogHeader.defaultProps=defaultProps$b;var Title = withTheme(DialogHeader);

var _jsxFileName$d="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Dialog\\Content.react.js";var propTypes$d={children:propTypes.node.isRequired,style:propTypes.shape({contentContainer:ViewPropTypes.style})};var defaultProps$c={style:{}};function getStyles$a(props){var dialog=props.theme.dialog;return {contentContainer:[dialog.contentContainer,props.style.contentContainer]};}var DialogContent=function(_PureComponent){inherits(DialogContent,_PureComponent);function DialogContent(){classCallCheck(this,DialogContent);return possibleConstructorReturn(this,getPrototypeOf(DialogContent).apply(this,arguments));}createClass(DialogContent,[{key:"render",value:function render(){var children=this.props.children;var styles=getStyles$a(this.props,this.context);return React__default.createElement(reactNative.View,{style:styles.contentContainer,__source:{fileName:_jsxFileName$d,lineNumber:33}},children);}}]);return DialogContent;}(React.PureComponent);DialogContent.propTypes=propTypes$d;DialogContent.defaultProps=defaultProps$c;var Content = withTheme(DialogContent);

var _jsxFileName$e="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Dialog\\Actions.react.js";var propTypes$e={children:propTypes.node.isRequired,style:propTypes.shape({actionsContainer:ViewPropTypes.style})};var defaultProps$d={style:{}};function getStyles$b(props){var dialog=props.theme.dialog;return {actionsContainer:[dialog.actionsContainer,props.style.actionsContainer]};}var DialogFooter=function(_PureComponent){inherits(DialogFooter,_PureComponent);function DialogFooter(){classCallCheck(this,DialogFooter);return possibleConstructorReturn(this,getPrototypeOf(DialogFooter).apply(this,arguments));}createClass(DialogFooter,[{key:"render",value:function render(){var children=this.props.children;var styles=getStyles$b(this.props,this.context);return React__default.createElement(reactNative.View,{style:styles.actionsContainer,__source:{fileName:_jsxFileName$e,lineNumber:33}},children);}}]);return DialogFooter;}(React.PureComponent);DialogFooter.propTypes=propTypes$e;DialogFooter.defaultProps=defaultProps$d;var Actions = withTheme(DialogFooter);

var _jsxFileName$f="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Dialog\\Dialog.react.js";var propTypes$f={onPress:propTypes.func,children:propTypes.node.isRequired,style:propTypes.shape({container:ViewPropTypes.style})};var defaultProps$e={onPress:null,style:{}};function getStyles$c(props){var dialog=props.theme.dialog;return {container:[dialog.container,props.style.container]};}var Dialog=function(_PureComponent){inherits(Dialog,_PureComponent);function Dialog(){var _getPrototypeOf2;var _this;classCallCheck(this,Dialog);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.renderContent=function(){var children=_this.props.children;var styles=getStyles$c(_this.props);return React__default.createElement(reactNative.View,{style:styles.container,pointerEvents:"auto",__source:{fileName:_jsxFileName$f,lineNumber:40}},children);};return _this;}createClass(Dialog,[{key:"render",value:function render(){var onPress=this.props.onPress;if(onPress){return React__default.createElement(RippleFeedback,{onPress:onPress,__source:{fileName:_jsxFileName$f,lineNumber:51}},this.renderContent());}return this.renderContent();}}]);return Dialog;}(React.PureComponent);Dialog.propTypes=propTypes$f;Dialog.defaultProps=defaultProps$e;Dialog.Title=Title;Dialog.Content=Content;Dialog.Actions=Actions;var Dialog_react = withTheme(Dialog);

var _jsxFileName$g="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Dialog\\DialogDefaultActions.react.js";var propTypes$g={actions:propTypes.arrayOf(propTypes.string).isRequired,options:propTypes.objectOf(propTypes.object),onActionPress:propTypes.func.isRequired,style:propTypes.shape({defaultActionsContainer:ViewPropTypes.style})};var defaultProps$f={style:{},options:{}};function getStyles$d(props){var dialog=props.theme.dialog;return {defaultActionsContainer:[dialog.defaultActionsContainer,props.style.defaultActionsContainer]};}var DialogDefaultActions=function(_PureComponent){inherits(DialogDefaultActions,_PureComponent);function DialogDefaultActions(props){var _this;classCallCheck(this,DialogDefaultActions);_this=possibleConstructorReturn(this,getPrototypeOf(DialogDefaultActions).call(this,props));_this.onActionPressed=_this.onActionPressed.bind(assertThisInitialized(_this));return _this;}createClass(DialogDefaultActions,[{key:"onActionPressed",value:function onActionPressed(action){var onActionPress=this.props.onActionPress;if(onActionPress){onActionPress(action);}}},{key:"renderAction",value:function renderAction(action){var options=this.props.options;var isButtonDisabled=options[""+action]&&options[""+action].disabled;return React__default.createElement(Button$1,{key:action,primary:true,disabled:isButtonDisabled,text:action,onPress:this.onActionPressed,style:{container:{marginLeft:8,paddingHorizontal:8}},__source:{fileName:_jsxFileName$g,lineNumber:55}});}},{key:"render",value:function render(){var _this2=this;var actions=this.props.actions;var styles=getStyles$d(this.props);return React__default.createElement(reactNative.View,{style:styles.defaultActionsContainer,__source:{fileName:_jsxFileName$g,lineNumber:76}},actions.map(function(action){return _this2.renderAction(action);}));}}]);return DialogDefaultActions;}(React.PureComponent);DialogDefaultActions.propTypes=propTypes$g;DialogDefaultActions.defaultProps=defaultProps$f;var DialogDefaultActions_react = withTheme(DialogDefaultActions);

var _jsxFileName$h="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Dialog\\DialogStackedActions.react.js";var propTypes$h={actions:propTypes.arrayOf(propTypes.string).isRequired,onActionPress:propTypes.func.isRequired,options:propTypes.objectOf(propTypes.object),style:propTypes.shape({stackedActionsContainer:ViewPropTypes.style})};var defaultProps$g={style:{},options:{}};function getStyles$e(props){var dialog=props.theme.dialog;return {stackedActionsContainer:[dialog.stackedActionsContainer,props.style.stackedActionsContainer]};}var DialogStackedActions=function(_PureComponent){inherits(DialogStackedActions,_PureComponent);function DialogStackedActions(){classCallCheck(this,DialogStackedActions);return possibleConstructorReturn(this,getPrototypeOf(DialogStackedActions).apply(this,arguments));}createClass(DialogStackedActions,[{key:"renderAction",value:function renderAction(action){var _this$props=this.props,options=_this$props.options,onActionPress=_this$props.onActionPress;var isButtonDisabled=options[""+action]&&options[""+action].disabled;return React__default.createElement(Button$1,{key:action,primary:true,disabled:isButtonDisabled,text:action,onPress:onActionPress,style:{container:{justifyContent:'flex-end'}},__source:{fileName:_jsxFileName$h,lineNumber:41}});}},{key:"render",value:function render(){var _this=this;var actions=this.props.actions;var styles=getStyles$e(this.props);return React__default.createElement(reactNative.View,{style:styles.stackedActionsContainer,__source:{fileName:_jsxFileName$h,lineNumber:62}},actions.map(function(action){return _this.renderAction(action);}));}}]);return DialogStackedActions;}(React.PureComponent);DialogStackedActions.propTypes=propTypes$h;DialogStackedActions.defaultProps=defaultProps$g;var DialogStackedActions_react = withTheme(DialogStackedActions);

var _jsxFileName$i="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Divider\\Divider.react.js";var propTypes$i={inset:propTypes.bool,style:propTypes.shape({container:ViewPropTypes.style})};var defaultProps$h={inset:false,style:{}};function getStyles$f(props){var divider=props.theme.divider;var local={container:props.inset?{marginLeft:72}:null};return {container:[divider.container,local.container,props.style.container]};}var Divider=function(_PureComponent){inherits(Divider,_PureComponent);function Divider(){classCallCheck(this,Divider);return possibleConstructorReturn(this,getPrototypeOf(Divider).apply(this,arguments));}createClass(Divider,[{key:"render",value:function render(){var styles=getStyles$f(this.props,this.context);return React__default.createElement(reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName$i,lineNumber:36}});}}]);return Divider;}(React.PureComponent);Divider.propTypes=propTypes$i;Divider.defaultProps=defaultProps$h;var Divider$1 = withTheme(Divider);

var _jsxFileName$j="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Container\\index.js";var propTypes$j={children:propTypes.node.isRequired};var Container=function(_PureComponent){inherits(Container,_PureComponent);function Container(){classCallCheck(this,Container);return possibleConstructorReturn(this,getPrototypeOf(Container).apply(this,arguments));}createClass(Container,[{key:"render",value:function render(){var children=this.props.children;return React__default.createElement(reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName$j,lineNumber:15}},children);}}]);return Container;}(React.PureComponent);Container.propTypes=propTypes$j;

var _jsxFileName$k="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\ListItem\\ListItem.react.js";var UIManager=reactNative.NativeModules.UIManager;var propTypes$k={testID:propTypes.string,dense:propTypes.bool,divider:propTypes.bool,onPress:propTypes.func,onPressValue:propTypes.any,iconSet:propTypes.string,onLongPress:propTypes.func,numberOfLines:propTypes.oneOf([1,2,3,'dynamic']),style:propTypes.shape({container:ViewPropTypes.style,contentViewContainer:ViewPropTypes.style,leftElementContainer:ViewPropTypes.style,centerElementContainer:ViewPropTypes.style,textViewContainer:ViewPropTypes.style,primaryText:reactNative.Text.propTypes.style,firstLine:ViewPropTypes.style,primaryTextContainer:reactNative.Text.propTypes.style,secondaryText:reactNative.Text.propTypes.style,tertiaryText:reactNative.Text.propTypes.style,rightElementContainer:ViewPropTypes.style,leftElement:propTypes.style,rightElement:propTypes.style}),leftElement:propTypes.oneOfType([propTypes.element,propTypes.string]),onLeftElementPress:propTypes.func,centerElement:propTypes.oneOfType([propTypes.element,propTypes.string,propTypes.shape({primaryText:propTypes.string.isRequired,secondaryText:propTypes.string,tertiaryText:propTypes.string})]),rightElement:propTypes.oneOfType([propTypes.element,propTypes.string,propTypes.shape({menu:propTypes.shape({labels:propTypes.array.isRequired})})]),onRightElementPress:propTypes.func,children:propTypes.node};var defaultProps$i={testID:null,dense:false,onPress:null,onPressValue:null,onLongPress:null,divider:false,leftElement:null,onLeftElementPress:null,centerElement:null,rightElement:null,onRightElementPress:null,numberOfLines:1,children:null,style:{},iconSet:null};function getNumberOfSecondaryTextLines(numberOfLines){if(numberOfLines==='dynamic'){return null;}return numberOfLines-1;}function getNumberOfLines(props){var numberOfLines=props.numberOfLines,centerElement=props.centerElement;if(centerElement&&centerElement.secondaryText&&centerElement.tertiaryText&&(!numberOfLines||numberOfLines<3)){return 3;}if(centerElement&&centerElement.secondaryText&&(!numberOfLines||numberOfLines<2)){return 2;}return numberOfLines||1;}function getListItemHeight(props,state){var leftElement=props.leftElement,dense=props.dense;var numberOfLines=state.numberOfLines;if(numberOfLines==='dynamic'){return null;}if(!leftElement&&numberOfLines===1){return dense?40:48;}if(numberOfLines===1){return dense?48:56;}if(numberOfLines===2){return dense?60:72;}if(numberOfLines===3){return dense?80:88;}return null;}function getStyles$g(props,state){var leftElement=props.leftElement,rightElement=props.rightElement,theme=props.theme;var listItem=theme.listItem;var numberOfLines=state.numberOfLines;var container={height:getListItemHeight(props,state)};var contentViewContainer={};var leftElementContainer={};var centerElementContainer={};if(numberOfLines==='dynamic'){contentViewContainer.paddingVertical=16;leftElementContainer.alignSelf='flex-start';}if(!rightElement){contentViewContainer.paddingRight=16;}if(!leftElement){centerElementContainer.paddingLeft=16;}return {container:[listItem.container,container,props.style.container],content:[listItem.content,props.style.content],contentViewContainer:[listItem.contentViewContainer,contentViewContainer,props.style.contentViewContainer],leftElementContainer:[listItem.leftElementContainer,leftElementContainer,props.style.leftElementContainer],centerElementContainer:[listItem.centerElementContainer,centerElementContainer,props.style.centerElementContainer],textViewContainer:[listItem.textViewContainer,props.style.textViewContainer],primaryText:[listItem.primaryText,props.style.primaryText],firstLine:[listItem.firstLine,props.style.firstLine],primaryTextContainer:[listItem.primaryTextContainer,props.style.primaryTextContainer],secondaryText:[listItem.secondaryText,props.style.secondaryText],tertiaryText:[listItem.tertiaryText,props.style.tertiaryText],rightElementContainer:[listItem.rightElementContainer,props.style.rightElementContainer],leftElement:[listItem.leftElement,props.style.leftElement],rightElement:[listItem.rightElement,props.style.rightElement]};}var ListItem=function(_PureComponent){inherits(ListItem,_PureComponent);function ListItem(props){var _this;classCallCheck(this,ListItem);_this=possibleConstructorReturn(this,getPrototypeOf(ListItem).call(this,props));_this.onMenuPressed=function(labels){var _this$props=_this.props,onRightElementPress=_this$props.onRightElementPress,onPressValue=_this$props.onPressValue;UIManager.showPopupMenu(reactNative.findNodeHandle(_this.menu),labels,function(){},function(result,index){if(onRightElementPress){onRightElementPress({action:'menu',result:result,index:index,value:onPressValue});}});};_this.onListItemPressed=function(){var _this$props2=_this.props,onPress=_this$props2.onPress,onPressValue=_this$props2.onPressValue;if(onPress){onPress(onPressValue);}};_this.onListItemLongPressed=function(){var _this$props3=_this.props,onLongPress=_this$props3.onLongPress,onPressValue=_this$props3.onPressValue;if(onLongPress){onLongPress(onPressValue);}};_this.onLeftElementPressed=function(){var _this$props4=_this.props,onLeftElementPress=_this$props4.onLeftElementPress,onPress=_this$props4.onPress,onPressValue=_this$props4.onPressValue;if(onLeftElementPress){onLeftElementPress(onPressValue);}else if(onPress){onPress(onPressValue);}};_this.onRightElementPressed=function(){var _this$props5=_this.props,onRightElementPress=_this$props5.onRightElementPress,onPressValue=_this$props5.onPressValue;if(onRightElementPress){onRightElementPress(onPressValue);}};_this.getPointerEvents=function(){var _this$props6=_this.props,onLeftElementPress=_this$props6.onLeftElementPress,leftElement=_this$props6.leftElement,centerElement=_this$props6.centerElement,rightElement=_this$props6.rightElement;return onLeftElementPress||React__default.isValidElement(leftElement)||React__default.isValidElement(centerElement)||rightElement?'auto':'box-only';};_this.renderLeftElement=function(styles){var _this$props7=_this.props,leftElement=_this$props7.leftElement,iconSet=_this$props7.iconSet;if(!leftElement){return null;}var flattenLeftElement=reactNative.StyleSheet.flatten(styles.leftElement);var content=null;if(typeof leftElement==='string'){content=React__default.createElement(reactNative.TouchableWithoutFeedback,{onPress:_this.onLeftElementPressed,__source:{fileName:_jsxFileName$k,lineNumber:319}},React__default.createElement(Icon$1,{iconSet:iconSet,name:leftElement,color:flattenLeftElement.color,__source:{fileName:_jsxFileName$k,lineNumber:320}}));}else{content=React__default.createElement(reactNative.TouchableWithoutFeedback,{onPress:_this.onLeftElementPressed,__source:{fileName:_jsxFileName$k,lineNumber:329}},React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$k,lineNumber:330}},leftElement));}return React__default.createElement(reactNative.View,{style:styles.leftElementContainer,__source:{fileName:_jsxFileName$k,lineNumber:335}},content);};_this.renderCenterElement=function(styles){var centerElement=_this.props.centerElement;var numberOfLines=_this.state.numberOfLines;var numberOfSecondaryTextLines=getNumberOfSecondaryTextLines(numberOfLines);var content=null;if(React__default.isValidElement(centerElement)){content=centerElement;}else if(centerElement){var primaryText=null;var secondaryText=null;var tertiaryText=null;if(typeof centerElement==='string'){primaryText=centerElement;}else{primaryText=centerElement.primaryText;secondaryText=centerElement.secondaryText;tertiaryText=centerElement.tertiaryText;}var secondLineNumber=!tertiaryText?numberOfSecondaryTextLines:1;var thirdLineNumber=tertiaryText?numberOfSecondaryTextLines:1;content=React__default.createElement(reactNative.View,{style:styles.textViewContainer,__source:{fileName:_jsxFileName$k,lineNumber:366}},React__default.createElement(reactNative.View,{style:styles.firstLine,__source:{fileName:_jsxFileName$k,lineNumber:367}},React__default.createElement(reactNative.View,{style:styles.primaryTextContainer,__source:{fileName:_jsxFileName$k,lineNumber:368}},React__default.createElement(reactNative.Text,{numberOfLines:1,style:styles.primaryText,__source:{fileName:_jsxFileName$k,lineNumber:369}},primaryText))),secondaryText&&React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$k,lineNumber:375}},React__default.createElement(reactNative.Text,{numberOfLines:secondLineNumber,style:styles.secondaryText,__source:{fileName:_jsxFileName$k,lineNumber:376}},secondaryText)),tertiaryText&&React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$k,lineNumber:385}},React__default.createElement(reactNative.Text,{numberOfLines:thirdLineNumber,style:styles.tertiaryText,__source:{fileName:_jsxFileName$k,lineNumber:386}},tertiaryText)));}return React__default.createElement(reactNative.View,{style:styles.centerElementContainer,__source:{fileName:_jsxFileName$k,lineNumber:395}},content);};_this.renderRightElement=function(styles){var _this$props8=_this.props,rightElement=_this$props8.rightElement,iconSet=_this$props8.iconSet;var content=[];var elements=null;if(typeof rightElement==='string'){elements=[rightElement];}else if(Array.isArray(rightElement)){elements=rightElement;}else if(rightElement&&rightElement.actions){elements=rightElement.actions;}var flattenRightElement=reactNative.StyleSheet.flatten(styles.rightElement);if(elements){content=elements.map(function(action){return React__default.createElement(IconToggle$1,{key:action,iconSet:iconSet,color:flattenRightElement.color,name:action,size:24,style:styles.rightElement,onPress:function onPress(){return _this.onRightElementPressed({action:action});},__source:{fileName:_jsxFileName$k,lineNumber:416}});});}if(React__default.isValidElement(rightElement)){content.push(React__default.cloneElement(rightElement,{key:'customRightElement'}));}if(rightElement&&rightElement.menu){content.push(React__default.createElement(reactNative.View,{key:"menuIcon",__source:{fileName:_jsxFileName$k,lineNumber:438}},React__default.createElement(reactNative.View,{ref:function ref(c){_this.menu=c;},style:{backgroundColor:'transparent',width:reactNative.StyleSheet.hairlineWidth,height:reactNative.StyleSheet.hairlineWidth},__source:{fileName:_jsxFileName$k,lineNumber:439}}),React__default.createElement(IconToggle$1,{iconSet:iconSet,name:rightElement.menu.icon||'more-vert',color:flattenRightElement.color,onPress:function onPress(){return _this.onMenuPressed(rightElement.menu.labels);},style:flattenRightElement,__source:{fileName:_jsxFileName$k,lineNumber:449}})));}return React__default.createElement(reactNative.View,{style:styles.rightElementContainer,__source:{fileName:_jsxFileName$k,lineNumber:460}},content);};_this.renderDivider=function(){var divider=_this.props.divider;if(!divider){return null;}return React__default.createElement(Divider$1,{__source:{fileName:_jsxFileName$k,lineNumber:470}});};_this.renderContent=function(styles){return React__default.createElement(reactNative.View,{style:styles.contentViewContainer,pointerEvents:_this.getPointerEvents(),__source:{fileName:_jsxFileName$k,lineNumber:474}},_this.renderLeftElement(styles),_this.renderCenterElement(styles),_this.renderRightElement(styles));};_this.state={numberOfLines:getNumberOfLines(props)};return _this;}createClass(ListItem,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextPros){this.setState({numberOfLines:getNumberOfLines(nextPros)});}},{key:"render",value:function render(){var _this$props9=this.props,onPress=_this$props9.onPress,onLongPress=_this$props9.onLongPress,testID=_this$props9.testID;var styles=getStyles$g(this.props,this.state);var content=React__default.createElement(reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName$k,lineNumber:491}},this.renderContent(styles));if(onPress||onLongPress){content=React__default.createElement(RippleFeedback,{delayPressIn:50,onPress:this.onListItemPressed,onLongPress:this.onListItemLongPressed,__source:{fileName:_jsxFileName$k,lineNumber:496}},content);}return React__default.createElement(reactNative.View,{testID:testID,__source:{fileName:_jsxFileName$k,lineNumber:507}},content,this.renderDivider());}}]);return ListItem;}(React.PureComponent);ListItem.propTypes=propTypes$k;ListItem.defaultProps=defaultProps$i;var ListItem$1 = withTheme(ListItem);

var _jsxFileName$l="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Drawer\\HeaderAccount.react.js";function ownKeys$5(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$5(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$5(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$5(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var propTypes$l={avatar:propTypes.element,accounts:propTypes.arrayOf(propTypes.shape({avatar:propTypes.element,onPress:propTypes.func})),footer:propTypes.shape(ListItem$1.propTypes),style:propTypes.shape({container:ViewPropTypes.style,accountContainer:ViewPropTypes.style,topContainer:ViewPropTypes.style,avatarsContainer:ViewPropTypes.style,activeAvatarContainer:ViewPropTypes.style,inactiveAvatarContainer:ViewPropTypes.style}),theme:propTypes.any};var defaultProps$j={avatar:null,accounts:null,footer:null,style:{}};function getStyles$h(props){var drawerHeaderAccount=props.theme.drawerHeaderAccount;return {container:[drawerHeaderAccount.container,props.style.container],accountContainer:[drawerHeaderAccount.accountContainer,props.style.accountContainer],topContainer:[drawerHeaderAccount.topContainer,props.style.topContainer],avatarsContainer:[drawerHeaderAccount.avatarsContainer,props.style.avatarsContainer],activeAvatarContainer:[drawerHeaderAccount.activeAvatarContainer,props.style.activeAvatarContainer],inactiveAvatarContainer:[drawerHeaderAccount.inactiveAvatarContainer,props.style.inactiveAvatarContainer]};}var HeaderAcount=function(_PureComponent){inherits(HeaderAcount,_PureComponent);function HeaderAcount(){var _getPrototypeOf2;var _this;classCallCheck(this,HeaderAcount);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(HeaderAcount)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.componentWillMount=function(){_this.setState({styles:getStyles$h(_this.props)});};_this.renderFooter=function(){var _this$props=_this.props,footer=_this$props.footer,theme=_this$props.theme;if(!footer){return null;}var props=_objectSpread$5({},footer,{style:theme.drawerHeaderListItem});return React__default.createElement(ListItem$1,_extends_1({},props,{__source:{fileName:_jsxFileName$l,lineNumber:84}}));};_this.renderAccount=function(account){var styles=_this.state.styles;return React__default.createElement(reactNative.TouchableWithoutFeedback,{key:account.key,onPress:account.onPress,__source:{fileName:_jsxFileName$l,lineNumber:93}},React__default.createElement(reactNative.View,{style:[styles.inactiveAvatarContainer],__source:{fileName:_jsxFileName$l,lineNumber:94}},account.avatar));};_this.renderAccounts=function(){var accounts=_this.props.accounts;if(!accounts){return null;}return accounts.slice(0,3).map(_this.renderAccount);};return _this;}createClass(HeaderAcount,[{key:"render",value:function render(){var avatar=this.props.avatar;var styles=this.state.styles;return React__default.createElement(reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName$l,lineNumber:116}},React__default.createElement(reactNative.View,{style:[styles.accountContainer],__source:{fileName:_jsxFileName$l,lineNumber:117}},React__default.createElement(reactNative.View,{style:[styles.topContainer],__source:{fileName:_jsxFileName$l,lineNumber:118}},React__default.createElement(reactNative.View,{style:[styles.avatarsContainer],__source:{fileName:_jsxFileName$l,lineNumber:119}},React__default.createElement(reactNative.View,{style:[styles.activeAvatarContainer],__source:{fileName:_jsxFileName$l,lineNumber:120}},React__default.cloneElement(avatar,{size:56})),this.renderAccounts()))),this.renderFooter());}}]);return HeaderAcount;}(React.PureComponent);HeaderAcount.propTypes=propTypes$l;HeaderAcount.defaultProps=defaultProps$j;var HeaderAccount = withTheme(HeaderAcount);

var _jsxFileName$m="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Drawer\\Header.react.js";var propTypes$m={image:propTypes.shape({type:propTypes.oneOf([reactNative.Image])}),backgroundColor:propTypes.string,children:propTypes.node,style:propTypes.shape({contentContainer:ViewPropTypes.style,container:ViewPropTypes.style})};var defaultProps$k={image:null,backgroundColor:null,children:null,style:{}};function getStyles$i(props){var image=props.image,theme=props.theme;var drawerHeader=theme.drawerHeader;var local={};if(image){local.contentContainer={backgroundColor:null};}return {container:[drawerHeader.container,props.style.container],contentContainer:[drawerHeader.contentContainer,props.style.contentContainer,local.contentContainer]};}var Header=function(_PureComponent){inherits(Header,_PureComponent);function Header(){classCallCheck(this,Header);return possibleConstructorReturn(this,getPrototypeOf(Header).apply(this,arguments));}createClass(Header,[{key:"render",value:function render(){var _this$props=this.props,image=_this$props.image,children=_this$props.children;var styles=getStyles$i(this.props);var flatten=reactNative.StyleSheet.flatten(styles.contentContainer);var content=React__default.createElement(reactNative.View,{style:styles.contentContainer,__source:{fileName:_jsxFileName$m,lineNumber:55}},children);if(image){return React__default.createElement(reactNative.View,{__source:{fileName:_jsxFileName$m,lineNumber:59}},React__default.cloneElement(image,{style:[{height:flatten.height}]}),React__default.createElement(reactNative.View,{style:[styles.container],__source:{fileName:_jsxFileName$m,lineNumber:63}},content));}return content;}}]);return Header;}(React.PureComponent);Header.propTypes=propTypes$m;Header.defaultProps=defaultProps$k;Header.Account=HeaderAccount;var Header$1 = withTheme(Header);

var _jsxFileName$n="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Subheader\\Subheader.react.js";var propTypes$n={text:propTypes.string.isRequired,inset:propTypes.bool,lines:propTypes.number,style:propTypes.shape({contaienr:ViewPropTypes.style,text:reactNative.Text.propTypes.style})};var defaultProps$l={style:{},inset:false,lines:1};function getStyles$j(props){var subheader=props.theme.subheader;return {container:[subheader.container,{paddingLeft:props.inset?72:16},props.style.container],text:[subheader.text,props.style.text]};}var Subheader=function(_PureComponent){inherits(Subheader,_PureComponent);function Subheader(){classCallCheck(this,Subheader);return possibleConstructorReturn(this,getPrototypeOf(Subheader).apply(this,arguments));}createClass(Subheader,[{key:"render",value:function render(){var _this$props=this.props,text=_this$props.text,lines=_this$props.lines;var styles=getStyles$j(this.props);return React__default.createElement(reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName$n,lineNumber:44}},React__default.createElement(reactNative.Text,{numberOfLines:lines,style:styles.text,__source:{fileName:_jsxFileName$n,lineNumber:45}},text));}}]);return Subheader;}(React.PureComponent);Subheader.propTypes=propTypes$n;Subheader.defaultProps=defaultProps$l;var Subheader$1 = withTheme(Subheader);

var _jsxFileName$o="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Drawer\\Section.react.js";var propTypes$o={title:propTypes.string,items:propTypes.arrayOf(propTypes.shape({icon:propTypes.string,value:propTypes.oneOfType([propTypes.string,propTypes.element]).isRequired,label:propTypes.string,onPress:propTypes.func,onLongPress:propTypes.func,active:propTypes.bool,disabled:propTypes.bool})),divider:propTypes.bool,style:propTypes.shape({container:ViewPropTypes.style,item:ViewPropTypes.style,subheader:ViewPropTypes.style,icon:reactNative.Text.propTypes.style,value:reactNative.Text.propTypes.style,label:reactNative.Text.propTypes.style}),key:propTypes.string,theme:propTypes.any};var defaultProps$m={title:null,items:[],divider:false,style:{},key:''};function getStyles$k(props){var drawerSection=props.theme.drawerSection;return {container:[drawerSection.container,props.style.container],item:[drawerSection.item,props.style.item],subheader:[drawerSection.subheader,props.style.subheader],icon:[drawerSection.icon,props.style.icon],value:[drawerSection.value,props.style.value],label:[drawerSection.label,props.style.label]};}var Section=function(_PureComponent){inherits(Section,_PureComponent);function Section(){var _getPrototypeOf2;var _this;classCallCheck(this,Section);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Section)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.renderTitle=function(){var title=_this.props.title;if(!title){return null;}return React__default.createElement(Subheader$1,{text:title,__source:{fileName:_jsxFileName$o,lineNumber:70}});};return _this;}createClass(Section,[{key:"render",value:function render(){var _this$props=this.props,items=_this$props.items,divider=_this$props.divider,key=_this$props.key,theme=_this$props.theme;var typography=theme.typography;var styles=getStyles$k(this.props);return React__default.createElement(reactNative.View,{key:key,__source:{fileName:_jsxFileName$o,lineNumber:80}},React__default.createElement(reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName$o,lineNumber:81}},this.renderTitle(styles),items.map(function(item){var style={primaryText:typography.buttons};if(item.active){style=theme.drawerSectionActiveItem;}return React__default.createElement(ListItem$1,{dense:true,key:item.key?item.key:item.icon,leftElement:item.icon,centerElement:item.value,onPress:item.onPress,style:style,__source:{fileName:_jsxFileName$o,lineNumber:91}});})),divider&&React__default.createElement(Divider$1,{__source:{fileName:_jsxFileName$o,lineNumber:102}}));}}]);return Section;}(React.PureComponent);Section.propTypes=propTypes$o;Section.defaultProps=defaultProps$m;var Section$1 = withTheme(Section);

var _jsxFileName$p="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Drawer\\Drawer.react.js";var propTypes$p={children:propTypes.node.isRequired,style:propTypes.shape({container:ViewPropTypes.style})};var defaultProps$n={style:{}};function getStyles$l(props){var drawer=props.theme.drawer;return {container:[drawer.container,props.style.container]};}var Drawer=function(_PureComponent){inherits(Drawer,_PureComponent);function Drawer(){classCallCheck(this,Drawer);return possibleConstructorReturn(this,getPrototypeOf(Drawer).apply(this,arguments));}createClass(Drawer,[{key:"render",value:function render(){var children=this.props.children;var styles=getStyles$l(this.props);return React__default.createElement(Container,{__source:{fileName:_jsxFileName$p,lineNumber:38}},React__default.createElement(reactNative.ScrollView,{style:styles.container,__source:{fileName:_jsxFileName$p,lineNumber:39}},children));}}]);return Drawer;}(React.PureComponent);Drawer.propTypes=propTypes$p;Drawer.defaultProps=defaultProps$n;Drawer.Header=Header$1;Drawer.Section=Section$1;var Drawer_react = withTheme(Drawer);

var _jsxFileName$q="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\RadioButton\\RadioButton.react.js";var propTypes$q={label:propTypes.string.isRequired,value:propTypes.oneOfType([propTypes.string,propTypes.number]).isRequired,checked:propTypes.bool,disabled:propTypes.bool,onSelect:propTypes.func.isRequired,theme:propTypes.string};var defaultProps$o={theme:'light',disabled:false,checked:false};var RadioButton=function(_PureComponent){inherits(RadioButton,_PureComponent);function RadioButton(){var _getPrototypeOf2;var _this;classCallCheck(this,RadioButton);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(RadioButton)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.onPress=function(){var _this$props=_this.props,value=_this$props.value,checked=_this$props.checked,disabled=_this$props.disabled,onSelect=_this$props.onSelect;if(disabled&&!checked){return;}onSelect(value);};return _this;}createClass(RadioButton,[{key:"render",value:function render(){return React__default.createElement(Checkbox$1,_extends_1({checkedIcon:"radio-button-checked",uncheckedIcon:"radio-button-unchecked",onCheck:this.onPress},this.props,{__source:{fileName:_jsxFileName$q,lineNumber:34}}));}}]);return RadioButton;}(React.PureComponent);RadioButton.propTypes=propTypes$q;RadioButton.defaultProps=defaultProps$o;

var _jsxFileName$r="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Toolbar\\LeftElement.react.js";var propTypes$r={leftElementTestID:propTypes.string,isSearchActive:propTypes.bool.isRequired,style:propTypes.shape({leftElementContainer:ViewPropTypes.style,leftElement:reactNative.Text.propTypes.style}),size:propTypes.number,leftElement:propTypes.node,onLeftElementPress:propTypes.func,onSearchClose:propTypes.func,iconSet:propTypes.string};var defaultProps$p={leftElementTestID:null,leftElement:null,onLeftElementPress:null,onSearchClose:null,style:{},size:24,iconSet:null};var SEARCH_FORWARD_ICON='arrow-forward';function shouldUpdateStyles(props,nextProps){if(props.style!==nextProps.styles){return true;}if(props.isSearchActive!==nextProps.isSearchActive){return true;}return false;}function getStyles$m(props){var isSearchActive=props.isSearchActive,theme=props.theme;var toolbar=theme.toolbar,toolbarSearchActive=theme.toolbarSearchActive;return {leftElementContainer:[toolbar.leftElementContainer,isSearchActive&&toolbarSearchActive.leftElementContainer,props.style.leftElementContainer],leftElement:[toolbar.leftElement,isSearchActive&&toolbarSearchActive.leftElement,props.style.leftElement]};}var LeftElement=function(_PureComponent){inherits(LeftElement,_PureComponent);function LeftElement(props,context){var _this;classCallCheck(this,LeftElement);_this=possibleConstructorReturn(this,getPrototypeOf(LeftElement).call(this,props,context));_this.animateIcon=function(activate){var spinValue=_this.state.spinValue;var leftElement=_this.props.leftElement;var toValue=activate?1:0;reactNative.Animated.timing(spinValue,{toValue:0.5,duration:112,easing:reactNative.Easing.linear,useNativeDriver:true}).start(function(){_this.setState({leftElement:activate?SEARCH_FORWARD_ICON:leftElement});reactNative.Animated.timing(spinValue,{toValue:toValue,duration:112,easing:reactNative.Easing.linear,useNativeDriver:true}).start();});};_this.state={styles:getStyles$m(_this.props),leftElement:props.isSearchActive?SEARCH_FORWARD_ICON:props.leftElement,spinValue:new reactNative.Animated.Value(props.isSearchActive?1:0)};return _this;}createClass(LeftElement,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){var _this$props=this.props,isSearchActive=_this$props.isSearchActive,leftElement=_this$props.leftElement;if(nextProps.isSearchActive!==isSearchActive){this.animateIcon(nextProps.isSearchActive);}if(leftElement!==nextProps.leftElement){this.setState({leftElement:nextProps.leftElement});}if(shouldUpdateStyles(this.props,nextProps)){this.setState({styles:getStyles$m(nextProps,this.context)});}}},{key:"render",value:function render(){var _this$state=this.state,styles=_this$state.styles,leftElement=_this$state.leftElement,spinValue=_this$state.spinValue;var _this$props2=this.props,leftElementTestID=_this$props2.leftElementTestID,isSearchActive=_this$props2.isSearchActive,onLeftElementPress=_this$props2.onLeftElementPress,onSearchClose=_this$props2.onSearchClose,size=_this$props2.size,iconSet=_this$props2.iconSet;if(!leftElement){return null;}if(!isSearchActive&&React__default.isValidElement(leftElement)){return React__default.createElement(reactNative.Animated.View,{style:styles.leftElementContainer,__source:{fileName:_jsxFileName$r,lineNumber:138}},React__default.cloneElement(leftElement,{key:'customLeftElement'}));}var onPress=onLeftElementPress;if(isSearchActive){onPress=onSearchClose;}var flattenLeftElement=reactNative.StyleSheet.flatten(styles.leftElement);var spin=spinValue.interpolate({inputRange:[0,1],outputRange:['0deg','180deg']});return React__default.createElement(reactNative.Animated.View,{testID:leftElementTestID,style:[styles.leftElementContainer,{transform:[{rotate:spin}]}],__source:{fileName:_jsxFileName$r,lineNumber:159}},React__default.createElement(IconToggle$1,{key:leftElement,name:leftElement,color:flattenLeftElement.color,onPress:onPress,size:size,iconSet:iconSet,style:flattenLeftElement,__source:{fileName:_jsxFileName$r,lineNumber:163}}));}}]);return LeftElement;}(React.PureComponent);LeftElement.propTypes=propTypes$r;LeftElement.defaultProps=defaultProps$p;var LeftElement$1 = withTheme(LeftElement);

var _jsxFileName$s="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Toolbar\\CenterElement.react.js";var propTypes$s={isSearchActive:propTypes.bool.isRequired,searchValue:propTypes.string.isRequired,searchable:propTypes.shape({autoFocus:propTypes.bool,autoCapitalize:reactNative.TextInput.propTypes.autoCapitalize,autoCorrect:propTypes.bool,onChangeText:propTypes.func,onSubmitEditing:propTypes.func,placeholder:propTypes.string}),style:propTypes.shape({centerElementContainer:ViewPropTypes.style,titleText:reactNative.Text.propTypes.style}),centerElement:propTypes.node,onPress:propTypes.func,onSearchTextChange:propTypes.func.isRequired};var defaultProps$q={onPress:null,centerElement:null,searchable:null,style:{}};function getStyles$n(props){var state=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var leftElement=props.leftElement,theme=props.theme;var toolbar=theme.toolbar,toolbarSearchActive=theme.toolbarSearchActive;var isSearchActive=state.isSearchActive;var local={};if(props.color){local.icon={color:props.color};}if(!leftElement){local.centerElementContainer={marginLeft:16};}return {centerElementContainer:[toolbar.centerElementContainer,isSearchActive&&toolbarSearchActive.centerElementContainer,local.centerElementContainer,props.style.centerElementContainer],titleText:[toolbar.titleText,isSearchActive&&toolbarSearchActive.titleText,props.style.titleText]};}var CenterElement=function(_PureComponent){inherits(CenterElement,_PureComponent);function CenterElement(props,context){var _this;classCallCheck(this,CenterElement);_this=possibleConstructorReturn(this,getPrototypeOf(CenterElement).call(this,props,context));_this.animateElements=function(nextIsSearchActive){var opacityValue=_this.state.opacityValue;reactNative.Animated.timing(opacityValue,{toValue:0,duration:112,easing:reactNative.Easing.linear,useNativeDriver:true}).start(function(){_this.setState({isSearchActive:nextIsSearchActive});reactNative.Animated.timing(opacityValue,{toValue:1,duration:112,easing:reactNative.Easing.linear,useNativeDriver:true}).start();});};_this.state={isSearchActive:props.isSearchActive,opacityValue:new reactNative.Animated.Value(1)};return _this;}createClass(CenterElement,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){var isSearchActive=this.props.isSearchActive;if(isSearchActive!==nextProps.isSearchActive){this.animateElements(nextProps.isSearchActive);}}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,searchable=_this$props.searchable,centerElement=_this$props.centerElement,onPress=_this$props.onPress,onSearchTextChange=_this$props.onSearchTextChange,searchValue=_this$props.searchValue;var _this$state=this.state,opacityValue=_this$state.opacityValue,isSearchActive=_this$state.isSearchActive;var styles=getStyles$n(this.props,this.state);var content=null;if(searchable&&isSearchActive){content=React__default.createElement(reactNative.TextInput,{ref:function ref(_ref){_this2.searchFieldRef=_ref;},autoFocus:searchable.autoFocus,autoCapitalize:searchable.autoCapitalize,autoCorrect:searchable.autoCorrect,onChangeText:onSearchTextChange,onSubmitEditing:searchable.onSubmitEditing,placeholder:searchable.placeholder,style:[styles.titleText,{marginLeft:0}],underlineColorAndroid:"transparent",value:searchValue,__source:{fileName:_jsxFileName$s,lineNumber:139}});}else if(typeof centerElement==='string'){content=React__default.createElement(reactNative.Text,{numberOfLines:1,style:styles.titleText,__source:{fileName:_jsxFileName$s,lineNumber:156}},centerElement);}else{content=centerElement;}return React__default.createElement(reactNative.TouchableWithoutFeedback,{key:"center",onPress:onPress,__source:{fileName:_jsxFileName$s,lineNumber:165}},React__default.createElement(reactNative.Animated.View,{style:[styles.centerElementContainer,{opacity:opacityValue}],__source:{fileName:_jsxFileName$s,lineNumber:166}},content));}}]);return CenterElement;}(React.PureComponent);CenterElement.propTypes=propTypes$s;CenterElement.defaultProps=defaultProps$q;var CenterElement$1 = withTheme(CenterElement);

function isFunction(obj){return !!(obj&&obj.constructor&&obj.call&&obj.apply);}

var _jsxFileName$t="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Toolbar\\RightElement.react.js";var UIManager$1=reactNative.NativeModules.UIManager;var propTypes$t={rightElementTestID:propTypes.string,isSearchActive:propTypes.bool.isRequired,searchValue:propTypes.string.isRequired,searchable:propTypes.object,style:propTypes.shape({rightElementContainer:ViewPropTypes.style,rightEle:ViewPropTypes.style}),size:propTypes.number,rightElement:propTypes.any,onRightElementPress:propTypes.func,onSearchClearRequest:propTypes.func.isRequired,onSearchPress:propTypes.func.isRequired,iconSet:propTypes.string};var defaultProps$r={rightElementTestID:null,rightElement:null,onRightElementPress:null,size:null,style:{},searchable:null,iconSet:null};function getStyles$o(props){var isSearchActive=props.isSearchActive,theme=props.theme;var toolbar=theme.toolbar,toolbarSearchActive=theme.toolbarSearchActive;return {rightElementContainer:[toolbar.rightElementContainer,isSearchActive&&toolbarSearchActive.rightElementContainer,props.style.rightElementContainer],rightElement:[toolbar.rightElement,isSearchActive&&toolbarSearchActive.rightElement,props.style.rightElement]};}var RightElement=function(_PureComponent){inherits(RightElement,_PureComponent);function RightElement(){var _getPrototypeOf2;var _this;classCallCheck(this,RightElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(RightElement)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.onMenuPressed=function(labels){var onRightElementPress=_this.props.onRightElementPress;UIManager$1.showPopupMenu(reactNative.findNodeHandle(_this.menu),labels,function(){},function(result,index){if(onRightElementPress){onRightElementPress({action:'menu',result:result,index:index});}});};_this.onSearchPressed=function(){var onSearchPress=_this.props.onSearchPress;if(isFunction(onSearchPress)){onSearchPress();}};return _this;}createClass(RightElement,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,rightElementTestID=_this$props.rightElementTestID,isSearchActive=_this$props.isSearchActive,rightElement=_this$props.rightElement,onRightElementPress=_this$props.onRightElementPress,searchable=_this$props.searchable,size=_this$props.size,searchValue=_this$props.searchValue,onSearchClearRequest=_this$props.onSearchClearRequest,iconSet=_this$props.iconSet;var styles=getStyles$o(this.props,this.context,this.state);if(!rightElement&&!searchable){return null;}var actionsMap=[];var result=[];if(rightElement){if(typeof rightElement==='string'){actionsMap.push(rightElement);}else if(Array.isArray(rightElement)){actionsMap=rightElement;}else if(rightElement.actions){actionsMap=rightElement.actions;}}var flattenRightElement=reactNative.StyleSheet.flatten(styles.rightElement);if(actionsMap){result=actionsMap.map(function(action,index){if(React__default.isValidElement(action)){return action;}return React__default.createElement(IconToggle$1,{key:action,name:action,color:flattenRightElement.color,size:size,style:flattenRightElement,iconSet:iconSet,onPress:function onPress(){return onRightElementPress({action:action,index:index});},__source:{fileName:_jsxFileName$t,lineNumber:131}});});}if(React__default.isValidElement(rightElement)){result.push(React__default.cloneElement(rightElement,{key:'customRightElement'}));}if(searchable){if(isSearchActive){result=[];if(searchValue.length>0){result.push(React__default.createElement(IconToggle$1,{key:"searchClear",name:"clear",color:flattenRightElement.color,size:size,style:flattenRightElement,onPress:onSearchClearRequest,__source:{fileName:_jsxFileName$t,lineNumber:159}}));}}else{result.push(React__default.createElement(IconToggle$1,{key:"searchIcon",name:searchable.icon?searchable.icon:'search',color:flattenRightElement.color,size:size,style:flattenRightElement,onPress:this.onSearchPressed,__source:{fileName:_jsxFileName$t,lineNumber:171}}));}}if(rightElement&&rightElement.menu&&!isSearchActive){var view=React__default.createElement(reactNative.View,{key:"menuIcon",__source:{fileName:_jsxFileName$t,lineNumber:185}},React__default.createElement(reactNative.View,{ref:function ref(c){_this2.menu=c;},style:{backgroundColor:'transparent',width:1,height:reactNative.StyleSheet.hairlineWidth},__source:{fileName:_jsxFileName$t,lineNumber:189}}),React__default.createElement(IconToggle$1,{name:rightElement.menu.icon||'more-vert',color:flattenRightElement.color,size:size,onPress:function onPress(){return _this2.onMenuPressed(rightElement.menu.labels);},style:flattenRightElement,__source:{fileName:_jsxFileName$t,lineNumber:199}}));result.push(view);}return React__default.createElement(reactNative.View,{testID:rightElementTestID,style:styles.rightElementContainer,__source:{fileName:_jsxFileName$t,lineNumber:213}},result);}}]);return RightElement;}(React.PureComponent);RightElement.propTypes=propTypes$t;RightElement.defaultProps=defaultProps$r;var RightElement$1 = withTheme(RightElement);

var _jsxFileName$u="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Toolbar\\Toolbar.react.js";var propTypes$u={isSearchActive:propTypes.bool,searchable:propTypes.shape({onChangeText:propTypes.func,onSearchClosed:propTypes.func,onSearchCloseRequested:propTypes.func,onSearchPressed:propTypes.func,onSubmitEditing:propTypes.func,placeholder:propTypes.string,autoFocus:propTypes.bool,autoCapitalize:propTypes.string,autoCorrect:propTypes.bool,icon:propTypes.string}),style:propTypes.shape({container:ViewPropTypes.style,leftElementContainer:ViewPropTypes.style,leftElement:propTypes.any,centerElementContainer:ViewPropTypes.style,titleText:reactNative.Text.propTypes.style,rightElementContainer:ViewPropTypes.style,rightElement:propTypes.any}),size:propTypes.number,hidden:propTypes.bool,onPress:propTypes.func,leftElement:propTypes.oneOfType([propTypes.element,propTypes.string]),onLeftElementPress:propTypes.func,centerElement:propTypes.oneOfType([propTypes.element,propTypes.string]),rightElement:propTypes.oneOfType([propTypes.element,propTypes.string,propTypes.arrayOf(propTypes.string),propTypes.shape({actions:propTypes.arrayOf(propTypes.oneOfType([propTypes.element,propTypes.string])),menu:propTypes.shape({icon:propTypes.string,labels:propTypes.arrayOf(propTypes.string)})})]),onRightElementPress:propTypes.func,theme:propTypes.any};var defaultProps$s={style:{},hidden:false,isSearchActive:false,onRightElementPress:null,rightElement:null,searchable:null,onPress:null,centerElement:null,leftElement:null,onLeftElementPress:null,size:24};var getBackButtonListener=function getBackButtonListener(callback){return BackAndroid.addEventListener('hardwareBackPress',callback);};function getStyles$p(props){var toolbar=props.theme.toolbar;return {container:[toolbar.container,props.style.container]};}var Toolbar=function(_PureComponent){inherits(Toolbar,_PureComponent);function Toolbar(props){var _this;classCallCheck(this,Toolbar);_this=possibleConstructorReturn(this,getPrototypeOf(Toolbar).call(this,props));_this.onSearchOpenRequested=function(){_this.setState({isSearchActiveInternal:true,searchValue:''});_this.animateSearchBackground(function(){var defaultScaleValue=_this.state.defaultScaleValue;defaultScaleValue.setValue(0.01);_this.setState({order:'searchFirst'});_this.backButtonListener=getBackButtonListener(_this.onSearchCloseRequested);});};_this.onSearchPressed=function(){_this.onSearchOpenRequested();var searchable=_this.props.searchable;if(searchable&&isFunction(searchable.onSearchPressed)){searchable.onSearchPressed();}};_this.onSearchTextChanged=function(value){var searchable=_this.props.searchable;if(searchable&&isFunction(searchable.onChangeText)){searchable.onChangeText(value);}_this.setState({searchValue:value});};_this.onSearchClearRequested=function(){_this.onSearchTextChanged('');};_this.onSearchCloseRequested=function(){var searchable=_this.props.searchable;var searchScaleValue=_this.state.searchScaleValue;if(searchable.onSearchCloseRequested){searchable.onSearchCloseRequested();}_this.setState({isSearchActiveInternal:false,searchValue:''});_this.animateDefaultBackground(function(){searchScaleValue.setValue(0.01);_this.setState({order:'defaultFirst'});_this.onSearchClosed();});return true;};_this.onSearchClosed=function(){var searchable=_this.props.searchable;if(_this.backButtonListener){_this.backButtonListener.remove();}if(searchable&&isFunction(searchable.onSearchClosed)){searchable.onSearchClosed();}};_this.onLayout=function(event){var _event$nativeEvent$la=event.nativeEvent.layout,width=_event$nativeEvent$la.width,height=_event$nativeEvent$la.height;var radius=Math.sqrt(Math.pow(height,2)+Math.pow(width,2));var diameter=radius*2;var bgPosition=width-radius;var pointSize=diameter*0.01;diameter+=pointSize;_this.setState({bgPosition:bgPosition,radius:diameter/2,diameter:diameter});};_this.animateSearchBackground=function(onComplete){var searchScaleValue=_this.state.searchScaleValue;reactNative.Animated.timing(searchScaleValue,{toValue:1,duration:325,easing:reactNative.Easing.bezier(0.0,0.0,0.2,1),useNativeDriver:true}).start(onComplete);};_this.animateDefaultBackground=function(onComplete){var defaultScaleValue=_this.state.defaultScaleValue;reactNative.Animated.timing(defaultScaleValue,{toValue:1,duration:325,easing:reactNative.Easing.bezier(0.0,0.0,0.2,1),useNativeDriver:true}).start(onComplete);};_this.show=function(){var moveAnimated=_this.state.moveAnimated;reactNative.Animated.timing(moveAnimated,{toValue:0,duration:225,easing:reactNative.Easing.bezier(0.0,0.0,0.2,1),useNativeDriver:true}).start();};_this.hide=function(){var moveAnimated=_this.state.moveAnimated;var styles=getStyles$p(_this.props);reactNative.Animated.timing(moveAnimated,{toValue:-1*reactNative.StyleSheet.flatten(styles.container).height,duration:195,easing:reactNative.Easing.bezier(0.4,0.0,0.6,1),useNativeDriver:true}).start();};_this.renderAnimatedBackgrounds=function(styles){var theme=_this.props.theme;var _this$state=_this.state,diameter=_this$state.diameter,bgPosition=_this$state.bgPosition,radius=_this$state.radius,defaultScaleValue=_this$state.defaultScaleValue,searchScaleValue=_this$state.searchScaleValue,order=_this$state.order;var bgStyle={position:'absolute',top:-radius,width:diameter,height:diameter,borderRadius:radius};var toolbarSearchActive=theme.toolbarSearchActive;var container=reactNative.StyleSheet.flatten(styles.container);var searchActive=reactNative.StyleSheet.flatten(toolbarSearchActive.container);var bgSearch=React__default.createElement(reactNative.Animated.View,{key:"searchBackground",style:[bgStyle,{left:bgPosition,backgroundColor:searchActive.backgroundColor,transform:[{scale:searchScaleValue}]}],__source:{fileName:_jsxFileName$u,lineNumber:404}});var bgDefault=React__default.createElement(reactNative.Animated.View,{key:"defaultBackground",style:[bgStyle,{right:bgPosition,backgroundColor:container.backgroundColor,transform:[{scale:defaultScaleValue}]}],__source:{fileName:_jsxFileName$u,lineNumber:418}});var content=null;if(order==='defaultFirst'){content=[bgDefault,bgSearch];}else{content=[bgSearch,bgDefault];}return React__default.createElement(reactNative.View,{style:reactNative.StyleSheet.absoluteFill,__source:{fileName:_jsxFileName$u,lineNumber:439}},content);};var isSearchActiveInternal=props.isSearchActive||false;_this.backButtonListener=isSearchActiveInternal?getBackButtonListener(_this.onSearchCloseRequested):null;_this.state={isSearchActiveInternal:isSearchActiveInternal,searchValue:'',defaultScaleValue:new reactNative.Animated.Value(isSearchActiveInternal?0.01:1),searchScaleValue:new reactNative.Animated.Value(isSearchActiveInternal?1:0.01),radius:0,diameter:0,order:isSearchActiveInternal?'searchFirst':'defaultFirst',positionValue:new reactNative.Animated.Value(0)};return _this;}createClass(Toolbar,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){var isSearchActiveInternal=this.state.isSearchActiveInternal;var _this$props=this.props,isSearchActive=_this$props.isSearchActive,hidden=_this$props.hidden;if(isSearchActiveInternal&&!nextProps.searchable){this.onSearchCloseRequested();}if(isSearchActive!==nextProps.isSearchActive){var nextIsSearchActive=!!nextProps.isSearchActive;if(isSearchActiveInternal!==nextIsSearchActive){if(nextIsSearchActive){this.onSearchOpenRequested();}else{this.onSearchCloseRequested();}}}if(nextProps.hidden!==hidden){if(nextProps.hidden===true){this.hide();}else{this.show();}}}},{key:"focusSearchField",value:function focusSearchField(){this.searchFieldRef.focus();}},{key:"render",value:function render(){var _this$props2=this.props,onLeftElementPress=_this$props2.onLeftElementPress,onPress=_this$props2.onPress,onRightElementPress=_this$props2.onRightElementPress;var _this$state2=this.state,isSearchActiveInternal=_this$state2.isSearchActiveInternal,searchValue=_this$state2.searchValue,positionValue=_this$state2.positionValue;var styles=getStyles$p(this.props);return React__default.createElement(reactNative.Animated.View,{onLayout:this.onLayout,style:[styles.container,{transform:[{translateY:positionValue}]}],__source:{fileName:_jsxFileName$u,lineNumber:450}},this.renderAnimatedBackgrounds(styles),React__default.createElement(LeftElement$1,_extends_1({},this.props,{onLeftElementPress:onLeftElementPress,isSearchActive:isSearchActiveInternal,onSearchClose:this.onSearchCloseRequested,__source:{fileName:_jsxFileName$u,lineNumber:458}})),React__default.createElement(CenterElement$1,_extends_1({},this.props,{onPress:onPress,searchValue:searchValue,isSearchActive:isSearchActiveInternal,onSearchTextChange:this.onSearchTextChanged,__source:{fileName:_jsxFileName$u,lineNumber:464}})),React__default.createElement(RightElement$1,_extends_1({},this.props,{searchValue:searchValue,isSearchActive:isSearchActiveInternal,onSearchPress:this.onSearchPressed,onSearchClearRequest:this.onSearchClearRequested,onRightElementPress:onRightElementPress,__source:{fileName:_jsxFileName$u,lineNumber:471}})));}}]);return Toolbar;}(React.PureComponent);Toolbar.propTypes=propTypes$u;Toolbar.defaultProps=defaultProps$s;var Toolbar_react = withTheme(Toolbar);

var _jsxFileName$v="d:\\www\\my\\playground\\rn-playground-module-build\\node_modules\\react-native-material-ui\\src\\Snackbar\\Snackbar.react.js";function ownKeys$6(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread$6(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys$6(source,true).forEach(function(key){defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys$6(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var propTypes$v={message:propTypes.string.isRequired,visible:propTypes.bool,timeout:propTypes.number,onRequestClose:propTypes.func.isRequired,bottomNavigation:propTypes.bool,onActionPress:propTypes.func,actionText:propTypes.string,button:propTypes.shape(_objectSpread$6({},Button$1.propTypes,{text:propTypes.string})),style:propTypes.shape({container:ViewPropTypes.style,message:ViewPropTypes.style}),onHeightChange:propTypes.func,onPress:propTypes.func,theme:propTypes.any};var defaultProps$t={onActionPress:null,actionText:null,visible:false,timeout:2750,bottomNavigation:false,style:{},button:{},onHeightChange:null,onPress:null};function getStyles$q(props){var snackbar=props.theme.snackbar;var local={};return {container:[snackbar.container,local.container,props.style.container],content:[snackbar.content,local.content,props.style.content],message:[snackbar.message,local.message,props.style.message]};}var Snackbar=function(_PureComponent){inherits(Snackbar,_PureComponent);function Snackbar(props,context){var _this;classCallCheck(this,Snackbar);_this=possibleConstructorReturn(this,getPrototypeOf(Snackbar).call(this,props,context));_this.move=function(bottomNavigation){var theme=_this.props.theme;var container=theme.bottomNavigation.container;var toValue=bottomNavigation?reactNative.StyleSheet.flatten(container).height:0;_this.setState({bottomPosition:toValue});};_this.renderAction=function(){var _this$props=_this.props,button=_this$props.button,actionText=_this$props.actionText,onActionPress=_this$props.onActionPress,theme=_this$props.theme;var snackbar=theme.snackbar;var styles={};if(actionText&&typeof onActionPress==='function'){styles.container=snackbar.actionContainer;styles.text=snackbar.actionText;if(button!=='undefined'&&'style'in button){if('container'in button.style){styles.container=_objectSpread$6({},reactNative.StyleSheet.flatten(snackbar.actionContainer),{},button.style.container);}if('text'in button.style){styles.text=_objectSpread$6({},reactNative.StyleSheet.flatten(snackbar.actionText),{},button.style.text);}}return React__default.createElement(Button$1,_extends_1({},button,{style:styles,text:actionText,onPress:onActionPress,__source:{fileName:_jsxFileName$v,lineNumber:210}}));}return null;};_this.onTextLayout=_this.onTextLayout.bind(assertThisInitialized(_this));var _styles=getStyles$q(props);_this.state={bottomPosition:0,styles:_styles,visible:props.visible};return _this;}createClass(Snackbar,[{key:"componentWillMount",value:function componentWillMount(){var visible=this.props.visible;this.visibility=new reactNative.Animated.Value(visible?1:0);}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){var _this2=this;var _this$props2=this.props,style=_this$props2.style,visible=_this$props2.visible,bottomNavigation=_this$props2.bottomNavigation;if(nextProps.style!==style){this.setState({styles:getStyles$q(this.props,this.context)});}if(nextProps.visible!==visible){if(nextProps.visible){this.setState({visible:true});this.setHideTimer(nextProps);}reactNative.Animated.timing(this.visibility,{toValue:nextProps.visible?1:0,duration:300}).start(function(){_this2.setState({visible:nextProps.visible});});}if(nextProps.bottomNavigation!==bottomNavigation){this.move(nextProps.bottomNavigation);}}},{key:"componentWillUnmount",value:function componentWillUnmount(){clearTimeout(this.hideTimer);}},{key:"onTextLayout",value:function onTextLayout(_ref){var height=_ref.nativeEvent.layout.height;var _this$props3=this.props,message=_this$props3.message,onHeightChange=_this$props3.onHeightChange;var styles=this.state.styles;if(message&&onHeightChange){onHeightChange(height+reactNative.StyleSheet.flatten(styles.message).marginVertical*2);}}},{key:"setHideTimer",value:function setHideTimer(props){var timeout=props.timeout,onRequestClose=props.onRequestClose;if(timeout>0){clearTimeout(this.hideTimer);this.hideTimer=setTimeout(function(){onRequestClose();},timeout);}}},{key:"render",value:function render(){var _this$props4=this.props,message=_this$props4.message,onPress=_this$props4.onPress;var _this$state=this.state,styles=_this$state.styles,bottomPosition=_this$state.bottomPosition,visible=_this$state.visible;var containerStyle={opacity:this.visibility.interpolate({inputRange:[0,1],outputRange:[0,1]})};var combinedStyle=[containerStyle,styles.container,{bottom:bottomPosition}];return React__default.createElement(reactNative.Animated.View,{style:visible?combinedStyle:containerStyle,__source:{fileName:_jsxFileName$v,lineNumber:239}},React__default.createElement(reactNative.TouchableWithoutFeedback,{onPress:onPress,__source:{fileName:_jsxFileName$v,lineNumber:240}},React__default.createElement(reactNative.View,{style:styles.content,__source:{fileName:_jsxFileName$v,lineNumber:241}},React__default.createElement(reactNative.Text,{style:styles.message,onLayout:this.onTextLayout,__source:{fileName:_jsxFileName$v,lineNumber:242}},message),this.renderAction())));}}]);return Snackbar;}(React.PureComponent);Snackbar.propTypes=propTypes$v;Snackbar.defaultProps=defaultProps$t;var Snackbar_react = withTheme(Snackbar);

exports.ActionButton = ActionButton_react;
exports.Avatar = Avatar_react;
exports.Badge = Badge_react;
exports.BottomNavigation = ThemedBottomNavigation;
exports.Button = Button$1;
exports.COLOR = colors;
exports.Card = Card_react;
exports.Checkbox = Checkbox$1;
exports.Dialog = Dialog_react;
exports.DialogDefaultActions = DialogDefaultActions_react;
exports.DialogStackedActions = DialogStackedActions_react;
exports.Divider = Divider$1;
exports.Drawer = Drawer_react;
exports.Icon = Icon$1;
exports.IconToggle = IconToggle$1;
exports.ListItem = ListItem$1;
exports.RadioButton = RadioButton;
exports.RippleFeedback = RippleFeedback;
exports.Snackbar = Snackbar_react;
exports.Subheader = Subheader$1;
exports.ThemeContext = ThemeContext;
exports.Toolbar = Toolbar_react;
exports.getPlatformElevation = getPlatformElevation;
exports.getTheme = getTheme;
exports.withTheme = withTheme;
