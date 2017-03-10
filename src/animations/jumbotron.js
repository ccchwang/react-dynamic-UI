window.onload = function() {
  let styleSheet = document.styleSheets[0];
  let keyframes = `@-webkit-keyframes fadeInUp {
    0% {-webkit-transform:translate3d(0,40px,0) }
    100% {-webkit-transform:translate3d(0,0,0); opacity: 1}
  }`;

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  console.log(styleSheet)



  let fadeUpText = document.getElementById('jumbotronRightText');
  let objectBottom = (fadeUpText.offsetHeight + fadeUpText.offsetTop) / 1.9;
  let windowBottom;

  window.onscroll = function() {
    windowBottom = window.innerHeight + window.scrollY;

    if (windowBottom > objectBottom) {
      fadeUpText.style.animationName = 'fadeInUp';
    }
  }

}

//console.log(window.innerHeight). INNER HEIGHT
//window.outerHeight //height of whole browser window
