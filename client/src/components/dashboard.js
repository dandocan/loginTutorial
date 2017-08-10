import React, { Component } from 'react';
// connects component to redux store  
import { connect } from 'react-redux';  
import * as actions from '../actions';

class Dashboard extends Component {
//   accesses protectedTest function upon calling the component  
  constructor(props) {
    super(props);

    this.props.protectedTest();
  }

  renderContent() {
    if(this.props.content) {
      return (
        <p>{this.props.content}</p>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}
// subscribes component to state updates
function mapStateToProps(state) {  
  return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(Dashboard);