/**
 * Created by admin on 2/25/2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { SEARCH, FETCH, fetchVideo, search_term } from '../actions/action_search';


class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchVideo('Son Tung');
    }
    render() {
        return (
            <div>
                <form action="" className="input-group search-bar" onSubmit={ (event) => this.onFormSubmit(event)}>
                    <input
                        placeholder="Finding your favorite videos"
                        className="form-control"
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}



export default SearchBar