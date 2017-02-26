/**
 * Created by admin on 2/25/2017.
 */
import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : '' };

        this.onTermChange = props.onTermChange;
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
        this.onTermChange(event.target.value);
    }

    onButtonClick(event) {
        event.preventDefault();
        alert('Chưa có event khỏi bấm mấy thím !');
    }

    render() {
        return (
            <div>
                <form action="" className="input-group search-bar">
                    <input
                        placeholder="Finding your favorite videos"
                        className="form-control"
                        value={this.state.term}
                        onChange = { (event) => this.onInputChange(event)}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary" onClick={ (event) => this.onButtonClick(event) }>Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}