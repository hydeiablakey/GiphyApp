import React, { Component } from 'react'; 
import SearchBar from '../presentational/SearchBar';
import SearchResultItem from '../presentational/SearchResultItem';
import SearchResultButtons from '../presentational/SearchResultButtons';



export default class SearchResults extends Component {
	constructor(){
		super();
	}

	render() {
		let { results } = this.props;
		
		// use ternary operation. 
		// Maps to all items in the array for results and passes in a key and imageSrc to the image tag
		// within the SearchResultItem Component. 
		
		const listItems = results.map( ( item ) => (
			<SearchResultItem key={ `fun_${ Math.random() * (new Date()) }` } imageSrc={ item.images.original.url } />
		) );

		return (
			<div className='container-search-results'>
				  <p className="search-title"> Let the GIFS Begin: <b>{this.props.query}</b> </p>
				  <div className='search-results-list'>
					{ listItems }

					{ results.length > 0 ? <SearchResultButtons handleLoader={ this.props.handleLoader } /> : null }
				  </div>
		    </div>
		)
	}
}
