/**
 * Created by admin on 2/25/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchVideo } from '../actions/action_search';
import VideoListItem from '../containers/video_list_item'

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchVideo('son tung');
    }
    render() {
        if (!this.props.fetch) {
            return <div>Loading....</div>
        }
        debugger
        return (
            <div>
                <ul className="col-md-4 list-group">
                    {this.props.fetch.items.map(video => {
                        return <li>{video.etag}</li>
                    })}
                </ul>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        videos : state.search_reducer,
        fetch: state.fetch_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);