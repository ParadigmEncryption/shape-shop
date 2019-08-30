import React from 'react';
import { connect } from 'react-redux';

import { svgIconPaths } from '../../utils/svg-icon-paths';

import SvgDisplay from '../svg-display/svg-display.component';

import { setSearchField, clearSearchField } from '../../redux/search/search.actions';

import './search-bar.styles.scss';

const SearchBar = ({ placeholder, onSearchChange, clearSearchField, searchField }) => (
  <div className='search-bar-container'>
    <div className='text-bar'>
      <input 
        type='text'
        className='search-bar'
        value={searchField}
        placeholder={placeholder}
        onChange={ event => onSearchChange(event) } />
      <span 
        className={searchField ? 'clear-button' : 'clear-button hidden' }
        onClick={() => clearSearchField()}
      >
        &#10006;
      </span>
    </div>
    <div className='search-icon'>
      <SvgDisplay svg={svgIconPaths.searchIcon} />
    </div>
      
 
  </div>
);

const mapStateToProps = state => ({
  searchField: state.search.searchField
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  clearSearchField: searchField => dispatch(clearSearchField(searchField))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);