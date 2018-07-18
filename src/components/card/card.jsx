import React, { Component } from 'react';

import { withDataFetching } from './data-fetching';
import Input from '../input';

const Test = (props) => {
  // console.log('Test props', props);
  return <div>Test</div>;
};

class Card extends Component {
  render() {
    return (
      <div>
        <Input onChange={this.props.onHandleSearch} />
        {this.props.isLoading && <div>Loading...</div>}
        {this.props.isLoaded &&
          <Test
            artistData={this.props.artistData}
            eventData={this.props.eventData}
          />
        }
      </div>
    );
  }
}

export default withDataFetching(Card);
