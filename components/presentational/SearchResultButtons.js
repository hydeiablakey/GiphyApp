import React, { Component } from 'react'; 

export default class SearchResultButtons extends Component {

	render() {
		return (
			<div className='search-results-buttons'>
			<button className="LoadBtn" onClick={this.props.handleLoader} type="submit">More GIFS &#43;</button>
				<div className="BacktoTopBtn"> 
					<a href="#top" className="textBackToTop" type="submit">Back to Top &#9652;</a>
				</div>
		 	</div>
		)
	}

}
