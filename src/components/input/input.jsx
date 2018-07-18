import React, { PureComponent } from 'react';

import { withManagement } from './input-management';

class Input extends PureComponent {
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

export default withManagement(Input);
