import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import drawerStyle from '../styles/drawer'
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
    let drawer;
    let backdrop;

    if (this.state.openDrawer) {
      drawer = <div key='toggle-drawer' className='react-dynamic-drawer'>{this.props.children}</div>

      backdrop = <div style={drawerStyle.backdrop} onClick={this.toggle} />
    }


    return (
      <div>

        <button style={{marginLeft: '300px'}} onClick={this.toggle}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="drawer"
          transitionEnterTimeout={450}
          transitionLeaveTimeout={450}>
          {drawer}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="backdrop"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {backdrop}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
