import React, { Component } from 'react';

// import { withManagement } from './input-management';

class Input extends Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
