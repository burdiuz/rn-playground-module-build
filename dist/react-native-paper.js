'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNativePaper = require('react-native-paper');



Object.keys(reactNativePaper).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return reactNativePaper[k];
		}
	});
});
