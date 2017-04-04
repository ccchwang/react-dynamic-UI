'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoverRow = require('../styles/hoverRow');

var _hoverRow2 = _interopRequireDefault(_hoverRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import animation from '../animations/jumbotron'


var HoverRow = function (_React$Component) {
  _inherits(HoverRow, _React$Component);

  function HoverRow() {
    _classCallCheck(this, HoverRow);

    return _possibleConstructorReturn(this, (HoverRow.__proto__ || Object.getPrototypeOf(HoverRow)).apply(this, arguments));
  }

  _createClass(HoverRow, [{
    key: 'render',
    value: function render() {
      //children = whatever user has typed inside tags
      //PUT BACK AUTOPLAY FOR VIDEO

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          style = _props.style;

      // const styledChildren = children && children.map((child, i) => {
      //   const fadeStyle = jumbotronFadeUpStyle.fadeInUp;
      //   const fadeClass = "fade-in-up ";

      //   if (typeof child === "string") {return React.cloneElement(<p>child</p>, {style: fadeStyle, className: fadeClass, key: i})}

      //   const mergedStyle = Object.assign({}, child.props.style, fadeStyle);
      //   const ownClassName = child.props.className || ""
      //   const mergedClassName = fadeClass + ownClassName;

      //   return React.cloneElement(child, {style: mergedStyle, className: mergedClassName, key: i})
      // })

      var mergedStyle = Object.assign({}, _hoverRow2.default.style, style);
      //const columns = this.createColumns(fadeIn, styledChildren)


      return _react2.default.createElement(
        'div',
        { className: className, style: mergedStyle },
        children
      );
    }
  }]);

  return HoverRow;
}(_react2.default.Component);

// <div className="fullscreen-bg">
//             <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
//                 <source src="video/big_buck_bunny.mp4" type="video/mp4" />
//             </video>
//         </div>


exports.default = HoverRow;