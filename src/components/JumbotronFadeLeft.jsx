import React from 'react';
import jumbotronFadeUpStyle from '../styles/jumbotronFadeUp'
import animation from '../animations/jumbotron'


export default class JumbotronFadeUp extends React.Component {


  render () {


    //children = whatever user has typed inside tags
    //PUT BACK AUTOPLAY FOR VIDEO

    const { leftImage, rightText, className, children, style } = this.props

    const styledChildren = children && children.map((child, i) => {
      const style = Object.assign({}, child.props.style, jumbotronFadeUpStyle.fadeInUp);
      const ownClassName = child.props.className || ""
      const className = "fade-in-up " + ownClassName;
      return React.cloneElement(child, {style, className, key: i})
    })

  const mergedStyle = Object.assign({}, style, jumbotronFadeUpStyle.style);

    return (
      <div className={className} style={mergedStyle}>
        <div style={jumbotronFadeUpStyle.column}>
        </div>

        <div style={jumbotronFadeUpStyle.column}>
          { styledChildren }
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
