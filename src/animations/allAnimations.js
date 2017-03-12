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


  ownerStyleSheet.insertRule(keyframeFadeUp, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeAppear, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeInLeft, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeInRight, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeDrawerOpen, ownerStyleSheet.cssRules.length);


  ownerStyleSheet.insertRule(`.todo-item {
  width: 100px;}`, ownerStyleSheet.cssRules.length);



  ownerStyleSheet.insertRule(`.example-enter {opacity: 0.01;width:0px;}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.example-enter.example-enter-active {opacity: 1;width: 100px; transition: 500ms;}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.example-leave {opacity: 1;width: 100px;}`, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(`.example-leave.example-leave-active {opacity: 0.01;width: 0px;transition: 300ms;}`, ownerStyleSheet.cssRules.length);



  console.log(ownerStyleSheet)
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
}


