import React from 'react';
import heroVideoStyle from '../styles/heroVideo'

export default function HeroVideo ({ videoSrc, videoType, className, children }) {

  return (
    <div className={className} style={heroVideoStyle.style}>

      <div style={heroVideoStyle.headingStyle}>
        <h1>{children}</h1>
      </div>

      <video loop muted autoPlay style={heroVideoStyle.video}>
          <source src={videoSrc} type={videoType} />
      </video>

    </div>
  )
}
