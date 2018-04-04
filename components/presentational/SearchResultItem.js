import React, { Component } from 'react'; 
import SearchResultLoader from './SearchResultLoader';



export default class SearchResultItem extends Component {
	render() {
		return (
			<div className='search-results__list-item'>
				<img src={`${ this.props.imageSrc }`} />
		 	</div>
		)
	}
}
