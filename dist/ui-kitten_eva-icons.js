'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var icons = require('react-native-eva-icons/icons');
var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
class EvaIcon {
  constructor(content) {
    this.content = content;
  }

  toReactElement(props) {
    const Icon = this.content; // @ts-ignore - Eva maps icon color to `tintColor`

    const {
      tintColor
    } = props,
          restProps = __rest(props, ["tintColor"]);

    return React.createElement(Icon, _extends({
      fill: tintColor
    }, restProps));
  }

}

const createIconsMap = () => {
  return new Proxy({}, {
    get(target, name) {
      return new EvaIcon(icons.findIconByName(name));
    }

  });
};

const EvaIconsPack = {
  name: 'eva',
  icons: createIconsMap()
};

exports.EvaIconsPack = EvaIconsPack;
