import React from 'react';

export function withManagement(WrappedComponent) {
  class WithManagement extends React.Component {
    state = {
      value: this.props.value || '',
    };

    onChange = ({ target: { value = null } = {} }) => this.setState({ value });

    render() {
      // const { modalRef, ...restProps } = this.props;

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
