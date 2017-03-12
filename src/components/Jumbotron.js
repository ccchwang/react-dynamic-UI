import React from 'react';
import jumbotronStyle from '../styles/jumbotron'
// import animation from '../animations/jumbotronFadeUp'


export default class Jumbotron extends React.Component {

  render () {
    const { className, children, style } = this.props;
    const mergedStyle = Object.assign({}, jumbotronStyle.style, style);

    return (
      <div className={className} style={mergedStyle}>
        { children }
      </div>
    )
  }

}
