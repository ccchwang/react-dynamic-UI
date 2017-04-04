import React from 'react';
import hoverColStyle from '../styles/hoverCol'

export default class HoverCol extends React.Component {
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

  render() {
    const { className, style, imgSrc, children } = this.props;
    let mergedStyle = Object.assign({}, hoverColStyle.column, style);
    let imgStyle = hoverColStyle.imgStyle

    if (this.state.isHover) {imgStyle = Object.assign({}, imgStyle, hoverColStyle.hoverStyle)}

    return (
      <div
        className={className}
        style={mergedStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={imgSrc} style={imgStyle} />
        <div style={{position: 'absolute', top: '0'}}>
        { children }
        </div>
      </div>
    )
  }
}
