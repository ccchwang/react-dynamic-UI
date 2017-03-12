import React from 'react';
import hoverGridStyle from '../styles/hoverGrid'
// import animation from '../animations/jumbotron'


export default class HoverGrid extends React.Component {

  render () {
    //children = whatever user has typed inside tags
    //PUT BACK AUTOPLAY FOR VIDEO

  const { className, children, style } = this.props;

  // const styledChildren = children && children.map((child, i) => {
  //   const fadeStyle = jumbotronFadeUpStyle.fadeInUp;
  //   const fadeClass = "fade-in-up ";

  //   if (typeof child === "string") {return React.cloneElement(<p>child</p>, {style: fadeStyle, className: fadeClass, key: i})}

  //   const mergedStyle = Object.assign({}, child.props.style, fadeStyle);
  //   const ownClassName = child.props.className || ""
  //   const mergedClassName = fadeClass + ownClassName;

  //   return React.cloneElement(child, {style: mergedStyle, className: mergedClassName, key: i})
  // })

  const mergedStyle = Object.assign({}, hoverGridStyle.style, style);
  //const columns = this.createColumns(fadeIn, styledChildren)


  return (
    <div className={className} style={mergedStyle}>
      { children }

    </div>
  )
}

}


// <div className="fullscreen-bg">
//             <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
//                 <source src="video/big_buck_bunny.mp4" type="video/mp4" />
//             </video>
//         </div>
