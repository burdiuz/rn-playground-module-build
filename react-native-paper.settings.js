module.exports = () => ({
	'react-native-paper': (pkg) => pkg,
	'react-native-paper/assets/back-chevron.png': (pkg) => pkg.$backChevronPNG,
	'@callstack/react-theme-provider': (pkg) => pkg.$themeProvider,
	'react-native-safe-area-view': (pkg) => pkg.$safeAreaView,
});
