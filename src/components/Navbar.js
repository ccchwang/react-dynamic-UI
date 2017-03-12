import React from 'react';
import navbarStyle from '../styles/navbar'
// import animation from '../animations/jumbotronFadeUp'


export default class Navbar extends React.Component {

  render () {
    const { className, children, style } = this.props;

    const mergedStyle = Object.assign({}, navbarStyle.nav, style);


    return (
      <div className={className} style={mergedStyle} id="navbarFadeIn" >
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


// <div className="fullscreen-bg">
//             <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
//                 <source src="video/big_buck_bunny.mp4" type="video/mp4" />
//             </video>
//         </div>
