import React from 'react';
import navbarStyle from '../styles/navbar'


export default class NavItem extends React.Component {
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
    const { children, style, className } = this.props;

    const mergedStyle = this.state.isHover
                      ? Object.assign({}, navbarStyle.itemHover, style)
                      : Object.assign({}, navbarStyle.item, style);

    return (
      <div
        style={mergedStyle}
        className={className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </div>)
  }
}
