/**
 * Created by admin on 2/25/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../containers/video_list_item'

const VideoList = ( {videos, onVideoSelect} ) => {
    const videoList = videos.map( video => {
        return (
            <VideoListItem
                key = {video.etag} video = {video} onVideoSelect = {onVideoSelect}
            />
        )
    } );

    return (
        <div>
            <ul className="col-md-4 list-group">
                {videoList}
            </ul>
        </div>
    )
};
export default VideoList;