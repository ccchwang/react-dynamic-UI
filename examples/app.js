import '../public/stylesheets/main.scss';
import React from 'react';
import {render} from 'react-dom';
import { HeroVideo, Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Button } from '../src/index';


render(
  <div>
  <Navbar>
    <NavItem className="nav-item">ABOUT US</NavItem>
    <NavItem className="nav-item"><a>OUR BRAND</a></NavItem>
  </Navbar>

  <HeroVideo
    videoSrc="./public/video/ocean-vid.mp4"
    videoType="video/mp4">
    Sample Heading Goes Here
  </HeroVideo>

  <Jumbotron>
    <JumbotronCol
      fadeEffect="fadeAppear"
      style={{display: 'flex', padding: '130px', justifyContent: 'center'}}
    >
      <img src="./public/graphic-waves.png" className="waves-graphic" />
    </JumbotronCol>
   </Jumbotron>

  <Jumbotron className="jumbo-bg">
    <JumbotronCol >
    </JumbotronCol>
    <JumbotronCol fadeEffect="fadeUp" className="jumbo-fadeUp right">
      <h1>What's New?</h1>
      <h2>Category</h2>
      <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
      <h2>Playlists</h2>
      <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
      <h2>New Releases</h2>
      <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
      <h2>New Releases</h2>
      <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
    </JumbotronCol>
   </Jumbotron>


  <HoverRow className="hover-row1">
    <HoverCol imgSrc="./public/waves1.png" />
    <HoverCol imgSrc="./public/waves7.png" />
  </HoverRow>

  <HoverRow className="hover-row2">
    <HoverCol imgSrc="./public/waves3.png" />
    <HoverCol imgSrc="./public/waves4.png" />
    <HoverCol imgSrc="./public/waves9.png" />
  </HoverRow>

    <Jumbotron className="jumbo-bg">
    <JumbotronCol fadeEffect="fadeUp" className="jumbo-fadeUp left">
      <h1>What's New?</h1>
      <h2>Category</h2>
      <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
      <h2>Playlists</h2>
      <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
      <button className="btn">CLICK ME</button>
    </JumbotronCol>

    <JumbotronCol className="jumbo-fadeUp right img">
      <img src="./public/waves8.png" className="waves-graphic"/>
    </JumbotronCol>
   </Jumbotron>


   <Jumbotron className="jumbo-fadeIn">
    <JumbotronCol fadeEffect="fadeInRight">
      <div style={{height: '650px'}}>
        <img src="./public/faderight.jpg" />
      </div>
    </JumbotronCol>

    <JumbotronCol fadeEffect="fadeInLeft" style={{width: '50%'}}>
      <div style={{height: '650px', paddingTop: '125px'}}>
        <h1>What's New?</h1>
        <h2>Category</h2>
        <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
        <h2>Playlists</h2>
        <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
        <h2>New Releases</h2>
        <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
      </div>
    </JumbotronCol>
   </Jumbotron>

   <Jumbotron className="jumbo-fadeIn fade-stagger">
    <JumbotronCol fadeEffect="fadeInRight">
      <h1>What's New?</h1>
      <h2>Category</h2>
      <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
      <h2>Playlists</h2>
      <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
      <h2>New Releases</h2>
      <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
    </JumbotronCol>
   </Jumbotron>

    <div style={{height: '300px'}}>
      <DrawerContainer>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem className="bobo"><a>Menu Item 2</a></MenuItem>
      </DrawerContainer>
    </div>


  </div>

  ,
  document.getElementById('app')
);
