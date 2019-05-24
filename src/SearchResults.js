import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem';
import SearchResultButtons from './SearchResultButtons';


export default class SearchResults extends Component {
  constructor(){
    super();
  }

  render() {
    let { results } = this.props;
    const listItems = results.map( ( item ) => (
	<SearchResultItem key={ `Arigato_${ Math.random() * (new Date()) }` } imageSrc={ item.images.original.url } />
    ) );

    return (
	<div className='container-search-results'>
	<p className="search-title"> Let the GIFS Begin: <b>{this.props.query}</b> </p>
	<div className='search-results-list'>
  { listItems }
  
  { results.length > 0 ? <SearchResultButtons handleLoader={ this.props.handleLoader } /> : null }
      </div>
	</div>
    )
  }
}
