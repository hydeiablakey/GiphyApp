import React, { Component } from 'react'; 


export default class SearchItems extends Component {

	render() {
		return ( 
				<div>
				<p>Search Item: {this.props.searchResults}</p>


				</div>
		)
	}
}