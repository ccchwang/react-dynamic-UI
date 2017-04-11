# react-dynamic-UI

A UI toolkit for React.js featuring components with built-in animation.

Demo site [here](https://rdi-demo.herokuapp.com/).

## About
react-dynamic-UI aims to make it easy to build React websites that come alive. This library offers a set of UI components native to React.js that animate based on user interaction, such as scroll and hover.

The components are designed to be modular and unopinionated, with flexible styling capabilities. Components can be configured with various effects, such as fading in as the user scrolls. The animations are available out of the box - all you have to do is pick one, and the library will inject the proper styles into your code.

## Components
* Navbar
* Nav
* NavItem
* HeroVideo
* Jumbotron
* JumbotronCol
* HoverRow
* HoverCol
* DrawerContainer


## Getting Started
react-dynamic-UI is available as an [npm package](https://www.npmjs.com/package/react-dynamic-ui). Install on your command line with: 
```
npm install react-dynamic-UI
```
Then import the components into your JSX files:
```
import { HeroVideo, Jumbotron, JumbotronCol } from 'react-dynamic-ui'
```
## Usage

The Jumbotron can take in any number of JumbotronCol children components. Each JumbotronCol can be configured with one of four animations - fadeUp, fadeAppear, fadeInLeft, and fadeInRight. These animations are passed to the component as the fadeEffect prop.

```javascript
import React from 'react';
import {render} from 'react-dom';
import { Jumbotron, JumbotronCol } from 'react-dynamic-ui';

render(
  <Jumbotron>
  
    <JumbotronCol fadeEffect="fadeAppear">
      <img src="/graphic-waves.png" />
    </JumbotronCol>

    <JumbotronCol fadeEffect="fadeUp">
      <h2>Atlantic</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor vestibulum pharetra.</p>
    </JumbotronCol>

    <JumbotronCol fadeEffect="fadeInRight">
      <img src="/ocean.jpg" />
    </JumbotronCol>

    <JumbotronCol fadeEffect="fadeInLeft" style={{width: '50%'}}>
      <h2>Carribean</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor vestibulum pharetra.</p>
    </JumbotronCol>
    
  </Jumbotron>
  ,
  document.getElementById('app')
);

```

