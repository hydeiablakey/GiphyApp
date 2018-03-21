import React, {Component} from 'react'; 


export default class SearchBar extends Component {

	render() {

		console.log("hey there");
		return (
			<div className="containerSearchBar">
			   <form onSubmit={ this.props.handleSearch } className="formSearchBar">
			   		<input className="searchBar" placeholder="Search GIFS Here" type="text"/>
					<button className="buttonSearchBar" value="Search" type="submit">Search</button>
			   </form>
			</div>
		)
	}
}



