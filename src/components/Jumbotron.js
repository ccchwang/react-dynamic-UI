import React from 'react';
import jumbotronStyle from '../styles/jumbotron'

export default function Jumbotron ({ className, children, style }) {

  const mergedStyle = Object.assign({}, jumbotronStyle.style, style);

  return (
    <div className={className} style={mergedStyle}>
      { children }
    </div>
  )
}
