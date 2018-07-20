import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import EventCard from '../event-card';

class EventList extends PureComponent {
  render() {
    const { eventsData = [] } = this.props;
    const eventsLength = eventsData.length;

    return (
      <React.Fragment>
        <h3>{eventsLength > 0 ? 'Upcoming Events' : 'No Events'}</h3>
        <div
          className={css`
            max-width: 1252px;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
          `}
        >
          {eventsLength &&
            eventsData.map(
              event => <EventCard key={event.id} event={event} />
            )
          }
        </div>
      </React.Fragment>
    );
  }
}

EventList.propTypes = {
  eventsData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default EventList;
