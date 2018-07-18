import React from 'react';

export function withManagement(WrappedComponent) {
  class WithManagement extends React.Component {
    state = {
      value: this.props.value || '',
    };

    onChange = (data) => {
      const value = typeof data === 'string'
        ? data
        : data.target.value;

      if (this.props.onChange) this.props.onChange(value);
      if (this.state.value !== value) this.setState({ value });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onChange={this.onChange}
          value={this.state.value}
        />
      );
    }
  }

  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithManagement.displayName = `WithManagement(${componentName})`;
  return WithManagement;
}
