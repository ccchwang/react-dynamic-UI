window.onload = function() {
  let styleSheet = document.styleSheets[0];
  let keyframes = `@-webkit-keyframes fadeInUp {
    0% {-webkit-transform:translate3d(0,40px,0) }
    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}
  }`;

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);



  let elementsToFadeUp = document.getElementsByClassName('fade-in-up');

  for (var i = 0; i < elementsToFadeUp.length; i++) {

    window.addEventListener('scroll', function(){
      let objectBottom = (this.offsetHeight + this.offsetTop) / 1.9;
      let windowBottom = window.innerHeight + window.scrollY;

      if (windowBottom > objectBottom) {
        this.style.animationPlayState = 'running';
      }
    }.bind(elementsToFadeUp[i]))
  }
}

//console.log(window.innerHeight). INNER HEIGHT
//window.outerHeight //height of whole browser window
