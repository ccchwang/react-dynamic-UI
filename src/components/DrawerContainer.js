import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// import animation from '../animations/jumbotronFadeUp'


export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {openDrawer: false};
    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({openDrawer: !this.state.openDrawer});
  }


  render() {
    // console.log(this.props.children)
    const items = this.state.openDrawer ?
      (<div key='toggle-drawer' className='react-dynamic-drawer'>{this.props.children}</div>)
      : null


    return (
      <div>
        <button style={{marginLeft: '300px'}} onClick={this.toggle}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={450}
          transitionLeaveTimeout={450}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
