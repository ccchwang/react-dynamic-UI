import '../public/stylesheets/main.scss';
import React from 'react';
import {render} from 'react-dom';
import { HeroVideo, Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button } from '../lib/index';


render(
  <div>
  <Navbar navColor='rgba(135, 205, 218, 0.8)'>
    <Nav pullLeft>
      <NavItem className="nav-item"><a>OUR BRAND</a></NavItem>
      <NavItem className="nav-item">ABOUT US</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem className="nav-item">CONTACT</NavItem>
    </Nav>
  </Navbar>

  <HeroVideo
    videoSrc="./public/video/ocean-vid.mp4"
    videoType="video/mp4">
    Sample Heading Goes Here
    <button className="btn nav-btn">LEARN MORE</button>
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
      <h2>Atlantic</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor vestibulum pharetra.</p>
      <h2>Pacific</h2>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus elit, sed feugiat nunc nibh ut purus. Curabitur ac.</p>
      <h2>Indian</h2>
      <p>Ere. Maecenas sit amet enim ut augue varius ullamcorper ac id ante. Curabitur efficitur.</p>
      <h2>Mediterranean</h2>
      <p>Integer semper, erat in tincidunt fermentum, sem massa cursus elit, sed feugiat nunc nibh ut purus. Curabitur ac pulvinar mauris.</p>
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
      <h1>What's Next?</h1>
      <h2>Cirrus</h2>
      <p>Donec interdum semper tortor, at pharetra magna. Vivamus dignissim nec erat a semper. Etiam nec porttitor mauris. Aenean in.</p>
      <h2>Cumulus</h2>
      <p>Integer diam leo, faucibus nec lacus non, suscipit porta ipsum. Mauris elementum est et sapien.</p>
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
        <h1>What's Now?</h1>
        <h2>Carribean</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor vestibulum pharetra.</p>
        <h2>Caspian</h2>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus elit, sed feugiat nunc nibh ut purus. Curabitur ac.</p>
        <h2>Adriatic</h2>
        <p>Ere. Maecenas sit amet enim ut augue varius ullamcorper ac id ante. Curabitur efficitur.</p>
      </div>
    </JumbotronCol>
   </Jumbotron>

   <Jumbotron className="jumbo-fadeIn fade-stagger">
    <JumbotronCol fadeEffect="fadeInRight" style={{width: '50%'}}>
      <h1>What's New?</h1>
      <h2>Arabian</h2>
      <p>Donec interdum semper tortor, at pharetra magna. Vivamus dignissim nec erat a semper. Etiam nec porttitor mauris. Aenean in.</p>
      <h2>Aegean</h2>
      <p>Integer diam leo, faucibus nec lacus non, suscipit porta ipsum. Mauris elementum est et sapien.</p>
      <h2>Baltic</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor vestibulum pharetra.</p>
      <h2>Ionian</h2>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus elit, sed feugiat nunc nibh ut purus. Curabitur ac.</p>
    </JumbotronCol>
   </Jumbotron>

    <div style={{height: '300px'}}>
      <DrawerContainer>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}>Menu Item 1</MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Menu Item 2</a></MenuItem>
      </DrawerContainer>
    </div>


  </div>

  ,
  document.getElementById('app')
);
