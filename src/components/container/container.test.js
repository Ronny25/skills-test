import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Container from './container';
import LoadingSpinner from '../loading-spinner';

describe('<Container />', function () {

  it('should renders correctly', () => {
    const tree = renderer
      .create(<Container />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render LoadingSpinner', () => {
    const wrapper = mount(
      <Container isLoading />
    );

    wrapper.setState({ isLoading: true });

    expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  });

});
