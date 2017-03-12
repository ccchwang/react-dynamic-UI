import React from 'react';
import jumbotronStyle from '../styles/jumbotron'
// import animation from '../animations/jumbotronFadeUp'


export default class JumbotronCol extends React.Component {

  render () {
    const { className, children, style, fadeEffect } = this.props;
    const childrenArray = !children.length || typeof children === "string"
                        ? [children]
                        : children;

    const mergedColumnStyle = Object.assign(
      jumbotronStyle.column.all,
      jumbotronStyle.column[fadeEffect],
      style
    );
    const fadeStyle = jumbotronStyle[fadeEffect];
    const fadeClass = fadeEffect ? fadeEffect + " " : "";


    const styledChildren = childrenArray && childrenArray.map((child, i) => {
      if (typeof child === "string") {
        return React.cloneElement(<p>{child}</p>, {style: fadeStyle, className: fadeClass, key: 'strChild'});
      }

      const ownStyle = child.props.style || {};
      const ownClassName = child.props.className || "";

      const mergedStyle = Object.assign({}, fadeStyle, ownStyle);
      const mergedClassName = fadeClass + ownClassName;

      return React.cloneElement(child, {style: mergedStyle, className: mergedClassName, key: i})
      })

    return (
      <div className={className} style={mergedColumnStyle}>
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
