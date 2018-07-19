import React from 'react';
import { mount } from 'enzyme';

import EventCard from './event-card';

describe('<EventCard />', function () {

  it('should render EventCard with prop - venue.city', () => {
    const event = {
      datetime: new Date().toString(),
      venue: {
        name: 'Event',
        city: 'Berlin',
        country: 'Germany',
      }
    };
    const wrapper = mount(
      <EventCard event={event} />
    );

    expect(wrapper.props().event.venue.city).toEqual('Berlin');
  });

});

