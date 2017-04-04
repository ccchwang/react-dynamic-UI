'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeroVideo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _heroVideo = require('../styles/heroVideo');

var _heroVideo2 = _interopRequireDefault(_heroVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeroVideo(_ref) {
  var videoSrc = _ref.videoSrc,
      videoType = _ref.videoType,
      className = _ref.className,
      children = _ref.children;


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