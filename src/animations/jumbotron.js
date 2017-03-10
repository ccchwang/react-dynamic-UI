window.onload = function() {

  let styleSheet = document.styleSheets[0];
  let keyframes =
  `@-webkit-keyframes kaka {
      10% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300}px)}
      90% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300}px)}
      100% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300}px)}
  }`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


  let fadeUpText = document.getElementById('jumbotronRightText');
  let objectBottom = (fadeUpText.offsetHeight + fadeUpText.offsetTop) / 1.9;
  let windowBottom;

  window.onscroll = function() {
    windowBottom = window.innerHeight + window.scrollY;

    if (windowBottom > objectBottom) {
      fadeUpText.style.opacity = 1;
    }
  }

}

//console.log(window.innerHeight). INNER HEIGHT
//window.outerHeight //height of whole browser window
