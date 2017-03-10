'use strict';

window.onload = function () {
  var styleSheet = document.styleSheets[0];
  var keyframes = '@-webkit-keyframes fadeInUp {\n    0% {-webkit-transform:translate3d(0,40px,0) }\n    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}\n  }';

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  var elementsToFadeUp = document.getElementsByClassName('fade-in-up');

  for (var i = 0; i < elementsToFadeUp.length; i++) {

    window.addEventListener('scroll', function () {
      var objectBottom = (this.offsetHeight + this.offsetTop) / 1.9;
      var windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeUp[i]));
  }
};

//console.log(window.innerHeight). INNER HEIGHT
//window.outerHeight //height of whole browser window