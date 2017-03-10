'use strict';

window.onload = function () {
  var styleSheet = document.styleSheets[0];
  var keyframes = '@-webkit-keyframes fadeInUp {\n    0% {-webkit-transform:translate3d(0,40px,0) }\n    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}\n  }';

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  console.log(styleSheet);

  var fadeUpText = document.getElementById('jumbotronRightText');
  var objectBottom = (fadeUpText.offsetHeight + fadeUpText.offsetTop) / 1.9;
  var windowBottom = void 0;

  window.onscroll = function () {
    windowBottom = window.innerHeight + window.scrollY;

    if (windowBottom > objectBottom) {
      fadeUpText.style.animationName = 'fadeInUp';
    }
  };
};

//console.log(window.innerHeight). INNER HEIGHT
//window.outerHeight //height of whole browser window