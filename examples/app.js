import '../public/stylesheets/main.scss';
import React from 'react';
import {render} from 'react-dom';
import { HeroVideo, Jumbotron, JumbotronCol, HoverGrid, HoverCol } from '../src/index';

render(
  <div>
  <HeroVideo
    videoSrc="./public/video/ocean-vid.mp4"
    videoType="video/mp4"
  >
    Sample Heading Goes Here
  </HeroVideo>

  <Jumbotron style={{fontSize: '1.5em'}}>

    <JumbotronCol fadeEffect="fadeUp">
      <h1 className="hello" style={{color: '#25baf8', fontWeight: '700'}}>What's New?</h1>
      <h2 style={{color: '#25baf8', fontWeight: '700'}}>Category</h2>
      <p style={{lineHeight: '1.5'}}>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
      <h2 style={{color: '#25baf8', fontWeight: '700'}}>Playlists</h2>
      <p style={{lineHeight: '1.5'}}>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
      <h2 style={{color: '#25baf8', fontWeight: '700'}}>New Releases</h2>
      <p style={{lineHeight: '1.5'}}>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
    </JumbotronCol>

    <JumbotronCol fadeEffect="fadeAppear">
    <div>
      <h1 className="hello" style={{color: '#25baf8', fontWeight: '700'}}>What's New?</h1>
      <h2 style={{color: '#25baf8', fontWeight: '700'}}>Category</h2>
      <p style={{lineHeight: '1.5'}}>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
      <h2 style={{color: '#25baf8', fontWeight: '700'}}>Playlists</h2>
      <p style={{lineHeight: '1.5'}}>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
      <h2 style={{color: '#25baf8', fontWeight: '700'}}>New Releases</h2>
      <p style={{lineHeight: '1.5'}}>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
      </div>
    </JumbotronCol>


   </Jumbotron>


   <HoverGrid>
    <HoverCol size={2} imgSrc="./public/sea-waves.jpg" >sdgdsgdsgds <p className="class" style={{color: 'red'}}>sdgsd</p></HoverCol>
    <HoverCol size={2} imgSrc="./public/sea-waves.jpg" />
    <HoverCol size={4} imgSrc="./public/sea-waves.jpg" />
    <HoverCol size={4} imgSrc="./public/sea-waves.jpg" />
    <HoverCol size={4} imgSrc="./public/sea-waves.jpg" />
    <HoverCol size={4} imgSrc="./public/sea-waves.jpg" />
  </HoverGrid>


  </div>

  ,
  document.getElementById('app')
);
