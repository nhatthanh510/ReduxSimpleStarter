/**
 * Created by admin on 2/28/2017.
 */
import React, { Component } from 'react';

import VideoListItem from '../containers/video_list_item'

class ComponentVideoList extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.props.fetchVideo('son tung');
    }
    render() {
        console.log(this.props)
        if (Object.keys(this.props.fetch).length == 0) {
            return <div>Loading....</div>
        }
        console.log('fetch : ' + this.props.fetch);
        console.log(this.props.fetch)
        return (
            <div>
                <ul className="col-md-4 list-group">
                    {this.props.fetch.videoData.map(video => {
                        return (
                          <VideoListItem key={video.etag} video = {video} onSelectVideo = {this.props.selectVideo} />
                        )
                    })}
                </ul>
            </div>
        )
    }
};

export default ComponentVideoList;