import React from 'react';
import renderer from 'react-test-renderer';

import LoadingSpinner from './loading-spinner';

describe('<LoadingSpinner />', function () {

  it('should renders correctly', () => {
    const tree = renderer
      .create(<LoadingSpinner />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
