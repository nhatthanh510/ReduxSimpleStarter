/**
 * Created by admin on 2/25/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { SEARCH, FETCH, fetchVideo, selectVideo, search_term } from '../actions/action_search';


class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchVideo(ReactDOM.findDOMNode(this.refs.termSearch).value);
    }
    render() {
        return (
            <div>
                <form action="" className="input-group search-bar" onSubmit={ (event) => this.onFormSubmit(event)}>
                    <input
                        placeholder="Finding your favorite videos"
                        className="form-control"
                        ref = "termSearch"
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary" >Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchVideo}, dispatch),
        ...bindActionCreators({ selectVideo }, dispatch)
    }

}

export default connect(null, mapDispatchToProps)(SearchBar)