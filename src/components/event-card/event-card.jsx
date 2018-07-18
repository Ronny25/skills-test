import React, { Component } from 'react';

class EventCard extends Component {
  render() {
    return (
      <div>
        Event {this.props.event.venue.name}
      </div>
    );
  }
}

export default EventCard;
