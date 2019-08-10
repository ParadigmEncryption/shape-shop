import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as SearchIcon } from '../../assets/svg-header/magnifying-glass.svg';

import { setSearchField, clearSearchField } from '../../redux/search/search.actions';

import './search-bar.styles.scss';

const SearchBar = ({ placeholder, onSearchChange, clearSearchField, searchField }) => (
  <div className='search-bar-container'>
    <input 
      type='text'
      className='search-bar'
      autoFocus
      value={searchField}
      placeholder={placeholder}
      onChange={ event => onSearchChange(event) } />
    <span 
      className={searchField ? 'clear-button' : 'clear-button hidden' }
      onClick={() => clearSearchField()}
    >
      &#10006;
    </span>
    <button type='submit'> 
      <SearchIcon className='search-icon' />
    </button>
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