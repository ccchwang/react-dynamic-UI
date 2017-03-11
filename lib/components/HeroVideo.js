'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _heroVideo = require('../styles/heroVideo');

var _heroVideo2 = _interopRequireDefault(_heroVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//will take in user props of video URL
//wil take in user props of overlaying text

var HeroVideo = function (_React$Component) {
  _inherits(HeroVideo, _React$Component);

  function HeroVideo() {
    _classCallCheck(this, HeroVideo);

    return _possibleConstructorReturn(this, (HeroVideo.__proto__ || Object.getPrototypeOf(HeroVideo)).apply(this, arguments));
  }

  _createClass(HeroVideo, [{
    key: 'render',
    value: function render() {
      //children = whatever user has typed inside tags
      //PUT BACK AUTOPLAY FOR VIDEO

      var _props = this.props,
          videoSrc = _props.videoSrc,
          videoType = _props.videoType,
          className = _props.className,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: className, style: _heroVideo2.default.style },
        _react2.default.createElement(
          'div',
          { style: _heroVideo2.default.headingStyle },
          _react2.default.createElement(
            'h1',
            null,
            children
          )
        ),
        _react2.default.createElement(
          'video',
          { loop: true, muted: true, autoPlay: true, style: _heroVideo2.default.video },
          _react2.default.createElement('source', { src: videoSrc, type: videoType })
        )
      );
    }
  }]);

  return HeroVideo;
}(_react2.default.Component);

// <div className="fullscreen-bg">
//             <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
//                 <source src="video/big_buck_bunny.mp4" type="video/mp4" />
//             </video>
//         </div>


exports.default = HeroVideo;