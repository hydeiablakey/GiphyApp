import React, { Component } from 'react'; 



export default class SearchResultItem extends Component {
	render() {
				/* Possible loading screen for loading images..
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
