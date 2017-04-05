'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var heroVideoStyle = {
  style: {
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '680px',
    overflow: 'hidden'
  },
  headingStyle: {
    position: 'absolute',
    width: '40%',
    color: 'white',
    zIndex: '2',
    top: '35%',
    right: '8%',
    fontSize: '2em',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    maxWidth: '500px'
  },
  video: {
    objectFit: "cover",
    width: '100%',
    minHeight: '680px'
  }
};

//make top go from -290 to -270 has user makes height taller

exports.default = heroVideoStyle;