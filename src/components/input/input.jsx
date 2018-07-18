import React, { PureComponent } from 'react';
import { css } from 'emotion';

import { withManagement } from './input-management';

class Input extends PureComponent {
  render() {
    return (
      <input
        className={css`
          width: 100%;
          height: 70px;
          font-size: 25px;
          color: #fff;
          line-height: 70px;
          background-color: transparent;
          border: none;
          appearance: none;
          outline: none;
        `}
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default withManagement(Input);
