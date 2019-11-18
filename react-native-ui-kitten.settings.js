module.exports = () => ({
  'react-native-ui-kitten': (pkg) => pkg,
  '@ui-kitten/eva-icons': (pkg) => pkg.$kittenEvaIcons,
  '@ui-kitten/moment': (pkg) => pkg.$kittenMoment,
  'fecha': (pkg) => pkg.$fetcha,
  '@ui-kitten/date-fns': (pkg) => pkg.$kittenDateFns,
  'date-fns/parse': (pkg) => pkg.$dateFnsParse,
  'date-fns/format': (pkg) => pkg.$dateFnsFormat,
});
