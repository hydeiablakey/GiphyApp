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

	_handleRequest = ( query, offset ) => {
		axios.get(`http://api.giphy.com/v1/gifs/search?q=${ query }&api_key=${ API_KEY }&fmt=json&offset=${ offset }&limit=${ this.state.limit }`)
			.then( ( res ) => {
				this.setState({
					results: this.state.results.concat( res.data.data )  // [].concat(['1', '2', '3']) // an array instead of object
				});
			})
	} 

	_handleSearch = ( event ) => {
		event.preventDefault();
		
		// grab the search query
		const searchQuery = event.target.getElementsByTagName('input')[0].value;

		this._handleRequest( searchQuery, this.state.offset );

		this.setState( {
			searchQuery: searchQuery
		} );
	}

	_handleLoader = ( event ) => {
		event.preventDefault();

		let offset = this.state.offset + this.state.limit;

		this._handleRequest( this.state.searchQuery, offset );

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

