/**
 * Created by admin on 2/25/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import VideoDetail from '../components/component_videoDetail'

function mapStateToProps(state) {
    return {
        fetch: state.fetch_reducer
    }
}

export default connect(mapStateToProps)(VideoDetail)