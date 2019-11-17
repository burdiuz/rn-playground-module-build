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

const red50 = '#ffebee';
const red100 = '#ffcdd2';
const red200 = '#ef9a9a';
const red300 = '#e57373';
const red400 = '#ef5350';
const red500 = '#f44336';
const red600 = '#e53935';
const red700 = '#d32f2f';
const red800 = '#c62828';
const red900 = '#b71c1c';
const redA100 = '#ff8a80';
const redA200 = '#ff5252';
const redA400 = '#ff1744';
const redA700 = '#d50000';
const pink50 = '#fce4ec';
const pink100 = '#f8bbd0';
const pink200 = '#f48fb1';
const pink300 = '#f06292';
const pink400 = '#ec407a';
const pink500 = '#e91e63';
const pink600 = '#d81b60';
const pink700 = '#c2185b';
const pink800 = '#ad1457';
const pink900 = '#880e4f';
const pinkA100 = '#ff80ab';
const pinkA200 = '#ff4081';
const pinkA400 = '#f50057';
const pinkA700 = '#c51162';
const purple50 = '#f3e5f5';
const purple100 = '#e1bee7';
const purple200 = '#ce93d8';
const purple300 = '#ba68c8';
const purple400 = '#ab47bc';
const purple500 = '#9c27b0';
const purple600 = '#8e24aa';
const purple700 = '#7b1fa2';
const purple800 = '#6a1b9a';
const purple900 = '#4a148c';
const purpleA100 = '#ea80fc';
const purpleA200 = '#e040fb';
const purpleA400 = '#d500f9';
const purpleA700 = '#aa00ff';
const deepPurple50 = '#ede7f6';
const deepPurple100 = '#d1c4e9';
const deepPurple200 = '#b39ddb';
const deepPurple300 = '#9575cd';
const deepPurple400 = '#7e57c2';
const deepPurple500 = '#673ab7';
const deepPurple600 = '#5e35b1';
const deepPurple700 = '#512da8';
const deepPurple800 = '#4527a0';
const deepPurple900 = '#311b92';
const deepPurpleA100 = '#b388ff';
const deepPurpleA200 = '#7c4dff';
const deepPurpleA400 = '#651fff';
const deepPurpleA700 = '#6200ea';
const indigo50 = '#e8eaf6';
const indigo100 = '#c5cae9';
const indigo200 = '#9fa8da';
const indigo300 = '#7986cb';
const indigo400 = '#5c6bc0';
const indigo500 = '#3f51b5';
const indigo600 = '#3949ab';
const indigo700 = '#303f9f';
const indigo800 = '#283593';
const indigo900 = '#1a237e';
const indigoA100 = '#8c9eff';
const indigoA200 = '#536dfe';
const indigoA400 = '#3d5afe';
const indigoA700 = '#304ffe';
const blue50 = '#e3f2fd';
const blue100 = '#bbdefb';
const blue200 = '#90caf9';
const blue300 = '#64b5f6';
const blue400 = '#42a5f5';
const blue500 = '#2196f3';
const blue600 = '#1e88e5';
const blue700 = '#1976d2';
const blue800 = '#1565c0';
const blue900 = '#0d47a1';
const blueA100 = '#82b1ff';
const blueA200 = '#448aff';
const blueA400 = '#2979ff';
const blueA700 = '#2962ff';
const lightBlue50 = '#e1f5fe';
const lightBlue100 = '#b3e5fc';
const lightBlue200 = '#81d4fa';
const lightBlue300 = '#4fc3f7';
const lightBlue400 = '#29b6f6';
const lightBlue500 = '#03a9f4';
const lightBlue600 = '#039be5';
const lightBlue700 = '#0288d1';
const lightBlue800 = '#0277bd';
const lightBlue900 = '#01579b';
const lightBlueA100 = '#80d8ff';
const lightBlueA200 = '#40c4ff';
const lightBlueA400 = '#00b0ff';
const lightBlueA700 = '#0091ea';
const cyan50 = '#e0f7fa';
const cyan100 = '#b2ebf2';
const cyan200 = '#80deea';
const cyan300 = '#4dd0e1';
const cyan400 = '#26c6da';
const cyan500 = '#00bcd4';
const cyan600 = '#00acc1';
const cyan700 = '#0097a7';
const cyan800 = '#00838f';
const cyan900 = '#006064';
const cyanA100 = '#84ffff';
const cyanA200 = '#18ffff';
const cyanA400 = '#00e5ff';
const cyanA700 = '#00b8d4';
const teal50 = '#e0f2f1';
const teal100 = '#b2dfdb';
const teal200 = '#80cbc4';
const teal300 = '#4db6ac';
const teal400 = '#26a69a';
const teal500 = '#009688';
const teal600 = '#00897b';
const teal700 = '#00796b';
const teal800 = '#00695c';
const teal900 = '#004d40';
const tealA100 = '#a7ffeb';
const tealA200 = '#64ffda';
const tealA400 = '#1de9b6';
const tealA700 = '#00bfa5';
const green50 = '#e8f5e9';
const green100 = '#c8e6c9';
const green200 = '#a5d6a7';
const green300 = '#81c784';
const green400 = '#66bb6a';
const green500 = '#4caf50';
const green600 = '#43a047';
const green700 = '#388e3c';
const green800 = '#2e7d32';
const green900 = '#1b5e20';
const greenA100 = '#b9f6ca';
const greenA200 = '#69f0ae';
const greenA400 = '#00e676';
const greenA700 = '#00c853';
const lightGreen50 = '#f1f8e9';
const lightGreen100 = '#dcedc8';
const lightGreen200 = '#c5e1a5';
const lightGreen300 = '#aed581';
const lightGreen400 = '#9ccc65';
const lightGreen500 = '#8bc34a';
const lightGreen600 = '#7cb342';
const lightGreen700 = '#689f38';
const lightGreen800 = '#558b2f';
const lightGreen900 = '#33691e';
const lightGreenA100 = '#ccff90';
const lightGreenA200 = '#b2ff59';
const lightGreenA400 = '#76ff03';
const lightGreenA700 = '#64dd17';
const lime50 = '#f9fbe7';
const lime100 = '#f0f4c3';
const lime200 = '#e6ee9c';
const lime300 = '#dce775';
const lime400 = '#d4e157';
const lime500 = '#cddc39';
const lime600 = '#c0ca33';
const lime700 = '#afb42b';
const lime800 = '#9e9d24';
const lime900 = '#827717';
const limeA100 = '#f4ff81';
const limeA200 = '#eeff41';
const limeA400 = '#c6ff00';
const limeA700 = '#aeea00';
const yellow50 = '#fffde7';
const yellow100 = '#fff9c4';
const yellow200 = '#fff59d';
const yellow300 = '#fff176';
const yellow400 = '#ffee58';
const yellow500 = '#ffeb3b';
const yellow600 = '#fdd835';
const yellow700 = '#fbc02d';
const yellow800 = '#f9a825';
const yellow900 = '#f57f17';
const yellowA100 = '#ffff8d';
const yellowA200 = '#ffff00';
const yellowA400 = '#ffea00';
const yellowA700 = '#ffd600';
const amber50 = '#fff8e1';
const amber100 = '#ffecb3';
const amber200 = '#ffe082';
const amber300 = '#ffd54f';
const amber400 = '#ffca28';
const amber500 = '#ffc107';
const amber600 = '#ffb300';
const amber700 = '#ffa000';
const amber800 = '#ff8f00';
const amber900 = '#ff6f00';
const amberA100 = '#ffe57f';
const amberA200 = '#ffd740';
const amberA400 = '#ffc400';
const amberA700 = '#ffab00';
const orange50 = '#fff3e0';
const orange100 = '#ffe0b2';
const orange200 = '#ffcc80';
const orange300 = '#ffb74d';
const orange400 = '#ffa726';
const orange500 = '#ff9800';
const orange600 = '#fb8c00';
const orange700 = '#f57c00';
const orange800 = '#ef6c00';
const orange900 = '#e65100';
const orangeA100 = '#ffd180';
const orangeA200 = '#ffab40';
const orangeA400 = '#ff9100';
const orangeA700 = '#ff6d00';
const deepOrange50 = '#fbe9e7';
const deepOrange100 = '#ffccbc';
const deepOrange200 = '#ffab91';
const deepOrange300 = '#ff8a65';
const deepOrange400 = '#ff7043';
const deepOrange500 = '#ff5722';
const deepOrange600 = '#f4511e';
const deepOrange700 = '#e64a19';
const deepOrange800 = '#d84315';
const deepOrange900 = '#bf360c';
const deepOrangeA100 = '#ff9e80';
const deepOrangeA200 = '#ff6e40';
const deepOrangeA400 = '#ff3d00';
const deepOrangeA700 = '#dd2c00';
const brown50 = '#efebe9';
const brown100 = '#d7ccc8';
const brown200 = '#bcaaa4';
const brown300 = '#a1887f';
const brown400 = '#8d6e63';
const brown500 = '#795548';
const brown600 = '#6d4c41';
const brown700 = '#5d4037';
const brown800 = '#4e342e';
const brown900 = '#3e2723';
const blueGrey50 = '#eceff1';
const blueGrey100 = '#cfd8dc';
const blueGrey200 = '#b0bec5';
const blueGrey300 = '#90a4ae';
const blueGrey400 = '#78909c';
const blueGrey500 = '#607d8b';
const blueGrey600 = '#546e7a';
const blueGrey700 = '#455a64';
const blueGrey800 = '#37474f';
const blueGrey900 = '#263238';
const grey50 = '#fafafa';
const grey100 = '#f5f5f5';
const grey200 = '#eeeeee';
const grey300 = '#e0e0e0';
const grey400 = '#bdbdbd';
const grey500 = '#9e9e9e';
const grey600 = '#757575';
const grey700 = '#616161';
const grey800 = '#424242';
const grey900 = '#212121';
const black = '#000000';
const white = '#ffffff';
const transparent = 'transparent'; // https://material.io/guidelines/components/snackbars-toasts.html#snackbars-toasts-specs

const snackbarColor = '#323232';

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

var _slice = [].slice;
var skippedModels = [// to be honest, I don't really feel like keyword belongs in color convert, but eh.
'keyword', // gray conflicts with some method names, and has its own method defined.
'gray', // shouldn't really be in color-convert either...
'hex'];
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

  if (!obj) {
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
    this.color = [obj >> 16 & 0xFF, obj >> 8 & 0xFF, obj & 0xFF];
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
  } // perform limitations (clamping, etc.)


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
  hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) {
    return (val % 360 + 360) % 360;
  }),
  // eslint-disable-line brace-style
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
    return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
  },
  luminosity: function () {
    // http://www.w3.org/TR/WCAG20/#relativeluminancedef
    var rgb = this.rgb().color;
    var lum = [];

    for (var i = 0; i < rgb.length; i++) {
      var chan = rgb[i] / 255;
      lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
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

    return contrastRatio >= 4.5 ? 'AA' : '';
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
    return this.alpha(this.valpha - this.valpha * ratio);
  },
  opaquer: function (ratio) {
    return this.alpha(this.valpha + this.valpha * ratio);
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
    var color1 = mixinColor.rgb();
    var color2 = this.rgb();
    var p = weight === undefined ? 0.5 : weight;
    var w = 2 * p - 1;
    var a = color1.alpha() - color2.alpha();
    var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    var w2 = 1 - w1;
    return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
  }
}; // model conversion methods and static constructors

Object.keys(colorConvert).forEach(function (model) {
  if (skippedModels.indexOf(model) !== -1) {
    return;
  }

  var channels = colorConvert[model].channels; // conversion methods

  Color.prototype[model] = function () {
    if (this.model === model) {
      return new Color(this);
    }

    if (arguments.length) {
      return new Color(arguments, model);
    }

    var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
    return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
  }; // 'static' construction methods


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

const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500'
}; // https://material.google.com/style/typography.html
// Line heights
// https://material.google.com/style/typography.html#typography-line-height

var typography = {
  fontWeight,
  appBar: {
    fontWeight: fontWeight.medium,
    fontSize: 20
  },
  buttons: {
    fontWeight: fontWeight.medium,
    fontSize: 14
  },
  subheading: {
    fontWeight: fontWeight.normal,
    fontSize: 16,
    lineHeight: 24
  },
  body2: {
    fontWeight: fontWeight.medium,
    fontSize: 14,
    lineHeight: 24
  },
  body1: {
    fontWeight: fontWeight.normal,
    fontSize: 14,
    lineHeight: 20
  }
};

var spacing = {
  actionButtonSize: 56,
  // https://material.google.com/layout/metrics-keylines.html#metrics-keylines-touch-target-size
  iconSize: 24,
  avatarSize: 40
};

var lightTheme = {
  spacing,
  typography,
  iconSet: 'MaterialIcons',
  fontFamily: 'Roboto',
  palette: {
    // main theme colors
    primaryColor: blue500,
    accentColor: red500,
    // text color palette
    primaryTextColor: color(black).alpha(0.87).toString(),
    secondaryTextColor: color(black).alpha(0.54).toString(),
    alternateTextColor: white,
    // backgournds and borders
    canvasColor: white,
    borderColor: color(black).alpha(0.12).toString(),
    // https://material.google.com/style/color.html#color-text-background-colors
    disabledColor: color(black).alpha(0.38).toString(),
    disabledTextColor: color(black).alpha(0.26).toString(),
    activeIcon: color(black).alpha(0.54).toString(),
    inactiveIcon: color(black).alpha(0.38).toString() // pickerHeaderColor: cyan500,
    // clockCircleColor: faintBlack,
    // shadowColor: fullBlack,

  }
};

const getPlatformElevation = elevation => ({
  elevation
});

/* eslint-disable import/no-unresolved, import/extensions */
/* eslint-enable import/no-unresolved, import/extensions */

function darkenOrLighten(color$1, ratio = 0.15) {
  const c = color(color$1);
  return c.luminosity() > 0.5 ? c.darken(ratio) : c.lighten(ratio);
}

function getTheme(theme, ...more) {
  let mergedTheme = merge(lightTheme, theme, ...more);
  const {
    iconSet,
    spacing,
    fontFamily,
    typography,
    palette
  } = mergedTheme;
  const baseTheme = {
    iconSet,
    spacing,
    fontFamily,
    typography,
    palette
  };
  mergedTheme = merge({
    actionButton: reactNative.StyleSheet.create(merge({
      positionContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20
      },
      container: {
        height: spacing.actionButtonSize,
        width: spacing.actionButtonSize,
        borderRadius: spacing.actionButtonSize / 2,
        backgroundColor: palette.accentColor
      },
      overlayContainer: { ...reactNative.StyleSheet.absoluteFillObject,
        backgroundColor: color('#fff').alpha(0.8).toString(),
        // we need overlay to be above the toolbar - so maybe we could use some variable
        // to get elevation for toolbar and this overlay
        ...getPlatformElevation(4)
      },
      toolbarPositionContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
      },
      toolbarContainer: {
        flex: 1,
        height: spacing.actionButtonSize,
        backgroundColor: palette.accentColor,
        flexDirection: 'row'
      },
      toolbarActionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      speedDialContainer: {
        alignItems: 'flex-end'
      },
      speedDialActionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8
      },
      speedDialActionIconContainer: {
        width: spacing.actionButtonSize,
        height: spacing.actionButtonSize,
        alignItems: 'center',
        justifyContent: 'center'
      },
      speedDialActionIcon: { ...getPlatformElevation(2),
        height: spacing.actionButtonSize - 16,
        width: spacing.actionButtonSize - 16,
        borderRadius: (spacing.actionButtonSize - 16) / 2,
        backgroundColor: grey500
      },
      speedDialActionLabel: {
        color: palette.secondaryTextColor
      },
      speedDialActionLabelContainer: { ...getPlatformElevation(2),
        borderRadius: 2,
        marginRight: 24,
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: grey100
      },
      icon: {
        color: white
      }
    }, mergedTheme.actionButton)),
    // https://material.google.com/layout/metrics-keylines.html#metrics-keylines-touch-target-size
    avatar: reactNative.StyleSheet.create(merge({
      container: {
        width: spacing.avatarSize,
        height: spacing.avatarSize,
        borderRadius: spacing.avatarSize / 2,
        backgroundColor: darkenOrLighten(palette.canvasColor, 0.26).toString(),
        alignItems: 'center',
        justifyContent: 'center'
      },
      content: {
        color: palette.canvasColor
      }
    }, mergedTheme.avatar)),
    badge: reactNative.StyleSheet.create(merge({
      container: {
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.primaryColor
      },
      strokeContainer: {
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.canvasColor
      },
      content: {
        color: palette.canvasColor,
        fontWeight: fontWeight.medium,
        fontSize: 12
      }
    }, mergedTheme.badge)),
    button: reactNative.StyleSheet.create(merge({
      container: {
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderRadius: 2,
        flexDirection: 'row'
      },
      text: {
        color: black,
        ...typography.buttons
      },
      icon: {
        marginRight: 8
      }
    }, mergedTheme.button)),
    buttonFlat: reactNative.StyleSheet.create(merge({}, mergedTheme.buttonFlat)),
    buttonDisabled: reactNative.StyleSheet.create(merge({
      text: {
        color: palette.disabledTextColor
      }
    }, mergedTheme.buttonDisabled)),
    buttonRaised: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,.12)'
      }
    }, mergedTheme.buttonRaised)),
    buttonRaisedDisabled: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: palette.borderColor
      },
      text: {
        color: palette.disabledTextColor
      }
    }, mergedTheme.buttonRaisedDisabled)),
    bottomNavigation: reactNative.StyleSheet.create(merge({
      container: {
        height: 56,
        backgroundColor: palette.canvasColor,
        borderTopColor: palette.borderColor,
        borderTopWidth: reactNative.StyleSheet.hairlineWidth,
        ...getPlatformElevation(8),
        zIndex: 8
      },
      actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
      }
    }, mergedTheme.bottomNavigation)),
    bottomNavigationAction: reactNative.StyleSheet.create(merge({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 168,
        minWidth: 80,
        paddingBottom: 12,
        paddingTop: 8,
        paddingLeft: 12,
        paddingRight: 12
      },
      label: {
        fontSize: 12,
        textAlign: 'center',
        color: palette.secondaryTextColor
      },
      containerActive: {
        paddingTop: 6
      },
      iconActive: {
        color: palette.primaryColor
      },
      labelActive: {
        color: palette.primaryColor,
        fontSize: 14
      }
    }, mergedTheme.bottomNavigationAction)),
    card: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: palette.canvasColor,
        borderRadius: 2,
        marginVertical: 4,
        marginHorizontal: 8,
        overflow: 'hidden',
        ...getPlatformElevation(2)
      }
    }, mergedTheme.card)),
    dialog: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: palette.canvasColor,
        borderRadius: 2,
        ...getPlatformElevation(24),
        width: 280,
        paddingTop: 24
      },
      titleContainer: {
        paddingBottom: 20,
        paddingHorizontal: 24
      },
      titleText: {
        fontFamily,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
      },
      contentContainer: {
        paddingBottom: 24,
        paddingHorizontal: 24
      },
      actionsContainer: {},
      defaultActionsContainer: {
        marginHorizontal: 8,
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
      },
      stackedActionsContainer: {
        marginBottom: 8
      }
    }, mergedTheme.dialog)),
    checkbox: reactNative.StyleSheet.create(merge({
      container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      icon: {
        color: palette.primaryColor
      },
      label: {
        color: black,
        marginLeft: 20,
        flex: 1
      }
    }, mergedTheme.checkbox)),
    divider: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: palette.borderColor,
        height: reactNative.StyleSheet.hairlineWidth
      }
    }, mergedTheme.divider)),
    drawer: reactNative.StyleSheet.create(merge({
      container: {
        flex: 1,
        backgroundColor: white
      }
    }, mergedTheme.drawer)),
    drawerHeader: reactNative.StyleSheet.create(merge({
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      },
      contentContainer: {
        backgroundColor: grey500,
        height: 150
      }
    }, mergedTheme.drawerHeader)),
    drawerHeaderAccount: reactNative.StyleSheet.create(merge({
      container: {
        flex: 1,
        paddingBottom: 8
      },
      accountContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginBottom: 8
      },
      topContainer: {
        flex: 1,
        justifyContent: 'center'
      },
      avatarsContainer: {
        flexDirection: 'row'
      },
      activeAvatarContainer: {
        flex: 1
      },
      inactiveAvatarContainer: {
        paddingLeft: 8
      }
    }, mergedTheme.drawerHeaderAccount)),
    drawerHeaderListItem: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: transparent
      }
    }, mergedTheme.drawerHeaderListItem)),
    drawerSection: reactNative.StyleSheet.create(merge({
      container: {
        paddingVertical: 8
      },
      item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingLeft: 16
      },
      subheader: {
        flex: 1
      },
      icon: {
        position: 'absolute',
        top: 13
      },
      value: {
        flex: 1,
        paddingLeft: 56,
        top: 2
      },
      label: {
        paddingRight: 16,
        top: 2
      }
    }, mergedTheme.drawerSection)),
    drawerSectionActiveItem: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: grey100
      },
      leftElement: {
        color: palette.primaryColor
      },
      primaryText: { ...typography.buttons,
        color: palette.primaryColor
      }
    }, mergedTheme.drawerSectionActiveItem)),
    iconToggle: reactNative.StyleSheet.create(merge({
      container: {
        width: spacing.iconSize * 2,
        height: spacing.iconSize * 2,
        alignItems: 'center',
        justifyContent: 'center'
      },
      icon: {
        color: palette.secondaryTextColor
      }
    }, mergedTheme.iconToggle)),
    listItem: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: palette.canvasColor,
        height: 56
      },
      contentViewContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      leftElementContainer: {
        width: 56,
        marginLeft: 16
      },
      centerElementContainer: {
        flex: 1
      },
      textViewContainer: {},
      primaryText: {
        lineHeight: 24,
        color: palette.primaryTextColor,
        ...typography.subheading
      },
      firstLine: {
        flexDirection: 'row'
      },
      primaryTextContainer: {
        flex: 1
      },
      secondaryText: {
        lineHeight: 22,
        color: palette.secondaryTextColor,
        ...typography.body1
      },
      tertiaryText: {
        lineHeight: 22,
        color: palette.secondaryTextColor,
        ...typography.body1
      },
      rightElementContainer: {
        paddingRight: 4,
        flexDirection: 'row',
        backgroundColor: 'transparent'
      },
      leftElement: {
        margin: 16,
        color: palette.secondaryTextColor
      },
      rightElement: {
        color: palette.secondaryTextColor
      }
    }, mergedTheme.listItem)),
    // https://material.io/design/components/snackbars.html
    snackbar: reactNative.StyleSheet.create(merge({
      container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: snackbarColor,
        paddingHorizontal: 16,
        ...getPlatformElevation(4),
        zIndex: 4,
        borderRadius: 4,
        margin: 8,
        position: 'absolute',
        bottom: 0
      },
      content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      message: {
        flex: 1,
        marginVertical: 16,
        color: white,
        ...typography.body2,
        lineHeight: 16
      },
      actionContainer: {
        height: 14,
        paddingHorizontal: 0
      },
      actionText: {
        color: palette.primaryColor
      }
    }, mergedTheme.snackbar)),
    // https://material.google.com/components/subheaders.html#
    subheader: reactNative.StyleSheet.create(merge({
      container: {
        height: 48,
        justifyContent: 'center'
      },
      text: {
        color: palette.secondaryTextColor,
        // https://material.google.com/components/subheaders.html#subheaders-grid-subheaders
        ...typography.body2
      }
    }, mergedTheme.subheader)),
    toolbar: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: palette.primaryColor,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        overflow: 'hidden',
        ...getPlatformElevation(4)
      },
      leftElementContainer: {
        backgroundColor: 'transparent'
      },
      leftElement: {
        color: palette.alternateTextColor
      },
      centerElementContainer: {
        flex: 1,
        marginLeft: 20
      },
      titleText: {
        fontFamily,
        color: palette.alternateTextColor,
        ...typography.appBar
      },
      rightElementContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent'
      },
      rightElement: {
        color: palette.alternateTextColor
      }
    }, mergedTheme.toolbar)),
    toolbarSearchActive: reactNative.StyleSheet.create(merge({
      container: {
        backgroundColor: palette.canvasColor
      },
      leftElement: {
        color: palette.secondaryTextColor
      },
      centerElementContainer: {},
      titleText: {
        fontFamily,
        flex: 1,
        marginLeft: 16,
        color: palette.primaryTextColor,
        fontWeight: fontWeight.normal
      },
      rightElement: {
        color: palette.secondaryTextColor
      }
    }, mergedTheme.toolbarSearchActive))
  }, baseTheme);
  return mergedTheme;
}

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

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

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

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var ThemeContext = React__default.createContext(getTheme());

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const withTheme = WrappedComponent => {
  // ...and returns another component...
  class ThemedComponent extends React__default.PureComponent {
    render() {
      return React__default.createElement(ThemeContext.Consumer, null, theme => React__default.createElement(WrappedComponent, _extends({}, this.props, {
        theme: theme
      })));
    }

  }

  hoistNonReactStatics_cjs(ThemedComponent, WrappedComponent);
  return ThemedComponent;
};

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

/* eslint-disable import/no-unresolved, import/extensions */
/* eslint-enable import/no-unresolved, import/extensions */

const propTypes$1 = {
  /**
   * The color of the underlay that will show when the touch is active.
   */
  color: propTypes.string,
  borderless: propTypes.bool,
  children: propTypes.node.isRequired
};
const defaultProps = {
  color: null,
  borderless: true
};

const isRippleVisible = ({
  onPress,
  onLongPress,
  onPressIn,
  onPressOut
}) => onPress || onLongPress || onPressIn || onPressOut;

class RippleFeedback extends React.PureComponent {
  render() {
    const {
      children,
      color,
      borderless,
      ...otherProps
    } = this.props;

    if (!isRippleVisible(this.props)) {
      return children;
    } // we need to get underlayColor as props to this RippleFeedback component, because we can't
    // TouchableNativeFeedback.Ripple function on iOS devices


    const mapProps = { ...otherProps
    };

    if (color && reactNative.Platform.Version >= 21) {
      mapProps.background = reactNative.TouchableNativeFeedback.Ripple(color, borderless);
    }

    return React__default.createElement(reactNative.TouchableNativeFeedback, mapProps, children);
  }

}

RippleFeedback.propTypes = propTypes$1;
RippleFeedback.defaultProps = defaultProps;

const ViewPropTypes = reactNative.ViewPropTypes || reactNative.View.propTypes; // eslint-disable-line

const BackAndroid = reactNative.BackHandler || reactNative.BackAndroid;

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$2 = {
  name: propTypes.string.isRequired,
  style: propTypes.oneOfType([propTypes.object, propTypes.array]),
  size: propTypes.number,
  color: propTypes.string,

  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: propTypes.string,

  /**
   * Theme
   */
  theme: propTypes.any // eslint-disable-line

};
const defaultProps$1 = {
  size: null,
  color: null,
  style: null,
  iconSet: null
};

const getIconComponent = iconSet => {
  switch (iconSet) {
    case 'Entypo':
      return Entypo;

    case 'EvilIcons':
      return EvilIcons;

    case 'Feather':
      return Feather;

    case 'FontAwesome':
      return FontAwesome;

    case 'Foundation':
      return Foundation;

    case 'Ionicons':
      return Ionicons;

    case 'MaterialIcons':
      return MaterialIcons;

    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons;

    case 'Octicons':
      return Octicons;

    case 'Zocial':
      return Zocial;

    case 'SimpleLineIcons':
      return SimpleLineIcons;

    default:
      return MaterialIcons;
  }
};

class Icon extends React.PureComponent {
  render() {
    const {
      name,
      style,
      size,
      color,
      theme,
      iconSet
    } = this.props;
    const {
      palette,
      spacing
    } = theme;
    const iconColor = color || palette.secondaryTextColor;
    const iconSize = size || spacing.iconSize;
    const VectorIcon = getIconComponent(iconSet || theme.iconSet);
    return React__default.createElement(VectorIcon, {
      name: name,
      size: iconSize,
      color: iconColor,
      style: style
    });
  }

}

Icon.propTypes = propTypes$2;
Icon.defaultProps = defaultProps$1;
var Icon$1 = withTheme(Icon);

const ELEVATION_ZINDEX = 1;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$3 = {
  testID: propTypes.string,
  color: propTypes.string,

  /**
   * The color of the underlay that will show when the touch is active.
   */
  underlayColor: propTypes.string,

  /**
   * Max opacity of ripple effect
   */
  maxOpacity: propTypes.number,

  /**
   * Size of underlayColor
   */
  percent: propTypes.number,

  /**
   * If true, the interaction will be forbidden
   */
  disabled: propTypes.bool,

  /**
   * Size of icon (default is 24 - see spacing in palette)
   */
  size: propTypes.number,

  /**
   * Name of icon to show
   */
  name: propTypes.string,

  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: propTypes.string,

  /**
   * It'll be used instead of icon (see props name) if exists
   */
  children: propTypes.element,

  /**
   * Call when icon was pressed
   */
  onPress: propTypes.func,
  style: propTypes.oneOfType([propTypes.shape({
    container: ViewPropTypes.style,
    icon: reactNative.Text.propTypes.style // eslint-disable-line

  }), propTypes.array])
};
const defaultProps$2 = {
  testID: null,
  children: null,
  onPress: null,
  color: null,
  underlayColor: null,
  size: 24,
  name: null,
  disabled: false,
  percent: 90,
  maxOpacity: 0.16,
  style: {},
  iconSet: null
};

function getStyles(props, state) {
  const {
    iconToggle,
    palette
  } = props.theme;
  const local = {};

  if (props.color) {
    local.icon = {
      color: props.color
    };
  }

  if (state.containerSize) {
    local.container = {
      width: state.containerSize,
      height: state.containerSize
    };
  }

  return {
    container: [iconToggle.container, local.container, props.style.container],
    icon: [iconToggle.icon, local.icon, props.style.icon, // diabled has the highest priority - because user can use color props and disabled
    // together
    props.disabled && {
      color: palette.disabledColor
    }]
  };
}
/**
 * Returns size of icon. Priority order: style prop, size prop, spacing.iconSize.
 */


function getIconSize(props) {
  const {
    spacing
  } = props.theme;
  const {
    icon
  } = props.style;

  if (icon && icon.width) {
    return icon.width;
  }

  if (props.size) {
    return props.size;
  }

  return spacing.iconSize;
}

function getContainerSize(iconSize) {
  return iconSize * 2;
}

function getRippleSize(containerSize, percent) {
  return percent / 100 * containerSize;
}

class IconToggle extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty(this, "renderRippleView", styles => {
      const {
        scaleValue,
        opacityValue,
        containerSize,
        rippleSize
      } = this.state;
      const color$1 = color(reactNative.StyleSheet.flatten(styles.icon).color); // https://material.google.com/components/buttons.html#buttons-toggle-buttons

      this.maxOpacity = color$1.isDark() ? 0.12 : 0.3;
      const top = (containerSize - rippleSize) / 2;
      return (// we need set zindex for iOS, because the components with elevation have the
        // zindex set as well, thus, there could be displayed backgroundColor of
        // component with bigger zindex - and that's not good
        React__default.createElement(reactNative.Animated.View, {
          style: [{
            position: 'absolute',
            top,
            left: top,
            width: rippleSize,
            height: rippleSize,
            borderRadius: rippleSize / 2,
            transform: [{
              scale: scaleValue
            }],
            opacity: opacityValue,
            backgroundColor: color$1.toString(),
            zIndex: reactNative.Platform.OS === 'ios' ? ELEVATION_ZINDEX : null
          }]
        })
      );
    });

    _defineProperty(this, "renderIcon", styles => {
      const {
        name,
        children,
        iconSet
      } = this.props;
      const {
        iconSize
      } = this.state;

      if (children) {
        return children;
      }

      const {
        color
      } = reactNative.StyleSheet.flatten(styles.icon);
      return React__default.createElement(Icon$1, {
        iconSet: iconSet,
        name: name,
        color: color,
        size: iconSize
      });
    });

    const _iconSize = getIconSize(props);

    const _containerSize = getContainerSize(_iconSize);

    this.state = {
      scaleValue: new reactNative.Animated.Value(0.01),
      opacityValue: new reactNative.Animated.Value(props.maxOpacity),
      containerSize: _containerSize,
      iconSize: _iconSize,
      rippleSize: getRippleSize(_containerSize, props.percent)
    };
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      iconSize
    } = this.state;
    const {
      percent
    } = this.props;
    const nextIconSize = getIconSize(nextProps);

    if (iconSize !== nextIconSize || nextProps.percent !== percent) {
      const containerSize = getContainerSize(iconSize);
      this.setState({
        containerSize,
        iconSize,
        rippleSize: getRippleSize(containerSize, nextProps.percent)
      });
    }
  }

  onPressIn() {
    const {
      disabled
    } = this.props;
    const {
      scaleValue
    } = this.state;

    if (!disabled) {
      reactNative.Animated.timing(scaleValue, {
        toValue: 1,
        duration: 225,
        easing: reactNative.Easing.bezier(0.0, 0.0, 0.2, 1),
        useNativeDriver: true
      }).start();
    }
  }

  onPressOut() {
    const {
      disabled,
      onPress,
      maxOpacity
    } = this.props;
    const {
      scaleValue,
      opacityValue
    } = this.state;

    if (!disabled) {
      reactNative.Animated.timing(opacityValue, {
        toValue: 0,
        useNativeDriver: true
      }).start(() => {
        scaleValue.setValue(0.01);
        opacityValue.setValue(maxOpacity);
      });

      if (onPress) {
        onPress();
      }
    }
  }

  render() {
    const {
      testID
    } = this.props;
    const styles = getStyles(this.props, this.state);
    return React__default.createElement(reactNative.TouchableWithoutFeedback, {
      testID: testID,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    }, React__default.createElement(reactNative.View, null, this.renderRippleView(styles), React__default.createElement(reactNative.View, {
      style: styles.container
    }, this.renderIcon(styles))));
  }

}

IconToggle.propTypes = propTypes$3;
IconToggle.defaultProps = defaultProps$2;
var IconToggle$1 = withTheme(IconToggle);

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function darkenOrLighten$1(color$1, ratio = 0.5) {
  const c = color(color$1);
  return c.luminosity() > 0.5 ? c.darken(ratio) : c.lighten(ratio);
}

const propTypes$4 = {
  /**
   * Array of names of icons (or elements) that will be shown after the main button is pressed
   * Remember, you should specify key for each element, if you use array of elements
   */
  actions: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.arrayOf(propTypes.element), propTypes.arrayOf(propTypes.shape({
    icon: propTypes.oneOfType([propTypes.string, propTypes.element]),
    label: propTypes.string,
    name: propTypes.string
  }))]),

  /**
   * Called when button is pressed. Text is passed as param
   */
  onPress: propTypes.func,

  /**
   * Called when button is long pressed. Text is passed as param
   */
  onLongPress: propTypes.func,

  /**
   * Set true if you want to hide action button
   */
  hidden: propTypes.bool,

  /**
   * If specified it'll be shown before text
   */
  icon: propTypes.oneOfType([propTypes.element, propTypes.string]),

  /**
   * Leave it empty if you don't want any transition after press. Otherwise, it will be trnasform
   * to another view - depends on transition value.
   */
  transition: propTypes.oneOf(['toolbar', 'speedDial']),

  /**
   * Set ripple color
   */
  rippleColor: propTypes.string,

  /**
   * You can overide any style for this button
   */
  style: propTypes.shape({
    container: ViewPropTypes.style,
    icon: reactNative.Text.propTypes.style // eslint-disable-line

  })
};
const defaultProps$3 = {
  actions: null,
  onPress: null,
  onLongPress: null,
  transition: null,
  icon: 'add',
  style: {},
  hidden: false,
  rippleColor: null
};

function getStyles$1(props, state) {
  const {
    size,
    theme
  } = props;
  const {
    actionButton
  } = theme;
  const local = {
    container: {}
  };

  if (size) {
    local.container = {
      height: size,
      width: size,
      borderRadius: size / 2
    };
  }

  local.container = { ...local.container,
    ...getPlatformElevation(state.elevation)
  };
  return {
    positionContainer: [actionButton.positionContainer, local.positionContainer, props.style.positionContainer],
    toolbarPositionContainer: [actionButton.toolbarPositionContainer, local.toolbarPositionContainer, props.style.toolbarPositionContainer],
    container: [actionButton.container, local.container, props.style.container],
    overlayContainer: [actionButton.overlayContainer, local.overlayContainer, props.style.overlayContainer],
    toolbarContainer: [actionButton.toolbarContainer, local.toolbarContainer, props.style.toolbarContainer],
    toolbarActionContainer: [actionButton.toolbarActionContainer, local.toolbarActionContainer, props.style.toolbarActionContainer],
    speedDialContainer: [actionButton.speedDialContainer, local.speedDialContainer, props.style.speedDialContainer],
    speedDialActionContainer: [actionButton.speedDialActionContainer, local.speedDialActionContainer, props.style.speedDialActionContainer],
    speedDialActionLabel: [actionButton.speedDialActionLabel, local.speedDialActionLabel, props.style.speedDialActionLabel],
    speedDialActionLabelContainer: [actionButton.speedDialActionLabelContainer, local.speedDialActionLabelContainer, props.style.speedDialActionLabelContainer],
    speedDialActionIconContainer: [actionButton.speedDialActionIconContainer, local.speedDialActionIconContainer, props.style.speedDialActionIconContainer],
    speedDialActionIcon: [actionButton.speedDialActionIcon, local.speedDialActionIcon, props.style.speedDialActionIcon],
    icon: [actionButton.icon, local.icon, props.style.icon]
  };
}

const getRippleContainerStyle = containerStyle => {
  const flattenContainer = reactNative.StyleSheet.flatten(containerStyle);
  const {
    height,
    width,
    borderRadius
  } = flattenContainer;
  return {
    container: {
      height,
      width,
      borderRadius
    }
  };
};

class ActionButton extends React.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty$1(this, "onPress", action => {
      const {
        onPress
      } = this.props;
      this.toggleState();

      if (onPress) {
        onPress(action);
      }
    });

    _defineProperty$1(this, "getActionItemKey", ({
      icon,
      name
    }) => {
      let key = icon;

      if (name) {
        key = name;
      } else if (React__default.isValidElement(icon) && icon.key) {
        key = icon.key; // eslint-disable-line
      }

      return key;
    });

    _defineProperty$1(this, "toggleState", () => {
      const {
        transition
      } = this.props;
      const {
        render
      } = this.state;

      if (render === 'button') {
        if (transition) {
          this.setState({
            render: transition
          });
        }
      } else {
        this.setState({
          render: 'button'
        });
      }
    });

    _defineProperty$1(this, "show", () => {// Animated.timing(this.state.scaleValue, {
      //     toValue: 1,
      //     duration: 225,
      //     easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      //     useNativeDriver: true,
      // }).start();
    });

    _defineProperty$1(this, "hide", () => {// Animated.timing(this.state.scaleValue, {
      //     // TODO: why is not 0 here?
      //     // see: https://github.com/facebook/react-native/issues/10510
      //     toValue: 0.01,
      //     duration: 195,
      //     easing: Easing.bezier(0.4, 0.0, 0.6, 1),
      //     useNativeDriver: true,
      // }).start();
    });

    _defineProperty$1(this, "renderToolbarTransition", styles => {
      const {
        actions
      } = this.props;
      return React__default.createElement(reactNative.View, {
        style: styles.toolbarPositionContainer
      }, React__default.createElement(reactNative.View, {
        key: "main-button",
        style: styles.toolbarContainer
      }, actions.map(action => {
        if (typeof action === 'string') {
          return this.renderToolbarAction(styles, action);
        }

        if (React__default.isValidElement(action)) {
          return this.renderToolbarElementAction(styles, action);
        }

        const {
          icon,
          label,
          name
        } = action; // TODO: pass action

        return this.renderToolbarLabelAction(styles, icon, label, name);
      })));
    });

    _defineProperty$1(this, "renderSpeedDialTransition", styles => {
      const {
        actions
      } = this.props;
      return React__default.createElement(reactNative.View, {
        style: [reactNative.StyleSheet.absoluteFillObject, {
          flex: 1
        }]
      }, React__default.createElement(reactNative.TouchableWithoutFeedback, {
        onPress: this.toggleState
      }, React__default.createElement(reactNative.View, {
        style: styles.overlayContainer
      }, React__default.createElement(reactNative.View, {
        style: [styles.positionContainer, styles.speedDialContainer]
      }, React__default.createElement(reactNative.View, {
        style: {
          alignItems: 'flex-end',
          marginBottom: 16
        }
      }, actions.map(action => {
        if (typeof action === 'string') {
          return this.renderAction(styles, action);
        }

        if (React__default.isValidElement(action)) {
          return this.renderElementAction(styles, action);
        }

        const {
          icon,
          label,
          name
        } = action; // TODO: pass action

        return this.renderLabelAction(styles, icon, label, name);
      })), this.renderMainButton(styles)))));
    });

    _defineProperty$1(this, "renderMainButton", styles => {
      const {
        onLongPress,
        icon
      } = this.props;
      const {
        render
      } = this.state;
      const mainIcon = render !== 'button' ? 'clear' : icon;
      return React__default.createElement(reactNative.View, {
        key: "main-button",
        style: styles.container
      }, React__default.createElement(RippleFeedback, {
        style: getRippleContainerStyle(styles.container),
        color: this.getRippleColor(),
        onPress: () => this.onPress('main-button'),
        onLongPress: onLongPress,
        delayPressIn: 20
      }, this.renderIconButton(styles, mainIcon)));
    });

    _defineProperty$1(this, "renderToolbarAction", (styles, icon, name) => {
      let content;
      const key = this.getActionItemKey({
        icon,
        name
      });

      if (React__default.isValidElement(icon)) {
        content = React__default.createElement(RippleFeedback, {
          color: this.getRippleColor(),
          onPress: () => this.onPress(key),
          delayPressIn: 20
        }, this.renderIconButton(styles, icon));
      } else {
        content = React__default.createElement(IconToggle$1, {
          key: key,
          name: key,
          onPress: () => this.onPress(key),
          style: {
            icon: styles.icon
          }
        });
      }

      return React__default.createElement(reactNative.View, {
        key: key,
        style: styles.toolbarActionContainer
      }, content);
    });

    _defineProperty$1(this, "renderToolbarElementAction", (styles, icon) => {
      const key = this.getActionItemKey({
        icon
      });
      return React__default.createElement(reactNative.View, {
        key: key,
        style: styles.toolbarActionContainer
      }, this.renderToolbarAction(styles, icon));
    });

    _defineProperty$1(this, "renderToolbarLabelAction", (styles, icon, label, name) => {
      const key = this.getActionItemKey({
        icon,
        name
      });
      return React__default.createElement(reactNative.View, {
        key: key,
        style: styles.toolbarActionContainer
      }, this.renderToolbarAction(styles, icon, name));
    });

    _defineProperty$1(this, "renderAction", (styles, icon, name) => {
      const key = this.getActionItemKey({
        icon,
        name
      });
      return React__default.createElement(reactNative.View, {
        key: key,
        style: styles.speedDialActionIconContainer
      }, React__default.createElement(reactNative.View, {
        style: styles.speedDialActionIcon
      }, React__default.createElement(RippleFeedback, {
        style: getRippleContainerStyle(styles.speedDialActionIcon),
        color: this.getRippleColor(),
        onPress: () => this.onPress(key),
        delayPressIn: 20
      }, this.renderIconButton(styles, icon))));
    });

    _defineProperty$1(this, "renderElementAction", (styles, icon) => {
      const key = this.getActionItemKey({
        icon
      });
      return React__default.createElement(reactNative.View, {
        key: key,
        style: styles.speedDialActionContainer
      }, this.renderAction(styles, icon));
    });

    _defineProperty$1(this, "renderLabelAction", (styles, icon, label, name) => {
      const key = this.getActionItemKey({
        icon,
        name
      });
      return React__default.createElement(reactNative.View, {
        key: key,
        style: styles.speedDialActionContainer
      }, React__default.createElement(reactNative.View, {
        style: styles.speedDialActionLabelContainer
      }, React__default.createElement(reactNative.Text, {
        style: styles.speedDialActionLabel
      }, label)), this.renderAction(styles, icon, name));
    });

    _defineProperty$1(this, "renderIconButton", (styles, icon) => {
      let result;

      if (React__default.isValidElement(icon)) {
        result = icon;
      } else {
        result = React__default.createElement(Icon$1, {
          name: icon,
          style: styles.icon
        });
      }

      return React__default.createElement(reactNative.View, {
        style: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        pointerEvents: "box-only"
      }, result);
    });

    _defineProperty$1(this, "renderButton", styles => React__default.createElement(reactNative.Animated.View, {
      style: styles.positionContainer
    }, this.renderMainButton(styles)));

    this.state = {
      render: 'button'
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      hidden
    } = this.props;

    if (nextProps.hidden !== hidden) {
      if (nextProps.hidden === true) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const {
      render
    } = this.state;

    if (render !== nextState.render) {
      reactNative.LayoutAnimation.easeInEaseOut();
    }
  }

  getRippleColor() {
    const {
      rippleColor
    } = this.props;

    if (rippleColor) {
      return rippleColor;
    }

    const styles = getStyles$1(this.props, this.state);
    const {
      backgroundColor
    } = reactNative.StyleSheet.flatten(styles.container);
    return darkenOrLighten$1(backgroundColor).toString();
  }

  render() {
    const {
      render
    } = this.state;
    const styles = getStyles$1(this.props, this.state);

    if (render === 'toolbar') {
      return this.renderToolbarTransition(styles);
    }

    if (render === 'speedDial') {
      return this.renderSpeedDialTransition(styles);
    }

    return this.renderButton(styles);
  }

}

ActionButton.propTypes = propTypes$4;
ActionButton.defaultProps = defaultProps$3;
var ActionButton_react = withTheme(ActionButton);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$5 = {
  /**
   * If passed in, this component will render image.
   */
  image: propTypes.element,

  /**
   * If passed in, this component will render icon element inside avatar.
   */
  icon: propTypes.string,

  /**
   * If passed in, this component will render an icon with this color.
   */
  iconColor: propTypes.string,

  /**
   * If passed in, this component will render an icon with this size.
   */
  iconSize: propTypes.number,

  /**
   * If passed in, this component will render text element inside avatar.
   */
  text: propTypes.string,

  /**
   * It's just sugar for: style: { width: size, height: size, borderRadius: size / 2 }
   */
  size: propTypes.number,

  /**
   * Inline style of avatar
   */
  style: propTypes.shape({
    container: ViewPropTypes.style,
    content: reactNative.Text.propTypes.style // eslint-disable-line

  }),
  iconSet: propTypes.string,

  /**
   * Theme
   */
  theme: propTypes.any // eslint-disable-line

};
const defaultProps$4 = {
  image: null,
  icon: null,
  iconColor: null,
  iconSize: null,
  text: null,
  size: 48,
  style: {},
  iconSet: null
};

function getStyles$2(props) {
  const {
    size,
    theme
  } = props;
  const {
    avatar
  } = theme;
  const local = {};

  if (size) {
    local.container = {
      height: size,
      width: size,
      borderRadius: size / 2
    };
  }

  return {
    container: [avatar.container, local.container, props.style.container],
    content: [avatar.content, local.content, props.style.content]
  };
}

class Avatar extends React.PureComponent {
  render() {
    const {
      image,
      icon,
      iconSet,
      iconSize,
      iconColor,
      text,
      theme
    } = this.props;
    const {
      avatar,
      spacing
    } = theme;
    let content = null;
    const styles = getStyles$2(this.props);

    if (icon) {
      const color = iconColor || reactNative.StyleSheet.flatten(avatar.content).color;
      const size = iconSize || spacing.iconSize;
      content = React__default.createElement(Icon$1, {
        iconSet: iconSet,
        name: icon,
        color: color,
        size: size
      });
    } else if (text) {
      content = React__default.createElement(reactNative.Text, {
        style: styles.content
      }, text);
    } else if (image) {
      content = image;
    }

    return React__default.createElement(reactNative.View, {
      style: {
        flexGrow: 1
      }
    }, React__default.createElement(reactNative.View, {
      style: styles.container
    }, content));
  }

}

Avatar.propTypes = propTypes$5;
Avatar.defaultProps = defaultProps$4;
var Avatar_react = withTheme(Avatar);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$6 = {
  /**
   * The badge will be added relativelty to this node
   */
  children: propTypes.node,

  /**
   * This is the content rendered within the badge
   */
  text: propTypes.string,

  /**
   * When the icon is set, the content will be <Icon name={icon} /> element
   */
  icon: propTypes.oneOfType([propTypes.string, propTypes.shape({
    name: propTypes.string,
    color: propTypes.string,
    size: propTypes.number
  })]),

  /**
   * Just sugar for style={{ container: { width: size, height: size, borderRadius: size / 2 }}}
   */
  size: propTypes.number,

  /**
   * You can specify stroke for badge. Note that if you use stroke it swaps container and
   * strokeContainer. So if you override styles of container you probably need to override
   * strokeContainer instead the container. Because if you use stroke then the strokeContainer
   * will be wrapper of whole badge component.
   */
  stroke: propTypes.number,
  style: propTypes.oneOfType([propTypes.shape({
    container: ViewPropTypes.style,
    strokeContainer: ViewPropTypes.style,
    content: reactNative.Text.propTypes.style // eslint-disable-line

  }), propTypes.array])
};
const defaultProps$5 = {
  children: null,
  text: null,
  icon: null,
  size: 16,
  stroke: null,
  style: {
    container: {
      top: -8,
      right: -8
    }
  }
};

function getStyles$3(props) {
  const {
    accent,
    size,
    stroke,
    theme
  } = props;
  const {
    badge,
    palette
  } = theme;
  const local = {
    container: {},
    strokeContainer: {}
  };

  if (size && stroke) {
    const strokeSize = size;
    const contentSize = size - stroke;
    local.strokeContainer.width = strokeSize;
    local.strokeContainer.height = strokeSize;
    local.strokeContainer.borderRadius = strokeSize / 2;
    local.container.position = null;
    local.container.width = contentSize;
    local.container.height = contentSize;
    local.container.borderRadius = contentSize / 2;
  } else if (size && !stroke) {
    local.container.width = size;
    local.container.height = size;
    local.container.borderRadius = size / 2;
  }

  if (accent) {
    local.container.backgroundColor = palette.accentColor;
  }

  return {
    container: [badge.container, local.container, props.style.container],
    strokeContainer: [badge.strokeContainer, local.strokeContainer, props.style.strokeContainer],
    content: [badge.content, local.content, props.style.content]
  };
}

const mapIconProps = ({
  icon,
  size
}) => {
  let iconProps = {};

  if (typeof icon === 'string') {
    iconProps.name = icon;
  } else {
    iconProps = icon;
  }

  if (!iconProps.size && size) {
    iconProps.size = size / 2;
  }

  return iconProps;
};

class Badge extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.renderContent = this.renderContent.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderContent(styles) {
    const {
      text,
      icon,
      stroke
    } = this.props;
    let content = null;

    if (icon) {
      const iconProps = mapIconProps(this.props);
      content = React__default.createElement(Icon$1, iconProps);
    } else if (text) {
      content = React__default.createElement(reactNative.Text, {
        style: styles.content
      }, text);
    }

    const contentWrapper = React__default.createElement(reactNative.View, {
      style: styles.container
    }, content);

    if (!stroke) {
      return contentWrapper;
    }

    return React__default.createElement(reactNative.View, {
      style: styles.strokeContainer
    }, contentWrapper);
  }

  renderChildren() {
    const {
      children
    } = this.props;

    if (!children) {
      return null;
    }

    return children;
  }

  render() {
    const styles = getStyles$3(this.props);
    return React__default.createElement(reactNative.View, {
      style: {
        flexDirection: 'row'
      }
    }, this.renderChildren(), this.renderContent(styles));
  }

}

Badge.propTypes = propTypes$6;
Badge.defaultProps = defaultProps$5;
var Badge_react = withTheme(Badge);

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$7 = {
  testID: propTypes.string,

  /**
   * If true button will be disabled
   */
  disabled: propTypes.bool,

  /**
   * If true button will be raised
   */
  raised: propTypes.bool,

  /**
   * Called when button is pressed. Text is passed as param
   */
  onPress: propTypes.func,

  /**
   * Called when button is long pressed. Text is passed as param
   */
  onLongPress: propTypes.func,

  /**
   * Text will be shown on button
   */
  text: propTypes.string.isRequired,

  /**
   * Button text will be in uppercase letters
   */
  upperCase: propTypes.bool,

  /**
   * If specified it'll be shown before text
   */
  icon: propTypes.oneOfType([propTypes.string, propTypes.element]),

  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: propTypes.string,

  /**
   * You can override any style for this button
   */
  style: propTypes.shape({
    container: ViewPropTypes.style,
    text: reactNative.Text.propTypes.style // eslint-disable-line

  }),
  primary: propTypes.bool,
  accent: propTypes.bool
};
const defaultProps$6 = {
  testID: null,
  icon: null,
  onPress: null,
  onLongPress: null,
  primary: false,
  accent: false,
  disabled: false,
  raised: false,
  upperCase: true,
  iconSet: null,
  style: {}
};

function getStyles$4(props, state) {
  const {
    primary,
    accent,
    disabled,
    raised,
    theme
  } = props;
  const {
    button,
    buttonFlat,
    buttonRaised,
    buttonDisabled,
    buttonRaisedDisabled,
    palette
  } = theme;
  const local = {
    container: {}
  };

  if (!disabled) {
    if (primary && !raised) {
      local.text = {
        color: palette.primaryColor
      };
    } else if (accent && !raised) {
      local.text = {
        color: palette.accentColor
      };
    }

    if (primary && raised) {
      local.container.backgroundColor = palette.primaryColor;
      local.text = {
        color: palette.canvasColor
      };
    } else if (accent && raised) {
      local.container.backgroundColor = palette.accentColor;
      local.text = {
        color: palette.canvasColor
      };
    }
  }

  if (raised && !disabled) {
    local.container = { ...local.container,
      ...getPlatformElevation(state.elevation)
    };
  }

  return {
    container: [button.container, !raised && buttonFlat.container, raised && buttonRaised.container, !raised && disabled && buttonDisabled.container, raised && disabled && buttonRaisedDisabled.container, local.container, props.style.container],
    text: [button.text, !raised && buttonFlat.text, raised && buttonRaised.text, !raised && disabled && buttonDisabled.text, raised && disabled && buttonRaisedDisabled.text, local.text, props.style.text],
    icon: [button.icon, !raised && buttonFlat.icon, disabled && buttonDisabled.icon, raised && buttonRaised.icon, local.icon, props.style.icon]
  };
}

class Button extends React.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty$2(this, "onPress", () => {
      const {
        text,
        onPress
      } = this.props;

      if (onPress) {
        onPress(text);
      }
    });

    _defineProperty$2(this, "setElevation", () => {
      this.setState({
        elevation: 4 // eslint-disable-line

      });
    });

    _defineProperty$2(this, "removeElevation", () => {
      this.setState({
        elevation: 2 // eslint-disable-line

      });
    });

    _defineProperty$2(this, "renderIcon", styles => {
      const {
        icon,
        iconSet
      } = this.props;
      const textFlatten = reactNative.StyleSheet.flatten(styles.text);

      if (!icon) {
        return null;
      }

      let result;

      if (React__default.isValidElement(icon)) {
        result = icon;
      } else if (typeof icon === 'string') {
        result = React__default.createElement(Icon$1, {
          iconSet: iconSet,
          name: icon,
          color: textFlatten.color,
          style: styles.icon,
          size: 24
        });
      }

      return result;
    });

    this.state = {
      elevation: 2 // eslint-disable-line

    };
  }

  render() {
    const {
      text,
      disabled,
      raised,
      upperCase,
      onLongPress,
      testID
    } = this.props;
    const styles = getStyles$4(this.props, this.state);
    const content = React__default.createElement(reactNative.View, {
      style: styles.container,
      pointerEvents: "box-only"
    }, this.renderIcon(styles), React__default.createElement(reactNative.Text, {
      style: styles.text
    }, upperCase ? text.toUpperCase() : text));

    if (disabled) {
      return content;
    }

    return React__default.createElement(RippleFeedback, {
      testID: testID,
      onPress: !disabled ? this.onPress : null,
      onLongPress: !disabled ? onLongPress : null,
      onPressIn: raised ? this.setElevation : null,
      onPressOut: raised ? this.removeElevation : null,
      delayPressIn: 50
    }, content);
  }

}

Button.propTypes = propTypes$7;
Button.defaultProps = defaultProps$6;
var Button$1 = withTheme(Button);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$8 = {
  testID: propTypes.string,

  /**
   * Will be rendered above the label as a content of the action.
   * If string, result will be <Icon name={icon} ...rest />
   * If ReactElement, will be used as is
   */
  icon: propTypes.oneOfType([propTypes.element, propTypes.string]).isRequired,

  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: propTypes.string,

  /**
   * Will be rendered under the icon as a content of the action.
   */
  label: propTypes.string,

  /**
   * True if the action is active (for now it'll be highlight by primary color)
   */
  active: propTypes.bool,

  /**
   * Callback for on press event.
   */
  onPress: propTypes.func,

  /**
   * Inline style of bottom navigation
   */
  style: propTypes.shape({
    container: ViewPropTypes.style,
    active: reactNative.Text.propTypes.style,
    // eslint-disable-line
    disabled: reactNative.Text.propTypes.style // eslint-disable-line

  }),
  disabled: propTypes.bool
};
const defaultProps$7 = {
  testID: null,
  label: null,
  onPress: null,
  iconSet: null,
  active: false,
  disabled: false,
  style: {}
};

function getStyles$5(props) {
  const {
    bottomNavigationAction
  } = props.theme;
  const local = {};

  if (props.active) {
    local.container = bottomNavigationAction.containerActive;
    local.icon = bottomNavigationAction.iconActive;
    local.label = bottomNavigationAction.labelActive;
  }

  if (!props.label) {
    local.container = {
      paddingTop: 16,
      paddingBottom: 16
    };
  }

  return {
    container: [bottomNavigationAction.container, local.container, props.style.container],
    icon: [bottomNavigationAction.icon, local.icon, props.style.icon],
    label: [bottomNavigationAction.label, local.label, props.style.label]
  };
}

class BottomNavigationAction extends React.PureComponent {
  renderIcon(styles) {
    const {
      icon
    } = this.props;
    const {
      color
    } = reactNative.StyleSheet.flatten(styles.icon);
    let element;

    if (React__default.isValidElement(icon)) {
      // we need icon to change color after it's selected, so we send the color and style to
      // custom element
      element = React__default.cloneElement(icon, {
        style: styles.icon,
        color
      });
    } else {
      element = React__default.createElement(Icon$1, {
        name: icon,
        style: styles.icon,
        color: color
      });
    }

    return element;
  }

  renderLabel(styles) {
    const {
      label
    } = this.props;

    if (!label) {
      return null;
    }

    return React__default.createElement(reactNative.Text, {
      style: styles.label
    }, label);
  }

  render() {
    const {
      onPress,
      testID,
      disabled
    } = this.props;
    const styles = getStyles$5(this.props, this.context);
    return React__default.createElement(RippleFeedback, {
      disabled: disabled,
      testID: testID,
      onPress: onPress
    }, React__default.createElement(reactNative.View, {
      style: styles.container,
      pointerEvents: "box-only"
    }, this.renderIcon(styles), this.renderLabel(styles)));
  }

}

BottomNavigationAction.propTypes = propTypes$8;
BottomNavigationAction.defaultProps = defaultProps$7;
var BottomNavigationAction$1 = withTheme(BottomNavigationAction);

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$9 = {
  /**
   * The key of selected/active tab
   */
  active: propTypes.string,

  /**
   * BottomNavigation.Action nodes
   */
  children: propTypes.node.isRequired,

  /**
   * Wether or not the BottomNaviagtion should show
   */
  hidden: propTypes.bool,

  /**
   * Inline style of bottom navigation
   */
  style: propTypes.shape({
    container: ViewPropTypes.style
  })
};
const defaultProps$8 = {
  active: null,
  hidden: false,
  style: {}
};

function getStyles$6(props) {
  const {
    bottomNavigation
  } = props.theme;
  const local = {};
  return {
    container: [bottomNavigation.container, local.container, props.style.container],
    actionsContainer: [bottomNavigation.actionsContainer, local.actionsContainer, props.style.actionsContainer]
  };
}
/**
 * Component for bottom navigation
 * https://material.google.com/components/bottom-navigation.html
 */


class BottomNavigation extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty$3(this, "show", () => {
      const {
        moveAnimated
      } = this.state;
      reactNative.Animated.timing(moveAnimated, {
        toValue: 0,
        duration: 225,
        easing: reactNative.Easing.bezier(0.0, 0.0, 0.2, 1),
        useNativeDriver: true
      }).start();
    });

    _defineProperty$3(this, "hide", () => {
      const {
        moveAnimated,
        styles
      } = this.state;
      reactNative.Animated.timing(moveAnimated, {
        toValue: reactNative.StyleSheet.flatten(styles.container).height,
        duration: 195,
        easing: reactNative.Easing.bezier(0.4, 0.0, 0.6, 1),
        useNativeDriver: true
      }).start();
    });

    this.state = {
      styles: getStyles$6(props),
      moveAnimated: new reactNative.Animated.Value(0)
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      style,
      hidden
    } = this.props;

    if (nextProps.style !== style) {
      this.setState({
        styles: getStyles$6(nextProps, this.context)
      });
    }

    if (nextProps.hidden !== hidden) {
      if (nextProps.hidden === true) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  render() {
    const {
      active,
      children
    } = this.props;
    const {
      styles,
      moveAnimated
    } = this.state;
    return React__default.createElement(reactNative.Animated.View, {
      style: [styles.container, {
        transform: [{
          translateY: moveAnimated
        }]
      }]
    }, React__default.createElement(reactNative.View, {
      style: styles.actionsContainer
    }, React__default.Children.map(children, child => React__default.cloneElement(child, { ...child.props,
      active: child.key === active
    }))));
  }

}

BottomNavigation.propTypes = propTypes$9;
BottomNavigation.defaultProps = defaultProps$8;
BottomNavigation.Action = BottomNavigationAction$1;
const ThemedBottomNavigation = withTheme(BottomNavigation);

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$a = {
  children: propTypes.node,
  onPress: propTypes.func,
  style: propTypes.shape({
    container: ViewPropTypes.style
  })
};
const defaultProps$9 = {
  children: null,
  onPress: null,
  style: {}
};

function getStyles$7(props) {
  const {
    card
  } = props.theme;
  const local = {};

  if (props.fullWidth) {
    local.container = {
      marginHorizontal: 0
    };
  }

  return {
    container: [card.container, local.container, props.style.container]
  };
}

class Card extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty$4(this, "renderContent", () => {
      const {
        children
      } = this.props;
      const {
        styles
      } = this.state;
      return React__default.createElement(reactNative.View, {
        style: styles.container,
        pointerEvents: "auto"
      }, children);
    });

    this.state = {
      styles: getStyles$7(props)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      styles: getStyles$7(nextProps)
    });
  }

  render() {
    const {
      onPress
    } = this.props;

    if (onPress) {
      return React__default.createElement(RippleFeedback, {
        onPress: onPress
      }, this.renderContent());
    }

    return this.renderContent();
  }

}

Card.propTypes = propTypes$a;
Card.defaultProps = defaultProps$9;
var Card_react = withTheme(Card);

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$b = {
  /**
   * Text will be shown after Icon
   */
  label: propTypes.string.isRequired,

  /**
   * Value will be returned when onCheck is fired
   */
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,

  /**
   * True if it's check
   */
  checked: propTypes.bool,

  /**
   * Is checkbox active
   */
  disabled: propTypes.bool,

  /**
   * Will be shown when checked is false
   */
  uncheckedIcon: propTypes.string,

  /**
   * Will be shown when checked is true
   */
  checkedIcon: propTypes.string,

  /**
   * Event that is called when state is changed
   */
  onCheck: propTypes.func.isRequired,

  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: propTypes.string,
  style: propTypes.shape({
    container: ViewPropTypes.style,
    // FIXME:
    icon: propTypes.any,
    // eslint-disable-line
    label: reactNative.Text.propTypes.style // eslint-disable-line

  }),

  /**
   * Size of icon
   */
  size: propTypes.number
};
const defaultProps$a = {
  checked: false,
  checkedIcon: 'check-box',
  uncheckedIcon: 'check-box-outline-blank',
  disabled: false,
  style: {},
  size: 24,
  iconSet: null
};

function getStyles$8(props) {
  const {
    disabled,
    theme
  } = props;
  const {
    checkbox,
    palette
  } = theme;
  const local = {};
  return {
    container: [checkbox.container, local.container, props.style.container],
    icon: [checkbox.icon, props.style.icon],
    label: [checkbox.label, local.label, props.style.label, // disabled has the highest priority
    disabled && {
      color: palette.disabledTextColor
    }]
  };
}

class Checkbox extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty$5(this, "onPress", () => {
      const {
        checked,
        disabled,
        onCheck,
        value
      } = this.props;

      if (!disabled && onCheck) {
        onCheck(!checked, value);
      }
    });
  }

  render() {
    const {
      checked,
      checkedIcon,
      uncheckedIcon,
      disabled,
      value,
      size,
      label,
      iconSet
    } = this.props;
    const styles = getStyles$8(this.props);
    const labelColor = reactNative.StyleSheet.flatten(styles.label).color;
    const iconColor = reactNative.StyleSheet.flatten(styles.icon).color;
    const content = React__default.createElement(reactNative.View, {
      style: styles.container,
      pointerEvents: "box-only"
    }, React__default.createElement(IconToggle$1, {
      key: `${value}-${checked}`,
      name: checked ? checkedIcon : uncheckedIcon,
      disabled: disabled,
      color: checked ? iconColor : labelColor,
      onPress: this.onPress,
      iconSet: iconSet,
      size: size
    }), React__default.createElement(reactNative.Text, {
      style: styles.label
    }, label));

    if (disabled) {
      return content;
    }

    return React__default.createElement(RippleFeedback, {
      onPress: this.onPress
    }, content);
  }

}

Checkbox.propTypes = propTypes$b;
Checkbox.defaultProps = defaultProps$a;
var Checkbox$1 = withTheme(Checkbox);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$c = {
  children: propTypes.node.isRequired,
  style: propTypes.shape({
    titleContainer: ViewPropTypes.style,
    titleText: reactNative.Text.propTypes.style // eslint-disable-line

  })
};
const defaultProps$b = {
  style: {}
};

function getStyles$9(props) {
  const {
    dialog
  } = props.theme;
  return {
    titleContainer: [dialog.titleContainer, props.style.titleContainer],
    titleText: [dialog.titleText, props.style.titleText]
  };
}

class DialogHeader extends React.PureComponent {
  render() {
    const {
      children
    } = this.props;
    const styles = getStyles$9(this.props);
    return React__default.createElement(reactNative.View, {
      style: styles.titleContainer
    }, React__default.createElement(reactNative.Text, {
      style: styles.titleText
    }, children));
  }

}

DialogHeader.propTypes = propTypes$c;
DialogHeader.defaultProps = defaultProps$b;
var Title = withTheme(DialogHeader);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$d = {
  children: propTypes.node.isRequired,
  style: propTypes.shape({
    contentContainer: ViewPropTypes.style
  })
};
const defaultProps$c = {
  style: {}
};

function getStyles$a(props) {
  const {
    dialog
  } = props.theme;
  return {
    contentContainer: [dialog.contentContainer, props.style.contentContainer]
  };
}

class DialogContent extends React.PureComponent {
  render() {
    const {
      children
    } = this.props;
    const styles = getStyles$a(this.props, this.context);
    return React__default.createElement(reactNative.View, {
      style: styles.contentContainer
    }, children);
  }

}

DialogContent.propTypes = propTypes$d;
DialogContent.defaultProps = defaultProps$c;
var Content = withTheme(DialogContent);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$e = {
  children: propTypes.node.isRequired,
  style: propTypes.shape({
    actionsContainer: ViewPropTypes.style
  })
};
const defaultProps$d = {
  style: {}
};

function getStyles$b(props) {
  const {
    dialog
  } = props.theme;
  return {
    actionsContainer: [dialog.actionsContainer, props.style.actionsContainer]
  };
}

class DialogFooter extends React.PureComponent {
  render() {
    const {
      children
    } = this.props;
    const styles = getStyles$b(this.props, this.context);
    return React__default.createElement(reactNative.View, {
      style: styles.actionsContainer
    }, children);
  }

}

DialogFooter.propTypes = propTypes$e;
DialogFooter.defaultProps = defaultProps$d;
var Actions = withTheme(DialogFooter);

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$f = {
  onPress: propTypes.func,
  children: propTypes.node.isRequired,
  style: propTypes.shape({
    container: ViewPropTypes.style
  })
};
const defaultProps$e = {
  onPress: null,
  style: {}
};

function getStyles$c(props) {
  const {
    dialog
  } = props.theme;
  return {
    container: [dialog.container, props.style.container]
  };
}

class Dialog extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty$6(this, "renderContent", () => {
      const {
        children
      } = this.props;
      const styles = getStyles$c(this.props);
      return React__default.createElement(reactNative.View, {
        style: styles.container,
        pointerEvents: "auto"
      }, children);
    });
  }

  render() {
    const {
      onPress
    } = this.props;

    if (onPress) {
      return React__default.createElement(RippleFeedback, {
        onPress: onPress
      }, this.renderContent());
    }

    return this.renderContent();
  }

}

Dialog.propTypes = propTypes$f;
Dialog.defaultProps = defaultProps$e;
Dialog.Title = Title;
Dialog.Content = Content;
Dialog.Actions = Actions;
var Dialog_react = withTheme(Dialog);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$g = {
  actions: propTypes.arrayOf(propTypes.string).isRequired,
  options: propTypes.objectOf(propTypes.object),
  onActionPress: propTypes.func.isRequired,
  style: propTypes.shape({
    defaultActionsContainer: ViewPropTypes.style
  })
};
const defaultProps$f = {
  style: {},
  options: {}
};

function getStyles$d(props) {
  const {
    dialog
  } = props.theme;
  return {
    defaultActionsContainer: [dialog.defaultActionsContainer, props.style.defaultActionsContainer]
  };
}

class DialogDefaultActions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onActionPressed = this.onActionPressed.bind(this);
  }

  onActionPressed(action) {
    const {
      onActionPress
    } = this.props;

    if (onActionPress) {
      onActionPress(action);
    }
  }

  renderAction(action) {
    const {
      options
    } = this.props;
    const isButtonDisabled = options[`${action}`] && options[`${action}`].disabled;
    return React__default.createElement(Button$1, {
      key: action,
      primary: true,
      disabled: isButtonDisabled,
      text: action,
      onPress: this.onActionPressed,
      style: {
        container: {
          marginLeft: 8,
          paddingHorizontal: 8
        }
      }
    });
  }

  render() {
    const {
      actions
    } = this.props;
    const styles = getStyles$d(this.props);
    return React__default.createElement(reactNative.View, {
      style: styles.defaultActionsContainer
    }, actions.map(action => this.renderAction(action)));
  }

}

DialogDefaultActions.propTypes = propTypes$g;
DialogDefaultActions.defaultProps = defaultProps$f;
var DialogDefaultActions_react = withTheme(DialogDefaultActions);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$h = {
  actions: propTypes.arrayOf(propTypes.string).isRequired,
  onActionPress: propTypes.func.isRequired,
  options: propTypes.objectOf(propTypes.object),
  style: propTypes.shape({
    stackedActionsContainer: ViewPropTypes.style
  })
};
const defaultProps$g = {
  style: {},
  options: {}
};

function getStyles$e(props) {
  const {
    dialog
  } = props.theme;
  return {
    stackedActionsContainer: [dialog.stackedActionsContainer, props.style.stackedActionsContainer]
  };
}

class DialogStackedActions extends React.PureComponent {
  renderAction(action) {
    const {
      options,
      onActionPress
    } = this.props;
    const isButtonDisabled = options[`${action}`] && options[`${action}`].disabled;
    return React__default.createElement(Button$1, {
      key: action,
      primary: true,
      disabled: isButtonDisabled,
      text: action,
      onPress: onActionPress,
      style: {
        container: {
          justifyContent: 'flex-end'
        }
      }
    });
  }

  render() {
    const {
      actions
    } = this.props;
    const styles = getStyles$e(this.props);
    return React__default.createElement(reactNative.View, {
      style: styles.stackedActionsContainer
    }, actions.map(action => this.renderAction(action)));
  }

}

DialogStackedActions.propTypes = propTypes$h;
DialogStackedActions.defaultProps = defaultProps$g;
var DialogStackedActions_react = withTheme(DialogStackedActions);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$i = {
  inset: propTypes.bool,
  style: propTypes.shape({
    container: ViewPropTypes.style
  })
};
const defaultProps$h = {
  inset: false,
  style: {}
};

function getStyles$f(props) {
  const {
    divider
  } = props.theme;
  const local = {
    container: props.inset ? {
      marginLeft: 72
    } : null
  };
  return {
    container: [divider.container, local.container, props.style.container]
  };
}

class Divider extends React.PureComponent {
  render() {
    const styles = getStyles$f(this.props, this.context);
    return React__default.createElement(reactNative.View, {
      style: styles.container
    });
  }

}

Divider.propTypes = propTypes$i;
Divider.defaultProps = defaultProps$h;
var Divider$1 = withTheme(Divider);

/* eslint-disable import/no-unresolved, import/extensions */
/* eslint-enable import/no-unresolved, import/extensions */

const propTypes$j = {
  children: propTypes.node.isRequired
};

class Container extends React.PureComponent {
  render() {
    const {
      children
    } = this.props;
    return React__default.createElement(reactNative.View, {
      style: {
        flex: 1
      }
    }, children);
  }

}

Container.propTypes = propTypes$j;

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const {
  UIManager
} = reactNative.NativeModules;
const propTypes$k = {
  testID: propTypes.string,
  // generally
  dense: propTypes.bool,
  // should render divider after list item?
  divider: propTypes.bool,
  onPress: propTypes.func,
  onPressValue: propTypes.any,
  // eslint-disable-line

  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: propTypes.string,

  /**
   * Called when list item is long pressed.
   */
  onLongPress: propTypes.func,
  numberOfLines: propTypes.oneOf([1, 2, 3, 'dynamic']),
  style: propTypes.shape({
    container: ViewPropTypes.style,
    contentViewContainer: ViewPropTypes.style,
    leftElementContainer: ViewPropTypes.style,
    centerElementContainer: ViewPropTypes.style,
    textViewContainer: ViewPropTypes.style,
    primaryText: reactNative.Text.propTypes.style,
    // eslint-disable-line
    firstLine: ViewPropTypes.style,
    primaryTextContainer: reactNative.Text.propTypes.style,
    // eslint-disable-line
    secondaryText: reactNative.Text.propTypes.style,
    // eslint-disable-line
    tertiaryText: reactNative.Text.propTypes.style,
    // eslint-disable-line
    rightElementContainer: ViewPropTypes.style,
    leftElement: propTypes.style,
    rightElement: propTypes.style
  }),
  // left side
  leftElement: propTypes.oneOfType([propTypes.element, propTypes.string]),
  onLeftElementPress: propTypes.func,
  // center side
  centerElement: propTypes.oneOfType([propTypes.element, propTypes.string, propTypes.shape({
    primaryText: propTypes.string.isRequired,
    secondaryText: propTypes.string,
    tertiaryText: propTypes.string
  })]),
  // right side
  rightElement: propTypes.oneOfType([propTypes.element, propTypes.string, propTypes.shape({
    menu: propTypes.shape({
      labels: propTypes.array.isRequired
    })
  })]),
  onRightElementPress: propTypes.func,

  /**
   * Children passed into the `ListItem`.
   */
  children: propTypes.node
};
const defaultProps$i = {
  testID: null,
  dense: false,
  onPress: null,
  onPressValue: null,
  onLongPress: null,
  divider: false,
  leftElement: null,
  onLeftElementPress: null,
  centerElement: null,
  rightElement: null,
  onRightElementPress: null,
  numberOfLines: 1,
  children: null,
  style: {},
  iconSet: null
};

function getNumberOfSecondaryTextLines(numberOfLines) {
  if (numberOfLines === 'dynamic') {
    return null;
  }

  return numberOfLines - 1;
}

function getNumberOfLines(props) {
  const {
    numberOfLines,
    centerElement
  } = props;

  if (centerElement && centerElement.secondaryText && centerElement.tertiaryText && (!numberOfLines || numberOfLines < 3)) {
    return 3;
  }

  if (centerElement && centerElement.secondaryText && (!numberOfLines || numberOfLines < 2)) {
    return 2;
  }

  return numberOfLines || 1;
}
/**
 * Please see this: https://material.google.com/components/lists.html#lists-specs
 */


function getListItemHeight(props, state) {
  const {
    leftElement,
    dense
  } = props;
  const {
    numberOfLines
  } = state;

  if (numberOfLines === 'dynamic') {
    return null;
  }

  if (!leftElement && numberOfLines === 1) {
    return dense ? 40 : 48;
  }

  if (numberOfLines === 1) {
    return dense ? 48 : 56;
  }

  if (numberOfLines === 2) {
    return dense ? 60 : 72;
  }

  if (numberOfLines === 3) {
    return dense ? 80 : 88;
  }

  return null;
}

function getStyles$g(props, state) {
  const {
    leftElement,
    rightElement,
    theme
  } = props;
  const {
    listItem
  } = theme;
  const {
    numberOfLines
  } = state;
  const container = {
    height: getListItemHeight(props, state)
  };
  const contentViewContainer = {};
  const leftElementContainer = {};
  const centerElementContainer = {};

  if (numberOfLines === 'dynamic') {
    contentViewContainer.paddingVertical = 16;
    leftElementContainer.alignSelf = 'flex-start';
  }

  if (!rightElement) {
    contentViewContainer.paddingRight = 16;
  }

  if (!leftElement) {
    centerElementContainer.paddingLeft = 16;
  }

  return {
    container: [listItem.container, container, props.style.container],
    content: [listItem.content, props.style.content],
    contentViewContainer: [listItem.contentViewContainer, contentViewContainer, props.style.contentViewContainer],
    leftElementContainer: [listItem.leftElementContainer, leftElementContainer, props.style.leftElementContainer],
    centerElementContainer: [listItem.centerElementContainer, centerElementContainer, props.style.centerElementContainer],
    textViewContainer: [listItem.textViewContainer, props.style.textViewContainer],
    primaryText: [listItem.primaryText, props.style.primaryText],
    firstLine: [listItem.firstLine, props.style.firstLine],
    primaryTextContainer: [listItem.primaryTextContainer, props.style.primaryTextContainer],
    secondaryText: [listItem.secondaryText, props.style.secondaryText],
    tertiaryText: [listItem.tertiaryText, props.style.tertiaryText],
    rightElementContainer: [listItem.rightElementContainer, props.style.rightElementContainer],
    leftElement: [listItem.leftElement, props.style.leftElement],
    rightElement: [listItem.rightElement, props.style.rightElement]
  };
}

class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty$7(this, "onMenuPressed", labels => {
      const {
        onRightElementPress,
        onPressValue
      } = this.props;
      UIManager.showPopupMenu(reactNative.findNodeHandle(this.menu), labels, () => {}, (result, index) => {
        if (onRightElementPress) {
          onRightElementPress({
            action: 'menu',
            result,
            index,
            value: onPressValue
          });
        }
      });
    });

    _defineProperty$7(this, "onListItemPressed", () => {
      const {
        onPress,
        onPressValue
      } = this.props;

      if (onPress) {
        onPress(onPressValue);
      }
    });

    _defineProperty$7(this, "onListItemLongPressed", () => {
      const {
        onLongPress,
        onPressValue
      } = this.props;

      if (onLongPress) {
        onLongPress(onPressValue);
      }
    });

    _defineProperty$7(this, "onLeftElementPressed", () => {
      const {
        onLeftElementPress,
        onPress,
        onPressValue
      } = this.props;

      if (onLeftElementPress) {
        onLeftElementPress(onPressValue);
      } else if (onPress) {
        onPress(onPressValue);
      }
    });

    _defineProperty$7(this, "onRightElementPressed", () => {
      const {
        onRightElementPress,
        onPressValue
      } = this.props;

      if (onRightElementPress) {
        onRightElementPress(onPressValue);
      }
    });

    _defineProperty$7(this, "getPointerEvents", () => {
      // 'box-only' fixes misplaced ripple effect, but ruins click events for subviews.
      // It's suitable only for simple cases with no touchable views, except the main one.
      const {
        onLeftElementPress,
        leftElement,
        centerElement,
        rightElement
      } = this.props;
      return onLeftElementPress || React__default.isValidElement(leftElement) || React__default.isValidElement(centerElement) || rightElement ? 'auto' : 'box-only';
    });

    _defineProperty$7(this, "renderLeftElement", styles => {
      const {
        leftElement,
        iconSet
      } = this.props;

      if (!leftElement) {
        return null;
      }

      const flattenLeftElement = reactNative.StyleSheet.flatten(styles.leftElement);
      let content = null;

      if (typeof leftElement === 'string') {
        content = React__default.createElement(reactNative.TouchableWithoutFeedback, {
          onPress: this.onLeftElementPressed
        }, React__default.createElement(Icon$1, {
          iconSet: iconSet,
          name: leftElement,
          color: flattenLeftElement.color
        }));
      } else {
        content = React__default.createElement(reactNative.TouchableWithoutFeedback, {
          onPress: this.onLeftElementPressed
        }, React__default.createElement(reactNative.View, null, leftElement));
      }

      return React__default.createElement(reactNative.View, {
        style: styles.leftElementContainer
      }, content);
    });

    _defineProperty$7(this, "renderCenterElement", styles => {
      const {
        centerElement
      } = this.props;
      const {
        numberOfLines
      } = this.state;
      const numberOfSecondaryTextLines = getNumberOfSecondaryTextLines(numberOfLines);
      let content = null;

      if (React__default.isValidElement(centerElement)) {
        content = centerElement;
      } else if (centerElement) {
        let primaryText = null;
        let secondaryText = null;
        let tertiaryText = null;

        if (typeof centerElement === 'string') {
          primaryText = centerElement;
        } else {
          /* eslint-disable prefer-destructuring */
          primaryText = centerElement.primaryText;
          secondaryText = centerElement.secondaryText;
          tertiaryText = centerElement.tertiaryText;
          /* eslint-enable prefer-destructuring */
        }

        const secondLineNumber = !tertiaryText ? numberOfSecondaryTextLines : 1;
        const thirdLineNumber = tertiaryText ? numberOfSecondaryTextLines : 1;
        content = React__default.createElement(reactNative.View, {
          style: styles.textViewContainer
        }, React__default.createElement(reactNative.View, {
          style: styles.firstLine
        }, React__default.createElement(reactNative.View, {
          style: styles.primaryTextContainer
        }, React__default.createElement(reactNative.Text, {
          numberOfLines: 1,
          style: styles.primaryText
        }, primaryText))), secondaryText && React__default.createElement(reactNative.View, null, React__default.createElement(reactNative.Text, {
          numberOfLines: secondLineNumber,
          style: styles.secondaryText
        }, secondaryText)), tertiaryText && React__default.createElement(reactNative.View, null, React__default.createElement(reactNative.Text, {
          numberOfLines: thirdLineNumber,
          style: styles.tertiaryText
        }, tertiaryText)));
      }

      return React__default.createElement(reactNative.View, {
        style: styles.centerElementContainer
      }, content);
    });

    _defineProperty$7(this, "renderRightElement", styles => {
      const {
        rightElement,
        iconSet
      } = this.props;
      let content = [];
      let elements = null;

      if (typeof rightElement === 'string') {
        elements = [rightElement];
      } else if (Array.isArray(rightElement)) {
        elements = rightElement;
      } else if (rightElement && rightElement.actions) {
        elements = rightElement.actions;
      }

      const flattenRightElement = reactNative.StyleSheet.flatten(styles.rightElement);

      if (elements) {
        content = elements.map(action => React__default.createElement(IconToggle$1, {
          key: action,
          iconSet: iconSet,
          color: flattenRightElement.color,
          name: action,
          size: 24,
          style: styles.rightElement,
          onPress: () => this.onRightElementPressed({
            action
          })
        }));
      }

      if (React__default.isValidElement(rightElement)) {
        content.push(React__default.cloneElement(rightElement, {
          key: 'customRightElement'
        }));
      }

      if (rightElement && rightElement.menu) {
        // We need this view as an anchor for drop down menu. findNodeHandle can
        // find just view with width and height, even it needs backgroundColor :/
        content.push(React__default.createElement(reactNative.View, {
          key: "menuIcon"
        }, React__default.createElement(reactNative.View, {
          ref: c => {
            this.menu = c;
          },
          style: {
            backgroundColor: 'transparent',
            width: reactNative.StyleSheet.hairlineWidth,
            height: reactNative.StyleSheet.hairlineWidth
          }
        }), React__default.createElement(IconToggle$1, {
          iconSet: iconSet,
          name: rightElement.menu.icon || 'more-vert',
          color: flattenRightElement.color,
          onPress: () => this.onMenuPressed(rightElement.menu.labels),
          style: flattenRightElement
        })));
      }

      return React__default.createElement(reactNative.View, {
        style: styles.rightElementContainer
      }, content);
    });

    _defineProperty$7(this, "renderDivider", () => {
      const {
        divider
      } = this.props;

      if (!divider) {
        return null;
      }

      return React__default.createElement(Divider$1, null);
    });

    _defineProperty$7(this, "renderContent", styles => React__default.createElement(reactNative.View, {
      style: styles.contentViewContainer,
      pointerEvents: this.getPointerEvents()
    }, this.renderLeftElement(styles), this.renderCenterElement(styles), this.renderRightElement(styles)));

    this.state = {
      numberOfLines: getNumberOfLines(props)
    };
  }

  componentWillReceiveProps(nextPros) {
    this.setState({
      numberOfLines: getNumberOfLines(nextPros)
    });
  }

  render() {
    const {
      onPress,
      onLongPress,
      testID
    } = this.props;
    const styles = getStyles$g(this.props, this.state); // renders left element, center element and right element

    let content = React__default.createElement(reactNative.View, {
      style: styles.container
    }, this.renderContent(styles));

    if (onPress || onLongPress) {
      content = React__default.createElement(RippleFeedback, {
        delayPressIn: 50,
        onPress: this.onListItemPressed,
        onLongPress: this.onListItemLongPressed
      }, content);
    }

    return React__default.createElement(reactNative.View, {
      testID: testID
    }, content, this.renderDivider());
  }

}

ListItem.propTypes = propTypes$k;
ListItem.defaultProps = defaultProps$i;
var ListItem$1 = withTheme(ListItem);

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$l = {
  avatar: propTypes.element,
  accounts: propTypes.arrayOf(propTypes.shape({
    avatar: propTypes.element,
    onPress: propTypes.func
  })),
  footer: propTypes.shape(ListItem$1.propTypes),
  // eslint-disable-line
  style: propTypes.shape({
    container: ViewPropTypes.style,
    accountContainer: ViewPropTypes.style,
    topContainer: ViewPropTypes.style,
    avatarsContainer: ViewPropTypes.style,
    activeAvatarContainer: ViewPropTypes.style,
    inactiveAvatarContainer: ViewPropTypes.style
  }),

  /**
   * Theme
   */
  theme: propTypes.any // eslint-disable-line

};
const defaultProps$j = {
  avatar: null,
  accounts: null,
  footer: null,
  style: {}
};

function getStyles$h(props) {
  const {
    drawerHeaderAccount
  } = props.theme;
  return {
    container: [drawerHeaderAccount.container, props.style.container],
    accountContainer: [drawerHeaderAccount.accountContainer, props.style.accountContainer],
    topContainer: [drawerHeaderAccount.topContainer, props.style.topContainer],
    avatarsContainer: [drawerHeaderAccount.avatarsContainer, props.style.avatarsContainer],
    activeAvatarContainer: [drawerHeaderAccount.activeAvatarContainer, props.style.activeAvatarContainer],
    inactiveAvatarContainer: [drawerHeaderAccount.inactiveAvatarContainer, props.style.inactiveAvatarContainer]
  };
}

class HeaderAcount extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty$8(this, "componentWillMount", () => {
      // We need to change state if relevant props are changed
      this.setState({
        styles: getStyles$h(this.props)
      });
    });

    _defineProperty$8(this, "renderFooter", () => {
      const {
        footer,
        theme
      } = this.props;

      if (!footer) {
        return null;
      }

      const props = { ...footer,
        style: theme.drawerHeaderListItem
      };
      return React__default.createElement(ListItem$1, props);
    });

    _defineProperty$8(this, "renderAccount", account => {
      const {
        styles
      } = this.state; // invariant(account.key, 'Please provide key prop to account object in accounts array.');

      return React__default.createElement(reactNative.TouchableWithoutFeedback, {
        key: account.key,
        onPress: account.onPress
      }, React__default.createElement(reactNative.View, {
        style: [styles.inactiveAvatarContainer]
      }, account.avatar));
    });

    _defineProperty$8(this, "renderAccounts", () => {
      const {
        accounts
      } = this.props;

      if (!accounts) {
        return null;
      } // TODO: slice of accounts
      // add more soficticated slice when there will be lots of accounts


      return accounts.slice(0, 3).map(this.renderAccount);
    });
  }

  render() {
    const {
      avatar
    } = this.props;
    const {
      styles
    } = this.state;
    return React__default.createElement(reactNative.View, {
      style: styles.container
    }, React__default.createElement(reactNative.View, {
      style: [styles.accountContainer]
    }, React__default.createElement(reactNative.View, {
      style: [styles.topContainer]
    }, React__default.createElement(reactNative.View, {
      style: [styles.avatarsContainer]
    }, React__default.createElement(reactNative.View, {
      style: [styles.activeAvatarContainer]
    }, React__default.cloneElement(avatar, {
      size: 56
    })), this.renderAccounts()))), this.renderFooter());
  }

}

HeaderAcount.propTypes = propTypes$l;
HeaderAcount.defaultProps = defaultProps$j;
var HeaderAccount = withTheme(HeaderAcount);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$m = {
  image: propTypes.shape({
    type: propTypes.oneOf([reactNative.Image])
  }),
  backgroundColor: propTypes.string,
  children: propTypes.node,
  style: propTypes.shape({
    contentContainer: ViewPropTypes.style,
    container: ViewPropTypes.style
  })
};
const defaultProps$k = {
  image: null,
  backgroundColor: null,
  children: null,
  style: {}
};

function getStyles$i(props) {
  const {
    image,
    theme
  } = props;
  const {
    drawerHeader
  } = theme;
  const local = {};

  if (image) {
    local.contentContainer = {
      backgroundColor: null
    };
  }

  return {
    container: [drawerHeader.container, props.style.container],
    contentContainer: [drawerHeader.contentContainer, props.style.contentContainer, local.contentContainer]
  };
}

class Header extends React.PureComponent {
  render() {
    const {
      image,
      children
    } = this.props;
    const styles = getStyles$i(this.props);
    const flatten = reactNative.StyleSheet.flatten(styles.contentContainer);
    const content = React__default.createElement(reactNative.View, {
      style: styles.contentContainer
    }, children);

    if (image) {
      return React__default.createElement(reactNative.View, null, React__default.cloneElement(image, {
        style: [{
          height: flatten.height
        }]
      }), React__default.createElement(reactNative.View, {
        style: [styles.container]
      }, content));
    }

    return content;
  }

}

Header.propTypes = propTypes$m;
Header.defaultProps = defaultProps$k;
Header.Account = HeaderAccount;
var Header$1 = withTheme(Header);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$n = {
  text: propTypes.string.isRequired,
  inset: propTypes.bool,
  lines: propTypes.number,
  style: propTypes.shape({
    contaienr: ViewPropTypes.style,
    text: reactNative.Text.propTypes.style // eslint-disable-line

  })
};
const defaultProps$l = {
  style: {},
  inset: false,
  lines: 1
};

function getStyles$j(props) {
  const {
    subheader
  } = props.theme;
  return {
    container: [subheader.container, {
      paddingLeft: props.inset ? 72 : 16
    }, props.style.container],
    text: [subheader.text, props.style.text]
  };
}

class Subheader extends React.PureComponent {
  render() {
    const {
      text,
      lines
    } = this.props;
    const styles = getStyles$j(this.props);
    return React__default.createElement(reactNative.View, {
      style: styles.container
    }, React__default.createElement(reactNative.Text, {
      numberOfLines: lines,
      style: styles.text
    }, text));
  }

}

Subheader.propTypes = propTypes$n;
Subheader.defaultProps = defaultProps$l;
var Subheader$1 = withTheme(Subheader);

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$o = {
  title: propTypes.string,
  items: propTypes.arrayOf(propTypes.shape({
    icon: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
    label: propTypes.string,
    onPress: propTypes.func,
    onLongPress: propTypes.func,
    active: propTypes.bool,
    disabled: propTypes.bool
  })),
  divider: propTypes.bool,
  style: propTypes.shape({
    container: ViewPropTypes.style,
    item: ViewPropTypes.style,
    subheader: ViewPropTypes.style,
    icon: reactNative.Text.propTypes.style,
    // eslint-disable-line
    value: reactNative.Text.propTypes.style,
    // eslint-disable-line
    label: reactNative.Text.propTypes.style // eslint-disable-line

  }),
  key: propTypes.string,

  /**
   * Theme
   */
  theme: propTypes.any // eslint-disable-line

};
const defaultProps$m = {
  title: null,
  items: [],
  divider: false,
  style: {},
  key: ''
};

function getStyles$k(props) {
  const {
    drawerSection
  } = props.theme;
  return {
    container: [drawerSection.container, props.style.container],
    item: [drawerSection.item, props.style.item],
    subheader: [drawerSection.subheader, props.style.subheader],
    icon: [drawerSection.icon, props.style.icon],
    value: [drawerSection.value, props.style.value],
    label: [drawerSection.label, props.style.label]
  };
}

class Section extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty$9(this, "renderTitle", () => {
      const {
        title
      } = this.props;

      if (!title) {
        return null;
      }

      return React__default.createElement(Subheader$1, {
        text: title
      });
    });
  }

  render() {
    const {
      items,
      divider,
      key,
      theme
    } = this.props;
    const {
      typography
    } = theme;
    const styles = getStyles$k(this.props);
    return React__default.createElement(reactNative.View, {
      key: key
    }, React__default.createElement(reactNative.View, {
      style: styles.container
    }, this.renderTitle(styles), items.map(item => {
      let style = {
        primaryText: typography.buttons
      };

      if (item.active) {
        style = theme.drawerSectionActiveItem;
      }

      return React__default.createElement(ListItem$1, {
        dense: true,
        key: item.key ? item.key : item.icon,
        leftElement: item.icon,
        centerElement: item.value,
        onPress: item.onPress,
        style: style
      });
    })), divider && React__default.createElement(Divider$1, null));
  }

}

Section.propTypes = propTypes$o;
Section.defaultProps = defaultProps$m;
var Section$1 = withTheme(Section);

/* eslint-disable import/no-unresolved, import/extensions */
const propTypes$p = {
  children: propTypes.node.isRequired,
  style: propTypes.shape({
    container: ViewPropTypes.style
  })
};
const defaultProps$n = {
  style: {}
};

function getStyles$l(props) {
  const {
    drawer
  } = props.theme;
  return {
    container: [drawer.container, props.style.container]
  };
}

class Drawer extends React.PureComponent {
  render() {
    const {
      children
    } = this.props;
    const styles = getStyles$l(this.props);
    return React__default.createElement(Container, null, React__default.createElement(reactNative.ScrollView, {
      style: styles.container
    }, children));
  }

}

Drawer.propTypes = propTypes$p;
Drawer.defaultProps = defaultProps$n;
Drawer.Header = Header$1;
Drawer.Section = Section$1;
var Drawer_react = withTheme(Drawer);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$q = {
  label: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  onSelect: propTypes.func.isRequired,
  theme: propTypes.string
};
const defaultProps$o = {
  theme: 'light',
  disabled: false,
  checked: false
};

class RadioButton extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty$a(this, "onPress", () => {
      const {
        value,
        checked,
        disabled,
        onSelect
      } = this.props;

      if (disabled && !checked) {
        return;
      }

      onSelect(value);
    });
  }

  render() {
    return React__default.createElement(Checkbox$1, _extends$1({
      checkedIcon: "radio-button-checked",
      uncheckedIcon: "radio-button-unchecked",
      onCheck: this.onPress
    }, this.props));
  }

}

RadioButton.propTypes = propTypes$q;
RadioButton.defaultProps = defaultProps$o;

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$r = {
  leftElementTestID: propTypes.string,
  isSearchActive: propTypes.bool.isRequired,
  style: propTypes.shape({
    leftElementContainer: ViewPropTypes.style,
    leftElement: reactNative.Text.propTypes.style // eslint-disable-line

  }),
  size: propTypes.number,
  leftElement: propTypes.node,
  onLeftElementPress: propTypes.func,
  onSearchClose: propTypes.func,

  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: propTypes.string
};
const defaultProps$p = {
  leftElementTestID: null,
  leftElement: null,
  onLeftElementPress: null,
  onSearchClose: null,
  style: {},
  size: 24,
  iconSet: null
};
const SEARCH_FORWARD_ICON = 'arrow-forward';

function shouldUpdateStyles(props, nextProps) {
  if (props.style !== nextProps.styles) {
    return true;
  }

  if (props.isSearchActive !== nextProps.isSearchActive) {
    return true;
  }

  return false;
}

function getStyles$m(props) {
  const {
    isSearchActive,
    theme
  } = props;
  const {
    toolbar,
    toolbarSearchActive
  } = theme;
  return {
    leftElementContainer: [toolbar.leftElementContainer, isSearchActive && toolbarSearchActive.leftElementContainer, props.style.leftElementContainer],
    leftElement: [toolbar.leftElement, isSearchActive && toolbarSearchActive.leftElement, props.style.leftElement]
  };
}

class LeftElement extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty$b(this, "animateIcon", activate => {
      const {
        spinValue
      } = this.state;
      const {
        leftElement
      } = this.props;
      const toValue = activate ? 1 : 0;
      reactNative.Animated.timing(spinValue, {
        toValue: 0.5,
        duration: 112,
        easing: reactNative.Easing.linear,
        useNativeDriver: true
      }).start(() => {
        this.setState({
          leftElement: activate ? SEARCH_FORWARD_ICON : leftElement
        });
        reactNative.Animated.timing(spinValue, {
          toValue,
          duration: 112,
          easing: reactNative.Easing.linear,
          useNativeDriver: true
        }).start();
      });
    });

    this.state = {
      styles: getStyles$m(this.props),
      leftElement: props.isSearchActive ? SEARCH_FORWARD_ICON : props.leftElement,
      spinValue: new reactNative.Animated.Value(props.isSearchActive ? 1 : 0)
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      isSearchActive,
      leftElement
    } = this.props;

    if (nextProps.isSearchActive !== isSearchActive) {
      this.animateIcon(nextProps.isSearchActive);
    }

    if (leftElement !== nextProps.leftElement) {
      this.setState({
        leftElement: nextProps.leftElement
      });
    }

    if (shouldUpdateStyles(this.props, nextProps)) {
      this.setState({
        styles: getStyles$m(nextProps, this.context)
      });
    }
  }

  render() {
    const {
      styles,
      leftElement,
      spinValue
    } = this.state;
    const {
      leftElementTestID,
      isSearchActive,
      onLeftElementPress,
      onSearchClose,
      size,
      iconSet
    } = this.props;

    if (!leftElement) {
      return null;
    }

    if (!isSearchActive && React__default.isValidElement(leftElement)) {
      return React__default.createElement(reactNative.Animated.View, {
        style: styles.leftElementContainer
      }, React__default.cloneElement(leftElement, {
        key: 'customLeftElement'
      }));
    }

    let onPress = onLeftElementPress;

    if (isSearchActive) {
      onPress = onSearchClose;
    }

    const flattenLeftElement = reactNative.StyleSheet.flatten(styles.leftElement);
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
    return React__default.createElement(reactNative.Animated.View, {
      testID: leftElementTestID,
      style: [styles.leftElementContainer, {
        transform: [{
          rotate: spin
        }]
      }]
    }, React__default.createElement(IconToggle$1, {
      key: leftElement,
      name: leftElement,
      color: flattenLeftElement.color,
      onPress: onPress,
      size: size,
      iconSet: iconSet,
      style: flattenLeftElement
    }));
  }

}

LeftElement.propTypes = propTypes$r;
LeftElement.defaultProps = defaultProps$p;
var LeftElement$1 = withTheme(LeftElement);

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$s = {
  isSearchActive: propTypes.bool.isRequired,
  searchValue: propTypes.string.isRequired,
  searchable: propTypes.shape({
    autoFocus: propTypes.bool,
    autoCapitalize: reactNative.TextInput.propTypes.autoCapitalize,
    // eslint-disable-line
    autoCorrect: propTypes.bool,
    onChangeText: propTypes.func,
    onSubmitEditing: propTypes.func,
    placeholder: propTypes.string
  }),
  style: propTypes.shape({
    centerElementContainer: ViewPropTypes.style,
    titleText: reactNative.Text.propTypes.style // eslint-disable-line

  }),
  centerElement: propTypes.node,
  onPress: propTypes.func,
  onSearchTextChange: propTypes.func.isRequired
};
const defaultProps$q = {
  onPress: null,
  centerElement: null,
  searchable: null,
  style: {}
};

function getStyles$n(props, state = {}) {
  const {
    leftElement,
    theme
  } = props;
  const {
    toolbar,
    toolbarSearchActive
  } = theme;
  const {
    isSearchActive
  } = state;
  const local = {};

  if (props.color) {
    local.icon = {
      color: props.color
    };
  }

  if (!leftElement) {
    local.centerElementContainer = {
      marginLeft: 16
    };
  }

  return {
    centerElementContainer: [toolbar.centerElementContainer, isSearchActive && toolbarSearchActive.centerElementContainer, local.centerElementContainer, props.style.centerElementContainer],
    titleText: [toolbar.titleText, isSearchActive && toolbarSearchActive.titleText, props.style.titleText]
  };
}

class CenterElement extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty$c(this, "animateElements", nextIsSearchActive => {
      const {
        opacityValue
      } = this.state;
      reactNative.Animated.timing(opacityValue, {
        toValue: 0,
        duration: 112,
        easing: reactNative.Easing.linear,
        useNativeDriver: true
      }).start(() => {
        this.setState({
          isSearchActive: nextIsSearchActive
        });
        reactNative.Animated.timing(opacityValue, {
          toValue: 1,
          duration: 112,
          easing: reactNative.Easing.linear,
          useNativeDriver: true
        }).start();
      });
    });

    this.state = {
      isSearchActive: props.isSearchActive,
      opacityValue: new reactNative.Animated.Value(1)
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      isSearchActive
    } = this.props;

    if (isSearchActive !== nextProps.isSearchActive) {
      this.animateElements(nextProps.isSearchActive);
    }
  }

  render() {
    const {
      searchable,
      centerElement,
      onPress,
      onSearchTextChange,
      searchValue
    } = this.props;
    const {
      opacityValue,
      isSearchActive
    } = this.state;
    const styles = getStyles$n(this.props, this.state); // there can be situastion like this:
    // 1. Given toolbar with title and searchable feature
    // 2. User presses search icon - isSearchActive === true
    // 3. User writes some search text and then select searched items in list (just example)
    // 4. Then you want to display to user he has 'n' selected items
    // 5. So you render toolbar with another props like centerElement==="n items selected" but
    //    you don't want user to be able search anymore (after he has selected something)
    // 6. So this.props.searchable===null and isSearchActive === true, if you pass searchable
    //    object again to this instance, search text and isSearchActive will be still set

    let content = null;

    if (searchable && isSearchActive) {
      content = React__default.createElement(reactNative.TextInput, {
        ref: ref => {
          this.searchFieldRef = ref;
        },
        autoFocus: searchable.autoFocus,
        autoCapitalize: searchable.autoCapitalize,
        autoCorrect: searchable.autoCorrect,
        onChangeText: onSearchTextChange,
        onSubmitEditing: searchable.onSubmitEditing,
        placeholder: searchable.placeholder,
        style: [styles.titleText, {
          marginLeft: 0
        }],
        underlineColorAndroid: "transparent",
        value: searchValue
      });
    } else if (typeof centerElement === 'string') {
      content = React__default.createElement(reactNative.Text, {
        numberOfLines: 1,
        style: styles.titleText
      }, centerElement);
    } else {
      content = centerElement;
    }

    return React__default.createElement(reactNative.TouchableWithoutFeedback, {
      key: "center",
      onPress: onPress
    }, React__default.createElement(reactNative.Animated.View, {
      style: [styles.centerElementContainer, {
        opacity: opacityValue
      }]
    }, content));
  }

}

CenterElement.propTypes = propTypes$s;
CenterElement.defaultProps = defaultProps$q;
var CenterElement$1 = withTheme(CenterElement);

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const {
  UIManager: UIManager$1
} = reactNative.NativeModules;
const propTypes$t = {
  rightElementTestID: propTypes.string,
  isSearchActive: propTypes.bool.isRequired,
  searchValue: propTypes.string.isRequired,
  // We need just check if searchable exists
  // TODO: pass bool to this component
  searchable: propTypes.object,
  // eslint-disable-line
  style: propTypes.shape({
    rightElementContainer: ViewPropTypes.style,
    rightEle: ViewPropTypes.style
  }),
  size: propTypes.number,
  // TODO: add shape control
  rightElement: propTypes.any,
  // eslint-disable-line
  onRightElementPress: propTypes.func,
  onSearchClearRequest: propTypes.func.isRequired,
  onSearchPress: propTypes.func.isRequired,

  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: propTypes.string
};
const defaultProps$r = {
  rightElementTestID: null,
  rightElement: null,
  onRightElementPress: null,
  size: null,
  style: {},
  searchable: null,
  iconSet: null
};

function getStyles$o(props) {
  const {
    isSearchActive,
    theme
  } = props;
  const {
    toolbar,
    toolbarSearchActive
  } = theme;
  return {
    rightElementContainer: [toolbar.rightElementContainer, isSearchActive && toolbarSearchActive.rightElementContainer, props.style.rightElementContainer],
    rightElement: [toolbar.rightElement, isSearchActive && toolbarSearchActive.rightElement, props.style.rightElement]
  };
}

class RightElement extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty$d(this, "onMenuPressed", labels => {
      const {
        onRightElementPress
      } = this.props;
      UIManager$1.showPopupMenu(reactNative.findNodeHandle(this.menu), labels, () => {}, (result, index) => {
        if (onRightElementPress) {
          onRightElementPress({
            action: 'menu',
            result,
            index
          });
        }
      });
    });

    _defineProperty$d(this, "onSearchPressed", () => {
      const {
        onSearchPress
      } = this.props;

      if (isFunction(onSearchPress)) {
        onSearchPress();
      }
    });
  }

  render() {
    const {
      rightElementTestID,
      isSearchActive,
      rightElement,
      onRightElementPress,
      searchable,
      size,
      searchValue,
      onSearchClearRequest,
      iconSet
    } = this.props;
    const styles = getStyles$o(this.props, this.context, this.state); // if there is no rightElement and searchable feature is off then we are sure on the right
    // is nothing

    if (!rightElement && !searchable) {
      return null;
    }

    let actionsMap = [];
    let result = [];

    if (rightElement) {
      if (typeof rightElement === 'string') {
        actionsMap.push(rightElement);
      } else if (Array.isArray(rightElement)) {
        actionsMap = rightElement;
      } else if (rightElement.actions) {
        actionsMap = rightElement.actions;
      }
    }

    const flattenRightElement = reactNative.StyleSheet.flatten(styles.rightElement);

    if (actionsMap) {
      result = actionsMap.map((action, index) => {
        if (React__default.isValidElement(action)) {
          return action;
        }

        return React__default.createElement(IconToggle$1, {
          key: action,
          name: action,
          color: flattenRightElement.color,
          size: size,
          style: flattenRightElement,
          iconSet: iconSet,
          onPress: () => onRightElementPress({
            action,
            index
          })
        });
      });
    }

    if (React__default.isValidElement(rightElement)) {
      result.push(React__default.cloneElement(rightElement, {
        key: 'customRightElement'
      }));
    } // if searchable feature is on and search is active with some text, then we show clear
    // button, to be able to clear text


    if (searchable) {
      if (isSearchActive) {
        // clear result to hide other icons
        result = [];

        if (searchValue.length > 0) {
          result.push(React__default.createElement(IconToggle$1, {
            key: "searchClear",
            name: "clear",
            color: flattenRightElement.color,
            size: size,
            style: flattenRightElement,
            onPress: onSearchClearRequest
          }));
        }
      } else {
        result.push(React__default.createElement(IconToggle$1, {
          key: "searchIcon",
          name: searchable.icon ? searchable.icon : 'search',
          color: flattenRightElement.color,
          size: size,
          style: flattenRightElement,
          onPress: this.onSearchPressed
        }));
      }
    }

    if (rightElement && rightElement.menu && !isSearchActive) {
      const view = React__default.createElement(reactNative.View, {
        key: "menuIcon"
      }, React__default.createElement(reactNative.View, {
        ref: c => {
          this.menu = c;
        },
        style: {
          backgroundColor: 'transparent',
          width: 1,
          height: reactNative.StyleSheet.hairlineWidth
        }
      }), React__default.createElement(IconToggle$1, {
        name: rightElement.menu.icon || 'more-vert',
        color: flattenRightElement.color,
        size: size,
        onPress: () => this.onMenuPressed(rightElement.menu.labels),
        style: flattenRightElement
      }));
      result.push(view);
    }

    return React__default.createElement(reactNative.View, {
      testID: rightElementTestID,
      style: styles.rightElementContainer
    }, result);
  }

}

RightElement.propTypes = propTypes$t;
RightElement.defaultProps = defaultProps$r;
var RightElement$1 = withTheme(RightElement);

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$u = {
  /**
   * Indicates if search is active or not
   */
  isSearchActive: propTypes.bool,

  /**
   * When you want to activate search feature you have to pass this object with config of search.
   */
  searchable: propTypes.shape({
    /**
     * Called when search text was changed.
     */
    onChangeText: propTypes.func,

    /**
     * Called when search was closed.
     */
    onSearchClosed: propTypes.func,

    /**
     * Called when action to close search was requested.
     */
    onSearchCloseRequested: propTypes.func,

    /**
     * Called when search was opened.
     */
    onSearchPressed: propTypes.func,

    /**
     * Called when user press submit button on hw keyboard
     */
    onSubmitEditing: propTypes.func,

    /**
     * Will shown as placeholder for search input.
     */
    placeholder: propTypes.string,

    /**
     * Indicates when input should be focused after the search is opened.
     */
    autoFocus: propTypes.bool,

    /**
     * Enable auto-capitalize for search input
     */
    autoCapitalize: propTypes.string,

    /**
     * Enable auto-correct for search input
     */
    autoCorrect: propTypes.bool,

    /**
     * Override default search icon
     */
    icon: propTypes.string
  }),

  /**
   * You can overide any style for the component via this prop
   */
  style: propTypes.shape({
    container: ViewPropTypes.style,
    leftElementContainer: ViewPropTypes.style,
    // FIXME
    leftElement: propTypes.any,
    // eslint-disable-line
    centerElementContainer: ViewPropTypes.style,
    titleText: reactNative.Text.propTypes.style,
    // eslint-disable-line
    rightElementContainer: ViewPropTypes.style,
    rightElement: propTypes.any // eslint-disable-line

  }),

  /**
   * This size is used for each icon on the toolbar
   */
  size: propTypes.number,

  /**
   * Wether or not the Toolbar should show
   */
  hidden: propTypes.bool,

  /**
   * Called when centerElement was pressed.
   * TODO: better to rename to onCenterElementPress
   */
  onPress: propTypes.func,

  /**
   * Will be shown on the left side.
   */
  leftElement: propTypes.oneOfType([propTypes.element, propTypes.string]),

  /**
   * Called when leftElement was pressed.
   */
  onLeftElementPress: propTypes.func,

  /**
   * Will be shown between leftElement and rightElement. Usually use for title.
   */
  centerElement: propTypes.oneOfType([propTypes.element, propTypes.string]),

  /**
   * Will be shown on the right side.
   */
  rightElement: propTypes.oneOfType([
  /**
   * Whatever you want to have on the right side
   */
  propTypes.element,
  /**
   * One action (name of icon). Alias for ['icon1'].
   */
  propTypes.string,
  /**
   * For many actions: ['icon1', 'icon2', ...]
   */
  propTypes.arrayOf(propTypes.string),
  /**
   * For actions and menu. The menu will be shown as last one icon.
   */
  propTypes.shape({
    actions: propTypes.arrayOf(propTypes.oneOfType([propTypes.element, propTypes.string])),
    menu: propTypes.shape({
      icon: propTypes.string,
      labels: propTypes.arrayOf(propTypes.string)
    })
  })]),

  /**
   * Called when rightElement was pressed.
   */
  onRightElementPress: propTypes.func,

  /**
   * Theme
   */
  theme: propTypes.any // eslint-disable-line

};
const defaultProps$s = {
  style: {},
  hidden: false,
  isSearchActive: false,
  onRightElementPress: null,
  rightElement: null,
  searchable: null,
  onPress: null,
  centerElement: null,
  leftElement: null,
  onLeftElementPress: null,
  size: 24
};

const getBackButtonListener = callback => BackAndroid.addEventListener('hardwareBackPress', callback); // const isSearchable = props => (props.searchable && props.isSearchActive) || false;
// const getIsSearchActive = (props, state) => (props.searchable && state.isSearchActive) || false;


function getStyles$p(props) {
  const {
    toolbar
  } = props.theme;
  return {
    container: [toolbar.container, props.style.container]
  };
}

class Toolbar extends React.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty$e(this, "onSearchOpenRequested", () => {
      this.setState({
        isSearchActiveInternal: true,
        searchValue: '' // zIndex: 'toDefaultNext',

      });
      this.animateSearchBackground(() => {
        const {
          defaultScaleValue
        } = this.state; // default scale set up back to "hidden" value

        defaultScaleValue.setValue(0.01);
        this.setState({
          order: 'searchFirst'
        }); // on android it's typical that back button closes search input on toolbar

        this.backButtonListener = getBackButtonListener(this.onSearchCloseRequested);
      });
    });

    _defineProperty$e(this, "onSearchPressed", () => {
      this.onSearchOpenRequested();
      const {
        searchable
      } = this.props;

      if (searchable && isFunction(searchable.onSearchPressed)) {
        searchable.onSearchPressed();
      }
    });

    _defineProperty$e(this, "onSearchTextChanged", value => {
      const {
        searchable
      } = this.props;

      if (searchable && isFunction(searchable.onChangeText)) {
        searchable.onChangeText(value);
      }

      this.setState({
        searchValue: value
      });
    });

    _defineProperty$e(this, "onSearchClearRequested", () => {
      this.onSearchTextChanged('');
    });

    _defineProperty$e(this, "onSearchCloseRequested", () => {
      const {
        searchable
      } = this.props;
      const {
        searchScaleValue
      } = this.state;

      if (searchable.onSearchCloseRequested) {
        searchable.onSearchCloseRequested();
      }

      this.setState({
        isSearchActiveInternal: false,
        searchValue: ''
      });
      this.animateDefaultBackground(() => {
        // default scale set up back to "hidden" value
        searchScaleValue.setValue(0.01);
        this.setState({
          order: 'defaultFirst'
        });
        this.onSearchClosed();
      });
      return true; // because we need to stop propagation
    });

    _defineProperty$e(this, "onSearchClosed", () => {
      const {
        searchable
      } = this.props;

      if (this.backButtonListener) {
        this.backButtonListener.remove();
      }

      if (searchable && isFunction(searchable.onSearchClosed)) {
        searchable.onSearchClosed();
      }
    });

    _defineProperty$e(this, "onLayout", event => {
      const {
        width,
        height
      } = event.nativeEvent.layout; // pythagorean

      const radius = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2)); // eslint-disable-line

      let diameter = radius * 2; // if there wasn't issue in react native we wouldn't do this
      // because there is issue in react native that we can't set scale value to 0, we need to use
      // 0.01 and it means we still see the point even if the scale set to 0.01

      const bgPosition = width - radius; // the correct left position of circle background
      // we need circle to be bigger, then we won't see the 0.01 scaled point (because it'll be
      // out of screen)

      const pointSize = diameter * 0.01;
      diameter += pointSize;
      this.setState({
        bgPosition,
        radius: diameter / 2,
        diameter
      });
    });

    _defineProperty$e(this, "animateSearchBackground", onComplete => {
      const {
        searchScaleValue
      } = this.state;
      reactNative.Animated.timing(searchScaleValue, {
        toValue: 1,
        duration: 325,
        easing: reactNative.Easing.bezier(0.0, 0.0, 0.2, 1),
        useNativeDriver: true
      }).start(onComplete);
    });

    _defineProperty$e(this, "animateDefaultBackground", onComplete => {
      const {
        defaultScaleValue
      } = this.state;
      reactNative.Animated.timing(defaultScaleValue, {
        toValue: 1,
        duration: 325,
        easing: reactNative.Easing.bezier(0.0, 0.0, 0.2, 1),
        useNativeDriver: true
      }).start(onComplete);
    });

    _defineProperty$e(this, "show", () => {
      const {
        moveAnimated
      } = this.state;
      reactNative.Animated.timing(moveAnimated, {
        toValue: 0,
        duration: 225,
        easing: reactNative.Easing.bezier(0.0, 0.0, 0.2, 1),
        useNativeDriver: true
      }).start();
    });

    _defineProperty$e(this, "hide", () => {
      const {
        moveAnimated
      } = this.state;
      const styles = getStyles$p(this.props);
      reactNative.Animated.timing(moveAnimated, {
        toValue: -1 * reactNative.StyleSheet.flatten(styles.container).height,
        duration: 195,
        easing: reactNative.Easing.bezier(0.4, 0.0, 0.6, 1),
        useNativeDriver: true
      }).start();
    });

    _defineProperty$e(this, "renderAnimatedBackgrounds", styles => {
      const {
        theme
      } = this.props;
      const {
        diameter,
        bgPosition,
        radius,
        defaultScaleValue,
        searchScaleValue,
        order
      } = this.state;
      const bgStyle = {
        position: 'absolute',
        top: -radius,
        width: diameter,
        height: diameter,
        borderRadius: radius
      };
      const {
        toolbarSearchActive
      } = theme;
      const container = reactNative.StyleSheet.flatten(styles.container);
      const searchActive = reactNative.StyleSheet.flatten(toolbarSearchActive.container);
      const bgSearch = React__default.createElement(reactNative.Animated.View, {
        key: "searchBackground",
        style: [bgStyle, {
          left: bgPosition,
          backgroundColor: searchActive.backgroundColor,
          transform: [{
            scale: searchScaleValue
          }]
        }]
      });
      const bgDefault = React__default.createElement(reactNative.Animated.View, {
        key: "defaultBackground",
        style: [bgStyle, {
          right: bgPosition,
          backgroundColor: container.backgroundColor,
          transform: [{
            scale: defaultScaleValue
          }]
        }]
      });
      let content = null;

      if (order === 'defaultFirst') {
        content = [bgDefault, bgSearch];
      } else {
        content = [bgSearch, bgDefault];
      }

      return React__default.createElement(reactNative.View, {
        style: reactNative.StyleSheet.absoluteFill
      }, content);
    });

    const isSearchActiveInternal = props.isSearchActive || false;
    this.backButtonListener = isSearchActiveInternal ? getBackButtonListener(this.onSearchCloseRequested) : null;
    this.state = {
      // indicates if searc is activated
      isSearchActiveInternal,
      // value for serach input
      searchValue: '',
      // everything around background animation
      defaultScaleValue: new reactNative.Animated.Value(isSearchActiveInternal ? 0.01 : 1),
      searchScaleValue: new reactNative.Animated.Value(isSearchActiveInternal ? 1 : 0.01),
      radius: 0,
      diameter: 0,
      // it'll change z index after the animation is complete
      order: isSearchActiveInternal ? 'searchFirst' : 'defaultFirst',
      // toolbar animation - you can hide toolbar via hidden prop
      positionValue: new reactNative.Animated.Value(0)
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      isSearchActiveInternal
    } = this.state;
    const {
      isSearchActive,
      hidden
    } = this.props; // if search is active and we clicked on the results which does not allow search
    // then close the previous search.

    if (isSearchActiveInternal && !nextProps.searchable) {
      this.onSearchCloseRequested();
    } // there should be also posibility to change search through props, so we need to check
    // props first and then we should check state if we need to change search state


    if (isSearchActive !== nextProps.isSearchActive) {
      // because nextProps.isSearchActive could be null, undefined
      // so we need it convert to boolean
      const nextIsSearchActive = !!nextProps.isSearchActive;

      if (isSearchActiveInternal !== nextIsSearchActive) {
        if (nextIsSearchActive) {
          this.onSearchOpenRequested();
        } else {
          this.onSearchCloseRequested();
        }
      }
    } // if hidden prop is changed we animate show or hide


    if (nextProps.hidden !== hidden) {
      if (nextProps.hidden === true) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  focusSearchField() {
    this.searchFieldRef.focus();
  }

  render() {
    const {
      onLeftElementPress,
      onPress,
      onRightElementPress
    } = this.props;
    const {
      isSearchActiveInternal,
      searchValue,
      positionValue
    } = this.state; // TODO: move out from render method

    const styles = getStyles$p(this.props);
    return React__default.createElement(reactNative.Animated.View, {
      onLayout: this.onLayout,
      style: [styles.container, {
        transform: [{
          translateY: positionValue
        }]
      }]
    }, this.renderAnimatedBackgrounds(styles), React__default.createElement(LeftElement$1, _extends$2({}, this.props, {
      onLeftElementPress: onLeftElementPress,
      isSearchActive: isSearchActiveInternal,
      onSearchClose: this.onSearchCloseRequested
    })), React__default.createElement(CenterElement$1, _extends$2({}, this.props, {
      onPress: onPress,
      searchValue: searchValue,
      isSearchActive: isSearchActiveInternal,
      onSearchTextChange: this.onSearchTextChanged
    })), React__default.createElement(RightElement$1, _extends$2({}, this.props, {
      searchValue: searchValue,
      isSearchActive: isSearchActiveInternal,
      onSearchPress: this.onSearchPressed,
      onSearchClearRequest: this.onSearchClearRequested,
      onRightElementPress: onRightElementPress
    })));
  }

}

Toolbar.propTypes = propTypes$u;
Toolbar.defaultProps = defaultProps$s;
var Toolbar_react = withTheme(Toolbar);

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const propTypes$v = {
  /**
   * The text message to display.
   */
  message: propTypes.string.isRequired,

  /**
   * Whether or not the snackbar is visible.
   */
  visible: propTypes.bool,

  /**
   * The amount of time in milliseconds to show the snackbar.
   */
  timeout: propTypes.number,

  /**
   * Callback for when the timeout finishes.
   */
  onRequestClose: propTypes.func.isRequired,

  /**
   * Whether or not there is a bottom navigation on the screen.
   */
  bottomNavigation: propTypes.bool,

  /**
   * The function to execute when the action is clicked.
   */
  onActionPress: propTypes.func,

  /**
   * The function to execute when the action is clicked.
   */
  actionText: propTypes.string,

  /**
   * Take a look at the Button component for more details.
   */
  button: propTypes.shape({ ...Button$1.propTypes,
    // eslint-disable-line
    text: propTypes.string
  }),

  /**
   * Inline style of snackbar
   */
  style: propTypes.shape({
    container: ViewPropTypes.style,
    message: ViewPropTypes.style
  }),

  /**
   * The function to execute when the snackbar's height changes.
   */
  onHeightChange: propTypes.func,

  /**
   * Callback for when the snackbar is pressed.
   */
  onPress: propTypes.func,

  /**
   * Theme
   */
  theme: propTypes.any // eslint-disable-line

};
const defaultProps$t = {
  onActionPress: null,
  actionText: null,
  visible: false,
  timeout: 2750,
  bottomNavigation: false,
  style: {},
  button: {},
  onHeightChange: null,
  onPress: null
};

function getStyles$q(props) {
  const {
    snackbar
  } = props.theme;
  const local = {};
  return {
    container: [snackbar.container, local.container, props.style.container],
    content: [snackbar.content, local.content, props.style.content],
    message: [snackbar.message, local.message, props.style.message]
  };
}
/**
 * Component for snackbars
 * https://material.io/guidelines/components/snackbars-toasts.html
 */


class Snackbar extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty$f(this, "move", bottomNavigation => {
      const {
        theme
      } = this.props;
      const {
        container
      } = theme.bottomNavigation;
      const toValue = bottomNavigation ? reactNative.StyleSheet.flatten(container).height : 0;
      this.setState({
        bottomPosition: toValue
      });
    });

    _defineProperty$f(this, "renderAction", () => {
      const {
        button,
        actionText,
        onActionPress,
        theme
      } = this.props;
      const {
        snackbar
      } = theme;
      const styles = {};

      if (actionText && typeof onActionPress === 'function') {
        styles.container = snackbar.actionContainer;
        styles.text = snackbar.actionText;

        if (button !== 'undefined' && 'style' in button) {
          if ('container' in button.style) {
            styles.container = { ...reactNative.StyleSheet.flatten(snackbar.actionContainer),
              ...button.style.container
            };
          }

          if ('text' in button.style) {
            styles.text = { ...reactNative.StyleSheet.flatten(snackbar.actionText),
              ...button.style.text
            };
          }
        }

        return React__default.createElement(Button$1, _extends$3({}, button, {
          style: styles,
          text: actionText,
          onPress: onActionPress
        }));
      }

      return null;
    });

    this.onTextLayout = this.onTextLayout.bind(this);

    const _styles = getStyles$q(props);

    this.state = {
      bottomPosition: 0,
      styles: _styles,
      visible: props.visible
    };
  }

  componentWillMount() {
    const {
      visible
    } = this.props;
    this.visibility = new reactNative.Animated.Value(visible ? 1 : 0);
  }

  componentWillReceiveProps(nextProps) {
    const {
      style,
      visible,
      bottomNavigation
    } = this.props;

    if (nextProps.style !== style) {
      this.setState({
        styles: getStyles$q(this.props, this.context)
      });
    }

    if (nextProps.visible !== visible) {
      if (nextProps.visible) {
        this.setState({
          visible: true
        });
        this.setHideTimer(nextProps);
      }

      reactNative.Animated.timing(this.visibility, {
        toValue: nextProps.visible ? 1 : 0,
        duration: 300
      }).start(() => {
        this.setState({
          visible: nextProps.visible
        });
      });
    }

    if (nextProps.bottomNavigation !== bottomNavigation) {
      this.move(nextProps.bottomNavigation);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.hideTimer);
  }

  onTextLayout({
    nativeEvent: {
      layout: {
        height
      }
    }
  }) {
    const {
      message,
      onHeightChange
    } = this.props;
    const {
      styles
    } = this.state;

    if (message && onHeightChange) {
      onHeightChange(height + reactNative.StyleSheet.flatten(styles.message).marginVertical * 2);
    }
  }

  setHideTimer(props) {
    const {
      timeout,
      onRequestClose
    } = props;

    if (timeout > 0) {
      clearTimeout(this.hideTimer);
      this.hideTimer = setTimeout(() => {
        onRequestClose();
      }, timeout);
    }
  }

  render() {
    const {
      message,
      onPress
    } = this.props;
    const {
      styles,
      bottomPosition,
      visible
    } = this.state;
    const containerStyle = {
      opacity: this.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    };
    const combinedStyle = [containerStyle, styles.container, {
      bottom: bottomPosition
    }];
    return React__default.createElement(reactNative.Animated.View, {
      style: visible ? combinedStyle : containerStyle
    }, React__default.createElement(reactNative.TouchableWithoutFeedback, {
      onPress: onPress
    }, React__default.createElement(reactNative.View, {
      style: styles.content
    }, React__default.createElement(reactNative.Text, {
      style: styles.message,
      onLayout: this.onTextLayout
    }, message), this.renderAction())));
  }

}

Snackbar.propTypes = propTypes$v;
Snackbar.defaultProps = defaultProps$t;
var Snackbar_react = withTheme(Snackbar);

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
