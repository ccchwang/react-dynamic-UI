import React from 'react';
import drawerStyle from '../styles/drawer';

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
    const { children, style, hoverStyle } = this.props;
    const mergedStyle = Object.assign({}, drawerStyle.menuItem, style);
    const mergedHoverStyle = Object.assign({}, drawerStyle.menuItemHover, hoverStyle);

    return (
      <div
        style={this.state.isHover ? mergedHoverStyle : mergedStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </div>)
  }

}
