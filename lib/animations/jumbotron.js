'use strict';

window.onload = function () {

  var styleSheet = document.styleSheets[0];
  var keyframes = '@-webkit-keyframes kaka {\n      10% {-webkit-transform:translate(' + Math.random() * 300 + 'px, ' + Math.random() * 300 + 'px)}\n      90% {-webkit-transform:translate(' + Math.random() * 300 + 'px, ' + Math.random() * 300 + 'px)}\n      100% {-webkit-transform:translate(' + Math.random() * 300 + 'px, ' + Math.random() * 300 + 'px)}\n  }';
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  var fadeUpText = document.getElementById('jumbotronRightText');
  var objectBottom = (fadeUpText.offsetHeight + fadeUpText.offsetTop) / 1.9;
  var windowBottom = void 0;

  window.onscroll = function () {
    windowBottom = window.innerHeight + window.scrollY;

    if (windowBottom > objectBottom) {
      fadeUpText.style.opacity = 1;
    }
  };
};

//console.log(window.innerHeight). INNER HEIGHT
//window.outerHeight //height of whole browser window