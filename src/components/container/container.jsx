import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withDataFetching } from './data-fetching';
import Input from '../input';
import ArtistCard from '../artist-card';

class Container extends Component {
  render() {
    return (
      <div>
        <div className="input-container">
          <div className="input-inner">
            <Input
              placeholder="What are you looking for?"
              onChange={this.props.onHandleSearch}
            />
          </div>
        </div>
        <div className="card-container">
          {this.props.isLoading && <div>Loading...</div>}
          {this.props.isLoaded &&
            <ArtistCard
              artistData={this.props.artistData}
              eventsData={this.props.eventsData}
            />
          }
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  artistData: PropTypes.shape({}),
  eventsData: PropTypes.arrayOf(
    PropTypes.shape({})
  ),
};

export default withDataFetching(Container);
