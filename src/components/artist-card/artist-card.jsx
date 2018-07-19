import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

class ArtistCard extends PureComponent {
  render() {
    const { artistData } = this.props;
    if (!artistData) return null;

    return (
      <div
        className={css`
          max-width: 720px;
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            min-height: 500px;
            max-height: 500px;
            position: relative;
            overflow: hidden;

            @media (max-width: 720px) {
              min-height: 85vw;
              max-height: 85vw;
            }
          `}
        >
          <img
            className={css`
              max-width: 100%;
              transform: translateY(-15%);
            `}
            src={artistData.image_url}
            alt={artistData.name}
          />
          <a
            className={css`
              width: 50px;
              height: 50px;
              position: absolute;
              top: 0;
              right: 0;
              font-size: 35px;
              line-height: 50px;
              color: #fff;
              text-decoration: none;
              background-color: #4267b2;
              transition: background-color 250ms;
              border-bottom-left-radius: 4px;

              &:hover {
                background-color: #4267b2c7;
              }
            `}
            href={artistData.facebook_page_url}
            rel="nofollow noopener"
          >
            f
          </a>
          <div
            className={css`
              height: 65px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: rgba(255, 255, 255, .5);
            `}
          >
            <h2 className="artist-name">
              {artistData.name}
            </h2>
          </div>
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
};

export default ArtistCard;
