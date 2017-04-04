window.onload = function() {

  var styleEl = document.createElement('style');

  // append style element to head
  document.head.appendChild(styleEl);

  // grab style sheet
  var stylesheet = styleEl.sheet;


  let keyframeFadeUp = `@-webkit-keyframes fadeUp {
    0% {-webkit-transform:translate3d(0,40px,0); opacity: 0 }
    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}
  }`;

  let keyframeFadeAppear = `@-webkit-keyframes fadeAppear {
    0% {opacity: 0}
    100% {opacity: 1}
  }`;

  let keyframeFadeInRight = `@-webkit-keyframes fadeInRight {
    0% {-webkit-transform:translate(0px); opacity: 0}
    100% {-webkit-transform:translate(40px); opacity: 1}
  }`;

  let keyframeFadeInLeft = `@-webkit-keyframes fadeInLeft {
    0% {-webkit-transform:translate(0px); opacity: 0}
    100% {-webkit-transform:translate(-40px); opacity: 1}
  }`;

  let keyframeDrawerOpen = `@-webkit-keyframes drawerOpen {
    0% {-webkit-transform:translate(0px); opacity: 0}
    100% {-webkit-transform:translate(-40px); opacity: 1}
  }`;


  //***** DRAWER ANIMATION *****

  let drawerStyle = `.react-dynamic-drawer {position: fixed;
  width: 256px; height: 100vh; background-color: white; top: 0; left: 0; box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px; z-index: 2000; display: flex; flex-direction: column; word-wrap: break-word}`;

  let drawerEnter = `.drawer-enter {left: -256px}`;

  let drawerEnterActive = `.drawer-enter.drawer-enter-active {left: 0px; transition: 450ms cubic-bezier(0.23, 1, 0.32, 1) ;}`;

  let drawerLeave = `.drawer-leave {-webkit-transform:translate(0px)}`;

  let drawerLeaveActive = `.drawer-leave.drawer-leave-active {-webkit-transform:translate(-256px);transition: 450ms cubic-bezier(0.23, 1, 0.32, 1);}`;

  let backdropEnter = `.backdrop-enter {opacity: 0}`;

  let backdropEnterActive = `.backdrop-enter.backdrop-enter-active {opacity: 1; transition: 300ms cubic-bezier(0.23, 1, 0.32, 1) ;}`;

  let backdropLeave = `.backdrop-leave {opacity:1}`;

  let backdropLeaveActive = `.backdrop-leave.backdrop-leave-active {opacity: 0;transition: 300ms cubic-bezier(0.23, 1, 0.32, 1);}`;


  //***** Inject animations into stylesheet ******
  [keyframeFadeUp, keyframeFadeAppear, keyframeFadeInLeft, keyframeFadeInRight, keyframeDrawerOpen, drawerStyle, drawerEnter, drawerEnterActive, drawerLeave, drawerLeaveActive, backdropEnter, backdropEnterActive, backdropLeave, backdropLeaveActive].map(animation => stylesheet.insertRule(animation, stylesheet.cssRules.length))


//~~~~~~~~~~~~~~~~~~~~~~~~~~//



  //***** JUMBOTRON ANIMATION *****

  let elementsToFadeIn = [
    ...document.getElementsByClassName('fadeInLeft'), ...document.getElementsByClassName('fadeInRight'), ...document.getElementsByClassName('fadeAppear'),
    ...document.getElementsByClassName('fadeUp')
    ];

  elementsToFadeIn.forEach(element => window.addEventListener('scroll', function(){
    let objectBottom = this.offsetHeight + this.offsetTop;
    let windowBottom = window.innerHeight + window.scrollY;

    if (windowBottom > objectBottom) {
      this.style.animationPlayState = 'running';
    }
  }.bind(element)
  ))


  //***** NAVBAR ANIMATION *****

  window.addEventListener('scroll', function(){
    let navbarToFadeIn = document.getElementById('navbarFadeIn');
    let scrollPos = window.scrollY;

    if (scrollPos > 40) {
      navbarToFadeIn.style.backgroundColor = window.navColor;
    }
  })

}




