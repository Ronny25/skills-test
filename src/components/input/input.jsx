import React, { PureComponent } from 'react';

import { withManagement } from './input-management';

class Input extends PureComponent {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <input
          className="input"
          type="text"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <button
          className="btn-clear"
          onClick={() => this.props.onChange('')}
        >
          x
        </button>
      </div>
    );
  }
}

export default withManagement(Input);
