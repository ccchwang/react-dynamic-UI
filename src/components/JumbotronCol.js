import React from 'react';
import jumbotronStyle from '../styles/jumbotron'
// import animation from '../animations/jumbotronFadeUp'


export default class JumbotronCol extends React.Component {

  render () {
    const { className, children, style, fadeEffect } = this.props;
    const childrenArray = !children.length ? [children] : children;
    const mergedStyle = Object.assign({}, style, jumbotronStyle.column);

    const fadeStyle = jumbotronStyle[fadeEffect];
    const fadeClass = fadeEffect + " ";

    const styledChildren = childrenArray && childrenArray.map((child, i) => {
      if (typeof child === "string") {return React.cloneElement(<p>child</p>, {style: fadeStyle, className: fadeClass, key: i})}

      const mergedStyle = Object.assign({}, child.props.style, fadeStyle);
      const ownClassName = child.props.className || ""
      const mergedClassName = fadeClass + ownClassName;

      return React.cloneElement(child, {style: mergedStyle, className: mergedClassName, key: i})
    })

    return (
      <div className={className} style={mergedStyle}>
        { styledChildren }
      </div>
    )
  }

}


// <div className="fullscreen-bg">
//             <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
//                 <source src="video/big_buck_bunny.mp4" type="video/mp4" />
//             </video>
//         </div>
