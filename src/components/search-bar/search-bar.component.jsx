import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as SearchIcon } from '../../assets/svg-header/magnifying-glass.svg';

import { setSearchField } from '../../redux/search/search.actions';

import './search-bar.styles.scss';

const SearchBar = ({ placeholder, searchField, onSearchChange }) => (
  <div className='search-bar-container'>
    <input 
      type='text' 
      className='search-bar'
      placeholder={placeholder}
      onChange={(event) => onSearchChange(event)} />
    <button type='submit'> 
      <SearchIcon className='search-button' />
    </button>
  </div>
);

// const mapStateToProps = state => ({
//   searchField: state.search.searchField
// });

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value))
});

export default connect(null, mapDispatchToProps)(SearchBar);