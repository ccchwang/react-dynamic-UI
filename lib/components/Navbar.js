'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navbar = require('../styles/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import animation from '../animations/jumbotronFadeUp'


function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      navColor = _ref.navColor;


  var mergedStyle = Object.assign({}, _navbar2.default.nav, style);
  window.navColor = navColor;

  return _react2.default.createElement(
    'div',
    { className: className, style: mergedStyle, id: 'navbarFadeIn' },
    children
  );
}