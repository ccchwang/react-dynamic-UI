import React from 'react';
import jumbotronFadeInStyle from '../styles/jumbotronFadeIn'


export default class JumbotronFadeIn extends React.Component {

  createColumns (fadeIn, styledChildren) {
    if (fadeIn === "right") {
      return (
        <div>
          <div style={jumbotronFadeInStyle.column}>
          </div>

          <div style={jumbotronFadeInStyle.column}>
            { styledChildren }
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <div style={jumbotronFadeInStyle.column}>
            { styledChildren }
          </div>

          <div style={jumbotronFadeInStyle.column}>
          </div>
        </div>
      )
    }
  }

  render () {
    //children = whatever user has typed inside tags
    //PUT BACK AUTOPLAY FOR VIDEO

  const { className, children, style, fadeIn } = this.props;

  const styledChildren = children && children.map((child, i) => {
    const fadeStyle = jumbotronFadeInStyle.fadeIn;
    const fadeClass = "fade-in ";

    if (typeof child === "string") {return React.cloneElement(<p>child</p>, {style: fadeStyle, className: fadeClass, key: i})}

    const mergedStyle = Object.assign({}, child.props.style, fadeStyle);
    const ownClassName = child.props.className || ""
    const mergedClassName = fadeClass + ownClassName;

    return React.cloneElement(child, {style: mergedStyle, className: mergedClassName, key: i})
  })

  const mergedStyle = Object.assign({}, style, jumbotronFadeInStyle.style);
  const columns = this.createColumns(fadeIn, styledChildren)


    return (
      <div className={className} style={mergedStyle}>
        { columns }
      </div>
    )
  }

}
