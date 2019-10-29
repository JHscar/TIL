import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        before: false,
    }

    onChange = e => {
        this.props.handleKeyword(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit();
    }

    onSubmit_next = e => {
        e.preventDefault();
        this.props.onSubmit_next();
        this.setState({ before: true })
    }

    onSubmit_before = e => {
        e.preventDefault();
        this.props.onSubmit_before();
        if(this.props.page === 2) {
            this.setState({ before: false })
        }
    }


    render() {
        if (this.state.before === false) {
            return (
                <div className="ui segment container">
                    <form className="ui form" onSubmit={this.onSubmit}>
                        <label htmlFor="keyword">Search in Eng!</label>
                        <input type="text" id="keyword" onChange={this.onChange} />
                        <input type="button" value="next" onClick={this.onSubmit_next} />

                    </form>
                </div>
            )
        }
        return (
            <div className="ui segment container">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <label htmlFor="keyword">Search in Eng!</label>
                    <input type="text" id="keyword" onChange={this.onChange} />
                    <input type="button" value="next" onClick={this.onSubmit_next} />
                    <input type="button" value="before" onClick={this.onSubmit_before} />
                </form>
            </div>
        )

    }
}
