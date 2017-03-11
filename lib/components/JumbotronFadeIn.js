'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jumbotronFadeIn = require('../styles/jumbotronFadeIn');

var _jumbotronFadeIn2 = _interopRequireDefault(_jumbotronFadeIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JumbotronFadeIn = function (_React$Component) {
  _inherits(JumbotronFadeIn, _React$Component);

  function JumbotronFadeIn() {
    _classCallCheck(this, JumbotronFadeIn);

    return _possibleConstructorReturn(this, (JumbotronFadeIn.__proto__ || Object.getPrototypeOf(JumbotronFadeIn)).apply(this, arguments));
  }

  _createClass(JumbotronFadeIn, [{
    key: 'createColumns',
    value: function createColumns(fadeIn, styledChildren) {
      if (fadeIn === "right") {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { style: _jumbotronFadeIn2.default.column }),
          _react2.default.createElement(
            'div',
            { style: _jumbotronFadeIn2.default.column },
            styledChildren
          )
        );
      } else if (fadeIn === "left") {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: _jumbotronFadeIn2.default.column },
            styledChildren
          ),
          _react2.default.createElement('div', { style: _jumbotronFadeIn2.default.column })
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { style: Object.assign(_jumbotronFadeIn2.default.column, { width: '27.5%' }) }),
          _react2.default.createElement(
            'div',
            { style: Object.assign(_jumbotronFadeIn2.default.column, { width: '45%' }) },
            styledChildren
          ),
          _react2.default.createElement('div', { style: Object.assign(_jumbotronFadeIn2.default.column, { width: '27.5%' }) })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      //children = whatever user has typed inside tags
      //PUT BACK AUTOPLAY FOR VIDEO

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          style = _props.style,
          fadeIn = _props.fadeIn;


      var styledChildren = children && children.map(function (child, i) {
        var fadeStyle = _jumbotronFadeIn2.default.fadeIn;
        var fadeClass = "fade-in ";

        if (typeof child === "string") {
          return _react2.default.cloneElement(_react2.default.createElement(
            'p',
            null,
            'child'
          ), { style: fadeStyle, className: fadeClass, key: i });
        }

        var mergedStyle = Object.assign({}, child.props.style, fadeStyle);
        var ownClassName = child.props.className || "";
        var mergedClassName = fadeClass + ownClassName;

        return _react2.default.cloneElement(child, { style: mergedStyle, className: mergedClassName, key: i });
      });

      var mergedStyle = Object.assign({}, style, _jumbotronFadeIn2.default.style);
      var columns = this.createColumns(fadeIn, styledChildren);

      return _react2.default.createElement(
        'div',
        { className: className, style: mergedStyle },
        columns
      );
    }
  }]);

  return JumbotronFadeIn;
}(_react2.default.Component);

exports.default = JumbotronFadeIn;