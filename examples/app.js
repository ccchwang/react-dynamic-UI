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

  <JumbotronFadeUp style={{fontSize: '1.5em'}}>
    <h1 style={{color: '#25baf8', fontWeight: '700'}}>What's New?</h1>
    <h2 style={{color: '#25baf8', fontWeight: '700'}}>Category</h2>
    <p style={{lineHeight: '1.5'}}>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
   </JumbotronFadeUp>

  </div>

  ,
  document.getElementById('app')
);
