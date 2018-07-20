import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import OnVisible from 'react-on-visible';

const EventCard = (props) => {
  const { event = {} } = props;
  const {
    id,
    datetime,
    venue: { name, city, country } = {}
  } = event;

  return (
    <OnVisible
      className={css`
        max-width: 230px;
        margin: 10px;
        padding: 15px 10px;
        flex: 1 0 auto;
        border-radius: 4px;

        &:hover {
          box-shadow: 0 2px 9px #666;
        }

        &.visible div {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `}
      percent={20}
      key={id}
    >
      <div
        data-idx={`card-${id}`}
        className={css`
          opacity: 0;
          transition: all 700ms ease-in-out;
          transform: translate3d(0, 50px, 0) scale(.5);
        `}
      >
        <div
          className={css`
            padding: 10px;
            font-weight: bold;

            p {
              margin: 0;
            }
          `}
        >
          <p>{name}</p>
        </div>
        <hr/>
        <div
          className={css`
            text-align: left;
            .event-info {
              margin: 10px 10px 0;
            }

            .event-date {
              font-size: 14px;
              color: #666;
            }
          `}
        >
          {datetime &&
            <div className="event-info event-date">
              <span>Date: {new Date(datetime).toLocaleString()}</span>
            </div>
          }
          {city &&
            <div className="event-info">
              <span>City: {city}</span>
            </div>
          }
          {country &&
            <div className="event-info">
              <span>Country: {country}</span>
            </div>
          }
        </div>
      </div>
    </OnVisible>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    datetime: PropTypes.string,
    venue: PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
    }),
  }),
};

export default EventCard;
