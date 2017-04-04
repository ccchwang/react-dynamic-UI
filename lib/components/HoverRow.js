'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HoverRow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoverRow = require('../styles/hoverRow');

var _hoverRow2 = _interopRequireDefault(_hoverRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HoverRow(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style;


  var mergedStyle = Object.assign({}, _hoverRow2.default.style, style);

  return _react2.default.createElement(
    'div',
    { className: className, style: mergedStyle },
    children
  );
}