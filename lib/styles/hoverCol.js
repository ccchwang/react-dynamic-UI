'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hoverColStyle = {
  column: {
    position: 'relative',
    boxSizing: 'border-box',
    padding: '9px 10px'
  },
  hoverStyle: {
    transform: 'scale(1.05)',
    boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
  },
  imgStyle: {
    width: '100%', transition: '0.2s ease-out'
  }
};

exports.default = hoverColStyle;