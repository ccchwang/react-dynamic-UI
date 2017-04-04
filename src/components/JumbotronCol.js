import React from 'react';
import jumbotronStyle from '../styles/jumbotron'

export default function JumbotronCol ({ className, children, style, fadeEffect }) {
  const mergedColumnStyle = Object.assign({},
    jumbotronStyle.column.all,
    jumbotronStyle.column[fadeEffect],
    style
  );
  const fadeStyle = jumbotronStyle[fadeEffect];
  const fadeClass = fadeEffect ? fadeEffect + " " : "";

  if (!children) {return <div style={mergedColumnStyle} />}

  const childrenArray = !children.length || typeof children === "string"
                      ? [children]
                      : children;

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
