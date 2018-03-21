import React, { Component } from 'react'; 


export default class SearchItems extends Component {
	constructor() {
		super();

		this.state = { 
		searchResults: ""
		}
	}
	_handleUpdates = (event) => { 

		this.setState({searchResults: event.target.value})
	}
	render() {
		return ( 
				<div>
				<p>{this.state.searchResults}</p>


				</div>
		)
	}
}