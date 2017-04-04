'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.onload = function () {

  var styleEl = document.createElement('style');

  // append style element to head
  document.head.appendChild(styleEl);

  // grab style sheet
  var stylesheet = styleEl.sheet;

  var keyframeFadeUp = '@-webkit-keyframes fadeUp {\n    0% {-webkit-transform:translate3d(0,40px,0); opacity: 0 }\n    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}\n  }';

  var keyframeFadeAppear = '@-webkit-keyframes fadeAppear {\n    0% {opacity: 0}\n    100% {opacity: 1}\n  }';

  var keyframeFadeInRight = '@-webkit-keyframes fadeInRight {\n    0% {-webkit-transform:translate(0px); opacity: 0}\n    100% {-webkit-transform:translate(40px); opacity: 1}\n  }';

  var keyframeFadeInLeft = '@-webkit-keyframes fadeInLeft {\n    0% {-webkit-transform:translate(0px); opacity: 0}\n    100% {-webkit-transform:translate(-40px); opacity: 1}\n  }';

  var keyframeDrawerOpen = '@-webkit-keyframes drawerOpen {\n    0% {-webkit-transform:translate(0px); opacity: 0}\n    100% {-webkit-transform:translate(-40px); opacity: 1}\n  }';

  //***** DRAWER ANIMATION *****

  var drawerStyle = '.react-dynamic-drawer {position: fixed;\n  width: 256px; height: 100vh; background-color: white; top: 0; left: 0; box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px; z-index: 2000; display: flex; flex-direction: column; word-wrap: break-word}';

  var drawerEnter = '.drawer-enter {left: -256px}';

  var drawerEnterActive = '.drawer-enter.drawer-enter-active {left: 0px; transition: 450ms cubic-bezier(0.23, 1, 0.32, 1) ;}';

  var drawerLeave = '.drawer-leave {-webkit-transform:translate(0px)}';

  var drawerLeaveActive = '.drawer-leave.drawer-leave-active {-webkit-transform:translate(-256px);transition: 450ms cubic-bezier(0.23, 1, 0.32, 1);}';

  var backdropEnter = '.backdrop-enter {opacity: 0}';

  var backdropEnterActive = '.backdrop-enter.backdrop-enter-active {opacity: 1; transition: 300ms cubic-bezier(0.23, 1, 0.32, 1) ;}';

  var backdropLeave = '.backdrop-leave {opacity:1}';

  var backdropLeaveActive = '.backdrop-leave.backdrop-leave-active {opacity: 0;transition: 300ms cubic-bezier(0.23, 1, 0.32, 1);}';

  //***** Inject animations into stylesheet ******
  [keyframeFadeUp, keyframeFadeAppear, keyframeFadeInLeft, keyframeFadeInRight, keyframeDrawerOpen, drawerStyle, drawerEnter, drawerEnterActive, drawerLeave, drawerLeaveActive, backdropEnter, backdropEnterActive, backdropLeave, backdropLeaveActive].map(function (animation) {
    return stylesheet.insertRule(animation, stylesheet.cssRules.length);
  });

  //~~~~~~~~~~~~~~~~~~~~~~~~~~//


  //***** JUMBOTRON ANIMATION *****

  var elementsToFadeIn = [].concat(_toConsumableArray(document.getElementsByClassName('fadeInLeft')), _toConsumableArray(document.getElementsByClassName('fadeInRight')), _toConsumableArray(document.getElementsByClassName('fadeAppear')), _toConsumableArray(document.getElementsByClassName('fadeUp')));

  elementsToFadeIn.forEach(function (element) {
    return window.addEventListener('scroll', function () {
      var objectBottom = this.offsetHeight + this.offsetTop;
      var windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(element));
  });

  //***** NAVBAR ANIMATION *****

  window.addEventListener('scroll', function () {
    var navbarToFadeIn = document.getElementById('navbarFadeIn');
    var scrollPos = window.scrollY;

    if (scrollPos > 40) {
      navbarToFadeIn.style.backgroundColor = window.navColor;
    }
  });
};