import React from 'react';
import buttonStyle from '../styles/button'
//import Drawer from './Drawer'



export default class Button extends React.Component {


  toggleDrawer() {
    Drawer.setState({openDrawer: !this.state.openDrawer}).bind(Drawer)
  }

  render () {

    return (<button style={buttonStyle}>HELddLO</button>)
  }

}
