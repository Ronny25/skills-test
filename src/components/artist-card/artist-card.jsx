import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EventCard from '../event-card';

class ArtistCard extends Component {
  render() {
    const { artistData, eventsData } = this.props;
    return (
      <div className="artist-card">
        <div className="artist-image_container">
          <img
            className="artist-image"
            src={artistData.image_url}
            alt={artistData.name}
          />
          <a className="facebook-link" href={artistData.facebook_page_url}>f</a>
          <div className="artist-name-container">
            <h3 className="artist-name">{artistData.name}</h3>
          </div>
        </div>
        <div>
          {eventsData.map(event => <EventCard event={event} />)}
        </div>
      </div>
    );
  }
}

ArtistCard.propTypes = {
  artistData: PropTypes.shape({
    image_url: PropTypes.string,
    facebook_page_url: PropTypes.string,
    name: PropTypes.string,
  }),
  eventsData: PropTypes.arrayOf(PropTypes.shape({}))
};

export default ArtistCard;
