import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

export default class App extends Component {

    state = {
        keyword: '',
        images: [],
        page: 1,
        per_page: 5,
    };

    handleKeyword = (word) => {
        this.setState({ keyword: word });
    }

    onSubmit = async (word) => {
        const response = await unsplash.get('search/photos', {
            params: { 
                query: this.state.keyword,
                page: this.state.page,
                per_page: this.state.per_page

            }
        });
        this.setState({ images: response.data.results });
    };

    onSubmit_next = async () => {
        const response_next = await unsplash.get('search/photos', {
            params: { 
                query: this.state.keyword,
                page: this.state.page ++,
                per_page: this.state.per_page

            }
            
        });
        console.log(this.state.page);
        this.setState({ images: response_next.data.results });
    }
   
    onSubmit_before = async () => {
        const response_next = await unsplash.get('search/photos', {
            params: { 
                query: this.state.keyword,
                page: this.state.page --,
                per_page: this.state.per_page

            }
            
        });
        console.log(this.state.page);
        this.setState({ images: response_next.data.results });
    }
   

    render() {
        return (
            <div className="ui container">
                <SearchBar handleKeyword={this.handleKeyword} onSubmit={this.onSubmit} onSubmit_next={this.onSubmit_next} onSubmit_before={this.onSubmit_before} page={this.state.page} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
