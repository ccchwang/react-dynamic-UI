'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var jumbotronStyle = {
  style: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    maxWidth: '1275px',
    margin: '0 auto'
  },
  column: {
    all: {
      boxSizing: 'border-box',
      width: '50%'
    },
    fadeInLeft: {
      width: '40%', padding: '15px 20px'
    },
    fadeInRight: {
      width: '40%', padding: '15px 20px'
    }
  },
  fadeUp: {
    animationName: 'fadeUp',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '0.8s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  },
  fadeAppear: {
    animationName: 'fadeAppear',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in',
    animationDuration: '0.7s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  },
  fadeInLeft: {
    animationName: 'fadeInLeft',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-out',
    animationDuration: '0.7s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'both'
  }
};

jumbotronStyle.fadeInRight = Object.assign({}, jumbotronStyle.fadeInLeft, { animationName: 'fadeInRight' });

exports.default = jumbotronStyle;