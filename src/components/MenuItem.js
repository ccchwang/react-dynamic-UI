import React from 'react';
// import buttonStyle from '../styles/button'
//import Drawer from './Drawer'



export default class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = {isHover: false};
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter () {
    this.setState({isHover: true})
  }

  handleMouseLeave () {
    this.setState({isHover: false})
  }

  render () {

    const { children } = this.props;


    return (
      <div
        style={this.state.isHover ? {padding: '20px', cursor: 'pointer', backgroundColor: 'lightgray', transition: '0.3s'} : {padding: '20px', transition: '0.3s'}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </div>)
  }

}
