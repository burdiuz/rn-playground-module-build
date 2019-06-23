# React Native Playground Module Builder

This is a small tool based on Webpack that allows using react-native JS-only packages 
in React Native Playground as a external module. It's main goal is to gather all imports, 
except the ones already present in Playground, into one file. It also embeds images 
into JS source as Base64 uri.  
  
> Note: Packages with own native dependencies(the ones you have to link) are not supported.  
  
### How To Use
1. Download this package
2. Put source code of the package you want to convert into `./src/` folder
3. Rename `*.android.js` files into `*.js`
4. Put package dependencies and peer dependencies into package.json.
5. Install dependencies via `npm install` or `yarn`
6. Build via `npm run build` or `yarn build`
7. If everything is done properly, your bundle should be in `./build/bundle.js`