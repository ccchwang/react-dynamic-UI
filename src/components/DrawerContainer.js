import React from 'react';
import drawerStyle from '../styles/drawer'
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
    const items = this.state.openDrawer ? (<div key='toggle-drawer' className='react-dynamic-drawer'/>) : null


    return (
      <div>
        <button style={{marginLeft: '300px'}} onClick={this.toggle}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
