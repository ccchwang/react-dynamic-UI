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

  var keyframeDrawerOpen = '@-webkit-keyframes drawerOpen {\n    0% {-webkit-transform:translate(0px); opacity: 0}\n    100% {-webkit-transform:translate(-40px); opacity: 1}\n  }';

  var keyframeNavbarFadeIn = '@-webkit-keyframes navbarFadeIn {\n    0% {}\n    100% {background-color: rgba(40,202,200,.8)}\n  }';

  ownerStyleSheet.insertRule(keyframeFadeUp, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeAppear, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeInLeft, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeInRight, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeDrawerOpen, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeNavbarFadeIn, ownerStyleSheet.cssRules.length);

  // ownerStyleSheet.insertRule(`* {font-family: Helvetica}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule('.react-dynamic-drawer {position: fixed;\n  width: 256px; height: 100vh; background-color: white; top: 0; left: 0; box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px; z-index: 2000; display: flex; flex-direction: column; word-wrap: break-word}', ownerStyleSheet.cssRules.length);

  ownerStyleSheet.insertRule('.drawer-enter {left: -256px}', ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule('.drawer-enter.drawer-enter-active {left: 0px; transition: 450ms cubic-bezier(0.23, 1, 0.32, 1) ;}', ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule('.drawer-leave {-webkit-transform:translate(0px)}', ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule('.drawer-leave.drawer-leave-active {-webkit-transform:translate(-256px);transition: 450ms cubic-bezier(0.23, 1, 0.32, 1);}', ownerStyleSheet.cssRules.length);

  ownerStyleSheet.insertRule('.backdrop-enter {opacity: 0}', ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule('.backdrop-enter.backdrop-enter-active {opacity: 1; transition: 300ms cubic-bezier(0.23, 1, 0.32, 1) ;}', ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule('.backdrop-leave {opacity:1}', ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule('.backdrop-leave.backdrop-leave-active {opacity: 0;transition: 300ms cubic-bezier(0.23, 1, 0.32, 1);}', ownerStyleSheet.cssRules.length);

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

  window.addEventListener('scroll', function () {
    var navbarToFadeIn = document.getElementById('navbarFadeIn');
    var scrollPos = window.scrollY;

    if (scrollPos > 100) {
      navbarToFadeIn.style.animationPlayState = 'running';
    }
  });
};