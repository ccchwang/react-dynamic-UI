import React from 'react';
import navbarStyle from '../styles/navbar'
// import animation from '../animations/jumbotronFadeUp'


export default class Navbar extends React.Component {

  render () {
    const { className, children, style, backgroundColor } = this.props;
    const mergedStyle = Object.assign({}, navbarStyle.nav, style);
    window.navColor = backgroundColor;


    return (
      <div className={className} style={mergedStyle} id="navbarFadeIn">
        <div style={navbarStyle.column}>
            { children }
          </div>
        <div style={Object.assign({justifyContent: 'flex-end'}, navbarStyle.column)}>
          { children }
        </div>
      </div>
    )
  }

}
