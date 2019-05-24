import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


export default class SearchBar extends Component {
  render() {
    return (
	<div id="top"className="containerSearchBar">
	<form onSubmit={ this.props.handleSearch } className="formSearchBar">
	<input className="searchBar" placeholder="Search GIFS Here" type="text"/>
	<Button size="small" variant="outlined" type="submit"> <Icon>youtube_searched_for</Icon></Button>
	</form>
	</div>
    )
  }
}
