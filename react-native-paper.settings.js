module.exports = () => ({
	'react-native-paper': (pkg) => pkg,
	'@callstack/react-theme-provider': (pkg) => pkg.$themeProvider,
	'react-native-safe-area-view': (pkg) => pkg.$safeAreaView,
});
