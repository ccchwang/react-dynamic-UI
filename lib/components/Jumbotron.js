'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Jumbotron;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jumbotron = require('../styles/jumbotron');

var _jumbotron2 = _interopRequireDefault(_jumbotron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Jumbotron(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style;


  var mergedStyle = Object.assign({}, _jumbotron2.default.style, style);

  return _react2.default.createElement(
    'div',
    { className: className, style: mergedStyle },
    _react2.default.createElement(
      'div',
      { style: _jumbotron2.default.row },
      children
    )
  );
}