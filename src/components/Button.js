import React from 'react';
import buttonStyle from '../styles/button'
//import Drawer from './Drawer'



export default class Button extends React.Component {

  render () {
    const { style, className } = this.props

    const ownStyle = style || {};
    const ownClassName = className;
    const mergedStyle = Object.assign({}, buttonStyle, ownStyle)


    return (<button style={buttonStyle}>{this.props.children}</button>)
  }

}
