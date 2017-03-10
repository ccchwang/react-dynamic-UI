'use strict';

window.onload = function () {
  var styleSheets = document.styleSheets;
  var ownerStyleSheet = void 0;

  for (var i = 0; i < styleSheets.length; i++) {
    if (styleSheets[i].ownerNode.nodeName === "STYLE") {
      ownerStyleSheet = styleSheets[i];
    }
  }

  var keyframes = '@-webkit-keyframes fadeInUp {\n    0% {-webkit-transform:translate3d(0,40px,0) }\n    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}\n  }';

  ownerStyleSheet.insertRule(keyframes, ownerStyleSheet.cssRules.length);

  //////////////////////////////////
  var elementsToFadeUp = document.getElementsByClassName('fade-in-up');

  for (var i = 0; i < elementsToFadeUp.length; i++) {

    window.addEventListener('scroll', function () {
      var objectBottom = this.offsetHeight + this.offsetTop;
      var windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeUp[i]));
  }
};

//console.log(window.innerHeight). INNER HEIGHT
//window.outerHeight //height of whole browser window