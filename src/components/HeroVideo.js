import React from 'react';
import heroVideoStyle from '../styles/heroVideo'

//will take in user props of video URL
//wil take in user props of overlaying text

export default class HeroVideo extends React.Component {


  render () {
    //children = whatever user has typed inside tags
    //PUT BACK AUTOPLAY FOR VIDEO

    const { videoSrc, videoType, className, children } = this.props


    return (
      <div className={className} style={heroVideoStyle.style}>
        <div style={heroVideoStyle.headingStyle}>
          <h1>{children}</h1>
        </div>


          <video loop muted  style={heroVideoStyle.video}>
              <source src={videoSrc} type={videoType} />
          </video>

      </div>
    )
  }

}


// <div className="fullscreen-bg">
//             <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
//                 <source src="video/big_buck_bunny.mp4" type="video/mp4" />
//             </video>
//         </div>
