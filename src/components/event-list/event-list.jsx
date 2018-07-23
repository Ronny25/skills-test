import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

class EventList extends PureComponent {
  render() {
    const { eventsData = [], children } = this.props;
    const eventsEnabled = eventsData.length > 0;

    return (
      <React.Fragment>
        <h3>{eventsEnabled ? 'Upcoming Events' : 'No Events'}</h3>
        {eventsEnabled &&
          <div
            className={css`
              max-width: 1252px;
              margin: 0 auto;
              display: flex;
              justify-content: space-evenly;
              flex-wrap: wrap;
            `}
          >
            {eventsData.map(children)}
          </div>
        }
      </React.Fragment>
    );
  }
}

EventList.propTypes = {
  children: PropTypes.func.isRequired,
  eventsData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default EventList;
