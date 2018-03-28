import React, { Component } from 'react'; 
import SearchBar from '../presentational/SearchBar';



export default class SearchResults extends Component {
	constructor(){
		super();
	}

	render() {
		let { results } = this.props;

		const listItems = results.data ? results.data.map( ( item ) => 
			( <div key={ `fun_${ Math.random() * (new Date()) }` } className='search-results__list-item'>
		 	  <img src={`${ item.images.original.url }`} />
		 	</div> ) ) : null;


		return (
			<div className='container-search-results'>
				  <p className="search-title"> Let the GIFS Begin: <b>{this.props.query}</b> </p>
				  <div className='search-results-list'>
					{ listItems }
				  </div>
		    </div>
		)
	}
}