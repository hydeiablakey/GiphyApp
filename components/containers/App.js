import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../presentational/SearchBar';
import SearchItems from '../presentational/SearchItems';
import SearchResults from './SearchResults';
import './App.less';


export default class App extends Component {
	constructor(){
		super();

		this.state = {
			results: {}
		}
	}

	_handleSearch = (e) => {
		console.log(e.target);
		e.preventDefault();
	}

	componentDidMount() {
		// fetch giphy data
		axios.get('http://api.giphy.com/v1/gifs/search?q=cheeseburger&api_key=UidqL9grHHxhpKkNEj34UYzWGlROX85q&fmt=json')
		  .then( ( res ) => {
		  	this.setState({
		  		results: res.data
		  	});
		  } )
	}

	render() {
		return (
			<div className="containerApp">
				<SearchBar handleSearch={ this._handleSearch } />
				<SearchItems />
				<SearchResults results={ this.state.results } />
			</div>
		)
	}
}

