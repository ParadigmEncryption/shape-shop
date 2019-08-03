import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/svg-header/magnifying-glass.svg';

import './search-bar.styles.scss';

const SearchBar = ({ placeholder, handleChange }) => (
  <div className='search-bar-container'>
    <input 
      type='text' 
      className='search-bar'
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
    <button type='submit' onSubmit={console.log('submitted')}>
      <SearchIcon className='search-button' />
    </button>
  </div>
);

export default SearchBar;