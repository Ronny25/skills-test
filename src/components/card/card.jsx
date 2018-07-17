import React, { Component } from 'react';
// import Promise from 'promise';

import Input from '../input';

const Test = (props) => {
  // console.log('Test props', props);
  return <div>Test</div>;
};

const cache = {};

class Card extends Component {
  state = {
    inputValue: '',
    isLoading: false,
    isLoaded: false,
    artistData: null
  };

  onInputChange = ({ target: { value = null } = {} }) => {
    this.onHandleSearch(value);
    this.setState({ inputValue: value });
  };

  async onHandleSearch(value) {
    if (value === '') return;

    const baseUrl = 'https://rest.bandsintown.com/artists';
    const appId = 'dkotkin';

    let artistData = null;
    let eventData = null;
    if (cache[value]) {
      artistData = cache[value].artistData;
      eventData = cache[value].eventData;
    } else {
      artistData = await this.onHandleCall(`${baseUrl}/${value}?app_id=${appId}`);
      eventData = await this.onHandleCall(`${baseUrl}/${value}/events?app_id=${appId}`);
      cache[value] = {};
      cache[value].artistData = artistData;
      cache[value].eventData = eventData;
    }

    this.setState({
      isLoading: false,
      isLoaded: true,
      artistData,
      eventData,
    });
  }

  onHandleCall(url) {
    return fetch(url)
      .then(res => res.json())
      .catch(e => console.log('Error!!! ', e));
  }

  render() {
    return (
      <div>
        <Input
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}
        />
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.isLoaded &&
          <Test
            artistData={this.state.artistData}
            eventData={this.state.eventData}
          />
        }
      </div>
    );
  }
}

export default Card;
