import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../presentational/SearchBar';
import SearchResults from './SearchResults';
import './App.less';

const API_KEY = 'UidqL9grHHxhpKkNEj34UYzWGlROX85q';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			results: [],
			searchQuery: "",
			limit: 25,
			offset: 0,
		}
	}

	_handleSearch = ( event ) => {
		event.preventDefault();
		
		// grab the search query
		const searchQuery = event.target.getElementsByTagName('input')[0].value;

		axios.get(`http://api.giphy.com/v1/gifs/search?q=${ searchQuery }&api_key=${ API_KEY }&fmt=json&offset=${ this.state.offset }&limit=${ this.state.limit }`)
			.then( ( res ) => {
				console.log(res);
				this.setState({
					results: this.state.results.concat( res.data.data )  // [].concat(['1', '2', '3'])
				});
			})

		this.setState( {
			searchQuery: searchQuery
		} );
	}

	_handleLoader = ( event ) => {
		event.preventDefault();

		let offset = this.state.offset + this.state.limit;

		axios.get(`http://api.giphy.com/v1/gifs/search?q=${ this.state.searchQuery }&api_key=${ API_KEY }&fmt=json&offset=${ offset }&limit=${ this.state.limit }`)
			.then( ( res ) => {
				this.setState({
					results: this.state.results.concat( res.data.data ) // ['1', '2', '3'].conat(['4', '5', '6'])
				});
			})

		this.setState({
			offset: offset
		});
	}

	render() {
		return (
			<div className="containerApp">
				<SearchBar handleSearch={ this._handleSearch } handleState={ this.state.searchQuery }  />
				<SearchResults handleLoader={ this._handleLoader } results={ this.state.results } query={this.state.searchQuery} />
			</div>
		)
	}
}

