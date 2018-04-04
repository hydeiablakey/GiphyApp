import React, { Component } from 'react'; 

export default class SearchResultLoader extends Component {

	render() {
		return (
			<div className='search-results-loader'>
			
			<button className="LoadBtn" onClick={this.props.handleLoader} type="submit">Gift me more GIFS &#43;</button>

		 	</div>
		)
	}

}
