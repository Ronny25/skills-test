import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from './input';

describe('<Input />', function () {

  it('should render Input with value and placeholder', () => {
    const wrapper = shallow(
      <Input value="test" placeholder="Name" />
    );

    expect(wrapper.prop('value')).toEqual('test');
    expect(wrapper.prop('placeholder')).toEqual('Name');
  });

  it('should pass value to the onChange handler', () => {
    const value = '2';
    const onChange = jest.fn();
    const wrapper = mount(
      <Input onChange={onChange} />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').simulate('change', {
      target: { value },
    });

    expect(onChange).toBeCalledWith(value);
  });

  it('should pass value from management decorator state to Input', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Input onChange={onChange} />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setState({
      value: 'Dmytro'
    });

    expect(wrapper.find('input').props().value).toEqual('Dmytro');
  });

});

