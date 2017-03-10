import Button from './components/Button';
import HeroVideo from './components/HeroVideo'
import JumbotronFadeUp from './components/JumbotronFadeUp'
import HoverGrid from './components/HoverGrid'
import HoverCol from './components/HoverCol'



let styleSheets = document.styleSheets;
let ownerStyleSheet;

for (var i = 0; i < styleSheets.length; i++) {
  if(styleSheets[i].ownerNode.nodeName === "STYLE") {
    ownerStyleSheet = styleSheets[i]
  }
}

let keyframeFadeUp = `@-webkit-keyframes fadeUp {
  0% {-webkit-transform:translate3d(0,40px,0) }
  100% {-webkit-transform:translate3d(0,0,0); opacity: 1}
}`;

let keyframeFadeIn = `@-webkit-keyframes fadeUp {
  0% {-webkit-transform:translate3d(0,40px,0) }
  100% {-webkit-transform:translate3d(0,0,0); opacity: 1}
}`;


ownerStyleSheet.insertRule(keyframeFadeUp, ownerStyleSheet.cssRules.length);

ownerStyleSheet.insertRule(keyframeFadeIn, ownerStyleSheet.cssRules.length);





module.exports = {Button, HeroVideo, JumbotronFadeUp, HoverGrid, HoverCol}
