import '../public/stylesheets/main.scss';
import React from 'react';
import {render} from 'react-dom';
import HeroVideo from '../src/components/HeroVideo';


render(
  <HeroVideo
    videoSrc="./public/video/ocean-vid.mp4"
    videoType="video/mp4"
  >Sample Heading Goes Here</HeroVideo>,
  document.getElementById('app')
);
