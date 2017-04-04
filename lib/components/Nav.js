'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navbar = require('../styles/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nav(_ref) {
  var children = _ref.children,
      style = _ref.style,
      className = _ref.className,
      pullRight = _ref.pullRight;


  var mergedStyle = pullRight ? Object.assign({ justifyContent: 'flex-end' }, _navbar2.default.column, style) : Object.assign({}, _navbar2.default.column, style);

  return _react2.default.createElement(
    'div',
    { className: className, style: mergedStyle },
    children
  );
}