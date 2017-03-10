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

   <JumbotronFadeUp />
    dd
  </div>

  ,
  document.getElementById('app')
);
