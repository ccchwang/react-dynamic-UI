import React from 'react';
import jumbotronFadeUpStyle from '../styles/jumbotronFadeUp'
import animation from '../animations/jumbotron'


export default class JumbotronFadeUp extends React.Component {


  render () {


    //children = whatever user has typed inside tags
    //PUT BACK AUTOPLAY FOR VIDEO

    const { leftImage, rightText, className, children } = this.props


    return (
      <div className={className} style={jumbotronFadeUpStyle.style}>
        <div style={jumbotronFadeUpStyle.column}>
        sdgs
        </div>

        <div id="jumbotronRightText" style={jumbotronFadeUpStyle.column}>
        sdgs
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
