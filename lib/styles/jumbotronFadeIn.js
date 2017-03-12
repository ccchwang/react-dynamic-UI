'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var jumbotronFadeInStyle = {
  style: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    content: "",
    display: 'table',
    clear: 'both',
    padding: '3%'
  },
  column: {
    boxSizing: 'border-box',
    width: '50%',
    float: 'left',
    padding: '15px'
  },
  fadeIn: {
    animationName: 'fadeIn',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in',
    animationDuration: '0.6s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  }
};

exports.default = jumbotronFadeInStyle;
