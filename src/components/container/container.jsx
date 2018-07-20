import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Loadable from 'react-loadable';

import { withDataFetching } from './data-fetching';
import LoadingSpinner from '../loading-spinner';
import Input from '../input';

const LoadableArtistCard = Loadable({
  loader: () => import('../artist-card'),
  loading: () => null
});
const LoadableEventList = Loadable({
  loader: () => import('../event-list'),
  loading: () => null
});

const Container = ({
  onHandleSearch,
  isLoading,
  isLoaded,
  artistData,
  eventsData,
}) => {
  if (isLoading) {
    LoadableArtistCard.preload();
    LoadableEventList.preload();
  }

  return (
    <div>
      <div
        className={css`
          font-weight: 300;
          background: #445257;
          position: sticky;
          top: 0;
          z-index: 1;
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
            <LoadableArtistCard artistData={artistData} />
            {Array.isArray(eventsData) &&
              <LoadableEventList eventsData={eventsData} />
            }
          </React.Fragment>
        }
      </div>
    </div>
  );
};

Container.propTypes = {
  onHandleSearch: PropTypes.func,
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  artistData: PropTypes.shape({}),
  eventsData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default withDataFetching(Container);
