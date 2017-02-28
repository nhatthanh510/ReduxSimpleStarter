/**
 * Created by admin on 2/25/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchVideo, selectVideo } from '../actions/action_search';
import ComponentVideoList from '../components/component_videoList'


function mapStateToProps(state) {
    return {
        videos : state.search_reducer,
        fetch: state.fetch_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchVideo}, dispatch),
        ...bindActionCreators({ selectVideo }, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentVideoList);