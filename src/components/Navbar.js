import React from 'react';
import navbarStyle from '../styles/navbar'
// import animation from '../animations/jumbotronFadeUp'


export default function Navbar ({ className, children, style, navColor }) {

  const mergedStyle = Object.assign({}, navbarStyle.nav, style);
  window.navColor = navColor;

  return (
    <div className={className} style={mergedStyle} id="navbarFadeIn">
        { children }
    </div>
  )
}
