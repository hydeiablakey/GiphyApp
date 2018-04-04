import React, { Component } from 'react'; 
import SearchBar from '../presentational/SearchBar';
import SearchResultItem from '../presentational/SearchResultItem';
import SearchResultLoader from '../presentational/SearchResultLoader';



export default class SearchResults extends Component {
	constructor(){
		super();
	}


	render() {
		let { results } = this.props;
		
		const listItems = results.map( ( item ) => (
			<SearchResultItem key={ `fun_${ Math.random() * (new Date()) }` } imageSrc={ item.images.original.url } />
		) );

		return (
			<div className='container-search-results'>
				  <p className="search-title"> Let the GIFS Begin: <b>{this.props.query}</b> </p>
				  <div className='search-results-list'>
					{ listItems }

					{ results.length > 0 ? <SearchResultLoader handleLoader={ this.props.handleLoader } /> : null }
				  </div>
		    </div>
		)
	}
}
