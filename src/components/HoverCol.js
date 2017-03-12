import React from 'react';
import hoverColStyle from '../styles/hoverCol'
// import animation from '../animations/jumbotron'


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
    const { className, style, size, imgSrc, children } = this.props;
    let mergedStyle = Object.assign({}, style, hoverColStyle.column);

    if (this.state.isHover) {mergedStyle = Object.assign({}, mergedStyle, hoverColStyle.hoverStyle)}

    return (
      <div
        className={className}
        style={mergedStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={imgSrc} style={hoverColStyle.imgStyle} />
        <div style={{position: 'absolute', top: '0'}}>
        { children }
        </div>
      </div>
    )
  }
}
