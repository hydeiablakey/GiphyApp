import React, { Component } from 'react'; 


export default class SearchResults extends Component {
	constructor(){
		super();
	}

	render() {
		let { results } = this.props;
		console.log( results );
		const listItems = results.data ? results.data.map( ( item ) => 
			( <li key={`bleh_${Math.random() * (new Date())}`} className='search-results__list-item'>
		 	{ item.title } </li> ) ) : null;

		return (
			<div className='search-results'>
			  <p>Search Results</p>
			  <ul className='search-results__list'>
				{ listItems }
			  </ul>
		    </div>
		)
	}
}