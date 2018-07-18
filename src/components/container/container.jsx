import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { withDataFetching } from './data-fetching';
import LoadingSpinner from '../loading-spinner';
import Input from '../input';
import ArtistCard from '../artist-card';
import EventCard from '../event-card';

const Container = ({
  onHandleSearch,
  isLoading,
  isLoaded,
  artistData,
  eventsData,
}) => (
  <div>
    <div
      className={css`
        font-weight: 300;
        background: #445257;
      `}
    >
      <div
        className={css`
          height: 70px;
          max-width: 1252px;
          margin: 0 auto;
          padding: 0 5%;
        `}
      >
        <Input
          placeholder="What are you looking for?"
          onChange={onHandleSearch}
        />
      </div>
    </div>
    <div
      className={css`
        min-height: 500px;
        position: relative;
      `}
    >
      {isLoading && <LoadingSpinner />}
      {isLoaded &&
        <React.Fragment>
          <ArtistCard artistData={artistData} />
          {eventsData &&
            <React.Fragment>
              <h3>Upcoming Events</h3>
              <div
                className={css`
                  max-width: 1252px;
                  margin: 0 auto;
                  display: flex;
                  justify-content: space-evenly;
                  flex-wrap: wrap;
                `}
              >
                {eventsData.map(event => <EventCard key={event.id} event={event} />)}
              </div>
            </React.Fragment>
          }
        </React.Fragment>
      }
    </div>
  </div>
);

Container.propTypes = {
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  artistData: PropTypes.shape({}),
  eventsData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default withDataFetching(Container);
