'use strict';

window.onload = function () {

  var styleSheets = document.styleSheets;
  var ownerStyleSheet = void 0;

  for (var i = 0; i < styleSheets.length; i++) {
    if (styleSheets[i].ownerNode.nodeName === "STYLE") {
      ownerStyleSheet = styleSheets[i];
    }
  }

  var keyframeFadeUp = '@-webkit-keyframes fadeUp {\n    0% {-webkit-transform:translate3d(0,40px,0); opacity: 0 }\n    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}\n  }';

  var keyframeFadeIn = '@-webkit-keyframes fadeIn {\n    0% {opacity: 0}\n    100% {opacity: 1}\n  }';

  ownerStyleSheet.insertRule(keyframeFadeUp, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeIn, ownerStyleSheet.cssRules.length);

  //~~~~~~~~~~~~~~~~~~~~~~~~~~//


  //******** FADE IN ********//
  var elementsToFadeIn = document.getElementsByClassName('fade-in');

  for (var i = 0; i < elementsToFadeIn.length; i++) {

    window.addEventListener('scroll', function () {
      var objectBottom = this.offsetHeight + this.offsetTop;
      var windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeIn[i]));
  }

  //******** FADE UP ********//

  var elementsToFadeUp = document.getElementsByClassName('fade-up');

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