import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import cache from '../../utils/cache';
import { fetchHandle } from '../../utils/fetching';
import { appId, baseUrl } from '../../utils/constants';

const threeHours = 1000 * 60 * 60 * 3;

export function withDataFetching(WrappedComponent) {
  class WithDataFetching extends Component {
    constructor(props, ctx) {
      super(props, ctx);
      this.state = {
        isLoading: false,
        isLoaded: false,
        artistData: null,
        eventsData: null,
      };

      this.onHandleSearch = debounce(this.onHandleSearch.bind(this), 250);
    }

    async onHandleSearch(value) {
      if (value === '') {
        if (!this.state.artistData) return;
        return this.setState({
          artistData: null,
          eventsData: null,
        });
      }

      this.setState({ isLoading: true });
      let cachedValue = cache.get(value);
      if (!cachedValue || new Date().getTime() - cachedValue.date > threeHours) {
        cache.remove(value);

        cachedValue = {
          artistData: await fetchHandle(`${baseUrl}/${value}?app_id=${appId}`),
          eventsData: await fetchHandle(`${baseUrl}/${value}/events?app_id=${appId}`),
          date: new Date().getTime(),
        };
        cache.set(value, cachedValue);
      }

      this.setState({
        isLoading: false,
        isLoaded: !!cachedValue.artistData && !!cachedValue.eventsData,
        artistData: cachedValue.artistData,
        eventsData: cachedValue.eventsData,
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
