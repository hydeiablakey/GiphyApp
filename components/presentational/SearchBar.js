import React, {Component} from 'react'; 


export default class SearchBar extends Component {
	render() {
		return (
			<div className="containerSearchBar">
			   <form onSubmit={ this.props.handleSearch } className="formSearchBar">
			   		<input className="searchBar" placeholder="Search GIFS Here" type="text"/>
					<button className="buttonSearchBar" type="submit"><i className="text fab fa-searchengin"></i></button>
			   </form>
			</div>
		)
	}

}
