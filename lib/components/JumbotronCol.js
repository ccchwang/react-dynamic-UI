'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jumbotron = require('../styles/jumbotron');

var _jumbotron2 = _interopRequireDefault(_jumbotron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import animation from '../animations/jumbotronFadeUp'


var JumbotronCol = function (_React$Component) {
  _inherits(JumbotronCol, _React$Component);

  function JumbotronCol() {
    _classCallCheck(this, JumbotronCol);

    return _possibleConstructorReturn(this, (JumbotronCol.__proto__ || Object.getPrototypeOf(JumbotronCol)).apply(this, arguments));
  }

  _createClass(JumbotronCol, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          style = _props.style,
          fadeEffect = _props.fadeEffect;

      var childrenArray = !children.length || typeof children === "string" ? [children] : children;

      var mergedColumnStyle = Object.assign(_jumbotron2.default.column.all, _jumbotron2.default.column[fadeEffect], style);
      var fadeStyle = _jumbotron2.default[fadeEffect];
      var fadeClass = fadeEffect ? fadeEffect + " " : "";

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
  }]);

  return JumbotronCol;
}(_react2.default.Component);

// <div className="fullscreen-bg">
//             <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
//                 <source src="video/big_buck_bunny.mp4" type="video/mp4" />
//             </video>
//         </div>


exports.default = JumbotronCol;