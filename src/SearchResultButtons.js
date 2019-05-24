import React, { Component } from 'react'; 
import Button from '@material-ui/core/Button';

export default class SearchResultButtons extends Component {

	render() {
		return (
			<div className='search-results-buttons'>
				<Button variant="contained" color="primary" className="LoadBtn" onClick={this.props.handleLoader} type="submit">More GIFS &#43;</Button>
				<Button variant="contained" color="primary" className="BacktoTopBtn"> 
					<a href="#top" className="textBackToTop" type="submit">Back to Top</a>
				</Button>
		 	</div>
		)
	}

}
