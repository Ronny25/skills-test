import React from 'react';
import debounce from 'lodash.debounce';

import cache from '../../utils/cache';
import { fetchHandle } from '../../utils/fetching';
import { appId, baseUrl } from '../../utils/constants';

const threeHours = 1000 * 60 * 60 * 3;

export function withDataFetching(WrappedComponent) {
  class WithDataFetching extends React.Component {
    constructor(props, ctx) {
      super(props, ctx);
      this.state = {
        isLoading: false,
        isLoaded: false,
        artistData: null,
        eventData: null,
      };

      this.onHandleSearch = debounce(this.onHandleSearch.bind(this), 250);
    }

    async onHandleSearch(value) {
      if (value === '') return;

      this.setState({ isLoading: true });
      let cachedValue = cache.get(value);
      if (!cachedValue || new Date().getTime() - cachedValue.date > threeHours) {
        cache.remove(value);

        cachedValue = {
          artistData: await fetchHandle(`${baseUrl}/${value}?app_id=${appId}`),
          eventData: await fetchHandle(`${baseUrl}/${value}/events?app_id=${appId}`),
          date: new Date().getTime(),
        };
        cache.set(value, cachedValue);
      }

      this.setState({
        isLoading: false,
        isLoaded: true,
        artistData: cachedValue.artistData,
        eventData: cachedValue.eventData,
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onHandleSearch={this.onHandleSearch}
        />
      );
    }
  }

  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithDataFetching.displayName = `withDataFetching(${componentName})`;
  return WithDataFetching;
}
