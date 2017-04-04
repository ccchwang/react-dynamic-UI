import React from 'react';
import hoverRowStyle from '../styles/hoverRow'

export default function HoverRow ({ className, children, style }) {

  const mergedStyle = Object.assign({}, hoverRowStyle.style, style);

  return (
    <div className={className} style={mergedStyle}>
      { children }
    </div>
  )
}
