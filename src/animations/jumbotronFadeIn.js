window.onload = function() {

//////////////////////////////////
  let elementsToFadeUp = document.getElementsByClassName('fade-in');

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
