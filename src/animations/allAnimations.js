window.onload = function() {

  var styleEl = document.createElement('style');

  // Append style element to head
  document.head.appendChild(styleEl);

  // Grab style sheet
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




  stylesheet.insertRule(keyframeFadeUp, stylesheet.cssRules.length);
  stylesheet.insertRule(keyframeFadeAppear, stylesheet.cssRules.length);
  stylesheet.insertRule(keyframeFadeInLeft, stylesheet.cssRules.length);
  stylesheet.insertRule(keyframeFadeInRight, stylesheet.cssRules.length);
  stylesheet.insertRule(keyframeDrawerOpen, stylesheet.cssRules.length);



  // stylesheet.insertRule(`* {font-family: Helvetica}`, stylesheet.cssRules.length);
  stylesheet.insertRule(`.react-dynamic-drawer {position: fixed;
  width: 256px; height: 100vh; background-color: white; top: 0; left: 0; box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px; z-index: 2000; display: flex; flex-direction: column; word-wrap: break-word}`, stylesheet.cssRules.length);



  stylesheet.insertRule(`.drawer-enter {left: -256px}`, stylesheet.cssRules.length);
  stylesheet.insertRule(`.drawer-enter.drawer-enter-active {left: 0px; transition: 450ms cubic-bezier(0.23, 1, 0.32, 1) ;}`, stylesheet.cssRules.length);
  stylesheet.insertRule(`.drawer-leave {-webkit-transform:translate(0px)}`, stylesheet.cssRules.length);
  stylesheet.insertRule(`.drawer-leave.drawer-leave-active {-webkit-transform:translate(-256px);transition: 450ms cubic-bezier(0.23, 1, 0.32, 1);}`, stylesheet.cssRules.length);

  stylesheet.insertRule(`.backdrop-enter {opacity: 0}`, stylesheet.cssRules.length);
  stylesheet.insertRule(`.backdrop-enter.backdrop-enter-active {opacity: 1; transition: 300ms cubic-bezier(0.23, 1, 0.32, 1) ;}`, stylesheet.cssRules.length);
  stylesheet.insertRule(`.backdrop-leave {opacity:1}`, stylesheet.cssRules.length);
  stylesheet.insertRule(`.backdrop-leave.backdrop-leave-active {opacity: 0;transition: 300ms cubic-bezier(0.23, 1, 0.32, 1);}`, stylesheet.cssRules.length);


//~~~~~~~~~~~~~~~~~~~~~~~~~~//


  let elementsToFadeIn = [
    ...document.getElementsByClassName('fadeInLeft'), ...document.getElementsByClassName('fadeInRight'), ...document.getElementsByClassName('fadeAppear'),
    ...document.getElementsByClassName('fadeUp')
    ];

  for (var i = 0; i < elementsToFadeIn.length; i++) {
    let divider = elementsToFadeIn[i].className.startsWith('fadeUp') ? 0 : 0;

    window.addEventListener('scroll', function(){
      let objectBottom = (this.offsetHeight + this.offsetTop) - divider;
      let windowBottom = window.innerHeight + window.scrollY;



      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeIn[i]))
  }



  window.addEventListener('scroll', function(){
    let navbarToFadeIn = document.getElementById('navbarFadeIn');
    let scrollPos = window.scrollY;

    if (scrollPos > 40) {
      navbarToFadeIn.style.backgroundColor = window.navColor;
    }
  })

}




