import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar  from '../containers/search_bar';
import VideoList from '../containers/video_list'
import VideoDetail from '../containers/video_detail'
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDXwOH4N2WINlYccGOzmWdpSK7JLRTUUKs';

export default class App extends Component {

  constructor(props) {
      super(props);
      this.loadYoutubeData('Lac troi');
  }

  loadYoutubeData(term) {
      YTSearch({
          key : API_KEY,
          term: term
      }, (videos) => {
      })
  }

  render() {
    const videoSearch = _.debounce( (term) => {this.loadYoutubeData(term)}, 400 );
    return (
      <div>
          <SearchBar/>
          <VideoDetail/>
          <VideoList/>
      </div>
    );
  }
}
