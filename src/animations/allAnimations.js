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

  let keyframeFadeIn = `@-webkit-keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
  }`;


  ownerStyleSheet.insertRule(keyframeFadeUp, ownerStyleSheet.cssRules.length);
  ownerStyleSheet.insertRule(keyframeFadeIn, ownerStyleSheet.cssRules.length);

//~~~~~~~~~~~~~~~~~~~~~~~~~~//


//******** FADE IN ********//
  let elementsToFadeIn = document.getElementsByClassName('fade-in');

  for (var i = 0; i < elementsToFadeIn.length; i++) {

    window.addEventListener('scroll', function(){
      let objectBottom = (this.offsetHeight + this.offsetTop);
      let windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeIn[i]))
  }


//******** FADE UP ********//

  let elementsToFadeUp = document.getElementsByClassName('fade-up');

  for (var i = 0; i < elementsToFadeUp.length; i++) {

    window.addEventListener('scroll', function(){
      let objectBottom = (this.offsetHeight + this.offsetTop);
      let windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeUp[i]))
  }
}

//console.log(window.innerHeight). INNER HEIGHT
//window.outerHeight //height of whole browser window
