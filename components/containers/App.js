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

	/* _handleRequest
	 1. Takes in three parameters for query, offset, and newQuery. 
	 		Query = the value of searchQuery within _handleSearch
	 		Offset = the value of offset within _handleLoader
	 		newQuery = the value of true or false when searchQuery is not equal to it's state representation.
	 2. Performs a get request to the GIPHY API that expects a query, (_handleSearch), offset (_handleLoader) and the limit.
	 3. It checks if a newQuery is being made compared to the last query. 
	 				A. If there is a newQuery being made, refresh the page and provide new search results. 
	 				B. If there is not a newQuery being made, don't refresh the page with new results but add onto the current list. 
	*/

	_handleRequest = ( query, offset, newQuery ) => {
	axios.get(`http://api.giphy.com/v1/gifs/search?q=${ query }&api_key=${ API_KEY }&fmt=json&offset=${ offset }&limit=${ this.state.limit }`)
		.then( ( res ) => {
			if (newQuery) {
				this.setState({
				results: res.data.data // [].concat(['1', '2', '3']) //
				});

			} else {
				this.setState({
				results: this.state.results.concat(res.data.data)
				})
			}

		}) 
	}

/* _handleSearch
1. Takes in an event parameter that is checking for the value of the input for the search bar and setting it equal to
		searchQuery. 
2. Passes in searchQuery, the current state of offset at the time of entering a keyword into the input (offset=0), 
	 and passes in "searchQuery(user input) is not equal to this.state.searchQuery(state = "") to _handleRequest. 
3. Changes the state from the empty string to the value of the input. 
*/

	_handleSearch = ( event ) => {
		event.preventDefault();
		
		// grab the search query
		const searchQuery = event.target.getElementsByTagName('input')[0].value;

		this._handleRequest( searchQuery, this.state.offset, searchQuery !== this.state.searchQuery );
		//searchQuery !== this.state.searchQuery, (if the searchInput is not equal to the current state  -> "")

		this.setState( {
			searchQuery: searchQuery
		} );
	}

/*_handleLoader
 1. Creates the value offset and sets it equal to the sum of the current state of offset(the first time = 0) and 
 		limit(stays at 25). 
 		- Offset(pagination) will change everytime that the _handleLoader/LoadMore button is pressed. 25, 50, 75.. 
 2. Passes in the state of searchQuery(which is the value of the user input) and the offset value to _handleRequest
 3. Takes the offset and sets the state for offset. 
*/
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

