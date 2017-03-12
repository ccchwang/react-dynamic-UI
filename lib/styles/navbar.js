'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var navbarStyle = {
  nav: {
    width: '100%',
    height: '80px',
    position: 'fixed',
    top: '0',
    zIndex: '200',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    animationName: 'navbarFadeIn',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  },
  column: {
    width: '40%',
    display: 'flex',
    alignItems: 'center'
  },
  item: {
    display: 'inline-block',
    padding: '20px',
    fontSize: '1.2em',
    transition: '0.3s'
  }

};

navbarStyle.itemHover = Object.assign({}, navbarStyle.item, { cursor: 'pointer', backgroundColor: 'blue' });

exports.default = navbarStyle;