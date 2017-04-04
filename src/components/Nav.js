import React from 'react';
import navbarStyle from '../styles/navbar'


export default function Nav ({children, style, className, pullRight}) {

  const mergedStyle = pullRight ?
                      Object.assign({justifyContent: 'flex-end'}, navbarStyle.column, style)
                    : Object.assign({}, navbarStyle.column, style);

  return (
    <div className={className} style={mergedStyle}>
      { children }
    </div>
    )
}

