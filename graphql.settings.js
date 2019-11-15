module.exports = () => ({
  graphql: (pkg) => pkg,
  'graphql/error': (pkg) => pkg.$error,
  'graphql/execution': (pkg) => pkg.$execution,
  'graphql/language': (pkg) => pkg.$language,
  'graphql/language/parser': (pkg) => pkg.$languageParser,
  'graphql/type': (pkg) => pkg.$type,
  'graphql/utilities': (pkg) => pkg.$utilities,
  'graphql/validation': (pkg) => pkg.$validation,
  'graphql/subscription': (pkg) => pkg.$subscription,
});
