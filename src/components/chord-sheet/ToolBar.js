import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <button onClick={this.props.addChord}>Add Chord</button>
      </div>
    )
  }
}

export default ToolBar
