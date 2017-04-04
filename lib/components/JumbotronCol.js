'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JumbotronCol;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jumbotron = require('../styles/jumbotron');

var _jumbotron2 = _interopRequireDefault(_jumbotron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JumbotronCol(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      fadeEffect = _ref.fadeEffect;

  var mergedColumnStyle = Object.assign({}, _jumbotron2.default.column.all, _jumbotron2.default.column[fadeEffect], style);
  var fadeStyle = _jumbotron2.default[fadeEffect];
  var fadeClass = fadeEffect ? fadeEffect + " " : "";

  if (!children) {
    return _react2.default.createElement('div', { style: mergedColumnStyle });
  }

  var childrenArray = !children.length || typeof children === "string" ? [children] : children;

  var styledChildren = childrenArray && childrenArray.map(function (child, i) {
    if (typeof child === "string") {
      return _react2.default.cloneElement(_react2.default.createElement(
        'p',
        null,
        child
      ), { style: fadeStyle, className: fadeClass, key: 'strChild' });
    }

    var ownStyle = child.props.style || {};
    var ownClassName = child.props.className || "";

    var mergedStyle = Object.assign({}, fadeStyle, ownStyle);
    var mergedClassName = fadeClass + ownClassName;

    return _react2.default.cloneElement(child, { style: mergedStyle, className: mergedClassName, key: i });
  });

  return _react2.default.createElement(
    'div',
    { className: className, style: mergedColumnStyle },
    styledChildren
  );
}