import '../public/stylesheets/main.scss';
import React from 'react';
import {render} from 'react-dom';
import { HeroVideo, Jumbotron, JumbotronCol, HoverGrid, HoverCol, DrawerContainer } from '../src/index';


render(
  <div>
  <HeroVideo
    videoSrc="./public/video/ocean-vid.mp4"
    videoType="video/mp4"
  >
    Sample Heading Goes Here
  </HeroVideo>

  <Jumbotron style={{fontSize: '1.5em'}}>


   </Jumbotron>


   <HoverGrid>
    <HoverCol imgSrc="./public/sea-waves.jpg" >sdgdsgdsgds <p className="class" style={{color: 'red'}}>sdgsd</p></HoverCol>
    <HoverCol imgSrc="./public/sea-waves.jpg" />
    </HoverGrid>

    <HoverGrid>
    <HoverCol imgSrc="./public/sea-waves.jpg" />
    <HoverCol imgSrc="./public/sea-waves.jpg" />
    <HoverCol imgSrc="./public/sea-waves.jpg" />
  </HoverGrid>
  <HoverGrid>
    <HoverCol imgSrc="./public/sea-waves.jpg" >sdgdsgdsgds <p className="class" style={{color: 'red'}}>sdgsd</p></HoverCol>
    <HoverCol imgSrc="./public/sea-waves.jpg" />
    </HoverGrid>


   <DrawerContainer />

  </div>

  ,
  document.getElementById('app')
);
