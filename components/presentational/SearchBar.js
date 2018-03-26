import React, {Component} from 'react'; 


export default class SearchBar extends Component {

	render() {

		return (
			<div className="containerSearchBar">
			   <form className="formSearchBar">
			   		<input className="searchBar" onChange={ this.props.handleSearch} placeholder="Search GIFS Here" type="text"/>
						<button className="buttonSearchBar" onClick={ this.props.handleSearch } type="submit">Search</button>
			   </form>
			</div>
		)
	}




}



