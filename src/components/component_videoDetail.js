/**
 * Created by admin on 3/1/2017.
 */
import React, { Component } from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        {
            console.log(this.props.fetch)
            if (Object.keys(this.props.fetch).length == 0) {
               return <div>..</div>;
            }
            const videoId = this.props.fetch.selectedVideo.id.videoId;
            const url = `https://www.youtube.com/embed/${videoId}`;

            return (
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={url} ></iframe>
                    </div>
                    <div className="details">
                        <div>{this.props.fetch.selectedVideo.snippet.title}</div>
                        <div>{this.props.fetch.selectedVideo.snippet.description}</div>
                    </div>
                </div>
            )
        };

    }
}
export default VideoDetail;