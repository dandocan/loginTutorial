import React, { Component } from 'react';

class App extends Component {  
  render() {
    return (
      <div>
      <p>Header here</p>

      <div className="container">
        {this.props.children} {/* where routed components will be placed */}
      </div>

      <p>Footer here</p>
      </div>
    );
  }
}

export default App;  