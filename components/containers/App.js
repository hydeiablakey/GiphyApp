import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../presentational/SearchBar';
import SearchItems from '../presentational/SearchItems';
import SearchResults from './SearchResults';
import './App.less';


export default class App extends Component {
	constructor() {
		super();

		this.state = {
			results: [],
			searchQuery: ""
		}
	}


	_handleSearch = ( event ) => {
		event.preventDefault();
		
		const searchQuery = event.target.getElementsByTagName('input')[0].value;
		console.log("SearchQuery from handleSearch: ", searchQuery);
		this.setState({
			searchQuery: searchQuery
		})

		axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=UidqL9grHHxhpKkNEj34UYzWGlROX85q&fmt=json`)
		  .then( ( res ) => {
		  	console.log(res);
		  	this.setState({
		  		results: res.data
		  	});
		  })

		  console.log(this.state.results);
	}



	// _handleInput = ( event ) => {

	// 	const searchQuery = event.target.value;

	// 	this.setState({
	// 		searchQuery: searchQuery 
	// 	});

	// 	this._handleSearch(searchQuery);
	// }


	render() {
		return (
			<div className="containerApp">
				<SearchBar handleSearch={ this._handleSearch } handleState={this.state.searchQuery}  />
				<SearchResults results={ this.state.results } query={this.state.searchQuery} />
			</div>
		)
	}
}

