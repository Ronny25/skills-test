import React from 'react';
import { shallow, mount } from 'enzyme';

import AristCard from './artist-card';

describe('<ArtistCard />', function () {

  it('should render EventCard with prop - artistData.name', () => {
    const artistData = {
      image_url: 'image_url',
      facebook_page_url: 'facebook_link',
      name: 'Pentatonix',
    };
    const wrapper = mount(
      <AristCard artistData={artistData} />
    );

    expect(wrapper.props().artistData.name).toEqual('Pentatonix');
  });

  it('should render null', () => {
    const wrapper = shallow(
      <AristCard />
    );

    expect(wrapper.html()).toEqual(null);
  });

});
