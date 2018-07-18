import React from 'react';

export function withManagement(WrappedComponent) {
  class WithManagement extends React.Component {
    state = {
      value: this.props.value || '',
    };

    onChange = ({ target: { value = null } = {} }) => {
      if (this.props.onChange) this.props.onChange(value);
      this.setState({ value });
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
