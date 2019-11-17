module.exports = () => ({
  'react-native-ui-kitten': (pkg) => pkg,
  '@ui-kitten/eva-icons': (pkg) => pkg.$kittenEvaIcons,
  '@ui-kitten/moment': (pkg) => pkg.$kittenMoment,
  '@ui-kitten/date-fns': (pkg) => pkg.$kittenDateFns,
  'fecha': (pkg) => pkg.$fetcha,
  'date-fns/parse': (pkg) => pkg.$dateFnsParse,
  'date-fns/format': (pkg) => pkg.$dateFnsFormat,
});
