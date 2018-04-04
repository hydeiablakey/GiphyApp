import React, { Component } from 'react'; 




export default class SearchResultItem extends Component {
	render() {
		return (
			<div className='search-results__list-item'>
				<img src={`${ this.props.imageSrc }`} />
		 	</div>
		)
	}
}
