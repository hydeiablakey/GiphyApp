import React, { Component } from 'react'; 
import SearchResultLoader from './SearchResultLoader';



export default class SearchResultItem extends Component {

	render() {
				/*
			 	if ( !this.props.imageSrc) {
			 		<p> "Loading..";</p>
			 	}
			 	*/

		return (
			<div className='search-results__list-item'>

				<img src={`${ this.props.imageSrc }`} />


		 	</div>
		)
	}

}
