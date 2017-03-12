'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var drawerStyle = {
  style: {
    height: '100vh',
    width: '200px',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: 'pink'
  },
  // column: {
  //   all: {
  //     boxSizing: 'border-box',
  //     width: '50%',
  //     padding: '15px',
  //     fontFamily: 'Helvetica'
  //   },
  //   fadeInLeft: {
  //     width: '40%', padding: '15px 20px'
  //   },
  //   fadeInRight: {
  //     width: '40%', padding: '15px 20px'
  //   }
  // },
  fadeUp: {
    animationName: 'fadeUp',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  },
  fadeAppear: {
    animationName: 'fadeAppear',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in',
    animationDuration: '0.6s',
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

drawerStyle.fadeInRight = Object.assign({}, drawerStyle.fadeInLeft, { animationName: 'fadeInRight' });

exports.default = drawerStyle;