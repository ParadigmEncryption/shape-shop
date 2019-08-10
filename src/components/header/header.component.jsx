import React from 'react';
// import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/svg-header/logo.svg';
import { ReactComponent as Cart } from '../../assets/svg-header/shopping-cart.svg';

import SearchBar from '../search-bar/search-bar.component';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Logo className='logo' />
    </div>
    <div className='options-container'>
        <SearchBar placeholder='Search Shapes' />
      <div className='sign-in'>
        SIGN IN
      </div>
      <div className='option'>
        <Cart className='shopping-cart' />
      </div>
    </div>
  </div>
);

export default (Header);