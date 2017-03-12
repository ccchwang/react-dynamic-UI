'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.onload = function () {

  var styleSheets = document.styleSheets;
  var ownerStyleSheet = void 0;

  for (var i = 0; i < styleSheets.length; i++) {
    if (styleSheets[i].ownerNode.nodeName === "STYLE") {
      ownerStyleSheet = styleSheets[i];
    }
  }

  var keyframeFadeUp = '@-webkit-keyframes fadeUp {\n    0% {-webkit-transform:translate3d(0,40px,0); opacity: 0 }\n    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}\n  }';

  var keyframeFadeAppear = '@-webkit-keyframes fadeAppear {\n    0% {opacity: 0}\n    100% {opacity: 1}\n  }';

  var keyframeFadeInRight = '@-webkit-keyframes fadeInRight {\n    0% {-webkit-transform:translate(0px); opacity: 0}\n    100% {-webkit-transform:translate(40px); opacity: 1}\n  }';

  var keyframeFadeInLeft = '@-webkit-keyframes fadeInLeft {\n    0% {-webkit-transform:translate(0px); opacity: 0}\n    100% {-webkit-transform:translate(-40px); opacity: 1}\n  }';

  ownerStyleSheet.insertRule(keyframeFadeUp, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeAppear, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeInLeft, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeInRight, ownerStyleSheet.cssRules.length);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~//


  var elementsToFadeIn = [].concat(_toConsumableArray(document.getElementsByClassName('fadeInLeft')), _toConsumableArray(document.getElementsByClassName('fadeInRight')), _toConsumableArray(document.getElementsByClassName('fadeAppear')), _toConsumableArray(document.getElementsByClassName('fadeUp')));

  var _loop = function _loop() {
    var divider = 1;
    //elementsToFadeIn[i].className.startsWith('fadeUp') ? 1 : 1.13; => might need later

    window.addEventListener('scroll', function () {
      var objectBottom = (this.offsetHeight + this.offsetTop) / divider;
      var windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeIn[i]));
  };

  for (var i = 0; i < elementsToFadeIn.length; i++) {
    _loop();
  }
};