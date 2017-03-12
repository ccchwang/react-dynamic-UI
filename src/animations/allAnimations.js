window.onload = function() {

  let styleSheets = document.styleSheets;
  let ownerStyleSheet;

  for (var i = 0; i < styleSheets.length; i++) {
    if(styleSheets[i].ownerNode.nodeName === "STYLE") {
      ownerStyleSheet = styleSheets[i]
    }
  }

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

  let keyframeNavbarFadeIn = `@-webkit-keyframes navbarFadeIn {
    0% {}
    100% {background-color: rgba(135, 205, 218, 0.8)}
  }`;


  ownerStyleSheet.insertRule(keyframeFadeUp, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeAppear, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeInLeft, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeInRight, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeDrawerOpen, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeNavbarFadeIn, ownerStyleSheet.cssRules.length);


  // ownerStyleSheet.insertRule(`* {font-family: Helvetica}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.react-dynamic-drawer {position: fixed;
  width: 256px; height: 100vh; background-color: white; top: 0; left: 0; box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px; z-index: 2000; display: flex; flex-direction: column; word-wrap: break-word}`, ownerStyleSheet.cssRules.length);



  ownerStyleSheet.insertRule(`.drawer-enter {left: -256px}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.drawer-enter.drawer-enter-active {left: 0px; transition: 450ms cubic-bezier(0.23, 1, 0.32, 1) ;}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.drawer-leave {-webkit-transform:translate(0px)}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.drawer-leave.drawer-leave-active {-webkit-transform:translate(-256px);transition: 450ms cubic-bezier(0.23, 1, 0.32, 1);}`, ownerStyleSheet.cssRules.length);

  ownerStyleSheet.insertRule(`.backdrop-enter {opacity: 0}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.backdrop-enter.backdrop-enter-active {opacity: 1; transition: 300ms cubic-bezier(0.23, 1, 0.32, 1) ;}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.backdrop-leave {opacity:1}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.backdrop-leave.backdrop-leave-active {opacity: 0;transition: 300ms cubic-bezier(0.23, 1, 0.32, 1);}`, ownerStyleSheet.cssRules.length);


//~~~~~~~~~~~~~~~~~~~~~~~~~~//


  let elementsToFadeIn = [
    ...document.getElementsByClassName('fadeInLeft'), ...document.getElementsByClassName('fadeInRight'), ...document.getElementsByClassName('fadeAppear'),
    ...document.getElementsByClassName('fadeUp')
    ];

  for (var i = 0; i < elementsToFadeIn.length; i++) {
    let divider = 1;
    //elementsToFadeIn[i].className.startsWith('fadeUp') ? 1 : 1.13; => might need later

    window.addEventListener('scroll', function(){
      let objectBottom = (this.offsetHeight + this.offsetTop) / divider;
      let windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeIn[i]))
  }



  window.addEventListener('scroll', function(){
    let navbarToFadeIn = document.getElementById('navbarFadeIn');
    let scrollPos = window.scrollY;

    if (scrollPos > 60) {
      navbarToFadeIn.style.animationPlayState = 'running';
    }
  })

}




