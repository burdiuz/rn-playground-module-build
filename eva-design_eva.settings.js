module.exports = () => ({
  '@eva-design/eva': (pkg) => pkg,
  '@eva-design/dss': (pkg) => pkg.$dss,
  '@eva-design/processor': (pkg) => pkg.$processor,
});
