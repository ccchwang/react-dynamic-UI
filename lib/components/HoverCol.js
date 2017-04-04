'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoverCol = require('../styles/hoverCol');

var _hoverCol2 = _interopRequireDefault(_hoverCol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoverCol = function (_React$Component) {
  _inherits(HoverCol, _React$Component);

  function HoverCol() {
    _classCallCheck(this, HoverCol);

    var _this = _possibleConstructorReturn(this, (HoverCol.__proto__ || Object.getPrototypeOf(HoverCol)).call(this));

    _this.state = { isHover: false };
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    return _this;
  }

  _createClass(HoverCol, [{
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      this.setState({ isHover: true });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState({ isHover: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          imgSrc = _props.imgSrc,
          children = _props.children;

      var mergedStyle = Object.assign({}, _hoverCol2.default.column, style);
      var imgStyle = _hoverCol2.default.imgStyle;

      if (this.state.isHover) {
        imgStyle = Object.assign({}, imgStyle, _hoverCol2.default.hoverStyle);
      }

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: mergedStyle,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        _react2.default.createElement('img', { src: imgSrc, style: imgStyle }),
        _react2.default.createElement(
          'div',
          { style: { position: 'absolute', top: '0' } },
          children
        )
      );
    }
  }]);

  return HoverCol;
}(_react2.default.Component);

exports.default = HoverCol;