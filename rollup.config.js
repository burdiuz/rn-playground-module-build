import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import image from 'rollup-plugin-img';
import replace from '@rollup/plugin-replace';

const plugins = [
	resolve({
		mainFields: ['jsnext:main', 'module', 'main'],
		extensions: ['.mjs', '.js', '.jsx', '.android.mjs', '.android.js', '.android.jsx', '.json', '.node'],
	}),
	babel({
		presets: ['@babel/preset-react'],
		plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-flow-strip-types'],
		include: [
			'source/**',
			'node_modules/react-native-eva-icons/**',
			'node_modules/react-native-safe-area-view/**',
			'node_modules/react-native-elements/**',
			'node_modules/react-native-ratings/**',
			'node_modules/react-native-ui-kitten/**',
			'node_modules/@ui-kitten/eva-icons/**',
			'node_modules/react-native-material-ui/**',
			'node_modules/victory-native/**',
		],
		runtimeHelpers: true,
		externalHelpers: true,
		babelrc: false,
	}),
	commonjs({
		// 'node_modules/**'
		include: [],
		namedExports: {
			'node_modules/react-is/index.js': ['isElement', 'ForwardRef', 'isValidElementType'],
		},
	}),
	image({
		output: './dest/',
		include: 'node_modules/**',
		extensions: /\.(png|jpg|jpeg|gif|svg)$/i, 
		limit: 1073741824,
	}),
	json(),
];

export const external = [
	'zlib',
	'console',
	'constants',
	'crypto',
	'dns',
	'net',
	'domain',
	'http',
	'https',
	'os',
	'path',
	'querystring',
	'fs',
	'dgram',
	'stream',
	'timers',
	'tty',
	'vm',

	'@react-native-community/async-storage',
	'@react-native-community/audio-toolkit',
	'@react-native-community/blur',
	'@react-native-community/cameraroll',
	'@react-native-community/geolocation',
	'@react-native-community/image-editor',
	'@react-native-community/masked-view',
	'@react-native-community/netinfo',
	'@react-native-community/react-native-clipboard',
	'@tradle/react-native-http',
	'assert',
	'asyncstorage-down',
	'browserify-zlib',
	'buffer',
	'console-browserify',
	'constants-browserify',
	'core-js',
	'dns.js',
	'domain-browser',
	'events',
	'expo-application',
	'expo-asset',
	'expo-av',
	'expo-barcode-scanner',
	'expo-battery',
	'expo-calendar',
	'expo-camera',
	'expo-cellular',
	'expo-contacts',
	'expo-crypto',
	'expo-device',
	'expo-document-picker',
	'expo-face-detector',
	'expo-font',
	'expo-gl',
	'expo-haptics',
	'expo-image-manipulator',
	'expo-image-picker',
	'expo-intent-launcher',
	'expo-keep-awake',
	'expo-linear-gradient',
	'expo-local-authentication',
	'expo-localization',
	'expo-location',
	'expo-mail-composer',
	'expo-media-library',
	'expo-network',
	'expo-print',
	'expo-random',
	'expo-secure-store',
	'expo-sensors',
	'expo-sharing',
	'expo-sms',
	'expo-speech',
	'expo-sqlite',
	'expo-video-thumbnails',
	'expo-web-browser',
	'formik',
	'he',
	'https-browserify',
	'metro-react-native-babel-preset',
	'path-browserify',
	'process',
	'punycode',
	'querystring-es3',
	'react',
	'react-native',
	'react-native-ble-plx',
	'react-native-color-matrix-image-filters',
	'react-native-crypto',
	'react-native-document-picker',
	'react-native-exception-handler',
	'react-native-file-selector',
	'react-native-fs',
	'react-native-gesture-handler',
	'react-native-image-crop-picker',
	'react-native-image-filter',
	'react-native-image-picker',
	'react-native-immersive',
	'react-native-keep-awake',
	'react-native-level-fs',
	'react-native-linear-gradient',
	'react-native-localize',
	'react-native-mime-types',
	'react-native-os',
	'react-native-radial-gradient',
	'react-native-randombytes',
	'react-native-reanimated',
	'react-native-screens',
	'react-native-splash-screen',
	'react-native-sqlite-storage',
	'react-native-svg',
	'react-native-svg-uri',
	'react-native-tcp',
	'react-native-udp',
	'react-native-unimodules',
	'react-native-vector-icons',
	'react-native-vector-icons/FontAwesome',
	'react-native-vector-icons/Zocial',
	'react-native-vector-icons/Octicons',
	'react-native-vector-icons/MaterialIcons',
	'react-native-vector-icons/Ionicons',
	'react-native-vector-icons/MaterialCommunityIcons',
	'react-native-vector-icons/Foundation',
	'react-native-vector-icons/Entypo',
	'react-native-vector-icons/SimpleLineIcons',
	'react-native-vector-icons/EvilIcons',
	'react-native-vector-icons/Feather',
	'react-native-vector-icons/AntDesign',
	'react-native-video',
	'react-native-voice',
	'react-native-webrtc',
	'react-native-webview',
	'react-navigation',
	'react-navigation-animated-switch',
	'react-navigation-drawer',
	'react-navigation-material-bottom-tabs',
	'react-navigation-stack',
	'react-navigation-tabs',
	'react-redux',
	'react-spring',
	'readable-stream',
	'realm',
	'redux',
	'redux-persist',
	'redux-thunk',
	'reselect',
	'stream-browserify',
	'timers-browserify',
	'tty-browserify',
	'url',
	'util',
	'vm-browserify',
	'yup',

	'lodash',
	'lodash/add',
	'lodash/after',
	'lodash/array',
	'lodash/ary',
	'lodash/assign',
	'lodash/assignIn',
	'lodash/assignInWith',
	'lodash/assignWith',
	'lodash/at',
	'lodash/attempt',
	'lodash/before',
	'lodash/bind',
	'lodash/bindAll',
	'lodash/bindKey',
	'lodash/camelCase',
	'lodash/capitalize',
	'lodash/castArray',
	'lodash/ceil',
	'lodash/chain',
	'lodash/chunk',
	'lodash/clamp',
	'lodash/clone',
	'lodash/cloneDeep',
	'lodash/cloneDeepWith',
	'lodash/cloneWith',
	'lodash/collection',
	'lodash/commit',
	'lodash/compact',
	'lodash/concat',
	'lodash/cond',
	'lodash/conforms',
	'lodash/conformsTo',
	'lodash/constant',
	'lodash/core',
	'lodash/countBy',
	'lodash/create',
	'lodash/curry',
	'lodash/curryRight',
	'lodash/date',
	'lodash/debounce',
	'lodash/deburr',
	'lodash/defaults',
	'lodash/defaultsDeep',
	'lodash/defaultTo',
	'lodash/defer',
	'lodash/delay',
	'lodash/difference',
	'lodash/differenceBy',
	'lodash/differenceWith',
	'lodash/divide',
	'lodash/drop',
	'lodash/dropRight',
	'lodash/dropRightWhile',
	'lodash/dropWhile',
	'lodash/each',
	'lodash/eachRight',
	'lodash/endsWith',
	'lodash/entries',
	'lodash/entriesIn',
	'lodash/eq',
	'lodash/escape',
	'lodash/escapeRegExp',
	'lodash/every',
	'lodash/extend',
	'lodash/extendWith',
	'lodash/fill',
	'lodash/filter',
	'lodash/find',
	'lodash/findIndex',
	'lodash/findKey',
	'lodash/findLast',
	'lodash/findLastIndex',
	'lodash/findLastKey',
	'lodash/first',
	'lodash/flatMap',
	'lodash/flatMapDeep',
	'lodash/flatMapDepth',
	'lodash/flatten',
	'lodash/flattenDeep',
	'lodash/flattenDepth',
	'lodash/flip',
	'lodash/floor',
	'lodash/flow',
	'lodash/flowRight',
	'lodash/forEach',
	'lodash/forEachRight',
	'lodash/forIn',
	'lodash/forInRight',
	'lodash/forOwn',
	'lodash/forOwnRight',
	'lodash/fp',
	'lodash/fromPairs',
	'lodash/function',
	'lodash/functions',
	'lodash/functionsIn',
	'lodash/get',
	'lodash/groupBy',
	'lodash/gt',
	'lodash/gte',
	'lodash/has',
	'lodash/hasIn',
	'lodash/head',
	'lodash/identity',
	'lodash/includes',
	'lodash/index',
	'lodash/indexOf',
	'lodash/initial',
	'lodash/inRange',
	'lodash/intersection',
	'lodash/intersectionBy',
	'lodash/intersectionWith',
	'lodash/invert',
	'lodash/invertBy',
	'lodash/invoke',
	'lodash/invokeMap',
	'lodash/isArguments',
	'lodash/isArray',
	'lodash/isArrayBuffer',
	'lodash/isArrayLike',
	'lodash/isArrayLikeObject',
	'lodash/isBoolean',
	'lodash/isBuffer',
	'lodash/isDate',
	'lodash/isElement',
	'lodash/isEmpty',
	'lodash/isEqual',
	'lodash/isEqualWith',
	'lodash/isError',
	'lodash/isFinite',
	'lodash/isFunction',
	'lodash/isInteger',
	'lodash/isLength',
	'lodash/isMap',
	'lodash/isMatch',
	'lodash/isMatchWith',
	'lodash/isNaN',
	'lodash/isNative',
	'lodash/isNil',
	'lodash/isNull',
	'lodash/isNumber',
	'lodash/isObject',
	'lodash/isObjectLike',
	'lodash/isPlainObject',
	'lodash/isRegExp',
	'lodash/isSafeInteger',
	'lodash/isSet',
	'lodash/isString',
	'lodash/isSymbol',
	'lodash/isTypedArray',
	'lodash/isUndefined',
	'lodash/isWeakMap',
	'lodash/isWeakSet',
	'lodash/iteratee',
	'lodash/join',
	'lodash/kebabCase',
	'lodash/keyBy',
	'lodash/keys',
	'lodash/keysIn',
	'lodash/lang',
	'lodash/last',
	'lodash/lastIndexOf',
	'lodash/lodash',
	'lodash/lowerCase',
	'lodash/lowerFirst',
	'lodash/lt',
	'lodash/lte',
	'lodash/map',
	'lodash/mapKeys',
	'lodash/mapValues',
	'lodash/matches',
	'lodash/matchesProperty',
	'lodash/math',
	'lodash/max',
	'lodash/maxBy',
	'lodash/mean',
	'lodash/meanBy',
	'lodash/memoize',
	'lodash/merge',
	'lodash/mergeWith',
	'lodash/method',
	'lodash/methodOf',
	'lodash/min',
	'lodash/minBy',
	'lodash/mixin',
	'lodash/multiply',
	'lodash/negate',
	'lodash/next',
	'lodash/noop',
	'lodash/now',
	'lodash/nth',
	'lodash/nthArg',
	'lodash/number',
	'lodash/object',
	'lodash/omit',
	'lodash/omitBy',
	'lodash/once',
	'lodash/orderBy',
	'lodash/over',
	'lodash/overArgs',
	'lodash/overEvery',
	'lodash/overSome',
	'lodash/pad',
	'lodash/padEnd',
	'lodash/padStart',
	'lodash/parseInt',
	'lodash/partial',
	'lodash/partialRight',
	'lodash/partition',
	'lodash/pick',
	'lodash/pickBy',
	'lodash/plant',
	'lodash/property',
	'lodash/propertyOf',
	'lodash/pull',
	'lodash/pullAll',
	'lodash/pullAllBy',
	'lodash/pullAllWith',
	'lodash/pullAt',
	'lodash/random',
	'lodash/range',
	'lodash/rangeRight',
	'lodash/rearg',
	'lodash/reduce',
	'lodash/reduceRight',
	'lodash/reject',
	'lodash/remove',
	'lodash/repeat',
	'lodash/replace',
	'lodash/rest',
	'lodash/result',
	'lodash/reverse',
	'lodash/round',
	'lodash/sample',
	'lodash/sampleSize',
	'lodash/seq',
	'lodash/set',
	'lodash/setWith',
	'lodash/shuffle',
	'lodash/size',
	'lodash/slice',
	'lodash/snakeCase',
	'lodash/some',
	'lodash/sortBy',
	'lodash/sortedIndex',
	'lodash/sortedIndexBy',
	'lodash/sortedIndexOf',
	'lodash/sortedLastIndex',
	'lodash/sortedLastIndexBy',
	'lodash/sortedLastIndexOf',
	'lodash/sortedUniq',
	'lodash/sortedUniqBy',
	'lodash/split',
	'lodash/spread',
	'lodash/startCase',
	'lodash/startsWith',
	'lodash/string',
	'lodash/stubArray',
	'lodash/stubFalse',
	'lodash/stubObject',
	'lodash/stubString',
	'lodash/stubTrue',
	'lodash/subtract',
	'lodash/sum',
	'lodash/sumBy',
	'lodash/tail',
	'lodash/take',
	'lodash/takeRight',
	'lodash/takeRightWhile',
	'lodash/takeWhile',
	'lodash/tap',
	'lodash/template',
	'lodash/templateSettings',
	'lodash/throttle',
	'lodash/thru',
	'lodash/times',
	'lodash/toArray',
	'lodash/toFinite',
	'lodash/toInteger',
	'lodash/toIterator',
	'lodash/toJSON',
	'lodash/toLength',
	'lodash/toLower',
	'lodash/toNumber',
	'lodash/toPairs',
	'lodash/toPairsIn',
	'lodash/toPath',
	'lodash/toPlainObject',
	'lodash/toSafeInteger',
	'lodash/toString',
	'lodash/toUpper',
	'lodash/transform',
	'lodash/trim',
	'lodash/trimEnd',
	'lodash/trimStart',
	'lodash/truncate',
	'lodash/unary',
	'lodash/unescape',
	'lodash/union',
	'lodash/unionBy',
	'lodash/unionWith',
	'lodash/uniq',
	'lodash/uniqBy',
	'lodash/uniqueId',
	'lodash/uniqWith',
	'lodash/unset',
	'lodash/unzip',
	'lodash/unzipWith',
	'lodash/update',
	'lodash/updateWith',
	'lodash/upperCase',
	'lodash/upperFirst',
	'lodash/util',
	'lodash/value',
	'lodash/valueOf',
	'lodash/values',
	'lodash/valuesIn',
	'lodash/without',
	'lodash/words',
	'lodash/wrap',
	'lodash/wrapperAt',
	'lodash/wrapperChain',
	'lodash/wrapperLodash',
	'lodash/wrapperReverse',
	'lodash/wrapperValue',
	'lodash/xor',
	'lodash/xorBy',
	'lodash/xorWith',
	'lodash/zip',
	'lodash/zipObject',
	'lodash/zipObjectDeep',
	'lodash/zipWith',
	'lodash.add',
	'lodash.after',
	'lodash.array',
	'lodash.ary',
	'lodash.assign',
	'lodash.assignIn',
	'lodash.assignInWith',
	'lodash.assignWith',
	'lodash.at',
	'lodash.attempt',
	'lodash.before',
	'lodash.bind',
	'lodash.bindAll',
	'lodash.bindKey',
	'lodash.camelCase',
	'lodash.capitalize',
	'lodash.castArray',
	'lodash.ceil',
	'lodash.chain',
	'lodash.chunk',
	'lodash.clamp',
	'lodash.clone',
	'lodash.cloneDeep',
	'lodash.cloneDeepWith',
	'lodash.cloneWith',
	'lodash.collection',
	'lodash.commit',
	'lodash.compact',
	'lodash.concat',
	'lodash.cond',
	'lodash.conforms',
	'lodash.conformsTo',
	'lodash.constant',
	'lodash.core',
	'lodash.countBy',
	'lodash.create',
	'lodash.curry',
	'lodash.curryRight',
	'lodash.date',
	'lodash.debounce',
	'lodash.deburr',
	'lodash.defaults',
	'lodash.defaultsDeep',
	'lodash.defaultTo',
	'lodash.defer',
	'lodash.delay',
	'lodash.difference',
	'lodash.differenceBy',
	'lodash.differenceWith',
	'lodash.divide',
	'lodash.drop',
	'lodash.dropRight',
	'lodash.dropRightWhile',
	'lodash.dropWhile',
	'lodash.each',
	'lodash.eachRight',
	'lodash.endsWith',
	'lodash.entries',
	'lodash.entriesIn',
	'lodash.eq',
	'lodash.escape',
	'lodash.escapeRegExp',
	'lodash.every',
	'lodash.extend',
	'lodash.extendWith',
	'lodash.fill',
	'lodash.filter',
	'lodash.find',
	'lodash.findIndex',
	'lodash.findKey',
	'lodash.findLast',
	'lodash.findLastIndex',
	'lodash.findLastKey',
	'lodash.first',
	'lodash.flatMap',
	'lodash.flatMapDeep',
	'lodash.flatMapDepth',
	'lodash.flatten',
	'lodash.flattenDeep',
	'lodash.flattenDepth',
	'lodash.flip',
	'lodash.floor',
	'lodash.flow',
	'lodash.flowRight',
	'lodash.forEach',
	'lodash.forEachRight',
	'lodash.forIn',
	'lodash.forInRight',
	'lodash.forOwn',
	'lodash.forOwnRight',
	'lodash.fp',
	'lodash.fromPairs',
	'lodash.function',
	'lodash.functions',
	'lodash.functionsIn',
	'lodash.get',
	'lodash.groupBy',
	'lodash.gt',
	'lodash.gte',
	'lodash.has',
	'lodash.hasIn',
	'lodash.head',
	'lodash.identity',
	'lodash.includes',
	'lodash.index',
	'lodash.indexOf',
	'lodash.initial',
	'lodash.inRange',
	'lodash.intersection',
	'lodash.intersectionBy',
	'lodash.intersectionWith',
	'lodash.invert',
	'lodash.invertBy',
	'lodash.invoke',
	'lodash.invokeMap',
	'lodash.isArguments',
	'lodash.isArray',
	'lodash.isArrayBuffer',
	'lodash.isArrayLike',
	'lodash.isArrayLikeObject',
	'lodash.isBoolean',
	'lodash.isBuffer',
	'lodash.isDate',
	'lodash.isElement',
	'lodash.isEmpty',
	'lodash.isEqual',
	'lodash.isEqualWith',
	'lodash.isError',
	'lodash.isFinite',
	'lodash.isFunction',
	'lodash.isInteger',
	'lodash.isLength',
	'lodash.isMap',
	'lodash.isMatch',
	'lodash.isMatchWith',
	'lodash.isNaN',
	'lodash.isNative',
	'lodash.isNil',
	'lodash.isNull',
	'lodash.isNumber',
	'lodash.isObject',
	'lodash.isObjectLike',
	'lodash.isPlainObject',
	'lodash.isRegExp',
	'lodash.isSafeInteger',
	'lodash.isSet',
	'lodash.isString',
	'lodash.isSymbol',
	'lodash.isTypedArray',
	'lodash.isUndefined',
	'lodash.isWeakMap',
	'lodash.isWeakSet',
	'lodash.iteratee',
	'lodash.join',
	'lodash.kebabCase',
	'lodash.keyBy',
	'lodash.keys',
	'lodash.keysIn',
	'lodash.lang',
	'lodash.last',
	'lodash.lastIndexOf',
	'lodash.lodash',
	'lodash.lowerCase',
	'lodash.lowerFirst',
	'lodash.lt',
	'lodash.lte',
	'lodash.map',
	'lodash.mapKeys',
	'lodash.mapValues',
	'lodash.matches',
	'lodash.matchesProperty',
	'lodash.math',
	'lodash.max',
	'lodash.maxBy',
	'lodash.mean',
	'lodash.meanBy',
	'lodash.memoize',
	'lodash.merge',
	'lodash.mergeWith',
	'lodash.method',
	'lodash.methodOf',
	'lodash.min',
	'lodash.minBy',
	'lodash.mixin',
	'lodash.multiply',
	'lodash.negate',
	'lodash.next',
	'lodash.noop',
	'lodash.now',
	'lodash.nth',
	'lodash.nthArg',
	'lodash.number',
	'lodash.object',
	'lodash.omit',
	'lodash.omitBy',
	'lodash.once',
	'lodash.orderBy',
	'lodash.over',
	'lodash.overArgs',
	'lodash.overEvery',
	'lodash.overSome',
	'lodash.pad',
	'lodash.padEnd',
	'lodash.padStart',
	'lodash.parseInt',
	'lodash.partial',
	'lodash.partialRight',
	'lodash.partition',
	'lodash.pick',
	'lodash.pickBy',
	'lodash.plant',
	'lodash.property',
	'lodash.propertyOf',
	'lodash.pull',
	'lodash.pullAll',
	'lodash.pullAllBy',
	'lodash.pullAllWith',
	'lodash.pullAt',
	'lodash.random',
	'lodash.range',
	'lodash.rangeRight',
	'lodash.rearg',
	'lodash.reduce',
	'lodash.reduceRight',
	'lodash.reject',
	'lodash.remove',
	'lodash.repeat',
	'lodash.replace',
	'lodash.rest',
	'lodash.result',
	'lodash.reverse',
	'lodash.round',
	'lodash.sample',
	'lodash.sampleSize',
	'lodash.seq',
	'lodash.set',
	'lodash.setWith',
	'lodash.shuffle',
	'lodash.size',
	'lodash.slice',
	'lodash.snakeCase',
	'lodash.some',
	'lodash.sortBy',
	'lodash.sortedIndex',
	'lodash.sortedIndexBy',
	'lodash.sortedIndexOf',
	'lodash.sortedLastIndex',
	'lodash.sortedLastIndexBy',
	'lodash.sortedLastIndexOf',
	'lodash.sortedUniq',
	'lodash.sortedUniqBy',
	'lodash.split',
	'lodash.spread',
	'lodash.startCase',
	'lodash.startsWith',
	'lodash.string',
	'lodash.stubArray',
	'lodash.stubFalse',
	'lodash.stubObject',
	'lodash.stubString',
	'lodash.stubTrue',
	'lodash.subtract',
	'lodash.sum',
	'lodash.sumBy',
	'lodash.tail',
	'lodash.take',
	'lodash.takeRight',
	'lodash.takeRightWhile',
	'lodash.takeWhile',
	'lodash.tap',
	'lodash.template',
	'lodash.templateSettings',
	'lodash.throttle',
	'lodash.thru',
	'lodash.times',
	'lodash.toArray',
	'lodash.toFinite',
	'lodash.toInteger',
	'lodash.toIterator',
	'lodash.toJSON',
	'lodash.toLength',
	'lodash.toLower',
	'lodash.toNumber',
	'lodash.toPairs',
	'lodash.toPairsIn',
	'lodash.toPath',
	'lodash.toPlainObject',
	'lodash.toSafeInteger',
	'lodash.toString',
	'lodash.toUpper',
	'lodash.transform',
	'lodash.trim',
	'lodash.trimEnd',
	'lodash.trimStart',
	'lodash.truncate',
	'lodash.unary',
	'lodash.unescape',
	'lodash.union',
	'lodash.unionBy',
	'lodash.unionWith',
	'lodash.uniq',
	'lodash.uniqBy',
	'lodash.uniqueId',
	'lodash.uniqWith',
	'lodash.unset',
	'lodash.unzip',
	'lodash.unzipWith',
	'lodash.update',
	'lodash.updateWith',
	'lodash.upperCase',
	'lodash.upperFirst',
	'lodash.util',
	'lodash.value',
	'lodash.valueOf',
	'lodash.values',
	'lodash.valuesIn',
	'lodash.without',
	'lodash.words',
	'lodash.wrap',
	'lodash.wrapperAt',
	'lodash.wrapperChain',
	'lodash.wrapperLodash',
	'lodash.wrapperReverse',
	'lodash.wrapperValue',
	'lodash.xor',
	'lodash.xorBy',
	'lodash.xorWith',
	'lodash.zip',
	'lodash.zipObject',
	'lodash.zipObjectDeep',
	'lodash.zipWith',
];

export const getEndpointConfig = (
	path,
	exludeModules = [],
	{ output = {}, plugins: modulePlugins = [], ...config } = {}
) => ({
	input: `source/${path}.js`,
	output: [
		{
			file: `dist/${path}.js`,
			sourcemap: false,
			exports: 'named',
			format: 'cjs',
			...output,
		},
	],
	context: 'this',
	// treeshake: false,
	plugins: [...modulePlugins, ...plugins],
	external: [...external, ...exludeModules],
	...config,
});

export default [
	getEndpointConfig('moment', [], {
		plugins: [
			replace({
				// moment tries to load locales using local path
				'\'./locale/\'': '\'moment/locale/\'',
				delimiters: ['', ''],
			}),
		],
	}),
	getEndpointConfig('moment-locales', ['moment-internal-because-of-rollup'], {
		plugins: [
			replace({
				// each locale requires moment using local path
				'require(\'../moment\')': 'require(\'moment-import-for-locales\')',
				delimiters: ['', ''],
			}),
		],
	}),
	getEndpointConfig('graphql'),
	getEndpointConfig('graphql-tag', ['graphql', 'graphql/language/parser']),
	getEndpointConfig('styled-components-native'),
	getEndpointConfig('recompose'),
	getEndpointConfig('lodash-fp'),
	getEndpointConfig('react-native-paper', [], {
		plugins: [
			replace({
				// assets are converted into Base64 separately and then imported using package-path
				'../../assets/': 'react-native-paper/assets/',
				delimiters: ['', ''],
			}),
		],
	}),
	getEndpointConfig('react-native-paper-assets'),
	getEndpointConfig('react-native-elements', ['react-native-ratings'], {
		output: {
			interop: false,
		},
	}),
	getEndpointConfig('react-native-ratings', [], {
		plugins: [
			replace({
				// assets are converted into Base64 separately and then imported using package-path
				'../images/': 'react-native-ratings/images/',
				'./images/': 'react-native-ratings/images/',
				delimiters: ['', ''],
			}),
		],
	}),
	getEndpointConfig('react-native-ratings-images'),
	getEndpointConfig(
		'react-native-ui-kitten',
		['moment', '@eva-design/eva', 'react-native-eva-icons', 'react-native-eva-icons/icons'],
		{
			output: {
				interop: false,
			},
		}
	),
	getEndpointConfig('eva-design_eva'),
	getEndpointConfig('react-native-eva-icons', [], {
		output: {
			interop: false,
		},
	}),
	getEndpointConfig('react-native-material-ui'),
	getEndpointConfig('victory-native'),
];
