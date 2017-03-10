import '../public/stylesheets/main.scss';
import React from 'react';
import {render} from 'react-dom';
import { HeroVideo, JumbotronFadeUp } from '../src/index';

render(
  <div>
  <HeroVideo
    videoSrc="./public/video/ocean-vid.mp4"
    videoType="video/mp4"
  >Sample Heading Goes Here</HeroVideo>

   <JumbotronFadeUp className="hihi"><h1 className="moop">dsgdsgsdgs</h1>
    <h2 style={{color: 'blue'}}>aaa</h2><div style={{height: '300px', backgroundColor:
    'red'}}>dsgdsgdsgsd</div>
   </JumbotronFadeUp>
    <h1>dd</h1>
  </div>

  ,
  document.getElementById('app')
);
